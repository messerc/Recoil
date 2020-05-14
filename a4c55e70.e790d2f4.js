(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(1),o=(r(0),r(146));const a={title:"Intro"},i={id:"basic-tutorial/intro",title:"Intro",description:"This section assumes you have installed Recoil and React. See the [Getting Started](/docs/introduction/getting-started) page for how to get started with Recoil and React from scratch.",source:"@site/docs/basic-tutorial/intro.md",permalink:"/docs/basic-tutorial/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/basic-tutorial/intro.md",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/docs/introduction/getting-started"},next:{title:"Atoms",permalink:"/docs/basic-tutorial/atoms"}},c=[],l={rightToc:c};function s({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section assumes you have installed Recoil and React. See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/introduction/getting-started"}),"Getting Started")," page for how to get started with Recoil and React from scratch."),Object(o.b)("p",null,"In this tutorial, we'll be building a simple todo-list application. Our app will be able to do the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add todo items"),Object(o.b)("li",{parentName:"ul"},"Edit todo items"),Object(o.b)("li",{parentName:"ul"},"Delete todo items"),Object(o.b)("li",{parentName:"ul"},"Filter todo items"),Object(o.b)("li",{parentName:"ul"},"Display useful stats")),Object(o.b)("p",null,"Along the way, we'll cover atoms, selectors, atom families, and the hooks exposed by the Recoil API. We'll also cover optimization"))}s.isMDXComponent=!0},146:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return r?o.a.createElement(f,c({ref:t},s,{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);