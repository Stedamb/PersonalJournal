import React, { useState, useEffect } from "react";
import { supabase } from "@/db/supabase";
import Post from "./Post";
import RevealAnimation from "./ui/animations/animations";
import { getDate } from "@/utils/dateUtils";

function PostPage({ slug }: { slug: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setPost(data as Post);
      }

      setIsLoading(false);
    };

    fetchPosts();
  }, [slug]);  

  RevealAnimation("RevealAnimation");

  return (
    <div className="container-sm">
      {isLoading ? (
        <h3 className="flex justify-center">caricamento...</h3>
      ) : (
        
        <div className="flex flex-col items-center">
          <h3>{post?.title}</h3>
          <p>{post?.date && getDate(post.date)}</p>
        </div>
      )}
    </div>
  );
}

export default PostPage;
