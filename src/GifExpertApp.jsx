import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.find( category => category.toLowerCase() === newCategory.toLowerCase()) ) return;
        setCategories([ newCategory, ...categories ]);
        // categories.push( newCategory );
        //setCategories( [ ...categories, 'HunterXHunter' ] );
        // setCategories( cats => [ ...cats, 'HunterXHunter' ] );
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ onAddCategory }
            />

            {
                categories.map( (category) => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
}