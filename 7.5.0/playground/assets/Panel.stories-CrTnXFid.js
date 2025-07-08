import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-Do8azCA_.js";import{D as f,C as v}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-Da1ZJ16B.js";import{C as t}from"./Cell-DAHatz0a.js";import{G as l}from"./Group-FCkMagEs.js";import{P as s}from"./PanelHeaderBack-B72OczKe.js";import{S as h}from"./Search-BrZA-0q5.js";import{S as j}from"./Spinner-Bc5NU01q.js";import{I as b}from"./user_outline_28-hs29ffX1.js";import{I as k}from"./users_outline_28-q8yaKi7o.js";import{I as A}from"./music_outline_28-CUGQ7aqL.js";import"./ImageBase-Bqz6JOGl.js";import"./Clickable-CBHQpsyv.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DovWruhL.js";import"./useColorScheme-HNXu4UKc.js";import"./InputUtils-C9YSTSxO.js";import"./useFocusWithin-B9rEUO1C.js";import"./useIsClient-DhLM2SEW.js";import"./useConfigDirection-Bs8AbBos.js";import"./online_mobile_12-CM0Cc0d-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./helpers-QklJbEbU.js";import"./Removable-DyOtm2Fe.js";import"./children-BhfTR7wF.js";import"./IconButton-CBcM2ka6.js";import"./Tappable-BhE3_1Wf.js";import"./VisuallyHidden-uQtaU71S.js";import"./useGlobalEventListener-BRmfFoNA.js";import"./useEventListener-CrO395bP.js";import"./cancel_24-BQLOkwi-.js";import"./SimpleCell-B_ZKderH.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dz1DmvHF.js";import"./Headline-BdVLKspn.js";import"./Subhead-jLvRLs1j.js";import"./chevron_compact_right_24-CcbXtaGv.js";import"./chevron_16-bEKJmk7H.js";import"./AdaptiveIconRenderer-CnERxpXl.js";import"./reorder_ios_24-Cwzg-NjQ.js";import"./check_box_on_24-DwbUY-NN.js";import"./check_circle_on_24-aOBbPfmV.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-B9YcM6aB.js";import"./Title-CLG-ZRpE.js";import"./chevron_left_outline_28-D7M7tvm4.js";import"./chevron_left_outline_20-4xr198wx.js";import"./useBooleanState-2CfM6IFc.js";import"./useNativeFormResetListener-53TtOt5Z.js";import"./Button-DSpGoxUq.js";import"./clear_16-mJGQq9_x.js";import"./search_outline_16-BkbYRX_C.js";import"./animationVisibilityDelay.module-1e5bM_ac.js";const Ie={title:"Navigation/Panel",component:o,parameters:x("Panel",v,f),decorators:[d]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    const [activePanel, setActivePanel] = React.useState('panel1');
    return <View activePanel={activePanel}>
        <Panel id="panel1">
          <PanelHeader>More</PanelHeader>
          <Group>
            <Cell chevron="auto" before={<Icon28UserOutline />} onClick={() => setActivePanel('panel2')}>
              Friends
            </Cell>
            <Cell chevron="auto" before={<Icon28UsersOutline />} onClick={() => setActivePanel('panel2')}>
              Communities
            </Cell>
            <Cell chevron="auto" before={<Icon28MusicOutline />} onClick={() => setActivePanel('panel2')}>
              Music
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader delimiter="spacing" before={<PanelHeaderBack onClick={() => setActivePanel('panel1')} />}>
            Communities
          </PanelHeader>
          <Group>
            <Search />
            <Cell subtitle="Humor" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              Swipe Right
            </Cell>
            <Cell subtitle="Cultural Center" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              Out Cinema
            </Cell>
            <Cell subtitle="Movies" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              #ARTPOKAZ
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel3" centered>
          <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('panel2')} />}>
            Out Cinema
          </PanelHeader>
          <Spinner />
          <div style={{
          marginTop: 10
        }}>Centered Content</div>
        </Panel>
      </View>;
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,Ie as default};
