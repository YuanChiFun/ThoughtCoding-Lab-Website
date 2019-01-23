<template>
    <div>
        <div id="components_top">
            <img :src="Src">
            <div class="components_top">
            <p id="components_top_title">毕业生介绍</p>
            <p id="signal">—— 愿历尽千帆，归来仍少年 ——</p>
            </div>
        </div>
        <div id="graduate_all">
            <div id="graduate_person" v-for="item in Person" :key='item.id' @click="goToPersonal(item)">
               <div id="graduate_avator">
                   <img :src="item.photoUri"> 
                </div>
                <h3 id="graduate_name">{{item.personModel.name}}</h3>
                <h3 id="graduate_grade">20{{item.personModel.grade}}届</h3>
                <div id="graduate_company">
                    <img :src="item | changeToPicture">
                    <!-- <p id="word_describe" v-if="item.isShow">{{item.employment}}</p> -->
                </div>
                
            </div>
            <div id="graduate_pages" v-if="newsTotal">
                <div id="graduate_center">
                    <Page :total="newsTotal"  @on-change="changePage(pageNum)"/>
                </div>
            </div>      
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            flag:0,
            Src:require('@/assets/member_top.png'),
            pages:1,
            newsTotal:0,
            Person:[
            ],
        }
    },
    created(){
        this.$axios.get('/proxy/graduate/list?page='+this.pages+'&limit=12')
        .then(res=>{
            console.log(res.data.data);
            this.Person = res.data.data;
            this.newsTotal = res.data.count;
            for (let i=0;i<this.Person.length;i++){
                this.Person[i].isShow = 0;
            }
        })
        .catch(err=>{
            console.log(err);
        })
    },
    methods:{
        changePage(pageNum){
            this.pages = pageNum;
            this.$axios.get('/proxy/graduate/list?page='+this.pages+'&limit=12')
            .then(res=>{
                console.log(res.data.data);
                this.Person = res.data.data;
                this.newsTotal = res.data.count;
                for (let i=0;i<this.Person.length;i++){
                this.Person[i].isShow = 0;
            }
            })
            .catch(err=>{
                console.log(err);
            })
        },
        goToPersonal(item){
            localStorage.setItem('personId',item.id);
            this.$router.push({
                name:'personal_blog',
            })
        }
    },
    mounted(){
        this.$store.commit('changeMenu','graduate');

    },
    filters:{
        changeToPicture:function(item){
            if(item.employment === '华为'||item.employment === 'huawei'){
                return 'http://www.szquanli.com/uploads/allimg/180329/2-1P32Z91U6.png';
            }
            if(item.employment === '腾讯'){
                return 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=308099672,2725080924&fm=26&gp=0.jpg'
            }
            if(item.employment === '阿里'||item.employment === '阿里巴巴'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543338170005&di=6fc74a5fc0ece9c6a6bd310bcbc8eb89&imgtype=0&src=http%3A%2F%2Fp1.qhimgs4.com%2Ft01b0bc7eb108538614.gif';
            }
            if(item.employment === '百度'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543338252214&di=c4484f13cb05ec2273d7baf6206e66d6&imgtype=0&src=http%3A%2F%2Fwww.raincent.com%2Fuploadfile%2F2017%2F1201%2F20171201030424299.png';
            }
            if(item.employment === '美团'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543338340699&di=7fae42bf4517fe8381b5ce0f03aa346d&imgtype=0&src=http%3A%2F%2Fcrawl.nosdn.127.net%2Fimg%2F2d476bcdf2fb5d906cd17c5763ea7436.jpg';
            }
             if(item.employment === '滴滴'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543338440878&di=b3d7362631e2e91ff4192032255d2861&imgtype=0&src=http%3A%2F%2Fa5img.pncdn.cn%2F2018%2F0515%2F1526369087384.png';
            }
             if(item.employment === '今日头条'||item.employment === '头条'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543338490260&di=8a99485b63f0594cc01a608c21653bd5&imgtype=0&src=http%3A%2F%2Fco-image.qichacha.com%2Fupload%2Fchacha%2Fimg%2F20170407%2F1491535350862322.png';
            }
             if(item.employment === '抖音'){
                return 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2590961638,2849458686&fm=26&gp=0.jpg';
            }
             if(item.employment === '字节跳动'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543338569668&di=5181b061202ed364d4044c226f915333&imgtype=0&src=http%3A%2F%2Fimg.cndesign.com%2Fupload%2Fnews%2F20180802%2Fcover%2F20180802%2F988e67929e9c48dd814668c5c3e35eee.jpeg';
            }
             if(item.employment === '新浪'||item.employment === '新浪微博'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543933338&di=aeee7bb6d951db9284c8cdd0b496621b&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.bqatj.com%2Fimg%2F915b768ed46cedbf.jpg';
            }
             if(item.employment === '小米'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543338708044&di=177a0057718216095bb55df0651ad3da&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F10%2F22%2F378cf74582613de1941f8d5b8a1cb3a7.jpg';
            }
             if(item.employment === '魅族'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543338745006&di=c6fa69c663655a68e79d093d75d81a52&imgtype=0&src=http%3A%2F%2Fimage.uc.cn%2Fo%2Fwemedia%2Fs%2F2017%2Fc29c6135319756b2607d9c015de81155x550x314x9.jpeg%3B%2C3%2Cjpegx%3B3%2C700x.jpg';
            }
             if(item.employment === 'vivo'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543933600&di=104b9272a28d715377ee532284812d01&imgtype=jpg&er=1&src=http%3A%2F%2Fp0.qhimgs4.com%2Ft010bae61eb88e1aa4a.jpg';
            }
             if(item.employment === 'oppo'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543933641&di=05085bfbdff8c017260f0971dd2d7a3c&imgtype=jpg&er=1&src=http%3A%2F%2Fshumaduo.com%2Fimages%2Fdoc%2F20170119%2F00066178.jpg';
            }
             if(item.employment === '网易'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934153&di=af80b63fa8c22f3abf864abc1985cd17&imgtype=jpg&er=1&src=http%3A%2F%2Fpic26.photophoto.cn%2F20130131%2F0007019994397389_b.jpg';
            }
             if(item.employment === '京东'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934232&di=c0d345a74ccb67312a292176426382e3&imgtype=jpg&er=1&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1801%2F22%2F10731726_20180122_125937_385_thumb.jpg';
            }
             if(item.employment === '好未来'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934580&di=410cc5130e3d62bf7832717af9ae0df5&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170915%2F3ac274c8fd0c4fd899a6806876ba594c.jpeg';
            }
             if(item.employment === '完美'||item.employment === '完美世界'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934611&di=6da9ab759b6b0d4b5c56564e67008021&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ace1586222e3a801219c770fe6ab.jpg%402o.jpg';
            }
             if(item.employment === '斗鱼直播'||item.employment === '斗鱼'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934679&di=9781457a6e10800b8198f5566a93139d&imgtype=jpg&er=1&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F58ee3d6d55fbb2fb96a33b48444a20a44723dce4.jpg';
            }
             if(item.employment === '熊猫直播'||item.employment === '熊猫'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934655&di=35010a82b8866a60f88ed9fcc9895513&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170525%2Fbb2a8b84d81e4860af28127c9e1bf16b_th.png';
            }
             if(item.employment === 'B站'||item.employment === 'BiliBili'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934735&di=209583bc7dc37374bd7d03b2580074f8&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.chinawenben.com%2Fupload%2F5d3k5bq7d832kdbobbov33j5k5j82v7rr8o5b57r_1.png';
            }
             if(item.employment === '虎牙直播'||item.employment === '虎牙'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934769&di=d86461a021e9f5e349031db74f24c75c&imgtype=jpg&er=1&src=http%3A%2F%2Fa1.att.hudong.com%2F28%2F17%2F20300543739800151997179888801.jpg';
            }
             if(item.employment === '爱奇艺'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934805&di=db3a30e17855ad258f93e659b8d4b540&imgtype=jpg&er=1&src=http%3A%2F%2Fandroid.tgbus.com%2FAndroid%2FUploadFiles_4504%2F201506%2F2015061515323665.jpg';
            } 
            if(item.employment === '优酷'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934833&di=2760c7a426dd82c6e2b5a908bc037d22&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F21216%2F20161227093308-1944774441.jpg%2F0';
            }
            if(item.employment === '360'){
                return 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=45290707,429549826&fm=26&gp=0.jpg';
            }
            if(item.employment === '大众点评'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934932&di=83e9dcbc6ff642f5959ddb7ef7a83023&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zzrc.net%2Fuser%2Fphoto%2F2014-04-26%2F201404261049420.jpg';
            }
            if(item.employment === '搜狐'||item.employment === '搜狐新闻'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543934965&di=156b01fc978c1e0bc9d3c6cef4fb0fdb&imgtype=jpg&er=1&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171027%2Fe3f57bd5115041cca67d9597179745d8.jpeg';
            }
            if(item.employment === '饿了么'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543340275544&di=83623e7492df6874d4a2bad45e199cca&imgtype=0&src=http%3A%2F%2Fo9j61byze.qnssl.com%2Feleme.png';
            }
            if(item.employment === 'CVTE'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543340456998&di=d308ff2340fbb229f5e07f79d32b4aea&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D4081902200%2C2250601672%26fm%3D214%26gp%3D0.jpg';
            }
            if(item.employment === '网龙'||item.employment === '网龙网络有限公司'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543340538422&di=081e414676e2bc1f32e26d5454c9420d&imgtype=0&src=http%3A%2F%2Fxz7.com%2Fup%2F2015-8%2F2015825155350.jpg';
            }
            if(item.employment === '广联达'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543340600921&di=7c68d41ae14ab62d2cdc8de1c852297a&imgtype=0&src=http%3A%2F%2Fwww.horsehr.com%2FImageUpload%2Fcompanylogo%2F7%2F0%2F6%2F5%2F4%2F1496726886688.jpg';
            }
            if(item.employment === '用友'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543340631690&di=a1d6ceb7b676045917ff58a4c3247d44&imgtype=0&src=http%3A%2F%2Fs1.sinaimg.cn%2Fmiddle%2F674a8623g73d4218a86a0%26690';
            }
            if(item.employment === '去哪儿'||item.employment === '去哪儿网'){
                return 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=613471681,2332854647&fm=26&gp=0.jpg';
            }
            if(item.employment === '亿方云'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543340707116&di=207d0e68cdb3a56d84fd1ff25cb4f171&imgtype=0&src=http%3A%2F%2Fstatic.chiefmore.com%2Fu%2Fcms%2Fwww%2F201711%2F23153940yqrh.jpg';
            }
            if(item.employment === '映客直播'||item.employment === '映客'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543340784741&di=1e6d58413a5faaaa2a5d281085b373ac&imgtype=0&src=http%3A%2F%2Fzdzq.40407.com%2Fuploads%2F180330%2F1682428-1P3301A541358.png';
            }
            if(item.employment === '中兴高达'||item.employment === '中兴'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543340859767&di=74e565ee7b7a25f8b28d0eed4abf6b6c&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D1603447148%2C483277648%26fm%3D214%26gp%3D0.jpg';
            }
            if(item.employment === '玩呗娱乐'||item.employment === '玩呗'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543340996022&di=9c2ff0bfe3df391e3be48bbcaa781560&imgtype=0&src=http%3A%2F%2Fimg.kanzhun.com%2Fimages%2Flogo%2F20170119%2F2c62e3ee75452542d6f9b15407f33896.jpg';
            }
            if(item.employment === '厦门航空'||item.employment === '厦航'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543935700&di=a08453a6ecc2fca9954f2bb62c94dcf1&imgtype=jpg&er=1&src=http%3A%2F%2Fpn.zdmimg.com%2F201409%2F01%2F2b333368.jpg';
            }
            if(item.employment === '广州品高'||item.employment === '品高软件'){
                return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543341433152&di=faccae0a9ef321b9df44944dcf26966a&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F45%2F10%2F20300534049491134182108718977.jpg';
            }
            // else{
            //     item.isShow = 1;
            // }
        }
    }
}
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
}

#graduate_person{
    margin:2.1vw 2.1vw;
    width: 14.7vw;
    height:21vw;
    padding: 0.5vw;
    position:relative;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius:1vw;
    background: white;
    box-shadow: 0px 0px 0.26vw rgba(0, 0, 0, 0.3);
    margin-bottom: 8vw;
    cursor: pointer;
}

#graduate_name,#graduate_grade{
    text-align: center;
    font-size: 1.1vw;
    letter-spacing: 2px;
    margin-top: 0.3vw;
}
#graduate_person:before{
    content: '';
    width: 110%;
    left: 0; 
    height: 111%;
    z-index:-1;
    position:absolute;
    border-radius:1vw;
    border: 1px solid rgba(0,0,0, 0.1);
    background: rgba(0, 0, 0, 0.0);
    box-shadow: 0px 0px 0.26vw rgba(0, 0, 0, 0.2);
    transform:     translate(-5%,-5%);
}
#word_describe{
    font-size: 1.2rem;
    color: rgb(0, 90, 211);
    font-weight: bold;
}
#graduate_person:after{
    content: '';
    position:absolute;
    top:-25px; left: 30%;
    width: 6.8vw;
    height: 2.1vw;
    background: -webkit-gradient(linear, 555% 20%, 0% 92%, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.0)), color-stop(.1,rgba(0, 0, 0, 0.2)));
    border-left: 1px dashed rgba(0, 0, 0, 0.1);
    border-right: 1px dashed rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 0.6vw rgba(0, 0, 0, 0.2);
}
#graduate_avator{
    width: 7.9vw;
    height: 10.5vw;
    overflow: hidden;
    text-align: center;
    border-radius: 0.5vw;
    margin: 0 auto;
    margin-top: 0.5vw;
    margin-bottom: 1vw;
}
#graduate_avator img{
    width: 7.9vw;
    margin-top: 0.3vw;
    border-radius: 10px;
}
#graduate_company{
    text-align: center;
    margin-top: 0.5vw;
    color: #666666;
}
#graduate_company{
    width: 5.25vw;
    height: 2.6vw;
    text-align: center;
    margin:0 auto;
    margin-top: 2vw;
}
#graduate_company img{
    width: 5.25vw;
    height: 2.6vw;
}
#graduate_pages{
    width: 98.93vw;
    height: 3.3vw;
    background-color: white;
    position: relative;
    margin-top: 1.3vw;
     margin-top: 60px;
}
#graduate_center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
#components_top{
    width:100vw;
    padding-top: 60px;
    position: relative;
}
#components_top img{
    width: 100vw;
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
#graduate_all{
    display: flex;
    flex-wrap: wrap;
    padding: 4.9vw 10.3vw;
    min-height: 80vh;
    align-content: flex-start;
}


@media screen and (max-width: 1500px) {
}
</style>

