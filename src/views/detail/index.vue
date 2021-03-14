<template>
    <div>
        <seller-header :seller="seller"></seller-header>
        <van-tabs v-model="active" sticky animated color="#ffda41">
            <van-tab title="Manu">
                <order></order>
            </van-tab>
            <van-tab title="Reviews">content2</van-tab>
            <van-tab title="Description">content3</van-tab>
        </van-tabs>
   </div>
</template>

<script>

import {getStoreById} from '@/api/detail.js'
import sellerHeader from "./seller-header"
import order from "./order"

    export default {
        data(){
            return{
                seller:[],
                active:0
            }
        },
        components:{
            sellerHeader,
            order
        },
        methods:{
            getStoreMsg(){
                getStoreById({id: this.$route.query.id}).then(res => {
                    this.seller = res.data
                })
            }
        },
        created(){
                this.getStoreMsg()
        }
    }
</script>

<style lang="scss" scoped>

</style>