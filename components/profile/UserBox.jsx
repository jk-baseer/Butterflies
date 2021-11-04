import React from 'react';

const UserBox = () => {
    return (
		<div className=" w-full h-min-[30px] bg-white  shadow-c-sm rounded-lg p-[20px]  grid grid-cols-[70%,30%] items-center">
			<div className="flex justify-start items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-12 w-12"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
                </svg>
                <h2 className=" text-xl text-black font-semibold ml-2">Ahsan Ullah</h2>
            </div>
            <div className=" flex justify-end">
                <button className=" px-6 py-1 bg-primary  rounded-lg text-base text-white font-medium">Edit Profile</button>
            </div>
		</div>
    );
};

export default UserBox;