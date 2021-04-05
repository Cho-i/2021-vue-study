<template>
	<div id="gallery">
		<ul>
			<li v-for="(item, key) in items" :key="key" @mouseover="mouseOver" @mouseleave="mouseLeave">
				<div class="img-box"><img :src="require(`@/assets/img/${item.src}`)" alt=""></div>
				<div class="txt-box">
					<p class="title">{{item.title}}</p>
					<p class="date">{{item.date}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'gallery',
	props: ['items'],
	data() {
		return {
			//isActive: false
		}
	},
	methods: {
		mouseOver: function(e){
			e.currentTarget.classList.add('hover');
		},
		mouseLeave: function(e){
			e.currentTarget.classList.remove('hover');
		}
	}
}
</script>

<style lang="scss" scoped>
	#gallery{
		$margin : calc(10%/2);
		ul{
			display:flex;
			flex-wrap:wrap;
			width:100%;
			li{
				position:relative;
				width:30%;
				list-style:none;
				margin-left:$margin;
				margin-bottom:$margin;
				&:nth-child(3n+1){
					margin-left:0;
				}
				&:before{
					content:'';
					position:absolute;
					top:100%;
					right:0;
					bottom:0;
					left:0;
					background:rgba(0,0,0,0.3);
					z-index:1;
					opacity:0;
					transition:0.3s;
				}
				&.hover{
					&:before{
						top:0;
						opacity:1;
					}
					.txt-box{
						opacity:1;
					}
				}
				.img-box{
					img{
						width:100%;
					}
				}
				.txt-box{
					position:absolute;
					top:10px;
					left:10px;
					right:10px;
					bottom:10px;
					z-index:2;
					opacity:0;
					transition:0.3s;
					text-align:left;
					p{
						font-size:14px;
						color:#fff;
						&.title{
							font-weight:700;
						}
						&.date{
							position:absolute;
							right:0;
							bottom:0;
						}
					}
				}
			}
		}
	}

</style>