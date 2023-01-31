import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'One Punch', 'Dragon Ball' ] );

    const onAddCategory = ( newCategory ) =>{

        if( categories.includes(newCategory) ) return;

        // console.log( newCategory );
        // setCategories( cat => [...cat, 'One Piece'] );
        setCategories( [...categories, newCategory ]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory  
                // setCategories={ setCategories  }
                OnNewCategory={ value => onAddCategory(value) }
            />
            
            {/* Listado de Gifs */}
            <ol>
                { categories.map( category => {
                    return <li key={ category } >{ category }</li>
                } ) }
  
            </ol>

            {/* Gif item */}
        </>
    )
};
