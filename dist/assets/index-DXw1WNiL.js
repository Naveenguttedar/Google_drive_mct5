(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Wi,B,Lp,bn,Kh,$p,Ru,Lc,Su,Au,Up,Ri={},Fp=[],k0=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Co=Array.isArray;function Ot(t,e){for(var n in e)t[n]=e[n];return t}function Bp(t){var e=t.parentNode;e&&e.removeChild(t)}function Y(t,e,n){var r,i,s,o={};for(s in e)s=="key"?r=e[s]:s=="ref"?i=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?Wi.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(s in t.defaultProps)o[s]===void 0&&(o[s]=t.defaultProps[s]);return hi(t,o,r,i,null)}function hi(t,e,n,r,i){var s={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++Lp,__i:-1,__u:0};return i==null&&B.vnode!=null&&B.vnode(s),s}function jp(){return{current:null}}function Be(t){return t.children}function et(t,e){this.props=t,this.context=e}function $n(t,e){if(e==null)return t.__?$n(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?$n(t):null}function zp(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return zp(t)}}function Pu(t){(!t.__d&&(t.__d=!0)&&bn.push(t)&&!Ys.__r++||Kh!==B.debounceRendering)&&((Kh=B.debounceRendering)||$p)(Ys)}function Ys(){var t,e,n,r,i,s,o,a;for(bn.sort(Ru);t=bn.shift();)t.__d&&(e=bn.length,r=void 0,s=(i=(n=t).__v).__e,o=[],a=[],n.__P&&((r=Ot({},i)).__v=i.__v+1,B.vnode&&B.vnode(r),$c(n.__P,r,i,n.__n,n.__P.ownerSVGElement!==void 0,32&i.__u?[s]:null,o,s??$n(i),!!(32&i.__u),a),r.__v=i.__v,r.__.__k[r.__i]=r,Wp(o,r,a),r.__e!=s&&zp(r)),bn.length>e&&bn.sort(Ru));Ys.__r=0}function qp(t,e,n,r,i,s,o,a,u,c,l){var h,f,d,p,g,m=r&&r.__k||Fp,w=e.length;for(n.__d=u,x0(n,e,m),u=n.__d,h=0;h<w;h++)(d=n.__k[h])!=null&&typeof d!="boolean"&&typeof d!="function"&&(f=d.__i===-1?Ri:m[d.__i]||Ri,d.__i=h,$c(t,d,f,i,s,o,a,u,c,l),p=d.__e,d.ref&&f.ref!=d.ref&&(f.ref&&Uc(f.ref,null,d),l.push(d.ref,d.__c||p,d)),g==null&&p!=null&&(g=p),65536&d.__u||f.__k===d.__k?(u&&!u.isConnected&&(u=$n(f)),u=Hp(d,u,t)):typeof d.type=="function"&&d.__d!==void 0?u=d.__d:p&&(u=p.nextSibling),d.__d=void 0,d.__u&=-196609);n.__d=u,n.__e=g}function x0(t,e,n){var r,i,s,o,a,u=e.length,c=n.length,l=c,h=0;for(t.__k=[],r=0;r<u;r++)o=r+h,(i=t.__k[r]=(i=e[r])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?hi(null,i,null,null,null):Co(i)?hi(Be,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?hi(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=t,i.__b=t.__b+1,a=O0(i,n,o,l),i.__i=a,s=null,a!==-1&&(l--,(s=n[a])&&(s.__u|=131072)),s==null||s.__v===null?(a==-1&&h--,typeof i.type!="function"&&(i.__u|=65536)):a!==o&&(a===o+1?h++:a>o?l>u-o?h+=a-o:h--:a<o?a==o-1&&(h=a-o):h=0,a!==r+h&&(i.__u|=65536))):(s=n[o])&&s.key==null&&s.__e&&!(131072&s.__u)&&(s.__e==t.__d&&(t.__d=$n(s)),Cu(s,s,!1),n[o]=null,l--);if(l)for(r=0;r<c;r++)(s=n[r])!=null&&!(131072&s.__u)&&(s.__e==t.__d&&(t.__d=$n(s)),Cu(s,s))}function Hp(t,e,n){var r,i;if(typeof t.type=="function"){for(r=t.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=t,e=Hp(r[i],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function ut(t,e){return e=e||[],t==null||typeof t=="boolean"||(Co(t)?t.some(function(n){ut(n,e)}):e.push(t)),e}function O0(t,e,n,r){var i=t.key,s=t.type,o=n-1,a=n+1,u=e[n];if(u===null||u&&i==u.key&&s===u.type&&!(131072&u.__u))return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;o>=0||a<e.length;){if(o>=0){if((u=e[o])&&!(131072&u.__u)&&i==u.key&&s===u.type)return o;o--}if(a<e.length){if((u=e[a])&&!(131072&u.__u)&&i==u.key&&s===u.type)return a;a++}}return-1}function Qh(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||k0.test(e)?n:n+"px"}function ys(t,e,n,r,i){var s;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||Qh(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||Qh(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+s]=n,n?r?n.u=r.u:(n.u=Lc,t.addEventListener(e,s?Au:Su,s)):t.removeEventListener(e,s?Au:Su,s);else{if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function Jh(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=Lc++;else if(e.t<n.u)return;return n(B.event?B.event(e):e)}}}function $c(t,e,n,r,i,s,o,a,u,c){var l,h,f,d,p,g,m,w,T,I,S,k,A,P,W,V=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),s=[a=e.__e=n.__e]),(l=B.__b)&&l(e);e:if(typeof V=="function")try{if(w=e.props,T=(l=V.contextType)&&r[l.__c],I=l?T?T.props.value:l.__:r,n.__c?m=(h=e.__c=n.__c).__=h.__E:("prototype"in V&&V.prototype.render?e.__c=h=new V(w,I):(e.__c=h=new et(w,I),h.constructor=V,h.render=N0),T&&T.sub(h),h.props=w,h.state||(h.state={}),h.context=I,h.__n=r,f=h.__d=!0,h.__h=[],h._sb=[]),h.__s==null&&(h.__s=h.state),V.getDerivedStateFromProps!=null&&(h.__s==h.state&&(h.__s=Ot({},h.__s)),Ot(h.__s,V.getDerivedStateFromProps(w,h.__s))),d=h.props,p=h.state,h.__v=e,f)V.getDerivedStateFromProps==null&&h.componentWillMount!=null&&h.componentWillMount(),h.componentDidMount!=null&&h.__h.push(h.componentDidMount);else{if(V.getDerivedStateFromProps==null&&w!==d&&h.componentWillReceiveProps!=null&&h.componentWillReceiveProps(w,I),!h.__e&&(h.shouldComponentUpdate!=null&&h.shouldComponentUpdate(w,h.__s,I)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(h.props=w,h.state=h.__s,h.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(le){le&&(le.__=e)}),S=0;S<h._sb.length;S++)h.__h.push(h._sb[S]);h._sb=[],h.__h.length&&o.push(h);break e}h.componentWillUpdate!=null&&h.componentWillUpdate(w,h.__s,I),h.componentDidUpdate!=null&&h.__h.push(function(){h.componentDidUpdate(d,p,g)})}if(h.context=I,h.props=w,h.__P=t,h.__e=!1,k=B.__r,A=0,"prototype"in V&&V.prototype.render){for(h.state=h.__s,h.__d=!1,k&&k(e),l=h.render(h.props,h.state,h.context),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[]}else do h.__d=!1,k&&k(e),l=h.render(h.props,h.state,h.context),h.state=h.__s;while(h.__d&&++A<25);h.state=h.__s,h.getChildContext!=null&&(r=Ot(Ot({},r),h.getChildContext())),f||h.getSnapshotBeforeUpdate==null||(g=h.getSnapshotBeforeUpdate(d,p)),qp(t,Co(W=l!=null&&l.type===Be&&l.key==null?l.props.children:l)?W:[W],e,n,r,i,s,o,a,u,c),h.base=e.__e,e.__u&=-161,h.__h.length&&o.push(h),m&&(h.__E=h.__=null)}catch(le){e.__v=null,u||s!=null?(e.__e=a,e.__u|=u?160:32,s[s.indexOf(a)]=null):(e.__e=n.__e,e.__k=n.__k),B.__e(le,e,n)}else s==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=D0(n.__e,e,n,r,i,s,o,u,c);(l=B.diffed)&&l(e)}function Wp(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)Uc(n[r],n[++r],n[++r]);B.__c&&B.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(s){s.call(i)})}catch(s){B.__e(s,i.__v)}})}function D0(t,e,n,r,i,s,o,a,u){var c,l,h,f,d,p,g,m=n.props,w=e.props,T=e.type;if(T==="svg"&&(i=!0),s!=null){for(c=0;c<s.length;c++)if((d=s[c])&&"setAttribute"in d==!!T&&(T?d.localName===T:d.nodeType===3)){t=d,s[c]=null;break}}if(t==null){if(T===null)return document.createTextNode(w);t=i?document.createElementNS("http://www.w3.org/2000/svg",T):document.createElement(T,w.is&&w),s=null,a=!1}if(T===null)m===w||a&&t.data===w||(t.data=w);else{if(s=s&&Wi.call(t.childNodes),m=n.props||Ri,!a&&s!=null)for(m={},c=0;c<t.attributes.length;c++)m[(d=t.attributes[c]).name]=d.value;for(c in m)d=m[c],c=="children"||(c=="dangerouslySetInnerHTML"?h=d:c==="key"||c in w||ys(t,c,null,d,i));for(c in w)d=w[c],c=="children"?f=d:c=="dangerouslySetInnerHTML"?l=d:c=="value"?p=d:c=="checked"?g=d:c==="key"||a&&typeof d!="function"||m[c]===d||ys(t,c,d,m[c],i);if(l)a||h&&(l.__html===h.__html||l.__html===t.innerHTML)||(t.innerHTML=l.__html),e.__k=[];else if(h&&(t.innerHTML=""),qp(t,Co(f)?f:[f],e,n,r,i&&T!=="foreignObject",s,o,s?s[0]:n.__k&&$n(n,0),a,u),s!=null)for(c=s.length;c--;)s[c]!=null&&Bp(s[c]);a||(c="value",p!==void 0&&(p!==t[c]||T==="progress"&&!p||T==="option"&&p!==m[c])&&ys(t,c,p,m[c],!1),c="checked",g!==void 0&&g!==t[c]&&ys(t,c,g,m[c],!1))}return t}function Uc(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){B.__e(r,n)}}function Cu(t,e,n){var r,i;if(B.unmount&&B.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Uc(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(s){B.__e(s,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Cu(r[i],e,n||typeof t.type!="function");n||t.__e==null||Bp(t.__e),t.__c=t.__=t.__e=t.__d=void 0}function N0(t,e,n){return this.constructor(t,n)}function yr(t,e,n){var r,i,s,o;B.__&&B.__(t,e),i=(r=typeof n=="function")?null:n&&n.__k||e.__k,s=[],o=[],$c(e,t=(!r&&n||e).__k=Y(Be,null,[t]),i||Ri,Ri,e.ownerSVGElement!==void 0,!r&&n?[n]:i?null:e.firstChild?Wi.call(e.childNodes):null,s,!r&&n?n:i?i.__e:e.firstChild,r,o),Wp(s,t,o)}function Gp(t,e){yr(t,e,Gp)}function Kp(t,e,n){var r,i,s,o,a=Ot({},t.props);for(s in t.type&&t.type.defaultProps&&(o=t.type.defaultProps),e)s=="key"?r=e[s]:s=="ref"?i=e[s]:a[s]=e[s]===void 0&&o!==void 0?o[s]:e[s];return arguments.length>2&&(a.children=arguments.length>3?Wi.call(arguments,2):n),hi(t.type,a,r||t.key,i||t.ref,null)}function Fc(t,e){var n={__c:e="__cC"+Up++,__:t,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,s;return this.getChildContext||(i=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&i.some(function(a){a.__e=!0,Pu(a)})},this.sub=function(o){i.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){i.splice(i.indexOf(o),1),a&&a.call(o)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Wi=Fp.slice,B={__e:function(t,e,n,r){for(var i,s,o;e=e.__;)if((i=e.__c)&&!i.__)try{if((s=i.constructor)&&s.getDerivedStateFromError!=null&&(i.setState(s.getDerivedStateFromError(t)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),o=i.__d),o)return i.__E=i}catch(a){t=a}throw t}},Lp=0,et.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Ot({},this.state),typeof t=="function"&&(t=t(Ot({},n),this.props)),t&&Ot(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Pu(this))},et.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Pu(this))},et.prototype.render=Be,bn=[],$p=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ru=function(t,e){return t.__v.__b-e.__v.__b},Ys.__r=0,Lc=0,Su=Jh(!1),Au=Jh(!0),Up=0;var Ne=function(){return Ne=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ne.apply(this,arguments)};function Si(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ut,J,Ca,Yh,wr=0,Qp=[],Ms=[],se=B,Xh=se.__b,Zh=se.__r,ed=se.diffed,td=se.__c,nd=se.unmount,rd=se.__;function Wn(t,e){se.__h&&se.__h(J,t,wr||e),wr=0;var n=J.__H||(J.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:Ms}),n.__[t]}function We(t){return wr=1,Bc(Zp,t)}function Bc(t,e,n){var r=Wn(Ut++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):Zp(void 0,e),function(a){var u=r.__N?r.__N[0]:r.__[0],c=r.t(u,a);u!==c&&(r.__N=[c,r.__[1]],r.__c.setState({}))}],r.__c=J,!J.u)){var i=function(a,u,c){if(!r.__c.__H)return!0;var l=r.__c.__H.__.filter(function(f){return!!f.__c});if(l.every(function(f){return!f.__N}))return!s||s.call(this,a,u,c);var h=!1;return l.forEach(function(f){if(f.__N){var d=f.__[0];f.__=f.__N,f.__N=void 0,d!==f.__[0]&&(h=!0)}}),!(!h&&r.__c.props===a)&&(!s||s.call(this,a,u,c))};J.u=!0;var s=J.shouldComponentUpdate,o=J.componentWillUpdate;J.componentWillUpdate=function(a,u,c){if(this.__e){var l=s;s=void 0,i(a,u,c),s=l}o&&o.call(this,a,u,c)},J.shouldComponentUpdate=i}return r.__N||r.__}function tt(t,e){var n=Wn(Ut++,3);!se.__s&&zc(n.__H,e)&&(n.__=t,n.i=e,J.__H.__h.push(n))}function Gn(t,e){var n=Wn(Ut++,4);!se.__s&&zc(n.__H,e)&&(n.__=t,n.i=e,J.__h.push(n))}function ze(t){return wr=5,Gi(function(){return{current:t}},[])}function Jp(t,e,n){wr=6,Gn(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function Gi(t,e){var n=Wn(Ut++,7);return zc(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function hn(t,e){return wr=8,Gi(function(){return t},e)}function jc(t){var e=J.context[t.__c],n=Wn(Ut++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(J)),e.props.value):t.__}function Yp(t,e){se.useDebugValue&&se.useDebugValue(e?e(t):t)}function V0(t){var e=Wn(Ut++,10),n=We();return e.__=t,J.componentDidCatch||(J.componentDidCatch=function(r,i){e.__&&e.__(r,i),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Xp(){var t=Wn(Ut++,11);if(!t.__){for(var e=J.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function M0(){for(var t;t=Qp.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Ls),t.__H.__h.forEach(ku),t.__H.__h=[]}catch(e){t.__H.__h=[],se.__e(e,t.__v)}}se.__b=function(t){J=null,Xh&&Xh(t)},se.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),rd&&rd(t,e)},se.__r=function(t){Zh&&Zh(t),Ut=0;var e=(J=t.__c).__H;e&&(Ca===J?(e.__h=[],J.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Ms,n.__N=n.i=void 0})):(e.__h.forEach(Ls),e.__h.forEach(ku),e.__h=[],Ut=0)),Ca=J},se.diffed=function(t){ed&&ed(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Qp.push(e)!==1&&Yh===se.requestAnimationFrame||((Yh=se.requestAnimationFrame)||L0)(M0)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Ms&&(n.__=n.__V),n.i=void 0,n.__V=Ms})),Ca=J=null},se.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Ls),n.__h=n.__h.filter(function(r){return!r.__||ku(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],se.__e(r,n.__v)}}),td&&td(t,e)},se.unmount=function(t){nd&&nd(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Ls(r)}catch(i){e=i}}),n.__H=void 0,e&&se.__e(e,n.__v))};var id=typeof requestAnimationFrame=="function";function L0(t){var e,n=function(){clearTimeout(r),id&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);id&&(e=requestAnimationFrame(n))}function Ls(t){var e=J,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),J=e}function ku(t){var e=J;t.__c=t.__(),J=e}function zc(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function Zp(t,e){return typeof e=="function"?e(t):e}function eg(t,e){for(var n in e)t[n]=e[n];return t}function xu(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function Xs(t,e){this.props=t,this.context=e}function tg(t,e){function n(i){var s=this.props.ref,o=s==i.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,i)||!o:xu(this.props,i)}function r(i){return this.shouldComponentUpdate=n,Y(t,i)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Xs.prototype=new et).isPureReactComponent=!0,Xs.prototype.shouldComponentUpdate=function(t,e){return xu(this.props,t)||xu(this.state,e)};var sd=B.__b;B.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),sd&&sd(t)};var $0=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Kn(t){function e(n){var r=eg({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=$0,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var od=function(t,e){return t==null?null:ut(ut(t).map(e))},ng={map:od,forEach:od,count:function(t){return t?ut(t).length:0},only:function(t){var e=ut(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:ut},U0=B.__e;B.__e=function(t,e,n,r){if(t.then){for(var i,s=e;s=s.__;)if((i=s.__c)&&i.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),i.__c(t,e)}U0(t,e,n,r)};var ad=B.unmount;function rg(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=eg({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return rg(r,e,n)})),t}function ig(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return ig(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function di(){this.__u=0,this.t=null,this.__b=null}function sg(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function og(t){var e,n,r;function i(s){if(e||(e=t()).then(function(o){n=o.default||o},function(o){r=o}),r)throw r;if(!n)throw e;return Y(n,s)}return i.displayName="Lazy",i.__f=!0,i}function ur(){this.u=null,this.o=null}B.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),ad&&ad(t)},(di.prototype=new et).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=sg(r.__v),s=!1,o=function(){s||(s=!0,n.__R=null,i?i(a):a())};n.__R=o;var a=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=ig(u,u.__c.__P,u.__c.__O)}var c;for(r.setState({__a:r.__b=null});c=r.t.pop();)c.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(o,o)},di.prototype.componentWillUnmount=function(){this.t=[]},di.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=rg(this.__b,n,r.__O=r.__P)}this.__b=null}var i=e.__a&&Y(Be,null,t.fallback);return i&&(i.__u&=-33),[Y(Be,null,e.__a?null:t.children),i]};var ud=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function F0(t){return this.getChildContext=function(){return t.context},t.children}function B0(t){var e=this,n=t.i;e.componentWillUnmount=function(){yr(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),yr(Y(F0,{context:e.context},t.__v),e.l)}function qc(t,e){var n=Y(B0,{__v:t,i:e});return n.containerInfo=e,n}(ur.prototype=new et).__a=function(t){var e=this,n=sg(e.__v),r=e.o.get(t);return r[0]++,function(i){var s=function(){e.props.revealOrder?(r.push(i),ud(e,t,r)):i()};n?n(s):s()}},ur.prototype.render=function(t){this.u=null,this.o=new Map;var e=ut(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},ur.prototype.componentDidUpdate=ur.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){ud(t,n,e)})};var ag=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,j0=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,z0=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,q0=/[A-Z0-9]/g,H0=typeof document<"u",W0=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function ug(t,e,n){return e.__k==null&&(e.textContent=""),yr(t,e),typeof n=="function"&&n(),t?t.__c:null}function cg(t,e,n){return Gp(t,e),typeof n=="function"&&n(),t?t.__c:null}et.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(et.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var cd=B.event;function G0(){}function K0(){return this.cancelBubble}function Q0(){return this.defaultPrevented}B.event=function(t){return cd&&(t=cd(t)),t.persist=G0,t.isPropagationStopped=K0,t.isDefaultPrevented=Q0,t.nativeEvent=t};var Hc,J0={enumerable:!1,configurable:!0,get:function(){return this.class}},ld=B.vnode;B.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,i={};for(var s in n){var o=n[s];if(!(s==="value"&&"defaultValue"in n&&o==null||H0&&s==="children"&&r==="noscript"||s==="class"||s==="className")){var a=s.toLowerCase();s==="defaultValue"&&"value"in n&&n.value==null?s="value":s==="download"&&o===!0?o="":a==="translate"&&o==="no"?o=!1:a==="ondoubleclick"?s="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||W0(n.type)?a==="onfocus"?s="onfocusin":a==="onblur"?s="onfocusout":z0.test(s)?s=a:r.indexOf("-")===-1&&j0.test(s)?s=s.replace(q0,"-$&").toLowerCase():o===null&&(o=void 0):a=s="oninput",a==="oninput"&&i[s=a]&&(s="oninputCapture"),i[s]=o}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=ut(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=ut(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",J0)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),e.props=i}(t),t.$$typeof=ag,ld&&ld(t)};var hd=B.__r;B.__r=function(t){hd&&hd(t),Hc=t.__c};var dd=B.diffed;B.diffed=function(t){dd&&dd(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),Hc=null};var lg={ReactCurrentDispatcher:{current:{readContext:function(t){return Hc.__n[t.__c].props.value}}}},Y0="17.0.2";function hg(t){return Y.bind(null,t)}function dn(t){return!!t&&t.$$typeof===ag}function dg(t){return dn(t)&&t.type===Be}function fg(t){return!!t&&!!t.displayName&&(typeof t.displayName=="string"||t.displayName instanceof String)&&t.displayName.startsWith("Memo(")}function Ki(t){return dn(t)?Kp.apply(null,arguments):t}function pg(t){return!!t.__k&&(yr(null,t),!0)}function $r(t){return t&&(t.base||t.nodeType===1&&t)||null}var gg=function(t,e){return t(e)},mg=function(t,e){return t(e)},_g=Be;function Wc(t){t()}function vg(t){return t}function yg(){return[!1,Wc]}var wg=Gn,Eg=dn;function Tg(t,e){var n=e(),r=We({h:{__:n,v:e}}),i=r[0].h,s=r[1];return Gn(function(){i.__=n,i.v=e,ka(i)&&s({h:i})},[t,n,e]),tt(function(){return ka(i)&&s({h:i}),t(function(){ka(i)&&s({h:i})})},[t]),n}function ka(t){var e,n,r=t.v,i=t.__;try{var s=r();return!((e=i)===(n=s)&&(e!==0||1/e==1/n)||e!=e&&n!=n)}catch{return!0}}var te={useState:We,useId:Xp,useReducer:Bc,useEffect:tt,useLayoutEffect:Gn,useInsertionEffect:wg,useTransition:yg,useDeferredValue:vg,useSyncExternalStore:Tg,startTransition:Wc,useRef:ze,useImperativeHandle:Jp,useMemo:Gi,useCallback:hn,useContext:jc,useDebugValue:Yp,version:"17.0.2",Children:ng,render:ug,hydrate:cg,unmountComponentAtNode:pg,createPortal:qc,createElement:Y,createContext:Fc,createFactory:hg,cloneElement:Ki,createRef:jp,Fragment:Be,isValidElement:dn,isElement:Eg,isFragment:dg,isMemo:fg,findDOMNode:$r,Component:et,PureComponent:Xs,memo:tg,forwardRef:Kn,flushSync:mg,unstable_batchedUpdates:gg,StrictMode:_g,Suspense:di,SuspenseList:ur,lazy:og,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:lg};const X0=Object.freeze(Object.defineProperty({__proto__:null,Children:ng,Component:et,Fragment:Be,PureComponent:Xs,StrictMode:_g,Suspense:di,SuspenseList:ur,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:lg,cloneElement:Ki,createContext:Fc,createElement:Y,createFactory:hg,createPortal:qc,createRef:jp,default:te,findDOMNode:$r,flushSync:mg,forwardRef:Kn,hydrate:cg,isElement:Eg,isFragment:dg,isMemo:fg,isValidElement:dn,lazy:og,memo:tg,render:ug,startTransition:Wc,unmountComponentAtNode:pg,unstable_batchedUpdates:gg,useCallback:hn,useContext:jc,useDebugValue:Yp,useDeferredValue:vg,useEffect:tt,useErrorBoundary:V0,useId:Xp,useImperativeHandle:Jp,useInsertionEffect:wg,useLayoutEffect:Gn,useMemo:Gi,useReducer:Bc,useRef:ze,useState:We,useSyncExternalStore:Tg,useTransition:yg,version:Y0},Symbol.toStringTag,{value:"Module"}));function Z0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ig(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Z="-ms-",fi="-moz-",G="-webkit-",bg="comm",ko="rule",Gc="decl",ew="@import",Rg="@keyframes",tw="@layer",Sg=Math.abs,Kc=String.fromCharCode,Ou=Object.assign;function nw(t,e){return ve(t,0)^45?(((e<<2^ve(t,0))<<2^ve(t,1))<<2^ve(t,2))<<2^ve(t,3):0}function Ag(t){return t.trim()}function kt(t,e){return(t=e.exec(t))?t[0]:t}function F(t,e,n){return t.replace(e,n)}function $s(t,e,n){return t.indexOf(e,n)}function ve(t,e){return t.charCodeAt(e)|0}function Er(t,e,n){return t.slice(e,n)}function ft(t){return t.length}function Pg(t){return t.length}function ii(t,e){return e.push(t),t}function rw(t,e){return t.map(e).join("")}function fd(t,e){return t.filter(function(n){return!kt(n,e)})}var xo=1,Tr=1,Cg=0,nt=0,fe=0,Ur="";function Oo(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:xo,column:Tr,length:o,return:"",siblings:a}}function Yt(t,e){return Ou(Oo("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function tr(t){for(;t.root;)t=Yt(t.root,{children:[t]});ii(t,t.siblings)}function iw(){return fe}function sw(){return fe=nt>0?ve(Ur,--nt):0,Tr--,fe===10&&(Tr=1,xo--),fe}function ct(){return fe=nt<Cg?ve(Ur,nt++):0,Tr++,fe===10&&(Tr=1,xo++),fe}function On(){return ve(Ur,nt)}function Us(){return nt}function Do(t,e){return Er(Ur,t,e)}function Du(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ow(t){return xo=Tr=1,Cg=ft(Ur=t),nt=0,[]}function aw(t){return Ur="",t}function xa(t){return Ag(Do(nt-1,Nu(t===91?t+2:t===40?t+1:t)))}function uw(t){for(;(fe=On())&&fe<33;)ct();return Du(t)>2||Du(fe)>3?"":" "}function cw(t,e){for(;--e&&ct()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return Do(t,Us()+(e<6&&On()==32&&ct()==32))}function Nu(t){for(;ct();)switch(fe){case t:return nt;case 34:case 39:t!==34&&t!==39&&Nu(fe);break;case 40:t===41&&Nu(t);break;case 92:ct();break}return nt}function lw(t,e){for(;ct()&&t+fe!==57;)if(t+fe===84&&On()===47)break;return"/*"+Do(e,nt-1)+"*"+Kc(t===47?t:ct())}function hw(t){for(;!Du(On());)ct();return Do(t,nt)}function dw(t){return aw(Fs("",null,null,null,[""],t=ow(t),0,[0],t))}function Fs(t,e,n,r,i,s,o,a,u){for(var c=0,l=0,h=o,f=0,d=0,p=0,g=1,m=1,w=1,T=0,I="",S=i,k=s,A=r,P=I;m;)switch(p=T,T=ct()){case 40:if(p!=108&&ve(P,h-1)==58){$s(P+=F(xa(T),"&","&\f"),"&\f",Sg(c?a[c-1]:0))!=-1&&(w=-1);break}case 34:case 39:case 91:P+=xa(T);break;case 9:case 10:case 13:case 32:P+=uw(p);break;case 92:P+=cw(Us()-1,7);continue;case 47:switch(On()){case 42:case 47:ii(fw(lw(ct(),Us()),e,n,u),u);break;default:P+="/"}break;case 123*g:a[c++]=ft(P)*w;case 125*g:case 59:case 0:switch(T){case 0:case 125:m=0;case 59+l:w==-1&&(P=F(P,/\f/g,"")),d>0&&ft(P)-h&&ii(d>32?gd(P+";",r,n,h-1,u):gd(F(P," ","")+";",r,n,h-2,u),u);break;case 59:P+=";";default:if(ii(A=pd(P,e,n,c,l,i,a,I,S=[],k=[],h,s),s),T===123)if(l===0)Fs(P,e,A,A,S,s,h,a,k);else switch(f===99&&ve(P,3)===110?100:f){case 100:case 108:case 109:case 115:Fs(t,A,A,r&&ii(pd(t,A,A,0,0,i,a,I,i,S=[],h,k),k),i,k,h,a,r?S:k);break;default:Fs(P,A,A,A,[""],k,0,a,k)}}c=l=d=0,g=w=1,I=P="",h=o;break;case 58:h=1+ft(P),d=p;default:if(g<1){if(T==123)--g;else if(T==125&&g++==0&&sw()==125)continue}switch(P+=Kc(T),T*g){case 38:w=l>0?1:(P+="\f",-1);break;case 44:a[c++]=(ft(P)-1)*w,w=1;break;case 64:On()===45&&(P+=xa(ct())),f=On(),l=h=ft(I=P+=hw(Us())),T++;break;case 45:p===45&&ft(P)==2&&(g=0)}}return s}function pd(t,e,n,r,i,s,o,a,u,c,l,h){for(var f=i-1,d=i===0?s:[""],p=Pg(d),g=0,m=0,w=0;g<r;++g)for(var T=0,I=Er(t,f+1,f=Sg(m=o[g])),S=t;T<p;++T)(S=Ag(m>0?d[T]+" "+I:F(I,/&\f/g,d[T])))&&(u[w++]=S);return Oo(t,e,n,i===0?ko:a,u,c,l,h)}function fw(t,e,n,r){return Oo(t,e,n,bg,Kc(iw()),Er(t,2,-2),0,r)}function gd(t,e,n,r,i){return Oo(t,e,n,Gc,Er(t,0,r),Er(t,r+1,-1),r,i)}function kg(t,e,n){switch(nw(t,e)){case 5103:return G+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+t+t;case 4789:return fi+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return G+t+fi+t+Z+t+t;case 5936:switch(ve(t,e+11)){case 114:return G+t+Z+F(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return G+t+Z+F(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return G+t+Z+F(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return G+t+Z+t+t;case 6165:return G+t+Z+"flex-"+t+t;case 5187:return G+t+F(t,/(\w+).+(:[^]+)/,G+"box-$1$2"+Z+"flex-$1$2")+t;case 5443:return G+t+Z+"flex-item-"+F(t,/flex-|-self/g,"")+(kt(t,/flex-|baseline/)?"":Z+"grid-row-"+F(t,/flex-|-self/g,""))+t;case 4675:return G+t+Z+"flex-line-pack"+F(t,/align-content|flex-|-self/g,"")+t;case 5548:return G+t+Z+F(t,"shrink","negative")+t;case 5292:return G+t+Z+F(t,"basis","preferred-size")+t;case 6060:return G+"box-"+F(t,"-grow","")+G+t+Z+F(t,"grow","positive")+t;case 4554:return G+F(t,/([^-])(transform)/g,"$1"+G+"$2")+t;case 6187:return F(F(F(t,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),t,"")+t;case 5495:case 3959:return F(t,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return F(F(t,/(.+:)(flex-)?(.*)/,G+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+t+t;case 4200:if(!kt(t,/flex-|baseline/))return Z+"grid-column-align"+Er(t,e)+t;break;case 2592:case 3360:return Z+F(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,kt(r.props,/grid-\w+-end/)})?~$s(t+(n=n[e].value),"span",0)?t:Z+F(t,"-start","")+t+Z+"grid-row-span:"+(~$s(n,"span",0)?kt(n,/\d+/):+kt(n,/\d+/)-+kt(t,/\d+/))+";":Z+F(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return kt(r.props,/grid-\w+-start/)})?t:Z+F(F(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return F(t,/(.+)-inline(.+)/,G+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ft(t)-1-e>6)switch(ve(t,e+1)){case 109:if(ve(t,e+4)!==45)break;case 102:return F(t,/(.+:)(.+)-([^]+)/,"$1"+G+"$2-$3$1"+fi+(ve(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~$s(t,"stretch",0)?kg(F(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return F(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,u,c){return Z+i+":"+s+c+(o?Z+i+"-span:"+(a?u:+u-+s)+c:"")+t});case 4949:if(ve(t,e+6)===121)return F(t,":",":"+G)+t;break;case 6444:switch(ve(t,ve(t,14)===45?18:11)){case 120:return F(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+G+(ve(t,14)===45?"inline-":"")+"box$3$1"+G+"$2$3$1"+Z+"$2box$3")+t;case 100:return F(t,":",":"+Z)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(t,"scroll-","scroll-snap-")+t}return t}function Zs(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function pw(t,e,n,r){switch(t.type){case tw:if(t.children.length)break;case ew:case Gc:return t.return=t.return||t.value;case bg:return"";case Rg:return t.return=t.value+"{"+Zs(t.children,r)+"}";case ko:if(!ft(t.value=t.props.join(",")))return""}return ft(n=Zs(t.children,r))?t.return=t.value+"{"+n+"}":""}function gw(t){var e=Pg(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function mw(t){return function(e){e.root||(e=e.return)&&t(e)}}function _w(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Gc:t.return=kg(t.value,t.length,n);return;case Rg:return Zs([Yt(t,{value:F(t.value,"@","@"+G)})],r);case ko:if(t.length)return rw(n=t.props,function(i){switch(kt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":tr(Yt(t,{props:[F(i,/:(read-\w+)/,":"+fi+"$1")]})),tr(Yt(t,{props:[i]})),Ou(t,{props:fd(n,r)});break;case"::placeholder":tr(Yt(t,{props:[F(i,/:(plac\w+)/,":"+G+"input-$1")]})),tr(Yt(t,{props:[F(i,/:(plac\w+)/,":"+fi+"$1")]})),tr(Yt(t,{props:[F(i,/:(plac\w+)/,Z+"input-$1")]})),tr(Yt(t,{props:[i]})),Ou(t,{props:fd(n,r)});break}return""})}}var vw={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},je={},Ir=typeof process<"u"&&je!==void 0&&(je.REACT_APP_SC_ATTR||je.SC_ATTR)||"data-styled",xg="active",Og="data-styled-version",No="6.1.8",Qc=`/*!sc*/
`,Jc=typeof window<"u"&&"HTMLElement"in window,yw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&je.REACT_APP_SC_DISABLE_SPEEDY!==""?je.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&je.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&je!==void 0&&je.SC_DISABLE_SPEEDY!==void 0&&je.SC_DISABLE_SPEEDY!==""&&je.SC_DISABLE_SPEEDY!=="false"&&je.SC_DISABLE_SPEEDY),ww={},Vo=Object.freeze([]),br=Object.freeze({});function Dg(t,e,n){return n===void 0&&(n=br),t.theme!==n.theme&&t.theme||e||n.theme}var Ng=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ew=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tw=/(^-|-$)/g;function md(t){return t.replace(Ew,"-").replace(Tw,"")}var Iw=/(a)(d)/gi,ws=52,_d=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vu(t){var e,n="";for(e=Math.abs(t);e>ws;e=e/ws|0)n=_d(e%ws)+n;return(_d(e%ws)+n).replace(Iw,"$1-$2")}var Oa,Vg=5381,cr=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Mg=function(t){return cr(Vg,t)};function Lg(t){return Vu(Mg(t)>>>0)}function bw(t){return t.displayName||t.name||"Component"}function Da(t){return typeof t=="string"&&!0}var $g=typeof Symbol=="function"&&Symbol.for,Ug=$g?Symbol.for("react.memo"):60115,Rw=$g?Symbol.for("react.forward_ref"):60112,Sw={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Aw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pw=((Oa={})[Rw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Oa[Ug]=Fg,Oa);function vd(t){return("type"in(e=t)&&e.type.$$typeof)===Ug?Fg:"$$typeof"in t?Pw[t.$$typeof]:Sw;var e}var Cw=Object.defineProperty,kw=Object.getOwnPropertyNames,yd=Object.getOwnPropertySymbols,xw=Object.getOwnPropertyDescriptor,Ow=Object.getPrototypeOf,wd=Object.prototype;function Bg(t,e,n){if(typeof e!="string"){if(wd){var r=Ow(e);r&&r!==wd&&Bg(t,r,n)}var i=kw(e);yd&&(i=i.concat(yd(e)));for(var s=vd(t),o=vd(e),a=0;a<i.length;++a){var u=i[a];if(!(u in Aw||n&&n[u]||o&&u in o||s&&u in s)){var c=xw(e,u);try{Cw(t,u,c)}catch{}}}}return t}function Rr(t){return typeof t=="function"}function Yc(t){return typeof t=="object"&&"styledComponentId"in t}function An(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Mu(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Ai(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Lu(t,e,n){if(n===void 0&&(n=!1),!n&&!Ai(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Lu(t[r],e[r]);else if(Ai(e))for(var r in e)t[r]=Lu(t[r],e[r]);return t}function Xc(t,e){Object.defineProperty(t,"toString",{value:e})}function Qi(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Dw=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Qi(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),u=(o=0,n.length);o<u;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(Qc);return n},t}(),Bs=new Map,eo=new Map,js=1,Es=function(t){if(Bs.has(t))return Bs.get(t);for(;eo.has(js);)js++;var e=js++;return Bs.set(t,e),eo.set(e,t),e},Nw=function(t,e){js=e+1,Bs.set(t,e),eo.set(e,t)},Vw="style[".concat(Ir,"][").concat(Og,'="').concat(No,'"]'),Mw=new RegExp("^".concat(Ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lw=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},$w=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Qc),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var u=a.match(Mw);if(u){var c=0|parseInt(u[1],10),l=u[2];c!==0&&(Nw(l,c),Lw(t,l,u[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function Uw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jg=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var u=Array.from(a.querySelectorAll("style[".concat(Ir,"]")));return u[u.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ir,xg),r.setAttribute(Og,No);var o=Uw();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},Fw=function(){function t(e){this.element=jg(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Qi(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Bw=function(){function t(e){this.element=jg(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),jw=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Ed=Jc,zw={isServer:!Jc,useCSSOMInjection:!yw},to=function(){function t(e,n,r){e===void 0&&(e=br),n===void 0&&(n={});var i=this;this.options=Ne(Ne({},zw),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Jc&&Ed&&(Ed=!1,function(s){for(var o=document.querySelectorAll(Vw),a=0,u=o.length;a<u;a++){var c=o[a];c&&c.getAttribute(Ir)!==xg&&($w(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Xc(this,function(){return function(s){for(var o=s.getTag(),a=o.length,u="",c=function(h){var f=function(w){return eo.get(w)}(h);if(f===void 0)return"continue";var d=s.names.get(f),p=o.getGroup(h);if(d===void 0||p.length===0)return"continue";var g="".concat(Ir,".g").concat(h,'[id="').concat(f,'"]'),m="";d!==void 0&&d.forEach(function(w){w.length>0&&(m+="".concat(w,","))}),u+="".concat(p).concat(g,'{content:"').concat(m,'"}').concat(Qc)},l=0;l<a;l++)c(l);return u}(i)})}return t.registerId=function(e){return Es(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ne(Ne({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new jw(i):r?new Fw(i):new Bw(i)}(this.options),new Dw(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Es(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Es(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Es(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),qw=/&/g,Hw=/^\s*\/\/.*$/gm;function zg(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zg(n.children,e)),n})}function Ww(t){var e,n,r,i=t===void 0?br:t,s=i.options,o=s===void 0?br:s,a=i.plugins,u=a===void 0?Vo:a,c=function(f,d,p){return p.startsWith(n)&&p.endsWith(n)&&p.replaceAll(n,"").length>0?".".concat(e):f},l=u.slice();l.push(function(f){f.type===ko&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(qw,n).replace(r,c))}),o.prefix&&l.push(_w),l.push(pw);var h=function(f,d,p,g){d===void 0&&(d=""),p===void 0&&(p=""),g===void 0&&(g="&"),e=g,n=d,r=new RegExp("\\".concat(n,"\\b"),"g");var m=f.replace(Hw,""),w=dw(p||d?"".concat(p," ").concat(d," { ").concat(m," }"):m);o.namespace&&(w=zg(w,o.namespace));var T=[];return Zs(w,gw(l.concat(mw(function(I){return T.push(I)})))),T};return h.hash=u.length?u.reduce(function(f,d){return d.name||Qi(15),cr(f,d.name)},Vg).toString():"",h}var Gw=new to,$u=Ww(),qg=te.createContext({shouldForwardProp:void 0,styleSheet:Gw,stylis:$u});qg.Consumer;te.createContext(void 0);function Uu(){return jc(qg)}var Kw=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=$u);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Xc(this,function(){throw Qi(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=$u),this.name+e.hash},t}(),Qw=function(t){return t>="A"&&t<="Z"};function Td(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;Qw(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Hg=function(t){return t==null||t===!1||t===""},Wg=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Hg(s)&&(Array.isArray(s)&&s.isCss||Rr(s)?r.push("".concat(Td(i),":"),s,";"):Ai(s)?r.push.apply(r,Si(Si(["".concat(i," {")],Wg(s),!1),["}"],!1)):r.push("".concat(Td(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in vw||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function on(t,e,n,r){if(Hg(t))return[];if(Yc(t))return[".".concat(t.styledComponentId)];if(Rr(t)){if(!Rr(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return on(i,e,n,r)}var s;return t instanceof Kw?n?(t.inject(n,r),[t.getName(r)]):[t]:Ai(t)?Wg(t):Array.isArray(t)?Array.prototype.concat.apply(Vo,t.map(function(o){return on(o,e,n,r)})):[t.toString()]}function Gg(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Rr(n)&&!Yc(n))return!1}return!0}var Jw=Mg(No),Yw=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Gg(e),this.componentId=n,this.baseHash=cr(Jw,n),this.baseStyle=r,to.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=An(i,this.staticRulesId);else{var s=Mu(on(this.rules,e,n,r)),o=Vu(cr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=An(i,o),this.staticRulesId=o}else{for(var u=cr(this.baseHash,r.hash),c="",l=0;l<this.rules.length;l++){var h=this.rules[l];if(typeof h=="string")c+=h;else if(h){var f=Mu(on(h,e,n,r));u=cr(u,f+l),c+=f}}if(c){var d=Vu(u>>>0);n.hasNameForId(this.componentId,d)||n.insertRules(this.componentId,d,r(c,".".concat(d),void 0,this.componentId)),i=An(i,d)}}return i},t}(),Zc=te.createContext(void 0);Zc.Consumer;var Na={};function Xw(t,e,n){var r=Yc(t),i=t,s=!Da(t),o=e.attrs,a=o===void 0?Vo:o,u=e.componentId,c=u===void 0?function(S,k){var A=typeof S!="string"?"sc":md(S);Na[A]=(Na[A]||0)+1;var P="".concat(A,"-").concat(Lg(No+A+Na[A]));return k?"".concat(k,"-").concat(P):P}(e.displayName,e.parentComponentId):u,l=e.displayName,h=l===void 0?function(S){return Da(S)?"styled.".concat(S):"Styled(".concat(bw(S),")")}(t):l,f=e.displayName&&e.componentId?"".concat(md(e.displayName),"-").concat(e.componentId):e.componentId||c,d=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var g=i.shouldForwardProp;if(e.shouldForwardProp){var m=e.shouldForwardProp;p=function(S,k){return g(S,k)&&m(S,k)}}else p=g}var w=new Yw(n,f,r?i.componentStyle:void 0);function T(S,k){return function(A,P,W){var V=A.attrs,le=A.componentStyle,wn=A.defaultProps,qt=A.foldedComponentIds,Qr=A.styledComponentId,ms=A.target,Ht=te.useContext(Zc),_s=Uu(),Wt=A.shouldForwardProp||_s.shouldForwardProp,Jr=Dg(P,Ht,wn)||br,Qe=function(Kt,At,dt){for(var En,Ye=Ne(Ne({},At),{className:void 0,theme:dt}),er=0;er<Kt.length;er+=1){var Pt=Rr(En=Kt[er])?En(Ye):En;for(var st in Pt)Ye[st]=st==="className"?An(Ye[st],Pt[st]):st==="style"?Ne(Ne({},Ye[st]),Pt[st]):Pt[st]}return At.className&&(Ye.className=An(Ye.className,At.className)),Ye}(V,P,Jr),Je=Qe.as||ms,Gt={};for(var it in Qe)Qe[it]===void 0||it[0]==="$"||it==="as"||it==="theme"&&Qe.theme===Jr||(it==="forwardedAs"?Gt.as=Qe.forwardedAs:Wt&&!Wt(it,Je)||(Gt[it]=Qe[it]));var Yr=function(Kt,At){var dt=Uu(),En=Kt.generateAndInjectStyles(At,dt.styleSheet,dt.stylis);return En}(le,Qe),Zn=An(qt,Qr);return Yr&&(Zn+=" "+Yr),Qe.className&&(Zn+=" "+Qe.className),Gt[Da(Je)&&!Ng.has(Je)?"class":"className"]=Zn,Gt.ref=W,Y(Je,Gt)}(I,S,k)}T.displayName=h;var I=te.forwardRef(T);return I.attrs=d,I.componentStyle=w,I.displayName=h,I.shouldForwardProp=p,I.foldedComponentIds=r?An(i.foldedComponentIds,i.styledComponentId):"",I.styledComponentId=f,I.target=r?i.target:t,Object.defineProperty(I,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(k){for(var A=[],P=1;P<arguments.length;P++)A[P-1]=arguments[P];for(var W=0,V=A;W<V.length;W++)Lu(k,V[W],!0);return k}({},i.defaultProps,S):S}}),Xc(I,function(){return".".concat(I.styledComponentId)}),s&&Bg(I,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),I}function Id(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var bd=function(t){return Object.assign(t,{isCss:!0})};function Kg(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Rr(t)||Ai(t))return bd(on(Id(Vo,Si([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?on(r):bd(on(Id(r,e)))}function Fu(t,e,n){if(n===void 0&&(n=br),!e)throw Qi(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Kg.apply(void 0,Si([i],s,!1)))};return r.attrs=function(i){return Fu(t,e,Ne(Ne({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Fu(t,e,Ne(Ne({},n),i))},r}var Qg=function(t){return Fu(Xw,t)},ie=Qg;Ng.forEach(function(t){ie[t]=Qg(t)});var Zw=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Gg(e),to.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var s=i(Mu(on(this.rules,n,r,i)),""),o=this.componentId+e;r.insertRules(o,o,s)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&to.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function eE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Kg.apply(void 0,Si([t],e,!1)),i="sc-global-".concat(Lg(JSON.stringify(r))),s=new Zw(r,i),o=function(u){var c=Uu(),l=te.useContext(Zc),h=te.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(h,u,c.styleSheet,l,c.stylis),te.useLayoutEffect(function(){if(!c.styleSheet.server)return a(h,u,c.styleSheet,l,c.stylis),function(){return s.removeStyles(h,c.styleSheet)}},[h,u,c.styleSheet,l,c.stylis]),null};function a(u,c,l,h,f){if(s.isStatic)s.renderStyles(u,ww,l,f);else{var d=Ne(Ne({},c),{theme:Dg(c,h,o.defaultProps)});s.renderStyles(u,d,l,f)}}return te.memo(o)}var tE={};function Ts(t,e){for(var n in e)t[n]=e[n];return t}function nE(t,e,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,s=t.match(i),o={};if(s&&s[1])for(var a=s[1].split("&"),u=0;u<a.length;u++){var c=a[u].split("=");o[decodeURIComponent(c[0])]=decodeURIComponent(c.slice(1).join("="))}t=Bu(t.replace(i,"")),e=Bu(e||"");for(var l=Math.max(t.length,e.length),h=0;h<l;h++)if(e[h]&&e[h].charAt(0)===":"){var f=e[h].replace(/(^:|[+*?]+$)/g,""),d=(e[h].match(/[+*?]+$/)||tE)[0]||"",p=~d.indexOf("+"),g=~d.indexOf("*"),m=t[h]||"";if(!m&&!g&&(d.indexOf("?")<0||p)){r=!1;break}if(o[f]=decodeURIComponent(m),p||g){o[f]=t.slice(h).map(decodeURIComponent).join("/");break}}else if(e[h]!==t[h]){r=!1;break}return(n.default===!0||r!==!1)&&o}function rE(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function iE(t,e){return t.index=e,t.rank=function(n){return n.props.default?0:Bu(n.props.path).map(sE).join("")}(t),t.props}function Bu(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function sE(t){return t.charAt(0)==":"?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}var oE={},Dn=[],Rd=[],qe=null,Jg={url:el()},aE=Fc(Jg);function el(){var t;return""+((t=qe&&qe.location?qe.location:qe&&qe.getCurrentLocation?qe.getCurrentLocation():typeof location<"u"?location:oE).pathname||"")+(t.search||"")}function Yg(t,e){return e===void 0&&(e=!1),typeof t!="string"&&t.url&&(e=t.replace,t=t.url),function(n){for(var r=Dn.length;r--;)if(Dn[r].canRoute(n))return!0;return!1}(t)&&function(n,r){r===void 0&&(r="push"),qe&&qe[r]?qe[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(t,e?"replace":"push"),Xg(t)}function Xg(t){for(var e=!1,n=0;n<Dn.length;n++)Dn[n].routeTo(t)&&(e=!0);return e}function uE(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return Yg(e)}}function cE(t){return t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault(),!1}function lE(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button)){var e=t.target;do if(e.localName==="a"&&e.getAttribute("href")){if(e.hasAttribute("data-native")||e.hasAttribute("native"))return;if(uE(e))return cE(t)}while(e=e.parentNode)}}var Sd=!1;function Zg(t){t.history&&(qe=t.history),this.state={url:t.url||el()}}Ts(Zg.prototype=new et,{shouldComponentUpdate:function(t){return t.static!==!0||t.url!==this.props.url||t.onChange!==this.props.onChange},canRoute:function(t){var e=ut(this.props.children);return this.g(e,t)!==void 0},routeTo:function(t){this.setState({url:t});var e=this.canRoute(t);return this.p||this.forceUpdate(),e},componentWillMount:function(){this.p=!0},componentDidMount:function(){var t=this;Sd||(Sd=!0,qe||addEventListener("popstate",function(){Xg(el())}),addEventListener("click",lE)),Dn.push(this),qe&&(this.u=qe.listen(function(e){var n=e.location||e;t.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),Dn.splice(Dn.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(t,e){t=t.filter(iE).sort(rE);for(var n=0;n<t.length;n++){var r=t[n],i=nE(e,r.props.path,r.props);if(i)return[r,i]}},render:function(t,e){var n,r,i=t.onChange,s=e.url,o=this.c,a=this.g(ut(t.children),s);if(a&&(r=Kp(a[0],Ts(Ts({url:s,matches:n=a[1]},n),{key:void 0,ref:void 0}))),s!==(o&&o.url)){Ts(Jg,o=this.c={url:s,previous:o&&o.url,current:r,path:r?r.props.path:null,matches:n}),o.router=this,o.active=r?[r]:[];for(var u=Rd.length;u--;)Rd[u]({});typeof i=="function"&&i(o)}return Y(aE.Provider,{value:o},r)}});var Ad=function(t){return Y(t.component,t)},hE=0;function v(t,e,n,r,i,s){var o,a,u={};for(a in e)a=="ref"?o=e[a]:u[a]=e[a];var c={type:t,props:u,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--hE,__i:-1,__u:0,__source:i,__self:s};if(typeof t=="function"&&(o=t.defaultProps))for(a in o)u[a]===void 0&&(u[a]=o[a]);return B.vnode&&B.vnode(c),c}function dE(){const t=e=>{Yg(`/${e}`,!0)};return v(fE,{children:[v(pE,{children:[v("div",{class:"left",children:"Google Drive"}),v("div",{class:"right",children:[v("div",{children:"meet drive"}),v("div",{children:"using drive"}),v("div",{children:"play drive"}),v("div",{children:"eat drive"})]})]}),v(gE,{children:[v("img",{src:"https://www.google.com/drive/static/images/drive/logo-drive.png"}),v("div",{children:"A safe place for all your files"}),v(mE,{onClick:()=>t("mydrive"),children:"Go to Google Drive"})]})]})}const fE=ie.div`
background: url("https://www.google.com/drive/static/images/home/intro-1600.jpg");
background-size: cover;
width: 100%;
height: 100vh;
`,pE=ie.div`
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
`,gE=ie.div`
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
`,mE=ie.button`
cursor:pointer;
background: dodgerblue;
color: white;
padding: 20px 40px;
border: none;
`;var tl={},em={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(em);var Ae=em.exports,tm={exports:{}},nm={exports:{}};(function(t){function e(n){"@babel/helpers - typeof";return t.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(nm);var _E=nm.exports;(function(t){var e=_E.default;function n(i){if(typeof WeakMap!="function")return null;var s=new WeakMap,o=new WeakMap;return(n=function(u){return u?o:s})(i)}function r(i,s){if(!s&&i&&i.__esModule)return i;if(i===null||e(i)!="object"&&typeof i!="function")return{default:i};var o=n(s);if(o&&o.has(i))return o.get(i);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in i)if(c!=="default"&&{}.hasOwnProperty.call(i,c)){var l=u?Object.getOwnPropertyDescriptor(i,c):null;l&&(l.get||l.set)?Object.defineProperty(a,c,l):a[c]=i[c]}return a.default=i,o&&o.set(i,a),a}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports})(tm);var Pe=tm.exports;const Ce=Ig(X0);var Va={};function O(){return O=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},O.apply(this,arguments)}function Sr(t){"@babel/helpers - typeof";return Sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Sr(t)}function Ma(t){return t&&Sr(t)==="object"&&t.constructor===Object}function Ar(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{clone:!0},r=n.clone?O({},t):t;return Ma(t)&&Ma(e)&&Object.keys(e).forEach(function(i){i!=="__proto__"&&(Ma(e[i])&&i in t?r[i]=Ar(t[i],e[i],n):r[i]=e[i])}),r}function vE(t,e){if(Sr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Sr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function rm(t){var e=vE(t,"string");return Sr(e)=="symbol"?e:e+""}function La(t,e,n){return e=rm(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function no(t){for(var e="https://mui.com/production-error/?code="+t,n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+t+"; visit "+e+" for the full message."}function ju(t){if(typeof t!="string")throw new Error(no(7));return t.charAt(0).toUpperCase()+t.slice(1)}function zu(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(r,i){return i==null?r:function(){for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];r.apply(this,a),i.apply(this,a)}},function(){})}function im(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function rt(t,e){if(t==null)return{};var n=im(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function sm(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=sm(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function om(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=sm(t))&&(r&&(r+=" "),r+=e);return r}var yE=typeof Symbol=="function"&&Symbol.for;const wE=yE?Symbol.for("mui.nested"):"__THEME_NESTED__";var EE=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];function TE(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.disableGlobal,n=e===void 0?!1:e,r=t.productionPrefix,i=r===void 0?"jss":r,s=t.seed,o=s===void 0?"":s,a=o===""?"":"".concat(o,"-"),u=0,c=function(){return u+=1,u};return function(l,h){var f=h.options.name;if(f&&f.indexOf("Mui")===0&&!h.options.link&&!n){if(EE.indexOf(l.key)!==-1)return"Mui-".concat(l.key);var d="".concat(a).concat(f,"-").concat(l.key);return!h.options.theme[wE]||o!==""?d:"".concat(d,"-").concat(c())}return"".concat(a).concat(i).concat(c())}}function am(t){var e=t.theme,n=t.name,r=t.props;if(!e||!e.props||!e.props[n])return r;var i=e.props[n],s;for(s in i)r[s]===void 0&&(r[s]=i[s]);return r}var Pd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ji=(typeof window>"u"?"undefined":Pd(window))==="object"&&(typeof document>"u"?"undefined":Pd(document))==="object"&&document.nodeType===9;function Cd(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,rm(r.key),r)}}function nl(t,e,n){return e&&Cd(t.prototype,e),n&&Cd(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function qu(t,e){return qu=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},qu(t,e)}function um(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,qu(t,e)}function kd(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var IE={}.constructor;function Hu(t){if(t==null||typeof t!="object")return t;if(Array.isArray(t))return t.map(Hu);if(t.constructor!==IE)return t;var e={};for(var n in t)e[n]=Hu(t[n]);return e}function rl(t,e,n){t===void 0&&(t="unnamed");var r=n.jss,i=Hu(e),s=r.plugins.onCreateRule(t,i,n);return s||(t[0],null)}var xd=function(e,n){for(var r="",i=0;i<e.length&&e[i]!=="!important";i++)r&&(r+=n),r+=e[i];return r},Nn=function(e){if(!Array.isArray(e))return e;var n="";if(Array.isArray(e[0]))for(var r=0;r<e.length&&e[r]!=="!important";r++)n&&(n+=", "),n+=xd(e[r]," ");else n=xd(e,", ");return e[e.length-1]==="!important"&&(n+=" !important"),n};function Fr(t){return t&&t.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function Zr(t,e){for(var n="",r=0;r<e;r++)n+="  ";return n+t}function Pi(t,e,n){n===void 0&&(n={});var r="";if(!e)return r;var i=n,s=i.indent,o=s===void 0?0:s,a=e.fallbacks;n.format===!1&&(o=-1/0);var u=Fr(n),c=u.linebreak,l=u.space;if(t&&o++,a)if(Array.isArray(a))for(var h=0;h<a.length;h++){var f=a[h];for(var d in f){var p=f[d];p!=null&&(r&&(r+=c),r+=Zr(d+":"+l+Nn(p)+";",o))}}else for(var g in a){var m=a[g];m!=null&&(r&&(r+=c),r+=Zr(g+":"+l+Nn(m)+";",o))}for(var w in e){var T=e[w];T!=null&&w!=="fallbacks"&&(r&&(r+=c),r+=Zr(w+":"+l+Nn(T)+";",o))}return!r&&!n.allowEmpty||!t?r:(o--,r&&(r=""+c+r+c),Zr(""+t+l+"{"+r,o)+Zr("}",o))}var bE=/([[\].#*$><+~=|^:(),"'`\s])/g,Od=typeof CSS<"u"&&CSS.escape,il=function(t){return Od?Od(t):t.replace(bE,"\\$1")},cm=function(){function t(n,r,i){this.type="style",this.isProcessed=!1;var s=i.sheet,o=i.Renderer;this.key=n,this.options=i,this.style=r,s?this.renderer=s.renderer:o&&(this.renderer=new o)}var e=t.prototype;return e.prop=function(r,i,s){if(i===void 0)return this.style[r];var o=s?s.force:!1;if(!o&&this.style[r]===i)return this;var a=i;(!s||s.process!==!1)&&(a=this.options.jss.plugins.onChangeValue(i,r,this));var u=a==null||a===!1,c=r in this.style;if(u&&!c&&!o)return this;var l=u&&c;if(l?delete this.style[r]:this.style[r]=a,this.renderable&&this.renderer)return l?this.renderer.removeProperty(this.renderable,r):this.renderer.setProperty(this.renderable,r,a),this;var h=this.options.sheet;return h&&h.attached,this},t}(),Wu=function(t){um(e,t);function e(r,i,s){var o;o=t.call(this,r,i,s)||this;var a=s.selector,u=s.scoped,c=s.sheet,l=s.generateId;return a?o.selectorText=a:u!==!1&&(o.id=l(kd(kd(o)),c),o.selectorText="."+il(o.id)),o}var n=e.prototype;return n.applyTo=function(i){var s=this.renderer;if(s){var o=this.toJSON();for(var a in o)s.setProperty(i,a,o[a])}return this},n.toJSON=function(){var i={};for(var s in this.style){var o=this.style[s];typeof o!="object"?i[s]=o:Array.isArray(o)&&(i[s]=Nn(o))}return i},n.toString=function(i){var s=this.options.sheet,o=s?s.options.link:!1,a=o?O({},i,{allowEmpty:!0}):i;return Pi(this.selectorText,this.style,a)},nl(e,[{key:"selector",set:function(i){if(i!==this.selectorText){this.selectorText=i;var s=this.renderer,o=this.renderable;if(!(!o||!s)){var a=s.setSelector(o,i);a||s.replaceRule(o,this)}}},get:function(){return this.selectorText}}]),e}(cm),RE={onCreateRule:function(e,n,r){return e[0]==="@"||r.parent&&r.parent.type==="keyframes"?null:new Wu(e,n,r)}},$a={indent:1,children:!0},SE=/@([\w-]+)/,AE=function(){function t(n,r,i){this.type="conditional",this.isProcessed=!1,this.key=n;var s=n.match(SE);this.at=s?s[1]:"unknown",this.query=i.name||"@"+this.at,this.options=i,this.rules=new Mo(O({},i,{parent:this}));for(var o in r)this.rules.add(o,r[o]);this.rules.process()}var e=t.prototype;return e.getRule=function(r){return this.rules.get(r)},e.indexOf=function(r){return this.rules.indexOf(r)},e.addRule=function(r,i,s){var o=this.rules.add(r,i,s);return o?(this.options.jss.plugins.onProcessRule(o),o):null},e.replaceRule=function(r,i,s){var o=this.rules.replace(r,i,s);return o&&this.options.jss.plugins.onProcessRule(o),o},e.toString=function(r){r===void 0&&(r=$a);var i=Fr(r),s=i.linebreak;if(r.indent==null&&(r.indent=$a.indent),r.children==null&&(r.children=$a.children),r.children===!1)return this.query+" {}";var o=this.rules.toString(r);return o?this.query+" {"+s+o+s+"}":""},t}(),PE=/@container|@media|@supports\s+/,CE={onCreateRule:function(e,n,r){return PE.test(e)?new AE(e,n,r):null}},Ua={indent:1,children:!0},kE=/@keyframes\s+([\w-]+)/,Gu=function(){function t(n,r,i){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var s=n.match(kE);s&&s[1]?this.name=s[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=i;var o=i.scoped,a=i.sheet,u=i.generateId;this.id=o===!1?this.name:il(u(this,a)),this.rules=new Mo(O({},i,{parent:this}));for(var c in r)this.rules.add(c,r[c],O({},i,{parent:this}));this.rules.process()}var e=t.prototype;return e.toString=function(r){r===void 0&&(r=Ua);var i=Fr(r),s=i.linebreak;if(r.indent==null&&(r.indent=Ua.indent),r.children==null&&(r.children=Ua.children),r.children===!1)return this.at+" "+this.id+" {}";var o=this.rules.toString(r);return o&&(o=""+s+o+s),this.at+" "+this.id+" {"+o+"}"},t}(),xE=/@keyframes\s+/,OE=/\$([\w-]+)/g,Ku=function(e,n){return typeof e=="string"?e.replace(OE,function(r,i){return i in n?n[i]:r}):e},Dd=function(e,n,r){var i=e[n],s=Ku(i,r);s!==i&&(e[n]=s)},DE={onCreateRule:function(e,n,r){return typeof e=="string"&&xE.test(e)?new Gu(e,n,r):null},onProcessStyle:function(e,n,r){return n.type!=="style"||!r||("animation-name"in e&&Dd(e,"animation-name",r.keyframes),"animation"in e&&Dd(e,"animation",r.keyframes)),e},onChangeValue:function(e,n,r){var i=r.options.sheet;if(!i)return e;switch(n){case"animation":return Ku(e,i.keyframes);case"animation-name":return Ku(e,i.keyframes);default:return e}}},NE=function(t){um(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.toString=function(i){var s=this.options.sheet,o=s?s.options.link:!1,a=o?O({},i,{allowEmpty:!0}):i;return Pi(this.key,this.style,a)},e}(cm),VE={onCreateRule:function(e,n,r){return r.parent&&r.parent.type==="keyframes"?new NE(e,n,r):null}},ME=function(){function t(n,r,i){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var e=t.prototype;return e.toString=function(r){var i=Fr(r),s=i.linebreak;if(Array.isArray(this.style)){for(var o="",a=0;a<this.style.length;a++)o+=Pi(this.at,this.style[a]),this.style[a+1]&&(o+=s);return o}return Pi(this.at,this.style,r)},t}(),LE=/@font-face/,$E={onCreateRule:function(e,n,r){return LE.test(e)?new ME(e,n,r):null}},UE=function(){function t(n,r,i){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=n,this.style=r,this.options=i}var e=t.prototype;return e.toString=function(r){return Pi(this.key,this.style,r)},t}(),FE={onCreateRule:function(e,n,r){return e==="@viewport"||e==="@-ms-viewport"?new UE(e,n,r):null}},BE=function(){function t(n,r,i){this.type="simple",this.isProcessed=!1,this.key=n,this.value=r,this.options=i}var e=t.prototype;return e.toString=function(r){if(Array.isArray(this.value)){for(var i="",s=0;s<this.value.length;s++)i+=this.key+" "+this.value[s]+";",this.value[s+1]&&(i+=`
`);return i}return this.key+" "+this.value+";"},t}(),jE={"@charset":!0,"@import":!0,"@namespace":!0},zE={onCreateRule:function(e,n,r){return e in jE?new BE(e,n,r):null}},Nd=[RE,CE,DE,VE,$E,FE,zE],qE={process:!0},Vd={force:!0,process:!0},Mo=function(){function t(n){this.map={},this.raw={},this.index=[],this.counter=0,this.options=n,this.classes=n.classes,this.keyframes=n.keyframes}var e=t.prototype;return e.add=function(r,i,s){var o=this.options,a=o.parent,u=o.sheet,c=o.jss,l=o.Renderer,h=o.generateId,f=o.scoped,d=O({classes:this.classes,parent:a,sheet:u,jss:c,Renderer:l,generateId:h,scoped:f,name:r,keyframes:this.keyframes,selector:void 0},s),p=r;r in this.raw&&(p=r+"-d"+this.counter++),this.raw[p]=i,p in this.classes&&(d.selector="."+il(this.classes[p]));var g=rl(p,i,d);if(!g)return null;this.register(g);var m=d.index===void 0?this.index.length:d.index;return this.index.splice(m,0,g),g},e.replace=function(r,i,s){var o=this.get(r),a=this.index.indexOf(o);o&&this.remove(o);var u=s;return a!==-1&&(u=O({},s,{index:a})),this.add(r,i,u)},e.get=function(r){return this.map[r]},e.remove=function(r){this.unregister(r),delete this.raw[r.key],this.index.splice(this.index.indexOf(r),1)},e.indexOf=function(r){return this.index.indexOf(r)},e.process=function(){var r=this.options.jss.plugins;this.index.slice(0).forEach(r.onProcessRule,r)},e.register=function(r){this.map[r.key]=r,r instanceof Wu?(this.map[r.selector]=r,r.id&&(this.classes[r.key]=r.id)):r instanceof Gu&&this.keyframes&&(this.keyframes[r.name]=r.id)},e.unregister=function(r){delete this.map[r.key],r instanceof Wu?(delete this.map[r.selector],delete this.classes[r.key]):r instanceof Gu&&delete this.keyframes[r.name]},e.update=function(){var r,i,s;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(r=arguments.length<=0?void 0:arguments[0],i=arguments.length<=1?void 0:arguments[1],s=arguments.length<=2?void 0:arguments[2]):(i=arguments.length<=0?void 0:arguments[0],s=arguments.length<=1?void 0:arguments[1],r=null),r)this.updateOne(this.get(r),i,s);else for(var o=0;o<this.index.length;o++)this.updateOne(this.index[o],i,s)},e.updateOne=function(r,i,s){s===void 0&&(s=qE);var o=this.options,a=o.jss.plugins,u=o.sheet;if(r.rules instanceof t){r.rules.update(i,s);return}var c=r.style;if(a.onUpdate(i,r,u,s),s.process&&c&&c!==r.style){a.onProcessStyle(r.style,r,u);for(var l in r.style){var h=r.style[l],f=c[l];h!==f&&r.prop(l,h,Vd)}for(var d in c){var p=r.style[d],g=c[d];p==null&&p!==g&&r.prop(d,null,Vd)}}},e.toString=function(r){for(var i="",s=this.options.sheet,o=s?s.options.link:!1,a=Fr(r),u=a.linebreak,c=0;c<this.index.length;c++){var l=this.index[c],h=l.toString(r);!h&&!o||(i&&(i+=u),i+=h)}return i},t}(),lm=function(){function t(n,r){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=O({},r,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),r.Renderer&&(this.renderer=new r.Renderer(this)),this.rules=new Mo(this.options);for(var i in n)this.rules.add(i,n[i]);this.rules.process()}var e=t.prototype;return e.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},e.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},e.addRule=function(r,i,s){var o=this.queue;this.attached&&!o&&(this.queue=[]);var a=this.rules.add(r,i,s);return a?(this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&(o?o.push(a):(this.insertRule(a),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),a):(this.deployed=!1,a)):null},e.replaceRule=function(r,i,s){var o=this.rules.get(r);if(!o)return this.addRule(r,i,s);var a=this.rules.replace(r,i,s);return a&&this.options.jss.plugins.onProcessRule(a),this.attached?(this.deployed&&this.renderer&&(a?o.renderable&&this.renderer.replaceRule(o.renderable,a):this.renderer.deleteRule(o)),a):(this.deployed=!1,a)},e.insertRule=function(r){this.renderer&&this.renderer.insertRule(r)},e.addRules=function(r,i){var s=[];for(var o in r){var a=this.addRule(o,r[o],i);a&&s.push(a)}return s},e.getRule=function(r){return this.rules.get(r)},e.deleteRule=function(r){var i=typeof r=="object"?r:this.rules.get(r);return!i||this.attached&&!i.renderable?!1:(this.rules.remove(i),this.attached&&i.renderable&&this.renderer?this.renderer.deleteRule(i.renderable):!0)},e.indexOf=function(r){return this.rules.indexOf(r)},e.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},e.update=function(){var r;return(r=this.rules).update.apply(r,arguments),this},e.updateOne=function(r,i,s){return this.rules.updateOne(r,i,s),this},e.toString=function(r){return this.rules.toString(r)},t}(),HE=function(){function t(){this.plugins={internal:[],external:[]},this.registry={}}var e=t.prototype;return e.onCreateRule=function(r,i,s){for(var o=0;o<this.registry.onCreateRule.length;o++){var a=this.registry.onCreateRule[o](r,i,s);if(a)return a}return null},e.onProcessRule=function(r){if(!r.isProcessed){for(var i=r.options.sheet,s=0;s<this.registry.onProcessRule.length;s++)this.registry.onProcessRule[s](r,i);r.style&&this.onProcessStyle(r.style,r,i),r.isProcessed=!0}},e.onProcessStyle=function(r,i,s){for(var o=0;o<this.registry.onProcessStyle.length;o++)i.style=this.registry.onProcessStyle[o](i.style,i,s)},e.onProcessSheet=function(r){for(var i=0;i<this.registry.onProcessSheet.length;i++)this.registry.onProcessSheet[i](r)},e.onUpdate=function(r,i,s,o){for(var a=0;a<this.registry.onUpdate.length;a++)this.registry.onUpdate[a](r,i,s,o)},e.onChangeValue=function(r,i,s){for(var o=r,a=0;a<this.registry.onChangeValue.length;a++)o=this.registry.onChangeValue[a](o,i,s);return o},e.use=function(r,i){i===void 0&&(i={queue:"external"});var s=this.plugins[i.queue];s.indexOf(r)===-1&&(s.push(r),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(o,a){for(var u in a)u in o&&o[u].push(a[u]);return o},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},t}(),WE=function(){function t(){this.registry=[]}var e=t.prototype;return e.add=function(r){var i=this.registry,s=r.options.index;if(i.indexOf(r)===-1){if(i.length===0||s>=this.index){i.push(r);return}for(var o=0;o<i.length;o++)if(i[o].options.index>s){i.splice(o,0,r);return}}},e.reset=function(){this.registry=[]},e.remove=function(r){var i=this.registry.indexOf(r);this.registry.splice(i,1)},e.toString=function(r){for(var i=r===void 0?{}:r,s=i.attached,o=im(i,["attached"]),a=Fr(o),u=a.linebreak,c="",l=0;l<this.registry.length;l++){var h=this.registry[l];s!=null&&h.attached!==s||(c&&(c+=u),c+=h.toString(o))}return c},nl(t,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),t}(),pi=new WE,Qu=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),Ju="2f1acc6c3a606b082e5eef5e54414ffb";Qu[Ju]==null&&(Qu[Ju]=0);var Md=Qu[Ju]++,Ld=function(e){e===void 0&&(e={});var n=0,r=function(s,o){n+=1;var a="",u="";return o&&(o.options.classNamePrefix&&(u=o.options.classNamePrefix),o.options.jss.id!=null&&(a=String(o.options.jss.id))),e.minify?""+(u||"c")+Md+a+n:u+s.key+"-"+Md+(a?"-"+a:"")+"-"+n};return r},hm=function(e){var n;return function(){return n||(n=e()),n}},GE=function(e,n){try{return e.attributeStyleMap?e.attributeStyleMap.get(n):e.style.getPropertyValue(n)}catch{return""}},KE=function(e,n,r){try{var i=r;if(Array.isArray(r)&&(i=Nn(r)),e.attributeStyleMap)e.attributeStyleMap.set(n,i);else{var s=i?i.indexOf("!important"):-1,o=s>-1?i.substr(0,s-1):i;e.style.setProperty(n,o,s>-1?"important":"")}}catch{return!1}return!0},QE=function(e,n){try{e.attributeStyleMap?e.attributeStyleMap.delete(n):e.style.removeProperty(n)}catch{}},JE=function(e,n){return e.selectorText=n,e.selectorText===n},dm=hm(function(){return document.querySelector("head")});function YE(t,e){for(var n=0;n<t.length;n++){var r=t[n];if(r.attached&&r.options.index>e.index&&r.options.insertionPoint===e.insertionPoint)return r}return null}function XE(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.attached&&r.options.insertionPoint===e.insertionPoint)return r}return null}function ZE(t){for(var e=dm(),n=0;n<e.childNodes.length;n++){var r=e.childNodes[n];if(r.nodeType===8&&r.nodeValue.trim()===t)return r}return null}function eT(t){var e=pi.registry;if(e.length>0){var n=YE(e,t);if(n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element};if(n=XE(e,t),n&&n.renderer)return{parent:n.renderer.element.parentNode,node:n.renderer.element.nextSibling}}var r=t.insertionPoint;if(r&&typeof r=="string"){var i=ZE(r);if(i)return{parent:i.parentNode,node:i.nextSibling}}return!1}function tT(t,e){var n=e.insertionPoint,r=eT(e);if(r!==!1&&r.parent){r.parent.insertBefore(t,r.node);return}if(n&&typeof n.nodeType=="number"){var i=n,s=i.parentNode;s&&s.insertBefore(t,i.nextSibling);return}dm().appendChild(t)}var nT=hm(function(){var t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}),$d=function(e,n,r){try{"insertRule"in e?e.insertRule(n,r):"appendRule"in e&&e.appendRule(n)}catch{return!1}return e.cssRules[r]},Ud=function(e,n){var r=e.cssRules.length;return n===void 0||n>r?r:n},rT=function(){var e=document.createElement("style");return e.textContent=`
`,e},iT=function(){function t(n){this.getPropertyValue=GE,this.setProperty=KE,this.removeProperty=QE,this.setSelector=JE,this.hasInsertedRules=!1,this.cssRules=[],n&&pi.add(n),this.sheet=n;var r=this.sheet?this.sheet.options:{},i=r.media,s=r.meta,o=r.element;this.element=o||rT(),this.element.setAttribute("data-jss",""),i&&this.element.setAttribute("media",i),s&&this.element.setAttribute("data-meta",s);var a=nT();a&&this.element.setAttribute("nonce",a)}var e=t.prototype;return e.attach=function(){if(!(this.element.parentNode||!this.sheet)){tT(this.element,this.sheet.options);var r=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&r&&(this.hasInsertedRules=!1,this.deploy())}},e.detach=function(){if(this.sheet){var r=this.element.parentNode;r&&r.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},e.deploy=function(){var r=this.sheet;if(r){if(r.options.link){this.insertRules(r.rules);return}this.element.textContent=`
`+r.toString()+`
`}},e.insertRules=function(r,i){for(var s=0;s<r.index.length;s++)this.insertRule(r.index[s],s,i)},e.insertRule=function(r,i,s){if(s===void 0&&(s=this.element.sheet),r.rules){var o=r,a=s;if(r.type==="conditional"||r.type==="keyframes"){var u=Ud(s,i);if(a=$d(s,o.toString({children:!1}),u),a===!1)return!1;this.refCssRule(r,u,a)}return this.insertRules(o.rules,a),a}var c=r.toString();if(!c)return!1;var l=Ud(s,i),h=$d(s,c,l);return h===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(r,l,h),h)},e.refCssRule=function(r,i,s){r.renderable=s,r.options.parent instanceof lm&&this.cssRules.splice(i,0,s)},e.deleteRule=function(r){var i=this.element.sheet,s=this.indexOf(r);return s===-1?!1:(i.deleteRule(s),this.cssRules.splice(s,1),!0)},e.indexOf=function(r){return this.cssRules.indexOf(r)},e.replaceRule=function(r,i){var s=this.indexOf(r);return s===-1?!1:(this.element.sheet.deleteRule(s),this.cssRules.splice(s,1),this.insertRule(i,s))},e.getRules=function(){return this.element.sheet.cssRules},t}(),sT=0,oT=function(){function t(n){this.id=sT++,this.version="10.10.0",this.plugins=new HE,this.options={id:{minify:!1},createGenerateId:Ld,Renderer:Ji?iT:null,plugins:[]},this.generateId=Ld({minify:!1});for(var r=0;r<Nd.length;r++)this.plugins.use(Nd[r],{queue:"internal"});this.setup(n)}var e=t.prototype;return e.setup=function(r){return r===void 0&&(r={}),r.createGenerateId&&(this.options.createGenerateId=r.createGenerateId),r.id&&(this.options.id=O({},this.options.id,r.id)),(r.createGenerateId||r.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),r.insertionPoint!=null&&(this.options.insertionPoint=r.insertionPoint),"Renderer"in r&&(this.options.Renderer=r.Renderer),r.plugins&&this.use.apply(this,r.plugins),this},e.createStyleSheet=function(r,i){i===void 0&&(i={});var s=i,o=s.index;typeof o!="number"&&(o=pi.index===0?0:pi.index+1);var a=new lm(r,O({},i,{jss:this,generateId:i.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:o}));return this.plugins.onProcessSheet(a),a},e.removeStyleSheet=function(r){return r.detach(),pi.remove(r),this},e.createRule=function(r,i,s){if(i===void 0&&(i={}),s===void 0&&(s={}),typeof r=="object")return this.createRule(void 0,r,i);var o=O({},s,{name:r,jss:this,Renderer:this.options.Renderer});o.generateId||(o.generateId=this.generateId),o.classes||(o.classes={}),o.keyframes||(o.keyframes={});var a=rl(r,i,o);return a&&this.plugins.onProcessRule(a),a},e.use=function(){for(var r=this,i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return s.forEach(function(a){r.plugins.use(a)}),this},t}(),fm=function(e){return new oT(e)},sl=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function pm(t){var e=null;for(var n in t){var r=t[n],i=typeof r;if(i==="function")e||(e={}),e[n]=r;else if(i==="object"&&r!==null&&!Array.isArray(r)){var s=pm(r);s&&(e||(e={}),e[n]=s)}}return e}/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */fm();var gm=Date.now(),Fa="fnValues"+gm,Ba="fnStyle"+ ++gm,aT=function(){return{onCreateRule:function(n,r,i){if(typeof r!="function")return null;var s=rl(n,{},i);return s[Ba]=r,s},onProcessStyle:function(n,r){if(Fa in r||Ba in r)return n;var i={};for(var s in n){var o=n[s];typeof o=="function"&&(delete n[s],i[s]=o)}return r[Fa]=i,n},onUpdate:function(n,r,i,s){var o=r,a=o[Ba];a&&(o.style=a(n)||{});var u=o[Fa];if(u)for(var c in u)o.prop(c,u[c](n),s)}}},an="@global",Yu="@global ",uT=function(){function t(n,r,i){this.type="global",this.at=an,this.isProcessed=!1,this.key=n,this.options=i,this.rules=new Mo(O({},i,{parent:this}));for(var s in r)this.rules.add(s,r[s]);this.rules.process()}var e=t.prototype;return e.getRule=function(r){return this.rules.get(r)},e.addRule=function(r,i,s){var o=this.rules.add(r,i,s);return o&&this.options.jss.plugins.onProcessRule(o),o},e.replaceRule=function(r,i,s){var o=this.rules.replace(r,i,s);return o&&this.options.jss.plugins.onProcessRule(o),o},e.indexOf=function(r){return this.rules.indexOf(r)},e.toString=function(r){return this.rules.toString(r)},t}(),cT=function(){function t(n,r,i){this.type="global",this.at=an,this.isProcessed=!1,this.key=n,this.options=i;var s=n.substr(Yu.length);this.rule=i.jss.createRule(s,r,O({},i,{parent:this}))}var e=t.prototype;return e.toString=function(r){return this.rule?this.rule.toString(r):""},t}(),lT=/\s*,\s*/g;function mm(t,e){for(var n=t.split(lT),r="",i=0;i<n.length;i++)r+=e+" "+n[i].trim(),n[i+1]&&(r+=", ");return r}function hT(t,e){var n=t.options,r=t.style,i=r?r[an]:null;if(i){for(var s in i)e.addRule(s,i[s],O({},n,{selector:mm(s,t.selector)}));delete r[an]}}function dT(t,e){var n=t.options,r=t.style;for(var i in r)if(!(i[0]!=="@"||i.substr(0,an.length)!==an)){var s=mm(i.substr(an.length),t.selector);e.addRule(s,r[i],O({},n,{selector:s})),delete r[i]}}function fT(){function t(n,r,i){if(!n)return null;if(n===an)return new uT(n,r,i);if(n[0]==="@"&&n.substr(0,Yu.length)===Yu)return new cT(n,r,i);var s=i.parent;return s&&(s.type==="global"||s.options.parent&&s.options.parent.type==="global")&&(i.scoped=!1),!i.selector&&i.scoped===!1&&(i.selector=n),null}function e(n,r){n.type!=="style"||!r||(hT(n,r),dT(n,r))}return{onCreateRule:t,onProcessRule:e}}var Fd=/\s*,\s*/g,pT=/&/g,gT=/\$([\w-]+)/g;function mT(){function t(i,s){return function(o,a){var u=i.getRule(a)||s&&s.getRule(a);return u?u.selector:a}}function e(i,s){for(var o=s.split(Fd),a=i.split(Fd),u="",c=0;c<o.length;c++)for(var l=o[c],h=0;h<a.length;h++){var f=a[h];u&&(u+=", "),u+=f.indexOf("&")!==-1?f.replace(pT,l):l+" "+f}return u}function n(i,s,o){if(o)return O({},o,{index:o.index+1});var a=i.options.nestingLevel;a=a===void 0?1:a+1;var u=O({},i.options,{nestingLevel:a,index:s.indexOf(i)+1});return delete u.name,u}function r(i,s,o){if(s.type!=="style")return i;var a=s,u=a.options.parent,c,l;for(var h in i){var f=h.indexOf("&")!==-1,d=h[0]==="@";if(!(!f&&!d)){if(c=n(a,u,c),f){var p=e(h,a.selector);l||(l=t(u,o)),p=p.replace(gT,l);var g=a.key+"-"+h;"replaceRule"in u?u.replaceRule(g,i[h],O({},c,{selector:p})):u.addRule(g,i[h],O({},c,{selector:p}))}else d&&u.addRule(h,{},c).addRule(a.key,i[h],{selector:a.selector});delete i[h]}}return i}return{onProcessStyle:r}}var _T=/[A-Z]/g,vT=/^ms-/,ja={};function yT(t){return"-"+t.toLowerCase()}function _m(t){if(ja.hasOwnProperty(t))return ja[t];var e=t.replace(_T,yT);return ja[t]=vT.test(e)?"-"+e:e}function ro(t){var e={};for(var n in t){var r=n.indexOf("--")===0?n:_m(n);e[r]=t[n]}return t.fallbacks&&(Array.isArray(t.fallbacks)?e.fallbacks=t.fallbacks.map(ro):e.fallbacks=ro(t.fallbacks)),e}function wT(){function t(n){if(Array.isArray(n)){for(var r=0;r<n.length;r++)n[r]=ro(n[r]);return n}return ro(n)}function e(n,r,i){if(r.indexOf("--")===0)return n;var s=_m(r);return r===s?n:(i.prop(s,n),null)}return{onProcessStyle:t,onChangeValue:e}}var _=sl&&CSS?CSS.px:"px",Is=sl&&CSS?CSS.ms:"ms",nr=sl&&CSS?CSS.percent:"%",ET={"animation-delay":Is,"animation-duration":Is,"background-position":_,"background-position-x":_,"background-position-y":_,"background-size":_,border:_,"border-bottom":_,"border-bottom-left-radius":_,"border-bottom-right-radius":_,"border-bottom-width":_,"border-left":_,"border-left-width":_,"border-radius":_,"border-right":_,"border-right-width":_,"border-top":_,"border-top-left-radius":_,"border-top-right-radius":_,"border-top-width":_,"border-width":_,"border-block":_,"border-block-end":_,"border-block-end-width":_,"border-block-start":_,"border-block-start-width":_,"border-block-width":_,"border-inline":_,"border-inline-end":_,"border-inline-end-width":_,"border-inline-start":_,"border-inline-start-width":_,"border-inline-width":_,"border-start-start-radius":_,"border-start-end-radius":_,"border-end-start-radius":_,"border-end-end-radius":_,margin:_,"margin-bottom":_,"margin-left":_,"margin-right":_,"margin-top":_,"margin-block":_,"margin-block-end":_,"margin-block-start":_,"margin-inline":_,"margin-inline-end":_,"margin-inline-start":_,padding:_,"padding-bottom":_,"padding-left":_,"padding-right":_,"padding-top":_,"padding-block":_,"padding-block-end":_,"padding-block-start":_,"padding-inline":_,"padding-inline-end":_,"padding-inline-start":_,"mask-position-x":_,"mask-position-y":_,"mask-size":_,height:_,width:_,"min-height":_,"max-height":_,"min-width":_,"max-width":_,bottom:_,left:_,top:_,right:_,inset:_,"inset-block":_,"inset-block-end":_,"inset-block-start":_,"inset-inline":_,"inset-inline-end":_,"inset-inline-start":_,"box-shadow":_,"text-shadow":_,"column-gap":_,"column-rule":_,"column-rule-width":_,"column-width":_,"font-size":_,"font-size-delta":_,"letter-spacing":_,"text-decoration-thickness":_,"text-indent":_,"text-stroke":_,"text-stroke-width":_,"word-spacing":_,motion:_,"motion-offset":_,outline:_,"outline-offset":_,"outline-width":_,perspective:_,"perspective-origin-x":nr,"perspective-origin-y":nr,"transform-origin":nr,"transform-origin-x":nr,"transform-origin-y":nr,"transform-origin-z":nr,"transition-delay":Is,"transition-duration":Is,"vertical-align":_,"flex-basis":_,"shape-margin":_,size:_,gap:_,grid:_,"grid-gap":_,"row-gap":_,"grid-row-gap":_,"grid-column-gap":_,"grid-template-rows":_,"grid-template-columns":_,"grid-auto-rows":_,"grid-auto-columns":_,"box-shadow-x":_,"box-shadow-y":_,"box-shadow-blur":_,"box-shadow-spread":_,"font-line-height":_,"text-shadow-x":_,"text-shadow-y":_,"text-shadow-blur":_};function vm(t){var e=/(-[a-z])/g,n=function(o){return o[1].toUpperCase()},r={};for(var i in t)r[i]=t[i],r[i.replace(e,n)]=t[i];return r}var TT=vm(ET);function gi(t,e,n){if(e==null)return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]=gi(t,e[r],n);else if(typeof e=="object")if(t==="fallbacks")for(var i in e)e[i]=gi(i,e[i],n);else for(var s in e)e[s]=gi(t+"-"+s,e[s],n);else if(typeof e=="number"&&isNaN(e)===!1){var o=n[t]||TT[t];return o&&!(e===0&&o===_)?typeof o=="function"?o(e).toString():""+e+o:e.toString()}return e}function IT(t){t===void 0&&(t={});var e=vm(t);function n(i,s){if(s.type!=="style")return i;for(var o in i)i[o]=gi(o,i[o],e);return i}function r(i,s){return gi(s,i,e)}return{onProcessStyle:n,onChangeValue:r}}function Xu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function bT(t){if(Array.isArray(t))return Xu(t)}function RT(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ST(t,e){if(t){if(typeof t=="string")return Xu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xu(t,e)}}function AT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ym(t){return bT(t)||RT(t)||ST(t)||AT()}var si="",Zu="",wm="",Em="",PT=Ji&&"ontouchstart"in document.documentElement;if(Ji){var za={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"},CT=document.createElement("p"),qa=CT.style,kT="Transform";for(var Ha in za)if(Ha+kT in qa){si=Ha,Zu=za[Ha];break}si==="Webkit"&&"msHyphens"in qa&&(si="ms",Zu=za.ms,Em="edge"),si==="Webkit"&&"-apple-trailing-word"in qa&&(wm="apple")}var U={js:si,css:Zu,vendor:wm,browser:Em,isTouch:PT};function xT(t){return t[1]==="-"||U.js==="ms"?t:"@"+U.css+"keyframes"+t.substr(10)}var OT={noPrefill:["appearance"],supportedProperty:function(e){return e!=="appearance"?!1:U.js==="ms"?"-webkit-"+e:U.css+e}},DT={noPrefill:["color-adjust"],supportedProperty:function(e){return e!=="color-adjust"?!1:U.js==="Webkit"?U.css+"print-"+e:e}},NT=/[-\s]+(.)?/g;function VT(t,e){return e?e.toUpperCase():""}function ol(t){return t.replace(NT,VT)}function fn(t){return ol("-"+t)}var MT={noPrefill:["mask"],supportedProperty:function(e,n){if(!/^mask/.test(e))return!1;if(U.js==="Webkit"){var r="mask-image";if(ol(r)in n)return e;if(U.js+fn(r)in n)return U.css+e}return e}},LT={noPrefill:["text-orientation"],supportedProperty:function(e){return e!=="text-orientation"?!1:U.vendor==="apple"&&!U.isTouch?U.css+e:e}},$T={noPrefill:["transform"],supportedProperty:function(e,n,r){return e!=="transform"?!1:r.transform?e:U.css+e}},UT={noPrefill:["transition"],supportedProperty:function(e,n,r){return e!=="transition"?!1:r.transition?e:U.css+e}},FT={noPrefill:["writing-mode"],supportedProperty:function(e){return e!=="writing-mode"?!1:U.js==="Webkit"||U.js==="ms"&&U.browser!=="edge"?U.css+e:e}},BT={noPrefill:["user-select"],supportedProperty:function(e){return e!=="user-select"?!1:U.js==="Moz"||U.js==="ms"||U.vendor==="apple"?U.css+e:e}},jT={supportedProperty:function(e,n){if(!/^break-/.test(e))return!1;if(U.js==="Webkit"){var r="WebkitColumn"+fn(e);return r in n?U.css+"column-"+e:!1}if(U.js==="Moz"){var i="page"+fn(e);return i in n?"page-"+e:!1}return!1}},zT={supportedProperty:function(e,n){if(!/^(border|margin|padding)-inline/.test(e))return!1;if(U.js==="Moz")return e;var r=e.replace("-inline","");return U.js+fn(r)in n?U.css+r:!1}},qT={supportedProperty:function(e,n){return ol(e)in n?e:!1}},HT={supportedProperty:function(e,n){var r=fn(e);return e[0]==="-"||e[0]==="-"&&e[1]==="-"?e:U.js+r in n?U.css+e:U.js!=="Webkit"&&"Webkit"+r in n?"-webkit-"+e:!1}},WT={supportedProperty:function(e){return e.substring(0,11)!=="scroll-snap"?!1:U.js==="ms"?""+U.css+e:e}},GT={supportedProperty:function(e){return e!=="overscroll-behavior"?!1:U.js==="ms"?U.css+"scroll-chaining":e}},KT={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"},QT={supportedProperty:function(e,n){var r=KT[e];return r&&U.js+fn(r)in n?U.css+r:!1}},Tm={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"},JT=Object.keys(Tm),YT=function(e){return U.css+e},XT={supportedProperty:function(e,n,r){var i=r.multiple;if(JT.indexOf(e)>-1){var s=Tm[e];if(!Array.isArray(s))return U.js+fn(s)in n?U.css+s:!1;if(!i)return!1;for(var o=0;o<s.length;o++)if(!(U.js+fn(s[0])in n))return!1;return s.map(YT)}return!1}},Im=[OT,DT,MT,LT,$T,UT,FT,BT,jT,zT,qT,HT,WT,GT,QT,XT],Bd=Im.filter(function(t){return t.supportedProperty}).map(function(t){return t.supportedProperty}),ZT=Im.filter(function(t){return t.noPrefill}).reduce(function(t,e){return t.push.apply(t,ym(e.noPrefill)),t},[]),oi,Rn={};if(Ji){oi=document.createElement("p");var Wa=window.getComputedStyle(document.documentElement,"");for(var Ga in Wa)isNaN(Ga)||(Rn[Wa[Ga]]=Wa[Ga]);ZT.forEach(function(t){return delete Rn[t]})}function ec(t,e){if(e===void 0&&(e={}),!oi)return t;if(Rn[t]!=null)return Rn[t];(t==="transition"||t==="transform")&&(e[t]=t in oi.style);for(var n=0;n<Bd.length&&(Rn[t]=Bd[n](t,oi.style,e),!Rn[t]);n++);try{oi.style[t]=""}catch{return!1}return Rn[t]}var rr={},eI={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1},tI=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g,Xt;function nI(t,e,n){if(e==="var")return"var";if(e==="all")return"all";if(n==="all")return", all";var r=e?ec(e):", "+ec(n);return r||e||n}Ji&&(Xt=document.createElement("p"));function jd(t,e){var n=e;if(!Xt||t==="content")return e;if(typeof n!="string"||!isNaN(parseInt(n,10)))return n;var r=t+n;if(rr[r]!=null)return rr[r];try{Xt.style[t]=n}catch{return rr[r]=!1,!1}if(eI[t])n=n.replace(tI,nI);else if(Xt.style[t]===""&&(n=U.css+n,n==="-ms-flex"&&(Xt.style[t]="-ms-flexbox"),Xt.style[t]=n,Xt.style[t]===""))return rr[r]=!1,!1;return Xt.style[t]="",rr[r]=n,rr[r]}function rI(){function t(i){if(i.type==="keyframes"){var s=i;s.at=xT(s.at)}}function e(i){for(var s in i){var o=i[s];if(s==="fallbacks"&&Array.isArray(o)){i[s]=o.map(e);continue}var a=!1,u=ec(s);u&&u!==s&&(a=!0);var c=!1,l=jd(u,Nn(o));l&&l!==o&&(c=!0),(a||c)&&(a&&delete i[s],i[u||s]=l||o)}return i}function n(i,s){return s.type!=="style"?i:e(i)}function r(i,s){return jd(s,Nn(i))||i}return{onProcessRule:t,onProcessStyle:n,onChangeValue:r}}function iI(){var t=function(n,r){return n.length===r.length?n>r?1:-1:n.length-r.length};return{onProcessStyle:function(n,r){if(r.type!=="style")return n;for(var i={},s=Object.keys(n).sort(t),o=0;o<s.length;o++)i[s[o]]=n[s[o]];return i}}}function sI(){return{plugins:[aT(),fT(),mT(),wT(),IT(),typeof window>"u"?null:rI(),iI()]}}function bm(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.baseClasses,n=t.newClasses;if(t.Component,!n)return e;var r=O({},e);return Object.keys(n).forEach(function(i){n[i]&&(r[i]="".concat(e[i]," ").concat(n[i]))}),r}var oI={set:function(e,n,r,i){var s=e.get(n);s||(s=new Map,e.set(n,s)),s.set(r,i)},get:function(e,n,r){var i=e.get(n);return i?i.get(r):void 0},delete:function(e,n,r){var i=e.get(n);i.delete(r)}};const lr=oI;var aI=te.createContext(null);const uI=aI;function al(){var t=te.useContext(uI);return t}var cI=fm(sI()),lI=TE(),hI=new Map,dI={disableGeneration:!1,generateClassName:lI,jss:cI,sheetsCache:null,sheetsManager:hI,sheetsRegistry:null},fI=te.createContext(dI),zd=-1e9;function pI(){return zd+=1,zd}var gI={};const mI=gI;function _I(t){var e=typeof t=="function";return{create:function(r,i){var s;try{s=e?t(r):t}catch(u){throw u}if(!i||!r.overrides||!r.overrides[i])return s;var o=r.overrides[i],a=O({},s);return Object.keys(o).forEach(function(u){a[u]=Ar(a[u],o[u])}),a},options:{}}}function vI(t,e,n){var r=t.state,i=t.stylesOptions;if(i.disableGeneration)return e||{};r.cacheClasses||(r.cacheClasses={value:null,lastProp:null,lastJSS:{}});var s=!1;return r.classes!==r.cacheClasses.lastJSS&&(r.cacheClasses.lastJSS=r.classes,s=!0),e!==r.cacheClasses.lastProp&&(r.cacheClasses.lastProp=e,s=!0),s&&(r.cacheClasses.value=bm({baseClasses:r.cacheClasses.lastJSS,newClasses:e,Component:n})),r.cacheClasses.value}function yI(t,e){var n=t.state,r=t.theme,i=t.stylesOptions,s=t.stylesCreator,o=t.name;if(!i.disableGeneration){var a=lr.get(i.sheetsManager,s,r);a||(a={refs:0,staticSheet:null,dynamicStyles:null},lr.set(i.sheetsManager,s,r,a));var u=O({},s.options,i,{theme:r,flip:typeof i.flip=="boolean"?i.flip:r.direction==="rtl"});u.generateId=u.serverGenerateClassName||u.generateClassName;var c=i.sheetsRegistry;if(a.refs===0){var l;i.sheetsCache&&(l=lr.get(i.sheetsCache,s,r));var h=s.create(r,o);l||(l=i.jss.createStyleSheet(h,O({link:!1},u)),l.attach(),i.sheetsCache&&lr.set(i.sheetsCache,s,r,l)),c&&c.add(l),a.staticSheet=l,a.dynamicStyles=pm(h)}if(a.dynamicStyles){var f=i.jss.createStyleSheet(a.dynamicStyles,O({link:!0},u));f.update(e),f.attach(),n.dynamicSheet=f,n.classes=bm({baseClasses:a.staticSheet.classes,newClasses:f.classes}),c&&c.add(f)}else n.classes=a.staticSheet.classes;a.refs+=1}}function wI(t,e){var n=t.state;n.dynamicSheet&&n.dynamicSheet.update(e)}function EI(t){var e=t.state,n=t.theme,r=t.stylesOptions,i=t.stylesCreator;if(!r.disableGeneration){var s=lr.get(r.sheetsManager,i,n);s.refs-=1;var o=r.sheetsRegistry;s.refs===0&&(lr.delete(r.sheetsManager,i,n),r.jss.removeStyleSheet(s.staticSheet),o&&o.remove(s.staticSheet)),e.dynamicSheet&&(r.jss.removeStyleSheet(e.dynamicSheet),o&&o.remove(e.dynamicSheet))}}function TI(t,e){var n=te.useRef([]),r,i=te.useMemo(function(){return{}},e);n.current!==i&&(n.current=i,r=t()),te.useEffect(function(){return function(){r&&r()}},[i])}function II(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.name,r=e.classNamePrefix,i=e.Component,s=e.defaultTheme,o=s===void 0?mI:s,a=rt(e,["name","classNamePrefix","Component","defaultTheme"]),u=_I(t),c=n||r||"makeStyles";u.options={index:pI(),name:n,meta:c,classNamePrefix:c};var l=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=al()||o,p=O({},te.useContext(fI),a),g=te.useRef(),m=te.useRef();TI(function(){var T={name:n,state:{},stylesCreator:u,stylesOptions:p,theme:d};return yI(T,f),m.current=!1,g.current=T,function(){EI(T)}},[d,u]),te.useEffect(function(){m.current&&wI(g.current,f),m.current=!0});var w=vI(g.current,f.classes,i);return w};return l}function bI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Rm={exports:{}},Q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we=typeof Symbol=="function"&&Symbol.for,ul=we?Symbol.for("react.element"):60103,cl=we?Symbol.for("react.portal"):60106,Lo=we?Symbol.for("react.fragment"):60107,$o=we?Symbol.for("react.strict_mode"):60108,Uo=we?Symbol.for("react.profiler"):60114,Fo=we?Symbol.for("react.provider"):60109,Bo=we?Symbol.for("react.context"):60110,ll=we?Symbol.for("react.async_mode"):60111,jo=we?Symbol.for("react.concurrent_mode"):60111,zo=we?Symbol.for("react.forward_ref"):60112,qo=we?Symbol.for("react.suspense"):60113,RI=we?Symbol.for("react.suspense_list"):60120,Ho=we?Symbol.for("react.memo"):60115,Wo=we?Symbol.for("react.lazy"):60116,SI=we?Symbol.for("react.block"):60121,AI=we?Symbol.for("react.fundamental"):60117,PI=we?Symbol.for("react.responder"):60118,CI=we?Symbol.for("react.scope"):60119;function Ke(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case ul:switch(t=t.type,t){case ll:case jo:case Lo:case Uo:case $o:case qo:return t;default:switch(t=t&&t.$$typeof,t){case Bo:case zo:case Wo:case Ho:case Fo:return t;default:return e}}case cl:return e}}}function Sm(t){return Ke(t)===jo}Q.AsyncMode=ll;Q.ConcurrentMode=jo;Q.ContextConsumer=Bo;Q.ContextProvider=Fo;Q.Element=ul;Q.ForwardRef=zo;Q.Fragment=Lo;Q.Lazy=Wo;Q.Memo=Ho;Q.Portal=cl;Q.Profiler=Uo;Q.StrictMode=$o;Q.Suspense=qo;Q.isAsyncMode=function(t){return Sm(t)||Ke(t)===ll};Q.isConcurrentMode=Sm;Q.isContextConsumer=function(t){return Ke(t)===Bo};Q.isContextProvider=function(t){return Ke(t)===Fo};Q.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===ul};Q.isForwardRef=function(t){return Ke(t)===zo};Q.isFragment=function(t){return Ke(t)===Lo};Q.isLazy=function(t){return Ke(t)===Wo};Q.isMemo=function(t){return Ke(t)===Ho};Q.isPortal=function(t){return Ke(t)===cl};Q.isProfiler=function(t){return Ke(t)===Uo};Q.isStrictMode=function(t){return Ke(t)===$o};Q.isSuspense=function(t){return Ke(t)===qo};Q.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Lo||t===jo||t===Uo||t===$o||t===qo||t===RI||typeof t=="object"&&t!==null&&(t.$$typeof===Wo||t.$$typeof===Ho||t.$$typeof===Fo||t.$$typeof===Bo||t.$$typeof===zo||t.$$typeof===AI||t.$$typeof===PI||t.$$typeof===CI||t.$$typeof===SI)};Q.typeOf=Ke;Rm.exports=Q;var kI=Rm.exports,hl=kI,xI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},OI={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},DI={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Am={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dl={};dl[hl.ForwardRef]=DI;dl[hl.Memo]=Am;function qd(t){return hl.isMemo(t)?Am:dl[t.$$typeof]||xI}var NI=Object.defineProperty,VI=Object.getOwnPropertyNames,Hd=Object.getOwnPropertySymbols,MI=Object.getOwnPropertyDescriptor,LI=Object.getPrototypeOf,Wd=Object.prototype;function Pm(t,e,n){if(typeof e!="string"){if(Wd){var r=LI(e);r&&r!==Wd&&Pm(t,r,n)}var i=VI(e);Hd&&(i=i.concat(Hd(e)));for(var s=qd(t),o=qd(e),a=0;a<i.length;++a){var u=i[a];if(!OI[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var c=MI(e,u);try{NI(t,u,c)}catch{}}}}return t}var $I=Pm;const UI=Z0($I);var FI=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return function(r){var i=n.defaultTheme,s=n.withTheme,o=s===void 0?!1:s,a=n.name,u=rt(n,["defaultTheme","withTheme","name"]),c=a,l=II(e,O({defaultTheme:i,Component:r,name:a||r.displayName,classNamePrefix:c},u)),h=te.forwardRef(function(d,p){d.classes;var g=d.innerRef,m=rt(d,["classes","innerRef"]),w=l(O({},r.defaultProps,d)),T,I=m;return(typeof a=="string"||o)&&(T=al()||i,a&&(I=am({theme:T,name:a,props:m})),o&&!I.theme&&(I.theme=T)),te.createElement(r,O({ref:g||p,classes:w},I))});return UI(h,r),h}},Qt=["xs","sm","md","lg","xl"];function BI(t){var e=t.values,n=e===void 0?{xs:0,sm:600,md:960,lg:1280,xl:1920}:e,r=t.unit,i=r===void 0?"px":r,s=t.step,o=s===void 0?5:s,a=rt(t,["values","unit","step"]);function u(d){var p=typeof n[d]=="number"?n[d]:d;return"@media (min-width:".concat(p).concat(i,")")}function c(d){var p=Qt.indexOf(d)+1,g=n[Qt[p]];if(p===Qt.length)return u("xs");var m=typeof g=="number"&&p>0?g:d;return"@media (max-width:".concat(m-o/100).concat(i,")")}function l(d,p){var g=Qt.indexOf(p);return g===Qt.length-1?u(d):"@media (min-width:".concat(typeof n[d]=="number"?n[d]:d).concat(i,") and ")+"(max-width:".concat((g!==-1&&typeof n[Qt[g+1]]=="number"?n[Qt[g+1]]:p)-o/100).concat(i,")")}function h(d){return l(d,d)}function f(d){return n[d]}return O({keys:Qt,values:n,up:u,down:c,between:l,only:h,width:f},a)}function jI(t,e,n){var r;return O({gutters:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:",`
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
      },
      `].join(`
`)),O({paddingLeft:e(2),paddingRight:e(2)},s,La({},t.up("sm"),O({paddingLeft:e(3),paddingRight:e(3)},s[t.up("sm")])))},toolbar:(r={minHeight:56},La(r,"".concat(t.up("xs")," and (orientation: landscape)"),{minHeight:48}),La(r,t.up("sm"),{minHeight:64}),r)},n)}var zI={black:"#000",white:"#fff"};const io=zI;var qI={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"};const fl=qI;var Ka={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},Qa={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},Ja={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Ya={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Xa={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Za={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function Cm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.min(Math.max(e,t),n)}function HI(t){t=t.substr(1);var e=new RegExp(".{1,".concat(t.length>=6?2:1,"}"),"g"),n=t.match(e);return n&&n[0].length===1&&(n=n.map(function(r){return r+r})),n?"rgb".concat(n.length===4?"a":"","(").concat(n.map(function(r,i){return i<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3}).join(", "),")"):""}function WI(t){t=Pr(t);var e=t,n=e.values,r=n[0],i=n[1]/100,s=n[2]/100,o=i*Math.min(s,1-s),a=function(h){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:(h+r/30)%12;return s-o*Math.max(Math.min(f-3,9-f,1),-1)},u="rgb",c=[Math.round(a(0)*255),Math.round(a(8)*255),Math.round(a(4)*255)];return t.type==="hsla"&&(u+="a",c.push(n[3])),pl({type:u,values:c})}function Pr(t){if(t.type)return t;if(t.charAt(0)==="#")return Pr(HI(t));var e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla"].indexOf(n)===-1)throw new Error(no(3,t));var r=t.substring(e+1,t.length-1).split(",");return r=r.map(function(i){return parseFloat(i)}),{type:n,values:r}}function pl(t){var e=t.type,n=t.values;return e.indexOf("rgb")!==-1?n=n.map(function(r,i){return i<3?parseInt(r,10):r}):e.indexOf("hsl")!==-1&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(e,"(").concat(n.join(", "),")")}function GI(t,e){var n=Gd(t),r=Gd(e);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Gd(t){t=Pr(t);var e=t.type==="hsl"?Pr(WI(t)).values:t.values;return e=e.map(function(n){return n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function KI(t,e){if(t=Pr(t),e=Cm(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1)for(var n=0;n<3;n+=1)t.values[n]*=1-e;return pl(t)}function QI(t,e){if(t=Pr(t),e=Cm(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(var n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;return pl(t)}var Kd={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:io.white,default:fl[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},eu={text:{primary:io.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:fl[800],default:"#303030"},action:{active:io.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Qd(t,e,n,r){var i=r.light||r,s=r.dark||r*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=QI(t.main,i):e==="dark"&&(t.dark=KI(t.main,s)))}function JI(t){var e=t.primary,n=e===void 0?{light:Ka[300],main:Ka[500],dark:Ka[700]}:e,r=t.secondary,i=r===void 0?{light:Qa.A200,main:Qa.A400,dark:Qa.A700}:r,s=t.error,o=s===void 0?{light:Ja[300],main:Ja[500],dark:Ja[700]}:s,a=t.warning,u=a===void 0?{light:Ya[300],main:Ya[500],dark:Ya[700]}:a,c=t.info,l=c===void 0?{light:Xa[300],main:Xa[500],dark:Xa[700]}:c,h=t.success,f=h===void 0?{light:Za[300],main:Za[500],dark:Za[700]}:h,d=t.type,p=d===void 0?"light":d,g=t.contrastThreshold,m=g===void 0?3:g,w=t.tonalOffset,T=w===void 0?.2:w,I=rt(t,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function S(W){var V=GI(W,eu.text.primary)>=m?eu.text.primary:Kd.text.primary;return V}var k=function(V){var le=arguments.length>1&&arguments[1]!==void 0?arguments[1]:500,wn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:300,qt=arguments.length>3&&arguments[3]!==void 0?arguments[3]:700;if(V=O({},V),!V.main&&V[le]&&(V.main=V[le]),!V.main)throw new Error(no(4,le));if(typeof V.main!="string")throw new Error(no(5,JSON.stringify(V.main)));return Qd(V,"light",wn,T),Qd(V,"dark",qt,T),V.contrastText||(V.contrastText=S(V.main)),V},A={dark:eu,light:Kd},P=Ar(O({common:io,type:p,primary:k(n),secondary:k(i,"A400","A200","A700"),error:k(o),warning:k(u),info:k(l),success:k(f),grey:fl,contrastThreshold:m,getContrastText:S,augmentColor:k,tonalOffset:T},A[p]),I);return P}function km(t){return Math.round(t*1e5)/1e5}function YI(t){return km(t)}var Jd={textTransform:"uppercase"},Yd='"Roboto", "Helvetica", "Arial", sans-serif';function XI(t,e){var n=typeof e=="function"?e(t):e,r=n.fontFamily,i=r===void 0?Yd:r,s=n.fontSize,o=s===void 0?14:s,a=n.fontWeightLight,u=a===void 0?300:a,c=n.fontWeightRegular,l=c===void 0?400:c,h=n.fontWeightMedium,f=h===void 0?500:h,d=n.fontWeightBold,p=d===void 0?700:d,g=n.htmlFontSize,m=g===void 0?16:g,w=n.allVariants,T=n.pxToRem,I=rt(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]),S=o/14,k=T||function(W){return"".concat(W/m*S,"rem")},A=function(V,le,wn,qt,Qr){return O({fontFamily:i,fontWeight:V,fontSize:k(le),lineHeight:wn},i===Yd?{letterSpacing:"".concat(km(qt/le),"em")}:{},Qr,w)},P={h1:A(u,96,1.167,-1.5),h2:A(u,60,1.2,-.5),h3:A(l,48,1.167,0),h4:A(l,34,1.235,.25),h5:A(l,24,1.334,0),h6:A(f,20,1.6,.15),subtitle1:A(l,16,1.75,.15),subtitle2:A(f,14,1.57,.1),body1:A(l,16,1.5,.15),body2:A(l,14,1.43,.15),button:A(f,14,1.75,.4,Jd),caption:A(l,12,1.66,.4),overline:A(l,12,2.66,1,Jd)};return Ar(O({htmlFontSize:m,pxToRem:k,round:YI,fontFamily:i,fontSize:o,fontWeightLight:u,fontWeightRegular:l,fontWeightMedium:f,fontWeightBold:p},P),I,{clone:!1})}var ZI=.2,e1=.14,t1=.12;function ne(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(ZI,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(e1,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(t1,")")].join(",")}var n1=["none",ne(0,2,1,-1,0,1,1,0,0,1,3,0),ne(0,3,1,-2,0,2,2,0,0,1,5,0),ne(0,3,3,-2,0,3,4,0,0,1,8,0),ne(0,2,4,-1,0,4,5,0,0,1,10,0),ne(0,3,5,-1,0,5,8,0,0,1,14,0),ne(0,3,5,-1,0,6,10,0,0,1,18,0),ne(0,4,5,-2,0,7,10,1,0,2,16,1),ne(0,5,5,-3,0,8,10,1,0,3,14,2),ne(0,5,6,-3,0,9,12,1,0,3,16,2),ne(0,6,6,-3,0,10,14,1,0,4,18,3),ne(0,6,7,-4,0,11,15,1,0,4,20,3),ne(0,7,8,-4,0,12,17,2,0,5,22,4),ne(0,7,8,-4,0,13,19,2,0,5,24,4),ne(0,7,9,-4,0,14,21,2,0,5,26,4),ne(0,8,9,-5,0,15,22,2,0,6,28,5),ne(0,8,10,-5,0,16,24,2,0,6,30,5),ne(0,8,11,-5,0,17,26,2,0,6,32,5),ne(0,9,11,-5,0,18,28,2,0,7,34,6),ne(0,9,12,-6,0,19,29,2,0,7,36,6),ne(0,10,13,-6,0,20,31,3,0,8,38,7),ne(0,10,13,-6,0,21,33,3,0,8,40,7),ne(0,10,14,-6,0,22,35,3,0,8,42,7),ne(0,11,14,-7,0,23,36,3,0,9,44,8),ne(0,11,15,-7,0,24,38,3,0,9,46,8)];const r1=n1;var i1={borderRadius:4};const s1=i1;function o1(t){var e=t.spacing||8;return typeof e=="number"?function(n){return e*n}:Array.isArray(e)?function(n){return e[n]}:typeof e=="function"?e:function(){}}function a1(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8;if(t.mui)return t;var e=o1({spacing:t}),n=function(){for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return s.length===0?e(1):s.length===1?e(s[0]):s.map(function(a){if(typeof a=="string")return a;var u=e(a);return typeof u=="number"?"".concat(u,"px"):u}).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return t}}),n.mui=!0,n}var Xd={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Zd={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ef(t){return"".concat(Math.round(t),"ms")}const u1={easing:Xd,duration:Zd,create:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["all"],n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.duration,i=r===void 0?Zd.standard:r,s=n.easing,o=s===void 0?Xd.easeInOut:s,a=n.delay,u=a===void 0?0:a;return rt(n,["duration","easing","delay"]),(Array.isArray(e)?e:[e]).map(function(c){return"".concat(c," ").concat(typeof i=="string"?i:ef(i)," ").concat(o," ").concat(typeof u=="string"?u:ef(u))}).join(",")},getAutoHeightDuration:function(e){if(!e)return 0;var n=e/36;return Math.round((4+15*Math.pow(n,.25)+n/5)*10)}};var c1={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};const xm=c1;function l1(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.breakpoints,n=e===void 0?{}:e,r=t.mixins,i=r===void 0?{}:r,s=t.palette,o=s===void 0?{}:s,a=t.spacing,u=t.typography,c=u===void 0?{}:u,l=rt(t,["breakpoints","mixins","palette","spacing","typography"]),h=JI(o),f=BI(n),d=a1(a),p=Ar({breakpoints:f,direction:"ltr",mixins:jI(f,d,i),overrides:{},palette:h,props:{},shadows:r1,typography:XI(h,c),spacing:d,shape:s1,transitions:u1,zIndex:xm},l),g=arguments.length,m=new Array(g>1?g-1:0),w=1;w<g;w++)m[w-1]=arguments[w];return p=m.reduce(function(T,I){return Ar(T,I)},p),p}var h1=l1();const d1=h1;function Om(t,e){return FI(t,O({defaultTheme:d1},e))}var f1=function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}},Dm=Kn(function(e,n){var r=e.children,i=e.classes,s=e.className,o=e.color,a=o===void 0?"inherit":o,u=e.component,c=u===void 0?"svg":u,l=e.fontSize,h=l===void 0?"medium":l,f=e.htmlColor,d=e.titleAccess,p=e.viewBox,g=p===void 0?"0 0 24 24":p,m=rt(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return Y(c,O({className:om(i.root,s,a!=="inherit"&&i["color".concat(ju(a))],h!=="default"&&h!=="medium"&&i["fontSize".concat(ju(h))]),focusable:"false",viewBox:g,color:f,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:n},m),r,d?Y("title",null,d):null)});Dm.muiName="SvgIcon";const tf=Om(f1,{name:"MuiSvgIcon"})(Dm);function Nm(t,e){var n=function(i,s){return te.createElement(tf,O({ref:s},i),t)};return n.muiName=tf.muiName,te.memo(te.forwardRef(n))}function p1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:166,n;function r(){for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];var a=this,u=function(){t.apply(a,s)};clearTimeout(n),n=setTimeout(u,e)}return r.clear=function(){clearTimeout(n)},r}function g1(t,e){return function(){return null}}function m1(t,e){return dn(t)&&e.indexOf(t.type.muiName)!==-1}function Br(t){return t&&t.ownerDocument||document}function Vm(t){var e=Br(t);return e.defaultView||window}function _1(t){return function(){return null}}function Ci(t,e){typeof t=="function"?t(e):t&&(t.current=e)}function v1(t,e,n,r,i){return null}function y1(t){var e=t.controlled,n=t.default;t.name,t.state;var r=ze(e!==void 0),i=r.current,s=We(n),o=s[0],a=s[1],u=i?e:o,c=hn(function(l){i||a(l)},[]);return[u,c]}var w1=typeof window<"u"?Gn:tt;function tc(t){var e=ze(t);return w1(function(){e.current=t}),hn(function(){return e.current.apply(void 0,arguments)},[])}function Go(t,e){return Gi(function(){return t==null&&e==null?null:function(n){Ci(t,n),Ci(e,n)}},[t,e])}function E1(t){var e=We(t),n=e[0],r=e[1],i=t||n;return tt(function(){n==null&&r("mui-".concat(Math.round(Math.random()*1e5)))},[n]),i}var Ko=!0,nc=!1,nf=null,T1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function I1(t){var e=t.type,n=t.tagName;return!!(n==="INPUT"&&T1[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function b1(t){t.metaKey||t.altKey||t.ctrlKey||(Ko=!0)}function tu(){Ko=!1}function R1(){this.visibilityState==="hidden"&&nc&&(Ko=!0)}function S1(t){t.addEventListener("keydown",b1,!0),t.addEventListener("mousedown",tu,!0),t.addEventListener("pointerdown",tu,!0),t.addEventListener("touchstart",tu,!0),t.addEventListener("visibilitychange",R1,!0)}function A1(t){var e=t.target;try{return e.matches(":focus-visible")}catch{}return Ko||I1(e)}function P1(){nc=!0,window.clearTimeout(nf),nf=window.setTimeout(function(){nc=!1},100)}function C1(){var t=hn(function(e){var n=$r(e);n!=null&&S1(n.ownerDocument)},[]);return{isFocusVisible:A1,onBlurVisible:P1,ref:t}}const k1=Object.freeze(Object.defineProperty({__proto__:null,capitalize:ju,createChainedFunction:zu,createSvgIcon:Nm,debounce:p1,deprecatedPropType:g1,isMuiElement:m1,ownerDocument:Br,ownerWindow:Vm,requirePropFactory:_1,setRef:Ci,unstable_useId:E1,unsupportedProp:v1,useControlled:y1,useEventCallback:tc,useForkRef:Go,useIsFocusVisible:C1},Symbol.toStringTag,{value:"Module"})),x1=Ig(k1);var rf;function ke(){return rf||(rf=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e.createSvgIcon}});var e=x1}(Va)),Va}var O1=Ae,D1=Pe;Object.defineProperty(tl,"__esModule",{value:!0});var Mm=tl.default=void 0,N1=D1(Ce),V1=O1(ke()),M1=(0,V1.default)(N1.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");Mm=tl.default=M1;var gl={},L1=Ae,$1=Pe;Object.defineProperty(gl,"__esModule",{value:!0});var Lm=gl.default=void 0,U1=$1(Ce),F1=L1(ke()),B1=(0,F1.default)(U1.createElement("path",{d:"M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"}),"FormatAlignCenter");Lm=gl.default=B1;var ml={},j1=Ae,z1=Pe;Object.defineProperty(ml,"__esModule",{value:!0});var $m=ml.default=void 0,q1=z1(Ce),H1=j1(ke()),W1=(0,H1.default)(q1.createElement("path",{d:"M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"}),"HelpOutline");$m=ml.default=W1;var _l={},G1=Ae,K1=Pe;Object.defineProperty(_l,"__esModule",{value:!0});var Um=_l.default=void 0,Q1=K1(Ce),J1=G1(ke()),Y1=(0,J1.default)(Q1.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}),"Settings");Um=_l.default=Y1;var vl={},X1=Ae,Z1=Pe;Object.defineProperty(vl,"__esModule",{value:!0});var Fm=vl.default=void 0,eb=Z1(Ce),tb=X1(ke()),nb=(0,tb.default)(eb.createElement("path",{d:"M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"}),"Apps");Fm=vl.default=nb;const rb=Nm(Y("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));var ib=function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:e.palette.type==="light"?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}};function sb(t){var e=t.src,n=t.srcSet,r=We(!1),i=r[0],s=r[1];return tt(function(){if(!(!e&&!n)){s(!1);var o=!0,a=new Image;return a.src=e,a.srcSet=n,a.onload=function(){o&&s("loaded")},a.onerror=function(){o&&s("error")},function(){o=!1}}},[e,n]),i}var ob=Kn(function(e,n){var r=e.alt,i=e.children,s=e.classes,o=e.className,a=e.component,u=a===void 0?"div":a,c=e.imgProps,l=e.sizes,h=e.src,f=e.srcSet,d=e.variant,p=d===void 0?"circular":d,g=rt(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),m=null,w=sb({src:h,srcSet:f}),T=h||f,I=T&&w!=="error";return I?m=Y("img",O({alt:r,src:h,srcSet:f,sizes:l,className:s.img},c)):i!=null?m=i:T&&r?m=r[0]:m=Y(rb,{className:s.fallback}),Y(u,O({className:om(s.root,s.system,s[p],o,!I&&s.colorDefault),ref:n},g),m)});const ab=Om(ib,{name:"MuiAvatar"})(ob);function ub(t){return t=typeof t=="function"?t():t,$r(t)}var nu=typeof window<"u"?Gn:tt,cb=Kn(function(e,n){var r=e.children,i=e.container,s=e.disablePortal,o=s===void 0?!1:s,a=e.onRendered,u=We(null),c=u[0],l=u[1],h=Go(dn(r)?r.ref:null,n);return nu(function(){o||l(ub(i)||document.body)},[i,o]),nu(function(){if(c&&!o)return Ci(n,c),function(){Ci(n,null)}},[n,c,o]),nu(function(){a&&(c||o)&&a()},[a,c,o]),o?dn(r)?Ki(r,{ref:h}):r:c&&qc(r,c)});const lb=cb;function hb(){var t=document.createElement("div");t.style.width="99px",t.style.height="99px",t.style.position="absolute",t.style.top="-9999px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}function db(t){var e=Br(t);return e.body===t?Vm(e).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function mi(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function sf(t){return parseInt(window.getComputedStyle(t)["padding-right"],10)||0}function of(t,e,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,s=[e,n].concat(ym(r)),o=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(t.children,function(a){a.nodeType===1&&s.indexOf(a)===-1&&o.indexOf(a.tagName)===-1&&mi(a,i)})}function ru(t,e){var n=-1;return t.some(function(r,i){return e(r)?(n=i,!0):!1}),n}function fb(t,e){var n=[],r=[],i=t.container,s;if(!e.disableScrollLock){if(db(i)){var o=hb();n.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(sf(i)+o,"px"),s=Br(i).querySelectorAll(".mui-fixed"),[].forEach.call(s,function(l){r.push(l.style.paddingRight),l.style.paddingRight="".concat(sf(l)+o,"px")})}var a=i.parentElement,u=a.nodeName==="HTML"&&window.getComputedStyle(a)["overflow-y"]==="scroll"?a:i;n.push({value:u.style.overflow,key:"overflow",el:u}),u.style.overflow="hidden"}var c=function(){s&&[].forEach.call(s,function(h,f){r[f]?h.style.paddingRight=r[f]:h.style.removeProperty("padding-right")}),n.forEach(function(h){var f=h.value,d=h.el,p=h.key;f?d.style.setProperty(p,f):d.style.removeProperty(p)})};return c}function pb(t){var e=[];return[].forEach.call(t.children,function(n){n.getAttribute&&n.getAttribute("aria-hidden")==="true"&&e.push(n)}),e}var gb=function(){function t(){bI(this,t),this.modals=[],this.containers=[]}return nl(t,[{key:"add",value:function(n,r){var i=this.modals.indexOf(n);if(i!==-1)return i;i=this.modals.length,this.modals.push(n),n.modalRef&&mi(n.modalRef,!1);var s=pb(r);of(r,n.mountNode,n.modalRef,s,!0);var o=ru(this.containers,function(a){return a.container===r});return o!==-1?(this.containers[o].modals.push(n),i):(this.containers.push({modals:[n],container:r,restore:null,hiddenSiblingNodes:s}),i)}},{key:"mount",value:function(n,r){var i=ru(this.containers,function(o){return o.modals.indexOf(n)!==-1}),s=this.containers[i];s.restore||(s.restore=fb(s,r))}},{key:"remove",value:function(n){var r=this.modals.indexOf(n);if(r===-1)return r;var i=ru(this.containers,function(a){return a.modals.indexOf(n)!==-1}),s=this.containers[i];if(s.modals.splice(s.modals.indexOf(n),1),this.modals.splice(r,1),s.modals.length===0)s.restore&&s.restore(),n.modalRef&&mi(n.modalRef,!0),of(s.container,n.mountNode,n.modalRef,s.hiddenSiblingNodes,!1),this.containers.splice(i,1);else{var o=s.modals[s.modals.length-1];o.modalRef&&mi(o.modalRef,!1)}return r}},{key:"isTopModal",value:function(n){return this.modals.length>0&&this.modals[this.modals.length-1]===n}}]),t}();function mb(t){var e=t.children,n=t.disableAutoFocus,r=n===void 0?!1:n,i=t.disableEnforceFocus,s=i===void 0?!1:i,o=t.disableRestoreFocus,a=o===void 0?!1:o,u=t.getDoc,c=t.isEnabled,l=t.open,h=ze(),f=ze(null),d=ze(null),p=ze(),g=ze(null),m=hn(function(I){g.current=$r(I)},[]),w=Go(e.ref,m),T=ze();return tt(function(){T.current=l},[l]),!T.current&&l&&typeof window<"u"&&(p.current=u().activeElement),tt(function(){if(l){var I=Br(g.current);!r&&g.current&&!g.current.contains(I.activeElement)&&(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex",-1),g.current.focus());var S=function(){var W=g.current;if(W!==null){if(!I.hasFocus()||s||!c()||h.current){h.current=!1;return}g.current&&!g.current.contains(I.activeElement)&&g.current.focus()}},k=function(W){s||!c()||W.keyCode!==9||I.activeElement===g.current&&(h.current=!0,W.shiftKey?d.current.focus():f.current.focus())};I.addEventListener("focus",S,!0),I.addEventListener("keydown",k,!0);var A=setInterval(function(){S()},50);return function(){clearInterval(A),I.removeEventListener("focus",S,!0),I.removeEventListener("keydown",k,!0),a||(p.current&&p.current.focus&&p.current.focus(),p.current=null)}}},[r,s,a,c,l]),Y(Be,null,Y("div",{tabIndex:0,ref:f,"data-test":"sentinelStart"}),Ki(e,{ref:w}),Y("div",{tabIndex:0,ref:d,"data-test":"sentinelEnd"}))}var af={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},_b=Kn(function(e,n){var r=e.invisible,i=r===void 0?!1:r,s=e.open,o=rt(e,["invisible","open"]);return s?Y("div",O({"aria-hidden":!0,ref:n},o,{style:O({},af.root,i?af.invisible:{},o.style)})):null});const vb=_b;function yb(t){return t=typeof t=="function"?t():t,$r(t)}function wb(t){return t.children?t.children.props.hasOwnProperty("in"):!1}var Eb=new gb,Tb=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}},Ib=Kn(function(e,n){var r=al(),i=am({name:"MuiModal",props:O({},e),theme:r}),s=i.BackdropComponent,o=s===void 0?vb:s,a=i.BackdropProps,u=i.children,c=i.closeAfterTransition,l=c===void 0?!1:c,h=i.container,f=i.disableAutoFocus,d=f===void 0?!1:f,p=i.disableBackdropClick,g=p===void 0?!1:p,m=i.disableEnforceFocus,w=m===void 0?!1:m,T=i.disableEscapeKeyDown,I=T===void 0?!1:T,S=i.disablePortal,k=S===void 0?!1:S,A=i.disableRestoreFocus,P=A===void 0?!1:A,W=i.disableScrollLock,V=W===void 0?!1:W,le=i.hideBackdrop,wn=le===void 0?!1:le,qt=i.keepMounted,Qr=qt===void 0?!1:qt,ms=i.manager,Ht=ms===void 0?Eb:ms,_s=i.onBackdropClick,Wt=i.onClose,Jr=i.onEscapeKeyDown,Qe=i.onRendered,Je=i.open,Gt=rt(i,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),it=We(!0),Yr=it[0],Zn=it[1],Kt=ze({}),At=ze(null),dt=ze(null),En=Go(dt,n),Ye=wb(i),er=function(){return Br(At.current)},Pt=function(){return Kt.current.modalRef=dt.current,Kt.current.mountNode=At.current,Kt.current},st=function(){Ht.mount(Pt(),{disableScrollLock:V}),dt.current.scrollTop=0},Wh=tc(function(){var ot=yb(h)||er().body;Ht.add(Pt(),ot),dt.current&&st()}),Pa=hn(function(){return Ht.isTopModal(Pt())},[Ht]),R0=tc(function(ot){At.current=ot,ot&&(Qe&&Qe(),Je&&Pa()?st():mi(dt.current,!0))}),Xr=hn(function(){Ht.remove(Pt())},[Ht]);if(tt(function(){return function(){Xr()}},[Xr]),tt(function(){Je?Wh():(!Ye||!l)&&Xr()},[Je,Xr,Ye,l,Wh]),!Qr&&!Je&&(!Ye||Yr))return null;var S0=function(){Zn(!1)},A0=function(){Zn(!0),l&&Xr()},P0=function(Ct){Ct.target===Ct.currentTarget&&(_s&&_s(Ct),!g&&Wt&&Wt(Ct,"backdropClick"))},C0=function(Ct){Ct.key!=="Escape"||!Pa()||(Jr&&Jr(Ct),I||(Ct.stopPropagation(),Wt&&Wt(Ct,"escapeKeyDown")))},Gh=Tb(r||{zIndex:xm}),vs={};return u.props.tabIndex===void 0&&(vs.tabIndex=u.props.tabIndex||"-1"),Ye&&(vs.onEnter=zu(S0,u.props.onEnter),vs.onExited=zu(A0,u.props.onExited)),Y(lb,{ref:R0,container:h,disablePortal:k},Y("div",O({ref:En,onKeyDown:C0,role:"presentation"},Gt,{style:O({},Gh.root,!Je&&Yr?Gh.hidden:{},Gt.style)}),wn?null:Y(o,O({open:Je,onClick:P0},a)),Y(mb,{disableEnforceFocus:w,disableAutoFocus:d,disableRestoreFocus:P,getDoc:er,isEnabled:Pa,open:Je},Ki(u,vs))))});const bb=Ib,Rb=ie.div`
    display: grid;
    grid-template-columns: 300px auto 200px;
    align-items: center;
    padding: 5px 20px;
    height: 60px;
`,Sb=ie.div`
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
`,Ab=ie.div`
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
`,Pb=ie.div`
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
`,Cb=({photoURL:t})=>v(Rb,{children:[v(Sb,{children:[v("img",{src:"https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png",alt:"Google Drive"}),v("span",{children:"Drive"})]}),v(Ab,{children:[v(Mm,{}),v("input",{type:"text",placeholder:"Search in Drive"}),v(Lm,{})]}),v(Pb,{children:[v("span",{children:[v($m,{}),v(Um,{})]}),v("span",{children:[v(Fm,{}),v(ab,{src:t})]})]})]});var yl={},kb=Ae,xb=Pe;Object.defineProperty(yl,"__esModule",{value:!0});var Bm=yl.default=void 0,Ob=xb(Ce),Db=kb(ke()),Nb=(0,Db.default)(Ob.createElement("path",{d:"M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-4.2-5.78v1.75l3.2-2.99L12.8 9v1.7c-3.11.43-4.35 2.56-4.8 4.7 1.11-1.5 2.58-2.18 4.8-2.18z"}),"MobileScreenShare");Bm=yl.default=Nb;var wl={},Vb=Ae,Mb=Pe;Object.defineProperty(wl,"__esModule",{value:!0});var jm=wl.default=void 0,Lb=Mb(Ce),$b=Vb(ke()),Ub=(0,$b.default)(Lb.createElement("path",{d:"M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"}),"Devices");jm=wl.default=Ub;var El={},Fb=Ae,Bb=Pe;Object.defineProperty(El,"__esModule",{value:!0});var zm=El.default=void 0,jb=Bb(Ce),zb=Fb(ke()),qb=(0,zb.default)(jb.createElement("path",{d:"M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24C14.5 5.27 15 6.58 15 8s-.5 2.73-1.33 3.76c.42.14.86.24 1.33.24zM9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1z"}),"PeopleAltOutlined");zm=El.default=qb;var Tl={},Hb=Ae,Wb=Pe;Object.defineProperty(Tl,"__esModule",{value:!0});var qm=Tl.default=void 0,Gb=Wb(Ce),Kb=Hb(ke()),Qb=(0,Kb.default)(Gb.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"}),"QueryBuilderOutlined");qm=Tl.default=Qb;var Il={},Jb=Ae,Yb=Pe;Object.defineProperty(Il,"__esModule",{value:!0});var Hm=Il.default=void 0,Xb=Yb(Ce),Zb=Jb(ke()),eR=(0,Zb.default)(Xb.createElement("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorderOutlined");Hm=Il.default=eR;var bl={},tR=Ae,nR=Pe;Object.defineProperty(bl,"__esModule",{value:!0});var Wm=bl.default=void 0,rR=nR(Ce),iR=tR(ke()),sR=(0,iR.default)(rR.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"}),"DeleteOutlineOutlined");Wm=bl.default=sR;var Rl={},oR=Ae,aR=Pe;Object.defineProperty(Rl,"__esModule",{value:!0});var Gm=Rl.default=void 0,uR=aR(Ce),cR=oR(ke()),lR=(0,cR.default)(uR.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"}),"CloudQueue");Gm=Rl.default=lR;var uf={};/**
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
 */const Km=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Km(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new dR;const f=s<<2|a>>4;if(r.push(f),c!==64){const d=a<<4&240|c>>2;if(r.push(d),h!==64){const p=c<<6&192|h;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class dR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fR=function(t){const e=Km(t);return Qm.encodeByteArray(e,!0)},so=function(t){return fR(t).replace(/\./g,"")},Jm=function(t){try{return Qm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gR=()=>pR().__FIREBASE_DEFAULTS__,mR=()=>{if(typeof process>"u"||typeof uf>"u")return;const t=uf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_R=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Jm(t[1]);return e&&JSON.parse(e)},Qo=()=>{try{return gR()||mR()||_R()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ym=t=>{var e,n;return(n=(e=Qo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xm=t=>{const e=Ym(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Zm=()=>{var t;return(t=Qo())===null||t===void 0?void 0:t.config},e_=t=>{var e;return(e=Qo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function t_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[so(JSON.stringify(n)),so(JSON.stringify(o)),""].join(".")}/**
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
 */function pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pe())}function wR(){var t;const e=(t=Qo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ER(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function TR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IR(){const t=pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bR(){return!wR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function n_(){try{return typeof indexedDB=="object"}catch{return!1}}function RR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const SR="FirebaseError";class St extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SR,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yi.prototype.create)}}class Yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new St(i,a,r)}}function AR(t,e){return t.replace(PR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const PR=/\{\$([^}]+)}/g;function CR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function oo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(cf(s)&&cf(o)){if(!oo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cf(t){return t!==null&&typeof t=="object"}/**
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
 */function Xi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function kR(t,e){const n=new xR(t,e);return n.subscribe.bind(n)}class xR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");OR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=iu),i.error===void 0&&(i.error=iu),i.complete===void 0&&(i.complete=iu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function iu(){}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const In="[DEFAULT]";/**
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
 */class DR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VR(e))try{this.getOrInitializeService({instanceIdentifier:In})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=In){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=In){return this.instances.has(e)}getOptions(e=In){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=In){return this.component?this.component.multipleInstances?e:In:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NR(t){return t===In?void 0:t}function VR(t){return t.instantiationMode==="EAGER"}/**
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
 */class MR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(z||(z={}));const LR={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},$R=z.INFO,UR={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},FR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Sl{constructor(e){this.name=e,this._logLevel=$R,this._logHandler=FR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?LR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const BR=(t,e)=>e.some(n=>t instanceof n);let lf,hf;function jR(){return lf||(lf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zR(){return hf||(hf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const r_=new WeakMap,rc=new WeakMap,i_=new WeakMap,su=new WeakMap,Al=new WeakMap;function qR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&r_.set(n,t)}).catch(()=>{}),Al.set(e,t),e}function HR(t){if(rc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rc.set(t,e)}let ic={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||i_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function WR(t){ic=t(ic)}function GR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ou(this),e,...n);return i_.set(r,e.sort?e.sort():[e]),un(r)}:zR().includes(t)?function(...e){return t.apply(ou(this),e),un(r_.get(this))}:function(...e){return un(t.apply(ou(this),e))}}function KR(t){return typeof t=="function"?GR(t):(t instanceof IDBTransaction&&HR(t),BR(t,jR())?new Proxy(t,ic):t)}function un(t){if(t instanceof IDBRequest)return qR(t);if(su.has(t))return su.get(t);const e=KR(t);return e!==t&&(su.set(t,e),Al.set(e,t)),e}const ou=t=>Al.get(t);function QR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=un(o);return r&&o.addEventListener("upgradeneeded",u=>{r(un(o.result),u.oldVersion,u.newVersion,un(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const JR=["get","getKey","getAll","getAllKeys","count"],YR=["put","add","delete","clear"],au=new Map;function df(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(au.get(e))return au.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&u.done]))[0]};return au.set(e,s),s}WR(t=>({...t,get:(e,n,r)=>df(e,n)||t.get(e,n,r),has:(e,n)=>!!df(e,n)||t.has(e,n)}));/**
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
 */class XR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ZR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ZR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sc="@firebase/app",ff="0.10.1";/**
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
 */const Un=new Sl("@firebase/app"),eS="@firebase/app-compat",tS="@firebase/analytics-compat",nS="@firebase/analytics",rS="@firebase/app-check-compat",iS="@firebase/app-check",sS="@firebase/auth",oS="@firebase/auth-compat",aS="@firebase/database",uS="@firebase/database-compat",cS="@firebase/functions",lS="@firebase/functions-compat",hS="@firebase/installations",dS="@firebase/installations-compat",fS="@firebase/messaging",pS="@firebase/messaging-compat",gS="@firebase/performance",mS="@firebase/performance-compat",_S="@firebase/remote-config",vS="@firebase/remote-config-compat",yS="@firebase/storage",wS="@firebase/storage-compat",ES="@firebase/firestore",TS="@firebase/firestore-compat",IS="firebase",bS="10.11.0";/**
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
 */const oc="[DEFAULT]",RS={[sc]:"fire-core",[eS]:"fire-core-compat",[nS]:"fire-analytics",[tS]:"fire-analytics-compat",[iS]:"fire-app-check",[rS]:"fire-app-check-compat",[sS]:"fire-auth",[oS]:"fire-auth-compat",[aS]:"fire-rtdb",[uS]:"fire-rtdb-compat",[cS]:"fire-fn",[lS]:"fire-fn-compat",[hS]:"fire-iid",[dS]:"fire-iid-compat",[fS]:"fire-fcm",[pS]:"fire-fcm-compat",[gS]:"fire-perf",[mS]:"fire-perf-compat",[_S]:"fire-rc",[vS]:"fire-rc-compat",[yS]:"fire-gcs",[wS]:"fire-gcs-compat",[ES]:"fire-fst",[TS]:"fire-fst-compat","fire-js":"fire-js",[IS]:"fire-js-all"};/**
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
 */const ao=new Map,SS=new Map,ac=new Map;function pf(t,e){try{t.container.addComponent(e)}catch(n){Un.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fn(t){const e=t.name;if(ac.has(e))return Un.debug(`There were multiple attempts to register component ${e}.`),!1;ac.set(e,t);for(const n of ao.values())pf(n,t);for(const n of SS.values())pf(n,t);return!0}function Jo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rn(t){return t.settings!==void 0}/**
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
 */const AS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new Yi("app","Firebase",AS);/**
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
 */class PS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Qn=bS;function s_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cn.create("bad-app-name",{appName:String(i)});if(n||(n=Zm()),!n)throw cn.create("no-options");const s=ao.get(i);if(s){if(oo(n,s.options)&&oo(r,s.config))return s;throw cn.create("duplicate-app",{appName:i})}const o=new MR(i);for(const u of ac.values())o.addComponent(u);const a=new PS(n,r,o);return ao.set(i,a),a}function Pl(t=oc){const e=ao.get(t);if(!e&&t===oc&&Zm())return s_();if(!e)throw cn.create("no-app",{appName:t});return e}function vt(t,e,n){var r;let i=(r=RS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Un.warn(a.join(" "));return}Fn(new pn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const CS="firebase-heartbeat-database",kS=1,ki="firebase-heartbeat-store";let uu=null;function o_(){return uu||(uu=QR(CS,kS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw cn.create("idb-open",{originalErrorMessage:t.message})})),uu}async function xS(t){try{const n=(await o_()).transaction(ki),r=await n.objectStore(ki).get(a_(t));return await n.done,r}catch(e){if(e instanceof St)Un.warn(e.message);else{const n=cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Un.warn(n.message)}}}async function gf(t,e){try{const r=(await o_()).transaction(ki,"readwrite");await r.objectStore(ki).put(e,a_(t)),await r.done}catch(n){if(n instanceof St)Un.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Un.warn(r.message)}}}function a_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const OS=1024,DS=30*24*60*60*1e3;class NS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new MS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=DS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mf(),{heartbeatsToSend:r,unsentEntries:i}=VS(this._heartbeatsCache.heartbeats),s=so(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function mf(){return new Date().toISOString().substring(0,10)}function VS(t,e=OS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),_f(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_f(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class MS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return n_()?RR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _f(t){return so(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function LS(t){Fn(new pn("platform-logger",e=>new XR(e),"PRIVATE")),Fn(new pn("heartbeat",e=>new NS(e),"PRIVATE")),vt(sc,ff,t),vt(sc,ff,"esm2017"),vt("fire-js","")}LS("");var $S="firebase",US="10.11.0";/**
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
 */vt($S,US,"app");var FS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R,Cl=Cl||{},M=FS||self;function Yo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Zi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function BS(t){return Object.prototype.hasOwnProperty.call(t,cu)&&t[cu]||(t[cu]=++jS)}var cu="closure_uid_"+(1e9*Math.random()>>>0),jS=0;function zS(t,e,n){return t.call.apply(t.bind,arguments)}function qS(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ve(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ve=zS:Ve=qS,Ve.apply(null,arguments)}function bs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ee(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function vn(){this.s=this.s,this.o=this.o}var HS=0;vn.prototype.s=!1;vn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),HS!=0)&&BS(this)};vn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const u_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function kl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function vf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Yo(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Me(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var WS=function(){if(!M.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};M.addEventListener("test",n,e),M.removeEventListener("test",n,e)}catch{}return t}();function xi(t){return/^[\s\xa0]*$/.test(t)}function Xo(){var t=M.navigator;return t&&(t=t.userAgent)?t:""}function pt(t){return Xo().indexOf(t)!=-1}function xl(t){return xl[" "](t),t}xl[" "]=function(){};function GS(t,e){var n=UA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var KS=pt("Opera"),Cr=pt("Trident")||pt("MSIE"),c_=pt("Edge"),uc=c_||Cr,l_=pt("Gecko")&&!(Xo().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge"))&&!(pt("Trident")||pt("MSIE"))&&!pt("Edge"),QS=Xo().toLowerCase().indexOf("webkit")!=-1&&!pt("Edge");function h_(){var t=M.document;return t?t.documentMode:void 0}var cc;e:{var lu="",hu=function(){var t=Xo();if(l_)return/rv:([^\);]+)(\)|;)/.exec(t);if(c_)return/Edge\/([\d\.]+)/.exec(t);if(Cr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(QS)return/WebKit\/(\S+)/.exec(t);if(KS)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(hu&&(lu=hu?hu[1]:""),Cr){var du=h_();if(du!=null&&du>parseFloat(lu)){cc=String(du);break e}}cc=lu}var lc;if(M.document&&Cr){var yf=h_();lc=yf||parseInt(cc,10)||void 0}else lc=void 0;var JS=lc;function Oi(t,e){if(Me.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(l_){e:{try{xl(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:YS[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Oi.$.h.call(this)}}Ee(Oi,Me);var YS={2:"touch",3:"pen",4:"mouse"};Oi.prototype.h=function(){Oi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var es="closure_listenable_"+(1e6*Math.random()|0),XS=0;function ZS(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++XS,this.fa=this.ia=!1}function Zo(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ol(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function eA(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function d_(t){const e={};for(const n in t)e[n]=t[n];return e}const wf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function f_(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<wf.length;s++)n=wf[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ea(t){this.src=t,this.g={},this.h=0}ea.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dc(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ZS(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function hc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=u_(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Zo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function dc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Dl="closure_lm_"+(1e6*Math.random()|0),fu={};function p_(t,e,n,r,i){if(r&&r.once)return m_(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)p_(t,e[s],n,r,i);return null}return n=Ml(n),t&&t[es]?t.O(e,n,Zi(r)?!!r.capture:!!r,i):g_(t,e,n,!1,r,i)}function g_(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Zi(i)?!!i.capture:!!i,a=Vl(t);if(a||(t[Dl]=a=new ea(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=tA(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)WS||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(v_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tA(){function t(n){return e.call(t.src,t.listener,n)}const e=nA;return t}function m_(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)m_(t,e[s],n,r,i);return null}return n=Ml(n),t&&t[es]?t.P(e,n,Zi(r)?!!r.capture:!!r,i):g_(t,e,n,!0,r,i)}function __(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)__(t,e[s],n,r,i);else r=Zi(r)?!!r.capture:!!r,n=Ml(n),t&&t[es]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dc(s,n,r,i),-1<n&&(Zo(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dc(e,n,r,i)),(n=-1<t?e[t]:null)&&Nl(n))}function Nl(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[es])hc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(v_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vl(e))?(hc(n,t),n.h==0&&(n.src=null,e[Dl]=null)):Zo(t)}}}function v_(t){return t in fu?fu[t]:fu[t]="on"+t}function nA(t,e){if(t.fa)t=!0;else{e=new Oi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Nl(t),t=n.call(r,e)}return t}function Vl(t){return t=t[Dl],t instanceof ea?t:null}var pu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ml(t){return typeof t=="function"?t:(t[pu]||(t[pu]=function(e){return t.handleEvent(e)}),t[pu])}function ye(){vn.call(this),this.i=new ea(this),this.S=this,this.J=null}Ee(ye,vn);ye.prototype[es]=!0;ye.prototype.removeEventListener=function(t,e,n,r){__(this,t,e,n,r)};function Re(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Me(e,t);else if(e instanceof Me)e.target=e.target||t;else{var i=e;e=new Me(r,t),f_(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Rs(o,r,!0,e)&&i}if(o=e.g=t,i=Rs(o,r,!0,e)&&i,i=Rs(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Rs(o,r,!1,e)&&i}ye.prototype.N=function(){if(ye.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Zo(n[r]);delete t.g[e],t.h--}}this.J=null};ye.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ye.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Rs(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&hc(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ll=M.JSON.stringify;class rA{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function iA(){var t=$l;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class sA{constructor(){this.h=this.g=null}add(e,n){const r=y_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var y_=new rA(()=>new oA,t=>t.reset());class oA{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function aA(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function uA(t){M.setTimeout(()=>{throw t},0)}let Di,Ni=!1,$l=new sA,w_=()=>{const t=M.Promise.resolve(void 0);Di=()=>{t.then(cA)}};var cA=()=>{for(var t;t=iA();){try{t.h.call(t.g)}catch(n){uA(n)}var e=y_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ni=!1};function ta(t,e){ye.call(this),this.h=t||1,this.g=e||M,this.j=Ve(this.qb,this),this.l=Date.now()}Ee(ta,ye);R=ta.prototype;R.ga=!1;R.T=null;R.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Re(this,"tick"),this.ga&&(Ul(this),this.start()))}};R.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ul(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}R.N=function(){ta.$.N.call(this),Ul(this),delete this.g};function Fl(t,e,n){if(typeof t=="function")n&&(t=Ve(t,n));else if(t&&typeof t.handleEvent=="function")t=Ve(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:M.setTimeout(t,e||0)}function E_(t){t.g=Fl(()=>{t.g=null,t.i&&(t.i=!1,E_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class lA extends vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:E_(this)}N(){super.N(),this.g&&(M.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vi(t){vn.call(this),this.h=t,this.g={}}Ee(Vi,vn);var Ef=[];function T_(t,e,n,r){Array.isArray(n)||(n&&(Ef[0]=n.toString()),n=Ef);for(var i=0;i<n.length;i++){var s=p_(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function I_(t){Ol(t.g,function(e,n){this.g.hasOwnProperty(n)&&Nl(e)},t),t.g={}}Vi.prototype.N=function(){Vi.$.N.call(this),I_(this)};Vi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function na(){this.g=!0}na.prototype.Ea=function(){this.g=!1};function hA(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function dA(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function hr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+pA(t,n)+(r?" "+r:"")})}function fA(t,e){t.info(function(){return"TIMEOUT: "+e})}na.prototype.info=function(){};function pA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ll(n)}catch{return e}}var Jn={},Tf=null;function ra(){return Tf=Tf||new ye}Jn.Ta="serverreachability";function b_(t){Me.call(this,Jn.Ta,t)}Ee(b_,Me);function Mi(t){const e=ra();Re(e,new b_(e))}Jn.STAT_EVENT="statevent";function R_(t,e){Me.call(this,Jn.STAT_EVENT,t),this.stat=e}Ee(R_,Me);function Ue(t){const e=ra();Re(e,new R_(e,t))}Jn.Ua="timingevent";function S_(t,e){Me.call(this,Jn.Ua,t),this.size=e}Ee(S_,Me);function ts(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return M.setTimeout(function(){t()},e)}var ia={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},A_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bl(){}Bl.prototype.h=null;function If(t){return t.h||(t.h=t.i())}function P_(){}var ns={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function jl(){Me.call(this,"d")}Ee(jl,Me);function zl(){Me.call(this,"c")}Ee(zl,Me);var fc;function sa(){}Ee(sa,Bl);sa.prototype.g=function(){return new XMLHttpRequest};sa.prototype.i=function(){return{}};fc=new sa;function rs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Vi(this),this.P=gA,t=uc?125:void 0,this.V=new ta(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new C_}function C_(){this.i=null,this.g="",this.h=!1}var gA=45e3,k_={},pc={};R=rs.prototype;R.setTimeout=function(t){this.P=t};function gc(t,e,n){t.L=1,t.A=aa(Ft(e)),t.u=n,t.S=!0,x_(t,null)}function x_(t,e){t.G=Date.now(),is(t),t.B=Ft(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),U_(n.i,"t",r),t.o=0,n=t.l.J,t.h=new C_,t.g=ov(t.l,n?e:null,!t.u),0<t.O&&(t.M=new lA(Ve(t.Pa,t,t.g),t.O)),T_(t.U,t.g,"readystatechange",t.nb),e=t.I?d_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Mi(),hA(t.j,t.v,t.B,t.m,t.W,t.u)}R.nb=function(t){t=t.target;const e=this.M;e&&gt(t)==3?e.l():this.Pa(t)};R.Pa=function(t){try{if(t==this.g)e:{const l=gt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||uc||this.g&&(this.h.h||this.g.ja()||Af(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Mi(3):Mi(2)),oa(this);var n=this.g.da();this.ca=n;t:if(O_(this)){var r=Af(this.g);t="";var i=r.length,s=gt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pn(this),_i(this);var o="";break t}this.h.i=new M.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,dA(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xi(a)){var c=a;break t}}c=null}if(n=c)hr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mc(this,n);else{this.i=!1,this.s=3,Ue(12),Pn(this),_i(this);break e}}this.S?(D_(this,l,o),uc&&this.i&&l==3&&(T_(this.U,this.V,"tick",this.mb),this.V.start())):(hr(this.j,this.m,o,null),mc(this,o)),l==4&&Pn(this),this.i&&!this.J&&(l==4?nv(this.l,this):(this.i=!1,is(this)))}else MA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ue(12)):(this.s=0,Ue(13)),Pn(this),_i(this)}}}catch{}finally{}};function O_(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function D_(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=mA(t,n),i==pc){e==4&&(t.s=4,Ue(14),r=!1),hr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==k_){t.s=4,Ue(15),hr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else hr(t.j,t.m,i,null),mc(t,i);O_(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ue(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ql(e),e.M=!0,Ue(11))):(hr(t.j,t.m,n,"[Invalid Chunked Response]"),Pn(t),_i(t))}R.mb=function(){if(this.g){var t=gt(this.g),e=this.g.ja();this.o<e.length&&(oa(this),D_(this,t,e),this.i&&t!=4&&is(this))}};function mA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?pc:(n=Number(e.substring(n,r)),isNaN(n)?k_:(r+=1,r+n>e.length?pc:(e=e.slice(r,r+n),t.o=r+n,e)))}R.cancel=function(){this.J=!0,Pn(this)};function is(t){t.Y=Date.now()+t.P,N_(t,t.P)}function N_(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=ts(Ve(t.lb,t),e)}function oa(t){t.C&&(M.clearTimeout(t.C),t.C=null)}R.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(fA(this.j,this.B),this.L!=2&&(Mi(),Ue(17)),Pn(this),this.s=2,_i(this)):N_(this,this.Y-t)};function _i(t){t.l.H==0||t.J||nv(t.l,t)}function Pn(t){oa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ul(t.V),I_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function mc(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||_c(n.i,t))){if(!t.K&&_c(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)lo(n),ha(n);else break e;Kl(n),Ue(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ts(Ve(n.ib,n),6e3));if(1>=j_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Cn(n,11)}else if((t.K||n.g==t)&&lo(n),!xi(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const l=c[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const d=t.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=r.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(ql(s,s.h),s.h=null))}if(r.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(r.Da=g,ee(r.I,r.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=sv(r,r.J?r.pa:null,r.Y),o.K){z_(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(oa(a),is(a)),r.g=o}else ev(r);0<n.j.length&&da(n)}else c[0]!="stop"&&c[0]!="close"||Cn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Cn(n,7):Gl(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Mi(4)}catch{}}function _A(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yo(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function vA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function V_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=vA(t),r=_A(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var M_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vn(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Vn){this.h=t.h,uo(this,t.j),this.s=t.s,this.g=t.g,co(this,t.m),this.l=t.l;var e=t.i,n=new Li;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),bf(this,n),this.o=t.o}else t&&(e=String(t).match(M_))?(this.h=!1,uo(this,e[1]||"",!0),this.s=ai(e[2]||""),this.g=ai(e[3]||"",!0),co(this,e[4]),this.l=ai(e[5]||"",!0),bf(this,e[6]||"",!0),this.o=ai(e[7]||"")):(this.h=!1,this.i=new Li(null,this.h))}Vn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ui(e,Rf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ui(e,Rf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ui(n,n.charAt(0)=="/"?TA:EA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ui(n,bA)),t.join("")};function Ft(t){return new Vn(t)}function uo(t,e,n){t.j=n?ai(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function co(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function bf(t,e,n){e instanceof Li?(t.i=e,RA(t.i,t.h)):(n||(e=ui(e,IA)),t.i=new Li(e,t.h))}function ee(t,e,n){t.i.set(e,n)}function aa(t){return ee(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ai(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ui(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,wA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function wA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rf=/[#\/\?@]/g,EA=/[#\?:]/g,TA=/[#\?]/g,IA=/[#\?@]/g,bA=/#/g;function Li(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yn(t){t.g||(t.g=new Map,t.h=0,t.i&&yA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}R=Li.prototype;R.add=function(t,e){yn(this),this.i=null,t=jr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function L_(t,e){yn(t),e=jr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $_(t,e){return yn(t),e=jr(t,e),t.g.has(e)}R.forEach=function(t,e){yn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};R.ta=function(){yn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};R.Z=function(t){yn(this);let e=[];if(typeof t=="string")$_(this,t)&&(e=e.concat(this.g.get(jr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};R.set=function(t,e){return yn(this),this.i=null,t=jr(this,t),$_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};R.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function U_(t,e,n){L_(t,e),0<n.length&&(t.i=null,t.g.set(jr(t,e),kl(n)),t.h+=n.length)}R.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function jr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function RA(t,e){e&&!t.j&&(yn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(L_(this,r),U_(this,i,n))},t)),t.j=e}var SA=class{constructor(t,e){this.g=t,this.map=e}};function F_(t){this.l=t||AA,M.PerformanceNavigationTiming?(t=M.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(M.g&&M.g.Ka&&M.g.Ka()&&M.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var AA=10;function B_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function j_(t){return t.h?1:t.g?t.g.size:0}function _c(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ql(t,e){t.g?t.g.add(e):t.h=e}function z_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}F_.prototype.cancel=function(){if(this.i=q_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function q_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return kl(t.i)}var PA=class{stringify(t){return M.JSON.stringify(t,void 0)}parse(t){return M.JSON.parse(t,void 0)}};function CA(){this.g=new PA}function kA(t,e,n){const r=n||"";try{V_(t,function(i,s){let o=i;Zi(i)&&(o=Ll(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function xA(t,e){const n=new na;if(M.Image){const r=new Image;r.onload=bs(Ss,n,r,"TestLoadImage: loaded",!0,e),r.onerror=bs(Ss,n,r,"TestLoadImage: error",!1,e),r.onabort=bs(Ss,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=bs(Ss,n,r,"TestLoadImage: timeout",!1,e),M.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ss(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ua(t){this.l=t.ec||null,this.j=t.ob||!1}Ee(ua,Bl);ua.prototype.g=function(){return new ca(this.l,this.j)};ua.prototype.i=function(t){return function(){return t}}({});function ca(t,e){ye.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Hl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ee(ca,ye);var Hl=0;R=ca.prototype;R.open=function(t,e){if(this.readyState!=Hl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$i(this)};R.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||M).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};R.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=Hl};R.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$i(this)),this.g&&(this.readyState=3,$i(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof M.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;H_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function H_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}R.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ss(this):$i(this),this.readyState==3&&H_(this)}};R.Za=function(t){this.g&&(this.response=this.responseText=t,ss(this))};R.Ya=function(t){this.g&&(this.response=t,ss(this))};R.ka=function(){this.g&&ss(this)};function ss(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$i(t)}R.setRequestHeader=function(t,e){this.v.append(t,e)};R.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};R.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $i(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var OA=M.JSON.parse;function ae(t){ye.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=W_,this.L=this.M=!1}Ee(ae,ye);var W_="",DA=/^https?$/i,NA=["POST","PUT"];R=ae.prototype;R.Oa=function(t){this.M=t};R.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fc.g(),this.C=this.u?If(this.u):If(fc),this.g.onreadystatechange=Ve(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Sf(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=M.FormData&&t instanceof M.FormData,!(0<=u_(NA,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Q_(this),0<this.B&&((this.L=VA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ve(this.ua,this)):this.A=Fl(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Sf(this,s)}};function VA(t){return Cr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}R.ua=function(){typeof Cl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function Sf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,G_(t),la(t)}function G_(t){t.F||(t.F=!0,Re(t,"complete"),Re(t,"error"))}R.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),la(this))};R.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),la(this,!0)),ae.$.N.call(this)};R.La=function(){this.s||(this.G||this.v||this.l?K_(this):this.kb())};R.kb=function(){K_(this)};function K_(t){if(t.h&&typeof Cl<"u"&&(!t.C[1]||gt(t)!=4||t.da()!=2)){if(t.v&&gt(t)==4)Fl(t.La,0,t);else if(Re(t,"readystatechange"),gt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(M_)[1]||null;!i&&M.self&&M.self.location&&(i=M.self.location.protocol.slice(0,-1)),r=!DA.test(i?i.toLowerCase():"")}n=r}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var s=2<gt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",G_(t)}}finally{la(t)}}}}function la(t,e){if(t.g){Q_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=r}catch{}}}function Q_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(M.clearTimeout(t.A),t.A=null)}R.isActive=function(){return!!this.g};function gt(t){return t.g?t.g.readyState:0}R.da=function(){try{return 2<gt(this)?this.g.status:-1}catch{return-1}};R.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};R.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),OA(e)}};function Af(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case W_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function MA(t){const e={};t=(t.g&&2<=gt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(xi(t[r]))continue;var n=aA(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}eA(e,function(r){return r.join(", ")})}R.Ia=function(){return this.m};R.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function J_(t){let e="";return Ol(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Wl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=J_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ee(t,e,n))}function ei(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Y_(t){this.Ga=0,this.j=[],this.l=new na,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ei("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ei("baseRetryDelayMs",5e3,t),this.hb=ei("retryDelaySeedMs",1e4,t),this.eb=ei("forwardChannelMaxRetries",2,t),this.xa=ei("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new F_(t&&t.concurrentRequestLimit),this.Ja=new CA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}R=Y_.prototype;R.ra=8;R.H=1;function Gl(t){if(X_(t),t.H==3){var e=t.W++,n=Ft(t.I);if(ee(n,"SID",t.K),ee(n,"RID",e),ee(n,"TYPE","terminate"),os(t,n),e=new rs(t,t.l,e),e.L=2,e.A=aa(Ft(n)),n=!1,M.navigator&&M.navigator.sendBeacon)try{n=M.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&M.Image&&(new Image().src=e.A,n=!0),n||(e.g=ov(e.l,null),e.g.ha(e.A)),e.G=Date.now(),is(e)}iv(t)}function ha(t){t.g&&(Ql(t),t.g.cancel(),t.g=null)}function X_(t){ha(t),t.u&&(M.clearTimeout(t.u),t.u=null),lo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&M.clearTimeout(t.m),t.m=null)}function da(t){if(!B_(t.i)&&!t.m){t.m=!0;var e=t.Na;Di||w_(),Ni||(Di(),Ni=!0),$l.add(e,t),t.C=0}}function LA(t,e){return j_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ts(Ve(t.Na,t,e),rv(t,t.C)),t.C++,!0)}R.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new rs(this,this.l,t);let s=this.s;if(this.U&&(s?(s=d_(s),f_(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Z_(this,i,e),n=Ft(this.I),ee(n,"RID",t),ee(n,"CVER",22),this.F&&ee(n,"X-HTTP-Session-Id",this.F),os(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(J_(s)))+"&"+e:this.o&&Wl(n,this.o,s)),ql(this.i,i),this.bb&&ee(n,"TYPE","init"),this.P?(ee(n,"$req",e),ee(n,"SID","null"),i.aa=!0,gc(i,n,null)):gc(i,n,e),this.H=2}}else this.H==3&&(t?Pf(this,t):this.j.length==0||B_(this.i)||Pf(this))};function Pf(t,e){var n;e?n=e.m:n=t.W++;const r=Ft(t.I);ee(r,"SID",t.K),ee(r,"RID",n),ee(r,"AID",t.V),os(t,r),t.o&&t.s&&Wl(r,t.o,t.s),n=new rs(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Z_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ql(t.i,n),gc(n,r,e)}function os(t,e){t.na&&Ol(t.na,function(n,r){ee(e,r,n)}),t.h&&V_({},function(n,r){ee(e,r,n)})}function Z_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ve(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let c=i[u].g;const l=i[u].map;if(c-=s,0>c)s=Math.max(0,i[u].g-100),a=!1;else try{kA(l,o,"req"+c+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ev(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Di||w_(),Ni||(Di(),Ni=!0),$l.add(e,t),t.A=0}}function Kl(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ts(Ve(t.Ma,t),rv(t,t.A)),t.A++,!0)}R.Ma=function(){if(this.u=null,tv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ts(Ve(this.jb,this),t)}};R.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ue(10),ha(this),tv(this))};function Ql(t){t.B!=null&&(M.clearTimeout(t.B),t.B=null)}function tv(t){t.g=new rs(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ft(t.wa);ee(e,"RID","rpc"),ee(e,"SID",t.K),ee(e,"AID",t.V),ee(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ee(e,"TO",t.qa),ee(e,"TYPE","xmlhttp"),os(t,e),t.o&&t.s&&Wl(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=aa(Ft(e)),n.u=null,n.S=!0,x_(n,t)}R.ib=function(){this.v!=null&&(this.v=null,ha(this),Kl(this),Ue(19))};function lo(t){t.v!=null&&(M.clearTimeout(t.v),t.v=null)}function nv(t,e){var n=null;if(t.g==e){lo(t),Ql(t),t.g=null;var r=2}else if(_c(t.i,e))n=e.F,z_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=ra(),Re(r,new S_(r,n)),da(t)}else ev(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&LA(t,e)||r==2&&Kl(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Cn(t,5);break;case 4:Cn(t,10);break;case 3:Cn(t,6);break;default:Cn(t,2)}}}function rv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Cn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ve(t.pb,t);n||(n=new Vn("//www.google.com/images/cleardot.gif"),M.location&&M.location.protocol=="http"||uo(n,"https"),aa(n)),xA(n.toString(),r)}else Ue(2);t.H=0,t.h&&t.h.za(e),iv(t),X_(t)}R.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ue(2)):(this.l.info("Failed to ping google.com"),Ue(1))};function iv(t){if(t.H=0,t.ma=[],t.h){const e=q_(t.i);(e.length!=0||t.j.length!=0)&&(vf(t.ma,e),vf(t.ma,t.j),t.i.i.length=0,kl(t.j),t.j.length=0),t.h.ya()}}function sv(t,e,n){var r=n instanceof Vn?Ft(n):new Vn(n);if(r.g!="")e&&(r.g=e+"."+r.g),co(r,r.m);else{var i=M.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Vn(null);r&&uo(s,r),e&&(s.g=e),i&&co(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ee(r,n,e),ee(r,"VER",t.ra),os(t,r),r}function ov(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new ae(new ua({ob:n})):new ae(t.va),e.Oa(t.J),e}R.isActive=function(){return!!this.h&&this.h.isActive(this)};function av(){}R=av.prototype;R.Ba=function(){};R.Aa=function(){};R.za=function(){};R.ya=function(){};R.isActive=function(){return!0};R.Va=function(){};function ho(){if(Cr&&!(10<=Number(JS)))throw Error("Environmental error: no available transport.")}ho.prototype.g=function(t,e){return new Ge(t,e)};function Ge(t,e){ye.call(this),this.g=new Y_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!xi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!xi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new zr(this)}Ee(Ge,ye);Ge.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ue(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=sv(t,null,t.Y),da(t)};Ge.prototype.close=function(){Gl(this.g)};Ge.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Ll(t),t=n);e.j.push(new SA(e.fb++,t)),e.H==3&&da(e)};Ge.prototype.N=function(){this.g.h=null,delete this.j,Gl(this.g),delete this.g,Ge.$.N.call(this)};function uv(t){jl.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ee(uv,jl);function cv(){zl.call(this),this.status=1}Ee(cv,zl);function zr(t){this.g=t}Ee(zr,av);zr.prototype.Ba=function(){Re(this.g,"a")};zr.prototype.Aa=function(t){Re(this.g,new uv(t))};zr.prototype.za=function(t){Re(this.g,new cv)};zr.prototype.ya=function(){Re(this.g,"b")};function $A(){this.blockSize=-1}function ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ee(ht,$A);ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function gu(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)gu(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){gu(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){gu(this,r),i=0;break}}this.h=i,this.i+=e};ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function K(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var UA={};function Jl(t){return-128<=t&&128>t?GS(t,function(e){return new K([e|0],0>e?-1:0)}):new K([t|0],0>t?-1:0)}function mt(t){if(isNaN(t)||!isFinite(t))return fr;if(0>t)return Ie(mt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=vc;return new K(e,0)}function lv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ie(lv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=mt(Math.pow(e,8)),r=fr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=mt(Math.pow(e,s)),r=r.R(s).add(mt(o))):(r=r.R(n),r=r.add(mt(o)))}return r}var vc=4294967296,fr=Jl(0),yc=Jl(1),Cf=Jl(16777216);R=K.prototype;R.ea=function(){if(Xe(this))return-Ie(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:vc+r)*e,e*=vc}return t};R.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dt(this))return"0";if(Xe(this))return"-"+Ie(this).toString(t);for(var e=mt(Math.pow(t,6)),n=this,r="";;){var i=po(n,e).g;n=fo(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};R.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xe(t){return t.h==-1}R.X=function(t){return t=fo(this,t),Xe(t)?-1:Dt(t)?0:1};function Ie(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new K(n,~t.h).add(yc)}R.abs=function(){return Xe(this)?Ie(this):this};R.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new K(n,n[n.length-1]&-2147483648?-1:0)};function fo(t,e){return t.add(Ie(e))}R.R=function(t){if(Dt(this)||Dt(t))return fr;if(Xe(this))return Xe(t)?Ie(this).R(Ie(t)):Ie(Ie(this).R(t));if(Xe(t))return Ie(this.R(Ie(t)));if(0>this.X(Cf)&&0>t.X(Cf))return mt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,u=t.D(i)&65535;n[2*r+2*i]+=o*u,As(n,2*r+2*i),n[2*r+2*i+1]+=s*u,As(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,As(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,As(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new K(n,0)};function As(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ti(t,e){this.g=t,this.h=e}function po(t,e){if(Dt(e))throw Error("division by zero");if(Dt(t))return new ti(fr,fr);if(Xe(t))return e=po(Ie(t),e),new ti(Ie(e.g),Ie(e.h));if(Xe(e))return e=po(t,Ie(e)),new ti(Ie(e.g),e.h);if(30<t.g.length){if(Xe(t)||Xe(e))throw Error("slowDivide_ only works with positive integers.");for(var n=yc,r=e;0>=r.X(t);)n=kf(n),r=kf(r);var i=ir(n,1),s=ir(r,1);for(r=ir(r,2),n=ir(n,2);!Dt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ir(r,1),n=ir(n,1)}return e=fo(t,i.R(e)),new ti(i,e)}for(i=fr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=mt(n),o=s.R(e);Xe(o)||0<o.X(t);)n-=r,s=mt(n),o=s.R(e);Dt(s)&&(s=yc),i=i.add(s),t=fo(t,o)}return new ti(i,t)}R.gb=function(t){return po(this,t).h};R.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new K(n,this.h&t.h)};R.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new K(n,this.h|t.h)};R.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new K(n,this.h^t.h)};function kf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new K(n,t.h)}function ir(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new K(i,t.h)}ho.prototype.createWebChannel=ho.prototype.g;Ge.prototype.send=Ge.prototype.u;Ge.prototype.open=Ge.prototype.m;Ge.prototype.close=Ge.prototype.close;ia.NO_ERROR=0;ia.TIMEOUT=8;ia.HTTP_ERROR=6;A_.COMPLETE="complete";P_.EventType=ns;ns.OPEN="a";ns.CLOSE="b";ns.ERROR="c";ns.MESSAGE="d";ye.prototype.listen=ye.prototype.O;ae.prototype.listenOnce=ae.prototype.P;ae.prototype.getLastError=ae.prototype.Sa;ae.prototype.getLastErrorCode=ae.prototype.Ia;ae.prototype.getStatus=ae.prototype.da;ae.prototype.getResponseJson=ae.prototype.Wa;ae.prototype.getResponseText=ae.prototype.ja;ae.prototype.send=ae.prototype.ha;ae.prototype.setWithCredentials=ae.prototype.Oa;ht.prototype.digest=ht.prototype.l;ht.prototype.reset=ht.prototype.reset;ht.prototype.update=ht.prototype.j;K.prototype.add=K.prototype.add;K.prototype.multiply=K.prototype.R;K.prototype.modulo=K.prototype.gb;K.prototype.compare=K.prototype.X;K.prototype.toNumber=K.prototype.ea;K.prototype.toString=K.prototype.toString;K.prototype.getBits=K.prototype.D;K.fromNumber=mt;K.fromString=lv;var FA=function(){return new ho},BA=function(){return ra()},mu=ia,jA=A_,zA=Jn,xf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ps=P_,qA=ae,HA=ht,pr=K;const Of="@firebase/firestore";/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let qr="10.11.0";/**
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
 */const Bn=new Sl("@firebase/firestore");function ni(){return Bn.logLevel}function b(t,...e){if(Bn.logLevel<=z.DEBUG){const n=e.map(Yl);Bn.debug(`Firestore (${qr}): ${t}`,...n)}}function It(t,...e){if(Bn.logLevel<=z.ERROR){const n=e.map(Yl);Bn.error(`Firestore (${qr}): ${t}`,...n)}}function kr(t,...e){if(Bn.logLevel<=z.WARN){const n=e.map(Yl);Bn.warn(`Firestore (${qr}): ${t}`,...n)}}function Yl(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function N(t="Unexpected state"){const e=`FIRESTORE (${qr}) INTERNAL ASSERTION FAILED: `+t;throw It(e),new Error(e)}function X(t,e){t||N()}function $(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class C extends St{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Lt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class hv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Oe.UNAUTHENTICATED))}shutdown(){}}class GA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class KA{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Lt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Lt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new hv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new Oe(e)}}class QA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new QA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string"),this.R=n.token,new YA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ZA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ZA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function H(t,e){return t<e?-1:t>e?1:0}function xr(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class L{constructor(e){this.timestamp=e}static fromTimestamp(e){return new L(e)}static min(){return new L(new me(0,0))}static max(){return new L(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ui{constructor(e,n,r){n===void 0?n=0:n>e.length&&N(),r===void 0?r=e.length-n:r>e.length-n&&N(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ui.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ui?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class re extends Ui{construct(e,n,r){return new re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new C(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new re(n)}static emptyPath(){return new re([])}}const eP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends Ui{construct(e,n,r){return new be(e,n,r)}static isValidIdentifier(e){return eP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new C(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(n)}static emptyPath(){return new be([])}}/**
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
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(re.fromString(e))}static fromName(e){return new x(re.fromString(e).popFirst(5))}static empty(){return new x(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new re(e.slice()))}}function tP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=L.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new gn(i,x.empty(),e)}function nP(t){return new gn(t.readTime,t.key,-1)}class gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gn(L.min(),x.empty(),-1)}static max(){return new gn(L.max(),x.empty(),-1)}}function rP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=x.comparator(t.documentKey,e.documentKey),n!==0?n:H(t.largestBatchId,e.largestBatchId))}/**
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
 */const iP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function as(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==iP)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&N(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new y((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):y.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):y.reject(n)}static resolve(e){return new y((n,r)=>{n(e)})}static reject(e){return new y((n,r)=>{r(e)})}static waitFor(e){return new y((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=y.resolve(!1);for(const r of e)n=n.next(i=>i?y.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new y((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(l=>{o[c]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(e,n){return new y((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class Xl{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Lt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new vi(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Zl(r.target.error);this.V.reject(new vi(e,i))}}static open(e,n,r,i){try{return new Xl(n,e.transaction(i,r))}catch(s){throw new vi(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(b("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new aP(n)}}class kn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,kn.S(pe())===12.2&&It("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return b("SimpleDb","Removing database:",e),Sn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!n_())return!1;if(kn.C())return!0;const e=pe(),n=kn.S(e),r=0<n&&n<10,i=kn.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(b("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new vi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new C(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new vi(e,o))},i.onupgradeneeded=s=>{b("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{b("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Xl.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),y.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(b("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class oP{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Sn(this.k.delete())}}class vi extends C{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function us(t){return t.name==="IndexedDbTransactionError"}class aP{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(b("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(b("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Sn(r)}add(e){return b("SimpleDb","ADD",this.store.name,e,e),Sn(this.store.add(e))}get(e){return Sn(this.store.get(e)).next(n=>(n===void 0&&(n=null),b("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return b("SimpleDb","DELETE",this.store.name,e),Sn(this.store.delete(e))}count(){return b("SimpleDb","COUNT",this.store.name),Sn(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new y((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new y((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){b("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new y((r,i)=>{n.onerror=s=>{const o=Zl(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new y((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new oP(a),c=n(a.primaryKey,a.value,u);if(c instanceof y){const l=c.catch(h=>(u.done(),y.reject(h)));r.push(l)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>y.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Sn(t){return new y((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Zl(r.target.error);n(i)}})}let Df=!1;function Zl(t){const e=kn.S(pe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Df||(Df=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class eh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}eh._e=-1;function fa(t){return t==null}function go(t){return t===0&&1/t==-1/0}function uP(t){return typeof t=="number"&&Number.isInteger(t)&&!go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class oe{constructor(e,n){this.comparator=e,this.root=n||Te.EMPTY}insert(e,n){return new oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cs(this.root,e,this.comparator,!0)}}class Cs{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Te{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Te.RED,this.left=i??Te.EMPTY,this.right=s??Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Te(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Te.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw N();const e=this.left.check();if(e!==this.right.check())throw N();return e+(this.isRed()?0:1)}}Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1;Te.EMPTY=new class{constructor(){this.size=0}get key(){throw N()}get value(){throw N()}get color(){throw N()}get left(){throw N()}get right(){throw N()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Te(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Se{constructor(e){this.comparator=e,this.data=new oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vf(this.data.getIterator())}getIteratorFrom(e){return new Vf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Se(this.comparator);return n.data=e,n}}class Vf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class at{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new at([])}unionWith(e){let n=new Se(be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new at(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return xr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class pv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new pv("Invalid base64 string: "+s):s}}(e);return new Le(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Le(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const cP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(t){if(X(!!t),typeof t=="string"){let e=0;const n=cP.exec(t);if(X(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:de(t.seconds),nanos:de(t.nanos)}}function de(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jn(t){return typeof t=="string"?Le.fromBase64String(t):Le.fromUint8Array(t)}/**
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
 */function th(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nh(t){const e=t.mapValue.fields.__previous_value__;return th(e)?nh(e):e}function Fi(t){const e=mn(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
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
 */class lP{constructor(e,n,r,i,s,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Bi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Bi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Bi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ks={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?th(t)?4:hP(t)?9007199254740991:10:N()}function bt(t,e){if(t===e)return!0;const n=zn(t);if(n!==zn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fi(t).isEqual(Fi(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=mn(i.timestampValue),a=mn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return jn(i.bytesValue).isEqual(jn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return de(i.geoPointValue.latitude)===de(s.geoPointValue.latitude)&&de(i.geoPointValue.longitude)===de(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return de(i.integerValue)===de(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=de(i.doubleValue),a=de(s.doubleValue);return o===a?go(o)===go(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return xr(t.arrayValue.values||[],e.arrayValue.values||[],bt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Nf(o)!==Nf(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!bt(o[u],a[u])))return!1;return!0}(t,e);default:return N()}}function ji(t,e){return(t.values||[]).find(n=>bt(n,e))!==void 0}function Or(t,e){if(t===e)return 0;const n=zn(t),r=zn(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=de(s.integerValue||s.doubleValue),u=de(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Mf(t.timestampValue,e.timestampValue);case 4:return Mf(Fi(t),Fi(e));case 5:return H(t.stringValue,e.stringValue);case 6:return function(s,o){const a=jn(s),u=jn(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const l=H(a[c],u[c]);if(l!==0)return l}return H(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=H(de(s.latitude),de(o.latitude));return a!==0?a:H(de(s.longitude),de(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let c=0;c<a.length&&c<u.length;++c){const l=Or(a[c],u[c]);if(l)return l}return H(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ks.mapValue&&o===ks.mapValue)return 0;if(s===ks.mapValue)return 1;if(o===ks.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),c=o.fields||{},l=Object.keys(c);u.sort(),l.sort();for(let h=0;h<u.length&&h<l.length;++h){const f=H(u[h],l[h]);if(f!==0)return f;const d=Or(a[u[h]],c[l[h]]);if(d!==0)return d}return H(u.length,l.length)}(t.mapValue,e.mapValue);default:throw N()}}function Mf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return H(t,e);const n=mn(t),r=mn(e),i=H(n.seconds,r.seconds);return i!==0?i:H(n.nanos,r.nanos)}function Dr(t){return wc(t)}function wc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=mn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return x.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=wc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${wc(n.fields[o])}`;return i+"}"}(t.mapValue):N()}function Ec(t){return!!t&&"integerValue"in t}function rh(t){return!!t&&"arrayValue"in t}function Lf(t){return!!t&&"nullValue"in t}function $f(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zs(t){return!!t&&"mapValue"in t}function yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zs(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(n)}setAll(e){let n=be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=yi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());zs(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return bt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];zs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Hr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ze(yi(this.value))}}function gv(t){const e=[];return Hr(t.fields,(n,r)=>{const i=new be([n]);if(zs(r)){const s=gv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new at(e)}/**
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
 */class De{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new De(e,0,L.min(),L.min(),L.min(),Ze.empty(),0)}static newFoundDocument(e,n,r,i){return new De(e,1,n,L.min(),r,i,0)}static newNoDocument(e,n){return new De(e,2,n,L.min(),L.min(),Ze.empty(),0)}static newUnknownDocument(e,n){return new De(e,3,n,L.min(),L.min(),Ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mo{constructor(e,n){this.position=e,this.inclusive=n}}function Uf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=x.comparator(x.fromName(o.referenceValue),n.key):r=Or(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ff(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!bt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _o{constructor(e,n="asc"){this.field=e,this.dir=n}}function dP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mv{}class ge extends mv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pP(e,n,r):n==="array-contains"?new _P(e,r):n==="in"?new vP(e,r):n==="not-in"?new yP(e,r):n==="array-contains-any"?new wP(e,r):new ge(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gP(e,r):new mP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Or(n,this.value)):n!==null&&zn(this.value)===zn(n)&&this.matchesComparison(Or(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return N()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends mv{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Rt(e,n)}matches(e){return _v(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function _v(t){return t.op==="and"}function vv(t){return fP(t)&&_v(t)}function fP(t){for(const e of t.filters)if(e instanceof Rt)return!1;return!0}function Tc(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+Dr(t.value);if(vv(t))return t.filters.map(e=>Tc(e)).join(",");{const e=t.filters.map(n=>Tc(n)).join(",");return`${t.op}(${e})`}}function yv(t,e){return t instanceof ge?function(r,i){return i instanceof ge&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(t,e):t instanceof Rt?function(r,i){return i instanceof Rt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&yv(o,i.filters[a]),!0):!1}(t,e):void N()}function wv(t){return t instanceof ge?function(n){return`${n.field.canonicalString()} ${n.op} ${Dr(n.value)}`}(t):t instanceof Rt?function(n){return n.op.toString()+" {"+n.getFilters().map(wv).join(" ,")+"}"}(t):"Filter"}class pP extends ge{constructor(e,n,r){super(e,n,r),this.key=x.fromName(r.referenceValue)}matches(e){const n=x.comparator(e.key,this.key);return this.matchesComparison(n)}}class gP extends ge{constructor(e,n){super(e,"in",n),this.keys=Ev("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mP extends ge{constructor(e,n){super(e,"not-in",n),this.keys=Ev("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Ev(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>x.fromName(r.referenceValue))}class _P extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rh(n)&&ji(n.arrayValue,this.value)}}class vP extends ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ji(this.value.arrayValue,n)}}class yP extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ji(this.value.arrayValue,n)}}class wP extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ji(this.value.arrayValue,r))}}/**
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
 */class EP{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Bf(t,e=null,n=[],r=[],i=null,s=null,o=null){return new EP(t,e,n,r,i,s,o)}function ih(t){const e=$(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Dr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Dr(r)).join(",")),e.ce=n}return e.ce}function sh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ff(t.startAt,e.startAt)&&Ff(t.endAt,e.endAt)}function Ic(t){return x.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class pa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function TP(t,e,n,r,i,s,o,a){return new pa(t,e,n,r,i,s,o,a)}function Tv(t){return new pa(t)}function jf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function IP(t){return t.collectionGroup!==null}function wi(t){const e=$(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Se(be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new _o(s,r))}),n.has(be.keyField().canonicalString())||e.le.push(new _o(be.keyField(),r))}return e.le}function yt(t){const e=$(t);return e.he||(e.he=bP(e,wi(t))),e.he}function bP(t,e){if(t.limitType==="F")return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _o(i.field,s)});const n=t.endAt?new mo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mo(t.startAt.position,t.startAt.inclusive):null;return Bf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bc(t,e,n){return new pa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ga(t,e){return sh(yt(t),yt(e))&&t.limitType===e.limitType}function Iv(t){return`${ih(yt(t))}|lt:${t.limitType}`}function sr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>wv(i)).join(", ")}]`),fa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Dr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Dr(i)).join(",")),`Target(${r})`}(yt(t))}; limitType=${t.limitType})`}function ma(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):x.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of wi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){const c=Uf(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,wi(r),i)||r.endAt&&!function(o,a,u){const c=Uf(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,wi(r),i))}(t,e)}function RP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bv(t){return(e,n)=>{let r=!1;for(const i of wi(t)){const s=SP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function SP(t,e,n){const r=t.field.isKeyField()?x.comparator(e.key,n.key):function(s,o,a){const u=o.data.field(s),c=a.data.field(s);return u!==null&&c!==null?Or(u,c):N()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return N()}}/**
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
 */class Wr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fv(this.inner)}size(){return this.innerSize}}/**
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
 */const AP=new oe(x.comparator);function Bt(){return AP}const Rv=new oe(x.comparator);function ci(...t){let e=Rv;for(const n of t)e=e.insert(n.key,n);return e}function Sv(t){let e=Rv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xn(){return Ei()}function Av(){return Ei()}function Ei(){return new Wr(t=>t.toString(),(t,e)=>t.isEqual(e))}const PP=new oe(x.comparator),CP=new Se(x.comparator);function j(...t){let e=CP;for(const n of t)e=e.add(n);return e}const kP=new Se(H);function xP(){return kP}/**
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
 */function Pv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:go(e)?"-0":e}}function Cv(t){return{integerValue:""+t}}function OP(t,e){return uP(e)?Cv(e):Pv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class _a{constructor(){this._=void 0}}function DP(t,e,n){return t instanceof vo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&th(s)&&(s=nh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof zi?xv(t,e):t instanceof qi?Ov(t,e):function(i,s){const o=kv(i,s),a=zf(o)+zf(i.Ie);return Ec(o)&&Ec(i.Ie)?Cv(a):Pv(i.serializer,a)}(t,e)}function NP(t,e,n){return t instanceof zi?xv(t,e):t instanceof qi?Ov(t,e):n}function kv(t,e){return t instanceof yo?function(r){return Ec(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class vo extends _a{}class zi extends _a{constructor(e){super(),this.elements=e}}function xv(t,e){const n=Dv(e);for(const r of t.elements)n.some(i=>bt(i,r))||n.push(r);return{arrayValue:{values:n}}}class qi extends _a{constructor(e){super(),this.elements=e}}function Ov(t,e){let n=Dv(e);for(const r of t.elements)n=n.filter(i=>!bt(i,r));return{arrayValue:{values:n}}}class yo extends _a{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function zf(t){return de(t.integerValue||t.doubleValue)}function Dv(t){return rh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function VP(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof zi&&i instanceof zi||r instanceof qi&&i instanceof qi?xr(r.elements,i.elements,bt):r instanceof yo&&i instanceof yo?bt(r.Ie,i.Ie):r instanceof vo&&i instanceof vo}(t.transform,e.transform)}class MP{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qs(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class va{}function Nv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mv(t.key,$t.none()):new cs(t.key,t.data,$t.none());{const n=t.data,r=Ze.empty();let i=new Se(be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yn(t.key,r,new at(i.toArray()),$t.none())}}function LP(t,e,n){t instanceof cs?function(i,s,o){const a=i.value.clone(),u=Hf(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yn?function(i,s,o){if(!qs(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Hf(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Vv(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ti(t,e,n,r){return t instanceof cs?function(s,o,a,u){if(!qs(s.precondition,o))return a;const c=s.value.clone(),l=Wf(s.fieldTransforms,u,o);return c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yn?function(s,o,a,u){if(!qs(s.precondition,o))return a;const c=Wf(s.fieldTransforms,u,o),l=o.data;return l.setAll(Vv(s)),l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return qs(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function $P(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kv(r.transform,i||null);s!=null&&(n===null&&(n=Ze.empty()),n.set(r.field,s))}return n||null}function qf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&xr(r,i,(s,o)=>VP(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cs extends va{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yn extends va{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Vv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hf(t,e,n){const r=new Map;X(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,NP(o,a,n[i]))}return r}function Wf(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,DP(s,o,e))}return r}class Mv extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UP extends va{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&LP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Av();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const u=Nv(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&xr(this.mutations,e.mutations,(n,r)=>qf(n,r))&&xr(this.baseMutations,e.baseMutations,(n,r)=>qf(n,r))}}class oh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){X(e.mutations.length===r.length);let i=function(){return PP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new oh(e,n,r,i)}}/**
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
 */class BP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class jP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var he,q;function zP(t){switch(t){default:return N();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function Lv(t){if(t===void 0)return It("GRPC error has no .code"),E.UNKNOWN;switch(t){case he.OK:return E.OK;case he.CANCELLED:return E.CANCELLED;case he.UNKNOWN:return E.UNKNOWN;case he.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case he.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case he.INTERNAL:return E.INTERNAL;case he.UNAVAILABLE:return E.UNAVAILABLE;case he.UNAUTHENTICATED:return E.UNAUTHENTICATED;case he.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case he.NOT_FOUND:return E.NOT_FOUND;case he.ALREADY_EXISTS:return E.ALREADY_EXISTS;case he.PERMISSION_DENIED:return E.PERMISSION_DENIED;case he.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case he.ABORTED:return E.ABORTED;case he.OUT_OF_RANGE:return E.OUT_OF_RANGE;case he.UNIMPLEMENTED:return E.UNIMPLEMENTED;case he.DATA_LOSS:return E.DATA_LOSS;default:return N()}}(q=he||(he={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qP(){return new TextEncoder}/**
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
 */const HP=new pr([4294967295,4294967295],0);function Gf(t){const e=qP().encode(t),n=new HA;return n.update(e),new Uint8Array(n.digest())}function Kf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new pr([n,r],0),new pr([i,s],0)]}class ah{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new li(`Invalid padding: ${n}`);if(r<0)throw new li(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new li(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new li(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=pr.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(pr.fromNumber(r)));return i.compare(HP)===1&&(i=new pr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Gf(e),[r,i]=Kf(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ah(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Gf(e),[r,i]=Kf(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ya{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ls.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ya(L.min(),i,new oe(H),Bt(),j())}}class ls{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ls(r,n,j(),j(),j())}}/**
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
 */class Hs{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class $v{constructor(e,n){this.targetId=e,this.fe=n}}class Uv{constructor(e,n,r=Le.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Qf{constructor(){this.ge=0,this.pe=Yf(),this.ye=Le.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=j(),n=j(),r=j();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:N()}}),new ls(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Yf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,X(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class WP{constructor(e){this.Be=e,this.ke=new Map,this.qe=Bt(),this.Qe=Jf(),this.Ke=new oe(H)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:N()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Ic(s))if(r===0){const o=new x(s.path);this.We(n,o,De.newNoDocument(o,L.min()))}else X(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),u=a?this.et(a,e,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=jn(r).toUint8Array()}catch(u){if(u instanceof pv)return kr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ah(o,i,s)}catch(u){return kr(u instanceof li?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Ic(a.target)){const u=new x(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,De.newNoDocument(u,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=j();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new ya(e,n,this.Ke,this.qe,r);return this.qe=Bt(),this.Qe=Jf(),this.Ke=new oe(H),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Qf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Se(H),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Qf),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Jf(){return new oe(x.comparator)}function Yf(){return new oe(x.comparator)}const GP={asc:"ASCENDING",desc:"DESCENDING"},KP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},QP={and:"AND",or:"OR"};class JP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rc(t,e){return t.useProto3Json||fa(e)?e:{value:e}}function wo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YP(t,e){return wo(t,e.toTimestamp())}function wt(t){return X(!!t),L.fromTimestamp(function(n){const r=mn(n);return new me(r.seconds,r.nanos)}(t))}function uh(t,e){return Sc(t,e).canonicalString()}function Sc(t,e){const n=function(i){return new re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Bv(t){const e=re.fromString(t);return X(Wv(e)),e}function Ac(t,e){return uh(t.databaseId,e.path)}function _u(t,e){const n=Bv(e);if(n.get(1)!==t.databaseId.projectId)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new x(zv(n))}function jv(t,e){return uh(t.databaseId,e)}function XP(t){const e=Bv(t);return e.length===4?re.emptyPath():zv(e)}function Pc(t){return new re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zv(t){return X(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Xf(t,e,n){return{name:Ac(t,e),fields:n.value.mapValue.fields}}function ZP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:N()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,l){return c.useProto3Json?(X(l===void 0||typeof l=="string"),Le.fromBase64String(l||"")):(X(l===void 0||l instanceof Buffer||l instanceof Uint8Array),Le.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const l=c.code===void 0?E.UNKNOWN:Lv(c.code);return new C(l,c.message||"")}(o);n=new Uv(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_u(t,r.document.name),s=wt(r.document.updateTime),o=r.document.createTime?wt(r.document.createTime):L.min(),a=new Ze({mapValue:{fields:r.document.fields}}),u=De.newFoundDocument(i,s,o,a),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Hs(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_u(t,r.document),s=r.readTime?wt(r.readTime):L.min(),o=De.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_u(t,r.document),s=r.removedTargetIds||[];n=new Hs([],s,i,null)}else{if(!("filter"in e))return N();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new jP(i,s),a=r.targetId;n=new $v(a,o)}}return n}function eC(t,e){let n;if(e instanceof cs)n={update:Xf(t,e.key,e.value)};else if(e instanceof Mv)n={delete:Ac(t,e.key)};else if(e instanceof Yn)n={update:Xf(t,e.key,e.data),updateMask:cC(e.fieldMask)};else{if(!(e instanceof UP))return N();n={verify:Ac(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof vo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof qi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw N()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:YP(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:N()}(t,e.precondition)),n}function tC(t,e){return t&&t.length>0?(X(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?wt(i.updateTime):wt(s);return o.isEqual(L.min())&&(o=wt(s)),new MP(o,i.transformResults||[])}(n,e))):[]}function nC(t,e){return{documents:[jv(t,e.path)]}}function rC(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jv(t,i);const s=function(c){if(c.length!==0)return Hv(Rt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(l=>function(f){return{field:or(f.field),direction:oC(f.dir)}}(l))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Rc(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:i}}function iC(t){let e=XP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){X(r===1);const l=n.from[0];l.allDescendants?i=l.collectionId:e=e.child(l.collectionId)}let s=[];n.where&&(s=function(h){const f=qv(h);return f instanceof Rt&&vv(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(p){return new _o(ar(p.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,fa(f)?null:f}(n.limit));let u=null;n.startAt&&(u=function(h){const f=!!h.before,d=h.values||[];return new mo(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new mo(d,f)}(n.endAt)),TP(e,i,o,s,a,"F",u,c)}function sC(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return N()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ar(n.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ar(n.unaryFilter.field);return ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ar(n.unaryFilter.field);return ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ar(n.unaryFilter.field);return ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return N()}}(t):t.fieldFilter!==void 0?function(n){return ge.create(ar(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return N()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Rt.create(n.compositeFilter.filters.map(r=>qv(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return N()}}(n.compositeFilter.op))}(t):N()}function oC(t){return GP[t]}function aC(t){return KP[t]}function uC(t){return QP[t]}function or(t){return{fieldPath:t.canonicalString()}}function ar(t){return be.fromServerFormat(t.fieldPath)}function Hv(t){return t instanceof ge?function(n){if(n.op==="=="){if($f(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NAN"}};if(Lf(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($f(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NOT_NAN"}};if(Lf(n.value))return{unaryFilter:{field:or(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:or(n.field),op:aC(n.op),value:n.value}}}(t):t instanceof Rt?function(n){const r=n.getFilters().map(i=>Hv(i));return r.length===1?r[0]:{compositeFilter:{op:uC(n.op),filters:r}}}(t):N()}function cC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Wv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class sn{constructor(e,n,r,i,s=L.min(),o=L.min(),a=Le.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class lC{constructor(e){this.ct=e}}function hC(t){const e=iC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bc(e,e.limit,"L"):e}/**
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
 */class dC{constructor(){this._n=new fC}addToCollectionParentIndex(e,n){return this._n.add(n),y.resolve()}getCollectionParents(e,n){return y.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return y.resolve()}deleteFieldIndex(e,n){return y.resolve()}deleteAllFieldIndexes(e){return y.resolve()}createTargetIndexes(e,n){return y.resolve()}getDocumentsMatchingTarget(e,n){return y.resolve(null)}getIndexType(e,n){return y.resolve(0)}getFieldIndexes(e,n){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,n){return y.resolve(gn.min())}getMinOffsetFromCollectionGroup(e,n){return y.resolve(gn.min())}updateCollectionGroup(e,n,r){return y.resolve()}updateIndexEntries(e,n){return y.resolve()}}class fC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Se(re.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(re.comparator)).toArray()}}/**
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
 */class Nr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Nr(0)}static Ln(){return new Nr(-1)}}/**
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
 */class pC{constructor(){this.changes=new Wr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?y.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class gC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class mC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ti(r.mutation,i,at.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,n,r=j()){const i=xn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ci();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,j()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bt();const o=Ei(),a=function(){return Ei()}();return n.forEach((u,c)=>{const l=r.get(c.key);i.has(c.key)&&(l===void 0||l.mutation instanceof Yn)?s=s.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),Ti(l.mutation,c,l.mutation.getFieldMask(),me.now())):o.set(c.key,at.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,l)=>o.set(c,l)),n.forEach((c,l)=>{var h;return a.set(c,new gC(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ei();let i=new oe((o,a)=>o-a),s=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let l=r.get(u)||at.empty();l=a.applyToLocalView(c,l),r.set(u,l);const h=(i.get(a.batchId)||j()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Av();l.forEach(f=>{if(!s.has(f)){const d=Nv(n.get(f),r.get(f));d!==null&&h.set(f,d),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return x.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):IP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):y.resolve(xn());let a=-1,u=s;return o.next(c=>y.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?y.resolve():this.remoteDocumentCache.getEntry(e,l).next(f=>{u=u.insert(l,f)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,j())).next(l=>({batchId:a,changes:Sv(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new x(n)).next(r=>{let i=ci();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ci();return this.indexManager.getCollectionParents(e,s).next(a=>y.forEach(a,u=>{const c=function(h,f){return new pa(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(l=>{l.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const l=c.getKey();o.get(l)===null&&(o=o.insert(l,De.newInvalidDocument(l)))});let a=ci();return o.forEach((u,c)=>{const l=s.get(u);l!==void 0&&Ti(l.mutation,c,at.empty(),me.now()),ma(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class _C{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return y.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wt(i.createTime)}}(n)),y.resolve()}getNamedQuery(e,n){return y.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:hC(i.bundledQuery),readTime:wt(i.readTime)}}(n)),y.resolve()}}/**
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
 */class vC{constructor(){this.overlays=new oe(x.comparator),this.hr=new Map}getOverlay(e,n){return y.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xn();return y.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),y.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),y.resolve()}getOverlaysForCollection(e,n,r){const i=xn(),s=n.length+1,o=new x(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return y.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new oe((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let l=s.get(c.largestBatchId);l===null&&(l=xn(),s=s.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=xn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=i)););return y.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BP(n,r));let s=this.hr.get(n);s===void 0&&(s=j(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class ch{constructor(){this.Pr=new Se(_e.Ir),this.Tr=new Se(_e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new _e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new _e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new x(new re([])),r=new _e(n,e),i=new _e(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new x(new re([])),r=new _e(n,e),i=new _e(n,e+1);let s=j();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return x.comparator(e.key,n.key)||H(e.pr,n.pr)}static Er(e,n){return H(e.pr,n.pr)||x.comparator(e.key,n.key)}}/**
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
 */class yC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Se(_e.Ir)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FP(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new _e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,n){return y.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return y.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),y.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Se(H);return n.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),y.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;x.isDocumentKey(s)||(s=s.child(""));const o=new _e(new x(s),0);let a=new Se(H);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(u.pr)),!0)},o),y.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){X(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return y.forEach(n.mutations,i=>{const s=new _e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new _e(n,0),i=this.wr.firstAfterOrEqual(r);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class wC{constructor(e){this.vr=e,this.docs=function(){return new oe(x.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return y.resolve(r?r.document.mutableCopy():De.newInvalidDocument(n))}getEntries(e,n){let r=Bt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():De.newInvalidDocument(i))}),y.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bt();const o=n.path,a=new x(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||rP(nP(l),r)<=0||(i.has(l.key)||ma(n,l))&&(s=s.insert(l.key,l.mutableCopy()))}return y.resolve(s)}getAllFromCollectionGroup(e,n,r,i){N()}Fr(e,n){return y.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EC(this)}getSize(e){return y.resolve(this.size)}}class EC extends pC{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),y.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class TC{constructor(e){this.persistence=e,this.Mr=new Wr(n=>ih(n),sh),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Or=0,this.Nr=new ch,this.targetCount=0,this.Lr=Nr.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),y.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Nr(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,y.resolve()}updateTargetData(e,n){return this.qn(n),y.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),y.waitFor(s).next(()=>i)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return y.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),y.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),y.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),y.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return y.resolve(r)}containsKey(e,n){return y.resolve(this.Nr.containsKey(n))}}/**
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
 */class IC{constructor(e,n){this.Br={},this.overlays={},this.kr=new eh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new TC(this),this.indexManager=new dC,this.remoteDocumentCache=function(i){return new wC(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new lC(n),this.$r=new _C(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new yC(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new bC(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return y.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class bC extends sP{constructor(e){super(),this.currentSequenceNumber=e}}class lh{constructor(e){this.persistence=e,this.zr=new ch,this.jr=null}static Hr(e){return new lh(e)}get Jr(){if(this.jr)return this.jr;throw N()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),y.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),y.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),y.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Jr,r=>{const i=x.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,L.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return y.or([()=>y.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class hh{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=j(),i=j();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hh(e,n.fromCache,r,i)}}/**
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
 */class RC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return bR()?8:kn.v(pe())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new RC;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ni()<=z.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",sr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),y.resolve()):(ni()<=z.DEBUG&&b("QueryEngine","Query:",sr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ni()<=z.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",sr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yt(n))):y.resolve())}ji(e,n){if(jf(n))return y.resolve(null);let r=yt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bc(n,null,"F"),r=yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=j(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.Zi(n,a);return this.Xi(n,c,o,u.readTime)?this.ji(e,bc(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,r,i){return jf(n)||i.isEqual(L.min())?y.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?y.resolve(null):(ni()<=z.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),sr(n)),this.es(e,o,n,tP(i,-1)).next(a=>a))})}Zi(e,n){let r=new Se(bv(e));return n.forEach((i,s)=>{ma(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ni()<=z.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",sr(n)),this.zi.getDocumentsMatchingQuery(e,n,gn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class AC{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new oe(H),this.rs=new Wr(s=>ih(s),sh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function PC(t,e,n,r){return new AC(t,e,n,r)}async function Gv(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=j();for(const c of i){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of s){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return n.localDocuments.getDocuments(r,u).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function CC(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,c,l){const h=c.batch,f=h.keys();let d=y.resolve();return f.forEach(p=>{d=d.next(()=>l.getEntry(u,p)).next(g=>{const m=c.docVersions.get(p);X(m!==null),g.version.compareTo(m)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=j();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Kv(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function kC(t,e){const n=$(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((l,h)=>{const f=i.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,l.addedDocuments,h)));let d=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(Le.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,r)),i=i.insert(h,d),function(g,m,w){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(f,d,l)&&a.push(n.Qr.updateTargetData(s,d))});let u=Bt(),c=j();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(xC(s,o,e.documentUpdates).next(l=>{u=l.cs,c=l.ls})),!r.isEqual(L.min())){const l=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return y.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=i,s))}function xC(t,e,n){let r=j(),i=j();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bt();return n.forEach((a,u)=>{const c=s.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(L.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{cs:o,ls:i}})}function OC(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function DC(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,y.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new sn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Cc(t,e,n){const r=$(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!us(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Zf(t,e,n){const r=$(t);let i=L.min(),s=j();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,l){const h=$(u),f=h.rs.get(l);return f!==void 0?y.resolve(h.ns.get(f)):h.Qr.getTargetData(c,l)}(r,o,yt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:L.min(),n?s:j())).next(a=>(NC(r,RP(e),a),{documents:a,hs:s})))}function NC(t,e,n){let r=t.ss.get(e)||L.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class ep{constructor(){this.activeTargetIds=xP()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VC{constructor(){this.no=new ep,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MC{io(e){}shutdown(){}}/**
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
 */class tp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xs=null;function vu(){return xs===null?xs=function(){return 268435456+Math.round(2147483648*Math.random())}():xs++,"0x"+xs.toString(16)}/**
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
 */const LC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class $C{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const xe="WebChannelConnection";class UC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=vu(),u=this.bo(n,r.toUriEncodedString());b("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,s,o),this.Co(n,u,c,i).then(l=>(b("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw kr("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=LC[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=vu();return new Promise((o,a)=>{const u=new qA;u.setWithCredentials(!0),u.listenOnce(jA.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case mu.NO_ERROR:const l=u.getResponseJson();b(xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(l)),o(l);break;case mu.TIMEOUT:b(xe,`RPC '${e}' ${s} timed out`),a(new C(E.DEADLINE_EXCEEDED,"Request time out"));break;case mu.HTTP_ERROR:const h=u.getStatus();if(b(xe,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let f=u.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const p=function(m){const w=m.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(w)>=0?w:E.UNKNOWN}(d.status);a(new C(p,d.message))}else a(new C(E.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new C(E.UNAVAILABLE,"Connection failed."));break;default:N()}}finally{b(xe,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);b(xe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Fo(e,n,r){const i=vu(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FA(),a=BA(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const l=s.join("");b(xe,`Creating RPC '${e}' stream ${i}: ${l}`,u);const h=o.createWebChannel(l,u);let f=!1,d=!1;const p=new $C({lo:m=>{d?b(xe,`Not sending because RPC '${e}' stream ${i} is closed:`,m):(f||(b(xe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),b(xe,`RPC '${e}' stream ${i} sending:`,m),h.send(m))},ho:()=>h.close()}),g=(m,w,T)=>{m.listen(w,I=>{try{T(I)}catch(S){setTimeout(()=>{throw S},0)}})};return g(h,Ps.EventType.OPEN,()=>{d||b(xe,`RPC '${e}' stream ${i} transport opened.`)}),g(h,Ps.EventType.CLOSE,()=>{d||(d=!0,b(xe,`RPC '${e}' stream ${i} transport closed`),p.Vo())}),g(h,Ps.EventType.ERROR,m=>{d||(d=!0,kr(xe,`RPC '${e}' stream ${i} transport errored:`,m),p.Vo(new C(E.UNAVAILABLE,"The operation could not be completed")))}),g(h,Ps.EventType.MESSAGE,m=>{var w;if(!d){const T=m.data[0];X(!!T);const I=T,S=I.error||((w=I[0])===null||w===void 0?void 0:w.error);if(S){b(xe,`RPC '${e}' stream ${i} received error:`,S);const k=S.status;let A=function(V){const le=he[V];if(le!==void 0)return Lv(le)}(k),P=S.message;A===void 0&&(A=E.INTERNAL,P="Unknown error status: "+k+" with message "+S.message),d=!0,p.Vo(new C(A,P)),h.close()}else b(xe,`RPC '${e}' stream ${i} received:`,T),p.mo(T)}}),g(a,zA.STAT_EVENT,m=>{m.stat===xf.PROXY?b(xe,`RPC '${e}' stream ${i} detected buffering proxy`):m.stat===xf.NOPROXY&&b(xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Ro()},0),p}}function yu(){return typeof document<"u"?document:null}/**
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
 */function wa(t){return new JP(t,!0)}/**
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
 */class Qv{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Jv{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Qv(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(It(n.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new C(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class FC extends Jv{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=ZP(this.serializer,e),r=function(s){if(!("targetChange"in s))return L.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?L.min():o.readTime?wt(o.readTime):L.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Pc(this.serializer),n.addTarget=function(s,o){let a;const u=o.target;if(a=Ic(u)?{documents:nC(s,u)}:{query:rC(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Fv(s,o.resumeToken);const c=Rc(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(L.min())>0){a.readTime=wo(s,o.snapshotVersion.toTimestamp());const c=Rc(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=sC(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Pc(this.serializer),n.removeTarget=e,this.t_(n)}}class BC extends Jv{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=tC(e.writeResults,e.commitTime),r=wt(e.commitTime);return this.listener.T_(r,n)}return X(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Pc(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eC(this.serializer,r))};this.t_(n)}}/**
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
 */class jC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Sc(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(E.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Sc(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new C(E.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class zC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(It(n),this.g_=!1):b("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class qC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Xn(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=$(u);c.v_.add(4),await hs(c),c.x_.set("Unknown"),c.v_.delete(4),await Ea(c)}(this))})}),this.x_=new zC(r,i)}}async function Ea(t){if(Xn(t))for(const e of t.F_)await e(!0)}async function hs(t){for(const e of t.F_)await e(!1)}function Yv(t,e){const n=$(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),gh(n)?ph(n):Gr(n).Jo()&&fh(n,e))}function dh(t,e){const n=$(t),r=Gr(n);n.C_.delete(e),r.Jo()&&Xv(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Xn(n)&&n.x_.set("Unknown"))}function fh(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(L.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gr(t).c_(e)}function Xv(t,e){t.O_.Oe(e),Gr(t).l_(e)}function ph(t){t.O_=new WP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Gr(t).start(),t.x_.p_()}function gh(t){return Xn(t)&&!Gr(t).Ho()&&t.C_.size>0}function Xn(t){return $(t).v_.size===0}function Zv(t){t.O_=void 0}async function HC(t){t.C_.forEach((e,n)=>{fh(t,e)})}async function WC(t,e){Zv(t),gh(t)?(t.x_.S_(e),ph(t)):t.x_.set("Unknown")}async function GC(t,e,n){if(t.x_.set("Online"),e instanceof Uv&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Eo(t,r)}else if(e instanceof Hs?t.O_.$e(e):e instanceof $v?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(L.min()))try{const r=await Kv(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.C_.get(c);l&&s.C_.set(c,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const l=s.C_.get(u);if(!l)return;s.C_.set(u,l.withResumeToken(Le.EMPTY_BYTE_STRING,l.snapshotVersion)),Xv(s,u);const h=new sn(l.target,u,c,l.sequenceNumber);fh(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await Eo(t,r)}}async function Eo(t,e,n){if(!us(e))throw e;t.v_.add(1),await hs(t),t.x_.set("Offline"),n||(n=()=>Kv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Ea(t)})}function ey(t,e){return e().catch(n=>Eo(t,n,e))}async function Ta(t){const e=$(t),n=_n(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;KC(e);)try{const i=await OC(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,QC(e,i)}catch(i){await Eo(e,i)}ty(e)&&ny(e)}function KC(t){return Xn(t)&&t.D_.length<10}function QC(t,e){t.D_.push(e);const n=_n(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function ty(t){return Xn(t)&&!_n(t).Ho()&&t.D_.length>0}function ny(t){_n(t).start()}async function JC(t){_n(t).d_()}async function YC(t){const e=_n(t);for(const n of t.D_)e.I_(n.mutations)}async function XC(t,e,n){const r=t.D_.shift(),i=oh.from(r,e,n);await ey(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ta(t)}async function ZC(t,e){e&&_n(t).P_&&await async function(r,i){if(function(o){return zP(o)&&o!==E.ABORTED}(i.code)){const s=r.D_.shift();_n(r).Zo(),await ey(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ta(r)}}(t,e),ty(t)&&ny(t)}async function np(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=Xn(n);n.v_.add(3),await hs(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Ea(n)}async function ek(t,e){const n=$(t);e?(n.v_.delete(2),await Ea(n)):e||(n.v_.add(2),await hs(n),n.x_.set("Unknown"))}function Gr(t){return t.N_||(t.N_=function(n,r,i){const s=$(n);return s.R_(),new FC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:HC.bind(null,t),To:WC.bind(null,t),u_:GC.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),gh(t)?ph(t):t.x_.set("Unknown")):(await t.N_.stop(),Zv(t))})),t.N_}function _n(t){return t.L_||(t.L_=function(n,r,i){const s=$(n);return s.R_(),new BC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:JC.bind(null,t),To:ZC.bind(null,t),E_:YC.bind(null,t),T_:XC.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Ta(t)):(await t.L_.stop(),t.D_.length>0&&(b("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class mh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new mh(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _h(t,e){if(It("AsyncQueue",`${e}: ${t}`),us(t))return new C(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class gr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||x.comparator(n.key,r.key):(n,r)=>x.comparator(n.key,r.key),this.keyedMap=ci(),this.sortedSet=new oe(this.comparator)}static emptySet(e){return new gr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof gr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new gr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class rp{constructor(){this.B_=new oe(x.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):N():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Vr{constructor(e,n,r,i,s,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Vr(e,n,gr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class tk{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class nk{constructor(){this.queries=new Wr(e=>Iv(e),ga),this.onlineState="Unknown",this.W_=new Set}}async function rk(t,e){const n=$(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new tk,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=_h(o,`Initialization of query '${sr(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&vh(n)}async function ik(t,e){const n=$(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sk(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&vh(n)}function ok(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function vh(t){t.W_.forEach(e=>{e.next()})}var kc,ip;(ip=kc||(kc={})).j_="default",ip.Cache="cache";class ak{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Vr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=Vr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==kc.Cache}}/**
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
 */class ry{constructor(e){this.key=e}}class iy{constructor(e){this.key=e}}class uk{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=j(),this.mutatedKeys=j(),this.ha=bv(e),this.Pa=new gr(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new rp,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((l,h)=>{const f=i.get(l),d=ma(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let m=!1;f&&d?f.data.isEqual(d.data)?p!==g&&(r.track({type:3,doc:d}),m=!0):this.da(f,d)||(r.track({type:2,doc:d}),m=!0,(u&&this.ha(d,u)>0||c&&this.ha(d,c)<0)&&(a=!0)):!f&&d?(r.track({type:0,doc:d}),m=!0):f&&!d&&(r.track({type:1,doc:f}),m=!0,(u||c)&&(a=!0)),m&&(d?(o=o.add(d),s=g?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((l,h)=>function(d,p){const g=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return N()}};return g(d)-g(p)}(l.type,h.type)||this.ha(l.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],u=this.la.size===0&&this.current&&!i?1:0,c=u!==this.ca;return this.ca=u,o.length!==0||c?{snapshot:new Vr(this.query,e.Pa,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new rp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=j(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new iy(r))}),this.la.forEach(r=>{e.has(r)||n.push(new ry(r))}),n}fa(e){this.ua=e.hs,this.la=j();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return Vr.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class ck{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class lk{constructor(e){this.key=e,this.pa=!1}}class hk{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Wr(a=>Iv(a),ga),this.Sa=new Map,this.ba=new Set,this.Da=new oe(x.comparator),this.Ca=new Map,this.va=new ch,this.Fa={},this.Ma=new Map,this.xa=Nr.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function dk(t,e,n=!0){const r=ly(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await sy(r,e,n,!0),i}async function fk(t,e){const n=ly(t);await sy(n,e,!0,!1)}async function sy(t,e,n,r){const i=await DC(t.localStore,yt(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await pk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Yv(t.remoteStore,i),a}async function pk(t,e,n,r,i){t.Na=(h,f,d)=>async function(g,m,w,T){let I=m.view.Ta(w);I.Xi&&(I=await Zf(g.localStore,m.query,!1).then(({documents:P})=>m.view.Ta(P,I)));const S=T&&T.targetChanges.get(m.targetId),k=T&&T.targetMismatches.get(m.targetId)!=null,A=m.view.applyChanges(I,g.isPrimaryClient,S,k);return op(g,m.targetId,A.Va),A.snapshot}(t,h,f,d);const s=await Zf(t.localStore,e,!0),o=new uk(e,s.hs),a=o.Ta(s.documents),u=ls.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,u);op(t,n,c.Va);const l=new ck(e,n,o);return t.wa.set(e,l),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),c.snapshot}async function gk(t,e,n){const r=$(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!ga(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Cc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&dh(r.remoteStore,i.targetId),xc(r,i.targetId)}).catch(as)):(xc(r,i.targetId),await Cc(r.localStore,i.targetId,!0))}async function mk(t,e){const n=$(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),dh(n.remoteStore,r.targetId))}async function _k(t,e,n){const r=bk(t);try{const i=await function(o,a){const u=$(o),c=me.now(),l=a.reduce((d,p)=>d.add(p.key),j());let h,f;return u.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Bt(),g=j();return u.os.getEntries(d,l).next(m=>{p=m,p.forEach((w,T)=>{T.isValidDocument()||(g=g.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(d,p)).next(m=>{h=m;const w=[];for(const T of a){const I=$P(T,h.get(T.key).overlayedDocument);I!=null&&w.push(new Yn(T.key,I,gv(I.value.mapValue),$t.exists(!0)))}return u.mutationQueue.addMutationBatch(d,c,w,a)}).next(m=>{f=m;const w=m.applyToLocalDocumentSet(h,g);return u.documentOverlayCache.saveOverlays(d,m.batchId,w)})}).then(()=>({batchId:f.batchId,changes:Sv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let c=o.Fa[o.currentUser.toKey()];c||(c=new oe(H)),c=c.insert(a,u),o.Fa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ds(r,i.changes),await Ta(r.remoteStore)}catch(i){const s=_h(i,"Failed to persist write");n.reject(s)}}async function oy(t,e){const n=$(t);try{const r=await kC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?X(o.pa):i.removedDocuments.size>0&&(X(o.pa),o.pa=!1))}),await ds(n,r,e)}catch(r){await as(r)}}function sp(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=$(o);u.onlineState=a;let c=!1;u.queries.forEach((l,h)=>{for(const f of h.Q_)f.G_(a)&&(c=!0)}),c&&vh(u)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vk(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new oe(x.comparator);o=o.insert(s,De.newNoDocument(s,L.min()));const a=j().add(s),u=new ya(L.min(),new Map,new oe(H),o,a);await oy(r,u),r.Da=r.Da.remove(s),r.Ca.delete(e),yh(r)}else await Cc(r.localStore,e,!1).then(()=>xc(r,e,n)).catch(as)}async function yk(t,e){const n=$(t),r=e.batch.batchId;try{const i=await CC(n.localStore,e);uy(n,r,null),ay(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ds(n,i)}catch(i){await as(i)}}async function wk(t,e,n){const r=$(t);try{const i=await function(o,a){const u=$(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return u.mutationQueue.lookupMutationBatch(c,a).next(h=>(X(h!==null),l=h.keys(),u.mutationQueue.removeMutationBatch(c,h))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>u.localDocuments.getDocuments(c,l))})}(r.localStore,e);uy(r,e,n),ay(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ds(r,i)}catch(i){await as(i)}}function ay(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function uy(t,e,n){const r=$(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||cy(t,r)})}function cy(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(dh(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),yh(t))}function op(t,e,n){for(const r of n)r instanceof ry?(t.va.addReference(r.key,e),Ek(t,r)):r instanceof iy?(b("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||cy(t,r.key)):N()}function Ek(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(b("SyncEngine","New document in limbo: "+n),t.ba.add(r),yh(t))}function yh(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new x(re.fromString(e)),r=t.xa.next();t.Ca.set(r,new lk(n)),t.Da=t.Da.insert(n,r),Yv(t.remoteStore,new sn(yt(Tv(n.path)),r,"TargetPurposeLimboResolution",eh._e))}}async function ds(t,e,n){const r=$(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,u)=>{o.push(r.Na(u,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const l=hh.Ki(u.targetId,c);s.push(l)}}))}),await Promise.all(o),r.ya.u_(i),await async function(u,c){const l=$(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>y.forEach(c,f=>y.forEach(f.qi,d=>l.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>y.forEach(f.Qi,d=>l.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!us(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=l.ns.get(f),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);l.ns=l.ns.insert(f,g)}}}(r.localStore,s))}async function Tk(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await Gv(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(u=>{u.reject(new C(E.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ds(n,r.us)}}function Ik(t,e){const n=$(t),r=n.Ca.get(e);if(r&&r.pa)return j().add(r.key);{let i=j();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function ly(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ik.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vk.bind(null,e),e.ya.u_=sk.bind(null,e.eventManager),e.ya.La=ok.bind(null,e.eventManager),e}function bk(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wk.bind(null,e),e}class ap{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=wa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return PC(this.persistence,new SC,e.initialUser,this.serializer)}createPersistence(e){return new IC(lh.Hr,this.serializer)}createSharedClientState(e){return new VC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tk.bind(null,this.syncEngine),await ek(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nk}()}createDatastore(e){const n=wa(e.databaseInfo.databaseId),r=function(s){return new UC(s)}(e.databaseInfo);return function(s,o,a,u){return new jC(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new qC(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>sp(this.syncEngine,n,0),function(){return tp.D()?new tp:new MC}())}createSyncEngine(e,n){return function(i,s,o,a,u,c,l){const h=new hk(i,s,o,a,u,c);return l&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=$(r);b("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await hs(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class Sk{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):It("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Ak{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Oe.UNAUTHENTICATED,this.clientId=dv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_h(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wu(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Gv(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function up(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ck(t);b("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>np(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>np(e.remoteStore,i)),t._onlineComponents=e}function Pk(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ck(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await wu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Pk(n))throw n;kr("Error using user provided cache. Falling back to memory cache: "+n),await wu(t,new ap)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await wu(t,new ap);return t._offlineComponents}async function hy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await up(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await up(t,new Rk))),t._onlineComponents}function kk(t){return hy(t).then(e=>e.syncEngine)}async function xk(t){const e=await hy(t),n=e.eventManager;return n.onListen=dk.bind(null,e.syncEngine),n.onUnlisten=gk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mk.bind(null,e.syncEngine),n}function Ok(t,e,n={}){const r=new Lt;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,c){const l=new Sk({next:f=>{o.enqueueAndForget(()=>ik(s,h)),f.fromCache&&u.source==="server"?c.reject(new C(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new ak(a,l,{includeMetadataChanges:!0,ta:!0});return rk(s,h)}(await xk(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function dy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const cp=new Map;/**
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
 */function fy(t,e,n){if(!n)throw new C(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Dk(t,e,n,r){if(e===!0&&r===!0)throw new C(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lp(t){if(!x.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hp(t){if(x.isDocumentKey(t))throw new C(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":N()}function To(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wh(t);throw new C(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class dp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new C(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new C(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new C(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new C(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ia{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new WA;switch(r.type){case"firstParty":return new JA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new C(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cp.get(n);r&&(b("ComponentProvider","Removing Datastore"),cp.delete(n),r.terminate())}(this),Promise.resolve()}}function Nk(t,e,n,r={}){var i;const s=(t=To(t,Ia))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&kr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Oe.MOCK_USER;else{a=t_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new C(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Oe(c)}t._authCredentials=new GA(new hv(a,u))}}/**
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
 */class ba{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ba(this.firestore,e,this._query)}}class lt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}}class ln extends ba{constructor(e,n,r){super(e,n,Tv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new x(e))}withConverter(e){return new ln(this.firestore,e,this._path)}}function py(t,e,...n){if(t=Fe(t),fy("collection","path",e),t instanceof Ia){const r=re.fromString(e,...n);return hp(r),new ln(t,null,r)}{if(!(t instanceof lt||t instanceof ln))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return hp(r),new ln(t.firestore,null,r)}}function Vk(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=dv.newId()),fy("doc","path",e),t instanceof Ia){const r=re.fromString(e,...n);return lp(r),new lt(t,null,new x(r))}{if(!(t instanceof lt||t instanceof ln))throw new C(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(re.fromString(e,...n));return lp(r),new lt(t.firestore,t instanceof ln?t.converter:null,new x(r))}}/**
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
 */class Mk{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Qv(this,"async_queue_retry"),this.cu=()=>{const n=yu();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=yu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=yu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Lt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!us(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw It("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=mh.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&N()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class Eh extends Ia{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Mk}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||my(this),this._firestoreClient.terminate()}}function Lk(t,e){const n=typeof t=="object"?t:Pl(),r=typeof t=="string"?t:e||"(default)",i=Jo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Xm("firestore");s&&Nk(i,...s)}return i}function gy(t){return t._firestoreClient||my(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function my(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,c,l){return new lP(a,u,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,dy(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Ak(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mr(Le.fromBase64String(e))}catch(n){throw new C(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Mr(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Th{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _y{constructor(e){this._methodName=e}}/**
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
 */class Ih{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
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
 */const $k=/^__.*__$/;class Uk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yn(e,this.data,this.fieldMask,n,this.fieldTransforms):new cs(e,this.data,n,this.fieldTransforms)}}function vy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw N()}}class bh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Io(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(vy(this.Vu)&&$k.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class Fk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wa(e)}Cu(e,n,r,i=!1){return new bh({Vu:e,methodName:n,Du:r,path:be.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bk(t){const e=t._freezeSettings(),n=wa(t._databaseId);return new Fk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jk(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);Ty("Data must be an object, but it was:",o,r);const a=wy(r,o);let u,c;if(s.merge)u=new at(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const f=zk(e,h,n);if(!o.contains(f))throw new C(E.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Hk(l,f)||l.push(f)}u=new at(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Uk(new Ze(a),u,c)}function yy(t,e){if(Ey(t=Fe(t)))return Ty("Unsupported field value:",e,t),wy(t,e);if(t instanceof _y)return function(r,i){if(!vy(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=yy(a,i.wu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return OP(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=me.fromDate(r);return{timestampValue:wo(i.serializer,s)}}if(r instanceof me){const s=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wo(i.serializer,s)}}if(r instanceof Ih)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Mr)return{bytesValue:Fv(i.serializer,r._byteString)};if(r instanceof lt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uh(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${wh(r)}`)}(t,e)}function wy(t,e){const n={};return fv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(t,(r,i)=>{const s=yy(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ey(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof Ih||t instanceof Mr||t instanceof lt||t instanceof _y)}function Ty(t,e,n){if(!Ey(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=wh(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function zk(t,e,n){if((e=Fe(e))instanceof Th)return e._internalPath;if(typeof e=="string")return Iy(t,e);throw Io("Field path arguments must be of type string or ",t,!1,void 0,n)}const qk=new RegExp("[~\\*/\\[\\]]");function Iy(t,e,n){if(e.search(qk)>=0)throw Io(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Th(...e.split("."))._internalPath}catch{throw Io(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Io(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new C(E.INVALID_ARGUMENT,a+t+u)}function Hk(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class by{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Wk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ry("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Wk extends by{data(){return super.data()}}function Ry(t,e){return typeof e=="string"?Iy(t,e):e instanceof Th?e._internalPath:e._delegate._internalPath}/**
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
 */function Gk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Kk{convertValue(e,n="none"){switch(zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return de(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw N()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Ih(de(e.latitude),de(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fi(e));default:return null}}convertTimestamp(e){const n=mn(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=re.fromString(e);X(Wv(r));const i=new Bi(r.get(1),r.get(3)),s=new x(r.popFirst(5));return i.isEqual(n)||It(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Qk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Os{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jk extends by{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ry("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ws extends Jk{data(e={}){return super.data(e)}}class Yk{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Os(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ws(this._firestore,this._userDataWriter,r.key,r,new Os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new Ws(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new Ws(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Os(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,l=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:Xk(a.type),doc:u,oldIndex:c,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Xk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return N()}}class Zk extends Kk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}function ex(t){t=To(t,ba);const e=To(t.firestore,Eh),n=gy(e),r=new Zk(e);return Gk(t._query),Ok(n,t._query).then(i=>new Yk(e,r,t,i))}function tx(t,e){const n=To(t.firestore,Eh),r=Vk(t),i=Qk(t.converter,e);return nx(n,[jk(Bk(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function nx(t,e){return function(r,i){const s=new Lt;return r.asyncQueue.enqueueAndForget(async()=>_k(await kk(r),i,s)),s.promise}(gy(t),e)}(function(e,n=!0){(function(i){qr=i})(Qn),Fn(new pn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Eh(new KA(r.getProvider("auth-internal")),new XA(r.getProvider("app-check-internal")),function(c,l){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new C(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bi(c.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),vt(Of,"4.6.0",e),vt(Of,"4.6.0","esm2017")})();/**
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
 */const Sy="firebasestorage.googleapis.com",Ay="storageBucket",rx=2*60*1e3,ix=10*60*1e3;/**
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
 */class ce extends St{constructor(e,n,r=0){super(Eu(e),`Firebase Storage: ${n} (${Eu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Eu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function Eu(t){return"storage/"+t}function Rh(){const t="An unknown error occurred, please check the error payload for server response.";return new ce(ue.UNKNOWN,t)}function sx(t){return new ce(ue.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ox(t){return new ce(ue.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function ax(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ce(ue.UNAUTHENTICATED,t)}function ux(){return new ce(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function cx(t){return new ce(ue.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function lx(){return new ce(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function hx(){return new ce(ue.CANCELED,"User canceled the upload/download.")}function dx(t){return new ce(ue.INVALID_URL,"Invalid URL '"+t+"'.")}function fx(t){return new ce(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function px(){return new ce(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ay+"' property when initializing the app?")}function gx(){return new ce(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function mx(){return new ce(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _x(t){return new ce(ue.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Oc(t){return new ce(ue.INVALID_ARGUMENT,t)}function Py(){return new ce(ue.APP_DELETED,"The Firebase app was deleted.")}function vx(t){return new ce(ue.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ii(t,e){return new ce(ue.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ri(t){throw new ce(ue.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class He{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=He.makeFromUrl(e,n)}catch{return new He(e,"")}if(r.path==="")return r;throw fx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(S){S.path_=decodeURIComponent(S.path)}const l="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${i}/o${f}`,"i"),p={bucket:1,path:3},g=n===Sy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,m="([^?#]*)",w=new RegExp(`^https?://${g}/${i}/${m}`,"i"),I=[{regex:a,indices:u,postModify:s},{regex:d,indices:p,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let S=0;S<I.length;S++){const k=I[S],A=k.regex.exec(e);if(A){const P=A[k.indices.bucket];let W=A[k.indices.path];W||(W=""),r=new He(P,W),k.postModify(r);break}}if(r==null)throw dx(e);return r}}class yx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function wx(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let c=!1;function l(...m){c||(c=!0,e.apply(null,m))}function h(m){i=setTimeout(()=>{i=null,t(d,u())},m)}function f(){s&&clearTimeout(s)}function d(m,...w){if(c){f();return}if(m){f(),l.call(null,m,...w);return}if(u()||o){f(),l.call(null,m,...w);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,h(I)}let p=!1;function g(m){p||(p=!0,f(),!c&&(i!==null?(m||(a=2),clearTimeout(i),h(0)):m||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function Ex(t){t(!1)}/**
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
 */function Tx(t){return t!==void 0}function Ix(t){return typeof t=="object"&&!Array.isArray(t)}function Sh(t){return typeof t=="string"||t instanceof String}function fp(t){return Ah()&&t instanceof Blob}function Ah(){return typeof Blob<"u"}function pp(t,e,n,r){if(r<e)throw Oc(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Oc(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ph(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Cy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Mn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mn||(Mn={}));/**
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
 */function bx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class Rx{constructor(e,n,r,i,s,o,a,u,c,l,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,p)=>{this.resolve_=d,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ds(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mn.NO_ERROR,u=s.getStatus();if(!a||bx(u,this.additionalRetryCodes_)&&this.retry){const l=s.getErrorCode()===Mn.ABORT;r(!1,new Ds(!1,null,l));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new Ds(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());Tx(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Rh();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?Py():hx();o(u)}else{const u=lx();o(u)}};this.canceled_?n(!1,new Ds(!1,null,!0)):this.backoffId_=wx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ex(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ds{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Sx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ax(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Px(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Cx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function kx(t,e,n,r,i,s,o=!0){const a=Cy(t.urlParams),u=t.url+a,c=Object.assign({},t.headers);return Px(c,e),Sx(c,n),Ax(c,s),Cx(c,r),new Rx(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function xx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ox(...t){const e=xx();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ah())return new Blob(t);throw new ce(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Dx(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Nx(t){if(typeof atob>"u")throw _x("base-64");return atob(t)}/**
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
 */const _t={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Tu{constructor(e,n){this.data=e,this.contentType=n||null}}function Vx(t,e){switch(t){case _t.RAW:return new Tu(ky(e));case _t.BASE64:case _t.BASE64URL:return new Tu(xy(t,e));case _t.DATA_URL:return new Tu(Lx(e),$x(e))}throw Rh()}function ky(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Mx(t){let e;try{e=decodeURIComponent(t)}catch{throw Ii(_t.DATA_URL,"Malformed data URL.")}return ky(e)}function xy(t,e){switch(t){case _t.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ii(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case _t.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ii(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Nx(e)}catch(i){throw i.message.includes("polyfill")?i:Ii(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Oy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ii(_t.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Ux(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Lx(t){const e=new Oy(t);return e.base64?xy(_t.BASE64,e.rest):Mx(e.rest)}function $x(t){return new Oy(t).contentType}function Ux(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Zt{constructor(e,n){let r=0,i="";fp(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(fp(this.data_)){const r=this.data_,i=Dx(r,e,n);return i===null?null:new Zt(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Zt(r,!0)}}static getBlob(...e){if(Ah()){const n=e.map(r=>r instanceof Zt?r.data_:r);return new Zt(Ox.apply(null,n))}else{const n=e.map(o=>Sh(o)?Vx(_t.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Zt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Dy(t){let e;try{e=JSON.parse(t)}catch{return null}return Ix(e)?e:null}/**
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
 */function Fx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Bx(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ny(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function jx(t,e){return e}class $e{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||jx}}let Ns=null;function zx(t){return!Sh(t)||t.length<2?t:Ny(t)}function Vy(){if(Ns)return Ns;const t=[];t.push(new $e("bucket")),t.push(new $e("generation")),t.push(new $e("metageneration")),t.push(new $e("name","fullPath",!0));function e(s,o){return zx(o)}const n=new $e("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new $e("size");return i.xform=r,t.push(i),t.push(new $e("timeCreated")),t.push(new $e("updated")),t.push(new $e("md5Hash",null,!0)),t.push(new $e("cacheControl",null,!0)),t.push(new $e("contentDisposition",null,!0)),t.push(new $e("contentEncoding",null,!0)),t.push(new $e("contentLanguage",null,!0)),t.push(new $e("contentType",null,!0)),t.push(new $e("metadata","customMetadata",!0)),Ns=t,Ns}function qx(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new He(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Hx(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return qx(r,t),r}function My(t,e,n){const r=Dy(e);return r===null?null:Hx(t,r,n)}function Wx(t,e,n,r){const i=Dy(e);if(i===null||!Sh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const l=t.bucket,h=t.fullPath,f="/b/"+o(l)+"/o/"+o(h),d=Ph(f,n,r),p=Cy({alt:"media",token:c});return d+p})[0]}function Gx(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Ly{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function $y(t){if(!t)throw Rh()}function Kx(t,e){function n(r,i){const s=My(t,i,e);return $y(s!==null),s}return n}function Qx(t,e){function n(r,i){const s=My(t,i,e);return $y(s!==null),Wx(s,i,t.host,t._protocol)}return n}function Uy(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=ux():i=ax():n.getStatus()===402?i=ox(t.bucket):n.getStatus()===403?i=cx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Jx(t){const e=Uy(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=sx(t.path)),s.serverResponse=i.serverResponse,s}return n}function Yx(t,e,n){const r=e.fullServerUrl(),i=Ph(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Ly(i,s,Qx(t,n),o);return a.errorHandler=Jx(e),a}function Xx(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Zx(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Xx(null,e)),r}function e2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let S=0;S<2;S++)I=I+Math.random().toString().slice(2);return I}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const c=Zx(e,r,i),l=Gx(c,n),h="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+u+"--",d=Zt.getBlob(h,r,f);if(d===null)throw gx();const p={name:c.fullPath},g=Ph(s,t.host,t._protocol),m="POST",w=t.maxUploadRetryTime,T=new Ly(g,m,Kx(t,n),w);return T.urlParams=p,T.headers=o,T.body=d.uploadData(),T.errorHandler=Uy(e),T}class t2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ri("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ri("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ri("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ri("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ri("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class n2 extends t2{initXhr(){this.xhr_.responseType="text"}}function Fy(){return new n2}/**
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
 */class qn{constructor(e,n){this._service=e,n instanceof He?this._location=n:this._location=He.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qn(e,n)}get root(){const e=new He(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ny(this._location.path)}get storage(){return this._service}get parent(){const e=Fx(this._location.path);if(e===null)return null;const n=new He(this._location.bucket,e);return new qn(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vx(e)}}function r2(t,e,n){t._throwIfRoot("uploadBytes");const r=e2(t.storage,t._location,Vy(),new Zt(e,!0),n);return t.storage.makeRequestWithTokens(r,Fy).then(i=>({metadata:i,ref:t}))}function i2(t){t._throwIfRoot("getDownloadURL");const e=Yx(t.storage,t._location,Vy());return t.storage.makeRequestWithTokens(e,Fy).then(n=>{if(n===null)throw mx();return n})}function s2(t,e){const n=Bx(t._location.path,e),r=new He(t._location.bucket,n);return new qn(t.storage,r)}/**
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
 */function o2(t){return/^[A-Za-z]+:\/\//.test(t)}function a2(t,e){return new qn(t,e)}function By(t,e){if(t instanceof Ch){const n=t;if(n._bucket==null)throw px();const r=new qn(n,n._bucket);return e!=null?By(r,e):r}else return e!==void 0?s2(t,e):t}function u2(t,e){if(e&&o2(e)){if(t instanceof Ch)return a2(t,e);throw Oc("To use ref(service, url), the first argument must be a Storage instance.")}else return By(t,e)}function gp(t,e){const n=e==null?void 0:e[Ay];return n==null?null:He.makeFromBucketSpec(n,t)}function c2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:t_(i,t.app.options.projectId))}class Ch{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Sy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=rx,this._maxUploadRetryTime=ix,this._requests=new Set,i!=null?this._bucket=He.makeFromBucketSpec(i,this._host):this._bucket=gp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=He.makeFromBucketSpec(this._url,e):this._bucket=gp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qn(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new yx(Py());{const o=kx(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const mp="@firebase/storage",_p="0.12.4";/**
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
 */const jy="storage";function l2(t,e,n){return t=Fe(t),r2(t,e,n)}function h2(t){return t=Fe(t),i2(t)}function d2(t,e){return t=Fe(t),u2(t,e)}function f2(t=Pl(),e){t=Fe(t);const r=Jo(t,jy).getImmediate({identifier:e}),i=Xm("storage");return i&&p2(r,...i),r}function p2(t,e,n,r={}){c2(t,e,n,r)}function g2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ch(n,r,i,e,Qn)}function m2(){Fn(new pn(jy,g2,"PUBLIC").setMultipleInstances(!0)),vt(mp,_p,""),vt(mp,_p,"esm2017")}m2();function kh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _2=zy,qy=new Yi("auth","Firebase",zy());/**
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
 */const bo=new Sl("@firebase/auth");function v2(t,...e){bo.logLevel<=z.WARN&&bo.warn(`Auth (${Qn}): ${t}`,...e)}function Gs(t,...e){bo.logLevel<=z.ERROR&&bo.error(`Auth (${Qn}): ${t}`,...e)}/**
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
 */function jt(t,...e){throw xh(t,...e)}function Et(t,...e){return xh(t,...e)}function Hy(t,e,n){const r=Object.assign(Object.assign({},_2()),{[e]:n});return new Yi("auth","Firebase",r).create(e,{appName:t.name})}function Ln(t){return Hy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qy.create(t,...e)}function D(t,e,...n){if(!t)throw xh(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Gs(e),new Error(e)}function zt(t,e){t||Nt(e)}/**
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
 */function Dc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function y2(){return vp()==="http:"||vp()==="https:"}function vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function w2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(y2()||ER()||"connection"in navigator)?navigator.onLine:!0}function E2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fs{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=yR()||TR()}get(){return w2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Oh(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const T2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const I2=new fs(3e4,6e4);function Dh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Kr(t,e,n,r,i={}){return Gy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Wy.fetch()(Ky(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Gy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},T2),e);try{const i=new R2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vs(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vs(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Vs(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Vs(t,"user-disabled",o);const l=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hy(t,l,c);jt(t,l)}}catch(i){if(i instanceof St)throw i;jt(t,"network-request-failed",{message:String(i)})}}async function b2(t,e,n,r,i={}){const s=await Kr(t,e,n,r,i);return"mfaPendingCredential"in s&&jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ky(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Oh(t.config,i):`${t.config.apiScheme}://${i}`}class R2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),I2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function S2(t,e){return Kr(t,"POST","/v1/accounts:delete",e)}async function Qy(t,e){return Kr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function A2(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),i=Nh(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bi(Iu(i.auth_time)),issuedAtTime:bi(Iu(i.iat)),expirationTime:bi(Iu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Iu(t){return Number(t)*1e3}function Nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gs("JWT malformed, contained fewer than 3 sections"),null;try{const i=Jm(n);return i?JSON.parse(i):(Gs("Failed to decode base64 JWT payload"),null)}catch(i){return Gs("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yp(t){const e=Nh(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof St&&P2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function P2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class C2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bi(this.lastLoginAt),this.creationTime=bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ro(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hi(t,Qy(n,{idToken:r}));D(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Jy(s.providerUserInfo):[],a=x2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=u?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Nc(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function k2(t){const e=Fe(t);await Ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function x2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Jy(t){return t.map(e=>{var{providerId:n}=e,r=kh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function O2(t,e){const n=await Gy(t,{},async()=>{const r=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ky(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wy.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function D2(t,e){return Kr(t,"POST","/v2/accounts:revokeToken",Dh(t,e))}/**
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
 */class mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");const n=yp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await O2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new mr;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mr,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
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
 */function Jt(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return A2(this,e)}reload(){return k2(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ro(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rn(this.auth.app))return Promise.reject(Ln(this.auth));const e=await this.getIdToken();return await Hi(this,S2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,c,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,m=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,T=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:I,emailVerified:S,isAnonymous:k,providerData:A,stsTokenManager:P}=n;D(I&&P,e,"internal-error");const W=mr.fromJSON(this.name,P);D(typeof I=="string",e,"internal-error"),Jt(h,e.name),Jt(f,e.name),D(typeof S=="boolean",e,"internal-error"),D(typeof k=="boolean",e,"internal-error"),Jt(d,e.name),Jt(p,e.name),Jt(g,e.name),Jt(m,e.name),Jt(w,e.name),Jt(T,e.name);const V=new Vt({uid:I,auth:e,email:f,emailVerified:S,displayName:h,isAnonymous:k,photoURL:p,phoneNumber:d,tenantId:g,stsTokenManager:W,createdAt:w,lastLoginAt:T});return A&&Array.isArray(A)&&(V.providerData=A.map(le=>Object.assign({},le))),m&&(V._redirectEventId=m),V}static async _fromIdTokenResponse(e,n,r=!1){const i=new mr;i.updateFromServerResponse(n);const s=new Vt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ro(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];D(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Jy(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new mr;a.updateFromIdToken(r);const u=new Vt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Nc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const wp=new Map;function Mt(t){zt(t instanceof Function,"Expected a class definition");let e=wp.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wp.set(t,e),e)}/**
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
 */class Yy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yy.type="NONE";const Ep=Yy;/**
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
 */function Ks(t,e,n){return`firebase:${t}:${e}:${n}`}class _r{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ks(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ks("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _r(Mt(Ep),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Mt(Ep);const o=Ks(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const l=await c._get(o);if(l){const h=Vt._fromJSON(e,l);c!==s&&(a=h),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new _r(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new _r(s,e,r))}}/**
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
 */function Tp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(e0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(n0(e))return"Blackberry";if(r0(e))return"Webos";if(Vh(e))return"Safari";if((e.includes("chrome/")||Zy(e))&&!e.includes("edge/"))return"Chrome";if(t0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Xy(t=pe()){return/firefox\//i.test(t)}function Vh(t=pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zy(t=pe()){return/crios\//i.test(t)}function e0(t=pe()){return/iemobile/i.test(t)}function t0(t=pe()){return/android/i.test(t)}function n0(t=pe()){return/blackberry/i.test(t)}function r0(t=pe()){return/webos/i.test(t)}function Ra(t=pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function N2(t=pe()){var e;return Ra(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function V2(){return IR()&&document.documentMode===10}function i0(t=pe()){return Ra(t)||t0(t)||r0(t)||n0(t)||/windows phone/i.test(t)||e0(t)}function M2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function s0(t,e=[]){let n;switch(t){case"Browser":n=Tp(pe());break;case"Worker":n=`${Tp(pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${r}`}/**
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
 */class L2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $2(t,e={}){return Kr(t,"GET","/v2/passwordPolicy",Dh(t,e))}/**
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
 */const U2=6;class F2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:U2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class B2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ip(this),this.idTokenSubscription=new Ip(this),this.beforeStateQueue=new L2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await _r.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qy(this,{idToken:e}),r=await Vt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ro(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=E2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rn(this.app))return Promise.reject(Ln(this));const n=e?Fe(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rn(this.app)?Promise.reject(Ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rn(this.app)?Promise.reject(Ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $2(this),n=new F2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await D2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mt(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[Mt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=s0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&v2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mh(t){return Fe(t)}class Ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=kR(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function j2(t){Lh=t}function z2(t){return Lh.loadJS(t)}function q2(){return Lh.gapiScript}function H2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function W2(t,e){const n=Jo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(oo(s,e??{}))return i;jt(i,"already-initialized")}return n.initialize({options:e})}function G2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function K2(t,e,n){const r=Mh(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=o0(e),{host:o,port:a}=Q2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||J2()}function o0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Q2(t){const e=o0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:bp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:bp(o)}}}function bp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function J2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class a0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}/**
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
 */async function vr(t,e){return b2(t,"POST","/v1/accounts:signInWithIdp",Dh(t,e))}/**
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
 */const Y2="http://localhost";class Hn extends a0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Hn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Hn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return vr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vr(e,n)}buildRequest(){const e={requestUri:Y2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
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
 */class u0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ps extends u0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class en extends ps{constructor(){super("facebook.com")}static credential(e){return Hn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
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
 */class xt extends ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Hn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xt.credential(n,r)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
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
 */class tn extends ps{constructor(){super("github.com")}static credential(e){return Hn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
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
 */class nn extends ps{constructor(){super("twitter.com")}static credential(e,n){return Hn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nn.credential(n,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
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
 */class Lr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Vt._fromIdTokenResponse(e,r,i),o=Rp(r);return new Lr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rp(r);return new Lr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class So extends St{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,So.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new So(e,n,r,i)}}function c0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(t,s,e,r):s})}async function X2(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Lr._forOperation(t,"link",r)}/**
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
 */async function Z2(t,e,n=!1){const{auth:r}=t;if(rn(r.app))return Promise.reject(Ln(r));const i="reauthenticate";try{const s=await Hi(t,c0(r,i,e,t),n);D(s.idToken,r,"internal-error");const o=Nh(s.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Lr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&jt(r,"user-mismatch"),s}}/**
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
 */async function eO(t,e,n=!1){if(rn(t.app))return Promise.reject(Ln(t));const r="signIn",i=await c0(t,r,e),s=await Lr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function tO(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function nO(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}const Ao="__sak";/**
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
 */class l0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rO(){const t=pe();return Vh(t)||Ra(t)}const iO=1e3,sO=10;class h0 extends l0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rO()&&M2(),this.fallbackToPolling=i0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);V2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}h0.type="LOCAL";const oO=h0;/**
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
 */class d0 extends l0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}d0.type="SESSION";const f0=d0;/**
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
 */function aO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Sa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),u=await aO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sa.receivers=[];/**
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
 */function $h(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const c=$h("",20);i.port1.start();const l=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(l),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tt(){return window}function cO(t){Tt().location.href=t}/**
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
 */function p0(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function lO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dO(){return p0()?self:null}/**
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
 */const g0="firebaseLocalStorageDb",fO=1,Po="firebaseLocalStorage",m0="fbase_key";class gs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(t,e){return t.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function pO(){const t=indexedDB.deleteDatabase(g0);return new gs(t).toPromise()}function Vc(){const t=indexedDB.open(g0,fO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Po,{keyPath:m0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Po)?e(r):(r.close(),await pO(),e(await Vc()))})})}async function Sp(t,e,n){const r=Aa(t,!0).put({[m0]:e,value:n});return new gs(r).toPromise()}async function gO(t,e){const n=Aa(t,!1).get(e),r=await new gs(n).toPromise();return r===void 0?null:r.value}function Ap(t,e){const n=Aa(t,!0).delete(e);return new gs(n).toPromise()}const mO=800,_O=3;class _0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_O)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sa._getInstance(dO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lO(),!this.activeServiceWorker)return;this.sender=new uO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vc();return await Sp(e,Ao,"1"),await Ap(e,Ao),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ap(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Aa(i,!1).getAll();return new gs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_0.type="LOCAL";const vO=_0;new fs(3e4,6e4);/**
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
 */function yO(t,e){return e?Mt(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uh extends a0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wO(t){return eO(t.auth,new Uh(t),t.bypassAuthState)}function EO(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),Z2(n,new Uh(t),t.bypassAuthState)}async function TO(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),X2(n,new Uh(t),t.bypassAuthState)}/**
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
 */class v0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wO;case"linkViaPopup":case"linkViaRedirect":return TO;case"reauthViaPopup":case"reauthViaRedirect":return EO;default:jt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const IO=new fs(2e3,1e4);class dr extends v0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=$h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IO.get())};e()}}dr.currentPopupAction=null;/**
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
 */const bO="pendingRedirect",Qs=new Map;class RO extends v0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qs.get(this.auth._key());if(!e){try{const r=await SO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qs.set(this.auth._key(),e)}return this.bypassAuthState||Qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SO(t,e){const n=CO(e),r=PO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function AO(t,e){Qs.set(t._key(),e)}function PO(t){return Mt(t._redirectPersistence)}function CO(t){return Ks(bO,t.config.apiKey,t.name)}async function kO(t,e,n=!1){if(rn(t.app))return Promise.reject(Ln(t));const r=Mh(t),i=yO(r,e),o=await new RO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xO=10*60*1e3;class OO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!y0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xO&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pp(e))}saveEventToCache(e){this.cachedEventUids.add(Pp(e)),this.lastProcessedEventTime=Date.now()}}function Pp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(t);default:return!1}}/**
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
 */async function NO(t,e={}){return Kr(t,"GET","/v1/projects",e)}/**
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
 */const VO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MO=/^https?/;async function LO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await NO(t);for(const n of e)try{if($O(n))return}catch{}jt(t,"unauthorized-domain")}function $O(t){const e=Dc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MO.test(n))return!1;if(VO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const UO=new fs(3e4,6e4);function Cp(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FO(t){return new Promise((e,n)=>{var r,i,s;function o(){Cp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cp(),n(Et(t,"network-request-failed"))},timeout:UO.get()})}if(!((i=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tt().gapi)===null||s===void 0)&&s.load)o();else{const a=H2("iframefcb");return Tt()[a]=()=>{gapi.load?o():n(Et(t,"network-request-failed"))},z2(`${q2()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Js=null,e})}let Js=null;function BO(t){return Js=Js||FO(t),Js}/**
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
 */const jO=new fs(5e3,15e3),zO="__/auth/iframe",qO="emulator/auth/iframe",HO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GO(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Oh(e,qO):`https://${t.config.authDomain}/${zO}`,r={apiKey:e.apiKey,appName:t.name,v:Qn},i=WO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xi(r).slice(1)}`}async function KO(t){const e=await BO(t),n=Tt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:GO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(t,"network-request-failed"),a=Tt().setTimeout(()=>{s(o)},jO.get());function u(){Tt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const QO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JO=500,YO=600,XO="_blank",ZO="http://localhost";class kp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eD(t,e,n,r=JO,i=YO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},QO),{width:r.toString(),height:i.toString(),top:s,left:o}),c=pe().toLowerCase();n&&(a=Zy(c)?XO:n),Xy(c)&&(e=e||ZO,u.scrollbars="yes");const l=Object.entries(u).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(N2(c)&&a!=="_self")return tD(e||"",a),new kp(null);const h=window.open(e||"",a,l);D(h,t,"popup-blocked");try{h.focus()}catch{}return new kp(h)}function tD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nD="__/auth/handler",rD="emulator/auth/handler",iD=encodeURIComponent("fac");async function xp(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qn,eventId:i};if(e instanceof u0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof ps){const l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const u=await t._getAppCheckToken(),c=u?`#${iD}=${encodeURIComponent(u)}`:"";return`${sD(t)}?${Xi(a).slice(1)}${c}`}function sD({config:t}){return t.emulator?Oh(t,rD):`https://${t.authDomain}/${nD}`}/**
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
 */const bu="webStorageSupport";class oD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f0,this._completeRedirectFn=kO,this._overrideRedirectResult=AO}async _openPopup(e,n,r,i){var s;zt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xp(e,n,r,Dc(),i);return eD(e,o,$h())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xp(e,n,r,Dc(),i);return cO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await KO(e),r=new OO(e);return n.register("authEvent",i=>(D(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bu,{type:bu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[bu];o!==void 0&&n(!!o),jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return i0()||Vh()||Ra()}}const aD=oD;var Op="@firebase/auth",Dp="1.7.1";/**
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
 */class uD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lD(t){Fn(new pn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:s0(t)},c=new B2(r,i,s,u);return G2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fn(new pn("auth-internal",e=>{const n=Mh(e.getProvider("auth").getImmediate());return(r=>new uD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vt(Op,Dp,cD(t)),vt(Op,Dp,"esm2017")}/**
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
 */const hD=5*60,dD=e_("authIdTokenMaxAge")||hD;let Np=null;const fD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dD)return;const i=n==null?void 0:n.token;Np!==i&&(Np=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pD(t=Pl()){const e=Jo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=W2(t,{popupRedirectResolver:aD,persistence:[vO,oO,f0]}),r=e_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=fD(s.toString());nO(n,o,()=>o(n.currentUser)),tO(n,a=>o(a))}}const i=Ym("auth");return i&&K2(n,`http://${i}`),n}function gD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}j2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lD("Browser");const mD={apiKey:"AIzaSyBGT0XiGjtZOVnpypbOOtzRvoKXMX8OO7g",authDomain:"drive-51b0d.firebaseapp.com",projectId:"drive-51b0d",storageBucket:"drive-51b0d.appspot.com",messagingSenderId:"424766310266",appId:"1:424766310266:web:05dc724d70a7165f1338c3",measurementId:"G-R0C58RN444"},Fh=s_(mD),w0=Lk(Fh),_D=f2(Fh);pD(Fh);new xt;const vD=ie.div`
    width:300px;
    padding: 0 10px;
    padding-top: 10px;
    height:100%;
`,yD=ie.div`
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
`,Vp=ie.div`
    margin-top: 10px;
    .progress_bar {
        padding: 0px 20px;
    }
    .progress_bar span {
        display: block;
        color:#333;
        font-size: 13px;
    }
`,Tn=ie.div`
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
`,wD=ie.div`
    top: 50%;
    background-color: #fff;
    width: 500px;
    margin: 0px auto;
    position: relative;
    transform: translateY(-50%);
    padding: 10px;
    border-radius: 10px;
`,ED=ie.div`
    text-align: center;
    border-bottom: 1px solid lightgray;
    height: 40px;
`,TD=ie.div`
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
`,ID=ie.p`
    background: green;
    color: #fff;
    margin: 20px;
    text-align: center;
    padding: 10px;
    letter-spacing: 1px;
`,bD=()=>{const[t,e]=We(!1),[n,r]=We(!1),[i,s]=We(null),o=c=>{c.target.files[0]&&(s(c.target.files[0]),console.log(i))},a=async(c,l)=>{const h=await tx(py(w0,"myfiles"),{filename:i.name,fileURL:l});console.log("File added to database with ID: "+h.id)};return v(Be,{children:[v(bb,{open:t,onClose:()=>e(!1),children:v(wD,{children:v("form",{onSubmit:async c=>{if(c.preventDefault(),!i){console.error("No file selected");return}r(!0);try{const l=d2(_D,"uploads/"+i.name),h=await l2(l,i),f=await h2(l);await a(h,f),r(!1),s(null),e(!1)}catch(l){console.error("Error uploading file:",l)}},children:[v(ED,{children:v("h3",{children:"Select file you want to upload"})}),v(TD,{children:n?v(ID,{children:"Uploading..."}):v(Be,{children:[v("input",{type:"file",className:"modal__file",onChange:o}),v("input",{type:"submit",className:"modal__submit"})]})})]})})}),v(vD,{children:[v(yD,{children:v("button",{onClick:()=>e(!0),children:[v("img",{src:"data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E"}),v("span",{children:"New"})]})}),v(Vp,{children:[v(Tn,{children:[v(Bm,{}),v("span",{children:"My Drive"})]}),v(Tn,{children:[v(jm,{}),v("span",{children:"Computers"})]}),v(Tn,{children:[v(zm,{}),v("span",{children:"Shared with me"})]}),v(Tn,{children:[v(qm,{}),v("span",{children:"Recent"})]}),v(Tn,{children:[v(Hm,{}),v("span",{children:"Starred"})]}),v(Tn,{children:[v(Wm,{}),v("span",{children:"Trash"})]})]}),v("hr",{}),v(Vp,{children:[v(Tn,{children:[v(Gm,{}),v("span",{children:"Storage"})]}),v("div",{className:"progress_bar",children:[v("progress",{size:"tiny",value:"50",max:"100"}),v("span",{children:"105 GB  of 200 GB used"})]})]})]})]})};var Bh={},RD=Ae,SD=Pe;Object.defineProperty(Bh,"__esModule",{value:!0});var E0=Bh.default=void 0,AD=SD(Ce),PD=RD(ke()),CD=(0,PD.default)(AD.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");E0=Bh.default=CD;var jh={},kD=Ae,xD=Pe;Object.defineProperty(jh,"__esModule",{value:!0});var T0=jh.default=void 0,OD=xD(Ce),DD=kD(ke()),ND=(0,DD.default)(OD.createElement("path",{d:"M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"}),"List");T0=jh.default=ND;var zh={},VD=Ae,MD=Pe;Object.defineProperty(zh,"__esModule",{value:!0});var I0=zh.default=void 0,LD=MD(Ce),$D=VD(ke()),UD=(0,$D.default)(LD.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");I0=zh.default=UD;var qh={},FD=Ae,BD=Pe;Object.defineProperty(qh,"__esModule",{value:!0});var Mc=qh.default=void 0,jD=BD(Ce),zD=FD(ke()),qD=(0,zD.default)(jD.createElement("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}),"InsertDriveFile");Mc=qh.default=qD;var Hh={},HD=Ae,WD=Pe;Object.defineProperty(Hh,"__esModule",{value:!0});var b0=Hh.default=void 0,GD=WD(Ce),KD=HD(ke()),QD=(0,KD.default)(GD.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");b0=Hh.default=QD;const JD=ie.div`
    flex: 1 1;
    padding: 12px 20px;
    background-color:white;
    border-radius:25px;
`,YD=ie.div`
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
`,XD=ie.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`,ZD=ie.div`
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
`,Mp=ie.div`
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
`,eN=async()=>{let t=[];return(await ex(py(w0,"myfiles"))).forEach(n=>{let r={id:n.id,data:n.data()};t.push(r)}),t},tN=()=>{const[t,e]=We([]);tt(async()=>{e(await eN())},[]);const n=(r,i=2)=>{if(r===0)return"0 Bytes";const s=1024,o=i<0?0:i,a=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],u=Math.floor(Math.log(r)/Math.log(s));return parseFloat((r/Math.pow(s,u)).toFixed(o))+" "+a[u]};return v(JD,{children:[v(YD,{children:[v("div",{className:"headerLeft",children:[v("p",{children:"My Drive"}),v(E0,{})]}),v("div",{className:"headerRight",children:[v(T0,{}),v(I0,{})]})]}),v("div",{children:[v(XD,{children:t.map(r=>v(ZD,{children:[v(Mc,{}),v("p",{children:r.data.filename})]},r.id))}),v("div",{children:[v(Mp,{children:[v("p",{children:v("b",{children:["Name ",v(b0,{})]})}),v("p",{children:v("b",{children:"Owner"})}),v("p",{children:v("b",{children:"Last Modified"})}),v("p",{children:v("b",{children:"File Size"})})]}),t.map(r=>{var i,s;return v(Mp,{children:[v("a",{href:r.data.fileURL,target:"_blank",children:v("p",{children:[v(Mc,{})," ",r.data.filename]})}),v("p",{children:"Owner "}),v("p",{children:new Date(((i=r.data.timestamp)==null?void 0:i.seconds)*1e3).toUTCString()}),v("p",{children:n((s=r.data)==null?void 0:s.size)})]},r.id)})]})]})]})};function nN(){return v(rN,{children:[v(Cb,{}),v(iN,{children:[v(bD,{}),v(tN,{})]})]})}const rN=ie.div`
height:100%;
`,iN=ie.div`
display:flex;
`;function sN(){return v(Be,{children:[v(oN,{}),v(Zg,{children:[v(Ad,{path:"/",component:dE}),v(Ad,{path:"/mydrive",component:nN})]})]})}const oN=eE`
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
`;yr(v(sN,{}),document.getElementById("app"));
