<template>
  <div class="goods">
  	<div class="menu-wrapper" ref="menuWrapper">
  		<ul>
  			<li v-for="(item,index) in goods" class="menu-item" :class="{'active':currentIndex === index}" @click="selectMenu(index,$event)">
  				<span class="text"><span class="icon" :class="classMap[item.type]" v-show="item.type>0"></span>{{item.name}}</span>
  			</li>
  		</ul>
  	</div>
  	<div class="foods-wrapper" ref="foodWrapper">
  		<ul>
  			<li v-for="item in goods" class="food-list food-list-hook">
  				<h1 class="title">{{item.name}}</h1>
  				<ul>
  					<li v-for="food in item.foods" class="food-item">
  						<div class="icon">
  							<img :src="food.icon" alt="" width="100%">
  						</div>
  						<div class="content">
  							<h2 class="name">{{food.name}}</h2>
  							<p class="desc" v-show="food.description">{{food.description}}</p>
  							<div class="extra">
  								<span class="count">月售{{food.sellCount}}份</span>
  								<span>好评率{{food.rating}}%</span>
  							</div>
  							<div class="price">
  								<span class="now">￥{{food.price}}</span>
  								<span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
  							</div>
  						</div>
  					</li>
  				</ul>
  			</li>
  		</ul>
  	</div>
  </div>
  
</template>

<script>
  import BScroll from 'better-scroll';

  const ERR_OK = 0;
  export default {
  	props: {
  		seller: {
  			type: Object
  		}
  	},
  	data() {
  		return {
  			goods: [],
  			listHeight: [],
        	scrollY: 0,
  		}
  	},
  	computed: {
  		currentIndex() {
  			for (let i = 0; i < this.listHeight.length; i++) {
  				let height1 = this.listHeight[i];
	          	let height2 = this.listHeight[i + 1];
	          	if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
	            	return i;
	          	}
  			}
  			return 0;
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
  		this.$http.get('/api/goods').then((response) => {
  			response = response.body;
  			if(response.errno === ERR_OK){
  				this.goods = response.data;
  				this.$nextTick(() => {
  					this._initScroll();
  					this._calcHeight();
  				});
  				
  			}
  		});
  	},
  	methods: {
  		selectMenu(index,event){
  			if(!event._constructed){
  				return;
  			}

  			let foodList = this.$refs.foodWrapper.getElementsByClassName("food-list-hook");
  			let el = foodList[index];
  			this.foodScroll.scrollToElement(el,300);
  		},
  		_initScroll() {
  			this.menuScroll = new BScroll(this.$refs.menuWrapper,{
  				click:true
  			});
  			this.foodScroll = new BScroll(this.$refs.foodWrapper,{
  				probeType: 3
  			});

  			this.foodScroll.on('scroll',(pos) => {
  				this.scrollY = Math.abs(Math.round(pos.y));
  			});
  		},
  		_calcHeight() {
  			let foodList = this.$refs.foodWrapper.getElementsByClassName("food-list-hook");
  			let height = 0;
  			this.listHeight.push(height);
  			for (var i = 0; i < foodList.length; i++) {
  				let item = foodList[i];
  				height += item.clientHeight;
  				this.listHeight.push(height);
  			}
  		}
  	}
  };
</script>

<style>
	.goods{
		position: absolute;
		width:100%;
		top:183px;
		bottom:46px;
		display: flex;
		overflow:hidden;
	}
	.goods .menu-wrapper{
		flex: 0 0 80px;
		width: 80px;
		background-color: #f3f5f7;
	}
	.goods .menu-wrapper .menu-item{
		display:table;
		width:54px;
		height:56px;
		line-height: 14px;
		margin:0 auto;
		padding:0 13px;
		border-bottom:1px solid rgba(7,17,27,.1);
	}
	.goods .menu-wrapper .menu-item.active{
		background-color: #fff;
		font-weight: 700;
	}
	.goods .menu-wrapper .menu-item .icon{
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: 2px;
		background-size: 12px 12px !important;
		vertical-align: baseline;
	}
	.goods .menu-wrapper .menu-item .text{
		display:table-cell;
		width:56px;
		vertical-align: middle;
		font-size: 12px;
	}
	.goods .menu-wrapper .menu-item .icon.decrease{
		background: url(./decrease_3@2x.png) no-repeat 0 0;
	}
	.goods .menu-wrapper .menu-item .icon.discount{
		background: url(./discount_3@2x.png) no-repeat 0 0;
	}
	.goods .menu-wrapper .menu-item .icon.guarantee{
		background: url(./guarantee_3@2x.png) no-repeat 0 0;
	}
	.goods .menu-wrapper .menu-item .icon.invoice{
		background: url(./invoice_3@2x.png) no-repeat 0 0;
	}
	.goods .menu-wrapper .menu-item .icon.special{
		background: url(./special_3@2x.png) no-repeat 0 0;
	}
	.goods .foods-wrapper{
		flex: 1;
	}
	.goods .foods-wrapper .title{
		padding-left: 14px;
		height: 26px;
		line-height: 26px;
		border-left: solid 2px #d9dde1;
		font-size: 12px;
		color: rgb(147,153,159);
		background-color: #f3f5f7;
	}
	.goods .foods-wrapper .food-item{
		display:flex;
		margin:18px;
		border-bottom:solid 1px #eee;
		padding-bottom: 18px;
	}
	.goods .foods-wrapper .food-item:last-child{
		border-bottom:none;
		margin-bottom: 0;
	}
	.foods-wrapper .food-item .icon{
		flex: 0 0 57px;
		margin-right: 10px;
	}
	.foods-wrapper .food-item .content{
		flex: 1	
	}
	.food-item .content .name{
		margin:2px 0 8px 0;	
		height: 14px;
		line-height: 14px;
		font-size: 14px;
		color:rgb(7,17,27);
	}
	.food-item .content .desc{
		margin-bottom:8px;	
		line-height: 14px;
		font-size: 10px;
		color:rgb(147,153,159);
	}
	.food-item .content .extra{
		height: 10px;
		font-size: 10px;
		color:rgb(147,153,159);
	}
	.food-item .content .extra .count{
		margin-right: 12px;
	}
	.food-item .content .price{
		font-weight: 700;
		line-height: 24px;
		/* margin-top: 2px; */
	}
	.food-item .content .price .now{
		font-size: 14px;
		margin-right: 8px;
		color:rgb(240,20,20);
	}
	.food-item .content .price .old{
		font-size: 10px;
		color:rgb(147,153,159);
		text-decoration: line-through;
	}
</style>
