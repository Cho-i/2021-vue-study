<template>
	<div id="nav">
		<v-link href="/">Home</v-link>
		<v-link href="/about">about</v-link>
		<v-link href="/content">content</v-link>
	</div>
</template>

<script>
	import VLink from "@/components/VLink"
	export default {
		name: "Lnb",
		components:{
			VLink
		}
	}
</script>

<style lang="scss" scoped>
#nav{
	display:flex;
	flex-flow:column;
	width:300px;
	border-right:1px solid #ddd;
	h1{
		padding:1rem;
		font-size:2rem;
		color:#222;
	}
	a{
		padding:0.5rem 1rem;
		font-size:1.5rem;
		text-decoration:none;
		color:#222;
		&.active{
			color:lightseagreen;
		}
	}
}
</style>
