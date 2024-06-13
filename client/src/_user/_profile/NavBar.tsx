import { useState, useEffect } from "react"

const NavBar = () => {

    interface User {
        _id: string;
        username: string;
        email: string;
    }

    const [userData, setUserData] = useState<any>(null)

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch('http://localhost:4000/api/users')

            if (response.ok) {
                const data = await response.json()
                setUserData(data)
            }
        }

        fetchUserData()
    }, [])

    return (
        <div className="mt-10 ml-10">
            {userData && userData.map((user: User) => (
                <div className="w-[300px] h-auto bg-red-400 pb-3 pt-3 pl-10 rounded-2xl justify-center mb-3">
                    <div key={user._id}>
                        <h1>{user.username}</h1>
                        <p>{user.email}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NavBar
