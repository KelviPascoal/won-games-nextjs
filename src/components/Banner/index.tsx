import Button from 'components/Button';
import { Ribbon } from 'components/Ribbon';
import * as S from './styles';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbonText?: string;
  ribbonSize?: 'small' | 'normal';
  ribbonColor?: 'primary' | 'secondary';
};

export function Banner({
  buttonLabel,
  buttonLink,
  img,
  subtitle,
  title,
  ribbonColor,
  ribbonSize,
  ribbonText
}: BannerProps) {
  return (
    <>
      <S.Wrapper>
        <S.Image src={img} role="img" aria-label={title}></S.Image>

        <S.Caption>
          <S.Title>{title}</S.Title>
          <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
          <Button as="a" href={buttonLink} size="large">
            {buttonLabel}
          </Button>
        </S.Caption>
        {!!ribbonText && (
          <Ribbon color={ribbonColor} size={ribbonSize}>
            {ribbonText}
          </Ribbon>
        )}
      </S.Wrapper>
    </>
  );
}
