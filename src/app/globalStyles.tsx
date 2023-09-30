"use client";

import { darken, mix, transparentize } from "polished";
import styled, {
  CSSProp,
  RuleSet,
  createGlobalStyle,
  css,
  keyframes,
} from "styled-components";

export const makeStyle = (tagName: string, cssStyle: CSSProp | RuleSet) => {
  //@ts-ignore
  return [styled[tagName]([cssStyle]), cssStyle];
};

/***************
 *   COLOURS   *
 ***************/
export const DEFAULT_COLOR = "#260F09";
export const NEUTRAL_COLOR_A = "#5C4F4C";
export const NEUTRAL_COLOR_B = "#9B8A87";
export const NEUTRAL_COLOR_C = "#F0EAE9";
export const NEUTRAL_COLOR_D = "#F7F5F2";
export const BG_COLOR = "#FFFFFF";
// dark mode
export const DM_DEFAULT_COLOR = "#DCCAC7";
export const DM_NEUTRAL_COLOR_A = "#AA97A6";
export const DM_NEUTRAL_COLOR_B = "#51384C";
export const DM_NEUTRAL_COLOR_C = "#3e1d36";
export const DM_NEUTRAL_COLOR_D = "#34152C";
export const DM_BG_COLOR = "#240A05";

export const PRIMARY_COLOR = "#6E45E3";
export const SECONDARY_COLOR = "#CE3BA8";
export const TERTIARY_COLOR = "#ED5C40";
export const BRAND_COLOR_3 = "#61A7F2";
export const BRAND_COLOR_4 = "#30BC97";
export const NEGATIVE_COLOR = TERTIARY_COLOR;
export const POSITIVE_COLOR = "#13A35C";
export const SIDE_PADDING_DESKTOP = "48px";
export const MAX_SIDEBAR_WIDTH = "240px";
export const MAX_NAVBAR_HEIGHT = "81px";
export const PADDING_MOBILE = "16px";
export const INPUT_SIDE_PADDING = "calc(var(--body-size) *1)";

export const GlobalStyles = createGlobalStyle`
  :root {
    /***************
    *  LIGHT MODE  *
    ***************/
    --default-color: ${DEFAULT_COLOR};
    --neutral-color-A: ${NEUTRAL_COLOR_A};
    --neutral-color-B: ${NEUTRAL_COLOR_B};
    --neutral-color-C: ${NEUTRAL_COLOR_C};
    --neutral-color-D: ${NEUTRAL_COLOR_D};
    --border-color: var(--default-color);
    --bg-color: ${BG_COLOR};
    --bg-color-80p: ${transparentize(0.2, BG_COLOR)};
    --neutral-color-B-20p: ${transparentize(0.8, NEUTRAL_COLOR_B)};
    --neutral-color-D-50p: ${transparentize(0.5, NEUTRAL_COLOR_D)};
    --neutral-color-D-0p: ${transparentize(1, NEUTRAL_COLOR_D)};
    --overlay-color: ${transparentize(0.1, darken(0.05, NEUTRAL_COLOR_D))};
    --primary-color-60p: ${transparentize(0.6, PRIMARY_COLOR)};
    --primary-color-30p: ${transparentize(0.7, PRIMARY_COLOR)};
    --primary-color-10p: ${transparentize(0.88, PRIMARY_COLOR)};
    --primary-color: ${PRIMARY_COLOR};
    --negative-color-10p-flat: ${mix(
      0.12,
      NEGATIVE_COLOR,
      BG_COLOR
    )}; /* no transparency */

    /**************************
    *  THEME-AGNOSTIC COLORS  *
    **************************/
    --secondary-color: ${SECONDARY_COLOR};
    --tertiary-color: ${TERTIARY_COLOR};
    --primary-color-global-forced: ${PRIMARY_COLOR};
    --primary-color-10p-global-forced: ${transparentize(0.88, PRIMARY_COLOR)};
    --primary-color-40p-global-forced: ${transparentize(0.6, PRIMARY_COLOR)};
    --negative-color: ${NEGATIVE_COLOR};
    --negative-color-10p: ${transparentize(0.88, NEGATIVE_COLOR)};
    --positive-color: ${POSITIVE_COLOR};
    --positive-color-10p: ${transparentize(0.88, POSITIVE_COLOR)};

    /************************
    *  GLOBAL MEASUREMENTS  *
    ************************/
    --body-size: 15.5px;
    --rhythm: 24px;
    --rhythm-nounits: 1.548387;
    --rhythm-px: 24px;
    --border-radius: 8px;
  }

  *::selection {
    background: rgba(0,0,0,0);
  }
  input::selection, textarea::selection {
    background: var(--primary-color-60p);
  }

  html, body {
    font-family: 'kairos', Helvetica Neue, sans-serif;
    font-size: var(--body-size);
    line-height: var(--rhythm-nounits);
    color: var(--default-color);
    background-color: var(--bg-color);
    -webkit-font-smoothing: antialiased;
  }

  body {
 
  }

  /* doesn't inherit font size properly */
  input, textarea, select, button {
    font-family: inherit;
    font-size: var(--body-size);
  }

  main {
    max-width: 1300px;
  }
`;

// Regular text inherits these styles from body;
// use these for overrides or content in tables.
export const TxtRegular = styled.div`
  font-size: var(--body-size);
  line-height: var(--rhythm);
  color: var(--default-color);

  &.center {
    text-align: center;
  }

  &.muted {
    color: var(--neutral-color-A);
  }
`;

export const txtRegularMedium = css`
  font-weight: 500;
  letter-spacing: -0.1px;
`;
export const txtRegularBold = css`
  font-weight: bold;
  letter-spacing: -0.3px;
`;

export const TxtRegularP = styled(TxtRegular)`
  margin-top: var(--rhythm-px);
  margin-bottom: var(--rhythm-px);
`;

export const [TxtLarge1, txtLarge1Style] = makeStyle(
  "h2",
  css`
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: -0.5px;
    padding: 6px 0;

    &.center {
      text-align: center;
    }

    &.noTop {
      padding-top: 0;
    }

    &.noBottom {
      padding-bottom: 0;
    }
  `
);

export const [TxtLarge2, txtLarge2Style] = makeStyle(
  "h1",
  css`
    font-weight: bold;
    font-size: 2rem;
    line-height: 36px;
    padding: 6px 0;
    letter-spacing: -0.7px;

    &.noTop {
      padding-top: 0;
    }

    &.noBottom {
      padding-bottom: 0;
    }
  `
);

export const txtLarge3StyleMobile = css`
  font-size: 64px;
  line-height: 59.5px;
`;

export const [TxtLarge3, txtLarge3Style] = makeStyle(
  "h1",
  css`
    font-weight: 900;
    font-family: "kairosTitle", Impact, Helvetica Neue, sans-serif;
    font-size: 90px;
    line-height: 84px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    word-break: normal; /* dont break words */
    margin: 0;

    &.inModal {
      ${txtLarge3StyleMobile}
    }
  `
);

export const [TxtLarge3Plain, txtLarge2PlainStyle] = makeStyle(
  "h1",
  css`
    font-weight: bold;
    font-size: 3rem;
    line-height: 50.4px;
    letter-spacing: -0.9px;

    &.noTop {
      padding-top: 0;
    }
  `
);

export const [TxtSmall2, txtSmall2Style] = makeStyle(
  "div",
  css`
    font-family: var(--space-mono), monospace;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.7rem;
    padding-top: 4px;
    padding-bottom: 4px;
  `
);

export const [TxtSmall1, txtSmall1Style] = makeStyle(
  "div",
  css`
    font-size: 0.88rem;
    padding-top: 1px;
    padding-bottom: 2px;

    &.afterButton {
      margin-top: calc(var(--rhythm) * 0.3);
      color: var(--neutral-color-A);
    }

    &.afterInput {
      margin-top: calc(var(--rhythm) * 0.5);
      color: var(--neutral-color-A);
    }

    &.center {
      width: 100%;
      text-align: center;
    }

    &.muted {
      color: var(--neutral-color-A);
    }
  `
);

export const txtSmall1MediumStyle = css`
  ${txtSmall1Style}
  font-weight: 500;
`;

export const [NumberRegular, numberRegularStyle] = makeStyle(
  "span",
  css`
    font-family: var(--space-mono), monospace;
    letter-spacing: -0.5px;
  `
);

export const [NumberLarge1, numberLarge1Style] = makeStyle(
  "span",
  css`
    font-family: var(--space-mono), monospace;
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: -0.5px;
  `
);

export const [NumberLarge2, numberLarge2Style] = makeStyle(
  "span",
  css`
    font-family: var(--space-mono), monospace;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: -0.5px;
  `
);

export const NumberSmall = TxtSmall2;
export const numberSmallStyle = txtSmall2Style;

export const SpecialNumber = styled.span`
  ${numberLarge1Style}
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  padding: 0.2rem;
`;

export const pressableStyle = css`
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
  will-change: transform;

  &:active {
    transform: scale(0.95);
    opacity: 0.9;
  }
`;

export const A = styled.a`
  &:not(.noStyle) {
    color: var(--primary-color);
    ${txtRegularMedium}
    ${pressableStyle}
    text-decoration: none;
    border-bottom: 1px solid var(--primary-color-60p);
  }

  &.monochrome {
    color: var(--neutral-color-A);
    border-bottom-color: var(--neutral-color-B);
  }

  &.multiLine {
    border: none;
    text-decoration: underline;
  }
`;

export const heroButton = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 200% 0;
  }
`;
export const primaryButtonStyle = css`
  color: var(--bg-color);
  background-color: var(--default-color);
  border: none;
  .textWithGlyph {
    color: var(--bg-color);
  }
  .textWithGlyph:before {
    background-color: var(--bg-color);
  }
  &:disabled,
  &.disabled {
    opacity: 0.8;
    color: var(--bg-color-80p);
    background-color: var(--neutral-color-B);
    .textWithGlyph {
      color: var(--bg-color-80p);
    }
    .textWithGlyph:before {
      background-color: var(--bg-color-80p);
    }
  }
`;
export const heroButtonStyle = css`
  border: none;
  background: linear-gradient(
    to right,
    ${SECONDARY_COLOR} 30%,
    ${PRIMARY_COLOR},
    ${SECONDARY_COLOR}
  );
  background-size: 200% 100%;
  animation: ${heroButton} 25s linear infinite;
  color: var(--bg-color);
  .textWithGlyph {
    color: var(--bg-color);
  }
  .textWithGlyph:before {
    background-color: var(--bg-color);
  }

  &:hover {
    animation-duration: 1.5s;
  }
  &:disabled,
  &.disabled {
    opacity: 0.8;
    color: var(--bg-color-80p);
    background: var(--neutral-color-B);
    .textWithGlyph {
      color: var(--bg-color-80p);
    }
    .textWithGlyph:before {
      background-color: var(--bg-color-80p);
    }
  }
`;
export const inputAttachedStyle = css`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const Button = styled.button<{
  primary?: boolean;
  small?: boolean;
  hero?: boolean;
}>`
  ${pressableStyle}
  ${txtRegularBold}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  font-family: inherit;
  border-radius: var(--border-radius);
  height: calc(var(--rhythm) * 2);
  padding: 0 calc(var(--body-size) * 1.5);
  white-space: nowrap;
  color: var(--buttonText, var(--default-color));
  background: transparent;
  border: 2px solid var(--buttonText, var(--default-color));

  &.inputAttached {
    ${inputAttachedStyle}
  }

  &:disabled,
  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  .textWithGlyph {
    transform: translateY(-1px);
  }

  ${(p) => p.primary && primaryButtonStyle}

  ${(p) =>
    p.small &&
    css`
      height: calc(var(--rhythm) * 1.25 - 2px);
      padding: 0 calc(var(--body-size) * 0.6);
      ${txtSmall1Style}
      ${txtRegularMedium}
    `}

  ${(p) => p.hero && heroButtonStyle}

  &.invalid {
    opacity: 0.3;
    cursor: not-allowed;
    background-color: var(--neutral-color-B);
    color: var(--bg-color);
  }

  &.negative {
    color: var(--negative-color);
    border-color: var(--negative-color);
    background-color: var(--negative-color-10p);
  }

  &.fullWidth {
    width: 100%;
  }
`;

export const activeTransition = (
  props: string[],
  activeSelectors = [":active", ":focus"]
) => `transition: ${props.map((p) => `${p} 0.2s ease`).join(",")};
  ${activeSelectors.map((s) => `&${s}`).join(",")} {
    transition-duration: ${props.map(() => "0.01s").join(",")};
  }`;

export const ixStyle = css`
  ${txtRegularMedium}
  border-bottom: solid 1px;
  transition: color 0.1s ease, border-bottom 0.1s ease;

  &:hover {
    transition: color 0.05s ease, border-bottom 0.05s ease;
  }
`;
export const buttonAttachedStyle = css`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
export let [Input, inputStyle] = makeStyle(
  "input",
  css`
    background-color: rgba(255, 255, 255, 0);
    border-radius: var(--border-radius);
    max-height: calc(var(--rhythm) * 2);
    color: var(--default-color);
    padding: calc(var(--rhythm) * 0.666667) ${INPUT_SIDE_PADDING}
      calc(var(--rhythm) * 0.666667);
    box-shadow: inset 0 0 0 1px var(--neutral-color-B);
    ${activeTransition(["box-shadow", "background-color", "color"])}

    &.buttonAttached {
      ${buttonAttachedStyle}
    }

    &:active,
    &:focus,
    &.invalid:active,
    &.invalid:focus {
      color: var(--primary-color);
      box-shadow: inset 0 0 0 2px var(--primary-color);
      background-color: rgba(255, 255, 255, 0);
    }

    &.invalid,
    &:-internal-autofill-selected.invalid,
    &[readonly].invalid,
    &[readonly].invalid:active,
    &[readonly].invalid:focus {
      color: var(--negative-color);
      box-shadow: inset 0 0 0 2px var(--negative-color);
      background-color: var(--negative-color-10p);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      font-family: inherit;
      font-size: var(--body-size);
      -webkit-text-fill-color: var(--default-color);
      -webkit-box-shadow: inset 0 0 0 2px var(--primary-color),
        inset 0 0 0px 1000px var(--bg-color); /* background color doesn't work in Safari */
      transition: background-color 5000s ease-in-out 0s;
    }

    &[data-com-onepassword-filled],
    &[data-com-onepassword-filled]:hover,
    &[data-com-onepassword-filled]:focus {
      font-family: inherit;
      font-size: var(--body-size);
      -webkit-text-fill-color: var(--default-color);
      color: var(--default-color);
      box-shadow: inset 0 0 0 2px var(--primary-color),
        inset 0 0 0px 1000px var(--bg-color); /* background color doesn't work in Safari */
    }

    &.invalid[data-com-onepassword-filled],
    &.invalid[data-com-onepassword-filled]:hover {
      -webkit-text-fill-color: var(--negative-color);
      color: var(--negative-color);
      box-shadow: inset 0 0 0 2px var(--negative-color),
        inset 0 0 0px 1000px var(--negative-color-10p-flat); /* background color doesn't work in Safari */
    }

    &[data-com-onepassword-filled]:not(.invalid):focus {
      -webkit-text-fill-color: var(--primary-color);
      color: var(--primary-color);
    }

    &.invalid:-webkit-autofill,
    &.invalid:-webkit-autofill:hover {
      -webkit-text-fill-color: var(--negative-color);
      box-shadow: inset 0 0 0 2px var(--negative-color),
        inset 0 0 0px 1000px var(--negative-color-10p); /* background color doesn't work in Safari */
      background-color: var(--negative-color-10p);
    }

    &:not(.invalid):-webkit-autofill:focus {
      -webkit-text-fill-color: var(--primary-color);
    }

    &::placeholder {
      color: var(--neutral-color-B);
      opacity: 1;
      ${activeTransition(["color"])}
    }

    &[readonly],
    &[readonly]:active,
    &[readonly]:focus {
      color: var(--neutral-color-A);
      box-shadow: inset 0 0 0 1px var(--neutral-color-B);
    }

    &[disabled],
    &[disabled]:active,
    &[disabled]:focus {
      cursor: not-allowed;
      opacity: 0.35; /* this is overridden by P if .isDisabled */
      box-shadow: inset 0 0 0 1px var(--neutral-color-B);

      &::selection {
        background-color: transparent;
      }
    }

    &.numberStyle {
      ${numberRegularStyle}
    }

    &.largeNumberStyle {
      ${numberLarge2Style}
      height: calc(var(--rhythm) * 3);
      max-height: calc(var(--rhythm) * 3);
    }

    &.fullWidth {
      width: 100%;
    }
  `
);

Input = styled(Input)<{ small?: boolean }>`
  ${(p) =>
    p.small &&
    `
    height: calc(var(--rhythm) *1.3);
    padding: 0 8px;
  `}
`;

export const [Textarea, textareaStyle] = makeStyle(
  "textarea",
  css`
    ${inputStyle}
    min-height: calc(var(--rhythm) *2);
    max-height: inherit;
  `
);

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--rhythm-px);
  margin-bottom: var(--rhythm-px);

  &.noBottom {
    margin-bottom: 0;
  }
  &.noTop {
    margin-top: 0;
  }
  &.isDisabled {
    opacity: 0.35;
    cursor: not-allowed;
    ${Input}, textarea {
      opacity: 1;
    }
  }
  &.large {
    margin-top: calc(var(--rhythm) * 2);
    margin-bottom: calc(var(--rhythm) * 2);
  }
  &.center {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Tag = styled(TxtSmall2)`
  border: solid 2px;
  border-radius: 3px;
  display: flex;
  padding: 0 calc(var(--body-size) * 0.5);
  padding-top: 2px;
  align-items: center;
  height: var(--rhythm);
  display: inline-block;
  letter-spacing: 0.25px;

  &.positive {
    border-color: var(--positive-color);
    color: var(--positive-color);
    .textWithGlyph {
      color: var(--positive-color);
      &:before {
        background-color: var(--positive-color);
      }
    }
  }

  &.negative {
    border-color: var(--negative-color);
    color: var(--negative-color);
    .textWithGlyph {
      color: var(--negative-color);
      &:before {
        background-color: var(--negative-color);
      }
    }
  }

  &.primaryColor {
    border-color: var(--primary-color);
    color: var(--primary-color);
    .textWithGlyph {
      color: var(--primary-color);
      &:before {
        background-color: var(--primary-color);
      }
    }
  }
`;

export const Label = styled(TxtRegular)`
  display: block;
  ${txtRegularMedium}
  margin-top: 0;
  padding-bottom: calc(var(--rhythm) * 0.45);

  &.tight {
    margin-top: -2px;
    padding-bottom: 2px;
  }

  &.noBottom {
    padding-bottom: 0;
  }

  &.withInfo {
    display: flex;
    align-items: center;
  }

  &.withHelper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.thin {
    font-weight: 400;
  }
`;

export const InlineError = styled(TxtSmall1)`
  background-color: var(--negative-color-10p);
  border-radius: var(--border-radius);
  padding: calc(var(--rhythm) * 0.5);
  padding-bottom: calc(var(--rhythm) * 0.5 + 2px);
  color: var(--negative-color);
  margin-top: calc(var(--rhythm) * 0.5);

  ${A} {
    color: var(--negative-color);
    border-bottom-color: var(--negative-color-60p);
  }

  strong {
    display: block;
    ${txtRegularBold}
  }

  &.withP {
    font-weight: normal;
  }

  &.withBottomMargin {
    margin-bottom: calc(var(--rhythm) * 1);
  }

  &.minimal {
    margin: 0;
    padding-top: calc(var(--rhythm) * 0.2);
    padding-bottom: calc(var(--rhythm) * 0.2 + 2px);
  }

  &.centered {
    text-align: center;
  }

  & > p {
    margin-bottom: calc(var(--rhythm) * 0.5);

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const InlineInfo = styled.aside`
  position: relative;
  background-color: var(--neutral-color-D);
  border-radius: var(--border-radius);
  margin-bottom: calc(var(--rhythm) * 1);
  margin-top: calc(var(--rhythm) * 0.5);

  strong {
    display: block;
    ${txtRegularBold}
  }
  p,
  &.small {
    ${txtSmall1Style}
    font-weight: normal;
  }
  &,
  &.small {
    padding: calc(var(--rhythm) * 0.5) calc(var(--body-size) * 1);
    padding-bottom: calc(var(--rhythm) * 0.5 + 2px);
  }
  &.muted {
    color: var(--neutral-color-A);
  }
  &.onGrey {
    background-color: var(--neutral-color-C);
  }
  &.large {
    padding: calc(var(--rhythm) * 1) calc(var(--body-size) * 1.75);
    padding-top: calc(var(--rhythm) * 0.85);
  }
`;

export const NoWrap = styled.span`
  white-space: nowrap;
`;

export const Strong = styled.strong`
  ${txtRegularBold}
`;

export const Hr = styled.hr`
  margin: calc(var(--rhythm) * 1) 0;
  margin-top: calc(var(--rhythm) * 2);
  border: none;
  border-top: 2px solid var(--border-color);

  &.addBottom {
    margin-bottom: calc(var(--rhythm) * 2.5);
  }
`;

export const CenteredCont = styled.section`
  max-width: calc(var(--body-size) * 84);
  margin: 0 auto;
  &.mini {
    max-width: calc(var(--body-size) * 46);
  }
`;

export const FullWidthCont = styled.section<{ maxSidebarWidth?: number }>`
  position: relative;
  z-index: 1;
  max-width: ${(p) =>
    p.maxSidebarWidth ? `${p.maxSidebarWidth}px` : MAX_SIDEBAR_WIDTH};
  min-width: 460px;
  width: 45%;
  padding: calc(var(--rhythm) * 3) ${SIDE_PADDING_DESKTOP};

  &.prominent {
    max-width: 800px;
    width: 55%;
  }

  &.wide {
    width: 100%;
    max-width: 100%;
  }
  &.center {
    width: auto;
    margin: 0 auto;
    ${TxtLarge3}.center {
      text-align: center;
    }
  }

  &.withFooter {
    margin-bottom: calc(var(--rhythm) * 4); /* accommodate footer */
  }
`;
