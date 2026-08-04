import { motion } from 'framer-motion';
import { Sparkles, MapPin, GraduationCap, ExternalLink, Code2, Cpu, Trophy, Activity, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { personalInfo, heroStats, projects, socials } from '../data/content';

const BentoDashboard = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-2 sm:px-4">
      {/* Header title for Bento Dashboard */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#ECE7DE]">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#9A7B4F] font-semibold flex items-center gap-1.5 mb-1">
            <Sparkles size={14} /> Personal Dashboard
          </span>
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#171717]">
            Dharshini at a Glance
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#6B6B6B] mt-2 sm:mt-0 font-medium">
          Asymmetric metrics, live activity, & core stack
        </p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]">
        {/* Tile 1: Profile & Status (2 cols wide, 2 rows tall) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-2 md:row-span-2 rounded-3xl border border-[#ECE7DE] bg-gradient-to-br from-white via-[#FCFBF8] to-[#F6F2EA] p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(23,23,23,0.03)] relative overflow-hidden group"
        >
          {/* Subtle gold accent circle glow background */}
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#9A7B4F]/10 blur-2xl group-hover:bg-[#9A7B4F]/20 transition-all duration-500" />

          {/* Top Row: Status badge & avatar */}
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-2xl border-2 border-[#9A7B4F]/40 shadow-md">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#171717]">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#9A7B4F] mt-0.5">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Roles</span>
            </div>
          </div>

          {/* Middle Bio */}
          <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed relative z-10 my-4">
            {personalInfo.description}
          </p>

          {/* Bottom Details Footer */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#ECE7DE] relative z-10 text-xs font-medium text-[#171717]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#9A7B4F]" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={14} className="text-[#9A7B4F]" />
              <span className="truncate" title={personalInfo.college}>K.S.R. College of Engg</span>
            </div>
          </div>
        </motion.div>

        {/* Tile 2: Currently Building & Shipping (1 col wide, 2 rows tall) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-1 md:row-span-2 rounded-3xl border border-[#ECE7DE] bg-white p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(23,23,23,0.03)]"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9A7B4F] flex items-center gap-1">
                <Activity size={13} /> Active Projects
              </span>
              <span className="rounded-md bg-[#ECE7DE] px-2 py-0.5 text-[10px] font-semibold text-[#171717]">
                3 Shipped
              </span>
            </div>
            <h4 className="font-serif-display text-lg font-bold text-[#171717]">
              Building & Shipping
            </h4>

            <div className="space-y-3 mt-4">
              {projects.slice(0, 3).map((p) => (
                <a
                  key={p.id}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-[#ECE7DE] bg-[#FCFBF8] p-3 transition-all duration-200 hover:border-[#9A7B4F] hover:bg-white hover:shadow-sm"
                >
                  <div className="truncate pr-2">
                    <h5 className="font-semibold text-xs text-[#171717] group-hover:text-[#9A7B4F] transition-colors truncate">
                      {p.title}
                    </h5>
                    <span className="text-[10px] text-[#8A8A8A] truncate block">
                      {p.tags.join(' • ')}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="text-[#8A8A8A] group-hover:text-[#9A7B4F] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          <a
            href="#projects"
            className="mt-4 inline-flex items-center justify-center gap-1 text-xs font-semibold text-[#9A7B4F] hover:underline"
          >
            Explore All Projects →
          </a>
        </motion.div>

        {/* Tile 3: Key Metrics Grid (1 col wide, 1 row tall) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-[#ECE7DE] bg-white p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(23,23,23,0.03)]"
        >
          <div className="flex items-center justify-between text-[#9A7B4F]">
            <Trophy size={18} />
            <span className="text-[10px] font-bold uppercase tracking-wider bg-[#9A7B4F]/10 px-2 py-0.5 rounded-full">Metrics</span>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-2 text-center mt-2">
              <div className="p-2 rounded-xl bg-[#FCFBF8] border border-[#ECE7DE]">
                <span className="font-serif-display font-bold text-xl text-[#171717] block">01</span>
                <span className="text-[10px] font-medium text-[#6B6B6B]">Internship</span>
              </div>
              <div className="p-2 rounded-xl bg-[#FCFBF8] border border-[#ECE7DE]">
                <span className="font-serif-display font-bold text-xl text-[#9A7B4F] block">8.16</span>
                <span className="text-[10px] font-medium text-[#6B6B6B]">CGPA</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tile 4: Philosophy Quote (1 col wide, 1 row tall) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-[#ECE7DE] bg-[#171717] p-5 flex flex-col justify-between text-[#FCFBF8] shadow-md relative overflow-hidden"
        >
          <div className="flex items-center gap-1.5 text-xs text-[#C2AB8A] font-semibold uppercase tracking-wider">
            <Sparkles size={12} /> Philosophy
          </div>
          <p className="font-serif-display italic text-xs sm:text-sm text-[#ECE7DE] leading-relaxed my-2">
            "Turning small daily actions into meaningful long-term achievements and human-centered AI."
          </p>
          <span className="text-[10px] text-[#C2AB8A] font-mono">— Dharshini</span>
        </motion.div>

        {/* Tile 5: Connect & Socials (1 col wide, 1 row tall) */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-[#ECE7DE] bg-white p-5 flex flex-col justify-between shadow-[0_10px_30px_rgba(23,23,23,0.03)]"
        >
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9A7B4F]">Connect</span>
          <div className="flex items-center gap-2 my-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#ECE7DE] bg-[#FCFBF8] text-[#171717] transition-all hover:border-[#9A7B4F] hover:bg-[#9A7B4F] hover:text-white"
                  title={s.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          <a
            href="#contact"
            className="text-xs font-semibold text-[#171717] hover:text-[#9A7B4F] inline-flex items-center gap-1"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default BentoDashboard;
