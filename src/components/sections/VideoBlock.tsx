import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';

interface VideoBlockProps {
  title: string;
  description: string;
  url: string;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ title, description, url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = getYouTubeId(url);
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, rgba(5, 55, 108, 0.95) 0%, rgba(5, 55, 108, 0.8) 100%),
          radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)
        `
      }}
    >
      {/* Parallax background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Moved div - between description and video */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => setIsPlaying(true)}
            className="group/play relative"
            aria-label="Play video"
          >
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover/play:bg-white group-hover/play:scale-110 shadow-2xl">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-brand-primary ml-1 transition-colors duration-300" fill="currentColor" />
            </div>
          </button>
        </div>

        <div className="max-w-[900px] mx-auto mb-12">
          <div 
            className="relative aspect-video overflow-hidden shadow-2xl group animate-fade-in"
            style={{ 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(5, 55, 108, 0.2)',
              transform: `translateY(${scrollY * -0.05}px)`
            }}
          >
            {!isPlaying ? (
              <>
                {/* Video thumbnail */}
                <img
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Floating elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title="Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

        </div>

        {/* Secondary actions */}
        <div className="max-w-[900px] mx-auto">
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
              onClick={() => window.open(url, '_blank')}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Open on YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;