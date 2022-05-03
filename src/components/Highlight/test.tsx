import { screen } from '@testing-library/react';
import { render } from 'utils/renderUtils';
import { Highlight, HighlightProps } from '.';
import * as S from './styles';

const props: HighlightProps = {
  title: 'Heading 1',
  subtitle: 'heading 2',
  buttonLabel: 'Buy now',
  buttonLink: 'buy-now',
  backgroundImage: '/img/BackgroundHighlight.svg'
};
describe('<Highlight>', () => {
  it('should be render a Highlight basic', () => {
    render(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute(
      'href',
      'buy-now'
    );
  });

  it('should render background image', () => {
    const { container } = render(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    });
  });

  it('should render float image', () => {
    render(<Highlight {...props} floatImage="/float-image.png" />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    );
  });

  it('should render align right by default', () => {
    const { container } = render(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatimage content'"
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    });
  });

  it('should render align left by default', () => {
    const { container } = render(<Highlight {...props} alignment="left" />);

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatimage'"
    );

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    });
  });
});
