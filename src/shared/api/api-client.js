import { generalSettings } from '../constants'

export const API = {
    get: async (url, param) => {
        const res = await fetch(`${generalSettings.api}/${url}`)

        const resultData = res.json()

        const resultStatus = res.status

        return {
            resultData,
            resultStatus
        }
    } 
}
