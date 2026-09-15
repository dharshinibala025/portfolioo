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
                    description="Interactive network of backend frameworks, databases, core languages, AI tools, and verified certifications."
                />
            </GsapReveal>

            <SkillWebGraph />

            <div className="container mx-auto px-4 mt-2 max-w-5xl space-y-10">
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
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white border border-[#ECE7DE] shadow-sm hover:shadow-md hover:border-[#B8893D]/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#B8893D]/5 rounded-bl-full pointer-events-none" />

                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#B8893D]/10 text-[#B8893D] border border-[#B8893D]/20">
                                            {cert.year}
                                        </span>
                                        <span className="text-xs font-semibold text-[#8A8A8A]">
                                            {cert.issuedBy}
                                        </span>
                                    </div>
                                    <h4 className="font-serif-display font-bold text-lg text-[#171717] mb-2 group-hover:text-[#B8893D] transition-colors">
                                        {cert.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                                        {cert.description}
                                    </p>
                                </div>
                                <div className="mt-5 pt-3 border-t border-[#ECE7DE] flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        <span>Verified Credential</span>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B8893D]">
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




