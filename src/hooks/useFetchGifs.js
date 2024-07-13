import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then(setImages);
        setIsLoading(false);
    }, [category]);

    return {
        images,
        isLoading
    }
}
