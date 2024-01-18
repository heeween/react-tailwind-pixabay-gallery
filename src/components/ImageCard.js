import React, { useState,useEffect } from "react"
import ImageItem from "./ImageItem";
const ImageCard = ({term}) => {
    const [images, setImages] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    console.log(term);
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
          .then(res => res.json())
          .then(data => {
            setImages(data.hits);
            setIsLoading(false);
          })
          .catch(err => console.log(err));
      }, [term]);
    return (
        <div className="grid grid-cols-3 gap-6 px-5">
            {images.map((element => 
                <ImageItem key={element.id} element={element}></ImageItem>
            ))}
        </div>
    )
}

export default ImageCard;