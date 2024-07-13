import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Probar el componente <GifItem />', () => { 
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    test('Debe de coincidir con el snapshot', () => { 
        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el URL y el ALT de los props', () => {
        render(<GifItem title={title} url={url} />);

        // expect(screen.getByRole('img').src ).toBe(url);
        // expect(screen.getByRole('img').alt ).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe de mostrar el titulo en un <p>', () => {
        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    });
});