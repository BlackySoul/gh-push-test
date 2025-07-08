import{r as o,j as t}from"./iframe-Do8azCA_.js";import{D as p,C as c}from"./constants-DdkjnEgz.js";import{c as d}from"./createStoryParameters-CcwS40kl.js";import{B as u}from"./Button-DSpGoxUq.js";import{P as b}from"./Placeholder-47OpwOMP.js";import{A as a}from"./Alert-CW6ssp5T.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Bc5NU01q.js";import"./animationVisibilityDelay.module-1e5bM_ac.js";import"./VisuallyHidden-uQtaU71S.js";import"./Tappable-BhE3_1Wf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBHQpsyv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C9YSTSxO.js";import"./Headline-BdVLKspn.js";import"./Title-CLG-ZRpE.js";import"./AppRootPortal-i5-ys5oB.js";import"./useColorScheme-HNXu4UKc.js";import"./createPortal-D4Hw4NNq.js";import"./ColorSchemeProvider-5NHWhLmP.js";import"./ConfigProviderOverride-Cu3AA_gm.js";import"./PopoutWrapper-BNfDAXsq.js";import"./useAdaptivityWithJSMediaQueries-OzPJ4g9e.js";import"./FocusTrap-DlDZ26BT.js";import"./useFocusTrap-CEdC7HgS.js";import"./useMutationObserver-DIcdzGfU.js";import"./IconButton-CBcM2ka6.js";import"./ModalDismissButton-Dc2azJAu.js";import"./ModalOutsideButton-cKEyPscl.js";import"./cancel_20-BcsGsAfb.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./Caption-DRhuIYFL.js";import"./Footnote-Dz1DmvHF.js";import"./useCSSKeyframesAnimationController-C1KccmaR.js";const $={title:"Feedback/Alert",component:a,parameters:d("Alert",c,p)},r={render:function(m){const[l,e]=o.useState(!0);return t.jsxs(o.Fragment,{children:[t.jsx(b,{stretched:!0,children:t.jsx(u,{onClick:()=>e(!0),children:"Открыть"})}),l?t.jsx(a,{...m,onClose:()=>e(!1)}):null]})},args:{actions:[{title:"Отмена",mode:"cancel"},{title:"Удалить",mode:"destructive"}],actionsLayout:"horizontal",dismissLabel:"Отмена",title:"Удаление документа",description:"Вы уверены, что хотите удалить этот документ?"}};var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render(args) {
    const [visible, setVisible] = React.useState(true);
    return <React.Fragment>
        <Placeholder stretched>
          <Button onClick={() => setVisible(true)}>Открыть</Button>
        </Placeholder>
        {visible ? <Alert {...args} onClose={() => setVisible(false)} /> : null}
      </React.Fragment>;
  },
  args: {
    actions: [{
      title: 'Отмена',
      mode: 'cancel'
    }, {
      title: 'Удалить',
      mode: 'destructive'
    }],
    actionsLayout: 'horizontal',
    dismissLabel: 'Отмена',
    title: 'Удаление документа',
    description: 'Вы уверены, что хотите удалить этот документ?'
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const tt=["Playground"];export{r as Playground,tt as __namedExportsOrder,$ as default};
