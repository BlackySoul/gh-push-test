import{j as r}from"./iframe-Do8azCA_.js";import{D as h,C as x}from"./constants-DdkjnEgz.js";import{c as y}from"./createStoryParameters-CcwS40kl.js";import{D as I}from"./DateInput-B4KDvI94.js";import{F as o}from"./FormItem-JNFdfKo9.js";import{I as p}from"./Input-Oq5Z7nq2.js";import{S as j}from"./Select-C5E64lZF.js";import{V as a}from"./VisuallyHidden-uQtaU71S.js";import{F as n}from"./FormLayoutGroup-Cy-YKfVG.js";import"./DateInput.module-CnuGbW2O.js";import"./useBooleanState-2CfM6IFc.js";import"./useGlobalEventListener-BRmfFoNA.js";import"./useEventListener-CrO395bP.js";import"./callMultiple-ChqatQlo.js";import"./date-Dk1AJFZr.js";import"./CalendarHeader-JtU2aav4.js";import"./Clickable-CBHQpsyv.js";import"./mergeCalls-Bc-HqyI0.js";import"./type_checkers-CVMjkZjG.js";import"./Tappable-BhE3_1Wf.js";import"./InputUtils-C9YSTSxO.js";import"./Footnote-Dz1DmvHF.js";import"./constants-BxoWbviK.js";import"./CustomSelect-CH8yJIkr.js";import"./debounce-2Cr6Hz2O.js";import"./useFocusWithin-B9rEUO1C.js";import"./useStateWithPrev-BgY7A-k_.js";import"./DropdownIcon-H5RYL0D2.js";import"./children-BhfTR7wF.js";import"./dropdown_20-9Ai53MI9.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-C-orRW5I.js";import"./chevron_up_24-BdYxLMPy.js";import"./warnOnce-BsOPdcXO.js";import"./CustomSelectDropdown-GIWPoIUa.js";import"./CustomScrollView-cpJauBYC.js";import"./Popper-QS7AwLNB.js";import"./useReferenceHiddenChangeCallback-VX4zgiS4.js";import"./AppRootPortal-i5-ys5oB.js";import"./useColorScheme-HNXu4UKc.js";import"./createPortal-D4Hw4NNq.js";import"./ColorSchemeProvider-5NHWhLmP.js";import"./ConfigProviderOverride-Cu3AA_gm.js";import"./FloatingArrow-FoYqu0Od.js";import"./usePlacementChangeCallback-ctwr4N7a.js";import"./floating-ui.react-dom-45TukeN7.js";import"./Spinner-Bc5NU01q.js";import"./react_utils-CSZjvU4X.js";import"./animationVisibilityDelay.module-1e5bM_ac.js";import"./CustomSelectOption-Cq2zfEfW.js";import"./Paragraph-Bng09et4.js";import"./NativeSelect-FcGr4WeY.js";import"./FormField-awNq9iPo.js";import"./Select.module-B95tgzXC.js";import"./IconButton-CBcM2ka6.js";import"./cancel_16-CiqJJcUk.js";import"./chevron_left_outline_20-4xr198wx.js";import"./Calendar-Do3dnb5e.js";import"./useEnsuredControl-C-_4PoA8.js";import"./Button-DSpGoxUq.js";import"./FocusTrap-DlDZ26BT.js";import"./useFocusTrap-CEdC7HgS.js";import"./useMutationObserver-DIcdzGfU.js";import"./calendar_outline_20-TlELJQHf.js";import"./clear_16-mJGQq9_x.js";import"./Removable-DyOtm2Fe.js";import"./useConfigDirection-Bs8AbBos.js";import"./cancel_24-BQLOkwi-.js";import"./FormItemTopLabel-DDsJkTaD.js";import"./Subhead-jLvRLs1j.js";import"./UnstyledTextField-PhBcheo4.js";const Or={title:"Layout/FormLayoutGroup",component:n,parameters:y("FormLayoutGroup",x,h)},i={render:m=>r.jsxs(n,{...m,children:[r.jsx(o,{htmlFor:"name",top:"Имя ящика",children:r.jsx(p,{id:"name"})}),r.jsx(o,{children:r.jsx(j,{options:["@mail.ru","@internet.ru","@bk.ru","@inbox.ru","@list.ru"].map(t=>({label:t,value:t})),defaultValue:"@mail.ru"})})]})},e={render:m=>r.jsxs(n,{mode:"horizontal",segmented:!0,...m,children:[r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"nikname-id",children:"Никнейм или имя"}),r.jsx(p,{id:"nickname-id",placeholder:"Никнейм или имя"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"link-or-id-input-id",children:"Ссылка на ID"}),r.jsx(p,{id:"link-or-id-input-id",placeholder:"Ссылка на ID"})]}),r.jsxs(o,{children:[r.jsx(a,{Component:"label",htmlFor:"date-id",children:"Дата или диапазон"}),r.jsx(I,{id:"date-id",renderCustomValue:t=>t?void 0:r.jsx("span",{"aria-hidden":!0,style:{color:"var(--vkui--color_text_secondary)"},children:"Дата или диапазон"})})]})]})};var l,d,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <FormLayoutGroup {...args}>
      <FormItem htmlFor="name" top="Имя ящика">
        <Input id="name" />
      </FormItem>
      <FormItem>
        <Select options={['@mail.ru', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'].map(i => ({
        label: i,
        value: i
      }))} defaultValue="@mail.ru" />
      </FormItem>
    </FormLayoutGroup>
}`,...(s=(d=i.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var u,c,F;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <FormLayoutGroup mode="horizontal" segmented {...args}>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="nikname-id">
          Никнейм или имя
        </VisuallyHidden>
        <Input id="nickname-id" placeholder="Никнейм или имя" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="link-or-id-input-id">
          Ссылка на ID
        </VisuallyHidden>
        <Input id="link-or-id-input-id" placeholder="Ссылка на ID" />
      </FormItem>
      <FormItem>
        <VisuallyHidden Component="label" htmlFor="date-id">
          Дата или диапазон
        </VisuallyHidden>
        <DateInput id="date-id" renderCustomValue={(date: Date | undefined) => date ? undefined : <span aria-hidden style={{
        color: 'var(--vkui--color_text_secondary)'
      }}>
                Дата или диапазон
              </span>} />
      </FormItem>
    </FormLayoutGroup>
}`,...(F=(c=e.parameters)==null?void 0:c.docs)==null?void 0:F.source}}};const Rr=["Playground","AccessibleHorizontalSegmeted"];export{e as AccessibleHorizontalSegmeted,i as Playground,Rr as __namedExportsOrder,Or as default};
