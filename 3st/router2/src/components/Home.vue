<template>
	<div id="app">
		<Lnb/>
		<div class="content">
			<p>home</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Home",
	}
</script>

<style lang="scss">
*{
	margin:0;
	padding:0;
}
#app{
	display:flex;
	height:100vh;
}
.content{
	width:calc(100% - 300px);
	padding:1rem;
}
</style>