/*! For license information please see 5611a06b.79ef6c50.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[560418],{451197:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(824246),r=n(511151);const s={id:"system-model",title:"System Model",description:"Documentation on System Model"},a=void 0,i={id:"features/software-catalog/system-model",title:"System Model",description:"Documentation on System Model",source:"@site/../docs/features/software-catalog/system-model.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/system-model",permalink:"/docs/features/software-catalog/system-model",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/system-model.md",tags:[],version:"current",frontMatter:{id:"system-model",title:"System Model",description:"Documentation on System Model"},sidebar:"docs",previous:{title:"Catalog Configuration",permalink:"/docs/features/software-catalog/configuration"},next:{title:"YAML File Format",permalink:"/docs/features/software-catalog/descriptor-format"}},c={},l=[{value:"Core Entities",id:"core-entities",level:2},{value:"Component",id:"component",level:3},{value:"API",id:"api",level:3},{value:"Resource",id:"resource",level:3},{value:"Organizational Entities",id:"organizational-entities",level:2},{value:"User",id:"user",level:3},{value:"Group",id:"group",level:3},{value:"Ecosystem Modeling",id:"ecosystem-modeling",level:2},{value:"System",id:"system",level:3},{value:"Domain",id:"domain",level:3},{value:"Other",id:"other",level:2},{value:"Location",id:"location",level:3},{value:"Type",id:"type",level:3},{value:"Template",id:"template",level:3}];function u(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"We believe that a strong shared understanding and terminology around software\nand resources leads to a better Backstage experience."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["This description originates from\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/390",children:"this RFC"}),". Note that some of\nthe concepts are not yet supported in Backstage."]})}),"\n",(0,o.jsx)(t.h2,{id:"core-entities",children:"Core Entities"}),"\n",(0,o.jsx)(t.p,{children:"We model software in the Backstage catalogue using these three core entities\n(further explained below):"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Components"})," are individual pieces of software"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"APIs"})," are the boundaries between different components"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Resources"})," are physical or virtual infrastructure needed to operate a\ncomponent"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(322939).Z+"",width:"740",height:"128"})}),"\n",(0,o.jsx)(t.h3,{id:"component",children:"Component"}),"\n",(0,o.jsx)(t.p,{children:"A component is a piece of software, for example a mobile feature, web site,\nbackend service or data pipeline (list not exhaustive). A component can be\ntracked in source control, or use some existing open source or commercial\nsoftware."}),"\n",(0,o.jsx)(t.p,{children:"A component can implement APIs for other components to consume. In turn it might\nconsume APIs implemented by other components, or directly depend on components or\nresources that are attached to it at runtime."}),"\n",(0,o.jsx)(t.h3,{id:"api",children:"API"}),"\n",(0,o.jsx)(t.p,{children:"APIs form an important (maybe the most important) abstraction that allows large\nsoftware ecosystems to scale. Thus, APIs are a first class citizen in the\nBackstage model and the primary way to discover existing functionality in the\necosystem."}),"\n",(0,o.jsx)(t.p,{children:"APIs are implemented by components and form boundaries between components. They\nmight be defined using an RPC IDL (e.g., Protobuf, GraphQL, ...), a data schema\n(e.g., Avro, TFRecord, ...), or as code interfaces. In any case, APIs exposed by\ncomponents need to be in a known machine-readable format so we can build further\ntooling and analysis on top."}),"\n",(0,o.jsx)(t.p,{children:"APIs have a visibility: they are either public (making them available for any\nother component to consume), restricted (only available to an allowlisted set of\nconsumers), or private (only available within their system). As public APIs are\ngoing to be the primary way interaction between components, Backstage supports\ndocumenting, indexing and searching all APIs so we can browse them as\ndevelopers."}),"\n",(0,o.jsx)(t.h3,{id:"resource",children:"Resource"}),"\n",(0,o.jsx)(t.p,{children:"Resources are the infrastructure a component needs to operate at runtime, like\nBigTable databases, Pub/Sub topics, S3 buckets or CDNs. Modelling them together\nwith components and systems will better allow us to visualize resource\nfootprint, and create tooling around them."}),"\n",(0,o.jsx)(t.h2,{id:"organizational-entities",children:"Organizational Entities"}),"\n",(0,o.jsx)(t.h3,{id:"user",children:"User"}),"\n",(0,o.jsx)(t.p,{children:"A user describes a person, such as an employee, a contractor, or similar."}),"\n",(0,o.jsx)(t.h3,{id:"group",children:"Group"}),"\n",(0,o.jsx)(t.p,{children:"A group describes an organizational entity, such as for example a team, a\nbusiness unit, or a loose collection of people in an interest group."}),"\n",(0,o.jsx)(t.h2,{id:"ecosystem-modeling",children:"Ecosystem Modeling"}),"\n",(0,o.jsx)(t.p,{children:"A large catalogue of components, APIs and resources can be highly granular and\nhard to understand as a whole. It might thus be convenient to further categorize\nthese entities using the following (optional) concepts:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Systems"})," are a collection of entities that cooperate to perform some\nfunction"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Domains"})," relate entities and systems to part of the business"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(765326).Z+"",width:"802",height:"854"})}),"\n",(0,o.jsx)(t.h3,{id:"system",children:"System"}),"\n",(0,o.jsx)(t.p,{children:"With increasing complexity in software, systems form an important abstraction\nlevel to help us reason about software ecosystems. Systems are a useful concept\nin that they allow us to ignore the implementation details of a certain\nfunctionality for consumers, while allowing the owning team to make changes as\nthey see fit (leading to low coupling)."}),"\n",(0,o.jsx)(t.p,{children:"A system, in this sense, is a collection of resources and components that\nexposes one or several public APIs. The main benefit of modelling a system is\nthat it hides its resources and private APIs between the components for any\nconsumers. This means that as the owner, you can evolve the implementation, in\nterms of components and resources, without your consumers being able to notice.\nTypically, a system will consist of at most a handful of components (see Domain\nfor a grouping of systems)."}),"\n",(0,o.jsx)(t.p,{children:"For example, a playlist management system might encapsulate a backend service to\nupdate playlists, a backend service to query them, and a database to store them.\nIt could expose an RPC API, a daily snapshots dataset, and an event stream of\nplaylist updates."}),"\n",(0,o.jsx)(t.h3,{id:"domain",children:"Domain"}),"\n",(0,o.jsx)(t.p,{children:"While systems are the basic level of encapsulation for related entities, it is\noften useful to group a collection of systems that share terminology, domain\nmodels, metrics, KPIs, business purpose, or documentation, i.e. they form a\nbounded context."}),"\n",(0,o.jsx)(t.p,{children:"For example, it would make sense if the different systems in the \u201cPayments\u201d\ndomain would come with some documentation on how to accept payments for a new\nproduct or use-case, share the same entity types in their APIs, and integrate\nwell with each other. Other domains could be \u201cContent Ingestion\u201d, \u201cAds\u201d or\n\u201cSearch\u201d."}),"\n",(0,o.jsx)(t.p,{children:"In case of a large organization, it might make sense to further group domains\nin a hierarchy, where a domain can be a subdomain of another domain."}),"\n",(0,o.jsx)(t.h2,{id:"other",children:"Other"}),"\n",(0,o.jsx)(t.h3,{id:"location",children:"Location"}),"\n",(0,o.jsx)(t.p,{children:"A location is a marker that references other places to look for catalog data."}),"\n",(0,o.jsx)(t.h3,{id:"type",children:"Type"}),"\n",(0,o.jsxs)(t.p,{children:["The type field in the system has no set meaning. It is up to the user to assign their own types and use them as desired, such as for link validation or creating custom UI components. Some common pre-defined types are depicted in the\n",(0,o.jsx)(t.a,{href:"#ecosystem-modeling",children:"ecosystem modeling diagram"}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"template",children:"Template"}),"\n",(0,o.jsx)(t.p,{children:"A template definition describes both the parameters that are rendered in the\nfrontend part of the scaffolding wizard, and the steps that are executed when\nscaffolding that component."})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},322939:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/software-model-core-entities.drawio-51a40db7ca2e0d0026d99f519657677f.svg"},765326:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/software-model-entities.drawio-3ce7f43dd236c3934209fde8f21a4d9e.svg"},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,s={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:u,props:s,_owner:i.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var x=v.prototype=new b;x.constructor=v,h(x,g.prototype),x.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,_={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,o){var r,s={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)j.call(t,r)&&!k.hasOwnProperty(r)&&(s[r]=t[r]);var c=arguments.length-2;if(1===c)s.children=o;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===s[r]&&(s[r]=c[r]);return{$$typeof:n,type:e,key:a,ref:i,props:s,_owner:_.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var I=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,r,s,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return a=a(c=e),e=""===s?"."+C(c,0):s,w(a)?(r="",null!=e&&(r=e.replace(I,"$&/")+"/"),A(a,t,r,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(I,"$&/")+"/")+e)),t.push(a)),1;if(c=0,s=""===s?".":s+":",w(e))for(var l=0;l<e.length;l++){var u=s+C(i=e[l],l);c+=A(i,t,r,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=A(i=i.value,t,r,u=s+C(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function E(e,t,n){if(null==e)return e;var o=[],r=0;return A(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},$={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:_};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=r,t.Profiler=a,t.PureComponent=v,t.StrictMode=s,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=h({},e.props),s=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=_.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)j.call(t,l)&&!k.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:n,type:e.type,key:s,ref:a,props:r,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(667294);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);