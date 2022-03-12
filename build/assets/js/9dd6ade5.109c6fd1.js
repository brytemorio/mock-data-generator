"use strict";(self.webpackChunkgeneratedata_doc=self.webpackChunkgeneratedata_doc||[]).push([[503],{2863:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,pagination_prev:null,pagination_next:null,id:"versionComparison"},s="Comparison of v3 and v4",d={unversionedId:"userdoc/about/versionComparison",id:"userdoc/about/versionComparison",isDocsHomePage:!1,title:"Comparison of v3 and v4",description:"v4 of generatedata.com was a complete rewrite of the application. It shares a lot of the similar UI aspects with the",source:"@site/docs/userdoc/about/version-comparison.md",sourceDirName:"userdoc/about",slug:"/userdoc/about/versionComparison",permalink:"/generatedata/userdoc/about/versionComparison",editUrl:"https://github.com/benkeen/generatedata/tree/docs/docs/userdoc/about/version-comparison.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,pagination_prev:null,pagination_next:null,id:"versionComparison"},sidebar:"userdoc"},u=[{value:"Technical differences",id:"technical-differences",children:[],level:3},{value:"Functional differences",id:"functional-differences",children:[],level:3},{value:"Other notes",id:"other-notes",children:[],level:3}],p={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"comparison-of-v3-and-v4"},"Comparison of v3 and v4"),(0,r.kt)("p",null,"v4 of generatedata.com was a complete rewrite of the application. It shares a lot of the similar UI aspects with the\nprevious version, but behind the scenes is completely different."),(0,r.kt)("h3",{id:"technical-differences"},"Technical differences"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Version 3.x"),(0,r.kt)("th",{parentName:"tr",align:null},"Version 4.x"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backend languages"),(0,r.kt)("td",{parentName:"tr",align:null},"PHP, MySQL"),(0,r.kt)("td",{parentName:"tr",align:null},"Node, GraphQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Front-end languages"),(0,r.kt)("td",{parentName:"tr",align:null},"jQuery, requireJS"),(0,r.kt)("td",{parentName:"tr",align:null},"Typescript, React, Redux, GraphQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data generation method"),(0,r.kt)("td",{parentName:"tr",align:null},"on the backend via PHP"),(0,r.kt)("td",{parentName:"tr",align:null},"in-browser via Web Workers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Containerized?"),(0,r.kt)("td",{parentName:"tr",align:null},"Nope"),(0,r.kt)("td",{parentName:"tr",align:null},"Docker")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Speed"),(0,r.kt)("td",{parentName:"tr",align:null},"Slow!"),(0,r.kt)("td",{parentName:"tr",align:null},"Faster!")))),(0,r.kt)("h3",{id:"functional-differences"},"Functional differences"),(0,r.kt)("p",null,"..."),(0,r.kt)("h3",{id:"other-notes"},"Other notes"),(0,r.kt)("p",null,"The chief motivator for the v4 rewrite was to be able to do two things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"generate the data in your browser instead of the server"),". Hosting costs for the production site\nwere exorbitant due to the popularity of the script, so by offloading the actual generation work to the client\nit made it more scalable, plus let you generate more data in shorter times."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Show a live preview panel")," so you could see what data you were going to get, while you built it.\nThis was really important to improve the usability of the script. Now there's no doubt about exactly what you're going to\nget - and you don't need to waste time stepping through the generation step to actually see the results.")),(0,r.kt)("p",null,"All considered, v3 was probably simpler to get up and running locally. It required you do to the legwork of setting\nup the database, PHP and web server, but by and large people would just rely on prefab tooling like MAMP/WAMP etc. which\nwere free and easy to setup. v4 dockerized the whole thing ",(0,r.kt)("em",{parentName:"p"},"felt")," like the right call, but quite honestly was as\ncomplicated as hell. But expecting users to install the litany of backend tools and applications to run the "),(0,r.kt)("p",null,"Above all I wanted to move to node. The short-midterm goal of this script is to make it available as an npm package\nin addition to the front-end application."))}c.isMDXComponent=!0}}]);