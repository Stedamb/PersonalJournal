import React from "react";
import { ArrowLeft } from "lucide-react";
import RevealAnimation from "./ui/animations/animations";
import { getDate } from "@/utils/dateUtils";
import Markdown from "react-markdown";

interface PostDetailsProps {
    post: Post;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
    RevealAnimation("RevealAnimation");

    return (
        <div className="flex flex-col items-center">
            <h3 className="RevealAnimation">{post?.title}</h3>
            <p className="RevealAnimation">{post?.date && getDate(post.date)}</p>
            <div className="RevealAnimation flex flex-col w-full px-8 py-12 bg-secondary rounded-xl m-8">
            <Markdown className="FormattedText text-lg">{post.content}</Markdown> 
            </div>
            <div className="relative flex justify-center items-center gap-2 bg-secondary rounded-lg p-4">
                <ArrowLeft className="RevealAnimation" size={16} />
                <p className="RevealAnimation md:text-xl">Torna indietro</p>
                <a className="Overlink" href="/blog"></a>
            </div>
        </div>
    );
};

export default PostDetails;
