<template>
	<div class="check-box">
		<input type="checkbox" v-bind:name="name" v-bind:id="id" v-bind:value="id" v-bind:checked="checked" v-on:input="updateCheck">
		<label v-bind:for="id">{{ label }}</label>
	</div>
</template>

<script>
export default {
	name: "BaseCheck",
	props:['value','name','id','label','checked'],
	methods:{
		updateCheck: function (event) {
			this.$emit('input',event.target.value);
			//this.$emit('input',event.target.checked);
			//const checked = false;
			
		}
	}
}
</script>

<style lang="scss" scoped>
.check-box{
	display:inline-flex;
	justify-content:center;
	align-items:center;
	margin-right:15px;
	font-size:16px;
	label{
		margin-left:10px;
	}
}
</style>