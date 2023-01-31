
import { GifItem } from "./GifItem";
import { useFetchGifts } from "../hooks/useFetchGifts";


export const GifGrid = ( { category }) => {

    const { images, isLoading } = useFetchGifts( category );


    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem  key={image.id} {...image }/>
                    ))
                }
 
            </div>
          
        </>
    )
}
