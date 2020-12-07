<template>
	<Layout style="height: 100vh;">
		<Header class="bg-white px-0" style="height: 60px;line-height: 60px;">
			
			 <Menu mode="horizontal" theme="light" 
			 :active-name="topActive" @on-select="handleSelect"
			 class="d-flex align-items-center">
				<div style="width: 200px;font-size: 25px;" class="text-center">
					企业网盘
				</div>
				<MenuItem :name="index" 
				v-for="(item,index) in topMenus"
				:key="index">
					<Icon :type="item.icon" />
					{{item.title}}
				</MenuItem>
				
				<div class="ml-auto mr-5">
					 <Dropdown style="margin-left: 20px" placement="bottom-end">
						<a href="javascript:void(0)">
							<Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
							管理员
							<Icon type="ios-arrow-down"></Icon>
						</a>
						<DropdownMenu slot="list">
							<DropdownItem>个人资料</DropdownItem>
							<DropdownItem>修改密码</DropdownItem>
							<DropdownItem>安全退出</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</Menu>
			
		</Header>
		<Layout>
			<Sider style="background-color: #EBF0F1;position: relative;" hide-trigger>
				
				<Menu theme="light" active-name="1" width="200px"
				style="background-color: #EBF0F1;" @on-select="handleSiderSelect">
					<MenuGroup title="全部文件">
						<MenuItem name="1">
							<Icon type="md-document" />
							图片
						</MenuItem>
						<MenuItem name="2">
							<Icon type="md-chatbubbles" />
							 视频
						</MenuItem>
						<MenuItem name="3">
							<Icon type="md-document" />
							音乐
						</MenuItem>
						<MenuItem name="4">
							<Icon type="md-chatbubbles" />
							 其他
						</MenuItem>
					</MenuGroup>
					<MenuGroup title="其他操作">
						<MenuItem name="5">
							<Icon type="md-heart" />
							我的分享
						</MenuItem>
						<MenuItem name="6">
							<Icon type="md-leaf" />
							回收站
						</MenuItem>
					</MenuGroup>
				</Menu>
				
				
				<div style="width: 200px;background-color: #EBF0F1;height: 55px;position: absolute;bottom: 0;left: 0;" class="px-3">
					<Progress :percent="90" :stroke-color="['#108ee9', '#87d068']" hide-info/>
					<div class="d-flex mt-2" style="justify-content: space-between;">
						<small>总共：100GB</small>
						<small class="text-warning">已用：90GB</small>
					</div>
				</div>
			</Sider>
			<Content class="bg-white" style="position: relative;">
				<div style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;overflow-y: auto;">
					<router-view></router-view>
				</div>
			</Content>
		</Layout>
	</Layout>
</template>

<script>
	export default {
		data() {
			return {
				topActive:0,
				topMenus: [{
					icon:"ios-paper",
					title:"网盘"
				},{
					icon:"ios-people",
					title:"分享"
				},{
					icon:"ios-construct",
					title:"更多"
				}]
			}
		},
		methods: {
			// 监听选中顶部导航
			handleSelect(e) {
				this.topActive = e
			},
			handleSiderSelect(e){
				console.log(e);
			}
		},
	}
</script>

<style>
	.ivu-progress-inner{
		background-color: #FFFFFF!important;
		border:1px solid #aaaaaa!important;
	}
</style>
