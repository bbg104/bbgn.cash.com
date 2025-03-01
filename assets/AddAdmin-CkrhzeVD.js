import{u as c,r as a,b as g,a as l,h as o,v as n,i as y,c as m,E as w,e as p,j as A,o as d,f as k,g as E,L as V}from"./index-R9UNH4c0.js";const _={class:"p-4"},S={class:"flex flex-col gap-1 mt-2"},M={class:"flex flex-col gap-1 mt-2"},U={class:"flex flex-col gap-1 mt-2"},B={class:"flex flex-col gap-1 mt-2"},C={class:"flex flex-col gap-1 mt-2 mb-3"},P={__name:"AddAdmin",setup(G){const x=c(),r=a(!1);a(""),a("");const f=a(""),i=a(!1),v=a(!1),s=a({first_name:"",last_name:"",password:"",email:"",role:""}),b=async()=>{r.value=!0;try{const{data:u}=await k.post("/register",{...s.value},{headers:{Authorization:E("admin")}});i.value=!0,setTimeout(()=>{x.push("/admin/list")},2e3)}catch(u){r.value=!1,f.value=u.response.data,v.value=!0}finally{r.value=!1}};return(u,e)=>(d(),g("div",_,[e[12]||(e[12]=l("h2",{class:"font-semibold flex items-center gap-x-1"},"Add Admin",-1)),l("div",S,[e[6]||(e[6]=l("label",{for:"first_name",class:"text-sm text-gray-950"}," First name ",-1)),o(l("input",{type:"text",id:"first_name",placeholder:"Enter first name",class:"text-sm p-2 border border-solid focus:outline-none","onUpdate:modelValue":e[0]||(e[0]=t=>s.value.first_name=t)},null,512),[[n,s.value.first_name]])]),l("div",M,[e[7]||(e[7]=l("label",{for:"last_name",class:"text-sm text-gray-950"}," Last name ",-1)),o(l("input",{type:"text",id:"last_name",placeholder:"Enter last name",class:"text-sm p-2 border border-solid focus:outline-none","onUpdate:modelValue":e[1]||(e[1]=t=>s.value.last_name=t)},null,512),[[n,s.value.last_name]])]),l("div",U,[e[8]||(e[8]=l("label",{for:"email",class:"text-sm text-gray-950"}," Email ",-1)),o(l("input",{type:"email",id:"email",placeholder:"Enter email",class:"text-sm p-2 border border-solid focus:outline-none","onUpdate:modelValue":e[2]||(e[2]=t=>s.value.email=t)},null,512),[[n,s.value.email]])]),l("div",B,[e[10]||(e[10]=l("label",{for:"role",class:"text-sm text-gray-950"}," Role ",-1)),o(l("select",{id:"role",class:"text-sm p-2 border border-solid focus:outline-none","onUpdate:modelValue":e[3]||(e[3]=t=>s.value.role=t)},e[9]||(e[9]=[l("option",{value:"",disabled:""},"Select admin role",-1),l("option",null,"Admin",-1),l("option",null,"Super Admin",-1)]),512),[[y,s.value.role]])]),l("div",C,[e[11]||(e[11]=l("label",{for:"confirm_password",class:"text-sm text-gray-950"}," Password ",-1)),o(l("input",{type:"password",id:"confirm_password",placeholder:"Enter password",class:"text-sm p-2 border border-solid focus:outline-none","onUpdate:modelValue":e[4]||(e[4]=t=>s.value.password=t)},null,512),[[n,s.value.password]])]),e[13]||(e[13]=l("hr",null,null,-1)),v.value?(d(),m(w,{key:0,errMSG:f.value},null,8,["errMSG"])):p("",!0),i.value?(d(),m(A,{key:1,onClose:e[5]||(e[5]=t=>i.value=!1),msg:"Admin added successfully"})):p("",!0),l("button",{class:"p-2 bg-slate-500 rounded-md w-full text-white",onClick:b}," Add Admin "),r.value?(d(),m(V,{key:2})):p("",!0)]))}};export{P as default};
