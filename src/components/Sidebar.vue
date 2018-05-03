<template>
    <div id="list-area"  :class="{'menu-hidden': !show}">
        <div id="list-header">
            <button id="menu-button"><i class="menu-icon" @click="show = !show"></i></button>
        </div>
        <ul v-if="show">
            <li v-for="(t, i) in listing" v-bind:key="i" @click="selectedId = i" :class="{'selected': selectedId == i}">
                <span> {{t.title}} </span> 
                <button @click="onDelete(i, t.id)">删除</button>
            </li>
            <li @click="onAdd"></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Sidebar",
    props: ['onArticleSelected', 'listing', 'onAdd', 'onDelete'],
    data() {
        return {
            show: true,
            selectedId: null
        }
    },
    watch: {
        selectedId(now, pre) {
            if (now != pre) {
                this.onArticleSelected(this.listing[now].id)
            }
        }
    },
    mounted() {
        let that = this
        setTimeout(() => {
            that.show = false
        }, 200);
    },
}
</script>
<style>
#list-area {
    border-right: #ccc solid 1px;
    width: 33%;
    max-width: 275px;
    height: 98vh;
    position: fixed;
    top: 0;
    left: 0;
    -webkit-transition: width 0.6s;
    -moz-transition: width 0.6s;
    -o-transition: width 0.6s;
    transition: width 0.6s;
    z-index: 1;
}
.menu-hidden {
    width: 0 !important;
}
#list-header {
    margin: 0 5px;
    border-bottom: #ccc solid 1px;
    min-height: 40px;
    height: 5vh;
}
#menu-button {
    position: fixed;
    top: 0;
    left: 5px;
    background-color: transparent;
    border: none;
    color: white;
    padding: 0.75vh 1vh;
    cursor: pointer;
}
#menu-button:hover {
    background-color: #eee;
}
#menu-button i {
    content: url('../assets/menu.svg');
    width: 3vh;
    height: 3vh;
    min-width: 30px;
    min-height: 30px;
}
ul {
    display: block;
    font-size: 1.2em;
    list-style: none;
    margin: 0;
    padding: 0;
}
ul li {
    padding: 10px 20px;
    cursor: pointer;
    -webkit-transition: background-color 300ms linear;
    -ms-transition: background-color 300ms linear;
    transition: background-color 300ms linear;
}
ul li.selected {
    background-color: #eee;
}
ul li:hover {
    background-color: #eee;
}
ul li:last-child {
    text-align: center;
    font-weight: 300;
    background-color: #ccc;
    margin-top: 10px;
    padding: 5px;
}
ul li:last-child::before {
    background-image: url('../assets/plus.svg');
    background-size: 1.5em 1.5em;
    display: block;
    margin: auto;
    width: 1.5em; 
    height: 1.5em;
    content:"";
}
ul li:last-child:hover{
    background: #41e1cf87;
}

</style>


