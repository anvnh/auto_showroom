import React from 'react'
import logo from '@/assets/logo/logoMain.png'
import { Link } from 'react-router-dom';

const NotAuthenticated = () => {
    return (
		<div className="h-screen w-full flex justify-center items-center bg-primary">
			<div>
				<div className="flex justify-center items-center w-full h-full">
					<img src={logo} alt="logo" className="w-32 h-32" />
				</div>
				<h1 className="text-3xl flex justify-center text-center">
					You do not have permission to view this page. <br />
					Please contact the administrator.
				</h1>
				<Link
					to="/"
					className="flex justify-center text-center text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md mt-4"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
}

export default NotAuthenticated