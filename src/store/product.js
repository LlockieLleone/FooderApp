import {getProdById} from '@/api/detail'

const product = {
    namespaced:true,
    state: {
        productList:[]
    },
    getters:{

    },
    mutations: {
        saveProdList(state, arr){
            state.productList = [...arr];
        }
    },
    actions: {
        //Request product list
        getProdList({commit},id){
            getProdById({id}).then(res=>{
                console.log(res)
                commit('saveProdList',res.data.goods)
            })
        }
    }
}

export default product