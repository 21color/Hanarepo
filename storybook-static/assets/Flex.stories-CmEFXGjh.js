import{j as a,a as i}from"./emotion-react.browser.esm-QWzA3oxQ.js";import{r as o}from"./index-CTjT7uj6.js";import{B as s}from"./index-D3BqZhYw.js";const c=o.forwardRef(({_active:e,_focus:n,_hover:d,_before:_,_after:C,size:v,children:S,as:b,sx:F,...h},j)=>a(b||"div",{ref:j,css:{position:"relative",width:v,"&:hover":d,"&:focus":n,"&:active":e,"&::before":_,"&::after":C,...h,...F},children:S}));try{c.displayName="Div",c.__docgenInfo={description:"",displayName:"Div",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"CSSObject"}},_active:{defaultValue:null,description:"",name:"_active",required:!1,type:{name:"CSSObject"}},_focus:{defaultValue:null,description:"",name:"_focus",required:!1,type:{name:"CSSObject"}},_hover:{defaultValue:null,description:"",name:"_hover",required:!1,type:{name:"CSSObject"}},_before:{defaultValue:null,description:"",name:"_before",required:!1,type:{name:"CSSObject"}},_after:{defaultValue:null,description:"",name:"_after",required:!1,type:{name:"CSSObject"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"Width<string | number>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}}}catch{}const q=o.forwardRef((e,n)=>a(c,{...e,display:"flex",ref:n})),u=Object.assign(q,{displayName:"Flex"}),V=o.forwardRef((e,n)=>a(u,{...e,alignItems:"center",justifyContent:"center",ref:n})),O=Object.assign(V,{displayName:"Flex.Center"}),N=o.forwardRef(({as:e="div",...n},d)=>a(u,{...n,flexDirection:"column",ref:d})),w=Object.assign(N,{displayName:"Flex.Column"}),r=Object.assign(u,{Center:O,Column:w});try{r.displayName="FlexNameSpace",r.__docgenInfo={description:"",displayName:"FlexNameSpace",props:{as:{defaultValue:{value:'"div" as any'},description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"CSSObject"}},_active:{defaultValue:null,description:"",name:"_active",required:!1,type:{name:"CSSObject"}},_focus:{defaultValue:null,description:"",name:"_focus",required:!1,type:{name:"CSSObject"}},_hover:{defaultValue:null,description:"",name:"_hover",required:!1,type:{name:"CSSObject"}},_before:{defaultValue:null,description:"",name:"_before",required:!1,type:{name:"CSSObject"}},_after:{defaultValue:null,description:"",name:"_after",required:!1,type:{name:"CSSObject"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"Width<string | number>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}}}catch{}const k={tags:["autodocs"],component:r,title:"components/utils/Flex"},t={args:{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px",_hover:{backgroundColor:"gray",color:"white"}},render:e=>i(r,{...e,children:[a("div",{children:"Flex 컴포넌트는 display: flex 속성을 적용합니다."}),i(r,{gap:20,padding:20,children:[a(s,{variant:"primary",title:"Primary"}),a(s,{variant:"secondary",title:"Secondary"})]})]})},l={args:{display:"flex",alignItems:"center",padding:"20px",_hover:{backgroundColor:"gray",color:"white"}},render:e=>i(r.Column,{gap:10,...e,children:[a("div",{children:"Flex Column 컴포넌트는 display: flex, flex-direction: column 속성을 적용합니다."}),i(r.Column,{gap:20,padding:20,children:[a(s,{variant:"primary",title:"Primary"}),a(s,{variant:"secondary",title:"Secondary"})]})]})};var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    _hover: {
      backgroundColor: "gray",
      color: "white"
    }
  },
  render: arg => <Flex {...arg}>
      <div>Flex 컴포넌트는 display: flex 속성을 적용합니다.</div>
      <Flex gap={20} padding={20}>
        <Button variant="primary" title="Primary" />
        <Button variant="secondary" title="Secondary" />
      </Flex>
    </Flex>
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var y,g,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
    _hover: {
      backgroundColor: "gray",
      color: "white"
    }
  },
  render: arg => <Flex.Column gap={10} {...arg}>
      <div>
        Flex Column 컴포넌트는 display: flex, flex-direction: column 속성을
        적용합니다.
      </div>
      <Flex.Column gap={20} padding={20}>
        <Button variant="primary" title="Primary" />
        <Button variant="secondary" title="Secondary" />
      </Flex.Column>
    </Flex.Column>
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const z=["Default","Column"];export{l as Column,t as Default,z as __namedExportsOrder,k as default};
