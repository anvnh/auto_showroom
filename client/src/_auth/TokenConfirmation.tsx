import { useQuery } from '@tanstack/react-query';
import logo from '@/assets/logo/logoMain.png'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const TokenConfirmation = () => {

    const { token } = useParams();

    const {data: isConfirmed, isError, isLoading} = useQuery({
        queryKey: ['tokenConfirmation', token],
        queryFn: async () => {
            try {
                const res = await fetch(`/api/auth/verified/${token}`);
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || 'Something went wrong');
                }
                return data;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        retry: false,
    });


    return (
        <section className='w-full'>
            {isLoading && <p>Verifying...</p>}
            {!isLoading && isConfirmed && (
                <div className="h-screen w-full flex justify-center items-center bg-primary">
                    <div>
                        <div className="flex justify-center items-center w-full h-full">
                            <img src={logo} alt="logo" className="w-32 h-32" />
                        </div>
                        <h1 className="text-3xl flex justify-center text-center">
                            Your email has been verified
                        </h1>
                        <Link
                            to="/login"
                            className="flex justify-center text-center text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md mt-4"
                        >
                            Back to Login
                        </Link>
                    </div>
                </div>
            )}
            {!isLoading && isError && (
                <div className="h-screen w-full flex justify-center items-center bg-primary">
                    <div>
                        <div className="flex justify-center items-center w-full h-full">
                            <img src={logo} alt="logo" className="w-32 h-32" />
                        </div>
                        <h1 className="text-3xl flex justify-center text-center">
                            Failed to verify your email
                        </h1>
                        <Link
                            to="/login"
                            className="flex justify-center text-center text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-md mt-4"
                        >
                            Back to Login
                        </Link>
                    </div>
                </div>
            )}
        </section>
    )
}

export default TokenConfirmation
