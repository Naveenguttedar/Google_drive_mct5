(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Ar,N,vh,Ft,rc,_h,vo,ga,_o,yo,yh,hr={},bh=[],Hg=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Bi=Array.isArray;function nt(e,t){for(var n in t)e[n]=t[n];return e}function wh(e){var t=e.parentNode;t&&t.removeChild(e)}function B(e,t,n){var r,i,s,o={};for(s in t)s=="key"?r=t[s]:s=="ref"?i=t[s]:o[s]=t[s];if(arguments.length>2&&(o.children=arguments.length>3?Ar.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(s in e.defaultProps)o[s]===void 0&&(o[s]=e.defaultProps[s]);return nr(e,o,r,i,null)}function nr(e,t,n,r,i){var s={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++vh,__i:-1,__u:0};return i==null&&N.vnode!=null&&N.vnode(s),s}function Sh(){return{current:null}}function _e(e){return e.children}function Pe(e,t){this.props=e,this.context=t}function Yt(e,t){if(t==null)return e.__?Yt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Yt(e):null}function Ih(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ih(e)}}function bo(e){(!e.__d&&(e.__d=!0)&&Ft.push(e)&&!yi.__r++||rc!==N.debounceRendering)&&((rc=N.debounceRendering)||_h)(yi)}function yi(){var e,t,n,r,i,s,o,a;for(Ft.sort(vo);e=Ft.shift();)e.__d&&(t=Ft.length,r=void 0,s=(i=(n=e).__v).__e,o=[],a=[],n.__P&&((r=nt({},i)).__v=i.__v+1,N.vnode&&N.vnode(r),ma(n.__P,r,i,n.__n,n.__P.ownerSVGElement!==void 0,32&i.__u?[s]:null,o,s??Yt(i),!!(32&i.__u),a),r.__v=i.__v,r.__.__k[r.__i]=r,Th(o,r,a),r.__e!=s&&Ih(r)),Ft.length>t&&Ft.sort(vo));yi.__r=0}function Eh(e,t,n,r,i,s,o,a,u,c,h){var l,d,f,p,v,_=r&&r.__k||bh,b=t.length;for(n.__d=u,Vg(n,t,_),u=n.__d,l=0;l<b;l++)(f=n.__k[l])!=null&&typeof f!="boolean"&&typeof f!="function"&&(d=f.__i===-1?hr:_[f.__i]||hr,f.__i=l,ma(e,f,d,i,s,o,a,u,c,h),p=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&va(d.ref,null,f),h.push(f.ref,f.__c||p,f)),v==null&&p!=null&&(v=p),65536&f.__u||d.__k===f.__k?(u&&!u.isConnected&&(u=Yt(d)),u=Rh(f,u,e)):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:p&&(u=p.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=u,n.__e=v}function Vg(e,t,n){var r,i,s,o,a,u=t.length,c=n.length,h=c,l=0;for(e.__k=[],r=0;r<u;r++)o=r+l,(i=e.__k[r]=(i=t[r])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?nr(null,i,null,null,null):Bi(i)?nr(_e,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?nr(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=e,i.__b=e.__b+1,a=Wg(i,n,o,h),i.__i=a,s=null,a!==-1&&(h--,(s=n[a])&&(s.__u|=131072)),s==null||s.__v===null?(a==-1&&l--,typeof i.type!="function"&&(i.__u|=65536)):a!==o&&(a===o+1?l++:a>o?h>u-o?l+=a-o:l--:a<o?a==o-1&&(l=a-o):l=0,a!==r+l&&(i.__u|=65536))):(s=n[o])&&s.key==null&&s.__e&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=Yt(s)),wo(s,s,!1),n[o]=null,h--);if(h)for(r=0;r<c;r++)(s=n[r])!=null&&!(131072&s.__u)&&(s.__e==e.__d&&(e.__d=Yt(s)),wo(s,s))}function Rh(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=Rh(r[i],t,n));return t}e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType===8);return t}function Le(e,t){return t=t||[],e==null||typeof e=="boolean"||(Bi(e)?e.some(function(n){Le(n,t)}):t.push(e)),t}function Wg(e,t,n,r){var i=e.key,s=e.type,o=n-1,a=n+1,u=t[n];if(u===null||u&&i==u.key&&s===u.type&&!(131072&u.__u))return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;o>=0||a<t.length;){if(o>=0){if((u=t[o])&&!(131072&u.__u)&&i==u.key&&s===u.type)return o;o--}if(a<t.length){if((u=t[a])&&!(131072&u.__u)&&i==u.key&&s===u.type)return a;a++}}return-1}function ic(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Hg.test(t)?n:n+"px"}function Jr(e,t,n,r,i){var s;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||ic(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||ic(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")s=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||t==="onFocusOut"||t==="onFocusIn"?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+s]=n,n?r?n.u=r.u:(n.u=ga,e.addEventListener(t,s?yo:_o,s)):e.removeEventListener(t,s?yo:_o,s);else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function sc(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=ga++;else if(t.t<n.u)return;return n(N.event?N.event(t):t)}}}function ma(e,t,n,r,i,s,o,a,u,c){var h,l,d,f,p,v,_,b,y,w,E,A,I,R,L,P=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),s=[a=t.__e=n.__e]),(h=N.__b)&&h(t);e:if(typeof P=="function")try{if(b=t.props,y=(h=P.contextType)&&r[h.__c],w=h?y?y.props.value:h.__:r,n.__c?_=(l=t.__c=n.__c).__=l.__E:("prototype"in P&&P.prototype.render?t.__c=l=new P(b,w):(t.__c=l=new Pe(b,w),l.constructor=P,l.render=Gg),y&&y.sub(l),l.props=b,l.state||(l.state={}),l.context=w,l.__n=r,d=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),P.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=nt({},l.__s)),nt(l.__s,P.getDerivedStateFromProps(b,l.__s))),f=l.props,p=l.state,l.__v=t,d)P.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(P.getDerivedStateFromProps==null&&b!==f&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(b,w),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(b,l.__s,w)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(l.props=b,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(Q){Q&&(Q.__=t)}),E=0;E<l._sb.length;E++)l.__h.push(l._sb[E]);l._sb=[],l.__h.length&&o.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(b,l.__s,w),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(f,p,v)})}if(l.context=w,l.props=b,l.__P=e,l.__e=!1,A=N.__r,I=0,"prototype"in P&&P.prototype.render){for(l.state=l.__s,l.__d=!1,A&&A(t),h=l.render(l.props,l.state,l.context),R=0;R<l._sb.length;R++)l.__h.push(l._sb[R]);l._sb=[]}else do l.__d=!1,A&&A(t),h=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++I<25);l.state=l.__s,l.getChildContext!=null&&(r=nt(nt({},r),l.getChildContext())),d||l.getSnapshotBeforeUpdate==null||(v=l.getSnapshotBeforeUpdate(f,p)),Eh(e,Bi(L=h!=null&&h.type===_e&&h.key==null?h.props.children:h)?L:[L],t,n,r,i,s,o,a,u,c),l.base=t.__e,t.__u&=-161,l.__h.length&&o.push(l),_&&(l.__E=l.__=null)}catch(Q){t.__v=null,u||s!=null?(t.__e=a,t.__u|=u?160:32,s[s.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),N.__e(Q,t,n)}else s==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=qg(n.__e,t,n,r,i,s,o,u,c);(h=N.diffed)&&h(t)}function Th(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)va(n[r],n[++r],n[++r]);N.__c&&N.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(s){s.call(i)})}catch(s){N.__e(s,i.__v)}})}function qg(e,t,n,r,i,s,o,a,u){var c,h,l,d,f,p,v,_=n.props,b=t.props,y=t.type;if(y==="svg"&&(i=!0),s!=null){for(c=0;c<s.length;c++)if((f=s[c])&&"setAttribute"in f==!!y&&(y?f.localName===y:f.nodeType===3)){e=f,s[c]=null;break}}if(e==null){if(y===null)return document.createTextNode(b);e=i?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,b.is&&b),s=null,a=!1}if(y===null)_===b||a&&e.data===b||(e.data=b);else{if(s=s&&Ar.call(e.childNodes),_=n.props||hr,!a&&s!=null)for(_={},c=0;c<e.attributes.length;c++)_[(f=e.attributes[c]).name]=f.value;for(c in _)f=_[c],c=="children"||(c=="dangerouslySetInnerHTML"?l=f:c==="key"||c in b||Jr(e,c,null,f,i));for(c in b)f=b[c],c=="children"?d=f:c=="dangerouslySetInnerHTML"?h=f:c=="value"?p=f:c=="checked"?v=f:c==="key"||a&&typeof f!="function"||_[c]===f||Jr(e,c,f,_[c],i);if(h)a||l&&(h.__html===l.__html||h.__html===e.innerHTML)||(e.innerHTML=h.__html),t.__k=[];else if(l&&(e.innerHTML=""),Eh(e,Bi(d)?d:[d],t,n,r,i&&y!=="foreignObject",s,o,s?s[0]:n.__k&&Yt(n,0),a,u),s!=null)for(c=s.length;c--;)s[c]!=null&&wh(s[c]);a||(c="value",p!==void 0&&(p!==e[c]||y==="progress"&&!p||y==="option"&&p!==_[c])&&Jr(e,c,p,_[c],!1),c="checked",v!==void 0&&v!==e[c]&&Jr(e,c,v,_[c],!1))}return e}function va(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){N.__e(r,n)}}function wo(e,t,n){var r,i;if(N.unmount&&N.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||va(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){N.__e(s,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&wo(r[i],t,n||typeof e.type!="function");n||e.__e==null||wh(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function Gg(e,t,n){return this.constructor(e,n)}function In(e,t,n){var r,i,s,o;N.__&&N.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,s=[],o=[],ma(t,e=(!r&&n||t).__k=B(_e,null,[e]),i||hr,hr,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?Ar.call(t.childNodes):null,s,!r&&n?n:i?i.__e:t.firstChild,r,o),Th(s,e,o)}function Ah(e,t){In(e,t,Ah)}function Ch(e,t,n){var r,i,s,o,a=nt({},e.props);for(s in e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)s=="key"?r=t[s]:s=="ref"?i=t[s]:a[s]=t[s]===void 0&&o!==void 0?o[s]:t[s];return arguments.length>2&&(a.children=arguments.length>3?Ar.call(arguments,2):n),nr(e.type,a,r||e.key,i||e.ref,null)}function _a(e,t){var n={__c:t="__cC"+yh++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[t]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,bo(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Ar=bh.slice,N={__e:function(e,t,n,r){for(var i,s,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(a){e=a}throw e}},vh=0,Pe.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=nt({},this.state),typeof e=="function"&&(e=e(nt({},n),this.props)),e&&nt(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),bo(this))},Pe.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),bo(this))},Pe.prototype.render=_e,Ft=[],_h=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,vo=function(e,t){return e.__v.__b-t.__v.__b},yi.__r=0,ga=0,_o=sc(!1),yo=sc(!0),yh=0;var fe=function(){return fe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},fe.apply(this,arguments)};function fr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var at,F,Ts,oc,En=0,kh=[],ai=[],G=N,ac=G.__b,uc=G.__r,cc=G.diffed,lc=G.__c,hc=G.unmount,fc=G.__;function nn(e,t){G.__h&&G.__h(F,e,En||t),En=0;var n=F.__H||(F.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:ai}),n.__[e]}function Ee(e){return En=1,ya(Nh,e)}function ya(e,t,n){var r=nn(at++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Nh(void 0,t),function(a){var u=r.__N?r.__N[0]:r.__[0],c=r.t(u,a);u!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=F,!F.u)){var i=function(a,u,c){if(!r.__c.__H)return!0;var h=r.__c.__H.__.filter(function(d){return!!d.__c});if(h.every(function(d){return!d.__N}))return!s||s.call(this,a,u,c);var l=!1;return h.forEach(function(d){if(d.__N){var f=d.__[0];d.__=d.__N,d.__N=void 0,f!==d.__[0]&&(l=!0)}}),!(!l&&r.__c.props===a)&&(!s||s.call(this,a,u,c))};F.u=!0;var s=F.shouldComponentUpdate,o=F.componentWillUpdate;F.componentWillUpdate=function(a,u,c){if(this.__e){var h=s;s=void 0,i(a,u,c),s=h}o&&o.call(this,a,u,c)},F.shouldComponentUpdate=i}return r.__N||r.__}function je(e,t){var n=nn(at++,3);!G.__s&&wa(n.__H,t)&&(n.__=e,n.i=t,F.__H.__h.push(n))}function rn(e,t){var n=nn(at++,4);!G.__s&&wa(n.__H,t)&&(n.__=e,n.i=t,F.__h.push(n))}function be(e){return En=5,Cr(function(){return{current:e}},[])}function Ph(e,t,n){En=6,rn(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Cr(e,t){var n=nn(at++,7);return wa(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Pt(e,t){return En=8,Cr(function(){return e},t)}function ba(e){var t=F.context[e.__c],n=nn(at++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(F)),t.props.value):e.__}function xh(e,t){G.useDebugValue&&G.useDebugValue(t?t(e):e)}function Kg(e){var t=nn(at++,10),n=Ee();return t.__=e,F.componentDidCatch||(F.componentDidCatch=function(r,i){t.__&&t.__(r,i),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Oh(){var e=nn(at++,11);if(!e.__){for(var t=F.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Jg(){for(var e;e=kh.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ui),e.__H.__h.forEach(So),e.__H.__h=[]}catch(t){e.__H.__h=[],G.__e(t,e.__v)}}G.__b=function(e){F=null,ac&&ac(e)},G.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),fc&&fc(e,t)},G.__r=function(e){uc&&uc(e),at=0;var t=(F=e.__c).__H;t&&(Ts===F?(t.__h=[],F.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ai,n.__N=n.i=void 0})):(t.__h.forEach(ui),t.__h.forEach(So),t.__h=[],at=0)),Ts=F},G.diffed=function(e){cc&&cc(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(kh.push(t)!==1&&oc===G.requestAnimationFrame||((oc=G.requestAnimationFrame)||Xg)(Jg)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ai&&(n.__=n.__V),n.i=void 0,n.__V=ai})),Ts=F=null},G.__c=function(e,t){t.some(function(n){try{n.__h.forEach(ui),n.__h=n.__h.filter(function(r){return!r.__||So(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],G.__e(r,n.__v)}}),lc&&lc(e,t)},G.unmount=function(e){hc&&hc(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ui(r)}catch(i){t=i}}),n.__H=void 0,t&&G.__e(t,n.__v))};var dc=typeof requestAnimationFrame=="function";function Xg(e){var t,n=function(){clearTimeout(r),dc&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);dc&&(t=requestAnimationFrame(n))}function ui(e){var t=F,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),F=t}function So(e){var t=F;e.__c=e.__(),F=t}function wa(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Nh(e,t){return typeof t=="function"?t(e):t}function Dh(e,t){for(var n in t)e[n]=t[n];return e}function Io(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function bi(e,t){this.props=e,this.context=t}function $h(e,t){function n(i){var s=this.props.ref,o=s==i.ref;return!o&&s&&(s.call?s(null):s.current=null),t?!t(this.props,i)||!o:Io(this.props,i)}function r(i){return this.shouldComponentUpdate=n,B(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(bi.prototype=new Pe).isPureReactComponent=!0,bi.prototype.shouldComponentUpdate=function(e,t){return Io(this.props,e)||Io(this.state,t)};var pc=N.__b;N.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),pc&&pc(e)};var Yg=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function sn(e){function t(n){var r=Dh({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Yg,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var gc=function(e,t){return e==null?null:Le(Le(e).map(t))},Mh={map:gc,forEach:gc,count:function(e){return e?Le(e).length:0},only:function(e){var t=Le(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:Le},Qg=N.__e;N.__e=function(e,t,n,r){if(e.then){for(var i,s=t;s=s.__;)if((i=s.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}Qg(e,t,n,r)};var mc=N.unmount;function Lh(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Dh({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Lh(r,t,n)})),e}function Uh(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Uh(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function rr(){this.__u=0,this.t=null,this.__b=null}function jh(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Fh(e){var t,n,r;function i(s){if(t||(t=e()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw t;return B(n,s)}return i.displayName="Lazy",i.__f=!0,i}function dn(){this.u=null,this.o=null}N.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),mc&&mc(e)},(rr.prototype=new Pe).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=jh(r.__v),s=!1,o=function(){s||(s=!0,n.__R=null,i?i(a):a())};n.__R=o;var a=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=Uh(u,u.__c.__P,u.__c.__O)}var c;for(r.setState({__a:r.__b=null});c=r.t.pop();)c.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},rr.prototype.componentWillUnmount=function(){this.t=[]},rr.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Lh(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&B(_e,null,e.fallback);return i&&(i.__u&=-33),[B(_e,null,t.__a?null:e.children),i]};var vc=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Zg(e){return this.getChildContext=function(){return e.context},e.children}function em(e){var t=this,n=e.i;t.componentWillUnmount=function(){In(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),In(B(Zg,{context:t.context},e.__v),t.l)}function Sa(e,t){var n=B(em,{__v:e,i:t});return n.containerInfo=t,n}(dn.prototype=new Pe).__a=function(e){var t=this,n=jh(t.__v),r=t.o.get(e);return r[0]++,function(i){var s=function(){t.props.revealOrder?(r.push(i),vc(t,e,r)):i()};n?n(s):s()}},dn.prototype.render=function(e){this.u=null,this.o=new Map;var t=Le(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},dn.prototype.componentDidUpdate=dn.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){vc(e,n,t)})};var Bh=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,tm=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,nm=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,rm=/[A-Z0-9]/g,im=typeof document<"u",sm=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function zh(e,t,n){return t.__k==null&&(t.textContent=""),In(e,t),typeof n=="function"&&n(),e?e.__c:null}function Hh(e,t,n){return Ah(e,t),typeof n=="function"&&n(),e?e.__c:null}Pe.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Pe.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var _c=N.event;function om(){}function am(){return this.cancelBubble}function um(){return this.defaultPrevented}N.event=function(e){return _c&&(e=_c(e)),e.persist=om,e.isPropagationStopped=am,e.isDefaultPrevented=um,e.nativeEvent=e};var Ia,cm={enumerable:!1,configurable:!0,get:function(){return this.class}},yc=N.vnode;N.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,i={};for(var s in n){var o=n[s];if(!(s==="value"&&"defaultValue"in n&&o==null||im&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var a=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&o===!0?o="":a==="translate"&&o==="no"?o=!1:a==="ondoubleclick"?s="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||sm(n.type)?a==="onfocus"?s="onfocusin":a==="onblur"?s="onfocusout":nm.test(s)?s=a:r.indexOf("-")===-1&&tm.test(s)?s=s.replace(rm,"-$&").toLowerCase():o===null&&(o=void 0):a=s="oninput",a==="oninput"&&i[s=a]&&(s="oninputCapture"),i[s]=o}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Le(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=Le(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",cm)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i}(e),e.$$typeof=Bh,yc&&yc(e)};var bc=N.__r;N.__r=function(e){bc&&bc(e),Ia=e.__c};var wc=N.diffed;N.diffed=function(e){wc&&wc(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Ia=null};var Vh={ReactCurrentDispatcher:{current:{readContext:function(e){return Ia.__n[e.__c].props.value}}}},lm="17.0.2";function Wh(e){return B.bind(null,e)}function xt(e){return!!e&&e.$$typeof===Bh}function qh(e){return xt(e)&&e.type===_e}function Gh(e){return!!e&&!!e.displayName&&(typeof e.displayName=="string"||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")}function kr(e){return xt(e)?Ch.apply(null,arguments):e}function Kh(e){return!!e.__k&&(In(null,e),!0)}function $n(e){return e&&(e.base||e.nodeType===1&&e)||null}var Jh=function(e,t){return e(t)},Xh=function(e,t){return e(t)},Yh=_e;function Ea(e){e()}function Qh(e){return e}function Zh(){return[!1,Ea]}var ef=rn,tf=xt;function nf(e,t){var n=t(),r=Ee({h:{__:n,v:t}}),i=r[0].h,s=r[1];return rn(function(){i.__=n,i.v=t,As(i)&&s({h:i})},[e,n,t]),je(function(){return As(i)&&s({h:i}),e(function(){As(i)&&s({h:i})})},[e]),n}function As(e){var t,n,r=e.v,i=e.__;try{var s=r();return!((t=i)===(n=s)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var V={useState:Ee,useId:Oh,useReducer:ya,useEffect:je,useLayoutEffect:rn,useInsertionEffect:ef,useTransition:Zh,useDeferredValue:Qh,useSyncExternalStore:nf,startTransition:Ea,useRef:be,useImperativeHandle:Ph,useMemo:Cr,useCallback:Pt,useContext:ba,useDebugValue:xh,version:"17.0.2",Children:Mh,render:zh,hydrate:Hh,unmountComponentAtNode:Kh,createPortal:Sa,createElement:B,createContext:_a,createFactory:Wh,cloneElement:kr,createRef:Sh,Fragment:_e,isValidElement:xt,isElement:tf,isFragment:qh,isMemo:Gh,findDOMNode:$n,Component:Pe,PureComponent:bi,memo:$h,forwardRef:sn,flushSync:Xh,unstable_batchedUpdates:Jh,StrictMode:Yh,Suspense:rr,SuspenseList:dn,lazy:Fh,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Vh};const hm=Object.freeze(Object.defineProperty({__proto__:null,Children:Mh,Component:Pe,Fragment:_e,PureComponent:bi,StrictMode:Yh,Suspense:rr,SuspenseList:dn,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Vh,cloneElement:kr,createContext:_a,createElement:B,createFactory:Wh,createPortal:Sa,createRef:Sh,default:V,findDOMNode:$n,flushSync:Xh,forwardRef:sn,hydrate:Hh,isElement:tf,isFragment:qh,isMemo:Gh,isValidElement:xt,lazy:Fh,memo:$h,render:zh,startTransition:Ea,unmountComponentAtNode:Kh,unstable_batchedUpdates:Jh,useCallback:Pt,useContext:ba,useDebugValue:xh,useDeferredValue:Qh,useEffect:je,useErrorBoundary:Kg,useId:Oh,useImperativeHandle:Ph,useInsertionEffect:ef,useLayoutEffect:rn,useMemo:Cr,useReducer:ya,useRef:be,useState:Ee,useSyncExternalStore:nf,useTransition:Zh,version:lm},Symbol.toStringTag,{value:"Module"}));function fm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function rf(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var z="-ms-",ir="-moz-",$="-webkit-",sf="comm",zi="rule",Ra="decl",dm="@import",of="@keyframes",pm="@layer",af=Math.abs,Ta=String.fromCharCode,Eo=Object.assign;function gm(e,t){return Z(e,0)^45?(((t<<2^Z(e,0))<<2^Z(e,1))<<2^Z(e,2))<<2^Z(e,3):0}function uf(e){return e.trim()}function et(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function ci(e,t,n){return e.indexOf(t,n)}function Z(e,t){return e.charCodeAt(t)|0}function Rn(e,t,n){return e.slice(t,n)}function Be(e){return e.length}function cf(e){return e.length}function Yn(e,t){return t.push(e),e}function mm(e,t){return e.map(t).join("")}function Sc(e,t){return e.filter(function(n){return!et(n,t)})}var Hi=1,Tn=1,lf=0,xe=0,J=0,Mn="";function Vi(e,t,n,r,i,s,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Hi,column:Tn,length:o,return:"",siblings:a}}function yt(e,t){return Eo(Vi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function cn(e){for(;e.root;)e=yt(e.root,{children:[e]});Yn(e,e.siblings)}function vm(){return J}function _m(){return J=xe>0?Z(Mn,--xe):0,Tn--,J===10&&(Tn=1,Hi--),J}function Ue(){return J=xe<lf?Z(Mn,xe++):0,Tn++,J===10&&(Tn=1,Hi++),J}function Wt(){return Z(Mn,xe)}function li(){return xe}function Wi(e,t){return Rn(Mn,e,t)}function Ro(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ym(e){return Hi=Tn=1,lf=Be(Mn=e),xe=0,[]}function bm(e){return Mn="",e}function Cs(e){return uf(Wi(xe-1,To(e===91?e+2:e===40?e+1:e)))}function wm(e){for(;(J=Wt())&&J<33;)Ue();return Ro(e)>2||Ro(J)>3?"":" "}function Sm(e,t){for(;--t&&Ue()&&!(J<48||J>102||J>57&&J<65||J>70&&J<97););return Wi(e,li()+(t<6&&Wt()==32&&Ue()==32))}function To(e){for(;Ue();)switch(J){case e:return xe;case 34:case 39:e!==34&&e!==39&&To(J);break;case 40:e===41&&To(e);break;case 92:Ue();break}return xe}function Im(e,t){for(;Ue()&&e+J!==57;)if(e+J===84&&Wt()===47)break;return"/*"+Wi(t,xe-1)+"*"+Ta(e===47?e:Ue())}function Em(e){for(;!Ro(Wt());)Ue();return Wi(e,xe)}function Rm(e){return bm(hi("",null,null,null,[""],e=ym(e),0,[0],e))}function hi(e,t,n,r,i,s,o,a,u){for(var c=0,h=0,l=o,d=0,f=0,p=0,v=1,_=1,b=1,y=0,w="",E=i,A=s,I=r,R=w;_;)switch(p=y,y=Ue()){case 40:if(p!=108&&Z(R,l-1)==58){ci(R+=O(Cs(y),"&","&\f"),"&\f",af(c?a[c-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:R+=Cs(y);break;case 9:case 10:case 13:case 32:R+=wm(p);break;case 92:R+=Sm(li()-1,7);continue;case 47:switch(Wt()){case 42:case 47:Yn(Tm(Im(Ue(),li()),t,n,u),u);break;default:R+="/"}break;case 123*v:a[c++]=Be(R)*b;case 125*v:case 59:case 0:switch(y){case 0:case 125:_=0;case 59+h:b==-1&&(R=O(R,/\f/g,"")),f>0&&Be(R)-l&&Yn(f>32?Ec(R+";",r,n,l-1,u):Ec(O(R," ","")+";",r,n,l-2,u),u);break;case 59:R+=";";default:if(Yn(I=Ic(R,t,n,c,h,i,a,w,E=[],A=[],l,s),s),y===123)if(h===0)hi(R,t,I,I,E,s,l,a,A);else switch(d===99&&Z(R,3)===110?100:d){case 100:case 108:case 109:case 115:hi(e,I,I,r&&Yn(Ic(e,I,I,0,0,i,a,w,i,E=[],l,A),A),i,A,l,a,r?E:A);break;default:hi(R,I,I,I,[""],A,0,a,A)}}c=h=f=0,v=b=1,w=R="",l=o;break;case 58:l=1+Be(R),f=p;default:if(v<1){if(y==123)--v;else if(y==125&&v++==0&&_m()==125)continue}switch(R+=Ta(y),y*v){case 38:b=h>0?1:(R+="\f",-1);break;case 44:a[c++]=(Be(R)-1)*b,b=1;break;case 64:Wt()===45&&(R+=Cs(Ue())),d=Wt(),h=l=Be(w=R+=Em(li())),y++;break;case 45:p===45&&Be(R)==2&&(v=0)}}return s}function Ic(e,t,n,r,i,s,o,a,u,c,h,l){for(var d=i-1,f=i===0?s:[""],p=cf(f),v=0,_=0,b=0;v<r;++v)for(var y=0,w=Rn(e,d+1,d=af(_=o[v])),E=e;y<p;++y)(E=uf(_>0?f[y]+" "+w:O(w,/&\f/g,f[y])))&&(u[b++]=E);return Vi(e,t,n,i===0?zi:a,u,c,h,l)}function Tm(e,t,n,r){return Vi(e,t,n,sf,Ta(vm()),Rn(e,2,-2),0,r)}function Ec(e,t,n,r,i){return Vi(e,t,n,Ra,Rn(e,0,r),Rn(e,r+1,-1),r,i)}function hf(e,t,n){switch(gm(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return ir+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+ir+e+z+e+e;case 5936:switch(Z(e,t+11)){case 114:return $+e+z+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+z+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+z+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+z+e+e;case 6165:return $+e+z+"flex-"+e+e;case 5187:return $+e+O(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+z+"flex-$1$2")+e;case 5443:return $+e+z+"flex-item-"+O(e,/flex-|-self/g,"")+(et(e,/flex-|baseline/)?"":z+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return $+e+z+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+z+O(e,"shrink","negative")+e;case 5292:return $+e+z+O(e,"basis","preferred-size")+e;case 6060:return $+"box-"+O(e,"-grow","")+$+e+z+O(e,"grow","positive")+e;case 4554:return $+O(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!et(e,/flex-|baseline/))return z+"grid-column-align"+Rn(e,t)+e;break;case 2592:case 3360:return z+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,et(r.props,/grid-\w+-end/)})?~ci(e+(n=n[t].value),"span",0)?e:z+O(e,"-start","")+e+z+"grid-row-span:"+(~ci(n,"span",0)?et(n,/\d+/):+et(n,/\d+/)-+et(e,/\d+/))+";":z+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return et(r.props,/grid-\w+-start/)})?e:z+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Be(e)-1-t>6)switch(Z(e,t+1)){case 109:if(Z(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+ir+(Z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ci(e,"stretch",0)?hf(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return z+i+":"+s+c+(o?z+i+"-span:"+(a?u:+u-+s)+c:"")+e});case 4949:if(Z(e,t+6)===121)return O(e,":",":"+$)+e;break;case 6444:switch(Z(e,Z(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(Z(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+z+"$2box$3")+e;case 100:return O(e,":",":"+z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function wi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Am(e,t,n,r){switch(e.type){case pm:if(e.children.length)break;case dm:case Ra:return e.return=e.return||e.value;case sf:return"";case of:return e.return=e.value+"{"+wi(e.children,r)+"}";case zi:if(!Be(e.value=e.props.join(",")))return""}return Be(n=wi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Cm(e){var t=cf(e);return function(n,r,i,s){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,s)||"";return o}}function km(e){return function(t){t.root||(t=t.return)&&e(t)}}function Pm(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ra:e.return=hf(e.value,e.length,n);return;case of:return wi([yt(e,{value:O(e.value,"@","@"+$)})],r);case zi:if(e.length)return mm(n=e.props,function(i){switch(et(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cn(yt(e,{props:[O(i,/:(read-\w+)/,":"+ir+"$1")]})),cn(yt(e,{props:[i]})),Eo(e,{props:Sc(n,r)});break;case"::placeholder":cn(yt(e,{props:[O(i,/:(plac\w+)/,":"+$+"input-$1")]})),cn(yt(e,{props:[O(i,/:(plac\w+)/,":"+ir+"$1")]})),cn(yt(e,{props:[O(i,/:(plac\w+)/,z+"input-$1")]})),cn(yt(e,{props:[i]})),Eo(e,{props:Sc(n,r)});break}return""})}}var xm={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ye={},An=typeof process<"u"&&ye!==void 0&&(ye.REACT_APP_SC_ATTR||ye.SC_ATTR)||"data-styled",ff="active",df="data-styled-version",qi="6.1.8",Aa=`/*!sc*/
`,Ca=typeof window<"u"&&"HTMLElement"in window,Om=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ye!==void 0&&ye.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ye.REACT_APP_SC_DISABLE_SPEEDY!==""?ye.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ye.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ye!==void 0&&ye.SC_DISABLE_SPEEDY!==void 0&&ye.SC_DISABLE_SPEEDY!==""&&ye.SC_DISABLE_SPEEDY!=="false"&&ye.SC_DISABLE_SPEEDY),Nm={},Gi=Object.freeze([]),Cn=Object.freeze({});function pf(e,t,n){return n===void 0&&(n=Cn),e.theme!==n.theme&&e.theme||t||n.theme}var gf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Dm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$m=/(^-|-$)/g;function Rc(e){return e.replace(Dm,"-").replace($m,"")}var Mm=/(a)(d)/gi,Xr=52,Tc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ao(e){var t,n="";for(t=Math.abs(e);t>Xr;t=t/Xr|0)n=Tc(t%Xr)+n;return(Tc(t%Xr)+n).replace(Mm,"$1-$2")}var ks,mf=5381,pn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vf=function(e){return pn(mf,e)};function _f(e){return Ao(vf(e)>>>0)}function Lm(e){return e.displayName||e.name||"Component"}function Ps(e){return typeof e=="string"&&!0}var yf=typeof Symbol=="function"&&Symbol.for,bf=yf?Symbol.for("react.memo"):60115,Um=yf?Symbol.for("react.forward_ref"):60112,jm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Fm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Bm=((ks={})[Um]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ks[bf]=wf,ks);function Ac(e){return("type"in(t=e)&&t.type.$$typeof)===bf?wf:"$$typeof"in e?Bm[e.$$typeof]:jm;var t}var zm=Object.defineProperty,Hm=Object.getOwnPropertyNames,Cc=Object.getOwnPropertySymbols,Vm=Object.getOwnPropertyDescriptor,Wm=Object.getPrototypeOf,kc=Object.prototype;function Sf(e,t,n){if(typeof t!="string"){if(kc){var r=Wm(t);r&&r!==kc&&Sf(e,r,n)}var i=Hm(t);Cc&&(i=i.concat(Cc(t)));for(var s=Ac(e),o=Ac(t),a=0;a<i.length;++a){var u=i[a];if(!(u in Fm||n&&n[u]||o&&u in o||s&&u in s)){var c=Vm(t,u);try{zm(e,u,c)}catch{}}}}return e}function kn(e){return typeof e=="function"}function ka(e){return typeof e=="object"&&"styledComponentId"in e}function zt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Co(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function dr(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ko(e,t,n){if(n===void 0&&(n=!1),!n&&!dr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ko(e[r],t[r]);else if(dr(t))for(var r in t)e[r]=ko(e[r],t[r]);return e}function Pa(e,t){Object.defineProperty(e,"toString",{value:t})}function Pr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qm=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw Pr(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Aa);return n},e}(),fi=new Map,Si=new Map,di=1,Yr=function(e){if(fi.has(e))return fi.get(e);for(;Si.has(di);)di++;var t=di++;return fi.set(e,t),Si.set(t,e),t},Gm=function(e,t){di=t+1,fi.set(e,t),Si.set(t,e)},Km="style[".concat(An,"][").concat(df,'="').concat(qi,'"]'),Jm=new RegExp("^".concat(An,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xm=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Ym=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Aa),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(Jm);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(Gm(h,c),Xm(e,h,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function Qm(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var If=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(An,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(An,ff),r.setAttribute(df,qi);var o=Qm();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Zm=function(){function e(t){this.element=If(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Pr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ev=function(){function e(t){this.element=If(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),tv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Pc=Ca,nv={isServer:!Ca,useCSSOMInjection:!Om},Ii=function(){function e(t,n,r){t===void 0&&(t=Cn),n===void 0&&(n={});var i=this;this.options=fe(fe({},nv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ca&&Pc&&(Pc=!1,function(s){for(var o=document.querySelectorAll(Km),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(An)!==ff&&(Ym(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Pa(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(l){var d=function(b){return Si.get(b)}(l);if(d===void 0)return"continue";var f=s.names.get(d),p=o.getGroup(l);if(f===void 0||p.length===0)return"continue";var v="".concat(An,".g").concat(l,'[id="').concat(d,'"]'),_="";f!==void 0&&f.forEach(function(b){b.length>0&&(_+="".concat(b,","))}),u+="".concat(p).concat(v,'{content:"').concat(_,'"}').concat(Aa)},h=0;h<a;h++)c(h);return u}(i)})}return e.registerId=function(t){return Yr(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(fe(fe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new tv(i):r?new Zm(i):new ev(i)}(this.options),new qm(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Yr(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Yr(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Yr(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),rv=/&/g,iv=/^\s*\/\/.*$/gm;function Ef(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ef(n.children,t)),n})}function sv(e){var t,n,r,i=e===void 0?Cn:e,s=i.options,o=s===void 0?Cn:s,a=i.plugins,u=a===void 0?Gi:a,c=function(d,f,p){return p.startsWith(n)&&p.endsWith(n)&&p.replaceAll(n,"").length>0?".".concat(t):d},h=u.slice();h.push(function(d){d.type===zi&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(rv,n).replace(r,c))}),o.prefix&&h.push(Pm),h.push(Am);var l=function(d,f,p,v){f===void 0&&(f=""),p===void 0&&(p=""),v===void 0&&(v="&"),t=v,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var _=d.replace(iv,""),b=Rm(p||f?"".concat(p," ").concat(f," { ").concat(_," }"):_);o.namespace&&(b=Ef(b,o.namespace));var y=[];return wi(b,Cm(h.concat(km(function(w){return y.push(w)})))),y};return l.hash=u.length?u.reduce(function(d,f){return f.name||Pr(15),pn(d,f.name)},mf).toString():"",l}var ov=new Ii,Po=sv(),Rf=V.createContext({shouldForwardProp:void 0,styleSheet:ov,stylis:Po});Rf.Consumer;V.createContext(void 0);function xo(){return ba(Rf)}var av=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Po);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Pa(this,function(){throw Pr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Po),this.name+t.hash},e}(),uv=function(e){return e>="A"&&e<="Z"};function xc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;uv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Tf=function(e){return e==null||e===!1||e===""},Af=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Tf(s)&&(Array.isArray(s)&&s.isCss||kn(s)?r.push("".concat(xc(i),":"),s,";"):dr(s)?r.push.apply(r,fr(fr(["".concat(i," {")],Af(s),!1),["}"],!1)):r.push("".concat(xc(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in xm||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Tt(e,t,n,r){if(Tf(e))return[];if(ka(e))return[".".concat(e.styledComponentId)];if(kn(e)){if(!kn(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Tt(i,t,n,r)}var s;return e instanceof av?n?(e.inject(n,r),[e.getName(r)]):[e]:dr(e)?Af(e):Array.isArray(e)?Array.prototype.concat.apply(Gi,e.map(function(o){return Tt(o,t,n,r)})):[e.toString()]}function Cf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(kn(n)&&!ka(n))return!1}return!0}var cv=vf(qi),lv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Cf(t),this.componentId=n,this.baseHash=pn(cv,n),this.baseStyle=r,Ii.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=zt(i,this.staticRulesId);else{var s=Co(Tt(this.rules,t,n,r)),o=Ao(pn(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=zt(i,o),this.staticRulesId=o}else{for(var u=pn(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var l=this.rules[h];if(typeof l=="string")c+=l;else if(l){var d=Co(Tt(l,t,n,r));u=pn(u,d+h),c+=d}}if(c){var f=Ao(u>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(c,".".concat(f),void 0,this.componentId)),i=zt(i,f)}}return i},e}(),xa=V.createContext(void 0);xa.Consumer;var xs={};function hv(e,t,n){var r=ka(e),i=e,s=!Ps(e),o=t.attrs,a=o===void 0?Gi:o,u=t.componentId,c=u===void 0?function(E,A){var I=typeof E!="string"?"sc":Rc(E);xs[I]=(xs[I]||0)+1;var R="".concat(I,"-").concat(_f(qi+I+xs[I]));return A?"".concat(A,"-").concat(R):R}(t.displayName,t.parentComponentId):u,h=t.displayName,l=h===void 0?function(E){return Ps(E)?"styled.".concat(E):"Styled(".concat(Lm(E),")")}(e):h,d=t.displayName&&t.componentId?"".concat(Rc(t.displayName),"-").concat(t.componentId):t.componentId||c,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;p=function(E,A){return v(E,A)&&_(E,A)}}else p=v}var b=new lv(n,d,r?i.componentStyle:void 0);function y(E,A){return function(I,R,L){var P=I.attrs,Q=I.componentStyle,Mt=I.defaultProps,ft=I.foldedComponentIds,Hn=I.styledComponentId,qr=I.target,dt=V.useContext(xa),Gr=xo(),pt=I.shouldForwardProp||Gr.shouldForwardProp,Vn=pf(R,dt,Mt)||Cn,Te=function(mt,Ye,Fe){for(var Lt,Ce=fe(fe({},Ye),{className:void 0,theme:Fe}),un=0;un<mt.length;un+=1){var Qe=kn(Lt=mt[un])?Lt(Ce):Lt;for(var $e in Qe)Ce[$e]=$e==="className"?zt(Ce[$e],Qe[$e]):$e==="style"?fe(fe({},Ce[$e]),Qe[$e]):Qe[$e]}return Ye.className&&(Ce.className=zt(Ce.className,Ye.className)),Ce}(P,R,Vn),Ae=Te.as||qr,gt={};for(var De in Te)Te[De]===void 0||De[0]==="$"||De==="as"||De==="theme"&&Te.theme===Vn||(De==="forwardedAs"?gt.as=Te.forwardedAs:pt&&!pt(De,Ae)||(gt[De]=Te[De]));var Wn=function(mt,Ye){var Fe=xo(),Lt=mt.generateAndInjectStyles(Ye,Fe.styleSheet,Fe.stylis);return Lt}(Q,Te),an=zt(ft,Hn);return Wn&&(an+=" "+Wn),Te.className&&(an+=" "+Te.className),gt[Ps(Ae)&&!gf.has(Ae)?"class":"className"]=an,gt.ref=L,B(Ae,gt)}(w,E,A)}y.displayName=l;var w=V.forwardRef(y);return w.attrs=f,w.componentStyle=b,w.displayName=l,w.shouldForwardProp=p,w.foldedComponentIds=r?zt(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=d,w.target=r?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(A){for(var I=[],R=1;R<arguments.length;R++)I[R-1]=arguments[R];for(var L=0,P=I;L<P.length;L++)ko(A,P[L],!0);return A}({},i.defaultProps,E):E}}),Pa(w,function(){return".".concat(w.styledComponentId)}),s&&Sf(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function Oc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Nc=function(e){return Object.assign(e,{isCss:!0})};function kf(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(kn(e)||dr(e))return Nc(Tt(Oc(Gi,fr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Tt(r):Nc(Tt(Oc(r,t)))}function Oo(e,t,n){if(n===void 0&&(n=Cn),!t)throw Pr(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,kf.apply(void 0,fr([i],s,!1)))};return r.attrs=function(i){return Oo(e,t,fe(fe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Oo(e,t,fe(fe({},n),i))},r}var Pf=function(e){return Oo(hv,e)},q=Pf;gf.forEach(function(e){q[e]=Pf(e)});var fv=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Cf(t),Ii.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(Co(Tt(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&Ii.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function dv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=kf.apply(void 0,fr([e],t,!1)),i="sc-global-".concat(_f(JSON.stringify(r))),s=new fv(r,i),o=function(u){var c=xo(),h=V.useContext(xa),l=V.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(l,u,c.styleSheet,h,c.stylis),V.useLayoutEffect(function(){if(!c.styleSheet.server)return a(l,u,c.styleSheet,h,c.stylis),function(){return s.removeStyles(l,c.styleSheet)}},[l,u,c.styleSheet,h,c.stylis]),null};function a(u,c,h,l,d){if(s.isStatic)s.renderStyles(u,Nm,h,d);else{var f=fe(fe({},c),{theme:pf(c,l,o.defaultProps)});s.renderStyles(u,f,h,d)}}return V.memo(o)}var pv={};function Qr(e,t){for(var n in t)e[n]=t[n];return e}function gv(e,t,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,s=e.match(i),o={};if(s&&s[1])for(var a=s[1].split("&"),u=0;u<a.length;u++){var c=a[u].split("=");o[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}e=No(e.replace(i,"")),t=No(t||"");for(var h=Math.max(e.length,t.length),l=0;l<h;l++)if(t[l]&&t[l].charAt(0)===":"){var d=t[l].replace(/(^:|[+*?]+$)/g,""),f=(t[l].match(/[+*?]+$/)||pv)[0]||"",p=~f.indexOf("+"),v=~f.indexOf("*"),_=e[l]||"";if(!_&&!v&&(f.indexOf("?")<0||p)){r=!1;break}if(o[d]=decodeURIComponent(_),p||v){o[d]=e.slice(l).map(decodeURIComponent).join("/");break}}else if(t[l]!==e[l]){r=!1;break}return(n.default===!0||r!==!1)&&o}function mv(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function vv(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:No(n.props.path).map(_v).join("")}(e),e.props}function No(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function _v(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var yv={},qt=[],Dc=[],we=null,xf={url:Oa()},bv=_a(xf);function Oa(){var e;return""+((e=we&&we.location?we.location:we&&we.getCurrentLocation?we.getCurrentLocation():typeof location<"u"?location:yv).pathname||"")+(e.search||"")}function Of(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=qt.length;r--;)if(qt[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),we&&we[r]?we[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),Nf(e)}function Nf(e){for(var t=!1,n=0;n<qt.length;n++)qt[n].routeTo(e)&&(t=!0);return t}function wv(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return Of(t)}}function Sv(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function Iv(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(wv(t))return Sv(e)}while(t=t.parentNode)}}var $c=!1;function Df(e){e.history&&(we=e.history),this.state={url:e.url||Oa()}}Qr(Df.prototype=new Pe,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=Le(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;$c||($c=!0,we||addEventListener("popstate",function(){Nf(Oa())}),addEventListener("click",Iv)),qt.push(this),we&&(this.u=we.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),qt.splice(qt.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(vv).sort(mv);for(var n=0;n<e.length;n++){var r=e[n],i=gv(t,r.props.path,r.props);if(i)return[r,i]}},render:function(e,t){var n,r,i=e.onChange,s=t.url,o=this.c,a=this.g(Le(e.children),s);if(a&&(r=Ch(a[0],Qr(Qr({url:s,matches:n=a[1]},n),{key:void 0,ref:void 0}))),s!==(o&&o.url)){Qr(xf,o=this.c={url:s,previous:o&&o.url,current:r,path:r?r.props.path:null,matches:n}),o.router=this,o.active=r?[r]:[];for(var u=Dc.length;u--;)Dc[u]({});typeof i=="function"&&i(o)}return B(bv.Provider,{value:o},r)}});var Mc=function(e){return B(e.component,e)},Ev=0;function m(e,t,n,r,i,s){var o,a,u={};for(a in t)a=="ref"?o=t[a]:u[a]=t[a];var c={type:e,props:u,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Ev,__i:-1,__u:0,__source:i,__self:s};if(typeof e=="function"&&(o=e.defaultProps))for(a in o)u[a]===void 0&&(u[a]=o[a]);return N.vnode&&N.vnode(c),c}function Rv(){const e=t=>{Of(`/${t}`,!0)};return m(Tv,{children:[m(Av,{children:[m("div",{class:"left",children:"Google Drive"}),m("div",{class:"right",children:[m("div",{children:"meet drive"}),m("div",{children:"using drive"}),m("div",{children:"play drive"}),m("div",{children:"eat drive"})]})]}),m(Cv,{children:[m("img",{src:"https://www.google.com/drive/static/images/drive/logo-drive.png"}),m("div",{children:"A safe place for all your files"}),m(kv,{onClick:()=>e("mydrive"),children:"Go to Google Drive"})]})]})}const Tv=q.div`
background: url("https://www.google.com/drive/static/images/home/intro-1600.jpg");
background-size: cover;
width: 100%;
height: 100vh;
`,Av=q.div`
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
color: white;
.left{
font-weight: bold;
font-size: 20px;}
.right{
display: flex;
text-transform: capitalize;
}
.right div{
margin:0px 10px;
}
`,Cv=q.div`
height: calc(100vh - 50px);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
img{
height:77px;
}
div{
color: white;
margin: 20px 0;
font-size: 20px;
}
`,kv=q.button`
cursor:pointer;
background: dodgerblue;
color: white;
padding: 20px 40px;
border: none;
`;var Na={},$f={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})($f);var se=$f.exports,Mf={exports:{}},Lf={exports:{}};(function(e){function t(n){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Lf);var Pv=Lf.exports;(function(e){var t=Pv.default;function n(i){if(typeof WeakMap!="function")return null;var s=new WeakMap,o=new WeakMap;return(n=function(u){return u?o:s})(i)}function r(i,s){if(!s&&i&&i.__esModule)return i;if(i===null||t(i)!="object"&&typeof i!="function")return{default:i};var o=n(s);if(o&&o.has(i))return o.get(i);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in i)if(c!=="default"&&{}.hasOwnProperty.call(i,c)){var h=u?Object.getOwnPropertyDescriptor(i,c):null;h&&(h.get||h.set)?Object.defineProperty(a,c,h):a[c]=i[c]}return a.default=i,o&&o.set(i,a),a}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(Mf);var oe=Mf.exports;const ae=rf(hm);var Os={};function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function Pn(e){"@babel/helpers - typeof";return Pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pn(e)}function Ns(e){return e&&Pn(e)==="object"&&e.constructor===Object}function xn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{clone:!0},r=n.clone?T({},e):e;return Ns(e)&&Ns(t)&&Object.keys(t).forEach(function(i){i!=="__proto__"&&(Ns(t[i])&&i in e?r[i]=xn(e[i],t[i],n):r[i]=t[i])}),r}function xv(e,t){if(Pn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Pn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Uf(e){var t=xv(e,"string");return Pn(t)=="symbol"?t:t+""}function Ds(e,t,n){return t=Uf(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ei(e){for(var t="https://mui.com/production-error/?code="+e,n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+e+"; visit "+t+" for the full message."}function Do(e){if(typeof e!="string")throw new Error(Ei(7));return e.charAt(0).toUpperCase()+e.slice(1)}function $o(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(r,i){return i==null?r:function(){for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];r.apply(this,a),i.apply(this,a)}},function(){})}function jf(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Oe(e,t){if(e==null)return{};var n=jf(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ff(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Ff(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function Bf(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=Ff(e))&&(r&&(r+=" "),r+=t);return r}var Ov=typeof Symbol=="function"&&Symbol.for;const Nv=Ov?Symbol.for("mui.nested"):"__THEME_NESTED__";var Dv=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];function $v(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.disableGlobal,n=t===void 0?!1:t,r=e.productionPrefix,i=r===void 0?"jss":r,s=e.seed,o=s===void 0?"":s,a=o===""?"":"".concat(o,"-"),u=0,c=function(){return u+=1,u};return function(h,l){var d=l.options.name;if(d&&d.indexOf("Mui")===0&&!l.options.link&&!n){if(Dv.indexOf(h.key)!==-1)return"Mui-".concat(h.key);var f="".concat(a).concat(d,"-").concat(h.key);return!l.options.theme[Nv]||o!==""?f:"".concat(f,"-").concat(c())}return"".concat(a).concat(i).concat(c())}}function zf(e){var t=e.theme,n=e.name,r=e.props;if(!t||!t.props||!t.props[n])return r;var i=t.props[n],s;for(s in i)r[s]===void 0&&(r[s]=i[s]);return r}var Lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xr=(typeof window>"u"?"undefined":Lc(window))==="object"&&(typeof document>"u"?"undefined":Lc(document))==="object"&&document.nodeType===9;function Uc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Uf(r.key),r)}}function Da(e,t,n){return t&&Uc(e.prototype,t),n&&Uc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mo(e,t){return Mo=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Mo(e,t)}function Hf(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Mo(e,t)}function jc(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Mv={}.constructor;function Lo(e){if(e==null||typeof e!="object")return e;if(Array.isArray(e))return e.map(Lo);if(e.constructor!==Mv)return e;var t={};for(var n in e)t[n]=Lo(e[n]);return t}function $a(e,t,n){e===void 0&&(e="unnamed");var r=n.jss,i=Lo(t),s=r.plugins.onCreateRule(e,i,n);return s||(e[0],null)}var Fc=function(t,n){for(var r="",i=0;i<t.length&&t[i]!=="!important";i++)r&&(r+=n),r+=t[i];return r},Gt=function(t){if(!Array.isArray(t))return t;var n="";if(Array.isArray(t[0]))for(var r=0;r<t.length&&t[r]!=="!important";r++)n&&(n+=", "),n+=Fc(t[r]," ");else n=Fc(t,", ");return t[t.length-1]==="!important"&&(n+=" !important"),n};function Ln(e){return e&&e.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function Gn(e,t){for(var n="",r=0;r<t;r++)n+="  ";return n+e}function pr(e,t,n){n===void 0&&(n={});var r="";if(!t)return r;var i=n,s=i.indent,o=s===void 0?0:s,a=t.fallbacks;n.format===!1&&(o=-1/0);var u=Ln(n),c=u.linebreak,h=u.space;if(e&&o++,a)if(Array.isArray(a))for(var l=0;l<a.length;l++){var d=a[l];for(var f in d){var p=d[f];p!=null&&(r&&(r+=c),r+=Gn(f+":"+h+Gt(p)+";",o))}}else for(var v in a){var _=a[v];_!=null&&(r&&(r+=c),r+=Gn(v+":"+h+Gt(_)+";",o))}for(var b in t){var y=t[b];y!=null&&b!=="fallbacks"&&(r&&(r+=c),r+=Gn(b+":"+h+Gt(y)+";",o))}return!r&&!n.allowEmpty||!e?r:(o--,r&&(r=""+c+r+c),Gn(""+e+h+"{"+r,o)+Gn("}",o))}var Lv=/([[\].#*$><+~=|^:(),"'`\s])/g,Bc=typeof CSS<"u"&&CSS.escape,Ma=function(e){return Bc?Bc(e):e.replace(Lv,"\\$1")},Vf=function(){function e(n,r,i){this.type="style",this.isProcessed=!1;var s=i.sheet,o=i.Renderer;this.key=n,this.options=i,this.style=r,s?this.renderer=s.renderer:o&&(this.renderer=new o)}var t=e.prototype;return t.prop=function(r,i,s){if(i===void 0)return this.style[r];var o=s?s.force:!1;if(!o&&this.style[r]===i)return this;var a=i;(!s||s.process!==!1)&&(a=this.options.jss.plugins.onChangeValue(i,r,this));var u=a==null||a===!1,c=r in this.style;if(u&&!c&&!o)return this;var h=u&&c;if(h?delete this.style[r]:this.style[r]=a,this.renderable&&this.renderer)return h?this.renderer.removeProperty(this.renderable,r):this.renderer.setProperty(this.renderable,r,a),this;var l=this.options.sheet;return l&&l.attached,this},e}(),Uo=function(e){Hf(t,e);function t(r,i,s){var o;o=e.call(this,r,i,s)||this;var a=s.selector,u=s.scoped,c=s.sheet,h=s.generateId;return a?o.selectorText=a:u!==!1&&(o.id=h(jc(jc(o)),c),o.selectorText="."+Ma(o.id)),o}var n=t.prototype;return n.applyTo=function(i){var s=this.renderer;if(s){var o=this.toJSON();for(var a in o)s.setProperty(i,a,o[a])}return this},n.toJSON=function(){var i={};for(var s in this.style){var o=this.style[s];typeof o!="object"?i[s]=o:Array.isArray(o)&&(i[s]=Gt(o))}return i},n.toString=function(i){var s=this.options.sheet,o=s?s.options.link:!1,a=o?T({},i,{allowEmpty:!0}):i;return pr(this.selectorText,this.style,a)},Da(t,[{key:"selector",set:function(i){if(i!==this.selectorText){this.selectorText=i;var s=this.renderer,o=this.renderable;if(!(!o||!s)){var a=s.setSelector(o,i);a||s.replaceRule(o,this)}}},get:function(){return this.selectorText}}]),t}(Vf),Uv={onCreateRule:function(t,n,r){return t[0]==="@"||r.parent&&r.parent.type==="keyframes"?null:new Uo(t,n,r)}},$s={indent:1,children:!0},jv=/@([\w-]+)/,Fv=function(){function e(n,r,i){this.type="conditional",this.isProcessed=!1,this.key=n;var s=n.match(jv);this.at=s?s[1]:"unknown",this.query=i.name||"@"+this.at,this.options=i,this.rules=new Ki(T({},i,{parent:this}));for(var o in r)this.rules.add(o,r[o]);this.rules.process()}var t=e.prototype;return t.getRule=function(r){return this.rules.get(r)},t.indexOf=function(r){return this.rules.indexOf(r)},t.addRule=function(r,i,s){var o=this.rules.add(r,i,s);return o?(this.options.jss.plugins.onProcessRule(o),o):null},t.replaceRule=function(r,i,s){var o=this.rules.replace(r,i,s);return o&&this.options.jss.plugins.onProcessRule(o),o},t.toString=function(r){r===void 0&&(r=$s);var i=Ln(r),s=i.linebreak;if(r.indent==null&&(r.indent=$s.indent),r.children==null&&(r.children=$s.children),r.children===!1)return this.query+" {}";var o=this.rules.toString(r);return o?this.query+" {"+s+o+s+"}":""},e}(),Bv=/@container|@media|@supports\s+/,zv={onCreateRule:function(t,n,r){return Bv.test(t)?new Fv(t,n,r):null}},Ms={indent:1,children:!0},Hv=/@keyframes\s+([\w-]+)/,jo=function(){function e(n,r,i){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var s=n.match(Hv);s&&s[1]?this.name=s[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=i;var o=i.scoped,a=i.sheet,u=i.generateId;this.id=o===!1?this.name:Ma(u(this,a)),this.rules=new Ki(T({},i,{parent:this}));for(var c in r)this.rules.add(c,r[c],T({},i,{parent:this}));this.rules.process()}var t=e.prototype;return t.toString=function(r){r===void 0&&(r=Ms);var i=Ln(r),s=i.linebreak;if(r.indent==null&&(r.indent=Ms.indent),r.children==null&&(r.children=Ms.children),r.children===!1)return this.at+" "+this.id+" {}";var o=this.rules.toString(r);return o&&(o=""+s+o+s),this.at+" "+this.id+" {"+o+"}"},e}(),Vv=/@keyframes\s+/,Wv=/\$([\w-]+)/g,Fo=function(t,n){return typeof t=="string"?t.replace(Wv,function(r,i){return i in n?n[i]:r}):t},zc=function(t,n,r){var i=t[n],s=Fo(i,r);s!==i&&(t[n]=s)},qv={onCreateRule:function(t,n,r){return typeof t=="string"&&Vv.test(t)?new jo(t,n,r):null},onProcessStyle:function(t,n,r){return n.type!=="style"||!r||("animation-name"in t&&zc(t,"animation-name",r.keyframes),"animation"in t&&zc(t,"animation",r.keyframes)),t},onChangeValue:function(t,n,r){var i=r.options.sheet;if(!i)return t;switch(n){case"animation":return Fo(t,i.keyframes);case"animation-name":return Fo(t,i.keyframes);default:return t}}},Gv=function(e){Hf(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.toString=function(i){var s=this.options.sheet,o=s?s.options.link:!1,a=o?T({},i,{allowEmpty:!0}):i;return pr(this.key,this.style,a)},t}(Vf),Kv={onCreateRule:function(t,n,r){return r.parent&&r.parent.type==="keyframes"?new Gv(t,n,r):null}},Jv=function(){function e(n,r,i){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var t=e.prototype;return t.toString=function(r){var i=Ln(r),s=i.linebreak;if(Array.isArray(this.style)){for(var o="",a=0;a<this.style.length;a++)o+=pr(this.at,this.style[a]),this.style[a+1]&&(o+=s);return o}return pr(this.at,this.style,r)},e}(),Xv=/@font-face/,Yv={onCreateRule:function(t,n,r){return Xv.test(t)?new Jv(t,n,r):null}},Qv=function(){function e(n,r,i){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var t=e.prototype;return t.toString=function(r){return pr(this.key,this.style,r)},e}(),Zv={onCreateRule:function(t,n,r){return t==="@viewport"||t==="@-ms-viewport"?new Qv(t,n,r):null}},e_=function(){function e(n,r,i){this.type="simple",this.isProcessed=!1,this.key=n,this.value=r,this.options=i}var t=e.prototype;return t.toString=function(r){if(Array.isArray(this.value)){for(var i="",s=0;s<this.value.length;s++)i+=this.key+" "+this.value[s]+";",this.value[s+1]&&(i+=`
`);return i}return this.key+" "+this.value+";"},e}(),t_={"@charset":!0,"@import":!0,"@namespace":!0},n_={onCreateRule:function(t,n,r){return t in t_?new e_(t,n,r):null}},Hc=[Uv,zv,qv,Kv,Yv,Zv,n_],r_={process:!0},Vc={force:!0,process:!0},Ki=function(){function e(n){this.map={},this.raw={},this.index=[],this.counter=0,this.options=n,this.classes=n.classes,this.keyframes=n.keyframes}var t=e.prototype;return t.add=function(r,i,s){var o=this.options,a=o.parent,u=o.sheet,c=o.jss,h=o.Renderer,l=o.generateId,d=o.scoped,f=T({classes:this.classes,parent:a,sheet:u,jss:c,Renderer:h,generateId:l,scoped:d,name:r,keyframes:this.keyframes,selector:void 0},s),p=r;r in this.raw&&(p=r+"-d"+this.counter++),this.raw[p]=i,p in this.classes&&(f.selector="."+Ma(this.classes[p]));var v=$a(p,i,f);if(!v)return null;this.register(v);var _=f.index===void 0?this.index.length:f.index;return this.index.splice(_,0,v),v},t.replace=function(r,i,s){var o=this.get(r),a=this.index.indexOf(o);o&&this.remove(o);var u=s;return a!==-1&&(u=T({},s,{index:a})),this.add(r,i,u)},t.get=function(r){return this.map[r]},t.remove=function(r){this.unregister(r),delete this.raw[r.key],this.index.splice(this.index.indexOf(r),1)},t.indexOf=function(r){return this.index.indexOf(r)},t.process=function(){var r=this.options.jss.plugins;this.index.slice(0).forEach(r.onProcessRule,r)},t.register=function(r){this.map[r.key]=r,r instanceof Uo?(this.map[r.selector]=r,r.id&&(this.classes[r.key]=r.id)):r instanceof jo&&this.keyframes&&(this.keyframes[r.name]=r.id)},t.unregister=function(r){delete this.map[r.key],r instanceof Uo?(delete this.map[r.selector],delete this.classes[r.key]):r instanceof jo&&delete this.keyframes[r.name]},t.update=function(){var r,i,s;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(r=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],s=arguments.length<=2?void 0:arguments[2]):(i=arguments.length<=0?void 0:arguments[0],s=arguments.length<=1?void 0:arguments[1],r=null),r)this.updateOne(this.get(r),i,s);else for(var o=0;o<this.index.length;o++)this.updateOne(this.index[o],i,s)},t.updateOne=function(r,i,s){s===void 0&&(s=r_);var o=this.options,a=o.jss.plugins,u=o.sheet;if(r.rules instanceof e){r.rules.update(i,s);return}var c=r.style;if(a.onUpdate(i,r,u,s),s.process&&c&&c!==r.style){a.onProcessStyle(r.style,r,u);for(var h in r.style){var l=r.style[h],d=c[h];l!==d&&r.prop(h,l,Vc)}for(var f in c){var p=r.style[f],v=c[f];p==null&&p!==v&&r.prop(f,null,Vc)}}},t.toString=function(r){for(var i="",s=this.options.sheet,o=s?s.options.link:!1,a=Ln(r),u=a.linebreak,c=0;c<this.index.length;c++){var h=this.index[c],l=h.toString(r);!l&&!o||(i&&(i+=u),i+=l)}return i},e}(),Wf=function(){function e(n,r){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=T({},r,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),r.Renderer&&(this.renderer=new r.Renderer(this)),this.rules=new Ki(this.options);for(var i in n)this.rules.add(i,n[i]);this.rules.process()}var t=e.prototype;return t.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},t.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},t.addRule=function(r,i,s){var o=this.queue;this.attached&&!o&&(this.queue=[]);var a=this.rules.add(r,i,s);return a?(this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&(o?o.push(a):(this.insertRule(a),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),a):(this.deployed=!1,a)):null},t.replaceRule=function(r,i,s){var o=this.rules.get(r);if(!o)return this.addRule(r,i,s);var a=this.rules.replace(r,i,s);return a&&this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&this.renderer&&(a?o.renderable&&this.renderer.replaceRule(o.renderable,a):this.renderer.deleteRule(o)),a):(this.deployed=!1,a)},t.insertRule=function(r){this.renderer&&this.renderer.insertRule(r)},t.addRules=function(r,i){var s=[];for(var o in r){var a=this.addRule(o,r[o],i);a&&s.push(a)}return s},t.getRule=function(r){return this.rules.get(r)},t.deleteRule=function(r){var i=typeof r=="object"?r:this.rules.get(r);return!i||this.attached&&!i.renderable?!1:(this.rules.remove(i),this.attached&&i.renderable&&this.renderer?this.renderer.deleteRule(i.renderable):!0)},t.indexOf=function(r){return this.rules.indexOf(r)},t.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},t.update=function(){var r;return(r=this.rules).update.apply(r,arguments),this},t.updateOne=function(r,i,s){return this.rules.updateOne(r,i,s),this},t.toString=function(r){return this.rules.toString(r)},e}(),i_=function(){function e(){this.plugins={internal:[],external:[]},this.registry={}}var t=e.prototype;return t.onCreateRule=function(r,i,s){for(var o=0;o<this.registry.onCreateRule.length;o++){var a=this.registry.onCreateRule[o](r,i,s);if(a)return a}return null},t.onProcessRule=function(r){if(!r.isProcessed){for(var i=r.options.sheet,s=0;s<this.registry.onProcessRule.length;s++)this.registry.onProcessRule[s](r,i);r.style&&this.onProcessStyle(r.style,r,i),r.isProcessed=!0}},t.onProcessStyle=function(r,i,s){for(var o=0;o<this.registry.onProcessStyle.length;o++)i.style=this.registry.onProcessStyle[o](i.style,i,s)},t.onProcessSheet=function(r){for(var i=0;i<this.registry.onProcessSheet.length;i++)this.registry.onProcessSheet[i](r)},t.onUpdate=function(r,i,s,o){for(var a=0;a<this.registry.onUpdate.length;a++)this.registry.onUpdate[a](r,i,s,o)},t.onChangeValue=function(r,i,s){for(var o=r,a=0;a<this.registry.onChangeValue.length;a++)o=this.registry.onChangeValue[a](o,i,s);return o},t.use=function(r,i){i===void 0&&(i={queue:"external"});var s=this.plugins[i.queue];s.indexOf(r)===-1&&(s.push(r),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(o,a){for(var u in a)u in o&&o[u].push(a[u]);return o},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},e}(),s_=function(){function e(){this.registry=[]}var t=e.prototype;return t.add=function(r){var i=this.registry,s=r.options.index;if(i.indexOf(r)===-1){if(i.length===0||s>=this.index){i.push(r);return}for(var o=0;o<i.length;o++)if(i[o].options.index>s){i.splice(o,0,r);return}}},t.reset=function(){this.registry=[]},t.remove=function(r){var i=this.registry.indexOf(r);this.registry.splice(i,1)},t.toString=function(r){for(var i=r===void 0?{}:r,s=i.attached,o=jf(i,["attached"]),a=Ln(o),u=a.linebreak,c="",h=0;h<this.registry.length;h++){var l=this.registry[h];s!=null&&l.attached!==s||(c&&(c+=u),c+=l.toString(o))}return c},Da(e,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),e}(),sr=new s_,Bo=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),zo="2f1acc6c3a606b082e5eef5e54414ffb";Bo[zo]==null&&(Bo[zo]=0);var Wc=Bo[zo]++,qc=function(t){t===void 0&&(t={});var n=0,r=function(s,o){n+=1;var a="",u="";return o&&(o.options.classNamePrefix&&(u=o.options.classNamePrefix),o.options.jss.id!=null&&(a=String(o.options.jss.id))),t.minify?""+(u||"c")+Wc+a+n:u+s.key+"-"+Wc+(a?"-"+a:"")+"-"+n};return r},qf=function(t){var n;return function(){return n||(n=t()),n}},o_=function(t,n){try{return t.attributeStyleMap?t.attributeStyleMap.get(n):t.style.getPropertyValue(n)}catch{return""}},a_=function(t,n,r){try{var i=r;if(Array.isArray(r)&&(i=Gt(r)),t.attributeStyleMap)t.attributeStyleMap.set(n,i);else{var s=i?i.indexOf("!important"):-1,o=s>-1?i.substr(0,s-1):i;t.style.setProperty(n,o,s>-1?"important":"")}}catch{return!1}return!0},u_=function(t,n){try{t.attributeStyleMap?t.attributeStyleMap.delete(n):t.style.removeProperty(n)}catch{}},c_=function(t,n){return t.selectorText=n,t.selectorText===n},Gf=qf(function(){return document.querySelector("head")});function l_(e,t){for(var n=0;n<e.length;n++){var r=e[n];if(r.attached&&r.options.index>t.index&&r.options.insertionPoint===t.insertionPoint)return r}return null}function h_(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.attached&&r.options.insertionPoint===t.insertionPoint)return r}return null}function f_(e){for(var t=Gf(),n=0;n<t.childNodes.length;n++){var r=t.childNodes[n];if(r.nodeType===8&&r.nodeValue.trim()===e)return r}return null}function d_(e){var t=sr.registry;if(t.length>0){var n=l_(t,e);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(n=h_(t,e),n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var r=e.insertionPoint;if(r&&typeof r=="string"){var i=f_(r);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}function p_(e,t){var n=t.insertionPoint,r=d_(t);if(r!==!1&&r.parent){r.parent.insertBefore(e,r.node);return}if(n&&typeof n.nodeType=="number"){var i=n,s=i.parentNode;s&&s.insertBefore(e,i.nextSibling);return}Gf().appendChild(e)}var g_=qf(function(){var e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}),Gc=function(t,n,r){try{"insertRule"in t?t.insertRule(n,r):"appendRule"in t&&t.appendRule(n)}catch{return!1}return t.cssRules[r]},Kc=function(t,n){var r=t.cssRules.length;return n===void 0||n>r?r:n},m_=function(){var t=document.createElement("style");return t.textContent=`
`,t},v_=function(){function e(n){this.getPropertyValue=o_,this.setProperty=a_,this.removeProperty=u_,this.setSelector=c_,this.hasInsertedRules=!1,this.cssRules=[],n&&sr.add(n),this.sheet=n;var r=this.sheet?this.sheet.options:{},i=r.media,s=r.meta,o=r.element;this.element=o||m_(),this.element.setAttribute("data-jss",""),i&&this.element.setAttribute("media",i),s&&this.element.setAttribute("data-meta",s);var a=g_();a&&this.element.setAttribute("nonce",a)}var t=e.prototype;return t.attach=function(){if(!(this.element.parentNode||!this.sheet)){p_(this.element,this.sheet.options);var r=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&r&&(this.hasInsertedRules=!1,this.deploy())}},t.detach=function(){if(this.sheet){var r=this.element.parentNode;r&&r.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},t.deploy=function(){var r=this.sheet;if(r){if(r.options.link){this.insertRules(r.rules);return}this.element.textContent=`
`+r.toString()+`
`}},t.insertRules=function(r,i){for(var s=0;s<r.index.length;s++)this.insertRule(r.index[s],s,i)},t.insertRule=function(r,i,s){if(s===void 0&&(s=this.element.sheet),r.rules){var o=r,a=s;if(r.type==="conditional"||r.type==="keyframes"){var u=Kc(s,i);if(a=Gc(s,o.toString({children:!1}),u),a===!1)return!1;this.refCssRule(r,u,a)}return this.insertRules(o.rules,a),a}var c=r.toString();if(!c)return!1;var h=Kc(s,i),l=Gc(s,c,h);return l===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(r,h,l),l)},t.refCssRule=function(r,i,s){r.renderable=s,r.options.parent instanceof Wf&&this.cssRules.splice(i,0,s)},t.deleteRule=function(r){var i=this.element.sheet,s=this.indexOf(r);return s===-1?!1:(i.deleteRule(s),this.cssRules.splice(s,1),!0)},t.indexOf=function(r){return this.cssRules.indexOf(r)},t.replaceRule=function(r,i){var s=this.indexOf(r);return s===-1?!1:(this.element.sheet.deleteRule(s),this.cssRules.splice(s,1),this.insertRule(i,s))},t.getRules=function(){return this.element.sheet.cssRules},e}(),__=0,y_=function(){function e(n){this.id=__++,this.version="10.10.0",this.plugins=new i_,this.options={id:{minify:!1},createGenerateId:qc,Renderer:xr?v_:null,plugins:[]},this.generateId=qc({minify:!1});for(var r=0;r<Hc.length;r++)this.plugins.use(Hc[r],{queue:"internal"});this.setup(n)}var t=e.prototype;return t.setup=function(r){return r===void 0&&(r={}),r.createGenerateId&&(this.options.createGenerateId=r.createGenerateId),r.id&&(this.options.id=T({},this.options.id,r.id)),(r.createGenerateId||r.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),r.insertionPoint!=null&&(this.options.insertionPoint=r.insertionPoint),"Renderer"in r&&(this.options.Renderer=r.Renderer),r.plugins&&this.use.apply(this,r.plugins),this},t.createStyleSheet=function(r,i){i===void 0&&(i={});var s=i,o=s.index;typeof o!="number"&&(o=sr.index===0?0:sr.index+1);var a=new Wf(r,T({},i,{jss:this,generateId:i.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:o}));return this.plugins.onProcessSheet(a),a},t.removeStyleSheet=function(r){return r.detach(),sr.remove(r),this},t.createRule=function(r,i,s){if(i===void 0&&(i={}),s===void 0&&(s={}),typeof r=="object")return this.createRule(void 0,r,i);var o=T({},s,{name:r,jss:this,Renderer:this.options.Renderer});o.generateId||(o.generateId=this.generateId),o.classes||(o.classes={}),o.keyframes||(o.keyframes={});var a=$a(r,i,o);return a&&this.plugins.onProcessRule(a),a},t.use=function(){for(var r=this,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return s.forEach(function(a){r.plugins.use(a)}),this},e}(),Kf=function(t){return new y_(t)},La=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function Jf(e){var t=null;for(var n in e){var r=e[n],i=typeof r;if(i==="function")t||(t={}),t[n]=r;else if(i==="object"&&r!==null&&!Array.isArray(r)){var s=Jf(r);s&&(t||(t={}),t[n]=s)}}return t}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */Kf();var Xf=Date.now(),Ls="fnValues"+Xf,Us="fnStyle"+ ++Xf,b_=function(){return{onCreateRule:function(n,r,i){if(typeof r!="function")return null;var s=$a(n,{},i);return s[Us]=r,s},onProcessStyle:function(n,r){if(Ls in r||Us in r)return n;var i={};for(var s in n){var o=n[s];typeof o=="function"&&(delete n[s],i[s]=o)}return r[Ls]=i,n},onUpdate:function(n,r,i,s){var o=r,a=o[Us];a&&(o.style=a(n)||{});var u=o[Ls];if(u)for(var c in u)o.prop(c,u[c](n),s)}}},At="@global",Ho="@global ",w_=function(){function e(n,r,i){this.type="global",this.at=At,this.isProcessed=!1,this.key=n,this.options=i,this.rules=new Ki(T({},i,{parent:this}));for(var s in r)this.rules.add(s,r[s]);this.rules.process()}var t=e.prototype;return t.getRule=function(r){return this.rules.get(r)},t.addRule=function(r,i,s){var o=this.rules.add(r,i,s);return o&&this.options.jss.plugins.onProcessRule(o),o},t.replaceRule=function(r,i,s){var o=this.rules.replace(r,i,s);return o&&this.options.jss.plugins.onProcessRule(o),o},t.indexOf=function(r){return this.rules.indexOf(r)},t.toString=function(r){return this.rules.toString(r)},e}(),S_=function(){function e(n,r,i){this.type="global",this.at=At,this.isProcessed=!1,this.key=n,this.options=i;var s=n.substr(Ho.length);this.rule=i.jss.createRule(s,r,T({},i,{parent:this}))}var t=e.prototype;return t.toString=function(r){return this.rule?this.rule.toString(r):""},e}(),I_=/\s*,\s*/g;function Yf(e,t){for(var n=e.split(I_),r="",i=0;i<n.length;i++)r+=t+" "+n[i].trim(),n[i+1]&&(r+=", ");return r}function E_(e,t){var n=e.options,r=e.style,i=r?r[At]:null;if(i){for(var s in i)t.addRule(s,i[s],T({},n,{selector:Yf(s,e.selector)}));delete r[At]}}function R_(e,t){var n=e.options,r=e.style;for(var i in r)if(!(i[0]!=="@"||i.substr(0,At.length)!==At)){var s=Yf(i.substr(At.length),e.selector);t.addRule(s,r[i],T({},n,{selector:s})),delete r[i]}}function T_(){function e(n,r,i){if(!n)return null;if(n===At)return new w_(n,r,i);if(n[0]==="@"&&n.substr(0,Ho.length)===Ho)return new S_(n,r,i);var s=i.parent;return s&&(s.type==="global"||s.options.parent&&s.options.parent.type==="global")&&(i.scoped=!1),!i.selector&&i.scoped===!1&&(i.selector=n),null}function t(n,r){n.type!=="style"||!r||(E_(n,r),R_(n,r))}return{onCreateRule:e,onProcessRule:t}}var Jc=/\s*,\s*/g,A_=/&/g,C_=/\$([\w-]+)/g;function k_(){function e(i,s){return function(o,a){var u=i.getRule(a)||s&&s.getRule(a);return u?u.selector:a}}function t(i,s){for(var o=s.split(Jc),a=i.split(Jc),u="",c=0;c<o.length;c++)for(var h=o[c],l=0;l<a.length;l++){var d=a[l];u&&(u+=", "),u+=d.indexOf("&")!==-1?d.replace(A_,h):h+" "+d}return u}function n(i,s,o){if(o)return T({},o,{index:o.index+1});var a=i.options.nestingLevel;a=a===void 0?1:a+1;var u=T({},i.options,{nestingLevel:a,index:s.indexOf(i)+1});return delete u.name,u}function r(i,s,o){if(s.type!=="style")return i;var a=s,u=a.options.parent,c,h;for(var l in i){var d=l.indexOf("&")!==-1,f=l[0]==="@";if(!(!d&&!f)){if(c=n(a,u,c),d){var p=t(l,a.selector);h||(h=e(u,o)),p=p.replace(C_,h);var v=a.key+"-"+l;"replaceRule"in u?u.replaceRule(v,i[l],T({},c,{selector:p})):u.addRule(v,i[l],T({},c,{selector:p}))}else f&&u.addRule(l,{},c).addRule(a.key,i[l],{selector:a.selector});delete i[l]}}return i}return{onProcessStyle:r}}var P_=/[A-Z]/g,x_=/^ms-/,js={};function O_(e){return"-"+e.toLowerCase()}function Qf(e){if(js.hasOwnProperty(e))return js[e];var t=e.replace(P_,O_);return js[e]=x_.test(t)?"-"+t:t}function Ri(e){var t={};for(var n in e){var r=n.indexOf("--")===0?n:Qf(n);t[r]=e[n]}return e.fallbacks&&(Array.isArray(e.fallbacks)?t.fallbacks=e.fallbacks.map(Ri):t.fallbacks=Ri(e.fallbacks)),t}function N_(){function e(n){if(Array.isArray(n)){for(var r=0;r<n.length;r++)n[r]=Ri(n[r]);return n}return Ri(n)}function t(n,r,i){if(r.indexOf("--")===0)return n;var s=Qf(r);return r===s?n:(i.prop(s,n),null)}return{onProcessStyle:e,onChangeValue:t}}var g=La&&CSS?CSS.px:"px",Zr=La&&CSS?CSS.ms:"ms",ln=La&&CSS?CSS.percent:"%",D_={"animation-delay":Zr,"animation-duration":Zr,"background-position":g,"background-position-x":g,"background-position-y":g,"background-size":g,border:g,"border-bottom":g,"border-bottom-left-radius":g,"border-bottom-right-radius":g,"border-bottom-width":g,"border-left":g,"border-left-width":g,"border-radius":g,"border-right":g,"border-right-width":g,"border-top":g,"border-top-left-radius":g,"border-top-right-radius":g,"border-top-width":g,"border-width":g,"border-block":g,"border-block-end":g,"border-block-end-width":g,"border-block-start":g,"border-block-start-width":g,"border-block-width":g,"border-inline":g,"border-inline-end":g,"border-inline-end-width":g,"border-inline-start":g,"border-inline-start-width":g,"border-inline-width":g,"border-start-start-radius":g,"border-start-end-radius":g,"border-end-start-radius":g,"border-end-end-radius":g,margin:g,"margin-bottom":g,"margin-left":g,"margin-right":g,"margin-top":g,"margin-block":g,"margin-block-end":g,"margin-block-start":g,"margin-inline":g,"margin-inline-end":g,"margin-inline-start":g,padding:g,"padding-bottom":g,"padding-left":g,"padding-right":g,"padding-top":g,"padding-block":g,"padding-block-end":g,"padding-block-start":g,"padding-inline":g,"padding-inline-end":g,"padding-inline-start":g,"mask-position-x":g,"mask-position-y":g,"mask-size":g,height:g,width:g,"min-height":g,"max-height":g,"min-width":g,"max-width":g,bottom:g,left:g,top:g,right:g,inset:g,"inset-block":g,"inset-block-end":g,"inset-block-start":g,"inset-inline":g,"inset-inline-end":g,"inset-inline-start":g,"box-shadow":g,"text-shadow":g,"column-gap":g,"column-rule":g,"column-rule-width":g,"column-width":g,"font-size":g,"font-size-delta":g,"letter-spacing":g,"text-decoration-thickness":g,"text-indent":g,"text-stroke":g,"text-stroke-width":g,"word-spacing":g,motion:g,"motion-offset":g,outline:g,"outline-offset":g,"outline-width":g,perspective:g,"perspective-origin-x":ln,"perspective-origin-y":ln,"transform-origin":ln,"transform-origin-x":ln,"transform-origin-y":ln,"transform-origin-z":ln,"transition-delay":Zr,"transition-duration":Zr,"vertical-align":g,"flex-basis":g,"shape-margin":g,size:g,gap:g,grid:g,"grid-gap":g,"row-gap":g,"grid-row-gap":g,"grid-column-gap":g,"grid-template-rows":g,"grid-template-columns":g,"grid-auto-rows":g,"grid-auto-columns":g,"box-shadow-x":g,"box-shadow-y":g,"box-shadow-blur":g,"box-shadow-spread":g,"font-line-height":g,"text-shadow-x":g,"text-shadow-y":g,"text-shadow-blur":g};function Zf(e){var t=/(-[a-z])/g,n=function(o){return o[1].toUpperCase()},r={};for(var i in e)r[i]=e[i],r[i.replace(t,n)]=e[i];return r}var $_=Zf(D_);function or(e,t,n){if(t==null)return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]=or(e,t[r],n);else if(typeof t=="object")if(e==="fallbacks")for(var i in t)t[i]=or(i,t[i],n);else for(var s in t)t[s]=or(e+"-"+s,t[s],n);else if(typeof t=="number"&&isNaN(t)===!1){var o=n[e]||$_[e];return o&&!(t===0&&o===g)?typeof o=="function"?o(t).toString():""+t+o:t.toString()}return t}function M_(e){e===void 0&&(e={});var t=Zf(e);function n(i,s){if(s.type!=="style")return i;for(var o in i)i[o]=or(o,i[o],t);return i}function r(i,s){return or(s,i,t)}return{onProcessStyle:n,onChangeValue:r}}function Vo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L_(e){if(Array.isArray(e))return Vo(e)}function U_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function j_(e,t){if(e){if(typeof e=="string")return Vo(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vo(e,t)}}function F_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ed(e){return L_(e)||U_(e)||j_(e)||F_()}var Qn="",Wo="",td="",nd="",B_=xr&&"ontouchstart"in document.documentElement;if(xr){var Fs={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},z_=document.createElement("p"),Bs=z_.style,H_="Transform";for(var zs in Fs)if(zs+H_ in Bs){Qn=zs,Wo=Fs[zs];break}Qn==="Webkit"&&"msHyphens"in Bs&&(Qn="ms",Wo=Fs.ms,nd="edge"),Qn==="Webkit"&&"-apple-trailing-word"in Bs&&(td="apple")}var x={js:Qn,css:Wo,vendor:td,browser:nd,isTouch:B_};function V_(e){return e[1]==="-"||x.js==="ms"?e:"@"+x.css+"keyframes"+e.substr(10)}var W_={noPrefill:["appearance"],supportedProperty:function(t){return t!=="appearance"?!1:x.js==="ms"?"-webkit-"+t:x.css+t}},q_={noPrefill:["color-adjust"],supportedProperty:function(t){return t!=="color-adjust"?!1:x.js==="Webkit"?x.css+"print-"+t:t}},G_=/[-\s]+(.)?/g;function K_(e,t){return t?t.toUpperCase():""}function Ua(e){return e.replace(G_,K_)}function Ot(e){return Ua("-"+e)}var J_={noPrefill:["mask"],supportedProperty:function(t,n){if(!/^mask/.test(t))return!1;if(x.js==="Webkit"){var r="mask-image";if(Ua(r)in n)return t;if(x.js+Ot(r)in n)return x.css+t}return t}},X_={noPrefill:["text-orientation"],supportedProperty:function(t){return t!=="text-orientation"?!1:x.vendor==="apple"&&!x.isTouch?x.css+t:t}},Y_={noPrefill:["transform"],supportedProperty:function(t,n,r){return t!=="transform"?!1:r.transform?t:x.css+t}},Q_={noPrefill:["transition"],supportedProperty:function(t,n,r){return t!=="transition"?!1:r.transition?t:x.css+t}},Z_={noPrefill:["writing-mode"],supportedProperty:function(t){return t!=="writing-mode"?!1:x.js==="Webkit"||x.js==="ms"&&x.browser!=="edge"?x.css+t:t}},e0={noPrefill:["user-select"],supportedProperty:function(t){return t!=="user-select"?!1:x.js==="Moz"||x.js==="ms"||x.vendor==="apple"?x.css+t:t}},t0={supportedProperty:function(t,n){if(!/^break-/.test(t))return!1;if(x.js==="Webkit"){var r="WebkitColumn"+Ot(t);return r in n?x.css+"column-"+t:!1}if(x.js==="Moz"){var i="page"+Ot(t);return i in n?"page-"+t:!1}return!1}},n0={supportedProperty:function(t,n){if(!/^(border|margin|padding)-inline/.test(t))return!1;if(x.js==="Moz")return t;var r=t.replace("-inline","");return x.js+Ot(r)in n?x.css+r:!1}},r0={supportedProperty:function(t,n){return Ua(t)in n?t:!1}},i0={supportedProperty:function(t,n){var r=Ot(t);return t[0]==="-"||t[0]==="-"&&t[1]==="-"?t:x.js+r in n?x.css+t:x.js!=="Webkit"&&"Webkit"+r in n?"-webkit-"+t:!1}},s0={supportedProperty:function(t){return t.substring(0,11)!=="scroll-snap"?!1:x.js==="ms"?""+x.css+t:t}},o0={supportedProperty:function(t){return t!=="overscroll-behavior"?!1:x.js==="ms"?x.css+"scroll-chaining":t}},a0={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},u0={supportedProperty:function(t,n){var r=a0[t];return r&&x.js+Ot(r)in n?x.css+r:!1}},rd={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},c0=Object.keys(rd),l0=function(t){return x.css+t},h0={supportedProperty:function(t,n,r){var i=r.multiple;if(c0.indexOf(t)>-1){var s=rd[t];if(!Array.isArray(s))return x.js+Ot(s)in n?x.css+s:!1;if(!i)return!1;for(var o=0;o<s.length;o++)if(!(x.js+Ot(s[0])in n))return!1;return s.map(l0)}return!1}},id=[W_,q_,J_,X_,Y_,Q_,Z_,e0,t0,n0,r0,i0,s0,o0,u0,h0],Xc=id.filter(function(e){return e.supportedProperty}).map(function(e){return e.supportedProperty}),f0=id.filter(function(e){return e.noPrefill}).reduce(function(e,t){return e.push.apply(e,ed(t.noPrefill)),e},[]),Zn,Bt={};if(xr){Zn=document.createElement("p");var Hs=window.getComputedStyle(document.documentElement,"");for(var Vs in Hs)isNaN(Vs)||(Bt[Hs[Vs]]=Hs[Vs]);f0.forEach(function(e){return delete Bt[e]})}function qo(e,t){if(t===void 0&&(t={}),!Zn)return e;if(Bt[e]!=null)return Bt[e];(e==="transition"||e==="transform")&&(t[e]=e in Zn.style);for(var n=0;n<Xc.length&&(Bt[e]=Xc[n](e,Zn.style,t),!Bt[e]);n++);try{Zn.style[e]=""}catch{return!1}return Bt[e]}var hn={},d0={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},p0=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,bt;function g0(e,t,n){if(t==="var")return"var";if(t==="all")return"all";if(n==="all")return", all";var r=t?qo(t):", "+qo(n);return r||t||n}xr&&(bt=document.createElement("p"));function Yc(e,t){var n=t;if(!bt||e==="content")return t;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var r=e+n;if(hn[r]!=null)return hn[r];try{bt.style[e]=n}catch{return hn[r]=!1,!1}if(d0[e])n=n.replace(p0,g0);else if(bt.style[e]===""&&(n=x.css+n,n==="-ms-flex"&&(bt.style[e]="-ms-flexbox"),bt.style[e]=n,bt.style[e]===""))return hn[r]=!1,!1;return bt.style[e]="",hn[r]=n,hn[r]}function m0(){function e(i){if(i.type==="keyframes"){var s=i;s.at=V_(s.at)}}function t(i){for(var s in i){var o=i[s];if(s==="fallbacks"&&Array.isArray(o)){i[s]=o.map(t);continue}var a=!1,u=qo(s);u&&u!==s&&(a=!0);var c=!1,h=Yc(u,Gt(o));h&&h!==o&&(c=!0),(a||c)&&(a&&delete i[s],i[u||s]=h||o)}return i}function n(i,s){return s.type!=="style"?i:t(i)}function r(i,s){return Yc(s,Gt(i))||i}return{onProcessRule:e,onProcessStyle:n,onChangeValue:r}}function v0(){var e=function(n,r){return n.length===r.length?n>r?1:-1:n.length-r.length};return{onProcessStyle:function(n,r){if(r.type!=="style")return n;for(var i={},s=Object.keys(n).sort(e),o=0;o<s.length;o++)i[s[o]]=n[s[o]];return i}}}function _0(){return{plugins:[b_(),T_(),k_(),N_(),M_(),typeof window>"u"?null:m0(),v0()]}}function sd(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.baseClasses,n=e.newClasses;if(e.Component,!n)return t;var r=T({},t);return Object.keys(n).forEach(function(i){n[i]&&(r[i]="".concat(t[i]," ").concat(n[i]))}),r}var y0={set:function(t,n,r,i){var s=t.get(n);s||(s=new Map,t.set(n,s)),s.set(r,i)},get:function(t,n,r){var i=t.get(n);return i?i.get(r):void 0},delete:function(t,n,r){var i=t.get(n);i.delete(r)}};const gn=y0;var b0=V.createContext(null);const w0=b0;function ja(){var e=V.useContext(w0);return e}var S0=Kf(_0()),I0=$v(),E0=new Map,R0={disableGeneration:!1,generateClassName:I0,jss:S0,sheetsCache:null,sheetsManager:E0,sheetsRegistry:null},T0=V.createContext(R0),Qc=-1e9;function A0(){return Qc+=1,Qc}var C0={};const k0=C0;function P0(e){var t=typeof e=="function";return{create:function(r,i){var s;try{s=t?e(r):e}catch(u){throw u}if(!i||!r.overrides||!r.overrides[i])return s;var o=r.overrides[i],a=T({},s);return Object.keys(o).forEach(function(u){a[u]=xn(a[u],o[u])}),a},options:{}}}function x0(e,t,n){var r=e.state,i=e.stylesOptions;if(i.disableGeneration)return t||{};r.cacheClasses||(r.cacheClasses={value:null,lastProp:null,lastJSS:{}});var s=!1;return r.classes!==r.cacheClasses.lastJSS&&(r.cacheClasses.lastJSS=r.classes,s=!0),t!==r.cacheClasses.lastProp&&(r.cacheClasses.lastProp=t,s=!0),s&&(r.cacheClasses.value=sd({baseClasses:r.cacheClasses.lastJSS,newClasses:t,Component:n})),r.cacheClasses.value}function O0(e,t){var n=e.state,r=e.theme,i=e.stylesOptions,s=e.stylesCreator,o=e.name;if(!i.disableGeneration){var a=gn.get(i.sheetsManager,s,r);a||(a={refs:0,staticSheet:null,dynamicStyles:null},gn.set(i.sheetsManager,s,r,a));var u=T({},s.options,i,{theme:r,flip:typeof i.flip=="boolean"?i.flip:r.direction==="rtl"});u.generateId=u.serverGenerateClassName||u.generateClassName;var c=i.sheetsRegistry;if(a.refs===0){var h;i.sheetsCache&&(h=gn.get(i.sheetsCache,s,r));var l=s.create(r,o);h||(h=i.jss.createStyleSheet(l,T({link:!1},u)),h.attach(),i.sheetsCache&&gn.set(i.sheetsCache,s,r,h)),c&&c.add(h),a.staticSheet=h,a.dynamicStyles=Jf(l)}if(a.dynamicStyles){var d=i.jss.createStyleSheet(a.dynamicStyles,T({link:!0},u));d.update(t),d.attach(),n.dynamicSheet=d,n.classes=sd({baseClasses:a.staticSheet.classes,newClasses:d.classes}),c&&c.add(d)}else n.classes=a.staticSheet.classes;a.refs+=1}}function N0(e,t){var n=e.state;n.dynamicSheet&&n.dynamicSheet.update(t)}function D0(e){var t=e.state,n=e.theme,r=e.stylesOptions,i=e.stylesCreator;if(!r.disableGeneration){var s=gn.get(r.sheetsManager,i,n);s.refs-=1;var o=r.sheetsRegistry;s.refs===0&&(gn.delete(r.sheetsManager,i,n),r.jss.removeStyleSheet(s.staticSheet),o&&o.remove(s.staticSheet)),t.dynamicSheet&&(r.jss.removeStyleSheet(t.dynamicSheet),o&&o.remove(t.dynamicSheet))}}function $0(e,t){var n=V.useRef([]),r,i=V.useMemo(function(){return{}},t);n.current!==i&&(n.current=i,r=e()),V.useEffect(function(){return function(){r&&r()}},[i])}function M0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.name,r=t.classNamePrefix,i=t.Component,s=t.defaultTheme,o=s===void 0?k0:s,a=Oe(t,["name","classNamePrefix","Component","defaultTheme"]),u=P0(e),c=n||r||"makeStyles";u.options={index:A0(),name:n,meta:c,classNamePrefix:c};var h=function(){var d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},f=ja()||o,p=T({},V.useContext(T0),a),v=V.useRef(),_=V.useRef();$0(function(){var y={name:n,state:{},stylesCreator:u,stylesOptions:p,theme:f};return O0(y,d),_.current=!1,v.current=y,function(){D0(y)}},[f,u]),V.useEffect(function(){_.current&&N0(v.current,d),_.current=!0});var b=x0(v.current,d.classes,i);return b};return h}function L0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var od={exports:{}},j={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te=typeof Symbol=="function"&&Symbol.for,Fa=te?Symbol.for("react.element"):60103,Ba=te?Symbol.for("react.portal"):60106,Ji=te?Symbol.for("react.fragment"):60107,Xi=te?Symbol.for("react.strict_mode"):60108,Yi=te?Symbol.for("react.profiler"):60114,Qi=te?Symbol.for("react.provider"):60109,Zi=te?Symbol.for("react.context"):60110,za=te?Symbol.for("react.async_mode"):60111,es=te?Symbol.for("react.concurrent_mode"):60111,ts=te?Symbol.for("react.forward_ref"):60112,ns=te?Symbol.for("react.suspense"):60113,U0=te?Symbol.for("react.suspense_list"):60120,rs=te?Symbol.for("react.memo"):60115,is=te?Symbol.for("react.lazy"):60116,j0=te?Symbol.for("react.block"):60121,F0=te?Symbol.for("react.fundamental"):60117,B0=te?Symbol.for("react.responder"):60118,z0=te?Symbol.for("react.scope"):60119;function Re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Fa:switch(e=e.type,e){case za:case es:case Ji:case Yi:case Xi:case ns:return e;default:switch(e=e&&e.$$typeof,e){case Zi:case ts:case is:case rs:case Qi:return e;default:return t}}case Ba:return t}}}function ad(e){return Re(e)===es}j.AsyncMode=za;j.ConcurrentMode=es;j.ContextConsumer=Zi;j.ContextProvider=Qi;j.Element=Fa;j.ForwardRef=ts;j.Fragment=Ji;j.Lazy=is;j.Memo=rs;j.Portal=Ba;j.Profiler=Yi;j.StrictMode=Xi;j.Suspense=ns;j.isAsyncMode=function(e){return ad(e)||Re(e)===za};j.isConcurrentMode=ad;j.isContextConsumer=function(e){return Re(e)===Zi};j.isContextProvider=function(e){return Re(e)===Qi};j.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fa};j.isForwardRef=function(e){return Re(e)===ts};j.isFragment=function(e){return Re(e)===Ji};j.isLazy=function(e){return Re(e)===is};j.isMemo=function(e){return Re(e)===rs};j.isPortal=function(e){return Re(e)===Ba};j.isProfiler=function(e){return Re(e)===Yi};j.isStrictMode=function(e){return Re(e)===Xi};j.isSuspense=function(e){return Re(e)===ns};j.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ji||e===es||e===Yi||e===Xi||e===ns||e===U0||typeof e=="object"&&e!==null&&(e.$$typeof===is||e.$$typeof===rs||e.$$typeof===Qi||e.$$typeof===Zi||e.$$typeof===ts||e.$$typeof===F0||e.$$typeof===B0||e.$$typeof===z0||e.$$typeof===j0)};j.typeOf=Re;od.exports=j;var H0=od.exports,Ha=H0,V0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},W0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},q0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ud={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Va={};Va[Ha.ForwardRef]=q0;Va[Ha.Memo]=ud;function Zc(e){return Ha.isMemo(e)?ud:Va[e.$$typeof]||V0}var G0=Object.defineProperty,K0=Object.getOwnPropertyNames,el=Object.getOwnPropertySymbols,J0=Object.getOwnPropertyDescriptor,X0=Object.getPrototypeOf,tl=Object.prototype;function cd(e,t,n){if(typeof t!="string"){if(tl){var r=X0(t);r&&r!==tl&&cd(e,r,n)}var i=K0(t);el&&(i=i.concat(el(t)));for(var s=Zc(e),o=Zc(t),a=0;a<i.length;++a){var u=i[a];if(!W0[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=J0(t,u);try{G0(e,u,c)}catch{}}}}return e}var Y0=cd;const Q0=fm(Y0);var Z0=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(r){var i=n.defaultTheme,s=n.withTheme,o=s===void 0?!1:s,a=n.name,u=Oe(n,["defaultTheme","withTheme","name"]),c=a,h=M0(t,T({defaultTheme:i,Component:r,name:a||r.displayName,classNamePrefix:c},u)),l=V.forwardRef(function(f,p){f.classes;var v=f.innerRef,_=Oe(f,["classes","innerRef"]),b=h(T({},r.defaultProps,f)),y,w=_;return(typeof a=="string"||o)&&(y=ja()||i,a&&(w=zf({theme:y,name:a,props:_})),o&&!w.theme&&(w.theme=y)),V.createElement(r,T({ref:v||p,classes:b},w))});return Q0(l,r),l}},vt=["xs","sm","md","lg","xl"];function ey(e){var t=e.values,n=t===void 0?{xs:0,sm:600,md:960,lg:1280,xl:1920}:t,r=e.unit,i=r===void 0?"px":r,s=e.step,o=s===void 0?5:s,a=Oe(e,["values","unit","step"]);function u(f){var p=typeof n[f]=="number"?n[f]:f;return"@media (min-width:".concat(p).concat(i,")")}function c(f){var p=vt.indexOf(f)+1,v=n[vt[p]];if(p===vt.length)return u("xs");var _=typeof v=="number"&&p>0?v:f;return"@media (max-width:".concat(_-o/100).concat(i,")")}function h(f,p){var v=vt.indexOf(p);return v===vt.length-1?u(f):"@media (min-width:".concat(typeof n[f]=="number"?n[f]:f).concat(i,") and ")+"(max-width:".concat((v!==-1&&typeof n[vt[v+1]]=="number"?n[vt[v+1]]:p)-o/100).concat(i,")")}function l(f){return h(f,f)}function d(f){return n[f]}return T({keys:vt,values:n,up:u,down:c,between:h,only:l,width:d},a)}function ty(e,t,n){var r;return T({gutters:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:",`
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      `].join(`
`)),T({paddingLeft:t(2),paddingRight:t(2)},s,Ds({},e.up("sm"),T({paddingLeft:t(3),paddingRight:t(3)},s[e.up("sm")])))},toolbar:(r={minHeight:56},Ds(r,"".concat(e.up("xs")," and (orientation: landscape)"),{minHeight:48}),Ds(r,e.up("sm"),{minHeight:64}),r)},n)}var ny={black:"#000",white:"#fff"};const Ti=ny;var ry={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"};const Wa=ry;var Ws={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},qs={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},Gs={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ks={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Js={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Xs={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function ld(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.min(Math.max(t,e),n)}function iy(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),n=e.match(t);return n&&n[0].length===1&&(n=n.map(function(r){return r+r})),n?"rgb".concat(n.length===4?"a":"","(").concat(n.map(function(r,i){return i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3}).join(", "),")"):""}function sy(e){e=On(e);var t=e,n=t.values,r=n[0],i=n[1]/100,s=n[2]/100,o=i*Math.min(s,1-s),a=function(l){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(l+r/30)%12;return s-o*Math.max(Math.min(d-3,9-d,1),-1)},u="rgb",c=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return e.type==="hsla"&&(u+="a",c.push(n[3])),qa({type:u,values:c})}function On(e){if(e.type)return e;if(e.charAt(0)==="#")return On(iy(e));var t=e.indexOf("("),n=e.substring(0,t);if(["rgb","rgba","hsl","hsla"].indexOf(n)===-1)throw new Error(Ei(3,e));var r=e.substring(t+1,e.length-1).split(",");return r=r.map(function(i){return parseFloat(i)}),{type:n,values:r}}function qa(e){var t=e.type,n=e.values;return t.indexOf("rgb")!==-1?n=n.map(function(r,i){return i<3?parseInt(r,10):r}):t.indexOf("hsl")!==-1&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(t,"(").concat(n.join(", "),")")}function oy(e,t){var n=nl(e),r=nl(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function nl(e){e=On(e);var t=e.type==="hsl"?On(sy(e)).values:e.values;return t=t.map(function(n){return n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function ay(e,t){if(e=On(e),t=ld(t),e.type.indexOf("hsl")!==-1)e.values[2]*=1-t;else if(e.type.indexOf("rgb")!==-1)for(var n=0;n<3;n+=1)e.values[n]*=1-t;return qa(e)}function uy(e,t){if(e=On(e),t=ld(t),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*t;else if(e.type.indexOf("rgb")!==-1)for(var n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;return qa(e)}var rl={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ti.white,default:Wa[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ys={text:{primary:Ti.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:Wa[800],default:"#303030"},action:{active:Ti.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function il(e,t,n,r){var i=r.light||r,s=r.dark||r*1.5;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:t==="light"?e.light=uy(e.main,i):t==="dark"&&(e.dark=ay(e.main,s)))}function cy(e){var t=e.primary,n=t===void 0?{light:Ws[300],main:Ws[500],dark:Ws[700]}:t,r=e.secondary,i=r===void 0?{light:qs.A200,main:qs.A400,dark:qs.A700}:r,s=e.error,o=s===void 0?{light:Gs[300],main:Gs[500],dark:Gs[700]}:s,a=e.warning,u=a===void 0?{light:Ks[300],main:Ks[500],dark:Ks[700]}:a,c=e.info,h=c===void 0?{light:Js[300],main:Js[500],dark:Js[700]}:c,l=e.success,d=l===void 0?{light:Xs[300],main:Xs[500],dark:Xs[700]}:l,f=e.type,p=f===void 0?"light":f,v=e.contrastThreshold,_=v===void 0?3:v,b=e.tonalOffset,y=b===void 0?.2:b,w=Oe(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function E(L){var P=oy(L,Ys.text.primary)>=_?Ys.text.primary:rl.text.primary;return P}var A=function(P){var Q=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,Mt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:300,ft=arguments.length>3&&arguments[3]!==void 0?arguments[3]:700;if(P=T({},P),!P.main&&P[Q]&&(P.main=P[Q]),!P.main)throw new Error(Ei(4,Q));if(typeof P.main!="string")throw new Error(Ei(5,JSON.stringify(P.main)));return il(P,"light",Mt,y),il(P,"dark",ft,y),P.contrastText||(P.contrastText=E(P.main)),P},I={dark:Ys,light:rl},R=xn(T({common:Ti,type:p,primary:A(n),secondary:A(i,"A400","A200","A700"),error:A(o),warning:A(u),info:A(h),success:A(d),grey:Wa,contrastThreshold:_,getContrastText:E,augmentColor:A,tonalOffset:y},I[p]),w);return R}function hd(e){return Math.round(e*1e5)/1e5}function ly(e){return hd(e)}var sl={textTransform:"uppercase"},ol='"Roboto", "Helvetica", "Arial", sans-serif';function hy(e,t){var n=typeof t=="function"?t(e):t,r=n.fontFamily,i=r===void 0?ol:r,s=n.fontSize,o=s===void 0?14:s,a=n.fontWeightLight,u=a===void 0?300:a,c=n.fontWeightRegular,h=c===void 0?400:c,l=n.fontWeightMedium,d=l===void 0?500:l,f=n.fontWeightBold,p=f===void 0?700:f,v=n.htmlFontSize,_=v===void 0?16:v,b=n.allVariants,y=n.pxToRem,w=Oe(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]),E=o/14,A=y||function(L){return"".concat(L/_*E,"rem")},I=function(P,Q,Mt,ft,Hn){return T({fontFamily:i,fontWeight:P,fontSize:A(Q),lineHeight:Mt},i===ol?{letterSpacing:"".concat(hd(ft/Q),"em")}:{},Hn,b)},R={h1:I(u,96,1.167,-1.5),h2:I(u,60,1.2,-.5),h3:I(h,48,1.167,0),h4:I(h,34,1.235,.25),h5:I(h,24,1.334,0),h6:I(d,20,1.6,.15),subtitle1:I(h,16,1.75,.15),subtitle2:I(d,14,1.57,.1),body1:I(h,16,1.5,.15),body2:I(h,14,1.43,.15),button:I(d,14,1.75,.4,sl),caption:I(h,12,1.66,.4),overline:I(h,12,2.66,1,sl)};return xn(T({htmlFontSize:_,pxToRem:A,round:ly,fontFamily:i,fontSize:o,fontWeightLight:u,fontWeightRegular:h,fontWeightMedium:d,fontWeightBold:p},R),w,{clone:!1})}var fy=.2,dy=.14,py=.12;function W(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(fy,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(dy,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(py,")")].join(",")}var gy=["none",W(0,2,1,-1,0,1,1,0,0,1,3,0),W(0,3,1,-2,0,2,2,0,0,1,5,0),W(0,3,3,-2,0,3,4,0,0,1,8,0),W(0,2,4,-1,0,4,5,0,0,1,10,0),W(0,3,5,-1,0,5,8,0,0,1,14,0),W(0,3,5,-1,0,6,10,0,0,1,18,0),W(0,4,5,-2,0,7,10,1,0,2,16,1),W(0,5,5,-3,0,8,10,1,0,3,14,2),W(0,5,6,-3,0,9,12,1,0,3,16,2),W(0,6,6,-3,0,10,14,1,0,4,18,3),W(0,6,7,-4,0,11,15,1,0,4,20,3),W(0,7,8,-4,0,12,17,2,0,5,22,4),W(0,7,8,-4,0,13,19,2,0,5,24,4),W(0,7,9,-4,0,14,21,2,0,5,26,4),W(0,8,9,-5,0,15,22,2,0,6,28,5),W(0,8,10,-5,0,16,24,2,0,6,30,5),W(0,8,11,-5,0,17,26,2,0,6,32,5),W(0,9,11,-5,0,18,28,2,0,7,34,6),W(0,9,12,-6,0,19,29,2,0,7,36,6),W(0,10,13,-6,0,20,31,3,0,8,38,7),W(0,10,13,-6,0,21,33,3,0,8,40,7),W(0,10,14,-6,0,22,35,3,0,8,42,7),W(0,11,14,-7,0,23,36,3,0,9,44,8),W(0,11,15,-7,0,24,38,3,0,9,46,8)];const my=gy;var vy={borderRadius:4};const _y=vy;function yy(e){var t=e.spacing||8;return typeof t=="number"?function(n){return t*n}:Array.isArray(t)?function(n){return t[n]}:typeof t=="function"?t:function(){}}function by(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8;if(e.mui)return e;var t=yy({spacing:e}),n=function(){for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return s.length===0?t(1):s.length===1?t(s[0]):s.map(function(a){if(typeof a=="string")return a;var u=t(a);return typeof u=="number"?"".concat(u,"px"):u}).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return e}}),n.mui=!0,n}var al={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},ul={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function cl(e){return"".concat(Math.round(e),"ms")}const wy={easing:al,duration:ul,create:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["all"],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.duration,i=r===void 0?ul.standard:r,s=n.easing,o=s===void 0?al.easeInOut:s,a=n.delay,u=a===void 0?0:a;return Oe(n,["duration","easing","delay"]),(Array.isArray(t)?t:[t]).map(function(c){return"".concat(c," ").concat(typeof i=="string"?i:cl(i)," ").concat(o," ").concat(typeof u=="string"?u:cl(u))}).join(",")},getAutoHeightDuration:function(t){if(!t)return 0;var n=t/36;return Math.round((4+15*Math.pow(n,.25)+n/5)*10)}};var Sy={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};const fd=Sy;function Iy(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.breakpoints,n=t===void 0?{}:t,r=e.mixins,i=r===void 0?{}:r,s=e.palette,o=s===void 0?{}:s,a=e.spacing,u=e.typography,c=u===void 0?{}:u,h=Oe(e,["breakpoints","mixins","palette","spacing","typography"]),l=cy(o),d=ey(n),f=by(a),p=xn({breakpoints:d,direction:"ltr",mixins:ty(d,f,i),overrides:{},palette:l,props:{},shadows:my,typography:hy(l,c),spacing:f,shape:_y,transitions:wy,zIndex:fd},h),v=arguments.length,_=new Array(v>1?v-1:0),b=1;b<v;b++)_[b-1]=arguments[b];return p=_.reduce(function(y,w){return xn(y,w)},p),p}var Ey=Iy();const Ry=Ey;function dd(e,t){return Z0(e,T({defaultTheme:Ry},t))}var Ty=function(t){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:t.typography.pxToRem(24),transition:t.transitions.create("fill",{duration:t.transitions.duration.shorter})},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorAction:{color:t.palette.action.active},colorError:{color:t.palette.error.main},colorDisabled:{color:t.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:t.typography.pxToRem(20)},fontSizeLarge:{fontSize:t.typography.pxToRem(35)}}},pd=sn(function(t,n){var r=t.children,i=t.classes,s=t.className,o=t.color,a=o===void 0?"inherit":o,u=t.component,c=u===void 0?"svg":u,h=t.fontSize,l=h===void 0?"medium":h,d=t.htmlColor,f=t.titleAccess,p=t.viewBox,v=p===void 0?"0 0 24 24":p,_=Oe(t,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return B(c,T({className:Bf(i.root,s,a!=="inherit"&&i["color".concat(Do(a))],l!=="default"&&l!=="medium"&&i["fontSize".concat(Do(l))]),focusable:"false",viewBox:v,color:d,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},_),r,f?B("title",null,f):null)});pd.muiName="SvgIcon";const ll=dd(Ty,{name:"MuiSvgIcon"})(pd);function gd(e,t){var n=function(i,s){return V.createElement(ll,T({ref:s},i),e)};return n.muiName=ll.muiName,V.memo(V.forwardRef(n))}function Ay(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:166,n;function r(){for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];var a=this,u=function(){e.apply(a,s)};clearTimeout(n),n=setTimeout(u,t)}return r.clear=function(){clearTimeout(n)},r}function Cy(e,t){return function(){return null}}function ky(e,t){return xt(e)&&t.indexOf(e.type.muiName)!==-1}function Un(e){return e&&e.ownerDocument||document}function md(e){var t=Un(e);return t.defaultView||window}function Py(e){return function(){return null}}function gr(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function xy(e,t,n,r,i){return null}function Oy(e){var t=e.controlled,n=e.default;e.name,e.state;var r=be(t!==void 0),i=r.current,s=Ee(n),o=s[0],a=s[1],u=i?t:o,c=Pt(function(h){i||a(h)},[]);return[u,c]}var Ny=typeof window<"u"?rn:je;function Go(e){var t=be(e);return Ny(function(){t.current=e}),Pt(function(){return t.current.apply(void 0,arguments)},[])}function ss(e,t){return Cr(function(){return e==null&&t==null?null:function(n){gr(e,n),gr(t,n)}},[e,t])}function Dy(e){var t=Ee(e),n=t[0],r=t[1],i=e||n;return je(function(){n==null&&r("mui-".concat(Math.round(Math.random()*1e5)))},[n]),i}var os=!0,Ko=!1,hl=null,$y={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function My(e){var t=e.type,n=e.tagName;return!!(n==="INPUT"&&$y[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function Ly(e){e.metaKey||e.altKey||e.ctrlKey||(os=!0)}function Qs(){os=!1}function Uy(){this.visibilityState==="hidden"&&Ko&&(os=!0)}function jy(e){e.addEventListener("keydown",Ly,!0),e.addEventListener("mousedown",Qs,!0),e.addEventListener("pointerdown",Qs,!0),e.addEventListener("touchstart",Qs,!0),e.addEventListener("visibilitychange",Uy,!0)}function Fy(e){var t=e.target;try{return t.matches(":focus-visible")}catch{}return os||My(t)}function By(){Ko=!0,window.clearTimeout(hl),hl=window.setTimeout(function(){Ko=!1},100)}function zy(){var e=Pt(function(t){var n=$n(t);n!=null&&jy(n.ownerDocument)},[]);return{isFocusVisible:Fy,onBlurVisible:By,ref:e}}const Hy=Object.freeze(Object.defineProperty({__proto__:null,capitalize:Do,createChainedFunction:$o,createSvgIcon:gd,debounce:Ay,deprecatedPropType:Cy,isMuiElement:ky,ownerDocument:Un,ownerWindow:md,requirePropFactory:Py,setRef:gr,unstable_useId:Dy,unsupportedProp:xy,useControlled:Oy,useEventCallback:Go,useForkRef:ss,useIsFocusVisible:zy},Symbol.toStringTag,{value:"Module"})),Vy=rf(Hy);var fl;function ue(){return fl||(fl=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Vy}(Os)),Os}var Wy=se,qy=oe;Object.defineProperty(Na,"__esModule",{value:!0});var vd=Na.default=void 0,Gy=qy(ae),Ky=Wy(ue()),Jy=(0,Ky.default)(Gy.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");vd=Na.default=Jy;var Ga={},Xy=se,Yy=oe;Object.defineProperty(Ga,"__esModule",{value:!0});var _d=Ga.default=void 0,Qy=Yy(ae),Zy=Xy(ue()),e1=(0,Zy.default)(Qy.createElement("path",{d:"M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"}),"FormatAlignCenter");_d=Ga.default=e1;var Ka={},t1=se,n1=oe;Object.defineProperty(Ka,"__esModule",{value:!0});var yd=Ka.default=void 0,r1=n1(ae),i1=t1(ue()),s1=(0,i1.default)(r1.createElement("path",{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}),"HelpOutline");yd=Ka.default=s1;var Ja={},o1=se,a1=oe;Object.defineProperty(Ja,"__esModule",{value:!0});var bd=Ja.default=void 0,u1=a1(ae),c1=o1(ue()),l1=(0,c1.default)(u1.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");bd=Ja.default=l1;var Xa={},h1=se,f1=oe;Object.defineProperty(Xa,"__esModule",{value:!0});var wd=Xa.default=void 0,d1=f1(ae),p1=h1(ue()),g1=(0,p1.default)(d1.createElement("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"Apps");wd=Xa.default=g1;const m1=gd(B("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));var v1=function(t){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:t.palette.background.default,backgroundColor:t.palette.type==="light"?t.palette.grey[400]:t.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:t.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}};function _1(e){var t=e.src,n=e.srcSet,r=Ee(!1),i=r[0],s=r[1];return je(function(){if(!(!t&&!n)){s(!1);var o=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){o&&s("loaded")},a.onerror=function(){o&&s("error")},function(){o=!1}}},[t,n]),i}var y1=sn(function(t,n){var r=t.alt,i=t.children,s=t.classes,o=t.className,a=t.component,u=a===void 0?"div":a,c=t.imgProps,h=t.sizes,l=t.src,d=t.srcSet,f=t.variant,p=f===void 0?"circular":f,v=Oe(t,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),_=null,b=_1({src:l,srcSet:d}),y=l||d,w=y&&b!=="error";return w?_=B("img",T({alt:r,src:l,srcSet:d,sizes:h,className:s.img},c)):i!=null?_=i:y&&r?_=r[0]:_=B(m1,{className:s.fallback}),B(u,T({className:Bf(s.root,s.system,s[p],o,!w&&s.colorDefault),ref:n},v),_)});const b1=dd(v1,{name:"MuiAvatar"})(y1);function w1(e){return e=typeof e=="function"?e():e,$n(e)}var Zs=typeof window<"u"?rn:je,S1=sn(function(t,n){var r=t.children,i=t.container,s=t.disablePortal,o=s===void 0?!1:s,a=t.onRendered,u=Ee(null),c=u[0],h=u[1],l=ss(xt(r)?r.ref:null,n);return Zs(function(){o||h(w1(i)||document.body)},[i,o]),Zs(function(){if(c&&!o)return gr(n,c),function(){gr(n,null)}},[n,c,o]),Zs(function(){a&&(c||o)&&a()},[a,c,o]),o?xt(r)?kr(r,{ref:l}):r:c&&Sa(r,c)});const I1=S1;function E1(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}function R1(e){var t=Un(e);return t.body===e?md(t).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function ar(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function dl(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function pl(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,s=[t,n].concat(ed(r)),o=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,function(a){a.nodeType===1&&s.indexOf(a)===-1&&o.indexOf(a.tagName)===-1&&ar(a,i)})}function eo(e,t){var n=-1;return e.some(function(r,i){return t(r)?(n=i,!0):!1}),n}function T1(e,t){var n=[],r=[],i=e.container,s;if(!t.disableScrollLock){if(R1(i)){var o=E1();n.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(dl(i)+o,"px"),s=Un(i).querySelectorAll(".mui-fixed"),[].forEach.call(s,function(h){r.push(h.style.paddingRight),h.style.paddingRight="".concat(dl(h)+o,"px")})}var a=i.parentElement,u=a.nodeName==="HTML"&&window.getComputedStyle(a)["overflow-y"]==="scroll"?a:i;n.push({value:u.style.overflow,key:"overflow",el:u}),u.style.overflow="hidden"}var c=function(){s&&[].forEach.call(s,function(l,d){r[d]?l.style.paddingRight=r[d]:l.style.removeProperty("padding-right")}),n.forEach(function(l){var d=l.value,f=l.el,p=l.key;d?f.style.setProperty(p,d):f.style.removeProperty(p)})};return c}function A1(e){var t=[];return[].forEach.call(e.children,function(n){n.getAttribute&&n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}var C1=function(){function e(){L0(this,e),this.modals=[],this.containers=[]}return Da(e,[{key:"add",value:function(n,r){var i=this.modals.indexOf(n);if(i!==-1)return i;i=this.modals.length,this.modals.push(n),n.modalRef&&ar(n.modalRef,!1);var s=A1(r);pl(r,n.mountNode,n.modalRef,s,!0);var o=eo(this.containers,function(a){return a.container===r});return o!==-1?(this.containers[o].modals.push(n),i):(this.containers.push({modals:[n],container:r,restore:null,hiddenSiblingNodes:s}),i)}},{key:"mount",value:function(n,r){var i=eo(this.containers,function(o){return o.modals.indexOf(n)!==-1}),s=this.containers[i];s.restore||(s.restore=T1(s,r))}},{key:"remove",value:function(n){var r=this.modals.indexOf(n);if(r===-1)return r;var i=eo(this.containers,function(a){return a.modals.indexOf(n)!==-1}),s=this.containers[i];if(s.modals.splice(s.modals.indexOf(n),1),this.modals.splice(r,1),s.modals.length===0)s.restore&&s.restore(),n.modalRef&&ar(n.modalRef,!0),pl(s.container,n.mountNode,n.modalRef,s.hiddenSiblingNodes,!1),this.containers.splice(i,1);else{var o=s.modals[s.modals.length-1];o.modalRef&&ar(o.modalRef,!1)}return r}},{key:"isTopModal",value:function(n){return this.modals.length>0&&this.modals[this.modals.length-1]===n}}]),e}();function k1(e){var t=e.children,n=e.disableAutoFocus,r=n===void 0?!1:n,i=e.disableEnforceFocus,s=i===void 0?!1:i,o=e.disableRestoreFocus,a=o===void 0?!1:o,u=e.getDoc,c=e.isEnabled,h=e.open,l=be(),d=be(null),f=be(null),p=be(),v=be(null),_=Pt(function(w){v.current=$n(w)},[]),b=ss(t.ref,_),y=be();return je(function(){y.current=h},[h]),!y.current&&h&&typeof window<"u"&&(p.current=u().activeElement),je(function(){if(h){var w=Un(v.current);!r&&v.current&&!v.current.contains(w.activeElement)&&(v.current.hasAttribute("tabIndex")||v.current.setAttribute("tabIndex",-1),v.current.focus());var E=function(){var L=v.current;if(L!==null){if(!w.hasFocus()||s||!c()||l.current){l.current=!1;return}v.current&&!v.current.contains(w.activeElement)&&v.current.focus()}},A=function(L){s||!c()||L.keyCode!==9||w.activeElement===v.current&&(l.current=!0,L.shiftKey?f.current.focus():d.current.focus())};w.addEventListener("focus",E,!0),w.addEventListener("keydown",A,!0);var I=setInterval(function(){E()},50);return function(){clearInterval(I),w.removeEventListener("focus",E,!0),w.removeEventListener("keydown",A,!0),a||(p.current&&p.current.focus&&p.current.focus(),p.current=null)}}},[r,s,a,c,h]),B(_e,null,B("div",{tabIndex:0,ref:d,"data-test":"sentinelStart"}),kr(t,{ref:b}),B("div",{tabIndex:0,ref:f,"data-test":"sentinelEnd"}))}var gl={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},P1=sn(function(t,n){var r=t.invisible,i=r===void 0?!1:r,s=t.open,o=Oe(t,["invisible","open"]);return s?B("div",T({"aria-hidden":!0,ref:n},o,{style:T({},gl.root,i?gl.invisible:{},o.style)})):null});const x1=P1;function O1(e){return e=typeof e=="function"?e():e,$n(e)}function N1(e){return e.children?e.children.props.hasOwnProperty("in"):!1}var D1=new C1,$1=function(t){return{root:{position:"fixed",zIndex:t.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}},M1=sn(function(t,n){var r=ja(),i=zf({name:"MuiModal",props:T({},t),theme:r}),s=i.BackdropComponent,o=s===void 0?x1:s,a=i.BackdropProps,u=i.children,c=i.closeAfterTransition,h=c===void 0?!1:c,l=i.container,d=i.disableAutoFocus,f=d===void 0?!1:d,p=i.disableBackdropClick,v=p===void 0?!1:p,_=i.disableEnforceFocus,b=_===void 0?!1:_,y=i.disableEscapeKeyDown,w=y===void 0?!1:y,E=i.disablePortal,A=E===void 0?!1:E,I=i.disableRestoreFocus,R=I===void 0?!1:I,L=i.disableScrollLock,P=L===void 0?!1:L,Q=i.hideBackdrop,Mt=Q===void 0?!1:Q,ft=i.keepMounted,Hn=ft===void 0?!1:ft,qr=i.manager,dt=qr===void 0?D1:qr,Gr=i.onBackdropClick,pt=i.onClose,Vn=i.onEscapeKeyDown,Te=i.onRendered,Ae=i.open,gt=Oe(i,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),De=Ee(!0),Wn=De[0],an=De[1],mt=be({}),Ye=be(null),Fe=be(null),Lt=ss(Fe,n),Ce=N1(i),un=function(){return Un(Ye.current)},Qe=function(){return mt.current.modalRef=Fe.current,mt.current.mountNode=Ye.current,mt.current},$e=function(){dt.mount(Qe(),{disableScrollLock:P}),Fe.current.scrollTop=0},tc=Go(function(){var Me=O1(l)||un().body;dt.add(Qe(),Me),Fe.current&&$e()}),Rs=Pt(function(){return dt.isTopModal(Qe())},[dt]),Ug=Go(function(Me){Ye.current=Me,Me&&(Te&&Te(),Ae&&Rs()?$e():ar(Fe.current,!0))}),qn=Pt(function(){dt.remove(Qe())},[dt]);if(je(function(){return function(){qn()}},[qn]),je(function(){Ae?tc():(!Ce||!h)&&qn()},[Ae,qn,Ce,h,tc]),!Hn&&!Ae&&(!Ce||Wn))return null;var jg=function(){an(!1)},Fg=function(){an(!0),h&&qn()},Bg=function(Ze){Ze.target===Ze.currentTarget&&(Gr&&Gr(Ze),!v&&pt&&pt(Ze,"backdropClick"))},zg=function(Ze){Ze.key!=="Escape"||!Rs()||(Vn&&Vn(Ze),w||(Ze.stopPropagation(),pt&&pt(Ze,"escapeKeyDown")))},nc=$1(r||{zIndex:fd}),Kr={};return u.props.tabIndex===void 0&&(Kr.tabIndex=u.props.tabIndex||"-1"),Ce&&(Kr.onEnter=$o(jg,u.props.onEnter),Kr.onExited=$o(Fg,u.props.onExited)),B(I1,{ref:Ug,container:l,disablePortal:A},B("div",T({ref:Lt,onKeyDown:zg,role:"presentation"},gt,{style:T({},nc.root,!Ae&&Wn?nc.hidden:{},gt.style)}),Mt?null:B(o,T({open:Ae,onClick:Bg},a)),B(k1,{disableEnforceFocus:b,disableAutoFocus:f,disableRestoreFocus:R,getDoc:un,isEnabled:Rs,open:Ae},kr(u,Kr))))});const L1=M1,U1=q.div`
    display: grid;
    grid-template-columns: 300px auto 200px;
    align-items: center;
    padding: 5px 20px;
    height: 60px;
`,j1=q.div`
    display: flex;
    align-items: center;
    img {
        width: 40px;
    }
    span{
        font-size: 22px;
        margin-left: 10px;
        color: gray;
    }
`,F1=q.div`
    display: flex;
    align-items: center;
    width: 700px;
    background-color: #E9EEF6;
    padding: 12px;
    border-radius: 10px;
    input{
        background-color: transparent;
        border: 0;
        outline: 0;
        flex: 1;
    }
`,B1=q.div`
    display: flex;
    align-items: center;
    span {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    svg.MuiSvgIcon-root{
        margin: 0px 10px;
    }
`,z1=({photoURL:e})=>m(U1,{children:[m(j1,{children:[m("img",{src:"https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png",alt:"Google Drive"}),m("span",{children:"Drive"})]}),m(F1,{children:[m(vd,{}),m("input",{type:"text",placeholder:"Search in Drive"}),m(_d,{})]}),m(B1,{children:[m("span",{children:[m(yd,{}),m(bd,{})]}),m("span",{children:[m(wd,{}),m(b1,{src:e})]})]})]});var Ya={},H1=se,V1=oe;Object.defineProperty(Ya,"__esModule",{value:!0});var Sd=Ya.default=void 0,W1=V1(ae),q1=H1(ue()),G1=(0,q1.default)(W1.createElement("path",{d:"M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78v1.75l3.2-2.99L12.8 9v1.7c-3.11.43-4.35 2.56-4.8 4.7 1.11-1.5 2.58-2.18 4.8-2.18z"}),"MobileScreenShare");Sd=Ya.default=G1;var Qa={},K1=se,J1=oe;Object.defineProperty(Qa,"__esModule",{value:!0});var Id=Qa.default=void 0,X1=J1(ae),Y1=K1(ue()),Q1=(0,Y1.default)(X1.createElement("path",{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"}),"Devices");Id=Qa.default=Q1;var Za={},Z1=se,eb=oe;Object.defineProperty(Za,"__esModule",{value:!0});var Ed=Za.default=void 0,tb=eb(ae),nb=Z1(ue()),rb=(0,nb.default)(tb.createElement("path",{d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"}),"PeopleAltOutlined");Ed=Za.default=rb;var eu={},ib=se,sb=oe;Object.defineProperty(eu,"__esModule",{value:!0});var Rd=eu.default=void 0,ob=sb(ae),ab=ib(ue()),ub=(0,ab.default)(ob.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"}),"QueryBuilderOutlined");Rd=eu.default=ub;var tu={},cb=se,lb=oe;Object.defineProperty(tu,"__esModule",{value:!0});var Td=tu.default=void 0,hb=lb(ae),fb=cb(ue()),db=(0,fb.default)(hb.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorderOutlined");Td=tu.default=db;var nu={},pb=se,gb=oe;Object.defineProperty(nu,"__esModule",{value:!0});var Ad=nu.default=void 0,mb=gb(ae),vb=pb(ue()),_b=(0,vb.default)(mb.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");Ad=nu.default=_b;var ru={},yb=se,bb=oe;Object.defineProperty(ru,"__esModule",{value:!0});var Cd=ru.default=void 0,wb=bb(ae),Sb=yb(ue()),Ib=(0,Sb.default)(wb.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"}),"CloudQueue");Cd=ru.default=Ib;var ml={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Eb=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,h=s>>2,l=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;u||(f=64,o||(d=64)),r.push(n[h],n[l],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(kd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Eb(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||l==null)throw new Rb;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),l!==64){const p=c<<6&192|l;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Rb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tb=function(e){const t=kd(e);return Pd.encodeByteArray(t,!0)},Ai=function(e){return Tb(e).replace(/\./g,"")},xd=function(e){try{return Pd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=()=>Ab().__FIREBASE_DEFAULTS__,kb=()=>{if(typeof process>"u"||typeof ml>"u")return;const e=ml.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Pb=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xd(e[1]);return t&&JSON.parse(t)},iu=()=>{try{return Cb()||kb()||Pb()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Od=e=>{var t,n;return(n=(t=iu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Nd=e=>{const t=Od(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Dd=()=>{var e;return(e=iu())===null||e===void 0?void 0:e.config},$d=e=>{var t;return(t=iu())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Ai(JSON.stringify(n)),Ai(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ob(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())}function Nb(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Db(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $b(){const e=ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Mb(){try{return typeof indexedDB=="object"}catch{return!1}}function Lb(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="FirebaseError";class Xe extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Ub,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Or.prototype.create)}}class Or{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?jb(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xe(i,a,r)}}function jb(e,t){return e.replace(Fb,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Fb=/\{\$([^}]+)}/g;function Bb(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ci(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(vl(s)&&vl(o)){if(!Ci(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vl(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function zb(e,t){const n=new Hb(e,t);return n.subscribe.bind(n)}class Hb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Vb(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=to),i.error===void 0&&(i.error=to),i.complete===void 0&&(i.complete=to);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vb(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function to(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){return e&&e._delegate?e._delegate:e}class Nt{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new xb;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Gb(t))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=jt){return this.instances.has(t)}getOptions(t=jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qb(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=jt){return this.component?this.component.multipleInstances?t:jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qb(e){return e===jt?void 0:e}function Gb(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Wb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var M;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(M||(M={}));const Jb={debug:M.DEBUG,verbose:M.VERBOSE,info:M.INFO,warn:M.WARN,error:M.ERROR,silent:M.SILENT},Xb=M.INFO,Yb={[M.DEBUG]:"log",[M.VERBOSE]:"log",[M.INFO]:"info",[M.WARN]:"warn",[M.ERROR]:"error"},Qb=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Yb[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class su{constructor(t){this.name=t,this._logLevel=Xb,this._logHandler=Qb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in M))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Jb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,M.DEBUG,...t),this._logHandler(this,M.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,M.VERBOSE,...t),this._logHandler(this,M.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,M.INFO,...t),this._logHandler(this,M.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,M.WARN,...t),this._logHandler(this,M.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,M.ERROR,...t),this._logHandler(this,M.ERROR,...t)}}const Zb=(e,t)=>t.some(n=>e instanceof n);let _l,yl;function ew(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tw(){return yl||(yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ld=new WeakMap,Jo=new WeakMap,Ud=new WeakMap,no=new WeakMap,ou=new WeakMap;function nw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ct(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ld.set(n,e)}).catch(()=>{}),ou.set(t,e),t}function rw(e){if(Jo.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Jo.set(e,t)}let Xo={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Jo.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ud.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function iw(e){Xo=e(Xo)}function sw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ro(this),t,...n);return Ud.set(r,t.sort?t.sort():[t]),Ct(r)}:tw().includes(e)?function(...t){return e.apply(ro(this),t),Ct(Ld.get(this))}:function(...t){return Ct(e.apply(ro(this),t))}}function ow(e){return typeof e=="function"?sw(e):(e instanceof IDBTransaction&&rw(e),Zb(e,ew())?new Proxy(e,Xo):e)}function Ct(e){if(e instanceof IDBRequest)return nw(e);if(no.has(e))return no.get(e);const t=ow(e);return t!==e&&(no.set(e,t),ou.set(t,e)),t}const ro=e=>ou.get(e);function aw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ct(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ct(o.result),u.oldVersion,u.newVersion,Ct(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const uw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],io=new Map;function bl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(io.get(t))return io.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=cw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uw.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return io.set(t,s),s}iw(e=>({...e,get:(t,n,r)=>bl(t,n)||e.get(t,n,r),has:(t,n)=>!!bl(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Yo="@firebase/app",wl="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new su("@firebase/app"),fw="@firebase/app-compat",dw="@firebase/analytics-compat",pw="@firebase/analytics",gw="@firebase/app-check-compat",mw="@firebase/app-check",vw="@firebase/auth",_w="@firebase/auth-compat",yw="@firebase/database",bw="@firebase/database-compat",ww="@firebase/functions",Sw="@firebase/functions-compat",Iw="@firebase/installations",Ew="@firebase/installations-compat",Rw="@firebase/messaging",Tw="@firebase/messaging-compat",Aw="@firebase/performance",Cw="@firebase/performance-compat",kw="@firebase/remote-config",Pw="@firebase/remote-config-compat",xw="@firebase/storage",Ow="@firebase/storage-compat",Nw="@firebase/firestore",Dw="@firebase/firestore-compat",$w="firebase",Mw="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="[DEFAULT]",Lw={[Yo]:"fire-core",[fw]:"fire-core-compat",[pw]:"fire-analytics",[dw]:"fire-analytics-compat",[mw]:"fire-app-check",[gw]:"fire-app-check-compat",[vw]:"fire-auth",[_w]:"fire-auth-compat",[yw]:"fire-rtdb",[bw]:"fire-rtdb-compat",[ww]:"fire-fn",[Sw]:"fire-fn-compat",[Iw]:"fire-iid",[Ew]:"fire-iid-compat",[Rw]:"fire-fcm",[Tw]:"fire-fcm-compat",[Aw]:"fire-perf",[Cw]:"fire-perf-compat",[kw]:"fire-rc",[Pw]:"fire-rc-compat",[xw]:"fire-gcs",[Ow]:"fire-gcs-compat",[Nw]:"fire-fst",[Dw]:"fire-fst-compat","fire-js":"fire-js",[$w]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Map,Uw=new Map,Zo=new Map;function Sl(e,t){try{e.container.addComponent(t)}catch(n){Qt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Zt(e){const t=e.name;if(Zo.has(t))return Qt.debug(`There were multiple attempts to register component ${t}.`),!1;Zo.set(t,e);for(const n of ki.values())Sl(n,e);for(const n of Uw.values())Sl(n,e);return!0}function as(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Rt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new Or("app","Firebase",jw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=Mw;function jd(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Qo,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(n||(n=Dd()),!n)throw kt.create("no-options");const s=ki.get(i);if(s){if(Ci(n,s.options)&&Ci(r,s.config))return s;throw kt.create("duplicate-app",{appName:i})}const o=new Kb(i);for(const u of Zo.values())o.addComponent(u);const a=new Fw(n,r,o);return ki.set(i,a),a}function au(e=Qo){const t=ki.get(e);if(!t&&e===Qo&&Dd())return jd();if(!t)throw kt.create("no-app",{appName:e});return t}function qe(e,t,n){var r;let i=(r=Lw[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}Zt(new Nt(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="firebase-heartbeat-database",zw=1,mr="firebase-heartbeat-store";let so=null;function Fd(){return so||(so=aw(Bw,zw,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(mr)}catch(n){console.warn(n)}}}}).catch(e=>{throw kt.create("idb-open",{originalErrorMessage:e.message})})),so}async function Hw(e){try{const n=(await Fd()).transaction(mr),r=await n.objectStore(mr).get(Bd(e));return await n.done,r}catch(t){if(t instanceof Xe)Qt.warn(t.message);else{const n=kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qt.warn(n.message)}}}async function Il(e,t){try{const r=(await Fd()).transaction(mr,"readwrite");await r.objectStore(mr).put(t,Bd(e)),await r.done}catch(n){if(n instanceof Xe)Qt.warn(n.message);else{const r=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(r.message)}}}function Bd(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=1024,Ww=30*24*60*60*1e3;class qw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=El();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Ww}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=El(),{heartbeatsToSend:r,unsentEntries:i}=Gw(this._heartbeatsCache.heartbeats),s=Ai(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function El(){return new Date().toISOString().substring(0,10)}function Gw(e,t=Vw){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rl(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Rl(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mb()?Lb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Il(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Rl(e){return Ai(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(e){Zt(new Nt("platform-logger",t=>new lw(t),"PRIVATE")),Zt(new Nt("heartbeat",t=>new qw(t),"PRIVATE")),qe(Yo,wl,e),qe(Yo,wl,"esm2017"),qe("fire-js","")}Jw("");var Xw="firebase",Yw="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe(Xw,Yw,"app");var Qw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,uu=uu||{},k=Qw||self;function us(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Dr(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Zw(e){return Object.prototype.hasOwnProperty.call(e,oo)&&e[oo]||(e[oo]=++eS)}var oo="closure_uid_"+(1e9*Math.random()>>>0),eS=0;function tS(e,t,n){return e.call.apply(e.bind,arguments)}function nS(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function de(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?de=tS:de=nS,de.apply(null,arguments)}function ei(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function ne(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Dt(){this.s=this.s,this.o=this.o}var rS=0;Dt.prototype.s=!1;Dt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rS!=0)&&Zw(this)};Dt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const zd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function cu(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Tl(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(us(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function pe(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var iS=function(){if(!k.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};k.addEventListener("test",n,t),k.removeEventListener("test",n,t)}catch{}return e}();function vr(e){return/^[\s\xa0]*$/.test(e)}function cs(){var e=k.navigator;return e&&(e=e.userAgent)?e:""}function ze(e){return cs().indexOf(e)!=-1}function lu(e){return lu[" "](e),e}lu[" "]=function(){};function sS(e,t){var n=QS;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var oS=ze("Opera"),_r=ze("Trident")||ze("MSIE"),Hd=ze("Edge"),ea=Hd||_r,Vd=ze("Gecko")&&!(cs().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge"))&&!(ze("Trident")||ze("MSIE"))&&!ze("Edge"),aS=cs().toLowerCase().indexOf("webkit")!=-1&&!ze("Edge");function Wd(){var e=k.document;return e?e.documentMode:void 0}e:{var Al="",ao=function(){var e=cs();if(Vd)return/rv:([^\);]+)(\)|;)/.exec(e);if(Hd)return/Edge\/([\d\.]+)/.exec(e);if(_r)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(aS)return/WebKit\/(\S+)/.exec(e);if(oS)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ao&&(Al=ao?ao[1]:""),_r){var Cl=Wd();if(Cl!=null&&Cl>parseFloat(Al))break e}}k.document&&_r&&Wd();function yr(e,t){if(pe.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Vd){e:{try{lu(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:uS[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&yr.$.h.call(this)}}ne(yr,pe);var uS={2:"touch",3:"pen",4:"mouse"};yr.prototype.h=function(){yr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $r="closure_listenable_"+(1e6*Math.random()|0),cS=0;function lS(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++cS,this.fa=this.ia=!1}function ls(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function hu(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function hS(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function qd(e){const t={};for(const n in e)t[n]=e[n];return t}const kl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gd(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<kl.length;s++)n=kl[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function hs(e){this.src=e,this.g={},this.h=0}hs.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=na(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new lS(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function ta(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=zd(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ls(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function na(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var fu="closure_lm_"+(1e6*Math.random()|0),uo={};function Kd(e,t,n,r,i){if(r&&r.once)return Xd(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Kd(e,t[s],n,r,i);return null}return n=gu(n),e&&e[$r]?e.O(t,n,Dr(r)?!!r.capture:!!r,i):Jd(e,t,n,!1,r,i)}function Jd(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Dr(i)?!!i.capture:!!i,a=pu(e);if(a||(e[fu]=a=new hs(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=fS(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)iS||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Qd(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function fS(){function e(n){return t.call(e.src,e.listener,n)}const t=dS;return e}function Xd(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Xd(e,t[s],n,r,i);return null}return n=gu(n),e&&e[$r]?e.P(t,n,Dr(r)?!!r.capture:!!r,i):Jd(e,t,n,!0,r,i)}function Yd(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Yd(e,t[s],n,r,i);else r=Dr(r)?!!r.capture:!!r,n=gu(n),e&&e[$r]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=na(s,n,r,i),-1<n&&(ls(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=pu(e))&&(t=e.g[t.toString()],e=-1,t&&(e=na(t,n,r,i)),(n=-1<e?t[e]:null)&&du(n))}function du(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[$r])ta(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Qd(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=pu(t))?(ta(n,e),n.h==0&&(n.src=null,t[fu]=null)):ls(e)}}}function Qd(e){return e in uo?uo[e]:uo[e]="on"+e}function dS(e,t){if(e.fa)e=!0;else{t=new yr(t,this);var n=e.listener,r=e.la||e.src;e.ia&&du(e),e=n.call(r,t)}return e}function pu(e){return e=e[fu],e instanceof hs?e:null}var co="__closure_events_fn_"+(1e9*Math.random()>>>0);function gu(e){return typeof e=="function"?e:(e[co]||(e[co]=function(t){return e.handleEvent(t)}),e[co])}function ee(){Dt.call(this),this.i=new hs(this),this.S=this,this.J=null}ne(ee,Dt);ee.prototype[$r]=!0;ee.prototype.removeEventListener=function(e,t,n,r){Yd(this,e,t,n,r)};function ie(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new pe(t,e);else if(t instanceof pe)t.target=t.target||e;else{var i=t;t=new pe(r,e),Gd(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ti(o,r,!0,t)&&i}if(o=t.g=e,i=ti(o,r,!0,t)&&i,i=ti(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=ti(o,r,!1,t)&&i}ee.prototype.N=function(){if(ee.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ls(n[r]);delete e.g[t],e.h--}}this.J=null};ee.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ee.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ti(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&ta(e.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var mu=k.JSON.stringify;class pS{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function gS(){var e=vu;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class mS{constructor(){this.h=this.g=null}add(t,n){const r=Zd.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Zd=new pS(()=>new vS,e=>e.reset());class vS{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _S(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function yS(e){k.setTimeout(()=>{throw e},0)}let br,wr=!1,vu=new mS,ep=()=>{const e=k.Promise.resolve(void 0);br=()=>{e.then(bS)}};var bS=()=>{for(var e;e=gS();){try{e.h.call(e.g)}catch(n){yS(n)}var t=Zd;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}wr=!1};function fs(e,t){ee.call(this),this.h=e||1,this.g=t||k,this.j=de(this.qb,this),this.l=Date.now()}ne(fs,ee);S=fs.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ie(this,"tick"),this.ga&&(_u(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function _u(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}S.N=function(){fs.$.N.call(this),_u(this),delete this.g};function yu(e,t,n){if(typeof e=="function")n&&(e=de(e,n));else if(e&&typeof e.handleEvent=="function")e=de(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:k.setTimeout(e,t||0)}function tp(e){e.g=yu(()=>{e.g=null,e.i&&(e.i=!1,tp(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class wS extends Dt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:tp(this)}N(){super.N(),this.g&&(k.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Sr(e){Dt.call(this),this.h=e,this.g={}}ne(Sr,Dt);var Pl=[];function np(e,t,n,r){Array.isArray(n)||(n&&(Pl[0]=n.toString()),n=Pl);for(var i=0;i<n.length;i++){var s=Kd(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function rp(e){hu(e.g,function(t,n){this.g.hasOwnProperty(n)&&du(t)},e),e.g={}}Sr.prototype.N=function(){Sr.$.N.call(this),rp(this)};Sr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ds(){this.g=!0}ds.prototype.Ea=function(){this.g=!1};function SS(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&l[1]=="type"?o+(h+"="+c+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function IS(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function mn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+RS(e,n)+(r?" "+r:"")})}function ES(e,t){e.info(function(){return"TIMEOUT: "+t})}ds.prototype.info=function(){};function RS(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return mu(n)}catch{return t}}var jn={},xl=null;function bu(){return xl=xl||new ee}jn.Ta="serverreachability";function ip(e){pe.call(this,jn.Ta,e)}ne(ip,pe);function Ir(e){const t=bu();ie(t,new ip(t))}jn.STAT_EVENT="statevent";function sp(e,t){pe.call(this,jn.STAT_EVENT,e),this.stat=t}ne(sp,pe);function ve(e){const t=bu();ie(t,new sp(t,e))}jn.Ua="timingevent";function op(e,t){pe.call(this,jn.Ua,e),this.size=t}ne(op,pe);function Mr(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return k.setTimeout(function(){e()},t)}var wu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},TS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Su(){}Su.prototype.h=null;function Ol(e){return e.h||(e.h=e.i())}function AS(){}var Lr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Iu(){pe.call(this,"d")}ne(Iu,pe);function Eu(){pe.call(this,"c")}ne(Eu,pe);var ra;function ps(){}ne(ps,Su);ps.prototype.g=function(){return new XMLHttpRequest};ps.prototype.i=function(){return{}};ra=new ps;function Ur(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Sr(this),this.P=CS,e=ea?125:void 0,this.V=new fs(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ap}function ap(){this.i=null,this.g="",this.h=!1}var CS=45e3,up={},ia={};S=Ur.prototype;S.setTimeout=function(e){this.P=e};function sa(e,t,n){e.L=1,e.A=ms(ut(t)),e.u=n,e.S=!0,cp(e,null)}function cp(e,t){e.G=Date.now(),jr(e),e.B=ut(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),vp(n.i,"t",r),e.o=0,n=e.l.J,e.h=new ap,e.g=Up(e.l,n?t:null,!e.u),0<e.O&&(e.M=new wS(de(e.Pa,e,e.g),e.O)),np(e.U,e.g,"readystatechange",e.nb),t=e.I?qd(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Ir(),SS(e.j,e.v,e.B,e.m,e.W,e.u)}S.nb=function(e){e=e.target;const t=this.M;t&&He(e)==3?t.l():this.Pa(e)};S.Pa=function(e){try{if(e==this.g)e:{const h=He(this.g);var t=this.g.Ia();const l=this.g.da();if(!(3>h)&&(h!=3||ea||this.g&&(this.h.h||this.g.ja()||Ml(this.g)))){this.J||h!=4||t==7||(t==8||0>=l?Ir(3):Ir(2)),gs(this);var n=this.g.da();this.ca=n;t:if(lp(this)){var r=Ml(this.g);e="";var i=r.length,s=He(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ht(this),ur(this);var o="";break t}this.h.i=new k.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,IS(this.j,this.v,this.B,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vr(a)){var c=a;break t}}c=null}if(n=c)mn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oa(this,n);else{this.i=!1,this.s=3,ve(12),Ht(this),ur(this);break e}}this.S?(hp(this,h,o),ea&&this.i&&h==3&&(np(this.U,this.V,"tick",this.mb),this.V.start())):(mn(this.j,this.m,o,null),oa(this,o)),h==4&&Ht(this),this.i&&!this.J&&(h==4?Dp(this.l,this):(this.i=!1,jr(this)))}else JS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ve(12)):(this.s=0,ve(13)),Ht(this),ur(this)}}}catch{}finally{}};function lp(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function hp(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=kS(e,n),i==ia){t==4&&(e.s=4,ve(14),r=!1),mn(e.j,e.m,null,"[Incomplete Response]");break}else if(i==up){e.s=4,ve(15),mn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else mn(e.j,e.m,i,null),oa(e,i);lp(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,ve(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pu(t),t.M=!0,ve(11))):(mn(e.j,e.m,n,"[Invalid Chunked Response]"),Ht(e),ur(e))}S.mb=function(){if(this.g){var e=He(this.g),t=this.g.ja();this.o<t.length&&(gs(this),hp(this,e,t),this.i&&e!=4&&jr(this))}};function kS(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?ia:(n=Number(t.substring(n,r)),isNaN(n)?up:(r+=1,r+n>t.length?ia:(t=t.slice(r,r+n),e.o=r+n,t)))}S.cancel=function(){this.J=!0,Ht(this)};function jr(e){e.Y=Date.now()+e.P,fp(e,e.P)}function fp(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Mr(de(e.lb,e),t)}function gs(e){e.C&&(k.clearTimeout(e.C),e.C=null)}S.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(ES(this.j,this.B),this.L!=2&&(Ir(),ve(17)),Ht(this),this.s=2,ur(this)):fp(this,this.Y-e)};function ur(e){e.l.H==0||e.J||Dp(e.l,e)}function Ht(e){gs(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,_u(e.V),rp(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function oa(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||aa(n.i,e))){if(!e.K&&aa(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Oi(n),bs(n);else break e;ku(n),ve(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Mr(de(n.ib,n),6e3));if(1>=bp(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vt(n,11)}else if((e.K||n.g==e)&&Oi(n),!vr(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const h=c[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const l=c[4];l!=null&&(n.Ga=l,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const p=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ru(s,s.h),s.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,H(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Lp(r,r.J?r.pa:null,r.Y),o.K){wp(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(gs(a),jr(a)),r.g=o}else Op(r);0<n.j.length&&ws(n)}else c[0]!="stop"&&c[0]!="close"||Vt(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Vt(n,7):Cu(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Ir(4)}catch{}}function PS(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(us(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function xS(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(us(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function dp(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(us(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=xS(e),r=PS(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function OS(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Kt){this.h=e.h,Pi(this,e.j),this.s=e.s,this.g=e.g,xi(this,e.m),this.l=e.l;var t=e.i,n=new Er;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Nl(this,n),this.o=e.o}else e&&(t=String(e).match(pp))?(this.h=!1,Pi(this,t[1]||"",!0),this.s=er(t[2]||""),this.g=er(t[3]||"",!0),xi(this,t[4]),this.l=er(t[5]||"",!0),Nl(this,t[6]||"",!0),this.o=er(t[7]||"")):(this.h=!1,this.i=new Er(null,this.h))}Kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(tr(t,Dl,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(tr(t,Dl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(tr(n,n.charAt(0)=="/"?$S:DS,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",tr(n,LS)),e.join("")};function ut(e){return new Kt(e)}function Pi(e,t,n){e.j=n?er(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function xi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Nl(e,t,n){t instanceof Er?(e.i=t,US(e.i,e.h)):(n||(t=tr(t,MS)),e.i=new Er(t,e.h))}function H(e,t,n){e.i.set(t,n)}function ms(e){return H(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function er(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function tr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,NS),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function NS(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Dl=/[#\/\?@]/g,DS=/[#\?:]/g,$S=/[#\?]/g,MS=/[#\?@]/g,LS=/#/g;function Er(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function $t(e){e.g||(e.g=new Map,e.h=0,e.i&&OS(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}S=Er.prototype;S.add=function(e,t){$t(this),this.i=null,e=Fn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function gp(e,t){$t(e),t=Fn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function mp(e,t){return $t(e),t=Fn(e,t),e.g.has(t)}S.forEach=function(e,t){$t(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};S.ta=function(){$t(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};S.Z=function(e){$t(this);let t=[];if(typeof e=="string")mp(this,e)&&(t=t.concat(this.g.get(Fn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};S.set=function(e,t){return $t(this),this.i=null,e=Fn(this,e),mp(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};S.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function vp(e,t,n){gp(e,t),0<n.length&&(e.i=null,e.g.set(Fn(e,t),cu(n)),e.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Fn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function US(e,t){t&&!e.j&&($t(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(gp(this,r),vp(this,i,n))},e)),e.j=t}var jS=class{constructor(e,t){this.g=e,this.map=t}};function _p(e){this.l=e||FS,k.PerformanceNavigationTiming?(e=k.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(k.g&&k.g.Ka&&k.g.Ka()&&k.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FS=10;function yp(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function bp(e){return e.h?1:e.g?e.g.size:0}function aa(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ru(e,t){e.g?e.g.add(t):e.h=t}function wp(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}_p.prototype.cancel=function(){if(this.i=Sp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Sp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return cu(e.i)}var BS=class{stringify(e){return k.JSON.stringify(e,void 0)}parse(e){return k.JSON.parse(e,void 0)}};function zS(){this.g=new BS}function HS(e,t,n){const r=n||"";try{dp(e,function(i,s){let o=i;Dr(i)&&(o=mu(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function VS(e,t){const n=new ds;if(k.Image){const r=new Image;r.onload=ei(ni,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ei(ni,n,r,"TestLoadImage: error",!1,t),r.onabort=ei(ni,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ei(ni,n,r,"TestLoadImage: timeout",!1,t),k.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ni(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function vs(e){this.l=e.ec||null,this.j=e.ob||!1}ne(vs,Su);vs.prototype.g=function(){return new _s(this.l,this.j)};vs.prototype.i=function(e){return function(){return e}}({});function _s(e,t){ee.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Tu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ne(_s,ee);var Tu=0;S=_s.prototype;S.open=function(e,t){if(this.readyState!=Tu)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Rr(this)};S.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||k).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=Tu};S.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof k.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ip(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Ip(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}S.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fr(this):Rr(this),this.readyState==3&&Ip(this)}};S.Za=function(e){this.g&&(this.response=this.responseText=e,Fr(this))};S.Ya=function(e){this.g&&(this.response=e,Fr(this))};S.ka=function(){this.g&&Fr(this)};function Fr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Rr(e)}S.setRequestHeader=function(e,t){this.v.append(e,t)};S.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Rr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(_s.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var WS=k.JSON.parse;function K(e){ee.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ep,this.L=this.M=!1}ne(K,ee);var Ep="",qS=/^https?$/i,GS=["POST","PUT"];S=K.prototype;S.Oa=function(e){this.M=e};S.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ra.g(),this.C=this.u?Ol(this.u):Ol(ra),this.g.onreadystatechange=de(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){$l(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=k.FormData&&e instanceof k.FormData,!(0<=zd(GS,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ap(this),0<this.B&&((this.L=KS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=de(this.ua,this)):this.A=yu(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){$l(this,s)}};function KS(e){return _r&&typeof e.timeout=="number"&&e.ontimeout!==void 0}S.ua=function(){typeof uu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ie(this,"timeout"),this.abort(8))};function $l(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Rp(e),ys(e)}function Rp(e){e.F||(e.F=!0,ie(e,"complete"),ie(e,"error"))}S.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ie(this,"complete"),ie(this,"abort"),ys(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ys(this,!0)),K.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?Tp(this):this.kb())};S.kb=function(){Tp(this)};function Tp(e){if(e.h&&typeof uu<"u"&&(!e.C[1]||He(e)!=4||e.da()!=2)){if(e.v&&He(e)==4)yu(e.La,0,e);else if(ie(e,"readystatechange"),He(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(pp)[1]||null;!i&&k.self&&k.self.location&&(i=k.self.location.protocol.slice(0,-1)),r=!qS.test(i?i.toLowerCase():"")}n=r}if(n)ie(e,"complete"),ie(e,"success");else{e.m=6;try{var s=2<He(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Rp(e)}}finally{ys(e)}}}}function ys(e,t){if(e.g){Ap(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ie(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ap(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(k.clearTimeout(e.A),e.A=null)}S.isActive=function(){return!!this.g};function He(e){return e.g?e.g.readyState:0}S.da=function(){try{return 2<He(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),WS(t)}};function Ml(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ep:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function JS(e){const t={};e=(e.g&&2<=He(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(vr(e[r]))continue;var n=_S(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}hS(t,function(r){return r.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cp(e){let t="";return hu(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Au(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Cp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):H(e,t,n))}function Kn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function kp(e){this.Ga=0,this.j=[],this.l=new ds,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kn("baseRetryDelayMs",5e3,e),this.hb=Kn("retryDelaySeedMs",1e4,e),this.eb=Kn("forwardChannelMaxRetries",2,e),this.xa=Kn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new _p(e&&e.concurrentRequestLimit),this.Ja=new zS,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=kp.prototype;S.ra=8;S.H=1;function Cu(e){if(Pp(e),e.H==3){var t=e.W++,n=ut(e.I);if(H(n,"SID",e.K),H(n,"RID",t),H(n,"TYPE","terminate"),Br(e,n),t=new Ur(e,e.l,t),t.L=2,t.A=ms(ut(n)),n=!1,k.navigator&&k.navigator.sendBeacon)try{n=k.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&k.Image&&(new Image().src=t.A,n=!0),n||(t.g=Up(t.l,null),t.g.ha(t.A)),t.G=Date.now(),jr(t)}Mp(e)}function bs(e){e.g&&(Pu(e),e.g.cancel(),e.g=null)}function Pp(e){bs(e),e.u&&(k.clearTimeout(e.u),e.u=null),Oi(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&k.clearTimeout(e.m),e.m=null)}function ws(e){if(!yp(e.i)&&!e.m){e.m=!0;var t=e.Na;br||ep(),wr||(br(),wr=!0),vu.add(t,e),e.C=0}}function XS(e,t){return bp(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Mr(de(e.Na,e,t),$p(e,e.C)),e.C++,!0)}S.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Ur(this,this.l,e);let s=this.s;if(this.U&&(s?(s=qd(s),Gd(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=xp(this,i,t),n=ut(this.I),H(n,"RID",e),H(n,"CVER",22),this.F&&H(n,"X-HTTP-Session-Id",this.F),Br(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Cp(s)))+"&"+t:this.o&&Au(n,this.o,s)),Ru(this.i,i),this.bb&&H(n,"TYPE","init"),this.P?(H(n,"$req",t),H(n,"SID","null"),i.aa=!0,sa(i,n,null)):sa(i,n,t),this.H=2}}else this.H==3&&(e?Ll(this,e):this.j.length==0||yp(this.i)||Ll(this))};function Ll(e,t){var n;t?n=t.m:n=e.W++;const r=ut(e.I);H(r,"SID",e.K),H(r,"RID",n),H(r,"AID",e.V),Br(e,r),e.o&&e.s&&Au(r,e.o,e.s),n=new Ur(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=xp(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ru(e.i,n),sa(n,r,t)}function Br(e,t){e.na&&hu(e.na,function(n,r){H(t,r,n)}),e.h&&dp({},function(n,r){H(t,r,n)})}function xp(e,t,n){n=Math.min(e.j.length,n);var r=e.h?de(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].g;const h=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{HS(h,o,"req"+c+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function Op(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;br||ep(),wr||(br(),wr=!0),vu.add(t,e),e.A=0}}function ku(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Mr(de(e.Ma,e),$p(e,e.A)),e.A++,!0)}S.Ma=function(){if(this.u=null,Np(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Mr(de(this.jb,this),e)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ve(10),bs(this),Np(this))};function Pu(e){e.B!=null&&(k.clearTimeout(e.B),e.B=null)}function Np(e){e.g=new Ur(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ut(e.wa);H(t,"RID","rpc"),H(t,"SID",e.K),H(t,"AID",e.V),H(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&H(t,"TO",e.qa),H(t,"TYPE","xmlhttp"),Br(e,t),e.o&&e.s&&Au(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=ms(ut(t)),n.u=null,n.S=!0,cp(n,e)}S.ib=function(){this.v!=null&&(this.v=null,bs(this),ku(this),ve(19))};function Oi(e){e.v!=null&&(k.clearTimeout(e.v),e.v=null)}function Dp(e,t){var n=null;if(e.g==t){Oi(e),Pu(e),e.g=null;var r=2}else if(aa(e.i,t))n=t.F,wp(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=bu(),ie(r,new op(r,n)),ws(e)}else Op(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&XS(e,t)||r==2&&ku(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Vt(e,5);break;case 4:Vt(e,10);break;case 3:Vt(e,6);break;default:Vt(e,2)}}}function $p(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Vt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=de(e.pb,e);n||(n=new Kt("//www.google.com/images/cleardot.gif"),k.location&&k.location.protocol=="http"||Pi(n,"https"),ms(n)),VS(n.toString(),r)}else ve(2);e.H=0,e.h&&e.h.za(t),Mp(e),Pp(e)}S.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ve(2)):(this.l.info("Failed to ping google.com"),ve(1))};function Mp(e){if(e.H=0,e.ma=[],e.h){const t=Sp(e.i);(t.length!=0||e.j.length!=0)&&(Tl(e.ma,t),Tl(e.ma,e.j),e.i.i.length=0,cu(e.j),e.j.length=0),e.h.ya()}}function Lp(e,t,n){var r=n instanceof Kt?ut(n):new Kt(n);if(r.g!="")t&&(r.g=t+"."+r.g),xi(r,r.m);else{var i=k.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Kt(null);r&&Pi(s,r),t&&(s.g=t),i&&xi(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&H(r,n,t),H(r,"VER",e.ra),Br(e,r),r}function Up(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new K(new vs({ob:n})):new K(e.va),t.Oa(e.J),t}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function jp(){}S=jp.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function Ne(e,t){ee.call(this),this.g=new kp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!vr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!vr(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Bn(this)}ne(Ne,ee);Ne.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ve(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Lp(e,null,e.Y),ws(e)};Ne.prototype.close=function(){Cu(this.g)};Ne.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=mu(e),e=n);t.j.push(new jS(t.fb++,e)),t.H==3&&ws(t)};Ne.prototype.N=function(){this.g.h=null,delete this.j,Cu(this.g),delete this.g,Ne.$.N.call(this)};function Fp(e){Iu.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}ne(Fp,Iu);function Bp(){Eu.call(this),this.status=1}ne(Bp,Eu);function Bn(e){this.g=e}ne(Bn,jp);Bn.prototype.Ba=function(){ie(this.g,"a")};Bn.prototype.Aa=function(e){ie(this.g,new Fp(e))};Bn.prototype.za=function(e){ie(this.g,new Bp)};Bn.prototype.ya=function(){ie(this.g,"b")};function YS(){this.blockSize=-1}function Je(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ne(Je,YS);Je.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function lo(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Je.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)lo(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){lo(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){lo(this,r),i=0;break}}this.h=i,this.i+=t};Je.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function U(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var QS={};function xu(e){return-128<=e&&128>e?sS(e,function(t){return new U([t|0],0>t?-1:0)}):new U([e|0],0>e?-1:0)}function Ve(e){if(isNaN(e)||!isFinite(e))return _n;if(0>e)return re(Ve(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ua;return new U(t,0)}function zp(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return re(zp(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ve(Math.pow(t,8)),r=_n,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Ve(Math.pow(t,s)),r=r.R(s).add(Ve(o))):(r=r.R(n),r=r.add(Ve(o)))}return r}var ua=4294967296,_n=xu(0),ca=xu(1),Ul=xu(16777216);S=U.prototype;S.ea=function(){if(ke(this))return-re(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ua+r)*t,t*=ua}return e};S.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(rt(this))return"0";if(ke(this))return"-"+re(this).toString(e);for(var t=Ve(Math.pow(e,6)),n=this,r="";;){var i=Di(n,t).g;n=Ni(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,rt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};S.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function rt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ke(e){return e.h==-1}S.X=function(e){return e=Ni(this,e),ke(e)?-1:rt(e)?0:1};function re(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new U(n,~e.h).add(ca)}S.abs=function(){return ke(this)?re(this):this};S.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new U(n,n[n.length-1]&-2147483648?-1:0)};function Ni(e,t){return e.add(re(t))}S.R=function(e){if(rt(this)||rt(e))return _n;if(ke(this))return ke(e)?re(this).R(re(e)):re(re(this).R(e));if(ke(e))return re(this.R(re(e)));if(0>this.X(Ul)&&0>e.X(Ul))return Ve(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,u=e.D(i)&65535;n[2*r+2*i]+=o*u,ri(n,2*r+2*i),n[2*r+2*i+1]+=s*u,ri(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ri(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ri(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new U(n,0)};function ri(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Jn(e,t){this.g=e,this.h=t}function Di(e,t){if(rt(t))throw Error("division by zero");if(rt(e))return new Jn(_n,_n);if(ke(e))return t=Di(re(e),t),new Jn(re(t.g),re(t.h));if(ke(t))return t=Di(e,re(t)),new Jn(re(t.g),t.h);if(30<e.g.length){if(ke(e)||ke(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ca,r=t;0>=r.X(e);)n=jl(n),r=jl(r);var i=fn(n,1),s=fn(r,1);for(r=fn(r,2),n=fn(n,2);!rt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=fn(r,1),n=fn(n,1)}return t=Ni(e,i.R(t)),new Jn(i,t)}for(i=_n;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ve(n),o=s.R(t);ke(o)||0<o.X(e);)n-=r,s=Ve(n),o=s.R(t);rt(s)&&(s=ca),i=i.add(s),e=Ni(e,o)}return new Jn(i,e)}S.gb=function(e){return Di(this,e).h};S.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new U(n,this.h&e.h)};S.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new U(n,this.h|e.h)};S.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new U(n,this.h^e.h)};function jl(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new U(n,e.h)}function fn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new U(i,e.h)}Ne.prototype.send=Ne.prototype.u;Ne.prototype.open=Ne.prototype.m;Ne.prototype.close=Ne.prototype.close;wu.NO_ERROR=0;wu.TIMEOUT=8;wu.HTTP_ERROR=6;TS.COMPLETE="complete";AS.EventType=Lr;Lr.OPEN="a";Lr.CLOSE="b";Lr.ERROR="c";Lr.MESSAGE="d";ee.prototype.listen=ee.prototype.O;K.prototype.listenOnce=K.prototype.P;K.prototype.getLastError=K.prototype.Sa;K.prototype.getLastErrorCode=K.prototype.Ia;K.prototype.getStatus=K.prototype.da;K.prototype.getResponseJson=K.prototype.Wa;K.prototype.getResponseText=K.prototype.ja;K.prototype.send=K.prototype.ha;K.prototype.setWithCredentials=K.prototype.Oa;Je.prototype.digest=Je.prototype.l;Je.prototype.reset=Je.prototype.reset;Je.prototype.update=Je.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=Ve;U.fromString=zp;var ZS=U;const Fl="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ce.UNAUTHENTICATED=new ce(null),ce.GOOGLE_CREDENTIALS=new ce("google-credentials-uid"),ce.FIRST_PARTY=new ce("first-party-uid"),ce.MOCK_USER=new ce("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new su("@firebase/firestore");function Se(e,...t){if(Nn.logLevel<=M.DEBUG){const n=t.map(Nu);Nn.debug(`Firestore (${zr}): ${e}`,...n)}}function Ou(e,...t){if(Nn.logLevel<=M.ERROR){const n=t.map(Nu);Nn.error(`Firestore (${zr}): ${e}`,...n)}}function eI(e,...t){if(Nn.logLevel<=M.WARN){const n=t.map(Nu);Nn.warn(`Firestore (${zr}): ${e}`,...n)}}function Nu(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(e="Unexpected state"){const t=`FIRESTORE (${zr}) INTERNAL ASSERTION FAILED: `+e;throw Ou(t),new Error(t)}function la(e,t){e||Du()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Xe{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class tI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ce.UNAUTHENTICATED))}shutdown(){}}class nI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rI{constructor(t){this.t=t,this.currentUser=ce.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Se("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(la(typeof r.accessToken=="string"),new Hp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return la(t===null||typeof t=="string"),new ce(t)}}class iI{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ce.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sI{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new iI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ce.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oI{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class aI{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&Se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{Se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(la(typeof n.token=="string"),this.R=n.token,new oI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=uI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function Vp(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(t,n,r,i,s,o,a,u,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class $i{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new $i("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof $i&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bl,D;(D=Bl||(Bl={}))[D.OK=0]="OK",D[D.CANCELLED=1]="CANCELLED",D[D.UNKNOWN=2]="UNKNOWN",D[D.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",D[D.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",D[D.NOT_FOUND=5]="NOT_FOUND",D[D.ALREADY_EXISTS=6]="ALREADY_EXISTS",D[D.PERMISSION_DENIED=7]="PERMISSION_DENIED",D[D.UNAUTHENTICATED=16]="UNAUTHENTICATED",D[D.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",D[D.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",D[D.ABORTED=10]="ABORTED",D[D.OUT_OF_RANGE=11]="OUT_OF_RANGE",D[D.UNIMPLEMENTED=12]="UNIMPLEMENTED",D[D.INTERNAL=13]="INTERNAL",D[D.UNAVAILABLE=14]="UNAVAILABLE",D[D.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ZS([4294967295,4294967295],0);function ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&Se("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new $u(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(le.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fI(e,t){if(Ou("AsyncQueue",`${t}: ${e}`),Vp(e))return new he(le.UNAVAILABLE,`${t}: ${e}`);throw e}var zl,Hl;(Hl=zl||(zl={})).j_="default",Hl.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ce.UNAUTHENTICATED,this.clientId=cI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Se("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Se("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new he(le.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=fI(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=new Map;function pI(e,t,n,r){if(t===!0&&r===!0)throw new he(le.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function gI(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Du()}function mI(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new he(le.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gI(e);throw new he(le.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new he(le.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new he(le.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}pI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wp((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new he(le.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new he(le.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new he(le.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class qp{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new he(le.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new he(le.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tI;switch(r.type){case"firstParty":return new sI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new he(le.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Vl.get(n);r&&(Se("ComponentProvider","Removing Datastore"),Vl.delete(n),r.terminate())}(this),Promise.resolve()}}function vI(e,t,n,r={}){var i;const s=(e=mI(e,qp))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&eI("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=ce.MOCK_USER;else{a=Md(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new he(le.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ce(c)}e._authCredentials=new nI(new Hp(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new hI(this,"async_queue_retry"),this.cu=()=>{const n=ho();n&&Se("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=ho();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new yn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!Vp(t))throw t;Se("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ou("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const i=$u.createAndSchedule(this,t,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&Du()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class yI extends qp{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new _I}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||wI(this),this._firestoreClient.terminate()}}function bI(e,t){const n=typeof e=="object"?e:au(),r=typeof e=="string"?e:t||"(default)",i=as(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Nd("firestore");s&&vI(i,...s)}return i}function wI(e){var t,n,r;const i=e._freezeSettings(),s=function(a,u,c,h){return new lI(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Wp(h.experimentalLongPollingOptions),h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new dI(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(t,n=!0){(function(i){zr=i})(on),Zt(new Nt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new yI(new rI(r.getProvider("auth-internal")),new aI(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new he(le.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $i(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),qe(Fl,"4.6.0",t),qe(Fl,"4.6.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="firebasestorage.googleapis.com",Kp="storageBucket",SI=2*60*1e3,II=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends Xe{constructor(t,n,r=0){super(fo(t),`Firebase Storage: ${n} (${fo(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Y.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return fo(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var X;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(X||(X={}));function fo(e){return"storage/"+e}function Mu(){const e="An unknown error occurred, please check the error payload for server response.";return new Y(X.UNKNOWN,e)}function EI(e){return new Y(X.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RI(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Y(X.UNAUTHENTICATED,e)}function TI(){return new Y(X.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AI(e){return new Y(X.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function CI(){return new Y(X.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kI(){return new Y(X.CANCELED,"User canceled the upload/download.")}function PI(e){return new Y(X.INVALID_URL,"Invalid URL '"+e+"'.")}function xI(e){return new Y(X.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function OI(){return new Y(X.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Kp+"' property when initializing the app?")}function NI(){return new Y(X.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function DI(e){return new Y(X.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ha(e){return new Y(X.INVALID_ARGUMENT,e)}function Jp(){return new Y(X.APP_DELETED,"The Firebase app was deleted.")}function $I(e){return new Y(X.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function cr(e,t){return new Y(X.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function Xn(e){throw new Y(X.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Ie.makeFromUrl(t,n)}catch{return new Ie(t,"")}if(r.path==="")return r;throw xI(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const h="v[A-Za-z0-9_]+",l=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${l}/${h}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},v=n===Gp?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",b=new RegExp(`^https?://${v}/${i}/${_}`,"i"),w=[{regex:a,indices:u,postModify:s},{regex:f,indices:p,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<w.length;E++){const A=w[E],I=A.regex.exec(t);if(I){const R=I[A.indices.bucket];let L=I[A.indices.path];L||(L=""),r=new Ie(R,L),A.postModify(r);break}}if(r==null)throw PI(t);return r}}class MI{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function h(..._){c||(c=!0,t.apply(null,_))}function l(_){i=setTimeout(()=>{i=null,e(f,u())},_)}function d(){s&&clearTimeout(s)}function f(_,...b){if(c){d();return}if(_){d(),h.call(null,_,...b);return}if(u()||o){d(),h.call(null,_,...b);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,l(w)}let p=!1;function v(_){p||(p=!0,d(),!c&&(i!==null?(_||(a=2),clearTimeout(i),l(0)):_||(a=1)))}return l(0),s=setTimeout(()=>{o=!0,v(!0)},n),v}function UI(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(e){return e!==void 0}function FI(e){return typeof e=="object"&&!Array.isArray(e)}function Xp(e){return typeof e=="string"||e instanceof String}function ql(e){return Lu()&&e instanceof Blob}function Lu(){return typeof Blob<"u"}function Gl(e,t,n,r){if(r<t)throw ha(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw ha(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function zI(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jt;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Jt||(Jt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(t,n,r,i,s,o,a,u,c,h,l,d=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=l,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,p)=>{this.resolve_=f,this.reject_=p,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new ii(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Jt.NO_ERROR,u=s.getStatus();if(!a||HI(u,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Jt.ABORT;r(!1,new ii(!1,null,h));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new ii(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());jI(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Mu();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Jp():kI();o(u)}else{const u=CI();o(u)}};this.canceled_?n(!1,new ii(!1,null,!0)):this.backoffId_=LI(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&UI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ii{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function WI(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function qI(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function GI(e,t){t&&(e["X-Firebase-GMPID"]=t)}function KI(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function JI(e,t,n,r,i,s,o=!0){const a=zI(e.urlParams),u=e.url+a,c=Object.assign({},e.headers);return GI(c,t),WI(c,n),qI(c,s),KI(c,r),new VI(u,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function YI(...e){const t=XI();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Lu())return new Blob(e);throw new Y(X.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function QI(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(e){if(typeof atob>"u")throw DI("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class po{constructor(t,n){this.data=t,this.contentType=n||null}}function eE(e,t){switch(e){case We.RAW:return new po(Yp(t));case We.BASE64:case We.BASE64URL:return new po(Qp(e,t));case We.DATA_URL:return new po(nE(t),rE(t))}throw Mu()}function Yp(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function tE(e){let t;try{t=decodeURIComponent(e)}catch{throw cr(We.DATA_URL,"Malformed data URL.")}return Yp(t)}function Qp(e,t){switch(e){case We.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw cr(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case We.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw cr(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ZI(t)}catch(i){throw i.message.includes("polyfill")?i:cr(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Zp{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw cr(We.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=iE(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function nE(e){const t=new Zp(e);return t.base64?Qp(We.BASE64,t.rest):tE(t.rest)}function rE(e){return new Zp(e).contentType}function iE(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,n){let r=0,i="";ql(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(ql(this.data_)){const r=this.data_,i=QI(r,t,n);return i===null?null:new wt(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new wt(r,!0)}}static getBlob(...t){if(Lu()){const n=t.map(r=>r instanceof wt?r.data_:r);return new wt(YI.apply(null,n))}else{const n=t.map(o=>Xp(o)?eE(We.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new wt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(e){let t;try{t=JSON.parse(e)}catch{return null}return FI(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oE(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function aE(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function eg(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(e,t){return t}class me{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||uE}}let si=null;function cE(e){return!Xp(e)||e.length<2?e:eg(e)}function lE(){if(si)return si;const e=[];e.push(new me("bucket")),e.push(new me("generation")),e.push(new me("metageneration")),e.push(new me("name","fullPath",!0));function t(s,o){return cE(o)}const n=new me("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new me("size");return i.xform=r,e.push(i),e.push(new me("timeCreated")),e.push(new me("updated")),e.push(new me("md5Hash",null,!0)),e.push(new me("cacheControl",null,!0)),e.push(new me("contentDisposition",null,!0)),e.push(new me("contentEncoding",null,!0)),e.push(new me("contentLanguage",null,!0)),e.push(new me("contentType",null,!0)),e.push(new me("metadata","customMetadata",!0)),si=e,si}function hE(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new Ie(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function fE(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return hE(r,e),r}function dE(e,t,n){const r=sE(t);return r===null?null:fE(e,r,n)}function pE(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class gE{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(e){if(!e)throw Mu()}function vE(e,t){function n(r,i){const s=dE(e,i,t);return mE(s!==null),s}return n}function _E(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=TI():i=RI():n.getStatus()===402?i=EI(e.bucket):n.getStatus()===403?i=AI(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function yE(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function bE(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=yE(null,t)),r}function wE(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let E=0;E<2;E++)w=w+Math.random().toString().slice(2);return w}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=bE(t,r,i),h=pE(c,n),l="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+u+"--",f=wt.getBlob(l,r,d);if(f===null)throw NI();const p={name:c.fullPath},v=BI(s,e.host,e._protocol),_="POST",b=e.maxUploadRetryTime,y=new gE(v,_,vE(e,n),b);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=_E(t),y}class SE{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jt.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jt.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jt.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw Xn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class IE extends SE{initXhr(){this.xhr_.responseType="text"}}function EE(){return new IE}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,n){this._service=t,n instanceof Ie?this._location=n:this._location=Ie.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new en(t,n)}get root(){const t=new Ie(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return eg(this._location.path)}get storage(){return this._service}get parent(){const t=oE(this._location.path);if(t===null)return null;const n=new Ie(this._location.bucket,t);return new en(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw $I(t)}}function RE(e,t,n){e._throwIfRoot("uploadBytes");const r=wE(e.storage,e._location,lE(),new wt(t,!0),n);return e.storage.makeRequestWithTokens(r,EE).then(i=>({metadata:i,ref:e}))}function TE(e,t){const n=aE(e._location.path,t),r=new Ie(e._location.bucket,n);return new en(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(e){return/^[A-Za-z]+:\/\//.test(e)}function CE(e,t){return new en(e,t)}function tg(e,t){if(e instanceof Uu){const n=e;if(n._bucket==null)throw OI();const r=new en(n,n._bucket);return t!=null?tg(r,t):r}else return t!==void 0?TE(e,t):e}function kE(e,t){if(t&&AE(t)){if(e instanceof Uu)return CE(e,t);throw ha("To use ref(service, url), the first argument must be a Storage instance.")}else return tg(e,t)}function Kl(e,t){const n=t==null?void 0:t[Kp];return n==null?null:Ie.makeFromBucketSpec(n,e)}function PE(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:Md(i,e.app.options.projectId))}class Uu{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Gp,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SI,this._maxUploadRetryTime=II,this._requests=new Set,i!=null?this._bucket=Ie.makeFromBucketSpec(i,this._host):this._bucket=Kl(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ie.makeFromBucketSpec(this._url,t):this._bucket=Kl(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Gl("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Gl("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new en(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new MI(Jp());{const o=JI(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const Jl="@firebase/storage",Xl="0.12.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="storage";function xE(e,t,n){return e=ht(e),RE(e,t,n)}function OE(e,t){return e=ht(e),kE(e,t)}function NE(e=au(),t){e=ht(e);const r=as(e,ng).getImmediate({identifier:t}),i=Nd("storage");return i&&DE(r,...i),r}function DE(e,t,n,r={}){PE(e,t,n,r)}function $E(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Uu(n,r,i,t,on)}function ME(){Zt(new Nt(ng,$E,"PUBLIC").setMultipleInstances(!0)),qe(Jl,Xl,""),qe(Jl,Xl,"esm2017")}ME();function ju(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function rg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LE=rg,ig=new Or("auth","Firebase",rg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new su("@firebase/auth");function UE(e,...t){Mi.logLevel<=M.WARN&&Mi.warn(`Auth (${on}): ${e}`,...t)}function pi(e,...t){Mi.logLevel<=M.ERROR&&Mi.error(`Auth (${on}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,...t){throw Fu(e,...t)}function Ge(e,...t){return Fu(e,...t)}function sg(e,t,n){const r=Object.assign(Object.assign({},LE()),{[t]:n});return new Or("auth","Firebase",r).create(t,{appName:e.name})}function Xt(e){return sg(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ig.create(e,...t)}function C(e,t,...n){if(!e)throw Fu(t,...n)}function it(e){const t="INTERNAL ASSERTION FAILED: "+e;throw pi(t),new Error(t)}function lt(e,t){e||it(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function jE(){return Yl()==="http:"||Yl()==="https:"}function Yl(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jE()||Nb()||"connection"in navigator)?navigator.onLine:!0}function BE(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,n){this.shortDelay=t,this.longDelay=n,lt(n>t,"Short delay should be less than long delay!"),this.isMobile=Ob()||Db()}get(){return FE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(e,t){lt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=new Hr(3e4,6e4);function zu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zn(e,t,n,r,i={}){return ag(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Nr(Object.assign({key:e.config.apiKey},o)).slice(1),u=await e._getAdditionalHeaders();return u["Content-Type"]="application/json",e.languageCode&&(u["X-Firebase-Locale"]=e.languageCode),og.fetch()(ug(e,e.config.apiHost,n,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))})}async function ag(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},zE),t);try{const i=new WE(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw oi(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw oi(e,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw oi(e,"email-already-in-use",o);if(u==="USER_DISABLED")throw oi(e,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sg(e,h,c);ct(e,h)}}catch(i){if(i instanceof Xe)throw i;ct(e,"network-request-failed",{message:String(i)})}}async function VE(e,t,n,r,i={}){const s=await zn(e,t,n,r,i);return"mfaPendingCredential"in s&&ct(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ug(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Bu(e.config,i):`${e.config.apiScheme}://${i}`}class WE{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ge(this.auth,"network-request-failed")),HE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ge(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(e,t){return zn(e,"POST","/v1/accounts:delete",t)}async function cg(e,t){return zn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function GE(e,t=!1){const n=ht(e),r=await n.getIdToken(t),i=Hu(r);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:lr(go(i.auth_time)),issuedAtTime:lr(go(i.iat)),expirationTime:lr(go(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function go(e){return Number(e)*1e3}function Hu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return pi("JWT malformed, contained fewer than 3 sections"),null;try{const i=xd(n);return i?JSON.parse(i):(pi("Failed to decode base64 JWT payload"),null)}catch(i){return pi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ql(e){const t=Hu(e);return C(t,"internal-error"),C(typeof t.exp<"u","internal-error"),C(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xe&&KE(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function KE({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=lr(this.lastLoginAt),this.creationTime=lr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Tr(e,cg(n,{idToken:r}));C(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?lg(s.providerUserInfo):[],a=YE(e.providerData,o),u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new da(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,l)}async function XE(e){const t=ht(e);await Li(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function YE(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function lg(e){return e.map(t=>{var{providerId:n}=t,r=ju(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(e,t){const n=await ag(e,{},async()=>{const r=Nr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=ug(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",og.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZE(e,t){return zn(e,"POST","/v2/accounts:revokeToken",zu(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){C(t.idToken,"internal-error"),C(typeof t.idToken<"u","internal-error"),C(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Ql(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){C(t.length!==0,"internal-error");const n=Ql(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QE(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bn;return r&&(C(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e,t){C(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class st{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=ju(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new da(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Tr(this,this.stsTokenManager.getToken(this.auth,t));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return GE(this,t)}reload(){return XE(this)}_assign(t){this!==t&&(C(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Li(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(Xt(this.auth));const t=await this.getIdToken();return await Tr(this,qE(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,u,c,h;const l=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,y=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:E,isAnonymous:A,providerData:I,stsTokenManager:R}=n;C(w&&R,t,"internal-error");const L=bn.fromJSON(this.name,R);C(typeof w=="string",t,"internal-error"),_t(l,t.name),_t(d,t.name),C(typeof E=="boolean",t,"internal-error"),C(typeof A=="boolean",t,"internal-error"),_t(f,t.name),_t(p,t.name),_t(v,t.name),_t(_,t.name),_t(b,t.name),_t(y,t.name);const P=new st({uid:w,auth:t,email:d,emailVerified:E,displayName:l,isAnonymous:A,photoURL:p,phoneNumber:f,tenantId:v,stsTokenManager:L,createdAt:b,lastLoginAt:y});return I&&Array.isArray(I)&&(P.providerData=I.map(Q=>Object.assign({},Q))),_&&(P._redirectEventId=_),P}static async _fromIdTokenResponse(t,n,r=!1){const i=new bn;i.updateFromServerResponse(n);const s=new st({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Li(s),s}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];C(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lg(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new bn;a.updateFromIdToken(r);const u=new st({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new da(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=new Map;function ot(e){lt(e instanceof Function,"Expected a class definition");let t=Zl.get(e);return t?(lt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Zl.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}hg.type="NONE";const eh=hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(e,t,n){return`firebase:${e}:${t}:${n}`}class wn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gi(this.userKey,i.apiKey,s),this.fullPersistenceKey=gi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new wn(ot(eh),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ot(eh);const o=gi(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const l=st._fromJSON(t,h);c!==s&&(a=l),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new wn(s,t,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new wn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(mg(t))return"Blackberry";if(vg(t))return"Webos";if(Vu(t))return"Safari";if((t.includes("chrome/")||dg(t))&&!t.includes("edge/"))return"Chrome";if(gg(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fg(e=ge()){return/firefox\//i.test(e)}function Vu(e=ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function dg(e=ge()){return/crios\//i.test(e)}function pg(e=ge()){return/iemobile/i.test(e)}function gg(e=ge()){return/android/i.test(e)}function mg(e=ge()){return/blackberry/i.test(e)}function vg(e=ge()){return/webos/i.test(e)}function Ss(e=ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function eR(e=ge()){var t;return Ss(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function tR(){return $b()&&document.documentMode===10}function _g(e=ge()){return Ss(e)||gg(e)||vg(e)||mg(e)||/windows phone/i.test(e)||pg(e)}function nR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(e,t=[]){let n;switch(e){case"Browser":n=th(ge());break;case"Worker":n=`${th(ge())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${on}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const u=t(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(e,t={}){return zn(e,"GET","/v2/passwordPolicy",zu(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=6;class oR{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nh(this),this.idTokenSubscription=new nh(this),this.beforeStateQueue=new rR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ig,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ot(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await wn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await cg(this,{idToken:t}),r=await st._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Li(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=BE()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Rt(this.app))return Promise.reject(Xt(this));const n=t?ht(t):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&C(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Rt(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await iR(this),n=new oR(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Or("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ZE(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ot(t)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await wn.create(this,[ot(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=t.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=t.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&UE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wu(e){return ht(e)}class nh{constructor(t){this.auth=t,this.observer=null,this.addObserver=zb(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uR(e){qu=e}function cR(e){return qu.loadJS(e)}function lR(){return qu.gapiScript}function hR(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(e,t){const n=as(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ci(s,t??{}))return i;ct(i,"already-initialized")}return n.initialize({options:t})}function dR(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ot);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function pR(e,t,n){const r=Wu(e);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=bg(t),{host:o,port:a}=gR(t),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||mR()}function bg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function gR(e){const t=bg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:rh(o)}}}function rh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function mR(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(t){return it("not implemented")}_linkToIdToken(t,n){return it("not implemented")}_getReauthenticationResolver(t){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(e,t){return VE(e,"POST","/v1/accounts:signInWithIdp",zu(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="http://localhost";class tn extends wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new tn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=ju(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Sn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Sn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Sn(t,n)}buildRequest(){const t={requestUri:vR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Nr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Sg{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Vr{constructor(){super("facebook.com")}static credential(t){return tn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Vr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return tn._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return tt.credentialFromTaggedObject(t)}static credentialFromError(t){return tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return tt.credential(n,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends Vr{constructor(){super("github.com")}static credential(t){return tn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Vr{constructor(){super("twitter.com")}static credential(t,n){return tn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await st._fromIdTokenResponse(t,r,i),o=ih(r);return new Dn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ih(r);return new Dn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ih(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Xe{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ui.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ui(t,n,r,i)}}function Ig(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ui._fromErrorAndOperation(e,s,t,r):s})}async function _R(e,t,n=!1){const r=await Tr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Dn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yR(e,t,n=!1){const{auth:r}=e;if(Rt(r.app))return Promise.reject(Xt(r));const i="reauthenticate";try{const s=await Tr(e,Ig(r,i,t,e),n);C(s.idToken,r,"internal-error");const o=Hu(s.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(e.uid===a,r,"user-mismatch"),Dn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bR(e,t,n=!1){if(Rt(e.app))return Promise.reject(Xt(e));const r="signIn",i=await Ig(e,r,t),s=await Dn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function wR(e,t,n,r){return ht(e).onIdTokenChanged(t,n,r)}function SR(e,t,n){return ht(e).beforeAuthStateChanged(t,n)}const ji="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ji,"1"),this.storage.removeItem(ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(){const e=ge();return Vu(e)||Ss(e)}const ER=1e3,RR=10;class Rg extends Eg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=IR()&&nR(),this.fallbackToPolling=_g(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tR()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,RR):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},ER)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Rg.type="LOCAL";const TR=Rg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg extends Eg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Tg.type="SESSION";const Ag=Tg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Is(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await AR(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Is.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=Gu("",20);i.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(l){const d=l;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function kR(e){Ke().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function PR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xR(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function OR(){return Cg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="firebaseLocalStorageDb",NR=1,Fi="firebaseLocalStorage",Pg="fbase_key";class Wr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Es(e,t){return e.transaction([Fi],t?"readwrite":"readonly").objectStore(Fi)}function DR(){const e=indexedDB.deleteDatabase(kg);return new Wr(e).toPromise()}function pa(){const e=indexedDB.open(kg,NR);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Fi,{keyPath:Pg})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Fi)?t(r):(r.close(),await DR(),t(await pa()))})})}async function sh(e,t,n){const r=Es(e,!0).put({[Pg]:t,value:n});return new Wr(r).toPromise()}async function $R(e,t){const n=Es(e,!1).get(t),r=await new Wr(n).toPromise();return r===void 0?null:r.value}function oh(e,t){const n=Es(e,!0).delete(t);return new Wr(n).toPromise()}const MR=800,LR=3;class xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pa(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>LR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Is._getInstance(OR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await PR(),!this.activeServiceWorker)return;this.sender=new CR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||xR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await pa();return await sh(t,ji,"1"),await oh(t,ji),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sh(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>$R(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>oh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Es(i,!1).getAll();return new Wr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xg.type="LOCAL";const UR=xg;new Hr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(e,t){return t?ot(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends wg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Sn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Sn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Sn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function FR(e){return bR(e.auth,new Ku(e),e.bypassAuthState)}function BR(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),yR(n,new Ku(e),e.bypassAuthState)}async function zR(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),_R(n,new Ku(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return FR;case"linkViaPopup":case"linkViaRedirect":return zR;case"reauthViaPopup":case"reauthViaRedirect":return BR;default:ct(this.auth,"internal-error")}}resolve(t){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=new Hr(2e3,1e4);class vn extends Og{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,vn.currentPopupAction&&vn.currentPopupAction.cancel(),vn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return C(t,this.auth,"internal-error"),t}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const t=Gu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,HR.get())};t()}}vn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR="pendingRedirect",mi=new Map;class WR extends Og{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=mi.get(this.auth._key());if(!t){try{const r=await qR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}mi.set(this.auth._key(),t)}return this.bypassAuthState||mi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qR(e,t){const n=JR(t),r=KR(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function GR(e,t){mi.set(e._key(),t)}function KR(e){return ot(e._redirectPersistence)}function JR(e){return gi(VR,e.config.apiKey,e.name)}async function XR(e,t,n=!1){if(Rt(e.app))return Promise.reject(Xt(e));const r=Wu(e),i=jR(r,t),o=await new WR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=10*60*1e3;class QR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ZR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Ng(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ge(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=YR&&this.cachedEventUids.clear(),this.cachedEventUids.has(ah(t))}saveEventToCache(t){this.cachedEventUids.add(ah(t)),this.lastProcessedEventTime=Date.now()}}function ah(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Ng({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ZR(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ng(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(e,t={}){return zn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,n2=/^https?/;async function r2(e){if(e.config.emulator)return;const{authorizedDomains:t}=await e2(e);for(const n of t)try{if(i2(n))return}catch{}ct(e,"unauthorized-domain")}function i2(e){const t=fa(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!n2.test(n))return!1;if(t2.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s2=new Hr(3e4,6e4);function uh(){const e=Ke().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function o2(e){return new Promise((t,n)=>{var r,i,s;function o(){uh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uh(),n(Ge(e,"network-request-failed"))},timeout:s2.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=hR("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(Ge(e,"network-request-failed"))},cR(`${lR()}?onload=${a}`).catch(u=>n(u))}}).catch(t=>{throw vi=null,t})}let vi=null;function a2(e){return vi=vi||o2(e),vi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=new Hr(5e3,15e3),c2="__/auth/iframe",l2="emulator/auth/iframe",h2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},f2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d2(e){const t=e.config;C(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Bu(t,l2):`https://${e.config.authDomain}/${c2}`,r={apiKey:t.apiKey,appName:e.name,v:on},i=f2.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Nr(r).slice(1)}`}async function p2(e){const t=await a2(e),n=Ke().gapi;return C(n,e,"internal-error"),t.open({where:document.body,url:d2(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:h2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ge(e,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},u2.get());function u(){Ke().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m2=500,v2=600,_2="_blank",y2="http://localhost";class ch{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b2(e,t,n,r=m2,i=v2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},g2),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ge().toLowerCase();n&&(a=dg(c)?_2:n),fg(c)&&(t=t||y2,u.scrollbars="yes");const h=Object.entries(u).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(eR(c)&&a!=="_self")return w2(t||"",a),new ch(null);const l=window.open(t||"",a,h);C(l,e,"popup-blocked");try{l.focus()}catch{}return new ch(l)}function w2(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S2="__/auth/handler",I2="emulator/auth/handler",E2=encodeURIComponent("fac");async function lh(e,t,n,r,i,s){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:on,eventId:i};if(t instanceof Sg){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Bb(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,l]of Object.entries(s||{}))o[h]=l}if(t instanceof Vr){const h=t.getScopes().filter(l=>l!=="");h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await e._getAppCheckToken(),c=u?`#${E2}=${encodeURIComponent(u)}`:"";return`${R2(e)}?${Nr(a).slice(1)}${c}`}function R2({config:e}){return e.emulator?Bu(e,I2):`https://${e.authDomain}/${S2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="webStorageSupport";class T2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ag,this._completeRedirectFn=XR,this._overrideRedirectResult=GR}async _openPopup(t,n,r,i){var s;lt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lh(t,n,r,fa(),i);return b2(t,o,Gu())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await lh(t,n,r,fa(),i);return kR(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(lt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await p2(t),r=new QR(t);return n.register("authEvent",i=>(C(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(mo,{type:mo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mo];o!==void 0&&n(!!o),ct(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=r2(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return _g()||Vu()||Ss()}}const A2=T2;var hh="@firebase/auth",fh="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k2(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function P2(e){Zt(new Nt("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yg(e)},c=new aR(r,i,s,u);return dR(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Zt(new Nt("auth-internal",t=>{const n=Wu(t.getProvider("auth").getImmediate());return(r=>new C2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qe(hh,fh,k2(e)),qe(hh,fh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x2=5*60,O2=$d("authIdTokenMaxAge")||x2;let dh=null;const N2=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>O2)return;const i=n==null?void 0:n.token;dh!==i&&(dh=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D2(e=au()){const t=as(e,"auth");if(t.isInitialized())return t.getImmediate();const n=fR(e,{popupRedirectResolver:A2,persistence:[UR,TR,Ag]}),r=$d("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=N2(s.toString());SR(n,o,()=>o(n.currentUser)),wR(n,a=>o(a))}}const i=Od("auth");return i&&pR(n,`http://${i}`),n}function $2(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}uR({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Ge("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",$2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});P2("Browser");const M2={apiKey:"AIzaSyBGT0XiGjtZOVnpypbOOtzRvoKXMX8OO7g",authDomain:"drive-51b0d.firebaseapp.com",projectId:"drive-51b0d",storageBucket:"drive-51b0d.appspot.com",messagingSenderId:"424766310266",appId:"1:424766310266:web:05dc724d70a7165f1338c3",measurementId:"G-R0C58RN444"},Ju=jd(M2);bI(Ju);const L2=NE(Ju);D2(Ju);new tt;const U2=q.div`
    width:300px;
    padding: 0 10px;
    padding-top: 10px;
    height:100%;
`,j2=q.div`
    button {
        background: transparent;
        border: 1px solid lightgray;
        display: flex;
        align-items: center;
        border-radius: 40px;
        padding:3px 6px;
        box-shadow:2px 2px 2px #ccc;
        margin-left: 20px;
        span {
            font-size: 14px;
            margin-right: 20px;
            margin-left: 10px;
        }
    }
`,ph=q.div`
    margin-top: 10px;
    .progress_bar {
        padding: 0px 20px;
    }
    .progress_bar span {
        display: block;
        color:#333;
        font-size: 13px;
    }
`,Ut=q.div`
    display: flex;
    align-items: center;
    padding: 8px 20px;
    border-radius: 0px 20px 20px 0px;
    &:hover{
        background: whitesmoke;
        cursor: pointer;
    }
    svg.MuiSvgIcon-root {
        color:rgb(78, 78, 78);
    }
    span {
        margin-left: 15px;
        font-size: 13px;
        font-weight: 500;
        color:rgb(78, 78, 78)
    }
`,F2=q.div`
    top: 50%;
    background-color: #fff;
    width: 500px;
    margin: 0px auto;
    position: relative;
    transform: translateY(-50%);
    padding: 10px;
    border-radius: 10px;
`,B2=q.div`
    text-align: center;
    border-bottom: 1px solid lightgray;
    height: 40px;
`,z2=q.div`
    input.modal__submit {
        width: 100%;
        background: darkmagenta;
        padding: 10px 20px;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 16px;
        border: 0;
        outline: 0;
        border-radius: 5px;
        cursor: pointer;
        margin-top:20px
    }
    input.modal__file {
        background: whitesmoke;
        padding: 20px;
        color: #000;
        display: block;
        margin-top:20px
    }
`,H2=q.p`
    background: green;
    color: #fff;
    margin: 20px;
    text-align: center;
    padding: 10px;
    letter-spacing: 1px;
`,V2=()=>{const[e,t]=Ee(!1),[n,r]=Ee(!1),[i,s]=Ee(null),o=u=>{u.target.files[0]&&(s(u.target.files[0]),console.log(i))};return m(_e,{children:[m(L1,{open:e,onClose:()=>t(!1),children:m(F2,{children:m("form",{onSubmit:u=>{u.preventDefault(),r(!0);const c=OE(L2,"uploads/"+i.name);xE(c,i).then(h=>{console.log("uploaded file")})},children:[m(B2,{children:m("h3",{children:"Select file you want to upload"})}),m(z2,{children:n?m(H2,{children:"Uploading..."}):m(_e,{children:[m("input",{type:"file",className:"modal__file",onChange:o}),m("input",{type:"submit",className:"modal__submit"})]})})]})})}),m(U2,{children:[m(j2,{children:m("button",{onClick:()=>t(!0),children:[m("img",{src:"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E"}),m("span",{children:"New"})]})}),m(ph,{children:[m(Ut,{children:[m(Sd,{}),m("span",{children:"My Drive"})]}),m(Ut,{children:[m(Id,{}),m("span",{children:"Computers"})]}),m(Ut,{children:[m(Ed,{}),m("span",{children:"Shared with me"})]}),m(Ut,{children:[m(Rd,{}),m("span",{children:"Recent"})]}),m(Ut,{children:[m(Td,{}),m("span",{children:"Starred"})]}),m(Ut,{children:[m(Ad,{}),m("span",{children:"Trash"})]})]}),m("hr",{}),m(ph,{children:[m(Ut,{children:[m(Cd,{}),m("span",{children:"Storage"})]}),m("div",{className:"progress_bar",children:[m("progress",{size:"tiny",value:"50",max:"100"}),m("span",{children:"105 GB  of 200 GB used"})]})]})]})]})};var Xu={},W2=se,q2=oe;Object.defineProperty(Xu,"__esModule",{value:!0});var Dg=Xu.default=void 0,G2=q2(ae),K2=W2(ue()),J2=(0,K2.default)(G2.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");Dg=Xu.default=J2;var Yu={},X2=se,Y2=oe;Object.defineProperty(Yu,"__esModule",{value:!0});var $g=Yu.default=void 0,Q2=Y2(ae),Z2=X2(ue()),eT=(0,Z2.default)(Q2.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"List");$g=Yu.default=eT;var Qu={},tT=se,nT=oe;Object.defineProperty(Qu,"__esModule",{value:!0});var Mg=Qu.default=void 0,rT=nT(ae),iT=tT(ue()),sT=(0,iT.default)(rT.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");Mg=Qu.default=sT;var Zu={},oT=se,aT=oe;Object.defineProperty(Zu,"__esModule",{value:!0});var _i=Zu.default=void 0,uT=aT(ae),cT=oT(ue()),lT=(0,cT.default)(uT.createElement("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}),"InsertDriveFile");_i=Zu.default=lT;var ec={},hT=se,fT=oe;Object.defineProperty(ec,"__esModule",{value:!0});var Lg=ec.default=void 0,dT=fT(ae),pT=hT(ue()),gT=(0,pT.default)(dT.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");Lg=ec.default=gT;const mT=q.div`
    flex: 1 1;
    padding: 12px 20px;
    background-color:white;
    border-radius:25px;
`,vT=q.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    height: 40px;
    .headerLeft {
        display: flex;
        align-items: center;
    }
    .headerRight svg {
        margin:0px 10px;
    }
`,_T=q.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`,gh=q.div`
    text-align: center;
    border: 1px solid rgb(204 204 204 / 46%);
    margin: 10px;
    min-width: 200px;
    padding: 10px 0px 0px 0px;
    border-radius: 5px;
    svg {
        font-size: 60px;
        color:gray
    }
    p {
        border-top: 1px solid #ccc;
        margin-top: 5px;
        font-size: 12px;
        background: whitesmoke;
        padding: 10px 0px;
    }
`,mh=q.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 10px;
    p {
        display: flex;
        align-items: center;
        font-size: 13px;
        b {
            display: flex;
            align-items: center;
        }
        svg {
            font-size: 22px;
            margin:10px
        }
    }
`,yT=()=>{const[e,t]=Ee([]),n=(r,i=2)=>{if(r===0)return"0 Bytes";const s=1024,o=i<0?0:i,a=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],u=Math.floor(Math.log(r)/Math.log(s));return parseFloat((r/Math.pow(s,u)).toFixed(o))+" "+a[u]};return m(mT,{children:[m(vT,{children:[m("div",{className:"headerLeft",children:[m("p",{children:"My Drive"}),m(Dg,{})]}),m("div",{className:"headerRight",children:[m($g,{}),m(Mg,{})]})]}),m("div",{children:[m(_T,{children:[e.map(r=>m(gh,{children:[m(_i,{}),m("p",{children:r.data.filename})]},r.id)),m(gh,{children:[m(_i,{}),m("p",{children:"emoji.js"})]})]}),m("div",{children:[m(mh,{children:[m("p",{children:m("b",{children:["Name ",m(Lg,{})]})}),m("p",{children:m("b",{children:"Owner"})}),m("p",{children:m("b",{children:"Last Modified"})}),m("p",{children:m("b",{children:"File Size"})})]}),e.map(r=>{var i;return m(mh,{children:[m("a",{href:r.data.fileURL,target:"_blank",children:m("p",{children:[m(_i,{})," ",r.data.filename]})}),m("p",{children:"Owner "}),m("p",{children:new Date(((i=r.data.timestamp)==null?void 0:i.seconds)*1e3).toUTCString()}),m("p",{children:n(r.data.size)})]},r.id)})]})]})]})};function bT(){return m(wT,{children:[m(z1,{}),m(ST,{children:[m(V2,{}),m(yT,{})]})]})}const wT=q.div`
height:100%;
`,ST=q.div`
display:flex;
`;function IT(){return m(_e,{children:[m(ET,{}),m(Df,{children:[m(Mc,{path:"/",component:Rv}),m(Mc,{path:"/mydrive",component:bT})]})]})}const ET=dv`
*{
margin:0;
padding:0;
box-sizing:border-box;
}
body{
font-family: "DM Sans", sans-serif;
font-optical-sizing: auto;
background-color:#F8FAFD;
width:100%;
height:100vh;
}
`;In(m(IT,{}),document.getElementById("app"));
