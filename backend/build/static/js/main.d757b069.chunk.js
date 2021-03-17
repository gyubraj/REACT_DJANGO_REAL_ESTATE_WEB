(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(22),i=n.n(a),o=n(6),r=n(13),l=n(21),j=n.n(l),d=n(28),h=n(17),u=n.n(h),b=n(97),m="SET_ALERT",_="REMOVE_ALERT",p="SIGNUP_SUCCESS",O="SIGNUP_FAIL",x="LOGIN_SUCCESS",f="LOGIN_FAIL",g="LOGOUT",v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(s){var c=b.a;s({type:m,payload:{msg:e,alertType:t,id:c}}),setTimeout((function(){return s({type:_,payload:c})}),n)}},N=function(e,t){return function(){var n=Object(d.a)(j.a.mark((function n(s){var c,a,i;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={headers:{"Content-Type":"application/json"}},a=JSON.stringify({email:e,password:t}),n.prev=2,n.next=5,u.a.post("http://localhost:8000/api/token/",a,c);case 5:i=n.sent,s({type:x,payload:i.data}),s(v("Authenticated Successfully","success")),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(2),s({type:f}),s(v("Error Authenticating","error"));case 14:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(e){return n.apply(this,arguments)}}()},y=n(0),w=Object(r.b)((function(e){return{alerts:e.alert}}))((function(e){var t=e.alerts;return null!==t&&t.length>0&&t.map((function(e){return Object(y.jsx)("div",{className:"alert alert--".concat(e.alertType),children:e.msg},e.id)}))})),S=Object(r.b)((function(e){return{auth:e.auth}}),{logout:function(){return function(e){e(v("Logout successful","success")),e({type:g})}}})((function(e){var t=e.auth,n=t.isAuthenticated,c=t.loading,a=e.logout,i=Object(y.jsx)("a",{className:"navbar__top__auth__link",onClick:a,href:"#",children:"Logout"}),r=Object(y.jsxs)(s.Fragment,{children:[Object(y.jsx)(o.b,{className:"navbar__top__auth__link",to:"/login",children:"Login"}),Object(y.jsx)(o.b,{className:"navbar__top__auth__link",to:"/signup",children:"Sign Up"})]});return Object(y.jsxs)(s.Fragment,{children:[Object(y.jsxs)("nav",{className:"navbar",children:[Object(y.jsxs)("div",{className:"navbar__top",children:[Object(y.jsx)("div",{className:"navbar__top__logo",children:Object(y.jsx)(o.b,{to:"/",className:"navbar__top__logo__link",children:"REAL ESTATE"})}),Object(y.jsx)("div",{className:"navbar__top__auth",children:!c&&Object(y.jsx)(s.Fragment,{children:n?i:r})})]}),Object(y.jsxs)("div",{className:"navbar__bottom",children:[Object(y.jsx)("li",{className:"navbar__bottom__item",children:Object(y.jsx)(o.c,{className:"navbar__bottom__item__link",exact:!0,to:"/",children:"Home"})}),Object(y.jsx)("li",{className:"navbar__bottom__item",children:Object(y.jsx)(o.c,{className:"navbar__bottom__item__link",exact:!0,to:"/listings",children:"Listings"})}),Object(y.jsx)("li",{className:"navbar__bottom__item",children:Object(y.jsx)(o.c,{className:"navbar__bottom__item__link",exact:!0,to:"/about",children:"About"})}),Object(y.jsx)("li",{className:"navbar__bottom__item",children:Object(y.jsx)(o.c,{className:"navbar__bottom__item__link",exact:!0,to:"/contact",children:"Contact"})})]})]}),Object(y.jsx)(w,{})]})})),k=function(e){return Object(y.jsxs)("div",{children:[Object(y.jsx)(S,{}),e.children]})},C=n(4),A=n(11),L=n(16),F=n(15),E=n(5),T=n(42),P=n.n(T),q=function(e){var t=Object(s.useState)({sale_type:"For Sale",price:"$0+",bedrooms:"0+",home_type:"House",bathrooms:"0+",sqft:"1000+",days_listed:"1 or less",has_photos:"1+",open_house:!1,keywords:""}),n=Object(A.a)(t,2),c=n[0],a=n[1],i=c.sale_type,o=c.price,r=c.bedrooms,l=c.home_type,j=c.bathrooms,d=c.sqft,h=c.days_listed,b=c.has_photos,m=c.open_house,_=c.keywords,p=Object(s.useState)(!1),O=Object(A.a)(p,2),x=O[0],f=O[1],g=function(e){return a(Object(E.a)(Object(E.a)({},c),{},Object(F.a)({},e.target.name,e.target.value)))};return Object(y.jsx)("form",{className:"listingform",onSubmit:function(t){return function(t){t.preventDefault(),u.a.defaults.headers={"Content-Type":"application/json"},f(!0),u.a.post("http://localhost:8000/api/listings/search/",{sale_type:i,price:o,bedrooms:r,home_type:l,bathrooms:j,sqft:d,days_listed:h,has_photos:b,open_house:m,keywords:_}).then((function(t){f(!1),e.setListings(t.data),window.scrollTo(0,0)})).catch((function(e){f(!1),window.scrollTo(0,0)}))}(t)},children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-1-of-6",children:[Object(y.jsxs)("div",{className:"listingform__section",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"sale_type",children:"Sale or Rent"}),Object(y.jsxs)("select",{className:"listingform__select",name:"sale_type",onChange:function(e){return g(e)},value:i,children:[Object(y.jsx)("option",{children:"For Sale"}),Object(y.jsx)("option",{children:"For Rent"})]})]}),Object(y.jsxs)("div",{className:"listingform__section",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"sqft",children:"Sqft"}),Object(y.jsxs)("select",{className:"listingform__select",name:"sqft",onChange:function(e){return g(e)},value:d,children:[Object(y.jsx)("option",{children:"1000+"}),Object(y.jsx)("option",{children:"1200+"}),Object(y.jsx)("option",{children:"1500+"}),Object(y.jsx)("option",{children:"2000+"}),Object(y.jsx)("option",{children:"Any"})]})]})]}),Object(y.jsxs)("div",{className:"col-1-of-6",children:[Object(y.jsxs)("div",{className:"listingform__section",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"price",children:"Minimum Price"}),Object(y.jsxs)("select",{className:"listingform__select",name:"price",onChange:function(e){return g(e)},value:o,children:[Object(y.jsx)("option",{children:"$0+"}),Object(y.jsx)("option",{children:"$200,000+"}),Object(y.jsx)("option",{children:"$400,000+"}),Object(y.jsx)("option",{children:"$600,000+"}),Object(y.jsx)("option",{children:"$800,000+"}),Object(y.jsx)("option",{children:"$1,000,000+"}),Object(y.jsx)("option",{children:"$1,200,000+"}),Object(y.jsx)("option",{children:"$1,500,000+"}),Object(y.jsx)("option",{children:"Any"})]})]}),Object(y.jsxs)("div",{className:"listingform__section",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"days_listed",children:"Days Listed"}),Object(y.jsxs)("select",{className:"listingform__select",name:"days_listed",onChange:function(e){return g(e)},value:h,children:[Object(y.jsx)("option",{children:"1 of less"}),Object(y.jsx)("option",{children:"2 of less"}),Object(y.jsx)("option",{children:"5 of less"}),Object(y.jsx)("option",{children:"10 of less"}),Object(y.jsx)("option",{children:"20 of less"}),Object(y.jsx)("option",{children:"Any"})]})]})]}),Object(y.jsxs)("div",{className:"col-1-of-6",children:[Object(y.jsxs)("div",{className:"listingform__section",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"bedrooms",children:"Bedrooms"}),Object(y.jsxs)("select",{className:"listingform__select",name:"bedrooms",onChange:function(e){return g(e)},value:r,children:[Object(y.jsx)("option",{children:"0+"}),Object(y.jsx)("option",{children:"1+"}),Object(y.jsx)("option",{children:"2+"}),Object(y.jsx)("option",{children:"3+"}),Object(y.jsx)("option",{children:"4+"}),Object(y.jsx)("option",{children:"5+"})]})]}),Object(y.jsxs)("div",{className:"listingform__section",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"has_photos",children:"Has Photos"}),Object(y.jsxs)("select",{className:"listingform__select",name:"has_photos",onChange:function(e){return g(e)},value:b,children:[Object(y.jsx)("option",{children:"1+"}),Object(y.jsx)("option",{children:"3+"}),Object(y.jsx)("option",{children:"5+"}),Object(y.jsx)("option",{children:"10+"}),Object(y.jsx)("option",{children:"15+"})]})]})]}),Object(y.jsxs)("div",{className:"col-1-of-6",children:[Object(y.jsxs)("div",{className:"listingform__section",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"home_type",children:"Home Type"}),Object(y.jsxs)("select",{className:"listingform__select",name:"home_type",onChange:function(e){return g(e)},value:l,children:[Object(y.jsx)("option",{children:"House"}),Object(y.jsx)("option",{children:"Condo"}),Object(y.jsx)("option",{children:"Townhouse"})]})]}),Object(y.jsxs)("div",{className:"listingform__section",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"keywords",children:"Keywords"}),Object(y.jsx)("input",{className:"listingform__input",name:"keywords",type:"text",onChange:function(e){return g(e)},value:_})]})]}),Object(y.jsxs)("div",{className:"col-1-of-6",children:[Object(y.jsxs)("div",{className:"listingform__section",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"bathrooms",children:"Baths"}),Object(y.jsxs)("select",{className:"listingform__select",name:"bathrooms",onChange:function(e){return g(e)},value:j,children:[Object(y.jsx)("option",{children:"0+"}),Object(y.jsx)("option",{children:"1+"}),Object(y.jsx)("option",{children:"2+"}),Object(y.jsx)("option",{children:"3+"}),Object(y.jsx)("option",{children:"4+"})]})]}),Object(y.jsxs)("div",{className:"listingform__altsection",children:[Object(y.jsx)("label",{className:"listingform__label",htmlFor:"open_house",children:"Open Houses"}),Object(y.jsx)("input",{className:"listingform__checkbox",name:"open_house",type:"checkbox",onChange:function(e){return function(e){var t=!1;e.target.checked&&(t=!0),a(Object(E.a)(Object(E.a)({},c),{},{open_house:t}))}(e)},value:m})]})]}),Object(y.jsx)("div",{className:"col-1-of-6",children:x?Object(y.jsx)("div",{className:"listingform__loader",children:Object(y.jsx)(P.a,{type:"Oval",color:"#424242",height:50,width:50})}):Object(y.jsx)("button",{className:"listingform__button listingform__button--primary",children:"Save"})})]})})},I=function(e){var t;return Object(y.jsxs)("div",{className:"card",children:[Object(y.jsx)("h3",{className:"card__title",children:e.title}),Object(y.jsx)("div",{className:"card__header",children:Object(y.jsx)("img",{className:"card__header__photo",src:e.photo_main,alt:"House"})}),Object(y.jsxs)("p",{className:"card__location",children:[e.address,", ",e.city,", ",e.state]}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"col-2-of-3",children:[Object(y.jsxs)("p",{className:"card__info",children:["Price: $",(t=e.price,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))]}),Object(y.jsxs)("p",{className:"card__info",children:["Bedrooms: ",e.bedrooms]}),Object(y.jsxs)("p",{className:"card__info",children:["Bathrooms: ",e.bathrooms]})]}),Object(y.jsxs)("div",{className:"col-1-of-3",children:[Object(y.jsx)("p",{className:"card__saletype",children:e.sale_type}),Object(y.jsx)("p",{className:"card__hometype",children:e.home_type}),Object(y.jsxs)("p",{className:"card__sqft",children:["Sqft: ",e.sqft]})]})]}),Object(y.jsx)(o.b,{className:"card__link",to:"/listings/".concat(e.slug),children:"View Listing"})]})},U=function(e){var t=e.listings;return Object(y.jsx)("div",{children:function(){var e=[],n=[];t.map((function(t){return e.push(Object(y.jsx)(I,{title:t.title,address:t.address,city:t.city,state:t.state,price:t.price,sale_type:t.sale_type,home_type:t.home_type,bedrooms:t.bedrooms,bathrooms:t.bathrooms,sqft:t.sqft,photo_main:t.photo_main,slug:t.slug}))}));for(var s=0;s<t.length;s+=3)n.push(Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"col-1-of-3",children:e[s]}),Object(y.jsx)("div",{className:"col-1-of-3",children:e[s+1]?e[s+1]:null}),Object(y.jsx)("div",{className:"col-1-of-3",children:e[s+2]?e[s+2]:null})]}));return n}()})},$=function(e){return Object(y.jsxs)("div",{className:"pagination",children:[Object(y.jsx)("div",{onClick:function(){return e.previous()},className:"pagination__number",children:"Previous"}),function(){for(var t=[],n=e.itemsPerPage,s=1,c=function(n){var c=s,a="pagination__number",i=null;e.active===c?(a="pagination__number pagination__number--active",i=Object(y.jsx)("div",{className:a,children:s},n)):i=Object(y.jsx)("div",{onClick:function(){return e.visitPage(c)},className:a,children:s},n),t.push(i),s++},a=0;a<e.count;a+=n)c(a);return t}(),Object(y.jsx)("div",{onClick:function(){return e.next()},className:"pagination__number",children:"Next"})]})},D=function(){var e=Object(s.useState)([]),t=Object(A.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(1),i=Object(A.a)(a,2),o=i[0],r=i[1],l=Object(s.useState)(3),j=Object(A.a)(l,2),d=j[0],h=(j[1],Object(s.useState)(1)),u=Object(A.a)(h,2),b=u[0],m=u[1],_=o*d,p=_-d,O=n.slice(p,_);return Object(y.jsxs)("main",{className:"home",children:[Object(y.jsxs)(L.a,{children:[Object(y.jsx)("title",{children:"Home"}),Object(y.jsx)("meta",{name:"description",content:"home page"})]}),Object(y.jsx)("section",{className:"home__form",children:Object(y.jsx)(q,{setListings:c})}),Object(y.jsx)("section",{className:"home__listings",children:Object(y.jsx)(U,{listings:O})}),Object(y.jsx)("section",{className:"home__pagination",children:Object(y.jsx)("div",{className:"row",children:0!==n.length?Object(y.jsx)($,{itemsPerPage:d,count:n.length,visitPage:function(e){r(e),m(e)},previous:function(){1!==o&&(r(o-1),m(o-1))},next:function(){o!==Math.ceil(n.length/3)&&(r(o+1),m(o+1))},active:b,setActive:m}):null})})]})},H=function(){},B=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:N})((function(e){var t=e.login,n=e.isAuthenticated,c=Object(s.useState)({email:"",password:""}),a=Object(A.a)(c,2),i=a[0],r=a[1],l=i.email,j=i.password,d=function(e){return r(Object(E.a)(Object(E.a)({},i),{},Object(F.a)({},e.target.name,e.target.value)))};return n?Object(y.jsx)(C.a,{to:"/"}):Object(y.jsxs)("div",{className:"auth",children:[Object(y.jsxs)(L.a,{children:[Object(y.jsx)("title",{children:"Login page"}),Object(y.jsx)("meta",{name:"description",content:"login page"})]}),Object(y.jsx)("h1",{className:"auth__title",children:"Sign In"}),Object(y.jsx)("p",{className:"auth__lead",children:"Sign into Your Account"}),Object(y.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(l,j)}(e)},className:"auth__form",children:[Object(y.jsx)("div",{className:"auth__form__group",children:Object(y.jsx)("input",{type:"email",className:"auth__form__input",name:"email",placeholder:"Enter Your Email",value:l,onChange:function(e){return d(e)},required:!0})}),Object(y.jsx)("div",{className:"auth__form__group",children:Object(y.jsx)("input",{type:"password",className:"auth__form__input",name:"password",placeholder:"Enter Your Password",value:j,onChange:function(e){return d(e)},minLength:"8",required:!0})}),Object(y.jsx)("button",{className:"auth__form__button",type:"submit",children:"Login"})]}),Object(y.jsxs)("p",{className:"auth__authtext",children:["Don't have an account?",Object(y.jsx)(o.b,{className:"auth__authtext__link",to:"/signup",children:"Sign Up"})]})]})})),R=Object(r.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:v,signup:function(e){var t=e.name,n=e.email,s=e.password,c=e.password2;return function(){var e=Object(d.a)(j.a.mark((function e(a){var i,o,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={headers:{"Content-Type":"application/json"}},o=JSON.stringify({name:t,email:n,password:s,password2:c}),e.prev=2,e.next=5,u.a.post("http://localhost:8000/api/accounts/signup/",o,i);case 5:r=e.sent,a({type:p,payload:r.data}),a(N(n,s)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),a({type:O}),a(v("Error Authenticating","error"));case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,n=e.isAuthenticated,c=e.signup,a=Object(s.useState)({name:"",email:"",password:"",password2:""}),i=Object(A.a)(a,2),r=i[0],l=i[1],j=r.name,d=r.email,h=r.password,u=r.password2,b=function(e){return l(Object(E.a)(Object(E.a)({},r),{},Object(F.a)({},e.target.name,e.target.value)))};return n?Object(y.jsx)(C.a,{to:"/"}):Object(y.jsxs)("div",{className:"auth",children:[Object(y.jsxs)(L.a,{children:[Object(y.jsx)("title",{children:"Sign Up page"}),Object(y.jsx)("meta",{name:"description",content:"signup page"})]}),Object(y.jsx)("h1",{className:"auth__title",children:"Sign Up"}),Object(y.jsx)("p",{className:"auth__lead",children:"Create Your Account"}),Object(y.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),h===u?c({name:j,email:d,password:h,password2:u}):t("Password do not match","error")}(e)},className:"auth__form",children:[Object(y.jsx)("div",{className:"auth__form__group",children:Object(y.jsx)("input",{type:"text",className:"auth__form__input",name:"name",placeholder:"Enter Your Name",value:j,onChange:function(e){return b(e)},required:!0})}),Object(y.jsx)("div",{className:"auth__form__group",children:Object(y.jsx)("input",{type:"email",className:"auth__form__input",name:"email",placeholder:"Enter Your Email",value:d,onChange:function(e){return b(e)},required:!0})}),Object(y.jsx)("div",{className:"auth__form__group",children:Object(y.jsx)("input",{type:"password",className:"auth__form__input",name:"password",placeholder:"Enter Password",value:h,onChange:function(e){return b(e)},minLength:"8",required:!0})}),Object(y.jsx)("div",{className:"auth__form__group",children:Object(y.jsx)("input",{type:"password",className:"auth__form__input",name:"password2",placeholder:"Confirm Password",value:u,onChange:function(e){return b(e)},minLength:"8",required:!0})}),Object(y.jsx)("button",{className:"auth__form__button",type:"submit",children:"Sign Up"})]}),Object(y.jsxs)("p",{className:"auth__authtext",children:["Already have an account?",Object(y.jsx)(o.b,{className:"auth__authtext__link",to:"/login",children:"Login"})]})]})})),Y=function(){},G=function(){return Object(y.jsx)("div",{children:"ListingDetail"})},M=function(){},J=function(){return Object(y.jsxs)("div",{className:"notfound",children:[Object(y.jsx)("h1",{className:"notfound__heading",children:"404 Not Found"}),Object(y.jsx)("p",{className:"notfound__paragraph",children:"The link you entered is not avaliable."})]})},V=(n(93),n(94),n(14)),K=n(43),W=n(44),z=n(45),Q=[],X={token:localStorage.getItem("token"),isAuthenticated:null,loading:!1},Z=Object(V.combineReducers)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.payload;switch(n){case m:return[].concat(Object(z.a)(e),[s]);case _:return e.filter((function(e){return e.id!==s}));default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.payload;switch(n){case x:return localStorage.setItem("token",s.access),Object(E.a)(Object(E.a)({},e),{},{isAuthenticated:!0,token:s.access,loading:!1});case p:return Object(E.a)(Object(E.a)({},e),{},{isAuthenticated:!1,loading:!0});case O:case f:case g:return localStorage.removeItem("token"),Object(E.a)(Object(E.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}}}),ee=[W.a],te=Object(V.createStore)(Z,{},Object(K.composeWithDevTools)(V.applyMiddleware.apply(void 0,ee)));var ne=function(){return Object(y.jsx)(r.a,{store:te,children:Object(y.jsx)(o.a,{children:Object(y.jsx)(k,{children:Object(y.jsxs)(C.d,{children:[Object(y.jsx)(C.b,{path:"/",exact:!0,component:D}),Object(y.jsx)(C.b,{path:"/signup",exact:!0,component:R}),Object(y.jsx)(C.b,{path:"/login",exact:!0,component:B}),Object(y.jsx)(C.b,{path:"/about",exact:!0,component:H}),Object(y.jsx)(C.b,{path:"/contact",exact:!0,component:Y}),Object(y.jsx)(C.b,{path:"/listings",exact:!0,component:M}),Object(y.jsx)(C.b,{path:"/Listings/:id",exact:!0,component:G}),Object(y.jsx)(C.b,{component:J})]})})})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(ne,{})}),document.getElementById("root")),se()}},[[95,1,2]]]);
//# sourceMappingURL=main.d757b069.chunk.js.map