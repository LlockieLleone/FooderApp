import axios from 'axios';
const API_URL = "http://admin.gxxmglzx.com/tender/test"


//GET
//return Promise Object
//send request in Promise Object
export default function({url, data = { }}){
    return new Promise(resolve=>{
        axios.get(API_URL + url,{
            params: data
        }).then(res=>{
            if(res.data.errcode === 200){
                resolve(res.data)
            }else{
                console.log(res.errmsg)
            }
        }).catch(err=>{
            console.log(err)
        })
    })
}