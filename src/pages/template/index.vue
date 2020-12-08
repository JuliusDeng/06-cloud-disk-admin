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
				<Checkbox size="small" :value="checkAllStatus" @on-change="checkAllChange"><span class="ml-3">全选</span></Checkbox>
			</div>
		</div>
		
		<div style="position: absolute;overflow-y: auto;left: 0;right: 0;top: 90px;bottom: 55px;">
			
			<media-list v-for="(item,index) in list" :key="index" :item="item" :index="index" @on-event="handleEvent"></media-list>
			
		</div>
		
		<div style="height: 55px;position: absolute;left: 0;bottom: 0;right: 0;" class="d-flex align-items-center px-3 border-top">
			<Page :total="100" show-sizer />
		</div>
		
	</div>
</template>

<script>
	import mediaList from '@/components/media-list.vue';
	export default {
		components: {
			mediaList
		},
		data() {
			return {
				list:[{
					type:"dir",
					name:"我的笔记",
					create_time:"2019-12-15 08:00",
					checked:false
				},{
					type:"dir",
					name:"我的备份",
					create_time:"2019-12-15 08:00",
					checked:false
				},{
					type:"dir",
					name:"相册管理",
					create_time:"2019-12-15 08:00",
					checked:false
				},{
					type:"dir",
					name:"我的资源",
					create_time:"2019-12-15 08:00",
					checked:false
				},{
					type:"image",
					name:"风景.jpg",
					create_time:"2019-12-15 08:00",
					checked:false,
					url:"https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/1.jpg"
				},{
					type:"image",
					name:"海报.jpg",
					create_time:"2019-12-15 08:00",
					checked:false,
					url:"https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/2.jpg"
				},{
					type:"video",
					name:"uniapp实战社区交友教程.mp4",
					create_time:"2019-12-15 08:00",
					checked:false,
					url:"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4"
				},{
					type:"video",
					name:"uniapp实战商城教程.mp4",
					create_time:"2019-12-15 08:00",
					checked:false,
					url:"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4"
				},{
					type:"video",
					name:"uniapp实战仿微信教程.mp4",
					create_time:"2019-12-15 08:00",
					checked:false,
					url:"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4"
				},{
					type:"image",
					name:"摄影.jpg",
					create_time:"2019-12-15 08:00",
					checked:false,
					url:"https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/Appstatic/qsbk/demo/datapic/3.jpg"
				},{
					type:"text",
					name:"记事本.txt",
					create_time:"2019-12-15 08:00",
					checked:false
				},{
					type:"none",
					name:"压缩包.rar",
					create_time:"2019-12-15 08:00",
					checked:false
				}],
			}
		},
		computed: {
			checkList() {
				return this.list.filter(item=>item.checked)
			},
			checkAllStatus(){
				return this.checkList.length === this.list.length
			}
		},
		methods: {
			handleEvent(e) {
				switch (e.type){
					case 'delete':
					this.list.splice(e.index,1)
					this.$Message.success('删除成功');
						break;
					case 'checked':
					this.list[e.index].checked = e.value
						break;
					default:
						break;
				}
			},
			checkAllChange(e){
				this.list.map(item=>{
					item.checked = e
				})
			}
		},
	}
</script>

<style>
</style>
