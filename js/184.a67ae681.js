"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[184],{525:function(e,t,a){a.d(t,{Ak:function(){return c},EZ:function(){return u},Md:function(){return d},Ro:function(){return i},ZM:function(){return s},bt:function(){return h},qm:function(){return l}});var n=a(4373);const o={"Content-Type":"application/json"},r=e=>{const t=n.A.isAxiosError(e)&&e.response?e.response.data.errorCode:null;throw{originalError:e,errorCode:t}},l=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/sms/send",r={name:e,phoneNumber:t},l=await n.A.post(a,r,{headers:o});return l.data}catch(a){r(a)}},u=async(e,t,a)=>{try{const r="http://localhost:8080/api/v1/auth/sms/check",l={name:e,phoneNumber:t,verificationCode:a},u=await n.A.post(r,l,{headers:o});return u.data}catch(l){r(l)}},c=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/sms/send/later",r={name:e,phoneNumber:t},l=await n.A.post(a,r,{headers:o});return l.data}catch(a){r(a)}},s=async e=>{try{const t="http://localhost:8080/api/v1/auth/authentication/send",a=await n.A.post(t,{email:e},{headers:{"Content-Type":"application/json"}});return a.data}catch(t){const e=n.A.isAxiosError(t)&&t.response?t.response.data.errorCode:null;throw{originalError:t,errorCode:e}}},i=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/authentication/check",r={email:e,authCode:t},l=await n.A.post(a,r,{headers:o});return l.data}catch(a){r(a)}},d=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/find/id",o={name:e,phoneNumber:t},r=await n.A.post(a,o);return r.data}catch(a){r(a)}},h=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/authentication/check/later",o={email:e,authCode:t},r=await n.A.post(a,o);return r.data}catch(a){r(a)}}},1184:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});a(4114);var n=a(6768),o=a(144),r=a(1387),l=a(525),u=a(5438),c=a(6502);const s={class:"verification-container"},i={class:"input-group"};var d=(0,n.pM)({__name:"FindIDByPhone",setup(e){const t=(0,r.rd)(),a=(0,o.Kh)({verificationSent:!1,verificationExpired:!1}),d=(0,o.KR)(""),h=(0,o.KR)("default"),p=(0,o.KR)(""),v=(0,o.KR)("default"),f=(0,o.KR)(""),m=(0,o.KR)("default"),y=(0,o.KR)(""),b=async()=>{if(0===d.value.length)return void(h.value="error");h.value="default";const e=p.value.replace(/-/g,"");if((0,u.Q7)(e)){v.value="default";try{await(0,l.Ak)(d.value,e),a.verificationSent=!0}catch(t){const e=t;"INVALID_VALUE_04"===e.errorCode&&(m.value="error",y.value="이미 계정이 존재합니다.")}}else v.value="error"},A=async()=>{if(a.verificationSent)try{const e=p.value.replace(/-/g,"");await(0,l.EZ)(d.value,e,f.value),t.push({name:"find-id-result",query:{name:d.value,phoneNumber:e}})}catch(e){const t=e;"AUTH_03"===t.errorCode&&(m.value="error",y.value="인증번호가 틀렸습니다.")}};return(e,t)=>((0,n.uX)(),(0,n.CE)("div",s,[(0,n.Lk)("span",i,[(0,n.bF)((0,o.R1)(c.pd),{placeholder:"이름을 입력해주세요",label:"이름",modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=e=>d.value=e),state:h.value},null,8,["modelValue","state"]),(0,n.bF)((0,o.R1)(c.pd),{placeholder:"000-0000-0000",onInput:(0,o.R1)(u.Y8),maxlength:"13",label:"휴대폰 번호",modelValue:p.value,"onUpdate:modelValue":t[1]||(t[1]=e=>p.value=e),state:v.value,message:"가입 시 등록한 휴대폰 번호를 입력해주세요"},null,8,["onInput","modelValue","state"]),a.verificationSent?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)((0,o.R1)(c.$n),{key:0,text:"인증번호 받기",onClick:b,style:{backgroundColor:"var(--color-button-secondary)",color:"var(--color-button-on-secondary)",height:"44px",fontSize:"1.4rem"}})),a.verificationSent?((0,n.uX)(),(0,n.Wv)((0,o.R1)(c.pd),{key:1,placeholder:"인증번호 입력",label:"인증번호",modelValue:f.value,"onUpdate:modelValue":t[2]||(t[2]=e=>f.value=e),state:m.value,message:y.value},null,8,["modelValue","state","message"])):(0,n.Q3)("",!0)]),a.verificationSent?((0,n.uX)(),(0,n.Wv)((0,o.R1)(c.$n),{key:0,class:"next-button",onClick:A,text:"다음"})):(0,n.Q3)("",!0)]))}}),h=a(1241);const p=(0,h.A)(d,[["__scopeId","data-v-57e3e2fd"]]);var v=p}}]);
//# sourceMappingURL=184.a67ae681.js.map