import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '3f21934e755a4583a49cf37fa4b4e810'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '3c7b4b40170945a5918766329445a635'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'ddddcffcdf47493db71b9fd8733d9e28'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'beed2636fdef40c4ae2d64895b6337ef'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'babcb5b0bed14e569654d20d42168973'
                    }
                }
            }
        }
    }
}
