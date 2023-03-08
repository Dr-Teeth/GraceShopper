import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../products/AllProductsSlice";

const AddProductAdmin = () => {
  const [name, editName] = useState("");
  const [description, editDescription] = useState("");
  const [price, editPrice] = useState(Number);
  const [quantity, editQuantity] = useState(Number);
  const [imageUrl, editImageUrl] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProductAsync({ id, name, description, price, quantity, imageUrl })
    );
    navigate(`/dashboard`);
  };

  return (
    <div className="AddProAdmin">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name: </label>
        <input
          type="text"
          name="name"
          placeholder="Name goes here"
          value={name}
          onChange={(e) => editName(e.target.value)}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          placeholder="Description..."
          value={description}
          onChange={(e) => editDescription(e.target.value)}
        />

        <label htmlFor="price">Unit Price: </label>
        <input
          type="number"
          name="price"
          placeholder="0 - 999999"
          value={price}
          onChange={(e) => editPrice(e.target.value)}
        />

        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          name="quantity"
          placeholder="0"
          value={quantity}
          onChange={(e) => editQuantity(e.target.value)}
        />

        <label htmlFor="imageUrl">Image URL: </label>
        <input
          type="imageUrl"
          name="imageUrl"
          placeholder="www.imageurl.com"
          value={imageUrl}
          onChange={(e) => editImageUrl(e.target.value)}
        />
        <button
          className="saveChanges"
          type="submit"
          disabled={
            !name && !description && !price && !quantity && !imageUrl
              ? true
              : false
          }
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AddProductAdmin;
