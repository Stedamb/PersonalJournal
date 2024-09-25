import { useState, useEffect } from "react";
import { supabase } from "@/db/supabase";
import RevealAnimation from "./ui/animations/animations";
import { getDate } from "@/utils/dateUtils";
import { ArrowLeft } from "lucide-react";
import PostDetails from "./PostDetails";

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
          {post && <PostDetails post={post} />}
        </div>

      )}
    </div>
  );
}

export default PostPage;