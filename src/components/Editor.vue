<template>
    <div>
        <div style=" width:100%; max-width: 960px;text-align:center;margin:auto;z-index:1;">
            <div class="title">
                <input id="title-area" type="" name="" v-model="articleTitle" placeholder="title" @change="change">
            </div>
        </div>
        <div class="large">
            <textarea id="editor-area" class="editor" v-model="articleContent" @change="change"></textarea>
        </div>
        <div class="small">
            <div id="previewer" v-html="markdownContent"></div>
        </div>
    </div>
</template>

<script>
import {markdown} from 'markdown'
export default {
    name: "Editor",
    props: [
        'article'
    ],
    data() {
        return {
            articleTitle: '',
            articleContent: ''
        }
    },
    computed: {
        markdownContent() {
            return markdown.toHTML(this.articleContent)
        }
    },
    watch: {
        article(after, before) {
            if (before) {
                before.save()
            }
            console.log(after, before)
            if (this.after) {
                this.articleTitle = after.title
                this.articleContent = after.content
            } else {
                this.articleTitle = ''
                this.articleContent = ''
            }
        }
    },
    methods: {
        change() {
            if (this.articleTitle || this.articleContent) {
                this.$emit('change', {title: this.articleTitle, content: this.articleContent})
            }
        }
    }
}
</script>
<style scoped>

textarea:active, textarea:focus, input:active, input:focus {
    border: none;
    outline: none;
    outline-offset: 0;
}
textarea, input {
    width: 94%;
    margin: 0 3%;
    border:none;
    resize: none;
    outline: none;
    outline-offset: 0;
    padding: 0;
    font-size: inherit;
    overflow: auto;
}
textarea {
    height: 90vh;
}
p {
    margin-top: 0;
}
.fade {
    display: none;
}
.large {
    width:100%;
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
    font-size: 16px;
}
.small {
    width: 10vw;
    height: 16.8vw;
    position: fixed;
    border: 1px solid #ccc;
    right:3%;
    top:10px;
    font-size: 6px;
    overflow: auto;
}
.title {
    margin: 5px 3%;
    padding: 0 2em 0 2em;
    border-bottom: 2px solid #ccc;
    overflow: hidden;
}
.title input {
    font-size: 250%;
    text-align: center;
    color: #333;
}
#previewer {
    width: 94%;
    margin: 0 1.5%;
    padding: 0;
}
#vim-mode {
    position: fixed;
    left: 0;
    bottom:0;
    display: block;
    background-color: #eee;
    color: #aaa;
    border-radius: 2px;
    font-size: 12px;
    padding: 5px 10px;
}
</style>

