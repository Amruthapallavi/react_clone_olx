import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { AuthContext } from '../../store/Context';

const Create = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    if (!image) {
      alert('Please select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('userId', user?.uid);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        console.log('Image uploaded successfully:', data.fileUrl);
        alert('Product created successfully!');
      } else {
        console.error('Upload failed:', data.message);
        alert('Failed to upload product.');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading product.');
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form>
          <label htmlFor="name">Name</label>
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
          />
          <label htmlFor="category">Category</label>
          <input
            className="input"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
            name="category"
          />
          <label htmlFor="price">Price</label>
          <input
            className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="price"
            name="price"
          />
        </form>
        <img
          alt="Preview"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ''}
        />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={handleSubmit} className="uploadBtn">
          Upload and Submit
        </button>
      </div>
    </Fragment>
  );
};

export default Create;
