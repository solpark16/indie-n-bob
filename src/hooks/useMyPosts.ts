import getMyPosts from "@/utils/getMyPosts";
import { useQuery } from "@tanstack/react-query";

const useMyPosts = () => {
    return useQuery({
        queryKey: ['myPosts'],
        queryFn: getMyPosts,
        staleTime: Infinity
    });
};

export default useMyPosts;