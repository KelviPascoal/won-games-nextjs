import { screen } from '@testing-library/react';
import { theme } from 'styles/theme';
import { render } from 'utils/renderUtils';
import { GameCard, GameCardProps } from '.';

const props: GameCardProps = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/project-winter.jpg',
  price: 'R$ 235,00'
};

describe('<GameCard>', () => {
  it('should be render a GameCard basic', () => {
    render(<GameCard {...props}></GameCard>);

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render price in label', () => {
    render(<GameCard {...props}></GameCard>);

    const price = screen.getByText('R$ 235,00');

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
  });

  it('should render a line-through in price when promotional', () => {
    render(<GameCard {...props} promotionalPrice="R$ 200,00" />);

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      textDecoration: 'line-through'
    });

    expect(screen.getByText('R$ 200,00')).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });
});
