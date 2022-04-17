import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { render } from '../../utils/renderUtils';
import 'jest-styled-components';
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

  it('should render a normal logo when size is default', () => {
    render(<Logo />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });

  it('should render a bigger logo', () => {
    render(<Logo size="large" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });

  it('should render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      { media: '(max-width: 768px)' }
    );
  });
});
