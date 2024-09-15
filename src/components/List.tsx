import React, { useState, useEffect } from "react";
import { supabase } from "@/db/supabase";
import { ArrowUpRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: Date;
}

function List() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true); // Set loading state
      const { data, error } = await supabase.from("posts").select("*");
      console.log(data);
      if (error) {
        console.error("Error fetching posts:", error);
      } else {
        setBlogPosts(data as BlogPost[]);
      }
      setIsLoading(false); // Clear loading state
    };

    fetchPosts();
  }, []);

  const getDayName = (dateString: Date) => {
    const date = new Date(dateString);
    const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    return days[date.getDay()];
  };

  return (
    <div className="container-sm">
        <img className="" src="/blog.svg" />
      
      {isLoading ? (
        <h3 className="flex justify-center">Loading posts...</h3>
      ) : (
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <div className="flex flex-col gap-2 mb-8">
                <div className="flex justify-between items-baseline">
                  <h6>{post.title}</h6>
                  <p>{getDayName(post.date)}</p>
                </div>
                <div className="flex flex-col px-8 py-6 bg-secondary rounded-xl">
                  <p>{post.content}</p>
                <div className="flex justify-end mt-4 bg-primary ml-auto pl-2 p-1 rounded-xl">
                  <p>Leggi</p>
                  <ArrowUpRight size={18}/>
                </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
