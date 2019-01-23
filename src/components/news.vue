<template>
    <div id="backcolor">
        <div id="components_top">
            <img :src="Src">
            <div class="components_top">
            <p id="components_top_title">实验室新闻</p>
            <p id="signal">—— 愿历尽千帆，归来仍少年 ——</p>
            </div>
        </div>
        <div id="news_content">
            <div id="allNewsBorder">
                <div id="new_center">
                    <!--<div id="noBlog" v-if="!newsTotal">
                            <p>还没有新闻发布,去看看别的吧</p>
                            <img :src="noBlog" id="no_blog_picture">
                    </div>-->
                    <div id="new_BI" v-for="item in news" :key="item.id" @click="jumpToNewAll(item)">
                        <img :src="item.photoUri" id="new_picture">
                        <div id="new_word">
                            <div id="new_title">{{item.title}}</div>
                            <div id="new_article">{{item.intro}}</div>
                            <p id="new_time">Time: {{item.addTime | timeReverse}}</p>
                        </div>
                    </div>
                    <div id="news_pages" v-if="newsTotal">
                        <div id="news_center">
                            <Page :total="newsTotal"  @on-change="changePage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            Src:require('@/assets/member_top.png'),
            news:[
            ],
            newsTotal:0,
            noBlog:require('@/assets/noBlog.jpg'),
        }
    },
    filters: {
        timeReverse: function(dataStr) {
            return dataStr.split('').splice(0, 10).join('');
        }
    },
    methods:{
        jumpToNewAll(item){
            this.$router.push({
                name:'newAll'
            });
            localStorage.setItem('newId',item.id);
        },
        changePage(pageNum){
            this.$axios.get('/proxy/notice/listNewsOfficial?page='+pageNum+'&limit=10' )
        .then(res=>{
            this.newsTotal = res.data.data.length;
            this.news = res.data.data;
        })
        .catch(err=>{
            console.log(err);
        });
        },
    },
    mounted(){
        this.$store.commit('changeMenu','news');
    },
    created(){
        this.$axios.get('/proxy/notice/listNewsOfficial?page=1&limit=10')
        .then(res=>{
            this.newsTotal = res.data.data.length;
            this.news = res.data.data;
        })
        .catch(err=>{
            console.log(err);
        });
    }
}
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
}
#no_blog_picture{
    width: 6.5vw;
    height: 6.5vw;
    margin-left: 2.5vw;
}
#noBlog{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    font-size: 1rem;
}
#components_top{
    width: 98.93vw;
    padding-top: 60px;
    position: relative;
}
#components_top img{
    width: 98.93vw;
    height: 10.4vw;
}
.components_top{
    text-align: center;
    padding-top: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 2;
}
#components_top #signal{
    font-size: 0.81rem;
    color: white;
    text-align: center;
}
#components_top_title{
    font-size: 1.5rem;
    color: white;
    letter-spacing: 0.32vw;
    text-align: center;
}
#news_content{
    display: flex;
    padding: 3.25vw 9.75vw;
}
#new_BI{
    width: 78vw;
    border-bottom: 1px solid #e0e0e0;
    height: 13vw;
    display: flex;
    background-color: white;
    cursor: pointer;
}
#backcolor{
    background-color: #f5f5f5;
    min-height: 100vh;
}
#new_picture{
    width: 16.25vw;
    height: 10.4vw;
    margin-top: 1.3vw;
    margin-left: 1.3vw;
}
#new_word{
    width: 58.5vw;
    height: 10.4vw;
    margin-top: 1.3vw;
    margin-left: 1.3vw;
}
#new_center{
    width: 78vw;
    position: relative;
    background-color: white;
    min-height: 70vh;
}
#new_title{
    width: 54vw;
    height: 1.8vw;
    margin-top: 0.32vw;
    font-size: 1.3rem;
    padding-left: 0.32vw;
}
#new_article{
    width: 54vw;
    height: 6.5vw;
    margin-top: 0.32vw;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    color: #848484;
    text-indent: 32px;
    padding: 0px 0.32vw;
    max-height:100px;
}
#allNewsBorder{
    box-shadow: 0px 0px 0.32vw 0.13vw #CCCCCC;
}
#new_time{
    width: 54vw;
    height: 1.3vw;
    text-align: right;
    padding: 0px 0.65vw;
}
#news_pages{
    width: 78vw;
    height: 3.25vw;
    background-color: white;
    position: relative;
}
#news_center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>

