import { BannerProps } from 'components/Banner';
import { BannerSlider } from 'components/BannerSlider';
import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { GameCardProps } from 'components/GameCard';
import { GameCardSlider } from 'components/GameCardSlider';
import { Heading } from 'components/Heading';
import { Highlight, HighlightProps } from 'components/Highlight';
import { Menu } from 'components/Menu';
import * as S from './styles';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighligth: HighlightProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighligth: HighlightProps;
};

export function Home({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) {
  return (
    <section>
      <Container>
        <Menu />
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineDirection="left" lineColor="secondary">
            News
          </Heading>

          <GameCardSlider items={newGames} color="black" />
        </Container>
      </S.SectionNews>
      <Container>
        <Heading lineDirection="left" lineColor="secondary">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </Container>

      <Container>
        <Heading lineDirection="left" lineColor="secondary">
          Upcomming
        </Heading>

        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} />
      </Container>

      <Container>
        <Heading lineDirection="left" lineColor="secondary">
          Free Games
        </Heading>

        <Highlight {...freeHighligth} />
        <GameCardSlider items={freeGames} />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  );
}
