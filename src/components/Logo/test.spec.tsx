import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { render } from '../../utils/renderUtils';
import { Logo } from '.';

describe('<Logo>', () => {
  it('should render a white label by default', () => {
    render(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.white
    });
  });

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: theme.colors.black
    });
  });
});
