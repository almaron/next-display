import { v4 } from "uuid";

const getUuid = () => {
    let uuid = localStorage.getItem('user_uuid')
    if (!uuid) {
        uuid = v4()
        localStorage.setItem('user_uuid', uuid)
    }
    return uuid
}

export default getUuid
