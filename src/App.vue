<template> 
  <div>
      <Sidebar :onArticleSelected=changeArticle :articleListing="listing" :onAdd="addArticle" :onDelete="deleteItem"></Sidebar>
      <Editor :listing=articleListing></Editor>
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
      listing: []
    }
  },
  methods: {
    changeArticle() {

    },
    onArticleTitleChange() {

    }, 
    addArticle() {
        let d = new Date()
        let artile = Article.build(d.toUTCString())
        this.listing.push({id: artile.id, title: artile.title})
        this.saveListing()
    },
    deleteItem(i, id) {
        this.listing.splice(i, 1)
        this.saveListing()
        Article.del(id)
    },
    saveListing() {
        localStorage.setItem('articles', JSON.stringify(this.listing))
    }
  }
}
</script>

<style>
html,body {
    height: 100%;
    margin: 0;
    padding: 0;
}
</style>
