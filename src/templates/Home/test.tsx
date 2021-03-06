import { screen } from '@testing-library/react';
import { render } from 'utils/renderUtils';
import { Home } from '.';

describe('<Home>', () => {
  it('should render menu and footer', () => {
    render(<Home />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument();
  });

  it('should render the sections', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /upcomming/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument();
  });
});
