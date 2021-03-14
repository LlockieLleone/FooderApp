import request from '@/utils/request'

//Send data
export function getStoreById(data){
    return request({
        url:'/get_store_id', 
        data
    })
}

//get item list
export function getProdById(data){
    return request({
        url:'/get_nav', 
        data
    })
}