<template>
	<div id="gallery">
		<ul>
			<li v-for="(item, key) in items" :key="key" >
				<div class="img-box"><img :src="require(`@/assets/img/${item.src}`)" alt=""></div>
				<div class="txt-box">
					<p class="title">{{item.title}}</p>
					<p class="cont">{{item.cont}}</p>
					<p class="date">{{item.date}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'webzine',
	props: ['items']
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
				border:1px solid #939597;
				&:nth-child(3n+1){
					margin-left:0;
				}
				.img-box{
					img{
						width:100%;
					}
				}
				.txt-box{
					padding:10px;
					border-top:1px solid #939597;
					p{
						font-size:14px;
						&.title{
							font-weight:700;
						}
					}
				}
			}
		}
	}

</style>