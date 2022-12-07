const config = {
    CONFIG_NAME: 'Default Config',
    ENV: process.env.NODE_ENV,
    MAIN_APP_AUTHORITY: process.env.MAIN_APP_AUTHORITY || `${window.location.protocol}//${window.location.host}/api`,
    WEBSOCKET_POINT: process.env.WEBSOCKET_POINT || `wss://${window.location.host}/wsp`,
    SHOW_REDUX_DEV_TOOLS: false,
    UNAUTHORIZED_ENDPOINT: '/login',
    API_HOST: '',
    CDN_URL: '',
    FACES_URL: 'https://faces.frpgame.ru',
    LOCALES: ['en', 'ru']
};

export default config
