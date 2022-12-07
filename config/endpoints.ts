import { getEnv } from './environments';

const apiURL = getEnv().MAIN_APP_AUTHORITY;
const adminURL = `${apiURL}/admin`

const routes = {
    // ////////////////////////// API ENDPOINTS ///////////////////////////////

    BASE_POINT: apiURL,

    /**
     * Path used to fetch basic informations about user and log user in
     */
    SESSION_ENDPOINT: `${apiURL}/user/session`,
    USER_ENDPOINT: `${apiURL}/user`,
    USER_UPDATE_PROFILE_ENDPOINT: `${apiURL}/user/profile`,
    USER_SETTINGS_ENDPOINT: `${apiURL}/user/settings`,

    /**
     * Path used to fetch forums
     */
    FORUMS_ENDPOINT: `${apiURL}/forums`,
    TOPICS_ENDPOINT: `${apiURL}/topics`,
    POSTS_ENDPOINT: `${apiURL}/posts`,
    FORUM_LAST_GROUP_ENDPOINT: `${apiURL}/last_group/forum`,

    AVATARS_ENDPOINT: `${apiURL}/user/avatars`,

    SIGN_UP: `${apiURL}/user/sign_up`,

    PROJECTS_ENDPOINT: `${apiURL}/projects`,
    REVIEWS_ENDPOINT: `${apiURL}/project/reviews`,
    SYSTEM_TAGS_ENDPOINT: `${apiURL}/project/tags/system`,
    POPULAR_TAGS_ENDPOINT: `${apiURL}/project/tags/popular`,

    SUGGESTIONS_ENDPOINT: `${apiURL}/suggestions`,

    NEWS_POINT: `${apiURL}/news`,

    PROJECT_COUNTER_POINT: `${apiURL}/project/counters`,
    BANNERS_ENDPOINT: `${apiURL}/project/banners`,
    BANNERS_LAST_GROUP_ENDPOINT: `${apiURL}/last_group/banners`,

    PAGES_ENDPOINT: `${apiURL}/article_pages`,
    BLOGS_ENDPOINT: `${apiURL}/blogs`,
    BLOG_POSTS_ENDPOINT: `${apiURL}/blog_posts`,
    BLOG_COMMENTS_ENDPOINT: `${apiURL}/blog_comments`,
    BLOG_COLLECTIONS_ENDPOINT: `${apiURL}/blog/collections`,
    BLOG_LAST_GROUP_ENDPOINT: `${apiURL}/last_group/blogs`,

    LIKES_ENDPOINT: `${apiURL}/likes`,

    COMM_ROOMS_ENDPOINT: `${apiURL}/comm/rooms`,
    COMM_MESSAGES_ENDPOINT: `${apiURL}/comm/messages`,
    NOTIFICATIONS_ENDPOINT: `${apiURL}/user/notifications`,

    SUBSCRIPTIONS_ENDPOINT: `${apiURL}/user/subscriptions`,

    TRANSACTIONS_ENDPOINT: `${apiURL}/billing/transactions`,


    ADMIN_IMAGES_ENDPOINT: `${adminURL}/images`,
    ADMIN_FORUMS_ENDPOINT: `${adminURL}/forums`,
    ADMIN_USERS_ENDPOINT: `${adminURL}/users`,
    ADMIN_NEWS_ENDPOINT: `${adminURL}/news`,
    ADMIN_PAGES_ENDPOINT: `${adminURL}/articles`,

    ADMIN_MAILINGS_ENDPOINT: `${adminURL}/mailings`
};

export default routes
