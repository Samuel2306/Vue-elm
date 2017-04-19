<template>
  <div class="header">
  	<div class="content-wrapper">
  		<div class="avatar">
  			<img :src="seller.avatar" width="64" height="64">
  		</div>
  		<div class="content">
  			<div class="title">
  				<span class="brand"></span>
  				<span class="name">{{seller.name}}</span>
  			</div>
  			<div class="description">
  				{{seller.description}}/{{seller.deliveryTime}}分钟送达
  			</div>
  			<div v-if="seller.supports" class="support">
	  			<span class="icon" :class="classMap[seller.supports[0].type]"></span>
	  			<span class="text">{{seller.supports[0].description}}</span>
	  		</div>
  		</div>
  		<div v-if="seller.supports" class="support-count" @click="showDetail">
  			<span class="count">{{seller.supports.length}}个</span>
  			<i class="icon iconfont icon-keyboardarrowright"></i>
  		</div>
  	</div>
  	<div class="bulletin-wrapper" @click="showDetail">
  		<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
  		<i class="icon iconfont icon-keyboardarrowright"></i>
  	</div>
  	<div class="background">
  		<img :src="seller.avatar" alt="" width="100%" height="100%">
  	</div>
  	<div class="detail" v-show="detailShow">
  		<div class="detail-wrapper clearfix">
  			<div class="detail-main">
  				<div class="name">{{seller.name}}</div>
  				<div class="starWraper">
  					<v-star :size="48" :score="seller.score"></v-star>
  				</div>
  				<div class="title">
  					<div class="line"></div>
  					<div class="text">优惠信息</div>
  					<div class="line"></div>
  				</div>
  				<ul v-if="seller.supports" class="supports">
  					<li class="support-item" v-for="item in seller.supports">
  						<span class="icon" :class="classMap[item.type]"></span>
  						<span class="text">{{item.description}}</span>
  					</li>
  				</ul>
  				<div class="title">
  					<div class="line"></div>
  					<div class="text">商家公告</div>
  					<div class="line"></div>
  				</div>
  				<div class="bulletin">
  					<p class="content">{{seller.bulletin}}</p>
  				</div>
  			</div>
  		</div>
  		<div class="detail-close" @click="hideDetail"><i class="icon iconfont icon-iconclose"></i></div>
  	</div>
  </div>
</template>

<script>
  import star from '@/components/star/star.vue';
  export default {
	props: {
		seller:{
			type:Object
		}
	},
	data() {
		return {
			detailShow: false
		}
	},
	methods: {
		showDetail() {
			this.detailShow = true;
		},
		hideDetail() {
			this.detailShow = false;
		}
	},
	created() {
		this.classMap = [
			'decrease',
			'discount',
			'special',
			'invoice',
			'guarantee'
		];
	},
	components:{
		'v-star':star
	}
  };
</script>

<style>
	.header{
		color:#fff;
		position: relative;
		background-color: rgba(7,17,27,.5);
		overflow: hidden;
	}
	.header .content-wrapper{
		padding:24px 12px 18px 24px;
		font-size: 0;
		position: relative;
	}
	.header .avatar{
		display: inline-block;
		vertical-align: top;
	}
	.header .avatar img{
		border-radius: 2px;
	}
	.header .content{
		display: inline-block;
		font-size: 14px;
		margin-left: 16px;		
	}
	.header .content .title{
		margin:2px 0 8px 0;
	}
	.header .content .title .brand{
		width:30px;
		height:18px;
		display: inline-block;
		background: url(./brand@2x.png) no-repeat 0 0;
		background-size: cover !important;
		vertical-align: top;
	}
	.header .content .title .name{
		margin-left: 6px;
		font-size: 16px;
		line-height: 18px;
		font-weight: bold;
	}
	.header .content .description{
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}

	.header .content .support{
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}

	.header .content .support .icon{
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: 2px;
		background-size: 12px 12px !important;
		vertical-align: top;
	}
	.header .icon.decrease{
		background: url(./decrease_1@2x.png) no-repeat 0 0;
	}
	.header .icon.discount{
		background: url(./discount_1@2x.png) no-repeat 0 0;
	}
	.header .icon.guarantee{
		background: url(./guarantee_1@2x.png) no-repeat 0 0;
	}
	.header .icon.invoice{
		background: url(./invoice_1@2x.png) no-repeat 0 0;
	}
	.header .icon.special{
		background: url(./special_1@2x.png) no-repeat 0 0;
	}

	.header .content-wrapper .support-count{
		position: absolute;
		font-size: 10px;
		right:12px;
		bottom:14px;
		padding: 0 6px 0 8px;
		line-height: 24px;
		height: 24px;
		border-radius: 14px;
		background-color: rgba(0,0,0,.2);
		text-align: center;
	}
	.header .content-wrapper .support-count .icon{
		vertical-align: middle;
		margin-left: -3px;
	}

	.header .bulletin-wrapper{
		height:28px;
		line-height: 28px;
		padding:0 22px 0 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		position: relative;
		background-color: rgba(7,17,27,.2);
	}
	.header .bulletin-wrapper .bulletin-title{
		display: inline-block;
		width: 22px;
		height: 12px;
		background: url(./bulletin@2x.png) no-repeat 0 0;
		background-size: 22px 12px !important;
		vertical-align:middle;
	}
	.header .bulletin-wrapper .bulletin-text{
		font-size:10px;
		margin: 0 4px;
	}
	.header .bulletin-wrapper i{
		position: absolute;
		right:4px;
		top:2px;
		font-size: 12px;
	}

	.header > .background{
		position: absolute;
		top:0;
		left:0;
		width:100%;
		height: 100%;
		z-index: -1;
		filter: blur(10px);
	}

	.header > .detail{
		position: fixed;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(7,17,27,.8);
		transition: all 0.5s;
		backdrop-filter: blur(10px);/*iphone才有用*/
		top:0;
		left:0;
	}
	/* .header > .detail.fade-transition{
		background-color: rgba(7,17,27,.8);
		opacity: 1;
	}
	.header > .detail.fade-enter, .header > .detail.fade-leave{
		background-color: rgba(7,17,27,0);
		opacity: 0;
	} */

	.detail .detail-wrapper{
		min-height: 100%; 
		width:100%;
	}
	.detail .detail-wrapper .detail-main{
		margin-top: 64px;
		padding-bottom: 64px; 
	}
	.detail-wrapper .detail-main .name{
		line-height: 16px;
		text-align: center;
		font-size: 16px;
		font-weight: 700; 
	}
	.detail-wrapper .detail-main .starWraper{
		margin-top: 18px;
		padding: 2px 0;
		text-align: center;
	}
	.detail-wrapper .detail-main .title{
		width:80%;
		margin:28px auto 24px;
		display:flex;
	}
	.detail-wrapper .detail-main .title .line{
		flex: 1;
		position: relative;
		top:-6px;
		border-bottom:rgba(255,255,255,.2) solid 1px;
	}
	.detail-wrapper .detail-main .title .text{
		padding:0 12px;
		font-size: 14px;
		font-weight: 700;
	}
	.detail-wrapper .detail-main .supports{
		width:80%;
		margin:0 auto;
	}
	.detail-wrapper .detail-main .supports .support-item{
		padding:0 12px;
		margin-bottom: 12px;
		font-size:0;
	}
	.detail-wrapper .detail-main .supports .support-item:last-child{
		margin-bottom: 0;
	}
	.detail-main .supports .support-item .icon{
		display:inline-block;
		width:16px;
		height:16px;
		vertical-align: top;
		margin-right: 6px;
		background-size: 16px 16px !important;
		background-repeat: no-repeat;
	}
	.detail-main .supports .support-item .icon.decrease{
		background: url(./decrease_2@2x.png) no-repeat 0 0;
	}
	.detail-main .supports .support-item .icon.discount{
		background: url(./discount_2@2x.png) no-repeat 0 0;
	}
	.detail-main .supports .support-item .icon.guarantee{
		background: url(./guarantee_2@2x.png) no-repeat 0 0;
	}
	.detail-main .supports .support-item .icon.invoice{
		background: url(./invoice_2@2x.png) no-repeat 0 0;
	}
	.detail-main .supports .support-item .icon.special{
		background: url(./special_2@2x.png) no-repeat 0 0;
	}
	.detail-main .supports .support-item .text{
		font-size: 12px;
		line-height: 16px;
	}
	.detail-wrapper .detail-main .bulletin{
		width:80%;
		margin:0 auto;
	}
	.detail-wrapper .detail-main .bulletin .content{
		padding:0 12px;
		font-size: 12px;
		line-height: 24px;
		margin:0;
	}
	.detail .detail-close{
		position: relative;
		width:32px;
		height: 32px;
		margin:-64px auto 0;
		clear:both;
		font-size: 32px;
	}
	.detail .detail-close i{
		font-size: 32px;
	}

	@media (-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3){
		.header .content .title .brand{background: url(./brand@3X.png) no-repeat 0 0;}
		.header .icon.decrease{
			background: url(./decrease_1@3x.png) no-repeat 0 0;
		}
		.header .icon.discount{
			background: url(./discount_1@3x.png) no-repeat 0 0;
		}
		.header .icon.guarantee{
			background: url(./guarantee_1@3x.png) no-repeat 0 0;
		}
		.header .icon.invoice{
			background: url(./invoice_1@3x.png) no-repeat 0 0;
		}
		.header .icon.special{
			background: url(./special_1@3x.png) no-repeat 0 0;
		}

		.header .bulletin-wrapper .bulletin-title{
			background: url(./bulletin@3x.png) no-repeat 0 0;
		}

		.detail-main .supports .support-item .icon.decrease{
			background: url(./decrease_2@3x.png) no-repeat 0 0;
		}
		.detail-main .supports .support-item .icon.discount{
			background: url(./discount_2@3x.png) no-repeat 0 0;
		}
		.detail-main .supports .support-item .icon.guarantee{
			background: url(./guarantee_2@3x.png) no-repeat 0 0;
		}
		.detail-main .supports .support-item .icon.invoice{
			background: url(./invoice_2@3x.png) no-repeat 0 0;
		}
		.detail-main .supports .support-item .icon.special{
			background: url(./special_2@3x.png) no-repeat 0 0;
		}
	}
</style>
