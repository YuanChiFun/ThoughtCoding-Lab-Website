<template>
    <div>
        <div id="caseAll_content">
            <div id="caseAll">
                <h1>{{title}}</h1>
                <p id="messageMore">
                    时间：{{time | timeReverse}}
                    <span>作者：{{author}}</span>
                </p>
                <hr color="#2d8cf0">
                <div id="caseText">

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
            tags:''
        }
    },
    created(){
        this.$axios.get('/proxy/notice/getProject?noticeId='+localStorage.getItem('caseId'))
        .then(res=>{
            console.log(res.data.data);
            this.title = res.data.data.title;
            this.time =  res.data.data.addTime;
            this.author = res.data.data.editPerson.name;
                if(res.data.data.classifySet != null)
                {
                    for(var j = 0;j<res.data.data.classifySet.length;j++){
                        arr.push(res.data.data.classifySet[j].name);
                        t = arr.join(',');
                    }
                    this.tags =  t;
                }
            document.getElementById('caseText').innerHTML = res.data.data.content;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    mounted(){
        this.$store.commit('changeMenu','case');
    },
    filters: {
        timeReverse: function(dataStr) {
            return dataStr.split('').splice(0, 10).join('');
        }
    },
}
</script>
<style>
body{
    font-size: 1rem;
    background-color: #f5f5f5;
}
#caseAll_content{
    margin-bottom: 1vw;
    padding-top: 4vw;
    padding-left: 20vw;
}
#messageMore{
    color: #858585;
    font-size: 0.8rem;
}
#messageMore span{
    margin-left: 2vw;
}
#caseAll{
    background-color: white;
    padding: 2vw;
    width: 60vw;
    min-height: 80vh;
}
#caseAll h1,h2,h3,h4,h5,h6{
    margin:1.05vw 0 0.5vw;
}

#caseAll p{
    margin:0 0 1.3vw 0;
}
#caseAll li{
    margin-left: 0.83vw;
}
#caseAll li li{
    margin-left: 1.67vw;
}
#caseAll img{
    max-width: 50vw;
    min-width: 30vw;
}
#caseAll pre ol{
    font-size: 1rem;
    padding-left:2.5vw;
}
#caseAll pre{
    min-width: 80vw;
    background-color: #CCCCCC;
    margin: 1.05vw 1.05;
    overflow: auto;

}
#caseAll li p{
    text-indent: 0;
    margin-bottom: 1.3vw;
}
#caseAll a{
    color:#515a6e
}
#caseAll blockquote{
    border-left: 0.21vw solid #ddd;
    padding: 0 0.8vw;
    display: block;
    margin-bottom:1.3vw;
}
#caseAll code{
    padding: 0.1vw 0.21vw;
    word-wrap: break-word;
    border-radius: 0.15vw;
}
#caseAll table{
    border-collapse: collapse;
    padding: 0;
    margin-bottom: 0.84vw;
}
#caseAll tr th{
    background-color: #f2f2f2;
    border: 1px solid #ddd; 
    padding: 0.3vw 0.7vw;
    box-sizing: border-box;
}
#caseAll tr tr{
    border-top: 1px solid #ccc;
}
#caseAll tr td{
    border: 1px solid #ddd;
    background-color: #f8f8f8;
    text-align: center;
}
</style>

