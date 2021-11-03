import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from 'react-redux';

import logo from "../../assets/Images/SideMenubarImages/Tradly Logo.png";
import { useRouter } from "next/dist/client/router";
import { authSelector } from "../../store/feature/authSlice";

const SideMenubar = () => {
	const router = useRouter();
	const {login}=useSelector(authSelector)
console.log('====================================');
console.log(login);
console.log('====================================');
	return (
		<div className="  w-full ">
			<div className=" flex justify-center items-center py-9 cursor-pointer">
				{/* This is svg image, when you set this image from API connect in next config and set the height width */}
				<Link href="/" passHref={true}>
					<Image
						src={logo}
						height={40}
						alt="logo"
						className="cursor-pointer"
					/>
				</Link>
			</div>
			<Link href="/" passHref={true}>
				<div
					className={[
						"w-full h-12 flex    items-center  pl-7 cursor-pointer hover:bg-primary_light",
						router.pathname === "/"
							? "bg-primary_light"
							: "",
					].join(" ")}
				>
					<svg
						width="18"
						height="20"
						viewBox="0 0 18 21"
						fill={
							router.pathname === "/"
								? "#15B790"
								: "#959393"
						}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M17.0001 7.00001L11.0001 1.74001C10.4501 1.24805 9.73803 0.976074 9.00009 0.976074C8.26216 0.976074 7.55012 1.24805 7.00009 1.74001L1.00009 7.00001C0.682463 7.28408 0.428995 7.63256 0.256567 8.02225C0.0841385 8.41194 -0.00329256 8.83389 9.47941e-05 9.26001V18C9.47941e-05 18.7957 0.316165 19.5587 0.878775 20.1213C1.44138 20.6839 2.20445 21 3.00009 21H15.0001C15.7957 21 16.5588 20.6839 17.1214 20.1213C17.684 19.5587 18.0001 18.7957 18.0001 18V9.25001C18.0021 8.82557 17.9139 8.40555 17.7416 8.01769C17.5692 7.62983 17.3165 7.28296 17.0001 7.00001ZM11.0001 19H7.00009V14C7.00009 13.7348 7.10545 13.4804 7.29299 13.2929C7.48052 13.1054 7.73488 13 8.00009 13H10.0001C10.2653 13 10.5197 13.1054 10.7072 13.2929C10.8947 13.4804 11.0001 13.7348 11.0001 14V19ZM16.0001 18C16.0001 18.2652 15.8947 18.5196 15.7072 18.7071C15.5197 18.8946 15.2653 19 15.0001 19H13.0001V14C13.0001 13.2044 12.684 12.4413 12.1214 11.8787C11.5588 11.3161 10.7957 11 10.0001 11H8.00009C7.20444 11 6.44138 11.3161 5.87877 11.8787C5.31616 12.4413 5.00009 13.2044 5.00009 14V19H3.00009C2.73488 19 2.48052 18.8946 2.29299 18.7071C2.10545 18.5196 2.00009 18.2652 2.00009 18V9.25001C2.00027 9.10802 2.03069 8.9677 2.08931 8.83839C2.14794 8.70907 2.23343 8.59372 2.3401 8.50001L8.34009 3.25001C8.52258 3.08969 8.75719 3.00127 9.00009 3.00127C9.243 3.00127 9.47761 3.08969 9.66009 3.25001L15.6601 8.50001C15.7668 8.59372 15.8523 8.70907 15.9109 8.83839C15.9695 8.9677 15.9999 9.10802 16.0001 9.25001V18Z" />
					</svg>{" "}
					<p
						className={[
							" text-sm font-semibold   ml-5",
							router.pathname === "/"
								? "text-primary"
								: " text-secondary",
						].join(" ")}
					>
						Home
					</p>
				</div>
			</Link>
			<Link href="#" passHref={true}>
				<div
					className={[
						"w-full h-12 flex    items-center  pl-7",
						router.pathname === "/explore"
							? "bg-primary_light"
							: "",
					].join(" ")}
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 18 21"
						fill={
							router.pathname === "/explore"
								? "#15B790"
								: "#959393"
						}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM11 17.93V17C11 16.7348 10.8946 16.4804 10.7071 16.2929C10.5196 16.1054 10.2652 16 10 16C9.73479 16 9.48043 16.1054 9.2929 16.2929C9.10536 16.4804 9 16.7348 9 17V17.93C7.23998 17.7068 5.60408 16.9049 4.34959 15.6504C3.0951 14.3959 2.2932 12.76 2.07 11H3C3.26522 11 3.51957 10.8946 3.70711 10.7071C3.89465 10.5196 4 10.2652 4 10C4 9.73478 3.89465 9.48043 3.70711 9.29289C3.51957 9.10536 3.26522 9 3 9H2.07C2.2932 7.23998 3.0951 5.60408 4.34959 4.34959C5.60408 3.0951 7.23998 2.29319 9 2.07V3C9 3.26522 9.10536 3.51957 9.2929 3.70711C9.48043 3.89464 9.73479 4 10 4C10.2652 4 10.5196 3.89464 10.7071 3.70711C10.8946 3.51957 11 3.26522 11 3V2.07C12.76 2.29319 14.3959 3.0951 15.6504 4.34959C16.9049 5.60408 17.7068 7.23998 17.93 9H17C16.7348 9 16.4804 9.10536 16.2929 9.29289C16.1054 9.48043 16 9.73478 16 10C16 10.2652 16.1054 10.5196 16.2929 10.7071C16.4804 10.8946 16.7348 11 17 11H17.93C17.7068 12.76 16.9049 14.3959 15.6504 15.6504C14.3959 16.9049 12.76 17.7068 11 17.93ZM13.14 5.55L8.14001 7.67C7.90692 7.77099 7.721 7.95691 7.62 8.19L5.5 13.19C5.42125 13.3734 5.39916 13.5761 5.43658 13.7722C5.47401 13.9682 5.56923 14.1485 5.71 14.29C5.89463 14.4784 6.14623 14.5862 6.41 14.59C6.54837 14.5901 6.68503 14.5594 6.81 14.5L11.81 12.38C12.0431 12.279 12.229 12.0931 12.33 11.86L14.45 6.86C14.5273 6.67676 14.5482 6.47463 14.51 6.27946C14.4718 6.08429 14.3763 5.90493 14.2357 5.7643C14.0951 5.62368 13.9157 5.52818 13.7205 5.49001C13.5254 5.45183 13.3232 5.47272 13.14 5.55ZM10.65 10.65L8.37 11.65L9.37 9.37L11.65 8.37L10.65 10.65Z" />
					</svg>{" "}
					<p
						className={[
							" text-sm font-semibold   ml-5",
							router.pathname === "/explore"
								? "text-primary"
								: " text-secondary",
						].join(" ")}
					>
						Explore
					</p>
				</div>
			</Link>
			<Link
				href={login ? "/orders" : "/sign-in"}
				passHref={true}
			>
				<div
					className={[
						"w-full h-12 flex   items-center   pl-7 cursor-pointer  hover:bg-primary_light",
						router.pathname === "/orders" ||
						router.pathname === "/orders/[id]"
							? "bg-primary_light"
							: "",
					].join(" ")}
				>
					<svg
						width="20"
						height="22"
						viewBox="0 0 18 21"
						fill={
							router.pathname ===
								"/orders" ||
							router.pathname ===
								"/orders/[id]"
								? "#15B790"
								: "#959393"
						}
						className="mt-[6px]"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M7 5C6.73478 5 6.48043 5.10536 6.29289 5.29289C6.10536 5.48043 6 5.73478 6 6V8C6 8.26522 6.10536 8.51957 6.29289 8.70711C6.48043 8.89464 6.73478 9 7 9C7.26522 9 7.51957 8.89464 7.70711 8.70711C7.89464 8.51957 8 8.26522 8 8V6C8 5.73478 7.89464 5.48043 7.70711 5.29289C7.51957 5.10536 7.26522 5 7 5ZM19 6C19.2652 6 19.5196 5.89464 19.7071 5.70711C19.8946 5.51957 20 5.26522 20 5V1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6C1.26522 6 1.51957 6.10536 1.70711 6.29289C1.89464 6.48043 2 6.73478 2 7C2 7.26522 1.89464 7.51957 1.70711 7.70711C1.51957 7.89464 1.26522 8 1 8C0.734784 8 0.48043 8.10536 0.292893 8.29289C0.105357 8.48043 0 8.73478 0 9V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14H19C19.2652 14 19.5196 13.8946 19.7071 13.7071C19.8946 13.5196 20 13.2652 20 13V9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8C18.7348 8 18.4804 7.89464 18.2929 7.70711C18.1054 7.51957 18 7.26522 18 7C18 6.73478 18.1054 6.48043 18.2929 6.29289C18.4804 6.10536 18.7348 6 19 6ZM18 4.18C17.4208 4.3902 16.9205 4.77363 16.5668 5.27816C16.2132 5.7827 16.0235 6.38388 16.0235 7C16.0235 7.61612 16.2132 8.2173 16.5668 8.72184C16.9205 9.22637 17.4208 9.6098 18 9.82V12H8C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12H2V9.82C2.57915 9.6098 3.07954 9.22637 3.43316 8.72184C3.78678 8.2173 3.97648 7.61612 3.97648 7C3.97648 6.38388 3.78678 5.7827 3.43316 5.27816C3.07954 4.77363 2.57915 4.3902 2 4.18V2H6C6 2.26522 6.10536 2.51957 6.29289 2.70711C6.48043 2.89464 6.73478 3 7 3C7.26522 3 7.51957 2.89464 7.70711 2.70711C7.89464 2.51957 8 2.26522 8 2H18V4.18Z" />
					</svg>{" "}
					<p
						className={[
							" text-sm font-semibold   ml-5 ",
							router.pathname ===
								"/orders" ||
							router.pathname ===
								"/orders/[id]"
								? "text-primary"
								: " text-secondary",
						].join(" ")}
					>
						Bookings
					</p>
				</div>
			</Link>
			<Link href="#" passHref={true}>
				<div
					className={[
						"w-full h-12 flex    items-center  pl-7",
						router.pathname === "/hitory"
							? "bg-primary_light"
							: "",
					].join(" ")}
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 18 21"
						fill={
							router.pathname === "/history"
								? "#15B790"
								: "#959393"
						}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M10 0C7.43639 0.00731219 4.97349 0.998914 3.12 2.77V1C3.12 0.734784 3.01464 0.48043 2.82711 0.292893C2.63957 0.105357 2.38522 0 2.12 0C1.85478 0 1.60043 0.105357 1.41289 0.292893C1.22536 0.48043 1.12 0.734784 1.12 1V5.5C1.12 5.76522 1.22536 6.01957 1.41289 6.20711C1.60043 6.39464 1.85478 6.5 2.12 6.5H6.62C6.88522 6.5 7.13957 6.39464 7.32711 6.20711C7.51464 6.01957 7.62 5.76522 7.62 5.5C7.62 5.23478 7.51464 4.98043 7.32711 4.79289C7.13957 4.60536 6.88522 4.5 6.62 4.5H4.22C5.50578 3.15636 7.21951 2.30265 9.06653 2.08567C10.9136 1.86868 12.7785 2.30198 14.3407 3.31104C15.9028 4.32011 17.0646 5.84191 17.6263 7.61479C18.188 9.38767 18.1145 11.3009 17.4184 13.0254C16.7223 14.7499 15.4472 16.1781 13.8122 17.0643C12.1772 17.9505 10.2845 18.2394 8.45956 17.8813C6.63463 17.5232 4.99147 16.5405 3.81259 15.1022C2.63372 13.6638 1.99279 11.8597 2 10C2 9.73478 1.89464 9.48043 1.70711 9.29289C1.51957 9.10536 1.26522 9 1 9C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0 11.9778 0.58649 13.9112 1.6853 15.5557C2.78412 17.2002 4.3459 18.4819 6.17317 19.2388C8.00043 19.9957 10.0111 20.1937 11.9509 19.8079C13.8907 19.422 15.6725 18.4696 17.0711 17.0711C18.4696 15.6725 19.422 13.8907 19.8079 11.9509C20.1937 10.0111 19.9957 8.00043 19.2388 6.17317C18.4819 4.3459 17.2002 2.78412 15.5557 1.6853C13.9112 0.58649 11.9778 0 10 0ZM10 6C9.73478 6 9.48043 6.10536 9.29289 6.29289C9.10536 6.48043 9 6.73478 9 7V10C9 10.2652 9.10536 10.5196 9.29289 10.7071C9.48043 10.8946 9.73478 11 10 11H12C12.2652 11 12.5196 10.8946 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10C13 9.73478 12.8946 9.48043 12.7071 9.29289C12.5196 9.10536 12.2652 9 12 9H11V7C11 6.73478 10.8946 6.48043 10.7071 6.29289C10.5196 6.10536 10.2652 6 10 6Z" />
					</svg>{" "}
					<p
						className={[
							" text-sm font-semibold   ml-5",
							router.pathname === "/history"
								? "text-primary"
								: " text-secondary",
						].join(" ")}
					>
						History
					</p>
				</div>
			</Link>
			<Link href="#" passHref={true}>
				<div
					className={[
						"w-full h-12 flex    items-center  pl-7",
						router.pathname === "/settings"
							? "bg-primary_light"
							: "",
					].join(" ")}
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 18 21"
						fill={
							router.pathname === "/settings"
								? "#15B790"
								: "#959393"
						}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M18.8999 11.6599C18.7396 11.4774 18.6512 11.2428 18.6512 10.9999C18.6512 10.757 18.7396 10.5224 18.8999 10.3399L20.1799 8.89989C20.3209 8.74256 20.4085 8.5446 20.4301 8.3344C20.4516 8.12421 20.4061 7.91258 20.2999 7.72989L18.2999 4.2699C18.1948 4.08742 18.0348 3.94277 17.8426 3.85658C17.6505 3.77039 17.4361 3.74705 17.2299 3.7899L15.3499 4.1699C15.1107 4.21932 14.8616 4.17948 14.6498 4.0579C14.4379 3.93631 14.2779 3.74138 14.1999 3.5099L13.5899 1.6799C13.5228 1.48127 13.395 1.30876 13.2245 1.18674C13.0541 1.06471 12.8495 0.999354 12.6399 0.999895H8.6399C8.42183 0.988513 8.20603 1.04882 8.02546 1.17161C7.84489 1.2944 7.70948 1.47291 7.6399 1.6799L7.0799 3.5099C7.0019 3.74138 6.84187 3.93631 6.63001 4.0579C6.41815 4.17948 6.16911 4.21932 5.9299 4.1699L3.9999 3.7899C3.80445 3.76228 3.6052 3.79312 3.42724 3.87853C3.24929 3.96395 3.1006 4.10012 2.9999 4.2699L0.999896 7.72989C0.891056 7.91054 0.842118 8.12098 0.860079 8.33112C0.878039 8.54126 0.961979 8.74034 1.0999 8.89989L2.3699 10.3399C2.53022 10.5224 2.61863 10.757 2.61863 10.9999C2.61863 11.2428 2.53022 11.4774 2.3699 11.6599L1.0999 13.0999C0.961979 13.2595 0.878039 13.4585 0.860079 13.6687C0.842118 13.8788 0.891056 14.0892 0.999896 14.2699L2.9999 17.7299C3.10499 17.9124 3.26502 18.057 3.45715 18.1432C3.64928 18.2294 3.86372 18.2527 4.0699 18.2099L5.9499 17.8299C6.18911 17.7805 6.43815 17.8203 6.65001 17.9419C6.86187 18.0635 7.0219 18.2584 7.0999 18.4899L7.7099 20.3199C7.77948 20.5269 7.91489 20.7054 8.09546 20.8282C8.27603 20.951 8.49183 21.0113 8.7099 20.9999H12.7099C12.9195 21.0004 13.1241 20.9351 13.2945 20.8131C13.465 20.691 13.5928 20.5185 13.6599 20.3199L14.2699 18.4899C14.3479 18.2584 14.5079 18.0635 14.7198 17.9419C14.9316 17.8203 15.1807 17.7805 15.4199 17.8299L17.2999 18.2099C17.5061 18.2527 17.7205 18.2294 17.9126 18.1432C18.1048 18.057 18.2648 17.9124 18.3699 17.7299L20.3699 14.2699C20.4761 14.0872 20.5216 13.8756 20.5001 13.6654C20.4785 13.4552 20.3909 13.2572 20.2499 13.0999L18.8999 11.6599ZM17.4099 12.9999L18.2099 13.8999L16.9299 16.1199L15.7499 15.8799C15.0297 15.7327 14.2805 15.855 13.6445 16.2237C13.0085 16.5924 12.53 17.1817 12.2999 17.8799L11.9199 18.9999H9.3599L8.9999 17.8599C8.76975 17.1617 8.29128 16.5724 7.6553 16.2037C7.01932 15.835 6.27012 15.7127 5.5499 15.8599L4.3699 16.0999L3.0699 13.8899L3.8699 12.9899C4.36185 12.4399 4.63383 11.7278 4.63383 10.9899C4.63383 10.252 4.36185 9.53992 3.8699 8.98989L3.0699 8.0899L4.3499 5.88989L5.5299 6.1299C6.25012 6.27712 6.99932 6.15478 7.6353 5.78609C8.27128 5.41741 8.74975 4.82805 8.9799 4.1299L9.3599 2.9999H11.9199L12.2999 4.13989C12.53 4.83805 13.0085 5.42741 13.6445 5.79609C14.2805 6.16478 15.0297 6.28712 15.7499 6.13989L16.9299 5.8999L18.2099 8.11989L17.4099 9.0199C16.9235 9.56866 16.6549 10.2766 16.6549 11.0099C16.6549 11.7432 16.9235 12.4511 17.4099 12.9999ZM10.6399 6.9999C9.84877 6.9999 9.07541 7.23449 8.41761 7.67402C7.75982 8.11354 7.24713 8.73826 6.94438 9.46916C6.64163 10.2001 6.56241 11.0043 6.71675 11.7803C6.8711 12.5562 7.25206 13.2689 7.81147 13.8283C8.37088 14.3877 9.08361 14.7687 9.85954 14.923C10.6355 15.0774 11.4397 14.9982 12.1706 14.6954C12.9015 14.3927 13.5262 13.88 13.9658 13.2222C14.4053 12.5644 14.6399 11.791 14.6399 10.9999C14.6399 9.93903 14.2185 8.92161 13.4683 8.17147C12.7182 7.42132 11.7008 6.9999 10.6399 6.9999ZM10.6399 12.9999C10.2443 12.9999 9.85765 12.8826 9.52876 12.6628C9.19986 12.4431 8.94351 12.1307 8.79214 11.7653C8.64076 11.3998 8.60116 10.9977 8.67833 10.6097C8.7555 10.2218 8.94598 9.86539 9.22568 9.58568C9.50539 9.30598 9.86175 9.11549 10.2497 9.03832C10.6377 8.96115 11.0398 9.00076 11.4053 9.15214C11.7707 9.30351 12.0831 9.55986 12.3028 9.88875C12.5226 10.2177 12.6399 10.6043 12.6399 10.9999C12.6399 11.5303 12.4292 12.039 12.0541 12.4141C11.679 12.7892 11.1703 12.9999 10.6399 12.9999Z" />
					</svg>{" "}
					<p
						className={[
							" text-sm font-semibold   ml-5",
							router.pathname === "/settings"
								? "text-primary"
								: " text-secondary",
						].join(" ")}
					>
						Settings
					</p>
				</div>
			</Link>
		</div>
	);
};

export default SideMenubar;
