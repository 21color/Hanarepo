import{c as a,v as e,t as b,j as o}from"./emotion-react.browser.esm-BrhEZ-Hy.js";import{r as $}from"./index-CTjT7uj6.js";const y=a`
  border: none;
  color: ${e.color.semantic.white};
  ${b.button};
  background-color: ${e.color.semantic.primary};
  &:hover {
    background-color: ${e.color.semantic.primaryLight};
  }
  &:active {
    background-color: ${e.color.semantic.primaryDark};
  }
`,f=a`
  border: none;
  background-color: ${e.color.semantic.secondary};
  color: ${e.color.semantic.white};

  &:hover {
    background-color: ${e.color.semantic.secondaryLight};
  }
  &:active {
    background-color: ${e.color.semantic.secondaryDark};
  }
`,v=a`
  border: none;
  color: ${e.color.semantic.white};
  background-color: ${e.color.semantic.error};

  &:hover {
    background-color: ${e.color.semantic.errorLight};
  }
  &:active {
    background-color: ${e.color.semantic.errorDark};
  }
`,D=a`
  border: none;
  color: ${e.color.semantic.white};
  background-color: ${e.color.gray[400]};
  cursor: not-allowed;
`,h=a`
  padding: ${e.spacing.small} ${e.spacing.medium};
  font-size: ${e.fontSize.small};
  border-radius: ${e.rounded.small}px;
`,x=a`
  padding: ${e.spacing.medium} ${e.spacing.large};
  font-size: ${e.fontSize.medium};
  border-radius: ${e.rounded.medium}px;
`,k=a`
  padding: ${e.spacing.large} ${e.spacing.xlarge};
  font-size: ${e.fontSize.large};
  border-radius: ${e.rounded.large}px;
`,E=a`
  padding: ${e.spacing.xlarge} ${e.spacing.xlarge};
  font-size: ${e.fontSize.xlarge};
  border-radius: ${e.rounded.xlarge}px;
`,S=a`
  border-radius: ${e.rounded.small};
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;
`,r={primary:y,secondary:f,critical:v,disabled:D,small:h,medium:x,large:k,xlarge:E},q=$.forwardRef(({onClick:u,title:t,variant:l,type:i,disabled:c,size:s="medium",className:d,sx:z,fullWidth:m,as:p,...C},B)=>{const g=a`
      ${m?{width:"100%"}:{}}
      ${S}
      ${r[l]}
      ${r[s]}

      &:disabled {
        ${r.disabled}
      }
    `;return o(p||"button",{ref:B,className:d,css:g,disabled:c,onClick:u,type:i,...C,children:o("span",{children:t})})}),n=Object.assign(q,{displayName:"Button"});try{n.displayName="ButtonNameSpace",n.__docgenInfo={description:"",displayName:"ButtonNameSpace",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"CSSObject"}},title:{defaultValue:null,description:"버튼의 타이틀을 설정합니다.",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"버튼의 variant를 설정합니다.",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"critical"'}]}},disabled:{defaultValue:null,description:"버튼의 비활성화 여부를 설정합니다.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"버튼의 크기를 설정합니다.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},type:{defaultValue:null,description:"버튼의 타입을 설정합니다.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},fullWidth:{defaultValue:null,description:"버튼의 width를 100%로 설정합니다.",name:"fullWidth",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}}}catch{}export{n as B};
