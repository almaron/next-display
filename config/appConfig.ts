import { getEnv } from './environments';
import endpoints from './endpoints';
import * as uiConfig from './ui.config';
import getUuid from './uuid'

const config = {
    ...getEnv(),
    ...endpoints,
    uiConfig,
    getUuid,
};

export default config
