<template>
  <div class="home">
    <base-input v-model="inputText" type="text" label="이름" id="name"></base-input>
    <base-input v-model="inputPassword" type="password" label="비밀번호" id="password"></base-input>
    <base-input v-model="inputEmail" type="email" label="이메일" id="email"></base-input>
    <base-textarea v-model="textarea" name="textarea" label="내용" id="textarea"></base-textarea>
    <div>
      <base-radio v-model="inputRadio" id="male" name="gender" label="Male"></base-radio>
      <base-radio v-model="inputRadio" id="female" name="gender" label="female"></base-radio>
    </div>
    
    <div class="result-box">
      <p><strong>이름 : </strong>{{ inputText }}</p>
      <p><strong>비밀번호 : </strong>{{ inputPassword }}</p>
      <p><strong>이메일 : </strong>{{ inputEmail }}</p>
      <p><strong>내용 : </strong>{{ textarea }}</p>
      <p><strong>gender : </strong>{{ inputRadio }}</p>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import BaseInput from "../components/BaseInput";
import BaseTextarea from "../components/BaseTextarea";
import BaseRadio from "../components/BaseRadio";
import BaseCheck from "../components/BaseCheck";

export default {
  name: 'Home',
  components: {
    'base-input': BaseInput,
    'base-textarea': BaseTextarea,
    'base-radio': BaseRadio,
    'base-check': BaseCheck
  },
  data(){
    return{
      inputText:'',
      inputPassword:'',
      inputEmail:'',
      inputRadio:'',
      inputCheckbox:'',
      textarea:''
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    display:flex;
    justify-content:center;
    flex-flow:column;
    width:50%;
    height:100vh;
    margin:0 auto;
    .result-box{
      margin-top:30px;
      width:50%;
      p{
        font-size:16px;
        margin-bottom:5px;
        strong{
          margin-right:10px;
        }
      }
    }
  }
</style>