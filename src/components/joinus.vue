<template>
<div class="container">


    <div class="join_head">
        <p>加入我们</p>
    </div>
    
    <div class="head_ctx">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;小伙伴们可以通过每年4月份左右的纳新宣讲来报名参加，当然如果你错过了纳新时间也可以来我们实验室面试的。 我们不会错过任何一个有能力且热爱技术的同学~学姐学长欢迎你们的到来~点击下方的报名入口进入纳新网站，根据方向选择不同的试题。请务必认真完成并在面试的时候带来~
    </div>

    <div class="entry">
        <p class="btn"><Button type="success" id="join_btn" >报名入口</Button></p>
        <div class="en_in">
            未到报名时间，入口暂不开放
        </div>
    </div> 

    <div class="detail">
        <h3>联系方式</h3>
        <div class="detail-container">
            <div class="detail_block"></div>
            <div class="detail_ctx">地址：陕西省西安市长安区西安邮电大学东区FZ332</div>
        </div>
        

        <div class="detail-container">
            <div class="detail_block"></div>
            <div class="detail_ctx">QQ交流群：</div>
            <p><img src="@/assets/qq.png"></p>
        </div>
        

        <div class="detail-container">
            <div class="detail_block"></div>
            <div class="detail_ctx">微信公众号：西邮ThoughtCoding实验室</div>    
            <p><img src="@/assets/wechat.png"></p>        
        </div>


        <div class="detail-container">
            <div class="detail_block"></div>
            <div class="detail_ctx">邮箱：ThoughtCoding@163.com</div>
        </div>


    </div>

</div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  mounted(){
        this.$store.commit('changeMenu','joinus');
    },
}
</script>

<style>
.container{
    width: 100%;
    padding-top: 100px;
    background-image: url(../assets/background.png); 
}
.join_head{
    width: 100vw;
    font-size: 40px;
    margin: 0 auto
}
.join_head p{
    font-weight: 500;
    text-align: center;
}
.head_ctx{
    width: 33vw;
    margin: 20px auto;
    font-size: 1rem;
    /* background-color: pink */
}

.entry{
    margin-top: 8vw;
} 

.en_in{
    font-size: 15px;
    text-align: center;
    width: 705.63px;
    margin: 0 auto;
    margin-top: 30px;
}
.detail-container p img{
    width: 33vw;
}
.detail-container p{
    text-align: center;
    margin-top: 1vw;
}
.btn{
    text-align: center;
    vertical-align: center;
}
.detail{
    width: 33vw;
    margin: 0 36vw;
    margin-top: 120px;
}
.detail h3{
    text-align: left;
    font-size: 2rem;
}
.detail-container{
    margin-top: 2vw;

}
.detail_block{
    background-color: #0dc5a0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    /* margin-top: 6px */

}
.detail_ctx{
    /* margin: auto 0; */
    display: inline-block;
    vertical-align: center;
    font-size: 1rem;
}
/* @media screen and (max-width: 1200px) {
    .join_head p{
        font-weight: 500;
        text-align: center;
    }
    .join_head{
        font-size: 6vh;
    }
    .head_ctx{
        font-size: 2.5vh;
    }
    .btn{
        font-size: 2.5vh;
    }
    #join_btn{
        font-size: 4vh;
    }
    .en_in{
        font-size: 2.5vh;
    }
    .detail h3{
        font-size: 2.5vh;
        text-align: center;
    }
    .detail_block{
        width:2vh;
        height: 2vh;
    }
    .detail_ctx{
        font-size:1.5vh;
    }
    .detail-container{
        margin-top: 2vh;
    }
    .detail{
        width: 40vh;
        height: 21vh;
        margin: 0 auto;
        margin-top: 120px;
    }
} */
</style>