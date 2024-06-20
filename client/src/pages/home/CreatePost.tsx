import { CiImageOn } from "react-icons/ci";
import { BsEmojiSmileFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import placeholder_img from "../../assets/social/placeholder/placeholder.png"

const CreatePost = () => {
	const [text, setText] = useState("");
	const [img, setImg] = useState(null);
	const imgRef = useRef(null);

    const { data: authUser } = useQuery({queryKey: ['authUser']});
    const queryClient = useQueryClient();

    const {mutate: createPost, isPending, error} = useMutation({
        mutationFn: async ({text, img}) => {
            try {
                const res = await fetch('/api/posts/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({text, img}),
                });

                const data = await res.json();
                if(!res.ok) {
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
            queryClient.invalidateQueries("posts");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

	const isError = false;


	const handleSubmit = (e) => {
		e.preventDefault();
        createPost({text, img});
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

	return (
        <div className='flex p-4 items-start border gap-4 border-gray-800 rounded-3xl my-6 bg-black bg-opacity-55'>
            <div className='avatar'>
                <div className='w-9 rounded-full'>
                    <img 
                        src={authUser.profileImg || placeholder_img} 
                    />
                </div>
            </div>
            <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
                <textarea
                    className='textarea w-full p-3 bg-transparent -mb-8 text-white text-lg resize-none border-none focus:outline-none'
                    placeholder='What is happening?!'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                {img && (
                    <div className='relative w-80 mx-auto'>
                        <IoCloseSharp
                            className='absolute top-0 right-0 text-white bg-black rounded-full w-5 h-5 cursor-pointer'
                            onClick={() => {
                                setImg(null);
                                imgRef.current.value = null;
                            }}
                        />
                        <img src={img} className='w-full mx-auto h-72 object-contain rounded' />
                    </div>
                )}

                <div className='flex justify-between border-t py-2 border-t-gray-700'>
                    <div className='flex gap-1 items-center'>
                        <CiImageOn
                            className='fill-[#2191d8] w-6 h-6 cursor-pointer'
                            onClick={() => imgRef.current.click()}
                        />
                        <BsEmojiSmileFill 
                            className='fill-[#2191d8] w-5 h-5 cursor-pointer' 
                        />
                    </div>
                    <input type='file' hidden ref={imgRef} onChange={handleImgChange} />
                    <button className='btn btn-primary bg-[#2191d8] rounded-full btn-sm text-white px-4'>
                        {isPending ? "Posting..." : "Post"}
                    </button>
                </div>
                {isError && 
                    <div className='text-red-500'>
                        {error.message}
                    </div>
                }
            </form>
        </div>
	);
};
export default CreatePost;
