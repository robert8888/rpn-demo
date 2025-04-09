(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const rr=!1;var Ne=Array.isArray,vi=Array.prototype.indexOf,An=Array.from,yi=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,$r=Object.getOwnPropertyDescriptors,bi=Object.prototype,wi=Array.prototype,Sn=Object.getPrototypeOf,ar=Object.isExtensible;function jt(t){return typeof t=="function"}function _i(t){return t()}function tn(t){for(var e=0;e<t.length;e++)t[e]()}const Z=2,Zr=4,Ie=8,On=16,st=32,Lt=64,ge=128,G=256,ve=512,U=1024,ot=2048,Mt=4096,nt=8192,Te=16384,xi=32768,Pn=65536,ki=1<<17,Ei=1<<19,Qr=1<<20,en=1<<21,pt=Symbol("$state"),Jr=Symbol("legacy props"),Ai=Symbol("");function ta(t){return t===this.v}function Si(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function Cn(t){return!Si(t,this.v)}function Oi(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Pi(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ci(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Ni(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ii(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ti(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Fi(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Li(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Jt=!1,Mi=!1;function Ri(){Jt=!0}const Di=1,ji=2,zi=16,Bi=1,Vi=2,ea=4,Yi=8,Ui=16,Wi=1,qi=2,V=Symbol(),Gi="http://www.w3.org/1999/xhtml";function Hi(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let L=null;function ir(t){L=t}function te(t,e=!1,n){var r=L={p:L,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};Jt&&!e&&(L.l={s:null,u:null,r1:[],r2:It(!1)}),ca(()=>{r.d=!0})}function ee(t){const e=L;if(e!==null){const s=e.e;if(s!==null){var n=C,r=O;e.e=null;try{for(var a=0;a<s.length;a++){var i=s[a];mt(i.effect),Q(i.reaction),In(i.fn)}}finally{mt(n),Q(r)}}L=e.p,e.m=!0}return{}}function Fe(){return!Jt||L!==null&&L.l===null}function wt(t){if(typeof t!="object"||t===null||pt in t)return t;const e=Sn(t);if(e!==bi&&e!==wi)return t;var n=new Map,r=Ne(t),a=ut(0),i=O,s=o=>{var l=O;Q(i);var u=o();return Q(l),u};return r&&n.set("length",ut(t.length)),new Proxy(t,{defineProperty(o,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Ti();var c=n.get(l);return c===void 0?(c=s(()=>ut(u.value)),n.set(l,c)):M(c,s(()=>wt(u.value))),!0},deleteProperty(o,l){var u=n.get(l);if(u===void 0)l in o&&n.set(l,s(()=>ut(V)));else{if(r&&typeof l=="string"){var c=n.get("length"),d=Number(l);Number.isInteger(d)&&d<c.v&&M(c,d)}M(u,V),sr(a)}return!0},get(o,l,u){var m;if(l===pt)return t;var c=n.get(l),d=l in o;if(c===void 0&&(!d||(m=ht(o,l))!=null&&m.writable)&&(c=s(()=>ut(wt(d?o[l]:V))),n.set(l,c)),c!==void 0){var f=P(c);return f===V?void 0:f}return Reflect.get(o,l,u)},getOwnPropertyDescriptor(o,l){var u=Reflect.getOwnPropertyDescriptor(o,l);if(u&&"value"in u){var c=n.get(l);c&&(u.value=P(c))}else if(u===void 0){var d=n.get(l),f=d==null?void 0:d.v;if(d!==void 0&&f!==V)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return u},has(o,l){var f;if(l===pt)return!0;var u=n.get(l),c=u!==void 0&&u.v!==V||Reflect.has(o,l);if(u!==void 0||C!==null&&(!c||(f=ht(o,l))!=null&&f.writable)){u===void 0&&(u=s(()=>ut(c?wt(o[l]):V)),n.set(l,u));var d=P(u);if(d===V)return!1}return c},set(o,l,u,c){var k;var d=n.get(l),f=l in o;if(r&&l==="length")for(var m=u;m<d.v;m+=1){var v=n.get(m+"");v!==void 0?M(v,V):m in o&&(v=s(()=>ut(V)),n.set(m+"",v))}d===void 0?(!f||(k=ht(o,l))!=null&&k.writable)&&(d=s(()=>ut(void 0)),M(d,s(()=>wt(u))),n.set(l,d)):(f=d.v!==V,M(d,s(()=>wt(u))));var x=Reflect.getOwnPropertyDescriptor(o,l);if(x!=null&&x.set&&x.set.call(c,u),!f){if(r&&typeof l=="string"){var y=n.get("length"),_=Number(l);Number.isInteger(_)&&_>=y.v&&M(y,_+1)}sr(a)}return!0},ownKeys(o){P(a);var l=Reflect.ownKeys(o).filter(d=>{var f=n.get(d);return f===void 0||f.v!==V});for(var[u,c]of n)c.v!==V&&!(u in o)&&l.push(u);return l},setPrototypeOf(){Fi()}})}function sr(t,e=1){M(t,t.v+e)}const Ht=new Map;function It(t,e){var n={f:0,v:t,reactions:null,equals:ta,rv:0,wv:0};return n}function ut(t,e){const n=It(t);return is(n),n}function _t(t,e=!1){var r;const n=It(t);return e||(n.equals=Cn),Jt&&L!==null&&L.l!==null&&((r=L.l).s??(r.s=[])).push(n),n}function M(t,e,n=!1){O!==null&&!H&&Fe()&&(O.f&(Z|On))!==0&&!(B!=null&&B.includes(t))&&Li();let r=n?wt(e):e;return na(t,r)}function na(t,e){if(!t.equals(e)){var n=t.v;ne?Ht.set(t,e):Ht.set(t,n),t.v=e,t.wv=ba(),ra(t,ot),Fe()&&C!==null&&(C.f&U)!==0&&(C.f&(st|Lt))===0&&(q===null?ss([t]):q.push(t))}return e}function or(t,e=1){var n=P(t),r=e===1?n++:n--;return M(t,n),r}function ra(t,e){var n=t.reactions;if(n!==null)for(var r=Fe(),a=n.length,i=0;i<a;i++){var s=n[i],o=s.f;(o&ot)===0&&(!r&&s===C||(J(s,e),(o&(U|G))!==0&&((o&Z)!==0?ra(s,Mt):je(s))))}}let Xi=!1;var lr,aa,ia,sa;function Ki(){if(lr===void 0){lr=window,aa=/Firefox/.test(navigator.userAgent);var t=Element.prototype,e=Node.prototype,n=Text.prototype;ia=ht(e,"firstChild").get,sa=ht(e,"nextSibling").get,ar(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),ar(n)&&(n.__t=void 0)}}function Nn(t=""){return document.createTextNode(t)}function X(t){return ia.call(t)}function Le(t){return sa.call(t)}function et(t,e){return X(t)}function oa(t,e){{var n=X(t);return n instanceof Comment&&n.data===""?Le(n):n}}function Vt(t,e=1,n=!1){let r=t;for(;e--;)r=Le(r);return r}function $i(t){t.textContent=""}function Xt(t){var e=Z|ot,n=O!==null&&(O.f&Z)!==0?O:null;return C===null||n!==null&&(n.f&G)!==0?e|=G:C.f|=Qr,{ctx:L,deps:null,effects:null,equals:ta,f:e,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??C}}function Me(t){const e=Xt(t);return e.equals=Cn,e}function la(t){var e=t.effects;if(e!==null){t.effects=null;for(var n=0;n<e.length;n+=1)rt(e[n])}}function Zi(t){for(var e=t.parent;e!==null;){if((e.f&Z)===0)return e;e=e.parent}return null}function Qi(t){var e,n=C;mt(Zi(t));try{la(t),e=_a(t)}finally{mt(n)}return e}function ua(t){var e=Qi(t),n=(dt||(t.f&G)!==0)&&t.deps!==null?Mt:U;J(t,n),t.equals(e)||(t.v=e,t.wv=ba())}function fa(t){C===null&&O===null&&Ci(),O!==null&&(O.f&G)!==0&&C===null&&Pi(),ne&&Oi()}function Ji(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Rt(t,e,n,r=!0){var a=C,i={ctx:L,deps:null,nodes_start:null,nodes_end:null,f:t|ot,first:null,fn:e,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(n)try{Ln(i),i.f|=xi}catch(l){throw rt(i),l}else e!==null&&je(i);var s=n&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(Qr|ge))===0;if(!s&&r&&(a!==null&&Ji(i,a),O!==null&&(O.f&Z)!==0)){var o=O;(o.effects??(o.effects=[])).push(i)}return i}function ca(t){const e=Rt(Ie,null,!1);return J(e,U),e.teardown=t,e}function ur(t){fa();var e=C!==null&&(C.f&st)!==0&&L!==null&&!L.m;if(e){var n=L;(n.e??(n.e=[])).push({fn:t,effect:C,reaction:O})}else{var r=In(t);return r}}function ts(t){return fa(),da(t)}function es(t){const e=Rt(Lt,t,!0);return(n={})=>new Promise(r=>{n.outro?ye(e,()=>{rt(e),r(void 0)}):(rt(e),r(void 0))})}function In(t){return Rt(Zr,t,!1)}function da(t){return Rt(Ie,t,!0)}function Wt(t,e=[],n=Xt){const r=e.map(n);return Re(()=>t(...r.map(P)))}function Re(t,e=0){return Rt(Ie|On|e,t,!0)}function Tt(t,e=!0){return Rt(Ie|st,t,!0,e)}function ha(t){var e=t.teardown;if(e!==null){const n=ne,r=O;fr(!0),Q(null);try{e.call(null)}finally{fr(n),Q(r)}}}function pa(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;(n.f&Lt)!==0?n.parent=null:rt(n,e),n=r}}function ns(t){for(var e=t.first;e!==null;){var n=e.next;(e.f&st)===0&&rt(e),e=n}}function rt(t,e=!0){var n=!1;if((e||(t.f&Ei)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,a=t.nodes_end;r!==null;){var i=r===a?null:Le(r);r.remove(),r=i}n=!0}pa(t,e&&!n),ke(t,0),J(t,Te);var s=t.transitions;if(s!==null)for(const l of s)l.stop();ha(t);var o=t.parent;o!==null&&o.first!==null&&ma(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function ma(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function ye(t,e){var n=[];Tn(t,n,!0),ga(n,()=>{rt(t),e&&e()})}function ga(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var a of t)a.out(r)}else e()}function Tn(t,e,n){if((t.f&nt)===0){if(t.f^=nt,t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&e.push(s);for(var r=t.first;r!==null;){var a=r.next,i=(r.f&Pn)!==0||(r.f&st)!==0;Tn(r,e,i?n:!1),r=a}}}function be(t){va(t,!0)}function va(t,e){if((t.f&nt)!==0){t.f^=nt,(t.f&U)===0&&(t.f^=U),re(t)&&(J(t,ot),je(t));for(var n=t.first;n!==null;){var r=n.next,a=(n.f&Pn)!==0||(n.f&st)!==0;va(n,a?e:!1),n=r}if(t.transitions!==null)for(const i of t.transitions)(i.is_global||e)&&i.in()}}let we=[];function rs(){var t=we;we=[],tn(t)}function Fn(t){we.length===0&&queueMicrotask(rs),we.push(t)}let ce=!1,nn=!1,_e=null,kt=!1,ne=!1;function fr(t){ne=t}let de=[];let O=null,H=!1;function Q(t){O=t}let C=null;function mt(t){C=t}let B=null;function as(t){B=t}function is(t){O!==null&&O.f&en&&(B===null?as([t]):B.push(t))}let z=null,Y=0,q=null;function ss(t){q=t}let ya=1,xe=0,dt=!1;function ba(){return++ya}function re(t){var d;var e=t.f;if((e&ot)!==0)return!0;if((e&Mt)!==0){var n=t.deps,r=(e&G)!==0;if(n!==null){var a,i,s=(e&ve)!==0,o=r&&C!==null&&!dt,l=n.length;if(s||o){var u=t,c=u.parent;for(a=0;a<l;a++)i=n[a],(s||!((d=i==null?void 0:i.reactions)!=null&&d.includes(u)))&&(i.reactions??(i.reactions=[])).push(u);s&&(u.f^=ve),o&&c!==null&&(c.f&G)===0&&(u.f^=G)}for(a=0;a<l;a++)if(i=n[a],re(i)&&ua(i),i.wv>t.wv)return!0}(!r||C!==null&&!dt)&&J(t,U)}return!1}function os(t,e){for(var n=e;n!==null;){if((n.f&ge)!==0)try{n.fn(t);return}catch{n.f^=ge}n=n.parent}throw ce=!1,t}function ls(t){return(t.f&Te)===0&&(t.parent===null||(t.parent.f&ge)===0)}function De(t,e,n,r){if(ce){if(n===null&&(ce=!1),ls(e))throw t;return}n!==null&&(ce=!0);{os(t,e);return}}function wa(t,e,n=!0){var r=t.reactions;if(r!==null)for(var a=0;a<r.length;a++){var i=r[a];B!=null&&B.includes(t)||((i.f&Z)!==0?wa(i,e,!1):e===i&&(n?J(i,ot):(i.f&U)!==0&&J(i,Mt),je(i)))}}function _a(t){var m;var e=z,n=Y,r=q,a=O,i=dt,s=B,o=L,l=H,u=t.f;z=null,Y=0,q=null,dt=(u&G)!==0&&(H||!kt||O===null),O=(u&(st|Lt))===0?t:null,B=null,ir(t.ctx),H=!1,xe++,t.f|=en;try{var c=(0,t.fn)(),d=t.deps;if(z!==null){var f;if(ke(t,Y),d!==null&&Y>0)for(d.length=Y+z.length,f=0;f<z.length;f++)d[Y+f]=z[f];else t.deps=d=z;if(!dt)for(f=Y;f<d.length;f++)((m=d[f]).reactions??(m.reactions=[])).push(t)}else d!==null&&Y<d.length&&(ke(t,Y),d.length=Y);if(Fe()&&q!==null&&!H&&d!==null&&(t.f&(Z|Mt|ot))===0)for(f=0;f<q.length;f++)wa(q[f],t);return a!==t&&(xe++,q!==null&&(r===null?r=q:r.push(...q))),c}finally{z=e,Y=n,q=r,O=a,dt=i,B=s,ir(o),H=l,t.f^=en}}function us(t,e){let n=e.reactions;if(n!==null){var r=vi.call(n,t);if(r!==-1){var a=n.length-1;a===0?n=e.reactions=null:(n[r]=n[a],n.pop())}}n===null&&(e.f&Z)!==0&&(z===null||!z.includes(e))&&(J(e,Mt),(e.f&(G|ve))===0&&(e.f^=ve),la(e),ke(e,0))}function ke(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)us(t,n[r])}function Ln(t){var e=t.f;if((e&Te)===0){J(t,U);var n=C,r=L,a=kt;C=t,kt=!0;try{(e&On)!==0?ns(t):pa(t),ha(t);var i=_a(t);t.teardown=typeof i=="function"?i:null,t.wv=ya;var s=t.deps,o;rr&&Mi&&t.f&ot}catch(l){De(l,t,n,r||t.ctx)}finally{kt=a,C=n}}}function fs(){try{Ni()}catch(t){if(_e!==null)De(t,_e,null);else throw t}}function cs(){var t=kt;try{var e=0;for(kt=!0;de.length>0;){e++>1e3&&fs();var n=de,r=n.length;de=[];for(var a=0;a<r;a++){var i=hs(n[a]);ds(i)}Ht.clear()}}finally{nn=!1,kt=t,_e=null}}function ds(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];if((r.f&(Te|nt))===0)try{re(r)&&(Ln(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?ma(r):r.fn=null))}catch(a){De(a,r,null,r.ctx)}}}function je(t){nn||(nn=!0,queueMicrotask(cs));for(var e=_e=t;e.parent!==null;){e=e.parent;var n=e.f;if((n&(Lt|st))!==0){if((n&U)===0)return;e.f^=U}}de.push(e)}function hs(t){for(var e=[],n=t;n!==null;){var r=n.f,a=(r&(st|Lt))!==0,i=a&&(r&U)!==0;if(!i&&(r&nt)===0){if((r&Zr)!==0)e.push(n);else if(a)n.f^=U;else{var s=O;try{O=n,re(n)&&Ln(n)}catch(u){De(u,n,null,n.ctx)}finally{O=s}}var o=n.first;if(o!==null){n=o;continue}}var l=n.parent;for(n=n.next;n===null&&l!==null;)n=l.next,l=l.parent}return e}function P(t){var e=t.f,n=(e&Z)!==0;if(O!==null&&!H){if(!(B!=null&&B.includes(t))){var r=O.deps;t.rv<xe&&(t.rv=xe,z===null&&r!==null&&r[Y]===t?Y++:z===null?z=[t]:(!dt||!z.includes(t))&&z.push(t))}}else if(n&&t.deps===null&&t.effects===null){var a=t,i=a.parent;i!==null&&(i.f&G)===0&&(a.f^=G)}return n&&(a=t,re(a)&&ua(a)),ne&&Ht.has(t)?Ht.get(t):t.v}function Ee(t){var e=H;try{return H=!0,t()}finally{H=e}}const ps=-7169;function J(t,e){t.f=t.f&ps|e}function ms(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)rn(t);else if(!Array.isArray(t))for(let e in t){const n=t[e];typeof n=="object"&&n&&pt in n&&rn(n)}}}function rn(t,e=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!e.has(t)){e.add(t),t instanceof Date&&t.getTime();for(let r in t)try{rn(t[r],e)}catch{}const n=Sn(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=$r(n);for(let a in r){const i=r[a].get;if(i)try{i.call(t)}catch{}}}}}function gs(t){return t.endsWith("capture")&&t!=="gotpointercapture"&&t!=="lostpointercapture"}const vs=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ys(t){return vs.includes(t)}const bs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ws(t){return t=t.toLowerCase(),bs[t]??t}const _s=["touchstart","touchmove"];function xs(t){return _s.includes(t)}function ks(t,e){if(e){const n=document.body;t.autofocus=!0,Fn(()=>{document.activeElement===n&&t.focus()})}}function Es(t){var e=O,n=C;Q(null),mt(null);try{return t()}finally{Q(e),mt(n)}}const xa=new Set,an=new Set;function ka(t,e,n,r={}){function a(i){if(r.capture||Yt.call(e,i),!i.cancelBubble)return Es(()=>n==null?void 0:n.call(this,i))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Fn(()=>{e.addEventListener(t,a,r)}):e.addEventListener(t,a,r),a}function he(t,e,n,r,a){var i={capture:r,passive:a},s=ka(t,e,n,i);(e===document.body||e===window||e===document)&&ca(()=>{e.removeEventListener(t,s,i)})}function As(t){for(var e=0;e<t.length;e++)xa.add(t[e]);for(var n of an)n(t)}function Yt(t){var k;var e=this,n=e.ownerDocument,r=t.type,a=((k=t.composedPath)==null?void 0:k.call(t))||[],i=a[0]||t.target,s=0,o=t.__root;if(o){var l=a.indexOf(o);if(l!==-1&&(e===document||e===window)){t.__root=e;return}var u=a.indexOf(e);if(u===-1)return;l<=u&&(s=l)}if(i=a[s]||t.target,i!==e){yi(t,"currentTarget",{configurable:!0,get(){return i||n}});var c=O,d=C;Q(null),mt(null);try{for(var f,m=[];i!==null;){var v=i.assignedSlot||i.parentNode||i.host||null;try{var x=i["__"+r];if(x!=null&&(!i.disabled||t.target===i))if(Ne(x)){var[y,..._]=x;y.apply(i,[t,..._])}else x.call(i,t)}catch(g){f?m.push(g):f=g}if(t.cancelBubble||v===e||v===null)break;i=v}if(f){for(let g of m)queueMicrotask(()=>{throw g});throw f}}finally{t.__root=e,delete t.currentTarget,Q(c),mt(d)}}}function Mn(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Kt(t,e){var n=C;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function ae(t,e){var n=(e&Wi)!==0,r=(e&qi)!==0,a,i=!t.startsWith("<!>");return()=>{a===void 0&&(a=Mn(i?t:"<!>"+t),n||(a=X(a)));var s=r||aa?document.importNode(a,!0):a.cloneNode(!0);if(n){var o=X(s),l=s.lastChild;Kt(o,l)}else Kt(s,s);return s}}function Ss(t,e,n="svg"){var r=!t.startsWith("<!>"),a=`<${n}>${r?t:"<!>"+t}</${n}>`,i;return()=>{if(!i){var s=Mn(a),o=X(s);i=X(o)}var l=i.cloneNode(!0);return Kt(l,l),l}}function Os(){var t=document.createDocumentFragment(),e=document.createComment(""),n=Nn();return t.append(e,n),Kt(e,n),t}function Et(t,e){t!==null&&t.before(e)}function cr(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n+"")}function Ps(t,e){return Cs(t,e)}const Ot=new Map;function Cs(t,{target:e,anchor:n,props:r={},events:a,context:i,intro:s=!0}){Ki();var o=new Set,l=d=>{for(var f=0;f<d.length;f++){var m=d[f];if(!o.has(m)){o.add(m);var v=xs(m);e.addEventListener(m,Yt,{passive:v});var x=Ot.get(m);x===void 0?(document.addEventListener(m,Yt,{passive:v}),Ot.set(m,1)):Ot.set(m,x+1)}}};l(An(xa)),an.add(l);var u=void 0,c=es(()=>{var d=n??e.appendChild(Nn());return Tt(()=>{if(i){te({});var f=L;f.c=i}a&&(r.$$events=a),u=t(d,r)||{},i&&ee()}),()=>{var v;for(var f of o){e.removeEventListener(f,Yt);var m=Ot.get(f);--m===0?(document.removeEventListener(f,Yt),Ot.delete(f)):Ot.set(f,m)}an.delete(l),d!==n&&((v=d.parentNode)==null||v.removeChild(d))}});return Ns.set(u,c),u}let Ns=new WeakMap;function Ea(t,e,[n,r]=[0,0]){var a=t,i=null,s=null,o=V,l=n>0?Pn:0,u=!1;const c=(f,m=!0)=>{u=!0,d(m,f)},d=(f,m)=>{o!==(o=f)&&(o?(i?be(i):m&&(i=Tt(()=>m(a))),s&&ye(s,()=>{s=null})):(s?be(s):m&&(s=Tt(()=>m(a,[n+1,r]))),i&&ye(i,()=>{i=null})))};Re(()=>{u=!1,e(c),u||d(null,null)},l)}function Is(t,e){return e}function Ts(t,e,n,r){for(var a=[],i=e.length,s=0;s<i;s++)Tn(e[s].e,a,!0);var o=i>0&&a.length===0&&n!==null;if(o){var l=n.parentNode;$i(l),l.append(n),r.clear(),ct(t,e[0].prev,e[i-1].next)}ga(a,()=>{for(var u=0;u<i;u++){var c=e[u];o||(r.delete(c.k),ct(t,c.prev,c.next)),rt(c.e,!o)}})}function Fs(t,e,n,r,a,i=null){var s=t,o={flags:e,items:new Map,first:null};{var l=t;s=l.appendChild(Nn())}var u=null,c=!1,d=Me(()=>{var f=n();return Ne(f)?f:f==null?[]:An(f)});Re(()=>{var f=P(d),m=f.length;c&&m===0||(c=m===0,Ls(f,o,s,a,e,r,n),i!==null&&(m===0?u?be(u):u=Tt(()=>i(s)):u!==null&&ye(u,()=>{u=null})),P(d))})}function Ls(t,e,n,r,a,i,s){var o=t.length,l=e.items,u=e.first,c=u,d,f=null,m=[],v=[],x,y,_,k;for(k=0;k<o;k+=1){if(x=t[k],y=i(x,k),_=l.get(y),_===void 0){var g=c?c.e.nodes_start:n;f=Rs(g,e,f,f===null?e.first:f.next,x,y,k,r,a,s),l.set(y,f),m=[],v=[],c=f.next;continue}if(Ms(_,x,k),(_.e.f&nt)!==0&&be(_.e),_!==c){if(d!==void 0&&d.has(_)){if(m.length<v.length){var b=v[0],E;f=b.prev;var I=m[0],A=m[m.length-1];for(E=0;E<m.length;E+=1)dr(m[E],b,n);for(E=0;E<v.length;E+=1)d.delete(v[E]);ct(e,I.prev,A.next),ct(e,f,I),ct(e,A,b),c=b,f=A,k-=1,m=[],v=[]}else d.delete(_),dr(_,c,n),ct(e,_.prev,_.next),ct(e,_,f===null?e.first:f.next),ct(e,f,_),f=_;continue}for(m=[],v=[];c!==null&&c.k!==y;)(c.e.f&nt)===0&&(d??(d=new Set)).add(c),v.push(c),c=c.next;if(c===null)continue;_=c}m.push(_),f=_,c=_.next}if(c!==null||d!==void 0){for(var R=d===void 0?[]:An(d);c!==null;)(c.e.f&nt)===0&&R.push(c),c=c.next;var tt=R.length;if(tt>0){var gi=o===0?n:null;Ts(e,R,gi,l)}}C.first=e.first&&e.first.e,C.last=f&&f.e}function Ms(t,e,n,r){na(t.v,e),t.i=n}function Rs(t,e,n,r,a,i,s,o,l,u){var c=(l&Di)!==0,d=(l&zi)===0,f=c?d?_t(a):It(a):a,m=(l&ji)===0?s:It(s),v={i:m,v:f,k:i,a:null,e:null,prev:n,next:r};try{return v.e=Tt(()=>o(t,f,m,u),Xi),v.e.prev=n&&n.e,v.e.next=r&&r.e,n===null?e.first=v:(n.next=v,n.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function dr(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,a=e?e.e.nodes_start:n,i=t.e.nodes_start;i!==r;){var s=Le(i);a.before(i),i=s}}function ct(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Ds(t,e,n,r,a){var i=t,s="",o;Re(()=>{s!==(s=e()??"")&&(o!==void 0&&(rt(o),o=void 0),s!==""&&(o=Tt(()=>{var l=s+"";l=`<svg>${l}</svg>`;var u=Mn(l);for(u=X(u),Kt(X(u),u.lastChild);X(u);)i.before(X(u))})))})}function Aa(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var a=t.length;for(e=0;e<a;e++)t[e]&&(n=Aa(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function js(){for(var t,e,n=0,r="",a=arguments.length;n<a;n++)(t=arguments[n])&&(e=Aa(t))&&(r&&(r+=" "),r+=e);return r}function zs(t){return typeof t=="object"?js(t):t??""}const hr=[...` 	
\r\f \v\uFEFF`];function Bs(t,e,n){var r=t==null?"":""+t;if(e&&(r=r?r+" "+e:e),n){for(var a in n)if(n[a])r=r?r+" "+a:a;else if(r.length)for(var i=a.length,s=0;(s=r.indexOf(a,s))>=0;){var o=s+i;(s===0||hr.includes(r[s-1]))&&(o===r.length||hr.includes(r[o]))?r=(s===0?"":r.substring(0,s))+r.substring(o+1):s=o}}return r===""?null:r}function pr(t,e=!1){var n=e?" !important;":";",r="";for(var a in t){var i=t[a];i!=null&&i!==""&&(r+=" "+a+": "+i+n)}return r}function qe(t){return t[0]!=="-"||t[1]!=="-"?t.toLowerCase():t}function Vs(t,e){if(e){var n="",r,a;if(Array.isArray(e)?(r=e[0],a=e[1]):r=e,t){t=String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,o=!1,l=[];r&&l.push(...Object.keys(r).map(qe)),a&&l.push(...Object.keys(a).map(qe));var u=0,c=-1;const x=t.length;for(var d=0;d<x;d++){var f=t[d];if(o?f==="/"&&t[d-1]==="*"&&(o=!1):i?i===f&&(i=!1):f==="/"&&t[d+1]==="*"?o=!0:f==='"'||f==="'"?i=f:f==="("?s++:f===")"&&s--,!o&&i===!1&&s===0){if(f===":"&&c===-1)c=d;else if(f===";"||d===x-1){if(c!==-1){var m=qe(t.substring(u,c).trim());if(!l.includes(m)){f!==";"&&d++;var v=t.substring(u,d).trim();n+=" "+v+";"}}u=d+1,c=-1}}}}return r&&(n+=pr(r)),a&&(n+=pr(a,!0)),n=n.trim(),n===""?null:n}return t==null?null:String(t)}function Rn(t,e,n,r,a,i){var s=t.__className;if(s!==n||s===void 0){var o=Bs(n,r,i);o==null?t.removeAttribute("class"):e?t.className=o:t.setAttribute("class",o),t.__className=n}else if(i&&a!==i)for(var l in i){var u=!!i[l];(a==null||u!==!!a[l])&&t.classList.toggle(l,u)}return i}function Ge(t,e={},n,r){for(var a in n){var i=n[a];e[a]!==i&&(n[a]==null?t.style.removeProperty(a):t.style.setProperty(a,i,r))}}function Ys(t,e,n,r){var a=t.__style;if(a!==e){var i=Vs(e,r);i==null?t.removeAttribute("style"):t.style.cssText=i,t.__style=e}else r&&(Array.isArray(r)?(Ge(t,n==null?void 0:n[0],r[0]),Ge(t,n==null?void 0:n[1],r[1],"important")):Ge(t,n,r));return r}const zt=Symbol("class"),Bt=Symbol("style"),Sa=Symbol("is custom element"),Oa=Symbol("is html");function Us(t,e){e?t.hasAttribute("selected")||t.setAttribute("selected",""):t.removeAttribute("selected")}function mr(t,e,n,r){var a=Pa(t);a[e]!==(a[e]=n)&&(e==="loading"&&(t[Ai]=n),n==null?t.removeAttribute(e):typeof n!="string"&&Ca(t).includes(e)?t[e]=n:t.setAttribute(e,n))}function Ws(t,e,n,r,a=!1){var i=Pa(t),s=i[Sa],o=!i[Oa],l=e||{},u=t.tagName==="OPTION";for(var c in e)c in n||(n[c]=null);n.class?n.class=zs(n.class):n[zt]&&(n.class=null),n[Bt]&&(n.style??(n.style=null));var d=Ca(t);for(const g in n){let b=n[g];if(u&&g==="value"&&b==null){t.value=t.__value="",l[g]=b;continue}if(g==="class"){var f=t.namespaceURI==="http://www.w3.org/1999/xhtml";Rn(t,f,b,r,e==null?void 0:e[zt],n[zt]),l[g]=b,l[zt]=n[zt];continue}if(g==="style"){Ys(t,b,e==null?void 0:e[Bt],n[Bt]),l[g]=b,l[Bt]=n[Bt];continue}var m=l[g];if(b!==m){l[g]=b;var v=g[0]+g[1];if(v!=="$$")if(v==="on"){const E={},I="$$"+g;let A=g.slice(2);var x=ys(A);if(gs(A)&&(A=A.slice(0,-7),E.capture=!0),!x&&m){if(b!=null)continue;t.removeEventListener(A,l[I],E),l[I]=null}if(b!=null)if(x)t[`__${A}`]=b,As([A]);else{let R=function(tt){l[g].call(this,tt)};var k=R;l[I]=ka(A,t,R,E)}else x&&(t[`__${A}`]=void 0)}else if(g==="style")mr(t,g,b);else if(g==="autofocus")ks(t,!!b);else if(!s&&(g==="__value"||g==="value"&&b!=null))t.value=t.__value=b;else if(g==="selected"&&u)Us(t,b);else{var y=g;o||(y=ws(y));var _=y==="defaultValue"||y==="defaultChecked";if(b==null&&!s&&!_)if(i[g]=null,y==="value"||y==="checked"){let E=t;const I=e===void 0;if(y==="value"){let A=E.defaultValue;E.removeAttribute(y),E.defaultValue=A,E.value=E.__value=I?A:null}else{let A=E.defaultChecked;E.removeAttribute(y),E.defaultChecked=A,E.checked=I?A:!1}}else t.removeAttribute(g);else _||d.includes(y)&&(s||typeof b!="string")?t[y]=b:typeof b!="function"&&mr(t,y,b)}}}return l}function Pa(t){return t.__attributes??(t.__attributes={[Sa]:t.nodeName.includes("-"),[Oa]:t.namespaceURI===Gi})}var gr=new Map;function Ca(t){var e=gr.get(t.nodeName);if(e)return e;gr.set(t.nodeName,e=[]);for(var n,r=t,a=Element.prototype;a!==r;){n=$r(r);for(var i in n)n[i].set&&e.push(i);r=Sn(r)}return e}function vr(t,e){return t===e||(t==null?void 0:t[pt])===e}function Na(t={},e,n,r){return In(()=>{var a,i;return da(()=>{a=i,i=[],Ee(()=>{t!==n(...i)&&(e(t,...i),a&&vr(n(...a),t)&&e(null,...a))})}),()=>{Fn(()=>{i&&vr(n(...i),t)&&e(null,...i)})}}),t}function ze(t=!1){const e=L,n=e.l.u;if(!n)return;let r=()=>ms(e.s);if(t){let a=0,i={};const s=Xt(()=>{let o=!1;const l=e.s;for(const u in l)l[u]!==i[u]&&(i[u]=l[u],o=!0);return o&&a++,a});r=()=>P(s)}n.b.length&&ts(()=>{yr(e,r),tn(n.b)}),ur(()=>{const a=Ee(()=>n.m.map(_i));return()=>{for(const i of a)typeof i=="function"&&i()}}),n.a.length&&ur(()=>{yr(e,r),tn(n.a)})}function yr(t,e){if(t.l.s)for(const n of t.l.s)P(n);e()}let le=!1;function qs(t){var e=le;try{return le=!1,[t(),le]}finally{le=e}}const Gs={get(t,e){if(!t.exclude.includes(e))return P(t.version),e in t.special?t.special[e]():t.props[e]},set(t,e,n){return e in t.special||(t.special[e]=S({get[e](){return t.props[e]}},e,ea)),t.special[e](n),or(t.version),!0},getOwnPropertyDescriptor(t,e){if(!t.exclude.includes(e)&&e in t.props)return{enumerable:!0,configurable:!0,value:t.props[e]}},deleteProperty(t,e){return t.exclude.includes(e)||(t.exclude.push(e),or(t.version)),!0},has(t,e){return t.exclude.includes(e)?!1:e in t.props},ownKeys(t){return Reflect.ownKeys(t.props).filter(e=>!t.exclude.includes(e))}};function br(t,e){return new Proxy({props:t,exclude:e,special:{},version:It(0)},Gs)}const Hs={get(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(jt(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r)return r[e]}},set(t,e,n){let r=t.props.length;for(;r--;){let a=t.props[r];jt(a)&&(a=a());const i=ht(a,e);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(t,e){let n=t.props.length;for(;n--;){let r=t.props[n];if(jt(r)&&(r=r()),typeof r=="object"&&r!==null&&e in r){const a=ht(r,e);return a&&!a.configurable&&(a.configurable=!0),a}}},has(t,e){if(e===pt||e===Jr)return!1;for(let n of t.props)if(jt(n)&&(n=n()),n!=null&&e in n)return!0;return!1},ownKeys(t){const e=[];for(let n of t.props){jt(n)&&(n=n());for(const r in n)e.includes(r)||e.push(r)}return e}};function Xs(...t){return new Proxy({props:t},Hs)}function wr(t){var e;return((e=t.ctx)==null?void 0:e.d)??!1}function S(t,e,n,r){var I;var a=(n&Bi)!==0,i=!Jt||(n&Vi)!==0,s=(n&Yi)!==0,o=(n&Ui)!==0,l=!1,u;s?[u,l]=qs(()=>t[e]):u=t[e];var c=pt in t||Jr in t,d=s&&(((I=ht(t,e))==null?void 0:I.set)??(c&&e in t&&(A=>t[e]=A)))||void 0,f=r,m=!0,v=!1,x=()=>(v=!0,m&&(m=!1,o?f=Ee(r):f=r),f);u===void 0&&r!==void 0&&(d&&i&&Ii(),u=x(),d&&d(u));var y;if(i)y=()=>{var A=t[e];return A===void 0?x():(m=!0,v=!1,A)};else{var _=(a?Xt:Me)(()=>t[e]);_.f|=ki,y=()=>{var A=P(_);return A!==void 0&&(f=void 0),A===void 0?f:A}}if((n&ea)===0)return y;if(d){var k=t.$$legacy;return function(A,R){return arguments.length>0?((!i||!R||k||l)&&d(R?y():A),A):y()}}var g=!1,b=_t(u),E=Xt(()=>{var A=y(),R=P(b);return g?(g=!1,R):b.v=A});return s&&P(E),a||(E.equals=Cn),function(A,R){if(arguments.length>0){const tt=R?P(E):i&&s?wt(A):A;if(!E.equals(tt)){if(g=!0,M(b,tt),v&&f!==void 0&&(f=tt),wr(E))return A;Ee(()=>P(E))}return A}return wr(E)?E.v:P(E)}}function Ks(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function $s(){const t=L;return t===null&&Hi(),(e,n,r)=>{var i;const a=(i=t.s.$$events)==null?void 0:i[e];if(a){const s=Ne(a)?a.slice():[a],o=Ks(e,n,r);for(const l of s)l.call(t.x,o);return!o.defaultPrevented}return!0}}const Zs="5";var Kr;typeof window<"u"&&((Kr=window.__svelte??(window.__svelte={})).v??(Kr.v=new Set)).add(Zs);Ri();/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Qs={prefix:"fas",iconName:"calculator",icon:[384,512,[128425],"f1ec","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM96 64l192 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L96 160c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm32 160a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM96 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM64 416c0-17.7 14.3-32 32-32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0c-17.7 0-32-14.3-32-32zM192 256a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm32 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 448a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"]};function Js(t){const{beat:e,fade:n,beatFade:r,bounce:a,shake:i,flash:s,spin:o,spinPulse:l,spinReverse:u,pulse:c,fixedWidth:d,inverse:f,border:m,listItem:v,flip:x,size:y,rotation:_,pull:k}=t,g={"fa-beat":e,"fa-fade":n,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":i,"fa-flash":s,"fa-spin":o,"fa-spin-reverse":u,"fa-spin-pulse":l,"fa-pulse":c,"fa-fw":d,"fa-inverse":f,"fa-border":m,"fa-li":v,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both",[`fa-${y}`]:typeof y<"u"&&y!==null,[`fa-rotate-${_}`]:typeof _<"u"&&_!==null&&_!==0,[`fa-pull-${k}`]:typeof k<"u"&&k!==null,"fa-swap-opacity":t.swapOpacity};return Object.keys(g).map(b=>g[b]?b:null).filter(b=>b)}function to(t){return t=t-0,t===t}function eo(t){return to(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}function no(t){return typeof t=="string"?t:Object.keys(t).reduce((e,n)=>e+n.split(/(?=[A-Z])/).join("-").toLowerCase()+":"+t[n]+";","")}function Ia(t,e,n={}){if(typeof e=="string")return e;const r=(e.children||[]).map(i=>Ia(t,i)),a=Object.keys(e.attributes||{}).reduce((i,s)=>{const o=e.attributes[s];return s==="style"?i.attrs.style=no(o):s.indexOf("aria-")===0||s.indexOf("data-")===0?i.attrs[s.toLowerCase()]=o:i.attrs[eo(s)]=o,i},{attrs:{}});return t(e.tag,{...a.attrs},r)}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function ro(t,e,n){return(e=io(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?_r(Object(n),!0).forEach(function(r){ro(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_r(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ao(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function io(t){var e=ao(t,"string");return typeof e=="symbol"?e:e+""}const xr=()=>{};let Dn={},Ta={},Fa=null,La={mark:xr,measure:xr};try{typeof window<"u"&&(Dn=window),typeof document<"u"&&(Ta=document),typeof MutationObserver<"u"&&(Fa=MutationObserver),typeof performance<"u"&&(La=performance)}catch{}const{userAgent:kr=""}=Dn.navigator||{},gt=Dn,N=Ta,Er=Fa,ue=La;gt.document;const lt=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",Ma=~kr.indexOf("MSIE")||~kr.indexOf("Trident/");var so=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,oo=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ra={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},lo={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Da=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],D="classic",Be="duotone",uo="sharp",fo="sharp-duotone",ja=[D,Be,uo,fo],co={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},ho={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},po=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),mo={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},go=["fak","fa-kit","fakd","fa-kit-duotone"],Ar={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},vo=["kit"],yo={kit:{"fa-kit":"fak"}},bo=["fak","fakd"],wo={kit:{fak:"fa-kit"}},Sr={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},fe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_o=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],xo=["fak","fa-kit","fakd","fa-kit-duotone"],ko={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Eo={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ao={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},sn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},So=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],on=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",..._o,...So],Oo=["solid","regular","light","thin","duotone","brands"],za=[1,2,3,4,5,6,7,8,9,10],Po=za.concat([11,12,13,14,15,16,17,18,19,20]),Co=[...Object.keys(Ao),...Oo,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fe.GROUP,fe.SWAP_OPACITY,fe.PRIMARY,fe.SECONDARY].concat(za.map(t=>"".concat(t,"x"))).concat(Po.map(t=>"w-".concat(t))),No={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const at="___FONT_AWESOME___",ln=16,Ba="fa",Va="svg-inline--fa",At="data-fa-i2svg",un="data-fa-pseudo-element",Io="data-fa-pseudo-element-pending",jn="data-prefix",zn="data-icon",Or="fontawesome-i2svg",To="async",Fo=["HTML","HEAD","STYLE","SCRIPT"],Ya=(()=>{try{return!0}catch{return!1}})();function ie(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[D]}})}const Ua=h({},Ra);Ua[D]=h(h(h(h({},{"fa-duotone":"duotone"}),Ra[D]),Ar.kit),Ar["kit-duotone"]);const Lo=ie(Ua),fn=h({},mo);fn[D]=h(h(h(h({},{duotone:"fad"}),fn[D]),Sr.kit),Sr["kit-duotone"]);const Pr=ie(fn),cn=h({},sn);cn[D]=h(h({},cn[D]),wo.kit);const Bn=ie(cn),dn=h({},Eo);dn[D]=h(h({},dn[D]),yo.kit);ie(dn);const Mo=so,Wa="fa-layers-text",Ro=oo,Do=h({},co);ie(Do);const jo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],He=lo,zo=[...vo,...Co],qt=gt.FontAwesomeConfig||{};function Bo(t){var e=N.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Vo(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}N&&typeof N.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=Vo(Bo(n));a!=null&&(qt[r]=a)});const qa={styleDefault:"solid",familyDefault:D,cssPrefix:Ba,replacementClass:Va,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qt.familyPrefix&&(qt.cssPrefix=qt.familyPrefix);const Ft=h(h({},qa),qt);Ft.autoReplaceSvg||(Ft.observeMutations=!1);const w={};Object.keys(qa).forEach(t=>{Object.defineProperty(w,t,{enumerable:!0,set:function(e){Ft[t]=e,Gt.forEach(n=>n(w))},get:function(){return Ft[t]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(t){Ft.cssPrefix=t,Gt.forEach(e=>e(w))},get:function(){return Ft.cssPrefix}});gt.FontAwesomeConfig=w;const Gt=[];function Yo(t){return Gt.push(t),()=>{Gt.splice(Gt.indexOf(t),1)}}const ft=ln,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Uo(t){if(!t||!lt)return;const e=N.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=N.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const i=n[a],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=i)}return N.head.insertBefore(e,r),t}const Wo="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $t(){let t=12,e="";for(;t-- >0;)e+=Wo[Math.random()*62|0];return e}function Dt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Vn(t){return t.classList?Dt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Ga(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qo(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Ga(t[n]),'" '),"").trim()}function Ve(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Yn(t){return t.size!==K.size||t.x!==K.x||t.y!==K.y||t.rotate!==K.rotate||t.flipX||t.flipY}function Go(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Ho(t){let{transform:e,width:n=ln,height:r=ln,startCentered:a=!1}=t,i="";return a&&Ma?i+="translate(".concat(e.x/ft-n/2,"em, ").concat(e.y/ft-r/2,"em) "):a?i+="translate(calc(-50% + ".concat(e.x/ft,"em), calc(-50% + ").concat(e.y/ft,"em)) "):i+="translate(".concat(e.x/ft,"em, ").concat(e.y/ft,"em) "),i+="scale(".concat(e.size/ft*(e.flipX?-1:1),", ").concat(e.size/ft*(e.flipY?-1:1),") "),i+="rotate(".concat(e.rotate,"deg) "),i}var Xo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Ha(){const t=Ba,e=Va,n=w.cssPrefix,r=w.replacementClass;let a=Xo;if(n!==t||r!==e){const i=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(r))}return a}let Cr=!1;function Xe(){w.autoAddCss&&!Cr&&(Uo(Ha()),Cr=!0)}var Ko={mixout(){return{dom:{css:Ha,insertCss:Xe}}},hooks(){return{beforeDOMElementCreation(){Xe()},beforeI2svg(){Xe()}}}};const it=gt||{};it[at]||(it[at]={});it[at].styles||(it[at].styles={});it[at].hooks||(it[at].hooks={});it[at].shims||(it[at].shims=[]);var $=it[at];const Xa=[],Ka=function(){N.removeEventListener("DOMContentLoaded",Ka),Ae=1,Xa.map(t=>t())};let Ae=!1;lt&&(Ae=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),Ae||N.addEventListener("DOMContentLoaded",Ka));function $o(t){lt&&(Ae?setTimeout(t,0):Xa.push(t))}function se(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Ga(t):"<".concat(e," ").concat(qo(n),">").concat(r.map(se).join(""),"</").concat(e,">")}function Nr(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ke=function(e,n,r,a){var i=Object.keys(e),s=i.length,o=n,l,u,c;for(r===void 0?(l=1,c=e[i[0]]):(l=0,c=r);l<s;l++)u=i[l],c=o(c,e[u],u,e);return c};function Zo(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function hn(t){const e=Zo(t);return e.length===1?e[0].toString(16):null}function Qo(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ir(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function pn(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Ir(e);typeof $.hooks.addPack=="function"&&!r?$.hooks.addPack(t,Ir(e)):$.styles[t]=h(h({},$.styles[t]||{}),a),t==="fas"&&pn("fa",e)}const{styles:Zt,shims:Jo}=$,$a=Object.keys(Bn),tl=$a.reduce((t,e)=>(t[e]=Object.keys(Bn[e]),t),{});let Un=null,Za={},Qa={},Ja={},ti={},ei={};function el(t){return~zo.indexOf(t)}function nl(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!el(a)?a:null}const ni=()=>{const t=r=>Ke(Zt,(a,i,s)=>(a[s]=Ke(i,r,{}),a),{});Za=t((r,a,i)=>(a[3]&&(r[a[3]]=i),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{r[o.toString(16)]=i}),r)),Qa=t((r,a,i)=>(r[i]=i,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{r[o]=i}),r)),ei=t((r,a,i)=>{const s=a[2];return r[i]=i,s.forEach(o=>{r[o]=i}),r});const e="far"in Zt||w.autoFetchSvg,n=Ke(Jo,(r,a)=>{const i=a[0];let s=a[1];const o=a[2];return s==="far"&&!e&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:o}),r},{names:{},unicodes:{}});Ja=n.names,ti=n.unicodes,Un=Ye(w.styleDefault,{family:w.familyDefault})};Yo(t=>{Un=Ye(t.styleDefault,{family:w.familyDefault})});ni();function Wn(t,e){return(Za[t]||{})[e]}function rl(t,e){return(Qa[t]||{})[e]}function xt(t,e){return(ei[t]||{})[e]}function ri(t){return Ja[t]||{prefix:null,iconName:null}}function al(t){const e=ti[t],n=Wn("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function vt(){return Un}const ai=()=>({prefix:null,iconName:null,rest:[]});function il(t){let e=D;const n=$a.reduce((r,a)=>(r[a]="".concat(w.cssPrefix,"-").concat(a),r),{});return ja.forEach(r=>{(t.includes(n[r])||t.some(a=>tl[r].includes(a)))&&(e=r)}),e}function Ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=D}=e,r=Lo[n][t];if(n===Be&&!t)return"fad";const a=Pr[n][t]||Pr[n][r],i=t in $.styles?t:null;return a||i||null}function sl(t){let e=[],n=null;return t.forEach(r=>{const a=nl(w.cssPrefix,r);a?n=a:r&&e.push(r)}),{iconName:n,rest:e}}function Tr(t){return t.sort().filter((e,n,r)=>r.indexOf(e)===n)}function Ue(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let r=null;const a=on.concat(xo),i=Tr(t.filter(d=>a.includes(d))),s=Tr(t.filter(d=>!on.includes(d))),o=i.filter(d=>(r=d,!Da.includes(d))),[l=null]=o,u=il(i),c=h(h({},sl(s)),{},{prefix:Ye(l,{family:u})});return h(h(h({},c),fl({values:t,family:u,styles:Zt,config:w,canonical:c,givenPrefix:r})),ol(n,r,c))}function ol(t,e,n){let{prefix:r,iconName:a}=n;if(t||!r||!a)return{prefix:r,iconName:a};const i=e==="fa"?ri(a):{},s=xt(r,a);return a=i.iconName||s||a,r=i.prefix||r,r==="far"&&!Zt.far&&Zt.fas&&!w.autoFetchSvg&&(r="fas"),{prefix:r,iconName:a}}const ll=ja.filter(t=>t!==D||t!==Be),ul=Object.keys(sn).filter(t=>t!==D).map(t=>Object.keys(sn[t])).flat();function fl(t){const{values:e,family:n,canonical:r,givenPrefix:a="",styles:i={},config:s={}}=t,o=n===Be,l=e.includes("fa-duotone")||e.includes("fad"),u=s.familyDefault==="duotone",c=r.prefix==="fad"||r.prefix==="fa-duotone";if(!o&&(l||u||c)&&(r.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ll.includes(n)&&(Object.keys(i).find(f=>ul.includes(f))||s.autoFetchSvg)){const f=po.get(n).defaultShortPrefixId;r.prefix=f,r.iconName=xt(r.prefix,r.iconName)||r.iconName}return(r.prefix==="fa"||a==="fa")&&(r.prefix=vt()||"fas"),r}class cl{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=h(h({},this.definitions[i]||{}),a[i]),pn(i,a[i]);const s=Bn[D][i];s&&pn(s,a[i]),ni()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:i,iconName:s,icon:o}=r[a],l=o[2];e[i]||(e[i]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[i][u]=o)}),e[i][s]=o}),e}}let Fr=[],Pt={};const Nt={},dl=Object.keys(Nt);function hl(t,e){let{mixoutsTo:n}=e;return Fr=t,Pt={},Object.keys(Nt).forEach(r=>{dl.indexOf(r)===-1&&delete Nt[r]}),Fr.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(n[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(s=>{n[i]||(n[i]={}),n[i][s]=a[i][s]})}),r.hooks){const i=r.hooks();Object.keys(i).forEach(s=>{Pt[s]||(Pt[s]=[]),Pt[s].push(i[s])})}r.provides&&r.provides(Nt)}),n}function mn(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(Pt[t]||[]).forEach(s=>{e=s.apply(null,[e,...r])}),e}function St(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Pt[t]||[]).forEach(i=>{i.apply(null,n)})}function yt(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Nt[t]?Nt[t].apply(null,e):void 0}function gn(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||vt();if(e)return e=xt(n,e)||e,Nr(ii.definitions,n,e)||Nr($.styles,n,e)}const ii=new cl,pl=()=>{w.autoReplaceSvg=!1,w.observeMutations=!1,St("noAuto")},ml={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return lt?(St("beforeI2svg",t),yt("pseudoElements2svg",t),yt("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,$o(()=>{vl({autoReplaceSvgRoot:e}),St("watch",t)})}},gl={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:xt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Ye(t[0]);return{prefix:n,iconName:xt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(w.cssPrefix,"-"))>-1||t.match(Mo))){const e=Ue(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||vt(),iconName:xt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=vt();return{prefix:e,iconName:xt(e,t)||t}}}},W={noAuto:pl,config:w,dom:ml,parse:gl,library:ii,findIconDefinition:gn,toHtml:se},vl=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=N}=t;(Object.keys($.styles).length>0||w.autoFetchSvg)&&lt&&w.autoReplaceSvg&&W.dom.i2svg({node:e})};function We(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>se(n))}}),Object.defineProperty(t,"node",{get:function(){if(!lt)return;const n=N.createElement("div");return n.innerHTML=t.html,n.children}}),t}function yl(t){let{children:e,main:n,mask:r,attributes:a,styles:i,transform:s}=t;if(Yn(s)&&n.found&&!r.found){const{width:o,height:l}=n,u={x:o/l/2,y:.5};a.style=Ve(h(h({},i),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function bl(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:i}=t;const s=i===!0?"".concat(e,"-").concat(w.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},a),{},{id:s}),children:r}]}]}function qn(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:i,symbol:s,title:o,maskId:l,titleId:u,extra:c,watchable:d=!1}=t,{width:f,height:m}=n.found?n:e,v=bo.includes(r),x=[w.replacementClass,a?"".concat(w.cssPrefix,"-").concat(a):""].filter(E=>c.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(c.classes).join(" ");let y={children:[],attributes:h(h({},c.attributes),{},{"data-prefix":r,"data-icon":a,class:x,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f," ").concat(m)})};const _=v&&!~c.classes.indexOf("fa-fw")?{width:"".concat(f/m*16*.0625,"em")}:{};d&&(y.attributes[At]=""),o&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(u||$t())},children:[o]}),delete y.attributes.title);const k=h(h({},y),{},{prefix:r,iconName:a,main:e,mask:n,maskId:l,transform:i,symbol:s,styles:h(h({},_),c.styles)}),{children:g,attributes:b}=n.found&&e.found?yt("generateAbstractMask",k)||{children:[],attributes:{}}:yt("generateAbstractIcon",k)||{children:[],attributes:{}};return k.children=g,k.attributes=b,s?bl(k):yl(k)}function Lr(t){const{content:e,width:n,height:r,transform:a,title:i,extra:s,watchable:o=!1}=t,l=h(h(h({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});o&&(l[At]="");const u=h({},s.styles);Yn(a)&&(u.transform=Ho({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);const c=Ve(u);c.length>0&&(l.style=c);const d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function wl(t){const{content:e,title:n,extra:r}=t,a=h(h(h({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ve(r.styles);i.length>0&&(a.style=i);const s=[];return s.push({tag:"span",attributes:a,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}const{styles:$e}=$;function vn(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(He.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(He.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(He.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const _l={found:!1,width:512,height:512};function xl(t,e){!Ya&&!w.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function yn(t,e){let n=e;return e==="fa"&&w.styleDefault!==null&&(e=vt()),new Promise((r,a)=>{if(n==="fa"){const i=ri(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&$e[e]&&$e[e][t]){const i=$e[e][t];return r(vn(i))}xl(t,e),r(h(h({},_l),{},{icon:w.showMissingIcons&&t?yt("missingIconAbstract")||{}:{}}))})}const Mr=()=>{},bn=w.measurePerformance&&ue&&ue.mark&&ue.measure?ue:{mark:Mr,measure:Mr},Ut='FA "6.7.2"',kl=t=>(bn.mark("".concat(Ut," ").concat(t," begins")),()=>si(t)),si=t=>{bn.mark("".concat(Ut," ").concat(t," ends")),bn.measure("".concat(Ut," ").concat(t),"".concat(Ut," ").concat(t," begins"),"".concat(Ut," ").concat(t," ends"))};var Gn={begin:kl,end:si};const pe=()=>{};function Rr(t){return typeof(t.getAttribute?t.getAttribute(At):null)=="string"}function El(t){const e=t.getAttribute?t.getAttribute(jn):null,n=t.getAttribute?t.getAttribute(zn):null;return e&&n}function Al(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(w.replacementClass)}function Sl(){return w.autoReplaceSvg===!0?me.replace:me[w.autoReplaceSvg]||me.replace}function Ol(t){return N.createElementNS("http://www.w3.org/2000/svg",t)}function Pl(t){return N.createElement(t)}function oi(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ol:Pl}=e;if(typeof t=="string")return N.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){r.appendChild(oi(i,{ceFn:n}))}),r}function Cl(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const me={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(oi(n),e)}),e.getAttribute(At)===null&&w.keepOriginalSource){let n=N.createComment(Cl(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Vn(e).indexOf(w.replacementClass))return me.replace(t);const r=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const i=n[0].attributes.class.split(" ").reduce((s,o)=>(o===w.replacementClass||o.match(r)?s.toSvg.push(o):s.toNode.push(o),s),{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}const a=n.map(i=>se(i)).join(`
`);e.setAttribute(At,""),e.innerHTML=a}};function Dr(t){t()}function li(t,e){const n=typeof e=="function"?e:pe;if(t.length===0)n();else{let r=Dr;w.mutateApproach===To&&(r=gt.requestAnimationFrame||Dr),r(()=>{const a=Sl(),i=Gn.begin("mutate");t.map(a),i(),n()})}}let Hn=!1;function ui(){Hn=!0}function wn(){Hn=!1}let Se=null;function jr(t){if(!Er||!w.observeMutations)return;const{treeCallback:e=pe,nodeCallback:n=pe,pseudoElementsCallback:r=pe,observeMutationsRoot:a=N}=t;Se=new Er(i=>{if(Hn)return;const s=vt();Dt(i).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!Rr(o.addedNodes[0])&&(w.searchPseudoElements&&r(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&w.searchPseudoElements&&r(o.target.parentNode),o.type==="attributes"&&Rr(o.target)&&~jo.indexOf(o.attributeName))if(o.attributeName==="class"&&El(o.target)){const{prefix:l,iconName:u}=Ue(Vn(o.target));o.target.setAttribute(jn,l||s),u&&o.target.setAttribute(zn,u)}else Al(o.target)&&n(o.target)})}),lt&&Se.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Nl(){Se&&Se.disconnect()}function Il(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const i=a.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(r[s]=o.join(":").trim()),r},{})),n}function Tl(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=Ue(Vn(t));return a.prefix||(a.prefix=vt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=rl(a.prefix,t.innerText)||Wn(a.prefix,hn(t.innerText))),!a.iconName&&w.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Fl(t){const e=Dt(t.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return w.autoA11y&&(n?e["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(r||$t()):(e["aria-hidden"]="true",e.focusable="false")),e}function Ll(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=Tl(t),i=Fl(t),s=mn("parseNodeAttributes",{},t);let o=e.styleParser?Il(t):[];return h({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:i}},s)}const{styles:Ml}=$;function fi(t){const e=w.autoReplaceSvg==="nest"?zr(t,{styleParser:!1}):zr(t);return~e.extra.classes.indexOf(Wa)?yt("generateLayersText",t,e):yt("generateSvgReplacementMutation",t,e)}function Rl(){return[...go,...on]}function Br(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!lt)return Promise.resolve();const n=N.documentElement.classList,r=c=>n.add("".concat(Or,"-").concat(c)),a=c=>n.remove("".concat(Or,"-").concat(c)),i=w.autoFetchSvg?Rl():Da.concat(Object.keys(Ml));i.includes("fa")||i.push("fa");const s=[".".concat(Wa,":not([").concat(At,"])")].concat(i.map(c=>".".concat(c,":not([").concat(At,"])"))).join(", ");if(s.length===0)return Promise.resolve();let o=[];try{o=Dt(t.querySelectorAll(s))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();const l=Gn.begin("onTree"),u=o.reduce((c,d)=>{try{const f=fi(d);f&&c.push(f)}catch(f){Ya||f.name==="MissingIcon"&&console.error(f)}return c},[]);return new Promise((c,d)=>{Promise.all(u).then(f=>{li(f,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),c()})}).catch(f=>{l(),d(f)})})}function Dl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fi(t).then(n=>{n&&li([n],e)})}function jl(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:gn(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:gn(a||{})),t(r,h(h({},n),{},{mask:a}))}}const zl=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=K,symbol:r=!1,mask:a=null,maskId:i=null,title:s=null,titleId:o=null,classes:l=[],attributes:u={},styles:c={}}=e;if(!t)return;const{prefix:d,iconName:f,icon:m}=t;return We(h({type:"icon"},t),()=>(St("beforeDOMElementCreation",{iconDefinition:t,params:e}),w.autoA11y&&(s?u["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(o||$t()):(u["aria-hidden"]="true",u.focusable="false")),qn({icons:{main:vn(m),mask:a?vn(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:h(h({},K),n),symbol:r,title:s,maskId:i,titleId:o,extra:{attributes:u,styles:c,classes:l}})))};var Bl={mixout(){return{icon:jl(zl)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=Br,t.nodeCallback=Dl,t}}},provides(t){t.i2svg=function(e){const{node:n=N,callback:r=()=>{}}=e;return Br(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:i,prefix:s,transform:o,symbol:l,mask:u,maskId:c,extra:d}=n;return new Promise((f,m)=>{Promise.all([yn(r,s),u.iconName?yn(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(v=>{let[x,y]=v;f([e,qn({icons:{main:x,mask:y},prefix:s,iconName:r,transform:o,symbol:l,maskId:c,title:a,titleId:i,extra:d,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:i,styles:s}=e;const o=Ve(s);o.length>0&&(r.style=o);let l;return Yn(i)&&(l=yt("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},Vl={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return We({type:"layer"},()=>{St("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(i=>{r=r.concat(i.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Yl={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:i={}}=e;return We({type:"counter",content:t},()=>(St("beforeDOMElementCreation",{content:t,params:e}),wl({content:t.toString(),title:n,extra:{attributes:a,styles:i,classes:["".concat(w.cssPrefix,"-layers-counter"),...r]}})))}}}},Ul={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=K,title:r=null,classes:a=[],attributes:i={},styles:s={}}=e;return We({type:"text",content:t},()=>(St("beforeDOMElementCreation",{content:t,params:e}),Lr({content:t,transform:h(h({},K),n),title:r,extra:{attributes:i,styles:s,classes:["".concat(w.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:i}=n;let s=null,o=null;if(Ma){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();s=u.width/l,o=u.height/l}return w.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,Lr({content:e.innerHTML,width:s,height:o,transform:a,title:r,extra:i,watchable:!0})])}}};const Wl=new RegExp('"',"ug"),Vr=[1105920,1112319],Yr=h(h(h(h({},{FontAwesome:{normal:"fas",400:"fas"}}),ho),No),ko),_n=Object.keys(Yr).reduce((t,e)=>(t[e.toLowerCase()]=Yr[e],t),{}),ql=Object.keys(_n).reduce((t,e)=>{const n=_n[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Gl(t){const e=t.replace(Wl,""),n=Qo(e,0),r=n>=Vr[0]&&n<=Vr[1],a=e.length===2?e[0]===e[1]:!1;return{value:hn(a?e[0]:e),isSecondary:r||a}}function Hl(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(_n[n]||{})[a]||ql[n]}function Ur(t,e){const n="".concat(Io).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const s=Dt(t.children).filter(f=>f.getAttribute(un)===e)[0],o=gt.getComputedStyle(t,e),l=o.getPropertyValue("font-family"),u=l.match(Ro),c=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(s&&!u)return t.removeChild(s),r();if(u&&d!=="none"&&d!==""){const f=o.getPropertyValue("content");let m=Hl(l,c);const{value:v,isSecondary:x}=Gl(f),y=u[0].startsWith("FontAwesome");let _=Wn(m,v),k=_;if(y){const g=al(v);g.iconName&&g.prefix&&(_=g.iconName,m=g.prefix)}if(_&&!x&&(!s||s.getAttribute(jn)!==m||s.getAttribute(zn)!==k)){t.setAttribute(n,k),s&&t.removeChild(s);const g=Ll(),{extra:b}=g;b.attributes[un]=e,yn(_,m).then(E=>{const I=qn(h(h({},g),{},{icons:{main:E,mask:ai()},prefix:m,iconName:k,extra:b,watchable:!0})),A=N.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=I.map(R=>se(R)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Xl(t){return Promise.all([Ur(t,"::before"),Ur(t,"::after")])}function Kl(t){return t.parentNode!==document.head&&!~Fo.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(un)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Wr(t){if(lt)return new Promise((e,n)=>{const r=Dt(t.querySelectorAll("*")).filter(Kl).map(Xl),a=Gn.begin("searchPseudoElements");ui(),Promise.all(r).then(()=>{a(),wn(),e()}).catch(()=>{a(),wn(),n()})})}var $l={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Wr,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=N}=e;w.searchPseudoElements&&Wr(n)}}};let qr=!1;var Zl={mixout(){return{dom:{unwatch(){ui(),qr=!0}}}},hooks(){return{bootstrap(){jr(mn("mutationObserverCallbacks",{}))},noAuto(){Nl()},watch(t){const{observeMutationsRoot:e}=t;qr?wn():jr(mn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Gr=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),i=a[0];let s=a.slice(1).join("-");if(i&&s==="h")return n.flipX=!0,n;if(i&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(i){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},e)};var Ql={mixout(){return{parse:{transform:t=>Gr(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Gr(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:i}=e;const s={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(o," ").concat(l," ").concat(u)},d={transform:"translate(".concat(i/2*-1," -256)")},f={outer:s,inner:c,path:d};return{tag:"g",attributes:h({},f.outer),children:[{tag:"g",attributes:h({},f.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:h(h({},n.icon.attributes),f.path)}]}]}}}};const Ze={x:0,y:0,width:"100%",height:"100%"};function Hr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Jl(t){return t.tag==="g"?t.children:[t]}var tu={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Ue(n.split(" ").map(a=>a.trim())):ai();return r.prefix||(r.prefix=vt()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:i,maskId:s,transform:o}=e;const{width:l,icon:u}=a,{width:c,icon:d}=i,f=Go({transform:o,containerWidth:c,iconWidth:l}),m={tag:"rect",attributes:h(h({},Ze),{},{fill:"white"})},v=u.children?{children:u.children.map(Hr)}:{},x={tag:"g",attributes:h({},f.inner),children:[Hr(h({tag:u.tag,attributes:h(h({},u.attributes),f.path)},v))]},y={tag:"g",attributes:h({},f.outer),children:[x]},_="mask-".concat(s||$t()),k="clip-".concat(s||$t()),g={tag:"mask",attributes:h(h({},Ze),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,y]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:Jl(d)},g]};return n.push(b,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(_,")")},Ze)}),{children:n,attributes:r}}}},eu={provides(t){let e=!1;gt.matchMedia&&(e=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=h(h({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||s.children.push({tag:"animate",attributes:h(h({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(s),n.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:h(h({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},nu={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},ru=[Ko,Bl,Vl,Yl,Ul,$l,Zl,Ql,tu,eu,nu];hl(ru,{mixoutsTo:W});W.noAuto;W.config;W.library;W.dom;const xn=W.parse;W.findIconDefinition;W.toHtml;const au=W.icon;W.layer;W.text;W.counter;let ci=!1;try{ci=!0}catch{}function iu(...t){!ci&&console&&typeof console.error=="function"&&console.error(...t)}function Xr(t){if(t&&typeof t=="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xn.icon)return xn.icon(t);if(t===null)return null;if(t&&typeof t=="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Qe(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?{[t]:e}:{}}var su=Ss("<svg><!></svg>");function ou(t,e){var x;te(e,!1);let n=S(e,"tag",8),r=S(e,"props",8),a=S(e,"children",8),i=S(e,"style",8,null),s=S(e,"ref",12,null);if(n()!=="svg")throw new Error('SvgElement requires a tag of "svg"');function o(y){return(y==null?void 0:y.reduce((_,k)=>_+(k.tag?l(k):k),""))||""}function l({tag:y,props:_,children:k}){const g=Object.keys(_).map(b=>`${b}="${_[b]}"`).join(" ");return`<${y} ${g}>${o(k)}</${y}>`}const u=o(a()),c=(x=r())!=null&&x.style?`${r().style}${i()||""}`:i(),d={...r(),style:c};ze();var f=su();let m;var v=et(f);Ds(v,()=>u),Na(f,y=>s(y),()=>s()),Wt(()=>m=Ws(f,m,{...d})),Et(t,f),ee()}function lu(t,e){const n=br(e,["children","$$slots","$$events","$$legacy"]),r=br(n,["border","mask","maskId","fixedWidth","inverse","flip","icon","listItem","pull","pulse","rotation","size","spin","spinPulse","spinReverse","beat","fade","beatFade","bounce","shake","symbol","title","titleId","transform","swapOpacity","ref","style"]);te(e,!1),S(e,"border",8,!1);let a=S(e,"mask",8,null),i=S(e,"maskId",8,null);S(e,"fixedWidth",8,!1),S(e,"inverse",8,!1),S(e,"flip",8,!1);let s=S(e,"icon",8,null);S(e,"listItem",8,!1),S(e,"pull",8,null),S(e,"pulse",8,!1),S(e,"rotation",8,null),S(e,"size",8,null),S(e,"spin",8,!1),S(e,"spinPulse",8,!1),S(e,"spinReverse",8,!1),S(e,"beat",8,!1),S(e,"fade",8,!1),S(e,"beatFade",8,!1),S(e,"bounce",8,!1),S(e,"shake",8,!1);let o=S(e,"symbol",8,!1),l=S(e,"title",8,""),u=S(e,"titleId",8,null),c=S(e,"transform",8,null);S(e,"swapOpacity",8,!1);let d=S(e,"ref",12,null),f=S(e,"style",8,null);const m=Xr(s()),v=Qe("classes",[...Js(n),...(n.class||"").split(" ")]),x=Qe("transform",typeof c()=="string"?xn.transform(c()):c()),y=Qe("mask",Xr(a())),_=au(m,{...v,...x,...y,symbol:o(),title:l(),titleId:u(),maskId:i()});let k=_t(null);if(!_)iu("Could not find icon",m);else{const{abstract:I}=_;M(k,Ia((A,R,tt)=>({tag:A,props:R,children:tt}),I[0],r))}ze();var g=Os(),b=oa(g);{var E=I=>{ou(I,Xs(()=>P(k),{get style(){return f()},get ref(){return d()},set ref(A){d(A)},$$legacy:!0}))};Ea(b,I=>{P(k)&&I(E)})}Et(t,g),ee()}var uu=ae("<button><!></button>");function fu(t,e){te(e,!1);const n=$s();let r=S(e,"isFocused",8,!1);ze();var a=uu();let i;var s=et(a);lu(s,{icon:Qs}),Wt(o=>i=Rn(a,1,"calculator_button svelte-sx7ixt",null,i,o),[()=>({focused:r()})],Me),he("click",a,()=>n("click")),Et(t,a),ee()}class oe{constructor(){this.processes=new Map,this._race=Array(),this._partials=Array()}get race(){return this._race}get partial(){return this._partials}use(e,n){if(typeof e=="function")return e(this),this;const r=e;if(n){const i=n(this._race);this._race.splice(i,0,r.id)}this._race.push(r.id),this.processes.set(r.id,r);const a=this;return Object.assign(this,{get[r.id](){return a.processes.get(r.id)}}),this}exclude(e){this._race=this._race.filter(n=>n!==e),this.processes.delete(e)}extend(e,n){const r=this.processes.get(e);if(!r)throw new RangeError(`Processor error. Process of given id: ${e} don't exist in current configuration`);const a=n(r);if(a.id!==r.id)throw new Error("Id of process has to stay the same");this.processes.set(e,a)}compute(e){this.partials=new Array;let n=e;for(let r of this._race){const a=this.processes.get(r);if(!a)break;const i=a.run(n);this._partials.push(i),n=i}return n}}class j{constructor(){this.id=this.constructor.name}}var p;(function(t){t.Number="Number",t.Variable="Variable",t.Operation="Operation",t.Function="Function",t.Bracket="Bracket",t.Separator="Separator",t.Spacer="Spacer",t.Comparison="Comparison"})(p||(p={}));function kn(t){return t.argLength!==void 0&&[p.Operation,p.Function,p.Comparison].includes(t.type)}var F;(function(t){t.Open="Open",t.Close="Close"})(F||(F={}));class Ct{constructor(e,n,r){this.subtype=e,this.variant=n,r instanceof Array||(r=new Array(r)),this.test=r}get id(){return"Bracket"}get type(){return p.Bracket}}class cu{constructor(){this.value=null}get id(){return"Variable"}get type(){return p.Variable}get name(){return this._name||""}test(e){var n;const a=/^(?<name>[a-z])(?=[^a-z]|$)/.exec(e);return a?(this._name=(n=a.groups)===null||n===void 0?void 0:n.name,a[0].length):0}}class Je{constructor(e,n,r){this.id=e,this.value=n,r instanceof Array||(r=new Array(r)),this.test=r}get type(){return p.Number}}let di=class{constructor(e){this.value=0,this.test=n=>{const a=/^[-]?(?:(?:[0-9]+\.?[0-9]*)|(?:\.[0-9]+))/.exec(n);return a?(this.value=parseFloat(a[0]),a[0].length):0},this.value=e||0}get id(){return"Number"}get type(){return p.Number}};class du{constructor(){this.test=["/"],this.priority=2,this.value=e=>{if(e.length!==2)throw new RangeError(this.id+" operation expect two arguments");return e[1]/e[0]}}get id(){return"Division"}get type(){return p.Operation}get argLength(){return 2}}class Xn{constructor(){this.test=["*"],this.priority=2,this.value=e=>{if(e.length!==2)throw new RangeError(this.id+" operation expect two arguments");return e[0]*e[1]}}get id(){return"Multiplication"}get type(){return p.Operation}get argLength(){return 2}}class hu{constructor(){this.test=["+"],this.priority=1,this.value=e=>{if(e.length!==2)throw new RangeError(this.id+" operation expect two arguments");return e[1]+e[0]}}get id(){return"Summation"}get type(){return p.Operation}get argLength(){return 2}}class pu{constructor(){this.test=["-"],this.priority=1,this.value=e=>{if(e.length!==2)throw new RangeError(this.id+" operation expect two arguments");return e[1]-e[0]}}get id(){return"Subtraction"}get type(){return p.Operation}get argLength(){return 2}}class mu{constructor(){this.test=["^"],this.priority=3,this.value=e=>{if(e.length!==1)throw new RangeError(this.id+" operation expected exactly one argument");return Math.pow(e[0],2)}}get id(){return"Square"}get type(){return p.Operation}get argLength(){return 1}}class gu{constructor(){this.test=["!"],this.priority=3,this.value=e=>{if(e.length!==1)throw new RangeError(this.id+" operation expected exactly one argument");let n=e[0],r=1;if(Math.floor(n)!=n)throw new RangeError("Attempt to calculate factorial from not integer number "+n);if(n<=0)throw new RangeError("Attempt to calculate factorial from not positive number ("+n+")");for(let a=n;a>0;a--)r*=a;return r}}get id(){return"Factorial"}get type(){return p.Operation}get argLength(){return 1}}class vu{constructor(){this.test=["="],this.priority=0,this.value=e=>{if(e.length!==2)throw new RangeError("Comparison operation expect two arguments");return Math.abs(e[0]-e[1])<Math.pow(.1,6)}}get id(){return"Equality"}get type(){return p.Comparison}get argLength(){return 2}}class yu{constructor(){this.test=[/^<(?=[^=])/],this.priority=0,this.value=e=>{if(e.length!==2)throw new RangeError("Comparison operation expect two arguments");return e[1]<e[0]}}get id(){return"Less"}get type(){return p.Comparison}get argLength(){return 2}}class bu{constructor(){this.test=[/^>(?=[^=])/],this.priority=0,this.value=e=>{if(e.length!==2)throw new RangeError("Comparison operation expect two arguments");return e[1]>e[0]}}get id(){return"Greater"}get type(){return p.Comparison}get argLength(){return 2}}class wu{constructor(){this.test=["<="],this.priority=0,this.value=e=>{if(e.length!==2)throw new RangeError("Comparison operation expect two arguments");return e[1]<=e[0]}}get id(){return"LessOrEqual"}get type(){return p.Comparison}get argLength(){return 2}}class _u{constructor(){this.test=[">="],this.priority=0,this.value=e=>{if(e.length!==2)throw new RangeError("Comparison operation expect two arguments");return e[1]>=e[0]}}get id(){return"GreaterOrEqual"}get type(){return p.Comparison}get argLength(){return 2}}class xu{constructor(){this.test=["cos"],this.priority=3,this.value=e=>{if(e.length!==1)throw new RangeError(this.id+" operation expect exactly one arguments");return Math.cos(e[0])}}get id(){return"Cosine"}get type(){return p.Function}get argLength(){return 1}}class ku{constructor(){this.test=["ctg"],this.priority=3,this.value=e=>{if(e.length!==1)throw new RangeError(this.id+" operation expect exactly one arguments");return 1/Math.tan(e[0])}}get id(){return"Cotangent"}get type(){return p.Function}get argLength(){return 1}}class Eu{constructor(){this.test=["pow"],this.priority=3,this.value=e=>{if(e.length!==2)throw new RangeError(this.id+" operation expect exactly one arguments");return Math.pow(e[1],e[0])}}get id(){return"Power"}get type(){return p.Function}get argLength(){return 2}}class Au{constructor(){this.test=["log"],this.priority=3,this.value=e=>{if(e.length!==2)throw new RangeError(this.id+" operation expect two arguments");const n=e[0],r=e[1];if(n<0)throw new RangeError(this.id+" attempt to calculate logarithm from negative argument");if(r<=0)throw new RangeError(this.id+" logarithm base have to be positive number");return Math.log(n)/Math.log(r)}}get id(){return"Logarithm"}get type(){return p.Function}get argLength(){return 2}}class Su{constructor(){this.test=["ln"],this.priority=3,this.value=e=>{if(e.length!==1)throw new RangeError(this.id+" operation expect exactly one argument");const n=e[0];if(n<0)throw new RangeError(this.id+" attempt to calculate logarithm from negative argument");return Math.log(n)}}get id(){return"NaturalLogarithm"}get type(){return p.Function}get argLength(){return 1}}class Ou{constructor(){this.test=["root"],this.priority=3,this.value=e=>{if(e.length!==2)throw new RangeError(this.id+" operation expect two arguments");return Math.pow(e[0],1/e[1])}}get id(){return"Root"}get type(){return p.Function}get argLength(){return 2}}class Pu{constructor(){this.test=["sin"],this.priority=3,this.value=e=>{if(e.length!==1)throw new RangeError(this.id+" operation expect exactly one arguments");return Math.sin(e[0])}}get id(){return"Sine"}get type(){return p.Function}get argLength(){return 1}}class Cu{constructor(){this.test=["sqrt"],this.priority=3,this.value=e=>{if(e.length!==1)throw new RangeError(this.id+" operation expect exactly one argument");return Math.sqrt(e[0])}}get id(){return"SquareRoot"}get type(){return p.Function}get argLength(){return 1}}class Nu{constructor(){this.test=["tan","tg"],this.priority=3,this.value=e=>{if(e.length!==1)throw new RangeError(this.id+" operation expect exactly one arguments");return Math.tan(e[0])}}get id(){return"Tangent"}get type(){return p.Function}get argLength(){return 1}}class Iu{constructor(){this.test=[","]}get id(){return"Coma"}get type(){return p.Separator}}class Tu{constructor(){this.test=[/^\s+/]}get id(){return"Spacer"}get type(){return p.Spacer}}function Fu(t){return t.id==="Absolute"&&t.isDelimiter}class hi{constructor(){this._isDelimiter=!1,this.test=e=>e.startsWith("abs")?3:e.startsWith("|")?(this._isDelimiter=!0,1):0,this.priority=3,this.value=e=>{if(e.length!==1)throw new RangeError(this.id+" operation expect exactly one arguments");return Math.abs(e[0])}}get isDelimiter(){return this._isDelimiter}get id(){return"Absolute"}get type(){return p.Function}get argLength(){return 1}}class Lu{produce(){const e=new Array;return e.push(...this.function()),e.push(...this.comparison()),e.push(...this.special()),e.push(...this.operations()),e}special(){return[new Je("Constant_Pi",Math.PI,["pi"]),new Je("Constant_E",Math.E,["e"]),new Je("Constant_Deg",Math.PI/180,["deg"]),new Ct("Round",F.Open,"("),new Ct("Round",F.Close,")"),new Ct("Square",F.Open,"["),new Ct("Square",F.Close,"]"),new Iu,new Tu,new di,new cu]}operations(){return[new du,new Xn,new hu,new pu,new mu,new gu]}comparison(){return[new vu,new yu,new bu,new wu,new _u]}function(){return[new xu,new ku,new Au,new Su,new Eu,new Ou,new Pu,new Cu,new Nu,new hi]}}class Mu extends Error{constructor(e,n,r){super(n),this.id=e,this.position=r}}class Ru{constructor(){this.tokens=Array(),this.value=null,this.details={that:this,get length(){return this.that.tokens.length||0},get isFunction(){return this.that.tokens.some(e=>e.type===p.Variable)},get funcVarNames(){return[...new Set(this.that.tokens.filter(e=>e.type===p.Variable).map(e=>e.name))]}}}_toString(){return this.tokens.reduce((e,n)=>e+n.origin+" ","").trimRight()}[Symbol.toPrimitive](){return this._toString()}toString(){return this._toString()}}class pi{constructor(e,n){this.start=e,this.end=n,this.shift=0}get original(){return this.start-this.shift}}function En(t){let e,n;if(typeof t!="object"||t===null)return t;e=Array.isArray(t)?[]:{};function r(a,i){if(n=a.value,typeof n=="function")Object.defineProperty(e,i,a);else{const s=En(n),o=Object.assign({},a);o.value=s,Object.defineProperty(e,i,a)}}for(let a in Object.getOwnPropertyDescriptors(t)){const i=Object.getOwnPropertyDescriptor(t,a);r(i,a)}for(let a in Object.getOwnPropertyDescriptors(Object.getPrototypeOf(t))){const i=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),a);r(i,a)}return e}class T{constructor(){this.expression=new Ru}push(e,n,r){const a=En(e);n&&(a.position=n),r&&(a.origin=r),this.expression.tokens.push(a)}pushError(e){T.pushError(this.expression,e)}getEndPositionOfLast(){var e;const n=this.expression.tokens[this.expression.details.length-1];return((e=n==null?void 0:n.position)===null||e===void 0?void 0:e.end)||0}build(){return this.expression}static pushError(e,n){return e.errors||(e.errors=new Array),e.errors.push(n),e}static injectToken(e,n,r,a){var i,s;n=En(n),n.position=new pi(((i=e.tokens[a].position)===null||i===void 0?void 0:i.end)||0,r.length+(((s=e.tokens[a].position)===null||s===void 0?void 0:s.end)||0)),n.origin=r,e.tokens.splice(a,0,n);for(let o=a;o<e.tokens.length;o++){let l=e.tokens[o];l.position&&(l.position.start+=r.length,l.position.end+=r.length,l.position.shift+=r.length)}return e}static removeToken(e,n){var r;const a=((r=e.tokens[n].origin)===null||r===void 0?void 0:r.length)||0;e.tokens.splice(n,1);for(let i=n;i<e.tokens.length;i++){let s=e.tokens[i];s.position&&(s.position.start-=a,s.position.end-=a,s.position.shift-=a)}return e}}class Kn extends j{run(e){const n=Kn.check(e);return n||e}static check(e){var n,r;const a=new Map;for(let i of e.tokens){if(i.type!==p.Bracket)continue;const s=i;if(s.variant===F.Open){let o=a.get(s.subtype)||new Array;o.push(s),a.set(s.subtype,o)}else{let o=a.get(s.subtype)||new Array;if(!o.length){const l=((n=s.position)===null||n===void 0?void 0:n.original)||0;T.pushError(e,new bt("BracketMismatch",`Incorrect sequence of brackets. Each closing
                         bracket has to be preceded by opening. At position ${l}`,l))}o.pop(),a.set(s.subtype,o)}}for(let[,i]of a.entries())if(i.length){const s=i.pop();if(!s)return;const o=((r=s.position)===null||r===void 0?void 0:r.original)||0;T.pushError(e,new bt("BracketMismatch",`Incorrect sequence of brackets. Bracket on position ${o+1} must be closed`,o))}return e}}class $n extends j{run(e){return e=e,$n.check(e)}static check(e){var n;const r=e.tokens;for(let a=0;a<r.length-1;a++){const i=r[a],s=r[a+1];if(i.type===p.Bracket&&i.variant===F.Open&&s.type===p.Bracket&&s.variant===F.Close){const l=((n=i.position)===null||n===void 0?void 0:n.original)||0;T.pushError(e,new bt("EmptyBracket",`Expression contains empty bracket pattern, at position: ${l}`,l))}}return e}}class Zn extends j{run(e){return e=e,Zn.check(e)}static check(e){var n;const r=e.tokens;for(let a=0;a<r.length;a++){const i=r[a],s=r[a+1];if(i.type===p.Function&&(s&&s.type!==p.Bracket||!s)){const l=((n=i.position)===null||n===void 0?void 0:n.original)||0;T.pushError(e,new bt("FunctionBracketMiss","Each function has to have values in brackets. Miss bracket at position: "+l,l))}}return e}}class Qt extends Array{get top(){return this[this.length-1]}get isEmpty(){return!this.length}}class Qn extends j{run(e){return e=e,Qn.check(e)}static check(e){let n=e.tokens;function r(a,i){var s;const o=n[a].origin,l=((s=n[a].position)===null||s===void 0?void 0:s.original)||0;T.pushError(e,new bt("FunctionArguments",`Function ${o} expect to have ${i} arguments`,l))}for(let a=0;a<n.length;a++){const i=n[a];if(i.type===p.Function)if(i.argLength===1){const s=new Qt;for(let o=a+1;o<n.length;o++){let l=n[o];if(l.type===p.Bracket)if(l.variant===F.Open)s.push(l);else{for(;!s.isEmpty&&s.top.type===p.Bracket;)s.pop();s.isEmpty&&r(a,1);break}else s.push(l)}}else{const s=i.argLength,o=new Qt;let l=1;for(let u=a;u<n.length;u++){const c=n[u];if(c.type===p.Separator)o.push(c);else if(c.type===p.Bracket)if(c.variant===F.Open)o.push(c);else{for(;!o.isEmpty&&o.top.type===p.Separator;)o.pop(),l++;if(o.pop(),!o.length){l!==s&&r(a,s);break}}}}}return e}}class Oe extends j{run(e){return this.check(e)}check(e){return e.tokens.forEach((n,r)=>{if(n.type!==p.Separator)return;const a=new Array,i=new Array;for(let s=r-1;s>=0;s--){s===0&&Oe.error(e,n.position);let o=e.tokens[s];if(o.type===p.Separator){i.push(o);continue}if(o.type===p.Bracket)if(o.variant===F.Close)a.push(o);else if(a.length)a.pop();else{const l=e.tokens[s-1];if(l&&l.type===p.Function&&l.argLength>=2){if(i.pop(),!i.length)break}else Oe.error(e,n.position)}}}),e}static error(e,n){const r=(n==null?void 0:n.original)||0;T.pushError(e,new bt("ComaPosition",`Not correct separator position: ${r+1} (Coma). It should be placed in function with two arguments`,r))}}class Jn extends j{run(e){return e=e,Jn.check(e)}static check(e){const n=e.tokens;let r=0;for(let a=0;a<n.length;a++)n[a].type===p.Comparison&&r++;return r>1&&T.pushError(e,new bt("ComparisonsLimit","In expression can be only one comparison operation")),e}}class bt extends Mu{}class Du extends oe{constructor(){super(),this.id=this.constructor.name,this.use(new Kn),this.use(new Qn),this.use(new $n),this.use(new Zn),this.use(new Oe),this.use(new Jn)}run(e){return this.compute(e)}}class ju extends j{constructor(){super(),this.tokens=Array();const e=new Lu;this.tokens=e.produce()}run(e){return this.tokenize(e)}tokenize(e){const n=new T;let r=0,a=-1,i=e;for(;a!==r;){a=r;for(let s of this.tokens){let o,l;if(s.test instanceof Array)for(let u of s.test){if(typeof u=="string"){if(!i.startsWith(u))continue;l=i.substr(0,u.length),i=i.substr(u.length),r+=u.length,o=s}else{const c=u.exec(i);if(!c)continue;l=i.substr(0,c[0].length),i=i.substr(c[0].length),r+=c[0].length,o=s}if(o)break}else if(typeof s.test=="function"){let u=s.test(i);if(!u)continue;l=i.substr(0,u),i=i.substr(u),r+=u,o=s}if(o&&l){n.push(o,new pi(a,r),l);break}}}if(n.getEndPositionOfLast()<e.length){const s=n.getEndPositionOfLast()+1;n.pushError(new bt("TokenizerNotRecognized","Not recognized sign at: "+s,s))}return n.build()}}class zu{get id(){return"PreFormatter"}run(e){return e.toLowerCase()}}class tr extends j{run(e){return e=e,tr.reduceDuplicated(e)}static reduceDuplicated(e){const n=new Array;return e.tokens.forEach((r,a)=>{if(a===e.tokens.length-1){n.push(r);return}const i=e.tokens[a],s=e.tokens[a+1],o=[p.Operation,p.Separator];o.includes(i.type)&&o.includes(s.type)&&i.id===s.id||n.push(r)}),e.tokens=n,e}}class er extends j{run(e){return e=e,er.removeSpacers(e)}static removeSpacers(e){const n=e.tokens.filter(r=>r.type!==p.Spacer);return e.tokens=n,e}}class Pe extends j{run(e){return e=e,Pe.injectMultiplication(e)}static injectMultiplication(e){let n=Pe.findPattern(e.tokens);if(!n.length)return e;let r=e;const a=new Xn;for(let i of n)r=T.injectToken(r,a,"*",i);return r}static findPattern(e){const n=new Array;for(let r=0;r<e.length-1;r++){let a=e[r],i=e[r+1];const s=a.type===p.Bracket&&a.variant===F.Close&&i.type===p.Bracket&&i.variant===F.Open,o=a.type===p.Bracket&&a.variant===F.Close&&i.type===p.Function,l=[p.Number,p.Variable].includes(a.type)&&i.type===p.Bracket&&i.variant===F.Open,u=a.type===p.Bracket&&a.variant===F.Close&&[p.Number,p.Variable].includes(i.type),c=a.type===p.Variable&&[p.Number,p.Variable].includes(i.type),d=i.type===p.Variable&&[p.Number,p.Variable].includes(a.type),f=[p.Number,p.Variable].includes(a.type)&&i.type===p.Function,m=[p.Number,p.Variable].includes(a.type)&&[p.Number,p.Variable].includes(i.type);(s||o||l||u||c||d||f||m)&&n.push(r+1+n.length)}return n}}class nr extends j{run(e){return e=e,nr.removeSpacers(e)}static removeSpacers(e){let n=e.tokens[0];return n&&n.type===p.Operation&&n.argLength==2?T.removeToken(e,0):e}}class Ce extends j{run(e){return e=e,Ce.injectMultiplication(e)}static injectMultiplication(e){let n=Ce.findPattern(e.tokens);if(!n.length)return e;let r=e;const a=new Xn,i=new di(-1);for(let s of n)r=T.removeToken(r,s),r=T.injectToken(r,a,"*",s),r=T.injectToken(r,i,"-1",s);return r}static findPattern(e){const n=new Array;for(let r=0;r<e.length-1;r++){const a=e[r-1],i=e[r],s=e[r+1],o=a&&a.id==="Division"&&i.id==="Subtraction",l=a&&a.id==="Multiplication"&&i.id==="Subtraction",u=i.id==="Subtraction"&&(!a||a.type===p.Bracket&&a.variant===F.Open)&&s.type===p.Function;(o||l||u)&&n.push(r+n.length)}return n}}class Bu extends j{run(e){return e=e,this.replaceDelimiters(e)}replaceDelimiters(e){const n=e.tokens;let r=!1;for(let a=0;a<n.length;a++){const i=n[a];Fu(i)&&(r?(e=this.injectAbsoluteEnd(e,a),r=!1):(e=this.injectAbsoluteStart(e,a),r=!0,a++))}return e}injectAbsoluteStart(e,n){let r=T.removeToken(e,n);const a=new Ct("Round",F.Open,"(");r=T.injectToken(r,a,"(",n);const i=new hi;return r=T.injectToken(r,i,"abs",n),r}injectAbsoluteEnd(e,n){const r=new Ct("Round",F.Close,")");let a=T.injectToken(e,r,")",n);return T.removeToken(a,n+1)}}class Vu extends oe{constructor(){super(),this.id=this.constructor.name,this.use(new er),this.use(new Bu),this.use(new Pe),this.use(new tr),this.use(new Ce),this.use(new nr)}run(e){return this.compute(e)}}class Yu extends oe{constructor(){super(),this.id=this.constructor.name,this.use(new zu),this.use(new ju),this.use(new Vu),this.use(new Du)}run(e){return this.compute(e)}}class Uu extends j{run(e){return e.errors?e:this.convert(e)}convert(e){const n=new T,r=new Qt;for(let a of e.tokens)if(a.type===p.Variable||a.type===p.Number)n.push(a);else if(a.type===p.Bracket)if(a.variant===F.Open)r.push(a);else{for(;!r.isEmpty&&r.top.type!==p.Bracket;)n.push(r.pop());r.pop(),!r.isEmpty&&r.top.type===p.Function&&n.push(r.pop())}else if(a.type===p.Separator)for(;!r.isEmpty&&r.top.type!==p.Bracket;)n.push(r.pop());else if(kn(a)){if(!r.isEmpty&&kn(r.top))for(;!r.isEmpty;){const i=a,s=r.top;if(i.priority<=s.priority)n.push(r.pop());else break}r.push(a)}for(;!r.isEmpty;)r.top.type!==p.Bracket&&n.push(r.pop());return n.build()}}let mi=class extends j{run(e){return e.errors===void 0?this.compute(e):e}compute(e){const n=new Qt;for(let a of e.tokens)if(a.type===p.Number||a.type===p.Variable){const i=a.value;if(n.push(i),i===null)break}else if(kn(a)){const i=a.value,s=a.argLength;if(typeof i!="function")throw new Error("Expect that value of functional token will be function");const o=new Qt;for(let u=0;u<s;u++)o.push(n.pop());const l=i(o);if(isNaN(l)){const u=new RangeError("Value of operation out of domain");throw T.pushError(e,u),u}n.push(l)}const r=n.pop();return e.value=r!==void 0?r:null,e}};class Wu extends j{constructor(){super(...arguments),this._values={}}run(e){return this.substitute(e)}substitute(e){for(let n of e.tokens)if(n.type===p.Variable){const r=n;r.value=this._values[r.name]}return e}set values(e){this._values=e}clear(){if(this._values)for(let e in this._values)this._values[e]=null}}class qu extends oe{constructor(){super(),this.use(new Wu),this.use(new mi)}computeArgs(e){const n=new Array;for(let r=0;r<e.resolution;r++){let a={};for(let i of e.variables)a[i.name]=i.from+(i.to-i.from)/(e.resolution-1)*r;n.push(a)}return n}valuesOf(e,n){const r=new Array;n instanceof Array||(n=this.computeArgs(n));for(let a of n){this.Substitutor.values=a;const i=this.compute(e);r.push(i.value)}return this.Substitutor.clear(),this.compute(e),r}}class Gu extends oe{constructor(e=[new Yu,new Uu,new mi]){super(),this.computes=new Map,e.forEach(n=>{this.use(n)})}expression(e){return this.lastInput=e,this.computes.has(e)||this.computes.set(e,this.compute(e)),this.computes.get(e)}valueOf(e){return this.expression(e).value}valuesOf(e,n){if(typeof n=="string"?n=this.expresion(n):n===void 0&&(n=this.last),!n)throw new Error("Missing expression to calculated. Function valuesOf expect second argument if previous calculation has not be executed");return this.functionCalculator||(this.functionCalculator=new qu),this.functionCalculator.valuesOf(n,e)}expresionFrom(e){return this.expression(e)}get last(){return this.computes.get(this.lastInput)}get lastValue(){return this.last.value}}var Hu=ae('<span class="svelte-15550no"> </span>'),Xu=ae('<span class="calculator_value-label svelte-15550no">Expression result:</span> <span class="calculator_value"> </span>',1),Ku=ae('<div><div class="calculator svelte-15550no"><input type="text"> <!></div> <div class="calculator_errors svelte-15550no"></div> <div class="calculator_value-container svelte-15550no"><!></div></div>');function $u(t,e){te(e,!1);const n=new Gu;let r=_t(),a=_t(null),i=_t([]),s=_t(!1);const o=g=>{if(g)try{M(i,[]);const b=n.valueOf(g);if(M(i,n.last.errors||[]),P(i).length)return;M(a,b||"")}catch(b){M(i,[b])}},l=g=>{var b;M(i,[]),M(a,""),g.key==="Enter"&&o((b=g==null?void 0:g.target)==null?void 0:b.value)},u=()=>{o(P(r).value)};ze();var c=Ku(),d=et(c),f=et(d);let m;Na(f,g=>M(r,g),()=>P(r));var v=Vt(f,2);fu(v,{get isFocused(){return P(s)},$$events:{click:u}});var x=Vt(d,2);Fs(x,5,()=>P(i),Is,(g,b)=>{var E=Hu(),I=et(E);Wt(()=>cr(I,P(b))),Et(g,E)});var y=Vt(x,2),_=et(y);{var k=g=>{var b=Xu(),E=Vt(oa(b),2),I=et(E);Wt(()=>cr(I,P(a))),Et(g,b)};Ea(_,g=>{P(a)&&g(k)})}Wt(g=>m=Rn(f,1,"calculator_input svelte-15550no",null,m,g),[()=>({focused:P(s)})],Me),he("focus",f,()=>M(s,!0)),he("blur",f,()=>M(s,!1)),he("keydown",f,l),Et(t,c),ee()}var Zu=ae('<main class="svelte-vge6b"><div class="rpn"><div class="rpn_container svelte-vge6b"><img class="rpn_logo svelte-vge6b" src="/rpn-demo/logo.png" alt="rpn-logo"></div> <!></div></main>');function Qu(t){var e=Zu(),n=et(e),r=Vt(et(n),2);$u(r,{}),Et(t,e)}Ps(Qu,{target:document.getElementById("app")});
