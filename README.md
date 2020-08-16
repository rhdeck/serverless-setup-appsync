
<a name="readmemd"></a>

# serverless-setup-appsync


<a name="__climd"></a>

# Usage
```bash
npx @raydeck/serverless-setup-appsync [options]
```
# Options
* -s --stage [stage] Stage for the stack we are examining (default from monorepo root) 
* -r --region [region] Region for the stack (default us-east-1) 

<a name="_librarymd"></a>


# @raydeck/serverless-setup-appsync - v1.0.0

## Index

### Variables

* [appSyncPath](#appsyncpath)
* [region](#region)
* [stage](#stage)

### Functions

* [getConfig](#getconfig)
* [writeConfig](#writeconfig)

## Variables

###  appSyncPath

• **appSyncPath**: *any*

*Defined in [bin.ts:15](https://github.com/rhdeck/serverless-setup-appsync/blob/3d5b5d2/src/bin.ts#L15)*

___

###  region

• **region**: *any*

*Defined in [bin.ts:15](https://github.com/rhdeck/serverless-setup-appsync/blob/3d5b5d2/src/bin.ts#L15)*

___

###  stage

• **stage**: *any*

*Defined in [bin.ts:15](https://github.com/rhdeck/serverless-setup-appsync/blob/3d5b5d2/src/bin.ts#L15)*

## Functions

###  getConfig

▸ **getConfig**(`__namedParameters`: object): *Promise‹object›*

*Defined in [index.ts:7](https://github.com/rhdeck/serverless-setup-appsync/blob/3d5b5d2/src/index.ts#L7)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`appsyncPath` | undefined &#124; string | - |
`path` | string | process.cwd() |
`region` | string | "us-east-1" |
`stage` | string | findStage() ?? "dev" |

**Returns:** *Promise‹object›*

___

###  writeConfig

▸ **writeConfig**(`config`: PromiseValue‹ReturnType‹typeof getConfig››, `path`: string): *void*

*Defined in [index.ts:33](https://github.com/rhdeck/serverless-setup-appsync/blob/3d5b5d2/src/index.ts#L33)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`config` | PromiseValue‹ReturnType‹typeof getConfig›› | - |
`path` | string | join(process.cwd(), "config") |

**Returns:** *void*
