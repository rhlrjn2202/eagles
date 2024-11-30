import { videos } from '../../data/homeData';

const VideoGallerySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">VIDEO GALLERY</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Relive our memorable moments and experiences through these videos.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div 
              key={index}
              onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
              className="card overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all duration-200"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[16px] border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallerySection;