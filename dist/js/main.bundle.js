!function(e){function t(t){for(var r,s,i=t[0],l=t[1],d=t[2],p=0,u=[];p<i.length;p++)s=i[p],a[s]&&u.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(c&&c(t);u.length;)u.shift()();return n.push.apply(n,d||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,i=1;i<o.length;i++){var l=o[i];0!==a[l]&&(r=!1)}r&&(n.splice(t--,1),e=s(s.s=o[0]))}return e}var r={},a={1:0},n=[];function s(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=r,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=l;n.push([1,0]),o()}({1:function(e,t,o){"use strict";o.r(t);const r={"save-post":{method:"PUT",regex:/\/wp\/v2\/(\w*)\/(\d*)/g,process:(e,t)=>(console.log(t),new Promise((o,r)=>{o({pathType:"save-post",id:e[2],type:e[1],title:{raw:document.title},content:{raw:t}})}))},"load-media":{method:"GET",regex:/\/wp\/v2\/media\/(\d*)/g,process:(e,t)=>new Promise((t,o)=>{jQuery.ajax({method:"GET",url:drupalSettings.path.baseUrl+"editor/image/load/"+e[1],accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(e=>{t(e)}).fail(()=>{o({message:"Error"})})})},"save-media":{method:"POST",regex:/\/wp\/v2\/media/g,process:(e,t)=>(console.log("save media",drupalSettings),new Promise((e,o)=>{let r;for(let e of t.entries())console.log(e),"file"===e[0]&&(r=e[1]);const a=new FormData;a.append("files[fid]",r),a.append("fid[fids]",""),a.append("attributes[alt]","Test"),a.append("_drupal_ajax","1"),a.append("form_id",jQuery('[name="form_id"]').val()),a.append("form_build_id",jQuery('[name="form_build_id"]').val()),a.append("form_token",jQuery('[name="form_token"]').val()),jQuery.ajax({method:"POST",url:drupalSettings.path.baseUrl+"editor/image/upload/gutenberg",data:a,processData:!1,contentType:!1,accepts:{json:"application/json, text/javascript, */*; q=0.01"}}).done(t=>{e(t)}).fail(()=>{o("Error")})}))},default:{method:"GET",regex:/\/wp\/v2\/types\/node/g,process:()=>new Promise((e,t)=>e({id:1,name:"Node",rest_base:"nodes",slug:"node",supports:{author:!1,comments:!1,"custom-fields":!0,document:!1,editor:!0,"media-library":!1,"page-attributes":!1,posts:!1,revisions:!1,"template-settings":!1,thumbnail:!1,title:!1},viewable:!1,saveable:!1,publishable:!1}))}};window._wpDateSettings={l10n:{locale:"pt_PT"}},window.wp={apiRequest:function(e){return function(e){for(const t in r)if(r.hasOwnProperty(t)){const o=r[t];o.regex.lastIndex=0;let a=o.regex.exec(e.path+"");if(a&&a.length>0&&(e.method||"GET"===o.method))return o.process(a,e.data)}return new Promise((t,o)=>o({code:"api_handler_not_found",message:"API handler not found.",data:{path:e.path,status:404}}))}(e)},url:{addQueryArgs:function(e,t){return console.log("addQueryArgs",e,t),""}}};var a=o(0);o(11);((e,t,o,r)=>{t.editors.gutenberg={attach:function(t,o){(function(t){const o=e(t),r="editor-"+o.data("drupal-selector");e('<div id="'+r+'"></div>').insertAfter(o),o.hide();const n={content:{raw:e(t).val()},templates:"",title:{raw:document.title},type:"node",id:1},s={alignWide:!1,availableTemplates:[],disableCustomColors:!1,titlePlaceholder:"Add a title here..."};return window.customGutenberg={events:{OPEN_GENERAL_SIDEBAR:function(t,o){e(document.body).addClass("gutenberg-sidedar-open")},CLOSE_GENERAL_SIDEBAR:function(t,o){e(document.body).removeClass("gutenberg-sidedar-open")}},categories:[{slug:"rows",title:"Rows Blocks"},{slug:"common",title:"Common Blocks"},{slug:"formatting",title:"Formatting"},{slug:"layout",title:"Layout Elements"},{slug:"widgets",title:"Widgets"},{slug:"embed",title:"Embeds"},{slug:"shared",title:"Shared Blocks"}],rows:[{cols:[6,6],title:"col6 x 2",description:"2 eq columns layout"},{cols:[4,4,4],title:"col4 x 3",description:"3 eq columns layout"},{cols:[7,5],title:"col7-col5",description:"A col7 and a col5"},{cols:[5,7],title:"col5-col7",description:"A col5 and a col7"},{cols:[1,10,1],title:"col1-col10-col1",description:"A col1, a col10 and a col1"},{cols:[2,8,2],title:"col2-col8-col2",description:"A col2, a col8 and a col2"}],tabs:[{options:{name:"blocks",title:"Blocks",className:"editor-inserter__tab"},tabScrollTop:0,getItemsForTab:()=>e=>"embed"!==e.category&&"shared"!==e.category&&"rows"!==e.category},{options:{name:"rows",title:"Rows",className:"editor-inserter__tab"},tabScrollTop:0,getItemsForTab:()=>e=>"rows"===e.category}],panels:["post-status","articles-panel","settings-panel","last-revision"],editor:{hideTitle:!0,noMediaLibrary:!1}},new Promise((e,t)=>{setTimeout(()=>{Object(a.initializeEditor)(r,n,s),e()},0)})})(t).then(()=>{e("#node-article-edit-form").submit(o=>{const r=Object(a.select)("core/editor");Object(a.dispatch)("core/editor").savePost(),e(t).val(r.getEditedPostContent());const n=e(o.originalEvent.explicitOriginalTarget);return"edit-submit"===n.attr("id")||"edit-preview"===n.attr("id")||"edit-delete"===n.attr("id")||(o.preventDefault(),o.stopPropagation(),!1)})})},detach:function(t,o,r){const n=e(t),s="editor-"+n.data("drupal-selector"),i=Object(a.select)("core/editor").getEditedPostContent();n.val(i),"serialize"!==r&&e("#"+s).remove()},onChange:function(e,t){}}})(jQuery,Drupal,drupalSettings,_)},11:function(e,t){}});