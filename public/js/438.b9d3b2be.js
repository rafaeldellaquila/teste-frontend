"use strict";(self["webpackChunkpokedex"]=self["webpackChunkpokedex"]||[]).push([[438],{9438:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var a=o(3673);const n={class:"full-width"};function s(e,t,o,s,l,c){const r=(0,a.up)("q-icon"),i=(0,a.up)("q-input"),m=(0,a.up)("PokemonCard"),p=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(p,{class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a._)("section",n,[(0,a.Wm)(i,{dense:"",standout:"","bg-color":"accent",color:"lightDark","label-color":"white",modelValue:e.searchValue,"onUpdate:modelValue":t[1]||(t[1]=t=>e.searchValue=t),"input-class":"text-left",class:"q-ml-md q-ma-md",label:"Procure um  Pokemon aqui"},{append:(0,a.w5)((()=>[""===e.searchValue?((0,a.wg)(),(0,a.j4)(r,{key:0,name:"search",color:"white"})):((0,a.wg)(),(0,a.j4)(r,{key:1,color:"white",name:"clear",class:"cursor-pointer",onClick:t[0]||(t[0]=t=>e.searchValue="")}))])),_:1},8,["modelValue"])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.searchResult,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.name},[(0,a.Wm)(m,{name:t.name,url:t.url,onClick:o=>e.handleClick(t.name)},null,8,["name","url","onClick"])])))),128))])),_:1})}var l=o(2323);const c={class:"__title fit row no-wrap justify-start justify-between content-between items-center"},r={class:"text-h6 text-weight-bold"},i={class:"text-subtitle2 text-weight-bold"},m={class:"__types q-pt-none flex justify-start"};function p(e,t,o,n,s,p){const u=(0,a.up)("q-img"),d=(0,a.up)("q-card-section"),h=(0,a.up)("q-card");return(0,a.wg)(),(0,a.j4)(h,{class:"pokemon-card",id:e.pokemon.name,ref:e.pokemon.name},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{ratio:1,src:e.pokemon.photo,class:(0,l.C_)(["__photo",e.pokemon.color]),decoding:"async"},null,8,["src","class"]),(0,a.Wm)(d,{class:"__content"},{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a._)("h1",r,(0,l.zw)(this.name),1),(0,a._)("h2",i,"#"+(0,l.zw)(e.pokemon.id),1)]),(0,a._)("div",m,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pokemon.types,((e,t)=>((0,a.wg)(),(0,a.iD)("p",{key:t,class:(0,l.C_)(["__tag",e.type.name])},(0,l.zw)(e.type.name),3)))),128))])])),_:1})])),_:1},8,["id"])}const u=(0,a.aZ)({name:"PokemonCard",created:function(){this.$axios.get(this.url).then((e=>{this.pokemon.color=e.data.types[0].type.name,this.pokemon.types=e.data.types,this.pokemon.photo=e.data.sprites.front_default,this.pokemon.name=e.data.name,this.pokemon.id=e.data.id}))},data(){return{pokemon:{photo:"",name:"",id:"",color:"",types:[]}}},props:{name:String,url:String}});var d=o(4260),h=o(151),k=o(4027),w=o(5589),f=o(7518),g=o.n(f);const _=(0,d.Z)(u,[["render",p],["__scopeId","data-v-454a7c37"]]),y=_;g()(u,"components",{QCard:h.Z,QImg:k.Z,QCardSection:w.Z});const C=(0,a.aZ)({name:"PageIndex",components:{PokemonCard:y},data(){return{searchValue:"",pokemons:[]}},created:function(){this.$api.get("/pokemon?limit=151&offset=0").then((e=>{this.pokemons=e.data.results})).catch((e=>{console.log(e)}))},computed:{searchResult(){let e=this.pokemons;return" "!=this.searchValue&&this.searchValue&&(e=e.filter((e=>e.name.toLowerCase().includes(this.searchValue)))),e}},methods:{handleClick(e){console.log(e),this.$router.push({name:"Pokemon",params:{pokemonName:e}})}}});var x=o(4379),V=o(6112),b=o(4554);const q=(0,d.Z)(C,[["render",s]]),Z=q;g()(C,"components",{QPage:x.Z,QInput:V.Z,QIcon:b.Z})}}]);