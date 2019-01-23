<template>
    <div>
        <div id="newAll_content">    
            <div id="newAll">
                <h1>{{title}}</h1>
                <p id="nMore">
                    时间：{{time | timeReverse}}
                    <span>作者：{{author}}</span>
                </p>

                <hr color="#2d8cf0">
                <div id="nText">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title:'',
            time:'',
            author:'',
            news:{
            }
        }
    },
    filters: {
        timeReverse: function(dataStr) {
            return dataStr.split('').splice(0, 10).join('');
        }
    },
    created(){
        this.$axios.get('/proxy/notice/getNews?noticeId='+localStorage.getItem('newId'))
        .then(res=>{
            console.log(res);
            this.title = res.data.data.title;
            this.time =  res.data.data.addTime;
            this.author = res.data.data.editPerson.name;
            this.news = res.data.data;
            document.getElementById('nText').innerHTML = this.news.content;
        })
        .catch(err=>{
            console.log(err);
        })  
    },
    mounted(){
        this.$store.commit('changeMenu','news');
    },
}
</script>
<style>
body{
    font-size: 1rem;
    background-color: #f5f5f5;
}
#newAll_content{
    padding-top: 70px;
    padding-left: 20vw;
    margin-bottom: 1vw;
}
#nMore{
    color: #858585;
    font-size: 0.8rem;
}
#nMore span{
    margin-left: 2vw;
    margin-right: 2vw;
}
#newAll{
    padding: 1vw;
    width: 60vw;
    min-height: 80vh;
    background-color: white;
}
#newAll h1,h2,h3,h4,h5,h6{
    margin:1.05vw 0 0.5vw;
}

#newAll p{
    margin:0 0 1.3vw 0;
}
#newAll li{
    margin-left: 0.83vw;
}
#newAll li li{
    margin-left: 1.67vw;
}
#newAll img{
    max-width: 50vw;
    min-width: 30vw;
}
#newAll pre ol{
    font-size: 1rem;
    padding-left:2.5vw;
}
#newAll pre{
    min-width: 80vw;
    background-color: #CCCCCC;
    margin: 1.05vw 1.05;
    overflow: auto;

}
#newAll li p{
    text-indent: 0;
    margin-bottom: 1.3vw;
}
#newAll a{
    color:#515a6e
}
#newAll blockquote{
    border-left: 0.21vw solid #ddd;
    padding: 0 15px;
    display: block;
    margin-bottom:1.3vw;
}
#newAll code{
    padding: 0.1vw 0.21vw;
    word-wrap: break-word;
    border-radius: 0.15vw;
}
#newAll tr th{
    background-color: #f2f2f2;
    border: 1px solid #ddd; 
    padding: 0.3vw 0.7vw;
    box-sizing: border-box;
}
#newAll tr tr{
    border-top: 1px solid #ccc;
}
#newAll tr td{
    border: 1px solid #ddd;
    background-color: #f8f8f8;
    text-align: center;
}
</style>

