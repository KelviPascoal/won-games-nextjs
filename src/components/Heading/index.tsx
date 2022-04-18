import { ReactNode } from 'react';
import * as S from './styles';

export type HeadingProps = {
  children: ReactNode;
  textColor?: 'white' | 'black';
  lineDirection?: 'left' | 'bottom';
  lineColor?: 'primary' | 'secondary';
};

export function Heading({
  children,
  lineColor = 'primary',
  lineDirection,
  textColor = 'white'
}: HeadingProps) {
  return (
    <S.Wrapper
      lineColor={lineColor}
      lineDirection={lineDirection}
      textColor={textColor}
    >
      {children}
    </S.Wrapper>
  );
}
