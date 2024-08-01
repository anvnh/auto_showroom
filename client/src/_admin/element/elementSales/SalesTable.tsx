import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const campaignData = [
    { id: 1, name: "AAP Birthday", Start_date: "20/04/2024", End_date: "20/04/2025", status: "Active", Participants:"200" },
    { id: 2, name: "Christmas day", Start_date: "25/04/2024", End_date: "20/04/2025", status: "Active", Participants:"4000"  },
    { id: 3, name: "Independence Day", Start_date: "01/05/2024", End_date: "20/04/2025", status: "Inactive", Participants:"2340"  },
    { id: 4, name: "Tet day", Start_date: "20/04/2024", End_date: "20/04/2025", status: "Active", Participants:"2000"  },
    { id: 5, name: "black friday", Start_date: "20/04/2024", End_date: "20/04/2025", status: "Active", Participants:"2400"  },
    { id: 6, name: "car buying festival", Start_date: "20/04/2024", End_date: "20/04/2025", status: "Active", Participants:"4500"  },
];

const SalesTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(campaignData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = campaignData.filter(
            (user) => user.name.toLowerCase().includes(term) || user.status.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    };

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Campaign</h2>
                <div className='relative '>
                    <input
                        type='text'
                        placeholder='Search users...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 w-40 md:w-72 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
                </div>
            </div>

            <div className='overflow-x-auto'>
                <div className='max-h-80 overflow-y-auto'> {/* Thêm lớp này để kích hoạt cuộn dọc */}
                    <table className='min-w-full divide-y divide-gray-700'>
                        <thead>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                    Name
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                     Start date
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                     End date
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                    Status
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                Participants
                                </th>
                            </tr>
                        </thead>

                        <tbody className='divide-y divide-gray-700'>
                            {filteredUsers.map((user) => (
                                <motion.tr
                                    key={user.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <td className='p-4 '>
                                        <div className='flex items-center'>
                                    
                                                <div className='text-sm font-medium text-gray-100'>{user.name}</div>
                                        </div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>{user.Start_date}</div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900 text-blue-100'>
                                            {user.End_date}
                                        </span>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                user.status === "Active"
                                                    ? "bg-green-800 text-green-100"
                                                    : "bg-red-800 text-red-100"
                                            }`}
                                        >s
                                            {user.status}
                                        </span>
                                    </td>
                                 
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>{user.Participants}</div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </motion.div>
    );
};
export default SalesTable;
