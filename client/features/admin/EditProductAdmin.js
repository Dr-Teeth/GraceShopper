import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editProductAsync } from "../products/AllProductsSlice";

const EditProductAdmin = () => {
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
    const updatedFields = {};
    if (name) updatedFields.name = name;
    if (description) updatedFields.description = description;
    if (price) updatedFields.price = price;
    if (quantity) updatedFields.quantity = quantity;
    if (imageUrl) updatedFields.imageUrl = imageUrl;
    dispatch(editProductAsync({ id, ...updatedFields }));
    navigate(`/dashboard`);
  };

  return (
    <div className="epa">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Product Name: </label>
        <input
          text="text"
          name="name"
          placeholder="Name goes here"
          value={name}
          onChange={(e) => editName(e.target.value)}
        />

        <label htmlFor="description">Description: </label>
        <input
          text="text"
          name="description"
          placeholder="Description..."
          value={description}
          onChange={(e) => editDescription(e.target.value)}
        />

        <label htmlFor="price">Unit Price: </label>
        <input
          text="number"
          name="price"
          placeholder="0 - 999999"
          value={price}
          onChange={(e) => editPrice(e.target.value)}
        />

        <label htmlFor="quantity">Quantity: </label>
        <input
          text="number"
          name="quantity"
          placeholder="0"
          value={quantity}
          onChange={(e) => editQuantity(e.target.value)}
        />

        <label htmlFor="imageUrl">Image URL: </label>
        <input
          imageUrl
          name="imageUrl"
          placeholder="www.imageurl.com"
          value={imageUrl}
          onChange={(e) => editImageUrl(e.target.value)}
        />
        <button
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

export default EditProductAdmin;
