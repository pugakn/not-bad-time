"use client";

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

export const GlobalStyles = createGlobalStyle`
  :root {
    /************************
    *  GLOBAL MEASUREMENTS  *
    ************************/
    --body-size: 15.5px;
    --rhythm: 24px;
    --rhythm-nounits: 1.548387;
    --border-radius: 25px;
    --border-radius-small: 8px;
    --body-font: "Inter", sans-serif;
  }

  *::selection {
    background: rgba(0,0,0,0);
  }

  html, body {
    font-family: var(--body-font);
    font-size: var(--body-size);
    line-height: var(--rhythm-nounits);
    color: black;
    background-color: white;
    -webkit-font-smoothing: antialiased;
    max-width: 100vw;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
  }
`;

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
    font-family: var(--space-mono), monospace;
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
    font-family: var(--space-mono), monospace;
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
    font-family: var(--space-mono), monospace;
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
  color: ${(p) => p.theme.colors.bg};
  background-color: ${(p) => p.theme.colors.primary};
  border: none;
  .textWithGlyph {
    color: ${(p) => p.theme.colors.bg};
  }
  .textWithGlyph:before {
    background-color: ${(p) => p.theme.colors.bg};
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
    ${(p) => p.theme.colors.primary} 30%,
    ${(p) => p.theme.colors.secondary},
    ${(p) => p.theme.colors.primary}
  );
  background-size: 200% 100%;
  animation: ${heroButton} 25s linear infinite;
  color: ${(p) => p.theme.colors.bg};
  .textWithGlyph {
    color: ${(p) => p.theme.colors.bg};
  }
  .textWithGlyph:before {
    background-color: ${(p) => p.theme.colors.bg};
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

export const Button = styled.button<{
  $primary?: boolean;
  $small?: boolean;
  $hero?: boolean;
}>`
  ${pressableStyle}
  ${txtRegularBold}
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  font-family: var(--space-mono), monospace;
  border-radius: var(--border-radius);
  height: calc(var(--rhythm) * 2);
  padding: 0 calc(var(--body-size) * 1.5);
  white-space: nowrap;
  color: var(--buttonText, var(--default-color));
  background: transparent;
  border: 2px solid var(--buttonText, var(--default-color));
  text-transform: uppercase;

  &:disabled,
  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

  ${(p) => p.$primary && primaryButtonStyle}

  ${(p) =>
    p.$small &&
    css`
      height: calc(var(--rhythm) * 1.25 - 2px);
      padding: 0 calc(var(--body-size) * 0.6);
      ${txtSmall1Style}
      ${txtRegularMedium}
    `}

  ${(p) => p.$hero && heroButtonStyle}

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
    padding: calc(var(--rhythm) * 0.666667) 18px calc(var(--rhythm) * 0.666667);
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

  &.row {
    flex-direction: row;
    align-items: center;
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
  font-family: var(--space-mono), monospace;
  padding-bottom: calc(var(--rhythm) * 0.45);

  &.big {
    font-size: 1.2rem;
    font-weight: bold;
  }

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

export const Hr = styled.hr`
  margin: calc(var(--rhythm) * 1) 0;
  margin-top: calc(var(--rhythm) * 2);
  border: none;
  border-top: 2px solid var(--border-color);

  &.addBottom {
    margin-bottom: calc(var(--rhythm) * 2.5);
  }
`;

export const PageCont = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/schedule/bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PageContOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.66);
`;

export const Logo = styled.img`
  z-index: 1;
  width: 10rem;
  height: 2rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
  filter: invert(1);
  @media (max-width: 768px) {
    top: 1rem;
    left: calc(50vw - 5rem);
  }
`;
