import { screen } from '@testing-library/react';
import { render } from 'utils/renderUtils';
import { Banner } from '.';

describe('<Banner>', () => {
  it('should be render a Banner basic', () => {
    render(
      <Banner
        img="/img/banner.svg"
        title="test banner title"
        subtitle="test banner subtitle"
        buttonLabel="test banner button label"
        buttonLink="/test-banner-button-link"
      />
    );

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
});
