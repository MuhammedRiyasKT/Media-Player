import commonAPI from "./CommonApi";
import SERVER_URL from "./ServiceUri";


//save video
//save video api call by Add.js

export const addVideo =async (video)=>{
    return await commonAPI("POST", `${SERVER_URL}/allVideos`, video)
}

//fetch video api call
export const getAllVideos =async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/allVideos`, "")
}

//api call deleting video call
export const deleteVideo =async (videoId)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/allVideos/${videoId}`, {})
}

//api call for save history
export const saveHistory =async (video)=>{
    return await commonAPI("POST", `${SERVER_URL}/history`, video)
}


//api call for get history
export const getAllHistory =async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/history`, "")
}

export const deleteHistory =async (videoId)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/history/${videoId}`, {})
}

//adding category

export const addCategory =async (categoryDetails)=>{
    return await commonAPI("POST", `${SERVER_URL}/allCategory`, categoryDetails)
}

//get category
export const getAllCategory =async ()=>{
    return await commonAPI("GET", `${SERVER_URL}/allCategory`, "")
}

//delete category 
export const deleteCategory =async (videoId)=>{
    return await commonAPI("DELETE", `${SERVER_URL}/allCategory/${videoId}`, {})
}


export const getSingleVideo=async(videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${videoId}`, "")
}

//api call for updating category
export const updateCategory = async(categoryId, categoryDetails)=>{
    return await commonAPI("PUT", `${SERVER_URL}/allCategory/${categoryId}`, categoryDetails)
}

//api call for geting single category

export const getSingleCategory = async(categoryId)=>{
    return await commonAPI("GET", `${SERVER_URL}/allCategory/${categoryId}`, "")
}




