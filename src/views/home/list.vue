<template>
    <div>
        <!-- use vant component van-list to allow page auto increase when scroll to bottom-->
        <!-- @load is the same with created() method-->
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="No more restaurant"
            @load="getData"
        >
        <ul class="list-container">
            <li class="restaurant-list" v-for="item in list" :key="item.id" @click="goDetail(item.id )">
                <div class="img-box">
                    <img :src="item.img" alt/>
                </div>
                <div class="info-box">
                    <div class="title">{{item.name}}</div>
                    <div class="rate-box">
                        <div>
                            <star :score="item.score"></star>
                            <span class="rate">Score {{item.score}}</span>
                            <span>MonthlySales {{item.num}}</span>
                        </div>
                        <div>
                            <span>{{item.minute}} Minute</span>
                            <span class="left-line">{{item.distance}}</span>
                        </div>
                    </div>
                    <div class="distribution-box">
                        <span>Minimum {{item.price}}</span>
                        <span class="left-line">Deliver Fee {{item.fee}}</span>
                        <span class="left-line">Per Capita {{item.per_capita}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </van-list>
    </div>
</template>

<script>
    import star from './../../components/star'
    import {getStore} from '@/api/home'
    export default {
        data(){
            return{
                current:0,
                size:10,
                list:[],
                loading:false,
                finished:false,
                total:0
            }
        },
        components:{
            star
        },
        methods:{
            //get restaurant list
            getData(){
                getStore({
                    current:this.current,
                    size:this.size
                }).then(res=>{
                    //concat list after current restaurant list
                    this.list = this.list.concat(res.data.list);
                    this.loading = false;
                    this.current++;
                    this.total = res.data.total;
                    if(this.list.length >= this.total){
                        this.finished = true;
                    }
                })
            },
            goDetail(id){
                this.$router.push({path:'/detail',query:{id}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-container{
        padding:0 0.2rem;
        .restaurant-list{
            margin:0.2rem 0 0.5rem 0;
            display:flex;
            .img-box{
                width:1.52rem;
                height:1.14rem;
                margin-right: 0.16rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .info-box{
                flex:1;
                .title{
                    font-size:0.32rem;
                    color:#333;
                    line-height:1.4;
                    font-weight: 600;
                }
                .rate-box, .distribution-box{
                    display: flex;
                    color: #333;
                    line-height: 1.4;
                    font-family: mtsi-font;
                    font-size:0.2rem;
                    .rate{
                        margin-right: 0.2rem;
                    }
                    .left-line::before{
                        content:"";
                        display:inline-block;
                        width:1px;
                        height:6px;
                        background: rgb(134, 125, 125);
                        margin:0 3px;
                    }
                } 
                .rate-box{
                    justify-content: space-between;
                }
            }   
        }
    }
</style>