/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import tradly from 'tradly';
import { getThumbnailImage } from '../Constant/Constant';

const AccountCard = ({ item, follow }) => {
  return (
    <div className="w-full min-h-[166px] p-2 bg-[#FEFEFE] rounded-lg shadow-md">
      <div className=" rounded  overflow-hidden relative mx-auto  aspect-w-1 aspect-h-1">
        {item?.images?.length > 0 && (
          <Image
            src={getThumbnailImage(item.images[0])}
            alt={item.title}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <div className="mt-2 mb-2">
        <p className="w-full text-[#000000] font-semibold text-[14px] leading-4   ">
          {item.name.length > 15
            ? item.name.substring(0, 13) + '..'
            : item.name}
        </p>
      </div>
      <div className="flex justify-around items-center mb-2">
        <p className="w-full text-[#4F4F4F] font-medium text-[14px]   ">
          {item?.user?.first_name.length > 10
            ? item?.user?.first_name.substring(0, 8) + '..'
            : item?.user?.first_name}
        </p>
        <button
          className={[
            ' px-2 py-1 text-[10px] leading-3 items-center rounded-full border border-primary  ',
            item.following
              ? 'text-[#FFFFFF]  bg-primary'
              : 'text-primary   bg-transparent',
          ].join(' ')}
          onClick={() => follow(item.id, item.following)}
        >
          {item.following ? 'Following' : 'Follow'}
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
