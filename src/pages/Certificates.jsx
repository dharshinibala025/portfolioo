import { useState, useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { certificates } from '../data/content';
import GsapReveal from '../components/GsapReveal';
import CircularGallery from '../components/CircularGallery';

const Certificates = () => {
  const galleryItems = certificates.map((cert) => ({
    image: cert.image,
    text: `${cert.title} (${cert.issuedBy}, ${cert.year})`
  }));

  return (
    <section className="py-12">
      <GsapReveal>
        <PageHeader
          eyebrow="Recognitions"
          title="Skill Credentials"
          description="Completed recognized technical certifications that validate my skills in programming and AI workflows."
        />
      </GsapReveal>

      {/* 3D Cylindrical Snapping WebGL Gallery */}
      <div className="relative mt-8 w-full h-[400px] md:h-[550px] rounded-3xl border border-[#ECE7DE] bg-[rgba(255,255,255,0.7)] shadow-[0_8px_30px_rgba(23,23,23,0.01)] backdrop-blur-md overflow-hidden select-none">
        <CircularGallery 
          items={galleryItems} 
          bend={2.5} 
          textColor="#171717" 
          borderRadius={0.05} 
          font="bold 24px Space Grotesk"
          scrollSpeed={2.2}
          scrollEase={0.04}
        />
        
        {/* Interaction Tooltip */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none rounded-full bg-white/80 border border-[#ECE7DE] backdrop-blur-md px-4 py-1.5 text-[10px] font-bold text-[#171717]/60 tracking-widest uppercase shadow-sm">
          🖱️ Drag or Scroll to Rotate 3D Gallery
        </div>
      </div>
    </section>
  );
};

export default Certificates;
