import{c as r,v as e,j as o}from"./emotion-react.browser.esm-QWzA3oxQ.js";import{r as b}from"./index-CTjT7uj6.js";const $=r`
  border: none;
  color: ${e.color.white};
  background-color: ${e.color.primary};
  &:hover {
    background-color: ${e.color.primaryLight};
  }
  &:active {
    background-color: ${e.color.primaryDark};
  }
`,f=r`
  border: none;
  background-color: ${e.color.secondary};
  color: ${e.color.white};

  &:hover {
    background-color: ${e.color.secondaryLight};
  }
  &:active {
    background-color: ${e.color.secondaryDark};
  }
`,y=r`
  border: none;
  color: ${e.color.white};
  background-color: ${e.color.error};

  &:hover {
    background-color: ${e.color.errorLight};
  }
  &:active {
    background-color: ${e.color.errorDark};
  }
`,v=r`
  border: none;
  color: ${e.color.white};
  background-color: ${e.color.gray[400]};
  cursor: not-allowed;
`,D=r`
  padding: ${e.spacing.small} ${e.spacing.medium};
  font-size: ${e.fontSize.small};
  border-radius: ${e.rounded.small}px;
`,h=r`
  padding: ${e.spacing.medium} ${e.spacing.large};
  font-size: ${e.fontSize.medium};
  border-radius: ${e.rounded.medium}px;
`,x=r`
  padding: ${e.spacing.large} ${e.spacing.xlarge};
  font-size: ${e.fontSize.large};
  border-radius: ${e.rounded.large}px;
`,k=r`
  padding: ${e.spacing.xlarge} ${e.spacing.xlarge};
  font-size: ${e.fontSize.xlarge};
  border-radius: ${e.rounded.xlarge}px;
`,E=r`
  border-radius: ${e.rounded.small};
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.25s ease-in-out;
`,a={primary:$,secondary:f,critical:y,disabled:v,small:D,medium:h,large:x,xlarge:k},S=b.forwardRef(({onClick:u,title:l,variant:t,type:i,disabled:d,size:c="medium",className:s,sx:q,fullWidth:m,as:p,...C},B)=>{const g=r`
      ${m?{width:"100%"}:{}}
      ${E}
      ${a[t]}
      ${a[c]}

      &:disabled {
        ${a.disabled}
      }
    `;return o(p||"button",{ref:B,className:s,css:g,disabled:d,onClick:u,type:i,...C,children:o("span",{children:l})})}),n=Object.assign(S,{displayName:"Button"});try{n.displayName="ButtonNameSpace",n.__docgenInfo={description:"",displayName:"ButtonNameSpace",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"CSSObject"}},title:{defaultValue:null,description:"버튼의 타이틀을 설정합니다.",name:"title",required:!0,type:{name:"string"}},variant:{defaultValue:null,description:"버튼의 variant를 설정합니다.",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"critical"'}]}},disabled:{defaultValue:null,description:"버튼의 비활성화 여부를 설정합니다.",name:"disabled",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"버튼의 크기를 설정합니다.",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},type:{defaultValue:null,description:"버튼의 타입을 설정합니다.",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},fullWidth:{defaultValue:null,description:"버튼의 width를 100%로 설정합니다.",name:"fullWidth",required:!1,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}}}catch{}export{n as B};
