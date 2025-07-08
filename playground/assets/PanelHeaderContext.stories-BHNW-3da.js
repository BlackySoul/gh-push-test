import{b as g,r as l,j as e,V as H,h as j,P as v,n as s}from"./iframe-Do8azCA_.js";import{D as I,C as k}from"./constants-DdkjnEgz.js";import{c as O}from"./createStoryParameters-CcwS40kl.js";import{C as m}from"./Cell-DAHatz0a.js";import{D as h}from"./Div-OqYXjQMT.js";import{P as D}from"./PanelHeaderBack-B72OczKe.js";import{P as _}from"./PanelHeaderButton-B9YcM6aB.js";import{P as b}from"./PanelHeaderContent-DEkpD07y.js";import{P as C}from"./PanelHeaderContext-CPvUVAcx.js";import{I as y}from"./dropdown_16-Btksk4t3.js";import{I as S}from"./add_outline_28-ezqo2IMg.js";import{I as d}from"./done_24-QoVVic5H.js";import{I as M}from"./users_outline_28-q8yaKi7o.js";import{I as w}from"./settings_outline_28-BqTe5DBa.js";import"./Removable-DyOtm2Fe.js";import"./children-BhfTR7wF.js";import"./IconButton-CBcM2ka6.js";import"./Tappable-BhE3_1Wf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBHQpsyv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C9YSTSxO.js";import"./VisuallyHidden-uQtaU71S.js";import"./useConfigDirection-Bs8AbBos.js";import"./useGlobalEventListener-BRmfFoNA.js";import"./useEventListener-CrO395bP.js";import"./cancel_24-BQLOkwi-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./SimpleCell-B_ZKderH.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dz1DmvHF.js";import"./Headline-BdVLKspn.js";import"./Subhead-jLvRLs1j.js";import"./chevron_compact_right_24-CcbXtaGv.js";import"./chevron_16-bEKJmk7H.js";import"./AdaptiveIconRenderer-CnERxpXl.js";import"./reorder_ios_24-Cwzg-NjQ.js";import"./check_box_on_24-DwbUY-NN.js";import"./check_circle_on_24-aOBbPfmV.js";import"./constants-CtEIZ0Vq.js";import"./chevron_left_outline_28-D7M7tvm4.js";import"./chevron_left_outline_20-4xr198wx.js";import"./Title-CLG-ZRpE.js";import"./useGlobalOnClickOutside-BHoEUmvd.js";import"./useCSSKeyframesAnimationController-C1KccmaR.js";const _e={title:"Navigation/PanelHeaderContext",component:C,parameters:O("PanelHeaderContext",k,I),decorators:[g]},t={render:function(){const[r,x]=l.useState(!0),[a,f]=l.useState("all"),o=()=>{x(n=>!n)},i=n=>{const P=n.currentTarget.dataset.mode;f(P),requestAnimationFrame(o)};return e.jsx(H,{id:"main",activePanel:"panel1",children:e.jsxs(j,{id:"panel1",children:[e.jsx(v,{before:e.jsx(D,{onClick:s}),after:e.jsx(_,{onClick:s,children:e.jsx(S,{})}),children:e.jsx(b,{aside:e.jsx(y,{style:{transform:`rotate(${r?"180deg":"0"})`}}),onClick:o,children:"Communities"})}),e.jsxs(C,{opened:r,onClose:o,children:[e.jsx(m,{before:e.jsx(M,{}),after:a==="all"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"all",children:"Communities"}),e.jsx(m,{before:e.jsx(w,{}),after:a==="managed"?e.jsx(d,{fill:"var(--vkui--color_icon_accent)"}):null,onClick:i,"data-mode":"managed",children:"Managed Communities"})]}),e.jsx(h,{children:"PanelHeaderContext"})]})})}};var c,p,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [contextOpened, setContextOpened] = React.useState(true);
    const [mode, setMode] = React.useState<string | undefined>('all');
    const toggleContext = () => {
      setContextOpened(prev => !prev);
    };
    const select = (e: React.MouseEvent<HTMLElement>) => {
      const mode = e.currentTarget.dataset.mode;
      setMode(mode);
      requestAnimationFrame(toggleContext);
    };
    return <View id="main" activePanel="panel1">
        <Panel id="panel1">
          <PanelHeader before={<PanelHeaderBack onClick={noop} />} after={<PanelHeaderButton onClick={noop}>
                <Icon28AddOutline />
              </PanelHeaderButton>}>
            <PanelHeaderContent aside={<Icon16Dropdown style={{
            transform: \`rotate(\${contextOpened ? '180deg' : '0'})\`
          }} />} onClick={toggleContext}>
              Communities
            </PanelHeaderContent>
          </PanelHeader>
          <PanelHeaderContext opened={contextOpened} onClose={toggleContext}>
            <Cell before={<Icon28UsersOutline />} after={mode === 'all' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="all">
              Communities
            </Cell>
            <Cell before={<Icon28SettingsOutline />} after={mode === 'managed' ? <Icon24Done fill="var(--vkui--color_icon_accent)" /> : null} onClick={select} data-mode="managed">
              Managed Communities
            </Cell>
          </PanelHeaderContext>
          <Div>PanelHeaderContext</Div>
        </Panel>
      </View>;
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const be=["Playground"];export{t as Playground,be as __namedExportsOrder,_e as default};
