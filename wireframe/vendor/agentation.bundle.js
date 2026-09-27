(()=>{var J5=Object.create;var Nh=Object.defineProperty;var e2=Object.getOwnPropertyDescriptor;var t2=Object.getOwnPropertyNames;var n2=Object.getPrototypeOf,l2=Object.prototype.hasOwnProperty;var $l=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var o2=(e,t,n,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of t2(t))!l2.call(e,o)&&o!==n&&Nh(e,o,{get:()=>t[o],enumerable:!(l=e2(t,o))||l.enumerable});return e};var Ce=(e,t,n)=>(n=e!=null?J5(n2(e)):{},o2(t||!e||!e.__esModule?Nh(n,"default",{value:e,enumerable:!0}):n,e));var Yh=$l(Bt=>{"use strict";function kd(e,t){var n=e.length;e.push(t);e:for(;0<n;){var l=n-1>>>1,o=e[l];if(0<Vs(o,t))e[l]=t,e[n]=o,n=l;else break e}}function Hl(e){return e.length===0?null:e[0]}function Zs(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var l=0,o=e.length,a=o>>>1;l<a;){var i=2*(l+1)-1,r=e[i],s=i+1,d=e[s];if(0>Vs(r,n))s<o&&0>Vs(d,r)?(e[l]=d,e[s]=n,l=s):(e[l]=r,e[i]=n,l=i);else if(s<o&&0>Vs(d,n))e[l]=d,e[s]=n,l=s;else break e}}return t}function Vs(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Bt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Dh=performance,Bt.unstable_now=function(){return Dh.now()}):(xd=Date,Ah=xd.now(),Bt.unstable_now=function(){return xd.now()-Ah});var Dh,xd,Ah,eo=[],ko=[],a2=1,_l=null,Sn=3,Sd=!1,cr=!1,ur=!1,Cd=!1,zh=typeof setTimeout=="function"?setTimeout:null,Bh=typeof clearTimeout=="function"?clearTimeout:null,Lh=typeof setImmediate!="undefined"?setImmediate:null;function Fs(e){for(var t=Hl(ko);t!==null;){if(t.callback===null)Zs(ko);else if(t.startTime<=e)Zs(ko),t.sortIndex=t.expirationTime,kd(eo,t);else break;t=Hl(ko)}}function Md(e){if(ur=!1,Fs(e),!cr)if(Hl(eo)!==null)cr=!0,Za||(Za=!0,Fa());else{var t=Hl(ko);t!==null&&Ed(Md,t.startTime-e)}}var Za=!1,dr=-1,$h=5,Hh=-1;function Uh(){return Cd?!0:!(Bt.unstable_now()-Hh<$h)}function vd(){if(Cd=!1,Za){var e=Bt.unstable_now();Hh=e;var t=!0;try{e:{cr=!1,ur&&(ur=!1,Bh(dr),dr=-1),Sd=!0;var n=Sn;try{t:{for(Fs(e),_l=Hl(eo);_l!==null&&!(_l.expirationTime>e&&Uh());){var l=_l.callback;if(typeof l=="function"){_l.callback=null,Sn=_l.priorityLevel;var o=l(_l.expirationTime<=e);if(e=Bt.unstable_now(),typeof o=="function"){_l.callback=o,Fs(e),t=!0;break t}_l===Hl(eo)&&Zs(eo),Fs(e)}else Zs(eo);_l=Hl(eo)}if(_l!==null)t=!0;else{var a=Hl(ko);a!==null&&Ed(Md,a.startTime-e),t=!1}}break e}finally{_l=null,Sn=n,Sd=!1}t=void 0}}finally{t?Fa():Za=!1}}}var Fa;typeof Lh=="function"?Fa=function(){Lh(vd)}:typeof MessageChannel!="undefined"?(wd=new MessageChannel,Oh=wd.port2,wd.port1.onmessage=vd,Fa=function(){Oh.postMessage(null)}):Fa=function(){zh(vd,0)};var wd,Oh;function Ed(e,t){dr=zh(function(){e(Bt.unstable_now())},t)}Bt.unstable_IdlePriority=5;Bt.unstable_ImmediatePriority=1;Bt.unstable_LowPriority=4;Bt.unstable_NormalPriority=3;Bt.unstable_Profiling=null;Bt.unstable_UserBlockingPriority=2;Bt.unstable_cancelCallback=function(e){e.callback=null};Bt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$h=0<e?Math.floor(1e3/e):5};Bt.unstable_getCurrentPriorityLevel=function(){return Sn};Bt.unstable_next=function(e){switch(Sn){case 1:case 2:case 3:var t=3;break;default:t=Sn}var n=Sn;Sn=t;try{return e()}finally{Sn=n}};Bt.unstable_requestPaint=function(){Cd=!0};Bt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Sn;Sn=e;try{return t()}finally{Sn=n}};Bt.unstable_scheduleCallback=function(e,t,n){var l=Bt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?l+n:l):n=l,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:a2++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>l?(e.sortIndex=n,kd(ko,e),Hl(eo)===null&&e===Hl(ko)&&(ur?(Bh(dr),dr=-1):ur=!0,Ed(Md,n-l))):(e.sortIndex=o,kd(eo,e),cr||Sd||(cr=!0,Za||(Za=!0,Fa()))),e};Bt.unstable_shouldYield=Uh;Bt.unstable_wrapCallback=function(e){var t=Sn;return function(){var n=Sn;Sn=t;try{return e.apply(this,arguments)}finally{Sn=n}}}});var Xh=$l((B6,jh)=>{"use strict";jh.exports=Yh()});var em=$l($e=>{"use strict";var Rd=Symbol.for("react.transitional.element"),i2=Symbol.for("react.portal"),r2=Symbol.for("react.fragment"),s2=Symbol.for("react.strict_mode"),c2=Symbol.for("react.profiler"),u2=Symbol.for("react.consumer"),d2=Symbol.for("react.context"),_2=Symbol.for("react.forward_ref"),f2=Symbol.for("react.suspense"),h2=Symbol.for("react.memo"),Vh=Symbol.for("react.lazy"),qh=Symbol.iterator;function m2(e){return e===null||typeof e!="object"?null:(e=qh&&e[qh]||e["@@iterator"],typeof e=="function"?e:null)}var Fh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zh=Object.assign,Kh={};function Pa(e,t,n){this.props=e,this.context=t,this.refs=Kh,this.updater=n||Fh}Pa.prototype.isReactComponent={};Pa.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ph(){}Ph.prototype=Pa.prototype;function Nd(e,t,n){this.props=e,this.context=t,this.refs=Kh,this.updater=n||Fh}var Dd=Nd.prototype=new Ph;Dd.constructor=Nd;Zh(Dd,Pa.prototype);Dd.isPureReactComponent=!0;var Wh=Array.isArray,$t={H:null,A:null,T:null,S:null,V:null},Jh=Object.prototype.hasOwnProperty;function Ad(e,t,n,l,o,a){return n=a.ref,{$$typeof:Rd,type:e,key:t,ref:n!==void 0?n:null,props:a}}function g2(e,t){return Ad(e.type,t,void 0,void 0,void 0,e.props)}function Ld(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rd}function p2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ih=/\/+/g;function Td(e,t){return typeof e=="object"&&e!==null&&e.key!=null?p2(""+e.key):t.toString(36)}function Qh(){}function y2(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Qh,Qh):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Ka(e,t,n,l,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"bigint":case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Rd:case i2:i=!0;break;case Vh:return i=e._init,Ka(i(e._payload),t,n,l,o)}}if(i)return o=o(e),i=l===""?"."+Td(e,0):l,Wh(o)?(n="",i!=null&&(n=i.replace(Ih,"$&/")+"/"),Ka(o,t,n,"",function(d){return d})):o!=null&&(Ld(o)&&(o=g2(o,n+(o.key==null||e&&e.key===o.key?"":(""+o.key).replace(Ih,"$&/")+"/")+i)),t.push(o)),1;i=0;var r=l===""?".":l+":";if(Wh(e))for(var s=0;s<e.length;s++)l=e[s],a=r+Td(l,s),i+=Ka(l,t,n,a,o);else if(s=m2(e),typeof s=="function")for(e=s.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Td(l,s++),i+=Ka(l,t,n,a,o);else if(a==="object"){if(typeof e.then=="function")return Ka(y2(e),t,n,l,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return i}function Ks(e,t,n){if(e==null)return e;var l=[],o=0;return Ka(e,l,"","",function(a){return t.call(n,a,o++)}),l}function b2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Gh=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function x2(){}$e.Children={map:Ks,forEach:function(e,t,n){Ks(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ks(e,function(){t++}),t},toArray:function(e){return Ks(e,function(t){return t})||[]},only:function(e){if(!Ld(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$e.Component=Pa;$e.Fragment=r2;$e.Profiler=c2;$e.PureComponent=Nd;$e.StrictMode=s2;$e.Suspense=f2;$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$t;$e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return $t.H.useMemoCache(e)}};$e.cache=function(e){return function(){return e.apply(null,arguments)}};$e.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=Zh({},e.props),o=e.key,a=void 0;if(t!=null)for(i in t.ref!==void 0&&(a=void 0),t.key!==void 0&&(o=""+t.key),t)!Jh.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(l[i]=t[i]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var r=Array(i),s=0;s<i;s++)r[s]=arguments[s+2];l.children=r}return Ad(e.type,o,void 0,void 0,a,l)};$e.createContext=function(e){return e={$$typeof:d2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:u2,_context:e},e};$e.createElement=function(e,t,n){var l,o={},a=null;if(t!=null)for(l in t.key!==void 0&&(a=""+t.key),t)Jh.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(o[l]=t[l]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var r=Array(i),s=0;s<i;s++)r[s]=arguments[s+2];o.children=r}if(e&&e.defaultProps)for(l in i=e.defaultProps,i)o[l]===void 0&&(o[l]=i[l]);return Ad(e,a,void 0,void 0,null,o)};$e.createRef=function(){return{current:null}};$e.forwardRef=function(e){return{$$typeof:_2,render:e}};$e.isValidElement=Ld;$e.lazy=function(e){return{$$typeof:Vh,_payload:{_status:-1,_result:e},_init:b2}};$e.memo=function(e,t){return{$$typeof:h2,type:e,compare:t===void 0?null:t}};$e.startTransition=function(e){var t=$t.T,n={};$t.T=n;try{var l=e(),o=$t.S;o!==null&&o(n,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(x2,Gh)}catch(a){Gh(a)}finally{$t.T=t}};$e.unstable_useCacheRefresh=function(){return $t.H.useCacheRefresh()};$e.use=function(e){return $t.H.use(e)};$e.useActionState=function(e,t,n){return $t.H.useActionState(e,t,n)};$e.useCallback=function(e,t){return $t.H.useCallback(e,t)};$e.useContext=function(e){return $t.H.useContext(e)};$e.useDebugValue=function(){};$e.useDeferredValue=function(e,t){return $t.H.useDeferredValue(e,t)};$e.useEffect=function(e,t,n){var l=$t.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return l.useEffect(e,t)};$e.useId=function(){return $t.H.useId()};$e.useImperativeHandle=function(e,t,n){return $t.H.useImperativeHandle(e,t,n)};$e.useInsertionEffect=function(e,t){return $t.H.useInsertionEffect(e,t)};$e.useLayoutEffect=function(e,t){return $t.H.useLayoutEffect(e,t)};$e.useMemo=function(e,t){return $t.H.useMemo(e,t)};$e.useOptimistic=function(e,t){return $t.H.useOptimistic(e,t)};$e.useReducer=function(e,t,n){return $t.H.useReducer(e,t,n)};$e.useRef=function(e){return $t.H.useRef(e)};$e.useState=function(e){return $t.H.useState(e)};$e.useSyncExternalStore=function(e,t,n){return $t.H.useSyncExternalStore(e,t,n)};$e.useTransition=function(){return $t.H.useTransition()};$e.version="19.1.1"});var Ht=$l((H6,tm)=>{"use strict";tm.exports=em()});var lm=$l(On=>{"use strict";var v2=Ht();function nm(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function So(){}var Ln={d:{f:So,r:function(){throw Error(nm(522))},D:So,C:So,L:So,m:So,X:So,S:So,M:So},p:0,findDOMNode:null},w2=Symbol.for("react.portal");function k2(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w2,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}var _r=v2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ps(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ln;On.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(nm(299));return k2(e,t,null,n)};On.flushSync=function(e){var t=_r.T,n=Ln.p;try{if(_r.T=null,Ln.p=2,e)return e()}finally{_r.T=t,Ln.p=n,Ln.d.f()}};On.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ln.d.C(e,t))};On.prefetchDNS=function(e){typeof e=="string"&&Ln.d.D(e)};On.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,l=Ps(n,t.crossOrigin),o=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Ln.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:o,fetchPriority:a}):n==="script"&&Ln.d.X(e,{crossOrigin:l,integrity:o,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};On.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Ps(t.as,t.crossOrigin);Ln.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ln.d.M(e)};On.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,l=Ps(n,t.crossOrigin);Ln.d.L(e,n,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};On.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Ps(t.as,t.crossOrigin);Ln.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ln.d.m(e)};On.requestFormReset=function(e){Ln.d.r(e)};On.unstable_batchedUpdates=function(e,t){return e(t)};On.useFormState=function(e,t,n){return _r.H.useFormState(e,t,n)};On.useFormStatus=function(){return _r.H.useHostTransitionStatus()};On.version="19.1.1"});var fr=$l((Y6,am)=>{"use strict";function om(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(om)}catch(e){console.error(e)}}om(),am.exports=lm()});var ry=$l(xu=>{"use strict";var an=Xh(),E1=Ht(),S2=fr();function q(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T1(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function es(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function R1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function im(e){if(es(e)!==e)throw Error(q(188))}function C2(e){var t=e.alternate;if(!t){if(t=es(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,l=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(l=o.return,l!==null){n=l;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return im(o),e;if(a===l)return im(o),t;a=a.sibling}throw Error(q(188))}if(n.return!==l.return)n=o,l=a;else{for(var i=!1,r=o.child;r;){if(r===n){i=!0,n=o,l=a;break}if(r===l){i=!0,l=o,n=a;break}r=r.sibling}if(!i){for(r=a.child;r;){if(r===n){i=!0,n=a,l=o;break}if(r===l){i=!0,l=a,n=o;break}r=r.sibling}if(!i)throw Error(q(189))}}if(n.alternate!==l)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function N1(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=N1(e),t!==null)return t;e=e.sibling}return null}var Lt=Object.assign,M2=Symbol.for("react.element"),Js=Symbol.for("react.transitional.element"),wr=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),D1=Symbol.for("react.strict_mode"),d_=Symbol.for("react.profiler"),E2=Symbol.for("react.provider"),A1=Symbol.for("react.consumer"),ao=Symbol.for("react.context"),rf=Symbol.for("react.forward_ref"),__=Symbol.for("react.suspense"),f_=Symbol.for("react.suspense_list"),sf=Symbol.for("react.memo"),Eo=Symbol.for("react.lazy");Symbol.for("react.scope");var h_=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var T2=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var rm=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=rm&&e[rm]||e["@@iterator"],typeof e=="function"?e:null)}var R2=Symbol.for("react.client.reference");function m_(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R2?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ai:return"Fragment";case d_:return"Profiler";case D1:return"StrictMode";case __:return"Suspense";case f_:return"SuspenseList";case h_:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case wr:return"Portal";case ao:return(e.displayName||"Context")+".Provider";case A1:return(e._context.displayName||"Context")+".Consumer";case rf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case sf:return t=e.displayName||null,t!==null?t:m_(e.type)||"Memo";case Eo:t=e._payload,e=e._init;try{return m_(e(t))}catch{}}return null}var kr=Array.isArray,we=E1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ut=S2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pa={pending:!1,data:null,method:null,action:null},g_=[],ii=-1;function Il(e){return{current:e}}function un(e){0>ii||(e.current=g_[ii],g_[ii]=null,ii--)}function Yt(e,t){ii++,g_[ii]=e.current,e.current=t}var Xl=Il(null),Yr=Il(null),$o=Il(null),Rc=Il(null);function Nc(e,t){switch(Yt($o,t),Yt(Yr,e),Yt(Xl,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?f1(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=f1(t),e=Fp(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}un(Xl),Yt(Xl,e)}function Ci(){un(Xl),un(Yr),un($o)}function p_(e){e.memoizedState!==null&&Yt(Rc,e);var t=Xl.current,n=Fp(t,e.type);t!==n&&(Yt(Yr,e),Yt(Xl,n))}function Dc(e){Yr.current===e&&(un(Xl),un(Yr)),Rc.current===e&&(un(Rc),Zr._currentValue=pa)}var y_=Object.prototype.hasOwnProperty,cf=an.unstable_scheduleCallback,Od=an.unstable_cancelCallback,N2=an.unstable_shouldYield,D2=an.unstable_requestPaint,ql=an.unstable_now,A2=an.unstable_getCurrentPriorityLevel,L1=an.unstable_ImmediatePriority,O1=an.unstable_UserBlockingPriority,Ac=an.unstable_NormalPriority,L2=an.unstable_LowPriority,z1=an.unstable_IdlePriority,O2=an.log,z2=an.unstable_setDisableYieldValue,ts=null,el=null;function Lo(e){if(typeof O2=="function"&&z2(e),el&&typeof el.setStrictMode=="function")try{el.setStrictMode(ts,e)}catch{}}var tl=Math.clz32?Math.clz32:H2,B2=Math.log,$2=Math.LN2;function H2(e){return e>>>=0,e===0?32:31-(B2(e)/$2|0)|0}var ec=256,tc=4194304;function ha(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function au(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var o=0,a=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~a,l!==0?o=ha(l):(i&=r,i!==0?o=ha(i):n||(n=r&~e,n!==0&&(o=ha(n))))):(r=l&~a,r!==0?o=ha(r):i!==0?o=ha(i):n||(n=l&~e,n!==0&&(o=ha(n)))),o===0?0:t!==0&&t!==o&&(t&a)===0&&(a=o&-o,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:o}function ns(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function U2(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B1(){var e=ec;return ec<<=1,(ec&4194048)===0&&(ec=256),e}function $1(){var e=tc;return tc<<=1,(tc&62914560)===0&&(tc=4194304),e}function zd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ls(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Y2(e,t,n,l,o,a){var i=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var r=e.entanglements,s=e.expirationTimes,d=e.hiddenUpdates;for(n=i&~n;0<n;){var g=31-tl(n),h=1<<g;r[g]=0,s[g]=-1;var _=d[g];if(_!==null)for(d[g]=null,g=0;g<_.length;g++){var p=_[g];p!==null&&(p.lane&=-536870913)}n&=~h}l!==0&&H1(e,l,0),a!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=a&~(i&~t))}function H1(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-tl(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&4194090}function U1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-tl(n),o=1<<l;o&t|e[l]&t&&(e[l]|=t),n&=~o}}function uf(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function df(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Y1(){var e=ut.p;return e!==0?e:(e=window.event,e===void 0?32:ay(e.type))}function j2(e,t){var n=ut.p;try{return ut.p=e,t()}finally{ut.p=n}}var Vo=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Vo,qn="__reactProps$"+Vo,Bi="__reactContainer$"+Vo,b_="__reactEvents$"+Vo,X2="__reactListeners$"+Vo,q2="__reactHandles$"+Vo,sm="__reactResources$"+Vo,os="__reactMarker$"+Vo;function _f(e){delete e[Cn],delete e[qn],delete e[b_],delete e[X2],delete e[q2]}function ri(e){var t=e[Cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bi]||n[Cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=g1(e);e!==null;){if(n=e[Cn])return n;e=g1(e)}return t}e=n,n=e.parentNode}return null}function $i(e){if(e=e[Cn]||e[Bi]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Sr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(q(33))}function pi(e){var t=e[sm];return t||(t=e[sm]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function sn(e){e[os]=!0}var j1=new Set,X1={};function Ta(e,t){Mi(e,t),Mi(e+"Capture",t)}function Mi(e,t){for(X1[e]=t,e=0;e<t.length;e++)j1.add(t[e])}var W2=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cm={},um={};function I2(e){return y_.call(um,e)?!0:y_.call(cm,e)?!1:W2.test(e)?um[e]=!0:(cm[e]=!0,!1)}function gc(e,t,n){if(I2(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function nc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function to(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}var Bd,dm;function ni(e){if(Bd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Bd=t&&t[1]||"",dm=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Bd+e+dm}var $d=!1;function Hd(e,t){if(!e||$d)return"";$d=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var _=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){_=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){_=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&_&&typeof p.stack=="string")return[p.stack,_.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=l.DetermineComponentFrameRoot(),i=a[0],r=a[1];if(i&&r){var s=i.split(`
`),d=r.split(`
`);for(o=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;o<d.length&&!d[o].includes("DetermineComponentFrameRoot");)o++;if(l===s.length||o===d.length)for(l=s.length-1,o=d.length-1;1<=l&&0<=o&&s[l]!==d[o];)o--;for(;1<=l&&0<=o;l--,o--)if(s[l]!==d[o]){if(l!==1||o!==1)do if(l--,o--,0>o||s[l]!==d[o]){var g=`
`+s[l].replace(" at new "," at ");return e.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",e.displayName)),g}while(1<=l&&0<=o);break}}}finally{$d=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ni(n):""}function Q2(e){switch(e.tag){case 26:case 27:case 5:return ni(e.type);case 16:return ni("Lazy");case 13:return ni("Suspense");case 19:return ni("SuspenseList");case 0:case 15:return Hd(e.type,!1);case 11:return Hd(e.type.render,!1);case 1:return Hd(e.type,!0);case 31:return ni("Activity");default:return""}}function _m(e){try{var t="";do t+=Q2(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function hl(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function q1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G2(e){var t=q1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){l=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lc(e){e._valueTracker||(e._valueTracker=G2(e))}function W1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=q1(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Oc(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}var V2=/[\n"\\]/g;function pl(e){return e.replace(V2,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function x_(e,t,n,l,o,a,i,r){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),t!=null?i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+hl(t)):e.value!==""+hl(t)&&(e.value=""+hl(t)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),t!=null?v_(e,i,hl(t)):n!=null?v_(e,i,hl(n)):l!=null&&e.removeAttribute("value"),o==null&&a!=null&&(e.defaultChecked=!!a),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+hl(r):e.removeAttribute("name")}function I1(e,t,n,l,o,a,i,r){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null))return;n=n!=null?""+hl(n):"",t=t!=null?""+hl(t):n,r||t===e.value||(e.value=t),e.defaultValue=t}l=l!=null?l:o,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i)}function v_(e,t,n){t==="number"&&Oc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yi(e,t,n,l){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&l&&(e[n].defaultSelected=!0)}else{for(n=""+hl(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,l&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Q1(e,t,n){if(t!=null&&(t=""+hl(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+hl(n):""}function G1(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(q(92));if(kr(l)){if(1<l.length)throw Error(q(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=hl(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l)}function Ei(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var F2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function fm(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||F2.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function V1(e,t,n){if(t!=null&&typeof t!="object")throw Error(q(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var o in t)l=t[o],t.hasOwnProperty(o)&&n[o]!==l&&fm(e,o,l)}else for(var a in t)t.hasOwnProperty(a)&&fm(e,a,t[a])}function ff(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Z2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),K2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pc(e){return K2.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var w_=null;function hf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var si=null,bi=null;function hm(e){var t=$i(e);if(t&&(e=t.stateNode)){var n=e[qn]||null;e:switch(e=t.stateNode,t.type){case"input":if(x_(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+pl(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var o=l[qn]||null;if(!o)throw Error(q(90));x_(l,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&W1(l)}break e;case"textarea":Q1(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&yi(e,!!n.multiple,t,!1)}}}var Ud=!1;function F1(e,t,n){if(Ud)return e(t,n);Ud=!0;try{var l=e(t);return l}finally{if(Ud=!1,(si!==null||bi!==null)&&(mu(),si&&(t=si,e=bi,bi=si=null,hm(t),e)))for(t=0;t<e.length;t++)hm(e[t])}}function jr(e,t){var n=e.stateNode;if(n===null)return null;var l=n[qn]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var fo=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),k_=!1;if(fo)try{Ja={},Object.defineProperty(Ja,"passive",{get:function(){k_=!0}}),window.addEventListener("test",Ja,Ja),window.removeEventListener("test",Ja,Ja)}catch{k_=!1}var Ja,Oo=null,mf=null,yc=null;function Z1(){if(yc)return yc;var e,t=mf,n=t.length,l,o="value"in Oo?Oo.value:Oo.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(l=1;l<=i&&t[n-l]===o[a-l];l++);return yc=o.slice(e,1<l?1-l:void 0)}function bc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lc(){return!0}function mm(){return!1}function Wn(e){function t(n,l,o,a,i){this._reactName=n,this._targetInst=o,this.type=l,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(a):a[r]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?lc:mm,this.isPropagationStopped=mm,this}return Lt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lc)},persist:function(){},isPersistent:lc}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Wn(Ra),as=Lt({},Ra,{view:0,detail:0}),P2=Wn(as),Yd,jd,mr,ru=Lt({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mr&&(mr&&e.type==="mousemove"?(Yd=e.screenX-mr.screenX,jd=e.screenY-mr.screenY):jd=Yd=0,mr=e),Yd)},movementY:function(e){return"movementY"in e?e.movementY:jd}}),gm=Wn(ru),J2=Lt({},ru,{dataTransfer:0}),eb=Wn(J2),tb=Lt({},as,{relatedTarget:0}),Xd=Wn(tb),nb=Lt({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),lb=Wn(nb),ob=Lt({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ab=Wn(ob),ib=Lt({},Ra,{data:0}),pm=Wn(ib),rb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ub(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cb[e])?!!t[e]:!1}function gf(){return ub}var db=Lt({},as,{key:function(e){if(e.key){var t=rb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(e){return e.type==="keypress"?bc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_b=Wn(db),fb=Lt({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ym=Wn(fb),hb=Lt({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),mb=Wn(hb),gb=Lt({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),pb=Wn(gb),yb=Lt({},ru,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bb=Wn(yb),xb=Lt({},Ra,{newState:0,oldState:0}),vb=Wn(xb),wb=[9,13,27,32],pf=fo&&"CompositionEvent"in window,Mr=null;fo&&"documentMode"in document&&(Mr=document.documentMode);var kb=fo&&"TextEvent"in window&&!Mr,K1=fo&&(!pf||Mr&&8<Mr&&11>=Mr),bm=" ",xm=!1;function P1(e,t){switch(e){case"keyup":return wb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ci=!1;function Sb(e,t){switch(e){case"compositionend":return J1(t);case"keypress":return t.which!==32?null:(xm=!0,bm);case"textInput":return e=t.data,e===bm&&xm?null:e;default:return null}}function Cb(e,t){if(ci)return e==="compositionend"||!pf&&P1(e,t)?(e=Z1(),yc=mf=Oo=null,ci=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return K1&&t.locale!=="ko"?null:t.data;default:return null}}var Mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Mb[e.type]:t==="textarea"}function eg(e,t,n,l){si?bi?bi.push(l):bi=[l]:si=l,t=Pc(t,"onChange"),0<t.length&&(n=new iu("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var Er=null,Xr=null;function Eb(e){Qp(e,0)}function su(e){var t=Sr(e);if(W1(t))return e}function wm(e,t){if(e==="change")return t}var tg=!1;fo&&(fo?(ac="oninput"in document,ac||(qd=document.createElement("div"),qd.setAttribute("oninput","return;"),ac=typeof qd.oninput=="function"),oc=ac):oc=!1,tg=oc&&(!document.documentMode||9<document.documentMode));var oc,ac,qd;function km(){Er&&(Er.detachEvent("onpropertychange",ng),Xr=Er=null)}function ng(e){if(e.propertyName==="value"&&su(Xr)){var t=[];eg(t,Xr,e,hf(e)),F1(Eb,t)}}function Tb(e,t,n){e==="focusin"?(km(),Er=t,Xr=n,Er.attachEvent("onpropertychange",ng)):e==="focusout"&&km()}function Rb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return su(Xr)}function Nb(e,t){if(e==="click")return su(t)}function Db(e,t){if(e==="input"||e==="change")return su(t)}function Ab(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ol=typeof Object.is=="function"?Object.is:Ab;function qr(e,t){if(ol(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var o=n[l];if(!y_.call(t,o)||!ol(e[o],t[o]))return!1}return!0}function Sm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cm(e,t){var n=Sm(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function lg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function og(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Oc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oc(e.document)}return t}function yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Lb=fo&&"documentMode"in document&&11>=document.documentMode,ui=null,S_=null,Tr=null,C_=!1;function Mm(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;C_||ui==null||ui!==Oc(l)||(l=ui,"selectionStart"in l&&yf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Tr&&qr(Tr,l)||(Tr=l,l=Pc(S_,"onSelect"),0<l.length&&(t=new iu("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=ui)))}function fa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var di={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionrun:fa("Transition","TransitionRun"),transitionstart:fa("Transition","TransitionStart"),transitioncancel:fa("Transition","TransitionCancel"),transitionend:fa("Transition","TransitionEnd")},Wd={},ag={};fo&&(ag=document.createElement("div").style,"AnimationEvent"in window||(delete di.animationend.animation,delete di.animationiteration.animation,delete di.animationstart.animation),"TransitionEvent"in window||delete di.transitionend.transition);function Na(e){if(Wd[e])return Wd[e];if(!di[e])return e;var t=di[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ag)return Wd[e]=t[n];return e}var ig=Na("animationend"),rg=Na("animationiteration"),sg=Na("animationstart"),Ob=Na("transitionrun"),zb=Na("transitionstart"),Bb=Na("transitioncancel"),cg=Na("transitionend"),ug=new Map,M_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");M_.push("scrollEnd");function Nl(e,t){ug.set(e,t),Ta(t,[e])}var Em=new WeakMap;function yl(e,t){if(typeof e=="object"&&e!==null){var n=Em.get(e);return n!==void 0?n:(t={value:e,source:t,stack:_m(t)},Em.set(e,t),t)}return{value:e,source:t,stack:_m(t)}}var fl=[],_i=0,bf=0;function cu(){for(var e=_i,t=bf=_i=0;t<e;){var n=fl[t];fl[t++]=null;var l=fl[t];fl[t++]=null;var o=fl[t];fl[t++]=null;var a=fl[t];if(fl[t++]=null,l!==null&&o!==null){var i=l.pending;i===null?o.next=o:(o.next=i.next,i.next=o),l.pending=o}a!==0&&dg(n,o,a)}}function uu(e,t,n,l){fl[_i++]=e,fl[_i++]=t,fl[_i++]=n,fl[_i++]=l,bf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function xf(e,t,n,l){return uu(e,t,n,l),zc(e)}function Hi(e,t){return uu(e,null,null,t),zc(e)}function dg(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var o=!1,a=e.return;a!==null;)a.childLanes|=n,l=a.alternate,l!==null&&(l.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(o=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,o&&t!==null&&(o=31-tl(n),e=a.hiddenUpdates,l=e[o],l===null?e[o]=[t]:l.push(t),t.lane=n|536870912),a):null}function zc(e){if(50<Hr)throw Hr=0,G_=null,Error(q(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function $b(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,t,n,l){return new $b(e,t,n,l)}function vf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function uo(e,t){var n=e.alternate;return n===null?(n=Jn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function _g(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xc(e,t,n,l,o,a){var i=0;if(l=e,typeof e=="function")vf(e)&&(i=1);else if(typeof e=="string")i=$x(e,n,Xl.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case h_:return e=Jn(31,n,t,o),e.elementType=h_,e.lanes=a,e;case ai:return ya(n.children,o,a,t);case D1:i=8,o|=24;break;case d_:return e=Jn(12,n,t,o|2),e.elementType=d_,e.lanes=a,e;case __:return e=Jn(13,n,t,o),e.elementType=__,e.lanes=a,e;case f_:return e=Jn(19,n,t,o),e.elementType=f_,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case E2:case ao:i=10;break e;case A1:i=9;break e;case rf:i=11;break e;case sf:i=14;break e;case Eo:i=16,l=null;break e}i=29,n=Error(q(130,e===null?"null":typeof e,"")),l=null}return t=Jn(i,n,t,o),t.elementType=e,t.type=l,t.lanes=a,t}function ya(e,t,n,l){return e=Jn(7,e,l,t),e.lanes=n,e}function Id(e,t,n){return e=Jn(6,e,null,t),e.lanes=n,e}function Qd(e,t,n){return t=Jn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var hi=[],mi=0,Bc=null,$c=0,ml=[],gl=0,ba=null,io=1,ro="";function ma(e,t){hi[mi++]=$c,hi[mi++]=Bc,Bc=e,$c=t}function fg(e,t,n){ml[gl++]=io,ml[gl++]=ro,ml[gl++]=ba,ba=e;var l=io;e=ro;var o=32-tl(l)-1;l&=~(1<<o),n+=1;var a=32-tl(t)+o;if(30<a){var i=o-o%5;a=(l&(1<<i)-1).toString(32),l>>=i,o-=i,io=1<<32-tl(t)+o|n<<o|l,ro=a+e}else io=1<<a|n<<o|l,ro=e}function wf(e){e.return!==null&&(ma(e,1),fg(e,1,0))}function kf(e){for(;e===Bc;)Bc=hi[--mi],hi[mi]=null,$c=hi[--mi],hi[mi]=null;for(;e===ba;)ba=ml[--gl],ml[gl]=null,ro=ml[--gl],ml[gl]=null,io=ml[--gl],ml[gl]=null}var zn=null,qt=null,ct=!1,xa=null,Yl=!1,E_=Error(q(519));function Sa(e){var t=Error(q(418,""));throw Wr(yl(t,e)),E_}function Tm(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Cn]=e,t[qn]=l,n){case"dialog":Ie("cancel",t),Ie("close",t);break;case"iframe":case"object":case"embed":Ie("load",t);break;case"video":case"audio":for(n=0;n<Gr.length;n++)Ie(Gr[n],t);break;case"source":Ie("error",t);break;case"img":case"image":case"link":Ie("error",t),Ie("load",t);break;case"details":Ie("toggle",t);break;case"input":Ie("invalid",t),I1(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Lc(t);break;case"select":Ie("invalid",t);break;case"textarea":Ie("invalid",t),G1(t,l.value,l.defaultValue,l.children),Lc(t)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Vp(t.textContent,n)?(l.popover!=null&&(Ie("beforetoggle",t),Ie("toggle",t)),l.onScroll!=null&&Ie("scroll",t),l.onScrollEnd!=null&&Ie("scrollend",t),l.onClick!=null&&(t.onclick=yu),t=!0):t=!1,t||Sa(e)}function Rm(e){for(zn=e.return;zn;)switch(zn.tag){case 5:case 13:Yl=!1;return;case 27:case 3:Yl=!0;return;default:zn=zn.return}}function gr(e){if(e!==zn)return!1;if(!ct)return Rm(e),ct=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||J_(e.type,e.memoizedProps)),n=!n),n&&qt&&Sa(e),Rm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){qt=Rl(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}qt=null}}else t===27?(t=qt,Fo(e.type)?(e=nf,nf=null,qt=e):qt=t):qt=zn?Rl(e.stateNode.nextSibling):null;return!0}function is(){qt=zn=null,ct=!1}function Nm(){var e=xa;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),xa=null),e}function Wr(e){xa===null?xa=[e]:xa.push(e)}var T_=Il(null),Da=null,so=null;function Ro(e,t,n){Yt(T_,t._currentValue),t._currentValue=n}function _o(e){e._currentValue=T_.current,un(T_)}function R_(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function N_(e,t,n,l){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){var i=o.child;a=a.firstContext;e:for(;a!==null;){var r=a;a=o;for(var s=0;s<t.length;s++)if(r.context===t[s]){a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),R_(a.return,n,e),l||(i=null);break e}a=r.next}}else if(o.tag===18){if(i=o.return,i===null)throw Error(q(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),R_(i,n,e),i=null}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===e){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}}function rs(e,t,n,l){e=null;for(var o=t,a=!1;o!==null;){if(!a){if((o.flags&524288)!==0)a=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var i=o.alternate;if(i===null)throw Error(q(387));if(i=i.memoizedProps,i!==null){var r=o.type;ol(o.pendingProps.value,i.value)||(e!==null?e.push(r):e=[r])}}else if(o===Rc.current){if(i=o.alternate,i===null)throw Error(q(387));i.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Zr):e=[Zr])}o=o.return}e!==null&&N_(t,e,n,l),t.flags|=262144}function Hc(e){for(e=e.firstContext;e!==null;){if(!ol(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){Da=e,so=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return hg(Da,e)}function ic(e,t){return Da===null&&Ca(e),hg(e,t)}function hg(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},so===null){if(e===null)throw Error(q(308));so=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else so=so.next=t;return n}var Hb=typeof AbortController!="undefined"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ub=an.unstable_scheduleCallback,Yb=an.unstable_NormalPriority,ln={$$typeof:ao,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sf(){return{controller:new Hb,data:new Map,refCount:0}}function ss(e){e.refCount--,e.refCount===0&&Ub(Yb,function(){e.controller.abort()})}var Rr=null,D_=0,Ti=0,xi=null;function jb(e,t){if(Rr===null){var n=Rr=[];D_=0,Ti=Gf(),xi={status:"pending",value:void 0,then:function(l){n.push(l)}}}return D_++,t.then(Dm,Dm),t}function Dm(){if(--D_===0&&Rr!==null){xi!==null&&(xi.status="fulfilled");var e=Rr;Rr=null,Ti=0,xi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xb(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var o=0;o<n.length;o++)(0,n[o])(t)},function(o){for(l.status="rejected",l.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),l}var Am=we.S;we.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&jb(e,t),Am!==null&&Am(e,t)};var va=Il(null);function Cf(){var e=va.current;return e!==null?e:Dt.pooledCache}function vc(e,t){t===null?Yt(va,va.current):Yt(va,t.pool)}function mg(){var e=Cf();return e===null?null:{parent:ln._currentValue,pool:e}}var cs=Error(q(460)),gg=Error(q(474)),du=Error(q(542)),A_={then:function(){}};function Lm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rc(){}function pg(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(rc,rc),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zm(e),e;default:if(typeof t.status=="string")t.then(rc,rc);else{if(e=Dt,e!==null&&100<e.shellSuspendCounter)throw Error(q(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=l}},function(l){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zm(e),e}throw Nr=t,cs}}var Nr=null;function Om(){if(Nr===null)throw Error(q(459));var e=Nr;return Nr=null,e}function zm(e){if(e===cs||e===du)throw Error(q(483))}var To=!1;function Mf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function L_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ho(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Uo(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var o=l.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),l.pending=t,t=zc(e),dg(e,null,n),t}return uu(e,l,t,n),zc(e)}function Dr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,U1(e,n)}}function Gd(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:l.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var O_=!1;function Ar(){if(O_){var e=xi;if(e!==null)throw e}}function Lr(e,t,n,l){O_=!1;var o=e.updateQueue;To=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,r=o.shared.pending;if(r!==null){o.shared.pending=null;var s=r,d=s.next;s.next=null,i===null?a=d:i.next=d,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,r=g.lastBaseUpdate,r!==i&&(r===null?g.firstBaseUpdate=d:r.next=d,g.lastBaseUpdate=s))}if(a!==null){var h=o.baseState;i=0,g=d=s=null,r=a;do{var _=r.lane&-536870913,p=_!==r.lane;if(p?(Pe&_)===_:(l&_)===_){_!==0&&_===Ti&&(O_=!0),g!==null&&(g=g.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var S=e,T=r;_=t;var D=n;switch(T.tag){case 1:if(S=T.payload,typeof S=="function"){h=S.call(D,h,_);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=T.payload,_=typeof S=="function"?S.call(D,h,_):S,_==null)break e;h=Lt({},h,_);break e;case 2:To=!0}}_=r.callback,_!==null&&(e.flags|=64,p&&(e.flags|=8192),p=o.callbacks,p===null?o.callbacks=[_]:p.push(_))}else p={lane:_,tag:r.tag,payload:r.payload,callback:r.callback,next:null},g===null?(d=g=p,s=h):g=g.next=p,i|=_;if(r=r.next,r===null){if(r=o.shared.pending,r===null)break;p=r,r=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);g===null&&(s=h),o.baseState=s,o.firstBaseUpdate=d,o.lastBaseUpdate=g,a===null&&(o.shared.lanes=0),Go|=i,e.lanes=i,e.memoizedState=h}}function yg(e,t){if(typeof e!="function")throw Error(q(191,e));e.call(t)}function bg(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)yg(n[e],t)}var Ri=Il(null),Uc=Il(0);function Bm(e,t){e=go,Yt(Uc,e),Yt(Ri,t),go=e|t.baseLanes}function z_(){Yt(Uc,go),Yt(Ri,Ri.current)}function Ef(){go=Uc.current,un(Ri),un(Uc)}var Io=0,Xe=null,kt=null,Pt=null,Yc=!1,vi=!1,Ma=!1,jc=0,Ir=0,wi=null,qb=0;function Vt(){throw Error(q(321))}function Tf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ol(e[n],t[n]))return!1;return!0}function Rf(e,t,n,l,o,a){return Io=a,Xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,we.H=e===null||e.memoizedState===null?Zg:Kg,Ma=!1,a=n(l,o),Ma=!1,vi&&(a=vg(t,n,l,o)),xg(e),a}function xg(e){we.H=Xc;var t=kt!==null&&kt.next!==null;if(Io=0,Pt=kt=Xe=null,Yc=!1,Ir=0,wi=null,t)throw Error(q(300));e===null||cn||(e=e.dependencies,e!==null&&Hc(e)&&(cn=!0))}function vg(e,t,n,l){Xe=e;var o=0;do{if(vi&&(wi=null),Ir=0,vi=!1,25<=o)throw Error(q(301));if(o+=1,Pt=kt=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}we.H=Zb,a=t(n,l)}while(vi);return a}function Wb(){var e=we.H,t=e.useState()[0];return t=typeof t.then=="function"?us(t):t,e=e.useState()[0],(kt!==null?kt.memoizedState:null)!==e&&(Xe.flags|=1024),t}function Nf(){var e=jc!==0;return jc=0,e}function Df(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Af(e){if(Yc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yc=!1}Io=0,Pt=kt=Xe=null,vi=!1,Ir=jc=0,wi=null}function Yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?Xe.memoizedState=Pt=e:Pt=Pt.next=e,Pt}function Jt(){if(kt===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=kt.next;var t=Pt===null?Xe.memoizedState:Pt.next;if(t!==null)Pt=t,kt=e;else{if(e===null)throw Xe.alternate===null?Error(q(467)):Error(q(310));kt=e,e={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Pt===null?Xe.memoizedState=Pt=e:Pt=Pt.next=e}return Pt}function Lf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function us(e){var t=Ir;return Ir+=1,wi===null&&(wi=[]),e=pg(wi,e,t),t=Xe,(Pt===null?t.memoizedState:Pt.next)===null&&(t=t.alternate,we.H=t===null||t.memoizedState===null?Zg:Kg),e}function _u(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return us(e);if(e.$$typeof===ao)return Mn(e)}throw Error(q(438,String(e)))}function Of(e){var t=null,n=Xe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Lf(),Xe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=T2;return t.index++,n}function ho(e,t){return typeof t=="function"?t(e):t}function wc(e){var t=Jt();return zf(t,kt,e)}function zf(e,t,n){var l=e.queue;if(l===null)throw Error(q(311));l.lastRenderedReducer=n;var o=e.baseQueue,a=l.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}t.baseQueue=o=a,l.pending=null}if(a=e.baseState,o===null)e.memoizedState=a;else{t=o.next;var r=i=null,s=null,d=t,g=!1;do{var h=d.lane&-536870913;if(h!==d.lane?(Pe&h)===h:(Io&h)===h){var _=d.revertLane;if(_===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),h===Ti&&(g=!0);else if((Io&_)===_){d=d.next,_===Ti&&(g=!0);continue}else h={lane:0,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(r=s=h,i=a):s=s.next=h,Xe.lanes|=_,Go|=_;h=d.action,Ma&&n(a,h),a=d.hasEagerState?d.eagerState:n(a,h)}else _={lane:h,revertLane:d.revertLane,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(r=s=_,i=a):s=s.next=_,Xe.lanes|=h,Go|=h;d=d.next}while(d!==null&&d!==t);if(s===null?i=a:s.next=r,!ol(a,e.memoizedState)&&(cn=!0,g&&(n=xi,n!==null)))throw n;e.memoizedState=a,e.baseState=i,e.baseQueue=s,l.lastRenderedState=a}return o===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Vd(e){var t=Jt(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var l=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);ol(a,t.memoizedState)||(cn=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,l]}function wg(e,t,n){var l=Xe,o=Jt(),a=ct;if(a){if(n===void 0)throw Error(q(407));n=n()}else n=t();var i=!ol((kt||o).memoizedState,n);i&&(o.memoizedState=n,cn=!0),o=o.queue;var r=Cg.bind(null,l,o,e);if(ds(2048,8,r,[e]),o.getSnapshot!==t||i||Pt!==null&&Pt.memoizedState.tag&1){if(l.flags|=2048,Ni(9,fu(),Sg.bind(null,l,o,n,t),null),Dt===null)throw Error(q(349));a||(Io&124)!==0||kg(l,t,n)}return n}function kg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xe.updateQueue,t===null?(t=Lf(),Xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Sg(e,t,n,l){t.value=n,t.getSnapshot=l,Mg(t)&&Eg(e)}function Cg(e,t,n){return n(function(){Mg(t)&&Eg(e)})}function Mg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ol(e,n)}catch{return!0}}function Eg(e){var t=Hi(e,2);t!==null&&ll(t,e,2)}function B_(e){var t=Yn();if(typeof e=="function"){var n=e;if(e=n(),Ma){Lo(!0);try{n()}finally{Lo(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:e},t}function Tg(e,t,n,l){return e.baseState=n,zf(e,kt,typeof l=="function"?l:ho)}function Ib(e,t,n,l,o){if(hu(e))throw Error(q(485));if(e=t.action,e!==null){var a={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){a.listeners.push(i)}};we.T!==null?n(!0):a.isTransition=!1,l(a),n=t.pending,n===null?(a.next=t.pending=a,Rg(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Rg(e,t){var n=t.action,l=t.payload,o=e.state;if(t.isTransition){var a=we.T,i={};we.T=i;try{var r=n(o,l),s=we.S;s!==null&&s(i,r),$m(e,t,r)}catch(d){$_(e,t,d)}finally{we.T=a}}else try{a=n(o,l),$m(e,t,a)}catch(d){$_(e,t,d)}}function $m(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){Hm(e,t,l)},function(l){return $_(e,t,l)}):Hm(e,t,n)}function Hm(e,t,n){t.status="fulfilled",t.value=n,Ng(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Rg(e,n)))}function $_(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,Ng(t),t=t.next;while(t!==l)}e.action=null}function Ng(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Dg(e,t){return t}function Um(e,t){if(ct){var n=Dt.formState;if(n!==null){e:{var l=Xe;if(ct){if(qt){t:{for(var o=qt,a=Yl;o.nodeType!==8;){if(!a){o=null;break t}if(o=Rl(o.nextSibling),o===null){o=null;break t}}a=o.data,o=a==="F!"||a==="F"?o:null}if(o){qt=Rl(o.nextSibling),l=o.data==="F!";break e}}Sa(l)}l=!1}l&&(t=n[0])}}return n=Yn(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dg,lastRenderedState:t},n.queue=l,n=Gg.bind(null,Xe,l),l.dispatch=n,l=B_(!1),a=Uf.bind(null,Xe,!1,l.queue),l=Yn(),o={state:t,dispatch:null,action:e,pending:null},l.queue=o,n=Ib.bind(null,Xe,o,a,n),o.dispatch=n,l.memoizedState=e,[t,n,!1]}function Ym(e){var t=Jt();return Ag(t,kt,e)}function Ag(e,t,n){if(t=zf(e,t,Dg)[0],e=wc(ho)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=us(t)}catch(i){throw i===cs?du:i}else l=t;t=Jt();var o=t.queue,a=o.dispatch;return n!==t.memoizedState&&(Xe.flags|=2048,Ni(9,fu(),Qb.bind(null,o,n),null)),[l,a,e]}function Qb(e,t){e.action=t}function jm(e){var t=Jt(),n=kt;if(n!==null)return Ag(t,n,e);Jt(),t=t.memoizedState,n=Jt();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Ni(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Xe.updateQueue,t===null&&(t=Lf(),Xe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function fu(){return{destroy:void 0,resource:void 0}}function Lg(){return Jt().memoizedState}function kc(e,t,n,l){var o=Yn();l=l===void 0?null:l,Xe.flags|=e,o.memoizedState=Ni(1|t,fu(),n,l)}function ds(e,t,n,l){var o=Jt();l=l===void 0?null:l;var a=o.memoizedState.inst;kt!==null&&l!==null&&Tf(l,kt.memoizedState.deps)?o.memoizedState=Ni(t,a,n,l):(Xe.flags|=e,o.memoizedState=Ni(1|t,a,n,l))}function Xm(e,t){kc(8390656,8,e,t)}function Og(e,t){ds(2048,8,e,t)}function zg(e,t){return ds(4,2,e,t)}function Bg(e,t){return ds(4,4,e,t)}function $g(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hg(e,t,n){n=n!=null?n.concat([e]):null,ds(4,4,$g.bind(null,t,e),n)}function Bf(){}function Ug(e,t){var n=Jt();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Tf(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function Yg(e,t){var n=Jt();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Tf(t,l[1]))return l[0];if(l=e(),Ma){Lo(!0);try{e()}finally{Lo(!1)}}return n.memoizedState=[l,t],l}function $f(e,t,n){return n===void 0||(Io&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Np(),Xe.lanes|=e,Go|=e,n)}function jg(e,t,n,l){return ol(n,t)?n:Ri.current!==null?(e=$f(e,n,l),ol(e,t)||(cn=!0),e):(Io&42)===0?(cn=!0,e.memoizedState=n):(e=Np(),Xe.lanes|=e,Go|=e,t)}function Xg(e,t,n,l,o){var a=ut.p;ut.p=a!==0&&8>a?a:8;var i=we.T,r={};we.T=r,Uf(e,!1,t,n);try{var s=o(),d=we.S;if(d!==null&&d(r,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var g=Xb(s,l);Or(e,t,g,nl(e))}else Or(e,t,l,nl(e))}catch(h){Or(e,t,{then:function(){},status:"rejected",reason:h},nl())}finally{ut.p=a,we.T=i}}function Gb(){}function H_(e,t,n,l){if(e.tag!==5)throw Error(q(476));var o=qg(e).queue;Xg(e,o,t,pa,n===null?Gb:function(){return Wg(e),n(l)})}function qg(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:pa,baseState:pa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:pa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Wg(e){var t=qg(e).next.queue;Or(e,t,{},nl())}function Hf(){return Mn(Zr)}function Ig(){return Jt().memoizedState}function Qg(){return Jt().memoizedState}function Vb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=nl();e=Ho(n);var l=Uo(t,e,n);l!==null&&(ll(l,t,n),Dr(l,t,n)),t={cache:Sf()},e.payload=t;return}t=t.return}}function Fb(e,t,n){var l=nl();n={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},hu(e)?Vg(t,n):(n=xf(e,t,n,l),n!==null&&(ll(n,e,l),Fg(n,t,l)))}function Gg(e,t,n){var l=nl();Or(e,t,n,l)}function Or(e,t,n,l){var o={lane:l,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(hu(e))Vg(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,r=a(i,n);if(o.hasEagerState=!0,o.eagerState=r,ol(r,i))return uu(e,t,o,0),Dt===null&&cu(),!1}catch{}finally{}if(n=xf(e,t,o,l),n!==null)return ll(n,e,l),Fg(n,t,l),!0}return!1}function Uf(e,t,n,l){if(l={lane:2,revertLane:Gf(),action:l,hasEagerState:!1,eagerState:null,next:null},hu(e)){if(t)throw Error(q(479))}else t=xf(e,n,l,2),t!==null&&ll(t,e,2)}function hu(e){var t=e.alternate;return e===Xe||t!==null&&t===Xe}function Vg(e,t){vi=Yc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fg(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,U1(e,n)}}var Xc={readContext:Mn,use:_u,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useLayoutEffect:Vt,useInsertionEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useSyncExternalStore:Vt,useId:Vt,useHostTransitionStatus:Vt,useFormState:Vt,useActionState:Vt,useOptimistic:Vt,useMemoCache:Vt,useCacheRefresh:Vt},Zg={readContext:Mn,use:_u,useCallback:function(e,t){return Yn().memoizedState=[e,t===void 0?null:t],e},useContext:Mn,useEffect:Xm,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,kc(4194308,4,$g.bind(null,t,e),n)},useLayoutEffect:function(e,t){return kc(4194308,4,e,t)},useInsertionEffect:function(e,t){kc(4,2,e,t)},useMemo:function(e,t){var n=Yn();t=t===void 0?null:t;var l=e();if(Ma){Lo(!0);try{e()}finally{Lo(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Yn();if(n!==void 0){var o=n(t);if(Ma){Lo(!0);try{n(t)}finally{Lo(!1)}}}else o=t;return l.memoizedState=l.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},l.queue=e,e=e.dispatch=Fb.bind(null,Xe,e),[l.memoizedState,e]},useRef:function(e){var t=Yn();return e={current:e},t.memoizedState=e},useState:function(e){e=B_(e);var t=e.queue,n=Gg.bind(null,Xe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Bf,useDeferredValue:function(e,t){var n=Yn();return $f(n,e,t)},useTransition:function(){var e=B_(!1);return e=Xg.bind(null,Xe,e.queue,!0,!1),Yn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Xe,o=Yn();if(ct){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),Dt===null)throw Error(q(349));(Pe&124)!==0||kg(l,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Xm(Cg.bind(null,l,a,e),[e]),l.flags|=2048,Ni(9,fu(),Sg.bind(null,l,a,n,t),null),n},useId:function(){var e=Yn(),t=Dt.identifierPrefix;if(ct){var n=ro,l=io;n=(l&~(1<<32-tl(l)-1)).toString(32)+n,t="\xAB"+t+"R"+n,n=jc++,0<n&&(t+="H"+n.toString(32)),t+="\xBB"}else n=qb++,t="\xAB"+t+"r"+n.toString(32)+"\xBB";return e.memoizedState=t},useHostTransitionStatus:Hf,useFormState:Um,useActionState:Um,useOptimistic:function(e){var t=Yn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Uf.bind(null,Xe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Of,useCacheRefresh:function(){return Yn().memoizedState=Vb.bind(null,Xe)}},Kg={readContext:Mn,use:_u,useCallback:Ug,useContext:Mn,useEffect:Og,useImperativeHandle:Hg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Yg,useReducer:wc,useRef:Lg,useState:function(){return wc(ho)},useDebugValue:Bf,useDeferredValue:function(e,t){var n=Jt();return jg(n,kt.memoizedState,e,t)},useTransition:function(){var e=wc(ho)[0],t=Jt().memoizedState;return[typeof e=="boolean"?e:us(e),t]},useSyncExternalStore:wg,useId:Ig,useHostTransitionStatus:Hf,useFormState:Ym,useActionState:Ym,useOptimistic:function(e,t){var n=Jt();return Tg(n,kt,e,t)},useMemoCache:Of,useCacheRefresh:Qg},Zb={readContext:Mn,use:_u,useCallback:Ug,useContext:Mn,useEffect:Og,useImperativeHandle:Hg,useInsertionEffect:zg,useLayoutEffect:Bg,useMemo:Yg,useReducer:Vd,useRef:Lg,useState:function(){return Vd(ho)},useDebugValue:Bf,useDeferredValue:function(e,t){var n=Jt();return kt===null?$f(n,e,t):jg(n,kt.memoizedState,e,t)},useTransition:function(){var e=Vd(ho)[0],t=Jt().memoizedState;return[typeof e=="boolean"?e:us(e),t]},useSyncExternalStore:wg,useId:Ig,useHostTransitionStatus:Hf,useFormState:jm,useActionState:jm,useOptimistic:function(e,t){var n=Jt();return kt!==null?Tg(n,kt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Of,useCacheRefresh:Qg},ki=null,Qr=0;function sc(e){var t=Qr;return Qr+=1,ki===null&&(ki=[]),pg(ki,e,t)}function pr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cc(e,t){throw t.$$typeof===M2?Error(q(525)):(e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qm(e){var t=e._init;return t(e._payload)}function Pg(e){function t(x,k){if(e){var v=x.deletions;v===null?(x.deletions=[k],x.flags|=16):v.push(k)}}function n(x,k){if(!e)return null;for(;k!==null;)t(x,k),k=k.sibling;return null}function l(x){for(var k=new Map;x!==null;)x.key!==null?k.set(x.key,x):k.set(x.index,x),x=x.sibling;return k}function o(x,k){return x=uo(x,k),x.index=0,x.sibling=null,x}function a(x,k,v){return x.index=v,e?(v=x.alternate,v!==null?(v=v.index,v<k?(x.flags|=67108866,k):v):(x.flags|=67108866,k)):(x.flags|=1048576,k)}function i(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function r(x,k,v,m){return k===null||k.tag!==6?(k=Id(v,x.mode,m),k.return=x,k):(k=o(k,v),k.return=x,k)}function s(x,k,v,m){var z=v.type;return z===ai?g(x,k,v.props.children,m,v.key):k!==null&&(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Eo&&qm(z)===k.type)?(k=o(k,v.props),pr(k,v),k.return=x,k):(k=xc(v.type,v.key,v.props,null,x.mode,m),pr(k,v),k.return=x,k)}function d(x,k,v,m){return k===null||k.tag!==4||k.stateNode.containerInfo!==v.containerInfo||k.stateNode.implementation!==v.implementation?(k=Qd(v,x.mode,m),k.return=x,k):(k=o(k,v.children||[]),k.return=x,k)}function g(x,k,v,m,z){return k===null||k.tag!==7?(k=ya(v,x.mode,m,z),k.return=x,k):(k=o(k,v),k.return=x,k)}function h(x,k,v){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Id(""+k,x.mode,v),k.return=x,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Js:return v=xc(k.type,k.key,k.props,null,x.mode,v),pr(v,k),v.return=x,v;case wr:return k=Qd(k,x.mode,v),k.return=x,k;case Eo:var m=k._init;return k=m(k._payload),h(x,k,v)}if(kr(k)||hr(k))return k=ya(k,x.mode,v,null),k.return=x,k;if(typeof k.then=="function")return h(x,sc(k),v);if(k.$$typeof===ao)return h(x,ic(x,k),v);cc(x,k)}return null}function _(x,k,v,m){var z=k!==null?k.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return z!==null?null:r(x,k,""+v,m);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Js:return v.key===z?s(x,k,v,m):null;case wr:return v.key===z?d(x,k,v,m):null;case Eo:return z=v._init,v=z(v._payload),_(x,k,v,m)}if(kr(v)||hr(v))return z!==null?null:g(x,k,v,m,null);if(typeof v.then=="function")return _(x,k,sc(v),m);if(v.$$typeof===ao)return _(x,k,ic(x,v),m);cc(x,v)}return null}function p(x,k,v,m,z){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return x=x.get(v)||null,r(k,x,""+m,z);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Js:return x=x.get(m.key===null?v:m.key)||null,s(k,x,m,z);case wr:return x=x.get(m.key===null?v:m.key)||null,d(k,x,m,z);case Eo:var Q=m._init;return m=Q(m._payload),p(x,k,v,m,z)}if(kr(m)||hr(m))return x=x.get(v)||null,g(k,x,m,z,null);if(typeof m.then=="function")return p(x,k,v,sc(m),z);if(m.$$typeof===ao)return p(x,k,v,ic(k,m),z);cc(k,m)}return null}function S(x,k,v,m){for(var z=null,Q=null,L=k,V=k=0,H=null;L!==null&&V<v.length;V++){L.index>V?(H=L,L=null):H=L.sibling;var K=_(x,L,v[V],m);if(K===null){L===null&&(L=H);break}e&&L&&K.alternate===null&&t(x,L),k=a(K,k,V),Q===null?z=K:Q.sibling=K,Q=K,L=H}if(V===v.length)return n(x,L),ct&&ma(x,V),z;if(L===null){for(;V<v.length;V++)L=h(x,v[V],m),L!==null&&(k=a(L,k,V),Q===null?z=L:Q.sibling=L,Q=L);return ct&&ma(x,V),z}for(L=l(L);V<v.length;V++)H=p(L,x,V,v[V],m),H!==null&&(e&&H.alternate!==null&&L.delete(H.key===null?V:H.key),k=a(H,k,V),Q===null?z=H:Q.sibling=H,Q=H);return e&&L.forEach(function(oe){return t(x,oe)}),ct&&ma(x,V),z}function T(x,k,v,m){if(v==null)throw Error(q(151));for(var z=null,Q=null,L=k,V=k=0,H=null,K=v.next();L!==null&&!K.done;V++,K=v.next()){L.index>V?(H=L,L=null):H=L.sibling;var oe=_(x,L,K.value,m);if(oe===null){L===null&&(L=H);break}e&&L&&oe.alternate===null&&t(x,L),k=a(oe,k,V),Q===null?z=oe:Q.sibling=oe,Q=oe,L=H}if(K.done)return n(x,L),ct&&ma(x,V),z;if(L===null){for(;!K.done;V++,K=v.next())K=h(x,K.value,m),K!==null&&(k=a(K,k,V),Q===null?z=K:Q.sibling=K,Q=K);return ct&&ma(x,V),z}for(L=l(L);!K.done;V++,K=v.next())K=p(L,x,V,K.value,m),K!==null&&(e&&K.alternate!==null&&L.delete(K.key===null?V:K.key),k=a(K,k,V),Q===null?z=K:Q.sibling=K,Q=K);return e&&L.forEach(function(P){return t(x,P)}),ct&&ma(x,V),z}function D(x,k,v,m){if(typeof v=="object"&&v!==null&&v.type===ai&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Js:e:{for(var z=v.key;k!==null;){if(k.key===z){if(z=v.type,z===ai){if(k.tag===7){n(x,k.sibling),m=o(k,v.props.children),m.return=x,x=m;break e}}else if(k.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Eo&&qm(z)===k.type){n(x,k.sibling),m=o(k,v.props),pr(m,v),m.return=x,x=m;break e}n(x,k);break}else t(x,k);k=k.sibling}v.type===ai?(m=ya(v.props.children,x.mode,m,v.key),m.return=x,x=m):(m=xc(v.type,v.key,v.props,null,x.mode,m),pr(m,v),m.return=x,x=m)}return i(x);case wr:e:{for(z=v.key;k!==null;){if(k.key===z)if(k.tag===4&&k.stateNode.containerInfo===v.containerInfo&&k.stateNode.implementation===v.implementation){n(x,k.sibling),m=o(k,v.children||[]),m.return=x,x=m;break e}else{n(x,k);break}else t(x,k);k=k.sibling}m=Qd(v,x.mode,m),m.return=x,x=m}return i(x);case Eo:return z=v._init,v=z(v._payload),D(x,k,v,m)}if(kr(v))return S(x,k,v,m);if(hr(v)){if(z=hr(v),typeof z!="function")throw Error(q(150));return v=z.call(v),T(x,k,v,m)}if(typeof v.then=="function")return D(x,k,sc(v),m);if(v.$$typeof===ao)return D(x,k,ic(x,v),m);cc(x,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,k!==null&&k.tag===6?(n(x,k.sibling),m=o(k,v),m.return=x,x=m):(n(x,k),m=Id(v,x.mode,m),m.return=x,x=m),i(x)):n(x,k)}return function(x,k,v,m){try{Qr=0;var z=D(x,k,v,m);return ki=null,z}catch(L){if(L===cs||L===du)throw L;var Q=Jn(29,L,null,x.mode);return Q.lanes=m,Q.return=x,Q}finally{}}}var Di=Pg(!0),Jg=Pg(!1),xl=Il(null),Wl=null;function No(e){var t=e.alternate;Yt(on,on.current&1),Yt(xl,e),Wl===null&&(t===null||Ri.current!==null||t.memoizedState!==null)&&(Wl=e)}function ep(e){if(e.tag===22){if(Yt(on,on.current),Yt(xl,e),Wl===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Wl=e)}}else Do(e)}function Do(){Yt(on,on.current),Yt(xl,xl.current)}function co(e){un(xl),Wl===e&&(Wl=null),un(on)}var on=Il(0);function qc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||tf(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Fd(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:Lt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var U_={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=nl(),o=Ho(l);o.payload=t,n!=null&&(o.callback=n),t=Uo(e,o,l),t!==null&&(ll(t,e,l),Dr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=nl(),o=Ho(l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Uo(e,o,l),t!==null&&(ll(t,e,l),Dr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nl(),l=Ho(n);l.tag=2,t!=null&&(l.callback=t),t=Uo(e,l,n),t!==null&&(ll(t,e,n),Dr(t,e,n))}};function Wm(e,t,n,l,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,a,i):t.prototype&&t.prototype.isPureReactComponent?!qr(n,l)||!qr(o,a):!0}function Im(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&U_.enqueueReplaceState(t,t.state,null)}function Ea(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=Lt({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}var Wc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function tp(e){Wc(e)}function np(e){console.error(e)}function lp(e){Wc(e)}function Ic(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Qm(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Y_(e,t,n){return n=Ho(n),n.tag=3,n.payload={element:null},n.callback=function(){Ic(e,t)},n}function op(e){return e=Ho(e),e.tag=3,e}function ap(e,t,n,l){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var a=l.value;e.payload=function(){return o(a)},e.callback=function(){Qm(t,n,l)}}var i=n.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){Qm(t,n,l),typeof o!="function"&&(Yo===null?Yo=new Set([this]):Yo.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function Kb(e,t,n,l,o){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&rs(t,n,o,!0),n=xl.current,n!==null){switch(n.tag){case 13:return Wl===null?V_():n.alternate===null&&Wt===0&&(Wt=3),n.flags&=-257,n.flags|=65536,n.lanes=o,l===A_?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),i_(e,l,o)),!1;case 22:return n.flags|=65536,l===A_?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),i_(e,l,o)),!1}throw Error(q(435,n.tag))}return i_(e,l,o),V_(),!1}if(ct)return t=xl.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,l!==E_&&(e=Error(q(422),{cause:l}),Wr(yl(e,n)))):(l!==E_&&(t=Error(q(423),{cause:l}),Wr(yl(t,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,l=yl(l,n),o=Y_(e.stateNode,l,o),Gd(e,o),Wt!==4&&(Wt=2)),!1;var a=Error(q(520),{cause:l});if(a=yl(a,n),$r===null?$r=[a]:$r.push(a),Wt!==4&&(Wt=2),t===null)return!0;l=yl(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Y_(n.stateNode,l,e),Gd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Yo===null||!Yo.has(a))))return n.flags|=65536,o&=-o,n.lanes|=o,o=op(o),ap(o,e,n,l),Gd(n,o),!1}n=n.return}while(n!==null);return!1}var ip=Error(q(461)),cn=!1;function mn(e,t,n,l){t.child=e===null?Jg(t,null,n,l):Di(t,e.child,n,l)}function Gm(e,t,n,l,o){n=n.render;var a=t.ref;if("ref"in l){var i={};for(var r in l)r!=="ref"&&(i[r]=l[r])}else i=l;return Ca(t),l=Rf(e,t,n,i,a,o),r=Nf(),e!==null&&!cn?(Df(e,t,o),mo(e,t,o)):(ct&&r&&wf(t),t.flags|=1,mn(e,t,l,o),t.child)}function Vm(e,t,n,l,o){if(e===null){var a=n.type;return typeof a=="function"&&!vf(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,rp(e,t,a,l,o)):(e=xc(n.type,null,l,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Yf(e,o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(i,l)&&e.ref===t.ref)return mo(e,t,o)}return t.flags|=1,e=uo(a,l),e.ref=t.ref,e.return=t,t.child=e}function rp(e,t,n,l,o){if(e!==null){var a=e.memoizedProps;if(qr(a,l)&&e.ref===t.ref)if(cn=!1,t.pendingProps=l=a,Yf(e,o))(e.flags&131072)!==0&&(cn=!0);else return t.lanes=e.lanes,mo(e,t,o)}return j_(e,t,n,l,o)}function sp(e,t,n){var l=t.pendingProps,o=l.children,a=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=a!==null?a.baseLanes|n:n,e!==null){for(o=t.child=e.child,a=0;o!==null;)a=a|o.lanes|o.childLanes,o=o.sibling;t.childLanes=a&~l}else t.childLanes=0,t.child=null;return Fm(e,t,l,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vc(t,a!==null?a.cachePool:null),a!==null?Bm(t,a):z_(),ep(t);else return t.lanes=t.childLanes=536870912,Fm(e,t,a!==null?a.baseLanes|n:n,n)}else a!==null?(vc(t,a.cachePool),Bm(t,a),Do(t),t.memoizedState=null):(e!==null&&vc(t,null),z_(),Do(t));return mn(e,t,o,n),t.child}function Fm(e,t,n,l){var o=Cf();return o=o===null?null:{parent:ln._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},e!==null&&vc(t,null),z_(),ep(t),e!==null&&rs(e,t,l,!0),null}function Sc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(q(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function j_(e,t,n,l,o){return Ca(t),n=Rf(e,t,n,l,void 0,o),l=Nf(),e!==null&&!cn?(Df(e,t,o),mo(e,t,o)):(ct&&l&&wf(t),t.flags|=1,mn(e,t,n,o),t.child)}function Zm(e,t,n,l,o,a){return Ca(t),t.updateQueue=null,n=vg(t,l,n,o),xg(e),l=Nf(),e!==null&&!cn?(Df(e,t,a),mo(e,t,a)):(ct&&l&&wf(t),t.flags|=1,mn(e,t,n,a),t.child)}function Km(e,t,n,l,o){if(Ca(t),t.stateNode===null){var a=fi,i=n.contextType;typeof i=="object"&&i!==null&&(a=Mn(i)),a=new n(l,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=U_,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=l,a.state=t.memoizedState,a.refs={},Mf(t),i=n.contextType,a.context=typeof i=="object"&&i!==null?Mn(i):fi,a.state=t.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Fd(t,n,i,l),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(i=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),i!==a.state&&U_.enqueueReplaceState(a,a.state,null),Lr(t,l,a,o),Ar(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){a=t.stateNode;var r=t.memoizedProps,s=Ea(n,r);a.props=s;var d=a.context,g=n.contextType;i=fi,typeof g=="object"&&g!==null&&(i=Mn(g));var h=n.getDerivedStateFromProps;g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r||d!==i)&&Im(t,a,l,i),To=!1;var _=t.memoizedState;a.state=_,Lr(t,l,a,o),Ar(),d=t.memoizedState,r||_!==d||To?(typeof h=="function"&&(Fd(t,n,h,l),d=t.memoizedState),(s=To||Wm(t,n,s,l,_,d,i))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=d),a.props=l,a.state=d,a.context=i,l=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{a=t.stateNode,L_(e,t),i=t.memoizedProps,g=Ea(n,i),a.props=g,h=t.pendingProps,_=a.context,d=n.contextType,s=fi,typeof d=="object"&&d!==null&&(s=Mn(d)),r=n.getDerivedStateFromProps,(d=typeof r=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==h||_!==s)&&Im(t,a,l,s),To=!1,_=t.memoizedState,a.state=_,Lr(t,l,a,o),Ar();var p=t.memoizedState;i!==h||_!==p||To||e!==null&&e.dependencies!==null&&Hc(e.dependencies)?(typeof r=="function"&&(Fd(t,n,r,l),p=t.memoizedState),(g=To||Wm(t,n,g,l,_,p,s)||e!==null&&e.dependencies!==null&&Hc(e.dependencies))?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,p,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,p,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=p),a.props=l,a.state=p,a.context=s,l=g):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&_===e.memoizedState||(t.flags|=1024),l=!1)}return a=l,Sc(e,t),l=(t.flags&128)!==0,a||l?(a=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&l?(t.child=Di(t,e.child,null,o),t.child=Di(t,null,n,o)):mn(e,t,n,o),t.memoizedState=a.state,e=t.child):e=mo(e,t,o),e}function Pm(e,t,n,l){return is(),t.flags|=256,mn(e,t,n,l),t.child}var Zd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kd(e){return{baseLanes:e,cachePool:mg()}}function Pd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=bl),e}function cp(e,t,n){var l=t.pendingProps,o=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),i&&(o=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,e===null){if(ct){if(o?No(t):Do(t),ct){var r=qt,s;if(s=r){e:{for(s=r,r=Yl;s.nodeType!==8;){if(!r){r=null;break e}if(s=Rl(s.nextSibling),s===null){r=null;break e}}r=s}r!==null?(t.memoizedState={dehydrated:r,treeContext:ba!==null?{id:io,overflow:ro}:null,retryLane:536870912,hydrationErrors:null},s=Jn(18,null,null,0),s.stateNode=r,s.return=t,t.child=s,zn=t,qt=null,s=!0):s=!1}s||Sa(t)}if(r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return tf(r)?t.lanes=32:t.lanes=536870912,null;co(t)}return r=l.children,l=l.fallback,o?(Do(t),o=t.mode,r=Qc({mode:"hidden",children:r},o),l=ya(l,o,n,null),r.return=t,l.return=t,r.sibling=l,t.child=r,o=t.child,o.memoizedState=Kd(n),o.childLanes=Pd(e,i,n),t.memoizedState=Zd,l):(No(t),X_(t,r))}if(s=e.memoizedState,s!==null&&(r=s.dehydrated,r!==null)){if(a)t.flags&256?(No(t),t.flags&=-257,t=Jd(e,t,n)):t.memoizedState!==null?(Do(t),t.child=e.child,t.flags|=128,t=null):(Do(t),o=l.fallback,r=t.mode,l=Qc({mode:"visible",children:l.children},r),o=ya(o,r,n,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,Di(t,e.child,null,n),l=t.child,l.memoizedState=Kd(n),l.childLanes=Pd(e,i,n),t.memoizedState=Zd,t=o);else if(No(t),tf(r)){if(i=r.nextSibling&&r.nextSibling.dataset,i)var d=i.dgst;i=d,l=Error(q(419)),l.stack="",l.digest=i,Wr({value:l,source:null,stack:null}),t=Jd(e,t,n)}else if(cn||rs(e,t,n,!1),i=(n&e.childLanes)!==0,cn||i){if(i=Dt,i!==null&&(l=n&-n,l=(l&42)!==0?1:uf(l),l=(l&(i.suspendedLanes|n))!==0?0:l,l!==0&&l!==s.retryLane))throw s.retryLane=l,Hi(e,l),ll(i,e,l),ip;r.data==="$?"||V_(),t=Jd(e,t,n)}else r.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,qt=Rl(r.nextSibling),zn=t,ct=!0,xa=null,Yl=!1,e!==null&&(ml[gl++]=io,ml[gl++]=ro,ml[gl++]=ba,io=e.id,ro=e.overflow,ba=t),t=X_(t,l.children),t.flags|=4096);return t}return o?(Do(t),o=l.fallback,r=t.mode,s=e.child,d=s.sibling,l=uo(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,d!==null?o=uo(d,o):(o=ya(o,r,n,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,l=o,o=t.child,r=e.child.memoizedState,r===null?r=Kd(n):(s=r.cachePool,s!==null?(d=ln._currentValue,s=s.parent!==d?{parent:d,pool:d}:s):s=mg(),r={baseLanes:r.baseLanes|n,cachePool:s}),o.memoizedState=r,o.childLanes=Pd(e,i,n),t.memoizedState=Zd,l):(No(t),n=e.child,e=n.sibling,n=uo(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=n,t.memoizedState=null,n)}function X_(e,t){return t=Qc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qc(e,t){return e=Jn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Jd(e,t,n){return Di(t,e.child,null,n),e=X_(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jm(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),R_(e.return,t,n)}function e_(e,t,n,l,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=l,a.tail=n,a.tailMode=o)}function up(e,t,n){var l=t.pendingProps,o=l.revealOrder,a=l.tail;if(mn(e,t,l.children,n),l=on.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jm(e,n,t);else if(e.tag===19)Jm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Yt(on,l),o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&qc(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),e_(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&qc(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}e_(t,!0,n,null,a);break;case"together":e_(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mo(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Go|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(rs(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=uo(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=uo(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Yf(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hc(e)))}function Pb(e,t,n){switch(t.tag){case 3:Nc(t,t.stateNode.containerInfo),Ro(t,ln,e.memoizedState.cache),is();break;case 27:case 5:p_(t);break;case 4:Nc(t,t.stateNode.containerInfo);break;case 10:Ro(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(No(t),t.flags|=128,null):(n&t.child.childLanes)!==0?cp(e,t,n):(No(t),e=mo(e,t,n),e!==null?e.sibling:null);No(t);break;case 19:var o=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(rs(e,t,n,!1),l=(n&t.childLanes)!==0),o){if(l)return up(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Yt(on,on.current),l)break;return null;case 22:case 23:return t.lanes=0,sp(e,t,n);case 24:Ro(t,ln,e.memoizedState.cache)}return mo(e,t,n)}function dp(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)cn=!0;else{if(!Yf(e,n)&&(t.flags&128)===0)return cn=!1,Pb(e,t,n);cn=(e.flags&131072)!==0}else cn=!1,ct&&(t.flags&1048576)!==0&&fg(t,$c,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,o=l._init;if(l=o(l._payload),t.type=l,typeof l=="function")vf(l)?(e=Ea(l,e),t.tag=1,t=Km(null,t,l,e,n)):(t.tag=0,t=j_(null,t,l,e,n));else{if(l!=null){if(o=l.$$typeof,o===rf){t.tag=11,t=Gm(null,t,l,e,n);break e}else if(o===sf){t.tag=14,t=Vm(null,t,l,e,n);break e}}throw t=m_(l)||l,Error(q(306,t,""))}}return t;case 0:return j_(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,o=Ea(l,t.pendingProps),Km(e,t,l,o,n);case 3:e:{if(Nc(t,t.stateNode.containerInfo),e===null)throw Error(q(387));l=t.pendingProps;var a=t.memoizedState;o=a.element,L_(e,t),Lr(t,l,null,n);var i=t.memoizedState;if(l=i.cache,Ro(t,ln,l),l!==a.cache&&N_(t,[ln],n,!0),Ar(),l=i.element,a.isDehydrated)if(a={element:l,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Pm(e,t,l,n);break e}else if(l!==o){o=yl(Error(q(424)),t),Wr(o),t=Pm(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qt=Rl(e.firstChild),zn=t,ct=!0,xa=null,Yl=!0,n=Jg(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(is(),l===o){t=mo(e,t,n);break e}mn(e,t,l,n)}t=t.child}return t;case 26:return Sc(e,t),e===null?(n=y1(t.type,null,t.pendingProps,null))?t.memoizedState=n:ct||(n=t.type,e=t.pendingProps,l=Jc($o.current).createElement(n),l[Cn]=t,l[qn]=e,pn(l,n,e),sn(l),t.stateNode=l):t.memoizedState=y1(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return p_(t),e===null&&ct&&(l=t.stateNode=Kp(t.type,t.pendingProps,$o.current),zn=t,Yl=!0,o=qt,Fo(t.type)?(nf=o,qt=Rl(l.firstChild)):qt=o),mn(e,t,t.pendingProps.children,n),Sc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ct&&((o=l=qt)&&(l=Sx(l,t.type,t.pendingProps,Yl),l!==null?(t.stateNode=l,zn=t,qt=Rl(l.firstChild),Yl=!1,o=!0):o=!1),o||Sa(t)),p_(t),o=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,J_(o,a)?l=null:i!==null&&J_(o,i)&&(t.flags|=32),t.memoizedState!==null&&(o=Rf(e,t,Wb,null,null,n),Zr._currentValue=o),Sc(e,t),mn(e,t,l,n),t.child;case 6:return e===null&&ct&&((e=n=qt)&&(n=Cx(n,t.pendingProps,Yl),n!==null?(t.stateNode=n,zn=t,qt=null,e=!0):e=!1),e||Sa(t)),null;case 13:return cp(e,t,n);case 4:return Nc(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Di(t,null,l,n):mn(e,t,l,n),t.child;case 11:return Gm(e,t,t.type,t.pendingProps,n);case 7:return mn(e,t,t.pendingProps,n),t.child;case 8:return mn(e,t,t.pendingProps.children,n),t.child;case 12:return mn(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Ro(t,t.type,l.value),mn(e,t,l.children,n),t.child;case 9:return o=t.type._context,l=t.pendingProps.children,Ca(t),o=Mn(o),l=l(o),t.flags|=1,mn(e,t,l,n),t.child;case 14:return Vm(e,t,t.type,t.pendingProps,n);case 15:return rp(e,t,t.type,t.pendingProps,n);case 19:return up(e,t,n);case 31:return l=t.pendingProps,n=t.mode,l={mode:l.mode,children:l.children},e===null?(n=Qc(l,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=uo(e.child,l),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return sp(e,t,n);case 24:return Ca(t),l=Mn(ln),e===null?(o=Cf(),o===null&&(o=Dt,a=Sf(),o.pooledCache=a,a.refCount++,a!==null&&(o.pooledCacheLanes|=n),o=a),t.memoizedState={parent:l,cache:o},Mf(t),Ro(t,ln,o)):((e.lanes&n)!==0&&(L_(e,t),Lr(t,null,null,n),Ar()),o=e.memoizedState,a=t.memoizedState,o.parent!==l?(o={parent:l,cache:l},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),Ro(t,ln,l)):(l=a.cache,Ro(t,ln,l),l!==o.cache&&N_(t,[ln],n,!0))),mn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(q(156,t.tag))}function no(e){e.flags|=4}function e1(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ey(t)){if(t=xl.current,t!==null&&((Pe&4194048)===Pe?Wl!==null:(Pe&62914560)!==Pe&&(Pe&536870912)===0||t!==Wl))throw Nr=A_,gg;e.flags|=8192}}function uc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$1():536870912,e.lanes|=t,Ai|=t)}function yr(e,t){if(!ct)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function jt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags&65011712,l|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,l|=o.subtreeFlags,l|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function Jb(e,t,n){var l=t.pendingProps;switch(kf(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(t),null;case 1:return jt(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),_o(ln),Ci(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(gr(t)?no(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nm())),jt(t),null;case 26:return n=t.memoizedState,e===null?(no(t),n!==null?(jt(t),e1(t,n)):(jt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(no(t),jt(t),e1(t,n)):(jt(t),t.flags&=-16777217):(e.memoizedProps!==l&&no(t),jt(t),t.flags&=-16777217),null;case 27:Dc(t),n=$o.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&no(t);else{if(!l){if(t.stateNode===null)throw Error(q(166));return jt(t),null}e=Xl.current,gr(t)?Tm(t,e):(e=Kp(o,l,n),t.stateNode=e,no(t))}return jt(t),null;case 5:if(Dc(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&no(t);else{if(!l){if(t.stateNode===null)throw Error(q(166));return jt(t),null}if(e=Xl.current,gr(t))Tm(t,e);else{switch(o=Jc($o.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}e[Cn]=t,e[qn]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(pn(e,n,l),n){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&no(t)}}return jt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&no(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(q(166));if(e=$o.current,gr(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,o=zn,o!==null)switch(o.tag){case 27:case 5:l=o.memoizedProps}e[Cn]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Vp(e.nodeValue,n)),e||Sa(t)}else e=Jc(e).createTextNode(l),e[Cn]=t,t.stateNode=e}return jt(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=gr(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(q(317));o[Cn]=t}else is(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;jt(t),o=!1}else o=Nm(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(co(t),t):(co(t),null)}if(co(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=l!==null,e=e!==null&&e.memoizedState!==null,n){l=t.child,o=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(o=l.alternate.memoizedState.cachePool.pool);var a=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==o&&(l.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),uc(t,t.updateQueue),jt(t),null;case 4:return Ci(),e===null&&Vf(t.stateNode.containerInfo),jt(t),null;case 10:return _o(t.type),jt(t),null;case 19:if(un(on),o=t.memoizedState,o===null)return jt(t),null;if(l=(t.flags&128)!==0,a=o.rendering,a===null)if(l)yr(o,!1);else{if(Wt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=qc(e),a!==null){for(t.flags|=128,yr(o,!1),e=a.updateQueue,t.updateQueue=e,uc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)_g(n,e),n=n.sibling;return Yt(on,on.current&1|2),t.child}e=e.sibling}o.tail!==null&&ql()>Vc&&(t.flags|=128,l=!0,yr(o,!1),t.lanes=4194304)}else{if(!l)if(e=qc(a),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,uc(t,e),yr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ct)return jt(t),null}else 2*ql()-o.renderingStartTime>Vc&&n!==536870912&&(t.flags|=128,l=!0,yr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(e=o.last,e!==null?e.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ql(),t.sibling=null,e=on.current,Yt(on,l?e&1|2:e&1),t):(jt(t),null);case 22:case 23:return co(t),Ef(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(jt(t),t.subtreeFlags&6&&(t.flags|=8192)):jt(t),n=t.updateQueue,n!==null&&uc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&un(va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),_o(ln),jt(t),null;case 25:return null;case 30:return null}throw Error(q(156,t.tag))}function ex(e,t){switch(kf(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _o(ln),Ci(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Dc(t),null;case 13:if(co(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));is()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return un(on),null;case 4:return Ci(),null;case 10:return _o(t.type),null;case 22:case 23:return co(t),Ef(),e!==null&&un(va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return _o(ln),null;case 25:return null;default:return null}}function _p(e,t){switch(kf(t),t.tag){case 3:_o(ln),Ci();break;case 26:case 27:case 5:Dc(t);break;case 4:Ci();break;case 13:co(t);break;case 19:un(on);break;case 10:_o(t.type);break;case 22:case 23:co(t),Ef(),e!==null&&un(va);break;case 24:_o(ln)}}function _s(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var o=l.next;n=o;do{if((n.tag&e)===e){l=void 0;var a=n.create,i=n.inst;l=a(),i.destroy=l}n=n.next}while(n!==o)}}catch(r){Mt(t,t.return,r)}}function Qo(e,t,n){try{var l=t.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var a=o.next;l=a;do{if((l.tag&e)===e){var i=l.inst,r=i.destroy;if(r!==void 0){i.destroy=void 0,o=t;var s=n,d=r;try{d()}catch(g){Mt(o,s,g)}}}l=l.next}while(l!==a)}}catch(g){Mt(t,t.return,g)}}function fp(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{bg(t,n)}catch(l){Mt(e,e.return,l)}}}function hp(e,t,n){n.props=Ea(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){Mt(e,t,l)}}function zr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(o){Mt(e,t,o)}}function jl(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(o){Mt(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){Mt(e,t,o)}else n.current=null}function mp(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(o){Mt(e,e.return,o)}}function t_(e,t,n){try{var l=e.stateNode;bx(l,e.type,n,t),l[qn]=t}catch(o){Mt(e,e.return,o)}}function gp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Fo(e.type)||e.tag===4}function n_(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Fo(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function q_(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=yu));else if(l!==4&&(l===27&&Fo(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(q_(e,t,n),e=e.sibling;e!==null;)q_(e,t,n),e=e.sibling}function Gc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Fo(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Gc(e,t,n),e=e.sibling;e!==null;)Gc(e,t,n),e=e.sibling}function pp(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);pn(t,l,n),t[Cn]=e,t[qn]=n}catch(a){Mt(e,e.return,a)}}var oo=!1,Ft=!1,l_=!1,t1=typeof WeakSet=="function"?WeakSet:Set,rn=null;function tx(e,t){if(e=e.containerInfo,K_=lu,e=og(e),yf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var o=l.anchorOffset,a=l.focusNode;l=l.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,r=-1,s=-1,d=0,g=0,h=e,_=null;t:for(;;){for(var p;h!==n||o!==0&&h.nodeType!==3||(r=i+o),h!==a||l!==0&&h.nodeType!==3||(s=i+l),h.nodeType===3&&(i+=h.nodeValue.length),(p=h.firstChild)!==null;)_=h,h=p;for(;;){if(h===e)break t;if(_===n&&++d===o&&(r=i),_===a&&++g===l&&(s=i),(p=h.nextSibling)!==null)break;h=_,_=h.parentNode}h=p}n=r===-1||s===-1?null:{start:r,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(P_={focusedElem:e,selectionRange:n},lu=!1,rn=t;rn!==null;)if(t=rn,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,rn=e;else for(;rn!==null;){switch(t=rn,a=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,o=a.memoizedProps,a=a.memoizedState,l=n.stateNode;try{var S=Ea(n.type,o,n.elementType===n.type);e=l.getSnapshotBeforeUpdate(S,a),l.__reactInternalSnapshotBeforeUpdate=e}catch(T){Mt(n,n.return,T)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ef(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(q(163))}if(e=t.sibling,e!==null){e.return=t.return,rn=e;break}rn=t.return}}function yp(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Co(e,n),l&4&&_s(5,n);break;case 1:if(Co(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(i){Mt(n,n.return,i)}else{var o=Ea(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(i){Mt(n,n.return,i)}}l&64&&fp(n),l&512&&zr(n,n.return);break;case 3:if(Co(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{bg(e,t)}catch(i){Mt(n,n.return,i)}}break;case 27:t===null&&l&4&&pp(n);case 26:case 5:Co(e,n),t===null&&l&4&&mp(n),l&512&&zr(n,n.return);break;case 12:Co(e,n);break;case 13:Co(e,n),l&4&&vp(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=ux.bind(null,n),Mx(e,n))));break;case 22:if(l=n.memoizedState!==null||oo,!l){t=t!==null&&t.memoizedState!==null||Ft,o=oo;var a=Ft;oo=l,(Ft=t)&&!a?Mo(e,n,(n.subtreeFlags&8772)!==0):Co(e,n),oo=o,Ft=a}break;case 30:break;default:Co(e,n)}}function bp(e){var t=e.alternate;t!==null&&(e.alternate=null,bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_f(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ut=null,jn=!1;function lo(e,t,n){for(n=n.child;n!==null;)xp(e,t,n),n=n.sibling}function xp(e,t,n){if(el&&typeof el.onCommitFiberUnmount=="function")try{el.onCommitFiberUnmount(ts,n)}catch{}switch(n.tag){case 26:Ft||jl(n,t),lo(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ft||jl(n,t);var l=Ut,o=jn;Fo(n.type)&&(Ut=n.stateNode,jn=!1),lo(e,t,n),Ur(n.stateNode),Ut=l,jn=o;break;case 5:Ft||jl(n,t);case 6:if(l=Ut,o=jn,Ut=null,lo(e,t,n),Ut=l,jn=o,Ut!==null)if(jn)try{(Ut.nodeType===9?Ut.body:Ut.nodeName==="HTML"?Ut.ownerDocument.body:Ut).removeChild(n.stateNode)}catch(a){Mt(n,t,a)}else try{Ut.removeChild(n.stateNode)}catch(a){Mt(n,t,a)}break;case 18:Ut!==null&&(jn?(e=Ut,m1(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Jr(e)):m1(Ut,n.stateNode));break;case 4:l=Ut,o=jn,Ut=n.stateNode.containerInfo,jn=!0,lo(e,t,n),Ut=l,jn=o;break;case 0:case 11:case 14:case 15:Ft||Qo(2,n,t),Ft||Qo(4,n,t),lo(e,t,n);break;case 1:Ft||(jl(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&hp(n,t,l)),lo(e,t,n);break;case 21:lo(e,t,n);break;case 22:Ft=(l=Ft)||n.memoizedState!==null,lo(e,t,n),Ft=l;break;default:lo(e,t,n)}}function vp(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jr(e)}catch(n){Mt(t,t.return,n)}}function nx(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new t1),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new t1),t;default:throw Error(q(435,e.tag))}}function o_(e,t){var n=nx(e);t.forEach(function(l){var o=dx.bind(null,e,l);n.has(l)||(n.add(l),l.then(o,o))})}function Zn(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var o=n[l],a=e,i=t,r=i;e:for(;r!==null;){switch(r.tag){case 27:if(Fo(r.type)){Ut=r.stateNode,jn=!1;break e}break;case 5:Ut=r.stateNode,jn=!1;break e;case 3:case 4:Ut=r.stateNode.containerInfo,jn=!0;break e}r=r.return}if(Ut===null)throw Error(q(160));xp(a,i,o),Ut=null,jn=!1,a=o.alternate,a!==null&&(a.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)wp(t,e),t=t.sibling}var Tl=null;function wp(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Zn(t,e),Kn(e),l&4&&(Qo(3,e,e.return),_s(3,e),Qo(5,e,e.return));break;case 1:Zn(t,e),Kn(e),l&512&&(Ft||n===null||jl(n,n.return)),l&64&&oo&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var o=Tl;if(Zn(t,e),Kn(e),l&512&&(Ft||n===null||jl(n,n.return)),l&4){var a=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(l){case"title":a=o.getElementsByTagName("title")[0],(!a||a[os]||a[Cn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=o.createElement(l),o.head.insertBefore(a,o.querySelector("head > title"))),pn(a,l,n),a[Cn]=e,sn(a),l=a;break e;case"link":var i=x1("link","href",o).get(l+(n.href||""));if(i){for(var r=0;r<i.length;r++)if(a=i[r],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){i.splice(r,1);break t}}a=o.createElement(l),pn(a,l,n),o.head.appendChild(a);break;case"meta":if(i=x1("meta","content",o).get(l+(n.content||""))){for(r=0;r<i.length;r++)if(a=i[r],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){i.splice(r,1);break t}}a=o.createElement(l),pn(a,l,n),o.head.appendChild(a);break;default:throw Error(q(468,l))}a[Cn]=e,sn(a),l=a}e.stateNode=l}else v1(o,e.type,e.stateNode);else e.stateNode=b1(o,l,e.memoizedProps);else a!==l?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,l===null?v1(o,e.type,e.stateNode):b1(o,l,e.memoizedProps)):l===null&&e.stateNode!==null&&t_(e,e.memoizedProps,n.memoizedProps)}break;case 27:Zn(t,e),Kn(e),l&512&&(Ft||n===null||jl(n,n.return)),n!==null&&l&4&&t_(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Zn(t,e),Kn(e),l&512&&(Ft||n===null||jl(n,n.return)),e.flags&32){o=e.stateNode;try{Ei(o,"")}catch(p){Mt(e,e.return,p)}}l&4&&e.stateNode!=null&&(o=e.memoizedProps,t_(e,o,n!==null?n.memoizedProps:o)),l&1024&&(l_=!0);break;case 6:if(Zn(t,e),Kn(e),l&4){if(e.stateNode===null)throw Error(q(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(p){Mt(e,e.return,p)}}break;case 3:if(Ec=null,o=Tl,Tl=eu(t.containerInfo),Zn(t,e),Tl=o,Kn(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(p){Mt(e,e.return,p)}l_&&(l_=!1,kp(e));break;case 4:l=Tl,Tl=eu(e.stateNode.containerInfo),Zn(t,e),Kn(e),Tl=l;break;case 12:Zn(t,e),Kn(e);break;case 13:Zn(t,e),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(If=ql()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,o_(e,l)));break;case 22:o=e.memoizedState!==null;var s=n!==null&&n.memoizedState!==null,d=oo,g=Ft;if(oo=d||o,Ft=g||s,Zn(t,e),Ft=g,oo=d,Kn(e),l&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(n===null||s||oo||Ft||ga(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){s=n=t;try{if(a=s.stateNode,o)i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{r=s.stateNode;var h=s.memoizedProps.style,_=h!=null&&h.hasOwnProperty("display")?h.display:null;r.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(p){Mt(s,s.return,p)}}}else if(t.tag===6){if(n===null){s=t;try{s.stateNode.nodeValue=o?"":s.memoizedProps}catch(p){Mt(s,s.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,o_(e,n))));break;case 19:Zn(t,e),Kn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,o_(e,l)));break;case 30:break;case 21:break;default:Zn(t,e),Kn(e)}}function Kn(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(gp(l)){n=l;break}l=l.return}if(n==null)throw Error(q(160));switch(n.tag){case 27:var o=n.stateNode,a=n_(e);Gc(e,a,o);break;case 5:var i=n.stateNode;n.flags&32&&(Ei(i,""),n.flags&=-33);var r=n_(e);Gc(e,r,i);break;case 3:case 4:var s=n.stateNode.containerInfo,d=n_(e);q_(e,d,s);break;default:throw Error(q(161))}}catch(g){Mt(e,e.return,g)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kp(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Co(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yp(e,t.alternate,t),t=t.sibling}function ga(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qo(4,t,t.return),ga(t);break;case 1:jl(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&hp(t,t.return,n),ga(t);break;case 27:Ur(t.stateNode);case 26:case 5:jl(t,t.return),ga(t);break;case 22:t.memoizedState===null&&ga(t);break;case 30:ga(t);break;default:ga(t)}e=e.sibling}}function Mo(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,o=e,a=t,i=a.flags;switch(a.tag){case 0:case 11:case 15:Mo(o,a,n),_s(4,a);break;case 1:if(Mo(o,a,n),l=a,o=l.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(d){Mt(l,l.return,d)}if(l=a,o=l.updateQueue,o!==null){var r=l.stateNode;try{var s=o.shared.hiddenCallbacks;if(s!==null)for(o.shared.hiddenCallbacks=null,o=0;o<s.length;o++)yg(s[o],r)}catch(d){Mt(l,l.return,d)}}n&&i&64&&fp(a),zr(a,a.return);break;case 27:pp(a);case 26:case 5:Mo(o,a,n),n&&l===null&&i&4&&mp(a),zr(a,a.return);break;case 12:Mo(o,a,n);break;case 13:Mo(o,a,n),n&&i&4&&vp(o,a);break;case 22:a.memoizedState===null&&Mo(o,a,n),zr(a,a.return);break;case 30:break;default:Mo(o,a,n)}t=t.sibling}}function jf(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ss(n))}function Xf(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ss(e))}function Ul(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sp(e,t,n,l),t=t.sibling}function Sp(e,t,n,l){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Ul(e,t,n,l),o&2048&&_s(9,t);break;case 1:Ul(e,t,n,l);break;case 3:Ul(e,t,n,l),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ss(e)));break;case 12:if(o&2048){Ul(e,t,n,l),e=t.stateNode;try{var a=t.memoizedProps,i=a.id,r=a.onPostCommit;typeof r=="function"&&r(i,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){Mt(t,t.return,s)}}else Ul(e,t,n,l);break;case 13:Ul(e,t,n,l);break;case 23:break;case 22:a=t.stateNode,i=t.alternate,t.memoizedState!==null?a._visibility&2?Ul(e,t,n,l):Br(e,t):a._visibility&2?Ul(e,t,n,l):(a._visibility|=2,li(e,t,n,l,(t.subtreeFlags&10256)!==0)),o&2048&&jf(i,t);break;case 24:Ul(e,t,n,l),o&2048&&Xf(t.alternate,t);break;default:Ul(e,t,n,l)}}function li(e,t,n,l,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var a=e,i=t,r=n,s=l,d=i.flags;switch(i.tag){case 0:case 11:case 15:li(a,i,r,s,o),_s(8,i);break;case 23:break;case 22:var g=i.stateNode;i.memoizedState!==null?g._visibility&2?li(a,i,r,s,o):Br(a,i):(g._visibility|=2,li(a,i,r,s,o)),o&&d&2048&&jf(i.alternate,i);break;case 24:li(a,i,r,s,o),o&&d&2048&&Xf(i.alternate,i);break;default:li(a,i,r,s,o)}t=t.sibling}}function Br(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,o=l.flags;switch(l.tag){case 22:Br(n,l),o&2048&&jf(l.alternate,l);break;case 24:Br(n,l),o&2048&&Xf(l.alternate,l);break;default:Br(n,l)}t=t.sibling}}var Cr=8192;function ei(e){if(e.subtreeFlags&Cr)for(e=e.child;e!==null;)Cp(e),e=e.sibling}function Cp(e){switch(e.tag){case 26:ei(e),e.flags&Cr&&e.memoizedState!==null&&Ux(Tl,e.memoizedState,e.memoizedProps);break;case 5:ei(e);break;case 3:case 4:var t=Tl;Tl=eu(e.stateNode.containerInfo),ei(e),Tl=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Cr,Cr=16777216,ei(e),Cr=t):ei(e));break;default:ei(e)}}function Mp(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function br(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];rn=l,Tp(l,e)}Mp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ep(e),e=e.sibling}function Ep(e){switch(e.tag){case 0:case 11:case 15:br(e),e.flags&2048&&Qo(9,e,e.return);break;case 3:br(e);break;case 12:br(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cc(e)):br(e);break;default:br(e)}}function Cc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];rn=l,Tp(l,e)}Mp(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qo(8,t,t.return),Cc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Cc(t));break;default:Cc(t)}e=e.sibling}}function Tp(e,t){for(;rn!==null;){var n=rn;switch(n.tag){case 0:case 11:case 15:Qo(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ss(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,rn=l;else e:for(n=e;rn!==null;){l=rn;var o=l.sibling,a=l.return;if(bp(l),l===n){rn=null;break e}if(o!==null){o.return=a,rn=o;break e}rn=a}}}var lx={getCacheForType:function(e){var t=Mn(ln),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},ox=typeof WeakMap=="function"?WeakMap:Map,mt=0,Dt=null,Qe=null,Pe=0,ht=0,Pn=null,zo=!1,Ui=!1,qf=!1,go=0,Wt=0,Go=0,wa=0,Wf=0,bl=0,Ai=0,$r=null,Xn=null,W_=!1,If=0,Vc=1/0,Fc=null,Yo=null,gn=0,jo=null,Li=null,Si=0,I_=0,Q_=null,Rp=null,Hr=0,G_=null;function nl(){if((mt&2)!==0&&Pe!==0)return Pe&-Pe;if(we.T!==null){var e=Ti;return e!==0?e:Gf()}return Y1()}function Np(){bl===0&&(bl=(Pe&536870912)===0||ct?B1():536870912);var e=xl.current;return e!==null&&(e.flags|=32),bl}function ll(e,t,n){(e===Dt&&(ht===2||ht===9)||e.cancelPendingCommit!==null)&&(Oi(e,0),Bo(e,Pe,bl,!1)),ls(e,n),((mt&2)===0||e!==Dt)&&(e===Dt&&((mt&2)===0&&(wa|=n),Wt===4&&Bo(e,Pe,bl,!1)),Ql(e))}function Dp(e,t,n){if((mt&6)!==0)throw Error(q(327));var l=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ns(e,t),o=l?rx(e,t):a_(e,t,!0),a=l;do{if(o===0){Ui&&!l&&Bo(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!ax(n)){o=a_(e,t,!1),a=!1;continue}if(o===2){if(a=t,e.errorRecoveryDisabledLanes&a)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;e:{var r=e;o=$r;var s=r.current.memoizedState.isDehydrated;if(s&&(Oi(r,i).flags|=256),i=a_(r,i,!1),i!==2){if(qf&&!s){r.errorRecoveryDisabledLanes|=a,wa|=a,o=4;break e}a=Xn,Xn=o,a!==null&&(Xn===null?Xn=a:Xn.push.apply(Xn,a))}o=i}if(a=!1,o!==2)continue}}if(o===1){Oi(e,0),Bo(e,t,0,!0);break}e:{switch(l=e,a=o,a){case 0:case 1:throw Error(q(345));case 4:if((t&4194048)!==t)break;case 6:Bo(l,t,bl,!zo);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(q(329))}if((t&62914560)===t&&(o=If+300-ql(),10<o)){if(Bo(l,t,bl,!zo),au(l,0,!0)!==0)break e;l.timeoutHandle=Zp(n1.bind(null,l,n,Xn,Fc,W_,t,bl,wa,Ai,zo,a,2,-0,0),o);break e}n1(l,n,Xn,Fc,W_,t,bl,wa,Ai,zo,a,0,-0,0)}}break}while(!0);Ql(e)}function n1(e,t,n,l,o,a,i,r,s,d,g,h,_,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,(h&8192||(h&16785408)===16785408)&&(Fr={stylesheets:null,count:0,unsuspend:Hx},Cp(t),h=Yx(),h!==null)){e.cancelPendingCommit=h(o1.bind(null,e,t,a,n,l,o,i,r,s,g,1,_,p)),Bo(e,a,i,!d);return}o1(e,t,a,n,l,o,i,r,s)}function ax(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var o=n[l],a=o.getSnapshot;o=o.value;try{if(!ol(a(),o))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bo(e,t,n,l){t&=~Wf,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var o=t;0<o;){var a=31-tl(o),i=1<<a;l[a]=-1,o&=~i}n!==0&&H1(e,n,t)}function mu(){return(mt&6)===0?(fs(0,!1),!1):!0}function Qf(){if(Qe!==null){if(ht===0)var e=Qe.return;else e=Qe,so=Da=null,Af(e),ki=null,Qr=0,e=Qe;for(;e!==null;)_p(e.alternate,e),e=e.return;Qe=null}}function Oi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,vx(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Qf(),Dt=e,Qe=n=uo(e.current,null),Pe=t,ht=0,Pn=null,zo=!1,Ui=ns(e,t),qf=!1,Ai=bl=Wf=wa=Go=Wt=0,Xn=$r=null,W_=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var o=31-tl(l),a=1<<o;t|=e[o],l&=~a}return go=t,cu(),n}function Ap(e,t){Xe=null,we.H=Xc,t===cs||t===du?(t=Om(),ht=3):t===gg?(t=Om(),ht=4):ht=t===ip?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Pn=t,Qe===null&&(Wt=1,Ic(e,yl(t,e.current)))}function Lp(){var e=we.H;return we.H=Xc,e===null?Xc:e}function Op(){var e=we.A;return we.A=lx,e}function V_(){Wt=4,zo||(Pe&4194048)!==Pe&&xl.current!==null||(Ui=!0),(Go&134217727)===0&&(wa&134217727)===0||Dt===null||Bo(Dt,Pe,bl,!1)}function a_(e,t,n){var l=mt;mt|=2;var o=Lp(),a=Op();(Dt!==e||Pe!==t)&&(Fc=null,Oi(e,t)),t=!1;var i=Wt;e:do try{if(ht!==0&&Qe!==null){var r=Qe,s=Pn;switch(ht){case 8:Qf(),i=6;break e;case 3:case 2:case 9:case 6:xl.current===null&&(t=!0);var d=ht;if(ht=0,Pn=null,gi(e,r,s,d),n&&Ui){i=0;break e}break;default:d=ht,ht=0,Pn=null,gi(e,r,s,d)}}ix(),i=Wt;break}catch(g){Ap(e,g)}while(!0);return t&&e.shellSuspendCounter++,so=Da=null,mt=l,we.H=o,we.A=a,Qe===null&&(Dt=null,Pe=0,cu()),i}function ix(){for(;Qe!==null;)zp(Qe)}function rx(e,t){var n=mt;mt|=2;var l=Lp(),o=Op();Dt!==e||Pe!==t?(Fc=null,Vc=ql()+500,Oi(e,t)):Ui=ns(e,t);e:do try{if(ht!==0&&Qe!==null){t=Qe;var a=Pn;t:switch(ht){case 1:ht=0,Pn=null,gi(e,t,a,1);break;case 2:case 9:if(Lm(a)){ht=0,Pn=null,l1(t);break}t=function(){ht!==2&&ht!==9||Dt!==e||(ht=7),Ql(e)},a.then(t,t);break e;case 3:ht=7;break e;case 4:ht=5;break e;case 7:Lm(a)?(ht=0,Pn=null,l1(t)):(ht=0,Pn=null,gi(e,t,a,7));break;case 5:var i=null;switch(Qe.tag){case 26:i=Qe.memoizedState;case 5:case 27:var r=Qe;if(!i||ey(i)){ht=0,Pn=null;var s=r.sibling;if(s!==null)Qe=s;else{var d=r.return;d!==null?(Qe=d,gu(d)):Qe=null}break t}}ht=0,Pn=null,gi(e,t,a,5);break;case 6:ht=0,Pn=null,gi(e,t,a,6);break;case 8:Qf(),Wt=6;break e;default:throw Error(q(462))}}sx();break}catch(g){Ap(e,g)}while(!0);return so=Da=null,we.H=l,we.A=o,mt=n,Qe!==null?0:(Dt=null,Pe=0,cu(),Wt)}function sx(){for(;Qe!==null&&!N2();)zp(Qe)}function zp(e){var t=dp(e.alternate,e,go);e.memoizedProps=e.pendingProps,t===null?gu(e):Qe=t}function l1(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zm(n,t,t.pendingProps,t.type,void 0,Pe);break;case 11:t=Zm(n,t,t.pendingProps,t.type.render,t.ref,Pe);break;case 5:Af(t);default:_p(n,t),t=Qe=_g(t,go),t=dp(n,t,go)}e.memoizedProps=e.pendingProps,t===null?gu(e):Qe=t}function gi(e,t,n,l){so=Da=null,Af(t),ki=null,Qr=0;var o=t.return;try{if(Kb(e,o,t,n,Pe)){Wt=1,Ic(e,yl(n,e.current)),Qe=null;return}}catch(a){if(o!==null)throw Qe=o,a;Wt=1,Ic(e,yl(n,e.current)),Qe=null;return}t.flags&32768?(ct||l===1?e=!0:Ui||(Pe&536870912)!==0?e=!1:(zo=e=!0,(l===2||l===9||l===3||l===6)&&(l=xl.current,l!==null&&l.tag===13&&(l.flags|=16384))),Bp(t,e)):gu(t)}function gu(e){var t=e;do{if((t.flags&32768)!==0){Bp(t,zo);return}e=t.return;var n=Jb(t.alternate,t,go);if(n!==null){Qe=n;return}if(t=t.sibling,t!==null){Qe=t;return}Qe=t=e}while(t!==null);Wt===0&&(Wt=5)}function Bp(e,t){do{var n=ex(e.alternate,e);if(n!==null){n.flags&=32767,Qe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Qe=e;return}Qe=e=n}while(e!==null);Wt=6,Qe=null}function o1(e,t,n,l,o,a,i,r,s){e.cancelPendingCommit=null;do pu();while(gn!==0);if((mt&6)!==0)throw Error(q(327));if(t!==null){if(t===e.current)throw Error(q(177));if(a=t.lanes|t.childLanes,a|=bf,Y2(e,n,a,i,r,s),e===Dt&&(Qe=Dt=null,Pe=0),Li=t,jo=e,Si=n,I_=a,Q_=o,Rp=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,_x(Ac,function(){return jp(!0),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=we.T,we.T=null,o=ut.p,ut.p=2,i=mt,mt|=4;try{tx(e,t,n)}finally{mt=i,ut.p=o,we.T=l}}gn=1,$p(),Hp(),Up()}}function $p(){if(gn===1){gn=0;var e=jo,t=Li,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=we.T,we.T=null;var l=ut.p;ut.p=2;var o=mt;mt|=4;try{wp(t,e);var a=P_,i=og(e.containerInfo),r=a.focusedElem,s=a.selectionRange;if(i!==r&&r&&r.ownerDocument&&lg(r.ownerDocument.documentElement,r)){if(s!==null&&yf(r)){var d=s.start,g=s.end;if(g===void 0&&(g=d),"selectionStart"in r)r.selectionStart=d,r.selectionEnd=Math.min(g,r.value.length);else{var h=r.ownerDocument||document,_=h&&h.defaultView||window;if(_.getSelection){var p=_.getSelection(),S=r.textContent.length,T=Math.min(s.start,S),D=s.end===void 0?T:Math.min(s.end,S);!p.extend&&T>D&&(i=D,D=T,T=i);var x=Cm(r,T),k=Cm(r,D);if(x&&k&&(p.rangeCount!==1||p.anchorNode!==x.node||p.anchorOffset!==x.offset||p.focusNode!==k.node||p.focusOffset!==k.offset)){var v=h.createRange();v.setStart(x.node,x.offset),p.removeAllRanges(),T>D?(p.addRange(v),p.extend(k.node,k.offset)):(v.setEnd(k.node,k.offset),p.addRange(v))}}}}for(h=[],p=r;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<h.length;r++){var m=h[r];m.element.scrollLeft=m.left,m.element.scrollTop=m.top}}lu=!!K_,P_=K_=null}finally{mt=o,ut.p=l,we.T=n}}e.current=t,gn=2}}function Hp(){if(gn===2){gn=0;var e=jo,t=Li,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=we.T,we.T=null;var l=ut.p;ut.p=2;var o=mt;mt|=4;try{yp(e,t.alternate,t)}finally{mt=o,ut.p=l,we.T=n}}gn=3}}function Up(){if(gn===4||gn===3){gn=0,D2();var e=jo,t=Li,n=Si,l=Rp;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?gn=5:(gn=0,Li=jo=null,Yp(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Yo=null),df(n),t=t.stateNode,el&&typeof el.onCommitFiberRoot=="function")try{el.onCommitFiberRoot(ts,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=we.T,o=ut.p,ut.p=2,we.T=null;try{for(var a=e.onRecoverableError,i=0;i<l.length;i++){var r=l[i];a(r.value,{componentStack:r.stack})}}finally{we.T=t,ut.p=o}}(Si&3)!==0&&pu(),Ql(e),o=e.pendingLanes,(n&4194090)!==0&&(o&42)!==0?e===G_?Hr++:(Hr=0,G_=e):Hr=0,fs(0,!1)}}function Yp(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ss(t)))}function pu(e){return $p(),Hp(),Up(),jp(e)}function jp(){if(gn!==5)return!1;var e=jo,t=I_;I_=0;var n=df(Si),l=we.T,o=ut.p;try{ut.p=32>n?32:n,we.T=null,n=Q_,Q_=null;var a=jo,i=Si;if(gn=0,Li=jo=null,Si=0,(mt&6)!==0)throw Error(q(331));var r=mt;if(mt|=4,Ep(a.current),Sp(a,a.current,i,n),mt=r,fs(0,!1),el&&typeof el.onPostCommitFiberRoot=="function")try{el.onPostCommitFiberRoot(ts,a)}catch{}return!0}finally{ut.p=o,we.T=l,Yp(e,t)}}function a1(e,t,n){t=yl(n,t),t=Y_(e.stateNode,t,2),e=Uo(e,t,2),e!==null&&(ls(e,2),Ql(e))}function Mt(e,t,n){if(e.tag===3)a1(e,e,n);else for(;t!==null;){if(t.tag===3){a1(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Yo===null||!Yo.has(l))){e=yl(n,e),n=op(2),l=Uo(t,n,2),l!==null&&(ap(n,l,t,e),ls(l,2),Ql(l));break}}t=t.return}}function i_(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new ox;var o=new Set;l.set(t,o)}else o=l.get(t),o===void 0&&(o=new Set,l.set(t,o));o.has(n)||(qf=!0,o.add(n),e=cx.bind(null,e,t,n),t.then(e,e))}function cx(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Dt===e&&(Pe&n)===n&&(Wt===4||Wt===3&&(Pe&62914560)===Pe&&300>ql()-If?(mt&2)===0&&Oi(e,0):Wf|=n,Ai===Pe&&(Ai=0)),Ql(e)}function Xp(e,t){t===0&&(t=$1()),e=Hi(e,t),e!==null&&(ls(e,t),Ql(e))}function ux(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Xp(e,n)}function dx(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(q(314))}l!==null&&l.delete(t),Xp(e,n)}function _x(e,t){return cf(e,t)}var Zc=null,oi=null,F_=!1,Kc=!1,r_=!1,ka=0;function Ql(e){e!==oi&&e.next===null&&(oi===null?Zc=oi=e:oi=oi.next=e),Kc=!0,F_||(F_=!0,hx())}function fs(e,t){if(!r_&&Kc){r_=!0;do for(var n=!1,l=Zc;l!==null;){if(!t)if(e!==0){var o=l.pendingLanes;if(o===0)var a=0;else{var i=l.suspendedLanes,r=l.pingedLanes;a=(1<<31-tl(42|e)+1)-1,a&=o&~(i&~r),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,i1(l,a))}else a=Pe,a=au(l,l===Dt?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(a&3)===0||ns(l,a)||(n=!0,i1(l,a));l=l.next}while(n);r_=!1}}function fx(){qp()}function qp(){Kc=F_=!1;var e=0;ka!==0&&(xx()&&(e=ka),ka=0);for(var t=ql(),n=null,l=Zc;l!==null;){var o=l.next,a=Wp(l,t);a===0?(l.next=null,n===null?Zc=o:n.next=o,o===null&&(oi=n)):(n=l,(e!==0||(a&3)!==0)&&(Kc=!0)),l=o}fs(e,!1)}function Wp(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var i=31-tl(a),r=1<<i,s=o[i];s===-1?((r&n)===0||(r&l)!==0)&&(o[i]=U2(r,t)):s<=t&&(e.expiredLanes|=r),a&=~r}if(t=Dt,n=Pe,n=au(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(ht===2||ht===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Od(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ns(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Od(l),df(n)){case 2:case 8:n=O1;break;case 32:n=Ac;break;case 268435456:n=z1;break;default:n=Ac}return l=Ip.bind(null,e),n=cf(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Od(l),e.callbackPriority=2,e.callbackNode=null,2}function Ip(e,t){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(pu(!0)&&e.callbackNode!==n)return null;var l=Pe;return l=au(e,e===Dt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Dp(e,l,t),Wp(e,ql()),e.callbackNode!=null&&e.callbackNode===n?Ip.bind(null,e):null)}function i1(e,t){if(pu())return null;Dp(e,t,!0)}function hx(){wx(function(){(mt&6)!==0?cf(L1,fx):qp()})}function Gf(){return ka===0&&(ka=B1()),ka}function r1(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pc(""+e)}function s1(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function mx(e,t,n,l,o){if(t==="submit"&&n&&n.stateNode===o){var a=r1((o[qn]||null).action),i=l.submitter;i&&(t=(t=i[qn]||null)?r1(t.formAction):i.getAttribute("formAction"),t!==null&&(a=t,i=null));var r=new iu("action","action",null,l,o);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ka!==0){var s=i?s1(o,i):new FormData(o);H_(n,{pending:!0,data:s,method:o.method,action:a},null,s)}}else typeof a=="function"&&(r.preventDefault(),s=i?s1(o,i):new FormData(o),H_(n,{pending:!0,data:s,method:o.method,action:a},a,s))},currentTarget:o}]})}}for(dc=0;dc<M_.length;dc++)_c=M_[dc],c1=_c.toLowerCase(),u1=_c[0].toUpperCase()+_c.slice(1),Nl(c1,"on"+u1);var _c,c1,u1,dc;Nl(ig,"onAnimationEnd");Nl(rg,"onAnimationIteration");Nl(sg,"onAnimationStart");Nl("dblclick","onDoubleClick");Nl("focusin","onFocus");Nl("focusout","onBlur");Nl(Ob,"onTransitionRun");Nl(zb,"onTransitionStart");Nl(Bb,"onTransitionCancel");Nl(cg,"onTransitionEnd");Mi("onMouseEnter",["mouseout","mouseover"]);Mi("onMouseLeave",["mouseout","mouseover"]);Mi("onPointerEnter",["pointerout","pointerover"]);Mi("onPointerLeave",["pointerout","pointerover"]);Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gr));function Qp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],o=l.event;l=l.listeners;e:{var a=void 0;if(t)for(var i=l.length-1;0<=i;i--){var r=l[i],s=r.instance,d=r.currentTarget;if(r=r.listener,s!==a&&o.isPropagationStopped())break e;a=r,o.currentTarget=d;try{a(o)}catch(g){Wc(g)}o.currentTarget=null,a=s}else for(i=0;i<l.length;i++){if(r=l[i],s=r.instance,d=r.currentTarget,r=r.listener,s!==a&&o.isPropagationStopped())break e;a=r,o.currentTarget=d;try{a(o)}catch(g){Wc(g)}o.currentTarget=null,a=s}}}}function Ie(e,t){var n=t[b_];n===void 0&&(n=t[b_]=new Set);var l=e+"__bubble";n.has(l)||(Gp(t,e,2,!1),n.add(l))}function s_(e,t,n){var l=0;t&&(l|=4),Gp(n,e,l,t)}var fc="_reactListening"+Math.random().toString(36).slice(2);function Vf(e){if(!e[fc]){e[fc]=!0,j1.forEach(function(n){n!=="selectionchange"&&(gx.has(n)||s_(n,!1,e),s_(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fc]||(t[fc]=!0,s_("selectionchange",!1,t))}}function Gp(e,t,n,l){switch(ay(t)){case 2:var o=qx;break;case 8:o=Wx;break;default:o=Pf}n=o.bind(null,t,n,e),o=void 0,!k_||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),l?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function c_(e,t,n,l,o){var a=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var r=l.stateNode.containerInfo;if(r===o)break;if(i===4)for(i=l.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===o)return;i=i.return}for(;r!==null;){if(i=ri(r),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){l=a=i;continue e}r=r.parentNode}}l=l.return}F1(function(){var d=a,g=hf(n),h=[];e:{var _=ug.get(e);if(_!==void 0){var p=iu,S=e;switch(e){case"keypress":if(bc(n)===0)break e;case"keydown":case"keyup":p=_b;break;case"focusin":S="focus",p=Xd;break;case"focusout":S="blur",p=Xd;break;case"beforeblur":case"afterblur":p=Xd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=eb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=mb;break;case ig:case rg:case sg:p=lb;break;case cg:p=pb;break;case"scroll":case"scrollend":p=P2;break;case"wheel":p=bb;break;case"copy":case"cut":case"paste":p=ab;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ym;break;case"toggle":case"beforetoggle":p=vb}var T=(t&4)!==0,D=!T&&(e==="scroll"||e==="scrollend"),x=T?_!==null?_+"Capture":null:_;T=[];for(var k=d,v;k!==null;){var m=k;if(v=m.stateNode,m=m.tag,m!==5&&m!==26&&m!==27||v===null||x===null||(m=jr(k,x),m!=null&&T.push(Vr(k,m,v))),D)break;k=k.return}0<T.length&&(_=new p(_,S,null,n,g),h.push({event:_,listeners:T}))}}if((t&7)===0){e:{if(_=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",_&&n!==w_&&(S=n.relatedTarget||n.fromElement)&&(ri(S)||S[Bi]))break e;if((p||_)&&(_=g.window===g?g:(_=g.ownerDocument)?_.defaultView||_.parentWindow:window,p?(S=n.relatedTarget||n.toElement,p=d,S=S?ri(S):null,S!==null&&(D=es(S),T=S.tag,S!==D||T!==5&&T!==27&&T!==6)&&(S=null)):(p=null,S=d),p!==S)){if(T=gm,m="onMouseLeave",x="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(T=ym,m="onPointerLeave",x="onPointerEnter",k="pointer"),D=p==null?_:Sr(p),v=S==null?_:Sr(S),_=new T(m,k+"leave",p,n,g),_.target=D,_.relatedTarget=v,m=null,ri(g)===d&&(T=new T(x,k+"enter",S,n,g),T.target=v,T.relatedTarget=D,m=T),D=m,p&&S)t:{for(T=p,x=S,k=0,v=T;v;v=ti(v))k++;for(v=0,m=x;m;m=ti(m))v++;for(;0<k-v;)T=ti(T),k--;for(;0<v-k;)x=ti(x),v--;for(;k--;){if(T===x||x!==null&&T===x.alternate)break t;T=ti(T),x=ti(x)}T=null}else T=null;p!==null&&d1(h,_,p,T,!1),S!==null&&D!==null&&d1(h,D,S,T,!0)}}e:{if(_=d?Sr(d):window,p=_.nodeName&&_.nodeName.toLowerCase(),p==="select"||p==="input"&&_.type==="file")var z=wm;else if(vm(_))if(tg)z=Db;else{z=Rb;var Q=Tb}else p=_.nodeName,!p||p.toLowerCase()!=="input"||_.type!=="checkbox"&&_.type!=="radio"?d&&ff(d.elementType)&&(z=wm):z=Nb;if(z&&(z=z(e,d))){eg(h,z,n,g);break e}Q&&Q(e,_,d),e==="focusout"&&d&&_.type==="number"&&d.memoizedProps.value!=null&&v_(_,"number",_.value)}switch(Q=d?Sr(d):window,e){case"focusin":(vm(Q)||Q.contentEditable==="true")&&(ui=Q,S_=d,Tr=null);break;case"focusout":Tr=S_=ui=null;break;case"mousedown":C_=!0;break;case"contextmenu":case"mouseup":case"dragend":C_=!1,Mm(h,n,g);break;case"selectionchange":if(Lb)break;case"keydown":case"keyup":Mm(h,n,g)}var L;if(pf)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else ci?P1(e,n)&&(V="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(K1&&n.locale!=="ko"&&(ci||V!=="onCompositionStart"?V==="onCompositionEnd"&&ci&&(L=Z1()):(Oo=g,mf="value"in Oo?Oo.value:Oo.textContent,ci=!0)),Q=Pc(d,V),0<Q.length&&(V=new pm(V,e,null,n,g),h.push({event:V,listeners:Q}),L?V.data=L:(L=J1(n),L!==null&&(V.data=L)))),(L=kb?Sb(e,n):Cb(e,n))&&(V=Pc(d,"onBeforeInput"),0<V.length&&(Q=new pm("onBeforeInput","beforeinput",null,n,g),h.push({event:Q,listeners:V}),Q.data=L)),mx(h,e,d,n,g)}Qp(h,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pc(e,t){for(var n=t+"Capture",l=[];e!==null;){var o=e,a=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||a===null||(o=jr(e,n),o!=null&&l.unshift(Vr(e,o,a)),o=jr(e,t),o!=null&&l.push(Vr(e,o,a))),e.tag===3)return l;e=e.return}return[]}function ti(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function d1(e,t,n,l,o){for(var a=t._reactName,i=[];n!==null&&n!==l;){var r=n,s=r.alternate,d=r.stateNode;if(r=r.tag,s!==null&&s===l)break;r!==5&&r!==26&&r!==27||d===null||(s=d,o?(d=jr(n,a),d!=null&&i.unshift(Vr(n,d,s))):o||(d=jr(n,a),d!=null&&i.push(Vr(n,d,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var px=/\r\n?/g,yx=/\u0000|\uFFFD/g;function _1(e){return(typeof e=="string"?e:""+e).replace(px,`
`).replace(yx,"")}function Vp(e,t){return t=_1(t),_1(e)===t}function yu(){}function wt(e,t,n,l,o,a){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ei(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ei(e,""+l);break;case"className":nc(e,"class",l);break;case"tabIndex":nc(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":nc(e,n,l);break;case"style":V1(e,l,a);break;case"data":if(t!=="object"){nc(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=pc(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&wt(e,t,"name",o.name,o,null),wt(e,t,"formEncType",o.formEncType,o,null),wt(e,t,"formMethod",o.formMethod,o,null),wt(e,t,"formTarget",o.formTarget,o,null)):(wt(e,t,"encType",o.encType,o,null),wt(e,t,"method",o.method,o,null),wt(e,t,"target",o.target,o,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=pc(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=yu);break;case"onScroll":l!=null&&Ie("scroll",e);break;case"onScrollEnd":l!=null&&Ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(q(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(q(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=pc(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Ie("beforetoggle",e),Ie("toggle",e),gc(e,"popover",l);break;case"xlinkActuate":to(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":to(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":to(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":to(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":to(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":to(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":to(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":to(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":to(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":gc(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Z2.get(n)||n,gc(e,n,l))}}function Z_(e,t,n,l,o,a){switch(n){case"style":V1(e,l,a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(q(61));if(n=l.__html,n!=null){if(o.children!=null)throw Error(q(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ei(e,l):(typeof l=="number"||typeof l=="bigint")&&Ei(e,""+l);break;case"onScroll":l!=null&&Ie("scroll",e);break;case"onScrollEnd":l!=null&&Ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=yu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!X1.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),a=e[qn]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,o),typeof l=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,o);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):gc(e,n,l)}}}function pn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",e),Ie("load",e);var l=!1,o=!1,a;for(a in n)if(n.hasOwnProperty(a)){var i=n[a];if(i!=null)switch(a){case"src":l=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:wt(e,t,a,i,n,null)}}o&&wt(e,t,"srcSet",n.srcSet,n,null),l&&wt(e,t,"src",n.src,n,null);return;case"input":Ie("invalid",e);var r=a=i=o=null,s=null,d=null;for(l in n)if(n.hasOwnProperty(l)){var g=n[l];if(g!=null)switch(l){case"name":o=g;break;case"type":i=g;break;case"checked":s=g;break;case"defaultChecked":d=g;break;case"value":a=g;break;case"defaultValue":r=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(q(137,t));break;default:wt(e,t,l,g,n,null)}}I1(e,a,r,s,d,i,o,!1),Lc(e);return;case"select":Ie("invalid",e),l=i=a=null;for(o in n)if(n.hasOwnProperty(o)&&(r=n[o],r!=null))switch(o){case"value":a=r;break;case"defaultValue":i=r;break;case"multiple":l=r;default:wt(e,t,o,r,n,null)}t=a,n=i,e.multiple=!!l,t!=null?yi(e,!!l,t,!1):n!=null&&yi(e,!!l,n,!0);return;case"textarea":Ie("invalid",e),a=o=l=null;for(i in n)if(n.hasOwnProperty(i)&&(r=n[i],r!=null))switch(i){case"value":l=r;break;case"defaultValue":o=r;break;case"children":a=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(q(91));break;default:wt(e,t,i,r,n,null)}G1(e,l,o,a),Lc(e);return;case"option":for(s in n)if(n.hasOwnProperty(s)&&(l=n[s],l!=null))switch(s){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:wt(e,t,s,l,n,null)}return;case"dialog":Ie("beforetoggle",e),Ie("toggle",e),Ie("cancel",e),Ie("close",e);break;case"iframe":case"object":Ie("load",e);break;case"video":case"audio":for(l=0;l<Gr.length;l++)Ie(Gr[l],e);break;case"image":Ie("error",e),Ie("load",e);break;case"details":Ie("toggle",e);break;case"embed":case"source":case"link":Ie("error",e),Ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in n)if(n.hasOwnProperty(d)&&(l=n[d],l!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(q(137,t));default:wt(e,t,d,l,n,null)}return;default:if(ff(t)){for(g in n)n.hasOwnProperty(g)&&(l=n[g],l!==void 0&&Z_(e,t,g,l,n,void 0));return}}for(r in n)n.hasOwnProperty(r)&&(l=n[r],l!=null&&wt(e,t,r,l,n,null))}function bx(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,a=null,i=null,r=null,s=null,d=null,g=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=h;default:l.hasOwnProperty(p)||wt(e,t,p,null,l,h)}}for(var _ in l){var p=l[_];if(h=n[_],l.hasOwnProperty(_)&&(p!=null||h!=null))switch(_){case"type":a=p;break;case"name":o=p;break;case"checked":d=p;break;case"defaultChecked":g=p;break;case"value":i=p;break;case"defaultValue":r=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(q(137,t));break;default:p!==h&&wt(e,t,_,p,l,h)}}x_(e,i,r,s,d,g,a,o);return;case"select":p=i=r=_=null;for(a in n)if(s=n[a],n.hasOwnProperty(a)&&s!=null)switch(a){case"value":break;case"multiple":p=s;default:l.hasOwnProperty(a)||wt(e,t,a,null,l,s)}for(o in l)if(a=l[o],s=n[o],l.hasOwnProperty(o)&&(a!=null||s!=null))switch(o){case"value":_=a;break;case"defaultValue":r=a;break;case"multiple":i=a;default:a!==s&&wt(e,t,o,a,l,s)}t=r,n=i,l=p,_!=null?yi(e,!!n,_,!1):!!l!=!!n&&(t!=null?yi(e,!!n,t,!0):yi(e,!!n,n?[]:"",!1));return;case"textarea":p=_=null;for(r in n)if(o=n[r],n.hasOwnProperty(r)&&o!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:wt(e,t,r,null,l,o)}for(i in l)if(o=l[i],a=n[i],l.hasOwnProperty(i)&&(o!=null||a!=null))switch(i){case"value":_=o;break;case"defaultValue":p=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(q(91));break;default:o!==a&&wt(e,t,i,o,l,a)}Q1(e,_,p);return;case"option":for(var S in n)if(_=n[S],n.hasOwnProperty(S)&&_!=null&&!l.hasOwnProperty(S))switch(S){case"selected":e.selected=!1;break;default:wt(e,t,S,null,l,_)}for(s in l)if(_=l[s],p=n[s],l.hasOwnProperty(s)&&_!==p&&(_!=null||p!=null))switch(s){case"selected":e.selected=_&&typeof _!="function"&&typeof _!="symbol";break;default:wt(e,t,s,_,l,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var T in n)_=n[T],n.hasOwnProperty(T)&&_!=null&&!l.hasOwnProperty(T)&&wt(e,t,T,null,l,_);for(d in l)if(_=l[d],p=n[d],l.hasOwnProperty(d)&&_!==p&&(_!=null||p!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(q(137,t));break;default:wt(e,t,d,_,l,p)}return;default:if(ff(t)){for(var D in n)_=n[D],n.hasOwnProperty(D)&&_!==void 0&&!l.hasOwnProperty(D)&&Z_(e,t,D,void 0,l,_);for(g in l)_=l[g],p=n[g],!l.hasOwnProperty(g)||_===p||_===void 0&&p===void 0||Z_(e,t,g,_,l,p);return}}for(var x in n)_=n[x],n.hasOwnProperty(x)&&_!=null&&!l.hasOwnProperty(x)&&wt(e,t,x,null,l,_);for(h in l)_=l[h],p=n[h],!l.hasOwnProperty(h)||_===p||_==null&&p==null||wt(e,t,h,_,l,p)}var K_=null,P_=null;function Jc(e){return e.nodeType===9?e:e.ownerDocument}function f1(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fp(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function J_(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var u_=null;function xx(){var e=window.event;return e&&e.type==="popstate"?e===u_?!1:(u_=e,!0):(u_=null,!1)}var Zp=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,h1=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof h1!="undefined"?function(e){return h1.resolve(null).then(e).catch(kx)}:Zp;function kx(e){setTimeout(function(){throw e})}function Fo(e){return e==="head"}function m1(e,t){var n=t,l=0,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(0<l&&8>l){n=l;var i=e.ownerDocument;if(n&1&&Ur(i.documentElement),n&2&&Ur(i.body),n&4)for(n=i.head,Ur(n),i=n.firstChild;i;){var r=i.nextSibling,s=i.nodeName;i[os]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}if(o===0){e.removeChild(a),Jr(t);return}o--}else n==="$"||n==="$?"||n==="$!"?o++:l=n.charCodeAt(0)-48;else l=0;n=a}while(n);Jr(t)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ef(n),_f(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Sx(e,t,n,l){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[os])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Rl(e.nextSibling),e===null)break}return null}function Cx(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Rl(e.nextSibling),e===null))return null;return e}function tf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Mx(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rl(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var nf=null;function g1(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Kp(e,t,n){switch(t=Jc(n),e){case"html":if(e=t.documentElement,!e)throw Error(q(452));return e;case"head":if(e=t.head,!e)throw Error(q(453));return e;case"body":if(e=t.body,!e)throw Error(q(454));return e;default:throw Error(q(451))}}function Ur(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_f(e)}var vl=new Map,p1=new Set;function eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var po=ut.d;ut.d={f:Ex,r:Tx,D:Rx,C:Nx,L:Dx,m:Ax,X:Ox,S:Lx,M:zx};function Ex(){var e=po.f(),t=mu();return e||t}function Tx(e){var t=$i(e);t!==null&&t.tag===5&&t.type==="form"?Wg(t):po.r(e)}var Yi=typeof document=="undefined"?null:document;function Pp(e,t,n){var l=Yi;if(l&&typeof t=="string"&&t){var o=pl(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),p1.has(o)||(p1.add(o),e={rel:e,crossOrigin:n,href:t},l.querySelector(o)===null&&(t=l.createElement("link"),pn(t,"link",e),sn(t),l.head.appendChild(t)))}}function Rx(e){po.D(e),Pp("dns-prefetch",e,null)}function Nx(e,t){po.C(e,t),Pp("preconnect",e,t)}function Dx(e,t,n){po.L(e,t,n);var l=Yi;if(l&&e&&t){var o='link[rel="preload"][as="'+pl(t)+'"]';t==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+pl(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+pl(n.imageSizes)+'"]')):o+='[href="'+pl(e)+'"]';var a=o;switch(t){case"style":a=zi(e);break;case"script":a=ji(e)}vl.has(a)||(e=Lt({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),vl.set(a,e),l.querySelector(o)!==null||t==="style"&&l.querySelector(hs(a))||t==="script"&&l.querySelector(ms(a))||(t=l.createElement("link"),pn(t,"link",e),sn(t),l.head.appendChild(t)))}}function Ax(e,t){po.m(e,t);var n=Yi;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+pl(l)+'"][href="'+pl(e)+'"]',a=o;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=ji(e)}if(!vl.has(a)&&(e=Lt({rel:"modulepreload",href:e},t),vl.set(a,e),n.querySelector(o)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ms(a)))return}l=n.createElement("link"),pn(l,"link",e),sn(l),n.head.appendChild(l)}}}function Lx(e,t,n){po.S(e,t,n);var l=Yi;if(l&&e){var o=pi(l).hoistableStyles,a=zi(e);t=t||"default";var i=o.get(a);if(!i){var r={loading:0,preload:null};if(i=l.querySelector(hs(a)))r.loading=5;else{e=Lt({rel:"stylesheet",href:e,"data-precedence":t},n),(n=vl.get(a))&&Ff(e,n);var s=i=l.createElement("link");sn(s),pn(s,"link",e),s._p=new Promise(function(d,g){s.onload=d,s.onerror=g}),s.addEventListener("load",function(){r.loading|=1}),s.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Mc(i,t,l)}i={type:"stylesheet",instance:i,count:1,state:r},o.set(a,i)}}}function Ox(e,t){po.X(e,t);var n=Yi;if(n&&e){var l=pi(n).hoistableScripts,o=ji(e),a=l.get(o);a||(a=n.querySelector(ms(o)),a||(e=Lt({src:e,async:!0},t),(t=vl.get(o))&&Zf(e,t),a=n.createElement("script"),sn(a),pn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(o,a))}}function zx(e,t){po.M(e,t);var n=Yi;if(n&&e){var l=pi(n).hoistableScripts,o=ji(e),a=l.get(o);a||(a=n.querySelector(ms(o)),a||(e=Lt({src:e,async:!0,type:"module"},t),(t=vl.get(o))&&Zf(e,t),a=n.createElement("script"),sn(a),pn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},l.set(o,a))}}function y1(e,t,n,l){var o=(o=$o.current)?eu(o):null;if(!o)throw Error(q(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=zi(n.href),n=pi(o).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zi(n.href);var a=pi(o).hoistableStyles,i=a.get(e);if(i||(o=o.ownerDocument||o,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,i),(a=o.querySelector(hs(e)))&&!a._p&&(i.instance=a,i.state.loading=5),vl.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vl.set(e,n),a||Bx(o,e,n,i.state))),t&&l===null)throw Error(q(528,""));return i}if(t&&l!==null)throw Error(q(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ji(n),n=pi(o).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(q(444,e))}}function zi(e){return'href="'+pl(e)+'"'}function hs(e){return'link[rel="stylesheet"]['+e+"]"}function Jp(e){return Lt({},e,{"data-precedence":e.precedence,precedence:null})}function Bx(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),pn(t,"link",n),sn(t),e.head.appendChild(t))}function ji(e){return'[src="'+pl(e)+'"]'}function ms(e){return"script[async]"+e}function b1(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+pl(n.href)+'"]');if(l)return t.instance=l,sn(l),l;var o=Lt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),sn(l),pn(l,"style",o),Mc(l,n.precedence,e),t.instance=l;case"stylesheet":o=zi(n.href);var a=e.querySelector(hs(o));if(a)return t.state.loading|=4,t.instance=a,sn(a),a;l=Jp(n),(o=vl.get(o))&&Ff(l,o),a=(e.ownerDocument||e).createElement("link"),sn(a);var i=a;return i._p=new Promise(function(r,s){i.onload=r,i.onerror=s}),pn(a,"link",l),t.state.loading|=4,Mc(a,n.precedence,e),t.instance=a;case"script":return a=ji(n.src),(o=e.querySelector(ms(a)))?(t.instance=o,sn(o),o):(l=n,(o=vl.get(a))&&(l=Lt({},n),Zf(l,o)),e=e.ownerDocument||e,o=e.createElement("script"),sn(o),pn(o,"link",l),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(q(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Mc(l,n.precedence,e));return t.instance}function Mc(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=l.length?l[l.length-1]:null,a=o,i=0;i<l.length;i++){var r=l[i];if(r.dataset.precedence===t)a=r;else if(a!==o)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ff(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ec=null;function x1(e,t,n){if(Ec===null){var l=new Map,o=Ec=new Map;o.set(n,l)}else o=Ec,l=o.get(n),l||(l=new Map,o.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var a=n[o];if(!(a[os]||a[Cn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var i=a.getAttribute(t)||"";i=e+i;var r=l.get(i);r?r.push(a):l.set(i,[a])}}return l}function v1(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function $x(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ey(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Fr=null;function Hx(){}function Ux(e,t,n){if(Fr===null)throw Error(q(475));var l=Fr;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=zi(n.href),a=e.querySelector(hs(o));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=tu.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=a,sn(a);return}a=e.ownerDocument||e,n=Jp(n),(o=vl.get(o))&&Ff(n,o),a=a.createElement("link"),sn(a);var i=a;i._p=new Promise(function(r,s){i.onload=r,i.onerror=s}),pn(a,"link",n),t.instance=a}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=tu.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function Yx(){if(Fr===null)throw Error(q(475));var e=Fr;return e.stylesheets&&e.count===0&&lf(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&lf(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function tu(){if(this.count--,this.count===0){if(this.stylesheets)lf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nu=null;function lf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nu=new Map,t.forEach(jx,e),nu=null,tu.call(e))}function jx(e,t){if(!(t.state.loading&4)){var n=nu.get(e);if(n)var l=n.get(null);else{n=new Map,nu.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<o.length;a++){var i=o[a];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(n.set(i.dataset.precedence,i),l=i)}l&&n.set(null,l)}o=t.instance,i=o.getAttribute("data-precedence"),a=n.get(i)||l,a===l&&n.set(null,o),n.set(i,o),this.count++,l=tu.bind(this),o.addEventListener("load",l),o.addEventListener("error",l),a?a.parentNode.insertBefore(o,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Zr={$$typeof:ao,Provider:null,Consumer:null,_currentValue:pa,_currentValue2:pa,_threadCount:0};function Xx(e,t,n,l,o,a,i,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zd(0),this.hiddenUpdates=zd(null),this.identifierPrefix=l,this.onUncaughtError=o,this.onCaughtError=a,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function ty(e,t,n,l,o,a,i,r,s,d,g,h){return e=new Xx(e,t,n,i,r,s,d,h),t=1,a===!0&&(t|=24),a=Jn(3,null,null,t),e.current=a,a.stateNode=e,t=Sf(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:l,isDehydrated:n,cache:t},Mf(a),e}function ny(e){return e?(e=fi,e):fi}function ly(e,t,n,l,o,a){o=ny(o),l.context===null?l.context=o:l.pendingContext=o,l=Ho(t),l.payload={element:n},a=a===void 0?null:a,a!==null&&(l.callback=a),n=Uo(e,l,t),n!==null&&(ll(n,e,t),Dr(n,e,t))}function w1(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kf(e,t){w1(e,t),(e=e.alternate)&&w1(e,t)}function oy(e){if(e.tag===13){var t=Hi(e,67108864);t!==null&&ll(t,e,67108864),Kf(e,67108864)}}var lu=!0;function qx(e,t,n,l){var o=we.T;we.T=null;var a=ut.p;try{ut.p=2,Pf(e,t,n,l)}finally{ut.p=a,we.T=o}}function Wx(e,t,n,l){var o=we.T;we.T=null;var a=ut.p;try{ut.p=8,Pf(e,t,n,l)}finally{ut.p=a,we.T=o}}function Pf(e,t,n,l){if(lu){var o=of(l);if(o===null)c_(e,t,l,ou,n),k1(e,l);else if(Qx(o,e,t,n,l))l.stopPropagation();else if(k1(e,l),t&4&&-1<Ix.indexOf(e)){for(;o!==null;){var a=$i(o);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var i=ha(a.pendingLanes);if(i!==0){var r=a;for(r.pendingLanes|=2,r.entangledLanes|=2;i;){var s=1<<31-tl(i);r.entanglements[1]|=s,i&=~s}Ql(a),(mt&6)===0&&(Vc=ql()+500,fs(0,!1))}}break;case 13:r=Hi(a,2),r!==null&&ll(r,a,2),mu(),Kf(a,2)}if(a=of(l),a===null&&c_(e,t,l,ou,n),a===o)break;o=a}o!==null&&l.stopPropagation()}else c_(e,t,l,null,n)}}function of(e){return e=hf(e),Jf(e)}var ou=null;function Jf(e){if(ou=null,e=ri(e),e!==null){var t=es(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=R1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ou=e,null}function ay(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(A2()){case L1:return 2;case O1:return 8;case Ac:case L2:return 32;case z1:return 268435456;default:return 32}default:return 32}}var af=!1,Xo=null,qo=null,Wo=null,Kr=new Map,Pr=new Map,Ao=[],Ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k1(e,t){switch(e){case"focusin":case"focusout":Xo=null;break;case"dragenter":case"dragleave":qo=null;break;case"mouseover":case"mouseout":Wo=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function xr(e,t,n,l,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:a,targetContainers:[o]},t!==null&&(t=$i(t),t!==null&&oy(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Qx(e,t,n,l,o){switch(t){case"focusin":return Xo=xr(Xo,e,t,n,l,o),!0;case"dragenter":return qo=xr(qo,e,t,n,l,o),!0;case"mouseover":return Wo=xr(Wo,e,t,n,l,o),!0;case"pointerover":var a=o.pointerId;return Kr.set(a,xr(Kr.get(a)||null,e,t,n,l,o)),!0;case"gotpointercapture":return a=o.pointerId,Pr.set(a,xr(Pr.get(a)||null,e,t,n,l,o)),!0}return!1}function iy(e){var t=ri(e.target);if(t!==null){var n=es(t);if(n!==null){if(t=n.tag,t===13){if(t=R1(n),t!==null){e.blockedOn=t,j2(e.priority,function(){if(n.tag===13){var l=nl();l=uf(l);var o=Hi(n,l);o!==null&&ll(o,n,l),Kf(n,l)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=of(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);w_=l,n.target.dispatchEvent(l),w_=null}else return t=$i(n),t!==null&&oy(t),e.blockedOn=n,!1;t.shift()}return!0}function S1(e,t,n){Tc(e)&&n.delete(t)}function Gx(){af=!1,Xo!==null&&Tc(Xo)&&(Xo=null),qo!==null&&Tc(qo)&&(qo=null),Wo!==null&&Tc(Wo)&&(Wo=null),Kr.forEach(S1),Pr.forEach(S1)}function hc(e,t){e.blockedOn===t&&(e.blockedOn=null,af||(af=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,Gx)))}var mc=null;function C1(e){mc!==e&&(mc=e,an.unstable_scheduleCallback(an.unstable_NormalPriority,function(){mc===e&&(mc=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],o=e[t+2];if(typeof l!="function"){if(Jf(l||n)===null)continue;break}var a=$i(n);a!==null&&(e.splice(t,3),t-=3,H_(a,{pending:!0,data:o,method:n.method,action:l},l,o))}}))}function Jr(e){function t(s){return hc(s,e)}Xo!==null&&hc(Xo,e),qo!==null&&hc(qo,e),Wo!==null&&hc(Wo,e),Kr.forEach(t),Pr.forEach(t);for(var n=0;n<Ao.length;n++){var l=Ao[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ao.length&&(n=Ao[0],n.blockedOn===null);)iy(n),n.blockedOn===null&&Ao.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var o=n[l],a=n[l+1],i=o[qn]||null;if(typeof a=="function")i||C1(n);else if(i){var r=null;if(a&&a.hasAttribute("formAction")){if(o=a,i=a[qn]||null)r=i.formAction;else if(Jf(o)!==null)continue}else r=i.action;typeof r=="function"?n[l+1]=r:(n.splice(l,3),l-=3),C1(n)}}}function e0(e){this._internalRoot=e}bu.prototype.render=e0.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));var n=t.current,l=nl();ly(n,l,e,t,null,null)};bu.prototype.unmount=e0.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ly(e.current,2,null,e,null,null),mu(),t[Bi]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Y1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ao.length&&t!==0&&t<Ao[n].priority;n++);Ao.splice(n,0,e),n===0&&iy(e)}};var M1=E1.version;if(M1!=="19.1.1")throw Error(q(527,M1,"19.1.1"));ut.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=C2(t),e=e!==null?N1(e):null,e=e===null?null:e.stateNode,e};var Vx={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:we,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(vr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!vr.isDisabled&&vr.supportsFiber))try{ts=vr.inject(Vx),el=vr}catch{}var vr;xu.createRoot=function(e,t){if(!T1(e))throw Error(q(299));var n=!1,l="",o=tp,a=np,i=lp,r=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(r=t.unstable_transitionCallbacks)),t=ty(e,1,!1,null,null,n,l,o,a,i,r,null),e[Bi]=t.current,Vf(e),new e0(t)};xu.hydrateRoot=function(e,t,n){if(!T1(e))throw Error(q(299));var l=!1,o="",a=tp,i=np,r=lp,s=null,d=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(r=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(s=n.unstable_transitionCallbacks),n.formState!==void 0&&(d=n.formState)),t=ty(e,1,!0,t,n!=null?n:null,l,o,a,i,r,s,d),t.context=ny(null),n=t.current,l=nl(),l=uf(l),o=Ho(l),o.callback=null,Uo(n,o,l),n=l,t.current.lanes=n,ls(t,n),Ql(t),e[Bi]=t.current,Vf(e),new bu(t)};xu.version="19.1.1"});var uy=$l((X6,cy)=>{"use strict";function sy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sy)}catch(e){console.error(e)}}sy(),cy.exports=ry()});var _y=$l(vu=>{"use strict";var Fx=Symbol.for("react.transitional.element"),Zx=Symbol.for("react.fragment");function dy(e,t,n){var l=null;if(n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),"key"in t){n={};for(var o in t)o!=="key"&&(n[o]=t[o])}else n=t;return t=n.ref,{$$typeof:Fx,type:e,key:l,ref:t!==void 0?t:null,props:n}}vu.Fragment=Zx;vu.jsx=dy;vu.jsxs=dy});var It=$l((W6,fy)=>{"use strict";fy.exports=_y()});var M5=Ce(uy());var ju=Ce(Ht(),1),C=Ce(Ht(),1),qu=Ce(Ht(),1),t5=Ce(fr(),1),Fi=Ce(Ht(),1),Zi=Ce(Ht(),1),n5=Ce(fr(),1),l5=Ce(It(),1),dn=Ce(Ht(),1),Cs=Ce(Ht(),1),a5=Ce(Ht(),1),En=Ce(Ht(),1),lt=Ce(It(),1),h0=Ce(It(),1),re=Ce(It(),1),Vl=Ce(Ht(),1),s5=Ce(fr(),1),za=Ce(It(),1),m0=Ce(It(),1),Oa=Ce(It(),1),rt=Ce(Ht(),1),u=Ce(It(),1),Et=Ce(It(),1),_n=Ce(Ht(),1),Jo=Ce(Ht(),1),c=Ce(It(),1),ke=Ce(Ht(),1),Je=Ce(It(),1),V4=Ce(Ht(),1),In=Ce(Ht(),1),w0=Ce(It(),1),wl=Ce(Ht(),1),Gl=Ce(It(),1),Po=Ce(Ht(),1),Es=Ce(It(),1),w5=Ce(Ht(),1),Ii=Ce(It(),1),Qi=Ce(It(),1),ce=Ce(It(),1),Iu=Ce(Ht(),1),Ts=Ce(It(),1),G=Ce(It(),1),k5=Ce(Ht(),1),Gy=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],t0=Gy.flatMap(e=>[`:not([${e}])`,`:not([${e}] *)`]).join(""),_0="feedback-freeze-styles",f0="__agentation_freeze";function Kx(){var t;return typeof window=="undefined"?{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}:(t=window[f0])!=null?t:{frozen:!1,installed:!1,origSetTimeout:window.setTimeout.bind(window),origSetInterval:window.setInterval.bind(window),origRAF:window.requestAnimationFrame.bind(window),pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}}var Ge=Kx();function Vy(){var t;if(typeof window=="undefined")return;let e=window;Ge=(t=e[f0])!=null?t:e[f0]=Ge,!Ge.installed&&(window.setTimeout=(n,l,...o)=>typeof n=="string"?Ge.origSetTimeout(n,l):Ge.origSetTimeout((...a)=>{Ge.frozen?Ge.frozenTimeoutQueue.push(()=>n(...a)):n(...a)},l,...o),window.setInterval=(n,l,...o)=>typeof n=="string"?Ge.origSetInterval(n,l):Ge.origSetInterval((...a)=>{Ge.frozen||n(...a)},l,...o),window.requestAnimationFrame=n=>Ge.origRAF(l=>{Ge.frozen?Ge.frozenRAFQueue.push(n):n(l)}),Ge.installed=!0)}var it=Ge.origSetTimeout,Fy=Ge.origSetInterval,Uu=Ge.origRAF;function Px(e){return e?Gy.some(t=>{var n;return!!((n=e.closest)!=null&&n.call(e,`[${t}]`))}):!1}function Jx(){if(typeof document=="undefined"||(Vy(),Ge.frozen))return;Ge.frozen=!0,Ge.frozenTimeoutQueue=[],Ge.frozenRAFQueue=[];let e=document.getElementById(_0);e||(e=document.createElement("style"),e.id=_0),e.textContent=`
    *${t0},
    *${t0}::before,
    *${t0}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(e),Ge.pausedAnimations=[];try{document.getAnimations().forEach(t=>{var l;if(t.playState!=="running")return;let n=(l=t.effect)==null?void 0:l.target;Px(n)||(t.pause(),Ge.pausedAnimations.push(t))})}catch{}document.querySelectorAll("video").forEach(t=>{t.paused||(t.dataset.wasPaused="false",t.pause())})}function hy(){var n;if(typeof document=="undefined"||!Ge.frozen)return;Ge.frozen=!1;let e=Ge.frozenTimeoutQueue;Ge.frozenTimeoutQueue=[];for(let l of e)Ge.origSetTimeout(()=>{if(Ge.frozen){Ge.frozenTimeoutQueue.push(l);return}try{l()}catch(o){console.warn("[agentation] Error replaying queued timeout:",o)}},0);let t=Ge.frozenRAFQueue;Ge.frozenRAFQueue=[];for(let l of t)Ge.origRAF(o=>{if(Ge.frozen){Ge.frozenRAFQueue.push(l);return}l(o)});for(let l of Ge.pausedAnimations)try{l.play()}catch(o){console.warn("[agentation] Error resuming animation:",o)}Ge.pausedAnimations=[],(n=document.getElementById(_0))==null||n.remove(),document.querySelectorAll("video").forEach(l=>{l.dataset.wasPaused==="false"&&(l.play().catch(()=>{}),delete l.dataset.wasPaused)})}function my(){let e=(0,ju.useMemo)(()=>{let t=0,n=new Set,l=()=>(n.forEach(clearTimeout),n.clear(),++t),o=i=>i===t;return{start:l,isCurrent:o,schedule:(i,r,s)=>{if(!o(i))return;let d=it(()=>{n.delete(d),o(i)&&r()},s);n.add(d)}}},[]);return(0,ju.useEffect)(()=>()=>{e.start()},[e]),e}function ev(e,t,n,l){let o=d=>{var g;return(g=l.get(d.id))!=null?g:d.id},a=new Map(e.map(d=>[o(d),d])),i=new Map(t.map(d=>[o(d),d])),r=new Set(n.map(d=>d.id)),s=[];for(let d of n){let g=a.get(d.id),h=i.get(d.id);if(g&&!h)continue;let _=h&&g&&h.comment!==g.comment;s.push(_?{...d,comment:h.comment}:d)}for(let[d,g]of i)!a.has(d)&&!r.has(d)&&s.push(g);return s}function Rs(e){if(e.tagName!=="IFRAME")return null;try{return e.contentDocument}catch{return null}}function al(e,t=document){var n;if(e===t)return null;try{return(n=e.defaultView)==null?void 0:n.frameElement}catch{return null}}function k0(e){return e.nodeType===11&&"host"in e}function Vi(e){var g;let t=e.getBoundingClientRect(),n=e.offsetWidth?t.width/e.offsetWidth:1,l=e.offsetHeight?t.height/e.offsetHeight:1,o=(g=e.ownerDocument.defaultView)==null?void 0:g.getComputedStyle(e),a=h=>parseFloat(h||"0")||0,i=a(o==null?void 0:o.paddingLeft),r=a(o==null?void 0:o.paddingTop),s=e.clientWidth-i-a(o==null?void 0:o.paddingRight),d=e.clientHeight-r-a(o==null?void 0:o.paddingBottom);return{x:t.left+(e.clientLeft+i)*n,y:t.top+(e.clientTop+r)*l,sx:n,sy:l,width:s*n,height:d*l}}function gy(e){try{let t=new URL(e);return t.origin+t.pathname}catch{return e}}function tv(e,t,n,l=document){let o=al(e,l);for(;o;){let a=Vi(o);t=a.x+t*a.sx,n=a.y+n*a.sy,o=al(o.ownerDocument,l)}return{x:t,y:n}}function en(e,t=document){let n=e.getBoundingClientRect();return Zy(e.ownerDocument,n,t)}function Zy(e,t,n){if(!al(e,n))return t;let l=t.left,o=t.top,a=t.right,i=t.bottom,r=al(e,n);for(;r;){let s=Vi(r);l=Math.max(s.x,s.x+l*s.sx),o=Math.max(s.y,s.y+o*s.sy),a=Math.min(s.x+s.width,s.x+a*s.sx),i=Math.min(s.y+s.height,s.y+i*s.sy),r=al(r.ownerDocument,n)}return new DOMRect(l,o,Math.max(0,a-l),Math.max(0,i-o))}function Xu(e){let t=[];for(let n of e.querySelectorAll("*"))n.tagName==="IFRAME"&&t.push(n),n.shadowRoot&&n.tagName!=="AGENTATION-TOOLBAR"&&t.push(...Xu(n.shadowRoot));return t}function nv(e,t,n,l=document){let o=[];for(let h=al(e.ownerDocument,l);h;h=al(h.ownerDocument,l))o.unshift(h);if(!o.length)return;let a=o.map(h=>{var p,S;let _=Vi(h);return t=(t-_.x)/_.sx,n=(n-_.y)/_.sy,{index:Xu(h.ownerDocument).indexOf(h),id:h.id||void 0,url:(S=(p=Rs(h))==null?void 0:p.URL)!=null?S:""}}),i=e.ownerDocument.defaultView,r=!1;for(let h=e;h;h=h.parentElement)if(["fixed","sticky"].includes(i.getComputedStyle(h).position)){r=!0;break}let s=r?0:i.scrollX,d=r?0:i.scrollY,g=e.getBoundingClientRect();return{path:a,x:t+s,y:n+d,fixed:r,boundingBox:{x:g.left+s,y:g.top+d,width:g.width,height:g.height}}}function lv(e=document){let t=new Map,n=l=>{let o=t.get(l);return o||(o=Xu(l),t.set(l,o)),o};return l=>ov(l,e,n)}function ov(e,t=document,n=Xu){let l=e.frame;if(!l)return e;let o=t;for(let p of l.path){let S=n(o),T=p.id?S.find(x=>x.id===p.id):S[p.index],D=T&&Rs(T);if(!D||gy(D.URL)!==gy(p.url))return null;o=D}let a=o.defaultView,i=l.fixed?0:a.scrollX,r=l.fixed?0:a.scrollY,s=l.x-i,d=l.y-r;for(let p=o,S=al(o,t);S;S=al(p,t)){let T=p.defaultView;if(s<0||d<0||s>T.innerWidth||d>T.innerHeight)return null;let D=Vi(S);if(D.width<=0||D.height<=0)return null;s=D.x+s*D.sx,d=D.y+d*D.sy,p=S.ownerDocument}let g=l.boundingBox,h=Zy(o,new DOMRect(g.x-i,g.y-r,g.width,g.height),t),_=t.defaultView;return{...e,x:s/_.innerWidth*100,y:d+(e.isFixed?0:_.scrollY),boundingBox:{x:h.x,y:h.y+(e.isFixed?0:_.scrollY),width:h.width,height:h.height}}}function av(e,t,n){if(!("clientX"in e)||t===n)return e;let l=tv(t,e.clientX,e.clientY,n);return new Proxy(e,{get(o,a){if(a==="clientX")return l.x;if(a==="clientY")return l.y;let i=Reflect.get(o,a,o);return typeof i=="function"?i.bind(o):i}})}function iv(e,t){let n=new Set([e]),l=new Set,o=[],a=new Set,i=!1,r=!1,s,d=(h,_)=>{let p=S=>h.listener(av(S,_,e));h.handlers.set(_,p),_.addEventListener(h.type,p,h.options)},g=()=>{if(i=!1,!r)return;let h=new Set,_=new Set,p=[],S=T=>{p.push(T);for(let D of T.querySelectorAll("*"))if(!D.matches("agentation-toolbar, [data-agentation-portal]")&&(D.shadowRoot&&S(D.shadowRoot),D.tagName==="IFRAME")){_.add(D);let x=Rs(D);x&&!h.has(x)&&(h.add(x),S(x))}};h.add(e),S(e);for(let T of n)if(!h.has(T)){for(let D of l){let x=D.handlers.get(T);x&&T.removeEventListener(D.type,x,D.options),D.handlers.delete(T)}n.delete(T)}for(let T of h)if(!n.has(T)){n.add(T);for(let D of l)d(D,T)}for(let T of a)_.has(T)||T.removeEventListener("load",g);for(let T of _)a.has(T)||T.addEventListener("load",g);a=_,s==null||s.disconnect(),a.forEach(T=>s==null?void 0:s.observe(T)),o.forEach(T=>T.disconnect()),o=p.map(T=>{let D=new MutationObserver(x=>{x.some(v=>[...v.addedNodes,...v.removedNodes].some(m=>m.nodeType===1&&!m.closest("agentation-toolbar, [data-agentation-portal]")&&(m.tagName==="IFRAME"||!!m.shadowRoot||!!m.querySelector("iframe"))))&&!i&&(i=!0,queueMicrotask(g))});return D.observe(T,{childList:!0,subtree:!0}),D}),t==null||t()};return{start(){r||(r=!0,typeof ResizeObserver=="function"&&(s=new ResizeObserver(()=>t==null?void 0:t())),g())},stop(){r=!1,s==null||s.disconnect(),s=void 0,o.forEach(h=>h.disconnect()),o=[];for(let h of a)h.removeEventListener("load",g);a.clear();for(let h of l)for(let[_,p]of h.handlers)_.removeEventListener(h.type,p,h.options);l.clear(),n.clear(),n.add(e)},addEventListener(h,_,p){let S={type:h,listener:_,options:p,handlers:new Map};l.add(S);for(let T of n)d(S,T)},removeEventListener(h,_,p){for(let S of l)if(S.type===h&&S.listener===_){for(let[T,D]of S.handlers)T.removeEventListener(h,D,S.options);l.delete(S)}},querySelectorAll(h){return[...n].flatMap(_=>[..._.querySelectorAll(h)])}}}var S0=["data-testid","data-test","data-qa","data-cy","data-component"];function ws(e,t=S0){let n={};for(let l of[...new Set(t)].slice(0,16)){if(!/^[a-zA-Z_][\w:.-]*$/.test(l))continue;let o=e.getAttribute(l);o!=null&&o.length<=500&&Object.defineProperty(n,l,{value:o,enumerable:!0})}return n}function rv(e,t=S0){return Object.entries(ws(e,t)).filter(([n,l])=>/^data-[a-z0-9_-]+$/.test(n)&&l.length<=120).slice(0,2).map(([n,l])=>`[${n}="${l.replace(/[\\"\n\r\f\0]/g,o=>o==="\\"||o==='"'?`\\${o}`:`\\${o.charCodeAt(0).toString(16)} `)}"]`).join("")}function Gi(e){if(e.parentElement)return e.parentElement;let t=e.getRootNode();return k0(t)?t.host:null}function bn(e,t){let n=e;for(;n;){if(n.matches(t))return n;n=Gi(n)}return null}function Ky(e,t=4,n){let l=[],o=e,a=0;for(;o&&a<t;){let r=o.tagName.toLowerCase();if(r==="html"||r==="body"){l.length===0&&l.push(r);break}let s=r;if(o.id)s=`#${o.id}`;else if(o.className&&typeof o.className=="string"){let g=o.className.split(/\s+/).find(h=>h.length>2&&!h.match(/^[a-z]{1,2}$/)&&!h.match(/[A-Z0-9]{5,}/));g&&(s=`.${g.split("_")[0]}`)}s+=rv(o,n);let d=Gi(o);!o.parentElement&&d&&(s=`\u27E8shadow\u27E9 ${s}`),l.unshift(s),o=d,a++}let i=al(e.ownerDocument);return(i?Ky(i,2)+" > \u27E8iframe\u27E9 ":"")+l.join(" > ")}function sv(e){var n;let t="";for(let l of e.childNodes)if(l.nodeType===Node.TEXT_NODE){let o=(n=l.textContent)==null?void 0:n.trim();o&&(t+=(t?" ":"")+o)}return t}function Wi(e,t){var o,a,i,r,s,d,g,h;let n=Ky(e,4,t);if(e.dataset.element)return{name:e.dataset.element,path:n};let l=e.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(l)){let _=bn(e,"svg");if(_){let p=Gi(_);if((p==null?void 0:p.namespaceURI)==="http://www.w3.org/1999/xhtml")return{name:`graphic in ${Wi(p).name}`,path:n}}return{name:"graphic element",path:n}}if(l==="svg"){let _=Gi(e);if((_==null?void 0:_.tagName.toLowerCase())==="button"){let p=(o=_.textContent)==null?void 0:o.trim();return{name:p?`icon in "${p}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(l==="button"){let _=(a=e.textContent)==null?void 0:a.trim(),p=e.getAttribute("aria-label");return p?{name:`button [${p}]`,path:n}:{name:_?`button "${_.slice(0,25)}"`:"button",path:n}}if(l==="a"){let _=(i=e.textContent)==null?void 0:i.trim(),p=e.getAttribute("href");return _?{name:`link "${_.slice(0,25)}"`,path:n}:p?{name:`link to ${p.slice(0,30)}`,path:n}:{name:"link",path:n}}if(l==="input"){let _=e.getAttribute("type")||"text",p=e.getAttribute("placeholder"),S=e.getAttribute("name");return p?{name:`input "${p}"`,path:n}:S?{name:`input [${S}]`,path:n}:{name:`${_} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(l)){let _=(r=e.textContent)==null?void 0:r.trim();return{name:_?`${l} "${_.slice(0,35)}"`:l,path:n}}if(l==="p"){let _=(s=e.textContent)==null?void 0:s.trim();return _?{name:`paragraph: "${_.slice(0,40)}${_.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(l==="span"||l==="label"){let _=(d=e.textContent)==null?void 0:d.trim();return _&&_.length<40?{name:`"${_}"`,path:n}:{name:l,path:n}}if(l==="li"){let _=(g=e.textContent)==null?void 0:g.trim();return _&&_.length<40?{name:`list item: "${_.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(l==="blockquote")return{name:"blockquote",path:n};if(l==="code"){let _=(h=e.textContent)==null?void 0:h.trim();return _&&_.length<30?{name:`code: \`${_}\``,path:n}:{name:"code",path:n}}if(l==="pre")return{name:"code block",path:n};if(l==="img"){let _=e.getAttribute("alt");return{name:_?`image "${_.slice(0,30)}"`:"image",path:n}}if(l==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(l)){let _=e.className,p=e.getAttribute("role"),S=e.getAttribute("aria-label");if(S)return{name:`${l} [${S}]`,path:n};if(p)return{name:`${p}`,path:n};let T=sv(e);if(T&&T.length<50)return{name:`"${T}"`,path:n};if(typeof _=="string"&&_){let D=_.split(/[\s_-]+/).map(x=>x.replace(/[A-Z0-9]{5,}.*$/,"")).filter(x=>x.length>2&&!/^[a-z]{1,2}$/.test(x)).slice(0,2);if(D.length>0)return{name:D.join(" "),path:n}}return{name:l==="div"?"container":l,path:n}}return{name:l,path:n}}function gs(e){var a,i,r;let t=[],n=(a=e.textContent)==null?void 0:a.trim();n&&n.length<100&&t.push(n);let l=e.previousElementSibling;if(l){let s=(i=l.textContent)==null?void 0:i.trim();s&&s.length<50&&t.unshift(`[before: "${s.slice(0,40)}"]`)}let o=e.nextElementSibling;if(o){let s=(r=o.textContent)==null?void 0:r.trim();s&&s.length<50&&t.push(`[after: "${s.slice(0,40)}"]`)}return t.join(" ")}function wu(e){let t=Gi(e);if(!t)return"";let n=e.getRootNode(),o=(k0(n)&&e.parentElement?Array.from(e.parentElement.children):Array.from(t.children)).filter(g=>g!==e&&g.namespaceURI==="http://www.w3.org/1999/xhtml");if(o.length===0)return"";let a=o.slice(0,4).map(g=>{var S;let h=g.tagName.toLowerCase(),_=g.className,p="";if(typeof _=="string"&&_){let T=_.split(/\s+/).map(D=>D.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(D=>D.length>2&&!/^[a-z]{1,2}$/.test(D));T&&(p=`.${T}`)}if(h==="button"||h==="a"){let T=(S=g.textContent)==null?void 0:S.trim().slice(0,15);if(T)return`${h}${p} "${T}"`}return`${h}${p}`}),r=t.tagName.toLowerCase();if(typeof t.className=="string"&&t.className){let g=t.className.split(/\s+/).map(h=>h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(h=>h.length>2&&!/^[a-z]{1,2}$/.test(h));g&&(r=`.${g}`)}let s=t.children.length,d=s>a.length+1?` (${s} total in ${r})`:"";return a.join(", ")+d}function ps(e){let t=e.className;return typeof t!="string"||!t?"":t.split(/\s+/).filter(l=>l.length>0).map(l=>{let o=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return o?o[1]:l}).filter((l,o,a)=>a.indexOf(l)===o).join(", ")}var Py=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),cv=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),uv=new Set(["input","textarea","select"]),dv=new Set(["img","video","canvas","svg"]),_v=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function ku(e){var a;if(typeof window=="undefined")return{};let t=((a=e.ownerDocument.defaultView)!=null?a:window).getComputedStyle(e),n={},l=e.tagName.toLowerCase(),o;cv.has(l)?o=["color","fontSize","fontWeight","fontFamily","lineHeight"]:l==="button"||l==="a"&&e.getAttribute("role")==="button"?o=["backgroundColor","color","padding","borderRadius","fontSize"]:uv.has(l)?o=["backgroundColor","color","padding","borderRadius","fontSize"]:dv.has(l)?o=["width","height","objectFit","borderRadius"]:_v.has(l)?o=["display","padding","margin","gap","backgroundColor"]:o=["color","fontSize","margin","padding","backgroundColor"];for(let i of o){let r=i.replace(/([A-Z])/g,"-$1").toLowerCase(),s=t.getPropertyValue(r);s&&!Py.has(s)&&(n[i]=s)}return n}var fv=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Su(e){var l;if(typeof window=="undefined")return"";let t=((l=e.ownerDocument.defaultView)!=null?l:window).getComputedStyle(e),n=[];for(let o of fv){let a=o.replace(/([A-Z])/g,"-$1").toLowerCase(),i=t.getPropertyValue(a);i&&!Py.has(i)&&n.push(`${a}: ${i}`)}return n.join("; ")}function hv(e){if(!e)return;let t={},n=e.split(";").map(l=>l.trim()).filter(Boolean);for(let l of n){let o=l.indexOf(":");if(o>0){let a=l.slice(0,o).trim(),i=l.slice(o+1).trim();a&&i&&(t[a]=i)}}return Object.keys(t).length>0?t:void 0}function Cu(e){let t=[],n=e.getAttribute("role"),l=e.getAttribute("aria-label"),o=e.getAttribute("aria-describedby"),a=e.getAttribute("tabindex"),i=e.getAttribute("aria-hidden");return n&&t.push(`role="${n}"`),l&&t.push(`aria-label="${l}"`),o&&t.push(`aria-describedby="${o}"`),a&&t.push(`tabindex=${a}`),i==="true"&&t.push("aria-hidden"),e.matches("a, button, input, select, textarea, [tabindex]")&&t.push("focusable"),t.join(", ")}function ks(e){let t=[],n=e;for(;n&&n.tagName.toLowerCase()!=="html";){let o=n.tagName.toLowerCase(),a=o;if(n.id)a=`${o}#${n.id}`;else if(n.className&&typeof n.className=="string"){let r=n.className.split(/\s+/).map(s=>s.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(s=>s.length>2);r&&(a=`${o}.${r}`)}let i=Gi(n);!n.parentElement&&i&&(a=`\u27E8shadow\u27E9 ${a}`),t.unshift(a),n=i}let l=al(e.ownerDocument);return(l?ks(l)+" > \u27E8iframe\u27E9 ":"")+t.join(" > ")}var Jy="agentation-toolbar, [data-agentation-root], [data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]",mv=new Set(["DIV","SPAN","SECTION","ARTICLE","MAIN","ASIDE","HEADER","FOOTER","NAV"]);function $u(e,t){var o,a,i;let n=document.elementFromPoint(e,t),l=new Set;for(;n&&!l.has(n);){l.add(n);let r=Rs(n),s;if(r){let d=Vi(n);e=(e-d.x)/d.sx,t=(t-d.y)/d.sy,s=(o=r.elementFromPoint)==null?void 0:o.call(r,e,t)}else s=(i=(a=n.shadowRoot)==null?void 0:a.elementFromPoint)==null?void 0:i.call(a,e,t);if(!s||s===n)break;n=s}return n}function gv(e){if(typeof e.checkVisibility=="function")return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let t=getComputedStyle(e);if(t.visibility==="hidden"||t.visibility==="collapse")return!1;let n=e;for(;n;){let l=getComputedStyle(n);if(l.opacity==="0"||l.display==="none"||l.contentVisibility==="hidden")return!1;let o=n.getRootNode();n=n.parentElement||(k0(o)?o.host:null)}return!0}function e5(e,t){var a,i;let n=[],l=new Set,o=(r,s,d)=>{var g,h,_,p,S,T;for(let D of r){if(l.has(D))continue;if(l.add(D),D.shadowRoot){let k=D.shadowRoot,v=(h=(g=k.elementsFromPoint)==null?void 0:g.call(k,s,d))!=null?h:[];o(v.length?v:[(_=k.elementFromPoint)==null?void 0:_.call(k,s,d)].filter(Boolean),s,d)}let x=Rs(D);if(x){let k=Vi(D),v=(s-k.x)/k.sx,m=(d-k.y)/k.sy;o((T=(p=x.elementsFromPoint)==null?void 0:p.call(x,v,m))!=null?T:[(S=x.elementFromPoint)==null?void 0:S.call(x,v,m)].filter(Boolean),v,m)}D!==D.ownerDocument.body&&D!==D.ownerDocument.documentElement&&!bn(D,Jy)&&gv(D)&&n.push(D)}};return o((i=(a=document.elementsFromPoint)==null?void 0:a.call(document,e,t))!=null?i:[document.elementFromPoint(e,t)].filter(Boolean),e,t),n}function Mu(e,t,n){if(n.width<=0||n.height<=0)return null;let l=null,o=1/0;for(let a of e5(e,t)){let i=en(a),r=i.width/n.width,s=i.height/n.height;if(r<.5||r>2||s<.5||s>2)continue;let d=Math.abs(Math.log(r))+Math.abs(Math.log(s));d<o&&(l=a,o=d)}return l}function py(e,t){let n=$u(e,t);if(!n||bn(n,Jy))return null;let l=e5(e,t);for(let i of l)if(!mv.has(i.tagName)&&!i.shadowRoot||Array.from(i.childNodes).some(r=>{var s;return r.nodeType===Node.TEXT_NODE&&((s=r.textContent)==null?void 0:s.trim())}))return i;let o=null,a=1/0;for(let i of l){let r=en(i),s=r.width*r.height;s>0&&s<a&&(o=i,a=s)}return o}function pv(e){let t=(0,qu.useCallback)(n=>e?(window.addEventListener("hashchange",n),window.addEventListener("popstate",n),()=>{window.removeEventListener("hashchange",n),window.removeEventListener("popstate",n)}):()=>{},[e]);return(0,qu.useSyncExternalStore)(t,()=>window.location.pathname+(e?window.location.hash:""),()=>"/")}var Eu=new Map;function yv(e,t){var o;let n=((o=Eu.get(e))!=null?o:Promise.resolve()).then(t),l=n.then(()=>{},()=>{});return Eu.set(e,l),l.then(()=>{Eu.get(e)===l&&Eu.delete(e)}),n}function bv(e,t,n){try{let l=new URL(e,n);return l.origin===n&&l.pathname+l.hash===t}catch{return!1}}var yy=typeof window=="undefined"?Fi.useEffect:Fi.useLayoutEffect;function xv(e){let[t,n]=(0,Fi.useState)(null);return yy(()=>{let l=document.createElement("div");return l.setAttribute("data-agentation-portal",""),l.style.display="contents",n(l),()=>l.remove()},[]),yy(()=>{var i;if(!t)return;let l=e!=null?e:document.body;if(l.ownerDocument!==document){console.warn("[Agentation] portalContainer belongs to another document; the toolbar will not render.");return}let o=document.activeElement;for(;(i=o==null?void 0:o.shadowRoot)!=null&&i.activeElement;)o=o.shadowRoot.activeElement;let a=o&&t.contains(document.activeElement)?o:null;typeof t.hidePopover=="function"&&t.matches(":popover-open")&&t.hidePopover(),l.appendChild(t),e&&typeof t.showPopover=="function"?(t.setAttribute("popover","manual"),t.style.cssText="position:fixed;inset:0 auto auto 0;margin:0;padding:0;border:0;background:transparent;width:0;height:0;overflow:visible;pointer-events:none",t.showPopover()):(t.removeAttribute("popover"),t.style.cssText="display:contents"),a==null||a.focus({preventScroll:!0})},[t,e]),t}var vv=({mode:e="open",delegatesFocus:t,slotAssignment:n,host:l="div",children:o,className:a,...i})=>{let r=(0,Zi.useRef)(null),[s,d]=(0,Zi.useState)(null);return(0,Zi.useLayoutEffect)(()=>{let h=r.current;if(!h||h.shadowRoot)return;let _=h.attachShadow({mode:e,delegatesFocus:t,slotAssignment:n});d(_)},[]),(0,l5.jsx)(l,{ref:r,...i,...l.includes("-")?{class:a}:{className:a},children:s&&(0,n5.createPortal)(o,s)})};function C0(e,t,n){let l=(0,Cs.useRef)(n);(0,Cs.useLayoutEffect)(()=>{l.current=n},[n]),(0,Cs.useLayoutEffect)(()=>{var r,s;let o=e.current;if(!t||!o)return;let a=!1,i=(s=(r=o.getAnimations)==null?void 0:r.call(o))!=null?s:[];return Promise.allSettled(i.map(d=>d.finished)).then(()=>{a||l.current()}),()=>{a=!0}},[e,t])}var o5=`@charset "UTF-8";
.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  pointer-events: none;
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.styles-module__sourceAction___EabJb {
  display: block;
  max-width: 100%;
  margin: -2px 0 8px;
  padding: 2px 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 11px;
  border: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}
.styles-module__sourceAction___EabJb:hover, .styles-module__sourceAction___EabJb:focus-visible {
  opacity: 1;
}
.styles-module__sourceAction___EabJb:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

.styles-module__light___6AaSQ .styles-module__sourceAction___EabJb {
  color: #111;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR,
.styles-module__deleteButton___4VuAE {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.875rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  display: flex;
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__popup___IhzrD.styles-module__enter___L7U7N, .styles-module__popup___IhzrD.styles-module__exit___5eGjE {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
}
.styles-module__sharedForm___8GvQl {
  --card-motion: 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.75rem 1rem;
  transition: padding var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__header___wWsSi {
  transition: margin-bottom var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__sharedForm___8GvQl .styles-module__previewExcerpt___DCOIL {
  display: none;
}
.styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
  opacity: 1;
  margin-left: 0;
  transition: margin-left var(--card-motion), opacity 100ms ease-out, transform var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5 {
  position: relative;
  height: var(--editor-field-height, 57px);
  border-radius: 8px;
  overflow: clip;
  transition: height var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--field-border, rgba(255, 255, 255, 0.15));
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: opacity var(--card-motion), border-color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNoteContent___6q3KD {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: clip;
  transition: width var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5[data-truncated]::after {
  content: "\u2026";
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__textarea___jrSae {
  display: block;
  width: calc(280px - 2rem);
  max-width: calc(100vw - 24px - 2rem);
  margin: 0;
  background: transparent !important;
  border-color: transparent !important;
  transform: translate(0, 0);
  transition: transform var(--card-motion), color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows var(--card-motion), opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  transition-delay: 0ms, 120ms;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtraInner___EuUh4 {
  min-height: 0;
  overflow: hidden;
}
.styles-module__sharedForm___8GvQl .styles-module__actions___D6x3f {
  min-height: 0;
  overflow: hidden;
  transition: margin-top var(--card-motion);
}
.styles-module__sharedForm___8GvQl[data-preview] {
  padding: 8px 12px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__header___wWsSi {
  margin-bottom: 5px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__previewExcerpt___DCOIL {
  display: inline;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__element___fTV2z {
  line-height: 1.4;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__chevron___ZZJlR {
  opacity: 0;
  margin-left: -18px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5 {
  height: 20.2px;
  border-radius: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::before {
  opacity: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae {
  transform: translate(-11px, calc(-9px + (1.4em - 1lh) / 2));
  color: #fff;
  overflow: hidden;
  cursor: default;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedActions___6Glpl {
  grid-template-rows: 0fr;
  opacity: 0;
  transition-delay: 0ms;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__actions___D6x3f {
  margin-top: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__stylesWrapper___pnHgy {
  grid-template-rows: 0fr;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated] .styles-module__sharedNoteContent___6q3KD {
  width: calc(100% - 12px);
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated]::after {
  opacity: 1;
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  border-color: var(--field-border, rgba(0, 0, 0, 0.12));
  background: rgba(0, 0, 0, 0.03);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae, .styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::after {
  color: rgba(0, 0, 0, 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__sharedForm___8GvQl {
    --card-motion: 1ms linear;
  }
  .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl, .styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
    transition: opacity 100ms ease-out;
    transition-delay: 0ms;
  }
}`,He={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",sourceAction:"styles-module__sourceAction___EabJb",light:"styles-module__light___6AaSQ",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteButton:"styles-module__deleteButton___4VuAE",deleteWrapper:"styles-module__deleteWrapper___oSjdo",sharedForm:"styles-module__sharedForm___8GvQl",previewExcerpt:"styles-module__previewExcerpt___DCOIL",sharedNote:"styles-module__sharedNote___OYVi5",sharedNoteContent:"styles-module__sharedNoteContent___6q3KD",sharedExtra:"styles-module__sharedExtra___RUBKC",sharedActions:"styles-module__sharedActions___6Glpl",sharedExtraInner:"styles-module__sharedExtraInner___EuUh4"},n0="data-agentation-styles";function i5(e,t,n){if(!n||!e)return;let l=e.nodeType===9?e.head:e.nodeType===11?e:null;if(!l||typeof l.querySelector!="function"||l.querySelector(`style[${n0}~="toolbar"], style[${n0}~="${t}"]`))return;let a=(e.nodeType===9?e:e.ownerDocument).createElement("style");a.setAttribute(n0,t),a.textContent=n,l.appendChild(a)}function M0(e,t){return(0,a5.useCallback)(n=>{n&&i5(n.getRootNode(),e,t)},[e,t])}function by(e){if(!e)return;let t=n=>n.stopImmediatePropagation();document.addEventListener("focusin",t,!0),document.addEventListener("focusout",t,!0);try{e.focus({preventScroll:!0})}finally{document.removeEventListener("focusin",t,!0),document.removeEventListener("focusout",t,!0)}}var r5=(0,En.forwardRef)(function({element:t,timestamp:n,selectedText:l,placeholder:o="What should change?",initialValue:a="",submitLabel:i="Add",onSubmit:r,onCancel:s,onDelete:d,onOpenSource:g,allowEmpty:h=!1,accentColor:_="#3c82f7",computedStyles:p,disabled:S=!1,preview:T=!1,resetOnPreview:D=!0,variant:x="popup"},k){let v=x==="card",[m,z]=(0,En.useState)(a),[Q,L]=(0,En.useState)(!1),[V,H]=(0,En.useState)(!1),K=(0,En.useRef)(null),oe=(0,En.useRef)(null),P=l?` "${l.slice(0,30)}${l.length>30?"...":""}"`:"";(0,En.useLayoutEffect)(()=>{var ft;let ue=oe.current,ye=K.current;if(!v||!ue||!ye)return;let At=()=>{ue.style.setProperty("--editor-field-height",`${ye.offsetHeight}px`)};if(At(),"CanvasRenderingContext2D"in window){let Oe=document.createElement("canvas").getContext("2d");if(Oe){let _t=getComputedStyle(ye).fontFamily;Oe.font=`13px ${_t}`;let Zt=Oe.measureText(a.replace(/\s+/g," ")).width;Oe.font=`italic 12px ${_t}`;let Tn=Oe.measureText(t+P).width,Re=Math.min(200,Math.max(120,Math.ceil(Math.max(Zt,Tn))+24));(ft=ue.closest("[data-annotation-card]"))==null||ft.style.setProperty("--preview-width",`${Re}px`);let $n=ue.querySelector("[data-shared-note]");$n&&$n.toggleAttribute("data-truncated",Zt>Re-24)}}let Ne=typeof ResizeObserver!="undefined"?new ResizeObserver(At):null;return Ne==null||Ne.observe(ye),()=>Ne==null?void 0:Ne.disconnect()},[v,t,a,P]),(0,En.useLayoutEffect)(()=>{T&&D&&(z(a),H(!1),K.current&&(K.current.scrollTop=0,K.current.scrollLeft=0))},[T,D,a]),(0,En.useImperativeHandle)(k,()=>({focus(){let ue=K.current;by(ue),ue&&(ue.selectionStart=ue.selectionEnd=ue.value.length,ue.scrollTop=v?0:ue.scrollHeight)}}),[v]);let he=(0,En.useCallback)(()=>{S||!m.trim()&&!h||r(m.trim())},[S,m,h,r]),ne=ue=>{ue.stopPropagation(),!ue.nativeEvent.isComposing&&(ue.key==="Enter"&&!ue.shiftKey&&(ue.preventDefault(),he()),ue.key==="Escape"&&s())};return(0,lt.jsxs)("div",{ref:oe,className:v?He.sharedForm:void 0,style:v?void 0:{display:"contents"},"data-annotation-editor":!0,"data-preview":T||void 0,children:[(0,lt.jsxs)("div",{className:He.header,"data-editor-heading":!0,children:[p&&Object.keys(p).length>0?(0,lt.jsxs)("button",{className:He.headerToggle,onClick:()=>{let ue=V;H(!V),ue&&it(()=>by(K.current),0)},type:"button",children:[(0,lt.jsx)("svg",{className:`${He.chevron} ${V?He.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,lt.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,lt.jsxs)("span",{className:He.element,children:[t,v&&P&&(0,lt.jsx)("span",{className:He.previewExcerpt,children:P})]})]}):(0,lt.jsxs)("span",{className:He.element,children:[t,v&&P&&(0,lt.jsx)("span",{className:He.previewExcerpt,children:P})]}),n&&(0,lt.jsx)("span",{className:He.timestamp,children:n})]}),g&&(0,lt.jsx)("div",{className:v?He.sharedExtra:void 0,style:v?void 0:{display:"contents"},children:(0,lt.jsx)("div",{className:v?He.sharedExtraInner:void 0,style:v?void 0:{display:"contents"},children:(0,lt.jsx)("button",{type:"button",className:He.sourceAction,onClick:g,children:"Open in editor"})})}),p&&Object.keys(p).length>0&&(0,lt.jsx)("div",{className:`${He.stylesWrapper} ${V?He.expanded:""}`,children:(0,lt.jsx)("div",{className:He.stylesInner,children:(0,lt.jsx)("div",{className:He.stylesBlock,children:Object.entries(p).map(([ue,ye])=>(0,lt.jsxs)("div",{className:He.styleLine,children:[(0,lt.jsx)("span",{className:He.styleProperty,children:ue.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,lt.jsx)("span",{className:He.styleValue,children:ye}),";"]},ue))})})}),l&&(0,lt.jsx)("div",{className:v?He.sharedExtra:void 0,style:v?void 0:{display:"contents"},children:(0,lt.jsx)("div",{className:v?He.sharedExtraInner:void 0,style:v?void 0:{display:"contents"},children:(0,lt.jsxs)("div",{className:He.quote,children:["\u201C",l.slice(0,80),l.length>80?"...":"","\u201D"]})})}),(0,lt.jsx)("div",{"data-shared-note":!0,className:v?He.sharedNote:void 0,style:v?{"--field-border":Q?_:void 0}:{display:"contents"},children:(0,lt.jsx)("div",{className:v?He.sharedNoteContent:void 0,style:v?void 0:{display:"contents"},children:(0,lt.jsx)("textarea",{ref:K,className:He.textarea,readOnly:T,"aria-hidden":T,style:v?void 0:{borderColor:Q?_:void 0},placeholder:o,value:T?m.replace(/\s+/g," "):m,onChange:ue=>z(ue.target.value),onFocus:()=>L(!0),onBlur:()=>L(!1),rows:2,onKeyDown:ne})})}),(0,lt.jsx)("div",{"data-editor-actions":!0,className:v?He.sharedActions:void 0,style:v?void 0:{display:"contents"},children:(0,lt.jsxs)("div",{className:He.actions,children:[d&&(0,lt.jsx)("div",{className:He.deleteWrapper,children:(0,lt.jsx)("button",{className:He.deleteButton,onClick:d,type:"button","aria-label":"Delete annotation",children:"Delete"})}),(0,lt.jsx)("button",{className:He.cancel,onClick:s,children:"Cancel"}),(0,lt.jsx)("button",{className:He.submit,style:{backgroundColor:_,opacity:m.trim()||h?1:.4},onClick:he,disabled:S||!m.trim()&&!h,children:i})]})})]})}),E0=(0,dn.forwardRef)(function({element:t,timestamp:n,selectedText:l,placeholder:o="What should change?",initialValue:a="",submitLabel:i="Add",onSubmit:r,onCancel:s,onDelete:d,onOpenSource:g,allowEmpty:h=!1,style:_,accentColor:p="#3c82f7",isExiting:S=!1,onExitComplete:T,lightMode:D=!1,computedStyles:x},k){let[v,m]=(0,dn.useState)(!1),[z,Q]=(0,dn.useState)("initial"),L=(0,dn.useRef)(null),V=(0,dn.useRef)(null);(0,dn.useEffect)(()=>{var ne;i5((ne=V.current)==null?void 0:ne.getRootNode(),"annotation-popup",o5)},[]);let H=(0,dn.useRef)(null);(0,dn.useEffect)(()=>{let ne=it(()=>{Q(ue=>ue==="initial"?"enter":ue)},0);return()=>{clearTimeout(ne),H.current&&clearTimeout(H.current)}},[]),(0,dn.useEffect)(()=>{if(S)return;let ne=it(()=>{var ue;return(ue=L.current)==null?void 0:ue.focus()},50);return()=>clearTimeout(ne)},[S]);let K=(0,dn.useCallback)(()=>{H.current&&clearTimeout(H.current),m(!0),H.current=it(()=>{var ne;m(!1),(ne=L.current)==null||ne.focus()},250)},[]);(0,dn.useImperativeHandle)(k,()=>({shake:K}),[K]);let oe=(0,dn.useCallback)(()=>{if(T){s();return}Q("exit")},[s,T]),P=S?"exit":z;C0(V,P==="exit",()=>{S?T==null||T():s()});let he=[He.popup,D?He.light:"",P==="enter"?He.enter:"",P==="entered"?He.entered:"",P==="exit"?He.exit:"",v&&P!=="exit"?He.shake:""].filter(Boolean).join(" ");return(0,h0.jsx)("div",{ref:V,className:he,"data-annotation-popup":!0,style:_,onAnimationEnd:ne=>{ne.target===ne.currentTarget&&ne.animationName.includes("popupEnter")&&!S&&Q("entered")},onKeyDownCapture:ne=>{ne.key!=="Escape"||ne.nativeEvent.isComposing||(ne.preventDefault(),ne.stopPropagation(),oe())},onClick:ne=>ne.stopPropagation(),children:(0,h0.jsx)(r5,{ref:L,element:t,timestamp:n,selectedText:l,placeholder:o,initialValue:a,submitLabel:i,onSubmit:r,onCancel:oe,onDelete:d,onOpenSource:g,allowEmpty:h,accentColor:p,computedStyles:x,disabled:P==="exit"})})}),Wu=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,St={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};var wv=({size:e=16})=>(0,re.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",children:(0,re.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var kv=({size:e=20,...t})=>(0,re.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:[(0,re.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,re.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var Sv=({size:e=24,copied:t=!1,tint:n})=>(0,re.jsxs)("svg",{ref:M0("icon-transitions",Wu),width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:n?{color:n,transition:"color 0.3s ease"}:void 0,children:[(0,re.jsxs)("g",{className:`${St.iconState} ${t?St.hiddenScaled:St.visibleScaled}`,children:[(0,re.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,re.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,re.jsxs)("g",{className:`${St.iconState} ${t?St.visibleScaled:St.hiddenScaled}`,children:[(0,re.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Cv=({size:e=24,state:t="idle"})=>{let n=t==="idle",l=t==="sent",o=t==="failed",a=t==="sending";return(0,re.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,re.jsx)("g",{className:`${St.iconStateFast} ${n?St.visibleScaled:a?St.sending:St.hiddenScaled}`,children:(0,re.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,re.jsxs)("g",{className:`${St.iconStateFast} ${l?St.visibleScaled:St.hiddenScaled}`,children:[(0,re.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,re.jsxs)("g",{className:`${St.iconStateFast} ${o?St.visibleScaled:St.hiddenScaled}`,children:[(0,re.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,re.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var Mv=({size:e=24,isOpen:t=!0})=>(0,re.jsxs)("svg",{ref:M0("icon-transitions",Wu),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,re.jsxs)("g",{className:`${St.iconFade} ${t?St.visible:St.hidden}`,children:[(0,re.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,re.jsxs)("g",{className:`${St.iconFade} ${t?St.hidden:St.visible}`,children:[(0,re.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,re.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Ev=({size:e=24,isPaused:t=!1})=>(0,re.jsxs)("svg",{ref:M0("icon-transitions",Wu),width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,re.jsxs)("g",{className:`${St.iconFadeFast} ${t?St.hidden:St.visible}`,children:[(0,re.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,re.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,re.jsx)("path",{className:`${St.iconFadeFast} ${t?St.visible:St.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var Tv=({size:e=16})=>(0,re.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,re.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var Rv=({size:e=16})=>(0,re.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:(0,re.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var Nv=({size:e=16})=>(0,re.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,re.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,re.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,re.jsx)("defs",{children:(0,re.jsx)("clipPath",{id:"clip0_2_53",children:(0,re.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]});var Dv=({size:e=16})=>(0,re.jsxs)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:[(0,re.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,re.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Av=({size:e=16})=>(0,re.jsx)("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",children:(0,re.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Lv=({size:e=16})=>(0,re.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,re.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})});var Ov=({size:e=16})=>(0,re.jsx)("svg",{width:e,height:e,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,re.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var zv=({size:e=24})=>(0,re.jsxs)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",children:[(0,re.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,re.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,re.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Bv=({content:e,children:t,...n})=>{let[l,o]=(0,Vl.useState)(!1),[a,i]=(0,Vl.useState)(!1),[r,s]=(0,Vl.useState)({top:0,right:0}),d=(0,Vl.useRef)(null),g=(0,Vl.useRef)(null),h=(0,Vl.useRef)(null),_=()=>{if(d.current){let T=d.current.getBoundingClientRect();s({top:T.top+T.height/2,right:window.innerWidth-T.left+8})}},p=()=>{i(!0),h.current&&(clearTimeout(h.current),h.current=null),_(),g.current=it(()=>{o(!0)},500)},S=()=>{g.current&&(clearTimeout(g.current),g.current=null),o(!1),h.current=it(()=>{i(!1)},150)};return(0,Vl.useEffect)(()=>()=>{g.current&&clearTimeout(g.current),h.current&&clearTimeout(h.current)},[]),(0,za.jsxs)(za.Fragment,{children:[(0,za.jsx)("span",{ref:d,onMouseEnter:p,onMouseLeave:S,...n,children:t}),a&&(0,s5.createPortal)((0,za.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:r.top,right:r.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:l?1:0,transition:"opacity 0.15s ease"},children:e}),document.body)]})},$v=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,xy={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"},La=({content:e})=>(0,m0.jsx)(Bv,{className:xy.tooltip,content:e,children:(0,m0.jsx)(kv,{className:xy.tooltipIcon})}),Hv=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

:host {
  /* Set here rather than inline so a consumer className rule can still hide the toolbar. */
  display: contents;
  position: fixed;
  top: auto;
  left: auto;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100000;
}

.styles-module__positionContext___AZFHE,
.styles-module__toolbar___wNsdK {
  position: inherit;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
  z-index: inherit;
}

.styles-module__toolbar___wNsdK {
  width: 337px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0.36s cubic-bezier(0.19, 1, 0.22, 1), top 0s, right 0s, bottom 0s;
}
.styles-module__toolbar___wNsdK[data-dragging=true] {
  transition: none;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 22px;
  padding: 5px;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__toolbar___wNsdK,
  .styles-module__toolbarContainer___dIhma {
    transition: none;
  }
}
.styles-module__buttonWrapper___rBcdv.styles-module__toggleWrapper___7N0-q {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
}

.styles-module__togglePlaceholder___wnqrL {
  width: 34px;
  flex: 0 0 34px;
  height: 34px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__toggleContent___0yfyP::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  pointer-events: none;
  background: transparent;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: #fff;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(255, 255, 255, 0.12);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active::before, .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active .styles-module__toggleGlyph___R7Oom {
  transform: scale(0.92);
}

.styles-module__toggleIcon___Jbtus {
  transform: translateY(-0.5px);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module__expandedToggle___F7SRN .styles-module__toggleIcon___Jbtus {
  transform: none;
}

.styles-module__toggleGlyph___R7Oom {
  overflow: visible;
  transition: transform 0.1s ease;
}
.styles-module__toggleGlyph___R7Oom path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s ease;
}

.styles-module__toggleTopLine___hQaCm,
.styles-module__toggleMiddleLine___sFFVe {
  vector-effect: non-scaling-stroke;
}

.styles-module__toggleBottomLine___V-jX3 {
  transform-origin: left center;
}

.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleTopLine___hQaCm {
  transform: translateY(5.25px) rotate(45deg) scaleX(1.1422494);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleMiddleLine___sFFVe {
  transform: translateX(3.5px) rotate(-45deg) scaleX(2.4748737);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleBottomLine___V-jX3 {
  transform: scaleX(0);
  opacity: 0;
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleSparkle___eeF99 {
  transform: scale(0);
  opacity: 0;
}

.styles-module__toggleContent___0yfyP:focus-visible,
.styles-module__controlButton___8Q0jc:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: filter 0.14s ease-out, opacity 0.14s ease-out, transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  transition: filter 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(6px);
  transform: scale(0.4);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__controlsContent___9GJWU,
  .styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW,
  .styles-module__toggleContent___0yfyP,
  .styles-module__toggleContent___0yfyP::before,
  .styles-module__toggleGlyph___R7Oom,
  .styles-module__toggleIcon___Jbtus,
  .styles-module__toggleGlyph___R7Oom path {
    transition: none;
  }
  .styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
    filter: none;
    transform: none;
  }
}
.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-user-select: none;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -6px;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1), margin 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 3px;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  z-index: 99999;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: min(280px, 100vw - 16px - 1.2rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,j={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",positionContext:"styles-module__positionContext___AZFHE",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",buttonWrapper:"styles-module__buttonWrapper___rBcdv",toggleWrapper:"styles-module__toggleWrapper___7N0-q",togglePlaceholder:"styles-module__togglePlaceholder___wnqrL",toggleContent:"styles-module__toggleContent___0yfyP",expandedToggle:"styles-module__expandedToggle___F7SRN",toggleGlyph:"styles-module__toggleGlyph___R7Oom",toggleIcon:"styles-module__toggleIcon___Jbtus",toggleTopLine:"styles-module__toggleTopLine___hQaCm",toggleMiddleLine:"styles-module__toggleMiddleLine___sFFVe",toggleBottomLine:"styles-module__toggleBottomLine___V-jX3",toggleSparkle:"styles-module__toggleSparkle___eeF99",controlButton:"styles-module__controlButton___8Q0jc",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};function Uv({active:e}){return(0,Oa.jsxs)("svg",{className:j.toggleGlyph,"data-active":e,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,Oa.jsx)("path",{className:j.toggleTopLine,d:"M5.5 6.75H18.5"}),(0,Oa.jsx)("path",{className:j.toggleMiddleLine,d:"M5.5 12H11.5"}),(0,Oa.jsx)("path",{className:j.toggleBottomLine,d:"M5.5 17.25H9.25"}),(0,Oa.jsx)("path",{className:j.toggleSparkle,d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z"})]})}var se={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},c5=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...se.navigation},{type:"header",label:"Header",...se.header},{type:"hero",label:"Hero",...se.hero},{type:"section",label:"Section",...se.section},{type:"sidebar",label:"Sidebar",...se.sidebar},{type:"footer",label:"Footer",...se.footer},{type:"modal",label:"Modal",...se.modal},{type:"banner",label:"Banner",...se.banner},{type:"drawer",label:"Drawer",...se.drawer},{type:"popover",label:"Popover",...se.popover},{type:"divider",label:"Divider",...se.divider}]},{section:"Content",items:[{type:"card",label:"Card",...se.card},{type:"text",label:"Text",...se.text},{type:"image",label:"Image",...se.image},{type:"video",label:"Video",...se.video},{type:"table",label:"Table",...se.table},{type:"grid",label:"Grid",...se.grid},{type:"list",label:"List",...se.list},{type:"chart",label:"Chart",...se.chart},{type:"codeBlock",label:"Code Block",...se.codeBlock},{type:"map",label:"Map",...se.map},{type:"timeline",label:"Timeline",...se.timeline},{type:"calendar",label:"Calendar",...se.calendar},{type:"accordion",label:"Accordion",...se.accordion},{type:"carousel",label:"Carousel",...se.carousel},{type:"logo",label:"Logo",...se.logo},{type:"faq",label:"FAQ",...se.faq},{type:"gallery",label:"Gallery",...se.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...se.button},{type:"input",label:"Input",...se.input},{type:"search",label:"Search",...se.search},{type:"form",label:"Form",...se.form},{type:"tabs",label:"Tabs",...se.tabs},{type:"dropdown",label:"Dropdown",...se.dropdown},{type:"toggle",label:"Toggle",...se.toggle},{type:"stepper",label:"Stepper",...se.stepper},{type:"rating",label:"Rating",...se.rating},{type:"fileUpload",label:"File Upload",...se.fileUpload},{type:"checkbox",label:"Checkbox",...se.checkbox},{type:"radio",label:"Radio",...se.radio},{type:"slider",label:"Slider",...se.slider},{type:"datePicker",label:"Date Picker",...se.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...se.avatar},{type:"badge",label:"Badge",...se.badge},{type:"tag",label:"Tag",...se.tag},{type:"breadcrumb",label:"Breadcrumb",...se.breadcrumb},{type:"pagination",label:"Pagination",...se.pagination},{type:"progress",label:"Progress",...se.progress},{type:"alert",label:"Alert",...se.alert},{type:"toast",label:"Toast",...se.toast},{type:"notification",label:"Notification",...se.notification},{type:"tooltip",label:"Tooltip",...se.tooltip},{type:"stat",label:"Stat",...se.stat},{type:"skeleton",label:"Skeleton",...se.skeleton},{type:"chip",label:"Chip",...se.chip},{type:"icon",label:"Icon",...se.icon},{type:"spinner",label:"Spinner",...se.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...se.pricing},{type:"testimonial",label:"Testimonial",...se.testimonial},{type:"cta",label:"CTA",...se.cta},{type:"productCard",label:"Product Card",...se.productCard},{type:"profile",label:"Profile",...se.profile},{type:"feature",label:"Feature",...se.feature},{type:"team",label:"Team",...se.team},{type:"login",label:"Login",...se.login},{type:"contact",label:"Contact",...se.contact}]}],Dl={};for(let e of c5)for(let t of e.items)Dl[t.type]=t;function X({w:e,h:t=3,strong:n}){return(0,u.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:t,borderRadius:2,background:n?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function gt({w:e,h:t,radius:n=3,style:l}){return(0,u.jsx)("div",{style:{width:typeof e=="number"?`${e}px`:e,height:typeof t=="number"?`${t}px`:t,borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...l}})}function Bn({size:e}){return(0,u.jsx)("div",{style:{width:e,height:e,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Yv({width:e,height:t}){let n=Math.max(8,t*.2);return(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${n}px`,gap:e*.02},children:[(0,u.jsx)(gt,{w:Math.max(20,t*.5),h:Math.max(12,t*.4),radius:2}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginLeft:e*.04},children:[(0,u.jsx)(X,{w:e*.06}),(0,u.jsx)(X,{w:e*.07}),(0,u.jsx)(X,{w:e*.05}),(0,u.jsx)(X,{w:e*.06})]}),(0,u.jsx)(gt,{w:e*.1,h:Math.min(28,t*.5),radius:4})]})}function jv({width:e,height:t,text:n}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.05},children:[n?(0,u.jsx)("span",{style:{fontSize:Math.min(20,t*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:n}):(0,u.jsx)(X,{w:e*.5,h:Math.max(6,t*.04),strong:!0}),(0,u.jsx)(X,{w:e*.6}),(0,u.jsx)(X,{w:e*.4}),(0,u.jsx)(gt,{w:Math.min(140,e*.2),h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.06}})]})}function Xv({width:e,height:t}){let n=Math.max(3,Math.floor(t/36));return(0,u.jsxs)("div",{style:{padding:e*.08,display:"flex",flexDirection:"column",gap:t*.03},children:[(0,u.jsx)(X,{w:e*.6,h:4,strong:!0}),Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,u.jsx)(gt,{w:10,h:10,radius:2}),(0,u.jsx)(X,{w:e*(.4+o*17%30/100)})]},o))]})}function qv({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/160)));return(0,u.jsx)("div",{style:{display:"flex",padding:`${t*.12}px ${e*.03}px`,gap:e*.05},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)(X,{w:"60%",h:3,strong:!0}),(0,u.jsx)(X,{w:"80%",h:2}),(0,u.jsx)(X,{w:"70%",h:2}),(0,u.jsx)(X,{w:"60%",h:2})]},o))})}function Wv({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,u.jsx)(X,{w:e*.3,h:4,strong:!0}),(0,u.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,u.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,u.jsx)(X,{w:"90%"}),(0,u.jsx)(X,{w:"70%"}),(0,u.jsx)(X,{w:"80%"})]}),(0,u.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,u.jsx)(gt,{w:70,h:26,radius:4}),(0,u.jsx)(gt,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function Iv({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,u.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,u.jsx)(X,{w:"70%",h:4,strong:!0}),(0,u.jsx)(X,{w:"95%",h:2}),(0,u.jsx)(X,{w:"85%",h:2}),(0,u.jsx)(X,{w:"50%",h:2})]})]})}function Qv({width:e,height:t,text:n}){if(n)return(0,u.jsx)("div",{style:{padding:4,fontSize:Math.min(14,t*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:n});let l=Math.max(2,Math.floor(t/18));return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,u.jsx)(X,{w:e*.6,h:5,strong:!0}),Array.from({length:l},(o,a)=>(0,u.jsx)(X,{w:`${70+a*13%25}%`,h:2},a))]})}function Gv({width:e,height:t}){return(0,u.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,preserveAspectRatio:"none",fill:"none",children:[(0,u.jsx)("line",{x1:"0",y1:"0",x2:e,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("line",{x1:e,y1:"0",x2:"0",y2:t,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("circle",{cx:e*.3,cy:t*.3,r:Math.min(e,t)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function Vv({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(e/100))),l=Math.max(2,Math.min(6,Math.floor(t/32)));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:n},(o,a)=>(0,u.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,u.jsx)(X,{w:"70%",h:3,strong:!0})},a))}),Array.from({length:l},(o,a)=>(0,u.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:n},(i,r)=>(0,u.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,u.jsx)(X,{w:`${50+(a*7+r*13)%40}%`,h:2})},r))},a))]})}function Fv({width:e,height:t}){let n=Math.max(2,Math.floor(t/28));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,u.jsx)(Bn,{size:8}),(0,u.jsx)(X,{w:`${55+o*17%35}%`,h:2})]},o))})}function Zv({width:e,height:t,text:n}){return(0,u.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,t/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:n?(0,u.jsx)("span",{style:{fontSize:Math.min(13,t*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:n}):(0,u.jsx)(X,{w:Math.max(20,e*.5),h:3,strong:!0})})}function Kv({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,u.jsx)(X,{w:Math.min(80,e*.3),h:2}),(0,u.jsx)("div",{style:{height:Math.min(36,t*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,u.jsx)(X,{w:"40%",h:2})})]})}function Pv({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:t*.04,padding:8},children:[Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)(X,{w:60+o*17%30,h:2}),(0,u.jsx)(gt,{w:"100%",h:28,radius:4})]},o)),(0,u.jsx)(gt,{w:Math.min(120,e*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Jv({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120)));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(l,o)=>(0,u.jsx)("div",{style:{padding:"8px 12px",borderBottom:o===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,u.jsx)(X,{w:60,h:3,strong:o===0})},o))}),(0,u.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,u.jsx)(X,{w:"80%",h:2}),(0,u.jsx)(X,{w:"65%",h:2}),(0,u.jsx)(X,{w:"75%",h:2})]})]})}function ew({width:e,height:t}){let n=Math.min(e,t)/2;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,u.jsx)("circle",{cx:e/2,cy:t*.38,r:n*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,u.jsx)("path",{d:`M${e/2-n*.55} ${t*.78} C${e/2-n*.55} ${t*.55} ${e/2+n*.55} ${t*.55} ${e/2+n*.55} ${t*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function tw({width:e,height:t}){return(0,u.jsx)("div",{style:{height:"100%",borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)(X,{w:Math.max(16,e*.5),h:2,strong:!0})})}function nw({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,u.jsx)(X,{w:e*.5,h:Math.max(5,t*.06),strong:!0}),(0,u.jsx)(X,{w:e*.35})]})}function lw({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:t*.04,padding:e*.04},children:[(0,u.jsx)(X,{w:e*.3,h:4,strong:!0}),(0,u.jsx)(X,{w:e*.7}),(0,u.jsx)(X,{w:e*.5}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",gap:e*.03,marginTop:t*.06},children:[(0,u.jsx)(gt,{w:"33%",h:"100%",radius:4}),(0,u.jsx)(gt,{w:"33%",h:"100%",radius:4}),(0,u.jsx)(gt,{w:"33%",h:"100%",radius:4})]})]})}function ow({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/140))),l=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,u.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:n*l},(o,a)=>(0,u.jsx)(gt,{w:"100%",h:"100%",radius:4},a))})}function aw({width:e,height:t}){let n=Math.max(2,Math.floor((t-32)/28));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,u.jsx)(X,{w:e*.5,h:3,strong:!0})}),(0,u.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:n},(l,o)=>(0,u.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:o===0?"var(--agd-fill)":"transparent"},children:(0,u.jsx)(X,{w:`${50+o*17%35}%`,h:2,strong:o===0})},o))})]})}function iw({width:e,height:t}){let n=Math.min(e,t)/2;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:"1",width:e-2,height:t-2,rx:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("circle",{cx:e-n,cy:t/2,r:n*.7,fill:"var(--agd-bar)"})]})}function rw({width:e,height:t}){let n=Math.min(t/2,20);return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:n,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.6}px`,gap:6},children:[(0,u.jsx)(Bn,{size:Math.min(14,t*.4)}),(0,u.jsx)(X,{w:"50%",h:2})]})}function sw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,u.jsx)(Bn,{size:Math.min(20,t*.5)}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(X,{w:"60%",h:3,strong:!0}),(0,u.jsx)(X,{w:"80%",h:2})]}),(0,u.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function cw({width:e,height:t}){return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("rect",{x:"0",y:"0",width:e,height:t,rx:t/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,u.jsx)("rect",{x:"1",y:"1",width:e*.65,height:t-2,rx:(t-2)/2,fill:"var(--agd-bar)"})]})}function uw({width:e,height:t}){let n=Math.max(3,Math.min(7,Math.floor(e/50))),l=e/(n*2);return(0,u.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:n},(o,a)=>{let i=30+(a*37+17)%55;return(0,u.jsx)(gt,{w:l,h:`${i}%`,radius:2},a)})})}function dw({width:e,height:t}){let n=Math.min(e,t)*.12;return(0,u.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,u.jsx)(gt,{w:"100%",h:"100%",radius:4}),(0,u.jsx)("div",{style:{position:"absolute",width:n*2,height:n*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("div",{style:{width:0,height:0,borderLeft:`${n*.6}px solid var(--agd-bar-strong)`,borderTop:`${n*.4}px solid transparent`,borderBottom:`${n*.4}px solid transparent`,marginLeft:n*.15}})})]})}function _w({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)(X,{w:"60%",h:2})}),(0,u.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function fw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/80)));return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o>0&&(0,u.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,u.jsx)(X,{w:40+o*13%20,h:2,strong:o===n-1})]},o))})}function hw({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/40))),l=Math.min(28,t*.8);return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:n},(o,a)=>(0,u.jsx)(gt,{w:l,h:l,radius:4,style:a===1?{background:"var(--agd-bar)"}:void 0},a))})}function mw({width:e}){return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,u.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function gw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(t/40)));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:o===0?2:1},children:[(0,u.jsx)(X,{w:`${40+o*17%25}%`,h:3,strong:!0}),(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:o===0?"\u25BC":"\u25B6"})]},o))})}function pw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,u.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,u.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,u.jsx)(gt,{w:"100%",h:"100%",radius:4}),(0,u.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,u.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,u.jsx)(Bn,{size:5}),(0,u.jsx)(Bn,{size:5}),(0,u.jsx)(Bn,{size:5})]})]})}function yw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:t*.04},children:[(0,u.jsx)(X,{w:e*.4,h:3,strong:!0}),(0,u.jsx)(X,{w:e*.3,h:6,strong:!0}),(0,u.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(n,l)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,u.jsx)(Bn,{size:5}),(0,u.jsx)(X,{w:`${50+l*17%35}%`,h:2})]},l))}),(0,u.jsx)(gt,{w:e*.7,h:Math.min(32,t*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function bw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,u.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)(X,{w:"90%",h:2}),(0,u.jsx)(X,{w:"75%",h:2}),(0,u.jsx)(X,{w:"60%",h:2})]}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,u.jsx)(Bn,{size:20}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,u.jsx)(X,{w:60,h:3,strong:!0}),(0,u.jsx)(X,{w:40,h:2})]})]})]})}function xw({width:e,height:t}){return(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:t*.08},children:[(0,u.jsx)(X,{w:e*.5,h:Math.max(4,t*.05),strong:!0}),(0,u.jsx)(X,{w:e*.35}),(0,u.jsx)(gt,{w:Math.min(140,e*.25),h:Math.min(32,t*.15),radius:6,style:{marginTop:t*.04,background:"var(--agd-bar)"}})]})}function vw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,u.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,u.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(X,{w:"40%",h:3,strong:!0}),(0,u.jsx)(X,{w:"70%",h:2})]})]})}function ww({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,u.jsx)(X,{w:e*.4,h:3,strong:!0}),(0,u.jsx)(gt,{w:60,h:Math.min(24,t*.6),radius:4})]})}function kw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,u.jsx)(X,{w:e*.5,h:2}),(0,u.jsx)(X,{w:e*.4,h:Math.max(8,t*.18),strong:!0}),(0,u.jsx)(X,{w:e*.3,h:2})]})}function Sw({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(e/100))),l=Math.min(12,t*.35);return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:n},(o,a)=>(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,u.jsx)("div",{style:{width:l,height:l,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:a===0?"var(--agd-bar)":"transparent",flexShrink:0}}),a<n-1&&(0,u.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},a))})}function Cw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,u.jsx)(X,{w:Math.max(16,e*.5),h:2,strong:!0}),(0,u.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function Mw({width:e,height:t}){let l=Math.min(t*.7,e/7.5);return(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.2},children:Array.from({length:5},(o,a)=>(0,u.jsx)("svg",{width:l,height:l,viewBox:"0 0 16 16",fill:"none",children:(0,u.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:a<3?"var(--agd-bar)":"none"})},a))})}function Ew({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,u.jsx)("line",{x1:0,y1:t*.3,x2:e,y2:t*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,u.jsx)("line",{x1:0,y1:t*.6,x2:e,y2:t*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,u.jsx)("line",{x1:e*.4,y1:0,x2:e*.6,y2:t,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,u.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,u.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,u.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,u.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Tw({width:e,height:t}){let n=Math.max(3,Math.min(5,Math.floor(t/60)));return(0,u.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,u.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,u.jsx)(Bn,{size:8}),o<n-1&&(0,u.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},o))}),(0,u.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(X,{w:`${35+o*13%25}%`,h:3,strong:!0}),(0,u.jsx)(X,{w:`${50+o*17%30}%`,h:2})]},o))})]})}function Rw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,u.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,u.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,u.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,u.jsx)(X,{w:e*.4,h:2}),(0,u.jsx)(X,{w:e*.25,h:2})]})}function Nw({width:e,height:t}){let n=Math.max(3,Math.min(8,Math.floor(t/20)));return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,u.jsx)(Bn,{size:6}),(0,u.jsx)(Bn,{size:6}),(0,u.jsx)(Bn,{size:6})]}),Array.from({length:n},(l,o)=>(0,u.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:o>0&&o<n-1?12:0},children:(0,u.jsx)(X,{w:`${25+o*23%50}%`,h:2,strong:o===0})},o))]})}function Dw({width:e,height:t}){let o=Math.min((e-16)/7,(t-40)/6);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,u.jsx)(X,{w:e*.3,h:3,strong:!0}),(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,u.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(a,i)=>(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:o*.6},children:(0,u.jsx)(X,{w:o*.5,h:2})},`h${i}`)),Array.from({length:35},(a,i)=>(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:o},children:(0,u.jsx)("div",{style:{width:o*.6,height:o*.6,borderRadius:"50%",background:i===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:i===12?1:.3}})})},i))]})]})}function Aw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,u.jsx)(Bn,{size:Math.min(32,t*.55)}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(X,{w:"50%",h:3,strong:!0}),(0,u.jsx)(X,{w:"75%",h:2})]}),(0,u.jsx)(X,{w:30,h:2})]})}function Lw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,u.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,u.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,u.jsx)(X,{w:"65%",h:4,strong:!0}),(0,u.jsx)(X,{w:"40%",h:3}),(0,u.jsx)("div",{style:{flex:1}}),(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,u.jsx)(X,{w:"30%",h:5,strong:!0}),(0,u.jsx)(gt,{w:Math.min(70,e*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function Ow({width:e,height:t}){let n=Math.min(48,t*.3);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:t*.06},children:[(0,u.jsx)(Bn,{size:n}),(0,u.jsx)(X,{w:e*.45,h:4,strong:!0}),(0,u.jsx)(X,{w:e*.3,h:2}),(0,u.jsxs)("div",{style:{display:"flex",gap:e*.08,marginTop:t*.04},children:[(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,u.jsx)(X,{w:20,h:3,strong:!0}),(0,u.jsx)(X,{w:28,h:2})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,u.jsx)(X,{w:20,h:3,strong:!0}),(0,u.jsx)(X,{w:28,h:2})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,u.jsx)(X,{w:20,h:3,strong:!0}),(0,u.jsx)(X,{w:28,h:2})]})]})]})}function zw({width:e,height:t}){let n=Math.max(e*.6,80),l=Math.max(3,Math.floor(t/40));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,u.jsx)("div",{style:{width:e-n,background:"var(--agd-fill)",opacity:.3}}),(0,u.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:e*.04},children:[(0,u.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:t*.06},children:[(0,u.jsx)(X,{w:n*.4,h:4,strong:!0}),(0,u.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:l},(o,a)=>(0,u.jsx)("div",{style:{padding:"6px 0"},children:(0,u.jsx)(X,{w:`${50+a*17%35}%`,h:2,strong:a===0})},a))]})]})}function Bw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,u.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,u.jsx)(X,{w:"70%",h:3,strong:!0}),(0,u.jsx)(X,{w:"90%",h:2}),(0,u.jsx)(X,{w:"60%",h:2})]}),(0,u.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function $w({width:e,height:t}){let n=Math.min(t*.7,e*.3);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:e*.08},children:[(0,u.jsx)(gt,{w:n,h:n,radius:n*.25}),(0,u.jsx)(X,{w:e*.45,h:Math.max(4,t*.2),strong:!0})]})}function Hw({width:e,height:t}){let n=Math.max(2,Math.min(5,Math.floor(t/56)));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:o===0?2:1},children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,u.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,u.jsx)(X,{w:e*(.3+o*13%25/100),h:3,strong:!0})]}),(0,u.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:o===0?"\u25BC":"\u25B6"})]},o))})}function Uw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),l=Math.max(1,Math.min(3,Math.floor(t/120)));return(0,u.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${n}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:n*l},(o,a)=>(0,u.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,u.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,u.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},a))})}function Yw({width:e,height:t}){let n=Math.min(e,t);return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("rect",{x:"1",y:(t-n+2)/2,width:n-2,height:n-2,rx:n*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,u.jsx)("path",{d:`M${n*.25} ${t/2}l${n*.2} ${n*.2} ${n*.3}-${n*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function jw({width:e,height:t}){let n=Math.min(e,t)/2-1;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n*.45,fill:"var(--agd-bar)"})]})}function Xw({width:e,height:t}){let n=Math.max(2,t*.12),l=Math.min(t*.35,10),o=e*.55;return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,u.jsx)("div",{style:{width:"100%",height:n,borderRadius:n/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,u.jsx)("div",{style:{width:o,height:"100%",borderRadius:n/2,background:"var(--agd-bar)"}})}),(0,u.jsx)("div",{style:{position:"absolute",left:o-l,width:l*2,height:l*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function qw({width:e,height:t}){let n=Math.min(36,t*.15),l=7,o=4,a=Math.min((e-16)/l,(t-n-40)/(o+1));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsxs)("div",{style:{height:n,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,u.jsx)(X,{w:"40%",h:2}),(0,u.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,u.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,u.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,u.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,u.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,u.jsx)(X,{w:e*.25,h:2,strong:!0}),(0,u.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,u.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${l}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:l*o},(i,r)=>(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:a},children:(0,u.jsx)("div",{style:{width:a*.5,height:a*.5,borderRadius:"50%",background:r===10?"var(--agd-bar)":"transparent"},children:(0,u.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:r===10?1:.25}})})})},r))})]})]})}function Ww({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:t*.08,padding:4},children:[(0,u.jsx)("div",{style:{width:"100%",height:t*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,u.jsx)("div",{style:{width:"70%",height:Math.max(6,t*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,u.jsx)("div",{style:{width:"90%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,u.jsx)("div",{style:{width:"50%",height:Math.max(4,t*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Iw({width:e,height:t}){return(0,u.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,u.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:t/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${t*.3}px`,gap:4},children:[(0,u.jsx)(X,{w:"60%",h:2,strong:!0}),(0,u.jsx)("div",{style:{width:Math.max(6,t*.3),height:Math.max(6,t*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function Qw({width:e,height:t}){let n=Math.min(e,t);return(0,u.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:(0,u.jsx)("path",{d:`M${e/2} ${(t-n)/2+n*.1}l${n*.12} ${n*.25} ${n*.28} ${n*.04}-${n*.2} ${n*.2} ${n*.05} ${n*.28}-${n*.25}-${n*.12}-${n*.25} ${n*.12} ${n*.05}-${n*.28}-${n*.2}-${n*.2} ${n*.28}-${n*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Gw({width:e,height:t}){let n=Math.min(e,t)/2-2;return(0,u.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${e} ${t}`,fill:"none",children:[(0,u.jsx)("circle",{cx:e/2,cy:t/2,r:n,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,u.jsx)("path",{d:`M${e/2} ${t/2-n}a${n} ${n} 0 0 1 ${n} ${n}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Vw({width:e,height:t}){let n=Math.min(36,t*.25,e*.12),l=Math.max(1,Math.min(3,Math.floor(t/80)));return(0,u.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:l},(o,a)=>(0,u.jsxs)("div",{style:{display:"flex",gap:e*.04,alignItems:"flex-start"},children:[(0,u.jsx)(gt,{w:n,h:n,radius:n*.25}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,u.jsx)(X,{w:`${40+a*13%20}%`,h:3,strong:!0}),(0,u.jsx)(X,{w:`${60+a*17%25}%`,h:2})]})]},a))})}function Fw({width:e,height:t}){let n=Math.max(2,Math.min(4,Math.floor(e/120))),l=Math.min(36,t*.25);return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:t*.06,padding:t*.06},children:[(0,u.jsx)(X,{w:e*.3,h:4,strong:!0}),(0,u.jsx)("div",{style:{display:"flex",gap:e*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:n},(o,a)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,u.jsx)(Bn,{size:l}),(0,u.jsx)(X,{w:e*.12,h:3,strong:!0}),(0,u.jsx)(X,{w:e*.08,h:2})]},a))})]})}function Zw({width:e,height:t}){let n=Math.max(2,Math.min(3,Math.floor(t/80)));return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:e*.06,gap:t*.04},children:[(0,u.jsx)(X,{w:e*.5,h:Math.max(5,t*.04),strong:!0}),(0,u.jsx)(X,{w:e*.35,h:2}),(0,u.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:t*.03,marginTop:t*.04},children:Array.from({length:n},(l,o)=>(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(X,{w:Math.min(60,e*.2),h:2}),(0,u.jsx)(gt,{w:"100%",h:Math.min(32,t*.1),radius:4})]},o))}),(0,u.jsx)(gt,{w:"100%",h:Math.min(36,t*.12),radius:6,style:{marginTop:t*.03,background:"var(--agd-bar)"}}),(0,u.jsx)(X,{w:e*.4,h:2})]})}function Kw({width:e,height:t}){return(0,u.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:e*.04,gap:t*.03},children:[(0,u.jsx)(X,{w:e*.4,h:4,strong:!0}),(0,u.jsx)(X,{w:e*.6,h:2}),(0,u.jsxs)("div",{style:{display:"flex",gap:6,marginTop:t*.03},children:[(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(X,{w:50,h:2}),(0,u.jsx)(gt,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,u.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(X,{w:40,h:2}),(0,u.jsx)(gt,{w:"100%",h:Math.min(28,t*.1),radius:4})]})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,u.jsx)(X,{w:50,h:2}),(0,u.jsx)(gt,{w:"100%",h:Math.min(28,t*.1),radius:4})]}),(0,u.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,u.jsx)(X,{w:60,h:2}),(0,u.jsx)(gt,{w:"100%",h:"100%",radius:4})]}),(0,u.jsx)(gt,{w:Math.min(120,e*.3),h:Math.min(30,t*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Pw={navigation:Yv,hero:jv,sidebar:Xv,footer:qv,modal:Wv,card:Iv,text:Qv,image:Gv,table:Vv,list:Fv,button:Zv,input:Kv,form:Pv,tabs:Jv,avatar:ew,badge:tw,header:nw,section:lw,grid:ow,dropdown:aw,toggle:iw,search:rw,toast:sw,progress:cw,chart:uw,video:dw,tooltip:_w,breadcrumb:fw,pagination:hw,divider:mw,accordion:gw,carousel:pw,pricing:yw,testimonial:bw,cta:xw,alert:vw,banner:ww,stat:kw,stepper:Sw,tag:Cw,rating:Mw,map:Ew,timeline:Tw,fileUpload:Rw,codeBlock:Nw,calendar:Dw,notification:Aw,productCard:Lw,profile:Ow,drawer:zw,popover:Bw,logo:$w,faq:Hw,gallery:Uw,checkbox:Yw,radio:jw,slider:Xw,datePicker:qw,skeleton:Ww,chip:Iw,icon:Qw,spinner:Gw,feature:Vw,team:Fw,login:Zw,contact:Kw};function Jw({type:e,width:t,height:n,text:l}){let o=Pw[e];return o?(0,u.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,u.jsx)(o,{width:t,height:n,text:l})}):(0,u.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:e})})}var e4=`.styles-module__overlay___aWh-q svg[fill=none],
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] {
  fill: none !important;
}
.styles-module__overlay___aWh-q svg[fill=none] :not([fill]),
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q,
.styles-module__handleE___0hM5u,
.styles-module__handleS___JjDRv,
.styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj,
.styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after,
.styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa,
.styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after,
.styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__palette___C7iSH[data-panel-present=true] {
  visibility: visible;
}
.styles-module__palette___C7iSH[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__palette___C7iSH {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  width: 100%;
  text-align: left;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  -webkit-user-select: none;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(88.0082041185%, 37.39404381%, 2.2663056855%);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}
.styles-module__canvasToggle___-QqSy:focus-visible,
.styles-module__paletteItem___6TlnA:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: -2px;
}`,$={overlay:"styles-module__overlay___aWh-q",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",overlayExiting:"styles-module__overlayExiting___iEmYr",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"},Xi=24,Tu=5;function vy(e,t,n,l,o){let a=1/0,i=1/0,r=e.x,s=e.x+e.width,d=e.x+e.width/2,g=e.y,h=e.y+e.height,_=e.y+e.height/2,p=!l,S=p?[r,s,d]:[...l.left?[r]:[],...l.right?[s]:[]],T=p?[g,h,_]:[...l.top?[g]:[],...l.bottom?[h]:[]],D=[];for(let oe of t)n.has(oe.id)||D.push(oe);o&&D.push(...o);for(let oe of D){let P=oe.x,he=oe.x+oe.width,ne=oe.x+oe.width/2,ue=oe.y,ye=oe.y+oe.height,At=oe.y+oe.height/2;for(let Ne of S)for(let ft of[P,he,ne]){let Oe=ft-Ne;Math.abs(Oe)<Tu&&Math.abs(Oe)<Math.abs(a)&&(a=Oe)}for(let Ne of T)for(let ft of[ue,ye,At]){let Oe=ft-Ne;Math.abs(Oe)<Tu&&Math.abs(Oe)<Math.abs(i)&&(i=Oe)}}let x=Math.abs(a)<Tu?a:0,k=Math.abs(i)<Tu?i:0,v=[],m=new Set,z=r+x,Q=s+x,L=d+x,V=g+k,H=h+k,K=_+k;for(let oe of D){let P=oe.x,he=oe.x+oe.width,ne=oe.x+oe.width/2,ue=oe.y,ye=oe.y+oe.height,At=oe.y+oe.height/2;for(let Ne of[P,ne,he])for(let ft of[z,L,Q])if(Math.abs(ft-Ne)<.5){let Oe=`x:${Math.round(Ne)}`;m.has(Oe)||(m.add(Oe),v.push({axis:"x",pos:Ne}))}for(let Ne of[ue,At,ye])for(let ft of[V,K,H])if(Math.abs(ft-Ne)<.5){let Oe=`y:${Math.round(Ne)}`;m.has(Oe)||(m.add(Oe),v.push({axis:"y",pos:Ne}))}}return{dx:x,dy:k,guides:v}}function wy(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function t4({placements:e,onChange:t,activeComponent:n,onActiveComponentChange:l,isDarkMode:o,exiting:a,onInteractionChange:i,className:r,passthrough:s,extraSnapRects:d,onSelectionChange:g,deselectSignal:h,onDragMove:_,onDragEnd:p,clearingPlacements:S,wireframe:T}){let[D,x]=(0,rt.useState)(new Set),[k,v]=(0,rt.useState)(null),[m,z]=(0,rt.useState)(null),[Q,L]=(0,rt.useState)(null),[V,H]=(0,rt.useState)([]),[K,oe]=(0,rt.useState)(null),[P,he]=(0,rt.useState)(!1),ne=(0,rt.useRef)(!1),[ue,ye]=(0,rt.useState)(new Set),At=(0,rt.useRef)(new Map),Ne=(0,rt.useRef)(null),ft=(0,rt.useRef)(null),Oe=(0,rt.useRef)(e);Oe.current=e;let _t=(0,rt.useRef)(g);_t.current=g;let Zt=(0,rt.useRef)(_);Zt.current=_;let Tn=(0,rt.useRef)(p);Tn.current=p;let Re=(0,rt.useRef)(h);(0,rt.useEffect)(()=>{h!==Re.current&&(Re.current=h,x(new Set))},[h]),(0,rt.useEffect)(()=>{S!=null&&S.length&&(x(Z=>new Set([...Z].filter(pe=>!S.some(Te=>Te.id===pe)))),ft.current=null)},[S]),(0,rt.useEffect)(()=>{let Z=pe=>{let Te=pe.composedPath()[0]||pe.target;if(!(Te.tagName==="INPUT"||Te.tagName==="TEXTAREA"||Te.isContentEditable)){if((pe.key==="Backspace"||pe.key==="Delete")&&D.size>0){pe.preventDefault();let qe=new Set(D);ye(qe),x(new Set),it(()=>{t(Oe.current.filter(De=>!qe.has(De.id))),ye(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(pe.key)&&D.size>0){pe.preventDefault();let qe=pe.shiftKey?20:1,De=pe.key==="ArrowLeft"?-qe:pe.key==="ArrowRight"?qe:0,Ue=pe.key==="ArrowUp"?-qe:pe.key==="ArrowDown"?qe:0;t(e.map(et=>D.has(et.id)?{...et,x:Math.max(0,et.x+De),y:Math.max(0,et.y+Ue)}:et));return}if(pe.key==="Escape"){n?l(null):D.size>0&&x(new Set);return}}};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[D,n,e,t,l]);let $n=(0,rt.useCallback)(Z=>{if(Z.button!==0||s||Z.target.closest(`.${$.placement}`))return;Z.preventDefault(),Z.stopPropagation();let Te=window.scrollY,Se=Z.clientX,qe=Z.clientY;if(n){ft.current="place",i==null||i(!0);let De=!1,Ue=Se,et=qe,Ve=E=>{Ue=E.clientX,et=E.clientY;let N=Math.abs(Ue-Se),Y=Math.abs(et-qe);if((N>5||Y>5)&&(De=!0),De){let W=Math.min(Se,Ue),ae=Math.min(qe,et),ie=Math.abs(Ue-Se),J=Math.abs(et-qe);v({x:W,y:ae,w:ie,h:J}),L({x:E.clientX+12,y:E.clientY+12,text:`${Math.round(ie)} \xD7 ${Math.round(J)}`})}},I=E=>{window.removeEventListener("mousemove",Ve),window.removeEventListener("mouseup",I),v(null),L(null),ft.current=null,i==null||i(!1);let N=se[n],Y,W,ae,ie;De?(Y=Math.min(Se,Ue),W=Math.min(qe,et)+Te,ae=Math.max(Xi,Math.abs(Ue-Se)),ie=Math.max(Xi,Math.abs(et-qe))):(ae=N.width,ie=N.height,Y=Se-ae/2,W=qe+Te-ie/2),Y=Math.max(0,Y),W=Math.max(0,W);let J={id:wy(),type:n,x:Y,y:W,width:ae,height:ie,scrollY:Te,timestamp:Date.now()},ze=[...e,J];t(ze),x(new Set([J.id])),l(null)};window.addEventListener("mousemove",Ve),window.addEventListener("mouseup",I)}else{Z.shiftKey||x(new Set),ft.current="select";let De=!1,Ue=Ve=>{let I=Math.abs(Ve.clientX-Se),E=Math.abs(Ve.clientY-qe);if((I>4||E>4)&&(De=!0),De){let N=Math.min(Se,Ve.clientX),Y=Math.min(qe,Ve.clientY);z({x:N,y:Y,w:Math.abs(Ve.clientX-Se),h:Math.abs(Ve.clientY-qe)})}},et=Ve=>{if(window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",et),ft.current=null,De){let I=Math.min(Se,Ve.clientX),E=Math.min(qe,Ve.clientY)+Te,N=Math.abs(Ve.clientX-Se),Y=Math.abs(Ve.clientY-qe),W=new Set(Z.shiftKey?D:new Set);for(let ae of e){let ie=ae.y-Te;ae.x+ae.width>I&&ae.x<I+N&&ae.y+ae.height>E&&ae.y<E+Y&&W.add(ae.id)}x(W)}z(null)};window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",et)}},[n,s,e,t,D]),Fl=(0,rt.useCallback)((Z,pe)=>{var ze;if(Z.button!==0)return;let Te=Z.target;if(Te.closest(`.${$.handle}`)||Te.closest(`.${$.deleteButton}`))return;Z.preventDefault(),Z.stopPropagation();let Se;Z.shiftKey?(Se=new Set(D),Se.has(pe)?Se.delete(pe):Se.add(pe)):D.has(pe)?Se=new Set(D):Se=new Set([pe]),x(Se),(Se.size!==D.size||[...Se].some(ge=>!D.has(ge)))&&((ze=_t.current)==null||ze.call(_t,Se,Z.shiftKey));let De=window.scrollY,Ue=Z.clientX,et=Z.clientY,Ve=new Map;for(let ge of e)Se.has(ge.id)&&Ve.set(ge.id,{x:ge.x,y:ge.y});ft.current="move",i==null||i(!0);let I=!1,E=!1,N=e,Y=0,W=0,ae=new Map;for(let ge of e)Ve.has(ge.id)&&ae.set(ge.id,{w:ge.width,h:ge.height});let ie=ge=>{var bt;let Ae=ge.clientX-Ue,tt=ge.clientY-et;if((Math.abs(Ae)>2||Math.abs(tt)>2)&&(I=!0),!I)return;if(ge.altKey&&!E){E=!0;let te=[];for(let Ot of e)Ve.has(Ot.id)&&te.push({...Ot,id:wy(),timestamp:Date.now()});N=[...e,...te]}let be=1/0,We=1/0,Le=-1/0,Ct=-1/0;for(let[te,Ot]of Ve){let Gt=ae.get(te);Gt&&(be=Math.min(be,Ot.x+Ae),We=Math.min(We,Ot.y+tt),Le=Math.max(Le,Ot.x+Ae+Gt.w),Ct=Math.max(Ct,Ot.y+tt+Gt.h))}let ot={x:be,y:We,width:Le-be,height:Ct-We},{dx:pt,dy:Tt,guides:Ke}=vy(ot,N,new Set(Ve.keys()),void 0,d);H(Ke);let Ze=Ae+pt,yt=tt+Tt;Y=Ze,W=yt,t(N.map(te=>{let Ot=Ve.get(te.id);return Ot?{...te,x:Math.max(0,Ot.x+Ze),y:Math.max(0,Ot.y+yt)}:te})),(bt=Zt.current)==null||bt.call(Zt,Ze,yt)},J=()=>{var ge;window.removeEventListener("mousemove",ie),window.removeEventListener("mouseup",J),ft.current=null,i==null||i(!1),H([]),(ge=Tn.current)==null||ge.call(Tn,Y,W,I)};window.addEventListener("mousemove",ie),window.addEventListener("mouseup",J)},[D,e,t,i]),yo=(0,rt.useCallback)((Z,pe,Te)=>{Z.preventDefault(),Z.stopPropagation();let Se=e.find(W=>W.id===pe);if(!Se)return;x(new Set([pe])),ft.current="resize",i==null||i(!0);let qe=Z.clientX,De=Z.clientY,Ue=Se.width,et=Se.height,Ve=Se.x,I=Se.y,E={left:Te.includes("w"),right:Te.includes("e"),top:Te.includes("n"),bottom:Te.includes("s")},N=W=>{let ae=W.clientX-qe,ie=W.clientY-De,J=Ue,ze=et,ge=Ve,Ae=I;Te.includes("e")&&(J=Math.max(Xi,Ue+ae)),Te.includes("w")&&(J=Math.max(Xi,Ue-ae),ge=Ve+Ue-J),Te.includes("s")&&(ze=Math.max(Xi,et+ie)),Te.includes("n")&&(ze=Math.max(Xi,et-ie),Ae=I+et-ze);let tt={x:ge,y:Ae,width:J,height:ze},{dx:be,dy:We,guides:Le}=vy(tt,Oe.current,new Set([pe]),E,d);H(Le),be!==0&&(E.right?J+=be:E.left&&(ge+=be,J-=be)),We!==0&&(E.bottom?ze+=We:E.top&&(Ae+=We,ze-=We)),t(Oe.current.map(Ct=>Ct.id===pe?{...Ct,x:ge,y:Ae,width:J,height:ze}:Ct)),L({x:W.clientX+12,y:W.clientY+12,text:`${Math.round(J)} \xD7 ${Math.round(ze)}`})},Y=()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",Y),L(null),ft.current=null,i==null||i(!1),H([])};window.addEventListener("mousemove",N),window.addEventListener("mouseup",Y)},[e,t,i]),bo=(0,rt.useCallback)(Z=>{ft.current=null,ye(pe=>{let Te=new Set(pe);return Te.add(Z),Te}),x(pe=>{let Te=new Set(pe);return Te.delete(Z),Te}),it(()=>{t(Oe.current.filter(pe=>pe.id!==Z)),ye(pe=>{let Te=new Set(pe);return Te.delete(Z),Te})},180)},[t]),tn=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),Qn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},Rn=(0,rt.useCallback)(Z=>{let pe=e.find(Te=>Te.id===Z);pe&&(ne.current=!!pe.text,oe(Z),he(!1))},[e]),Qt=(0,rt.useCallback)(()=>{K&&(he(!0),it(()=>{oe(null),he(!1)},150))},[K]);(0,rt.useEffect)(()=>{a&&K&&Qt()},[a]);let kl=(0,rt.useCallback)(Z=>{K&&(t(e.map(pe=>pe.id===K?{...pe,text:Z.trim()||void 0}:pe)),Qt())},[K,e,t,Qt]),Al=typeof window!="undefined"?window.scrollY:0,ea=["nw","ne","se","sw"],il=T?"#f97316":"#3c82f7",Zl=[{dir:"n",cls:$.edgeN,arrow:(0,Et.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Et.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:il})})},{dir:"e",cls:$.edgeE,arrow:(0,Et.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Et.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:il})})},{dir:"s",cls:$.edgeS,arrow:(0,Et.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Et.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:il})})},{dir:"w",cls:$.edgeW,arrow:(0,Et.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Et.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:il})})}];return(0,Et.jsxs)(Et.Fragment,{children:[(0,Et.jsx)("div",{ref:Ne,className:`${$.overlay} ${o?"":$.light} ${n?$.placing:""} ${s?$.passthrough:""} ${a?$.overlayExiting:""} ${T?$.wireframe:""}${r?` ${r}`:""}`,"data-feedback-toolbar":!0,onMouseDown:$n,children:e.map(Z=>{var qe;let pe=D.has(Z.id),Te=((qe=Dl[Z.type])==null?void 0:qe.label)||Z.type,Se=Z.y-Al;return(0,Et.jsxs)("div",{"data-design-placement":Z.id,className:`${$.placement} ${pe?$.selected:""} ${ue.has(Z.id)||S!=null&&S.includes(Z)?$.exiting:""}`,style:{left:Z.x,top:Se,width:Z.width,height:Z.height,position:"fixed"},onMouseDown:De=>Fl(De,Z.id),onDoubleClick:()=>Rn(Z.id),children:[(0,Et.jsx)("span",{className:$.placementLabel,children:Te}),(0,Et.jsx)("span",{className:`${$.placementAnnotation} ${Z.text?$.annotationVisible:""}`,children:(Z.text&&At.current.set(Z.id,Z.text),Z.text||At.current.get(Z.id)||"")}),(0,Et.jsx)("div",{className:$.placementContent,children:(0,Et.jsx)(Jw,{type:Z.type,width:Z.width,height:Z.height,text:Z.text})}),(0,Et.jsx)("div",{className:$.deleteButton,onMouseDown:De=>De.stopPropagation(),onClick:()=>bo(Z.id),children:"\u2715"}),ea.map(De=>(0,Et.jsx)("div",{className:`${$.handle} ${$[`handle${De.charAt(0).toUpperCase()}${De.slice(1)}`]}`,onMouseDown:Ue=>yo(Ue,Z.id,De)},De)),Zl.map(({dir:De,cls:Ue,arrow:et})=>(0,Et.jsx)("div",{className:`${$.edgeHandle} ${Ue}`,onMouseDown:Ve=>yo(Ve,Z.id,De),children:et},De))]},Z.id)})}),K&&(()=>{var I,E;let Z=e.find(N=>N.id===K);if(!Z)return null;let pe=Z.y-Al,Te=Z.x+Z.width/2,Se=pe-8,qe=pe+Z.height+8,De=Se>200,Ue=qe<window.innerHeight-100,et=Math.max(160,Math.min(window.innerWidth-160,Te)),Ve;return De?Ve={left:et,bottom:window.innerHeight-Se}:Ue?Ve={left:et,top:qe}:Ve={left:et,top:Math.max(80,window.innerHeight/2-80)},(0,Et.jsx)(E0,{element:((I=Dl[Z.type])==null?void 0:I.label)||Z.type,placeholder:Qn[Z.type]||"Label or content text",initialValue:(E=Z.text)!=null?E:"",submitLabel:ne.current?"Save":"Set",onSubmit:kl,onCancel:Qt,onDelete:ne.current?()=>{kl("")}:void 0,isExiting:P,lightMode:!o,style:Ve})})(),k&&(0,Et.jsx)("div",{className:$.drawBox,style:{left:k.x,top:k.y,width:k.w,height:k.h},"data-feedback-toolbar":!0}),m&&(0,Et.jsx)("div",{className:$.selectBox,style:{left:m.x,top:m.y,width:m.w,height:m.h},"data-feedback-toolbar":!0}),Q&&(0,Et.jsx)("div",{className:$.sizeIndicator,style:{left:Q.x,top:Q.y},"data-feedback-toolbar":!0,children:Q.text}),V.map((Z,pe)=>(0,Et.jsx)("div",{className:$.guideLine,style:Z.axis==="x"?{position:"fixed",left:Z.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:Z.pos-Al,right:0,height:1},"data-feedback-toolbar":!0},`${Z.axis}-${Z.pos}-${pe}`))]})}function u5(e,{keepMounted:t=!1,onExited:n}={}){let[l,o]=(0,Jo.useState)(t||e),a=(0,Jo.useRef)(null),i=(0,Jo.useRef)(n);return e&&!l&&o(!0),(0,Jo.useLayoutEffect)(()=>{i.current=n},[n]),(0,Jo.useLayoutEffect)(()=>{var g,h;let r=a.current;if(!r||r.dataset.panelOpen==="true"===e)return;getComputedStyle(r).opacity,r.dataset.panelPresent="true",r.dataset.panelOpen=String(e);let s=!1,d=(h=(g=r.getAnimations)==null?void 0:g.call(r))!=null?h:[];return Promise.allSettled(d.map(_=>_.finished)).then(()=>{var _;s||e||(delete r.dataset.panelPresent,t||o(!1),(_=i.current)==null||_.call(i))}),()=>{s=!0}},[e,l,t]),{ref:a,mounted:l}}function n4(e){if(!e)return"";let t=e.scrollTop>2,n=e.scrollTop+e.clientHeight<e.scrollHeight-2;return`${t?$.fadeTop:""} ${n?$.fadeBottom:""}`}var b="currentColor",B="0.5";function l4({type:e}){switch(e){case"navigation":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:b,opacity:".4"}),(0,c.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:b,opacity:".25"})]});case"header":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:b,opacity:".35"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:b,opacity:".15"})]});case"hero":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:b,opacity:".35"}),(0,c.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:b,strokeWidth:B})]});case"section":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:b,opacity:".15"})]});case"sidebar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:b,opacity:".15"})]});case"footer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:b,opacity:".2"})]});case"modal":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:b,strokeWidth:B})]});case"divider":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:b,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:b,opacity:".04"}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:b,opacity:".12"})]});case"text":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:b,opacity:".12"})]});case"image":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"})]});case"video":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:b,strokeWidth:B,fill:b,opacity:".15"})]});case"table":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:b,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:b,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"}),(0,c.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:b,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:b,strokeWidth:B})]});case"list":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:b,opacity:".2"})]});case"chart":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:b,opacity:".2"})]});case"accordion":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:b,strokeWidth:B})]});case"carousel":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:b,strokeWidth:B,opacity:".35"}),(0,c.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:b,strokeWidth:B,opacity:".35"}),(0,c.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:b,opacity:".35"}),(0,c.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:b,opacity:".15"}),(0,c.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:b,opacity:".15"})]});case"button":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"})]});case"input":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:b,opacity:".12"})]});case"search":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"form":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:b,strokeWidth:B})]});case"tabs":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:b,strokeWidth:B})]});case"dropdown":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:b,strokeWidth:B,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:b,opacity:".3"})]});case"avatar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:b,strokeWidth:B})]});case"badge":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"})]});case"breadcrumb":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("path",{d:"M14 7l1 1-1 1",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:b,opacity:".15"})]});case"pagination":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:b,opacity:".15",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:b,strokeWidth:B})]});case"progress":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:b,opacity:".2"})]});case"toast":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".12"})]});case"tooltip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:b,strokeWidth:B})]});case"pricing":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:b,opacity:".1"}),(0,c.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:b,opacity:".1"}),(0,c.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:b,opacity:".2"})]});case"testimonial":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:b,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:b,strokeWidth:B,opacity:".25"}),(0,c.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:b,opacity:".15"})]});case"cta":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:b,strokeWidth:B})]});case"alert":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:b,strokeWidth:"0.6",opacity:".5"}),(0,c.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:b,opacity:".5"}),(0,c.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:b,opacity:".2"})]});case"banner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:b,strokeWidth:B})]});case"stat":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"stepper":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:b,opacity:".2",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:b,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:b,strokeWidth:".4",opacity:".3"}),(0,c.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:b,strokeWidth:B})]});case"tag":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:b,strokeWidth:B,opacity:".2"})]});case"rating":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:b,opacity:".25"}),(0,c.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:b,opacity:".25"}),(0,c.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:b,strokeWidth:B,opacity:".25"})]});case"map":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:b,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:b,strokeWidth:".3",opacity:".15"}),(0,c.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:b,opacity:".15",stroke:b,strokeWidth:B})]});case"timeline":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:b,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:b,opacity:".2",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:b,opacity:".15"})]});case"fileUpload":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:b,strokeWidth:B,strokeDasharray:"2 1"}),(0,c.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:b,opacity:".15"})]});case"codeBlock":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:b,opacity:".12"})]});case"calendar":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:b,strokeWidth:".4",opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:b,opacity:".2"})]});case"notification":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:b,strokeWidth:B,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:b,opacity:".25"})]});case"productCard":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:b,opacity:".04"}),(0,c.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:b,strokeWidth:B})]});case"profile":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"})]});case"drawer":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:b,strokeWidth:B,opacity:".15"})]});case"popover":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:b,strokeWidth:B})]});case"logo":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:b,strokeWidth:B,opacity:".3"}),(0,c.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:b,opacity:".12"})]});case"faq":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:b,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:b,opacity:".3",fontWeight:"bold",children:"?"}),(0,c.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:b,opacity:".12"})]});case"gallery":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:b,strokeWidth:B})]});case"checkbox":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:b,strokeWidth:B,opacity:".35"})]});case"radio":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:b,strokeWidth:B}),(0,c.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:b,opacity:".3"})]});case"slider":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:b,strokeWidth:B})]});case"datePicker":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:b,strokeWidth:B,strokeDasharray:"2 1",opacity:".3"}),(0,c.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:b,opacity:".3"}),(0,c.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:b,opacity:".2"})]});case"skeleton":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:b,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:b,opacity:".08"}),(0,c.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:b,opacity:".08"})]});case"chip":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:b,opacity:".08",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:b,strokeWidth:B,opacity:".2"}),(0,c.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:b,strokeWidth:B,opacity:".25"})]});case"icon":return(0,c.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,c.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:b,strokeWidth:B,opacity:".3"})});case"spinner":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:b,strokeWidth:B,opacity:".12"}),(0,c.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:b,strokeWidth:B,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:b,strokeWidth:B,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:b,opacity:".12"}),(0,c.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:b,opacity:".12"})]});case"team":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:b,strokeWidth:B,opacity:".5"}),(0,c.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:b,opacity:".15"}),(0,c.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:b,opacity:".1"})]});case"login":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:b,opacity:".25"}),(0,c.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:b,opacity:".2"})]});case"contact":return(0,c.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,c.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:b,opacity:".2"}),(0,c.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:b,strokeWidth:B}),(0,c.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:b,opacity:".2"})]});default:return null}}function o4({activeType:e,onSelect:t,onDragStart:n,scrollRef:l,fadeClass:o,blankCanvas:a}){return(0,c.jsx)("div",{ref:l,className:`${$.placeScroll} ${o||""}`,children:c5.map(i=>(0,c.jsxs)("div",{className:$.paletteSection,children:[(0,c.jsx)("div",{className:$.paletteSectionTitle,children:i.section}),i.items.map(r=>(0,c.jsxs)("button",{type:"button","aria-pressed":e===r.type,className:`${$.paletteItem} ${e===r.type?$.active:""} ${a?$.wireframe:""}`,onClick:()=>t(r.type),onMouseDown:s=>{s.button===0&&n(r.type,s)},children:[(0,c.jsx)("span",{className:$.paletteItemIcon,"aria-hidden":"true",children:(0,c.jsx)(l4,{type:r.type})}),(0,c.jsx)("span",{className:$.paletteItemLabel,children:r.label})]},r.type))]},i.section))})}function a4({value:e,suffix:t}){let[n,l]=(0,_n.useState)(null),[o,a]=(0,_n.useState)(t),[i,r]=(0,_n.useState)("up"),s=(0,_n.useRef)(e),d=(0,_n.useRef)(t),g=(0,_n.useRef)(),h=n!==null&&o!==t;return(0,_n.useEffect)(()=>{if(e!==s.current){if(e===0){s.current=e,d.current=t,l(null);return}r(e>s.current?"up":"down"),l(s.current),a(d.current),s.current=e,d.current=t,clearTimeout(g.current),g.current=it(()=>l(null),250)}else d.current=t},[e,t]),n===null?(0,c.jsxs)(c.Fragment,{children:[e,t?` ${t}`:""]}):h?(0,c.jsxs)("span",{className:$.rollingWrap,children:[(0,c.jsxs)("span",{style:{visibility:"hidden"},children:[e," ",t]}),(0,c.jsxs)("span",{className:`${$.rollingNum} ${i==="up"?$.exitUp:$.exitDown}`,children:[n," ",o]},`o${n}-${e}`),(0,c.jsxs)("span",{className:`${$.rollingNum} ${i==="up"?$.enterUp:$.enterDown}`,children:[e," ",t]},`n${e}`)]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("span",{className:$.rollingWrap,children:[(0,c.jsx)("span",{style:{visibility:"hidden"},children:e}),(0,c.jsx)("span",{className:`${$.rollingNum} ${i==="up"?$.exitUp:$.exitDown}`,children:n},`o${n}-${e}`),(0,c.jsx)("span",{className:`${$.rollingNum} ${i==="up"?$.enterUp:$.enterDown}`,children:e},`n${e}`)]}),t?` ${t}`:""]})}function i4({activeType:e,onSelect:t,isDarkMode:n,sectionCount:l,onDetectSections:o,visible:a,onExited:i,placementCount:r,onClearPlacements:s,onDragStart:d,blankCanvas:g,onBlankCanvasChange:h,wireframePurpose:_,onWireframePurposeChange:p,Tooltip:S}){let{ref:T,mounted:D}=u5(a,{onExited:i}),[x,k]=(0,_n.useState)(!1),[v,m]=(0,_n.useState)(!0),z=(0,_n.useRef)(0),Q=(0,_n.useRef)(""),L=(0,_n.useRef)(null),[V,H]=(0,_n.useState)(""),K=r>0||l>0,oe=r+l;if(oe>0&&(z.current=oe,Q.current=g?oe===1?"Component":"Components":oe===1?"Change":"Changes"),(0,_n.useEffect)(()=>{if(K)x?m(!1):(m(!0),k(!0),Uu(()=>{Uu(()=>{m(!1)})}));else{m(!0);let he=it(()=>k(!1),300);return()=>clearTimeout(he)}},[K]),(0,_n.useEffect)(()=>{if(!a)return;let he=L.current;if(!he)return;let ne=()=>H(n4(he));he.addEventListener("scroll",ne,{passive:!0});let ue=new ResizeObserver(ne);return ue.observe(he),()=>{he.removeEventListener("scroll",ne),ue.disconnect()}},[a]),!D)return null;let P=[];return r>0&&P.push("placed"),l>0&&P.push("captured"),(0,c.jsxs)("div",{className:`${$.palette} ${n?"":$.light}`,ref:he=>{T.current=he,he==null||he.toggleAttribute("inert",!a)},"aria-hidden":!a,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:he=>he.stopPropagation(),onMouseDown:he=>he.stopPropagation(),children:[(0,c.jsxs)("div",{className:$.paletteHeader,children:[(0,c.jsx)("div",{className:$.paletteHeaderTitle,children:"Layout Mode"}),(0,c.jsxs)("div",{className:$.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,c.jsx)("a",{href:"https://agentation.com/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,c.jsxs)("button",{type:"button","aria-pressed":g,className:`${$.canvasToggle} ${g?$.active:""}`,onClick:()=>h(!g),children:[(0,c.jsx)("span",{className:$.canvasToggleIcon,"aria-hidden":"true",children:(0,c.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,c.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,c.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,c.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,c.jsx)("span",{className:$.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,c.jsx)("div",{className:`${$.wireframePurposeWrap} ${g?"":$.collapsed}`,"aria-hidden":!g,ref:he=>{he==null||he.toggleAttribute("inert",!g)},children:(0,c.jsx)("div",{className:$.wireframePurposeInner,children:(0,c.jsx)("textarea",{className:$.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:_,onChange:he=>p(he.target.value),rows:2})})}),(0,c.jsx)(o4,{activeType:e,onSelect:t,onDragStart:d,scrollRef:L,fadeClass:V,blankCanvas:g}),x&&(0,c.jsx)("div",{className:`${$.paletteFooterWrap} ${v?$.footerHidden:""}`,children:(0,c.jsx)("div",{className:$.paletteFooterInner,children:(0,c.jsx)("div",{className:$.paletteFooterInnerContent,children:(0,c.jsxs)("div",{className:$.paletteFooter,children:[(0,c.jsx)("span",{className:$.paletteFooterCount,children:(0,c.jsx)(a4,{value:z.current,suffix:Q.current})}),(0,c.jsx)("button",{className:$.paletteFooterClear,onClick:s,children:"Clear"})]})})})})]})}var r4=new Set(["nav","header","main","section","article","footer","aside"]),g0={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},ky={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},s4=new Set(["script","style","noscript","link","meta"]),c4=40;function d5(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){let n=window.getComputedStyle(t).position;if(n==="fixed"||n==="sticky")return!0;t=t.parentElement}return!1}function Ba(e){let t=e.tagName.toLowerCase();if(["nav","header","footer","main"].includes(t)&&document.querySelectorAll(t).length===1)return t;if(e.id)return`#${CSS.escape(e.id)}`;if(e.className&&typeof e.className=="string"){let o=e.className.split(/\s+/).filter(a=>a.length>0).find(a=>a.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(a)&&!/^[a-z]{1,2}$/.test(a));if(o){let a=`${t}.${CSS.escape(o)}`;if(document.querySelectorAll(a).length===1)return a}}let n=e.parentElement;if(n){let o=Array.from(n.children).indexOf(e)+1;return`${n===document.body?"body":Ba(n)} > ${t}:nth-child(${o})`}return t}function Yu(e){var i;let t=e.tagName.toLowerCase(),n=e.getAttribute("aria-label");if(n)return n;let l=e.getAttribute("role");if(l&&g0[l])return g0[l];if(ky[t])return ky[t];let o=e.querySelector("h1, h2, h3, h4, h5, h6");if(o){let r=(i=o.textContent)==null?void 0:i.trim();if(r&&r.length<=50)return r;if(r)return r.slice(0,47)+"..."}let{name:a}=Wi(e);return a.charAt(0).toUpperCase()+a.slice(1)}function _5(e){let t=e.className;return typeof t!="string"||!t?null:t.split(/\s+/).map(l=>l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(l=>l.length>2&&!/^[a-z]{1,2}$/.test(l))||null}function f5(e){var l;let t=(l=e.textContent)==null?void 0:l.trim();if(!t)return null;let n=t.replace(/\s+/g," ");return n.length<=30?n:n.slice(0,30)+"\u2026"}function u4(){let e=document.querySelector("main")||document.body,t=Array.from(e.children),n=t;e!==document.body&&t.length<3&&(n=Array.from(document.body.children));let l=[];return n.forEach((o,a)=>{if(!(o instanceof HTMLElement))return;let i=o.tagName.toLowerCase();if(s4.has(i)||o.hasAttribute("data-feedback-toolbar")||o.closest("[data-feedback-toolbar]"))return;let r=window.getComputedStyle(o);if(r.display==="none"||r.visibility==="hidden")return;let s=o.getBoundingClientRect();if(s.height<c4)return;let d=r4.has(i),g=o.getAttribute("role")&&g0[o.getAttribute("role")],h=i==="div"&&s.height>=60;if(!d&&!g&&!h)return;let _=window.scrollY,p=d5(o),S={x:s.x,y:p?s.y:s.y+_,width:s.width,height:s.height};l.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Yu(o),tagName:i,selector:Ba(o),role:o.getAttribute("role"),className:_5(o),textSnippet:f5(o),originalRect:S,currentRect:{...S},originalIndex:a,isFixed:p})}),l}function d4(e){let t=window.scrollY,n=e.getBoundingClientRect(),l=d5(e),o={x:n.x,y:l?n.y:n.y+t,width:n.width,height:n.height},a=e.parentElement,i=0;return a&&(i=Array.from(a.children).indexOf(e)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:Yu(e),tagName:e.tagName.toLowerCase(),selector:Ba(e),role:e.getAttribute("role"),className:_5(e),textSnippet:f5(e),originalRect:o,currentRect:{...o},originalIndex:i,isFixed:l}}var Sy={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Cy=["nw","n","ne","e","se","s","sw","w"],Ru=24,My=16,Nu=5;function Ey(e,t,n,l){let o=1/0,a=1/0,i=e.x,r=e.x+e.width,s=e.x+e.width/2,d=e.y,g=e.y+e.height,h=e.y+e.height/2,_=[];for(let L of t)n.has(L.id)||_.push(L.currentRect);l&&_.push(...l);for(let L of _){let V=L.x,H=L.x+L.width,K=L.x+L.width/2,oe=L.y,P=L.y+L.height,he=L.y+L.height/2;for(let ne of[i,r,s])for(let ue of[V,H,K]){let ye=ue-ne;Math.abs(ye)<Nu&&Math.abs(ye)<Math.abs(o)&&(o=ye)}for(let ne of[d,g,h])for(let ue of[oe,P,he]){let ye=ue-ne;Math.abs(ye)<Nu&&Math.abs(ye)<Math.abs(a)&&(a=ye)}}let p=Math.abs(o)<Nu?o:0,S=Math.abs(a)<Nu?a:0,T=[],D=new Set,x=i+p,k=r+p,v=s+p,m=d+S,z=g+S,Q=h+S;for(let L of _){let V=L.x,H=L.x+L.width,K=L.x+L.width/2,oe=L.y,P=L.y+L.height,he=L.y+L.height/2;for(let ne of[V,K,H])for(let ue of[x,v,k])if(Math.abs(ue-ne)<.5){let ye=`x:${Math.round(ne)}`;D.has(ye)||(D.add(ye),T.push({axis:"x",pos:ne}))}for(let ne of[oe,he,P])for(let ue of[m,Q,z])if(Math.abs(ue-ne)<.5){let ye=`y:${Math.round(ne)}`;D.has(ye)||(D.add(ye),T.push({axis:"y",pos:ne}))}}return{dx:p,dy:S,guides:T}}var _4=new Set(["script","style","noscript","link","meta","br","hr"]);function Ty(e){let t=e;for(;t&&t!==document.body&&t!==document.documentElement;){if(t.closest("[data-feedback-toolbar]"))return null;if(_4.has(t.tagName.toLowerCase())){t=t.parentElement;continue}let n=t.getBoundingClientRect();if(n.width>=My&&n.height>=My)return t;t=t.parentElement}return null}function f4({rearrangeState:e,onChange:t,isDarkMode:n,exiting:l,className:o,blankCanvas:a,extraSnapRects:i,onSelectionChange:r,deselectSignal:s,onDragMove:d,onDragEnd:g,clearing:h}){let{sections:_}=e,p=(0,ke.useRef)(e);p.current=e;let[S,T]=(0,ke.useState)(new Set);(0,ke.useEffect)(()=>{h&&T(new Set)},[h]);let D=(0,ke.useRef)(s);(0,ke.useEffect)(()=>{s!==D.current&&(D.current=s,T(new Set))},[s]);let[x,k]=(0,ke.useState)(null),[v,m]=(0,ke.useState)(!1),z=(0,ke.useRef)(!1),Q=(0,ke.useCallback)(E=>{let N=_.find(Y=>Y.id===E);N&&(z.current=!!N.note,k(E),m(!1))},[_]),L=(0,ke.useCallback)(()=>{x&&(m(!0),it(()=>{k(null),m(!1)},150))},[x]),V=(0,ke.useCallback)(E=>{x&&(t({...e,sections:_.map(N=>N.id===x?{...N,note:E.trim()||void 0}:N)}),L())},[x,_,e,t,L]);(0,ke.useEffect)(()=>{l&&x&&L()},[l]);let[H,K]=(0,ke.useState)(new Set),oe=(0,ke.useRef)(new Map),[P,he]=(0,ke.useState)(null),[ne,ue]=(0,ke.useState)(null),[ye,At]=(0,ke.useState)([]),[Ne,ft]=(0,ke.useState)(0),Oe=(0,ke.useRef)(null),_t=(0,ke.useRef)(new Set),Zt=(0,ke.useRef)(new Map),[Tn,Re]=(0,ke.useState)(new Map),[$n,Fl]=(0,ke.useState)(new Map),yo=(0,ke.useRef)(new Set),bo=(0,ke.useRef)(new Map),tn=(0,ke.useRef)(r);tn.current=r;let Qn=(0,ke.useRef)(d);Qn.current=d;let Rn=(0,ke.useRef)(g);Rn.current=g,(0,ke.useEffect)(()=>{a&&T(new Set)},[a]);let[Qt,kl]=(0,ke.useState)(()=>!e.sections.some(E=>{let N=E.originalRect,Y=E.currentRect;return Math.abs(N.x-Y.x)>1||Math.abs(N.y-Y.y)>1||Math.abs(N.width-Y.width)>1||Math.abs(N.height-Y.height)>1}));(0,ke.useEffect)(()=>{if(!Qt){let E=it(()=>kl(!0),380);return()=>clearTimeout(E)}},[]);let Al=(0,ke.useRef)(new Set);(0,ke.useEffect)(()=>{Al.current=new Set(_.map(E=>E.selector))},[_]),(0,ke.useEffect)(()=>{let E=()=>ft(window.scrollY);return E(),window.addEventListener("scroll",E,{passive:!0}),window.addEventListener("resize",E,{passive:!0}),()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",E)}},[]),(0,ke.useEffect)(()=>{let E=N=>{if(Oe.current){he(null);return}let Y=document.elementFromPoint(N.clientX,N.clientY);if(!Y){he(null);return}if(Y.closest("[data-feedback-toolbar]")){he(null);return}if(Y.closest("[data-design-placement]")){he(null);return}if(Y.closest("[data-annotation-popup]")){he(null);return}let W=Ty(Y);if(!W){he(null);return}for(let ie of Al.current)try{let J=document.querySelector(ie);if(J&&(J===W||W.contains(J))){he(null);return}}catch{}let ae=W.getBoundingClientRect();he({x:ae.x,y:ae.y,w:ae.width,h:ae.height})};return document.addEventListener("mousemove",E,{passive:!0}),()=>document.removeEventListener("mousemove",E)},[_]),(0,ke.useEffect)(()=>{let E=document.body.style.userSelect;return document.body.style.webkitUserSelect="none",document.body.style.userSelect="none",()=>{document.body.style.webkitUserSelect=E,document.body.style.userSelect=E}},[]),(0,ke.useEffect)(()=>{let E=N=>{var J,ze,ge,Ae,tt;if(Oe.current||N.button!==0)return;let Y=(J=N.composedPath()[0])!=null?J:N.target;if(!Y||Y.closest("[data-feedback-toolbar]")||Y.closest("[data-design-placement]")||Y.closest("[data-annotation-popup]"))return;let W=Ty(Y),ae=!1;if(W)for(let be of Al.current)try{let We=document.querySelector(be);if(We&&(We===W||W.contains(We))){ae=!0;break}}catch{}let ie=!!(N.shiftKey||N.metaKey||N.ctrlKey);if(W&&!ae){N.preventDefault(),N.stopPropagation();let be=d4(W),We=[..._,be],Le=[...e.originalOrder,be.id];t({...e,sections:We,originalOrder:Le});let Ct=new Set([be.id]);T(Ct),(ze=tn.current)==null||ze.call(tn,Ct,ie),he(null);let ot=N.clientX,pt=N.clientY,Tt={x:be.currentRect.x,y:be.currentRect.y},Ke=be.originalRect,Ze=!1,yt=0,bt=0;Oe.current="move";let te=Gt=>{var Fn;let Gn=Gt.clientX-ot,Nn=Gt.clientY-pt;if(!Ze&&(Math.abs(Gn)>2||Math.abs(Nn)>2)&&(Ze=!0),!Ze)return;let Dn={x:Tt.x+Gn,y:Tt.y+Nn,width:be.currentRect.width,height:be.currentRect.height},Sl=Ey(Dn,We,new Set([be.id]),i);At(Sl.guides);let xn=Gn+Sl.dx,An=Nn+Sl.dy;yt=xn,bt=An;let Vn=I().querySelector(`[data-rearrange-section="${be.id}"]`);Vn&&(Vn.style.transform=`translate(${xn}px, ${An}px)`),Re(new Map([[be.id,{x:Tt.x+xn,y:Tt.y+An,width:be.currentRect.width,height:be.currentRect.height}]])),(Fn=Qn.current)==null||Fn.call(Qn,xn,An)},Ot=()=>{var Gn;window.removeEventListener("mousemove",te),window.removeEventListener("mouseup",Ot),Oe.current=null,At([]),Re(new Map);let Gt=I().querySelector(`[data-rearrange-section="${be.id}"]`);Gt&&(Gt.style.transform=""),Ze&&t({...e,sections:We.map(Nn=>Nn.id===be.id?{...Nn,currentRect:{...Nn.currentRect,x:Math.max(0,Tt.x+yt),y:Math.max(0,Tt.y+bt)}}:Nn),originalOrder:Le}),(Gn=Rn.current)==null||Gn.call(Rn,yt,bt,Ze)};window.addEventListener("mousemove",te),window.addEventListener("mouseup",Ot)}else if(ae&&W){N.preventDefault();for(let be of _)try{let We=document.querySelector(be.selector);if(We&&We===W){let Le=new Set([be.id]);T(Le),(ge=tn.current)==null||ge.call(tn,Le,ie);return}}catch{}ie||(T(new Set),(Ae=tn.current)==null||Ae.call(tn,new Set,!1))}else ie||(T(new Set),(tt=tn.current)==null||tt.call(tn,new Set,!1))};return document.addEventListener("mousedown",E,!0),()=>document.removeEventListener("mousedown",E,!0)},[_,e,t]),(0,ke.useEffect)(()=>{let E=N=>{let Y=N.composedPath()[0]||N.target;if(!(Y.tagName==="INPUT"||Y.tagName==="TEXTAREA"||Y.isContentEditable)){if((N.key==="Backspace"||N.key==="Delete")&&S.size>0){N.preventDefault();let W=new Set(S);K(ae=>{let ie=new Set(ae);for(let J of W)ie.add(J);return ie}),T(new Set),it(()=>{let ae=p.current;t({...ae,sections:ae.sections.filter(ie=>!W.has(ie.id)),originalOrder:ae.originalOrder.filter(ie=>!W.has(ie))}),K(ie=>{let J=new Set(ie);for(let ze of W)J.delete(ze);return J})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(N.key)&&S.size>0){N.preventDefault();let W=N.shiftKey?20:1,ae=N.key==="ArrowLeft"?-W:N.key==="ArrowRight"?W:0,ie=N.key==="ArrowUp"?-W:N.key==="ArrowDown"?W:0;t({...e,sections:_.map(J=>S.has(J.id)?{...J,currentRect:{...J.currentRect,x:Math.max(0,J.currentRect.x+ae),y:Math.max(0,J.currentRect.y+ie)}}:J)});return}N.key==="Escape"&&S.size>0&&T(new Set)}};return document.addEventListener("keydown",E),()=>document.removeEventListener("keydown",E)},[S,_,e,t]);let ea=(0,ke.useCallback)((E,N)=>{var Ct;if(E.button!==0)return;let Y=E.target;if(Y.closest(`.${$.handle}`)||Y.closest(`.${$.deleteButton}`))return;E.preventDefault(),E.stopPropagation();let W;E.shiftKey||E.metaKey||E.ctrlKey?(W=new Set(S),W.has(N)?W.delete(N):W.add(N)):S.has(N)?W=new Set(S):W=new Set([N]),T(W),(W.size!==S.size||[...W].some(ot=>!S.has(ot)))&&((Ct=tn.current)==null||Ct.call(tn,W,!!(E.shiftKey||E.metaKey||E.ctrlKey)));let ie=E.clientX,J=E.clientY,ze=new Map;for(let ot of _)W.has(ot.id)&&ze.set(ot.id,{x:ot.currentRect.x,y:ot.currentRect.y});Oe.current="move";let ge=!1,Ae=0,tt=0,be=new Map;for(let ot of _)if(W.has(ot.id)){let pt=I().querySelector(`[data-rearrange-section="${ot.id}"]`);be.set(ot.id,{outlineEl:pt,curW:ot.currentRect.width,curH:ot.currentRect.height})}let We=ot=>{var Nn;let pt=ot.clientX-ie,Tt=ot.clientY-J;if(pt===0&&Tt===0)return;ge=!0;let Ke=1/0,Ze=1/0,yt=-1/0,bt=-1/0;for(let[Dn,{curW:Sl,curH:xn}]of be){let An=ze.get(Dn);if(!An)continue;let Vn=An.x+pt,Fn=An.y+Tt;Ke=Math.min(Ke,Vn),Ze=Math.min(Ze,Fn),yt=Math.max(yt,Vn+Sl),bt=Math.max(bt,Fn+xn)}let te=Ey({x:Ke,y:Ze,width:yt-Ke,height:bt-Ze},_,W,i),Ot=pt+te.dx,Gt=Tt+te.dy;Ae=Ot,tt=Gt,At(te.guides);for(let[,{outlineEl:Dn}]of be)Dn&&(Dn.style.transform=`translate(${Ot}px, ${Gt}px)`);let Gn=new Map;for(let[Dn,{curW:Sl,curH:xn}]of be){let An=ze.get(Dn);if(An){let Vn={x:Math.max(0,An.x+Ot),y:Math.max(0,An.y+Gt),width:Sl,height:xn};Gn.set(Dn,Vn)}}Re(Gn),(Nn=Qn.current)==null||Nn.call(Qn,Ot,Gt)},Le=ot=>{var pt,Tt;window.removeEventListener("mousemove",We),window.removeEventListener("mouseup",Le),Oe.current=null,At([]),Re(new Map);for(let[,{outlineEl:Ke}]of be)Ke&&(Ke.style.transform="");if(ge){let Ke=ot.clientX-ie,Ze=ot.clientY-J;if(Math.abs(Ke)<5&&Math.abs(Ze)<5)t({...e,sections:_.map(yt=>{let bt=ze.get(yt.id);return bt?{...yt,currentRect:{...yt.currentRect,x:bt.x,y:bt.y}}:yt})});else{t({...e,sections:_.map(yt=>{let bt=ze.get(yt.id);return bt?{...yt,currentRect:{...yt.currentRect,x:Math.max(0,bt.x+Ae),y:Math.max(0,bt.y+tt)}}:yt})}),(pt=Rn.current)==null||pt.call(Rn,Ae,tt,!0);return}}(Tt=Rn.current)==null||Tt.call(Rn,0,0,!1)};window.addEventListener("mousemove",We),window.addEventListener("mouseup",Le)},[S,_,e,t]),il=(0,ke.useCallback)((E,N,Y)=>{E.preventDefault(),E.stopPropagation();let W=_.find(Le=>Le.id===N);if(!W)return;T(new Set([N])),Oe.current="resize";let ae=E.clientX,ie=E.clientY,J={...W.currentRect},ze=W.originalRect,ge=J.width/J.height,Ae={...J},tt=I().querySelector(`[data-rearrange-section="${N}"]`),be=Le=>{let Ct=Le.clientX-ae,ot=Le.clientY-ie,pt=J.x,Tt=J.y,Ke=J.width,Ze=J.height;if(Y.includes("e")&&(Ke=Math.max(Ru,J.width+Ct)),Y.includes("w")&&(Ke=Math.max(Ru,J.width-Ct),pt=J.x+J.width-Ke),Y.includes("s")&&(Ze=Math.max(Ru,J.height+ot)),Y.includes("n")&&(Ze=Math.max(Ru,J.height-ot),Tt=J.y+J.height-Ze),Le.shiftKey)if(Y.length===2){let bt=Math.abs(Ke-J.width),te=Math.abs(Ze-J.height);bt>te?Ze=Ke/ge:Ke=Ze*ge,Y.includes("w")&&(pt=J.x+J.width-Ke),Y.includes("n")&&(Tt=J.y+J.height-Ze)}else Y==="e"||Y==="w"?Ze=Ke/ge:Ke=Ze*ge,Y==="w"&&(pt=J.x+J.width-Ke),Y==="n"&&(Tt=J.y+J.height-Ze);Ae={x:pt,y:Tt,width:Ke,height:Ze},tt&&(tt.style.left=`${pt}px`,tt.style.top=`${Tt-Ne}px`,tt.style.width=`${Ke}px`,tt.style.height=`${Ze}px`),ue({x:Le.clientX+12,y:Le.clientY+12,text:`${Math.round(Ke)} \xD7 ${Math.round(Ze)}`}),Re(new Map([[N,Ae]]))},We=()=>{window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",We),ue(null),Oe.current=null,Re(new Map),t({...e,sections:_.map(Le=>Le.id===N?{...Le,currentRect:Ae}:Le)})};window.addEventListener("mousemove",be),window.addEventListener("mouseup",We)},[_,e,t,Ne]),Zl=(0,ke.useCallback)(E=>{K(N=>{let Y=new Set(N);return Y.add(E),Y}),T(N=>{let Y=new Set(N);return Y.delete(E),Y}),it(()=>{let N=p.current;t({...N,sections:N.sections.filter(Y=>Y.id!==E),originalOrder:N.originalOrder.filter(Y=>Y!==E)}),K(Y=>{let W=new Set(Y);return W.delete(E),W})},180)},[t]),Z=E=>{let N=E.originalRect,Y=E.currentRect;return Math.abs(N.x-Y.x)>1||Math.abs(N.y-Y.y)>1||Math.abs(N.width-Y.width)>1||Math.abs(N.height-Y.height)>1},pe=E=>{let N=E.originalRect,Y=E.currentRect;return Math.abs(N.x-Y.x)>1||Math.abs(N.y-Y.y)>1},Te=E=>{let N=E.originalRect,Y=E.currentRect;return Math.abs(N.width-Y.width)>1||Math.abs(N.height-Y.height)>1};for(let E of _)Zt.current.has(E.id)||(pe(E)?Zt.current.set(E.id,"move"):Te(E)&&Zt.current.set(E.id,"resize"));for(let E of Zt.current.keys())_.some(N=>N.id===E)||Zt.current.delete(E);let Se=_.filter(E=>{try{if(H.has(E.id)||S.has(E.id))return!0;let N=document.querySelector(E.selector);if(!N)return!1;let Y=N.getBoundingClientRect(),W=E.originalRect;return Math.abs(Y.width-W.width)+Math.abs(Y.height-W.height)<200}catch{return!1}}),qe=Se.filter(E=>Z(E)),De=Se.filter(E=>!Z(E)),Ue=new Set(qe.map(E=>E.id));for(let E of _t.current)Ue.has(E)||_t.current.delete(E);let et=[...Ue].sort().join(",");for(let E of qe)bo.current.set(E.id,{currentRect:E.currentRect,originalRect:E.originalRect,isFixed:E.isFixed});(0,ke.useEffect)(()=>{let E=yo.current;yo.current=Ue;let N=new Map;for(let Y of E)if(!Ue.has(Y)){if(!_.some(ae=>ae.id===Y))continue;let W=bo.current.get(Y);W&&(N.set(Y,{orig:W.originalRect,target:W.currentRect,isFixed:W.isFixed}),bo.current.delete(Y))}if(N.size>0){Fl(W=>{let ae=new Map(W);for(let[ie,J]of N)ae.set(ie,J);return ae});let Y=it(()=>{Fl(W=>{let ae=new Map(W);for(let ie of N.keys())ae.delete(ie);return ae})},250);return()=>clearTimeout(Y)}},[et,_]);let Ve=(0,ke.useRef)(null),I=()=>{var E,N;return(N=(E=Ve.current)==null?void 0:E.getRootNode())!=null?N:document};return(0,Je.jsxs)(Je.Fragment,{children:[(0,Je.jsxs)("div",{ref:Ve,className:`${$.rearrangeOverlay} ${n?"":$.light} ${l?$.overlayExiting:""}${o?` ${o}`:""}`,"data-feedback-toolbar":!0,children:[P&&(0,Je.jsx)("div",{className:$.hoverHighlight,style:{left:P.x,top:P.y,width:P.w,height:P.h}}),De.map(E=>{let N=E.currentRect,Y=E.isFixed?N.y:N.y-Ne,W=Sy,ae=S.has(E.id);return(0,Je.jsxs)("div",{"data-rearrange-section":E.id,className:`${$.sectionOutline} ${ae?$.selected:""} ${h||l||H.has(E.id)?$.exiting:""}`,style:{left:N.x,top:Y,width:N.width,height:N.height,borderColor:W.border,backgroundColor:W.bg,...Qt?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ie=>ea(ie,E.id),onDoubleClick:()=>Q(E.id),children:[(0,Je.jsx)("span",{className:$.sectionLabel,style:{backgroundColor:W.pill},children:E.label}),(0,Je.jsx)("span",{className:`${$.sectionAnnotation} ${E.note?$.annotationVisible:""}`,children:(E.note&&oe.current.set(E.id,E.note),E.note||oe.current.get(E.id)||"")}),(0,Je.jsxs)("span",{className:$.sectionDimensions,children:[Math.round(N.width)," \xD7 ",Math.round(N.height)]}),(0,Je.jsx)("div",{className:$.deleteButton,onMouseDown:ie=>ie.stopPropagation(),onClick:()=>Zl(E.id),children:"\u2715"}),Cy.map(ie=>(0,Je.jsx)("div",{className:`${$.handle} ${$[`handle${ie.charAt(0).toUpperCase()}${ie.slice(1)}`]}`,onMouseDown:J=>il(J,E.id,ie)},ie))]},E.id)}),qe.map(E=>{let N=E.currentRect,Y=E.isFixed?N.y:N.y-Ne,W=S.has(E.id),ae=pe(E),ie=Te(E);if(a&&!W)return null;let ze=!_t.current.has(E.id);return ze&&_t.current.add(E.id),(0,Je.jsxs)("div",{"data-rearrange-section":E.id,className:`${$.ghostOutline} ${W?$.selected:""} ${h||l||H.has(E.id)?$.exiting:""}`,style:{left:N.x,top:Y,width:N.width,height:N.height,...Qt?{}:{opacity:0,animation:"none",transition:"none"},...ze?{}:{animation:"none"}},onMouseDown:ge=>ea(ge,E.id),onDoubleClick:()=>Q(E.id),children:[(0,Je.jsx)("span",{className:$.sectionLabel,style:{backgroundColor:Sy.pill},children:E.label}),(0,Je.jsx)("span",{className:`${$.sectionAnnotation} ${E.note?$.annotationVisible:""}`,children:(E.note&&oe.current.set(E.id,E.note),E.note||oe.current.get(E.id)||"")}),(0,Je.jsxs)("span",{className:$.sectionDimensions,children:[Math.round(N.width)," \xD7 ",Math.round(N.height)]}),(0,Je.jsx)("div",{className:$.deleteButton,onMouseDown:ge=>ge.stopPropagation(),onClick:()=>Zl(E.id),children:"\u2715"}),Cy.map(ge=>(0,Je.jsx)("div",{className:`${$.handle} ${$[`handle${ge.charAt(0).toUpperCase()}${ge.slice(1)}`]}`,onMouseDown:Ae=>il(Ae,E.id,ge)},ge)),(0,Je.jsx)("span",{className:$.ghostBadge,children:(()=>{let ge=Zt.current.get(E.id);if(ae&&ie){let[Ae,tt]=ge==="resize"?["Resize","Move"]:["Move","Resize"];return(0,Je.jsxs)(Je.Fragment,{children:["Suggested ",Ae," ",(0,Je.jsxs)("span",{className:$.ghostBadgeExtra,children:["& ",tt]})]})}return`Suggested ${ie?"Resize":"Move"}`})()})]},E.id)})]}),!a&&(()=>{let E=[];for(let N of qe){let Y=Tn.get(N.id);E.push({id:N.id,orig:N.originalRect,target:Y||N.currentRect,isFixed:N.isFixed,isSelected:S.has(N.id),isExiting:H.has(N.id)})}for(let[N,Y]of Tn)if(!E.some(W=>W.id===N)){let W=_.find(ae=>ae.id===N);W&&E.push({id:N,orig:W.originalRect,target:Y,isFixed:W.isFixed,isSelected:S.has(N)})}for(let[N,Y]of $n)E.some(W=>W.id===N)||E.push({id:N,orig:Y.orig,target:Y.target,isFixed:Y.isFixed,isSelected:!1,isExiting:!0});return E.length===0?null:(0,Je.jsxs)("svg",{className:`${$.connectorSvg} ${h||l?$.connectorExiting:""}`,children:[E.map(({id:N,orig:Y,target:W,isFixed:ae,isSelected:ie,isExiting:J})=>{let ze=Y.x+Y.width/2,ge=(ae?Y.y:Y.y-Ne)+Y.height/2,Ae=W.x+W.width/2,tt=(ae?W.y:W.y-Ne)+W.height/2,be=Ae-ze,We=tt-ge,Le=Math.sqrt(be*be+We*We);if(Le<2)return null;let Ct=Math.min(1,Le/40),ot=Math.min(Le*.3,60),pt=Le>0?-We/Le:0,Tt=Le>0?be/Le:0,Ke=(ze+Ae)/2+pt*ot,Ze=(ge+tt)/2+Tt*ot,yt=Tn.has(N),bt=yt||ie?1:.4,te=yt||ie?1:.5;return(0,Je.jsxs)("g",{className:J?$.connectorExiting:"",children:[(0,Je.jsx)("path",{className:$.connectorLine,d:`M ${ze} ${ge} Q ${Ke} ${Ze} ${Ae} ${tt}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:bt*Ct}),(0,Je.jsx)("circle",{className:$.connectorDot,cx:ze,cy:ge,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:te*Ct,filter:"url(#connDotShadow)"}),(0,Je.jsx)("circle",{className:$.connectorDot,cx:Ae,cy:tt,r:4*Ct,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:te*Ct,filter:"url(#connDotShadow)"})]},`conn-${N}`)}),(0,Je.jsx)("defs",{children:(0,Je.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,Je.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),x&&(()=>{var tt;let E=_.find(be=>be.id===x);if(!E)return null;let N=E.currentRect,Y=E.isFixed?N.y:N.y-Ne,W=N.x+N.width/2,ae=Y-8,ie=Y+N.height+8,J=ae>200,ze=ie<window.innerHeight-100,ge=Math.max(160,Math.min(window.innerWidth-160,W)),Ae;return J?Ae={left:ge,bottom:window.innerHeight-ae}:ze?Ae={left:ge,top:ie}:Ae={left:ge,top:Math.max(80,window.innerHeight/2-80)},(0,Je.jsx)(E0,{element:E.label,placeholder:"Add a note about this section",initialValue:(tt=E.note)!=null?tt:"",submitLabel:z.current?"Save":"Set",onSubmit:V,onCancel:L,onDelete:z.current?()=>{V("")}:void 0,isExiting:v,lightMode:!n,style:Ae})})(),ne&&(0,Je.jsx)("div",{className:$.sizeIndicator,style:{left:ne.x,top:ne.y},"data-feedback-toolbar":!0,children:ne.text}),ye.map((E,N)=>(0,Je.jsx)("div",{className:$.guideLine,style:E.axis==="x"?{position:"fixed",left:E.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:E.pos-Ne,width:"100vw",height:1}},`${E.axis}-${E.pos}-${N}`))]})}var p0=new Set(["script","style","noscript","link","meta","br","hr"]);function h4(){let e=document.querySelector("main")||document.body,t=[],n=Array.from(e.children),l=e!==document.body&&n.length<3?Array.from(document.body.children):n;for(let o of l){if(!(o instanceof HTMLElement)||p0.has(o.tagName.toLowerCase())||o.hasAttribute("data-feedback-toolbar"))continue;let a=window.getComputedStyle(o);if(a.display==="none"||a.visibility==="hidden")continue;let i=o.getBoundingClientRect();if(!(i.height<10||i.width<10)){t.push({label:Yu(o),selector:Ba(o),top:i.top,bottom:i.bottom,left:i.left,right:i.right,area:i.width*i.height});for(let r of Array.from(o.children)){if(!(r instanceof HTMLElement)||p0.has(r.tagName.toLowerCase())||r.hasAttribute("data-feedback-toolbar"))continue;let s=window.getComputedStyle(r);if(s.display==="none"||s.visibility==="hidden")continue;let d=r.getBoundingClientRect();d.height<10||d.width<10||t.push({label:Yu(r),selector:Ba(r),top:d.top,bottom:d.bottom,left:d.left,right:d.right,area:d.width*d.height})}}}return t}function m4(e){let t=window.scrollY;return e.map(({label:n,selector:l,rect:o})=>{let a=o.y-t;return{label:n,selector:l,top:a,bottom:a+o.height,left:o.x,right:o.x+o.width,area:o.width*o.height}})}function g4(e){let t=window.scrollY,n=e.y-t,l=e.x;return{top:n,bottom:n+e.height,left:l,right:l+e.width,area:e.width*e.height}}function y0(e,t){let n=t?m4(t):h4(),l=g4(e),o=null,a=null,i=null,r=null,s=null;for(let S of n){if(Math.abs(S.left-l.left)<2&&Math.abs(S.top-l.top)<2&&Math.abs(S.right-S.left-e.width)<2&&Math.abs(S.bottom-S.top-e.height)<2)continue;S.left<=l.left+2&&S.right>=l.right-2&&S.top<=l.top+2&&S.bottom>=l.bottom-2&&S.area>l.area*1.5&&(!s||S.area<s._area)&&(s={label:S.label,selector:S.selector,_area:S.area});let T=l.right>S.left+5&&l.left<S.right-5,D=l.bottom>S.top+5&&l.top<S.bottom-5;if(T&&S.bottom<=l.top+5){let x=Math.round(l.top-S.bottom);(!o||x<o._dist)&&(o={label:S.label,selector:S.selector,gap:Math.max(0,x),_dist:x})}if(T&&S.top>=l.bottom-5){let x=Math.round(S.top-l.bottom);(!a||x<a._dist)&&(a={label:S.label,selector:S.selector,gap:Math.max(0,x),_dist:x})}if(D&&S.right<=l.left+5){let x=Math.round(l.left-S.right);(!i||x<i._dist)&&(i={label:S.label,selector:S.selector,gap:Math.max(0,x),_dist:x})}if(D&&S.left>=l.right-5){let x=Math.round(S.left-l.right);(!r||x<r._dist)&&(r={label:S.label,selector:S.selector,gap:Math.max(0,x),_dist:x})}}let d=window.innerWidth,g=window.innerHeight,h=y4(e,d),_=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,p=p4(l,e,d,g,s?{label:s.label,selector:s.selector,_area:s._area}:null,n);return{above:_(o),below:_(a),left:_(i),right:_(r),alignment:h,containedIn:s?{label:s.label,selector:s.selector}:null,outOfBounds:p}}function p4(e,t,n,l,o,a){let i={},r=!1,s=[];if(e.left<-2&&s.push("left"),e.right>n+2&&s.push("right"),e.top<-2&&s.push("top"),e.bottom>l+2&&s.push("bottom"),s.length>0&&(i.viewport=s,r=!0),o){let d=a.find(g=>g.label===o.label&&g.selector===o.selector&&Math.abs(g.area-o._area)<10);if(d){let g=[];e.left<d.left-2&&g.push("left"),e.right>d.right+2&&g.push("right"),e.top<d.top-2&&g.push("top"),e.bottom>d.bottom+2&&g.push("bottom"),g.length>0&&(i.container={label:o.label,edges:g},r=!0)}}return r?i:null}function y4(e,t){if(e.width/t>.85)return"full-width";let l=e.x+e.width/2,o=t/2,a=l-o,i=t*.08;return Math.abs(a)<i?"center":a<0?"left":"right"}function h5(e){switch(e){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function m5(e,t={}){let n=[];e.above&&n.push(`Below \`${e.above.label}\`${e.above.gap>0?` (${e.above.gap}px gap)`:""}`),e.below&&n.push(`Above \`${e.below.label}\`${e.below.gap>0?` (${e.below.gap}px gap)`:""}`),t.includeLeftRight&&(e.left&&n.push(`Right of \`${e.left.label}\`${e.left.gap>0?` (${e.left.gap}px gap)`:""}`),e.right&&n.push(`Left of \`${e.right.label}\`${e.right.gap>0?` (${e.right.gap}px gap)`:""}`));let l=h5(e.alignment);return e.containedIn?n.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in \`${e.containedIn.label}\``):n.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in page`),t.includePixelRef&&t.pixelRef&&n.push(`Pixel ref: \`${t.pixelRef}\``),e.outOfBounds&&(e.outOfBounds.viewport&&n.push(`**Outside viewport** (${e.outOfBounds.viewport.join(", ")} edge${e.outOfBounds.viewport.length>1?"s":""})`),e.outOfBounds.container&&n.push(`**Outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")} edge${e.outOfBounds.container.edges.length>1?"s":""})`)),n}function b4(e,t,n){var a,i;let l=[];e.above&&l.push(`below \`${e.above.label}\``),e.below&&l.push(`above \`${e.below.label}\``),e.left&&l.push(`right of \`${e.left.label}\``),e.right&&l.push(`left of \`${e.right.label}\``),e.containedIn&&l.push(`inside \`${e.containedIn.label}\``),l.push(h5(e.alignment)),(a=e.outOfBounds)!=null&&a.viewport&&l.push(`**outside viewport** (${e.outOfBounds.viewport.join(", ")})`),(i=e.outOfBounds)!=null&&i.container&&l.push(`**outside \`${e.outOfBounds.container.label}\`** (${e.outOfBounds.container.edges.join(", ")})`);let o=n?`, ${Math.round(n.width)}\xD7${Math.round(n.height)}px`:"";return`at (${Math.round(t.x)}, ${Math.round(t.y)})${o}: ${l.join(", ")}`}var Ry=15;function Ny(e){if(e.length<2)return[];let t=[],n=new Set;for(let l=0;l<e.length;l++){if(n.has(l))continue;let o=[l];for(let a=l+1;a<e.length;a++)n.has(a)||Math.abs(e[l].rect.y-e[a].rect.y)<Ry&&o.push(a);if(o.length>=2){let a=o.map(s=>e[s]);a.sort((s,d)=>s.rect.x-d.rect.x);let i=[];for(let s=0;s<a.length-1;s++)i.push(Math.round(a[s+1].rect.x-(a[s].rect.x+a[s].rect.width)));let r=Math.round(a.reduce((s,d)=>s+d.rect.y,0)/a.length);t.push({labels:a.map(s=>s.label),type:"row",sharedEdge:r,gaps:i,avgGap:i.length?Math.round(i.reduce((s,d)=>s+d,0)/i.length):0}),o.forEach(s=>n.add(s))}}for(let l=0;l<e.length;l++){if(n.has(l))continue;let o=[l];for(let a=l+1;a<e.length;a++)n.has(a)||Math.abs(e[l].rect.x-e[a].rect.x)<Ry&&o.push(a);if(o.length>=2){let a=o.map(s=>e[s]);a.sort((s,d)=>s.rect.y-d.rect.y);let i=[];for(let s=0;s<a.length-1;s++)i.push(Math.round(a[s+1].rect.y-(a[s].rect.y+a[s].rect.height)));let r=Math.round(a.reduce((s,d)=>s+d.rect.x,0)/a.length);t.push({labels:a.map(s=>s.label),type:"column",sharedEdge:r,gaps:i,avgGap:i.length?Math.round(i.reduce((s,d)=>s+d,0)/i.length):0}),o.forEach(s=>n.add(s))}}return t}function x4(e){var i;if(e.length<2)return[];let t=Ny(e.map(r=>({label:r.label,rect:r.originalRect}))),n=Ny(e.map(r=>({label:r.label,rect:r.currentRect}))),l=[],o=new Set;for(let r of t){let s=new Set(r.labels),d=null,g=0;for(let h of n){let _=h.labels.filter(p=>s.has(p)).length;_>=2&&_>g&&(d=h,g=_)}if(d){let h=d.labels.filter(p=>s.has(p)),_=h.join(", ");if(d.type!==r.type){let p=r.type==="row"?"y":"x",S=d.type==="row"?"y":"x";l.push(`**${_}**: ${r.type} (${p}\u2248${r.sharedEdge}, ${r.avgGap}px gaps) \u2192 ${d.type} (${S}\u2248${d.sharedEdge}, ${d.avgGap}px gaps)`)}else if(Math.abs(r.sharedEdge-d.sharedEdge)>20||Math.abs(r.avgGap-d.avgGap)>5){let p=r.type==="row"?"y":"x",S=Math.abs(r.sharedEdge-d.sharedEdge)>20?` ${p}: ${r.sharedEdge} \u2192 ${d.sharedEdge}`:"",T=Math.abs(r.avgGap-d.avgGap)>5?` gaps: ${r.avgGap}px \u2192 ${d.avgGap}px`:"";l.push(`**${_}**: ${r.type} shifted \u2014${S}${T}`)}h.forEach(p=>o.add(p))}else{let h=r.labels.join(", "),_=r.type==="row"?"y":"x";l.push(`**${h}**: ${r.type} (${_}\u2248${r.sharedEdge}) dissolved`),r.labels.forEach(p=>o.add(p))}}for(let r of n){if(r.labels.every(g=>o.has(g))||r.labels.filter(g=>!o.has(g)).length<2)continue;if(!t.some(g=>g.labels.filter(_=>r.labels.includes(_)).length>=2)){let g=r.type==="row"?"y":"x";l.push(`**${r.labels.join(", ")}**: new ${r.type} (${g}\u2248${r.sharedEdge}, ${r.avgGap}px gaps)`),r.labels.forEach(h=>o.add(h))}}let a=e.filter(r=>!o.has(r.label));if(a.length>=2){let r={};for(let s of a){let d=Math.round(s.currentRect.x/5)*5;((i=r[d])!=null?i:r[d]=[]).push(s.label)}for(let[s,d]of Object.entries(r))d.length>=2&&l.push(`**${d.join(", ")}**: shared left edge at x\u2248${s}`)}return l}function g5(e){if(typeof document=="undefined")return{viewport:e,contentArea:null};let t=[],n=new Set,l=r=>{n.has(r)||r instanceof HTMLElement&&(r.hasAttribute("data-feedback-toolbar")||p0.has(r.tagName.toLowerCase())||(n.add(r),t.push(r)))},o=document.querySelector("main");o&&l(o);let a=document.querySelector("[role='main']");a&&l(a);for(let r of Array.from(document.body.children))if(l(r),r.children){for(let s of Array.from(r.children))if(l(s),s.children)for(let d of Array.from(s.children))l(d)}let i=null;for(let r of t){let s=r.getBoundingClientRect();if(s.height<50)continue;let d=getComputedStyle(r);if(d.maxWidth&&d.maxWidth!=="none"&&d.maxWidth!=="0px"){(!i||s.width<i.rect.width)&&(i={el:r,rect:s});continue}!i&&s.width<e.width-20&&s.width>100&&(i={el:r,rect:s})}if(i){let{el:r,rect:s}=i;return{viewport:e,contentArea:{width:Math.round(s.width),left:Math.round(s.left),right:Math.round(s.right),centerX:Math.round(s.left+s.width/2),selector:Ba(r)}}}return{viewport:e,contentArea:null}}function v4(e){if(typeof document=="undefined")return null;let t=document.querySelector(e);if(!(t!=null&&t.parentElement))return null;let n=getComputedStyle(t.parentElement),l={parentDisplay:n.display,parentSelector:Ba(t.parentElement)};return n.display.includes("flex")&&(l.flexDirection=n.flexDirection),n.display.includes("grid")&&n.gridTemplateColumns!=="none"&&(l.gridCols=n.gridTemplateColumns),n.gap&&n.gap!=="normal"&&n.gap!=="0px"&&(l.gap=n.gap),l}function p5(e,t){let n=t.contentArea,l=n?n.width:t.viewport.width,o=n?n.left:0,a=n?n.centerX:Math.round(t.viewport.width/2),i=Math.round(e.x-o),r=Math.round(o+l-(e.x+e.width)),s=(e.width/l*100).toFixed(1),d=e.x+e.width/2,g=Math.abs(d-a)<20,h=e.width/l>.95,_=[];return h?_.push("`width: 100%` of container"):_.push(`left \`${i}px\` in container, right \`${r}px\`, width \`${s}%\` (\`${Math.round(e.width)}px\`)`),g&&!h&&_.push("centered \u2014 `margin-inline: auto`"),_.join(" \u2014 ")}function y5(e){let{viewport:t,contentArea:n}=e,l=`### Reference Frame
`;if(l+=`- Viewport: \`${t.width}\xD7${t.height}px\`
`,n){let o=n;l+=`- Content area: \`${o.width}px\` wide, left edge at \`x=${o.left}\`, right at \`x=${o.right}\` (\`${o.selector}\`)
`,l+=`- Pixel \u2192 CSS translation:
`,l+=`  - **Horizontal position in container**: \`element.x - ${o.left}\` \u2192 use as \`margin-left\` or \`left\`
`,l+=`  - **Width as % of container**: \`element.width / ${o.width} \xD7 100\` \u2192 use as \`width: X%\`
`,l+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` \u2192 use as `margin-top` or `gap`\n",l+=`  - **Centered**: if \`|element.centerX - ${o.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else l+=`- No distinct content container \u2014 elements positioned relative to full viewport
`,l+=`- Pixel \u2192 CSS translation:
`,l+=`  - **Width as % of viewport**: \`element.width / ${t.width} \xD7 100\` \u2192 use as \`width: X%\`
`,l+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(t.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return l+=`
`,l}function w4(e){let t=v4(e);if(!t)return null;let n=`\`${t.parentDisplay}\``;return t.flexDirection&&(n+=`, flex-direction: \`${t.flexDirection}\``),t.gridCols&&(n+=`, grid-template-columns: \`${t.gridCols}\``),t.gap&&(n+=`, gap: \`${t.gap}\``),`Parent: ${n} (\`${t.parentSelector}\`)`}function Dy(e,t,n,l="standard"){var D,x,k,v;if(e.length===0)return"";let o=[...e].sort((m,z)=>Math.abs(m.y-z.y)<20?m.x-z.x:m.y-z.y),a="";if(n!=null&&n.blankCanvas?(a+=`## Wireframe: New Page

`,n.wireframePurpose&&(a+=`> **Purpose:** ${n.wireframePurpose}
>
`),a+=`> ${e.length} component${e.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):a+=`## Design Layout

> ${e.length} component${e.length!==1?"s":""} placed

`,l==="compact")return a+=`### Components
`,o.forEach((m,z)=>{var L;let Q=((L=Dl[m.type])==null?void 0:L.label)||m.type;a+=`${z+1}. **${Q}** \u2014 \`${Math.round(m.width)}\xD7${Math.round(m.height)}px\` at \`(${Math.round(m.x)}, ${Math.round(m.y)})\`
`,m.text&&(a+=`   - Note: "${m.text}"
`)}),a;let i=g5(t);a+=y5(i),a+=`### Components
`,o.forEach((m,z)=>{var P;let Q=((P=Dl[m.type])==null?void 0:P.label)||m.type,L={x:m.x,y:m.y,width:m.width,height:m.height};a+=`${z+1}. **${Q}** \u2014 \`${Math.round(m.width)}\xD7${Math.round(m.height)}px\` at \`(${Math.round(m.x)}, ${Math.round(m.y)})\`
`,m.text&&(a+=`   - Note: "${m.text}"
`);let V=y0(L),K=m5(V,{includeLeftRight:l==="detailed"||l==="forensic"});for(let he of K)a+=`   - ${he}
`;let oe=p5(L,i);oe&&(a+=`   - CSS: ${oe}
`)}),a+=`
### Layout Analysis
`;let r=[];for(let m of o){let z=r.find(Q=>Math.abs(Q.y-m.y)<30);z?z.items.push(m):r.push({y:m.y,items:[m]})}if(r.sort((m,z)=>m.y-z.y),r.forEach((m,z)=>{m.items.sort((L,V)=>L.x-V.x);let Q=m.items.map(L=>{var V;return((V=Dl[L.type])==null?void 0:V.label)||L.type});if(m.items.length===1){let V=m.items[0].width>t.width*.8;a+=`- Row ${z+1} (y\u2248${Math.round(m.y)}): ${Q[0]}${V?" \u2014 full width":""}
`}else a+=`- Row ${z+1} (y\u2248${Math.round(m.y)}): ${Q.join(" | ")} \u2014 ${m.items.length} items side by side
`}),l==="detailed"||l==="forensic"){a+=`
### Spacing & Gaps
`;for(let m=0;m<o.length-1;m++){let z=o[m],Q=o[m+1],L=((D=Dl[z.type])==null?void 0:D.label)||z.type,V=((x=Dl[Q.type])==null?void 0:x.label)||Q.type,H=Math.round(Q.y-(z.y+z.height)),K=Math.round(Q.x-(z.x+z.width));Math.abs(z.y-Q.y)<30?a+=`- ${L} \u2192 ${V}: \`${K}px\` horizontal gap
`:a+=`- ${L} \u2192 ${V}: \`${H}px\` vertical gap
`}if(l==="forensic"&&o.length>2){a+=`
### All Pairwise Gaps
`;for(let m=0;m<o.length;m++)for(let z=m+1;z<o.length;z++){let Q=o[m],L=o[z],V=((k=Dl[Q.type])==null?void 0:k.label)||Q.type,H=((v=Dl[L.type])==null?void 0:v.label)||L.type,K=Math.round(L.y-(Q.y+Q.height)),oe=Math.round(L.x-(Q.x+Q.width));a+=`- ${V} \u2194 ${H}: h=\`${oe}px\` v=\`${K}px\`
`}}l==="forensic"&&(a+=`
### Z-Order (placement order)
`,e.forEach((m,z)=>{var L;let Q=((L=Dl[m.type])==null?void 0:L.label)||m.type;a+=`${z}. ${Q} at \`(${Math.round(m.x)}, ${Math.round(m.y)})\`
`}))}a+=`
### Suggested Implementation
`;let s=o.some(m=>m.type==="navigation"),d=o.some(m=>m.type==="hero"),g=o.some(m=>m.type==="sidebar"),h=o.some(m=>m.type==="footer"),_=o.filter(m=>m.type==="card"),p=o.filter(m=>m.type==="form"),S=o.filter(m=>m.type==="table"),T=o.filter(m=>m.type==="modal");if(s&&(a+=`- Top navigation bar with logo + nav links + CTA
`),d&&(a+=`- Hero section with heading, subtext, and call-to-action
`),g&&(a+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),_.length>1?a+=`- ${_.length}-column card grid \u2014 use CSS Grid or Flexbox
`:_.length===1&&(a+=`- Card component with image + content area
`),p.length>0&&(a+=`- ${p.length} form${p.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),S.length>0&&(a+=`- Data table \u2014 consider sortable columns and pagination
`),T.length>0&&(a+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),h&&(a+=`- Multi-column footer with links
`),l==="detailed"||l==="forensic"){if(a+=`
### CSS Suggestions
`,g){let m=o.find(z=>z.type==="sidebar");a+=`- \`display: grid; grid-template-columns: ${Math.round(m.width)}px 1fr;\`
`}if(_.length>1){let m=Math.round(_[0].width);a+=`- \`display: grid; grid-template-columns: repeat(${_.length}, ${m}px); gap: 16px;\`
`}s&&(a+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return a}function Ay(e,t="standard",n){let{sections:l}=e,o=[];for(let g of l){let h=g.originalRect,_=g.currentRect,p=Math.abs(h.x-_.x)>1||Math.abs(h.y-_.y)>1,S=Math.abs(h.width-_.width)>1||Math.abs(h.height-_.height)>1,T=!!g.note;if(!p&&!S&&!T){t==="forensic"&&o.push({section:g,posMoved:!1,sizeChanged:!1});continue}o.push({section:g,posMoved:p,sizeChanged:S})}if(o.length===0||t!=="forensic"&&o.every(g=>!g.posMoved&&!g.sizeChanged&&!g.section.note))return"";let a=`## Suggested Layout Changes

`,i=n?n.width:typeof window!="undefined"?window.innerWidth:0,r=n?n.height:typeof window!="undefined"?window.innerHeight:0,s=g5({width:i,height:r});t!=="compact"&&(a+=y5(s)),t==="forensic"&&(a+=`> Detected at: \`${new Date(e.detectedAt).toISOString()}\`
`,a+=`> Total sections: ${l.length}

`);let d=g=>l.map(h=>({label:h.label,selector:h.selector,rect:g==="original"?h.originalRect:h.currentRect}));a+=`**Changes:**
`;for(let{section:g,posMoved:h,sizeChanged:_}of o){let p=g.originalRect,S=g.currentRect;if(!h&&!_){g.note?(a+=`- **${g.label}** \u2014 note only
`,a+=`  - Note: "${g.note}"
`):a+=`- ${g.label} \u2014 unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`;continue}if(t==="compact"){h&&_?a+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`:h?a+=`- Suggested: move **${g.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:a+=`- Suggested: resize **${g.label}** to ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`,g.note&&(a+=`  - Note: "${g.note}"
`);continue}if(h&&_?a+=`- Suggested: move and resize **${g.label}**
`:h?a+=`- Suggested: move **${g.label}**
`:a+=`- Suggested: resize **${g.label}** from ${Math.round(p.width)}\xD7${Math.round(p.height)}px to ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`,g.note&&(a+=`  - Note: "${g.note}"
`),h){let D=y0(p,d("original")),x=y0(S,d("current")),k=_?{width:p.width,height:p.height}:void 0;a+=`  - Currently ${b4(D,{x:p.x,y:p.y},k)}
`;let v=_?{width:S.width,height:S.height}:void 0,m=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,z=v?`, ${Math.round(v.width)}\xD7${Math.round(v.height)}px`:"",L=m5(x,{includeLeftRight:t==="detailed"||t==="forensic"});if(L.length>0){a+=`  - Suggested position ${m}${z}: ${L[0]}
`;for(let H=1;H<L.length;H++)a+=`    ${L[H]}
`}else a+=`  - Suggested position ${m}${z}
`;let V=p5(S,s);V&&(a+=`  - CSS: ${V}
`)}let T=w4(g.selector);if(T&&(a+=`  - ${T}
`),a+=`  - Selector: \`${g.selector}\`
`,t==="detailed"||t==="forensic"){let D=g.className?`${g.tagName}.${g.className.split(" ")[0]}`:g.tagName;D!==g.selector&&(a+=`  - Element: \`${D}\`
`),g.role&&(a+=`  - Role: \`${g.role}\`
`),t==="forensic"&&g.textSnippet&&(a+=`  - Text: "${g.textSnippet}"
`)}t==="forensic"&&(a+=`  - Original rect: \`{ x: ${Math.round(p.x)}, y: ${Math.round(p.y)}, w: ${Math.round(p.width)}, h: ${Math.round(p.height)} }\`
`,a+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(t!=="compact"){let g=o.filter(_=>_.posMoved).map(_=>({label:_.section.label,originalRect:_.section.originalRect,currentRect:_.section.currentRect})),h=x4(g);if(h.length>0){a+=`
### Layout Summary
`;for(let _ of h)a+=`- ${_}
`}}if(t!=="compact"&&l.length>1){a+=`
### All Sections (current positions)
`;let g=[...l].sort((h,_)=>Math.abs(h.currentRect.y-_.currentRect.y)<20?h.currentRect.x-_.currentRect.x:h.currentRect.y-_.currentRect.y);for(let h of g){let _=h.currentRect,p=Math.abs(_.x-h.originalRect.x)>1||Math.abs(_.y-h.originalRect.y)>1||Math.abs(_.width-h.originalRect.width)>1||Math.abs(_.height-h.originalRect.height)>1;a+=`- ${h.label}: \`${Math.round(_.width)}\xD7${Math.round(_.height)}px\` at \`(${Math.round(_.x)}, ${Math.round(_.y)})\`${p?" \u2190 suggested":""}
`}}return a}var b0="feedback-annotations-",b5=7;function T0(e){return`${b0}${e}`}function Zo(e){if(typeof window=="undefined")return[];try{let t=localStorage.getItem(T0(e));if(!t)return[];let n=JSON.parse(t),l=Date.now()-b5*24*60*60*1e3;return n.filter(o=>!o.timestamp||o.timestamp>l)}catch{return[]}}function x5(e,t){if(typeof window!="undefined")try{localStorage.setItem(T0(e),JSON.stringify(t))}catch{}}function k4(){let e=new Map;if(typeof window=="undefined")return e;try{let t=Date.now()-b5*24*60*60*1e3;for(let n=0;n<localStorage.length;n++){let l=localStorage.key(n);if(l!=null&&l.startsWith(b0)){let o=l.slice(b0.length),a=localStorage.getItem(l);if(a){let r=JSON.parse(a).filter(s=>!s.timestamp||s.timestamp>t);r.length>0&&e.set(o,r)}}}}catch{}return e}function l0(e,t,n){let l=t.map(o=>({...o,_syncedTo:n}));x5(e,l)}var R0="agentation-design-";function S4(e){if(typeof window=="undefined")return[];try{let t=localStorage.getItem(`${R0}${e}`);return t?JSON.parse(t):[]}catch{return[]}}function C4(e,t){if(typeof window!="undefined")try{localStorage.setItem(`${R0}${e}`,JSON.stringify(t))}catch{}}function M4(e){if(typeof window!="undefined")try{localStorage.removeItem(`${R0}${e}`)}catch{}}var N0="agentation-rearrange-";function E4(e){if(typeof window=="undefined")return null;try{let t=localStorage.getItem(`${N0}${e}`);return t?JSON.parse(t):null}catch{return null}}function T4(e,t){if(typeof window!="undefined")try{localStorage.setItem(`${N0}${e}`,JSON.stringify(t))}catch{}}function R4(e){if(typeof window!="undefined")try{localStorage.removeItem(`${N0}${e}`)}catch{}}var D0="agentation-wireframe-";function N4(e){if(typeof window=="undefined")return null;try{let t=localStorage.getItem(`${D0}${e}`);return t?JSON.parse(t):null}catch{return null}}function Ly(e,t){if(typeof window!="undefined")try{localStorage.setItem(`${D0}${e}`,JSON.stringify(t))}catch{}}function Du(e){if(typeof window!="undefined")try{localStorage.removeItem(`${D0}${e}`)}catch{}}var v5="agentation-session-";function A0(e){return`${v5}${e}`}function D4(e){if(typeof window=="undefined")return null;try{return localStorage.getItem(A0(e))}catch{return null}}function o0(e,t){if(typeof window!="undefined")try{localStorage.setItem(A0(e),t)}catch{}}function A4(e){if(typeof window!="undefined")try{localStorage.removeItem(A0(e))}catch{}}var x0=`${v5}toolbar-hidden`;function L4(){if(typeof window=="undefined")return!1;try{return sessionStorage.getItem(x0)==="1"}catch{return!1}}function O4(e){if(typeof window!="undefined")try{e?sessionStorage.setItem(x0,"1"):sessionStorage.removeItem(x0)}catch{}}async function a0(e,t){let n=await fetch(`${e}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(!n.ok)throw new Error(`Failed to create session: ${n.status}`);return n.json()}async function Oy(e,t){let n=await fetch(`${e}/sessions/${t}`);if(!n.ok)throw new Error(`Failed to get session: ${n.status}`);return n.json()}async function zy(e,t,n){!n.elementPath&&(n.element==="body"||n.element==="html")&&(n={...n,elementPath:n.element});let l=await fetch(`${e}/sessions/${t}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw new Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function i0(e,t,n){let l=await fetch(`${e}/annotations/${t}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!l.ok)throw new Error(`Failed to update annotation: ${l.status}`);return l.json()}async function Au(e,t){let n=await fetch(`${e}/annotations/${t}`,{method:"DELETE"});if(!n.ok)throw new Error(`Failed to delete annotation: ${n.status}`)}var dt={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},By=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),$y=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],z4=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function B4(e){var l,o,a,i;let t=(l=e==null?void 0:e.mode)!=null?l:"filtered",n=By;if(e!=null&&e.skipExact){let r=e.skipExact instanceof Set?e.skipExact:new Set(e.skipExact);n=new Set([...By,...r])}return{maxComponents:(o=e==null?void 0:e.maxComponents)!=null?o:6,maxDepth:(a=e==null?void 0:e.maxDepth)!=null?a:30,mode:t,skipExact:n,skipPatterns:e!=null&&e.skipPatterns?[...$y,...e.skipPatterns]:$y,userPatterns:(i=e==null?void 0:e.userPatterns)!=null?i:z4,filter:e==null?void 0:e.filter}}function $4(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function H4(e,t=10){let n=new Set,l=e,o=0;for(;l&&o<t;)l.className&&typeof l.className=="string"&&l.className.split(/\s+/).forEach(a=>{if(a.length>1){let i=a.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();i.length>1&&n.add(i)}}),l=l.parentElement,o++;return n}function U4(e,t){let n=$4(e);for(let l of t){if(l===n)return!0;let o=n.split("-").filter(i=>i.length>2),a=l.split("-").filter(i=>i.length>2);for(let i of o)for(let r of a)if(i===r||i.includes(r)||r.includes(i))return!0}return!1}function Y4(e,t,n,l){if(n.filter)return n.filter(e,t);switch(n.mode){case"all":return!0;case"filtered":return!(n.skipExact.has(e)||n.skipPatterns.some(o=>o.test(e)));case"smart":return n.skipExact.has(e)||n.skipPatterns.some(o=>o.test(e))?!1:!!(l&&U4(e,l)||n.userPatterns.some(o=>o.test(e)));default:return!0}}var qi=null,j4=new WeakMap;function r0(e){return Object.keys(e).some(t=>t.startsWith("__reactFiber$")||t.startsWith("__reactInternalInstance$")||t.startsWith("__reactProps$"))}function X4(){if(qi!==null)return qi;if(typeof document=="undefined")return!1;if(document.body&&r0(document.body))return qi=!0,!0;let e=["#root","#app","#__next","[data-reactroot]"];for(let t of e){let n=document.querySelector(t);if(n&&r0(n))return qi=!0,!0}if(document.body){for(let t of document.body.children)if(r0(t))return qi=!0,!0}return qi=!1,!1}var ys={map:j4};function q4(e){return Object.keys(e).find(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$"))||null}function W4(e){let t=q4(e);return t?e[t]:null}function Aa(e){return e?e.displayName?e.displayName:e.name?e.name:null:null}function I4(e){var o;let{tag:t,type:n,elementType:l}=e;if(t===dt.HostComponent||t===dt.HostText||t===dt.HostHoistable||t===dt.HostSingleton||t===dt.Fragment||t===dt.Mode||t===dt.Profiler||t===dt.DehydratedFragment||t===dt.HostRoot||t===dt.HostPortal||t===dt.ScopeComponent||t===dt.OffscreenComponent||t===dt.LegacyHiddenComponent||t===dt.CacheComponent||t===dt.TracingMarkerComponent||t===dt.Throw||t===dt.ViewTransitionComponent||t===dt.ActivityComponent)return null;if(t===dt.ForwardRef){let a=l;if(a!=null&&a.render){let i=Aa(a.render);if(i)return i}return a!=null&&a.displayName?a.displayName:Aa(n)}if(t===dt.MemoComponent||t===dt.SimpleMemoComponent){let a=l;if(a!=null&&a.type){let i=Aa(a.type);if(i)return i}return a!=null&&a.displayName?a.displayName:Aa(n)}if(t===dt.ContextProvider){let a=n;return(o=a==null?void 0:a._context)!=null&&o.displayName?`${a._context.displayName}.Provider`:null}if(t===dt.ContextConsumer){let a=n;return a!=null&&a.displayName?`${a.displayName}.Consumer`:null}if(t===dt.LazyComponent){let a=l;return(a==null?void 0:a._status)===1&&a._result?Aa(a._result):null}return t===dt.SuspenseComponent||t===dt.SuspenseListComponent?null:t===dt.IncompleteClassComponent||t===dt.IncompleteFunctionComponent||t===dt.FunctionComponent||t===dt.ClassComponent||t===dt.IndeterminateComponent?Aa(n):null}function Q4(e){return e.length<=2||e.length<=3&&e===e.toLowerCase()}function G4(e,t){let n=B4(t),l=n.mode==="all";if(l){let s=ys.map.get(e);if(s!==void 0)return s}if(!X4()){let s={path:null,components:[]};return l&&ys.map.set(e,s),s}let o=n.mode==="smart"?H4(e):void 0,a=[];try{let s=W4(e),d=0;for(;s&&d<n.maxDepth&&a.length<n.maxComponents;){let g=I4(s);g&&!Q4(g)&&Y4(g,d,n,o)&&a.push(g),s=s.return,d++}}catch{let s={path:null,components:[]};return l&&ys.map.set(e,s),s}if(a.length===0){let s={path:null,components:[]};return l&&ys.map.set(e,s),s}let r={path:a.slice().reverse().map(s=>`<${s}>`).join(" "),components:a};return l&&ys.map.set(e,r),r}var bs={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function F4(e){if(!e||typeof e!="object")return null;let t=Object.keys(e),n=t.find(a=>a.startsWith("__reactFiber$"));if(n)return e[n]||null;let l=t.find(a=>a.startsWith("__reactInternalInstance$"));if(l)return e[l]||null;let o=t.find(a=>{if(!a.startsWith("__react"))return!1;let i=e[a];return i&&typeof i=="object"&&"_debugSource"in i});return o&&e[o]||null}function Ms(e){if(!e.type||typeof e.type=="string")return null;if(typeof e.type=="object"||typeof e.type=="function"){let t=e.type;if(t.displayName)return t.displayName;if(t.name)return t.name}return null}function Z4(e,t=50){var o;let n=e,l=0;for(;n&&l<t;){if(n._debugSource)return{source:n._debugSource,componentName:Ms(n)};if((o=n._debugOwner)!=null&&o._debugSource)return{source:n._debugOwner._debugSource,componentName:Ms(n._debugOwner)};n=n.return,l++}return null}function K4(e){let t=e,n=0,l=50;for(;t&&n<l;){let o=t,a=["_debugSource","__source","_source","debugSource"];for(let i of a){let r=o[i];if(r&&typeof r=="object"&&"fileName"in r)return{source:r,componentName:Ms(t)}}if(t.memoizedProps){let i=t.memoizedProps;if(i.__source&&typeof i.__source=="object"){let r=i.__source;if(r.fileName&&r.lineNumber)return{source:{fileName:r.fileName,lineNumber:r.lineNumber,columnNumber:r.columnNumber},componentName:Ms(t)}}}t=t.return,n++}return null}var Lu=new Map;function P4(e){var o;let t=e.tag,n=e.type,l=e.elementType;if(typeof n=="string"||n==null||typeof n=="function"&&((o=n.prototype)!=null&&o.isReactComponent))return null;if((t===bs.FunctionComponent||t===bs.IndeterminateComponent)&&typeof n=="function")return n;if(t===bs.ForwardRef&&l){let a=l.render;if(typeof a=="function")return a}if((t===bs.MemoComponent||t===bs.SimpleMemoComponent)&&l){let a=l.type;if(typeof a=="function")return a}return typeof n=="function"?n:null}function J4(){let e=V4,t=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(t&&"H"in t)return{get:()=>t.H,set:l=>{t.H=l}};let n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(n){let l=n.ReactCurrentDispatcher;if(l&&"current"in l)return{get:()=>l.current,set:o=>{l.current=o}}}return null}function e6(e,t){let n=e.split(`
`),l=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/\/_next\/static\/chunks\//,/\/\.vite\/deps\//,/\/_astro\//,/\/assets\/[^\s/]+[-.][\w-]{8,}\.m?js(?:[?:]|$)/,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],o=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,a=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let i of n){let r=i.trim();if(!r||l.some(d=>d.test(r)))continue;if(t){let d=t.replace(/^bound /,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(!new RegExp(`(?:at (?:Object\\.)?|^)${d}(?: \\(|@| \\[)`).test(r))continue}let s=o.exec(r)||a.exec(r);if(s)return{fileName:s[1],line:parseInt(s[2],10),column:parseInt(s[3],10)}}return null}function t6(e){let t=e;return t=t.replace(/[?#].*$/,""),t=t.replace(/^turbopack:\/\/\/\[project\]\//,""),t=t.replace(/^webpack-internal:\/\/\/\.\//,""),t=t.replace(/^webpack-internal:\/\/\//,""),t=t.replace(/^webpack:\/\/\/\.\//,""),t=t.replace(/^webpack:\/\/\//,""),t=t.replace(/^turbopack:\/\/\//,""),t=t.replace(/^https?:\/\/[^/]+\//,""),t=t.replace(/^file:\/\/\//,"/"),t=t.replace(/^\([^)]+\)\/\.\//,""),t=t.replace(/^\.\//,""),t}function n6(e){let t=P4(e);if(!t)return null;if(Lu.has(t))return Lu.get(t);let n=J4();if(!n)return Lu.set(t,null),null;let l=n.get(),o=null;try{let a=new Proxy({},{get(){throw new Error("probe")}});n.set(a);try{t({})}catch(i){if(i instanceof Error&&i.message==="probe"&&i.stack){let r=e6(i.stack,t.name);r&&(o={fileName:t6(r.fileName),lineNumber:r.line,columnNumber:r.column,componentName:Ms(e)||void 0})}}}finally{n.set(l)}return Lu.set(t,o),o}function l6(e,t=15){let n=e,l=0;for(;n&&l<t;){let o=n6(n);if(o)return o;n=n.return,l++}return null}function v0(e){let t=F4(e);if(!t)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let n=Z4(t);if(n||(n=K4(t)),n!=null&&n.source)return{found:!0,source:{fileName:n.source.fileName,lineNumber:n.source.lineNumber,columnNumber:n.source.columnNumber,componentName:n.componentName||void 0},isReactApp:!0,isProduction:!1};let l=l6(t);return l?{found:!0,source:l,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function o6(e,t="path"){let{fileName:n,lineNumber:l,columnNumber:o}=e,a=`${n}:${l}`;return o!==void 0&&(a+=`:${o}`),t==="vscode"?`vscode://file${n.startsWith("/")?"":"/"}${a}`:a}function a6(e,t=10){let n=e,l=0;for(;n&&l<t;){let o=v0(n);if(o.found)return o;n=n.parentElement,l++}return v0(e)}var xs=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Hu(e,t){let n=`## Page Feedback: ${e}
`,l=t==null?void 0:t.replace(/[\r\n\t]+/g," ").trim();return l&&(n+=`**App:** ${l.replace(/[\\`*_\[\]<>]/g,"\\$&")}
`),n}function Hy(e,t,n="standard",l={}){if(e.length===0)return"";let o=typeof window!="undefined"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",a=Hu(t,l.appName);return n==="forensic"?(a+=`
**Environment:**
`,a+=`- Viewport: ${o}
`,typeof window!="undefined"&&(a+=`- URL: ${window.location.href}
`,a+=`- User Agent: ${navigator.userAgent}
`,a+=`- Timestamp: ${new Date().toISOString()}
`,a+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),a+=`
---
`):n!=="compact"&&(a+=`**Viewport:** ${o}
`),a+=`
`,e.forEach((i,r)=>{n==="compact"?(a+=`${r+1}. **${i.element}**${i.sourceFile?` (${i.sourceFile})`:""}: ${i.comment}`,i.selectedText&&(a+=` (re: "${i.selectedText.slice(0,30)}${i.selectedText.length>30?"...":""}")`),a+=`
`):n==="forensic"?(a+=`### ${r+1}. ${i.element}
`,i.isMultiSelect&&i.fullPath&&(a+=`*Forensic data shown for first element of selection*
`),i.fullPath&&(a+=`**Full DOM Path:** ${i.fullPath}
`),i.cssClasses&&(a+=`**CSS Classes:** ${i.cssClasses}
`),i.boundingBox&&(a+=`**Position:** x:${Math.round(i.boundingBox.x)}, y:${Math.round(i.boundingBox.y)} (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`),a+=`**Annotation at:** ${i.x.toFixed(1)}% from left, ${Math.round(i.y)}px from top
`,i.selectedText&&(a+=`**Selected text:** "${i.selectedText}"
`),i.nearbyText&&!i.selectedText&&(a+=`**Context:** ${i.nearbyText.slice(0,100)}
`),i.computedStyles&&(a+=`**Computed Styles:** ${i.computedStyles}
`),i.accessibility&&(a+=`**Accessibility:** ${i.accessibility}
`),i.nearbyElements&&(a+=`**Nearby Elements:** ${i.nearbyElements}
`),i.sourceFile&&(a+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(a+=`**React:** ${i.reactComponents}
`),a+=`**Feedback:** ${i.comment}

`):(a+=`### ${r+1}. ${i.element}
`,a+=`**Location:** ${i.elementPath}
`,i.sourceFile&&(a+=`**Source:** ${i.sourceFile}
`),i.reactComponents&&(a+=`**React:** ${i.reactComponents}
`),n==="detailed"&&(i.cssClasses&&(a+=`**Classes:** ${i.cssClasses}
`),i.boundingBox&&(a+=`**Position:** ${Math.round(i.boundingBox.x)}px, ${Math.round(i.boundingBox.y)}px (${Math.round(i.boundingBox.width)}\xD7${Math.round(i.boundingBox.height)}px)
`)),i.selectedText&&(a+=`**Selected text:** "${i.selectedText}"
`),n==="detailed"&&i.nearbyText&&!i.selectedText&&(a+=`**Context:** ${i.nearbyText.slice(0,100)}
`),a+=`**Feedback:** ${i.comment}

`)}),a.trim()}function Uy(e,t,n="markdown"){return n==="markdown"?t:[...new Set(e.map(l=>{var o;return n==="source"?l.sourceFile:n==="classes"?l.cssClasses:(o=l.attributes)==null?void 0:o[n.attribute]}).filter(l=>typeof l=="string"&&l.length>0))].join(`
`)}async function i6(e){var t;if(typeof window=="undefined")return!1;try{if((t=navigator.clipboard)!=null&&t.writeText)return await navigator.clipboard.writeText(e),!0}catch{}return r6(e)}function r6(e){var r;let t=document.createElement("textarea"),n=document.activeElement;for(;(r=n==null?void 0:n.shadowRoot)!=null&&r.activeElement;)n=n.shadowRoot.activeElement;let l=n instanceof HTMLInputElement||n instanceof HTMLTextAreaElement?n:null,o=l&&l.selectionStart!==null?{start:l.selectionStart,end:l.selectionEnd,direction:l.selectionDirection}:null,a=document.getSelection(),i=a?Array.from({length:a.rangeCount},(s,d)=>a.getRangeAt(d).cloneRange()):[];try{return t.value=e,t.setAttribute("readonly",""),t.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;",document.body.appendChild(t),t.focus({preventScroll:!0}),t.select(),t.setSelectionRange(0,e.length),document.execCommand("copy")}catch{return!1}finally{if(t.remove(),n instanceof HTMLElement&&n.isConnected&&(n.focus({preventScroll:!0}),l&&o&&l.setSelectionRange(o.start,o.end,o.direction)),a){a.removeAllRanges();for(let s of i)a.addRange(s)}}}function Yy(e){if(!e)return e;try{let t=new URL(e,"http://agentation.invalid");return t.pathname+t.search+t.hash}catch{return e}}function jy(e,t,n=[]){let l=new Map,o=new Map(n.map(r=>[r.id,r])),a=!1;async function i(r,s){if(a||s.running||s.timer)return;let d=s.desired,g=t.get(r);if(!d&&!g){l.delete(r),t.delete(r);return}let h=d?JSON.stringify(d):void 0;if(!(d&&g&&s.synced===h)){s.running=!0;try{if(!d)await e.remove(g),t.delete(r),s.synced=void 0;else if(g)await e.update(g,d),s.synced=h;else{t.set(r,"");let _=await e.create(d);t.set(r,_.id),s.synced=h}s.retries=0,s.running=!1,!a&&l.get(r)===s&&i(r,s)}catch(_){if(s.running=!1,!a&&l.get(r)===s&&(console.warn("[Agentation] Failed to sync layout feedback:",_),t.get(r)&&s.retries<3)){let p=500*2**s.retries++;s.timer=it(()=>{s.timer=void 0,i(r,s)},p)}}}}return{replace(r){let s=new Map(r.map(d=>[d.id,d]));for(let[d,g]of s){let h=l.get(d);if(!h){h={running:!1,retries:0},l.set(d,h);let _=[...o.values()].find(p=>p.kind===g.kind&&Yy(p.url)===Yy(g.url)&&(g.kind==="placement"?p.timestamp===g.timestamp&&p.element===g.element:p.element===g.element));_&&(t.set(d,_.id),o.delete(_.id))}JSON.stringify(h.desired)!==JSON.stringify(g)&&(h.retries=0,h.timer&&clearTimeout(h.timer),h.timer=void 0),h.desired=g}for(let[d,g]of l)s.has(d)||(g.desired=void 0),i(d,g)},forget(r){let s=l.get(r);s!=null&&s.timer&&clearTimeout(s.timer),l.delete(r),t.delete(r)},dispose(){a=!0;for(let r of l.values())r.timer&&clearTimeout(r.timer)}}}function s6(e,t,n,l){let o=!1,a,i,r=1e3,s,d=p=>{!o&&((p==null?void 0:p.status)==="resolved"||(p==null?void 0:p.status)==="dismissed")&&l(p)},g=async()=>{if(o||s||!n())return;let p=new AbortController;s=p;let S=it(()=>p.abort(),5e3);try{let T=await fetch(`${e}/sessions/${t}`,{signal:p.signal});if(!T.ok)return;let D=await T.json();!o&&!p.signal.aborted&&Array.isArray(D.annotations)&&D.annotations.forEach(d)}catch{}finally{clearTimeout(S),s===p&&(s=void 0)}},h=()=>{if(o)return;let p=new EventSource(`${e}/sessions/${t}/events`),S=()=>{r=1e3,g()},T=x=>{try{d(JSON.parse(x.data).payload)}catch{}},D=()=>{p.readyState!==EventSource.CLOSED||o||i!==void 0||(a==null||a(),i=it(()=>{i=void 0,h()},r),r=Math.min(r*2,1e4))};p.addEventListener("open",S),p.addEventListener("annotation.updated",T),p.addEventListener("error",D),a=()=>{p.removeEventListener("open",S),p.removeEventListener("annotation.updated",T),p.removeEventListener("error",D),p.close()}};h();let _=Fy(()=>{g()},1e4);return()=>{o=!0,a==null||a(),i!==void 0&&clearTimeout(i),clearInterval(_),s==null||s.abort()}}var c6=`.styles-module__surface___7qnpJ {
  padding: 0;
  width: var(--preview-width, 200px);
  max-width: calc(100vw - 24px);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  z-index: inherit;
  will-change: auto;
  transform: translateX(-50%);
  transition: left 200ms cubic-bezier(0.2, 0.8, 0.2, 1), top 200ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), width 200ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 100ms ease-out, visibility 0s 200ms;
}
.styles-module__surface___7qnpJ[data-positioning] {
  transition: none;
}
.styles-module__surface___7qnpJ[data-direct-entry] *, .styles-module__surface___7qnpJ[data-direct-entry] *::before, .styles-module__surface___7qnpJ[data-direct-entry] *::after {
  transition: none !important;
}
.styles-module__surface___7qnpJ[data-state=preview], .styles-module__surface___7qnpJ[data-state=edit] {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}
.styles-module__surface___7qnpJ[data-state=edit], .styles-module__surface___7qnpJ[data-annotation-popup][data-state=hidden] {
  width: 280px;
  border-radius: 16px;
}
.styles-module__surface___7qnpJ[data-state=edit] {
  pointer-events: auto;
}
.styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__surface___7qnpJ {
    transition: opacity 100ms ease-out, visibility 0s 100ms;
  }
}`,u6={surface:"styles-module__surface___7qnpJ"},d6=(0,In.forwardRef)(function({annotation:t,editing:n,exiting:l,restorePreview:o,editorProps:a,lightMode:i,scrollY:r,onExited:s},d){let g=(0,In.useRef)({annotation:t,editorProps:a}),h=t!=null?t:g.current.annotation,_=t?a:g.current.editorProps,p=(0,In.useRef)(null),S=(0,In.useRef)(null),T=(0,In.useRef)(),D=(0,In.useRef)(r),x=n&&!l?"edit":t&&(!n||o)?"preview":"hidden",k=x==="preview"||!n;return(0,In.useLayoutEffect)(()=>{t&&(g.current={annotation:t,editorProps:a})},[t,a]),(0,In.useLayoutEffect)(()=>{let v=p.current;if(!v||!h)return;let m=x==="edit"&&(T.current!==h.id||v.dataset.state==="hidden"&&getComputedStyle(v).opacity==="0");m&&(v.dataset.directEntry="true");let z=()=>{let V=h.x/100*window.innerWidth,H=h.isFixed?h.y:h.y-r,K=x==="preview"||!n,oe=parseFloat(v.style.getPropertyValue("--preview-width"))||200,P=Math.min(oe,window.innerWidth-24),he=Math.max(12,Math.min(window.innerWidth-P-12,V-P/2)),ne=K?P:Math.min(280,window.innerWidth-24),ue=Math.min(K?12:20,(window.innerWidth-ne)/2),ye=H>window.innerHeight-(K?101:290);v.style.left=`${Math.max(ue,Math.min(window.innerWidth-ne-ue,he))}px`,v.style.right="auto",v.style.top=`${Math.max(12,Math.min(window.innerHeight-12,H+(ye?-21:21)))}px`,v.style.bottom="auto",v.style.transform=ye?"translateY(-100%)":"translateY(0)",v.style.maxHeight=`${Math.max(100,ye?H-33:window.innerHeight-H-33)}px`},Q=T.current!==h.id||D.current!==r||v.dataset.state==="hidden";Q&&(v.dataset.positioning="true"),z(),(Q||m)&&v.getBoundingClientRect(),delete v.dataset.positioning,delete v.dataset.directEntry,v.dataset.state=x,v.inert=x!=="edit",T.current=h.id,D.current=r;let L=()=>{v.dataset.positioning="true",z(),v.getBoundingClientRect(),delete v.dataset.positioning};return window.addEventListener("resize",L),()=>window.removeEventListener("resize",L)},[h==null?void 0:h.id,h==null?void 0:h.x,h==null?void 0:h.y,h==null?void 0:h.isFixed,x,n,r,h==null?void 0:h.comment]),(0,In.useLayoutEffect)(()=>{var v;n&&!l&&((v=S.current)==null||v.focus())},[n,l,h==null?void 0:h.id]),C0(p,l,s),(0,In.useImperativeHandle)(d,()=>({shake(){var v,m,z;(m=(v=p.current)==null?void 0:v.animate)==null||m.call(v,[{translate:"0px"},{translate:"-3px"},{translate:"3px"},{translate:"-2px"},{translate:"2px"},{translate:"0px"}],{duration:250}),(z=S.current)==null||z.focus()}}),[]),!h||!_?null:(0,w0.jsx)("div",{ref:p,className:`${He.popup} ${u6.surface} ${i?He.light:""}`,"data-feedback-toolbar":!0,"data-annotation-card":!0,"data-annotation-popup":n?"":void 0,"data-state":"hidden","aria-hidden":x==="hidden",onClick:v=>v.stopPropagation(),onKeyDownCapture:v=>{v.key!=="Escape"||v.nativeEvent.isComposing||!n||(v.preventDefault(),v.stopPropagation(),_.onCancel())},children:(0,w0.jsx)(r5,{ref:S,..._,variant:"card",preview:k,resetOnPreview:!n,disabled:!n||l},h.id)})}),_6=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1;
  text-align: center;
  appearance: none;
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7 > * {
  pointer-events: none;
}
.styles-module__marker___9CKF7:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}
.styles-module__marker___9CKF7:hover, .styles-module__marker___9CKF7:focus-visible, .styles-module__marker___9CKF7.styles-module__previewVisible___imMag {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq) {
  transition: background-color 0.15s ease, transform 0.1s ease, z-index 0s 0.1s;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):focus-visible, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq).styles-module__previewVisible___imMag {
  transition-delay: 0s;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
  animation: styles-module__markerConfirm___RT4Sk 220ms ease-out both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U.styles-module__exit___KBdR3 {
  animation-duration: 150ms;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

@keyframes styles-module__markerConfirm___RT4Sk {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(0.94);
  }
  65% {
    transform: translate(-50%, -50%) scale(1.06);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.styles-module__number___1JFu9 {
  display: block;
}

.styles-module__numberGlyph___qchdk {
  display: block;
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 140ms ease-out, transform 180ms cubic-bezier(0.22, 1, 0.36, 1), filter 140ms ease-out;
}

.styles-module__actionGlyph___AFRt0 {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(2px) scale(0.8) rotate(-12deg);
  filter: blur(1px);
  transition: opacity 120ms ease-out, transform 160ms cubic-bezier(0.22, 1, 0.36, 1), filter 120ms ease-out;
}

.styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(-2px) scale(0.8);
  filter: blur(1px);
}
.styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0);
  filter: blur(0);
}

.styles-module__plus___xslMP {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
  filter: blur(1px);
  transition: opacity 100ms ease-out, transform 140ms ease-out, filter 100ms ease-out;
  pointer-events: none;
}

.styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(2px);
}
.styles-module__pending___BiY-U .styles-module__plus___xslMP {
  opacity: 1;
  transform: rotate(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__marker___9CKF7.styles-module__enter___8kI3q, .styles-module__marker___9CKF7.styles-module__exit___KBdR3, .styles-module__marker___9CKF7.styles-module__clearing___8rM7K, .styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
  .styles-module__numberGlyph___qchdk, .styles-module__actionGlyph___AFRt0, .styles-module__plus___xslMP {
    transition: opacity 100ms ease-out;
    transform: none;
    filter: none;
  }
  .styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk, .styles-module__pending___BiY-U .styles-module__plus___xslMP,
  .styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk, .styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
    transform: none;
    filter: none;
  }
}`,yn={marker:"styles-module__marker___9CKF7",previewVisible:"styles-module__previewVisible___imMag",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",confirm:"styles-module__confirm___BtMvq",markerIn:"styles-module__markerIn___x4G8D",markerConfirm:"styles-module__markerConfirm___RT4Sk",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",number:"styles-module__number___1JFu9",numberGlyph:"styles-module__numberGlyph___qchdk",actionGlyph:"styles-module__actionGlyph___AFRt0",actionVisible:"styles-module__actionVisible___Kb--l",plus:"styles-module__plus___xslMP"},Xy=(0,wl.memo)(function({annotation:t,pending:n=!1,globalIndex:l,layerIndex:o,layerSize:a,isExiting:i,isClearing:r,isAnimated:s,isNew:d,isHovered:g,isRemoving:h,onRemoveComplete:_,isEditingAny:p,renumberFrom:S,markerClickBehavior:T,onHoverEnter:D,onEnterComplete:x,onHoverLeave:k,onClick:v,onContextMenu:m}){let[z,Q]=(0,wl.useState)(s),L=(0,wl.useRef)(n),[V,H]=(0,wl.useState)(!1),K=L.current&&!n&&z&&!V;(0,wl.useLayoutEffect)(()=>{i&&Q(!1)},[i]);let oe=(0,wl.useRef)(null),P=(0,wl.useRef)({action:!1,delete:!1}),he=g&&!p,ne=he&&T==="delete";(0,wl.useLayoutEffect)(()=>{h||(P.current={action:he,delete:ne})},[h,he,ne]);let ue=h?P.current.action:he,ye=h?P.current.delete:ne;C0(oe,h,()=>_(t.id));let At=t.isMultiSelect,Ne=At?"var(--agentation-color-green)":"var(--agentation-color-accent)",ft=r?yn.clearing:i||h?yn.exit:K?yn.confirm:!s&&!z?yn.enter:"",Oe=r?`${Math.min(o*20,120)}ms`:h||n||K?"0ms":i?`${(a-1-o)*20}ms`:`${d?0:o*20}ms`;return(0,Gl.jsxs)("button",{ref:oe,type:"button","aria-label":n?"Pending annotation":`${T==="delete"?"Delete":"Edit"} annotation ${l+1}: ${t.element}`,disabled:n||i||h||r,tabIndex:n||p?-1:0,className:`${yn.marker} ${n?yn.pending:""} ${At?yn.multiSelect:""} ${ft} ${!n&&ue?yn.actionVisible:""} ${ye?yn.hovered:""} ${g&&!p&&!h?yn.previewVisible:""}`,"data-annotation-marker":n?void 0:"","data-annotation-pending":n?"":void 0,style:{left:`${t.x}%`,top:t.y,backgroundColor:ye?void 0:Ne,animationDelay:Oe},onAnimationEnd:_t=>{_t.target===_t.currentTarget&&(ft===yn.enter||ft===yn.confirm)&&(Q(!0),n||H(!0),n||x(t.id))},onMouseOver:()=>{n||D(t)},onMouseOut:_t=>{let Zt=_t.relatedTarget;(!(Zt instanceof Node)||!_t.currentTarget.contains(Zt))&&k(t.id)},onFocus:_t=>{!n&&_t.currentTarget.matches(":focus-visible")&&D(t)},onBlur:()=>k(t.id),onClick:_t=>{_t.stopPropagation(),!n&&!i&&!h&&v(t,_t.currentTarget)},onContextMenu:m?_t=>{T==="delete"&&(_t.preventDefault(),_t.stopPropagation(),!n&&!i&&!h&&m(t,_t.currentTarget))}:void 0,children:[(0,Gl.jsx)("span",{className:`${yn.number} ${S!==null&&l>=S?yn.renumber:""}`,"aria-hidden":"true",children:(0,Gl.jsx)("span",{className:yn.numberGlyph,children:l+1})},l),(0,Gl.jsx)("span",{className:yn.actionGlyph,"aria-hidden":"true",children:T==="delete"?(0,Gl.jsx)(Nv,{size:At?18:16}):(0,Gl.jsx)(Lv,{size:16})}),L.current&&(0,Gl.jsx)("span",{className:yn.plus,"aria-hidden":"true",children:(0,Gl.jsx)(wv,{size:12})})]})}),f6=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB[data-checked] .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,s0={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"},c0=({className:e="",checked:t,onChange:n,...l})=>(0,Es.jsxs)("div",{className:`${s0.switchContainer} ${e}`,"data-checked":t?"":void 0,children:[(0,Es.jsx)("input",{className:s0.switchInput,checked:t,onChange:n,type:"checkbox",...l}),(0,Es.jsx)("div",{className:s0.switchThumb})]}),h6=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk[data-checked] .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Ou={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"},m6=({className:e="",checked:t,onChange:n,...l})=>(0,Ii.jsxs)("div",{className:`${Ou.checkboxContainer} ${e}`,"data-checked":t?"":void 0,children:[(0,Ii.jsx)("input",{className:Ou.checkboxInput,type:"checkbox",checked:t,onChange:n,...l}),(0,Ii.jsx)("svg",{className:Ou.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,Ii.jsx)("path",{className:Ou.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),g6=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,qy={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"},Wy=({className:e="",label:t,tooltip:n,checked:l,onChange:o,...a})=>{let i=(0,w5.useId)();return(0,Qi.jsxs)("div",{className:`${qy.container} ${e}`,...a,children:[(0,Qi.jsx)(m6,{id:i,onChange:o,checked:l}),(0,Qi.jsx)("label",{className:qy.label,htmlFor:i,children:t}),n&&(0,Qi.jsx)(La,{content:n})]})},p6=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- :where(button, a, input, select, textarea):focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 2px;
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 253px;
  max-width: calc(100vw - 20px);
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn- {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__settingsPanel___qNkn-[data-panel-present=true] {
  visibility: visible;
}
.styles-module__settingsPanel___qNkn-[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__settingsPanel___qNkn- {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__settingsPanel___qNkn-.styles-module__below___Vpv-k {
  --panel-offset-y: -4px;
  --panel-origin: top right;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.0094em;
  color: #bbb;
  text-decoration: none;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 6px;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: auto;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #333;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,fe={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",below:"styles-module__below___Vpv-k",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"},y6=(0,Po.memo)(function({settings:t,onSettingsChange:n,isDarkMode:l,onToggleTheme:o,isDevMode:a,connectionStatus:i,endpoint:r,onExited:s,isOpen:d,toolbarNearBottom:g,settingsPage:h,onSettingsPageChange:_,onHideToolbar:p}){var v;let{ref:S}=u5(d,{keepMounted:!0,onExited:s}),T=(0,Po.useRef)(null),D=(0,Po.useRef)(null),x=(0,Po.useRef)(!1);(0,Po.useLayoutEffect)(()=>{var m;!d||!x.current||(x.current=!1,(m=(h==="automations"?D:T).current)==null||m.focus())},[d,h]);let k=l?"Switch to light mode":"Switch to dark mode";return(0,ce.jsx)("div",{className:`${fe.settingsPanel} ${g?fe.below:""}`,style:g?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,ref:m=>{S.current=m,m==null||m.toggleAttribute("inert",!d)},role:"group","aria-label":"Feedback settings","aria-hidden":!d,children:(0,ce.jsxs)("div",{className:fe.settingsPanelContainer,children:[(0,ce.jsxs)("div",{className:`${fe.settingsPage} ${h==="automations"?fe.slideLeft:""}`,ref:m=>{m==null||m.toggleAttribute("inert",h!=="main")},"aria-hidden":h!=="main",children:[(0,ce.jsxs)("div",{className:fe.settingsHeader,children:[(0,ce.jsx)("a",{className:fe.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Agentation",children:"Agentation"}),(0,ce.jsxs)("p",{className:fe.settingsVersion,children:["v","3.1.2"]}),(0,ce.jsx)("button",{className:fe.themeToggle,onClick:o,title:k,"aria-label":k,children:(0,ce.jsx)("span",{className:fe.themeIconWrapper,children:(0,ce.jsx)("span",{className:fe.themeIcon,children:l?(0,ce.jsx)(Dv,{size:20}):(0,ce.jsx)(Av,{size:20})},l?"sun":"moon")})})]}),(0,ce.jsx)("div",{className:fe.divider}),(0,ce.jsxs)("div",{className:fe.settingsSection,children:[(0,ce.jsxs)("div",{className:fe.settingsRow,children:[(0,ce.jsxs)("div",{className:fe.settingsLabel,children:["Output Detail",(0,ce.jsx)(La,{content:"Controls how much detail is included in the copied output"})]}),(0,ce.jsxs)("button",{className:fe.cycleButton,onClick:()=>{let z=(xs.findIndex(Q=>Q.value===t.outputDetail)+1)%xs.length;n({outputDetail:xs[z].value})},children:[(0,ce.jsx)("span",{className:fe.cycleButtonText,children:(v=xs.find(m=>m.value===t.outputDetail))==null?void 0:v.label},t.outputDetail),(0,ce.jsx)("span",{className:fe.cycleDots,children:xs.map(m=>(0,ce.jsx)("span",{className:`${fe.cycleDot} ${t.outputDetail===m.value?fe.active:""}`},m.value))})]})]}),(0,ce.jsxs)("div",{className:`${fe.settingsRow} ${fe.settingsRowMarginTop} ${a?"":fe.settingsRowDisabled}`,children:[(0,ce.jsxs)("div",{className:fe.settingsLabel,children:["React Components",(0,ce.jsx)(La,{content:a?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,ce.jsx)(c0,{"aria-label":"React Components",checked:a&&t.reactEnabled,onChange:m=>n({reactEnabled:m.target.checked}),disabled:!a})]}),(0,ce.jsxs)("div",{className:`${fe.settingsRow} ${fe.settingsRowMarginTop}`,children:[(0,ce.jsxs)("div",{className:fe.settingsLabel,children:["Hide Until Restart",(0,ce.jsx)(La,{content:"Hides the toolbar until you open a new tab"})]}),(0,ce.jsx)(c0,{"aria-label":"Hide Until Restart",checked:!1,onChange:m=>{m.target.checked&&p()}})]})]}),(0,ce.jsx)("div",{className:fe.divider}),(0,ce.jsxs)("div",{className:fe.settingsSection,children:[(0,ce.jsx)("div",{className:`${fe.settingsLabel} ${fe.settingsLabelMarker}`,children:"Marker Color"}),(0,ce.jsx)("div",{className:fe.colorOptions,children:Ss.map(m=>(0,ce.jsx)("button",{className:`${fe.colorOption} ${t.annotationColorId===m.id?fe.selected:""}`,style:{"--swatch":m.srgb,"--swatch-p3":m.p3},onClick:()=>n({annotationColorId:m.id}),title:m.label,"aria-label":m.label,type:"button"},m.id))})]}),(0,ce.jsx)("div",{className:fe.divider}),(0,ce.jsxs)("div",{className:fe.settingsSection,children:[(0,ce.jsx)(Wy,{className:"checkbox-field",label:"Clear on copy/send",checked:t.autoClearAfterCopy,onChange:m=>n({autoClearAfterCopy:m.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,ce.jsx)(Wy,{className:fe.checkboxField,label:"Block page interactions",checked:t.blockInteractions,onChange:m=>n({blockInteractions:m.target.checked})})]}),(0,ce.jsx)("div",{className:fe.divider}),(0,ce.jsxs)("button",{className:fe.settingsNavLink,ref:T,onClick:m=>{x.current=m.detail===0,m.currentTarget.blur(),_("automations")},children:[(0,ce.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,ce.jsxs)("span",{className:fe.settingsNavLinkRight,children:[r&&i!=="disconnected"&&(0,ce.jsx)("span",{className:`${fe.mcpNavIndicator} ${fe[i]}`}),(0,ce.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,ce.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,ce.jsxs)("div",{className:`${fe.settingsPage} ${fe.automationsPage} ${h==="automations"?fe.slideIn:""}`,ref:m=>{m==null||m.toggleAttribute("inert",h!=="automations")},"aria-hidden":h!=="automations",children:[(0,ce.jsxs)("button",{className:fe.settingsBackButton,ref:D,"aria-label":"Back to settings",onClick:m=>{x.current=m.detail===0,m.currentTarget.blur(),_("main")},children:[(0,ce.jsx)(Ov,{size:16}),(0,ce.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,ce.jsx)("div",{className:fe.divider}),(0,ce.jsxs)("div",{className:fe.settingsSection,children:[(0,ce.jsxs)("div",{className:fe.settingsRow,children:[(0,ce.jsxs)("span",{className:fe.automationHeader,children:["MCP Connection",(0,ce.jsx)(La,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),r&&(0,ce.jsx)("div",{className:`${fe.mcpStatusDot} ${fe[i]}`,title:i==="connected"?"Connected":i==="connecting"?"Connecting...":"Disconnected"})]}),(0,ce.jsxs)("p",{className:fe.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,ce.jsx)("a",{href:"https://agentation.com/mcp",target:"_blank",rel:"noopener noreferrer",className:fe.learnMoreLink,children:"Learn more"})]})]}),(0,ce.jsx)("div",{className:fe.divider}),(0,ce.jsxs)("div",{className:`${fe.settingsSection} ${fe.settingsSectionGrow}`,children:[(0,ce.jsxs)("div",{className:fe.settingsRow,children:[(0,ce.jsxs)("span",{className:fe.automationHeader,children:["Webhooks",(0,ce.jsx)(La,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,ce.jsxs)("div",{className:fe.autoSendContainer,children:[(0,ce.jsx)("label",{htmlFor:"agentation-auto-send",className:`${fe.autoSendLabel} ${t.webhooksEnabled?fe.active:""} ${t.webhookUrl?"":fe.disabled}`,children:"Auto-Send"}),(0,ce.jsx)(c0,{id:"agentation-auto-send",checked:t.webhooksEnabled,onChange:m=>n({webhooksEnabled:m.target.checked}),disabled:!t.webhookUrl})]})]}),(0,ce.jsx)("p",{className:fe.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,ce.jsx)("textarea",{className:fe.webhookUrlInput,placeholder:"Webhook URL","aria-label":"Webhook URL",value:t.webhookUrl,onKeyDown:m=>m.stopPropagation(),onChange:m=>n({webhookUrl:m.target.value})})]})]})]})})});function b6({x:e,y:t,elementName:n,reactComponents:l}){let o=(0,Iu.useRef)(null);return(0,Iu.useLayoutEffect)(()=>{let a=o.current;if(!a)return;let i=()=>{let r=a.offsetWidth,s=a.offsetHeight;a.style.left=`${Math.max(8,Math.min(e,window.innerWidth-r-8))}px`;let d=t-s-8;a.style.top=`${Math.max(8,Math.min(d,window.innerHeight-s-8))}px`};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[e,t,n,l]),(0,Ts.jsxs)("div",{ref:o,className:`${j.hoverTooltip} ${j.enter}`,children:[l&&(0,Ts.jsx)("div",{className:j.hoverReactPath,children:l}),(0,Ts.jsx)("div",{className:j.hoverElementName,children:n})]})}var x6=`@charset "UTF-8";
/* Reset box-model and set borders */
/* ============================================ */
*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

/* Document */
/* ============================================ */
/**
 * 1. Correct line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 * 4. Render kerning consistently in all browsers.
 * 5. Correct font smoothing for macOS.
 */
:host {
  /* Inherited properties cross the shadow boundary, so a host page's
     text-transform, letter-spacing or font would otherwise restyle the UI. */
  font: 400 16px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-variant: normal;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  white-space: normal;
  direction: ltr;
  writing-mode: horizontal-tb;
  hyphens: manual;
  word-break: normal;
  overflow-wrap: normal;
  tab-size: 8;
  list-style: none;
  quotes: initial;
  caret-color: auto;
  user-select: auto;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke: 0;
  text-rendering: auto;
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3 */
  font-feature-settings: "kern"; /* 4 */
  -webkit-font-feature-settings: "kern"; /* 5 */
  -moz-font-feature-settings: "kern"; /* 5 */
  -webkit-font-smoothing: antialiased; /* 5 */
  -moz-osx-font-smoothing: grayscale; /* 5 */
}

/* Vertical rhythm */
/* ============================================ */
p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

/* Lists (enumeration) */
/* ============================================ */
ul,
ol,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Lists (definition) */
/* ============================================ */
dd {
  margin-left: 0;
}

/* Grouping content */
/* ============================================ */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  clear: both;
  margin: 0;
  border-top-width: 1px;
  height: 0; /* 1 */
  box-sizing: content-box; /* 1 */
  overflow: visible; /* 2 */
  color: inherit;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 * 3. Wrap lines by default instead of overflow.
 */
pre {
  font-family: inherit; /* 1 */
  font-size: inherit; /* 2 */
  white-space: pre-line; /* 3 */
}

address {
  font-style: inherit;
}

/* Text-level semantics */
/* ============================================ */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: none; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace; /* 1 */
  font-size: inherit; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
 */
sub,
sup {
  position: relative;
  vertical-align: baseline;
  line-height: 0;
  font-size: 75%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Replaced content */
/* ============================================ */
/**
 * Prevent vertical alignment issues.
 */
svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}

/*
 * 1. Remove image default bottom space.
 * 2. Prevent image from overflowing the container.
 */
img {
  display: block;
  max-width: 100%;
}

/**
 * Prevent alignment issues on Safari.
 */
@supports (background: -webkit-named-image(i)) {
  svg {
    will-change: transform;
  }
}
/* Forms */
/* ============================================ */
/**
 * Reset form fields to make them styleable.
 * 1. Make form elements stylable across systems iOS especially.
 * 2. Inherit text-transform from parent.
 */
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  vertical-align: middle;
  text-align: inherit;
  text-transform: inherit; /* 2 */
  font: inherit;
  color: inherit;
}

/**
 * Correct cursors for clickable elements.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  cursor: pointer;
}

button:disabled,
[type=button]:disabled,
[type=reset]:disabled,
[type=submit]:disabled {
  cursor: default;
}

/**
 * Clickable labels and selects.
 */
select,
label {
  cursor: pointer;
}

/**
 * Improve outlines for Firefox and unify style with input elements & buttons.
 */
:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}

/**
 * 1. Remove padding.
 */
option {
  padding: 0; /* 1 */
}

/**
 * Reset to invisible
 */
fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  display: contents;
  padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * Remove increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/**
 * Correct the outline style in Safari.
 */
[type=search] {
  outline-offset: -2px;
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Remove the \u2018X\u2019 from Chrome and Safari.
 */
[type=search]::-webkit-search-decoration,
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-results-button,
[type=search]::-webkit-search-results-decoration {
  display: none;
}

/**
 * 1. Hide file input completely.
 * 2. Remove selected file text.
 * 3. Set cursor to pointer for all browsers.
 */
[type=file] {
  opacity: 0; /* 1 */
  font-size: 0; /* 2 */
  cursor: pointer; /* 3 */
}

/**
	* Fix appearance for Firefox
	*/
[type=number] {
  -moz-appearance: textfield;
}

/**
 * Set cursor to pointer for all browsers.
 */
[type=range] {
  cursor: pointer;
}

/**
 * Reset slider thumbs to make them styleable.
 */
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}

[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  border-width: 0;
  border-radius: 0;
  background-color: transparent;
}

/* Interactive */
/* ============================================ */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Remove outline for editable content.
 */
[contenteditable]:focus {
  outline: auto;
}

/* Tables */
/* ============================================ */
/**
1. Correct table border color inheritance in all Chrome and Safari.
*/
table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: inherit;
}

/* Misc */
/* ============================================ */
/*
 * Make placeholder style consistent across all browsers.
 */
::placeholder {
  color: #999;
  opacity: 1;
}

/*
 * Hide focus outline but keep it visible for Windows High Contrast Mode.
 */
:focus {
  outline-style: solid;
  outline-color: transparent;
}

/*
 * Hide input arrow when used with datalist.
 */
::-webkit-calendar-picker-indicator {
  display: none !important;
}`,v6=[x6,Hv,o5,h6,e4,$v,Wu,_6,c6,g6,p6,f6].join(`
`);function zu(e,t="filtered",n){let{name:l,path:o}=Wi(e,n);if(t==="off")return{name:l,elementName:l,path:o,reactComponents:null};let a=G4(e,{mode:t});return{name:a.path?`${a.path} ${l}`:l,elementName:l,path:o,reactComponents:a.path}}var Iy=!1,u0={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Qy=e=>{if(!e||!e.trim())return!1;try{let t=new URL(e.trim());return t.protocol==="http:"||t.protocol==="https:"}catch{return!1}},w6={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},Ko=e=>e.metaKey||e.ctrlKey,Ss=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],k6=[...Ss.map(e=>`
    [data-agentation-accent="${e.id}"] {
      --agentation-color-accent: ${e.srgb};
    }
    @supports (color: color(display-p3 0 0 0)) {
      [data-agentation-accent="${e.id}"] {
        --agentation-color-accent: ${e.p3};
      }
    }
  `),`:host {
    ${Ss.map(e=>`--agentation-color-${e.id}: ${e.srgb};`).join(`
`)}
  }`,`@supports (color: color(display-p3 0 0 0)) {
    :host {
      ${Ss.map(e=>`--agentation-color-${e.id}: ${e.p3};`).join(`
`)}
    }
  }`].join("");function d0(e){let t=e;for(let l=al(t.ownerDocument);l;l=al(t.ownerDocument))t=l;let n=t;for(;n&&n!==document.body;){let o=window.getComputedStyle(n).position;if(o==="fixed"||o==="sticky")return!0;n=n.parentElement}return!1}function vs(e){return e.kind!=="placement"&&e.kind!=="rearrange"&&e.status!=="resolved"&&e.status!=="dismissed"}function Bu(e){let t=v0(e),n=t.found?t:a6(e);if(n.found&&n.source)return o6(n.source,"path")}function S5(e={}){var o;let t=pv((o=e.useHashLocation)!=null?o:!1),n=(0,C.useState)(!1),l=xv(e.portalContainer);return l?(0,t5.createPortal)((0,k5.createElement)(S6,{...e,key:e.useHashLocation?t:void 0,pathname:t,activeState:n,portalHost:l}),l):null}function S6({pathname:e,activeState:t,portalHost:n,useHashLocation:l=!1,appName:o,enableKeyboardShortcuts:a=!0,identifyingAttributes:i=S0,copyFormat:r="markdown",onOpenSource:s,portalContainer:d,demoAnnotations:g,demoDelay:h=1e3,enableDemoMode:_=!1,onAnnotationAdd:p,onAnnotationDelete:S,onAnnotationUpdate:T,onAnnotationsClear:D,onCopy:x,onSubmit:k,copyToClipboard:v=!0,endpoint:m,sessionId:z,onSessionCreated:Q,webhookUrl:L,className:V}){var vh,wh,kh,Sh,Ch,Mh,Eh,Th,Rh;let[H,K]=t,[,oe]=(0,C.useState)(0),[P]=(0,C.useState)(()=>iv(document,()=>oe(f=>f+1)));(0,C.useEffect)(()=>(P.start(),()=>P.stop()),[P]);let he=typeof r=="object"?r.attribute:void 0,ne=(0,C.useMemo)(()=>he?[...i,he]:i,[i,he]),ue=(0,C.useRef)(!0);(0,C.useLayoutEffect)(()=>(ue.current=!0,()=>{ue.current=!1}),[]);let ye=(0,C.useCallback)(f=>l?yv(JSON.stringify([m,e]),f):f(),[m,e,l]),At=(0,C.useRef)(new Map),Ne=(0,C.useRef)(new Set),ft=f=>vs(f)&&!Ne.current.has(f.id),Oe=async(...f)=>{let y=await zy(...f),w=f[2],M=w.id;if(M&&(At.current.set(M,y.id),Ne.current.has(M)&&Ne.current.add(y.id)),!l){let O=new URL(w.url||window.location.href).pathname,R=Zo(O).find(A=>A.id===M);try{if(Ne.current.has(M))await Au(f[0],y.id);else if(R&&R.comment!==w.comment)return await i0(f[0],y.id,{comment:R.comment}),{...y,comment:R.comment}}catch(A){console.warn("[Agentation] Failed to apply changes made during sync:",A)}}return y},_t=f=>l?{...f,annotations:f.annotations.filter(y=>!Ne.current.has(y.id)&&bv(y.url||f.url,e,window.location.origin))}:f,Zt=(0,C.useRef)(e);Zt.current=e;let Tn=(f,y,w,M=e)=>{let O=ev(f,Zo(M),y,At.current).filter(ft);M===Zt.current&&ue.current&&$n(O),l0(M,O,w)},[Re,$n]=(0,C.useState)([]),[Fl,yo]=(0,C.useState)(!0),[bo,tn]=(0,C.useState)(()=>L4()),[Qn,Rn]=(0,C.useState)(!1);(0,C.useLayoutEffect)(()=>{Vy()},[]);let Qt=(0,C.useRef)(null),kl=(0,C.useRef)(null),Al=(0,C.useRef)(null),ea=(0,C.useRef)(null),il=(0,C.useRef)(!1),Zl=(0,C.useRef)(!1),Z=(0,C.useRef)(!1);(0,C.useLayoutEffect)(()=>{var f,y,w;H&&il.current?(il.current=!1,(y=(f=Al.current)==null?void 0:f.querySelector("button:not(:disabled)"))==null||y.focus()):!H&&Zl.current&&(Zl.current=!1,(w=kl.current)==null||w.focus())},[H]),(0,C.useEffect)(()=>{let f=w=>{let M=Qt.current;M&&w.composedPath().includes(M)&&w.stopPropagation()},y=["mousedown","click","pointerdown"];return y.forEach(w=>n.addEventListener(w,f)),()=>{y.forEach(w=>n.removeEventListener(w,f))}},[n]);let[pe,Te]=(0,C.useState)(!1),[Se,qe]=(0,C.useState)(!1),[De,Ue]=(0,C.useState)(null),[et,Ve]=(0,C.useState)({x:0,y:0}),[I,E]=(0,C.useState)(null),[N,Y]=(0,C.useState)(!1),W=my(),ae=my(),[ie,J]=(0,C.useState)("idle"),[ze,ge]=(0,C.useState)(!1),Ae=(0,C.useRef)(new Set),tt=(0,C.useRef)(new Set),be=(0,C.useRef)(),We=(0,C.useCallback)(()=>{!Ae.current.size&&!be.current&&ge(!1)},[]);(0,C.useEffect)(()=>()=>clearTimeout(be.current),[]);let[Le,Ct]=(0,C.useState)(null),[ot,pt]=(0,C.useState)(null),[Tt,Ke]=(0,C.useState)([]),[Ze,yt]=(0,C.useState)(null),bt=(0,C.useRef)(null);(0,C.useEffect)(()=>()=>{bt.current&&clearTimeout(bt.current)},[]);let[te,Ot]=(0,C.useState)(null),Gt=(0,C.useRef)(null),Gn=(0,C.useRef)(!1),[Nn,Dn]=(0,C.useState)(!1);(0,C.useLayoutEffect)(()=>{if(te||!Gt.current)return;let f=Gt.current;if(Gt.current=null,I)return;let y=H&&f.isConnected&&!f.disabled?f:kl.current;y==null||y.focus({preventScroll:!0})},[te,H,I]);let[Sl,xn]=(0,C.useState)(null),[An,Vn]=(0,C.useState)([]),[Fn,L0]=(0,C.useState)(0),[O0,z0]=(0,C.useState)(!1),[st,T5]=(0,C.useState)(!1),[rl,B0]=(0,C.useState)(!1),[vn,ta]=(0,C.useState)(!1),[R5,$0]=(0,C.useState)("main"),[H0,Qu]=(0,C.useState)(!1),[nt,Gu]=(0,C.useState)(!1),[na,Ki]=(0,C.useState)(!1),[Ye,Kl]=(0,C.useState)([]),[$a,la]=(0,C.useState)(null),Vu=(0,C.useRef)(!1),[Rt,U0]=(0,C.useState)(!1),[Y0,Fu]=(0,C.useState)(!1),[j0,N5]=(0,C.useState)(1),[X0,C6]=(0,C.useState)("new-page"),[wn,Ns]=(0,C.useState)(""),[D5,A5]=(0,C.useState)(!1),[ee,Ll]=(0,C.useState)(null),Zu=(0,C.useRef)(!1),Ku=(0,C.useRef)({rearrange:null,placements:[]}),oa=(0,C.useRef)({rearrange:null,placements:[]}),[L5,q0]=(0,C.useState)(0),[O5,z5]=(0,C.useState)(0),[Ha,W0]=(0,C.useState)([]),[Ua,I0]=(0,C.useState)(null),Q0=(0,C.useRef)({designPlacements:Ye,rearrangeState:ee,blankCanvas:Rt,wireframePurpose:wn});Q0.current={designPlacements:Ye,rearrangeState:ee,blankCanvas:Rt,wireframePurpose:wn};let Ya=(0,C.useRef)({placements:Ha,rearrange:Ua}),Pi=(0,C.useRef)(new Set),Ds=(0,C.useRef)(new Set),Cl=(0,C.useRef)(null),ja=(0,C.useRef)(),G0=nt&&H&&!na&&Rt;(0,C.useEffect)(()=>{if(G0){Fu(!1);let f=Uu(()=>{Fu(!0)});return()=>cancelAnimationFrame(f)}else Fu(!1)},[G0]);let Pu=(0,C.useRef)(new Map),Ju=(0,C.useRef)([]),ed=(0,C.useRef)(new Map),aa=(0,C.useRef)(null),[sl,td]=(0,C.useState)(!1),[Ml,B5]=(0,C.useState)([]),nd=(0,C.useRef)(Ml);nd.current=Ml;let[V0,M6]=(0,C.useState)(null),ld=(0,C.useRef)(null),E6=(0,C.useRef)(!1),T6=(0,C.useRef)([]),R6=(0,C.useRef)(0),N6=(0,C.useRef)(null),D6=(0,C.useRef)(null),A6=(0,C.useRef)(1),[od,F0]=(0,C.useState)(!1),Xa=(0,C.useRef)(null),[Hn,xo]=(0,C.useState)([]),Ji=(0,C.useRef)(!1),kn=()=>{Qu(!0)},$5=()=>{Qu(!1)},Z0=()=>{od||(Xa.current=it(()=>F0(!0),850))},K0=()=>{Xa.current&&(clearTimeout(Xa.current),Xa.current=null),F0(!1),$5()};(0,C.useEffect)(()=>()=>{Xa.current&&clearTimeout(Xa.current)},[]);let[at,H5]=(0,C.useState)(()=>{var f;try{let y=JSON.parse((f=localStorage.getItem("feedback-toolbar-settings"))!=null?f:"");return{...u0,...y,annotationColorId:Ss.find(w=>w.id===y.annotationColorId)?y.annotationColorId:u0.annotationColorId}}catch{return u0}}),[Ol,P0]=(0,C.useState)(!0),[J0,eh]=(0,C.useState)(!1),U5=(0,C.useCallback)(f=>{H5(y=>({...y,...f}))},[]),Y5=(0,C.useCallback)(()=>{var f;(f=Qt.current)==null||f.classList.add(j.disableTransitions),P0(y=>!y),Uu(()=>{var y;(y=Qt.current)==null||y.classList.remove(j.disableTransitions)})},[]),th=!1,Pl=th&&at.reactEnabled?w6[at.outputDetail]:"off",[nn,ad]=(0,C.useState)(l?null:z!=null?z:null),nh=(0,C.useRef)(!1),[ia,ra]=(0,C.useState)(m?"connecting":"disconnected"),[Xt,id]=(0,C.useState)(null),[As,lh]=(0,C.useState)(!1),er=(0,C.useRef)(null),Ls=(0,C.useRef)(!1),sa=(0,C.useRef)(new Set),Os=(0,C.useRef)(new Map),oh=(0,C.useCallback)(f=>{sa.current.add(f),El.current===f&&(El.current=null)},[]),[vo,zs]=(0,C.useState)(new Set),[cl,tr]=(0,C.useState)(!1),[ca,qa]=(0,C.useState)(!1),[Jl,rd]=(0,C.useState)(!1),ua=(0,C.useRef)(null),ul=(0,C.useRef)(null),nr=(0,C.useRef)(null),Wa=(0,C.useRef)(null),lr=(0,C.useRef)(!1),ah=(0,C.useRef)(0),El=(0,C.useRef)(null),ih=(0,C.useRef)(null),sd=8,j5=50,cd=(0,C.useRef)(null),Bs=(0,C.useRef)(null),or=(0,C.useRef)(null),X5=(0,C.useCallback)(()=>$0("main"),[]);(0,C.useEffect)(()=>{vn||Qu(!1)},[vn]),(0,C.useLayoutEffect)(()=>{var f,y;vn&&Z.current&&(Z.current=!1,(y=(f=Qt.current)==null?void 0:f.querySelector("[data-agentation-settings-panel] button"))==null||y.focus())},[vn]);let $s=H&&Fl&&!nt;(0,C.useEffect)(()=>{if($s)qe(!1),Te(!0),sa.current.clear();else if(pe){qe(!0);let f=it(()=>{Te(!1),qe(!1)},250);return()=>clearTimeout(f)}},[$s]),(0,C.useEffect)(()=>{T5(!0),L0(window.scrollY);let f=Zo(e);$n(f.filter(vs)),Iy||(eh(!0),Iy=!0,it(()=>eh(!1),750));try{let y=localStorage.getItem("feedback-toolbar-theme");y!==null&&P0(y==="dark")}catch{}try{let y=localStorage.getItem("feedback-toolbar-position");if(y){let w=JSON.parse(y);typeof w.x=="number"&&typeof w.y=="number"&&id(w)}}catch{}},[e]),(0,C.useEffect)(()=>{st&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(at))},[at,st]),(0,C.useEffect)(()=>{st&&localStorage.setItem("feedback-toolbar-theme",Ol?"dark":"light")},[Ol,st]);let rh=(0,C.useRef)(!1);(0,C.useEffect)(()=>{let f=rh.current;rh.current=As,f&&!As&&Xt&&st&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Xt))},[As,Xt,st]),(0,C.useEffect)(()=>{if(!m||!st||nh.current)return;nh.current=!0,ra("connecting");let f=window.location.href;ye(async()=>{try{let w=D4(e),M=z||w,O=!1;if(M)try{let R=Zo(e),A=_t(await Oy(m,M));Ju.current=A.annotations.filter(F=>F.kind==="placement"||F.kind==="rearrange"),ue.current&&(ad(A.id),ra("connected")),o0(e,A.id),O=!0;let U=Zo(e).filter(vs),le=new Set(A.annotations.map(F=>F.id)),_e=U.filter(F=>!le.has(F.id));if(_e.length>0){let de=`${typeof window!="undefined"?window.location.origin:""}${e}`,Be=(await Promise.allSettled(_e.map(ve=>Oe(m,A.id,{...ve,sessionId:A.id,url:de})))).map((ve,je)=>ve.status==="fulfilled"?ve.value:(console.warn("[Agentation] Failed to sync annotation:",ve.reason),_e[je])),me=[...A.annotations,...Be];Tn(R,me,A.id)}else Tn(R,A.annotations,A.id)}catch(R){console.warn("[Agentation] Could not join session, creating new:",R),A4(e)}if(!O){let R=await a0(m,f);o0(e,R.id),ue.current&&(ad(R.id),ra("connected"),Q==null||Q(R.id));let A=l?new Map([[e,Zo(e)]]):k4(),U=typeof window!="undefined"?window.location.origin:"",le=[];for(let[_e,F]of A){let de=F.filter(me=>vs(me)&&!me._syncedTo);if(de.length===0)continue;let xe=`${U}${_e}`,Be=_e===e;le.push((async()=>{try{let me=Be?R:await a0(m,xe),je=(await Promise.allSettled(de.map(Fe=>Oe(m,me.id,{...Fe,sessionId:me.id,url:xe})))).map((Fe,zt)=>Fe.status==="fulfilled"?Fe.value:(console.warn("[Agentation] Failed to sync annotation:",Fe.reason),de[zt]));Tn(de,je,me.id,_e)}catch(me){console.warn(`[Agentation] Failed to sync annotations for ${_e}:`,me)}})())}await Promise.allSettled(le)}}catch(w){ue.current&&ra("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",w)}})},[m,z,st,Q,e,ye]),(0,C.useEffect)(()=>{if(!m||!st)return;let f=async()=>{try{(await fetch(`${m}/health`)).ok?ra("connected"):ra("disconnected")}catch{ra("disconnected")}};f();let y=Fy(f,1e4);return()=>clearInterval(y)},[m,st]);let Hs=(0,C.useRef)(Re),sh=(0,C.useRef)(!1);(0,C.useLayoutEffect)(()=>{var f;Hs.current=Re,sh.current=Re.length>0||Ye.length>0||((f=ee==null?void 0:ee.sections.length)!=null?f:0)>0},[Re,Ye.length,ee==null?void 0:ee.sections.length]);let ud=(0,C.useCallback)(f=>{let y=Ae.current.has(f);if(y&&(tt.current.delete(f),tt.current.size))return;let w=y?new Set(Ae.current):new Set([f]);y&&(Ae.current.clear(),We());for(let R of w)Os.current.delete(R),sa.current.delete(R);$n(R=>R.filter(A=>!w.has(A.id))),zs(R=>new Set([...R].filter(A=>!w.has(A))));let M=y?[]:Hs.current.filter(R=>R.kind!=="placement"&&R.kind!=="rearrange"),O=M.findIndex(R=>R.id===f);O>=0&&O<M.length-1&&(yt(R=>R===null?O:Math.min(R,O)),bt.current&&clearTimeout(bt.current),bt.current=it(()=>yt(null),200))},[We]);(0,C.useEffect)(()=>!m||!st||!nn?void 0:s6(m,nn,()=>sh.current,w=>{var R,A;let{id:M,kind:O}=w;if(O==="placement"){for(let[U,le]of Pu.current)if(le===M){(R=aa.current)==null||R.placements.forget(U),Kl(_e=>_e.filter(F=>F.id!==U));break}}else if(O==="rearrange"){for(let[U,le]of ed.current)if(le===M){(A=aa.current)==null||A.rearrange.forget(U),Ll(_e=>{if(!_e)return null;let F=_e.sections.filter(de=>de.id!==U);return F.length===0?null:{..._e,sections:F}});break}}else{if(!Hs.current.some(U=>U.id===M))return;zs(U=>new Set(U).add(M))}}),[m,st,nn]),(0,C.useEffect)(()=>{if(!m||!st)return;let f=ih.current==="disconnected",y=ia==="connected";ih.current=ia,f&&y&&ye(async()=>{try{let M=Zo(e).filter(vs);if(M.length===0)return;let R=`${typeof window!="undefined"?window.location.origin:""}${e}`,A=nn,U=[];if(A)try{U=_t(await Oy(m,A)).annotations}catch{A=null}A||(A=(await a0(m,R)).id,ue.current&&ad(A),o0(e,A));let le=new Set(U.map(F=>F.id)),_e=M.filter(F=>!le.has(F.id));if(_e.length>0){let de=(await Promise.allSettled(_e.map(Be=>Oe(m,A,{...Be,sessionId:A,url:R})))).map((Be,me)=>Be.status==="fulfilled"?Be.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Be.reason),_e[me])),xe=[...U,...de];Tn(M,xe,A)}}catch(M){console.warn("[Agentation] Failed to sync on reconnect:",M)}})},[ia,m,st,nn,e,ye]);let q5=(0,C.useCallback)(()=>{Qn||(Rn(!0),ta(!1),K(!1),it(()=>{O4(!0),tn(!0),Rn(!1)},400))},[Qn]);(0,C.useEffect)(()=>{if(!_||!st||!g||g.length===0||Re.length>0)return;let f=[];return f.push(it(()=>{K(!0)},h-200)),g.forEach((y,w)=>{let M=h+w*300;f.push(it(()=>{let O=document.querySelector(y.selector);if(!O)return;let R=en(O),{name:A,path:U}=Wi(O),le={id:`demo-${Date.now()}-${w}`,x:(R.left+R.width/2)/window.innerWidth*100,y:R.top+R.height/2+window.scrollY,comment:y.comment,element:A,elementPath:U,timestamp:Date.now(),selectedText:y.selectedText,boundingBox:{x:R.left,y:R.top+window.scrollY,width:R.width,height:R.height},nearbyText:gs(O),cssClasses:ps(O)};$n(_e=>[..._e,le])},M))}),()=>{f.forEach(clearTimeout)}},[_,st,g,h]),(0,C.useEffect)(()=>{let f=()=>{L0(window.scrollY),oe(y=>y+1),z0(!0),or.current&&clearTimeout(or.current),or.current=it(()=>{z0(!1)},150)};return P.addEventListener("scroll",f,{passive:!0,capture:!0}),()=>{P.removeEventListener("scroll",f,!0),or.current&&clearTimeout(or.current)}},[P]),(0,C.useEffect)(()=>{if(!st)return;let f=Re.filter(y=>!vo.has(y.id));f.length>0?nn?l0(e,f,nn):x5(e,f):localStorage.removeItem(T0(e))},[Re,e,st,nn,ze,vo]),(0,C.useEffect)(()=>{if(st&&!Vu.current){Vu.current=!0;let f=S4(e);f.length>0&&Kl(f)}},[st,e]),(0,C.useEffect)(()=>{if(st&&Vu.current&&!Rt){let f=Ye.filter(y=>!Ha.includes(y));f.length>0?C4(e,f):M4(e)}},[Ye,e,st,Rt,Ha]),(0,C.useEffect)(()=>{if(st&&!Zu.current){Zu.current=!0;let f=E4(e);if(f){let y={...f,sections:f.sections.map(w=>{var M;return{...w,currentRect:(M=w.currentRect)!=null?M:{...w.originalRect}}})};Ll(y)}}},[st,e]),(0,C.useEffect)(()=>{st&&Zu.current&&!Rt&&(ee&&ee!==Ua?T4(e,ee):R4(e))},[ee,e,st,Rt,Ua]);let dd=(0,C.useRef)(!1);(0,C.useEffect)(()=>{if(st&&!dd.current){dd.current=!0;let f=N4(e);f&&(oa.current={rearrange:f.rearrange,placements:f.placements||[]},f.purpose&&Ns(f.purpose))}},[st,e]),(0,C.useEffect)(()=>{var y,w,M,O,R;if(!st||!dd.current||ze)return;let f=oa.current;Rt?((w=(y=ee==null?void 0:ee.sections)==null?void 0:y.length)!=null?w:0)>0||Ye.length>0||wn?Ly(e,{rearrange:ee,placements:Ye,purpose:wn}):Du(e):((R=(O=(M=f.rearrange)==null?void 0:M.sections)==null?void 0:O.length)!=null?R:0)>0||f.placements.length>0||wn?Ly(e,{rearrange:f.rearrange,placements:f.placements,purpose:wn}):Du(e)},[ee,Ye,wn,Rt,e,st,ze]),(0,C.useEffect)(()=>{nt&&!ee&&Ll({sections:[],originalOrder:[],detectedAt:Date.now()})},[nt,ee]),(0,C.useEffect)(()=>{if(!m||!nn)return;let f={create:w=>ye(()=>zy(m,nn,w)),update:(w,M)=>ye(()=>i0(m,w,M)),remove:w=>ye(()=>Au(m,w))};Pu.current=new Map,ed.current=new Map;let y={placements:jy(f,Pu.current,Ju.current.filter(w=>w.kind==="placement")),rearrange:jy(f,ed.current,Ju.current.filter(w=>w.kind==="rearrange"))};return aa.current=y,()=>{y.placements.dispose(),y.rearrange.dispose(),aa.current===y&&(aa.current=null)}},[m,nn,e,ye]),(0,C.useEffect)(()=>{var y;let f=window.location.pathname+window.location.search+window.location.hash;(y=aa.current)==null||y.placements.replace(Ye.filter(w=>!Ha.includes(w)).map(w=>({id:w.id,x:w.x/window.innerWidth*100,y:w.y,comment:`Place ${w.type} at (${Math.round(w.x)}, ${Math.round(w.y)}), ${w.width}\xD7${w.height}px${w.text?` \u2014 "${w.text}"`:""}`,element:`[design:${w.type}]`,elementPath:"[placement]",timestamp:w.timestamp,url:f,intent:"change",severity:"important",kind:"placement",placement:{componentType:w.type,width:w.width,height:w.height,scrollY:w.scrollY,text:w.text}})))},[Ye,m,nn,e,Ha]),(0,C.useEffect)(()=>{let f=aa.current;if(!f)return;if(ee===Ua){f.rearrange.replace([]);return}let y=it(()=>{var O;let w=window.location.pathname+window.location.search+window.location.hash,M=[];for(let R of(O=ee==null?void 0:ee.sections)!=null?O:[]){let A=R.originalRect,U=R.currentRect,le=Math.abs(A.x-U.x)>1||Math.abs(A.y-U.y)>1||Math.abs(A.width-U.width)>1||Math.abs(A.height-U.height)>1;if(!le&&!R.note)continue;let _e=R.note?` \u2014 "${R.note}"`:"";M.push({id:R.id,x:U.x/window.innerWidth*100,y:U.y,comment:le?`Move ${R.label} section (${R.tagName}) \u2014 from (${Math.round(A.x)},${Math.round(A.y)}) ${Math.round(A.width)}\xD7${Math.round(A.height)} to (${Math.round(U.x)},${Math.round(U.y)}) ${Math.round(U.width)}\xD7${Math.round(U.height)}${_e}`:`Note on ${R.label} section (${R.tagName})${_e}`,element:R.selector,elementPath:"[rearrange]",timestamp:ee.detectedAt,url:w,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:R.selector,label:R.label,tagName:R.tagName,originalRect:A,currentRect:U}})}f.rearrange.replace(M)},300);return()=>clearTimeout(y)},[ee,m,nn,e,Ua]);let _d=(0,C.useCallback)(()=>{clearTimeout(ja.current),Ki(!1),Gu(!0)},[]);(0,C.useEffect)(()=>()=>clearTimeout(ja.current),[]);let ar=(0,C.useCallback)(()=>{Ki(!0),Gu(!1),la(null),clearTimeout(ja.current),ja.current=it(()=>{Ki(!1)},300)},[]),Us=(0,C.useCallback)(()=>{var y,w,M;let f=(y=kl.current)==null?void 0:y.getRootNode();Zl.current=!!(f!=null&&f.activeElement)&&!!((w=Qt.current)!=null&&w.contains(f.activeElement)),Zl.current&&((M=f==null?void 0:f.activeElement)==null||M.blur()),ta(!1),nt&&(Ki(!0),Gu(!1),la(null),clearTimeout(ja.current),ja.current=it(()=>{Ki(!1)},300)),K(!1)},[nt]),ch=(0,C.useCallback)(()=>{rl||(Jx(),B0(!0))},[rl]),Ys=(0,C.useCallback)(()=>{rl&&(hy(),B0(!1))},[rl]),fd=(0,C.useCallback)(()=>{rl?Ys():ch()},[rl,ch,Ys]),ir=(0,C.useCallback)((f=Hn)=>{let y=f.filter(A=>A.element.isConnected);if(y.length===0){xo([]);return}let w=y[0],M=w.element,O=y.length>1,R=y.map(A=>en(A.element));if(O){let A={left:Math.min(...R.map(je=>je.left)),top:Math.min(...R.map(je=>je.top)),right:Math.max(...R.map(je=>je.right)),bottom:Math.max(...R.map(je=>je.bottom))},U=y.slice(0,5).map(je=>je.name).join(", "),le=y.length>5?` +${y.length-5} more`:"",_e=R.map(je=>({x:je.left,y:je.top+window.scrollY,width:je.width,height:je.height})),de=y[y.length-1].element,xe=R[R.length-1],Be=xe.left+xe.width/2,me=xe.top+xe.height/2,ve=d0(de);E({id:Date.now().toString(),x:Be/window.innerWidth*100,y:ve?me:me+window.scrollY,clientY:me,element:`${y.length} elements: ${U}${le}`,elementPath:"multi-select",boundingBox:{x:A.left,y:A.top+window.scrollY,width:A.right-A.left,height:A.bottom-A.top},isMultiSelect:!0,isFixed:ve,elementBoundingBoxes:_e,multiSelectElements:y.map(je=>je.element),targetElement:de,fullPath:ks(M),accessibility:Cu(M),computedStyles:Su(M),computedStylesObj:ku(M),nearbyElements:wu(M),cssClasses:ps(M),nearbyText:gs(M),sourceFile:Bu(M),attributes:ws(M,ne)})}else{let A=R[0],U=d0(M);E({id:Date.now().toString(),x:A.left/window.innerWidth*100,y:U?A.top:A.top+window.scrollY,clientY:A.top,element:w.name,elementPath:w.path,boundingBox:{x:A.left,y:U?A.top:A.top+window.scrollY,width:A.width,height:A.height},isFixed:U,fullPath:ks(M),accessibility:Cu(M),computedStyles:Su(M),computedStylesObj:ku(M),nearbyElements:wu(M),cssClasses:ps(M),nearbyText:gs(M),reactComponents:w.reactComponents,targetElement:M,sourceFile:Bu(M),attributes:ws(M,ne)})}xo([]),Ue(null)},[Hn,ne]);(0,C.useEffect)(()=>{H||(E(null),Ot(null),xn(null),Vn([]),Ue(null),ta(!1),xo([]),Ji.current=!1,rl&&Ys())},[H,rl,Ys]),(0,C.useEffect)(()=>()=>{hy()},[]),(0,C.useEffect)(()=>{if(!H)return;let f=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),y=document.createElement("style");return y.id="agentation-cursor",y.textContent=`
      body { cursor: crosshair !important; }
      body :is(${f}) { cursor: text !important; }
    `,document.head.appendChild(y),()=>{let w=document.getElementById("agentation-cursor");w&&w.remove()}},[H]),(0,C.useEffect)(()=>{if(V0!==null&&H)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[V0,H]),(0,C.useEffect)(()=>{if(!H||I||te||sl||nt)return;let f=null,y=(R,A,U)=>{let le=$u(R,A),_e=U?py(R,A):le;if(!_e||bn(_e,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){Ue(null);return}let{name:F,elementName:de,path:xe,reactComponents:Be}=zu(_e,Pl,ne);Ue({element:F,elementName:de,elementPath:xe,rect:en(_e),reactComponents:Be,isPiercing:U&&_e!==le}),Ve({x:R,y:A})},w=R=>{let A=R.composedPath()[0]||R.target;if(bn(A,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){f=null,Ue(null);return}f={x:R.clientX,y:R.clientY},y(R.clientX,R.clientY,Ko(R))},M=R=>{(R.key==="Meta"||R.key==="Control")&&f&&y(f.x,f.y,Ko(R))},O=()=>{f=null,Ue(null)};return P.addEventListener("mousemove",w),P.addEventListener("keydown",M),P.addEventListener("keyup",M),P.addEventListener("mouseleave",O),window.addEventListener("blur",O),()=>{P.removeEventListener("mousemove",w),P.removeEventListener("keydown",M),P.removeEventListener("keyup",M),P.removeEventListener("mouseleave",O),window.removeEventListener("blur",O)}},[H,I,te,sl,nt,Pl,ne]);let js=(0,C.useCallback)((f,y)=>{var w,M,O,R,A;if(te&&!ca){(w=Bs.current)==null||w.shake();return}if(I&&!cl){let U=(M=Qt.current)==null?void 0:M.querySelector("[data-annotation-popup]:not([data-annotation-card]) textarea");if(U!=null&&U.value.trim()){(O=cd.current)==null||O.shake();return}tr(!0)}if(Gt.current=y!=null?y:null,Gn.current=(R=y==null?void 0:y.matches(":focus-visible"))!=null?R:!1,Dn(!1),qa(!1),Ot(f),Ct(null),pt(null),Ke([]),(A=f.elementBoundingBoxes)!=null&&A.length){let U=[];for(let le of f.elementBoundingBoxes){let _e=le.x+le.width/2,F=le.y+le.height/2-window.scrollY,de=Mu(_e,F,le);de&&U.push(de)}Vn(U),xn(null)}else if(f.boundingBox){let U=f.boundingBox,le=U.x+U.width/2,_e=f.isFixed?U.y+U.height/2:U.y+U.height/2-window.scrollY,F=Mu(le,_e,U);if(F){let de=en(F),xe=de.width/U.width,Be=de.height/U.height;xe<.5||Be<.5?xn(null):xn(F)}else xn(null);Vn([])}else xn(null),Vn([])},[I,cl,te,ca]);(0,C.useEffect)(()=>{if(!H||sl||nt)return;let f=y=>{var je,Fe,zt;if(lr.current){lr.current=!1,y.preventDefault(),y.stopPropagation();return}let w=y.composedPath()[0]||y.target;if(bn(w,"[data-feedback-toolbar]")||bn(w,"[data-annotation-popup]")||bn(w,"[data-annotation-marker]"))return;if(Ko(y)&&!I&&!te){y.preventDefault(),y.stopPropagation(),Ji.current=y.shiftKey;let Nt=py(y.clientX,y.clientY);if(!Nt)return;let Me=en(Nt),{name:Ee,path:xt,reactComponents:vt}=zu(Nt,Pl,ne),Un=Hn.findIndex(fn=>fn.element===Nt);Un>=0?xo(fn=>fn.filter((Qa,Ga)=>Ga!==Un)):xo(fn=>[...fn,{element:Nt,rect:Me,name:Ee,path:xt,reactComponents:vt!=null?vt:void 0}]);return}let M=bn(w,"button, a, input, select, textarea, [role='button'], [onclick]");if(at.blockInteractions&&(y.preventDefault(),y.stopPropagation()),I&&!cl){if(M&&!at.blockInteractions)return;y.preventDefault(),(je=cd.current)==null||je.shake();return}if(te&&!ca){if(M&&!at.blockInteractions)return;y.preventDefault(),(Fe=Bs.current)==null||Fe.shake();return}y.preventDefault();let O=$u(y.clientX,y.clientY);if(!O)return;let{name:R,path:A,reactComponents:U}=zu(O,Pl,ne),le=en(O),_e=y.clientX/window.innerWidth*100,F=d0(O),de=F?y.clientY:y.clientY+window.scrollY,xe=(zt=O.ownerDocument.defaultView)==null?void 0:zt.getSelection(),Be;xe&&xe.toString().trim().length>0&&(Be=xe.toString().trim().slice(0,500));let me=ku(O),ve=Su(O);tr(!1),E({id:Date.now().toString(),x:_e,y:de,clientY:y.clientY,element:R,elementPath:A,selectedText:Be,boundingBox:{x:le.left,y:F?le.top:le.top+window.scrollY,width:le.width,height:le.height},nearbyText:gs(O),cssClasses:ps(O),isFixed:F,fullPath:ks(O),accessibility:Cu(O),computedStyles:ve,computedStylesObj:me,nearbyElements:wu(O),reactComponents:U!=null?U:void 0,sourceFile:Bu(O),attributes:ws(O,ne),frame:nv(O,y.clientX,y.clientY),targetElement:O}),Ue(null)};return P.addEventListener("click",f,!0),()=>P.removeEventListener("click",f,!0)},[H,sl,nt,I,cl,te,ca,at.blockInteractions,Pl,ne,Hn]),(0,C.useEffect)(()=>{if(!H)return;let f=w=>{let M=(w.key==="Meta"||w.key==="Control")&&!Ko(w),O=w.key==="Shift"&&Ji.current;(M||O)&&!ul.current&&Hn.length>0&&ir()},y=()=>{var w;Ji.current=!1,xo([]),Ue(null),ua.current=null,ul.current=null,rd(!1),(w=Wa.current)==null||w.replaceChildren()};return P.addEventListener("keyup",f),window.addEventListener("blur",y),()=>{P.removeEventListener("keyup",f),window.removeEventListener("blur",y)}},[H,Hn,ir]),(0,C.useEffect)(()=>{if(!H||I||sl||nt)return;let f=y=>{if(y.button!==0)return;lr.current=!1;let w=y.composedPath()[0]||y.target;if(bn(w,"[data-feedback-toolbar]")||bn(w,"[data-annotation-marker]")||bn(w,"[data-annotation-popup]"))return;let M=new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]);!Ko(y)&&(M.has(w.tagName)||w.isContentEditable)||(y.preventDefault(),ua.current={x:y.clientX,y:y.clientY})};return P.addEventListener("mousedown",f),()=>P.removeEventListener("mousedown",f)},[H,I,sl,nt]),(0,C.useEffect)(()=>{if(!H||I)return;let f=y=>{if(!ua.current)return;let w=y.clientX-ua.current.x,M=y.clientY-ua.current.y,O=w*w+M*M,R=sd*sd;if(!Jl&&O>=R&&(ul.current=ua.current,rd(!0),y.preventDefault()),(Jl||O>=R)&&ul.current){if(nr.current){let Me=Math.min(ul.current.x,y.clientX),Ee=Math.min(ul.current.y,y.clientY),xt=Math.abs(y.clientX-ul.current.x),vt=Math.abs(y.clientY-ul.current.y);nr.current.style.transform=`translate(${Me}px, ${Ee}px)`,nr.current.style.width=`${xt}px`,nr.current.style.height=`${vt}px`}let A=Date.now();if(A-ah.current<j5)return;ah.current=A;let U=ul.current.x,le=ul.current.y,_e=Math.min(U,y.clientX),F=Math.min(le,y.clientY),de=Math.max(U,y.clientX),xe=Math.max(le,y.clientY),Be=(_e+de)/2,me=(F+xe)/2,ve=new Set,je=[[_e,F],[de,F],[_e,xe],[de,xe],[Be,me],[Be,F],[Be,xe],[_e,me],[de,me]];for(let[Me,Ee]of je){let xt=document.elementsFromPoint(Me,Ee);for(let vt of xt)vt instanceof HTMLElement&&ve.add(vt)}let Fe=P.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let Me of Fe)if(Me instanceof HTMLElement){let Ee=en(Me),xt=Ee.left+Ee.width/2,vt=Ee.top+Ee.height/2,Un=xt>=_e&&xt<=de&&vt>=F&&vt<=xe,fn=Math.min(Ee.right,de)-Math.max(Ee.left,_e),Qa=Math.min(Ee.bottom,xe)-Math.max(Ee.top,F),Ga=fn>0&&Qa>0?fn*Qa:0,hn=Ee.width*Ee.height,sr=hn>0?Ga/hn:0;(Un||sr>.5)&&ve.add(Me)}let zt=[],Nt=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let Me of ve){if(bn(Me,"[data-feedback-toolbar]")||bn(Me,"[data-annotation-marker]"))continue;let Ee=en(Me);if(!(Ee.width>window.innerWidth*.8&&Ee.height>window.innerHeight*.5)&&!(Ee.width<10||Ee.height<10)&&Ee.left<de&&Ee.right>_e&&Ee.top<xe&&Ee.bottom>F){let xt=Me.tagName,vt=Nt.has(xt);if(!vt&&(xt==="DIV"||xt==="SPAN")){let Un=Me.textContent&&Me.textContent.trim().length>0,fn=Me.onclick!==null||Me.getAttribute("role")==="button"||Me.getAttribute("role")==="link"||Me.classList.contains("clickable")||Me.hasAttribute("data-clickable");(Un||fn)&&!Me.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(vt=!0)}if(vt){let Un=!1;for(let fn of zt)if(fn.left<=Ee.left&&fn.right>=Ee.right&&fn.top<=Ee.top&&fn.bottom>=Ee.bottom){Un=!0;break}Un||zt.push(Ee)}}}if(Wa.current){let Me=Wa.current;for(;Me.children.length>zt.length;)Me.removeChild(Me.lastChild);zt.forEach((Ee,xt)=>{let vt=Me.children[xt];vt||(vt=document.createElement("div"),vt.className=j.selectedElementHighlight,Me.appendChild(vt)),vt.style.transform=`translate(${Ee.left}px, ${Ee.top}px)`,vt.style.width=`${Ee.width}px`,vt.style.height=`${Ee.height}px`})}}};return P.addEventListener("mousemove",f,{passive:!0}),()=>P.removeEventListener("mousemove",f)},[H,I,Jl,sd]),(0,C.useEffect)(()=>{if(!H)return;let f=y=>{let w=Jl,M=ul.current;if(Jl&&M){lr.current=!0;let O=Math.min(M.x,y.clientX),R=Math.min(M.y,y.clientY),A=Math.max(M.x,y.clientX),U=Math.max(M.y,y.clientY),le=[];P.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(me=>{if(!(me instanceof HTMLElement)||bn(me,"[data-feedback-toolbar]")||bn(me,"[data-annotation-marker]"))return;let ve=en(me);ve.width>window.innerWidth*.8&&ve.height>window.innerHeight*.5||ve.width<10||ve.height<10||ve.left<A&&ve.right>O&&ve.top<U&&ve.bottom>R&&le.push({element:me,rect:ve})});let F=le.filter(({element:me})=>!le.some(({element:ve})=>ve!==me&&me.contains(ve))),de=y.clientX/window.innerWidth*100,xe=y.clientY+window.scrollY,Be=(Ko(y)||Hn.length>0)&&!I&&!te;if(F.length>0)if(Be){let me=[...Hn];for(let{element:ve,rect:je}of F){if(me.some(Me=>Me.element===ve))continue;let{name:Fe,path:zt,reactComponents:Nt}=zu(ve,Pl,ne);me.push({element:ve,rect:je,name:Fe,path:zt,reactComponents:Nt!=null?Nt:void 0})}Ji.current=y.shiftKey,Ko(y)?xo(me):ir(me)}else{let me=F.reduce((Me,{rect:Ee})=>({left:Math.min(Me.left,Ee.left),top:Math.min(Me.top,Ee.top),right:Math.max(Me.right,Ee.right),bottom:Math.max(Me.bottom,Ee.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ve=F.slice(0,5).map(({element:Me})=>Wi(Me).name).join(", "),je=F.length>5?` +${F.length-5} more`:"",Fe=F[0].element,zt=ku(Fe),Nt=Su(Fe);E({id:Date.now().toString(),x:de,y:xe,clientY:y.clientY,element:`${F.length} elements: ${ve}${je}`,elementPath:"multi-select",boundingBox:{x:me.left,y:me.top+window.scrollY,width:me.right-me.left,height:me.bottom-me.top},isMultiSelect:!0,fullPath:ks(Fe),accessibility:Cu(Fe),computedStyles:Nt,computedStylesObj:zt,nearbyElements:wu(Fe),cssClasses:ps(Fe),nearbyText:gs(Fe),sourceFile:Bu(Fe),attributes:ws(Fe,ne)})}else if(Be&&!Ko(y))ir();else if(!Be){let me=Math.abs(A-O),ve=Math.abs(U-R);me>20&&ve>20&&E({id:Date.now().toString(),x:de,y:xe,clientY:y.clientY,element:"Area selection",elementPath:`region at (${Math.round(O)}, ${Math.round(R)})`,boundingBox:{x:O,y:R+window.scrollY,width:me,height:ve},isMultiSelect:!0})}Ue(null)}else w&&(lr.current=!0);ua.current=null,ul.current=null,rd(!1),Wa.current&&(Wa.current.innerHTML="")};return P.addEventListener("mouseup",f),()=>P.removeEventListener("mouseup",f)},[H,Jl,I,te,Pl,ne,Hn,ir]);let zl=(0,C.useCallback)(async(f,y,w)=>{let M=at.webhookUrl||L;if(!M||!at.webhooksEnabled&&!w)return!1;try{return(await fetch(M,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:f,timestamp:Date.now(),url:typeof window!="undefined"?window.location.href:void 0,...y})})).ok}catch(O){return console.warn("[Agentation] Webhook failed:",O),!1}},[L,at.webhookUrl,at.webhooksEnabled]),W5=(0,C.useCallback)(f=>{var w;if(!I||I.isSubmitted)return;let y={id:I.id,x:I.x,y:I.y,comment:f,element:I.element,elementPath:I.elementPath,timestamp:Date.now(),selectedText:I.selectedText,boundingBox:I.boundingBox,nearbyText:I.nearbyText,cssClasses:I.cssClasses,isMultiSelect:I.isMultiSelect,isFixed:I.isFixed,fullPath:I.fullPath,accessibility:I.accessibility,computedStyles:I.computedStyles,nearbyElements:I.nearbyElements,reactComponents:I.reactComponents,sourceFile:I.sourceFile,attributes:I.attributes,frame:I.frame,elementBoundingBoxes:I.elementBoundingBoxes,...m&&nn?{sessionId:nn,url:typeof window!="undefined"?window.location.href:void 0,status:"pending"}:{}};$n(M=>[...M,y]),E({...I,isSubmitted:!0}),El.current=y.id,p==null||p(y),zl("annotation.add",{annotation:y}),tr(!0),(w=window.getSelection())==null||w.removeAllRanges(),m&&nn&&ye(async()=>{let M=await Oe(m,nn,y);if(l){let O=Zo(e);l0(e,O.map(R=>R.id===y.id?{...R,id:M.id}:R),nn)}!ue.current||Ne.current.has(y.id)||M.id!==y.id&&(Os.current.set(M.id,y.id),El.current===y.id&&(El.current=M.id),$n(O=>O.map(R=>R.id===y.id?{...R,id:M.id}:R)),sa.current.delete(y.id)&&sa.current.add(M.id))}).catch(M=>{console.warn("[Agentation] Failed to sync annotation:",M)})},[I,p,zl,m,nn,ye,e,l]),hd=(0,C.useCallback)(()=>{tr(!0)},[]),md=(0,C.useCallback)(()=>{E(null),tr(!1)},[]),gd=(0,C.useCallback)(f=>{if(Ne.current.has(f))return;Ne.current.add(f);let y=Re.find(w=>w.id===f);(te==null?void 0:te.id)===f&&(Dn(!1),qa(!0)),zs(w=>new Set(w).add(f)),y&&(S==null||S(y),zl("annotation.delete",{annotation:y})),m&&ye(()=>{var w;return Au(m,(w=At.current.get(f))!=null?w:f)}).catch(w=>{console.warn("[Agentation] Failed to delete annotation from server:",w)})},[Re,te,S,zl,m,ye]),Xs=(0,C.useCallback)(f=>{var y;if(!f){Ct(null),pt(null),Ke([]);return}if(Ct(f.id),(y=f.elementBoundingBoxes)!=null&&y.length){let w=[];for(let M of f.elementBoundingBoxes){let O=M.x+M.width/2,R=M.y+M.height/2-window.scrollY,A=Mu(O,R,M);A&&w.push(A)}Ke(w),pt(null)}else if(f.boundingBox){let w=f.boundingBox,M=w.x+w.width/2,O=f.isFixed?w.y+w.height/2:w.y+w.height/2-window.scrollY,R=Mu(M,O,w);if(R){let A=en(R),U=A.width/w.width,le=A.height/w.height;U<.5||le<.5?pt(null):pt(R)}else pt(null);Ke([])}else pt(null),Ke([])},[]),I5=(0,C.useCallback)(f=>{var w;if(!te)return;let y={...te,comment:f};Ot(y),$n(M=>M.map(O=>O.id===te.id?y:O)),T==null||T(y),zl("annotation.update",{annotation:y}),m&&ye(()=>{var M;return i0(m,(M=At.current.get(te.id))!=null?M:te.id,{comment:f})}).catch(M=>{console.warn("[Agentation] Failed to update annotation on server:",M)}),Dn(Gn.current||!!((w=Gt.current)!=null&&w.matches(":hover"))),qa(!0)},[te,T,zl,m,ye]),Q5=(0,C.useCallback)(()=>{var f;Dn(Gn.current||!!((f=Gt.current)!=null&&f.matches(":hover"))),qa(!0)},[]),G5=(0,C.useCallback)(()=>{Nn&&te&&!I&&Ct(te.id),Ot(null),xn(null),Vn([]),qa(!1)},[Nn,te,I]),qs=(0,C.useCallback)((f,y)=>{if(!f.length&&!y)return;ge(!0);let w={placements:[...Ya.current.placements,...f],rearrange:y!=null?y:Ya.current.rearrange};Ya.current=w,W0(w.placements),I0(w.rearrange),clearTimeout(be.current),be.current=it(()=>{Kl(M=>M.filter(O=>!w.placements.includes(O))),Ll(M=>M===w.rearrange?null:M),Ya.current={placements:[],rearrange:null},W0([]),I0(null),be.current=void 0,We()},200)},[We]),da=(0,C.useCallback)(()=>{var U,le,_e;if(!ue.current)return;let f=new Map(Hs.current.map(F=>[F.id,F])),y=[];for(let F of Re){let de=(le=f.get((U=At.current.get(F.id))!=null?U:F.id))!=null?le:f.get(F.id);de&&de.comment===F.comment&&!Ne.current.has(de.id)&&!y.includes(de)&&y.push(de)}let w=y.length,M=Q0.current,O=Ye.filter(F=>M.designPlacements.includes(F)&&!Ya.current.placements.includes(F)),R=ee===M.rearrangeState&&ee!==Ya.current.rearrange?ee:null,A=Ml.filter(F=>nd.current.includes(F));if(!(w===0&&A.length===0&&O.length===0&&!R)){for(let F of y)Ne.current.add(F.id),Ae.current.add(F.id),tt.current.add(F.id);if(zs(F=>new Set([...F,...y.map(de=>de.id)])),D==null||D(y),zl("annotations.clear",{annotations:y}),m&&Promise.all(y.map(F=>ye(()=>{var de;return Au(m,(de=At.current.get(F.id))!=null?de:F.id)}).catch(de=>{console.warn("[Agentation] Failed to delete annotation from server:",de)}))),ge(!0),B5(F=>F.filter(de=>!A.includes(de))),A.length>0&&A.length===nd.current.length){let F=ld.current;(_e=F==null?void 0:F.getContext("2d"))==null||_e.clearRect(0,0,F.width,F.height)}qs(O,R),Rt===M.blankCanvas&&wn===M.wireframePurpose&&Ye===M.designPlacements&&ee===M.rearrangeState&&(Rt&&U0(!1),wn&&Ns(""),oa.current={rearrange:null,placements:[]},Du(e)),We()}},[e,Re,Ml,Ye,ee,Rt,wn,D,zl,m,ye,We,qs]),pd=(0,C.useCallback)(async()=>{let f=W.start(),y=typeof window!="undefined"?window.location.pathname+window.location.search+window.location.hash:e,w=nt&&Rt,M;if(w){if(Ye.length===0&&!ee&&!wn)return;M=o?Hu(y,o):""}else{if(M=Hy(Re,y,at.outputDetail,{appName:o}),!M&&Ml.length===0&&Ye.length===0&&!ee)return;M||(M=Hu(y,o))}if(!w&&Ml.length>0){let R=new Set;for(let _e of Re)_e.drawingIndex!=null&&R.add(_e.drawingIndex);let A=ld.current;A&&(A.style.visibility="hidden");let U=[],le=window.scrollY;for(let _e=0;_e<Ml.length;_e++){if(R.has(_e))continue;let F=Ml[_e];if(F.points.length<2)continue;let de=F.fixed?F.points:F.points.map(Kt=>({x:Kt.x,y:Kt.y-le})),xe=1/0,Be=1/0,me=-1/0,ve=-1/0;for(let Kt of de)xe=Math.min(xe,Kt.x),Be=Math.min(Be,Kt.y),me=Math.max(me,Kt.x),ve=Math.max(ve,Kt.y);let je=me-xe,Fe=ve-Be,zt=Math.hypot(je,Fe),Nt=de[0],Me=de[de.length-1],Ee=Math.hypot(Me.x-Nt.x,Me.y-Nt.y),xt,vt=Ee<zt*.35,Un=je/Math.max(Fe,1);if(vt&&zt>20){let Kt=Math.max(je,Fe)*.15,wo=0;for(let _a of de){let F5=_a.x-xe<Kt,Z5=me-_a.x<Kt,K5=_a.y-Be<Kt,P5=ve-_a.y<Kt;(F5||Z5)&&(K5||P5)&&wo++}xt=wo>de.length*.15?"box":"circle"}else Un>3&&Fe<40?xt="underline":Ee>zt*.5?xt="arrow":xt="drawing";let fn=Math.min(10,de.length),Qa=Math.max(1,Math.floor(de.length/fn)),Ga=new Set,hn=[],sr=[Nt];for(let Kt=Qa;Kt<de.length-1;Kt+=Qa)sr.push(de[Kt]);sr.push(Me);for(let Kt of sr){let wo=$u(Kt.x,Kt.y);if(!wo||Ga.has(wo)||bn(wo,"[data-feedback-toolbar]"))continue;Ga.add(wo);let{name:_a}=Wi(wo);hn.includes(_a)||hn.push(_a)}let Gs=`${Math.round(xe)},${Math.round(Be)} \u2192 ${Math.round(me)},${Math.round(ve)}`,Va;(xt==="circle"||xt==="box")&&hn.length>0?Va=`${xt==="box"?"Boxed":"Circled"} **${hn[0]}**${hn.length>1?` (and ${hn.slice(1).join(", ")})`:""} (region: ${Gs})`:xt==="underline"&&hn.length>0?Va=`Underlined **${hn[0]}** (${Gs})`:xt==="arrow"&&hn.length>=2?Va=`Arrow from **${hn[0]}** to **${hn[hn.length-1]}** (${Math.round(Nt.x)},${Math.round(Nt.y)} \u2192 ${Math.round(Me.x)},${Math.round(Me.y)})`:hn.length>0?Va=`${xt==="arrow"?"Arrow":"Drawing"} near **${hn.join("**, **")}** (region: ${Gs})`:Va=`Drawing at ${Gs}`,U.push(Va)}A&&(A.style.visibility=""),U.length>0&&(M+=`
**Drawings:**
`,U.forEach((_e,F)=>{M+=`${F+1}. ${_e}
`}))}if((Ye.length>0||w&&wn)&&(M+=`
`+Dy(Ye,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Rt,wireframePurpose:wn||void 0},at.outputDetail)),ee){let R=Ay(ee,at.outputDetail,{width:window.innerWidth,height:window.innerHeight});R&&(M+=`
`+R)}if(M=Uy(Re,M,r),!M){Y(!1);return}let O=!v||await i6(M);x==null||x(M),W.isCurrent(f)&&(Y(O),O&&(W.schedule(f,()=>Y(!1),2e3),at.autoClearAfterCopy&&W.schedule(f,da,500)))},[Re,Ml,Ye,ee,Rt,nt,X0,wn,e,at.outputDetail,Pl,ne,at.autoClearAfterCopy,da,W,v,r,o,x]),yd=Qy(at.webhookUrl)||Qy(L||""),Bl=k!=null||yd&&!at.webhooksEnabled,Ws=H?Bl?337:297:44,bd=(0,C.useCallback)(async()=>{let f=ae.start(),y=typeof window!="undefined"?window.location.href:e,w=typeof window!="undefined"?window.location.pathname+window.location.search+window.location.hash:e,M=Hy(Re,w,at.outputDetail,{appName:o});if(!M&&Ye.length===0&&!ee)return;if(M||(M=Hu(w,o)),Ye.length>0&&(M+=`
`+Dy(Ye,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Rt,wireframePurpose:wn||void 0},at.outputDetail)),ee){let U=Ay(ee,at.outputDetail,{width:window.innerWidth,height:window.innerHeight});U&&(M+=`
`+U)}J("sending");let O=!0;try{await(k==null?void 0:k(M,Re))}catch(U){console.warn("[Agentation] Submit callback failed:",U),O=!1}if(!ae.isCurrent(f))return;let R=yd?await zl("submit",{output:M,annotations:Re,url:y},!0):!0,A=O&&R&&Bl;ae.isCurrent(f)&&(J(A?"sent":"failed"),ae.schedule(f,()=>J("idle"),2500),A&&at.autoClearAfterCopy&&ae.schedule(f,da,500))},[k,o,zl,Re,Ye,ee,Rt,X0,e,at.outputDetail,Pl,ne,at.autoClearAfterCopy,da,yd,Bl,ae]);(0,C.useEffect)(()=>{let y=(R=!1)=>{var A;(A=er.current)!=null&&A.dragging&&(Ls.current=R,lh(!1)),er.current=null},w=R=>{let A=er.current;if(!A)return;if((R.buttons&1)===0){y();return}let U=R.clientX-A.x,le=R.clientY-A.y,_e=Math.sqrt(U*U+le*le);if(!A.dragging&&_e>10&&(A.dragging=!0,lh(!0)),A.dragging){let F=A.toolbarX+U,de=A.toolbarY+le,xe=20,Be=337,me=44,je=Be-Ws,Fe=xe-je,zt=window.innerWidth-xe-Be;F=Math.max(Fe,Math.min(zt,F)),de=Math.max(xe,Math.min(window.innerHeight-me-xe,de)),id({x:F,y:de})}},M=()=>y(!0),O=()=>y();return P.addEventListener("mousemove",w),P.addEventListener("mouseup",M,!0),window.addEventListener("blur",O),()=>{P.removeEventListener("mousemove",w),P.removeEventListener("mouseup",M,!0),window.removeEventListener("blur",O)}},[Ws]);let V5=(0,C.useCallback)(f=>{if(Ls.current=!1,er.current=null,f.button!==0||f.target.closest("button")&&(f.target.closest("button")!==kl.current||H)||f.target.closest("[data-agentation-settings-panel]"))return;let y=f.currentTarget.parentElement;if(!y)return;let w=en(y);er.current={x:f.clientX,y:f.clientY,toolbarX:w.left,toolbarY:w.top,dragging:!1}},[H]);(0,C.useLayoutEffect)(()=>{if(!Xt)return;let f=()=>{let O=Xt.x,R=Xt.y,le=20-(337-Ws),_e=window.innerWidth-20-337;O=Math.max(le,Math.min(_e,O)),R=Math.max(20,Math.min(window.innerHeight-44-20,R)),(O!==Xt.x||R!==Xt.y)&&id({x:O,y:R})};return f(),window.addEventListener("resize",f),()=>window.removeEventListener("resize",f)},[Xt,Ws]),(0,C.useEffect)(()=>{if(!a)return;let f=w=>{var R,A;if(w.defaultPrevented||w.isComposing||w.altKey)return;let M=w.composedPath()[0]||w.target,O=M.tagName==="INPUT"||M.tagName==="TEXTAREA"||M.tagName==="SELECT"||M.isContentEditable;if(w.key==="Escape"){if(d&&!I&&!te&&(H||vn||nt||sl||Hn.length)&&(w.preventDefault(),w.stopPropagation()),vn){w.preventDefault(),ta(!1),(R=ea.current)==null||R.focus();return}if(nt){$a?la(null):ar();return}if(sl){td(!1);return}if(Hn.length>0){xo([]);return}I||te||H&&(kn(),Us())}if((w.metaKey||w.ctrlKey)&&w.shiftKey&&(w.key==="f"||w.key==="F")){w.preventDefault(),kn(),H?Us():((A=kl.current)==null||A.blur(),il.current=!0,K(!0));return}!H||O||w.metaKey||w.ctrlKey||w.repeat||((w.key==="p"||w.key==="P")&&(w.preventDefault(),kn(),fd()),(w.key==="l"||w.key==="L")&&(w.preventDefault(),kn(),sl&&td(!1),vn&&ta(!1),I&&hd(),nt?ar():_d()),(w.key==="h"||w.key==="H")&&Re.length>0&&(w.preventDefault(),kn(),yo(U=>!U)),(w.key==="c"||w.key==="C")&&(Re.length>0||Ye.length>0||ee)&&(w.preventDefault(),kn(),pd()),(w.key==="x"||w.key==="X")&&(Re.length>0||Ye.length>0||ee)&&(w.preventDefault(),kn(),da(),Ye.length>0&&Kl([]),ee&&Ll(null)),(w.key==="s"||w.key==="S")&&Re.length>0&&Bl&&ie==="idle"&&(w.preventDefault(),kn(),bd()))},y=!!d;return P.addEventListener("keydown",f,y),()=>P.removeEventListener("keydown",f,y)},[a,d,te,H,sl,nt,$a,Ye,ee,I,Re.length,Bl,ie,bd,fd,pd,da,Hn,vn,Us,_d,ar]);let rr=Re.length>0,Is=lv(),Qs=Re.filter(f=>f.kind!=="placement"&&f.kind!=="rearrange"),uh=Qs.flatMap((f,y)=>{let w=Is(f);return w?[{annotation:w,index:y}]:[]}),dh=I&&!I.isSubmitted?Is({...I,comment:"",timestamp:0}):null,_h=[...pe?uh.map(f=>({...f,pending:!1})):[],...dh?[{annotation:dh,index:Qs.length,pending:!0}]:[]];(0,C.useEffect)(()=>{let f=new Set(pe&&!bo?uh.map(({annotation:y})=>y.id):[]);El.current&&!f.has(El.current)&&(El.current=null);for(let y of vo)f.has(y)||ud(y)}),(0,C.useEffect)(()=>{te&&vo.has(te.id)&&(Dn(!1),qa(!0))},[te,vo]);let fh=(0,C.useCallback)(f=>{!Se&&f.id!==El.current&&Xs(f)},[Se,Xs]),hh=(0,C.useCallback)(f=>{Le===f&&Xs(null)},[Le,Xs]),mh=(0,C.useCallback)((f,y)=>{var w;if(te&&!ca){(w=Bs.current)==null||w.shake();return}cl&&md(),at.markerClickBehavior==="delete"?gd(f.id):js(f,y)},[at.markerClickBehavior,gd,js,cl,md,te,ca]),dl=te!=null?te:$s&&!I&&!ze?Re.find(f=>f.id===Le&&!vo.has(f.id)):null,gh=rl?"Resume animations":"Pause animations",ph=nt?"Exit layout mode":"Layout mode",yh=Fl?"Hide markers":"Show markers",bh=r!=="markdown"&&!Uy(Re,"",r),xh=typeof r=="object"?`Copy ${r.attribute}`:r==="source"?"Copy source paths":r==="classes"?"Copy classes":nt&&Rt?"Copy layout":"Copy feedback",Ia=H?0:-1;return!st||bo?null:(0,G.jsxs)(vv,{host:"agentation-toolbar",className:V,children:[(0,G.jsxs)("style",{"data-agentation-styles":"toolbar",children:[v6,k6]}),(0,G.jsxs)("div",{ref:Qt,className:j.positionContext,style:{display:"contents"},"data-agentation-theme":Ol?"dark":"light","data-agentation-accent":at.annotationColorId,"data-agentation-root":"",children:[(0,G.jsx)("div",{className:j.toolbar,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,"data-dragging":As||void 0,style:Xt?{left:Xt.x,top:Xt.y,right:"auto",bottom:"auto"}:void 0,children:(0,G.jsxs)("div",{className:`${j.toolbarContainer} ${H?j.expanded:j.collapsed} ${J0?j.entrance:""} ${Qn?j.hiding:""} ${Bl?j.serverConnected:""}`,onMouseDown:V5,children:[(0,G.jsxs)("div",{className:`${j.controlsContent} ${H?j.visible:j.hidden} ${Xt&&Xt.y<100?j.tooltipBelow:""} ${H0||vn?j.tooltipsHidden:""} ${od?j.tooltipsInSession:""}`,ref:f=>{Al.current=f,f==null||f.toggleAttribute("inert",!H)},role:"group","aria-label":"Feedback controls","aria-hidden":!H,onMouseEnter:Z0,onMouseLeave:K0,children:[(0,G.jsxs)("div",{className:`${j.buttonWrapper} ${Xt&&Xt.x<120?j.buttonWrapperAlignLeft:""}`,children:[(0,G.jsx)("button",{className:j.controlButton,onClick:f=>{f.stopPropagation(),kn(),fd()},"data-active":rl,"aria-label":gh,"aria-pressed":rl,tabIndex:Ia,children:(0,G.jsx)(Ev,{size:24,isPaused:rl})}),(0,G.jsxs)("span",{className:j.buttonTooltip,children:[gh,a&&(0,G.jsx)("span",{className:j.shortcut,children:"P"})]})]}),(0,G.jsxs)("div",{className:j.buttonWrapper,children:[(0,G.jsx)("button",{className:`${j.controlButton} ${Ol?"":j.light}`,onClick:f=>{f.stopPropagation(),kn(),sl&&td(!1),vn&&ta(!1),I&&hd(),nt?ar():_d()},"data-active":nt,"aria-label":ph,"aria-pressed":nt,tabIndex:Ia,style:nt&&Rt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,G.jsx)(zv,{size:21})}),(0,G.jsxs)("span",{className:j.buttonTooltip,children:[ph,a&&(0,G.jsx)("span",{className:j.shortcut,children:"L"})]})]}),(0,G.jsxs)("div",{className:j.buttonWrapper,children:[(0,G.jsx)("button",{className:j.controlButton,onClick:f=>{f.stopPropagation(),kn(),yo(!Fl)},disabled:!rr||nt,"aria-label":yh,tabIndex:Ia,children:(0,G.jsx)(Mv,{size:24,isOpen:Fl})}),(0,G.jsxs)("span",{className:j.buttonTooltip,children:[yh,a&&(0,G.jsx)("span",{className:j.shortcut,children:"H"})]})]}),(0,G.jsxs)("div",{className:j.buttonWrapper,children:[(0,G.jsx)("button",{className:`${j.controlButton} ${N?j.statusShowing:""}`,onClick:f=>{f.stopPropagation(),kn(),pd()},disabled:bh||(nt&&Rt?Ye.length===0&&!((vh=ee==null?void 0:ee.sections)!=null&&vh.length):!rr&&Ml.length===0&&Ye.length===0&&!((wh=ee==null?void 0:ee.sections)!=null&&wh.length)),"data-active":N,"aria-label":xh,tabIndex:Ia,children:(0,G.jsx)(Sv,{size:24,copied:N,tint:nt&&Rt&&(Ye.length>0||(kh=ee==null?void 0:ee.sections)!=null&&kh.length)?"#f97316":void 0})}),(0,G.jsxs)("span",{className:j.buttonTooltip,children:[bh?"No matching metadata":xh,a&&(0,G.jsx)("span",{className:j.shortcut,children:"C"})]})]}),(0,G.jsxs)("div",{className:`${j.buttonWrapper} ${j.sendButtonWrapper} ${H&&Bl?j.sendButtonVisible:""}`,children:[(0,G.jsxs)("button",{className:`${j.controlButton} ${ie==="sent"||ie==="failed"?j.statusShowing:""}`,onClick:f=>{f.stopPropagation(),kn(),bd()},disabled:!rr||!Bl||ie==="sending","data-no-hover":ie==="sent"||ie==="failed",tabIndex:H&&Bl?0:-1,"aria-label":"Send Annotations","aria-hidden":!Bl,children:[(0,G.jsx)(Cv,{size:24,state:ie}),rr&&ie==="idle"&&(0,G.jsx)("span",{className:j.buttonBadge,children:Re.length})]}),(0,G.jsxs)("span",{className:j.buttonTooltip,children:["Send Annotations",a&&(0,G.jsx)("span",{className:j.shortcut,children:"S"})]})]}),(0,G.jsxs)("div",{className:j.buttonWrapper,children:[(0,G.jsx)("button",{className:j.controlButton,onClick:f=>{f.stopPropagation(),kn(),da()},disabled:!rr&&Ml.length===0&&Ye.length===0&&!((Sh=ee==null?void 0:ee.sections)!=null&&Sh.length),"data-danger":!0,"aria-label":"Clear all",tabIndex:Ia,children:(0,G.jsx)(Rv,{size:24})}),(0,G.jsxs)("span",{className:j.buttonTooltip,children:["Clear all",a&&(0,G.jsx)("span",{className:j.shortcut,children:"X"})]})]}),(0,G.jsxs)("div",{className:j.buttonWrapper,children:[(0,G.jsx)("button",{ref:ea,"aria-label":"Settings","aria-expanded":vn,tabIndex:Ia,className:j.controlButton,onClick:f=>{f.stopPropagation(),kn(),nt&&ar(),Z.current=!vn&&f.detail===0,ta(!vn)},children:(0,G.jsx)(Tv,{size:24})}),m&&ia!=="disconnected"&&(0,G.jsx)("span",{className:`${j.mcpIndicator} ${j[ia]} ${vn?j.hidden:""}`,title:ia==="connected"?"MCP Connected":"MCP Connecting..."}),(0,G.jsx)("span",{className:j.buttonTooltip,children:"Settings"})]}),(0,G.jsx)("div",{className:j.divider}),(0,G.jsx)("div",{className:j.togglePlaceholder,"aria-hidden":"true"})]}),(0,G.jsxs)("div",{className:`${j.buttonWrapper} ${j.toggleWrapper} ${Xt&&Xt.y<100?j.tooltipBelow:""} ${!H||H0||vn?j.tooltipsHidden:""} ${od?j.tooltipsInSession:""} ${Xt&&typeof window!="undefined"&&Xt.x>window.innerWidth-120?j.buttonWrapperAlignRight:""}`,onMouseEnter:Z0,onMouseLeave:K0,children:[(0,G.jsx)("button",{ref:kl,type:"button",className:`${j.toggleContent} ${H?j.expandedToggle:""}`,"aria-label":H?"Exit":"Start feedback mode","aria-expanded":H,"aria-keyshortcuts":a?"Meta+Shift+F Control+Shift+F":void 0,title:H?void 0:a?"Start feedback mode (\u2318\u21E7F / Ctrl+Shift+F)":"Start feedback mode",onClick:f=>{if(Ls.current){Ls.current=!1,f.preventDefault();return}f.stopPropagation(),H?(kn(),Us()):(f.currentTarget.blur(),il.current=f.detail===0,K(!0))},children:(0,G.jsxs)("span",{className:j.toggleIcon,children:[(0,G.jsx)(Uv,{active:H}),Qs.length>0&&(0,G.jsx)("span",{className:`${j.badge} ${H?j.fadeOut:""} ${J0?j.entrance:""}`,children:Qs.length})]})}),(0,G.jsxs)("span",{className:j.buttonTooltip,"aria-hidden":!H,children:["Exit",a&&(0,G.jsx)("span",{className:j.shortcut,children:"Esc"})]})]}),(0,G.jsx)(i4,{visible:nt&&H,activeType:$a,onSelect:f=>{la($a===f?null:f)},isDarkMode:Ol,sectionCount:(Ch=ee==null?void 0:ee.sections.length)!=null?Ch:0,onDetectSections:()=>{var A,U;let f=u4(),y=(A=ee==null?void 0:ee.sections)!=null?A:[],w=new Set(y.map(le=>le.selector)),M=f.filter(le=>!w.has(le.selector)),O=[...y,...M],R=[...(U=ee==null?void 0:ee.originalOrder)!=null?U:[],...M.map(le=>le.id)];Ll({sections:O,originalOrder:R,detectedAt:Date.now()})},placementCount:Ye.length,onClearPlacements:()=>{qs(Ye,ee)},blankCanvas:Rt,onBlankCanvasChange:f=>{let y={sections:[],originalOrder:[],detectedAt:Date.now()};f?(Ku.current={rearrange:ee,placements:Ye},Ll(oa.current.rearrange||y),Kl(oa.current.placements),la(null)):(oa.current={rearrange:ee,placements:Ye},Ll(Ku.current.rearrange||y),Kl(Ku.current.placements)),U0(f)},wireframePurpose:wn,onWireframePurposeChange:Ns,Tooltip:La,onDragStart:(f,y)=>{var de;y.preventDefault();let w=se[f],M=null,O=!1,R=y.clientX,A=y.clientY,U=y.target.closest("[data-feedback-toolbar]"),le=(de=U==null?void 0:U.getBoundingClientRect().top)!=null?de:window.innerHeight,_e=xe=>{var Un;let Be=xe.clientX-R,me=xe.clientY-A;if(!O&&(Math.abs(Be)>4||Math.abs(me)>4)&&(O=!0,M=document.createElement("div"),M.className=`${$.dragPreview}${Rt?` ${$.dragPreviewWireframe}`:""}`,(Un=Qt.current)==null||Un.appendChild(M)),!M)return;let ve=Math.max(0,le-xe.clientY),je=Math.min(1,ve/180),Fe=1-Math.pow(1-je,2),zt=28,Nt=20,Me=Math.min(140,w.width*.18),Ee=Math.min(90,w.height*.18),xt=zt+(Me-zt)*Fe,vt=Nt+(Ee-Nt)*Fe;M.style.width=`${xt}px`,M.style.height=`${vt}px`,M.style.left=`${xe.clientX-xt/2}px`,M.style.top=`${xe.clientY-vt/2}px`,M.style.opacity=`${.5+.5*Fe}`,M.textContent=Fe>.25?f:""},F=xe=>{if(window.removeEventListener("mousemove",_e),window.removeEventListener("mouseup",F),M&&M.remove(),O){let Be=w.width,me=w.height,ve=window.scrollY,je=Math.max(0,xe.clientX-Be/2),Fe=Math.max(0,xe.clientY+ve-me/2),zt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:f,x:je,y:Fe,width:Be,height:me,scrollY:ve,timestamp:Date.now()};Kl(Nt=>[...Nt,zt]),la(null),Pi.current=new Set,q0(Nt=>Nt+1)}};window.addEventListener("mousemove",_e),window.addEventListener("mouseup",F)}}),(0,G.jsx)(y6,{settings:at,onSettingsChange:U5,isDarkMode:Ol,onToggleTheme:Y5,isDevMode:th,connectionStatus:ia,endpoint:m,onExited:X5,isOpen:H&&vn,toolbarNearBottom:!!Xt&&Xt.y<230,settingsPage:R5,onSettingsPageChange:$0,onHideToolbar:q5})]})}),(nt||na)&&(0,G.jsx)("div",{className:`${$.blankCanvas} ${Y0?$.visible:""} ${D5?$.gridActive:""}`,style:{"--canvas-opacity":j0},"data-feedback-toolbar":!0}),nt&&Rt&&Y0&&(0,G.jsxs)("div",{className:$.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,G.jsxs)("div",{className:$.wireframeOpacityRow,children:[(0,G.jsx)("span",{className:$.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,G.jsx)("input",{type:"range",className:$.wireframeOpacitySlider,min:0,max:1,step:.01,value:j0,onChange:f=>N5(Number(f.target.value))})]}),(0,G.jsxs)("div",{className:$.wireframeNoticeTitleRow,children:[(0,G.jsx)("span",{className:$.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,G.jsx)("span",{className:$.wireframeNoticeDivider}),(0,G.jsx)("button",{className:$.wireframeStartOver,onClick:()=>{qs(Ye,ee),oa.current={rearrange:null,placements:[]},Ns(""),Du(e)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,G.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(nt||na)&&(0,G.jsx)(t4,{placements:Ye,onChange:Kl,activeComponent:na?null:$a,onActiveComponentChange:la,isDarkMode:Ol,exiting:na,onInteractionChange:A5,passthrough:!$a,extraSnapRects:ee==null?void 0:ee.sections.map(f=>f.currentRect),deselectSignal:L5,clearingPlacements:Ha,wireframe:Rt,onSelectionChange:(f,y)=>{Pi.current=f,y||(Ds.current=new Set,z5(w=>w+1))},onDragMove:(f,y)=>{var M;let w=Ds.current;if(!(!w.size||!ee)){if(!Cl.current){Cl.current=new Map;for(let O of ee.sections)w.has(O.id)&&Cl.current.set(O.id,{x:O.currentRect.x,y:O.currentRect.y})}for(let O of ee.sections){if(!w.has(O.id)||!Cl.current.get(O.id))continue;let A=(M=Qt.current)==null?void 0:M.querySelector(`[data-rearrange-section="${O.id}"]`);A&&(A.style.transform=`translate(${f}px, ${y}px)`)}}},onDragEnd:(f,y,w)=>{var R;let M=Ds.current,O=Cl.current;if(Cl.current=null,!(!M.size||!ee||!O)){for(let A of M){let U=(R=Qt.current)==null?void 0:R.querySelector(`[data-rearrange-section="${A}"]`);U&&(U.style.transform="")}w&&Ll(A=>A&&{...A,sections:A.sections.map(U=>{let le=O.get(U.id);return le?{...U,currentRect:{...U.currentRect,x:Math.max(0,le.x+f),y:Math.max(0,le.y+y)}}:U})})}}}),(nt||na)&&ee&&(0,G.jsx)(f4,{rearrangeState:ee,onChange:Ll,isDarkMode:Ol,exiting:na,blankCanvas:Rt,extraSnapRects:Ye.map(f=>({x:f.x,y:f.y,width:f.width,height:f.height})),clearing:ee===Ua,deselectSignal:O5,onSelectionChange:(f,y)=>{Ds.current=f,y||(Pi.current=new Set,q0(w=>w+1))},onDragMove:(f,y)=>{var M;let w=Pi.current;if(w.size){if(!Cl.current){Cl.current=new Map;for(let O of Ye)w.has(O.id)&&Cl.current.set(O.id,{x:O.x,y:O.y})}for(let O of w){let R=(M=Qt.current)==null?void 0:M.querySelector(`[data-design-placement="${O}"]`);R&&(R.style.transform=`translate(${f}px, ${y}px)`)}}},onDragEnd:(f,y,w)=>{var R;let M=Pi.current,O=Cl.current;if(Cl.current=null,!(!M.size||!O)){for(let A of M){let U=(R=Qt.current)==null?void 0:R.querySelector(`[data-design-placement="${A}"]`);U&&(U.style.transform="")}w&&Kl(A=>A.map(U=>{let le=O.get(U.id);return le?{...U,x:Math.max(0,le.x+f),y:Math.max(0,le.y+y)}:U}))}}}),(0,G.jsx)("canvas",{ref:ld,className:`${j.drawCanvas} ${sl?j.active:""}`,"aria-hidden":"true",style:{opacity:$s?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,G.jsx)("div",{className:j.markersLayer,"data-feedback-toolbar":!0,children:_h.filter(({annotation:f})=>!f.isFixed).map(({annotation:f,index:y,pending:w},M,O)=>{var R;return(0,G.jsx)(Xy,{annotation:f,pending:w,globalIndex:y,layerIndex:M,layerSize:O.length,isExiting:w?cl:Se,isClearing:Ae.current.has(f.id),isAnimated:sa.current.has(f.id),isNew:El.current===f.id,onEnterComplete:oh,isHovered:!Se&&Le===f.id,isRemoving:vo.has(f.id),onRemoveComplete:ud,isEditingAny:!!te,renumberFrom:Ze,markerClickBehavior:at.markerClickBehavior,onHoverEnter:fh,onHoverLeave:hh,onClick:mh,onContextMenu:js},(R=Os.current.get(f.id))!=null?R:f.id)})}),(0,G.jsx)("div",{className:j.fixedMarkersLayer,"data-feedback-toolbar":!0,children:_h.filter(({annotation:f})=>f.isFixed).map(({annotation:f,index:y,pending:w},M,O)=>{var R;return(0,G.jsx)(Xy,{annotation:f,pending:w,globalIndex:y,layerIndex:M,layerSize:O.length,isExiting:w?cl:Se,isClearing:Ae.current.has(f.id),isAnimated:sa.current.has(f.id),isNew:El.current===f.id,onEnterComplete:oh,isHovered:!Se&&Le===f.id,isRemoving:vo.has(f.id),onRemoveComplete:ud,isEditingAny:!!te,renumberFrom:Ze,markerClickBehavior:at.markerClickBehavior,onHoverEnter:fh,onHoverLeave:hh,onClick:mh,onContextMenu:js},(R=Os.current.get(f.id))!=null?R:f.id)})}),H&&De&&!I&&!te&&!O0&&!Jl&&(0,G.jsx)(b6,{x:et.x,y:et.y,elementName:De.elementName,reactComponents:De.reactComponents}),H&&(0,G.jsxs)("div",{className:j.overlay,"data-feedback-toolbar":!0,style:I||te?{zIndex:"inherit"}:void 0,children:[(De==null?void 0:De.rect)&&!I&&!O0&&!Jl&&(0,G.jsx)("div",{className:`${j.hoverHighlight} ${j.enter}`,style:{left:De.rect.left,top:De.rect.top,width:De.rect.width,height:De.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)",...De.isPiercing?{borderStyle:"dashed"}:{}}}),Hn.filter(f=>f.element.isConnected).map((f,y)=>{let w=en(f.element),M=Hn.length>1;return(0,G.jsx)("div",{className:M?j.multiSelectOutline:j.singleSelectOutline,style:{position:"fixed",left:w.left,top:w.top,width:w.width,height:w.height,...M?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},y)}),Le&&!I&&(()=>{var O;let f=Re.find(R=>R.id===Le);if(!(f!=null&&f.boundingBox))return null;if((O=f.elementBoundingBoxes)!=null&&O.length)return Tt.length>0?Tt.filter(R=>R.isConnected).map((R,A)=>{let U=en(R);return(0,G.jsx)("div",{className:`${j.multiSelectOutline} ${j.enter}`,style:{left:U.left,top:U.top,width:U.width,height:U.height}},`hover-outline-live-${A}`)}):f.elementBoundingBoxes.map((R,A)=>(0,G.jsx)("div",{className:`${j.multiSelectOutline} ${j.enter}`,style:{left:R.x,top:R.y-Fn,width:R.width,height:R.height}},`hover-outline-${A}`));let y=ot&&ot.isConnected?en(ot):null,w=y?{x:y.left,y:y.top,width:y.width,height:y.height}:{x:f.boundingBox.x,y:f.isFixed?f.boundingBox.y:f.boundingBox.y-Fn,width:f.boundingBox.width,height:f.boundingBox.height},M=f.isMultiSelect;return(0,G.jsx)("div",{className:`${M?j.multiSelectOutline:j.singleSelectOutline} ${j.enter}`,style:{left:w.x,top:w.y,width:w.width,height:w.height,...M?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),I&&(0,G.jsxs)(G.Fragment,{children:[(Mh=I.multiSelectElements)!=null&&Mh.length?I.multiSelectElements.filter(f=>f.isConnected).map((f,y)=>{let w=en(f);return(0,G.jsx)("div",{className:`${j.multiSelectOutline} ${cl?j.exit:j.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`pending-multi-${y}`)}):I.targetElement&&I.targetElement.isConnected?(()=>{let f=en(I.targetElement);return(0,G.jsx)("div",{className:`${j.singleSelectOutline} ${cl?j.exit:j.enter}`,style:{left:f.left,top:f.top,width:f.width,height:f.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():I.boundingBox&&(0,G.jsx)("div",{className:`${I.isMultiSelect?j.multiSelectOutline:j.singleSelectOutline} ${cl?j.exit:j.enter}`,style:{left:I.boundingBox.x,top:I.boundingBox.y-Fn,width:I.boundingBox.width,height:I.boundingBox.height,...I.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{var M,O,R;let f=(M=Is(I))!=null?M:I,y=f.x,w=f.isFixed?f.y:f.y-Fn;return(0,G.jsx)(G.Fragment,{children:(0,G.jsx)(E0,{ref:cd,element:I.element,selectedText:I.selectedText,allowEmpty:typeof r=="object"&&!!((O=I.attributes)!=null&&O[r.attribute]),onOpenSource:s&&I.sourceFile?()=>s(I.sourceFile):void 0,computedStyles:I.computedStylesObj,placeholder:typeof r=="object"&&((R=I.attributes)!=null&&R[r.attribute])?"Add a note (optional)":I.element==="Area selection"?"What should change in this area?":I.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:W5,onExitComplete:md,onCancel:hd,isExiting:cl,lightMode:!Ol,accentColor:I.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,y/100*window.innerWidth)),...w>window.innerHeight-290?{bottom:window.innerHeight-w+20}:{top:w+20}}},I.id)})})()]}),te&&(0,G.jsx)(G.Fragment,{children:(Eh=te.elementBoundingBoxes)!=null&&Eh.length?An.length>0?An.filter(f=>f.isConnected).map((f,y)=>{let w=en(f);return(0,G.jsx)("div",{className:`${j.multiSelectOutline} ${j.enter}`,style:{left:w.left,top:w.top,width:w.width,height:w.height}},`edit-multi-live-${y}`)}):te.elementBoundingBoxes.map((f,y)=>(0,G.jsx)("div",{className:`${j.multiSelectOutline} ${j.enter}`,style:{left:f.x,top:f.y-Fn,width:f.width,height:f.height}},`edit-multi-${y}`)):(()=>{let f=Sl&&Sl.isConnected?en(Sl):null,y=f?{x:f.left,y:f.top,width:f.width,height:f.height}:te.boundingBox?{x:te.boundingBox.x,y:te.isFixed?te.boundingBox.y:te.boundingBox.y-Fn,width:te.boundingBox.width,height:te.boundingBox.height}:null;return y?(0,G.jsx)("div",{className:`${te.isMultiSelect?j.multiSelectOutline:j.singleSelectOutline} ${j.enter}`,style:{left:y.x,top:y.y,width:y.width,height:y.height,...te.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})()}),Jl&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("div",{ref:nr,className:j.dragSelection}),(0,G.jsx)("div",{ref:Wa,className:j.highlightsContainer})]})]}),(0,G.jsx)(d6,{ref:Bs,annotation:dl?(Th=Is(dl))!=null?Th:te:null,editing:!!te,exiting:ca,restorePreview:Nn,scrollY:Fn,lightMode:!Ol,onExited:G5,editorProps:dl?{element:dl.element,selectedText:dl.selectedText,allowEmpty:typeof r=="object"&&!!((Rh=dl.attributes)!=null&&Rh[r.attribute]),onOpenSource:s&&dl.sourceFile?()=>s(dl.sourceFile):void 0,computedStyles:hv(dl.computedStyles),placeholder:"Edit your feedback...",initialValue:dl.comment,submitLabel:"Save",onSubmit:I5,onCancel:Q5,onDelete:()=>gd(dl.id),accentColor:dl.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)"}:void 0})]})]})}var E5=Ce(It());function C5(){var e=document.createElement("div");e.id="agentation-root",document.body.appendChild(e),(0,M5.createRoot)(e).render((0,E5.jsx)(S5,{appName:"Midnight Muse wireframe",className:"agentation-toolbar"}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",C5):C5();})();
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
