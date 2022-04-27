import { screen } from '@testing-library/react';
import { Ribbon } from 'components/Ribbon';
import { render } from 'utils/renderUtils';
import { Banner } from '.';

const props = {
  img: '/img/banner.svg',
  title: 'test banner title',
  subtitle: 'test banner subtitle',
  buttonLabel: 'test banner button label',
  buttonLink: '/test-banner-button-link'
};

describe('<Banner>', () => {
  it('should be render a Banner basic', () => {
    render(<Banner {...props} />);

    expect(
      screen.getByRole('heading', { name: /test banner title/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /test banner subtitle/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /test banner button label/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /test banner button label/i })
    ).toHaveAttribute('href', '/test-banner-button-link');

    expect(
      screen.getByRole('img', { name: /test banner title/i })
    ).toBeInTheDocument();
  });

  it('should render a Ribbon', () => {
    render(
      <Banner
        {...props}
        ribbonText="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );

    const ribbon = screen.getByText(/My Ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
