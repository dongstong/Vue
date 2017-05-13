<template>
	<div class="tpl">
		<ul class="mui-table-view">
		    <li v-for="item in newsList" class="mui-table-view-cell mui-media">
		        <router-link v-bind="{to: '/newsdetail/' + item.id}">
		            <img class="mui-media-object mui-pull-left" :src="item.img_url">
		            <div class="mui-media-body">
		                {{item.title}}
		                <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
		            </div>
		        </router-link>
		    </li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				newsList: []
			}
		},
		created: function(){
			this.$http.get("http://127.0.0.1:8899/api/getnewslist").then(res=>{
				this.newsList = res.body.message;
			})
		}
	}

</script>