import{j as t,w as f,b as L,r as b}from"./iframe-Do8azCA_.js";import{D as x,C as h}from"./constants-DdkjnEgz.js";import{c as I}from"./createStoryParameters-CcwS40kl.js";import{C as y}from"./Cell-DAHatz0a.js";import{G as C}from"./Group-FCkMagEs.js";import{L as l}from"./List-nU87M727.js";import{I as j}from"./user_outline_28-hs29ffX1.js";import{I as D}from"./settings_outline_28-BqTe5DBa.js";import{I as P}from"./privacy_outline_28-CibXT7vh.js";import"./Removable-DyOtm2Fe.js";import"./children-BhfTR7wF.js";import"./IconButton-CBcM2ka6.js";import"./Tappable-BhE3_1Wf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBHQpsyv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C9YSTSxO.js";import"./VisuallyHidden-uQtaU71S.js";import"./useConfigDirection-Bs8AbBos.js";import"./useGlobalEventListener-BRmfFoNA.js";import"./useEventListener-CrO395bP.js";import"./cancel_24-BQLOkwi-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./SimpleCell-B_ZKderH.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dz1DmvHF.js";import"./Headline-BdVLKspn.js";import"./Subhead-jLvRLs1j.js";import"./chevron_compact_right_24-CcbXtaGv.js";import"./chevron_16-bEKJmk7H.js";import"./AdaptiveIconRenderer-CnERxpXl.js";import"./reorder_ios_24-Cwzg-NjQ.js";import"./check_box_on_24-DwbUY-NN.js";import"./check_circle_on_24-aOBbPfmV.js";import"./constants-CtEIZ0Vq.js";const pt={title:"Buttons/Cell/List",component:l,parameters:I("List",h,x)},e={render:function({items:i,...g}){const[o,c]=b.useState(i),u=({from:r,to:d})=>{const n=[...o];n.splice(r,1),n.splice(d,0,o[r]),c(n)};return t.jsx(l,{...g,children:o.map(r=>t.jsx(y,{before:r.before,draggable:!0,onDragFinish:u,children:r.title},r.title))})},args:{items:[{before:t.jsx(j,{}),title:"Учетная запись"},{before:t.jsx(D,{}),title:"Основные"},{before:t.jsx(P,{}),title:"Приватность"}]},decorators:[(s,i)=>t.jsx(C,{children:t.jsx(s,{...i.args})}),f,L]};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render({
    items,
    ...args
  }) {
    const [draggingList, updateDraggingList] = React.useState(items);
    const onDragFinish = ({
      from,
      to
    }: {
      from: number;
      to: number;
    }) => {
      const _list = [...draggingList];
      _list.splice(from, 1);
      _list.splice(to, 0, draggingList[from]);
      updateDraggingList(_list);
    };
    return <List {...args}>
        {draggingList.map(item => <Cell key={item.title} before={item.before} draggable onDragFinish={onDragFinish}>
            {item.title}
          </Cell>)}
      </List>;
  },
  args: {
    items: [{
      before: <Icon28UserOutline />,
      title: 'Учетная запись'
    }, {
      before: <Icon28SettingsOutline />,
      title: 'Основные'
    }, {
      before: <Icon28PrivacyOutline />,
      title: 'Приватность'
    }]
  },
  decorators: [(Component, context) => <Group>
        <Component {...context.args} />
      </Group>, withSinglePanel, withVKUILayout]
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const lt=["Playground"];export{e as Playground,lt as __namedExportsOrder,pt as default};
