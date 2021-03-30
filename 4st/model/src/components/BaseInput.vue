<template>
	<div class="input-box">
		<label v-bind:for="id">{{ label }}</label>
		<input v-bind:type="type" v-bind:id="id" v-bind:value="value" v-on:input="updateInput">
	</div>
</template>

<script>
export default {
	name: "BaseInput",
	props:['value','type','id','label'],//BaseInput 컴포넌트의 상위 컴포넌트에서 props로 받은 value를 인풋 태그에 값으로 연결
	methods:{
		//인풋 태그에서 값이 입력되면 인풋 태그에서 input 이벤트가 발생하고 updateInput 메서드가 실행
		updateInput: function (event) {
			this.$emit('input',event.target.value);//updateInput 메서드에서 인풋 태그에 입력된 값을 상위 컴포넌트에 input 이벤트로 올려 보냄
		}
	}
}
</script>

<style lang="scss" scoped>
	.input-box{
		display:flex;
		align-items:center;
		margin-bottom:15px;
		font-size:16px;
		label{
			width:15%;
			margin-right:10px;
		}
		input{
			width:100%;
			padding:5px;
			border:1px solid #222;
			font-size:16px;
		}
	}
</style>