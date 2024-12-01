import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80" onClick={onClose}></div>
      <div className="relative w-full max-w-4xl z-10">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
        <div className="wistia_responsive_padding" style={{padding:'56.25% 0 0 0', position:'relative'}}>
          <div className="wistia_responsive_wrapper" style={{height:'100%',left:0,position:'absolute',top:0,width:'100%'}}>
            <div className="wistia_embed wistia_async_6izv8wy1jo seo=true videoFoam=true" style={{height:'100%',position:'relative',width:'100%'}}>
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;