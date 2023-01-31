import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'One Punch' ] );

    const onAddCategory = ( newCategory ) =>{

        if( categories.includes(newCategory) ) return;

        // console.log( newCategory );
        // setCategories( cat => [...cat, 'One Piece'] );
        setCategories( [...categories, newCategory ]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory  
                OnNewCategory={ value => onAddCategory(value) }
            />
            
 
            { 
                categories.map( category => (
                    <GifGrid  key={ category } category={ category } />
                )) 
            }
  


        </>
    )
};
