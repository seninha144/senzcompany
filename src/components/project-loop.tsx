'use client';
import { useEffect, useRef, useState } from 'react';

export function ProjectLoop({
  src,
  poster,
  label,
  pauseLabel,
  playLabel,
}: {
  src: string;
  poster: string;
  label: string;
  pauseLabel: string;
  playLabel: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const paused = useRef(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    const sync = () => {
      if (!visible || motion.matches || document.hidden || paused.current) {
        video.pause();
        return;
      }
      if (!video.getAttribute('src')) {
        video.src = src;
        video.load();
      }
      void video.play().catch(() => setPlaying(false));
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0.15 },
    );
    observer.observe(video);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      video.pause();
    };
  }, [src]);
  return (
    <div className="luzen-loop">
      <video
        ref={ref}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => {
          setFailed(true);
          setPlaying(false);
        }}
      />
      {!failed && (
        <button
          type="button"
          onClick={() => {
            const video = ref.current;
            if (!video) return;
            if (playing) {
              paused.current = true;
              video.pause();
            } else {
              paused.current = false;
              if (!video.getAttribute('src')) video.src = src;
              void video.play().catch(() => setPlaying(false));
            }
          }}
        >
          {playing ? pauseLabel : playLabel}
        </button>
      )}
    </div>
  );
}
