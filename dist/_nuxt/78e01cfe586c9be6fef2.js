(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{397:function(t,e,r){var content=r(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("08d4b84c",content,!0,{sourceMap:!1})},398:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-form>.container{padding:16px}.v-form>.container>.layout>.flex{padding:8px}.v-form>.container>.layout:only-child{margin:-8px}.v-form>.container>.layout:not(:only-child){margin:auto -8px}",""])},403:function(t,e,r){"use strict";function o(t){return{url:"/api/v1/article/category",method:"get",data:t}}function n(t){return{url:"/api/v1/article/category",method:"post",data:t}}function l(t){return{url:"/api/v1/article/category",method:"put",data:t}}function d(t){return{url:"/api/v1/article/category/"+t,method:"delete"}}function c(t){return{url:"/api/v1/article/"+t,method:"get"}}function h(t){return{url:"/api/v1/article",method:"post",data:t}}function f(t){return{url:"/api/v1/article",method:"put",data:t}}function m(t){return{url:"/api/v1/article/page",method:"get",params:t}}function v(t){return{url:"/api/v1/article/down/"+t,method:"put"}}function x(t){return{url:"/api/v1/article/up/"+t,method:"put"}}function y(t){return{url:"/api/v1/article/label/page",method:"get",params:t}}function w(t){return{url:"/api/v1/article/label",method:"get"}}function $(t){return{url:"/api/v1/article/label",method:"post",data:t}}function _(t){return{url:"/api/v1/article/label/"+t,method:"delete"}}r.d(e,"i",function(){return o}),r.d(e,"b",function(){return n}),r.d(e,"n",function(){return l}),r.d(e,"d",function(){return d}),r.d(e,"e",function(){return c}),r.d(e,"l",function(){return h}),r.d(e,"m",function(){return f}),r.d(e,"h",function(){return m}),r.d(e,"j",function(){return v}),r.d(e,"k",function(){return x}),r.d(e,"g",function(){return y}),r.d(e,"f",function(){return w}),r.d(e,"a",function(){return $}),r.d(e,"c",function(){return _})},404:function(t,e,r){"use strict";r(146),r(22),r(18),r(215),r(28),r(33),r(397);var o=r(38);e.a={name:"v-form",mixins:[Object(o.b)("form")],inheritAttrs:!1,props:{value:Boolean,lazyValidation:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(){var t=Object.values(this.errorBag).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",function(e){t.$set(t.errorBag,input._uid,e)},{immediate:!0})},r={_uid:input._uid,valid:void 0,shouldValidate:void 0};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))}):r.valid=e(input),r},validate:function(){return!this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].reset();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},resetValidation:function(){for(var t=this,i=this.inputs.length;i--;)this.inputs[i].resetValidation();this.lazyValidation&&setTimeout(function(){t.errorBag={}},0)},register:function(input){var t=this.watchInput(input);this.inputs.push(input),this.watchers.push(t)},unregister:function(input){var t=this.inputs.find(function(i){return i._uid===input._uid});if(t){var e=this.watchers.find(function(i){return i._uid===t._uid});e.valid&&e.valid(),e.shouldValidate&&e.shouldValidate(),this.watchers=this.watchers.filter(function(i){return i._uid!==t._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==t._uid}),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}},405:function(t,e,r){"use strict";function o(t){return{url:"/api/v1/user/page",method:"GET",data:t}}function n(t){return{url:"/api/v1/user",method:"POST",data:t}}function l(t){return{url:"/api/v1/user",method:"PUT",data:t}}function d(t){return{url:"/api/v1/user/disable/batch",method:"PUT",data:t}}function c(t){return{url:"/api/v1/user/unsealing/batch",method:"PUT",data:t}}function h(t){return{url:"/api/v1/user/disable/"+t,method:"PUT"}}function f(t){return{url:"/api/v1/user/unsealing/"+t,method:"PUT"}}function m(t){return{url:"/api/v1/qiniu/upload",method:"post",data:t}}function v(t){return{url:"/api/v1/qiniu/upload/multiple",method:"post",data:t}}r.d(e,"e",function(){return o}),r.d(e,"a",function(){return n}),r.d(e,"d",function(){return l}),r.d(e,"c",function(){return d}),r.d(e,"g",function(){return c}),r.d(e,"b",function(){return h}),r.d(e,"f",function(){return f}),r.d(e,"h",function(){return m}),r.d(e,"i",function(){return v})},451:function(t,e,r){var content=r(452);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("97d4060c",content,!0,{sourceMap:!1})},452:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;margin-right:16px;outline:none}.v-radio--is-disabled{pointer-events:none}",""])},453:function(t,e,r){var content=r(454);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("ccc1b94c",content,!0,{sourceMap:!1})},454:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".v-input--radio-group__input{display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""])},455:function(t,e,r){var content=r(519);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(5).default)("5630e421",content,!0,{sourceMap:!1})},514:function(t,e,r){"use strict";r(23),r(45),r(68),r(451);var o=r(54),n=r(94),l=r(10),d=r(444),c=r(7),h=r(443),f=r(38),m=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};e.a={name:"v-radio",mixins:[l.a,d.a,Object(f.a)("radio","v-radio","v-radio-group"),c.a],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:m({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var t,e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=h.a.options.methods.genInput).call.apply(t,[this].concat(function(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}(r)))},genLabel:function(){return this.$createElement(n.a,{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||"",dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",m({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(o.a,this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(t){return t("div",this.computedData,[this.genRadio(),this.genLabel()])}}},515:function(t,e,r){"use strict";r(217),r(12),r(442),r(453);var o=r(60),n=r(441),l=r(38);e.a=o.a.extend({name:"v-radio-group",mixins:[n.a,Object(l.b)("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},o.a.options.methods.genDefaultSlot.call(this))},onRadioChange:function(t){this.disabled||(this.hasInput=!0,this.internalValue=t,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(t){t.relatedTarget&&t.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",t))},register:function(t){t.isActive=this.valueComparator(this.internalValue,t.value),t.$on("change",this.onRadioChange),t.$on("blur",this.onRadioBlur),this.radios.push(t)},setErrorState:function(t){for(var e=this.radios.length;--e>=0;)this.radios[e].parentError=t},setActiveRadio:function(){for(var t=this.radios.length;--t>=0;){var e=this.radios[t];e.isActive=this.valueComparator(this.internalValue,e.value)}},unregister:function(t){t.$off("change",this.onRadioChange),t.$off("blur",this.onRadioBlur);var e=this.radios.findIndex(function(e){return e===t});e>-1&&this.radios.splice(e,1)}}})},518:function(t,e,r){"use strict";var o=r(455);r.n(o).a},519:function(t,e,r){(t.exports=r(4)(!1)).push([t.i,".avator[data-v-22c212d2]{margin:0 auto}#editor .v-show-content[data-v-22c212d2]{background-color:#000}",""])},580:function(t,e,r){"use strict";r.r(e);r(35),r(23),r(46);var o=r(13),n=r(405),article=r(403),l={name:"Add",layout:"admin",data:function(){return{form:{title:"",subheading:"",status:"DRAFT",coverImage:"https://pan.zealsay.com/20190317010254129000000.jpg",label:"",openness:"ALL",contentMd:"",contentHtml:""},img_file:{},valid:!1,previews:{},option:{img:"https://pan.zealsay.com/20190317010254129000000.jpg",info:!0,outputSize:1,outputType:"jpeg",canScale:!0,autoCrop:!0,canMoveBox:!0,centerBox:!0,autoCropWidth:150,autoCropHeight:150,fixed:!0,fixedNumber:[4,4]},image:"https://pan.zealsay.com/20190317010254129000000.jpg",category:[],labels:["docker","java","vue","javascript","动漫","杂谈","评点"],categoryLoading:!1,cityLoading:!1,areaLoading:!1,file:"",loading:!1,titleRules:[function(t){return!!t||"标题不能为空!"},function(t){return t&&t.length<=20||"标题不得超过20个字符"}],subheadingRules:[function(t){return t&&t.length<=30||"副标题不得超过30个字符"}]}},computed:{preview_img:function(){return this.previews}},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var r,o,n,l,d,i,c,h,f;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app,e.query,o=e.error,t.next=3,r.$axios.$request(Object(article.i)());case 3:if(n=t.sent,l=[],"200"!==n.code){t.next=13;break}for((d={}).text="请选择分类目录",d.value="",l.push(d),i=0;i<n.data.length;i++)(c={}).text=n.data[i].name,c.value=n.data[i].id,l.push(c);t.next=14;break;case 13:return t.abrupt("return",o({statusCode:n.code,message:n.message}));case 14:return t.next=16,r.$axios.$request(Object(article.e)(r.$route.query.id));case 16:if(h=t.sent,f={},"200"!==h.code){t.next=24;break}f.page=h.data.currentPage,f.rowsPerPage=h.data.pageSize,f.totalItems=h.data.total,t.next=25;break;case 24:return t.abrupt("return",o({statusCode:h.code,message:h.message}));case 25:return t.abrupt("return",{category:l,desserts:h.data.records,pagination:f});case 26:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),created:function(){var t=this;this.categoryLoading=!0,Object(article.i)().then(function(e){"200"===e.code?t.category=e.data.map(function(t){return{value:t.id,text:t.name}}):t.$swal({text:"拉取分类目录信息失败",type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3}),t.categoryLoading=!1}).catch(function(e){t.loading=!1,t.$swal({text:e.message,type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3})}),Object(article.e)(this.$route.query.id).then(function(e){"200"===e.code?(t.form=e.data,t.form.label=e.data.label.split(",")):t.$swal({text:"拉取文章信息失败",type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3}),t.loading=!1}).catch(function(e){t.loading=!1,t.$swal({text:e.message,type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3})})},methods:{submit:function(){this.loading=!0,this.uploadimg(),this.loading=!1},fileChanged:function(t){var e=this;if(t&&window.FileReader)if(/^image/.test(t.type)){e.file=t;var r=new FileReader;r.readAsDataURL(t),r.onloadend=function(){e.$refs.img.src=this.result,e.image=this.result,e.option.img=this.result,e.form.coverImage=this.result}}else this.$swal({text:"要选择一张图片文件才行呢！",type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3})},cropImage:function(){this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL()},realTime:function(data){this.previews=data},changeData:function(t,e){this.form.contentHtml=e},$imgAdd:function(t,e){this.img_file[t]=e},$imgDel:function(t){delete this.img_file[t[1]]},uploadimg:function(t){var e=this;if(this.loading=!0,""!==this.file){var param=new FormData;this.$refs.cropper.getCropBlob(function(data){var t=data;param.append("file",t),Object(n.h)(param).then(function(t){"200"===t.code?(e.form.coverImage=t.data,e.image=t.data,e.save()):(e.loading=!1,e.$swal({text:t.message,type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3}))}).catch(function(t){e.loading=!1,e.$swal({text:t.message,type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3})})})}else this.save()},save:function(){var t=this;if("{}"!==JSON.stringify(this.img_file)){var e=new FormData;for(var r in this.img_file)e.append("files",this.img_file[r],r);Object(n.i)(e).then(function(e){if("200"===e.code){for(var img in e.data)t.$refs.md.$img2Url(e.data[img].pos,e.data[img].url);Object(article.m)(t.form).then(function(e){"200"===e.code?(t.loading=!0,t.$swal({title:"保存成功!",text:"文章已更新",type:"success"})):(t.loading=!1,t.$swal({text:e.message,type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3}))}).catch(function(e){t.loading=!1,t.$swal({text:e.message,type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3})})}else t.loading=!1,t.$swal({text:e.message,type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3})}).catch(function(e){t.loading=!1})}else Object(article.m)(this.form).then(function(e){"200"===e.code?(t.loading=!1,t.$swal({title:"保存成功!",text:"文章已更新",type:"success"})):(t.loading=!1,t.$swal({text:e.message,type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3}))}).catch(function(e){t.loading=!1,t.$swal({text:e.message,type:"error",toast:!0,position:"top",showConfirmButton:!1,timer:3e3})})}}},d=(r(518),r(11)),c=r(16),h=r.n(c),f=r(140),m=r(396),v=r(130),x=r(131),y=r(404),w=r(214),$=r(132),_=r(514),C=r(515),B=r(556),R=r(391),component=Object(d.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{"justify-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:"",md3:""}},[r("material-card",{staticClass:"v-card-profile"},[r("v-flex",{attrs:{xs12:"",md12:""}},[r("div",{staticClass:"show-preview",style:{width:t.preview_img.w+"px",height:t.preview_img.h+"px",overflow:"hidden",margin:"5px auto"}},[r("div",{style:t.preview_img.div},[r("v-img",{ref:"img",staticClass:"avator",style:t.preview_img.img,attrs:{src:t.preview_img.url}})],1)])]),t._v(" "),r("v-card-text",{staticClass:"text-xs-center"},[r("h6",{staticClass:"category text-gray ffont-weight-light mb-3"},[t._v("封面图片")]),t._v(" "),r("p",{staticClass:"card-description font-weight-light"},[t._v("\n            支持JPG、PNG格式图片，不超过5M。拖拽或缩放图中的虚线方格可调整头像，注意上方小头像预览效果\n          ")])])],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md8:""}},[r("material-card",{attrs:{color:"primary",title:"文章基本信息",text:"完善文章信息后，点击提交"}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""}},[r("v-container",{attrs:{"py-0":""}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-text-field",{staticClass:"purple-input",attrs:{rules:t.titleRules,hint:"标题不能包含空格和特殊字符,不超过20个字符",label:"标题*",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-text-field",{staticClass:"purple-input",attrs:{rules:t.subheadingRules,hint:"副标题不能超过30个字符",label:"副标题*",required:""},model:{value:t.form.subheading,callback:function(e){t.$set(t.form,"subheading",e)},expression:"form.subheading"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-select",{attrs:{items:t.category,"item-text":"text","item-value":"value",label:"分类目录*",required:""},model:{value:t.form.categoryId,callback:function(e){t.$set(t.form,"categoryId",e)},expression:"form.categoryId"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-select",{staticClass:"purple-input",attrs:{attach:"",chips:"",multiple:"",items:t.labels,label:"标签"},model:{value:t.form.label,callback:function(e){t.$set(t.form,"label",e)},expression:"form.label"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-radio-group",{attrs:{row:"",label:"公开度"},model:{value:t.form.openness,callback:function(e){t.$set(t.form,"openness",e)},expression:"form.openness"}},[r("v-radio",{attrs:{label:"仅自己",value:"SELFONLY"}}),t._v(" "),r("v-radio",{attrs:{label:"所有人",value:"ALL"}})],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md12:""}},[r("v-radio-group",{attrs:{row:"",label:"状 态"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[r("v-radio",{attrs:{label:"草稿",value:"DRAFT"}}),t._v(" "),r("v-radio",{attrs:{label:"发布",value:"FORMAL"}})],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"","text-xs-center":""}},[r("v-btn",{staticClass:"font-weight-light",attrs:{round:"",color:"primary",loading:t.loading},on:{click:function(e){return t.submit()}}},[t._v("\n                  添加保存\n                ")])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md11:""}},[r("material-card",{attrs:{color:"primary",title:"编辑文章详细内容",text:"支持使用markdown语法"}},[r("div",{attrs:{id:"editor"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"0",height:"800px"},attrs:{ishljs:!0},on:{change:t.changeData,imgAdd:t.$imgAdd,imgDel:t.$imgDel},model:{value:t.form.contentMd,callback:function(e){t.$set(t.form,"contentMd",e)},expression:"form.contentMd"}})],1)])],1)],1)],1)},[],!1,null,"22c212d2",null);e.default=component.exports;h()(component,{VBtn:f.a,VCardText:m.b,VContainer:v.a,VFlex:x.a,VForm:y.a,VImg:w.a,VLayout:$.a,VRadio:_.a,VRadioGroup:C.a,VSelect:B.a,VTextField:R.a})}}]);