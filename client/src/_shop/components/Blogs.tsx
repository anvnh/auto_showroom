import { formatPostDate } from "@/utils/date";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Blogs = () => {
    const{data: newestPosts, isLoading, refetch, isRefetching} = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            try {
                const response = await fetch("/api/posts/newest")
                const data = await response.json();
                
                // console.log(data);

                if(!response.ok){
                    throw new Error(data.message || 'Something went wrong!');
                }

                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
	});

    return (
     <div>
         <hr className="w-1/2 border-black mx-auto relative top-1 pt-10 pb-12" /> 
           <section className="md:px-60 px-12 ss:px-32 sm:px-44 text-black bg-[#F9FBFC] font-poppins">
            <div className="font-bold text-4xl font-poppins pb-12">
                Latest Blogs
            </div>
            {!isLoading && !isRefetching && newestPosts?.length === 0 && (
                <p className="text-center my-4">No products available</p>
            )}
            <div className="md:flex w-full md:gap-4 space-y-12 md:space-y-0 ">
                {!isLoading && 
                    !isRefetching && 
                    newestPosts && 
                    newestPosts.map((post) => (
                        <div 
                            key={post._id} 
                            className="w-full  rounded-lg overflow-hidden shadow-lg bg-white hover:bg-gray-500 hover:bg-opacity-15"
                        >
                            <Link to={`/social/posts/${post.user.username}/${post._id}`}>
                                <div className="relative">
                                    <img src={post.img} alt="" className="w-full h-52 object-cover" />
                                    <span className="absolute top-2 right-2 bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded">
                                        {/* TODO */}
                                        Blogs
                                    </span>
                                </div>
                                <div className="px-4 py-3">
                                    <div className="text-xs text-gray-500 mb-1">
                                        {post.user.username} • {formatPostDate(`${post.createdAt}`)}
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-800 mb-2">
                                        {post.text ? post.text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates."}
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>


        </section>
     </div>
    )
}

export default Blogs
