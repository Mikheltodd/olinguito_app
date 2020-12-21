webpackJsonp([1],{"/2Ik":function(t,e){},"/F/e":function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"welcome"},[e("div",{staticClass:"item"},[e("h1",[this._v("¡Hola, "+this._s(this.hotel_name)+"!")])]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("h2",[this._v("Bienvenido")])])}]};var r=a("VU/8")({name:"Hotel",data:function(){return{hotel_name:"none"}},created:function(){this.hotel_name=this.$route.params.hotel_name}},s,!1,function(t){a("XB7M")},null,null);e.a=r.exports},"0KsH":function(t,e,a){"use strict";var s=a("mtWM"),r=a.n(s),o={name:"Creation_hotel",data:function(){return{name:"",n_rooms:"",total_operation_cost:"",l_days:"",h_days:"",h_price:0,m_price:0,l_price:0,message:"",show:!1}},methods:{creationHotel:function(){var t=this,e={name:this.name,n_rooms:this.n_rooms,total_operation_cost:this.total_operation_cost,l_days:this.l_days,h_days:this.h_days};r.a.post("https://olinguito.herokuapp.com/hotel/create/",e,{headers:{}}).then(function(e){t.message="Hotel creado exitosamente",t.show=!0}).catch(function(e){"400"==e.response.status&&(t.message="El hotel ya existe."),t.show=!0})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticStyle:{background:"url(https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)center center no-repeat","padding-top":"3em","padding-bottom":"3em"},attrs:{fluid:""}},[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{sm:"auto"}},[a("h3",{staticStyle:{padding:"0.5em","background-color":"rgba(255, 255, 255, 0.7)","border-radius":"0.5em",margin:"1"}},[t._v("\n                Creación Hotel\n            ")])])],1),t._v(" "),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticStyle:{"text-align":"center","background-color":"rgba(255, 255, 255, 0.7)",padding:"1em","border-radius":"0.25em"},attrs:{sm:"auto"}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.creationHotel(e)}}},[a("b-form-row",{staticStyle:{"margin-top":"0.5em","margin-bottom":"0.5em"}},[a("b-form-input",{attrs:{type:"text",placeholder:"Nombre de Hotel",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),a("b-form-row",{staticStyle:{"margin-top":"0.5em","margin-bottom":"0.5em"}},[a("b-form-input",{attrs:{type:"number",placeholder:"No. Habitaciones",required:""},model:{value:t.n_rooms,callback:function(e){t.n_rooms=e},expression:"n_rooms"}})],1),t._v(" "),a("b-form-row",{staticStyle:{"margin-top":"0.5em","margin-bottom":"0.5em"}},[a("b-form-input",{attrs:{type:"number",title:"El costo total de operación es el costo de operación de todas las habitaciones en el transcurso del año",placeholder:"Costo operación total",required:""},model:{value:t.total_operation_cost,callback:function(e){t.total_operation_cost=e},expression:"total_operation_cost"}})],1),t._v(" "),a("b-form-row",{staticStyle:{"margin-top":"0.5em","margin-bottom":"0.5em"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Cant. días temp. baja",required:""},model:{value:t.l_days,callback:function(e){t.l_days=e},expression:"l_days"}})],1),t._v(" "),a("b-form-row",{staticStyle:{"margin-top":"0.5em","margin-bottom":"0.5em"}},[a("b-form-input",{attrs:{type:"number",placeholder:"Cant. días temp. alta",required:""},model:{value:t.h_days,callback:function(e){t.h_days=e},expression:"h_days"}})],1),t._v(" "),a("b-button",{staticStyle:{margin:"0.5em"},attrs:{type:"submit",variant:"primary"}},[t._v("Crear")]),t._v(" "),a("b-button",{staticStyle:{margin:"0.5em"},attrs:{type:"reset",variant:"danger"}},[t._v("Limpiar")]),t._v(" "),t.show?a("b-alert",{staticStyle:{margin:"0","font-size":"0.5em"},attrs:{show:""}},[t._v("\n                "+t._s(t.message)+"\n            ")]):t._e()],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(o,n,!1,function(t){a("H4Kh")},null,null);e.a=i.exports},"55Mo":function(t,e,a){"use strict";var s=a("mtWM"),r=a.n(s),o={name:"Calculations_list",data:function(){return{hotel_name:"",calculations:[],hotels:[],message:"",show:!1}},methods:{make_consult:function(){var t=this,e=this;this.show=!1,r.a.get("https://olinguito.herokuapp.com/hotel/calculations/"+this.hotel_name).then(function(t){e.calculations=t.data}).catch(function(e){"404"==e.response.status&&(t.message="Seleccione un hotel."),t.show=!0})},refresh:function(){var t=this;r.a.get("https://olinguito.herokuapp.com/hotel/calculationsHotels").then(function(e){t.calculations=e.data}).catch(function(t){alert("Error servidor")})}},created:function(){var t=this;r.a.get("https://olinguito.herokuapp.com/hotel/calculationsHotels").then(function(e){t.calculations=e.data}).catch(function(t){alert("Error servidor")}),r.a.get("https://olinguito.herokuapp.com/hotel/list").then(function(e){t.hotels=e.data,console.log(t.hotels)}).catch(function(t){alert("Error de servidor")})}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticStyle:{background:"url(https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",padding:"5em 1em","background-size":"cover"},attrs:{fluid:""}},[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{sm:"auto"}},[a("h3",{staticStyle:{padding:"0.5em","background-color":"rgba(255, 255, 255, 0.7)","border-radius":"0.5em",margin:"1"}},[t._v("\n        Historial de calculos\n      ")])])],1),t._v(" "),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{sm:"auto"}},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.hotel_name,expression:"hotel_name"}],staticClass:"form-control form-control-sm",attrs:{name:"hotel",id:"exampleFormControlSelect1",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.hotel_name=e.target.multiple?a:a[0]}}},t._l(t.hotels,function(e){return a("option",{key:e.name},[t._v(t._s(e.name))])}),0),t._v(" "),a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#table",expression:"'#table'"}],staticClass:"btn btn-success",staticStyle:{margin:"0.5em"},on:{click:t.make_consult}},[t._v("\n          Buscar\n        ")]),t._v(" "),a("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#table",expression:"'#table'"}],staticClass:"btn btn-success",staticStyle:{margin:"0.5em"},on:{click:t.refresh}},[t._v("\n          Refrescar\n        ")]),t._v(" "),t.show?a("b-alert",{staticStyle:{margin:"0","font-size":"0.8em"},attrs:{show:"",variant:"warning"}},[t._v("\n          "+t._s(t.message)+"\n        ")]):t._e()],1)])],1),t._v(" "),a("b-row",[a("b-col",[a("b-table-simple",{staticClass:"table table-bordered table-striped text-center",staticStyle:{"background-color":"rgba(255, 255, 255, 0.7)"},attrs:{id:"table",striped:"",hover:"",small:"","caption-top":"",responsive:"","table-bordered":"","table-striped":""}},[a("b-thead",{staticStyle:{"text-align":"center"},attrs:{"head-variant":"dark"}},[a("b-tr",{staticClass:"text-center bg-info text-light"},[a("b-th",{staticClass:"align-middle",attrs:{rowspan:"2"}},[t._v("Fecha de calculo")]),t._v(" "),a("b-th",{staticClass:"align-middle",attrs:{rowspan:"2"}},[t._v("Nombre")]),t._v(" "),a("b-th",{attrs:{colspan:"3"}},[t._v("Precio por Temporada")])],1),t._v(" "),a("b-tr",{staticClass:"text-center bg-info text-light"},[a("b-th",[t._v("Baja")]),t._v(" "),a("b-th",[t._v("Alta")]),t._v(" "),a("b-th",[t._v("Media")])],1)],1),t._v(" "),a("b-tbody",t._l(t.calculations,function(e){return a("b-tr",{key:e.name},[a("b-td",[t._v(t._s(t._f("formatDate")(e.date)))]),t._v(" "),a("b-td",[t._v(t._s(e.hotel_name))]),t._v(" "),a("b-td",[t._v(t._s(t._f("currency")(e.l_price)))]),t._v(" "),a("b-td",[t._v(t._s(t._f("currency")(e.m_price)))]),t._v(" "),a("b-td",[t._v(t._s(t._f("currency")(e.h_price)))])],1)}),1)],1)],1)],1)],1)},staticRenderFns:[]},i=a("VU/8")(o,n,!1,null,null,null);e.a=i.exports},"9M+g":function(t,e){},C054:function(t,e){},H4Kh:function(t,e){},Jmt5:function(t,e){},M93x:function(t,e,a){"use strict";a("/ocq");var s={name:"App",components:{},data:function(){return{is_auth:localStorage.getItem("isAuth")||!1}},methods:{updateAuth:function(){if(this.is_auth=localStorage.getItem("isAuth")||!1,0==this.is_auth)this.$router.push({name:"user_auth"});else{var t=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:t}})}},logIn:function(t){localStorage.setItem("current_username",t),localStorage.setItem("isAuth",!0),this.updateAuth()},logOut:function(){localStorage.removeItem("isAuth"),localStorage.removeItem("current_username"),this.updateAuth()},init:function(){if("user"!=this.$route.name){var t=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:t}})}},create_hotel:function(){"creation_hotel"!=this.$route.name&&this.$router.push({name:"creation_hotel"})},getBalance:function(){if("hotel_info"!=this.$route.name){var t=localStorage.getItem("current_hotel_name");this.$router.push({name:"hotel_info",params:{hotel_name:t}})}},getCalculation:function(){"calculation"!=this.$route.name&&this.$router.push({name:"calculation"})},getList:function(){"Lista_hoteles"!=this.$route.name&&this.$router.push({name:"Lista_hoteles"})},getCalculationsList:function(){"Calculations_list"!=this.$route.name&&this.$router.push({name:"Calculations_list"})}},created:function(){this.$router.push({name:"root"}),this.updateAuth()}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"d-flex flex-grow-1 justify-content-between align-items-center fixed-top"},[s("img",{staticClass:"d-flex justify-content-start",attrs:{src:a("qU+V"),alt:"logo",type:"text/css"}}),t._v(" "),s("b-button-group",{staticStyle:{"background-color":"rgba(255, 255, 255, 0.7)","border-radius":"0.25em"}},[t.is_auth?s("b-button",{attrs:{variant:"outline-dark"},on:{click:t.init}},[t._v("Inicio")]):t._e(),t._v(" "),t.is_auth?s("b-dropdown",{attrs:{right:"",text:"Hoteles",variant:"outline-dark"}},[s("b-dropdown-item",{on:{click:t.create_hotel}},[t._v("Crear Hotel")]),t._v(" "),s("b-dropdown-divider"),t._v(" "),t.is_auth?s("b-dropdown-item",{on:{click:t.getBalance}},[t._v("Detalles del Hotel")]):t._e(),t._v(" "),s("b-dropdown-divider"),t._v(" "),s("b-dropdown-item",{on:{click:t.getList}},[t._v("Lista de Hoteles")])],1):t._e(),t._v(" "),t.is_auth?s("b-dropdown",{attrs:{right:"",text:"Cálculos",variant:"outline-dark"}},[t.is_auth?s("b-dropdown-item",{on:{click:t.getCalculation}},[t._v("Realizar Cálculos")]):t._e(),t._v(" "),s("b-dropdown-divider"),t._v(" "),t.is_auth?s("b-dropdown-item",{on:{click:t.getCalculationsList}},[t._v("Historial de Cálculos")]):t._e()],1):t._e(),t._v(" "),t.is_auth?s("b-button",{attrs:{variant:"outline-dark"},on:{click:t.logOut}},[t._v("Cerrar sesión")]):t._e()],1)],1),t._v(" "),s("main",{staticClass:"container-fluid",staticStyle:{"background-color":"rgba(255, 254, 209, 0.7)"}},[s("div",{staticClass:"row",staticStyle:{height:"15vh"}}),t._v(" "),s("div",{staticClass:"row flex-grow-1 d-flex align-items-center",staticStyle:{"min-height":"70vh"}},[s("router-view",{on:{"log-in":t.logIn}})],1),t._v(" "),s("div",{staticClass:"row",staticStyle:{height:"15vh"}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"row d-flex flex-grow-1 align-items-center fixed-bottom"},[e("div",{staticStyle:{"font-weight":"bolder",color:"black","background-color":"rgba(255, 255, 255, 0.6)","border-radius":"0.5em",padding:"0.5em"}},[this._v("\n      © Misión TIC 2022\n    ")])])}]};var o=a("VU/8")(s,r,!1,function(t){a("/2Ik")},null,null);e.a=o.exports},N6IS:function(t,e,a){"use strict";var s=a("mtWM"),r=a.n(s),o={name:"UserAuth",data:function(){return{user_in:{username:"",password:""},message:"",show:!1}},methods:{processAuthUser:function(){var t=this,e=this;r.a.post("https://olinguito.herokuapp.com/user/auth/",e.user_in,{headers:{}}).then(function(t){e.$emit("log-in",e.user_in.username)}).catch(function(e){"404"==e.response.status&&(t.message="Usuario no encontrado."),t.show=!0,"403"==e.response.status&&(t.message="Contraseña Erronea."),t.show=!0})}}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticStyle:{background:"url(https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)","background-size":"cover","padding-top":"2em","padding-bottom":"1em"},attrs:{fluid:""}},[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{sm:"auto"}},[a("h3",{staticStyle:{padding:"0.5em","background-color":"rgba(255, 255, 255, 0.7)","border-radius":"0.5em","text-align":"center"}},[t._v("\n        Autenticación\n      ")])])],1),t._v(" "),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticStyle:{"text-align":"center",padding:"1em",margin:"1em","background-color":"rgba(255, 255, 255, 0.7)","border-radius":"0.5em"},attrs:{sm:"auto"}},[a("b-form",{on:{submit:function(e){return e.preventDefault(),t.processAuthUser(e)}}},[a("b-form-row",{staticStyle:{"margin-top":"0.5em","margin-bottom":"0.5em"}},[a("b-form-input",{attrs:{type:"text",placeholder:"Nombre de Usuario",required:""},model:{value:t.user_in.username,callback:function(e){t.$set(t.user_in,"username",e)},expression:"user_in.username"}})],1),t._v(" "),a("b-form-row",{staticStyle:{"margin-top":"0.5em","margin-bottom":"0.5em"}},[a("b-form-input",{attrs:{type:"password",placeholder:"Contraseña",required:""},model:{value:t.user_in.password,callback:function(e){t.$set(t.user_in,"password",e)},expression:"user_in.password"}})],1),t._v(" "),a("b-button",{staticStyle:{margin:"0.5em"},attrs:{variant:"outline-dark",type:"submit"}},[t._v("Iniciar Sesión")]),t._v(" "),t.show?a("b-alert",{staticStyle:{margin:"0","font-size":"0.5em"},attrs:{show:"",variant:"warning"}},[t._v(t._s(t.message))]):t._e()],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(o,n,!1,function(t){a("X5dP")},null,null);e.a=i.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("M93x"),o=a("/ocq"),n=a("cHtD"),i=a("JFlp"),l=a("Tqaz"),c=a("bm7V"),u=a.n(c),m=a("PJh5"),d=a.n(m),h=a("Jmt5"),_=(a.n(h),a("9M+g"));a.n(_);s.default.use(o.a),s.default.config.productionTip=!1,s.default.use(l.a),s.default.use(l.b),s.default.use(i.a,{symbol:"$",thousandsSeparator:",",fractionCount:0,fractionSeparator:".",symbolPosition:"front",symbolSpacing:!0}),s.default.use(u.a),s.default.filter("formatDate",function(t){if(t)return d()(String(t)).format("MM/DD/YYYY")}),s.default.filter("formatHour",function(t){if(t)return d()(String(t)).format("MM/DD/YYYY hh:mm:ss")}),new s.default({router:n.a,el:"#app",components:{App:r.a},template:"<App/>"})},WDTx:function(t,e,a){"use strict";var s=a("mtWM"),r=a.n(s),o={name:"Lista_hoteles",data:function(){return{hotels:[]}},created:function(){var t=this;r.a.get("https://olinguito.herokuapp.com/hotel/list").then(function(e){t.hotels=e.data,console.log(t.hotels)}).catch(function(t){alert("Error de servidor")})}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticStyle:{background:"url(https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",padding:"5em 1em","background-size":"cover"},attrs:{fluid:""}},[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{sm:"auto"}},[a("h3",{staticStyle:{padding:"0.5em","background-color":"rgba(255, 255, 255, 0.7)","border-radius":"0.5em",margin:"1"}},[t._v("\n        Lista de hoteles\n      ")])])],1),t._v(" "),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticStyle:{"text-align":"center"},attrs:{sm:"auto"}},[a("b-table-simple",{staticClass:"table table-bordered table-striped text-center",staticStyle:{"background-color":"rgba(255, 255, 255, 0.7)"},attrs:{hover:"",small:"","caption-top":"",responsive:"","table-bordered":"","table-striped":""}},[a("b-thead",{staticStyle:{"text-align":"center"},attrs:{"head-variant":"dark"}},[a("b-tr",{staticClass:"text-center bg-info text-light"},[a("b-th",{staticClass:"align-middle",attrs:{rowspan:"2"}},[t._v("ID")]),t._v(" "),a("b-th",{staticClass:"align-middle",attrs:{rowspan:"2"}},[t._v("Nombre")]),t._v(" "),a("b-th",{staticClass:"align-middle",attrs:{rowspan:"2"}},[t._v("No. habitaciones")]),t._v(" "),a("b-th",{attrs:{colspan:"3"}},[t._v("Precios por Temporada")])],1),t._v(" "),a("b-tr",{staticClass:"text-center bg-info text-light"},[a("b-th",[t._v("Baja")]),t._v(" "),a("b-th",[t._v("Media")]),t._v(" "),a("b-th",[t._v("Alta")])],1)],1),t._v(" "),a("b-tbody",t._l(t.hotels,function(e,s){return a("b-tr",{key:e.name},[a("b-td",[t._v(t._s(s+1))]),t._v(" "),a("b-td",[t._v(t._s(e.name))]),t._v(" "),a("b-td",[t._v(t._s(e.n_rooms))]),t._v(" "),a("b-td",[t._v(t._s(t._f("currency")(e.l_price)))]),t._v(" "),a("b-td",[t._v(t._s(t._f("currency")(e.m_price)))]),t._v(" "),a("b-td",[t._v(t._s(t._f("currency")(e.h_price)))])],1)}),1)],1)],1)],1)],1)},staticRenderFns:[]},i=a("VU/8")(o,n,!1,null,null,null);e.a=i.exports},X5dP:function(t,e){},XB7M:function(t,e){},cHtD:function(t,e,a){"use strict";(function(t){var s=a("/ocq"),r=a("/F/e"),o=a("tG8X"),n=a("hOnS"),i=a("WDTx"),l=a("55Mo"),c=a("N6IS"),u=a("M93x"),m=a("jyJz"),d=a("0KsH"),h=new s.a({mode:"history",base:t,routes:[{path:"/",name:"root",component:u.a},{path:"/user/:username",name:"user",component:m.a},{path:"/user/auth",name:"user_auth",component:c.a},{path:"/hotel/:hotel_name",name:"hotel_name",component:r.a},{path:"/hotel/create/",name:"creation_hotel",component:d.a},{path:"/hotel/details/:hotel_name",name:"hotel_info",component:o.a},{path:"/hotel/calculation",name:"calculation",component:n.a},{path:"/hotel/Lista_hoteles",name:"Lista_hoteles",component:i.a},{path:"/hotel/Calculations_list",name:"Calculations_list",component:l.a}]});e.a=h}).call(e,"/")},hEtt:function(t,e){},hOnS:function(t,e,a){"use strict";var s=a("mtWM"),r=a.n(s),o={name:"Calculation",data:function(){return{id_calculation:0,hotel_name:"",date:0,h_price:0,m_price:0,l_price:0,expected_profit:"",incidental_value:"",hotels:[],message:"",show:!1}},methods:{make_calculation:function(){var t=this,e={hotel_name:this.hotel_name,expected_profit:this.expected_profit,incidental_value:this.incidental_value};r.a.put("https://olinguito.herokuapp.com/hotel/calculation/",e).then(function(e){return t.id_calculation=e.data.id_calculation,t.hotel_name=e.data.hotel_name,t.date=e.data.date,t.h_price=e.data.h_price,t.m_price=e.data.m_price,t.l_price=e.data.l_price,t.show=!1}).catch(function(e){"422"==e.response.status&&(t.message="Por favor complete todos los datos"),t.show=!0,"400"==e.response.status&&t.expected_profit<t.incidental_value&&(t.message="Porcentaje de utilidad no puede ser menor que el porcentaje de imprevistos"),t.show=!0,(t.expected_profit<0||t.incidental_value<0)&&(t.message="Porcentaje de utilidad y/o Porcentaje de imprevistos no pueden ser negativos"),t.show=!0})}},created:function(){var t=this;r.a.get("https://olinguito.herokuapp.com/hotel/list").then(function(e){t.hotels=e.data,console.log(t.hotels)}).catch(function(t){alert("Error de servidor")})}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticStyle:{background:"url(https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",padding:"0.5em"},attrs:{fluid:""}},[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticStyle:{"text-align":"center"},attrs:{sm:"auto"}},[a("h3",{staticStyle:{padding:"0.5em","background-color":"rgba(255, 255, 255, 0.7)","border-radius":"0.25em"}},[t._v("\n        Cálculo de Precios por Temporada\n      ")])])],1),t._v(" "),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticStyle:{"text-align":"center","background-color":"rgba(255, 255, 255, 0.7)",padding:"0.5em","border-radius":"0.25em","margin-bottom":"0.5em"},attrs:{sm:"auto"}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Nombre del Hotel:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.hotel_name,expression:"hotel_name"}],staticClass:"form-control form-control-sm",attrs:{name:"hotel",id:"exampleFormControlSelect1",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.hotel_name=e.target.multiple?a:a[0]}}},t._l(t.hotels,function(e){return a("option",{key:e.name},[t._v("\n            "+t._s(e.name)+"\n          ")])}),0)]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInput1"}},[t._v("Utilidad Esperada (%):")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.expected_profit,expression:"expected_profit"}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"exampleInput1",placeholder:"Utilidad esperada",required:""},domProps:{value:t.expected_profit},on:{input:function(e){e.target.composing||(t.expected_profit=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInput2"}},[t._v("Imprevistos (%):")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.incidental_value,expression:"incidental_value"}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"exampleInput2",placeholder:"Imprevistos",required:""},domProps:{value:t.incidental_value},on:{input:function(e){e.target.composing||(t.incidental_value=e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#table_results",expression:"'#table_results'"}],staticStyle:{margin:"0.5em"},attrs:{variant:"outline-dark",type:"submit"},on:{click:t.make_calculation}},[t._v("Calcular")]),t._v(" "),t.show?a("b-alert",{staticStyle:{margin:"0","font-size":"0.5em"},attrs:{show:"",variant:"danger"}},[t._v(t._s(t.message))]):t._e()],1)]),t._v(" "),a("b-col",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{"text-align":"center"},attrs:{sm:"auto"}},[a("b-table-simple",{staticClass:"table table-bordered table-striped text-center align-middle",staticStyle:{"background-color":"rgba(255, 255, 255, 0.7)"},attrs:{id:"table_results",hover:"",small:"","caption-top":"",responsive:"","table-bordered":"","table-striped":""}},[a("b-thead",{attrs:{"head-variant":"dark"}},[a("b-tr",{staticClass:"text-center bg-info text-light"},[a("b-th",{staticClass:"align-middle",attrs:{rowspan:"2"}},[t._v("ID")]),t._v(" "),a("b-th",{staticClass:"align-middle",attrs:{rowspan:"2"}},[t._v("Nombre")]),t._v(" "),a("b-th",{staticClass:"align-middle",attrs:{rowspan:"2"}},[t._v("Fecha Cálculo")]),t._v(" "),a("b-th",{attrs:{colspan:"3"}},[t._v("Precio por Temporada")])],1),t._v(" "),a("b-tr",{staticClass:"text-center bg-info text-light"},[a("b-th",[t._v("Alta")]),t._v(" "),a("b-th",[t._v("Media")]),t._v(" "),a("b-th",[t._v("Baja")])],1)],1),t._v(" "),a("b-tbody",[a("b-tr",[a("b-td",[t._v(t._s(t.id_calculation))]),t._v(" "),a("b-td",[t._v(t._s(t.hotel_name))]),t._v(" "),a("b-td",[t._v(t._s(t._f("formatDate")(t.date)))]),t._v(" "),a("b-td",{staticClass:"Highprice"},[t._v(t._s(t._f("currency")(t.h_price)))]),t._v(" "),a("b-td",{staticClass:"Mediumprice"},[t._v(t._s(t._f("currency")(t.m_price)))]),t._v(" "),a("b-td",{staticClass:"Lowprice"},[t._v(t._s(t._f("currency")(t.l_price)))])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(o,n,!1,function(t){a("hEtt")},null,null);e.a=i.exports},jyJz:function(t,e,a){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"welcome"},[e("div",{staticClass:"item"},[e("h1",[this._v("¡Hola, "+this._s(this.username)+"!")])]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("h2",[this._v("Bienvenido")])])}]};var r=a("VU/8")({name:"User",data:function(){return{username:"none"}},created:function(){this.username=this.$route.params.username}},s,!1,function(t){a("C054")},null,null);e.a=r.exports},l12q:function(t,e){},"qU+V":function(t,e,a){t.exports=a.p+"static/img/olinguito-white.8789fdd.png"},tG8X:function(t,e,a){"use strict";var s=a("mtWM"),r=a.n(s),o={name:"Hotel_info",data:function(){return{hotel_name:"",n_rooms:0,total_operation_cost:0,l_days:0,h_days:0,l_price:0,m_price:0,h_price:0,hotels:[],message:"",show:!1}},methods:{make_consult:function(){var t=this,e=this;this.show=!1,r.a.get("https://olinguito.herokuapp.com/hotel/details/"+this.hotel_name).then(function(t){e.n_rooms=t.data.n_rooms,e.total_operation_cost=t.data.total_operation_cost,e.l_days=t.data.l_days,e.h_days=t.data.h_days,e.l_price=t.data.l_price,e.m_price=t.data.m_price,e.h_price=t.data.h_price}).catch(function(e){"404"==e.response.status&&(t.message="Seleccione un hotel."),t.show=!0})}},created:function(){var t=this;r.a.get("https://olinguito.herokuapp.com/hotel/list").then(function(e){t.hotels=e.data,console.log(t.hotels)}).catch(function(t){alert("Error de servidor")})}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{staticStyle:{background:"url(https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",padding:"0.5em"},attrs:{fluid:""}},[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticStyle:{"text-align":"center"},attrs:{sm:"auto"}},[a("h3",{staticStyle:{padding:"0.5em","background-color":"rgba(255, 255, 255, 0.7)","border-radius":"0.25em"}},[t._v("\n        Detalles de Hotel\n      ")])])],1),t._v(" "),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{staticClass:"align-middle",attrs:{sm:"auto"}},[a("div",{staticClass:"form-group text-center align-middle",staticStyle:{"text-align":"center","background-color":"rgba(255, 255, 255, 0.7)",padding:"0.5em","border-radius":"0.25em","margin-bottom":"0.5em"}},[a("label",{attrs:{for:"exampleFormControlSelect1"}},[t._v("Nombre del Hotel:")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.hotel_name,expression:"hotel_name"}],staticClass:"form-control form-control-sm",attrs:{name:"hotel",id:"exampleFormControlSelect1",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.hotel_name=e.target.multiple?a:a[0]}}},t._l(t.hotels,function(e){return a("option",{key:e.name},[t._v("\n            "+t._s(e.name)+"\n          ")])}),0),t._v(" "),a("b-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#table",expression:"'#table'"}],staticStyle:{margin:"0.5em"},attrs:{variant:"outline-dark",type:"submit"},on:{click:t.make_consult}},[t._v("Buscar")]),t._v(" "),t.show?a("b-alert",{staticStyle:{margin:"0","font-size":"0.5em"},attrs:{show:"",variant:"warning"}},[t._v(t._s(t.message))]):t._e()],1)]),t._v(" "),a("b-col",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{"text-align":"center"},attrs:{sm:"auto"}},[a("b-table-simple",{staticClass:"table table-bordered table-striped text-center align-middle",staticStyle:{"background-color":"rgba(255, 255, 255, 0.7)"},attrs:{id:"table_results",hover:"",small:"","caption-top":"",responsive:"","table-bordered":"","table-striped":""}},[a("b-thead",{attrs:{"head-variant":"dark"}},[a("b-tr",{staticClass:"text-center bg-info text-light"},[a("b-th",{attrs:{colspan:"3"}},[t._v("Datos del Hotel: "+t._s(t.hotel_name)+" ")])],1)],1),t._v(" "),a("b-tbody",[a("b-tr",[a("b-th",{staticClass:"text-right",attrs:{colspan:"2",variant:"dark"}},[t._v("Número de habitaciones:")]),t._v(" "),a("b-td",{staticClass:"text-center"},[t._v(t._s(t.n_rooms))])],1),t._v(" "),a("b-tr",[a("b-th",{staticClass:"text-right align-middle",attrs:{rowspan:"3",variant:"dark"}},[t._v("Días por Temporada\n            ")]),t._v(" "),a("b-th",{staticClass:"text-right",attrs:{variant:"dark"}},[t._v("Baja: ")]),t._v(" "),a("b-td",{staticClass:"text-center"},[t._v(t._s(t.l_days))])],1),t._v(" "),a("b-tr",[a("b-th",{staticClass:"text-right",attrs:{variant:"dark"}},[t._v("Media: ")]),t._v(" "),a("b-td",{staticClass:"text-center"},[t._v(t._s(365-t.l_days-t.h_days))])],1),t._v(" "),a("b-tr",[a("b-th",{staticClass:"text-right",attrs:{variant:"dark"}},[t._v("Alta: ")]),t._v(" "),a("b-td",{staticClass:"text-center"},[t._v(t._s(t.h_days))])],1),t._v(" "),a("b-tr",[a("b-th",{staticClass:"text-right",attrs:{colspan:"2",variant:"dark"}},[t._v("Costo de operación:")]),t._v(" "),a("b-td",{staticClass:"text-center"},[t._v(t._s(t._f("currency")(t.total_operation_cost)))])],1),t._v(" "),a("b-tr",[a("b-th",{staticClass:"text-right align-middle",attrs:{rowspan:"3",variant:"dark"}},[t._v("Precios por Temporada")]),t._v(" "),a("b-th",{staticClass:"text-right",attrs:{variant:"dark"}},[t._v("Baja: ")]),t._v(" "),a("b-td",{staticClass:"text-center"},[t._v(t._s(t._f("currency")(t.l_price)))])],1),t._v(" "),a("b-tr",[a("b-th",{staticClass:"text-right",attrs:{variant:"dark"}},[t._v("Media: ")]),t._v(" "),a("b-td",{staticClass:"text-center"},[t._v(t._s(t._f("currency")(t.m_price)))])],1),t._v(" "),a("b-tr",[a("b-th",{staticClass:"text-right",attrs:{variant:"dark"}},[t._v("Alta: ")]),t._v(" "),a("b-td",{staticClass:"text-center"},[t._v(t._s(t._f("currency")(t.h_price)))])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var i=a("VU/8")(o,n,!1,function(t){a("l12q")},null,null);e.a=i.exports},uslO:function(t,e,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn-bd":"1C9R","./bn-bd.js":"1C9R","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-in":"yJfC","./en-in.js":"yJfC","./en-nz":"dyB6","./en-nz.js":"dyB6","./en-sg":"NYST","./en-sg.js":"NYST","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-mx":"USNP","./es-mx.js":"USNP","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fil":"rMbQ","./fil.js":"rMbQ","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-deva":"VGQH","./gom-deva.js":"VGQH","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./oc-lnc":"KOFO","./oc-lnc.js":"KOFO","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tk":"+WRH","./tk.js":"+WRH","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-mo":"+WA1","./zh-mo.js":"+WA1","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return a(o(t))}function o(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.03f4a1476a195099b08a.js.map