<template>
	<div id="list">
		<table>
			<thead>
			<tr>
				<th>번호</th>
				<th>제목</th>
				<th>글쓴이</th>
				<th>날짜</th>
				<th>조회수</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item, key) in items" :key="key" @click="openModal(item)">
				<td>{{item.id}}</td>
				<td>{{item.title}}</td>
				<td>{{item.name}}</td>
				<td>{{item.date}}</td>
				<td>{{item.count}}</td>
			</tr>
			</tbody>
		</table>
		
		<!-- modal -->
		<modal @close="closeModal" v-if="modal">
			<template slot="title">
				<h2>{{modalItem.title}}</h2>
			</template>
			<template slot="date">
				<span>{{modalItem.date}}</span>
			</template>
			<template slot="name">
				<span>{{modalItem.name}}</span>
			</template>
			<template slot="img">
				<img :src="require(`@/assets/img/${modalItem.src}`)" alt="">
			</template>
			<template slot="cont">
				<p>{{modalItem.cont}}</p>
			</template>
		</modal>
		<!-- //modal -->
	</div>
</template>

<script>
	import modal from "../components/modal";
	export default {
		name: 'list',
		props: ['items'],
		components: {
			'modal': modal
		},
		data() {
			return {
				modal: false,
				modalItem: null
			}
		},
		methods: {
			openModal(item) {
				this.modal = true;
				this.modalItem = item;
			},
			closeModal() {
				this.modal = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	table{
		width:100%;
		border-collapse: collapse;
		border-spacing:0;
		tr{
			cursor:pointer;
		}
		th,td{
			padding:10px;
			font-size:14px;
			border:1px solid #939597;
		}
	}
</style>