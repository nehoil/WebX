<template>
  <section>
    <el-form
      ref="login-form"
      :model="loginCred"
      label-width="120px"
      v-if="!isSignUp"
    >
      <el-form-item label="Email">
        <el-input v-model="loginCred.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="loginCred.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLogin">Login</el-button>
        <el-button @click="cancel">Cancel</el-button>
        <p>
          Not a member yet?
          <a @click="toggleSignUp" class="signup-a">Sign up!</a>
        </p>
      </el-form-item>
    </el-form>

    <el-form ref="form" :model="signupCred" label-width="120px" v-if="isSignUp">
      <el-form-item label="Name">
        <el-input v-model="signupCred.username"></el-input>
      </el-form-item>
      <el-form-item label="Mail">
        <el-input v-model="signupCred.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="signupCred.password" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitSignup">Sign up</el-button>
        <el-button @click="cancel">Cancel</el-button>
        <p>Not a member yet? <a @click="toggleSignUp">Sign up!</a></p>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isSignUp: false,
      loginCred: {},
      signupCred: {},
    };
  },
  methods: {
    async submitLogin() {
      const cred = this.loginCred;
      if (!cred.email || !cred.password) return (this.msg = 'Please enter user/password');
      try {
        await this.$store.dispatch({ type: 'login', userCred: cred });
        this.loginCred = {};
        this.$emit('showLogin');
        console.log('login successfully!');
      } catch(err) {
        console.log('login failed, err:', err);
      }
    },
    async submitSignup() {
      const cred = this.signupCred;
      if (!cred.email || !cred.password || !cred.username)
        return (this.msg = 'Please fill up the form');
        try {
          await this.$store.dispatch({ type: 'signup', userCred: cred })
          this.$emit('showLogin');
        }
        catch(err){
          console.log(err);
          
        }
    },
    cancel() {
      this.$emit('showLogin');
    },
    toggleSignUp() {
      this.isSignUp = !this.isSignUp;
    },
  },
};
</script>