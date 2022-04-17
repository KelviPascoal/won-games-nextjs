import styled, { css } from 'styled-components';

import { LogoProps } from '.';

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color }) => css`
    color: ${!!color && theme.colors[color]};
  `}
`;
