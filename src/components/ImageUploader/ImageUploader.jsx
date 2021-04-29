import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const App = props => {
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };
  return (
    <ImageUploader
      {...props}
      withIcon={false}
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
      withPreview={true}
      singleImage={true}
      withLabel={false}
      buttonText="Up your Dog Photo"
      className='Dog'
      accept='accept=image/Dog'
      name='Dog'

      style={{ 
        maxWidth: '1000px', 
        margin: '20px auto', 
        backgroundColor: 'gold',
      }}

      buttonStyles={{
        backgroundColor: 'blue',
      }}

      labelStyles={{
        backgroundColor: 'blue',
      }}

      fileContainerStyle={{
        backgroundColor: 'pink'
      }}
                             
      
    />
  );
};

export default App;



/*
      style={{
        width: 700,
        height: 500,
        background: 'gold'
      }}
  */