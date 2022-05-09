import { theme } from 'styles/theme';
import { render } from 'utils/renderUtils';
import { Container } from '.';

describe('<Container>', () => {
  it('should render the Container', () => {
    const { container } = render(
      <Container>
        <span>Won Games</span>
      </Container>
    );

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    );

    expect(container.firstChild).toHaveStyle({
      margin: '0 auto',
      paddingLeft: 'calc(3.2rem/ 2)',
      paddingRight: 'calc(3.2rem/ 2)'
    });

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 130rem;
        margin: 0 auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      >
        <span>
          Won Games
        </span>
      </div>
    `);
  });
});
