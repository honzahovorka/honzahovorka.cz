'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';
import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (contentRef.current) {
      // Reset classes to trigger animation again
      contentRef.current.classList.remove('opacity-100', 'translate-y-0');
      contentRef.current.classList.add('opacity-0', 'translate-y-4');

      // Trigger animation after a short delay
      const timer = setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.classList.remove('opacity-0', 'translate-y-4');
          contentRef.current.classList.add('opacity-100', 'translate-y-0');
        }
      }, 50); // Small delay to allow reset to render

      return () => clearTimeout(timer);
    }
  }, [theme]); // Re-run effect when theme changes

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[var(--ctp-crust)] text-[var(--ctp-text)] p-8">
      <ThemeSwitcher />
      <div ref={contentRef} className="max-w-sm md:max-w-md lg:max-w-xl w-full p-4 md:p-8 text-center opacity-0 translate-y-4 transition-all duration-700 ease-out md:bg-[var(--ctp-base)] md:rounded-xl md:shadow-2xl">
        <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[var(--ctp-profile-border)] shadow-lg drop-shadow-md transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/honza.jpeg"
            alt="Honza Hovorka"
            width={144}
            height={144}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 text-[var(--ctp-mauve)]">Honza Hovorka</h1>
        <h2 className="text-xl sm:text-2xl text-[var(--ctp-subtext0)] mb-6 font-medium">Senior Software Engineer</h2>
        <p className="text-lg text-[var(--ctp-text)] mb-4 leading-relaxed text-justify">
          As a <span className="font-semibold text-[var(--ctp-mauve)]">Senior Software Engineer</span> at <a href="https://www.dnanexus.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--ctp-blue)] hover:underline">DNAnexus</a>, I specialize in architecting and developing <span className="font-semibold text-[var(--ctp-green)]">robust, scalable, and high-performance backend systems</span>.
        </p>
        <p className="text-lg text-[var(--ctp-text)] mb-4 leading-relaxed text-justify">
          My expertise spans a diverse range of technologies, including <span className="font-semibold text-[var(--ctp-yellow)]">Node.js, TypeScript, Go, Ruby on Rails, PHP, PostgreSQL, AWS, MySQL, Terraform, AWS CDK, macOS, and Linux</span>, allowing me to craft elegant solutions for complex challenges.
        </p>
        <p className="text-lg text-[var(--ctp-text)] mb-8 leading-relaxed text-justify">
          My previous experiences include working at <a href="https://splashsports.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--ctp-blue)] hover:underline">Splash Inc.</a> and <a href="https://strv.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--ctp-blue)] hover:underline">STRV</a>.
        </p>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/honzahovorka" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl text-[var(--ctp-social-icon-default)] hover:text-[var(--ctp-social-icon-hover)] transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/honzahovorka/" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl text-[var(--ctp-social-icon-default)] hover:text-[var(--ctp-social-icon-hover)] transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://x.com/honzahovorka" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl text-[var(--ctp-social-icon-default)] hover:text-[var(--ctp-social-icon-hover)] transition-colors duration-300">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.instagram.com/honzahovorka_/" target="_blank" rel="noopener noreferrer" className="text-3xl sm:text-4xl text-[var(--ctp-social-icon-default)] hover:text-[var(--ctp-social-icon-hover)] transition-colors duration-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <p className="text-xs text-[var(--ctp-overlay0)] mt-8">© 2025 Crafted with <a href="https://github.com/google-gemini/gemini-cli" target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--ctp-blue)] hover:underline">Gemini CLI</a></p>
    </main>
  );
}
