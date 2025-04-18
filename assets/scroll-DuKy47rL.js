import{c as t,r as e,a as n}from"./vendor-CFHJfABC.js";var o,r,i={},a={},u={},s={};function l(){if(r)return o;r=1;var e="Expected a function",n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,s=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,f=l||c||Function("return this")(),d=Object.prototype.toString,p=Math.max,h=Math.min,v=function(){return f.Date.now()};function y(t,n,o){var r,i,a,u,s,l,c=0,f=!1,d=!1,y=!0;if("function"!=typeof t)throw new TypeError(e);function b(e){var n=r,o=i;return r=i=void 0,c=e,u=t.apply(o,n)}function w(t){var e=t-l;return void 0===l||e>=n||e<0||d&&t-c>=a}function O(){var t=v();if(w(t))return S(t);s=setTimeout(O,function(t){var e=n-(t-l);return d?h(e,a-(t-c)):e}(t))}function S(t){return s=void 0,y&&r?b(t):(r=i=void 0,u)}function _(){var t=v(),e=w(t);if(r=arguments,i=this,l=t,e){if(void 0===s)return function(t){return c=t,s=setTimeout(O,n),f?b(t):u}(l);if(d)return s=setTimeout(O,n),b(l)}return void 0===s&&(s=setTimeout(O,n)),u}return n=g(n)||0,m(o)&&(f=!!o.leading,a=(d="maxWait"in o)?p(g(o.maxWait)||0,n):a,y="trailing"in o?!!o.trailing:y),_.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=l=i=s=void 0},_.flush=function(){return void 0===s?u:S(v())},_}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var o=a.test(t);return o||u.test(t)?s(t.slice(2),o?2:8):i.test(t)?NaN:+t}return o=function(t,n,o){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(e);return m(o)&&(r="leading"in o?!!o.leading:r,i="trailing"in o?!!o.trailing:i),y(t,n,{leading:r,maxWait:n,trailing:i})}}var c,f,d={};function p(){if(c)return d;c=1,Object.defineProperty(d,"__esModule",{value:!0}),d.addPassiveEventListener=function(e,n,o){var r=o.name;r||(r=n),t.has(n)||t.set(n,new Set);var i=t.get(n);if(!i.has(r)){var a=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(n){}return t}();e.addEventListener(n,o,!!a&&{passive:!0}),i.add(r)}},d.removePassiveEventListener=function(e,n,o){e.removeEventListener(n,o),t.get(n).delete(o.name||n)};var t=new Map;return d}function h(){if(f)return s;f=1,Object.defineProperty(s,"__esModule",{value:!0});var t,e=l(),n=(t=e)&&t.__esModule?t:{default:t},o=p();var r={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,e){if(t){var i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,n.default)(t,e)}((function(e){r.scrollHandler(t)}),e);return r.scrollSpyContainers.push(t),(0,o.addPassiveEventListener)(t,"scroll",i),function(){(0,o.removePassiveEventListener)(t,"scroll",i),r.scrollSpyContainers.splice(r.scrollSpyContainers.indexOf(t),1)}}return function(){}},isMounted:function(t){return-1!==r.scrollSpyContainers.indexOf(t)},currentPositionX:function(t){if(t===document){var e=void 0!==window.scrollY,n="CSS1Compat"===(document.compatMode||"");return e?window.scrollX:n?document.documentElement.scrollLeft:document.body.scrollLeft}return t.scrollLeft},currentPositionY:function(t){if(t===document){var e=void 0!==window.scrollX,n="CSS1Compat"===(document.compatMode||"");return e?window.scrollY:n?document.documentElement.scrollTop:document.body.scrollTop}return t.scrollTop},scrollHandler:function(t){(r.scrollSpyContainers[r.scrollSpyContainers.indexOf(t)].spyCallbacks||[]).forEach((function(e){return e(r.currentPositionX(t),r.currentPositionY(t))}))},addStateHandler:function(t){r.spySetState.push(t)},addSpyHandler:function(t,e){var n=r.scrollSpyContainers[r.scrollSpyContainers.indexOf(e)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(t)},updateStates:function(){r.spySetState.forEach((function(t){return t()}))},unmount:function(t,e){r.scrollSpyContainers.forEach((function(t){return t.spyCallbacks&&t.spyCallbacks.length&&t.spyCallbacks.indexOf(e)>-1&&t.spyCallbacks.splice(t.spyCallbacks.indexOf(e),1)})),r.spySetState&&r.spySetState.length&&r.spySetState.indexOf(t)>-1&&r.spySetState.splice(r.spySetState.indexOf(t),1),document.removeEventListener("scroll",r.scrollHandler)},update:function(){return r.scrollSpyContainers.forEach((function(t){return r.scrollHandler(t)}))}};return s.default=r,s}var v,y={},m={};function g(){if(v)return m;v=1,Object.defineProperty(m,"__esModule",{value:!0});var t=function(t,e){for(var n=t.offsetTop,o=t.offsetParent;o&&!e(o);)n+=o.offsetTop,o=o.offsetParent;return{offsetTop:n,offsetParent:o}};return m.default={updateHash:function(t,e){var n=0===t.indexOf("#")?t.substring(1):t,o=n?"#"+n:"",r=window&&window.location,i=o?r.pathname+r.search+o:r.pathname+r.search;e?history.pushState(history.state,"",i):history.replaceState(history.state,"",i)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(t){return function(e){return t.contains?t!=e&&t.contains(e):!!(16&t.compareDocumentPosition(e))}},scrollOffset:function(e,n,o){if(o)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(n.offsetParent!==e){var r=t(n,(function(t){return t===e||t===document})),i=r.offsetTop;if(r.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return i}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var a=function(t){return t===document};return t(n,a).offsetTop-t(e,a).offsetTop}},m}var b,w={},O={};var S,_={};var P,E,C,T={};function j(){if(P)return T;P=1,Object.defineProperty(T,"__esModule",{value:!0});var t={registered:{},scrollEvent:{register:function(e,n){t.registered[e]=n},remove:function(e){t.registered[e]=null}}};return T.default=t,T}function k(){if(E)return w;E=1,Object.defineProperty(w,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};r(g());var e=r((b||(b=1,Object.defineProperty(O,"__esModule",{value:!0}),O.default={defaultEasing:function(t){return t<.5?Math.pow(2*t,2)/2:1-Math.pow(2*(1-t),2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}),O)),n=r(function(){if(S)return _;S=1,Object.defineProperty(_,"__esModule",{value:!0});var t=p(),e=["mousedown","wheel","touchmove","keydown"];return _.default={subscribe:function(n){return"undefined"!=typeof document&&e.forEach((function(e){return(0,t.addPassiveEventListener)(document,e,n)}))}},_}()),o=r(j());function r(t){return t&&t.__esModule?t:{default:t}}var i=function(t){return e.default[t.smooth]||e.default.defaultEasing},a=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(t,e,n){window.setTimeout(t,n||1e3/60,(new Date).getTime())},u=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollLeft;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},s=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},l=function t(e,n,r){var i=n.data;if(n.ignoreCancelEvents||!i.cancel)if(i.delta=Math.round(i.targetPosition-i.startPosition),null===i.start&&(i.start=r),i.progress=r-i.start,i.percent=i.progress>=i.duration?1:e(i.progress/i.duration),i.currentPosition=i.startPosition+Math.ceil(i.delta*i.percent),i.containerElement&&i.containerElement!==document&&i.containerElement!==document.body?n.horizontal?i.containerElement.scrollLeft=i.currentPosition:i.containerElement.scrollTop=i.currentPosition:n.horizontal?window.scrollTo(i.currentPosition,0):window.scrollTo(0,i.currentPosition),i.percent<1){var u=t.bind(null,e,n);a.call(window,u)}else o.default.registered.end&&o.default.registered.end(i.to,i.target,i.currentPosition);else o.default.registered.end&&o.default.registered.end(i.to,i.target,i.currentPositionY)},c=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},f=function(t,e,r,f){e.data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(e.data.delayTimeout);if(n.default.subscribe((function(){e.data.cancel=!0})),c(e),e.data.start=null,e.data.cancel=!1,e.data.startPosition=e.horizontal?u(e):s(e),e.data.targetPosition=e.absolute?t:t+e.data.startPosition,e.data.startPosition!==e.data.targetPosition){var d;e.data.delta=Math.round(e.data.targetPosition-e.data.startPosition),e.data.duration=("function"==typeof(d=e.duration)?d:function(){return d})(e.data.delta),e.data.duration=isNaN(parseFloat(e.data.duration))?1e3:parseFloat(e.data.duration),e.data.to=r,e.data.target=f;var p=i(e),h=l.bind(null,p,e);e&&e.delay>0?e.data.delayTimeout=window.setTimeout((function(){o.default.registered.begin&&o.default.registered.begin(e.data.to,e.data.target),a.call(window,h)}),e.delay):(o.default.registered.begin&&o.default.registered.begin(e.data.to,e.data.target),a.call(window,h))}else o.default.registered.end&&o.default.registered.end(e.data.to,e.data.target,e.data.currentPosition)},d=function(e){return(e=t({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};return w.default={animateTopScroll:f,getAnimationType:i,scrollToTop:function(t){f(0,d(t))},scrollToBottom:function(t){t=d(t),c(t),f(t.horizontal?function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollWidth-e.offsetWidth;var n=document.body,o=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)}(t):function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollHeight-e.offsetHeight;var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(t),t)},scrollTo:function(t,e){f(t,d(e))},scrollMore:function(t,e){e=d(e),c(e);var n=e.horizontal?u(e):s(e);f(t+n,e)}},w}function M(){if(C)return y;C=1,Object.defineProperty(y,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},e=r(g()),n=r(k()),o=r(j());function r(t){return t&&t.__esModule?t:{default:t}}var i={},a=void 0;return y.default={unmount:function(){i={}},register:function(t,e){i[t]=e},unregister:function(t){delete i[t]},get:function(t){return i[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return a=t},getActiveLink:function(){return a},scrollTo:function(r,i){var a=this.get(r);if(a){var u=(i=t({},i,{absolute:!1})).containerId,s=i.container,l=void 0;l=u?document.getElementById(u):s&&s.nodeType?s:document,i.absolute=!0;var c=i.horizontal,f=e.default.scrollOffset(l,a,c)+(i.offset||0);if(!i.smooth)return o.default.registered.begin&&o.default.registered.begin(r,a),l===document?i.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):l.scrollTop=f,void(o.default.registered.end&&o.default.registered.end(r,a));n.default.animateTopScroll(f,i,r,a)}}},y}var H,L,I,B,x,R={exports:{}};function A(){if(L)return H;L=1;return H="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}function D(){if(B)return I;B=1;var t=A();function e(){}function n(){}return n.resetWarningCache=e,I=function(){function o(e,n,o,r,i,a){if(a!==t){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function r(){return o}o.isRequired=o;var i={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:r,element:o,elementType:o,instanceOf:r,node:o,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:e};return i.PropTypes=i,i}}function N(){return x||(x=1,R.exports=D()()),R.exports}var z,W,F,U={};function Q(){if(z)return U;z=1,Object.defineProperty(U,"__esModule",{value:!0}),p();var t,e=g(),n=(t=e)&&t.__esModule?t:{default:t};var o={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,e){this.containers[t]=e},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,e=this.getHash();e?window.setTimeout((function(){t.scrollTo(e,!0),t.initialized=!0}),10):this.initialized=!0},scrollTo:function(t,e){var n=this.scroller;if(n.get(t)&&(e||t!==n.getActiveLink())){var o=this.containers[t]||document;n.scrollTo(t,{container:o})}},getHash:function(){return n.default.getHash()},changeHash:function(t,e){this.isInitialized()&&n.default.getHash()!==t&&n.default.updateHash(t,e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};return U.default=o,U}function X(){if(W)return u;W=1,Object.defineProperty(u,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),o=l(e()),r=l(h()),i=l(M()),a=l(N()),s=l(Q());function l(t){return t&&t.__esModule?t:{default:t}}var c={to:a.default.string.isRequired,containerId:a.default.string,container:a.default.object,activeClass:a.default.string,activeStyle:a.default.object,spy:a.default.bool,horizontal:a.default.bool,smooth:a.default.oneOfType([a.default.bool,a.default.string]),offset:a.default.number,delay:a.default.number,isDynamic:a.default.bool,onClick:a.default.func,duration:a.default.oneOfType([a.default.number,a.default.func]),absolute:a.default.bool,onSetActive:a.default.func,onSetInactive:a.default.func,ignoreCancelEvents:a.default.bool,hashSpy:a.default.bool,saveHashHistory:a.default.bool,spyThrottle:a.default.number};return u.default=function(e,a){var u=a||i.default,l=function(i){function a(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t));return f.call(e),e.state={active:!1},e.beforeUnmountCallbacks=[],e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,i),n(a,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t&&!e?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();if(!r.default.isMounted(t)){var e=r.default.mount(t,this.props.spyThrottle);this.beforeUnmountCallbacks.push(e)}this.props.hashSpy&&(s.default.isMounted()||s.default.mount(u),s.default.mapContainer(this.props.to,t)),r.default.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){r.default.unmount(this.stateHandler,this.spyHandler),this.beforeUnmountCallbacks.forEach((function(t){return t()}))}},{key:"render",value:function(){var n="";n=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var r={};r=this.state&&this.state.active?t({},this.props.style,this.props.activeStyle):t({},this.props.style);var i=t({},this.props);for(var a in c)i.hasOwnProperty(a)&&delete i[a];return i.className=n,i.style=r,i.onClick=this.handleClick,o.default.createElement(e,i)}}]),a}(o.default.PureComponent),f=function(){var e=this;this.scrollTo=function(n,o){u.scrollTo(n,t({},e.state,o))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,n){var o=e.getScrollSpyContainer();if(!s.default.isMounted()||s.default.isInitialized()){var r=e.props.horizontal,i=e.props.to,a=null,l=void 0,c=void 0;if(r){var f=0,d=0,p=0;if(o.getBoundingClientRect)p=o.getBoundingClientRect().left;if(!a||e.props.isDynamic){if(!(a=u.get(i)))return;var h=a.getBoundingClientRect();d=(f=h.left-p+t)+h.width}var v=t-e.props.offset;l=v>=Math.floor(f)&&v<Math.floor(d),c=v<Math.floor(f)||v>=Math.floor(d)}else{var y=0,m=0,g=0;if(o.getBoundingClientRect)g=o.getBoundingClientRect().top;if(!a||e.props.isDynamic){if(!(a=u.get(i)))return;var b=a.getBoundingClientRect();m=(y=b.top-g+n)+b.height}var w=n-e.props.offset;l=w>=Math.floor(y)&&w<Math.floor(m),c=w<Math.floor(y)||w>=Math.floor(m)}var O=u.getActiveLink();if(c){if(i===O&&u.setActiveLink(void 0),e.props.hashSpy&&s.default.getHash()===i){var S=e.props.saveHashHistory,_=void 0!==S&&S;s.default.changeHash("",_)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(i,a))}if(l&&(O!==i||!1===e.state.active)){u.setActiveLink(i);var P=e.props.saveHashHistory,E=void 0!==P&&P;e.props.hashSpy&&s.default.changeHash(i,E),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(i,a))}}}};return l.propTypes=c,l.defaultProps={offset:0},l},u}function Y(){if(F)return a;F=1,Object.defineProperty(a,"__esModule",{value:!0});var t=o(e()),n=o(X());function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var i=function(e){function n(){var e,o,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,u=Array(a),s=0;s<a;s++)u[s]=arguments[s];return o=i=r(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),i.render=function(){return t.default.createElement("a",i.props,i.props.children)},r(i,o)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),n}(t.default.Component);return a.default=(0,n.default)(i),a}var q,$={};function V(){if(q)return $;q=1,Object.defineProperty($,"__esModule",{value:!0});var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),n=r(e()),o=r(X());function r(t){return t&&t.__esModule?t:{default:t}}var i=function(e){function o(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(o.__proto__||Object.getPrototypeOf(o)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,e),t(o,[{key:"render",value:function(){return n.default.createElement("button",this.props,this.props.children)}}]),o}(n.default.Component);return $.default=(0,o.default)(i),$}var G,J,K,Z,tt,et={},nt={};function ot(){if(G)return nt;G=1,Object.defineProperty(nt,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=u(e());u(n());var i=u(M()),a=u(N());function u(t){return t&&t.__esModule?t:{default:t}}return nt.default=function(e){var n=function(n){function a(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t));return e.childBindings={domNode:null},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(a,n),o(a,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;i.default.unregister(this.props.name)}},{key:"registerElems",value:function(t){i.default.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return r.default.createElement(e,t({},this.props,{parentBindings:this.childBindings}))}}]),a}(r.default.Component);return n.propTypes={name:a.default.string,id:a.default.string},n},nt}function rt(){if(J)return et;J=1,Object.defineProperty(et,"__esModule",{value:!0});var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},n=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),o=a(e()),r=a(ot()),i=a(N());function a(t){return t&&t.__esModule?t:{default:t}}var u=function(e){function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,e),n(r,[{key:"render",value:function(){var e=this,n=t({},this.props);return delete n.name,n.parentBindings&&delete n.parentBindings,o.default.createElement("div",t({},n,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),r}(o.default.Component);return u.propTypes={name:i.default.string,id:i.default.string},et.default=(0,r.default)(u),et}function it(){if(tt)return i;tt=1,Object.defineProperty(i,"__esModule",{value:!0}),i.Helpers=i.ScrollElement=i.ScrollLink=i.animateScroll=i.scrollSpy=i.Events=i.scroller=i.Element=i.Button=i.Link=void 0;var t=v(Y()),o=v(V()),r=v(rt()),a=v(M()),u=v(j()),s=v(h()),l=v(k()),c=v(X()),f=v(ot()),d=function(){if(Z)return K;Z=1;var t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var u=e();n(),g();var s=h(),l=M(),c=N(),f=Q(),d={to:c.string.isRequired,containerId:c.string,container:c.object,activeClass:c.string,spy:c.bool,smooth:c.oneOfType([c.bool,c.string]),offset:c.number,delay:c.number,isDynamic:c.bool,onClick:c.func,duration:c.oneOfType([c.number,c.func]),absolute:c.bool,onSetActive:c.func,onSetInactive:c.func,ignoreCancelEvents:c.bool,hashSpy:c.bool,spyThrottle:c.number};return K={Scroll:function(e,n){var c=n||l,p=function(n){function l(t){r(this,l);var e=i(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,t));return h.call(e),e.state={active:!1},e}return a(l,n),o(l,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();s.isMounted(t)||s.mount(t,this.props.spyThrottle),this.props.hashSpy&&(f.isMounted()||f.mount(c),f.mapContainer(this.props.to,t)),this.props.spy&&s.addStateHandler(this.stateHandler),s.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){s.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var n="";n=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var o=t({},this.props);for(var r in d)o.hasOwnProperty(r)&&delete o[r];return o.className=n,o.onClick=this.handleClick,u.createElement(e,o)}}]),l}(u.Component),h=function(){var e=this;this.scrollTo=function(n,o){c.scrollTo(n,t({},e.state,o))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){c.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var n=e.getScrollSpyContainer();if(!f.isMounted()||f.isInitialized()){var o=e.props.to,r=null,i=0,a=0,u=0;if(n.getBoundingClientRect&&(u=n.getBoundingClientRect().top),!r||e.props.isDynamic){if(!(r=c.get(o)))return;var l=r.getBoundingClientRect();a=(i=l.top-u+t)+l.height}var d=t-e.props.offset,p=d>=Math.floor(i)&&d<Math.floor(a),h=d<Math.floor(i)||d>=Math.floor(a),v=c.getActiveLink();return h?(o===v&&c.setActiveLink(void 0),e.props.hashSpy&&f.getHash()===o&&f.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),s.updateStates()):p&&v!==o?(c.setActiveLink(o),e.props.hashSpy&&f.changeHash(o),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(o)),s.updateStates()):void 0}}};return p.propTypes=d,p.defaultProps={offset:0},p},Element:function(e){var n=function(n){function s(t){r(this,s);var e=i(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));return e.childBindings={domNode:null},e}return a(s,n),o(s,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;l.unregister(this.props.name)}},{key:"registerElems",value:function(t){l.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return u.createElement(e,t({},this.props,{parentBindings:this.childBindings}))}}]),s}(u.Component);return n.propTypes={name:c.string,id:c.string},n}}}(),p=v(d);function v(t){return t&&t.__esModule?t:{default:t}}return i.Link=t.default,i.Button=o.default,i.Element=r.default,i.scroller=a.default,i.Events=u.default,i.scrollSpy=s.default,i.animateScroll=l.default,i.ScrollLink=c.default,i.ScrollElement=f.default,i.Helpers=p.default,i.default={Link:t.default,Button:o.default,Element:r.default,scroller:a.default,Events:u.default,scrollSpy:s.default,animateScroll:l.default,ScrollLink:c.default,ScrollElement:f.default,Helpers:p.default},i}export{it as a,N as r};
