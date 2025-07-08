import{b as c,d as u,j as r,r as m}from"./iframe-Do8azCA_.js";import{M as f}from"./ModalWrapper-b-FBH_dD.js";import{D as x,C as g}from"./constants-DdkjnEgz.js";import{D as M}from"./Div-OqYXjQMT.js";import{a as l,M as h}from"./ModalPageHeader-CpiW9iMm.js";import{M as D}from"./ModalOutlet-D7GpvgZT.js";import{P as j}from"./PanelHeaderButton-B9YcM6aB.js";import{I as P}from"./done_24-QoVVic5H.js";import{I}from"./cancel_24-BQLOkwi-.js";import"./Button-DSpGoxUq.js";import"./react_utils-CSZjvU4X.js";import"./Spinner-Bc5NU01q.js";import"./animationVisibilityDelay.module-1e5bM_ac.js";import"./VisuallyHidden-uQtaU71S.js";import"./Tappable-BhE3_1Wf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBHQpsyv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C9YSTSxO.js";import"./ModalRoot-DQgH0VmC.js";import"./AppRootPortal-i5-ys5oB.js";import"./useColorScheme-HNXu4UKc.js";import"./createPortal-D4Hw4NNq.js";import"./ColorSchemeProvider-5NHWhLmP.js";import"./ConfigProviderOverride-Cu3AA_gm.js";import"./Placeholder-47OpwOMP.js";import"./Headline-BdVLKspn.js";import"./Title-CLG-ZRpE.js";import"./range-rFhSCI5u.js";import"./useAdaptivityWithJSMediaQueries-OzPJ4g9e.js";import"./FocusTrap-DlDZ26BT.js";import"./useFocusTrap-CEdC7HgS.js";import"./useMutationObserver-DIcdzGfU.js";import"./ModalOutsideButton-cKEyPscl.js";import"./ModalOutsideButtons-Dn0lgSYV.js";import"./Flex-iYnkE7Al.js";import"./gaps-ql9YD5aO.js";import"./CustomScrollView-cpJauBYC.js";import"./cancel_20-BcsGsAfb.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./useCSSTransition-Ksz_l1CL.js";import"./useStateWithPrev-BgY7A-k_.js";import"./rubberbandIfOutOfBounds-pO-RxmeE.js";import"./warnOnce-BsOPdcXO.js";import"./debounce-2Cr6Hz2O.js";import"./throttle-CuRfLcRJ.js";const Mr={title:"Modals/ModalPageHeader",component:l,parameters:{...g,...x},decorators:[c]},n="MODAL_ID",a=({children:i})=>{const{onClose:o}=m.useContext(D);return r.jsx(j,{onClick:()=>o==null?void 0:o(n),children:i})},e={render:function(o){const t=u();return r.jsx(f,{modalId:n,children:r.jsx(h,{id:n,header:r.jsx(l,{before:r.jsx(m.Fragment,{children:(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(I,{})})}),after:r.jsxs(m.Fragment,{children:[(t==="android"||t==="vkcom")&&r.jsx(a,{children:r.jsx(P,{})}),t==="ios"&&r.jsx(a,{children:"Готово"})]}),...o,children:"Заголовок модальной страницы"}),children:r.jsx(M,{style:{height:1e3},children:"Example"})})})}};var p,s,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render(args) {
    const platform = usePlatform();
    return <ModalWrapper modalId={MODAL_ID}>
        <ModalPage id={MODAL_ID} header={<ModalPageHeader before={<React.Fragment>
                  {(platform === 'android' || platform === 'vkcom') && <HeaderButton>
                      <Icon24Cancel />
                    </HeaderButton>}
                </React.Fragment>} after={<React.Fragment>
                  {(platform === 'android' || platform === 'vkcom') && <HeaderButton>
                      <Icon24Done />
                    </HeaderButton>}
                  {platform === 'ios' && <HeaderButton>Готово</HeaderButton>}
                </React.Fragment>} {...args}>
              Заголовок модальной страницы
            </ModalPageHeader>}>
          <Div style={{
          height: 1000
        }}>Example</Div>
        </ModalPage>
      </ModalWrapper>;
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const hr=["Playground"];export{e as Playground,hr as __namedExportsOrder,Mr as default};
