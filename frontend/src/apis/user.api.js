

import api from "../utils/axios.js"
export const getCurrentUser = async () => {
    try {
        const response = await api.get("/api/me")
        console.log(response.data);
        
        return response.data
    } catch (error) {
        
        return null
    }
}
