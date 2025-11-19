import { socials } from '../data/content';

const Footer = () => (
  <footer className="border-t border-white/5 bg-base-900/80 py-8 backdrop-blur-xl">
    <div className="mx-auto flex w-[95%] max-w-6xl flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
      <p>© {new Date().getFullYear()} Dharshini Balasubramaniam. Crafted with passion.</p>
      <div className="flex items-center gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition hover:text-accent-300"
          >
            {social.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;







