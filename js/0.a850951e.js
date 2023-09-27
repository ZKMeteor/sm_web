"use strict";(self["webpackChunksm_web"]=self["webpackChunksm_web"]||[]).push([[0],{2e3:function(a,e,l){l.r(e),l.d(e,{default:function(){return A}});var t=l(3396),s=l(7139),d=l(9242),o=l(2522);const i=a=>((0,t.dD)("data-v-55d5cfda"),a=a(),(0,t.Cn)(),a),r={class:"container-fluid cart animate__animated animate__fadeIn"},n={class:"container"},c={class:"bg"},u={class:"row d-flex",style:{"border-radius":"5px"}},m=i((()=>(0,t._)("h1",null,"購物清單",-1))),p={class:"content col-md-7 col-12"},h={class:"table"},_=i((()=>(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",{width:"100"},"編輯"),(0,t._)("th",{width:"200"},"商品名稱"),(0,t._)("th",{width:"100"},"售價"),(0,t._)("th",{width:"160"},"數量"),(0,t._)("th",{width:"100"},"小計")])],-1))),f={class:"btn-group"},b=["onClick"],v={class:""},g={class:""},y={class:"number"},w=["onUpdate:modelValue","onChange"],x={style:{display:"inline"}},C={class:"text-right"},k=i((()=>(0,t._)("td",{colspan:"4",class:"text-right"},"總計:",-1))),V={class:"text-right"},$={class:"col-md-5 col-12"},W={id:"carouselExampleControls",class:"carousel slide title1","data-bs-ride":"carousel"},q={class:"carousel-inner"},L=i((()=>(0,t._)("div",{class:"carousel-item active"},[(0,t._)("img",{src:o,class:"d-block"})],-1))),U=["src"],D=(0,t.uE)('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" data-v-55d5cfda><span class="carousel-control-prev-icon" aria-hidden="true" data-v-55d5cfda></span><span class="visually-hidden" data-v-55d5cfda>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" data-v-55d5cfda><span class="carousel-control-next-icon" aria-hidden="true" data-v-55d5cfda></span><span class="visually-hidden" data-v-55d5cfda>Next</span></button>',2),E={class:"m-5 row justify-content-center",style:{"border-radius":"5px"}},z={class:"my-3"},I=i((()=>(0,t._)("label",{for:"email",class:"form-label"},"Email",-1))),M={class:"mb-3"},O=i((()=>(0,t._)("label",{for:"name",class:"form-label"},"收件人姓名",-1))),T={class:"mb-3"},F=i((()=>(0,t._)("label",{for:"tel",class:"form-label"},"收件人電話",-1))),H={class:"mb-3"},K=i((()=>(0,t._)("label",{for:"address",class:"form-label"},"收件人地址",-1))),S={class:"mb-3"},Y=i((()=>(0,t._)("label",{for:"message",class:"form-label"},"留言",-1))),j=i((()=>(0,t._)("div",{class:"text-end mb-3"},[(0,t._)("button",{class:"btn btn-danger"},"送出訂單")],-1)));function N(a,e,l,o,i,N){const P=(0,t.up)("LoadingIcon"),R=(0,t.up)("ion-icon"),Z=(0,t.up)("FielD"),A=(0,t.up)("ErrorMessage"),B=(0,t.up)("ForM");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",n,[(0,t._)("div",c,[(0,t._)("div",u,[m,(0,t._)("div",p,[(0,t._)("table",h,[(0,t.Wm)(P,{active:i.isLoading},null,8,["active"]),_,(0,t._)("tbody",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.cart,(e=>((0,t.wg)(),(0,t.iD)("tr",{class:"cartItem animate__animated animate__slideInRight",key:e.id},[(0,t._)("td",null,[(0,t._)("div",f,[(0,t._)("button",{class:"btn btn-outline-danger btn-sm",onClick:a=>N.delcart(e)},[(0,t.Wm)(R,{name:"trash-outline",style:{color:"red"},size:"small"})],8,b)])]),(0,t._)("td",null,(0,s.zw)(e.product.title),1),(0,t._)("td",v,(0,s.zw)(a.$filters.currency(e.product.price)),1),(0,t._)("td",g,[(0,t._)("div",y,[(0,t.wy)((0,t._)("input",{type:"number",class:"qty",min:"1",style:{display:"inline"},"onUpdate:modelValue":a=>e.qty=a,onChange:a=>N.updatacart(e)},null,40,w),[[d.nr,e.qty,void 0,{number:!0}]]),(0,t._)("h4",x,(0,s.zw)(e.product.unit),1)])]),(0,t._)("td",C,(0,s.zw)(a.$filters.currency(e.total)),1)])))),128))]),(0,t._)("tfoot",null,[(0,t._)("tr",null,[k,(0,t._)("td",V,(0,s.zw)(a.$filters.currency(i.finalTotal)),1)])])])]),(0,t._)("div",$,[(0,t._)("div",W,[(0,t._)("div",q,[L,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.cart,(a=>((0,t.wg)(),(0,t.iD)("div",{class:"carousel-item",key:a.id},[(0,t._)("img",{src:a.product.imageUrl,class:"d-block"},null,8,U)])))),128))]),D])])]),(0,t._)("div",E,[(0,t.Wm)(B,{class:"col-md-6",onSubmit:N.createOrder},{default:(0,t.w5)((({errors:a})=>[(0,t._)("div",z,[I,(0,t.Wm)(Z,{id:"email",name:"email",type:"email",class:(0,s.C_)(["form-control",{"is-invalid":a["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:i.form.user.email,"onUpdate:modelValue":e[0]||(e[0]=a=>i.form.user.email=a)},null,8,["class","modelValue"]),(0,t.Wm)(A,{name:"email",class:"invalid-feedback"})]),(0,t._)("div",M,[O,(0,t.Wm)(Z,{id:"name",name:"姓名",type:"text",class:(0,s.C_)(["form-control",{"is-invalid":a["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:i.form.user.name,"onUpdate:modelValue":e[1]||(e[1]=a=>i.form.user.name=a)},null,8,["class","modelValue"]),(0,t.Wm)(A,{name:"姓名",class:"invalid-feedback"})]),(0,t._)("div",T,[F,(0,t.Wm)(Z,{id:"tel",name:"電話",type:"tel",class:(0,s.C_)(["form-control",{"is-invalid":a["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:i.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=a=>i.form.user.tel=a)},null,8,["class","modelValue"]),(0,t.Wm)(A,{name:"電話",class:"invalid-feedback"})]),(0,t._)("div",H,[K,(0,t.Wm)(Z,{id:"address",name:"地址",type:"text",class:(0,s.C_)(["form-control",{"is-invalid":a["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:i.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=a=>i.form.user.address=a)},null,8,["class","modelValue"]),(0,t.Wm)(A,{name:"地址",class:"invalid-feedback"})]),(0,t._)("div",S,[Y,(0,t.wy)((0,t._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":e[4]||(e[4]=a=>i.form.message=a)},null,512),[[d.nr,i.form.message]])]),j])),_:1},8,["onSubmit"])])])])])}l(7658);var P={data(){return{item:"",cart:{},isLoading:!1,finalTotal:"",qty:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){let a="https://vue3-course-api.hexschool.io/api/sm_web-api/cart";this.isLoading=!0,this.$http.get(a).then((a=>{console.log(a.data),this.isLoading=!1,this.cart=a.data.data.carts,console.log(this.cart),this.finalTotal=a.data.data.final_total}))},delcart(a){let e=`https://vue3-course-api.hexschool.io/api/sm_web-api/cart/${a.id}`;this.isLoading=!0,this.$http.delete(e).then((a=>{console.log(a.data),this.isLoading=!1,this.getCart()}))},updatacart(a){let e=`https://vue3-course-api.hexschool.io/api/sm_web-api/cart/${a.id}`;this.isLoading=!0;let l={product_id:a.product_id,qty:a.qty};this.$http.put(e,{data:l}).then((a=>{this.getCart(),this.isLoading=!1,console.log(a)}))},openModal(){let a=this.$refs.modal;a.showModal()},createOrder(){let a="https://vue3-course-api.hexschool.io/api/sm_web-api/order",e=this.form;this.$http.post(a,{data:e}).then((a=>{this.$router.push(`/checkOrder/${a.data.orderId}`)}));let l=this.$refs.modal;l.hideModal()}},created(){this.getCart()}},R=l(89);const Z=(0,R.Z)(P,[["render",N],["__scopeId","data-v-55d5cfda"]]);var A=Z}}]);
//# sourceMappingURL=0.a850951e.js.map