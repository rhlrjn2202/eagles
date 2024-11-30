interface VideoCardProps {
    title: string;
    thumbnail: string;
    videoId: string;
    views: string;
    date: string;
  }
  
  const VideoCard = ({ title, thumbnail, videoId, views, date }: VideoCardProps) => {
    const handleClick = () => {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    };
  
    return (
      <div 
        onClick={handleClick}
        className="card overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all duration-200"
      >
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-sm text-gray-600">
            <span>{views} views</span>
            <span className="mx-2">•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoCard;