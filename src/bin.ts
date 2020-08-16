#!/usr/bin/env node
import commander from "commander";
import { getConfig, writeConfig } from "./";

commander.option(
  "-s --stage [stage]",
  "Stage for the stack we are examining (default from monorepo root)"
);
commander.option(
  "-r --region [region]",
  "Region for the stack (default us-east-1)"
);
commander.parse(process.argv);
export { commander };
const { region, stage, appSyncPath } = commander;
if (!commander.isDocumenting)
  (async () => {
    try {
      writeConfig(await getConfig({ region, stage, appsyncPath: appSyncPath }));
    } catch (e) {
      console.error("Could not generate appsync config:", e);
    }
  })();
