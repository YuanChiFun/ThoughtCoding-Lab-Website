<template>
<div>
  <div id="top">
    <span id="TC"><strong>ThoughtCoding</strong></span>
    <!-- <a href="#"><div id="login_in">登录</div></a>
    <a href="#"><div id="join_us">加入我们</div></a> -->
   <Menu mode="horizontal" ref="contactMenu" :theme="theme1" :active-name="actName" @on-select="turnURL" id="menu" width="auto">
        <MenuItem name="home" >
            <Icon type="ios-home"/>
            主页
        </MenuItem> 
        <Submenu name="dynamic"> 
            <template slot="title">
            <Icon type="ios-planet" />
            动态
            </template>
              <MenuItem name="news"><Icon type="ios-bookmarks" />资讯中心</MenuItem>
                <MenuItem name="case"><Icon type="ios-hand" />项目</MenuItem>
        </Submenu>
        <MenuItem name="blog" >
            <Icon type="logo-markdown" /> 博客
        </MenuItem>
        <Submenu name="member">
            <template slot="title">
                <Icon type="ios-people" />
                成员
            </template>
                <MenuItem name="embed"><Icon type="md-analytics" />嵌入式</MenuItem>
                <MenuItem name="andriod"><Icon type="logo-android" />安卓</MenuItem>
                <MenuItem name="web"><Icon type="logo-html5" />前端</MenuItem>
                <MenuItem name="backstage"><Icon type="md-swap" />后台</MenuItem>
                <MenuItem name="product"><Icon type="md-person" />产品</MenuItem>
        </Submenu>
        <MenuItem name="graduate">
            <Icon type="md-briefcase" />
           毕业生
        </MenuItem>
        <MenuItem name="joinus">
          <Icon type="md-person-add" />
           加入我们
        </MenuItem>
        <a href="/proxy/account/login">
        <MenuItem name="">
          <Icon type="md-contact" />
           登陆
        </MenuItem>
        </a>
    </Menu>
    </div>
    <router-view></router-view>  
     <div id="footer">
        <div id="address">
          <p class="footer-title" ><Icon class="icon" type="ios-pin" />地址：陕西省西安市长安区西安邮电大学东区FZ332</p>
          <p class="footer-title"><Icon class="icon" type="ios-mail" />邮箱：ThoughtCoding@163.com</p>
        </div>
        <div id="friend_href">
          <p class="footer-title"><Icon class="icon" type="ios-paper-plane" />友情链接</p>
          <p id="firstA" class="footer-title">
            <a href="http://www.xiyou.edu.cn/">西安邮电大学</a>
            <a href="https://www.xiyoulinux.org/">西邮linux兴趣小组</a>
            <a href="http://www.xiyounet.org/">西邮网络科技协会</a>
          </p>
          <p id="secondA" class="footer-title">
            <a href="https://www.xiyoumobile.com/">西邮移动应用开发实验室</a>
            <a href="http://sta.xupt.edu.cn/">西邮软件科技协会</a>
          </p>
        </div>
        <div id="copyright">
          <p>Copyright © 2018 ThoughtCoding实验室 All Rights Reserved</p>
        </div>
     </div>
 </div>
</template>

<script>
export default {
        data () {
          return {
            theme1: 'light',
            username:'Pirlo',
            }
          },
        computed:{
          actName(){
            return this.$store.getters.getName;
          }
        },
        methods:{
          turnURL(item){
            this.$router.push({
              name:item
            });
          },
          down(){
            if(this.flag === 1){
              this.downshow = true;
            }
          }
        },
}
</script>

<style scoped>
*{
    margin: 0px;
    padding: 0px;
}
a{
  text-decoration: none;
  color: black;
}
#icon{
  size:2vw;
}
#permit{
  width: 20vw;
  height: 5vw;
  margin-left: 15vw;
  color:#B0B0B0;
  /* font-size: 0.82rem; */
  font-size: 0.82vw;
  padding-top:0.3vw;
}
#permit a{
  margin-left: 0.3vw;
  margin-right: 0.3vw;
  color: #B0B0B0;
}
#copyright p{
  color: #B0B0B0;
  /* font-size: o.82rem; */
  font-size: 0.82vw;
  text-align: center;
}
#copyright{
  width: 100%;
  padding-top:2vw;
}
#permit a:hover{
  color: aqua;
}
#secondA a{
  color: #B0B0B0;
  margin-left: 3vw;
}
#firstA a{
  color: #B0B0B0;
  margin-left: 3vw;
}
/* #footer-title{
  font-size:2vw;
} */
#friend_href{
  margin-left: 15vw;
}
#friend_href p a:hover{
  color: aqua;
}
#friend_href p{
  margin-top: 0.3vw;
  color: #B0B0B0;
  /* font-size: 0.82rem; */
  font-size: 0.82vw;
}
#address p{
  color: #B0B0B0;
  /* font-size: 0.82rem; */
  font-size: 0.95vw;
  margin-top: 0.3vw;
}

#footer{
  width: 98.93vw;
  height: 15vw;
  background-color: #323436;
  display: flex;
  padding: 3.5vw 15vw;
  flex-wrap: wrap;
}
#top{
  position:fixed;
  /* width: 99vw; */
  width:100vw;
  background-color: white;
  padding: 0px 40px;
  /* padding: 0vw 2.85vw; */
  z-index:4;
  box-shadow:0px 0px 10px 2px #CCCCCC;
}
#menu{
  float: right;
  /* height:3.9vw; */
  /* width:51vw; */
  /* line-height:3.9vw; */
}
#TC{
  left: 7%;
  /* font-size: 24px; */
  font-size: 1.56rem;
  position: absolute;
  top: 20%;
  letter-spacing: 1px;
} 
/* #join_us{
  width: 92px;
  height: 60px;
  float: right;
  z-index: 5;
  font-size: 14px;
  color: #515a6e;
  padding-top: 18px;
  padding-left: 17px;
  border-bottom: 2px solid transparent;
} */
/* #login_in:hover{
  border-bottom: 2px solid #2d8cf0;
  color:#2d8cf0
}
/* #join_us:hover{
  border-bottom: 2px solid #2d8cf0;
  color: #2d8cf0;
} */

/* #login_in{
  width: 92px;
  height: 60px;
  float: right;
  z-index: 5;
  font-size: 14px;
  color: #515a6e;
  padding: 18px 30px;
  border-bottom: 2px solid transparent;
} */
.menu-item {
  font-size:1vw;
}
@media screen and (max-width: 1200px) {
 
}

</style>
