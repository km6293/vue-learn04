"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[68],{1068:function(e,a,t){t.r(a),t.d(a,{default:function(){return C}});t(4114);var s=t(6768),n=t(4232),i=t(144),c=t(4373),o=t(6502),r=t(1387);const u=e=>((0,s.Qi)("data-v-1e1494a5"),e=e(),(0,s.jt)(),e),l={class:"header-content"},d={class:"header-text heading2-bold"},v=u((()=>(0,s.Lk)("br",null,null,-1))),m={class:"header-info"},h={class:"info-rows"},p={class:"rows-item"},f={class:"item-text"},k=u((()=>(0,s.Lk)("div",{class:"item-sub-text caption-medium"},"지금 서귀포시는",-1))),b={class:"item-main-text subheading-bold"},w=["src"],g=u((()=>(0,s.Lk)("div",{class:"item-text"},[(0,s.Lk)("div",{class:"item-sub-text caption-medium"},"필요한 것들"),(0,s.Lk)("div",{class:"item-main-text subheading-bold"},"체크하기")],-1)));var x=(0,s.pM)({__name:"Header",setup(e){const a=(0,i.KR)(""),u=(0,i.KR)(0),x=(0,i.KR)(""),L=(0,i.KR)(""),R=(0,r.rd)(),C=async()=>{try{const e=await c.A.get("/api/v1/auth/user",{headers:{Authorization:`Bearer ${A("Authorization")}`}}),t=e.data;a.value=t.name||t.nickname||"사용자"}catch(e){console.error("Failed to fetch user info:",e)}},y=async()=>{const e="b185f63264f73151b89f36f599433cf2",a="Jeju City",s=`https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=${e}`;try{const e=await c.A.get(s);switch(u.value=e.data.main.temp.toFixed(1),x.value=e.data.weather[0].main,x.value){case"Clouds":L.value=t(6735);break;case"Rain":L.value=t(7839);break;case"Snow":L.value=t(4276);break;default:L.value=t(4909)}}catch(n){console.error("Failed to fetch weather:",n)}},_=()=>{R.push({name:"check-list"})};function A(e){const a=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return a?decodeURIComponent(a[1]):null}return(0,s.sV)((()=>{C(),y()})),(e,t)=>((0,s.uX)(),(0,s.CE)("header",l,[(0,s.Lk)("div",d,[(0,s.eW)((0,n.v_)(a.value)+"님, 혼저옵서예! ",1),v,(0,s.eW)(" 오늘은 어디를 걸을까요? ")]),(0,s.Lk)("div",m,[(0,s.bF)((0,i.R1)(o.vj)),(0,s.Lk)("div",h,[(0,s.Lk)("div",p,[(0,s.Lk)("div",f,[k,(0,s.Lk)("div",b,(0,n.v_)(u.value)+"˚",1)]),(0,s.Lk)("img",{src:L.value,class:"rows-item-icon-weather",alt:"Weather Icon"},null,8,w)]),(0,s.Lk)("div",{class:"rows-item",onClick:_},[g,(0,s.bF)((0,i.R1)(o.Qv),{class:"rows-item-icon"})])])])]))}}),L=t(1241);const R=(0,L.A)(x,[["__scopeId","data-v-1e1494a5"]]);var C=R},6735:function(e,a,t){e.exports=t.p+"img/Clouds.7c54a634.svg"},7839:function(e,a,t){e.exports=t.p+"img/Rain.4abc6753.svg"},4276:function(e,a,t){e.exports=t.p+"img/Snow.c8561f74.svg"},4909:function(e,a,t){e.exports=t.p+"img/Sunny.7430f953.svg"}}]);
//# sourceMappingURL=68.d9961671.js.map