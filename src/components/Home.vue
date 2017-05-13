<template>
	<div class="tpl">
		<!-- 轮播图部分 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunboImgList">
			<img :src="item.img" alt="">
		  </mt-swipe-item>
		</mt-swipe>
		<!-- 九宫格部分 -->

		<ul class="mui-table-view mui-grid-view mui-grid-9">
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/newslist">
	                <!-- <span class="mui-icon mui-icon-home"></span> -->
	                <img src="../../static/imgs/menu3.png" alt="">
	                <div class="mui-media-body">新闻资讯</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
	                <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
	                <img src="../../static/imgs/menu4.png" alt="">

	                <div class="mui-media-body">图片分享</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
	                <img src="../../static/imgs/menu5.png" alt="">
	                <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
	                <div class="mui-media-body">商品购买</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
	                <img src="../../static/imgs/menu6.png" alt="">
	                <!-- <span class="mui-icon mui-icon-location"></span> -->
	                <div class="mui-media-body">留言反馈</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
	                <img src="../../static/imgs/menu9.png" alt="">
	                <!-- <span class="mui-icon mui-icon-search"></span> -->
	                <div class="mui-media-body">视频专区</div></router-link></li>
	        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
	                <img src="../../static/imgs/menu10.png" alt="">
	                <!-- <span class="mui-icon mui-icon-phone"></span> -->
	                <div class="mui-media-body">联系我们</div></router-link></li>
	    </ul>

	</div>
</template>

<script>
	export default{
		name: "home",
		data(){
			return {
				lunboImgList: []
			}
		},
		created(){
			this.$http.get("http://127.0.0.1:8899/api/getlunbo").then(res=>{
				this.lunboImgList = res.body.message;
			});
		}
	}
</script>

<style scoped>
	.mint-swipe{
		height: 200px;
		width: 100%;
	}

	.mint-swipe-item img{
		width: 100%;
		height: 200px;
	}

	

	.mui-table-view-cell img{
		width: 60%;
		height: 60%;
	}

	.mui-table-view.mui-grid-view .mui-table-view-cell{
		background-color: #fff;
	}

	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-right: none;
		border-bottom: none;
	}
</style>