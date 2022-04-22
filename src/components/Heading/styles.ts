import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps } from '.';

type WrapperProps = Omit<HeadingProps, 'children'>;
type LineColor = 'primary' | 'secondary';

const wrapperModifiers = {
  left: (theme: DefaultTheme, lineColor: LineColor) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${!!lineColor && theme.colors[lineColor]};
  `,

  bottom: (theme: DefaultTheme, lineColor: LineColor) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.4rem solid ${!!lineColor && theme.colors[lineColor]};
      background-color: ${theme.colors[lineColor]};
    }
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `
};

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, lineDirection, textColor, lineColor, fontSize }) => css`
    color: ${!!textColor && theme.colors[textColor]};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
    ${!!lineDirection &&
    !!lineColor &&
    wrapperModifiers[lineDirection](theme, lineColor)};

    ${!!fontSize && wrapperModifiers[fontSize](theme)}
  `}
`;
