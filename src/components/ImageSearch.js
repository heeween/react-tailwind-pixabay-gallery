import React, { useState } from "react";

const ImageSearch = ({searchText}) => {
    const [text, setText] = useState('');
    const onSubmit = (e) => {
        searchText(text)
    }
    return (
        <div className="my-10 mx-auto max-w-sm">
            <div className="flex items-center border-b-2 border-teal-400 py-2">
                <input onChange={e => setText(e.target.value)} className="mr-3 py-1 px-2 leading-tight text-gray-700 w-full focus:outline-none" type="text" placeholder="Search Imag Term..." />
                <button onClick={onSubmit} className="bg-teal-500 hover:bg-teal-700 text-smhover:bg-teal-700 text-white py-2 px-3 rounded">
                    Search
                </button>
            </div>
        </div>
    );
}

export default ImageSearch;