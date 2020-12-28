(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(292)),i=n(296),c=n(297),l={id:"root",title:"Root",sidebar_label:"Root"},u={unversionedId:"api/root",id:"version-7.7.0/api/root",isDocsHomePage:!1,title:"Root",description:"setRoot()",source:"@site/versioned_docs/version-7.7.0/api/api-root.mdx",slug:"/api/root",permalink:"/react-native-navigation/api/root",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.7.0/api/api-root.mdx",version:"7.7.0",sidebar_label:"Root",sidebar:"version-7.7.0/api",previous:{title:"Component",permalink:"/react-native-navigation/api/component"},next:{title:"Stack",permalink:"/react-native-navigation/api/stack"}},b=[{value:"<code>setRoot()</code>",id:"setroot",children:[]}],s={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setroot"},Object(o.b)("inlineCode",{parentName:"h2"},"setRoot()")),Object(o.b)("p",null,"Used to set the UI of the application. Read more about the root hierarchy level in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../docs/root"}),"docs section"),"."),Object(o.b)("h4",{id:"parameters"},"Parameters"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"layout"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-layout"}),"Layout")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Any type of layout. ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-bottomTabs"}),"BottomTabs"),", ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-stack"}),"Stack"),", ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-sideMenu"}),"SideMenu"),", ",Object(o.b)("a",Object(a.a)({parentName:"td"},{href:"/react-native-navigation/api/layout-component"}),"Component"))))),Object(o.b)("h4",{id:"example"},"Example"),Object(o.b)(i.a,{defaultValue:"stack",values:[{label:"With Stack layout",value:"stack"},{label:"With BottomTabs layout",value:"bottomTabs"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"stack",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    stack: {\n      children: [{\n        component: {\n          name: 'example.FirstTabScreen',\n          passProps: {\n            text: 'This is tab 1'\n          }\n        }\n      }],\n      options: {\n        bottomTab: {\n          text: 'Tab 1',\n          icon: require('../images/one.png'),\n          testID: 'FIRST_TAB_BAR_BUTTON'\n        }\n      }\n    }\n  }\n});\n"))),Object(o.b)(c.a,{value:"bottomTabs",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      children: [{\n        stack: {\n          children: [{\n            component: {\n              name: 'example.FirstTabScreen',\n              passProps: {\n                text: 'This is tab 1'\n              }\n            }\n          }],\n          options: {\n            bottomTab: {\n              text: 'Tab 1',\n              icon: require('../images/one.png'),\n              testID: 'FIRST_TAB_BAR_BUTTON'\n            }\n          }\n        }\n      },\n      {\n        component: {\n          name: 'navigation.playground.TextScreen',\n          passProps: {\n            text: 'This is tab 2'\n          },\n          options: {\n            bottomTab: {\n              text: 'Tab 2',\n              icon: require('../images/two.png'),\n              testID: 'SECOND_TAB_BAR_BUTTON'\n            }\n          }\n        }\n      }]\n    }\n  }\n});\n")))))}p.isMDXComponent=!0},292:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,f=s["".concat(i,".").concat(m)]||s[m]||p[m]||o;return n?r.a.createElement(f,c(c({ref:t},u),{},{components:n})):r.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},293:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},294:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},295:function(e,t,n){"use strict";var a=n(0),r=n(294);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},296:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(295),i=n(293),c=n(47),l=n.n(c),u=37,b=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,s=e.values,p=e.groupId,m=Object(o.a)(),f=m.tabGroupChoices,d=m.setTabGroupChoices,O=Object(a.useState)(c),v=O[0],j=O[1],y=Object(a.useState)(!1),g=y[0],h=y[1];if(null!=p){var T=f[p];null!=T&&T!==v&&s.some((function(e){return e.value===T}))&&j(T)}var N=function(e){j(e),null!=p&&d(p,e)},w=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||h(!0)},k=function(){h(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",k)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e),x(e)},onFocus:function(){return N(t)},onClick:function(){N(t),h(!1)},onPointerDown:function(){return h(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},297:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);