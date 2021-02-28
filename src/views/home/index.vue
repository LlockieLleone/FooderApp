<template>
    <div>
        <!-- header -->
        <van-sticky :offset-top="0"><!-- Vant Sticky-->
            <div class="header">
                <input type="text" class="search" placeholder="Please enter restaurant or food name">
            </div>
        </van-sticky>
        <category></category>
        <div class="title">Recent restaurant</div>
        <list></list>
    </div>
</template>

<script>
import category from './category'
import list from './list'
    export default {
        components:{
            category,
            list
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
    .title{
        font-size: 0.4rem;//(17px/50)
        font-weight: 800;
        text-align: center;
        height: 0.46rem;
        margin: 0.3rem 0 0.1rem;
    }
    .title::after,.title::before{
        content:"";
        height:1px;
        transform: scaleY(0.5);
        width:30px;
        display:inline-block;
        background: #666;
        vertical-align: middle;
    }
</style>