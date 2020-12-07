<template>
	<div>
		<div class="border-bottom px-3" style="position: absolute;top: 0;left: 0;right: 0;height: 90px;">
			<div class="d-flex align-items-center" style="height: 50px;">
				<Button type="primary" icon="ios-search" class="mr-2">上传</Button>
				<Button icon="ios-search" class="mr-2">新建文件夹</Button>
				<Button icon="ios-search" class="mr-2">下载</Button>
				<Button icon="ios-search" class="mr-2">分享</Button>
				<Button icon="ios-search" class="mr-2">重命名</Button>
				<Button icon="ios-search" class="mr-2">删除</Button>
				
				
				<Input class="ml-auto" style="width: 200px;" search enter-button placeholder="请输入关键词..." />
			</div>
			<div style="height: 40px;" 
			class="d-flex align-items-center">
				<Checkbox size="small"><span class="ml-3">全选</span></Checkbox>
			</div>
		</div>
		
		<div style="position: absolute;overflow-y: auto;left: 0;right: 0;top: 90px;bottom: 55px;">
			
			<div class="border-bottom px-3 py-2">
				<Row>
					<Col span="12" class="d-flex align-items-center">
						<Checkbox size="small" class="mb-0 mr-3"></Checkbox>
						<i class="iconfont icon-file-b-2 text-warning mr-3" style="font-size: 28px;"></i>
						<small>我的目录</small>
						
						<div class="ml-auto text-primary">
							<Tooltip content="分享" 
							placement="bottom">
							    <Icon type="md-share" size="18" class="mx-2" style="cursor: pointer;"/>
							</Tooltip>
							<Tooltip content="下载"
							placement="bottom">
							    <Icon type="md-cloud-download" size="18" class="mx-2" style="cursor: pointer;"/>
							</Tooltip>
							 <Dropdown>
								<Icon type="ios-more" size="18" class="mx-2" style="cursor: pointer;"/>
								<DropdownMenu slot="list">
									<DropdownItem>重命名</DropdownItem>
									<DropdownItem>删除</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</Col>
					<Col span="6" style="height: 42px;" class="d-flex align-items-center">-</Col>
					<Col span="6" style="height: 42px;" class="d-flex align-items-center"><small class="text-secondary">2019-12-15 08:00</small></Col>
				</Row>
			</div>
			
		</div>
		
		<div style="height: 55px;position: absolute;left: 0;bottom: 0;right: 0;" class="d-flex align-items-center px-3 border-top">
			<Page :total="100" show-sizer />
		</div>
		
	</div>
</template>

<script>
	const icons = {
		dir:{
			icon:"icon-file-b-2",
			color:"text-warning"
		},
		image:{
			icon:"icon-file-b-6",
			color:"text-success"
		},
		video:{
			icon:"icon-file-b-9",
			color:"text-primary"
		},
		text:{
			icon:"icon-file-s-7",
			color:"text-info"
		},
		none:{
			icon:"icon-file-b-8",
			color:"text-muted"
		},
	};
	export default {
		
	}
</script>

<style>
</style>
