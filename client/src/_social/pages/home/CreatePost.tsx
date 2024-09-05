import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import placeholder_img from "@/assets/social/placeholder/placeholder.png";
import Picker from "emoji-picker-react";
import EmojiPicker from "emoji-picker-react";

const CreatePost = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState(null);
    const imgRef = useRef(null);

    const { data: authUser } = useQuery({ queryKey: ["authUser"] });
    const queryClient = useQueryClient();

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const {data: postsAndLikes, isLoading, refetch, isRefetching,} = useQuery({
        queryKey: ["postsAndLikes"],
        queryFn: async () => {
            try {
                const response = await fetch("/api/user/postsAndLikes");
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || "Something went wrong!");
                }

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
    });

    const { mutate: checkAndGetVoucher, isPending: isChecking, } = useMutation({
        mutationFn: async ({posts, likes}) => {
            try {
                const res = await fetch("/api/vouchers/check", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ posts, likes }),
                });
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || "Something went wrong");
                }
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            toast.success("You have earned a voucher. Go check it out!");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const { mutate: createPost, isPending, error, } = useMutation({
        mutationFn: async ({ text, img }) => {
            try {
                const res = await fetch("/api/posts/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text, img }),
                });

                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message || "Something went wrong");
                }
            } catch (error) {
                throw new Error(error);
            }
        },
        onSuccess: () => {
            setText("");
            setImg(null);
            toast.success("Post created successfully");
			queryClient.invalidateQueries({ queryKey: ["posts"] });
            checkAndGetVoucher({ posts: postsAndLikes.posts, likes: postsAndLikes.likes });
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const isError = false;

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost({ text, img });
    };

    const handleImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImg(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const onEmojiClick = (emojiObject) => {
        setText((prevContent) => prevContent + emojiObject.emoji);
        setShowEmojiPicker(false);
    };

    // get posts and likes on page load
    useEffect(() => {
        refetch();
    }, []);

    return (
        <div className="flex p-4 items-start border gap-4 border-gray-800 rounded-3xl my-6 bg-black bg-opacity-55">
            <div className="avatar">
                <div className="w-9 rounded-full">
                    <img src={authUser.profileImg || placeholder_img} />
                </div>
            </div>
            <form
                className="flex flex-col gap-2 w-full"
                onSubmit={handleSubmit}
            >
                <textarea
                    className="textarea w-full p-3 bg-transparent md:-mb-8 text-white text-lg resize-none border-none focus:outline-none"
                    placeholder="What is happening?!"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                {img && (
                    <div className="relative w-80 mx-auto">
                        <IoCloseSharp
                            className="absolute top-0 right-0 text-white bg-black rounded-full w-5 h-5 cursor-pointer"
                            onClick={() => {
                                setImg(null);
                                imgRef.current.value = null;
                            }}
                        />
                        <img
                            src={img}
                            className="w-full mx-auto h-72 object-contain rounded"
                        />
                    </div>
                )}

                <div className="flex justify-between border-t py-2 border-t-gray-700">
                    <div className="flex gap-1 items-center">
                        <CiImageOn
                            className="fill-[#2191d8] w-6 h-6 cursor-pointer"
                            onClick={() => imgRef.current.click()}
                        />
                        <BsEmojiSmileFill
                            className="fill-[#2191d8] w-5 h-5 cursor-pointer"
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        />
                    </div>
                    {showEmojiPicker && (
                        <div className="absolute mt-10">
                            <EmojiPicker
                                onEmojiClick={onEmojiClick}
                                theme="dark"
                            />
                        </div>
                    )}
                    <input
                        type="file"
                        hidden
                        ref={imgRef}
                        onChange={handleImgChange}
                    />
                    <button
                        className="btn btn-primary bg-[#2191d8] rounded-full btn-sm text-white px-4
                        before:ease relative overflow-hidden border-gray-600 border shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-50 before:duration-700 hover:shadow-gray-500 hover:before:-translate-x-16
                        "
                    >
                        {isPending || isChecking ? "Posting..." : "Post"}
                    </button>
                </div>
                {isError && <div className="text-red-500">{error.message}</div>}
            </form>
        </div>
    );
};
export default CreatePost;
