(()=>{"use strict";var e={7145:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Ve});var n=i(4942),r=i(9526),o=i(5176),l=i(3535),a=i(442),u=i(1133),d=i(5899),s=i(2703),c=i(83);const g={container:{flex:1},viewButton:{display:"flex",flexDirection:"row"},viewCenterButton:{alignItems:"center"},mh:{marginHorizontal:5}};var f=i(885),m=i(4333),p=i(6363),h=i(4500),y=(0,h.createSlice)({name:"user",initialState:{name:"",isLoggedIn:!1},reducers:{loginUser:function(e,t){e.name=t.payload,e.isLoggedIn=!0,e.balance=5e3,e.activeStores=0,e.expenses=100,e.revenue=0,e.date=Date.now(),e.backgroundSound=.01,e.interfaceSound=1},logoutUser:function(e){e.name="",e.isLoggedIn=!1},setBackgroundSound:function(e,t){e.backgroundSound=t.payload},setInterfaceSound:function(e,t){e.intefaceSound=t.payload},deductBalance:function(e,t){var i=t.payload;e.balance-=i},deductDailyCost:function(e){e.balance-=e.expenses}}}),x=y.actions,b=x.loginUser,j=x.logoutUser,v=x.setBackgroundSound,P=x.setInterfaceSound,S=x.deductBalance,A=x.deductDailyCost;const w=y.reducer;var q=i(7557),k=m.default.create({container:{padding:15,backgroundColor:"#f5f5f5",borderRadius:10,marginBottom:10},timeText:{fontSize:18,fontWeight:"bold",textAlign:"center",marginBottom:10},infoContainer:{backgroundColor:"rgba(0, 0, 0, 0.8)",borderRadius:10,padding:10,flexDirection:"row",justifyContent:"center",alignItems:"center",flex:1},infoText:{fontSize:16,marginRight:5,color:"#fff"},deductedAmount:{fontSize:16,fontWeight:"bold",color:"#fff"}});const I=function(){var e=(0,c.useSelector)((function(e){return e.user.date})),t=(0,r.useState)(e),i=(0,f.default)(t,2),n=i[0],o=i[1],l=(0,r.useState)(""),a=(0,f.default)(l,2),s=a[0],g=a[1],m=(0,r.useState)(!1),h=(0,f.default)(m,2),y=(h[0],h[1],(0,r.useState)(0)),x=(0,f.default)(y,2),b=x[0],j=x[1],v=(0,r.useState)(!1),P=(0,f.default)(v,2),S=P[0],w=P[1],I=(0,c.useSelector)((function(e){return e.user.expenses})),O=(0,c.useDispatch)();(0,r.useEffect)((function(){var e=setInterval((function(){var e=new Date(new Date(n).getTime()+6e4);o(e),g(e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")),"00"===e.getMinutes().toString().padStart(2,"0")&&(O(A()),j(I),w(!0))}),200);return function(){return clearInterval(e)}}),[n]);return(0,q.jsxs)(u.default,{style:k.container,children:[(0,q.jsx)(d.default,{style:k.timeText,children:s}),(0,q.jsx)(p.default,{visible:S,action:{label:"X",onPress:function(){}},style:{flex:1,width:200},onDismiss:function(){w(!1)},duration:3e3,children:(0,q.jsxs)(d.default,{style:{color:"white"},children:["Montant d\xe9duit : ",b,"$"]})})]})};var O=i(5833),C=i(8061),G=i(7077),D=i(1625),z=(0,h.createSlice)({name:"shops",initialState:{shops:[],count:0},reducers:{createShop:function(e,t){var i={id:e.shops.length+1,name:t.payload,operating_cost:0};e.shops.push(i),e.count+=1},updateShop:function(e,t){var i=t.payload,n=i.id,r=i.updates,o=e.shops.find((function(e){return e.id===n}));o&&Object.assign(o,r)}}}),R=z.actions,B=R.createShop;R.updateShop;const T=z.reducer;var V=i(5861),L=i(213),E={},M=function(){var e=(0,V.default)((function*(e,t){if(console.log("son charge et au top"),E.backgroundSound)E.backgroundSound.setVolumeAsync(e);else{var n=yield Promise.all([L.Sound.createAsync(i(1285)),L.Sound.createAsync(i(9765)),L.Sound.createAsync(i(1873)),L.Sound.createAsync(i(2070),{shouldPlay:!0,isLooping:!0})]),r=(0,f.default)(n,4),o=r[0],l=r[1],a=r[2],u=r[3];o.sound.setVolumeAsync(t),l.sound.setVolumeAsync(t),a.sound.setVolumeAsync(t),u.sound.setVolumeAsync(e),E.clickSound=o.sound,E.errorClickSound=l.sound,E.successClickSound=a.sound,E.backgroundSound=u.sound}}));return function(t,i){return e.apply(this,arguments)}}(),$=function(){var e=(0,V.default)((function*(){E.clickSound&&(yield E.clickSound.replayAsync())}));return function(){return e.apply(this,arguments)}}(),H=function(){var e=(0,V.default)((function*(){E.errorClickSound&&(yield E.errorClickSound.replayAsync())}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=(0,V.default)((function*(){E.successClickSound&&(yield E.successClickSound.replayAsync())}));return function(){return e.apply(this,arguments)}}();const W=function(){var e=(0,c.useDispatch)(),t=(0,r.useState)(""),i=(0,f.default)(t,2),n=i[0],o=i[1],l=(0,r.useState)(!1),a=(0,f.default)(l,2),m=a[0],p=a[1];return(0,q.jsxs)(u.default,{children:[(0,q.jsx)(u.default,{style:g.viewButton,children:(0,q.jsx)(s.default,{mode:"outlined",onPress:function(){$(),p(!0)},children:"Cr\xe9er une boutique"})}),(0,q.jsx)(O.default,{children:(0,q.jsx)(C.default,{visible:m,onDismiss:function(){p(!m)},style:{alignSelf:"center",alignItems:"center"},contentContainerStyle:{borderRadius:15},dismissable:!1,children:(0,q.jsxs)(u.default,{style:{backgroundColor:"#fff",borderRadius:15},children:[(0,q.jsxs)(u.default,{style:{position:"relative",borderRadius:15,padding:15},children:[(0,q.jsx)(d.default,{style:{fontSize:18,fontWeight:"bold"},children:"Cr\xe9ation d'une nouvelle boutique"}),(0,q.jsx)(G.default,{icon:"close",size:20,onPress:function(){return p(!m)},mode:"contained",style:{position:"absolute",right:0,top:0}})]}),(0,q.jsxs)(u.default,{style:{padding:20},children:[(0,q.jsx)(d.default,{children:"Choississez le nom de votre nouvelle boutique"}),(0,q.jsx)(D.default,{value:n,onChangeText:function(e){return o(e)},autoFocus:!0}),(0,q.jsx)(u.default,{style:g.viewBuviewCenterButtontton,children:(0,q.jsx)(s.default,{onPress:function(){!function(t){""!=t?(console.log("la boutique "+t+" a \xe9t\xe9 cr\xe9\xe9 !"),e(B(t)),_(),p(!m),o("")):H()}(n)},children:"Cr\xe9er ma boutique"})})]})]})})})]})};var F=i(6770),U=i(2790),N=i.n(U);const J=function(){var e=(0,r.useState)(!1),t=(0,f.default)(e,2),i=t[0],n=t[1],o=(0,c.useSelector)((function(e){return e.user.backgroundSound})),l=(0,c.useSelector)((function(e){return e.user.interfaceSound})),a=(0,r.useState)(o),m=(0,f.default)(a,2),p=m[0],h=m[1],y=(0,r.useState)(l),x=(0,f.default)(y,2),b=x[0],S=x[1],A=(0,c.useDispatch)();return(0,q.jsxs)(u.default,{children:[(0,q.jsx)(u.default,{style:g.viewButton,children:(0,q.jsx)(s.default,{mode:"outlined",onPress:function(){$(),n(!0)},children:"Param\xe8tres"})}),(0,q.jsx)(O.default,{children:(0,q.jsx)(C.default,{visible:i,onDismiss:function(){n(!i)},style:{alignSelf:"center",alignItems:"center"},contentContainerStyle:{borderRadius:15},dismissable:!1,children:(0,q.jsxs)(u.default,{style:{backgroundColor:"#fff",borderRadius:15},children:[(0,q.jsxs)(u.default,{style:{width:500},children:[(0,q.jsxs)(u.default,{style:{position:"relative",borderRadius:15,padding:15},children:[(0,q.jsx)(d.default,{style:{fontSize:18,fontWeight:"bold",textAlign:"center"},children:"Param\xe8tres"}),(0,q.jsx)(d.default,{style:{textAlign:"center",padding:10},children:"Version du jeu 0.0.1"})]}),(0,q.jsx)(F.default,{bold:"true",horizontalInset:"true"}),(0,q.jsx)(u.default,{style:{padding:10},children:(0,q.jsxs)(u.default,{style:{flexDirection:"row",alignItems:"center",marginHorizontal:100},children:[(0,q.jsx)(d.default,{style:{textAlignVertical:"center",width:100},children:"Musique"}),(0,q.jsx)(N(),{style:{maxWidth:150,height:40},minimumValue:0,maximumValue:1,step:.01,minimumTrackTintColor:"green",maximumTrackTintColor:"blue",onValueChange:function(e){h(e),A(v(e))},value:p})]})}),(0,q.jsx)(u.default,{style:{padding:10},children:(0,q.jsxs)(u.default,{style:{flexDirection:"row",alignItems:"center",marginHorizontal:100},children:[(0,q.jsx)(d.default,{style:{textAlignVertical:"center",width:100},children:"Effet Sonore"}),(0,q.jsx)(N(),{style:{maxWidth:150,height:40},minimumValue:0,maximumValue:1,step:.01,minimumTrackTintColor:"green",maximumTrackTintColor:"blue",onValueChange:function(e){S(e),A(P(e))},value:b})]})}),(0,q.jsx)(u.default,{style:g.viewButton,children:(0,q.jsx)(s.default,{mode:"contained",onPress:function(){A(j())},children:"D\xe9connexion"})})]}),(0,q.jsx)(G.default,{icon:"close",size:20,onPress:function(){return n(!i)},mode:"contained",style:{position:"absolute",right:0,top:0}})]})})})]})};function K(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function X(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?K(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}const Q=function(){var e=(0,r.useState)(!1),t=(0,f.default)(e,2),i=t[0],n=t[1],o=(0,c.useSelector)((function(e){return e.missions}));return(0,q.jsxs)(u.default,{children:[(0,q.jsx)(u.default,{style:g.viewButton,children:(0,q.jsx)(G.default,{icon:"format-list-bulleted",size:20,onPress:function(){$(),n(!0)},mode:"contained",style:{position:"absolute",right:0,top:0}})}),(0,q.jsx)(O.default,{children:(0,q.jsx)(C.default,{visible:i,onDismiss:function(){n(!i)},style:{alignSelf:"center",alignItems:"center"},contentContainerStyle:{borderRadius:15},dismissable:!1,children:(0,q.jsxs)(u.default,{style:{backgroundColor:"#fff",borderRadius:15},children:[(0,q.jsxs)(u.default,{style:{width:500},children:[(0,q.jsxs)(u.default,{style:{position:"relative",borderRadius:15,padding:15},children:[(0,q.jsx)(d.default,{style:{fontSize:18,fontWeight:"bold",textAlign:"center"},children:"Missions"}),(0,q.jsx)(d.default,{style:{textAlign:"center",padding:10},children:"Compl\xe9tez pour gagner des r\xe9compenses !"})]}),(0,q.jsx)(F.default,{bold:"true",horizontalInset:"true"}),(0,q.jsx)(u.default,{style:{padding:10},children:o.filter((function(e){return!e.completed})).slice(0,5).map((function(e){return(0,q.jsxs)(u.default,{style:{flexDirection:"row",background:"gold",padding:5,margin:5,borderRadius:15},children:[(0,q.jsx)(u.default,{children:(0,q.jsx)(G.default,{icon:"camera",size:30,iconColor:"goldenrod"})}),(0,q.jsxs)(u.default,{style:{justifyContent:"center",flex:1,paddingStart:20},children:[(0,q.jsx)(u.default,{children:(0,q.jsx)(d.default,{children:e.title})}),(0,q.jsxs)(u.default,{style:{flexDirection:"row",fontSize:14,fontWeight:"bold"},children:[(0,q.jsxs)(d.default,{style:{color:"goldenrod"},children:[" R\xe9compense : ",e.gain]}),(0,q.jsx)(G.default,{icon:"diamond-stone",size:15,iconColor:"goldenrod",padding:0,style:{width:20,height:20,marginVertical:0,marginHorizontal:5}})]})]}),(0,q.jsx)(u.default,{style:{justifyContent:"center"},children:(0,q.jsx)(s.default,{mode:"contained",style:X({alignItems:"flex-start"},e.completed?{}:{background:"grey"}),onPress:function(){e.completed?$():H()},children:"R\xe9cup\xe9rer"})})]},e.id)}))})]}),(0,q.jsx)(G.default,{icon:"close",size:20,onPress:function(){return n(!i)},mode:"contained",style:{position:"absolute",right:0,top:0}})]})})})]})};const Y=function(){var e=(0,r.useState)(!1),t=(0,f.default)(e,2),i=t[0],n=t[1],o=(0,c.useSelector)((function(e){return e.shops.shops})),l=(0,c.useSelector)((function(e){return e.shops.count}));return console.log("shops"),console.log(l),(0,q.jsxs)(u.default,{children:[(0,q.jsx)(u.default,{style:g.viewButton,children:(0,q.jsxs)(s.default,{mode:"outlined",onPress:function(){$(),n(!0)},children:["Gestion de site e-commerce ",l]})}),(0,q.jsx)(O.default,{children:(0,q.jsx)(C.default,{visible:i,onDismiss:function(){n(!i)},style:{alignSelf:"center",alignItems:"center"},contentContainerStyle:{borderRadius:15},dismissable:!1,children:(0,q.jsxs)(u.default,{style:{backgroundColor:"#fff",borderRadius:15},children:[(0,q.jsxs)(u.default,{style:{width:500},children:[(0,q.jsx)(u.default,{style:{position:"relative",borderRadius:15,padding:15},children:(0,q.jsx)(d.default,{style:{fontSize:18,fontWeight:"bold",textAlign:"center"},children:"Mes boutiques"})}),(0,q.jsx)(F.default,{bold:"true",horizontalInset:"true"}),(0,q.jsx)(u.default,{style:{padding:10},children:l>0?o.map((function(e){return(0,q.jsx)(u.default,{style:{background:"oldlace",alignItems:"center",padding:5,margin:5,borderRadius:10,flex:1},children:(0,q.jsx)(d.default,{children:e.name})},e.id)})):(0,q.jsx)(u.default,{style:{background:"oldlace",alignItems:"center",padding:5,margin:5,borderRadius:10,flex:1},children:(0,q.jsx)(d.default,{children:"Aucune boutique pour le moment !"})})})]}),(0,q.jsx)(G.default,{icon:"close",size:20,onPress:function(){return n(!i)},mode:"contained",style:{position:"absolute",right:0,top:0}})]})})})]})};const Z=function(e){var t=e.children;return(0,q.jsx)(u.default,{style:{flex:1,paddingVertical:10,paddingHorizontal:20},children:t})};const ee=function(e){var t=e.navigation;(0,c.useSelector)((function(e){return e.user.isLoggedIn}))||t.navigate("login");var i=(0,c.useSelector)((function(e){return e.user.backgroundSound})),n=(0,c.useSelector)((function(e){return e.user.interfaceSound}));(0,r.useEffect)((function(){M(i,n)}),[i,n]),E.backgroundSound&&E.backgroundSound.playAsync();var o=(0,c.useSelector)((function(e){return e.shops.count})),l=(0,c.useSelector)((function(e){return e.user})),a=(l.name,l.balance),f=(l.activeStores,l.expenses),m=l.revenue;(0,c.useSelector)((function(e){return e.missions}));return(0,q.jsxs)(Z,{children:[(0,q.jsxs)(u.default,{style:{flexDirection:"row",justifyContent:"space-between"},children:[(0,q.jsx)(J,{}),(0,q.jsx)(u.default,{style:g.balanceContainer,children:(0,q.jsxs)(d.default,{children:["Solde actuel: ",a]})}),(0,q.jsxs)(u.default,{children:[(0,q.jsxs)(d.default,{style:{paddingVertical:10},children:["Nombre de e-commerce actifs: ",o]}),(0,q.jsxs)(d.default,{style:{paddingVertical:10},children:["D\xe9penses globales: ",f]}),(0,q.jsxs)(d.default,{style:{paddingVertical:10},children:["Chiffre d'affaires: ",m]})]})]}),(0,q.jsx)(u.default,{children:(0,q.jsx)(Q,{})}),(0,q.jsxs)(u.default,{style:{alignItems:"flex-start",position:"absolute",bottom:0,left:0,right:0,flexDirection:"row",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:10},children:[(0,q.jsx)(u.default,{children:(0,q.jsx)(I,{})}),(0,q.jsxs)(u.default,{style:{flexDirection:"row"},children:[(0,q.jsx)(W,{}),(0,q.jsx)(u.default,{style:[g.viewButton,{marginHorizontal:5}],children:(0,q.jsx)(s.default,{mode:"outlined",onPress:function(){$()},children:"Gestion de pub"})}),(0,q.jsx)(u.default,{style:[g.viewButton,{marginHorizontal:5}],children:(0,q.jsx)(Y,{})}),(0,q.jsx)(u.default,{style:[g.viewButton,{marginHorizontal:5}],children:(0,q.jsx)(s.default,{mode:"outlined",onPress:function(){$(),t.navigate("products")},children:"Gestion de catalogue produit"})})]})]})]})};const te=function(e){var t=e.navigation,i=(0,r.useState)(""),n=(0,f.default)(i,2),o=n[0],l=n[1],a=(0,c.useSelector)((function(e){return e.user.isLoggedIn})),m=(0,c.useDispatch)();return(0,r.useEffect)((function(){a&&t.navigate("gameLoading")}),[a,t]),(0,q.jsxs)(Z,{children:[(0,q.jsx)(d.default,{children:"Se connecter"}),(0,q.jsx)(D.default,{placeholder:"Identifiant de jeu",onChangeText:l,value:o}),(0,q.jsx)(u.default,{style:g.viewButton,children:(0,q.jsx)(s.default,{mode:"contained",onPress:function(){m(b(o))},children:"Connexion"})}),a?(0,q.jsx)(d.default,{children:"Welcome, "+o+"!"}):void 0]})};var ie=i(9233),ne=i(2652),re=i.n(ne),oe=function(e){var t=e.navigation;return(0,r.useEffect)((function(){setTimeout((function(){t.navigate("login")}),100)}),[]),(0,q.jsx)(Z,{children:(0,q.jsx)(ie.default,{children:"Ecom Empire !! !!!!!!!"})})};oe.propTypes={navigation:re().object.isRequired};const le=oe;const ae=function(e){var t=e.navigation;return(0,r.useEffect)((function(){setTimeout((function(){t.navigate("home")}),500)}),[]),(0,q.jsx)(Z,{children:(0,q.jsx)(ie.default,{children:"Chargement des donn\xe9es..."})})};const ue=function(e){var t=e.navigation;return(0,q.jsx)(Z,{children:(0,q.jsx)(u.default,{style:[g.viewButton,{marginHorizontal:5}],children:(0,q.jsx)(s.default,{mode:"contained",onPress:function(){$(),t.goBack()},children:"Retour"})})})};var de=i(1553),se=function(e){var t=e.navigation;return(0,q.jsxs)(Z,{children:[(0,q.jsx)(ie.default,{children:"Shop Screen"}),(0,q.jsx)(de.default,{title:"Back",onPress:function(){return t.goBack()}})]})};se.propTypes={navigation:re().object.isRequired};const ce=se;var ge=i(9566),fe=i(7344),me=i(7379),pe=(0,h.createSlice)({name:"produits",initialState:[{id:1,title:"T-shirt basique uni",buyPrice:"10",sellPrice:"25",targetAge:"18-25",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:1},{id:2,title:"Jeans slim",buyPrice:"30",sellPrice:"60",targetAge:"18-45",targetGenre:"f",owned:!1,quantity:0,grade:"commun",categorieId:1},{id:3,title:"Sneakers",buyPrice:"80",sellPrice:"150",targetAge:"18-35",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:1},{id:4,title:"Veste en cuir",buyPrice:"150",sellPrice:"300",targetAge:"26-35",targetGenre:"h",owned:!1,quantity:0,grade:"rare",categorieId:1},{id:5,title:"Costume sur-mesure",buyPrice:"500",sellPrice:"1000",targetAge:"26-45",targetGenre:"f",owned:!1,quantity:0,grade:"unique",categorieId:1},{id:6,title:"Casque audio sans fil",buyPrice:"50",sellPrice:"100",targetAge:"18-36",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:2},{id:7,title:"Montre connect\xe9e",buyPrice:"150",sellPrice:"300",targetAge:"1-45",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:2},{id:8,title:"Smartphone avec triple cam\xe9ra",buyPrice:"400",sellPrice:"900",targetAge:"18-45",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:2},{id:9,title:"Ordinateur portable gaming",buyPrice:"800",sellPrice:"1500",targetAge:"18-35",targetGenre:"u",owned:!1,quantity:0,grade:"rare",categorieId:2},{id:10,title:"Drone professionnel avec cam\xe9ra 4K",buyPrice:"1000",sellPrice:"2000",targetAge:"35-55",targetGenre:"h",owned:!1,quantity:0,grade:"unique",categorieId:2},{id:11,title:"Cr\xe8me hydratante pour peaux s\xe8ches",buyPrice:"10",sellPrice:"25",targetAge:"18-35",targetGenre:"f",owned:!1,quantity:0,grade:"commun",categorieId:3},{id:12,title:"Set de pinceaux pour maquillage",buyPrice:"35",sellPrice:"70",targetAge:"18-35",targetGenre:"f",owned:!1,quantity:0,grade:"commun",categorieId:3},{id:13,title:"Parfum muscle ch\xeane",buyPrice:"50",sellPrice:"100",targetAge:"25-+",targetGenre:"h",owned:!1,quantity:0,grade:"commun",categorieId:3},{id:14,title:"Cr\xe8me anti-\xe2ge haut de gamme",buyPrice:"150",sellPrice:"300",targetAge:"35+",targetGenre:"u",owned:!1,quantity:0,grade:"rare",categorieId:3},{id:15,title:"Coffret de maquillage personnalisable",buyPrice:"300",sellPrice:"600",targetAge:"25-45",targetGenre:"f",owned:!1,quantity:0,grade:"unique",categorieId:3},{id:16,title:"Puzzle 1000 pi\xe8ces",buyPrice:"10",sellPrice:"20",targetAge:"36+",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:4},{id:17,title:"Peluche licorne lumineuse",buyPrice:"20",sellPrice:"40",targetAge:"18-25",targetGenre:"f",owned:!1,quantity:0,grade:"commun",categorieId:4},{id:18,title:"Jeu de soci\xe9t\xe9 strat\xe9gique",buyPrice:"40",sellPrice:"80",targetAge:"18-35",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:4},{id:19,title:"Pistolet Nerf",buyPrice:"90",sellPrice:"250",targetAge:"18-35",targetGenre:"h",owned:!1,quantity:0,grade:"rare",categorieId:4},{id:20,title:"Console nouvelle g\xe9n\xe9ration",buyPrice:"300",sellPrice:"700",targetAge:"25-45",targetGenre:"h",owned:!1,quantity:0,grade:"unique",categorieId:4},{id:21,title:"Laisse pour chien",buyPrice:"15",sellPrice:"30",targetAge:"18-35",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:5},{id:22,title:"Grand arbre \xe0 chat",buyPrice:"60",sellPrice:"150",targetAge:"25-55",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:5},{id:23,title:"Niche design",buyPrice:"200",sellPrice:"400",targetAge:"25-55",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:5},{id:24,title:"Distributeur de croquette automatique",buyPrice:"250",sellPrice:"400",targetAge:"35+",targetGenre:"u",owned:!1,quantity:0,grade:"rare",categorieId:5},{id:25,title:"Aquarium design",buyPrice:"500",sellPrice:"1000",targetAge:"46+",targetGenre:"u",owned:!1,quantity:0,grade:"unique",categorieId:5},{id:26,title:"Boisson gazeuse",buyPrice:"1.2",sellPrice:"2.5",targetAge:"18+",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:6},{id:27,title:"Biscuit ap\xe9ritif",buyPrice:"0.8",sellPrice:"1.8",targetAge:"18-45",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:6},{id:28,title:"Lait v\xe9g\xe9tal",buyPrice:5,sellPrice:"12",targetAge:"18-35",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:6},{id:29,title:"Boisson \xe9nergisant",buyPrice:"15",sellPrice:"35",targetAge:"18-35",targetGenre:"h",owned:!1,quantity:0,grade:"rare",categorieId:6},{id:30,title:"Barre prot\xe9in\xe9 edition limit\xe9",buyPrice:"20",sellPrice:"50",targetAge:"18+",targetGenre:"u",owned:!1,quantity:0,grade:"unique",categorieId:6},{id:31,title:"Gants de musculation",buyPrice:"8",sellPrice:"12",targetAge:"18-45",targetGenre:"h",owned:!1,quantity:0,grade:"commun",categorieId:7},{id:32,title:"Ballon de football",buyPrice:"15",sellPrice:"30",targetAge:"18-35",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:7},{id:33,title:"Kit de camping",buyPrice:"100",sellPrice:"250",targetAge:"25-45",targetGenre:"u",owned:!1,quantity:0,grade:"commun",categorieId:7},{id:34,title:"V\xe9lo \xe9lectrique pliant",buyPrice:"400",sellPrice:"600",targetAge:"18-55",targetGenre:"u",owned:!1,quantity:0,grade:"rare",categorieId:7},{id:35,title:"Planche de surf en bois d'\xe9b\xe8ne",buyPrice:"1500",sellPrice:"2500",targetAge:"25-45",targetGenre:"u",owned:!1,quantity:0,grade:"unique",categorieId:7}],reducers:{unlockProduct:function(e,t){var i=e.find((function(e){return e.id===t.payload}));i&&(i.owned=!0)},buyProduct:function(e,t){var i=t.payload,n=i.productId,r=i.quantity,o=e.find((function(e){return e.id===n}));o&&(o.quantity+=r)}}}),he=pe.actions,ye=he.unlockProduct,xe=he.buyProduct;const be=pe.reducer;const je=function(e){var t=e.navigation,i=(0,c.useSelector)((function(e){return e.produits})),n=(0,c.useSelector)((function(e){return e.categories})),o=(0,r.useState)(1),l=(0,f.default)(o,2),a=l[0],g=l[1],m=function(e){switch(e){case"commun":return"green";case"rare":return"blue";default:return"blueviolet"}},p=function(e){return i.find((function(t){return t.id===e}))},h=(0,c.useDispatch)(),y=function(e,t){var i=p(e);h(S(i.buyPrice*t)),h(xe(e,t))};return(0,q.jsxs)(Z,{children:[(0,q.jsx)(s.default,{icon:"arrow-left-bold",mode:"contained",onPress:function(){$(),t.goBack()},children:"Retour"}),(0,q.jsx)(u.default,{contentContainerStyle:{padding:16,flexDirection:"row"},children:(0,q.jsx)(ge.default,{data:n,renderItem:function(e){var t=e.item;return(0,q.jsx)(u.default,{style:{marginVertical:8},children:(0,q.jsx)(d.default,{variant:"titleLarge",style:{textAlign:"center",marginBottom:8},children:(0,q.jsx)(s.default,{mode:a===t.id?"contained":"outlined",onPress:a===t.id?function(){}:function(){return g(t.id)},style:{marginHorizontal:16},children:t.title})})})},horizontal:!0,keyExtractor:function(e){return e.id.toString()},showsVerticalScrollIndicator:!1})}),(0,q.jsx)(u.default,{contentContainerStyle:{padding:16,flexDirection:"row"},children:(0,q.jsx)(ge.default,{data:i.filter((function(e){return e.categorieId===a})),renderItem:function(e){var t=e.item;return(0,q.jsxs)(fe.default,{style:{marginVertical:8,borderRadius:16,flex:1,margin:5},children:[(0,q.jsxs)(fe.default.Content,{style:{padding:16},children:[(0,q.jsxs)(u.default,{style:{flexDirection:"row",alignItems:"center"},children:[(0,q.jsx)(me.default,{icon:"pokeball",size:36,color:"goldenrod",style:{marginRight:8}}),(0,q.jsx)(d.default,{style:{fontSize:20,fontWeight:"bold",color:m(t.grade)},children:t.title})]}),(0,q.jsxs)(d.default,{children:["Prix d'achat: ",t.buyPrice," $"]}),(0,q.jsxs)(d.default,{children:["Prix de vente: ",t.sellPrice," $"]}),(0,q.jsxs)(d.default,{children:["Age cible: ",t.sellPrice," $"]}),(0,q.jsxs)(d.default,{children:["Sexe cible: ",t.sellPrice," $"]}),(0,q.jsx)(d.default,{style:{color:m(t.grade)},children:t.grade})]}),(0,q.jsx)(fe.default.Actions,{style:{justifyContent:"flex-end",paddingBottom:16},children:t.owned?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(s.default,{mode:"contained",onPress:function(){$(),y(t.id,1)},style:{marginRight:8},children:"+1"}),(0,q.jsx)(s.default,{mode:"contained",onPress:function(){$(),y(t.id,10)},style:{marginRight:8},children:"+10"}),(0,q.jsx)(s.default,{mode:"contained",onPress:function(){$(),y(t.id,100)},children:"+100"})]}):(0,q.jsx)(s.default,{mode:"contained",onPress:function(){_(),function(e){var t=p(e);h(S(t.buyPrice)),h(ye(e))}(t.id)},children:"D\xe9bloquer"})})]})},keyExtractor:function(e){return e.id.toString()},showsVerticalScrollIndicator:!1,contentContainerStyle:{paddingHorizontal:16},numColumns:5})})]})};var ve=function(e){var t=e.navigation;return(0,q.jsxs)(Z,{children:[(0,q.jsx)(ie.default,{children:"Settings"}),(0,q.jsx)(de.default,{title:"Back",onPress:function(){return t.goBack()}})]})};ve.propTypes={navigation:re().object.isRequired};const Pe=ve;var Se=function(e){var t=e.navigation;return(0,q.jsxs)(Z,{children:[(0,q.jsx)(ie.default,{children:"Profile Screen"}),(0,q.jsx)(de.default,{title:"Back",onPress:function(){return t.goBack()}})]})};Se.propTypes={navigation:re().object.isRequired};const Ae=Se;var we=r.createRef();var qe=(0,a.default)();const ke=function(){return(0,q.jsx)(l.default,{ref:we,children:(0,q.jsxs)(qe.Navigator,{initialRouteName:"splash",screenOptions:{headerShown:!1},children:[(0,q.jsx)(qe.Screen,{name:"home",component:ee}),(0,q.jsx)(qe.Screen,{name:"splash",component:le}),(0,q.jsx)(qe.Screen,{name:"login",component:te}),(0,q.jsx)(qe.Screen,{name:"gameLoading",component:ae}),(0,q.jsx)(qe.Screen,{name:"missions",component:ue}),(0,q.jsx)(qe.Screen,{name:"shop",component:ce}),(0,q.jsx)(qe.Screen,{name:"settings",component:Pe}),(0,q.jsx)(qe.Screen,{name:"profile",component:Ae}),(0,q.jsx)(qe.Screen,{name:"products",component:je})]})})};var Ie=(0,h.createSlice)({name:"missions",initialState:[{id:1,title:"Poss\xe9der 1 produit",completed:!1,gain:5},{id:2,title:"Poss\xe9der 3 produits",completed:!1,gain:5},{id:3,title:"Poss\xe9der 5 produit",completed:!1,gain:5},{id:4,title:"Poss\xe9der 10 produit",completed:!1,gain:5},{id:5,title:"Poss\xe9der 20 produits",completed:!1,gain:5},{id:6,title:"Poss\xe9der 1 produit haut de gamme",completed:!1,gain:5},{id:7,title:"Poss\xe9der 3 produit haut de gamme",completed:!1,gain:5},{id:8,title:"Poss\xe9der 5 produit haut de gamme",completed:!1,gain:5},{id:9,title:"Poss\xe9der 10 produit haut de gamme",completed:!1,gain:5},{id:10,title:"Acheter 1 licence pour vendre un produit exclusif",completed:!1,gain:5},{id:11,title:"Acheter 3 licence pour vendre un produit exclusif",completed:!1,gain:5},{id:12,title:"Acheter 5 licence pour vendre un produit exclusif",completed:!1,gain:5},{id:13,title:"Acheter 10 licence pour vendre un produit exclusif",completed:!1,gain:5},{id:14,title:"Ouvrir 1 boutique",completed:!1,gain:5},{id:15,title:"Ouvrir 2 boutique",completed:!1,gain:5},{id:16,title:"Ouvrir 3 boutique",completed:!1,gain:5},{id:17,title:"Ouvrir 5 boutique",completed:!1,gain:5},{id:18,title:"Avoir 1 super boutique",completed:!1,gain:5},{id:19,title:"Avoir 2 super boutiques",completed:!1,gain:5},{id:20,title:"Avoir 3 super boutiques",completed:!1,gain:5},{id:21,title:"Avoir 1 mega boutique",completed:!1,gain:5},{id:22,title:"Avoir 2 mega boutiques",completed:!1,gain:5},{id:23,title:"Avoir 3 mega boutiques",completed:!1,gain:5},{id:24,title:"Lancer 1 publicit\xe9",completed:!1,gain:5},{id:25,title:"Lancer 3 publicit\xe9",completed:!1,gain:5},{id:26,title:"Lancer 5 publicit\xe9",completed:!1,gain:5},{id:27,title:"Lancer 10 publicit\xe9",completed:!1,gain:5},{id:28,title:"Lancer 20 publicit\xe9",completed:!1,gain:5},{id:29,title:"Utiliser un influenceur 1 fois",completed:!1,gain:5},{id:30,title:"Utiliser un influenceur 3 fois",completed:!1,gain:5},{id:31,title:"Utiliser un influenceur 5 fois",completed:!1,gain:5},{id:32,title:"Utiliser un influenceur 10 fois",completed:!1,gain:5},{id:33,title:"Faire 1 super publicit\xe9",completed:!1,gain:5},{id:34,title:"Faire 5 super publicit\xe9s",completed:!1,gain:5},{id:35,title:"Faire 10 super publicit\xe9s",completed:!1,gain:5},{id:36,title:"Faire 1 publicit\xe9s iconique",completed:!1,gain:5},{id:37,title:"Faire 5 publicit\xe9s iconique",completed:!1,gain:5},{id:38,title:"Atteindre un b\xe9n\xe9fice de 200$ sur une journ\xe9e",completed:!1,gain:5},{id:39,title:"Atteindre un b\xe9n\xe9fice de 2000$ sur une journ\xe9e",completed:!1,gain:5},{id:40,title:"Atteindre un b\xe9n\xe9fice de 20000$ sur une journ\xe9e",completed:!1,gain:5},{id:41,title:"Atteindre un b\xe9n\xe9fice de 1000$ sur une semaine",completed:!1,gain:5},{id:42,title:"Atteindre un b\xe9n\xe9fice de 10000$ sur une semaine",completed:!1,gain:5},{id:43,title:"Atteindre un b\xe9n\xe9fice de 100000$ sur une semaine",completed:!1,gain:5},{id:44,title:"Atteindre un b\xe9n\xe9fice de 5000$ sur un mois",completed:!1,gain:5},{id:45,title:"Atteindre un b\xe9n\xe9fice de 50000$ sur un mois",completed:!1,gain:5},{id:46,title:"Atteindre un b\xe9n\xe9fice de 500000$ sur un mois",completed:!1,gain:5},{id:47,title:"G\xe9rer 1 incident",completed:!1,gain:5},{id:48,title:"G\xe9rer 3 incidents",completed:!1,gain:5},{id:49,title:"G\xe9rer 5 incidents",completed:!1,gain:5},{id:50,title:"G\xe9rer 10 incidents",completed:!1,gain:5},{id:51,title:"Atteindre 50 clients dans une journ\xe9e",completed:!1,gain:5},{id:52,title:"Atteindre 100 clients dans une journ\xe9e",completed:!1,gain:5},{id:53,title:"Atteindre 500 clients dans une journ\xe9e",completed:!1,gain:5},{id:54,title:"Atteindre 1000 clients dans une journ\xe9e",completed:!1,gain:5},{id:55,title:"Recruter 1 employ\xe9 pour une m\xeame boutique",completed:!1,gain:5},{id:56,title:"Recruter 3 employ\xe9 pour une m\xeame boutique",completed:!1,gain:5},{id:57,title:"Recruter 5 employ\xe9 pour une m\xeame boutique",completed:!1,gain:5},{id:58,title:"Recruter 10 employ\xe9 pour une m\xeame boutique",completed:!1,gain:5},{id:59,title:"Atteindre 1000 likes sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:60,title:"Atteindre 10000 likes sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:61,title:"Atteindre 50000 likes sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:62,title:"Atteindre 100000 likes sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:63,title:"Atteindre 500000 likes sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:64,title:"Atteindre 1000000 likes sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:65,title:"Atteindre 5000000 likes sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:66,title:"Atteindre 10000000 likes sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:67,title:"Atteindre 1000 followers  sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:68,title:"Atteindre 10000 followers  sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:69,title:"Atteindre 50000 followers  sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:70,title:"Atteindre 100000 followers  sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:71,title:"Atteindre 500000 followers  sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:72,title:"Atteindre 1000000 followers  sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:73,title:"Atteindre 5000000 followers  sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:74,title:"Atteindre 10000000 followers  sur les r\xe9seaux sociaux pour une boutique",completed:!1,gain:5},{id:75,title:"Lancer 1 publicit\xe9 \xe0 la t\xe9l\xe9vision",completed:!1,gain:5},{id:76,title:"Lancer 3 publicit\xe9s \xe0 la t\xe9l\xe9vision",completed:!1,gain:5},{id:77,title:"Lancer 5 publicit\xe9s \xe0 la t\xe9l\xe9vision",completed:!1,gain:5},{id:78,title:"Lancer 10 publicit\xe9s \xe0 la t\xe9l\xe9vision",completed:!1,gain:5},{id:79,title:"Ameliorer le temps de livraison 1 fois",completed:!1,gain:5},{id:80,title:"Ameliorer le temps de livraison 3 fois",completed:!1,gain:5},{id:81,title:"Ameliorer le temps de livraison 5 fois",completed:!1,gain:5},{id:82,title:"Ameliorer le temps de livraison 10 fois",completed:!1,gain:5},{id:83,title:"Ameliorer le packaging des produits 1 fois",completed:!1,gain:5},{id:84,title:"Ameliorer le packaging des produits 3 fois",completed:!1,gain:5},{id:85,title:"Ameliorer le packaging des produits 5 fois",completed:!1,gain:5},{id:86,title:"Ameliorer le packaging des produits 10 fois",completed:!1,gain:5},{id:87,title:"Ameliorer un employ\xe9 1 fois",completed:!1,gain:5},{id:88,title:"Ameliorer un employ\xe9 3 fois",completed:!1,gain:5},{id:89,title:"Ameliorer un employ\xe9 5 fois",completed:!1,gain:5},{id:90,title:"Ameliorer un employ\xe9 10 fois",completed:!1,gain:5},{id:91,title:"Avoir une moyenne parfaite sur 1 boutique",completed:!1,gain:5},{id:92,title:"Avoir une moyenne parfaite sur 3 boutiques",completed:!1,gain:5},{id:93,title:"Avoir une moyenne parfaite sur 5 boutiques",completed:!1,gain:5},{id:94,title:"Avoir une moyenne parfaite sur 10 boutiques",completed:!1}],reducers:{completeMission:function(e,t){var i=e.find((function(e){return e.id===t.payload}));i&&(i.completed=!0)}}});Ie.actions.completeMission;const Oe=Ie.reducer;const Ce=(0,h.createSlice)({name:"categories",initialState:[{id:1,title:"Mode"},{id:2,title:"Technologie"},{id:3,title:"Produit de beaut\xe9"},{id:4,title:"Jeux et jouet"},{id:5,title:"Animaux"},{id:6,title:"Aliment et boissons"},{id:7,title:"Sport"}]}).reducer,Ge=(0,h.configureStore)({reducer:{user:w,missions:Oe,produits:be,categories:Ce,shops:T}});var De=i(5911),ze=i(2061);function Re(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function Be(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(i),!0).forEach((function(t){(0,n.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Re(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}(0,o.enableScreens)();var Te=Be(Be({},De.DefaultTheme),{},{colors:Be(Be({},De.DefaultTheme.colors),{},{primary:"red",secondary:"blue"})});const Ve=function(){return(0,q.jsx)(c.Provider,{store:Ge,children:(0,q.jsx)(ze.default,{theme:Te,children:(0,q.jsx)(ke,{})})})}},2070:(e,t,i)=>{e.exports=i.p+"static/media/ForestWalk-320bit.5b409f7611748171c144.mp3"},9765:(e,t,i)=>{e.exports=i.p+"static/media/error_click.71b478d4677efb78b293.wav"},1873:(e,t,i)=>{e.exports=i.p+"static/media/shining.f3c0cbe2d764da102012.wav"},1285:(e,t,i)=>{e.exports=i.p+"static/media/simple_click.91940e3f5c0dacec1c6c.wav"}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,i),o.exports}i.m=e,(()=>{var e=[];i.O=(t,n,r,o)=>{if(!n){var l=1/0;for(s=0;s<e.length;s++){for(var[n,r,o]=e[s],a=!0,u=0;u<n.length;u++)(!1&o||l>=o)&&Object.keys(i.O).every((e=>i.O[e](n[u])))?n.splice(u--,1):(a=!1,o<l&&(l=o));if(a){e.splice(s--,1);var d=r();void 0!==d&&(t=d)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[n,r,o]}})(),i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;i.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var o=Object.create(null);i.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>l[e]=()=>n[e]));return l.default=()=>n,i.d(o,l),o}})(),i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/ecom/",(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[l,a,u]=n,d=0;if(l.some((t=>0!==e[t]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(u)var s=u(i)}for(t&&t(n);d<l.length;d++)o=l[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(s)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=i.O(void 0,[137],(()=>i(9386)));n=i.O(n)})();
//# sourceMappingURL=main.05a472da.js.map