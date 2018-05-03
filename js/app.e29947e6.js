webpackJsonp([1],{"+C6c":function(t,e){},"+VGo":function(t,e){},0:function(t,e,i){t.exports=i("NHnr")},"2zNe":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("/5sW"),a={name:"Sidebar",props:["onArticleSelected","listing","onAdd","onDelete"],data:function(){return{show:!0,selectedId:null}},watch:{selectedId:function(t,e){t!=e&&this.onArticleSelected(this.listing[t].id)}},mounted:function(){var t=this;setTimeout(function(){t.show=!1},200)}},l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:{"menu-hidden":!t.show},attrs:{id:"list-area"}},[i("div",{attrs:{id:"list-header"}},[i("button",{attrs:{id:"menu-button"}},[i("i",{staticClass:"menu-icon",on:{click:function(e){t.show=!t.show}}})])]),t.show?i("ul",[t._l(t.listing,function(e,n){return i("li",{key:n,class:{selected:t.selectedId==n}},[i("span",{on:{click:function(e){t.selectedId=n}}},[t._v(" "+t._s(e.title)+" ")]),i("button",{on:{click:function(i){t.onDelete(n,e.id)}}},[t._v("删除")])])}),i("li",{on:{click:t.onAdd}})],2):t._e()])},r=[],c=i("XyMi");function o(t){i("2zNe")}var s=!1,u=o,d=null,h=null,v=Object(c["a"])(a,l,r,s,u,d,h),f=v.exports,g=i("+sNg"),m={name:"Editor",props:["article"],data:function(){return{articleTitle:"",articleContent:""}},computed:{markdownContent:function(){return g["markdown"].toHTML(this.articleContent)}},watch:{article:function(t,e){e&&e.save(),console.log(t,e),this.after?(this.articleTitle=t.title,this.articleContent=t.content):(this.articleTitle="",this.articleContent="")}},methods:{change:function(){(this.articleTitle||this.articleContent)&&this.$emit("change",{title:this.articleTitle,content:this.articleContent})}}},p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{width:"100%","max-width":"960px","text-align":"center",margin:"auto","z-index":"1"}},[i("div",{staticClass:"title"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.articleTitle,expression:"articleTitle"}],attrs:{id:"title-area",type:"",name:"",placeholder:"title"},domProps:{value:t.articleTitle},on:{change:t.change,input:function(e){e.target.composing||(t.articleTitle=e.target.value)}}})])]),i("div",{staticClass:"large"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.articleContent,expression:"articleContent"}],staticClass:"editor",attrs:{id:"editor-area"},domProps:{value:t.articleContent},on:{change:t.change,input:function(e){e.target.composing||(t.articleContent=e.target.value)}}})]),i("div",{staticClass:"small"},[i("div",{attrs:{id:"previewer"},domProps:{innerHTML:t._s(t.markdownContent)}})])])},b=[];function w(t){i("+C6c")}var C=!1,S=w,y="data-v-5b857ec1",T=null,L=Object(c["a"])(m,p,b,C,S,y,T),_=L.exports,k=i("Z60a"),A=i.n(k),O=i("C9uT"),x=i.n(O),I=function(){function t(){A()(this,t),Object.defineProperty(this,"public",{configurable:!0,enumerable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"id",{configurable:!0,enumerable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"title",{configurable:!0,enumerable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"content",{configurable:!0,enumerable:!0,writable:!0,value:void 0})}return x()(t,[{key:"save",value:function(){localStorage.setItem(this.id,JSON.stringify({title:this.title,content:this.content}))}}],[{key:"build",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=new t;return n.id=e+Date.now(),n.title=e,n.content=i,n.save(),n}},{key:"load",value:function(e){var i=new t,n=JSON.parse(localStorage.getItem(e));return i.id=e,i.title=n.title,i.content=n.content,i}},{key:"del",value:function(t){localStorage.removeItem(t)}}]),t}(),N={name:"app",components:{Sidebar:f,Editor:_},data:function(){return{article:null,articleListing:[]}},mounted:function(){var t=localStorage.getItem("articles");try{t=JSON.parse(t),t?this.articleListing=t:this.saveListing()}catch(t){this.saveListing(),console.error(t)}},methods:{changeArticle:function(t){this.article=I.load(t)},onArticleDataChange:function(t){var e;this.article?e=I.load(this.article.id):(e=I.build(t.title),e.content=t.content,this.articleListing.push({id:e.id,title:e.title})),e.title=t.title,e.content=t.content,e.save(),this.article=e},addArticle:function(){var t=new Date,e=I.build(t.toUTCString());return this.articleListing.push({id:e.id,title:e.title}),this.saveListing(),e},deleteItem:function(t,e){this.articleListing.splice(t,1),this.saveListing(),I.del(e)},saveListing:function(){localStorage.setItem("articles",JSON.stringify(this.articleListing))}}},j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Sidebar",{attrs:{onArticleSelected:t.changeArticle,listing:t.articleListing,onAdd:t.addArticle,onDelete:t.deleteItem}}),i("Editor",{attrs:{article:t.article},on:{change:t.onArticleDataChange}})],1)},P=[];function D(t){i("+VGo")}var E=!1,J=D,$=null,H=null,M=Object(c["a"])(N,j,P,E,J,$,H),z=M.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")}},[0]);
//# sourceMappingURL=app.e29947e6.js.map