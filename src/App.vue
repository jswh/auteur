<template> 
  <div>
      <Sidebar :onArticleSelected=changeArticle :listing="articleListing" :onAdd="addArticle" :onDelete="deleteItem"></Sidebar>
      <Editor @change="onArticleDataChange" :article=article></Editor>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Editor from './components/Editor.vue'

import {Article} from './models/Article.js'
export default {
  name: 'app',
  components: {
    Sidebar, Editor
  },
  data() {
    return {
      article: null,
      articleListing: []
    }
  },
  mounted() {
    let listing = localStorage.getItem('articles')
    try {
      listing = JSON.parse(listing)
      if (listing) {
        this.articleListing = listing
      } else {
        this.saveListing()
      }
    } catch(e) {
      this.saveListing()
      console.error(e)
    }
  },
  methods: {
    changeArticle(articleId) {
      this.article = Article.load(articleId)
    },
    onArticleDataChange(data) {
      let article
      if (!this.article) {
        article = Article.build(data.title)          
        article.content = data.content
        this.articleListing.push({id: article.id, title: article.title})
      } else {
        article = Article.load(this.article.id)
      }
      article.title = data.title
      article.content = data.content
      article.save()
      this.article = article
    }, 
    addArticle() {
        let d = new Date()
        let artile = Article.build(d.toUTCString())
        this.articleListing.push({id: artile.id, title: artile.title})
        this.saveListing()
        return artile
    },
    deleteItem(i, id) {
        this.articleListing.splice(i, 1)
        this.saveListing()
        Article.del(id)
    },
    saveListing() {
        localStorage.setItem('articles', JSON.stringify(this.articleListing))
    },
  }
}
</script>

<style>
html,body {
    height: 100%;
    margin: 0;
    padding: 0;
}
div {
  background-color: white;
}
</style>
