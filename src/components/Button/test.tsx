import { screen } from '@testing-library/react';
import { AddShoppingCart } from 'styled-icons/material';
import { theme } from 'styles/theme';
import { render } from 'utils/renderUtils';
import userEvent from '@testing-library/user-event';

import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    render(<Button>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      'font-size': theme.font.sizes.small,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
    });
  });

  it('should render the small size', () => {
    render(<Button size="small">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': theme.font.sizes.xsmall
    });
  });

  it('should render the large size', () => {
    render(<Button size="large">Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': theme.font.sizes.medium,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
    });
  });

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy now</Button>);

    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    });
  });

  it('should render an icon version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now</Button>
    );

    expect(screen.getByText(/buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('must have a function to be clicked', () => {
    const functionTest = jest.fn();
    render(<Button onClick={functionTest}>Buy now</Button>);
    const button = screen.getByRole('button', { name: /Buy now/i });

    userEvent.click(button);

    expect(functionTest).toBeCalled();
  });

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    );

    expect(screen.getByRole('link', { name: /Buy now/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });
});
