<template>
    <div>
    <Carousel autoplay v-model="carouselValue" loop :autoplay-speed="speed" id="carousel" arrow="never" dots="none">
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/ln-android1.jpg"></div>
        </CarouselItem>
        <!-- <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/ln-android2.jpg"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/ln-android3.jpg"></div> 
        </CarouselItem>-->
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/backstage.jpg"></div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel"><img src="@/assets/product.jpg"></div>
        </CarouselItem>
    </Carousel> 
    <div id="about">
        <div id="about_us">
        <img src="@/assets/ln-android1.jpg"  id="lab_photo">
        <div id="about_word">
            <h3 id="lab_introduce">实验室简介</h3>
            <p id="about_us_word">ABOUT US</p>
            <div >
                <p id="about_describe">{{lab_describe}}</p>
            </div>
        </div>
        </div>
    </div>
    <div id="project">
        <h3 id="title">资讯中心</h3>
        <p id="case">—— PROJECT ——</p>

        <div id="case_flex">
            <div id="project1" @click="jumpToNewAll(item)" v-for="item in news" :key="item.id">
                <img :src="item.photoUri">
                <p id="Case_name">{{item.title}}</p>
                <p id="Case_introduce">{{item.intro.substring(0,100) + "..."}}</p>
            </div>
        </div>
    </div>
    <div id="direction">
        <h3 id="title">学习方向</h3>
        <p id="direction_english">—— DIRECTION ——</p>
        <div id="allDirection">
            <div id="embed" @click="jumpToEmbed">
                <div id="divider" >
                <img src="@/assets/ambed-cpu.png">
                <p id="dir-name">嵌入式 embed</p>
                </div>
                <p id="introduce">嵌入式是以应用为中心、以计算机技术为基础,对功能、可靠性、成本、体积、功耗严格要求的专用计算机系统</p>
            </div>
            <div id="andriod" @click="jumpToAndriod">
                <div id="divider">
                <img src="@/assets/andriod-robort.png">
                <p id="dir-name">安卓 andriod</p>
                </div>
                <p id="introduce">Android拥有功能强大的API，出色的文档，茁壮成长的开发人员社区，而且不需要为开发或发布支付费用</p>
            </div>
            <div id="web" @click="jumpToWeb">
                <div id="divider">
                <img src="@/assets/web-ie.png">
                <p id="dir-name">前端 web</p>
                </div>
                <p id="introduce">前端开发是创建web页面或app等前端界面呈献给用户的过程</p>
            </div>
            <div id="backstage" @click="jumpToServer">
                <div id="divider">
                <img src="@/assets/java.png">
                <p id="dir-name">后台 server</p>
                </div>
                <p id="introduce">后台需要存储和检索数据，需要遵循业务逻辑和规则，并且需要对结果进行预测</p>
            </div>
            <div id="product" @click="jumpToPM">
                <div id="divider">
                <img src="@/assets/product-manager.png">
                <p id="dir-name">产品经理 product manager</p>
                </div>
                <p id="introduce">负责整个产品生命周期，一个产品从无到有，再到上线的整个过程涵盖调研、需求、设计、 开发、测试、运营和市场等环节，产品经理都需要跟进和负责
                </p>
            </div>
        </div>
    </div>   
    <div id="graduate">
            <h3 id="graduate_title">优秀毕业生</h3>
            <p id="graduate_English">—— GRADUATE ——</p>
            <div id="graduate_team">
            <div id="graduator" v-for="item in graduate" :key="item.id">
                <div id="graduate_img_height">
                    <img :src="item.photoUri" id="graduate_img_width">          
                </div> 
                <p id="graduate_name">{{item.personModel.name}}</p>
                <p id="graduate_company">{{item.employment}}</p>
                <p id="graduate_say">{{"20" + item.personModel.grade + "级"}}</p>
            </div>
        </div>
    </div>
    <div id="news">
        <h3 id="news_title">项目</h3>
        <p id="news_English">—— NEWS ——</p>
        <div id="new" v-for="item in Case" :key="item.id">
            <p id="new_data">{{item.addTime | timeReverse}}</p>
            <div id="new_title" @click="jumpToCaseMore(item)">{{item.title}}</div>                   
            <p id="new_content">{{item.intro.substring(0, 100) + "..."}}</p>
        </div>
    </div>
    <BackTop></BackTop>
    </div>
</template>
<script>
export default {    
     data(){
         return{
             carouselValue:0,
            speed:3000,
            case_name:'项目名称',
            lab_describe:'如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移如何在缩小屏幕宽度的时候让导航栏不忘下移',
            title:'Hello World!',  
            news:[],
            Case:[],
            graduate:[],
         }
         
     },
     filters: {
        timeReverse: function(dataStr) {
            return dataStr.split('').splice(0, 10).join('');
        }
    },
     created(){
        this.$axios.get('/proxy/notice/listNewsOfficial?page=1&limit=3')
        .then(res=>{
            // if()

            this.news = res.data.data;
            // console.log('AAA:'+this.news[0].intro)
        })
        .catch(err=>{
            console.log(err);
        });
        this.$axios.get('/proxy/notice/listProjectOfficial?limit=4')
        .then(res=>{
            this.Case = res.data.data;
        })
        .catch(err=>{
            console.log(err);
        });
        this.$axios.get('/proxy/graduate/list?limit=4')
        .then(res=>{
            this.graduate = res.data.data;
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        });
     },
     methods:{
         jumpToNewAll(item){
             this.$router.push({
                name:'newAll'
            });
            localStorage.setItem('newId',item.id);
         },
         jumpToCaseMore(item){
            localStorage.setItem('caseId',item.id);
            this.$router.push({
                name:'caseAll',
            })
        },
        jumpToEmbed(){
            this.$router.push({
                 name:'embed'
             })
        },
        jumpToWeb(){
            this.$router.push({
                 name:'web'
             })

        },
        jumpToPM(){
            this.$router.push({
                 name:'product'
             })

        },
        jumpToServer(){
            this.$router.push({
                 name:'backstage'
             })

        },
        jumpToAndriod(){
            this.$router.push({
                 name:'andriod'
             })

        },

     }
}
</script>
<style>
*{
    margin: 0px;
    padding: 0px;
}
#carousel img{
    /* margin-top: 60px; */
    margin-top: 60px;
    width:100vw;
    height: 31.6vw;
    clear: both;
}
#direction{
    width: 98.93vw;
    height: 30.2vw;
}
#title{
    /* font-size: 1.5rem; */
    font-size: 1.5vw;
    padding-top: 3.9vw;
    text-align: center;
}
#direction_english{
    text-align: center;
    font-size:0.81vw;
    color: #848484;
}
#allDirection{
    display: flex;
}
#embed,#andriod,#web,#backstage,#product{
    width: 15.3vw;
    height: 14.2vw;
    margin-left: 3.9vw;
    margin-top: 3.3vw;
    cursor: pointer;
}


#direction img{
    width: 4.9vw;
    height: 4.9vw;
    margin-left: 5.2vw;
}
#dir-name{
    color:#848484;
    /* font-size: 1rem;  */
    font-size:1vw;
    margin-top: 0.65vw;
}
#divider{
    border-bottom: 0.07vw solid #e0e0e0;
    height: 8.1vw;
 }

 #divider:hover{
     border-bottom: 0.1vw solid black;
 }
 /*#divider:hover{
    border-bottom: 1px solid black;
} */
#introduce{
    margin-top: 0.65vw;
    color: #848484;
    font-size:0.81vw;  
    line-height:1.3vw;
    overflow: hidden;
}
#project{
    width: 98.93vw;
    height: 41.8vw;
    background-color: #f3f3f3;
}
#project h3{
    /* font-size: 1.5rem; */
    font-size: 1.5vw;
    text-align: center;
    color: #444;
    padding-top: 3.9vw;
}
#case{
    /* font-size: 0.81rem; */
    font-size: 0.81vw;
    text-align: center;
    color: #848484;
    margin-bottom: 1vw;
}

#case_flex{
    display: flex;
    padding: 0 5.85vw;
}
#project1{
    width: 21.45vw;
    /* height: 22.75vw; */
    padding-bottom:0.5vw;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;
    margin-left: 5.85vw;
}
 #project1:hover{
    border-bottom: 0.1vw solid black;
}
#project img{
    width: 21.45vw;
    height: 15.93vw;
}
#Case_name{
    /* font-size: 1rem; */
    font-size: 1.3vw;
    color: #848484;
    padding-top: 1.3vw;
}
#Case_introduce{
    /* -------- */
    height: 5vw;
    text-indent:1.62vw;
    /* ------------- */
   /* max-width: 36vw;
    max-height: 1.62rem;*/
    text-overflow: ellipsis;
    font-size: 0.81vw;
    color: #848484;
    padding-top: 0.33vw;
    white-space: wrap;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;

}
#about{
    width: 98.93vw;
    height: 22.4vw;

}
#lab_photo{
    float: left;
    width: 22.75vw;
    height: 16.5vw;
    margin-left: 13vw;
}
#about_us{
    width: 98.93vw;
    height: 17.9vw;
    margin: 4.9vw 0px;
}
#about_word{
    float: left;
    width: 47.45vw;
    height: 17.8vw;
    margin-left: 3vw;
}
#lab_introduce{
    /* font-size: 1.5rem; */
    font-size: 1.5vw;
    text-align: left;
    color: #444;
}
#about_us_word{
    /* font-size: 0.81rem; */
    font-size: 0.9vw;
    color: #848484;
    margin-bottom: 0.65vw;
}
#about_describe{
    width: 47.45vw;
    height: 12vw;
     /* ------------- */
    text-indent:2vw;
    /* ------------ */
    font-size:1vw;
    margin-top: 1.95vw;
    color: #848484;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
}
#graduate{
    width: 98.93vw;
    height: 40vw;
    background-color: #181818;
}
#graduate_title{
    /* font-size: 1.5rem; */
    font-size: 1.5vw;
    text-align: center;
    color: #eeeeee;
    padding-top:3.9vw;
}
#graduate_English{
    /* font-size: 0.81rem; */
    font-size: 0.81vw;
    text-align: center;
    color: #eeeeee;
    margin-bottom: 1vw;
}
#graduate_team{
    width: 84.5vw;
    height: 30vw;
    margin: 0vw 10vw 0vw 10.4vw;
    padding: 2.7vw 0vw;
    display: flex;
}
#graduate_img_height{
    height:16vw;
    overflow:hidden;
}
#graduate_img_width{
    width: 100%;
}
#graduator{
    width: 15vw;
    background-color:white;
    margin-left: 3.95vw;
}
#graduate_name{
    /* font-size: 1.25rem; */
    font-size: 1.25vw;
    color: #222222;
    text-align:center;
    letter-spacing:0.62vw;
}
#graduate_company{
    font-size: 1vw;
    text-align:center;
    /* font-size: 0.875rem; */
    color: #a5a5a5;
    /* margin-left: 0.71vw; */
    letter-spacing:0.13vw;
    margin-top: 1vw;
}
#graduate_say{
    font-size: 1vw;
    text-align:center;
    /* font-size: 0.81rem; */
    color: #848484;
    /* margin-left: 0.71vw; */
    letter-spacing:0.12vw;
}
#news{
    width: 98.93vw;
    height: 36.2vw;
    padding: 4.9vw 10vw;
    background-color: #f5f5f5;
}
#news_title{
    /* font-size: 1.5rem; */
    font-size: 1.5vw;
    text-align: center;
    color: #444;
}
#news_English{
    /* font-size: 0.81rem; */
    font-size: 0.81vw;
    text-align: center;
    color: #848484;
}

#new{
    float: left;
    width: 35vw;
    /* height: 6.5vw; */
    margin-left: 1.3vw;
    margin-top: 2vw;
    margin-right:3vw;
    margin-bottom:0.4vw;
}
#new_data{
    color: #999;
    /* font-size: 1rem; */
    font-size: 1vw;
    height: 1.95vw;
    font-weight: 300;
}
#new_title{
    /* font-size: 1rem; */
    font-size: 1.5vw;
    color: #595959;
    padding-bottom: 0.5vw;
    border-bottom: 1px solid #efefef;
    width: 36vw;
    cursor: pointer;
}
#new_title:hover{
    border-bottom: 1px solid black;
}
#new_content{
    margin-bottom: 0.32vw;
    max-width: 35vw;
    max-height: 1vm;
    overflow: hidden;
    /* font-size: 0.81rem; */
    font-size: 0.81vw;
    color: #848484;
    text-overflow: ellipsis;
    text-indent:1.62vw;
    /* white-space: nowrap; */
}
</style>

