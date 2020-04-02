<template>
<div>
    <span>标题</span>
    <el-input v-model="title" placeholder="请输入内容"> </el-input>
    <span>摘要</span>
    <el-input type="textarea" v-model="summary" placeholder="请输入摘要"> </el-input>
    <span>文章内容提交(Markdown)</span>
    <input type="file" id="filePicker" @change="selectArticleFile"/>
    <el-button @click="postArticle">提交文章</el-button>
    <div>
    </div>
</div>
</template>

<script>
import api from '@/api'
export default {
    name:'ArticlePostPage',
    data: function() {
        return {
            title: undefined,
            summary: undefined,
            content: undefined,
            fileName: undefined,
            reloadFlag: true,
        }
    },
    computed: {

    },
    methods: {
        selectArticleFile(event) {
            const file = event.target.files[0];
            this.fileName = file.name
            const reader = new FileReader()
            reader.onload = e => {
                this.content = e.target.result
            }
            reader.readAsText(file)
        }, 
        postArticle() {
            if (this.title == null || this.title.trim().length == 0) {
                alert('标题不能为空')
                return
            }
            if (this.content == null) {
                alert('文章不能为空')
                return
            }
            api.post('/api/article/article', {
                title: this.title,
                summary: this.summary,
                content: this.content,
            }, r => {
                alert('提交成功')
                this.reload()
            }, r => {
                alert('提交失败')
                console.log(r)
            })
        },
        reload() {
            this.$router.go(0)
        }
    }
}
</script>

<style>
</style>