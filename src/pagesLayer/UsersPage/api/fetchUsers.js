import { $getRequest } from "../../../shared/api"

export const fetchUsers = async () => {
    try {
        const res = await $getRequest('users')
        if (res.resultStatus !== 200) console.log('error');

        return res.resultData

    } catch (e) {
        console.log(e)
    }
}