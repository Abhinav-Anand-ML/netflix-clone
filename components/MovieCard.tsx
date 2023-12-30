import React from "react";

interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({
    data
}) => {
    return (
        <div className="bg-zinc-900 col-span relative h-[12vw]">
            <img 
                className="cursor-pointer object-cover transition duration shadow-xl rounded-md hover:opacity-90 sm:hover:opacity-0 delay-300 w-full h-[12vw]" 
                src={data.thumbnailUrl} alt="Thumbnail" />
            <div></div>
        </div>
    )
}

export default MovieCard;