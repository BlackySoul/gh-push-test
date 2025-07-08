import{w as u,b as f,j as r,r as e}from"./iframe-Do8azCA_.js";import{w as g}from"./withCartesian-BTpMs1qc.js";import{D as h,C as y}from"./constants-DdkjnEgz.js";import{b as x}from"./mock-BznupqUM.js";import{c as z}from"./createStoryParameters-CcwS40kl.js";import{A as F}from"./Avatar-Da1ZJ16B.js";import{G as H}from"./Group-FCkMagEs.js";import{H as R}from"./Header-CgFPRZoz.js";import{H as S}from"./HorizontalCell-CsarMCpK.js";import{S as C}from"./Spinner-Bc5NU01q.js";import{H as c}from"./HorizontalScroll-B67bqhJf.js";import"./ImageBase-Bqz6JOGl.js";import"./Clickable-CBHQpsyv.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-DovWruhL.js";import"./useColorScheme-HNXu4UKc.js";import"./InputUtils-C9YSTSxO.js";import"./useFocusWithin-B9rEUO1C.js";import"./useIsClient-DhLM2SEW.js";import"./useConfigDirection-Bs8AbBos.js";import"./online_mobile_12-CM0Cc0d-.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./helpers-QklJbEbU.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-Dz1DmvHF.js";import"./Caption-DRhuIYFL.js";import"./Headline-BdVLKspn.js";import"./Paragraph-Bng09et4.js";import"./Subhead-jLvRLs1j.js";import"./Title-CLG-ZRpE.js";import"./Tappable-BhE3_1Wf.js";import"./animationVisibilityDelay.module-1e5bM_ac.js";import"./VisuallyHidden-uQtaU71S.js";import"./fx-C_MNHbUM.js";import"./ScrollArrow-BYbsbOIH.js";import"./chevron_24-dN3vYgMx.js";import"./chevron_16-bEKJmk7H.js";const cr={title:"Data Display/HorizontalScroll",component:c,parameters:z("HorizontalScroll",y,h),argTypes:{showArrows:{options:["None","Always","False","True"],mapping:{None:void 0,Always:"always",False:!1,True:!0},control:{type:"inline-radio"}}},decorators:[g,u,f]},t={render:function(o){const[n,d]=e.useState([]),a=e.useRef(void 0);return e.useEffect(()=>(a.current=setTimeout(()=>{d(x(30))},2e3),()=>{clearTimeout(a.current)}),[]),r.jsxs(c,{...o,children:[n.length===0&&r.jsx(C,{size:"m",style:{height:88}}),n.length>0&&r.jsx(e.Fragment,{children:n.map(i=>r.jsx(S,{title:i.first_name,children:r.jsx(F,{size:56,src:i.photo_200})},i.id))})]})},decorators:[(s,o)=>r.jsx(H,{header:r.jsx(R,{size:"s",children:"Недавние"}),children:r.jsx(s,{args:o.args})})]};var m,p,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render(args) {
    const [commonFriends, setCommonFriends] = React.useState<UserExtendedInterface[]>([]);
    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    React.useEffect(() => {
      // Эмуляция загрузки
      timer.current = setTimeout(() => {
        setCommonFriends(getRandomUsers(30));
      }, 2000);
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
    return <HorizontalScroll {...args}>
        {commonFriends.length === 0 && <Spinner size="m" style={{
        height: 88
      }} />}
        {commonFriends.length > 0 && <React.Fragment>
            {commonFriends.map(item => {
          return <HorizontalCell key={item.id} title={item.first_name}>
                  <Avatar size={56} src={item.photo_200} />
                </HorizontalCell>;
        })}
          </React.Fragment>}
      </HorizontalScroll>;
  },
  decorators: [(Component, context) => <Group header={<Header size="s">Недавние</Header>}>
        <Component args={context.args} />
      </Group>]
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const dr=["Playground"];export{t as Playground,dr as __namedExportsOrder,cr as default};
