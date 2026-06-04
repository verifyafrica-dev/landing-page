import { useEffect, useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { track } from '@/lib/analytics';

interface HeroProps {
  onRequestDemo: () => void;
}

// Orbital ring configs — defined outside component so they're never re-created
const OUTER_DOTS = [0, 60, 120, 180, 240, 300];
const MIDDLE_DOTS = [0, 90, 180, 270];
const INNER_DOTS = [0, 180];

// Pre-computed image URLs for different sizes to enable responsive loading
const HERO_IMAGES = {
  mobile: 'https://readdy.ai/api/search-image?query=Stunning%203D%20rendered%20map%20of%20Africa%20continent%20floating%20in%20space%20with%20all%2054%20African%20country%20flags%20orbiting%20around%20it%2C%20dark%20navy%20blue%20and%20deep%20teal%20gradient%20background%2C%20glowing%20digital%20connections%20between%20countries%2C%20holographic%20futuristic%20style%2C%20cinematic%20lighting%20with%20soft%20ambient%20glow%2C%20professional%20corporate%20technology%20aesthetic%2C%20ultra%20detailed%20high%20quality%20render%2C%20vertical%20composition%20centered%20Africa%20map&width=800&height=1200&seq=hero-africa-3d-map-mobile-v2&orientation=portrait',
  tablet: 'https://readdy.ai/api/search-image?query=Stunning%203D%20rendered%20map%20of%20Africa%20continent%20floating%20in%20space%20with%20all%2054%20African%20country%20flags%20orbiting%20and%20rotating%20around%20it%20in%20a%20circular%20motion%2C%20dark%20navy%20blue%20and%20deep%20teal%20gradient%20background%2C%20glowing%20digital%20connections%20between%20countries%2C%20holographic%20futuristic%20style%2C%20cinematic%20lighting%20with%20soft%20ambient%20glow%2C%20professional%20corporate%20technology%20aesthetic%2C%20ultra%20detailed%20high%20quality%20render&width=1024&height=768&seq=hero-africa-3d-map-t&orientation=landscape',
  desktop: 'https://readdy.ai/api/search-image?query=Stunning%203D%20rendered%20map%20of%20Africa%20continent%20floating%20in%20space%20with%20all%2054%20African%20country%20flags%20orbiting%20and%20rotating%20around%20it%20in%20a%20circular%20motion%2C%20dark%20navy%20blue%20and%20deep%20teal%20gradient%20background%2C%20glowing%20digital%20connections%20between%20countries%2C%20holographic%20futuristic%20style%2C%20cinematic%20lighting%20with%20soft%20ambient%20glow%2C%20professional%20corporate%20technology%20aesthetic%2C%20ultra%20detailed%20high%20quality%20render&width=1920&height=1080&seq=hero-africa-3d-map&orientation=landscape',
};

export default function Hero({ onRequestDemo }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [heroImageSrc, setHeroImageSrc] = useState(() => {
    if (typeof window === 'undefined') return HERO_IMAGES.desktop;
    const width = window.innerWidth;
    if (width < 768) return HERO_IMAGES.mobile;
    if (width < 1024) return HERO_IMAGES.tablet;
    return HERO_IMAGES.desktop;
  });
  // Use a ref for the parallax layer — CSS custom props avoid React re-renders entirely
  const parallaxRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 1024);
      const width = window.innerWidth;
      if (width < 768) setHeroImageSrc(HERO_IMAGES.mobile);
      else if (width < 1024) setHeroImageSrc(HERO_IMAGES.tablet);
      else setHeroImageSrc(HERO_IMAGES.desktop);
    };
    checkDesktop();

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 1024) return;
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 15;
        const y = (e.clientY / window.innerHeight - 0.5) * 15;
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) scale(1.06)`;
        }
        rafRef.current = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkDesktop);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Fewer particles on mobile to reduce paint cost
  const particles = useMemo(() => {
    const count = isDesktop ? 8 : 4; // reduced from 12/5 → 8/4
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i / count) * 100}%`,
      top: `${(i % 4) * 25}%`,
      delay: `${(i * 0.5).toFixed(1)}s`,
      duration: `${8 + (i % 4) * 2}s`,
    }));
  }, [isDesktop]);

  return (
    <section id="hero" className="relative min-h-[100svh] min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Image with Parallax — DOM-driven, zero React re-renders */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          // scale(1.06) instead of 1.1 — smaller image decode/rasterize area = faster paint and less GPU memory
          transform: isDesktop ? 'translate(0px, 0px) scale(1.06)' : 'scale(1.02)',
          willChange: isDesktop ? 'transform' : 'auto',
        }}
      >
        {/* Responsive picture element for optimal image loading */}
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={HERO_IMAGES.mobile}
            sizes="640px"
          />
          <source
            media="(max-width: 1023px)"
            srcSet={HERO_IMAGES.tablet}
            sizes="1024px"
          />
          <source
            media="(min-width: 1024px)"
            srcSet={HERO_IMAGES.desktop}
            sizes="1920px"
          />
          <img
            src={heroImageSrc}
            alt="3D Africa map with rotating flags representing pan-African identity verification coverage"
            title="VerifyAfrica – KYC, AML &amp; Biometric Identity Verification Across All 54 African Countries"
            width={1920}
            height={1080}
            className={`w-full h-full object-cover object-center md:object-top transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
          />
        </picture>
        {/* Fallback background color while image loads */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-teal-950 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/65"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 via-transparent to-cyan-900/20"></div>

        {/* Orbital Rings — desktop only, CSS-only animation, no per-dot willChange */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none hidden lg:flex">
          {/* Outer Ring */}
          <div className="absolute w-[600px] xl:w-[800px] h-[600px] xl:h-[800px] border border-teal-400/20 rounded-full animate-spin-slow" style={{ willChange: 'transform' }}>
            {OUTER_DOTS.map((deg, i) => (
              <div
                key={i}
                className="absolute w-2.5 xl:w-3 h-2.5 xl:h-3 bg-teal-400/60 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateX(300px) translateY(-50%)`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
          {/* Middle Ring */}
          <div className="absolute w-[420px] xl:w-[600px] h-[420px] xl:h-[600px] border border-cyan-400/20 rounded-full animate-spin-medium-reverse" style={{ willChange: 'transform' }}>
            {MIDDLE_DOTS.map((deg, i) => (
              <div
                key={i}
                className="absolute w-2 xl:w-2.5 h-2 xl:h-2.5 bg-cyan-400/60 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateX(210px) translateY(-50%)`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
          {/* Inner Ring */}
          <div className="absolute w-[260px] xl:w-[400px] h-[260px] xl:h-[400px] border border-teal-300/20 rounded-full animate-spin-fast" style={{ willChange: 'transform' }}>
            {INNER_DOTS.map((deg, i) => (
              <div
                key={i}
                className="absolute w-1.5 xl:w-2 h-1.5 xl:h-2 bg-teal-300/60 rounded-full"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${deg}deg) translateX(130px) translateY(-50%)`,
                  opacity: 0.6,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Particles — reduced count, no willChange */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute w-1 h-1 bg-teal-400/40 rounded-full animate-float-particle"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center text-white pt-24 sm:pt-24 md:pt-20 pb-12 sm:pb-12">
        <div
          className={`inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-5 py-1 sm:py-2 mb-4 sm:mb-6 md:mb-8 transition-all duration-700 hover:bg-white/20 cursor-default ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-teal-400 rounded-full animate-ping-slow"></span>
          <span className="text-[11px] sm:text-sm md:text-base font-medium tracking-wide">
            Pan-African Compliance Infrastructure
          </span>
        </div>

        <h1
          className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-[1.2] sm:leading-[1.15] transition-all duration-700 delay-150 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block animate-text-shimmer bg-clip-text drop-shadow-lg">
            Identity &amp; Compliance
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-300 bg-[length:200%_auto] animate-gradient-x drop-shadow-lg">
            Built for Africa
          </span>
        </h1>

        <p
          className={`text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-6 sm:mb-10 md:mb-12 leading-relaxed px-1 sm:px-2 drop-shadow-md transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Verify identities, screen for risk, and stay compliant across all 54 African countries
          through one unified platform.
        </p>

        <div
          className={`flex flex-col sm:flex-row flex-wrap justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-14 md:mb-16 px-2 sm:px-0 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '450ms' }}
        >
          <button
            onClick={() => {
              track('demo_cta_clicked', { source: 'hero', location: 'hero_primary_button' });
              onRequestDemo();
            }}
            className="group relative px-6 sm:px-8 py-3.5 sm:py-4 bg-teal-500 text-white text-sm sm:text-base font-semibold rounded-lg overflow-hidden transition-all hover:shadow-teal-500/50 hover:shadow-2xl whitespace-nowrap flex items-center justify-center space-x-2 cursor-pointer"
            style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center space-x-2">
              <span>Request a Demo</span>
              <i className="ri-arrow-right-line text-lg transition-transform group-hover:translate-x-2"></i>
            </span>
          </button>
          <Link
            to="/docs"
            className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white text-sm sm:text-base font-semibold rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 transition-all whitespace-nowrap flex items-center justify-center space-x-2"
            style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)' }}
          >
            <span>View API Docs</span>
            <i className="ri-code-line text-lg transition-transform group-hover:rotate-12 group-hover:scale-110"></i>
          </Link>
        </div>

        <div
          className={`grid grid-cols-3 gap-3 sm:gap-8 max-w-2xl mx-auto transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <StatCounter value={54} suffix="" label="African Countries" delay={700} isLoaded={isLoaded} />
          <StatCounter value={99.9} suffix="%" label="Uptime SLA" delay={800} isLoaded={isLoaded} decimals={1} />
          <StatCounter value={2} prefix="<" suffix="s" label="Verification Speed" delay={900} isLoaded={isLoaded} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 hidden md:block ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ transitionDelay: '1000ms' }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 hover:border-white/50 transition-colors cursor-pointer group">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-scroll-bounce group-hover:bg-white/80"></div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  delay,
  isLoaded,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay: number;
  isLoaded: boolean;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const visibilityRef = useRef(true);

  useEffect(() => {
    // Pause animation when tab is hidden to save resources
    const handleVisibilityChange = () => {
      visibilityRef.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (!isLoaded || hasAnimatedRef.current) {
      return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }

    const timer = setTimeout(() => {
      hasAnimatedRef.current = true;
      const duration = 1800;
      const startTime = Date.now();
      let rafId: number | null = null;

      const animate = () => {
        // Skip frames when tab is hidden
        if (!visibilityRef.current) {
          rafId = requestAnimationFrame(animate);
          return;
        }

        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue =
          decimals > 0
            ? parseFloat((value * easeOutQuart).toFixed(decimals))
            : Math.floor(value * easeOutQuart);

        setCount(currentValue);

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };

      rafId = requestAnimationFrame(animate);

      return () => {
        if (rafId) cancelAnimationFrame(rafId);
      };
    }, delay);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isLoaded, value, delay, decimals]);

  return (
    <div
      className="text-center group cursor-default"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease-out ${delay}ms`,
      }}
    >
      <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-teal-300 mb-0.5 sm:mb-1 transition-transform group-hover:scale-110">
        {prefix}
        {decimals > 0 ? count.toFixed(decimals) : count}
        {suffix}
      </div>
      <div className="text-[9px] sm:text-xs md:text-sm text-white/70 group-hover:text-white/90 transition-colors leading-tight">
        {label}
      </div>
    </div>
  );
}