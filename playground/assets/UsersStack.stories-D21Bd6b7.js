import{j as e}from"./iframe-Do8azCA_.js";import{w as d}from"./withCartesian-BTpMs1qc.js";import{C as g}from"./constants-DdkjnEgz.js";import{g as r,a as u}from"./mock-BznupqUM.js";import{c as U}from"./createStoryParameters-CcwS40kl.js";import{T as h}from"./Tooltip-D3Z8NfnO.js";import{U as v}from"./UsersStack-YzGAJxBo.js";import"./useFloatingElement-LCg4iyeX.js";import"./usePatchChildren-0jwkDV0R.js";import"./warnOnce-BsOPdcXO.js";import"./useReferenceHiddenChangeCallback-VX4zgiS4.js";import"./useGlobalEscKeyDown-DDnkjg1_.js";import"./usePlacementChangeCallback-ctwr4N7a.js";import"./floating-ui.react-dom-45TukeN7.js";import"./_object_spread_props-DRD4qu7p.js";import"./type_checkers-CVMjkZjG.js";import"./debounce-2Cr6Hz2O.js";import"./useEnsuredControl-C-_4PoA8.js";import"./useGlobalOnClickOutside-BHoEUmvd.js";import"./AppRootPortal-i5-ys5oB.js";import"./useColorScheme-HNXu4UKc.js";import"./createPortal-D4Hw4NNq.js";import"./ColorSchemeProvider-5NHWhLmP.js";import"./ConfigProviderOverride-Cu3AA_gm.js";import"./TooltipBase-DKlNArdS.js";import"./react_utils-CSZjvU4X.js";import"./FloatingArrow-FoYqu0Od.js";import"./Tappable-BhE3_1Wf.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./Clickable-CBHQpsyv.js";import"./InputUtils-C9YSTSxO.js";import"./Subhead-jLvRLs1j.js";import"./VisuallyHidden-uQtaU71S.js";import"./cancel_16-CiqJJcUk.js";import"./SvgIconRoot-C-orRW5I.js";import"./useConfigDirection-Bs8AbBos.js";import"./Caption-DRhuIYFL.js";import"./Footnote-Dz1DmvHF.js";const sr={title:"Data Display/UsersStack",component:v,parameters:U("UsersStack",g),decorators:[d]},t={args:{children:"Алексей, Илья, Михаил и ещё 1 человек",photos:[r(),r(),r(),r()],avatarsPosition:"inline-start"}},A=o=>{const s=u();return e.jsx(h,{description:`${s.first_name} ${s.last_name}`,children:e.jsx("div",{style:{cursor:"pointer"},onClick:()=>console.log("click to avatar with url "+o["data-src"]),children:o.children})})},a={...t,args:{...t.args,photos:[r(),r(),r(),r()].map(o=>({src:o,renderWrapper:A}))}};var p,i,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Алексей, Илья, Михаил и ещё 1 человек',
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()],
    avatarsPosition: 'inline-start'
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var n,c,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  ...Playground,
  args: {
    ...Playground.args,
    photos: [getAvatarUrl(), getAvatarUrl(), getAvatarUrl(), getAvatarUrl()].map((photoUrl): UsersStackPhoto => ({
      src: photoUrl,
      renderWrapper: AvatarWrapper
    }))
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const er=["Playground","WithCustomWrapper"];export{t as Playground,a as WithCustomWrapper,er as __namedExportsOrder,sr as default};
