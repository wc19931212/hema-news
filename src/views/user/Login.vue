<template>
  <div>
    <MyHeader>登录</MyHeader>
    <Mylogo></Mylogo>
    <van-form @submit="login">
  <van-field
    v-model="username"
    name="用户名"
    label="账号"
    placeholder="请填写用户名"
    :rules="rules.username"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="请填写密码"
    :rules="rules.password"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
  <p class="p">如果没有账号，点击<router-link to='/register' class="regi">注册</router-link></p>
</van-form>
    </div>
</template>
<script>
export default {
  created () {
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  },
  data () {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /^\d{5,11}$/, message: '用户名长度为5-11位数字', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'onChange' },
          { pattern: /^\d{3,9}$/, message: '密码长度为3-9位数字', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async login () {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      // console.log(res)
      const { statusCode, message, data } = res.data
      if (statusCode === 200) {
        // this.$toast.success('登录成功')
        this.$toast.success(message)
        localStorage.setItem('token', data.token)
        localStorage.setItem('id', data.user.id)
        this.$router.push('/user')
      } else {
        this.$toast.fail('登录失败')
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .p {
    margin: 20px;
    float: right;
    font-size: 14px;
    .regi {
      color: blue;
    }
  }
</style>
