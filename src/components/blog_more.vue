<template>
<div>
    <div>
        <div id="blogAll_content">
            <div id="blogAll">
                <h1>{{title}}</h1>
                <p id="bMore">
                    时间：{{time | timeReverse}}
                    <span>作者：{{author}}</span>
                    <Icon type="md-pricetag" size='10'/>{{tags}}
                </p>

                <hr color="#2d8cf0">
                
                <div id="blogText">

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
            title:'',
            time:'',
            author:'',
            tags:'',
        }
    },
    filters: {
        timeReverse: function(dataStr) {
            return dataStr.split('').splice(0, 10).join('');
        }
    },
    created(){
        this.$axios.get('/proxy/blogs/getContentVisitor?blogsId='+localStorage.getItem('blogsId'))
        .then(res=>{
            console.log(res.data.data);
            this.title = res.data.data.title;
            this.time =  res.data.data.addTime;
            this.author = res.data.data.person.name;
            let arr = [];
            let t;
             if(res.data.data.classifySet != null)
                {
                    for(var j = 0;j<res.data.data.classifySet.length;j++){
                        arr.push(res.data.data.classifySet[j].name);
                        t = arr.join(',');
                    }
                    this.tags =  t;
                }
            document.getElementById('blogText').innerHTML = res.data.data.content;
        })
        .catch(err=>{
            console.log(err);
        });
    },
    mounted(){
        this.$store.commit('changeMenu','blog');
    },
}
</script>
<style>
body{
    font-size: 1rem;
    background-color: #f5f5f5;
}
#blogAll_content{
    padding-top: 70px;
    padding-left: 20vw;
    position: relative;
    margin-bottom: 1vw;
}
#bMore{
    color: #858585;
    font-size: 0.8rem;
}
#bMore span{
    margin-left: 2vw;
    margin-right: 2vw;
}
#blogAll{
    padding: 1vw;
    width: 60vw;
    min-height: 80vh;
    background-color: white;
}
#blogAll h1,h2,h3,h4,h5,h6{
    margin:1.05vw 0 0.5vw;
}

#blogAll p{
    margin:0 0 1.3vw 0;
}
#blogAll li{
    margin-left: 0.83vw;
}
#blogAll li li{
    margin-left: 1.67vw;
}
#blogAll img{
    max-width: 50vw;
    min-width: 30vw;
}
#blogAll pre ol{
    font-size: 1rem;
    padding-left:2.5vw;
}
#blogAll pre{
    min-width: 80vw;
    background-color: #CCCCCC;
    margin: 1.05vw 1.05;
    overflow: auto;

}
#blogAll li p{
    text-indent: 0;
    margin-bottom: 1.3vw;
}
#blogAll a{
    color:#515a6e
}
#blogAll blockquote{
    border-left: 0.21vw solid #ddd;
    padding: 0 15px;
    display: block;
    margin-bottom:1.3vw;
}
#blogAll code{
    padding: 0.1vw 0.21vw;
    word-wrap: break-word;
    border-radius: 0.15vw;
}
#blogAll tr th{
    background-color: #f2f2f2;
    border: 1px solid #ddd; 
    padding: 0.3vw 0.7vw;
    box-sizing: border-box;
}
#blogAll tr tr{
    border-top: 1px solid #ccc;
}
#blogAll tr td{
    border: 1px solid #ddd;
    background-color: #f8f8f8;
    text-align: center;
}
</style>
<style scoped>
 /* @import '../assets/editormd/css/editormd.css'; */
</style>
