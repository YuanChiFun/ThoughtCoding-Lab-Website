<template>
    <div id="person_personal_content">
        <div id="personpersonal_top" :style="top_back">
            <div id="personpersonal_top_content">
                <div id="personpersonal_top_content_left">
                    <div id="personpersonal_avator">
                        <img :src="person.photoUri">
                    </div>
                </div>
                <div id="personpersonal_message">
                    <p id="person_message">{{person.name}}</p>
                    <p id="person_message">{{person.className}}</p>
                    <p id="person_message">{{groupName}}</p>
                </div>
            </div>
        </div>
        <div id="personal_texts">
                <div id="personal_container">
                    <div id="noBlog" v-if="!newsTotal">
                        <p>还没有博客发布,去看看别的吧</p>
                        <img :src="noBlog" id="no_personal_picture">
                    </div>
                    <div id="bolg_text" v-for="item in text" :key='item.id'  >
                        
                        <Card>
                            <div slot="title" id="blogs_title">
                                <span id="blogs_text_title" @click="jumpToBlogAll(item)">
                                    {{item.title}}
                                </span>
                                
                            </div>
                            <div id="personal_intro"> 
                                <p>{{item.intro}}</p>
                            </div>
                            <div id="blog-bottom">
                                <div id="personal_bottom_center">
                                <div id="blogs_author">
                                    by:<router-link :to="{name:'personal_blog'}" id="personal_author">
                                    {{item.person.name}}
                                    </router-link>
                                    Time:{{item.addTime | timeReverse}}</div>
                              
                                <div id="personal_tag">
                                    <Icon type="md-pricetag" size='10'/>{{item.tags}}
                                </div>
                                </div>
                            </div>   
                        </Card>
                    </div>
                    <div id="news_pages" v-if="newsTotal">
                        <div id="news_center">
                            <Page :total="newsTotal" @on-change="changePage"/>
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
            groupName:'',
            newsTotal:0,
            pages:1,
            text:[
            ],
            person:{
            },
            top_back:{
                backgroundImage:"url(" + require("@/assets/top5.jpg") + ") ",
                backgroundRepeat:"no-repeat",
                backgroundSize:"100vw 13vw",
            },
            noBlog:require('@/assets/noBlog.jpg'),
        }
    },
    filters: {
        timeReverse: function(dataStr) {
            return dataStr.split('').splice(0, 10).join('');
        }
    },
    mounted(){
        this.$store.commit('changeMenu','blog');
    },
    created(){
        this.$axios.get('/proxy/blogs/list?page='+this.pages+'&person='+localStorage.getItem('personId')+'&limit=10')
        .then(res=>{
            console.log(res.data.data);
            this.newsTotal = res.data.pages;
            this.text = res.data.data;
        })
        .catch(err=>{
            console.log(err);
        })
        this.$axios.get('/proxy/person/getInfoVisitor?id='+localStorage.getItem('personId'))
        .then(res=>{
            this.person = res.data.data;
            this.groupName = this.person.group.name;
        })
        .catch(err=>{
            console.log(err);
        })
    },

    methods:{
        changePage(pageNum){
            this.pages = pageNum;
            this.$axios.get('/proxy/blogs/list?page='+this.pages+'&person='+this.$route.query.id+'&limit=10')
            .then(res=>{
                this.newsTotal = res.data.pages;
                this.text = res.data.data;
            })
            .catch(err=>{
                console.log(err);
            })
        },
        jumpToBlogAll(item){
            localStorage.setItem('blogsId',item.id);
            this.$router.push({
                name:'blog_more'
            })
        }
    }
}
</script>
<style>
*{
    padding: 0px;
    margin: 0px;
}
#noBlog{
    position: absolute;
    left: 50%;
    transform: translate(-50%,0%);
}
#news_pages{
    width: 100%;
    height: 3.25vw;
    background-color: white;
    position: relative;
    margin-top: 1.3vw;
}
#news_center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#person_personal_content{
    padding-top: 60px;

}
#personpersonal_top{
    width:98.93vw;
    height: 13vw;
    position: relative;
}
#personpersonal_top_content{
    width: 13vw;
    height: 13vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-wrap: wrap;
    padding-top: 1.3vw
}
#personpersonal_avator{
    width: 6.5vw;
    height: 6.5vw;
    text-align: center;
    margin: 0 auto;
}
#personpersonal_avator img{
    width: 6.5vw;
    height: 6.5vw;
    border-radius: 50%;
}
#personpersonal_top_content_left{
    width: 13vw;
    height: 6.5vw;
    position: relative;
}
#personpersonal_message{
    width: 13vw;
    height: 5.2vw;
}
#person_message{
    text-align: center;
    font-size: 0.81rem;
    color: black;
    margin-top: 0.32vw;
}

#personal_container{
    width: 65vw;
    border: 2px solid #e0e0e0;
    padding: 1.3vw 3.25vw;
    background-color: white;
    margin-left: 1vw;
    min-height: 60vh;
    position: relative;
    margin-left: 17vw;
}
#blogs_title{
    text-align: left;
    font-size: 1.5rem;
    cursor: pointer;
    text-indent: 3rem;
}
#bolg_text{
     width: 58.5vw;
    height: 13vw; 
    /* width: 900px;
    height: 230px; */
  /*  border: 2px dotted #e0e0e0;*/
    text-align: center;
    margin-bottom: 1.3vw;
    padding: 0.65vw;
}
#bolg_text:hover #blogs_text_title{
    color: #515a6e;
}
/*
#bolg_text:hover{
    box-shadow: 0px 0px 5px 1px #CCCCCC;
}
*/
#blogs_text_title {
    size: 1vw;
    font-weight: bold;
    color: #2d8cf0;
}
@media screen and (max-width: 1200px) {
    #personal_tag{
        margin-top: 0.3vw;
    }
}
#personal_intro{
    display: -webkit-box;
    text-align: left;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}
#blog-bottom{
    margin-top: 0.5vw;
    padding:2px;
    height: 1.5vw;
    position: relative;
}
#personal_text_top{
    position: relative;
}

#personal_article{
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
#personal_author{
    font-size: 0.81rem;
    margin-right: 2vw;
}
#personal_time{
    text-align: left;
    margin-left: 4.55vw;
    display: flex;
    height: 1.3vw;
}
#personal_bottom_center{
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#no_personal_picture{
    width: 6.5vw;
    height: 6.5vw;
    margin-left: 2.5vw;
}
#noBlog{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    /* font-size: 1rem; */
    font-size:1vw;
}
</style>

