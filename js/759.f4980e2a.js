"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[759],{525:function(e,t,a){a.d(t,{Ak:function(){return c},EZ:function(){return l},Md:function(){return d},Ro:function(){return u},ZM:function(){return s},bt:function(){return h},qm:function(){return i}});var n=a(4373);const o={"Content-Type":"application/json"},r=e=>{const t=n.A.isAxiosError(e)&&e.response?e.response.data.errorCode:null;throw{originalError:e,errorCode:t}},i=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/sms/send",r={name:e,phoneNumber:t},i=await n.A.post(a,r,{headers:o});return i.data}catch(a){r(a)}},l=async(e,t,a)=>{try{const r="http://localhost:8080/api/v1/auth/sms/check",i={name:e,phoneNumber:t,verificationCode:a},l=await n.A.post(r,i,{headers:o});return l.data}catch(i){r(i)}},c=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/sms/send/later",r={name:e,phoneNumber:t},i=await n.A.post(a,r,{headers:o});return i.data}catch(a){r(a)}},s=async e=>{try{const t="http://localhost:8080/api/v1/auth/authentication/send",a=await n.A.post(t,{email:e},{headers:{"Content-Type":"application/json"}});return a.data}catch(t){const e=n.A.isAxiosError(t)&&t.response?t.response.data.errorCode:null;throw{originalError:t,errorCode:e}}},u=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/authentication/check",r={email:e,authCode:t},i=await n.A.post(a,r,{headers:o});return i.data}catch(a){r(a)}},d=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/find/id",o={name:e,phoneNumber:t},r=await n.A.post(a,o);return r.data}catch(a){r(a)}},h=async(e,t)=>{try{const a="http://localhost:8080/api/v1/auth/authentication/check/later",o={email:e,authCode:t},r=await n.A.post(a,o);return r.data}catch(a){r(a)}}},7759:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});a(4114);var n=a(6768),o=a(144),r=a(6502),i=a(1387),l=a(1810),c=a(5438),s=a(5234),u=a(525),d=a(8066);const h=e=>((0,n.Qi)("data-v-de806e88"),e=e(),(0,n.jt)(),e),p={class:"signup-verification-container"},v=h((()=>(0,n.Lk)("span",{class:"verification-text"},[(0,n.Lk)("h1",{class:"heading3-bold"},"본인인증을 진행해주세요"),(0,n.Lk)("h2",{class:"body2-regular"}," 안전한 서비스 사용을 위해 딱 한 번만 본인인증을 진행해요. ")],-1))),m={class:"signup-input"},f={class:"phone-verification"};var b=(0,n.pM)({__name:"SignUpVerification",setup(e){const t=(0,i.rd)(),a=(0,l.En)(),{name:h,nameState:b,phoneNumber:y,phoneNumberState:C,code:k,codeState:w,codeMessege:A,cleanPhoneNumber:R}=(0,s.bP)(a),g=(0,l.I4)(),{email:x}=(0,s.bP)(g),E=(0,l.Kt)(),{password:V}=(0,s.bP)(E),S=(0,o.Kh)({verificationStart:!1,verificationExpired:!1}),N=async()=>{try{if(0===h.value.length)return void(b.value="error");if(b.value="default",!(0,c.Q7)(R.value))return void(C.value="error");C.value="default",S.verificationStart=!0,S.verificationExpired=!1,await(0,u.qm)(h.value,R.value)}catch(e){const t=e;"INVALID_VALUE_04"===t.errorCode&&(w.value="error",A.value="이미 계정이 존재합니다.")}},L=()=>{w.value="error",A.value="인증시간이 만료되었습니다.",S.verificationExpired=!0},_=async()=>{if(!S.verificationExpired)try{await(0,u.EZ)(h.value,R.value,k.value),await(0,d.Hh)(x.value,V.value,h.value,R.value),t.push({name:"signup-complete"})}catch(e){const t=e;"AUTH_03"===t.errorCode&&(w.value="error",A.value="인증번호가 틀렸습니다.")}};return(e,t)=>((0,n.uX)(),(0,n.CE)("div",p,[v,(0,n.Lk)("span",m,[(0,n.bF)((0,o.R1)(r.pd),{placeholder:"이름",state:(0,o.R1)(b),modelValue:(0,o.R1)(h),"onUpdate:modelValue":t[0]||(t[0]=e=>(0,o.i9)(h)?h.value=e:null)},null,8,["state","modelValue"]),(0,n.Lk)("div",f,[(0,n.bF)((0,o.R1)(r.pd),{placeholder:"000-0000-0000",onInput:(0,o.R1)(c.Y8),maxlength:"13",modelValue:(0,o.R1)(y),"onUpdate:modelValue":t[1]||(t[1]=e=>(0,o.i9)(y)?y.value=e:null),state:(0,o.R1)(C)},null,8,["onInput","modelValue","state"]),(0,n.bF)((0,o.R1)(r.$n),{text:"인증번호 받기",style:{width:"200px",height:"44px",backgroundColor:"var(--color-button-secondary)",color:"var(--color-button-on-secondary)",fontSize:"1.4rem"},onClick:N})]),(0,n.bF)((0,o.R1)(r.pd),{placeholder:"인증번호 입력",modelValue:(0,o.R1)(k),"onUpdate:modelValue":t[2]||(t[2]=e=>(0,o.i9)(k)?k.value=e:null),state:(0,o.R1)(w),message:(0,o.R1)(A)},null,8,["modelValue","state","message"])]),(0,n.bF)((0,o.R1)(r.PM),{verificationStart:S.verificationStart,handleTimeout:L,onResendSms:N},null,8,["verificationStart"]),(0,n.bF)((0,o.R1)(r.$n),{class:"next-button",onClick:_,text:"확인"})]))}}),y=a(1241);const C=(0,y.A)(b,[["__scopeId","data-v-de806e88"]]);var k=C}}]);
//# sourceMappingURL=759.f4980e2a.js.map