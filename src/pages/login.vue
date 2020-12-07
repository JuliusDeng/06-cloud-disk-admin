<template>
	<div class="d-flex justify-content-center" style="height: 100vh;background-color: #515a6e;">
		
		<div class="bg-white rounded px-3 pt-3" style="width: 380px;margin-top: 50px;height: max-content;">
			<div class="d-flex flex-column align-items-center justify-content-center mb-4">
				<div class="d-flex align-items-center">
					<Icon type="md-briefcase" size="55" color="#2db7f5"/>
					<h3 class="text-muted ml-2">企业网盘</h3>
				</div>
				<span class="text-muted small mt-3">企业级网盘解决方案</span>
			</div>
			<Form ref="form" :label-width="0" :model="formItem" :rules="rules">
				<FormItem prop="username">
					<Input v-model="formItem.username" placeholder="请输入用户名..."></Input>
				</FormItem>
				<FormItem prop="password">
					<Input v-model="formItem.password" placeholder="请输入密码..." type="password"></Input>
				</FormItem>
				<div class="d-flex align-items-center mb-2">
					<Checkbox v-model="formItem.remember">自动登录</Checkbox>
					<a href="#" class="small ml-auto">忘记密码</a>
					<span class="mx-1">|</span>
					<a href="#" class="small">注册账户</a>
				</div>
				<FormItem>
					<Button type="primary" long @click="sumbit">登 录</Button>
				</FormItem>
			</Form>
		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				formItem:{
					username:"",
					password:"",
					remember:false
				},
				rules:{
					username:[{
						required: true, 
						message: '请输入用户名...', 
						trigger: 'blur'
					}],
					password:[{
						required: true,
						message: '请输入密码...', 
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			sumbit() {
				this.$refs.form.validate((valid)=>{
					if(!valid) return
					console.log('提交表单');
				})
			}
		},
	}
</script>

<style>
</style>
