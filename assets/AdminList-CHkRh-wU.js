import{r as d,b as i,a as e,F as m,d as u,c as _,e as f,f as g,g as h,o as n,t as l,L as p}from"./index-R9UNH4c0.js";const v={class:"p-4 bg-white w-full min-h-screen outline lg:px-48 pt-16"},x={class:"mt-3 w-full"},w={class:"w-full bg-white h-fit rounded-md shadow-md p-3 flex justify-between items-center my-2"},y={class:"font-semibold text-sm"},b={class:"text-gray-800 text-xs mt-1"},L={__name:"AdminList",setup(k){const r=d([]),t=d(!0);return(async()=>{t.value=!0;try{const{data:s}=await g.get("/list_admin",{headers:{Authorization:h("admin")}});t.value=!1,r.value=s}catch(s){t.value=!1,console.log(s)}})(),(s,a)=>(n(),i("div",v,[a[0]||(a[0]=e("div",{class:"mt-4"},[e("h3",{class:"text-base font-semibold"},"Welcome Admin")],-1)),a[1]||(a[1]=e("h3",{class:"underline decoration-slate-500 decoration-solid decoration-4 mt-4"}," Admins ",-1)),e("div",x,[(n(!0),i(m,null,u(r.value,(o,c)=>(n(),i("div",{key:c},[e("div",w,[e("span",null,[e("h3",y,l(o.first_name)+" "+l(o.last_name),1),e("p",b,l(o.email)+", "+l(o.role),1)])])]))),128))]),t.value?(n(),_(p,{key:0})):f("",!0)]))}};export{L as default};
