<template>
<section>
<el-form ref="login-form" :model="login" label-width="120px" v-if="!isSignUp">
  <el-form-item label="Name">
    <el-input v-model="login.name"></el-input>
  </el-form-item>
  <el-form-item label="Password">
    <el-input v-model="login.Password" show-password></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitLogin">Login</el-button>
    <el-button>Cancel</el-button>
  <p>Not a member yet? <a @click="toggleSignUp">Sign up!</a></p>
  </el-form-item>
</el-form>

  <el-form ref="form" :model="signup" label-width="120px" v-if="isSignUp">
  <el-form-item label="Name">
    <el-input v-model="signup.name"></el-input>
  </el-form-item>
  <el-form-item label="Mail">
    <el-input v-model="signup.mail"></el-input>
  </el-form-item>
  <el-form-item label="Password">
    <el-input v-model="signup.Password" show-password></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitSignup">Sign up</el-button>
    <el-button>Cancel</el-button>
  <p>Not a member yet? <a @click="toggleSignUp">Sign up!</a></p>
  </el-form-item>
</el-form>
</section>


</template>
<script>
  export default {
    data() {
      return {
        isSignUp:false,
        login: {
          name: '',
          Password:'',         
        },
        signup: {
          name: '',
          Password:'', 
          mail:''        
        }
      }
    },
    methods: {
      submitLogin() {
        console.log(this.login.name, this.login.Password);
        this.$emit('showLogin')
      },
    toggleSignUp(){
      this.isSignUp = !this.isSignUp
    },
    submitSignup(){
      console.log('signup');
      
    }
    },
  }
</script>