import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

const CertificateCard = ({ certificate, index, onViewClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative h-[280px] w-full overflow-hidden rounded-3xl border border-white/10 bg-base-900 shadow-lg transition-all hover:shadow-accent-500/20"
        >
            {/* Background Image */}
            <div className="absolute inset-0 h-full w-full">
                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-900 via-base-900/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="inline-flex items-center rounded-full border border-white/10 bg-accent-500/20 px-3 py-1 text-xs font-medium text-accent-200 backdrop-blur-md">
                            {certificate.year}
                        </span>
                        <span className="text-xs font-bold tracking-widest text-white/40 uppercase">
                            0{index + 1}
                        </span>
                    </div>

                    <h3 className="mb-2 font-display text-2xl font-bold text-white">
                        {certificate.title}
                    </h3>

                    <p className="mb-6 text-sm leading-relaxed text-muted group-hover:text-white/90 transition-colors duration-300">
                        Issued by {certificate.issuedBy}
                    </p>

                    <div className="flex items-center gap-4 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        <button
                            onClick={() => onViewClick(certificate.image)}
                            className="group/btn relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-black transition-transform hover:scale-105"
                        >
                            <FaAward className="text-lg" />
                            <span>View Certificate</span>
                            <FaExternalLinkAlt className="text-xs" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CertificateCard;
