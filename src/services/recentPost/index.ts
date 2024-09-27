import envConfig from "@/src/config/envConfig";
import { delay } from "@/src/utils/delay";

export const getRecentPost = async()=>{
    const response = await fetch(`${envConfig.baseApi}/items?sortBy=createdAt&limit=9`)
    const data = await response.json();
    await delay(3000)
    return data;
}