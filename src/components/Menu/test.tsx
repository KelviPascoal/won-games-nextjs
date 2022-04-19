import { fireEvent, screen } from '@testing-library/react';
import { render } from 'utils/renderUtils';
import { Menu } from '.';

describe('<Menu>', () => {
  it('should be render a Menu basic', () => {
    render(<Menu />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Open shopping cart/i)).toBeInTheDocument();
  });

  it('should handle the open/close mobile menu', () => {
    render(<Menu />);

    // Selecionar o nosso MenuFull
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });

    // Verificar se o menu ta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });

    // Clicar no botão de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });

    // Clicar no botão de fechar o menu e verificar se ele fechou
    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });
});
