import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('<Main />', () => {
  it('should be render Main', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    });
  });
});
