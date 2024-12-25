import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button"
import { AiFillDelete } from "react-icons/ai";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Toaster, toast} from "react-hot-toast";
import LoadingSpinner from "@/components/social/ui/common/LoadingSpinner";


const OrdersTable = () => {

    const queryClient = useQueryClient();

    const { data: orders, isLoading, refetch, isRefetching, } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            try {
                const response = await fetch("/api/order/all");
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Something went wrong!");
                }

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
    });

    const { mutate: deleteOrder, isPending: isDeletingOrder } = useMutation({
        mutationFn: async (productId) => {
            try {
                const response = await fetch(`/api/order/delete/${productId}`, {
                    method: "DELETE",
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Something went wrong!");
                }
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            toast.success("Delete order successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });


    const { mutate: changeStatusOrder, isPending: isChangingStatus } = useMutation({
        mutationFn: async (id) => {
            try {
                const response = await fetch(`/api/order/changeStatus/${id}`, {
                    method: "POST",
                });
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || "Something went wrong!");
                }
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("Change status order successfully");
            queryClient.invalidateQueries({ queryKey: ["orders"] });
            queryClient.invalidateQueries({ queryKey: ["onDelivery"] });
            queryClient.invalidateQueries({ queryKey: ["completed"] });
            queryClient.invalidateQueries({ queryKey: ["canceled"] });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(orders);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = orders.filter((user) =>
            user.nameUser.toLowerCase().includes(term) ||
                user.status.toLowerCase().includes(term)
        );
        setFilteredUsers(filtered);
    };

    const handleDelete = async (id) => {
        deleteOrder(id);
    }

    const handleChangeStatus = (id) => async () => {
        changeStatusOrder(id);
    }

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <motion.div
                className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-100">Orders</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 w-36 md:w-72  focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <Search
                            className="absolute left-3 top-2.5 text-gray-400"
                            size={18}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div className="max-h-[600px] overflow-y-auto">
                        {" "}
                        {/* Thêm lớp này để kích hoạt cuộn dọc */}
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Name user
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Name Product
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Address
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Phone Number
                                    </th>
                                    <th className="px-6 py-3 w-[250px] text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Total amount
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-700">
                                {orders && orders.map((order) => (
                                    <motion.tr
                                        key={order._id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-9">
                                                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold">
                                                        {order.user ? order.user.fullName.charAt(0) : order.fullName.charAt(0)}
                                                    </div>
                                                </div>
                                                <div className="ml-3">
                                                    <div className="text-sm font-sm text-gray-100">
                                                        {order.user ? order.user.fullName : order.fullName}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="flex px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-100 justify-center items-center mt-2 ml-2 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <button className="text-blue-500 hover:underline" >
                                                            See more
                                                        </button>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-[425px] bg-primary backdrop-blur-md bg-opacity-35">
                                                        <DialogHeader>
                                                            <DialogTitle className="flex w-full items-center text-2xl">
                                                                Detail Order
                                                            </DialogTitle>
                                                            <DialogDescription>
                                                                Detail about customer's order. <br/> 
                                                                <span className="font-bold text-md"> 
                                                                    OrderID: {order.orderId}
                                                                </span>
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-4 py-4">
                                                            {order.orderItems.map((item) => (
                                                                <div key={item._id} className="flex items-center justify-between">
                                                                    <div className="flex items-center">
                                                                        <div className="flex-shrink-0">
                                                                            <img
                                                                                src={item.carId.images[0]}
                                                                                className="h-10 w-10 rounded-full bg-black"
                                                                            />
                                                                        </div>
                                                                        <div className="ml-3">
                                                                            <div className="text-sm font-bold text-gray-100 ">
                                                                                {item.brand}{item.model}
                                                                            </div>
                                                                            <div className="text-sm font-medium text-gray-100">
                                                                                {item.quantity} x ${item.price.toLocaleString()}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-sm text-gray-300">
                                                                        ${item.price.toLocaleString()}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-300 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                                                {order.shippingAddress}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-300">
                                                {order.phoneNumber}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-300">
                                                {order.email}
                                            </div>
                                        </td>

                                        <td className="flex hover:cursor-pointer">
                                            {order.isCancelled ? (
                                                <span className="hover:cursor-not-allowed mt-4 ml-16 p-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-600 text-red-100">
                                                    Cancelled
                                                </span>
                                            ) : (
                                                    <AlertDialog>
                                                        <AlertDialogTrigger asChild>
                                                            <span
                                                                className={`mt-4 ml-16 p-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
order.isDelivered !== false
? "bg-green-800 text-green-100"
: "bg-yellow-600 text-red-100"
}`}
                                                            >
                                                                {order.isDelivered !== false ? "Delivered" : "Not Delivered"}
                                                            </span>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent className="bg-gray-900 backdrop-blur-md bg-opacity-35">
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle> Do you want to change status of this order ? </AlertDialogTitle>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>
                                                                    Cancel
                                                                </AlertDialogCancel>
                                                                <AlertDialogAction 
                                                                    className="bg-white text-black hover:bg-white hover:bg-opacity-20"
                                                                    onClick={
                                                                        handleChangeStatus(order._id)
                                                                    }
                                                                >
                                                                    Continue
                                                                </AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap pl-20">
                                            <div className="text-sm text-gray-300">
                                                ${order.totalPrice.toLocaleString()}
                                            </div>
                                        </td>
                                        <td className="pl-20 py-4 whitespace-nowrap">
                                            {isDeletingOrder ? (
                                                <LoadingSpinner />
                                            ) : (
                                                    <AiFillDelete
                                                        className="text-red-500 hover:cursor-pointer w-6 h-6"
                                                        onClick={() => handleDelete(order._id)}
                                                    />
                                                )}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </motion.div>
        </>
    );
};
export default OrdersTable;
