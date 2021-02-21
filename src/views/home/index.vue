<template>
    <div>
        <!-- header -->
        <van-sticky :offset-top="0"><!-- Vant Sticky-->
            <div class="header">
                <input type="text" class="search" placeholder="Please enter restaurant or food name">
            </div>
        </van-sticky>
        <category></category>
    </div>
</template>

<script>
import category from './category'
    export default {
        components:{
            category
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        background:#1c1b20;
        padding:0.2rem;
        .search{
            width:100%;
            border:none;
            height:0.6rem;
            border-radius:0.3rem;
            padding:0 0.2rem;
            box-sizing: border-box;
        }
    }
</style>