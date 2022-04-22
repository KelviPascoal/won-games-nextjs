import 'jest-styled-components';
import { screen } from '@testing-library/react';
import { theme } from 'styles/theme';
import { render } from 'utils/renderUtils';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading>Won Games</Heading>);
    expect(
      screen.getByRole('heading', { name: /Won Games/i })
    ).toBeInTheDocument();
  });

  it('should render a white heading by default', () => {
    render(<Heading>Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: theme.colors.white
    });
  });

  it('should render a black heading', () => {
    render(<Heading textColor="black">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: theme.colors.black
    });
  });

  it('should render a head with a primary color line on the left side', () => {
    render(<Heading lineDirection="left">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.primary}`
    });
  });

  it('should render a head with a secondary color line on the left side', () => {
    render(
      <Heading lineDirection="left" lineColor="secondary">
        Won Games
      </Heading>
    );

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      'border-left': `0.7rem solid ${theme.colors.secondary}`
    });
  });

  it('should render a head with a primary color line at the bottom side', () => {
    render(<Heading lineDirection="bottom">Won Games</Heading>);

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      `0.4rem solid ${theme.colors.primary}`,
      {
        modifier: '::after'
      }
    );
  });

  it('should render a head with a secondary color line at the bottom side', () => {
    render(
      <Heading lineDirection="bottom" lineColor="secondary">
        Won Games
      </Heading>
    );

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'border-bottom',
      `0.4rem solid ${theme.colors.secondary}`,
      {
        modifier: '::after'
      }
    );
  });

  it('should render a heading with a small size', () => {
    render(<Heading fontSize="small">Won Games</Heading>);
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    });

    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    );
  });
});
