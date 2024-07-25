/*! For license information please see 4902f451.63331491.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[542720],{178070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=a(785893),s=a(511151);const n={title:"Welcome: Backstage Deploy CLI (Alpha)",author:"Djamaile Rahamat, Spotify",authorURL:"https://github.com/djamaile",authorImageURL:"https://avatars.githubusercontent.com/u/15789670?v=4"},i=void 0,l={permalink:"/blog/2023/05/06/backstage-deploy-alpha",source:"@site/blog/2023-05-06-backstage-deploy-alpha.mdx",title:"Welcome: Backstage Deploy CLI (Alpha)",description:"This blog post is co-authored by Emma White (@ewhite1997), Spotify.",date:"2023-05-06T00:00:00.000Z",tags:[],readingTime:3.575,hasTruncateMarker:!0,authors:[{name:"Djamaile Rahamat, Spotify",url:"https://github.com/djamaile",imageURL:"https://avatars.githubusercontent.com/u/15789670?v=4"}],frontMatter:{title:"Welcome: Backstage Deploy CLI (Alpha)",author:"Djamaile Rahamat, Spotify",authorURL:"https://github.com/djamaile",authorImageURL:"https://avatars.githubusercontent.com/u/15789670?v=4"},unlisted:!1,prevItem:{title:"Switching out the Software Templates Sandbox",permalink:"/blog/2023/06/21/switching-out-sandbox"},nextItem:{title:"ICYMI: KubeCon EU 2023",permalink:"/blog/2023/04/26/kubecon-eu-2023"}},r={authorsImageUrls:[void 0]},c=[{value:"Why Backstage Deploy",id:"why-backstage-deploy",level:2},{value:"Get started with Deploy CLI",id:"get-started-with-deploy-cli",level:2},{value:"Looking ahead",id:"looking-ahead",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsxs)(t.em,{children:["This blog post is co-authored by Emma White (",(0,o.jsx)(t.a,{href:"https://github.com/ewhite1997",children:"@ewhite1997"}),"), Spotify."]})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Backstage Deploy banner",src:a(782330).Z+"",width:"738",height:"415"})}),"\n",(0,o.jsxs)(t.p,{children:["TL;DR: Backstage released a new CLI earlier this year as part of a ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage-deploy",children:"new Backstage project"}),". This new capability allows early adopters to deploy their Backstage proof of concept faster than before. In this blog, you\u2019ll learn a little bit more about the Deploy CLI and how you can get started with it."]}),"\n","\n",(0,o.jsx)(t.h2,{id:"why-backstage-deploy",children:"Why Backstage Deploy"}),"\n",(0,o.jsx)(t.p,{children:"We\u2019ve heard from Backstage adopters that before reaching widespread adoption at their organizations, teams test out a Backstage proof of concept (POC). To create the POC, teams scaffold an instance, set up the catalog, and change the UI to suit their company\u2019s branding. Once these milestones are completed, there's just one last step before showing off the awesomeness of a Backstage POC internally... deploying the Backstage POC from a local machine to the cloud. This final step often introduces a lot of questions that attempt to determine the easiest and fastest way to do that."}),"\n",(0,o.jsx)(t.p,{children:"Let\u2019s say you\u2019re at this last step: your POC is ready for deployment, but you have some lingering questions."}),"\n",(0,o.jsx)(t.p,{children:"For example:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"What Dockerfile should you use?"}),"\n",(0,o.jsx)(t.li,{children:"Should the POC be deployed on Kubernetes?"}),"\n",(0,o.jsx)(t.li,{children:"How do you deploy the POC on my cloud provider?"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To address these questions and reduce friction from deploying a POC, we built a ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage-deploy",children:"new CLI"}),". The CLI is simply called ",(0,o.jsx)(t.code,{children:"deploy"})," and is invokable with ",(0,o.jsx)(t.code,{children:"npx"}),". With this new CLI, you can generate a Dockerfile and deploy a Backstage instance onto a preferred cloud provider. While the package\u2019s infrastructure is built to support all cloud providers, currently the CLI only offers an AWS implementation. In the future, we plan to add additional cloud providers to the package and ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/6996b3338d678efc03307112524060e9dc2ad769/CONTRIBUTING.md",children:"welcome any contributions"})," extending the suite of cloud provider implementations!"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"So, what about Kubernetes?"})," Since the CLI is designed specifically for the POC phase, we believe that Kubernetes isn\u2019t the right fit \u2013 as Kubernetes is better suited for production workloads. So, we explored lightweight, container-based solutions, and landed on ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/lightsail/index.html",children:"Amazon Lightsail"})," as a hosting service for the POC.\nAmazon Lightsail supports ",(0,o.jsx)(t.a,{href:"https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-container-services",children:"lightweight container"})," deployments ",(0,o.jsx)(t.a,{href:"https://aws.amazon.com/lightsail/pricing/",children:"at a low cost"}),", and has a ",(0,o.jsx)(t.a,{href:"https://aws.amazon.com/lightsail/pricing/?loc=ft#AWS_Free_Tier",children:"free trial for new users"}),"! Given Lightsail\u2019s ease of use and affordability, we recommend using Lightsail over Kubernetes to test out your Backstage POC."]}),"\n",(0,o.jsx)(t.p,{children:"With the Dockerfile and Kubernetes questions answered, we just have to address how to actually deploy the POC. And that is where the new CLI comes in."}),"\n",(0,o.jsx)(t.h2,{id:"get-started-with-deploy-cli",children:"Get started with Deploy CLI"}),"\n",(0,o.jsx)(t.p,{children:"It's now time to put the Deploy CLI into action and deploy a Backstage POC. The following steps guide you through the deployment process."}),"\n",(0,o.jsxs)(t.p,{children:["Deploy CLI makes use of ",(0,o.jsx)(t.a,{href:"https://www.pulumi.com/docs/",children:"Pulumi"})," which is an infrastructure-as-code tool that helps provision resources in the cloud. Before you get started, ensure you have the ",(0,o.jsx)(t.a,{href:"https://www.pulumi.com/docs/cli/",children:"Pulumi CLI"})," and ",(0,o.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html",children:"AWS CLI"})," installed on your local machine."]}),"\n",(0,o.jsxs)(t.p,{children:["You can find the step-by-step installation documentation for Pulumi under the ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/deployment/backstage-deploy/aws-lightsail",children:"Deployment section"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"But we summarize the steps to deploy your POC here. You can invoke the the CLI you can use the following command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ npx backstage-deploy aws --create-dockerfile\nStarting Pulumi\nsuccessfully initialized stack\ninstalling aws plugin...\nplugins installed\nsetting up config\nrefreshing stack...\nRefreshing (backstage):\n\nInstance will live at:\nhttps://backstage-container-service.xxx.us-east-1.cs.amazonlightsail.com/\n"})}),"\n",(0,o.jsx)(t.p,{children:"Once you kick off the command it will create a Dockerfile for you in the root and Pulumi will start provisioning resources in AWS.\nPulumi will then create a container based deployment in Amazon Lightsail."}),"\n",(0,o.jsx)(t.p,{children:"After you\u2019re done with the POC, it\u2019s easy to delete the AWS resources you provisioned and save you costs within AWS. You can do so with the following command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"$ npx backstage-deploy aws --destroy\n"})}),"\n",(0,o.jsx)(t.h2,{id:"looking-ahead",children:"Looking ahead"}),"\n",(0,o.jsx)(t.p,{children:"As mentioned earlier in this blog, we released the Backstage Deploy CLI with an AWS implementation only. In the next few months, we are excited to collect feedback from our end users to understand how the AWS implementation works. With those learnings, we plan to iterate on the Deploy CLI and build out implementations for other cloud providers. Of course, contributions are always welcome!"}),"\n",(0,o.jsxs)(t.p,{children:["So, please try this new CLI out and let us know what you think on ",(0,o.jsx)(t.a,{href:"https://discord.com/channels/687207715902193673/995973463208644678",children:"Discord"}),"!"]}),"\n",(0,o.jsx)(t.p,{children:"Useful links:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage-deploy",children:"Backstage Deploy"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://backstage.io/docs/deployment/backstage-deploy/aws-lightsail",children:"Documentation"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.pulumi.com/docs/",children:"Pulumi docs"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://discord.com/channels/687207715902193673/995973463208644678",children:"#deployment"})," channel in Discord"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},675251:(e,t,a)=>{var o=a(667294),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var o,n={},c=null,h=null;for(o in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,o)&&!r.hasOwnProperty(o)&&(n[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===n[o]&&(n[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:h,props:n,_owner:l.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},785893:(e,t,a)=>{e.exports=a(675251)},782330:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/Welcome-Backstage-Deploy-951eb8990a99cd89400cb7d9b2c178e9.png"},511151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>i});var o=a(667294);const s={},n=o.createContext(s);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);