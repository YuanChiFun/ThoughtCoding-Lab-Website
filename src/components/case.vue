<template>
    <div id="back">
        <div id="components_top">
            <img :src="Src">
            <div class="components_top">
            <p id="components_top_title">实验室项目</p>
            <p id="signal">—— 愿历尽千帆，归来仍少年 ——</p>
            </div>
        </div>
        <div id='case_content'>
            <div id="case_container">
                    <div id="case_text" v-for="item in Case" :key='item.id'  >
                        <Card>
                            <div slot="title" id="cases_title">
                                <span id="cases_text_title" @click="jumpToCaseAll(item)">
                                    {{item.title}}
                                </span>        
                            </div>
                            <div id="case_intro"> 
                                <p>{{item.intro}}</p>
                            </div>
                            <div id="case-bottom">
                                <div id="case_bottom_center">
                                <div id="cases_author">
                                    Time:{{item.addTime | timeReverse}}</div>
                                </div>
                            </div>   
                        </Card>
                    </div>
                    <div id="case_news_pages" v-if="newsTotal">
                        <div id="case_news_center">
                            <Page :total="newsTotal" @on-change="changePage(pageNum)"/>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pages:1,
            Src:require('@/assets/member_top.png'),
            Case:[
            ],
            newsTotal:0,
        }
    },
    filters: {
        timeReverse: function(dataStr) {
            return dataStr.split('').splice(0, 10).join('');
        }
    },
    mounted(){
        this.$store.commit('changeMenu','case');
    },
    methods:{
        jumpToCaseAll(item){
            localStorage.setItem('caseId',item.id);
            this.$router.push({
                name:'caseAll',
            })
        },
        changePage(pageNum){
            this.pages= pageNum;
            this.$axios.get('/proxy/notice/listProjectOfficial?page='+this.pages+'&limit=10')
            .then(res=>{
            this.Case = res.data.data;
            this.newsTotal = res.data.data.length;
            })
            .catch(err=>{
                console.log(err);
            })
            },
    },
    created(){
        this.$axios.get('/proxy/notice/listProjectOfficial?page='+this.pages+'&limit=10')
        .then(res=>{
            this.Case = res.data.data;
            this.newsTotal = res.data.data.length;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style>
    * {
    margin: 0px;
    padding: 0px;
}
#back{
    background-color:#f5f5f5;
    background-size: 100% 100%;
    min-height: 100vh;
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
    letter-spacing: 5px;
    text-align: center;
}
#case_container{
    width: 65vw;
    border: 2px solid #e0e0e0;
    padding: 1.3vw 3.25vw;
    background-color: white;
    min-height: 60vh;
    position: relative;
    margin-left: 17.5vw;
}
#cases_title{
    font-size: 1.5rem;
    cursor: pointer;
    text-indent: 3rem;
}
#case_text{
     width: 58.5vw;
     height: 13vw; 
    /* width: 900px;
    height: 230px; */
  /*  border: 2px dotted #e0e0e0;*/
    text-align: center;
    margin-bottom: 1vw;
    padding: 0.65vw;
    cursor: pointer;
}
#case_text:hover #cases_text_title{
    color: #515a6e;
}
/*
#case_text:hover{
    box-shadow: 0px 0px 5px 1px #CCCCCC;
}
*/
#cases_text_title {
    size: 1vw;
    font-weight: bold;
    color: #2d8cf0;
}
@media screen and (max-width: 1200px) {
    #case_tag{
        margin-top: 0.3vw;
    }
}
#case_intro{
    display: -webkit-box;
    text-align: left;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
#case-bottom{
    margin-top: 0.5vw;
    padding:2px;
    height: 1.5vw;
    position: relative;
}
#case_text_top{
    position: relative;
}

#case_article{
    width:53vw;
    height: 7vw;
    margin-left: 3.25vw;
    word-break: break-all;
    word-wrap: break-word;
    max-height: 7vw;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    text-indent: 26px;
    font-size: 0.81rem;
    white-space: wrap;
}
#case_author{
    font-size: 0.81rem;
    margin-right: 2vw;
}
#case_time{
    text-align: left;
    margin-left: 4.55vw;
    display: flex;
    height: 1.3vw;
}
#case_bottom_center{
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#case_news_pages{
    width: 58.5vw;
    height: 3.25vw;
    background-color: white;
    position: relative;
}
#case_news_center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
