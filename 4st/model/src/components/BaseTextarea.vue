<template>
	<div class="textarea-box">
		<label v-bind:for="id">{{ label }}</label>
		<textarea v-bind:name="name" v-bind:id="id" v-bind:value="value" v-on:input="updateTextarea"></textarea>
	</div>
</template>

<script>
export default {
	name: "BaseTextarea",
	props:['value','name','id','label'],
	methods:{
		updateTextarea: function (event) {
			this.$emit('input',event.target.value);
		}
	}
}
</script>

<style lang="scss" scoped>
.textarea-box{
	display:flex;
	align-items:center;
	margin-bottom:15px;
	font-size:16px;
	label{
		width:15%;
		margin-right:10px;
	}
	textarea{
		width:100%;
		padding:5px;
		border:1px solid #222;
		font-size:16px;
	}
}
</style>