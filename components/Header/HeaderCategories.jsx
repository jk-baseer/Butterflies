import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import tradly from 'tradly';
import { authSelector } from '../../store/feature/authSlice';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const HeaderCategories = () => {
  const [categories, setCategories] = useState(null);

  const { auth_key } = useSelector(authSelector);
  const router =useRouter()

  useEffect(() => {
    const width = window.innerWidth;
    var calc;
    tradly.app
      .getCategory({
        bodyParam: { parent: 0, type: 'listings' },
        authKey: auth_key,
      })
      .then((res) => {
        if (!res.error) {
          const response = res?.data?.categories;
          if (response.length > 0) {
            if (response.length < 9) {
              setCategories(response);
            } else {
              var sliceLength;
              if (width < 1300) {
                sliceLength = 7;
              }
              if (width < 1000) {
                sliceLength = 6;
              }
              if (width < 900) {
                sliceLength = 5;
              }

              let updatedCategories = response.slice(0, sliceLength || 10);
              let moreCategory = {
                id: Math.random(),
                name: 'More',
                image_path: '',
                has_sub_category: true,
                link: 'all-categories',
              };
              updatedCategories.push(moreCategory);
              setCategories(updatedCategories);
            }
          }
        }
      });
  }, [0]);

  return (
    <div>
      <div className=" flex items-center">
        {categories?.map((item) => {
          const query =
            item.name !== 'More'
              ? {
                  name: item.name.replace(/\s/g, '-'),
                  id: item.id,
                  page: 1,
                }
              : '';

          return (
            <Link
              key={Math.random()}
              href={{
                pathname: `${
                  item.name !== 'More' ? '/category/[name]' : '/category'
                }`,
                query,
              }}
              passHref
            >
              <div className="">
                <p
                  className={[
                    ' min-h-[44px] px-3 flex justify-center items-center cursor-pointer transition duration-300 hover:text-primary ',
                    router?.query?.name === item.name.replace(/\s/g, '-')
                      ? 'text-primary'
                      : '',
                  ].join(' ')}
                >
                  {item.name === 'More'
                    ? item.name
                    : item.name.length > 8
                    ? item.name.substring(0, 7)+'.'
                    : item.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderCategories;
