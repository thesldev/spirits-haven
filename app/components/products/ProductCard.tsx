"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const productRating = data.reviews.reduce((acc:number, item:any) => item.rating + acc, 0)/ data.reviews.length

  return (
    <div className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm mt-8">
      <div className="flex flex-col items-center w-full gap-1">
        {/* card iamge */}
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            fill
            src={data.images && data.images[0]?.image}
            alt={data.name}
            className="w-full h-full object-contain"
          />
        </div>
        {/* product anme */}
        <div className="mt-4">
            {truncateText(data.name)}
        </div>
        {/* ratings */}
        <div>
            <Rating value={productRating} readOnly/>
        </div>
        {/* reviews */}
        <div className="">{data.reviews.length} reviews</div>
        {/* price */}
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
