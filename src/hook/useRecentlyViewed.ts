"use client";

import { useEffect, useState } from "react";
interface Post {
  id?: string;
  title?: string;
  image?: string;
  time?: string;
}
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';



export function useRecentlyViewed(currentPostId:string) {
  const router = useRouter();
  const [recentlyViewed, setRecentlyViewed] = useState<Post[]>([]);

  useEffect(() => {
        // Ensure this only runs in the browser (client-side)
        if (typeof window !== "undefined") {
          // Load recently viewed posts from localStorage
          const storedPosts = localStorage.getItem("recentlyViewedPosts");
          const parsedPosts: Post[] = storedPosts ? JSON.parse(storedPosts) : [];
          setRecentlyViewed(parsedPosts);
    
          // Add current post to recently viewed
          const currentPost = {
            id: currentPostId,
            title: document.title,
            image: "/placeholder.svg?height=60&width=60",
            time: new Date().toISOString(),
          };
    
          const updatedPosts = [
            currentPost,
            ...parsedPosts.filter((post) => post.id !== currentPostId),
          ];
          const limitedPosts: Post[] = updatedPosts.slice(0, 4); // Keep only the 3 most recent
    
          // Update state and localStorage
          setRecentlyViewed(limitedPosts);
          localStorage.setItem("recentlyViewedPosts", JSON.stringify(limitedPosts));
        }
      }, [currentPostId]);
}

