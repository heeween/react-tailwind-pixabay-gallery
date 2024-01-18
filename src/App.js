import React, { useState } from "react";
import ImageSearch from "./components/ImageSearch";
import ImageCard from "./components/ImageCard";

function App() {
  const [term, setTerm] = useState('');

  return (
    <div className="">
      <ImageSearch searchText={text => setTerm(text)}></ImageSearch>
      <ImageCard term={term}></ImageCard>
    </div>

  );
}

export default App;
