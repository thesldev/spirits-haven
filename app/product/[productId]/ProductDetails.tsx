"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  console.log(cartProduct);

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  // select image color -function
  const handleColorSelect = useCallback((value: SelectedImgType) => {
    setCartProduct((prev) => {
      return { ...prev, selectedImg: value };
    });
  }, []);

  //select quantity functions
  const handleQuantityIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQuantityDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* display product images */}
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />

      {/* display product details and add to cart function */}
      <div className="flex flex-col gap-1 text-slate-500 text-sm">
        {/* display product titles */}
        <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
        {/* display product ratings and reviews */}
        <div className="flex items-center gap-2">
          <Rating value={productRating} readOnly />
          <div>{product.reviews.length} reviews</div>
        </div>
        <Horizontal />
        {/* display product description */}
        <div className="text-justify">{product.description}</div>
        <Horizontal />
        {/* display category */}
        <div>
          <span className="font-semibold">CATEGORY:</span>
          {product.category}
        </div>
        {/* display the brand */}
        <div>
          <span className="font-semibold">BRAND:</span>
          {product.brand}
        </div>
        {/* display stock availability */}
        <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>
          {product.inStock ? "In stock" : "Out of stock"}
        </div>
        <Horizontal />
        {/* set color */}
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        {/* display quantity */}
        <SetQuantity
          cartProduct={cartProduct}
          handleQuantityIncrease={handleQuantityIncrease}
          handleQuantityDecrease={handleQuantityDecrease}
        />
        <Horizontal />
        {/* add to cart button */}
        <div className="max-w-[300px]">
          <Button lable="Add To Cart" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;