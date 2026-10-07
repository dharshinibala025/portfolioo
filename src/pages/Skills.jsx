import PageHeader from '../components/PageHeader';
import GsapReveal from '../components/GsapReveal';
import SkillWebGraph from '../components/SkillWebGraph';

import { motion } from 'framer-motion';
import { certificates } from '../data/content';
import { Award, CheckCircle2 } from 'lucide-react';

const Skills = () => {
    return (
        <section className="pb-6">
            <GsapReveal>
                <PageHeader
                    eyebrow="Technical Matrix"
                    title="Dharshini's Skillset & Credentials"
                    description="Interactive technical matrix of backend frameworks, databases, core languages, AI specializations, and verified certifications."
                />
            </GsapReveal>

            <SkillWebGraph />

            <div className="w-full max-w-full px-2 mt-2 space-y-10">
                {/* Key Certifications Section (4 Resume Certificates) */}
                <div className="pt-8 border-t border-[#ECE7DE]">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8893D]/10 border border-[#B8893D]/20 mb-3">
                            <Award className="w-4 h-4 text-[#B8893D]" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-[#B8893D]">
                                Recognized Credentials
                            </span>
                        </div>
                        <h3 className="text-3xl font-serif-display font-bold text-[#171717]">
                            Certifications & Achievements
                        </h3>
                        <p className="text-sm text-[#6B6B6B] mt-2 max-w-lg mx-auto leading-relaxed">
                            Verified technical certifications from AICTE, NPTEL IIT, Infosys Springboard, and Bharathidasan University.
                        </p>
                    </div>

                    {/* Clean Professional 4 Certifications Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className="p-6 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:shadow-xl hover:border-[#9A7B4F]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-28 h-28 bg-[#9A7B4F]/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-[#9A7B4F]/5 rounded-full blur-xl pointer-events-none" />

                                <div>
                                    <div className="flex items-center justify-between mb-3.5">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FAF6F0] text-[#9A7B4F] border border-[#9A7B4F]/25 shadow-2xs">
                                            {cert.year}
                                        </span>
                                        <span className="text-xs font-semibold text-[#8A8A8A] bg-[#FAF8F5] px-2.5 py-1 rounded-lg border border-[#ECE7DE]">
                                            {cert.issuedBy}
                                        </span>
                                    </div>
                                    <h4 className="font-serif-display font-bold text-lg text-[#171717] mb-2 group-hover:text-[#9A7B4F] transition-colors">
                                        {cert.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                                <div className="mt-5 pt-3.5 border-t border-[#ECE7DE]/70 flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        <span>Verified Credential</span>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A7B4F] bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#9A7B4F]/20">
                                        Verified
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;




