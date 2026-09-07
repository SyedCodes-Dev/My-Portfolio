import { memo, useEffect, useRef } from 'react';
import { Gsap } from '../utils/gsapAnimate';
import { Github, Linkedin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { exponentialEaseOut } from '../utils/easing';

const Footer = memo(function Footer() {
  const timeRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    if (window.lenisInstance && typeof window.lenisInstance.scrollTo === 'function') {
      window.lenisInstance.scrollTo(target, {
        offset: -24,
        duration: 1.5,
        easing: exponentialEaseOut
      });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };


  useEffect(() => {
    const updateTime = () => {
      if (!timeRef.current) return;
      const now = new Date();
      timeRef.current.textContent = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short'
      });
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact-section" className="bg-[#0A0A0A] text-white pt-20 md:pt-24 pb-12 w-full relative overflow-hidden">

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-12 relative z-10 flex flex-col justify-between min-h-[50vh]">


        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16 md:mb-24"
        >
          <div className="w-2 h-2 bg-lime-400 rounded-[2px] animate-pulse" />
          <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] md:tracking-[0.26em] text-white/40">
            {'// INITIALIZE_CONTACT'}
          </span>
          <div className="flex-1 h-[1px] bg-white/10" />
        </Gsap.div>


        <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-16 lg:gap-8 mb-20 md:mb-24">


          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.95] sm:leading-[0.9] text-white mb-6">
                LET'S <br />
                <span className="text-lime-400 transform inline-block italic pr-4">CONNECT.</span>
              </h2>
              <p className="font-sans text-sm md:text-base text-white/60 max-w-md leading-7 md:leading-8">
                Feel free to reach out for collaborations, system architecture discussions, or just to say hello. Always open to exploring new opportunities.
              </p>
            </div>
          </div>


          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-12 sm:gap-16 lg:justify-end">


            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.18em] md:tracking-[0.24em] mb-4 border-l-2 border-white/20 pl-3">Sitemap</span>

              {[
                { label: 'About', id: 'about-section' },
                { label: 'Projects', id: 'project-section' },
                { label: 'Experience', id: 'experience-section' },
                { label: 'Capabilities', id: 'capabilities-section' }
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left font-mono text-xs md:text-sm font-bold uppercase text-white/60 hover:text-lime-400 transition-colors flex items-center gap-3 group py-1"
                >
                  <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-lime-400 transition-colors" />
                  <span className="tracking-[0.14em] md:tracking-[0.2em] relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-lime-400 group-hover:w-full transition-all duration-300" />
                  </span>
                </button>
              ))}
            </div>


            <div className="flex flex-col gap-4 min-w-[200px]">
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.18em] md:tracking-[0.24em] mb-4 border-l-2 border-lime-400 pl-3">Networks</span>

              {[
                { label: 'WhatsApp', href: 'https://wa.me/923371800185', icon: MessageCircle },
                { label: 'GitHub', href: 'https://github.com/SyedCodes-Dev', icon: Github },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syed-ahsan-595a51430/', icon: Linkedin },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-white/10 bg-[#111111] hover:bg-lime-400 hover:border-lime-400 transition-colors duration-300 p-3"
                >
                  <div className="flex items-center gap-3">
                    <link.icon size={16} className="text-white/40 group-hover:text-black transition-colors" />
                    <span className="font-mono text-xs md:text-sm font-bold uppercase text-white/80 group-hover:text-black tracking-[0.14em] md:tracking-[0.2em] transition-colors">{link.label}</span>
                  </div>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-black transition-colors" />
                </a>
              ))}

            </div>

          </div>
        </div>


        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4">
          <div className="flex items-center gap-3 font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.14em] md:tracking-[0.2em]">
            <span>SYS.STATUS:</span>
            <div className="flex items-center gap-2 text-lime-400 bg-lime-400/10 px-2 flex-grow-0 min-w-16 justify-center py-0.5 border border-lime-400/20 yg">
              ONLINE
            </div>
          </div>

          <div ref={timeRef} className="font-mono text-[10px] md:text-xs text-white/30 uppercase tracking-[0.18em] md:tracking-[0.24em] tabular-nums text-center order-first md:order-none opacity-50">
            00:00:00 LOCAL
          </div>

          <div className="font-mono text-[10px] md:text-xs text-white/40 uppercase tracking-[0.14em] md:tracking-[0.2em] text-center md:text-right">
            &copy; {new Date().getFullYear()} SYED AHSAN. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;
