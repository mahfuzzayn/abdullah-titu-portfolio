 'use client';
 import SectionTitle from '@/components/SectionTitle';
 import { achievementsData, missionAndVisionData } from '@/lib/data';
 import { useGSAP } from '@gsap/react';
 import gsap from 'gsap';
 import { ScrollTrigger } from 'gsap/all';
 import React, { useRef } from 'react';
 
 gsap.registerPlugin(ScrollTrigger, useGSAP);
 
 const MissionAndVision = () => {
     const containerRef = useRef<HTMLDivElement>(null);
 
     useGSAP(
         () => {
             const slideUpEl =
                 containerRef.current?.querySelectorAll('.slide-up');
 
             if (!slideUpEl?.length) return;
 
             const tl = gsap.timeline({
                 scrollTrigger: {
                     trigger: containerRef.current,
                     start: 'top 80%',
                     end: 'bottom 80%',
                     scrub: 0.5,
                 },
             });
 
             tl.from('.slide-up', {
                 opacity: 0,
                 y: 40,
                 ease: 'none',
                 stagger: 0.4,
             });
         },
         { scope: containerRef },
     );
 
     useGSAP(
         () => {
             const tl = gsap.timeline({
                 scrollTrigger: {
                     trigger: containerRef.current,
                     start: 'bottom 50%',
                     end: 'bottom 10%',
                     scrub: 1,
                 },
             });
 
             tl.to(containerRef.current, {
                 y: -150,
                 opacity: 0,
             });
         },
         { scope: containerRef },
     );
 
     return (
         <section id="mission-and-vision" className="pb-section" ref={containerRef}>
             <div className="container">
                 <SectionTitle title="Mission & Vision" />
                 <div className="space-y-20">
                     {missionAndVisionData.map((mission, idx) => (
                         <div className="grid sm:grid-cols-12" key={idx}>
                             <div className="sm:col-span-12">
                                 <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                                     {mission.title}
                                 </p>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
         </section>
     );
 };
 
 export default MissionAndVision;
