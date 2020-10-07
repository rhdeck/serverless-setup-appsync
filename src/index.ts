import { join } from "path";
import { existsSync, mkdirSync, writeFileSync, readFileSync } from "fs";
import { getAppSync, getResources } from "@raydeck/serverless-resources";
import { findRegion, findStage } from "@raydeck/serverless-stage";
import { getServerlessConfig } from "@raydeck/serverless-base";
import type { PromiseValue } from "type-fest";
export async function getConfig({
  region = findRegion() || process.env.AWS_REGION || "us-east-1",
  stage = findStage() ?? "dev",
  path = process.cwd(),
  appsyncPath,
}: {
  region: string;
  stage?: string;
  path?: string;
  appsyncPath?: string;
}) {
  if (!appsyncPath) {
    const { appsync } = getServerlessConfig(path);
    appsyncPath = appsync;
  }
  if (!appsyncPath)
    throw "Cannot proceed without a valid path to appsync in package.json or passed in arguments ";
  const r = await getResources({ region, stage, path: appsyncPath });
  const api = await getAppSync(r, { region, stage });
  if (!api) throw new Error("Could not get graphql api");
  return {
    graphqlEndpoint: api.uris!["GRAPHQL"],
    region,
    authenticationType: api.authenticationType,
  };
}
export function writeConfig(
  config: PromiseValue<ReturnType<typeof getConfig>>,
  path = join(process.cwd(), "config")
) {
  if (!existsSync(path)) mkdirSync(path);
  const fullPath = join(path, "appsync.json");
  writeFileSync(fullPath, JSON.stringify(config, null, 2));
}
