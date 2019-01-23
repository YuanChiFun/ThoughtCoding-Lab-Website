<template>
    <div id="blog_back">
        <div id="components_top">
            <img :src="Src">
            <div class="components_top">
            <p id="components_top_title">实验室博客</p>
            <p id="signal">—— 愿历尽千帆，归来仍少年 ——</p>
            </div>
        </div>
        <div id="blog_content">
            <div id="blog_left">
                <Menu :theme="theme" width='13vw' id="Menu_left" :active-name="actName" @on-select="changeSelect">
                    <MenuGroup title="选择方向">
                        <MenuItem name="all"><Icon type="logo-buffer"/>全部</MenuItem>
                        <MenuItem name="6"><Icon type="md-analytics" />嵌入式({{dir_count[6]}})</MenuItem>
                        <MenuItem name="3"><Icon type="logo-android" />安卓({{dir_count[3]}})</MenuItem>
                        <MenuItem name="4"><Icon type="logo-html5" />前端({{dir_count[4]}})</MenuItem>
                        <MenuItem name="1"><Icon type="md-swap" />后台({{dir_count[1]}})</MenuItem>
                        <MenuItem name="5"><Icon type="md-person" />产品({{dir_count[5]}})</MenuItem>
                    </MenuGroup>      
                </Menu>
            </div>
          <!--  <div id="blog_texts">-->
                <div id="blog_container">
                    <div id="noBlog" v-if="!newsTotal">
                        <p>还没有博客发布,去看看别的吧</p>
                        <img :src="noBlog" id="no_blog_picture">
                    </div>
                    <div id="bolg_text" v-for="item in text" :key='item.id'  >
                        
                        <Card>
                            <div slot="title" id="blogs_title">
                                <span id="blogs_text_title" @click="jumpToBlogMore(item)">
                                    {{item.title}}
                                </span>
                                
                            </div>
                            <div id="blog_intro"> 
                                <p>{{item.intro}}</p>
                            </div>
                            <div id="blog-bottom">
                                <div id="blog_bottom_center">
                                <div id="blogs_author">
                                    by:<a id="blog_author" @click="jumpToPersonal(item)">
                                    {{item.person.name}}
                                    </a>
                                    Time:{{item.addTime | timeReverse}}</div>
                              
                                <div id="blog_tag">
                                    <Icon type="md-pricetag" size='10'/>{{item.tags}}
                                </div>
                                </div>
                            </div>   
                        </Card>
                    </div>
                    <div id="blogs_pages" v-if="newsTotal">
                        <div id="blogs_center">
                            <Page ref="pages" :total="newsTotal"  @on-change="changePage"/>
                        </div>
                    </div>
                </div>
         <!--   </div> -->
            <div id="blog_tags"> 
                <div id="blog_serach">
                    <Input search placeholder="Search something..." icon="ios-search-outline" type="text" id="search_input" v-model="searchData" @on-click="postSearch" @on-enter="postSearch"/>
                </div>    
                <div id="all_tags">
                    <Button type="info" ghost v-for="item in allTags" :key="item.id" @click="selectTag(item)" id="allTags">{{item.name}}({{item.count}})</Button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            noBlog:require('@/assets/noBlog.jpg'),
            pages:1,
            actName:'all',
            dir_count:[],
            theme:'light',
            newsTotal:0,
            Src:require('@/assets/member_top.png'),
            searchData:'',
            count:{},
            allTags:[
            ],
            text:[
            ],
            tagModule:0,
            searchModule:0,
            dirModule:0,
            allModule:1
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
    methods:{
        getAllBlog(){
            this.$axios.get('/proxy/blogs/list?page='+this.pages+'&limit=10')
            .then(res=>{
            this.text = res.data.data;
            console.log(this.text);
            this.newsTotal = res.data.pages;
            for(var i =0;i<this.text.length;i++){
                let arr = [];
                let t;
                if(this.text[i].classifySet != null)
                {
                    for(var j = 0;j<this.text[i].classifySet.length;j++){
                        arr.push(this.text[i].classifySet[j].name);
                        t = arr.join(',');
                    }
                    this.text[i].tags =  t;
                }
            }
        })
        .catch(err=>{
            console.log(err);
        });
        },
        clickDirGetBlog(item){
            this.actName = item;
            if(item != 'all'){
            this.allModule = 1;
            this.dirModule = 0;
            this.searchModule = 0;
            this.tagModule = 0;
            this.$axios.post('/proxy/blogs/list?group='+item+'&page='+this.pages+'&limit=10')
            .then(res=>{
                this.text = res.data.data;
                this.newsTotal = res.data.pages;
                for(var i =0;i<this.text.length;i++){
                    let arr = [];
                    let t;
                    if(this.text[i].classifySet != null)
                    {
                        for(var j = 0;j<this.text[i].classifySet.length;j++){
                            arr.push(this.text[i].classifySet[j].name);
                            t = arr.join(',');
                        }
                        this.text[i].tags =  t;
                    }
            }
            });
            }
            else{
                this.allModule = 0;
                this.dirModule = 1;
                this.searchModule = 0;
                this.tagModule = 0;
                this.$axios.get('/proxy/blogs/list?page='+this.pages+'&limit=10')
                .then(res=>{
                this.text = res.data.data;
                this.newsTotal = res.data.pages;
                for(var i =0;i<this.text.length;i++){
                    let arr = [];
                    let t;
                    if(this.text[i].classifySet != null)
                    {
                        for(var j = 0;j<this.text[i].classifySet.length;j++){
                            arr.push(this.text[i].classifySet[j].name);
                            t = arr.join(',');
                        }
                        this.text[i].tags =  t;
                    }
            }
        })
        .catch(err=>{
            console.log(err);
        });
            }
        },
        clickTagGetBlog(item){
            this.allModule = 0;
            this.dirModule = 0;
            this.searchModule = 0;
            this.tagModule = 1;
            this.$axios.post('/proxy/blogs/list?classify='+item.id+'&page='+this.pages+'&limit=10')
            .then(res=>{
                this.text = res.data.data;
                this.newsTotal = res.data.pages;
                for(var i =0;i<this.text.length;i++){
                    let arr = [];
                    let t;
                    if(this.text[i].classifySet != null)
                    {
                        for(var j = 0;j<this.text[i].classifySet.length;j++){
                            arr.push(this.text[i].classifySet[j].name);
                            t = arr.join(',');
                        }
                        this.text[i].tags =  t;
                    }
            }
            });
        },
        searchGetBlog(){
            this.allModule = 0;
            this.dirModule = 0;
            this.searchModule = 1;
            this.tagModule = 0;
            this.$axios.post('/proxy/blogs/fuzzyQuery?keywork='+this.searchData+'&page='+this.pages+'&limit=10')
            .then(res=>{
                this.text = res.data.data;
                this.newsTotal = res.data.pages;
                for(var i =0;i<this.text.length;i++){
                    let arr = [];
                    let t;
                    if(this.text[i].classifySet != null)
                    {
                        for(var j = 0;j<this.text[i].classifySet.length;j++){
                            arr.push(this.text[i].classifySet[j].name);
                            t = arr.join(',');
                        }
                        this.text[i].tags =  t;
                    }
            }
            });
        },
        jumpToBlogMore(item){
            localStorage.setItem('blogsId',item.id);
            this.$router.push({
                 name:'blog_more',
            });
        },
        changeSelect(item){
            this.$refs['pages'].currentPage = 1;
            this.changePage(1);
            this.clickDirGetBlog(item);
        },

        selectTag(item){
            this.$refs['pages'].currentPage = 1;
            this.changePage(1);
            this.actName = 'all';
            this.clickTagGetBlog(item);
        },

        postSearch(){
            if(this.searchData.length != 0){
                this.actName = 'all';
                this.searchGetBlog();
            }
            else{
                this.actName = 'all';
                this.getAllBlog();
            }
        },
        changePage(pageNum){
            this.pages = pageNum;
            if(this.allModule===1){
                this.getAllBlog();
            }
            if(this.tagModule===1){
                this.selectTag();
            }
            if(this.dirModule===1){
                this.changeSelect();
            }
            if(this.searchModule===1){
                this.postSearch();
            }
            (function smoothscroll(){
                var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
                if (currentScroll > 0) {
                    window.requestAnimationFrame(smoothscroll);
                    window.scrollTo (0,currentScroll - (currentScroll/20));
                }
            })(); 
        },
        jumpToPersonal(item){
            localStorage.setItem('personId',item.person.id);
            this.$router.push({
                name:'personal_blog',
            })
        }
    },
    created(){
        this.getAllBlog();
        this.$axios.post('/proxy/blogs/numOfGroup',JSON.stringify({
                groupArry:[
                    1,3,4,5,6
                ]
            }),
            {
            headers:{
                'Content-Type':'application/json; charset=UTF-8'
            }
            },
            )
        .then(res=>{
            this.dir_count = res.data.data.map;
        })
        .catch(err=>{
            console.log(err);
        });

        this.$axios.get('/proxy/classify/listVisitor')
        .then(res=>{
            this.allTags = res.data.data;
            this.count = res.data.count.map;
            for (var i=0;i<this.allTags.length;i++){
                this.allTags[i].count = 0;
                for (let key in this.count){
                    if(parseInt(key) === parseInt(this.allTags[i].id)){
                        this.allTags[i].count = this.count[key];
                    }
                }
            }
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
#blog_back{
    background-color: #f5f5f5;
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
    /* font-size: 1rem; */
    font-size:1vw;
}
#blogs_pages{
    width: 100%;
    height: 3.25vw;
    background-color: white;
    position: relative;
    margin-top: 1.3vw;
}
#blogs_center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#components_top{
    width:98.93vw;
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
    /* font-size: 0.81rem; */
    font-size:0.81vw;
    color: white;
    text-align: center;
}
#components_top_title{
    /* font-size: 1.5rem; */
    font-size:1.5vw;
    color: white;
    letter-spacing: 5px;
    text-align: center;
}
#blog_content{
    padding-top: 4.9vw;
    display: flex;
}
#Menu_left{
    position: relative;
    margin-left: 3.25vw;
    z-index: 1;
}
#blog_container{
    width: 65vw;
    border: 2px solid #e0e0e0;
    padding: 1.3vw 3.25vw;
    background-color: white;
    margin-left: 1vw;
    min-height: 60vh;
    position: relative;
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
    #blog_tag{
        margin-top: 0.3vw;
    }
}
#blog_intro{
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

#blog_author{
    font-size: 0.81rem;
    margin-right: 2vw;
}
#blog_bottom_center{
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#blog_right{
    width: 26.5vw;
    padding: 5px;
}
#blog_tag{
    margin-left: 2vw;
    text-align: left;
    width: 6.5vw;
    height: 1.3vw;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: normal;
    font-size: 10px;
    white-space: nowrap;
    color: #848484;
    
}
#blog_tags{
    width: 13vw;
    margin-left: 1vw;
}
#blog_serach{
    width: 13vw;
    cursor: pointer;
}
#all_tags{
    width: 13vw;
    display: flex;
    margin-top: 2vw;
    overflow: hidden;
    flex-wrap: wrap;
    background-color: white;
    border-radius: 5px;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
    padding-top: 0vw;
    padding-bottom: 0.65vw;
}
#allTags{
    margin-left: 0.3vw;
    margin-top: 0.65vw;
}
</style>
