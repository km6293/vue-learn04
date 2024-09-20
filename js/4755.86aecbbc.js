"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[4755],{525:function(t,e,a){a.d(e,{Ak:function(){return c},EZ:function(){return l},Md:function(){return d},Ro:function(){return s},ZM:function(){return u},bt:function(){return h},ij:function(){return v},qm:function(){return i}});var n=a(4373);const r={"Content-Type":"application/json"},o=t=>{const e=n.A.isAxiosError(t)&&t.response?t.response.data.errorCode:null;throw{originalError:t,errorCode:e}},i=async(t,e)=>{try{const a="http://localhost:8080/api/v1/auth/sms/send",o={name:t,phoneNumber:e},i=await n.A.post(a,o,{headers:r});return i.data}catch(a){o(a)}},l=async(t,e,a)=>{try{const o="http://localhost:8080/api/v1/auth/sms/check",i={name:t,phoneNumber:e,verificationCode:a},l=await n.A.post(o,i,{headers:r});return l.data}catch(i){o(i)}},c=async(t,e)=>{try{const a="http://localhost:8080/api/v1/auth/sms/send/later",o={name:t,phoneNumber:e},i=await n.A.post(a,o,{headers:r});return i.data}catch(a){o(a)}},u=async t=>{try{const e="http://localhost:8080/api/v1/auth/authentication/send",a=await n.A.post(e,{email:t},{headers:{"Content-Type":"application/json"}});return a.data}catch(e){const t=n.A.isAxiosError(e)&&e.response?e.response.data.errorCode:null;throw{originalError:e,errorCode:t}}},s=async(t,e)=>{try{const a="http://localhost:8080/api/v1/auth/authentication/check",o={email:t,authCode:e},i=await n.A.post(a,o,{headers:r});return i.data}catch(a){o(a)}},d=async(t,e)=>{try{const a="http://localhost:8080/api/v1/auth/find/id",r={name:t,phoneNumber:e},o=await n.A.post(a,r);return o.data}catch(a){o(a)}},h=async(t,e)=>{try{const a="http://localhost:8080/api/v1/auth/authentication/check/later",r={email:t,authCode:e},o=await n.A.post(a,r);return o.data}catch(a){o(a)}},v=async t=>{try{const e="http://localhost:8080/api/v1/auth/check/id",a={email:t},r=await n.A.post(e,a);return r.data}catch(e){o(e)}}},4755:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});a(4114);var n=a(6768),r=a(144),o=a(1387),i=a(525),l=a(8606);const c=t=>((0,n.Qi)("data-v-560bbb96"),t=t(),(0,n.jt)(),t),u={class:"find-id-email-container"},s={class:"find-id-email-input"},d=c((()=>(0,n.Lk)("br",null,null,-1))),h=c((()=>(0,n.Lk)("br",null,null,-1))),v=c((()=>(0,n.Lk)("br",null,null,-1)));var p=(0,n.pM)({__name:"FindIDByEmail",setup(t){const e=(0,o.rd)(),a=(0,r.Kh)({verificationSent:!1,verificationExpired:!1,verificationStart:!1,timerKey:0}),c=(0,r.KR)(""),p=(0,r.KR)(""),f=(0,r.KR)(""),m=(0,r.KR)("default"),y=(0,r.KR)("default"),b=(0,r.KR)("default"),k=(0,r.KR)(""),A=()=>{a.verificationExpired=!0,a.verificationStart=!1},C=async()=>{if(0!==c.value.length)if(m.value="default",S(p.value)){y.value="default";try{await(0,i.ZM)(p.value),a.verificationSent=!0,a.verificationStart=!0,a.timerKey+=1}catch(t){const e=t;e.errorCode&&(y.value="error")}}else y.value="error";else m.value="error"},R=async()=>{if(a.verificationSent)try{await(0,i.Ro)(p.value,f.value),e.push({name:"find-id-result"})}catch(t){const e=t;("AUTH_03"===e.errorCode||"INVALID_VALUE_02"===e.errorCode)&&(b.value="error",k.value="인증번호가 틀렸습니다.")}},S=t=>{const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.test(t)};return(0,n.wB)((()=>a.verificationStart),(t=>{t&&(a.timerKey+=1)})),(t,e)=>((0,n.uX)(),(0,n.CE)("div",u,[(0,n.Lk)("span",s,[(0,n.bF)((0,r.R1)(l.pd),{placeholder:"이름을 입력해주세요",label:"이름",modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=t=>c.value=t),state:m.value},null,8,["modelValue","state"]),(0,n.bF)((0,r.R1)(l.pd),{placeholder:"example@naver.com",label:"이메일",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=t=>p.value=t),state:y.value,message:"이메일 주소를 입력해주세요"},null,8,["modelValue","state"]),a.verificationSent||a.isTimerActive?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)((0,r.R1)(l.$n),{key:0,text:"인증번호 받기",style:{backgroundColor:"var(--color-button-secondary)",color:"var(--color-button-on-secondary)",height:"44px",fontSize:"1.4rem"},onClick:C})),a.verificationSent?((0,n.uX)(),(0,n.Wv)((0,r.R1)(l.pd),{key:1,placeholder:"인증번호 입력",label:"인증번호",modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=t=>f.value=t),state:b.value,message:k.value},null,8,["modelValue","state","message"])):(0,n.Q3)("",!0),a.verificationSent&&!a.verificationExpired?((0,n.uX)(),(0,n.Wv)((0,r.R1)(l.PM),{key:2,verificationStart:a.verificationStart,handleTimeout:A,onResendSms:C},null,8,["verificationStart"])):(0,n.Q3)("",!0)]),d,h,v,a.verificationSent?((0,n.uX)(),(0,n.Wv)((0,r.R1)(l.$n),{key:0,class:"next-button",onClick:R,text:"다음"})):(0,n.Q3)("",!0)]))}}),f=a(1241);const m=(0,f.A)(p,[["__scopeId","data-v-560bbb96"]]);var y=m}}]);
//# sourceMappingURL=4755.86aecbbc.js.map