import{j as r,n as u}from"./iframe-Do8azCA_.js";import{D as c,C as g}from"./constants-DdkjnEgz.js";import{c as x}from"./createStoryParameters-CcwS40kl.js";import{B as f}from"./Banner-RpvetFZL.js";import{B as h}from"./Button-DSpGoxUq.js";import{I as j}from"./Image-Dobjk648.js";import{F as n}from"./Flex-iYnkE7Al.js";import{I as b}from"./play_24-BOygf-Py.js";import"./react_utils-CSZjvU4X.js";import"./IconButton-CBcM2ka6.js";import"./Tappable-BhE3_1Wf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBHQpsyv.js";import"./type_checkers-CVMjkZjG.js";import"./InputUtils-C9YSTSxO.js";import"./VisuallyHidden-uQtaU71S.js";import"./Headline-BdVLKspn.js";import"./Subhead-jLvRLs1j.js";import"./Title-CLG-ZRpE.js";import"./dismiss_dark_24-CpHhjdqD.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./dismiss_24-CwXZGEOt.js";import"./cancel_24-BQLOkwi-.js";import"./chevron_24-dN3vYgMx.js";import"./Spinner-Bc5NU01q.js";import"./animationVisibilityDelay.module-1e5bM_ac.js";import"./ImageBase-Bqz6JOGl.js";import"./ImageBaseBadge-DovWruhL.js";import"./useColorScheme-HNXu4UKc.js";import"./useFocusWithin-B9rEUO1C.js";import"./useIsClient-DhLM2SEW.js";import"./gaps-ql9YD5aO.js";const or={title:"Layout/Flex",component:n,parameters:x("Flex",g,c),argTypes:{rowGap:{control:"number"},columnGap:{control:"number"},itemsCount:{control:"number"}}},o={args:{gap:"m",itemsCount:2},render:({itemsCount:t=2,rowGap:e,columnGap:i,gap:s,...d})=>r.jsx(n,{gap:e!==void 0||i!==void 0?[e||0,i||0]:s,...d,children:Array.from({length:t},(y,l)=>r.jsx(f,{before:r.jsx(j,{size:96,src:"https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"}),title:"Для Вас",subtitle:"Обновлено сегодня",actions:r.jsx(h,{before:r.jsx(b,{}),onClick:u,children:"Слушать"})},l))}),decorators:[t=>r.jsx("div",{style:{width:"80%",height:500,border:"1px dotted red"},children:r.jsx(t,{})})]};var m,p,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    gap: 'm',
    itemsCount: 2
  },
  render: ({
    itemsCount = 2,
    rowGap,
    columnGap,
    gap,
    ...args
  }) => <Flex gap={rowGap !== undefined || columnGap !== undefined ? [rowGap || 0, columnGap || 0] : gap} {...args}>
      {Array.from({
      length: itemsCount
    }, (_, index) => {
      return <Banner key={index} before={<Image size={96} src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg" />} title="Для Вас" subtitle="Обновлено сегодня" actions={<Button before={<Icon24Play />} onClick={noop}>
                Слушать
              </Button>} />;
    })}
    </Flex>,
  decorators: [Component => <div style={{
    width: '80%',
    height: 500,
    border: '1px dotted red'
  }}>
        <Component />
      </div>]
}`,...(a=(p=o.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const tr=["Playground"];export{o as Playground,tr as __namedExportsOrder,or as default};
