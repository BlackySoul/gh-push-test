import{r as e,j as t}from"./iframe-Do8azCA_.js";import{D as u,C as f}from"./constants-DdkjnEgz.js";import{c as l}from"./createStoryParameters-CcwS40kl.js";import{B as R}from"./Button-DSpGoxUq.js";import{D as d}from"./Div-OqYXjQMT.js";import{P as m}from"./Popper-QS7AwLNB.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Bc5NU01q.js";import"./animationVisibilityDelay.module-1e5bM_ac.js";import"./VisuallyHidden-uQtaU71S.js";import"./Tappable-BhE3_1Wf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBHQpsyv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C9YSTSxO.js";import"./useReferenceHiddenChangeCallback-VX4zgiS4.js";import"./AppRootPortal-i5-ys5oB.js";import"./useColorScheme-HNXu4UKc.js";import"./createPortal-D4Hw4NNq.js";import"./ColorSchemeProvider-5NHWhLmP.js";import"./ConfigProviderOverride-Cu3AA_gm.js";import"./FloatingArrow-FoYqu0Od.js";import"./usePlacementChangeCallback-ctwr4N7a.js";import"./floating-ui.react-dom-45TukeN7.js";import"./_object_spread_props-DRD4qu7p.js";const K={title:"Modals/Popper",component:m,parameters:l("Popper",f,u)},o={render:function(n){const[r,c]=e.useState(n.shown||!1),s=e.useRef(null);return t.jsxs(e.Fragment,{children:[t.jsx(R,{getRootRef:s,onClick:()=>c(!r),children:r?"Закрыть":"Открыть"}),r&&t.jsx(m,{usePortal:!1,offsetByMainAxis:8,...n,targetRef:s,children:t.jsx(d,{children:"Привет"})})]})}};var a,i,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render(args) {
    const [shown, setShown] = React.useState(args.shown || false);
    const buttonRef = React.useRef(null);
    return <React.Fragment>
        <Button getRootRef={buttonRef} onClick={() => setShown(!shown)}>
          {shown ? 'Закрыть' : 'Открыть'}
        </Button>
        {shown && <Popper usePortal={false} offsetByMainAxis={8} {...args} targetRef={buttonRef}>
            <Div>Привет</Div>
          </Popper>}
      </React.Fragment>;
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const N=["Playground"];export{o as Playground,N as __namedExportsOrder,K as default};
