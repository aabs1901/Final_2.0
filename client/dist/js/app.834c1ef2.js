(function(t){function e(e){for(var r,n,i=e[0],c=e[1],d=e[2],l=0,h=[];l<i.length;l++)n=i[l],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&h.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,d||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],r=!0,i=1;i<s.length;i++){var c=s[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=n(n.s=s[0]))}return t}var r={},o={app:0},a=[];function n(e){if(r[e])return r[e].exports;var s=r[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=r,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(s,r,function(e){return t[e]}.bind(null,r));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var u=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},4678:function(t,e,s){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(t){var e=a(t);return s(e)}function a(t){if(!s.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r,o,a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("NewWorkOut",{on:{"WorkOut-added":t.NewWorkOutAdded}}),s("WorkOutRecord",{attrs:{WorkOuts:t.WorkOuts}}),t.dataLoaded?s("WorkOutSummary",{attrs:{chartData:t.WorkOutsChartData,options:t.options}}):t._e()],1)},i=[],c=(s("a15b"),s("d81d"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"text-center"},[t._v(t._s(t.activity))]),s("div",{staticClass:"card-body"},[s("form",[s("div",{directives:[{name:"show",rawName:"v-show",value:t.errors&&t.errors.length,expression:"errors && errors.length"}],staticClass:"alert alert-danger"},t._l(t.errors,(function(e){return s("li",[t._v(t._s(e))])})),0),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"when"}},[t._v("When did you "+t._s(t.activity)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.when,expression:"when",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{id:"when",type:"date"},domProps:{value:t.when},on:{change:function(e){t.when=e.target.value}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"howLong"}},[t._v("How long did you workout?")]),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.howLong,expression:"howLong",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"howLong",type:"text"},domProps:{value:t.howLong},on:{input:function(e){e.target.composing||(t.howLong=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"type"}},[t._v("Name of the workout?")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control",attrs:{id:"howLong",placeholder:"Workout"},domProps:{value:t.type},on:{input:function(e){e.target.composing||(t.type=e.target.value)}}})]),s("div",{staticClass:"form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.Weightbodyweight,expression:"Weightbodyweight"}],staticClass:"form-check-input",attrs:{id:"v1",type:"radio"},domProps:{value:t.bodyweight,checked:t._q(t.Weightbodyweight,t.bodyweight)},on:{change:function(e){t.Weightbodyweight=t.bodyweight}}}),s("label",{staticClass:"form-check-label",attrs:{for:"v1"}},[t._v("Bodyweight")])]),s("div",{staticClass:"form-check-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.Weightbodyweight,expression:"Weightbodyweight"}],staticClass:"form-check-input",attrs:{id:"v1",type:"radio"},domProps:{value:t.Weights,checked:t._q(t.Weightbodyweight,t.Weights)},on:{change:function(e){t.Weightbodyweight=t.Weights}}}),s("label",{staticClass:"form-check-label",attrs:{for:"v1"}},[t._v("Weights")])]),s("br"),s("br"),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"type"}},[t._v("How many reps did you complete?")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.reps,expression:"reps",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"reps",placeholder:"reps"},domProps:{value:t.reps},on:{input:function(e){e.target.composing||(t.reps=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),s("div",{staticClass:"form-group"},[s("label",{staticClass:"form-label",attrs:{for:"sets"}},[t._v("How many sets did you complete")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sets,expression:"sets",modifiers:{number:!0}}],staticClass:"form-control",attrs:{id:"sets",placeholder:"sets"},domProps:{value:t.sets},on:{input:function(e){e.target.composing||(t.sets=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),s("br"),s("div",[s("button",{staticClass:"btn btn-primary mt-2",attrs:{type:"button"},on:{click:t.addWorkOut}},[t._v("Add record")])])])])])}),d=[],u={name:"NewWorkOut",data:function(){return{howLong:1,Weights:"Weights",bodyweight:"Bodyweight",activity:"Workout",when:"",sets:"",type:"",reps:"",Weightbodyweight:"Bodyweight",activityRecords:[],errors:[]}},methods:{addWorkOut:function(){this.errors=[];var t={when:this.when,howLong:this.howLong,type:this.type,Weightbodyweight:this.Weightbodyweight,reps:this.reps,sets:this.sets,note:this.note};if(this.when||this.errors.push("Data Required"),this.when,("number"!=typeof this.howLong||this.howLong<=0)&&(this.errors.push("The number of hours must be greater than zero"),this.howLong),("number"!=typeof this.reps||this.reps<=0)&&(this.errors.push("The number of reps must be greater than zero"),this.reps),("number"!=typeof this.sets||this.sets<=0)&&(this.errors.push("The number of sets must be greater than zero"),this.sets),0==this.errors.length){this.when,this.howLong,this.type,this.Weightbodyweight,this.reps,this.sets,this.note;this.$emit("WorkOut-added",t)}}}},l=u,h=s("2877"),f=Object(h["a"])(l,c,d,!1,null,null,null),b=f.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"card"},[s("h2",{staticClass:"card-header"},[t._v("Activity Record")]),s("div",{staticClass:"card-body"},[s("h3",[t._v(" "+t._s(t.WorkOuts.length))]),s("div",{attrs:{id:"records"}},[s("table",{staticClass:"table"},[t._m(0),t._l(t.WorkOuts,(function(e){return s("tr",{key:e.when},[s("td",[t._v(t._s(t._f("shortDateFormat")(e.when)))]),s("td",[t._v(t._s(e.howLong))]),s("td",[t._v(t._s(e.type))]),s("td",[t._v(t._s(e.Weightbodyweight))]),s("td",[t._v(t._s(e.reps))]),s("td",[t._v(t._s(e.sets))])])}))],2)])])])])},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("When")]),s("th",[t._v("How long?")]),s("th",[t._v("Type")]),s("th",[t._v("Weights or bodyweight?")]),s("th",[t._v("Reps")]),s("th",[t._v("Sets")])])}],j={name:"WorkOutRecord",props:{WorkOuts:Array},methods:{checked:function(t){this.$emit(Workout)}}},g=j,v=(s("c236"),Object(h["a"])(g,p,m,!1,null,null,null)),y=v.exports,k=s("1fca"),w=k["b"].reactiveProp,W={extends:k["a"],mixins:[w],props:{options:Object},mounted:function(){console.log(this.chartData),this.renderChart(this.chartData,this.options)}},O=W,_=Object(h["a"])(O,r,o,!1,null,null,null),C=_.exports,z={name:"app",data:function(){return{WorkOuts:[],WorkOutsChartData:{},dataLoaded:!0}},components:{NewWorkOut:b,WorkOutRecord:y,WorkOutSummary:C},methods:{NewWorkOutAdded:function(t){var e=this;this.$WorkOuts_api.addWorkOuts(t).then((function(t){e.updateWorkOuts(),e.WorkOuts.push(t)})).catch((function(t){var e=t.response.data.join(",");alert("Error adding WorkOuts.\n"+e)})),this.WorkOuts.push(t);var s=this.WorkOuts.map((function(t){return t.type})),r=this.WorkOuts.map((function(t){return t.reps})),o=["rgb(158, 179, 194)","rgb(28,114,147)","  rgb(2, 133, 145)","rgb(68, 94, 116)","rgb(18, 58, 90)"],a=["rgb(28,114,110","rgb(28,114,110","rgb(28,114,110","rgb(28,114,110","rgb(28,114,110","rgb(28,114,110","rgb(28,114,110","rgb(28,114,110"];this.WorkOutsChartData={labels:s,datasets:[{label:"Workout",data:r,backgroundColor:o,hoverBackgroundColor:a}]}},loadWorkOutData:function(){this.WorkOuts=work;this.WorkOuts.map((function(t){return t.when}))}},updateWorkOuts:function(){var t=this;this.$WorkOuts_api.getAllWorkOuts().then((function(e){t.WorkOuts=WorkOuts}))}},x=z,L=Object(h["a"])(x,n,i,!1,null,null,null),N=L.exports,P=s("5f5b"),$=s("bc3a"),D=s.n($),S="/api/WorkOuts",T={getAllWorkOuts:function(){return D.a.get(S).then((function(t){return t.data}))},addWorkOuts:function(t){return D.a.post(S,t).then((function(t){return t.data}))},updateWorkOut:function(t){return D.a.patch("".concat(S,"/").concat(t.id),t).then((function(t){return t.data}))}};s("f9e3"),s("2dd8");a["default"].use(P["a"]),a["default"].prototype.$WorkOuts_api=T,a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(N)}}).$mount("#app")},c236:function(t,e,s){"use strict";var r=s("c9eb"),o=s.n(r);o.a},c9eb:function(t,e,s){}});
//# sourceMappingURL=app.834c1ef2.js.map