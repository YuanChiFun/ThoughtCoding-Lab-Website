<template>
    <div id="body">
        <div id="components_top">
            <img :src="Src">
            <div class="components_top">
            <p id="components_top_title">嵌入式介绍</p>
            <p id="signal">—— 一花一世界，一叶一菩提 ——</p>
            </div>
        </div>   
        <div id="introduce">
            <div id="about_direction">
            <img src="@/assets/andriod.jpg"  id="direction_photo">
            <div id="about_word">
                <div id="direction_title">
                <p id="direction_introduce">嵌入式简介</p>
                <p id="about_direction_word">ABOUT EMBED</p>
                </div>
                <div id="about_describe">{{direction_describe}}</div>
            </div>
            </div>
        </div>
        <div id="member_content">
            <p id="title">嵌入式成员</p>
            <p id="title_English">EMBED MEMBER</p>
            <div id="person_content">
            <div v-for="item in member" :key="item.id" id="person" @click="inPersonBlog(item)">
                <img :src="item.photoUri" id="avator">
                <p id="person_name">{{item.name}}</p>
                <p id="person_grade">{{item.grade}}</p>
                <p id="person_class">{{item.className}}</p>
            </div>
            </div>
        </div>
        <BackTop></BackTop>
</div>  
</template> 
<script>
export default {
    data(){
        return{
            direction_describe:'',
            Src:require('@/assets/member_top.png'),
            member:[
            ]
        }
    },
    mounted(){
        this.$store.commit('changeMenu','embed');
    },
    methods:{
        inPersonBlog(item){
            localStorage.setItem('personId',item.id);
            this.$router.push({
                name:'personal_blog',
            })
        }
    },
    created(){
        this.$axios.get('/proxy/person/listVisitor?group=6')
        .then(res=>{
            this.member = res.data[0];
            for(let i = 0;i<this.member.length;i++){
                if(this.member[i].photoUri === ""){
                    this.member[i].photoUri = 'http://m.360buyimg.com/n12/g8/M02/12/14/rBEHZ1D2HZMIAAAAAAFzi3dqdqkAADpGgGVqN0AAXOj410.jpg%21q70.jpg';
                }
            }
        })
        .catch(err=>{
            console.log(err);
        })

        this.$axios.get('/proxy/group/get?id=6')
        .then(res=>{
            console.log(res)
            this.direction_describe = res.data.data.intro;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style scoped>
* {
    margin: 0px;
    padding: 0px;
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
#introduce{
    width: 98.93vw;
    height: 30vw;
    background-color: white;
    padding-top: 60px;
}
#direction_photo{
    float: left;
    width:22.75vw; 
    height: 16.5vw;
    margin-left: 13vw;
}
#about_word{
    float: left;
    width: 47.4vw;
    height: 17.8vw;
    margin-left: 1.95vw;
}
#direction_introduce{
    font-size: 1.5rem;
    text-align: left;
    color: #444;
    font-weight: 500;
}
#about_direction_word{
    font-size: 0.81rem;
    color: #848484;
    margin-bottom: 0.65vw;
}
#about_describe{
    margin: 60px 0px;
    width: 730px;
    height: 176px;
    font-size: 16px;
    margin-top: 30px;
    color: #848484;
    word-break: break-all;
    word-wrap: break-word;
    max-height: 176px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: wrap;
}
#member_content{
    width: 98.93vw;
    background-color: #f5f5f5;
    padding: 3.9vw 13.65vw 3.9vw 13.65vw;
    min-height: 80vh;
}
#title{
    font-size: 1.5rem;
    color: #444;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0.65vw;
}
#title_English{
    color: #848484;
    text-align: center;
}
#person{
    width: 16.25vw;
    height: 26vw;
    border: 1px solid #e0e0e0;
    margin-left: 1.3vw;
    margin-top: 3.25vw;
    border-radius: 13vw 13vw 0px 0px;
    background-color: white;
    cursor: pointer;
}
#avator{
    width: 16.25vw;
    height: 16.25vw;
    border-radius: 50%;
    margin-bottom: 0.97vw;
}
#person_name,#person_grade,#person_class{
    font-size: 0.875rem;
    color: #a5a5a5;
    margin: 0.65vw 0px;
    text-align: center;
}
#person_content{
    display: flex;
    flex-wrap: wrap;
}
#person:hover{
    box-shadow: 0px 0px 5px 2px #CCCCCC;
}
@media screen and (max-width: 1200px) {
    #direction_introduce{
        font-size: 1.5rem;
        text-align: left;
        color: #444;
        font-weight: 500;
        margin-bottom: 0.5vh;
    }
    #about_direction_word{
        font-size: 0.81rem;
        color: #848484;
        margin-bottom: 0.65vw;
    }
    #about_describe{
        margin: 60px 0px;
        width: 730px;
        height: 176px;
        font-size: 16px;
        margin-top: 20px;
        color: #848484;
        word-break: break-all;
        word-wrap: break-word;
        max-height: 176px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: wrap;
    }
}
</style>

