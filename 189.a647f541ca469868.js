"use strict";(self.webpackChunkdemo_app=self.webpackChunkdemo_app||[]).push([[189],{9189:(b,c,n)=>{n.r(c),n.d(c,{PostsModule:()=>r});var u=n(9808),i=n(8309),d=n(655),e=n(7587);let a=class{ngOnChanges(o){"buttonClick"in o&&alert("Button Click!")}};a.\u0275fac=function(o){return new(o||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-posts-custom"]],inputs:{config:"config",buttonClick:"buttonClick"},features:[e.TTD],decls:5,vars:1,consts:[[1,"red"]],template:function(o,s){1&o&&(e.TgZ(0,"p"),e._uU(1,"This is a custom "),e.TgZ(2,"strong",0),e._uU(3),e.qZA(),e._uU(4," component :D"),e.qZA()),2&o&&(e.xp6(3),e.Oqu(null==s.config.options?null:s.config.options.text))},styles:[".red[_ngcontent-%COMP%]{color:red}"]}),a=(0,d.gn)([(0,i.Bk)({type:"custom",nameTranslation:"Custom Component",category:"misc",icon:"user",nodeColor:"red",options:[{options:[{key:"text",defaultValue:"red",type:"text",nameTranslation:"Text",required:!0}]}],inputs:[{key:"buttonClick",nameTranslation:"Button Click"}]})],a);const f=JSON.parse('{"name":"Posts","className":"PostsModule","slug":"posts","icon":"news","groups":[],"views":{"d76a3411-182c-4fee-8c6b-1eaa5fc169e4":{"uuid":"d76a3411-182c-4fee-8c6b-1eaa5fc169e4","name":"Users Layout","slug":"users-layout","blueprint":[{"uuid":"8d713867-9a06-4880-a0a6-139b69b5641e","type":"view-value-text","config":{"value":"john"},"connections":[{"fromKey":"value","toNode":"5c09c64c-e597-441d-ac32-4338c7323eba","toKey":"value"}],"position":{"x":198,"y":158}},{"uuid":"5c09c64c-e597-441d-ac32-4338c7323eba","type":"view-output","config":{"key":"name"},"connections":[],"position":{"x":573,"y":87}}],"gizmos":[{"uuid":"0c0f7ff1-206c-483f-8362-61b080d7cfbd","name":"Text","type":"@theme/text","options":{"text":"# Users","color":"none","align":"left"}},{"uuid":"a8ec1d54-ad1c-4dbf-bdad-dea207dd38b0","name":"Router Outlet","type":"@dashbox/router-outlet","options":{}}]},"322084b9-fb77-4d5e-a8fd-440127fdb6e0":{"uuid":"322084b9-fb77-4d5e-a8fd-440127fdb6e0","name":"List","slug":"list","blueprint":[],"gizmos":[{"uuid":"58d9f227-93e6-4ddc-94c6-7c1570695528","name":"Text","type":"@theme/text","options":{"text":"... users list ...","color":"none","align":"left"}}]},"8037fa22-473c-4e66-a026-a61fc0ebd6c0":{"uuid":"8037fa22-473c-4e66-a026-a61fc0ebd6c0","name":"Edit","slug":"edit","blueprint":[{"uuid":"7e42ea74-86bb-4fa3-992a-a08b885c5b33","type":"gizmo:6dd53eee-39fc-4e19-9cbe-534f47a1e17c","config":{},"connections":[],"position":{"x":529,"y":274}},{"uuid":"0c1a52f9-da78-46f1-ac3d-e02965651221","type":"view-input-view","config":{"key":"name"},"connections":[{"fromKey":"value","toNode":"7e42ea74-86bb-4fa3-992a-a08b885c5b33","toKey":"option:text"},{"fromKey":"value","toNode":"352bb694-172f-4c50-ade5-3598b01be930","toKey":"value"}],"position":{"x":166,"y":52}},{"uuid":"352bb694-172f-4c50-ade5-3598b01be930","type":"view-debug-logger","config":{"name":"Name"},"connections":[],"position":{"x":469,"y":5}}],"gizmos":[{"uuid":"6dd53eee-39fc-4e19-9cbe-534f47a1e17c","name":"User ID title","type":"@theme/text","options":{"text":"## User ID here","color":"none","align":"left"}},{"uuid":"2de3eb69-21cb-4be7-97eb-9d383e77a56e","name":"Text","type":"@theme/text","options":{"text":"... edit user ...","color":"none","align":"left"}}]}},"routes":[{"uuid":"0000","type":"routes-module","config":{"layout":"@theme/layout-horizontal","path":"posts"},"connections":[{"fromKey":"routes","toNode":"b835dc6c-36ea-4e9c-aae3-44a1eb4601a9","toKey":"parent"}],"position":{"x":232,"y":106}},{"uuid":"b835dc6c-36ea-4e9c-aae3-44a1eb4601a9","type":"routes-view","config":{"path":"","view":"d76a3411-182c-4fee-8c6b-1eaa5fc169e4"},"connections":[{"fromKey":"routes","toNode":"d29f1264-39ea-4e0a-8e19-df4e1138ab73","toKey":"parent"},{"fromKey":"routes","toNode":"e5415f1e-b500-4eaa-a6a7-ed216a1e2623","toKey":"parent"}],"position":{"x":568,"y":117}},{"uuid":"d29f1264-39ea-4e0a-8e19-df4e1138ab73","type":"routes-view","config":{"path":"","view":"322084b9-fb77-4d5e-a8fd-440127fdb6e0"},"connections":[],"position":{"x":912,"y":61}},{"uuid":"e5415f1e-b500-4eaa-a6a7-ed216a1e2623","type":"routes-view","config":{"path":"edit/:id","view":"8037fa22-473c-4e66-a026-a61fc0ebd6c0"},"connections":[],"position":{"x":898,"y":291}}]}');var p=n.t(f,2);const l=[a];let r=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,i.q_.forChild(p,{gizmos:l})]]}),t})()}}]);