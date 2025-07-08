import{j as T}from"./iframe-Do8azCA_.js";import{D as g,C}from"./constants-DdkjnEgz.js";import{c as x}from"./createCalendarDayRenderField-SAZaDuzA.js";import{c as f}from"./createCalendarTimezoneField-BXBmk6qO.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{u as v}from"./useCustomArgs-CoZ_veCC.js";import{C as n}from"./Calendar-Do3dnb5e.js";import"./Caption-DRhuIYFL.js";import"./DisplayTitle-CXa9h2U8.js";import"./education_12-5a0Px044.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./CalendarHeader-JtU2aav4.js";import"./Clickable-CBHQpsyv.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-BhE3_1Wf.js";import"./InputUtils-C9YSTSxO.js";import"./VisuallyHidden-uQtaU71S.js";import"./Footnote-Dz1DmvHF.js";import"./constants-BxoWbviK.js";import"./CustomSelect-CH8yJIkr.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-B9rEUO1C.js";import"./useStateWithPrev-BgY7A-k_.js";import"./DropdownIcon-H5RYL0D2.js";import"./children-BhfTR7wF.js";import"./dropdown_20-9Ai53MI9.js";import"./chevron_up_24-BdYxLMPy.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-GIWPoIUa.js";import"./CustomScrollView-cpJauBYC.js";import"./Popper-QS7AwLNB.js";import"./useReferenceHiddenChangeCallback-VX4zgiS4.js";import"./AppRootPortal-i5-ys5oB.js";import"./useColorScheme-HNXu4UKc.js";import"./createPortal-D4Hw4NNq.js";import"./ColorSchemeProvider-5NHWhLmP.js";import"./ConfigProviderOverride-Cu3AA_gm.js";import"./FloatingArrow-FoYqu0Od.js";import"./usePlacementChangeCallback-ctwr4N7a.js";import"./floating-ui.react-dom-45TukeN7.js";import"./Spinner-Bc5NU01q.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-1e5bM_ac.js";import"./CustomSelectOption-Cq2zfEfW.js";import"./Paragraph-Bng09et4.js";import"./NativeSelect-FcGr4WeY.js";import"./FormField-awNq9iPo.js";import"./Select.module-B95tgzXC.js";import"./IconButton-CBcM2ka6.js";import"./cancel_16-CiqJJcUk.js";import"./chevron_left_outline_20-4xr198wx.js";import"./useEnsuredControl-C-_4PoA8.js";import"./date-Dk1AJFZr.js";import"./Button-DSpGoxUq.js";const Pe={title:"Dates/Calendar",component:n,parameters:y("Calendar",C,g),argTypes:{value:{control:{type:"date"}},minDateTime:{control:{type:"date"}},maxDateTime:{control:{type:"date"}},shouldDisableDate:{control:!1},renderDayContent:x(),timezone:f()}},e={render:function({value:t,minDateTime:r,maxDateTime:a,...s}){const[,d]=v(),u=t&&new Date(t),l=r&&new Date(r),c=a&&new Date(a),D=o=>{d({value:o==null?void 0:o.getTime()})};return T.jsx(n,{value:u,minDateTime:l,maxDateTime:c,...s,onChange:D})}};var m,i,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function Render({
    value,
    minDateTime,
    maxDateTime,
    ...args
  }) {
    const [, updateArgs] = useCustomArgs();
    const parsedValue = value ? new Date(value) : value;
    const parsedMinDateTime = minDateTime ? new Date(minDateTime) : minDateTime;
    const parsedMaxDateTime = maxDateTime ? new Date(maxDateTime) : maxDateTime;
    const updateValue = (newDate: Date | undefined) => {
      updateArgs({
        value: newDate?.getTime()
      });
    };
    return <Calendar value={parsedValue} minDateTime={parsedMinDateTime} maxDateTime={parsedMaxDateTime} {...args} onChange={updateValue} />;
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const Re=["Playground"];export{e as Playground,Re as __namedExportsOrder,Pe as default};
