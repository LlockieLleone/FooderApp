import request from '@/utils/request'

//Send data
export function getCategory(data){
    return request({
        url:'/get_type', 
        data
        //data:data
        //(ES6 when attribute value and attribute name is the same, you can write it once)
    })
}

//getRestaurant
export function getStore(data){
    return request({
        url:'/get_store', 
        data
    })
}