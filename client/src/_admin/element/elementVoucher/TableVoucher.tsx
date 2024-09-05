import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const VoucherData = [
    { id: 1, Discount: "30%", Manufacture: "06-09-2024", ExpiryDate: "07-09-2024", Criteria: "User must have at least 23 posts and 23 likes"},
    { id: 2, Discount: "11%", Manufacture: "06-09-2024", ExpiryDate: "07-09-2024", Criteria: "User must have at least 1 posts and 1 likes"},
];

const TableVoucher = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(VoucherData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = VoucherData.filter(
            (voucher) => voucher.Discount.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    };

    return (
        <motion.div
            className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-12'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-xl font-semibold text-gray-100'>Voucher APP </h2>
                <div className='relative'>
                    <input
                        type='text'
                        placeholder='Search Voucher...'
                        className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 w-36 md:w-72 focus:ring-blue-500'
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                    <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
                </div>
            </div>

            <div className='overflow-x-auto'>
                <div className='max-h-72 overflow-y-auto'> {/* Thêm lớp này để kích hoạt cuộn dọc */}
                    <table className='min-w-full divide-y divide-gray-700'>
                        <thead>
                            <tr>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                                    Discount
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Manufacture
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Expiry Date
                                </th>
                                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Criteria
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
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='flex items-center'>
                                            <div className=''>
                                                <div className='text-sm font-medium text-gray-100'>{user.Discount}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-300'>{user.Manufacture}</div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-800 text-blue-100'>
                                            {user.ExpiryDate}
                                        </span>
                                    </td>

                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <span
                                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                                        >
                                            {user.Criteria}
                                        </span>
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
export default TableVoucher;
