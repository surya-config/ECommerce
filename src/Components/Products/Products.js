import React from "react";
import "./Products.css";
import Product from "./Product/Product";

function Products() {
  return (
    <div className="products">
      <Product
        id="1"
        title="Nike Air Jordan"
        price="150"
        imageSrc="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      />
      <Product
        id="2"
        title="Nike Air Jordan"
        price="110"
        imageSrc="https://images.unsplash.com/photo-1578282651938-cb2d566746ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
      />
      <Product
        id="3"
        title="Vans Old Skool"
        price="60"
        imageSrc="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=686&q=80"
      />

      <Product
        id="4"
        title="Nike Air Jordan"
        price="120"
        imageSrc="https://images.unsplash.com/photo-1534437088728-1e8db7fcef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80"
      />

      <Product
        id="5"
        title="Nike Air Jordan"
        price="127"
        imageSrc="https://images.unsplash.com/photo-1526765992122-6abcb1e0f4fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
      />
    </div>
  );
}

export default Products;
