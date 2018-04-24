<template> 
  <div>
      <Sidebar></Sidebar>
      <Editor></Editor>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Editor from './components/Editor.vue'

export default {
  name: 'app',
  components: {
    Sidebar, Editor
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
