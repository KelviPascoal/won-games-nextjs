import { ReactNode } from 'react';
import * as S from './styles';

export type HeadingProps = {
  children: ReactNode;
  textColor?: 'white' | 'black';
  lineDirection?: 'left' | 'bottom';
  lineColor?: 'primary' | 'secondary';
  fontSize?: 'small' | 'medium';
};

export function Heading({
  children,
  lineColor = 'primary',
  lineDirection,
  textColor = 'white',
  fontSize = 'medium'
}: HeadingProps) {
  return (
    <S.Wrapper
      lineColor={lineColor}
      lineDirection={lineDirection}
      textColor={textColor}
      fontSize={fontSize}
    >
      {children}
    </S.Wrapper>
  );
}
