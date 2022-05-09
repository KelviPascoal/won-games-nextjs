import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { Heading } from 'components/Heading';
import { Menu } from 'components/Menu';

export function Home() {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineDirection="left" lineColor="secondary" textColor="black">
          News
        </Heading>
      </Container>
      <Container>
        <Heading lineDirection="left" lineColor="secondary">
          Most popular
        </Heading>
      </Container>

      <Container>
        <Heading lineDirection="left" lineColor="secondary">
          Upcomming
        </Heading>
      </Container>

      <Container>
        <Heading lineDirection="left" lineColor="secondary">
          Free Games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  );
}
