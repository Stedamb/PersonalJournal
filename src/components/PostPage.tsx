import { useState, useEffect, type ReactNode } from "react";
import { supabase } from "@/db/supabase";
import RevealAnimation from "./ui/animations/animations";
import PostDetails from "./PostDetails";

interface PostPageProps {
  slug: string;
  children?: ReactNode; // Add the children prop with the type ReactNode
}

function PostPage({ slug, children }: PostPageProps) {
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
      RevealAnimation("RevealAnimation");
    };

    fetchPosts();
  }, [slug]);

  return (
    <div className="container-sm">
      {isLoading ? (
        <h3 className="flex justify-center">caricamento...</h3>
      ) : (
        <div className="">
          {children && <div>{children}</div>}
          {post && <PostDetails post={post} />}
        </div>
      )}
    </div>
  );
}

export default PostPage;
