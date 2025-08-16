import { useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useGSAPAnimations() {
  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const loadGSAP = async () => {
      if (!window.gsap) {
        const script1 = document.createElement('script');
        script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
        document.head.appendChild(script2);

        await new Promise((resolve) => {
          script2.onload = resolve;
        });
      }

      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        initializeAnimations();
      }
    };

    loadGSAP();
  }, []);

  const initializeAnimations = () => {
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // Hero animations
    const heroTimeline = gsap.timeline();
    heroTimeline
      .to('.hero-title span', { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power2.out' })
      .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
      .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3');

    // Scroll progress bar
    gsap.to('#scrollProgress', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });

    // Section titles animation
    gsap.utils.toArray('.section-title').forEach((title: any) => {
      // Mark as animated for CSS fallback
      title.classList.add('gsap-animated');
      
      gsap.fromTo(title, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
          onComplete: () => {
            // Ensure it stays visible
            gsap.set(title, {opacity: 1, y: 0});
          }
        }
      });
    });

    // Program cards animation
    gsap.utils.toArray('.program-card').forEach((card: any) => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 50,
        scale: 0.9
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Stats counter animation
    gsap.utils.toArray('.counter').forEach((counter: any) => {
      const target = parseInt(counter.dataset.target);
      gsap.fromTo(counter, {
        innerText: 0
      }, {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Gallery items animation
    gsap.utils.toArray('.gallery-item').forEach((item: any) => {
      gsap.fromTo(item, {
        opacity: 0,
        scale: 0.8,
        y: 30
      }, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Parallax effect for hero background
    gsap.to('[data-parallax]', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '#home',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  };

  return { initializeAnimations };
}
