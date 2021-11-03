(this["webpackJsonpreact-chat-ui"]=this["webpackJsonpreact-chat-ui"]||[]).push([[0],{101:function(e,t,a){e.exports=a(114)},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(20),c=a.n(i),l=(a(106),a(12)),o=a(13),r=a(18),m=a(16),p=(a(107),a(108),function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"avatar"},n.a.createElement("div",{className:"avatar-img"},n.a.createElement("img",{src:this.props.image})),n.a.createElement("span",{className:"isOnline ".concat(this.props.isOnline)}))}}]),a}(s.Component)),h=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isActive:!1},e.selectChat=function(t){for(var a=0;a<t.currentTarget.parentNode.children.length;a++)t.currentTarget.parentNode.children[a].classList.remove("active");t.currentTarget.classList.add("active"),e.props.handleData(t.currentTarget)},e.handleActive=function(){!0===e.state.isActive?e.setState({isActive:!1}):e.setState({isActive:!0})},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{animationDelay:"0.".concat(this.props.animationDelay,"s")},onClick:this.selectChat,className:"chatlist__item clientList__item ".concat(this.props.active?this.props.active:""," ")},n.a.createElement(p,{image:this.props.image?this.props.image:"http://placehold.it/80x80",isOnline:this.props.isOnline}),n.a.createElement("div",{className:"userMeta"},n.a.createElement("p",null,this.props.name),n.a.createElement("span",{className:"activeTime"},"32 mins ago"),n.a.createElement("h1",{className:"dotCLass",onClick:this.handleActive},"...")),this.state.isActive&&n.a.createElement("div",{className:"deleteDiv",style:{animationDelay:"0.".concat(this.props.animationDelay,"s")}},n.a.createElement("div",{className:"liDiv"},n.a.createElement("i",{className:"fas fa-trash deleteIcon"}),n.a.createElement("span",null,"Delete")))))}}]),a}(s.Component),u=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isActive:!1,isDropDown:!1,rotate:"0"},e.selectChat=function(t){for(var a=0;a<t.currentTarget.parentNode.children.length;a++)t.currentTarget.parentNode.children[a].classList.remove("active");t.currentTarget.classList.add("active"),e.handleDropDown()},e.handleActive=function(){!0===e.state.isActive?e.setState({isActive:!1}):e.setState({isActive:!0})},e.handleDropDown=function(){!0===e.state.isDropDown?e.setState({isDropDown:!1,rotate:"0"}):e.setState({isDropDown:!0,rotate:"90"})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{style:{animationDelay:"0.".concat(this.props.animationDelay,"s")},onClick:this.selectChat,className:"chatlist__item ".concat(this.props.active?this.props.active:""," ")},n.a.createElement(p,{image:this.props.image?this.props.image:"http://placehold.it/80x80",isOnline:this.props.isOnline}),n.a.createElement("div",{className:"userMeta"},n.a.createElement("p",null,this.props.name),n.a.createElement("span",{className:"activeTime"},"32 mins ago"),n.a.createElement("h1",{className:"dotCLass",onClick:this.handleActive},"..."),n.a.createElement("i",{className:"fas fa-angle-down downIcon ".concat(this.state.isDropDown?"rotate":""),onClick:this.handleDropDown})),this.state.isActive&&n.a.createElement("div",{className:"deleteDiv",style:{animationDelay:"0.".concat(this.props.animationDelay,"s")}},n.a.createElement("div",{className:"liDiv"},n.a.createElement("i",{className:"fas fa-trash deleteIcon"}),n.a.createElement("span",null,"Delete")))),this.state.isDropDown&&this.props.item.clients.map((function(t,a){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{name:t.name,key:t.id,animationDelay:t+1,active:t.active?"active":"",isOnline:t.isOnline?"active":"",image:t.image,handleData:e.props.handleData,isClicked:e.props.isClicked}))})))}}]),a}(s.Component),d=(a(109),a(117)),g=a(118),v=d.a.TextArea,b=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).allChatUsers=[{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",id:1,name:"Coach 1",active:!1,isOnline:!0,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:2,name:"Ayub Rossi",active:!1,isOnline:!1},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:3,name:"Ayub Rossi",active:!1,isOnline:!0}]},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:2,name:"Coach 2",active:!1,isOnline:!1,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:2,name:"Ayub Rossi",active:!1,isOnline:!1}]},{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",id:3,name:"Coach 3",active:!1,isOnline:!1,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0}]},{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",id:4,name:"Coach 4",active:!1,isOnline:!0,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:2,name:"Ayub Rossi",active:!1,isOnline:!1},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:3,name:"Ayub Rossi",active:!1,isOnline:!0},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:4,name:"Ayub Rossi",active:!1,isOnline:!1}]},{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",id:5,name:"Coach 5",active:!1,isOnline:!1,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:2,name:"Ayub Rossi",active:!1,isOnline:!1}]},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:6,name:"Coach 6",active:!1,isOnline:!0,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0}]},{image:"https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",id:7,name:"Coach 7",active:!1,isOnline:!0,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0}]},{image:"https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",id:8,name:"Coach 8",active:!1,isOnline:!0,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:2,name:"Ayub Rossi",active:!1,isOnline:!1}]},{image:"https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",id:9,name:"Coach 9",active:!1,isOnline:!0,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0}]},{image:"https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",id:10,name:"Coach 10",active:!1,isOnline:!0,clients:[{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:1,name:"Ayub Rossi",active:!1,isOnline:!0},{image:"https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",id:2,name:"Ayub Rossi",active:!1,isOnline:!1}]}],e.state={allChats:e.allChatUsers,modal1Visible:!1},e}return Object(o.a)(a,[{key:"setModal1Visible",value:function(e){this.setState({modal1Visible:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"main__chatlist"},n.a.createElement("div",{className:"chatlist__heading"},n.a.createElement("h2",{style:{marginLeft:"5px"}},"Chats"),n.a.createElement("button",{className:"btn-nobg",onClick:function(){return e.setModal1Visible(!0)}},n.a.createElement("i",{className:"fas fa-edit addBtn"}))),n.a.createElement("div",{className:"chatList__search"},n.a.createElement("div",{className:"search_wrap"},n.a.createElement("input",{type:"text",placeholder:"Search Here",required:!0}),n.a.createElement("button",{className:"search-btn"},n.a.createElement("i",{className:"fa fa-search searchIcon"})))),n.a.createElement("div",{className:"chatlist__items"},this.state.allChats.map((function(t,a){return n.a.createElement(u,{name:t.name,key:t.id,animationDelay:a+1,active:t.active?"active":"",isOnline:t.isOnline?"active":"",image:t.image,handleData:e.props.handleData,isClicked:e.props.isClicked,item:t})}))),n.a.createElement(g.a,{title:"Create a Chat",centered:!0,visible:this.state.modal1Visible,onOk:function(){return e.setModal1Visible(!1)},okText:"Send Message",onCancel:function(){return e.setModal1Visible(!1)}},n.a.createElement(d.a,{placeholder:"Enter Subject",style:{borderRadius:"5px"}}),n.a.createElement(v,{placeholder:"Enter Message Here",autoSize:{minRows:5,maxRows:8},style:{marginTop:"1rem",borderRadius:"5px"}})))}}]),a}(s.Component),f=a(75),y=(a(113),function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{style:{animationDelay:"0.3s"},className:"chat__item ".concat(this.props.user?this.props.user:"")},n.a.createElement("div",{className:"chat__item__content"},n.a.createElement("div",{className:"chat__msg"},this.props.msg),n.a.createElement("div",{className:"chat__meta"},n.a.createElement("span",null,"16 mins ago"),n.a.createElement("span",null,"Seen 1.03PM"))),n.a.createElement(p,{isOnline:"active",image:this.props.image}))}}]),a}(s.Component)),E=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).messagesEndRef=Object(s.createRef)(null),e.chatItms=[{key:1,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",type:"",msg:"Hi Tim, How are you?"},{key:2,image:e.props.avatar,type:"other",msg:"I am fine."},{key:3,image:e.props.avatar,type:"other",msg:"What about you?"},{key:4,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",type:"",msg:"Awesome these days."},{key:5,image:e.props.avatar,type:"other",msg:"Finally. What's the plan?"},{key:6,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",type:"",msg:"what plan mate?"},{key:7,image:e.props.avatar,type:"other",msg:"I'm taliking about the tutorial"}],e.state={chat:e.chatItms,msg:""},e.scrollToBottom=function(){e.messagesEndRef.current.scrollIntoView({behavior:"smooth"})},e.onStateChange=function(t){e.setState({msg:t.target.value})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("keydown",(function(t){13==t.keyCode&&""!=e.state.msg&&(e.chatItms.push({key:1,type:"",msg:e.state.msg,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU"}),e.setState({chat:Object(f.a)(e.chatItms)}),e.scrollToBottom(),e.setState({msg:""}))}));var t=document.querySelector(".btnSendMsg");console.log(t),t.addEventListener("click",(function(t){""!=e.state.msg&&(e.chatItms.push({key:1,type:"",msg:e.state.msg,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU"}),e.setState({chat:Object(f.a)(e.chatItms)}),e.scrollToBottom(),e.setState({msg:""}))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"main__chatcontent"},n.a.createElement("div",{className:"content__header"},n.a.createElement("div",{className:"blocks"},n.a.createElement("div",{className:"current-chatting-user"},n.a.createElement(p,{isOnline:"active",image:this.props.avatar}),n.a.createElement("p",null,this.props.user))),n.a.createElement("div",{className:"blocks"},n.a.createElement("div",{className:"settings"},n.a.createElement("button",{className:"btn-nobg"},n.a.createElement("i",{className:"fa fa-cog settingIcon"})),n.a.createElement("button",{className:"btn-nobg btn-close",onClick:this.props.handleClose},n.a.createElement("i",{className:"fas fa-times settingIcon closeIcon"}))))),n.a.createElement("div",{className:"content__body"},n.a.createElement("div",{className:"chat__items"},this.state.chat.map((function(e,t){return n.a.createElement(y,{animationDelay:t+2,key:e.key,user:e.type?e.type:"me",msg:e.msg,image:e.image})})),n.a.createElement("div",{ref:this.messagesEndRef}))),n.a.createElement("div",{className:"content__footer"},n.a.createElement("div",{className:"sendNewMessage"},n.a.createElement("label",{htmlFor:"fileSelect"},n.a.createElement("div",{className:"addFiles"},n.a.createElement("i",{className:"fa fa-plus",style:{color:"#fff"}}))),n.a.createElement("input",{type:"file",id:"fileSelect"}),n.a.createElement("input",{type:"text",placeholder:"Type a message here",onChange:this.onStateChange,value:this.state.msg}),n.a.createElement("button",{className:"btnSendMsg",id:"sendMsgBtn"},n.a.createElement("i",{className:"fa fa-paper-plane",style:{color:"#fff"}})))))}}]),a}(s.Component),A=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isClicked:!1,avatar:"",user:""},e.handleData=function(t){var a=t.querySelector("img").src,s=t.querySelector("p").innerText;e.setState({isClicked:!0,avatar:a,user:s})},e.handleClose=function(){var t=document.querySelectorAll(".chatlist__item");t.forEach((function(e){e.classList.remove("active")})),console.log(t),e.setState({isClicked:!1})},e}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"main__chatbody"},n.a.createElement(b,{handleData:this.handleData}),this.state.isClicked&&n.a.createElement(E,{isClicked:this.state.isClicked,handleClose:this.handleClose,avatar:this.state.avatar,user:this.state.user})),n.a.createElement("div",{className:"main__chatbody1"},n.a.createElement("h1",{className:"sorryH1"},"Sorry for Inconvenience, Please Open it on Larger Screen Size")))}}]),a}(s.Component);var O=function(){return n.a.createElement("div",{className:"__main"},n.a.createElement(A,null))};c.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.c1ecea35.chunk.js.map