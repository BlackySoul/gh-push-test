import{j as g}from"./iframe-Do8azCA_.js";import{D as C,C as h}from"./constants-DdkjnEgz.js";import{c as y}from"./createCalendarDayRenderField-SAZaDuzA.js";import{c as R}from"./createStoryParameters-CcwS40kl.js";import{u as f}from"./useCustomArgs-CoZ_veCC.js";import{C as s}from"./CalendarRange-Cj6uUVdd.js";import"./Caption-DRhuIYFL.js";import"./DisplayTitle-CXa9h2U8.js";import"./education_12-5a0Px044.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./CalendarHeader-JtU2aav4.js";import"./Clickable-CBHQpsyv.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-BhE3_1Wf.js";import"./InputUtils-C9YSTSxO.js";import"./VisuallyHidden-uQtaU71S.js";import"./Footnote-Dz1DmvHF.js";import"./constants-BxoWbviK.js";import"./CustomSelect-CH8yJIkr.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-B9rEUO1C.js";import"./useStateWithPrev-BgY7A-k_.js";import"./DropdownIcon-H5RYL0D2.js";import"./children-BhfTR7wF.js";import"./dropdown_20-9Ai53MI9.js";import"./chevron_up_24-BdYxLMPy.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-GIWPoIUa.js";import"./CustomScrollView-cpJauBYC.js";import"./Popper-QS7AwLNB.js";import"./useReferenceHiddenChangeCallback-VX4zgiS4.js";import"./AppRootPortal-i5-ys5oB.js";import"./useColorScheme-HNXu4UKc.js";import"./createPortal-D4Hw4NNq.js";import"./ColorSchemeProvider-5NHWhLmP.js";import"./ConfigProviderOverride-Cu3AA_gm.js";import"./FloatingArrow-FoYqu0Od.js";import"./usePlacementChangeCallback-ctwr4N7a.js";import"./floating-ui.react-dom-45TukeN7.js";import"./Spinner-Bc5NU01q.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-1e5bM_ac.js";import"./CustomSelectOption-Cq2zfEfW.js";import"./Paragraph-Bng09et4.js";import"./NativeSelect-FcGr4WeY.js";import"./FormField-awNq9iPo.js";import"./Select.module-B95tgzXC.js";import"./IconButton-CBcM2ka6.js";import"./cancel_16-CiqJJcUk.js";import"./chevron_left_outline_20-4xr198wx.js";import"./useEnsuredControl-C-_4PoA8.js";const wt={title:"Dates/CalendarRange",component:s,parameters:R("CalendarRange",h,C),argTypes:{value:{description:"Используйте startDate и endDate для задания периода",control:!1},startDate:{description:"Дата начала периода",table:{type:{summary:"string"}},control:{type:"date"}},endDate:{description:"Дата окончания периода",table:{type:{summary:"string"}},control:{type:"date"}},renderDayContent:y()}},t={render:function({startDate:e,endDate:a,value:S,...i}){const[,d]=f(),l=c=>{const[r,n]=c||[null,null];d({startDate:r?new Date(r):null,endDate:n?new Date(n):null})},u=e?new Date(e):null,D=a?new Date(a):null;return g.jsx(s,{...i,value:[u,D],onChange:l})}};var o,p,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: function Render({
    startDate,
    endDate,
    value,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const handleDateRangeUpdate: CalendarRangeProps['onChange'] = updatedValue => {
      const [changedStartDate, changedEndDate] = updatedValue || [null, null];
      updateArgs({
        startDate: changedStartDate ? new Date(changedStartDate) : null,
        endDate: changedEndDate ? new Date(changedEndDate) : null
      });
    };
    const parsedStartDate = startDate ? new Date(startDate) : null;
    const parsedEndDate = endDate ? new Date(endDate) : null;
    return <CalendarRange {...args} value={[parsedStartDate, parsedEndDate]} onChange={handleDateRangeUpdate} />;
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const vt=["Playground"];export{t as Playground,vt as __namedExportsOrder,wt as default};
