<template>
	<div class="tpl">
		<h3 v-text="article.title"></h3>

		<div class="article-content" v-html="article.content"></div>
	</div>
</template>

<script>
	export default{
		name: "newsdetail",
		data(){
			return {
				article: {}
			}
		},
		created(){
			this.$http.get("http://127.0.0.1:8899/api/getnew/" + this.$route.params.id).then(res=>{
				console.log(res.body);
				this.article = res.body.message[0];
			})
		}
	}
</script>