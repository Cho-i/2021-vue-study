<template>
	<div class="about">
		<div class="tab-wrap">
			<button v-for="(tab, index) in componentTypes" :class="{active: current === index}" @click="current = index">{{tab}}</button>
		</div>
		<div class="content-wrap">
			<keep-alive>
				<transition mode="out-in">
					<component :is="component" :items="items"></component>
				</transition>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import list from "../components/list";
import gallery from "../components/gallery";
import webzine from "../components/webzine";

export default {
	name: 'about',
	components: {
		'list': list,
		'gallery': gallery,
		'webzine': webzine
	},
	data() {
		return {
			// 컴포넌트 리스트
			componentTypes: ['list', 'gallery', 'webzine'],
			// 렌더링할 컴포넌트를 선택하는 index
			current: 0,
			items: [
				{ id: 1, title: '죠르디 사생활01', name: '팬다 주니어', date: '2021-04-01', count: 10, cont: '응원하는 죠르디', src: '01.png'},
				{ id: 2, title: '죠르디 사생활02', name: '스카피', date: '2021-04-02', count: 20, cont: '즐거운 죠르디', src: '02.png'},
				{ id: 3, title: '죠르디 사생활03', name: '케로&베로니', date: '2021-04-03', count: 30, cont: '열일하는 죠르디', src: '03.png'},
				{ id: 4, title: '죠르디 사생활04', name: '앙몬드', date: '2021-04-04', count: 40, cont: '하트날리는 죠르디', src: '04.gif'},
				{ id: 5, title: '죠르디 사생활05', name: '콥&빠냐', date: '2021-04-05', count: 50, cont: '슬픈 죠르디', src: '05.png'},
				{ id: 6, title: '죠르디 사생활06', name: '죠르디', date: '2021-04-06', count: 60, cont: '화난 죠르디', src: '06.png'},
			]
		}
	},
	computed: {
		component: function () {
			// current와 일치하는 index 컴포넌트 사용하기
			return this.componentTypes[this.current]
		}
	}
}
</script>

<style lang="scss" scoped>
	.about{
		position:relative;
		.tab-wrap{
			display:flex;
			justify-content:center;
			align-items:center;
			button{
				display:inline-flex;
				justify-content:center;
				align-items:center;
				width:150px;
				height:50px;
				background:#ffff;
				border:1px solid #939597;
				border-left-width:0;
				color:#000;
				font-size:16px;
				font-weight:bold;
				text-transform:uppercase;
				cursor:pointer;
				outline:none;
				&:first-child{
					border-left-width:1px;
				}
				&.active{
					background-color:#91EBA5;
				}
			}
		}
		.content-wrap{
			margin-top:50px;
			&>div{
				transition: all 0.5s ease;
			}
			.v-enter {
				transform: translateX(-100%);
			}
			.v-leave-to {
				transform: translateX(100%);
			}
		}
	}
</style>