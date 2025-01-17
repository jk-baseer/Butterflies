/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import Link from "next/link";
import { useSelector } from 'react-redux';
import { authSelector } from '../../store/feature/authSlice';
import { useRouter } from 'next/dist/client/router';


const StoreButton = () => {
    const router = useRouter()
    const { login } = useSelector(authSelector)
    
    return (
		<Link
			href={login ? "/stores/my-store?page=1" : "/sign-in"}
			passHref={true}
		>
			<div className="cursor-pointer">
				<svg
					width="26"
					height="26"
					viewBox="0 0 20 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					fill={
						router.pathname ===
						"/stores/my-store"
							? "var( --primary_color)"
							: "#959393"
					}
				>
					<path
 						d="M19.546 3.93789L17.4386 0.498047C17.2502 0.189258 16.9158 0 16.5586 0H3.44014C3.08296 0 2.7485 0.189258 2.56017 0.498047L0.452772 3.93789C-0.63502 5.71426 0.329381 8.18457 2.36209 8.4668C2.50821 8.48672 2.65758 8.49668 2.80695 8.49668C3.7681 8.49668 4.61885 8.06504 5.20334 7.39766C5.78782 8.06504 6.64182 8.49668 7.59973 8.49668C8.56088 8.49668 9.41163 8.06504 9.99612 7.39766C10.5806 8.06504 11.4346 8.49668 12.3925 8.49668C13.3537 8.49668 14.2044 8.06504 14.7889 7.39766C15.3766 8.06504 16.2274 8.49668 17.1853 8.49668C17.3379 8.49668 17.484 8.48672 17.6301 8.4668C19.6693 8.18789 20.637 5.71758 19.546 3.93789ZM17.1918 9.5625C16.8671 9.5625 16.5456 9.5127 16.2339 9.43633V12.75H3.76486V9.43633C3.45313 9.50938 3.13166 9.5625 2.80695 9.5625C2.61212 9.5625 2.41404 9.54922 2.22246 9.52266C2.04062 9.49609 1.86203 9.45293 1.68993 9.40313V15.9375C1.68993 16.5252 2.15427 17 2.72902 17H17.2762C17.851 17 18.3153 16.5252 18.3153 15.9375V9.40313C18.1399 9.45625 17.9646 9.49941 17.7828 9.52266C17.5847 9.54922 17.3899 9.5625 17.1918 9.5625Z"
					/>
				</svg>
			</div>
		</Link>
    );
};

export default StoreButton;