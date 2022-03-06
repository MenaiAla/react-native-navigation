(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{481:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),i=(t(0),t(548)),a=["components"],s={id:"sideMenu",title:"Side Menu",sidebar_label:"Side Menu"},c={unversionedId:"docs/sideMenu",id:"version-7.25.4/docs/sideMenu",isDocsHomePage:!1,title:"Side Menu",description:"SideMenu provides access to destinations in the app from an easy to access menu which is accessible to the user via horizontal swipe gesture or a menu button.",source:"@site/versioned_docs/version-7.25.4/docs/docs-sideMenu.mdx",slug:"/docs/sideMenu",permalink:"/react-native-navigation/7.25.4/docs/sideMenu",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.25.4/docs/docs-sideMenu.mdx",version:"7.25.4",sidebar_label:"Side Menu",sidebar:"version-7.25.4/docs",previous:{title:"Bottom tabs",permalink:"/react-native-navigation/7.25.4/docs/bottomTabs"},next:{title:"External Component",permalink:"/react-native-navigation/7.25.4/docs/externalComponent"}},u=[{value:"Opening programmatically",id:"opening-programmatically",children:[]},{value:"Opening via the hamburger menu",id:"opening-via-the-hamburger-menu",children:[]},{value:"Pushing to the center layout from a menu",id:"pushing-to-the-center-layout-from-a-menu",children:[]}],l={toc:u};function p(e){var n=e.components,t=Object(o.a)(e,a);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"SideMenu provides access to destinations in the app from an easy to access menu which is accessible to the user via horizontal swipe gesture or a menu button."),Object(i.b)("h2",{id:"opening-programmatically"},"Opening programmatically"),Object(i.b)("p",null,"To open the side menu programmatically, you'll need to update the visible property of the side menu you'd like to open."),Object(i.b)("p",null,"The following snippet shows how to open the left side menu. The menu is opened by setting its visible option to visible."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"Navigation.mergeOptions(componentId, {\n  sideMenu: {\n    left: {\n      visible: true,\n    },\n  },\n});\n")),Object(i.b)("h2",{id:"opening-via-the-hamburger-menu"},"Opening via the hamburger menu"),Object(i.b)("p",null,"The most common use case is to open the side menu by pressing the hamburger button at the TopBar. To achieve this, listen to the press event of the burger button, and open the side menu as shown above."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const React = require('react');\nconst Navigation = require('react-native-navigation');\nconst { View, Text } = require('react-native');\n\nclass SideMenuCenterScreen extends React.Component {\n  static options() {\n    return {\n      topBar: {\n        leftButtons: {\n          id: 'sideMenu',\n          icon: require('./menuIcon.png')\n        }\n      }\n    };\n  }\n\n  constructor(props) {\n    super(props);\n    Navigation.events().bindComponent(this);\n  }\n\n  render() {\n    return (\n      <View>\n        <Text>Click the hamburger icon to open the side menu</Text>\n      </View>\n    );\n  }\n\n  navigationButtonPressed({ buttonId }) {\n    if (buttonId === 'sideMenu') {\n      Navigation.mergeOptions(this.props.componentId, {\n        sideMenu: {\n          left: {\n            visible: true\n          }\n        }\n      });\n    }\n  }\n}\n")),Object(i.b)("h2",{id:"pushing-to-the-center-layout-from-a-menu"},"Pushing to the center layout from a menu"),Object(i.b)("p",null,"A common use case when using SideMenus is to interact with the center layout, e.g. pushing a screen to a stack in the center layout when a user clicks on a button from one of the menus."),Object(i.b)("p",null,"In order to interact with the stack, we'll first assign it a predefined id. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"sideMenu: {\n  center: {\n    stack: {\n      id: 'CenterStack',\n      children: []\n    }\n  },\n  left: {\n    ...\n  }\n}\n")),Object(i.b)("p",null,"Now that we've defined an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," for out stack, we can go ahead and push our screen to it. If we're pushing while the SideMenu is open, we'll need to make sure we close it by updating the visibility option of the relevant menu (left or right)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"Navigation.push('CenterStack', {\n  component: {\n    name: Screens.Pushed,\n    options: {\n      sideMenu: {\n        left: {\n          visible: false\n        }\n      }\n    }\n  }\n});\n")))}p.isMDXComponent=!0},548:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),l=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return t?o.a.createElement(b,s(s({ref:n},u),{},{components:t})):o.a.createElement(b,s({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);