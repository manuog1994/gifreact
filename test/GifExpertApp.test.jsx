import { GifExpertApp } from '../src/GifExpertApp';
import { render, screen } from '@testing-library/react';

describe('Probando el <GifExpertApp />', () => { 

    test('debe mostrarse correctamente', () => { 
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar una lista de categorias', () => { 
        const categories = ['One Punch'];
        render(<GifExpertApp  />);

        expect(categories.length).toBe(categories.length);
    });

    test('debe de dar anular la petición si el input esta vacio o es menor a 2', () => { 
        render(<GifExpertApp />);
        const input = screen.getByRole('form');
        
        expect(input.value).toBeFalsy();
        // screen.debug();
    })
})