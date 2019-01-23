<template>
<div class="load">
    <div class="container">
        <div class="inner_container">

            <!-- logo -->
            <div class="logo-container">
                <div class="logo">
                    这里是logo
                </div>
            </div>
        
            <!-- 下部包含块 -->
            <div class="load_container">
                <!-- Picture -->
                <div class="pic">
                    这里是图片
                </div>

                <!-- load-form -->
                <div class="load_form">
                    这是登陆表单
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
      
    }
  }
}
</script>

<style>
.load{
    width: 100%;
    height: 100%;
    background-color: red;
    padding-top: 62px;
    position: relative;
    min-width: 1000px;
}
.inner_container{
    width: 1000px;
    height: 100%;
    background-color: yellowgreen;
    margin: 0 auto
}
.logo-container{
    width: 100%;
    /* background-color: blue; */
}
.logo{
    width: 150px;
    height: 45px;
    background-color: green
}
.load_container{
    width: 980px;
    height: 370px;
    background-color: black;
    margin: 0 auto;
}
.pic{
    width: 480px;
    height: 370px;
    background-color: pink;
    float: left;
}
.load_form{
    width: 270px;
    height: 272px;
    background-color: gray;
    float: left;
    margin-left: 170px;
}
</style>