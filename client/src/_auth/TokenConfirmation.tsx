import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
        <section>
            {isLoading && <p>Verifying...</p>}
            {!isLoading && isConfirmed && <p>Your email has been verified</p>}
            {!isLoading && isError && <p>Failed to verify your email</p>}
        </section>
    )
}

export default TokenConfirmation