import defaultConfig from './default';

const config = {
    ...defaultConfig,
    CONFIG_NAME: 'Development Config',
    SHOW_REDUX_DEV_TOOLS: true,
    MAIN_APP_AUTHORITY: 'http://localhost:5000/api',
    WEBSOCKET_POINT: 'ws://localhost:5000/ws2',
    CDN_URL: 'http://localhost:5000/api',
};

export default config
