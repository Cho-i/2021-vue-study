<template>
	<div class="radio-box">
		<input type="radio" v-bind:name="name" v-bind:id="id" v-bind:value="id" v-bind:checked="checked" v-on:change="updateRadio">
		<label v-bind:for="id">{{ label }}</label>
	</div>
</template>

<script>
export default {
	name: "BaseRadio",
	props:['value','name','id','label'],
	data(){
		return{
			checked:false
		}
	},
	methods:{
		updateRadio: function (event) {
			this.checked = event.target.checked;
			//this.$emit('change',event.target.value);
			
		}
	}
}
</script>

<style lang="scss" scoped>
.radio-box{
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