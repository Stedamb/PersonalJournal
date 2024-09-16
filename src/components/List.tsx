import React, { useState, useEffect } from "react";
import { supabase } from "@/db/supabase";
import Post from "./Post";
import RevealAnimation from "./ui/animations/animations";
import { getDayName } from "@/utils/dateUtils";

function List() {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const { data, error } = await supabase.from("posts").select("*");

      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setBlogPosts(data as Post[]);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  RevealAnimation("RevealAnimation");

  return (
    <div className="container-sm">
      <img className="" src="/blog.svg" alt="Blog" />
      {isLoading ? (
        <h3 className="flex justify-center">caricamento...</h3>
      ) : (
        <ul>
          {blogPosts.map((post) => (
            <Post key={post.id} post={post} getDayName={getDayName} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
