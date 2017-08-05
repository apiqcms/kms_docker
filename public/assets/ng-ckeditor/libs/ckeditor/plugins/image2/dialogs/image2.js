CKEDITOR.dialog.add("image2",function(t){function e(){var t=this.getValue().match(x);return(t=!(!t||0===parseInt(t[1],10)))||alert(R["invalid"+CKEDITOR.tools.capitalize(this.id)]),t}function i(){function t(t,a){i.push(e.once(t,function(t){for(var e;e=i.pop();)e.removeListener();a(t)}))}var e=s.createElement("img"),i=[];return function(i,a,n){t("load",function(){a.call(n,e,e.$.width,e.$.height)}),t("error",function(){a(null)}),t("abort",function(){a(null)}),e.setAttribute("src",i+"?"+Math.random().toString(16).substring(2))}}function a(){var t=this.getValue();l(!1),t!==c.data.src?(d(t,function(t,e,i){if(l(!0),!t)return o(!1);w.setValue(e),y.setValue(i),p=e,f=i,o(K.checkHasNaturalRatio(t))}),g=!0):g?(l(!0),w.setValue(r),y.setValue(h),g=!1):l(!0)}function n(){if(m){var t=this.getValue();if(t&&(t.match(x)||o(!1),"0"!==t)){var e="width"==this.id,i=r||p,a=h||f,t=e?Math.round(a*(t/i)):Math.round(i*(t/a));isNaN(t)||(e?y:w).setValue(t)}}}function o(t){if(v){if("boolean"==typeof t){if(b)return;m=t}else t=w.getValue(),b=!0,(m=!m)&&t&&(t*=h/r,isNaN(t)||y.setValue(Math.round(t)));v[m?"removeClass":"addClass"]("cke_btn_unlocked"),v.setAttribute("aria-checked",m),CKEDITOR.env.hc&&v.getChild(0).setHtml(m?CKEDITOR.env.ie?"\u25a0":"\u25a3":CKEDITOR.env.ie?"\u25a1":"\u25a2")}}function l(t){t=t?"enable":"disable",w[t](),y[t]()}var s,c,u,d,r,h,p,f,g,m,b,v,V,w,y,k,x=/(^\s*(\d+)(px)?\s*$)|^$/i,D=CKEDITOR.tools.getNextId(),C=CKEDITOR.tools.getNextId(),I=t.lang.image2,R=t.lang.common,_=new CKEDITOR.template('<div><a href="javascript:void(0)" tabindex="-1" title="'+I.lockRatio+'" class="cke_btn_locked" id="{lockButtonId}" role="checkbox"><span class="cke_icon"></span><span class="cke_label">'+I.lockRatio+'</span></a><a href="javascript:void(0)" tabindex="-1" title="'+I.resetSize+'" class="cke_btn_reset" id="{resetButtonId}" role="button"><span class="cke_label">'+I.resetSize+"</span></a></div>").output({lockButtonId:D,resetButtonId:C}),K=CKEDITOR.plugins.image2,E=K.getNatural,I={title:I.title,minWidth:250,minHeight:100,onLoad:function(){s=this._.element.getDocument(),d=i()},onShow:function(){c=this.widget,u=c.parts.image,g=b=m=!1,k=E(u),p=r=k.width,f=h=k.height},contents:[{id:"info",label:I.infoTab,elements:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["280px","110px"],align:"right",children:[{id:"src",type:"text",label:R.url,onKeyup:a,onChange:a,setup:function(t){this.setValue(t.data.src)},commit:function(t){t.setData("src",this.getValue())},validate:CKEDITOR.dialog.validate.notEmpty(I.urlMissing)},{type:"button",id:"browse",style:"display:inline-block;margin-top:16px;",align:"center",label:t.lang.common.browseServer,hidden:!0,filebrowser:"info:src"}]}]},{id:"alt",type:"text",label:I.alt,setup:function(t){this.setValue(t.data.alt)},commit:function(t){t.setData("alt",this.getValue())}},{type:"hbox",widths:["25%","25%","50%"],requiredContent:"img[width,height]",children:[{type:"text",width:"45px",id:"width",label:R.width,validate:e,onKeyUp:n,onLoad:function(){w=this},setup:function(t){this.setValue(t.data.width)},commit:function(t){t.setData("width",this.getValue())}},{type:"text",id:"height",width:"45px",label:R.height,validate:e,onKeyUp:n,onLoad:function(){y=this},setup:function(t){this.setValue(t.data.height)},commit:function(t){t.setData("height",this.getValue())}},{id:"lock",type:"html",style:"margin-top:18px;width:40px;height:20px;",onLoad:function(){function t(t){t.on("mouseover",function(){this.addClass("cke_btn_over")},t),t.on("mouseout",function(){this.removeClass("cke_btn_over")},t)}var e=this.getDialog();v=s.getById(D),V=s.getById(C),v&&(e.addFocusable(v,4),v.on("click",function(t){o(),t.data&&t.data.preventDefault()},this.getDialog()),t(v)),V&&(e.addFocusable(V,5),V.on("click",function(t){g?(w.setValue(p),y.setValue(f)):(w.setValue(r),y.setValue(h)),t.data&&t.data.preventDefault()},this),t(V))},setup:function(t){o(t.data.lock)},commit:function(t){t.setData("lock",m)},html:_}]},{type:"hbox",id:"alignment",children:[{id:"align",type:"radio",items:[["None","none"],["Left","left"],["Center","center"],["Right","right"]],label:R.align,setup:function(t){this.setValue(t.data.align)},commit:function(t){t.setData("align",this.getValue())}}]},{id:"hasCaption",type:"checkbox",label:I.captioned,setup:function(t){this.setValue(t.data.hasCaption)},commit:function(t){t.setData("hasCaption",this.getValue())}}]},{id:"Upload",hidden:!0,filebrowser:"uploadButton",label:I.uploadTab,elements:[{type:"file",id:"upload",label:I.btnUpload,style:"height:40px",size:38},{type:"fileButton",id:"uploadButton",filebrowser:"info:src",label:I.btnUpload,"for":["Upload","upload"]}]}]};return!t.config.filebrowserImageBrowseUrl&&!t.config.filebrowserBrowseUrl&&(I.contents[0].elements[0].children[0]=I.contents[0].elements[0].children[0].children[0]),I});