import React, { useState } from "react"
const ImageItem = ({ element }) => {
    const tags = element.tags.split(',')
    console.log(tags);
    return (
        <div className="h-[450px] shadow-lg rounded-lg max-w-[400px] mx-auto">
            <img src={element.webformatURL} className="w-full h-[200px] object-cover rounded-t-lg overflow-hidden" alt="" />
            <div className="px-6 py-4 h-16 w-full">
                <div className="text-purple-500 w-full font-bold text-xl mb-2 overflow-hidden text-ellipsis whitespace-nowrap">Photo by Photo by Photo by {element.user}</div>
                <ul>
                    <li>
                        <strong>Views:</strong>{element.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong> {element.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong> {element.likes}
                    </li>
                </ul>
                <div className="mt-3 ">
                    {tags.map((tag, index) =>
                        <span className=" text-sm px-2 py-1.5 mr-2 my-1 bg-slate-200 rounded-xl inline-block" key={index}>{tag}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ImageItem;