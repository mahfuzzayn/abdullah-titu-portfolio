'use client';
import SectionTitle from '@/components/SectionTitle';
import { experienceData } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = () => {
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
        <section id="experience" className="pb-section" ref={containerRef}>
            <div className="container">
                <SectionTitle title="Experience" />
                <div className="space-y-20">
                    {experienceData.map((experience, key) => (
                        <div className="grid sm:grid-cols-12" key={key}>
                            <div className="sm:col-span-5">
                                <p
                                    className={clsx(
                                        'slide-up text-5xl font-anton leading-none text-muted-foreground uppercase',
                                        {
                                            '': experience.date
                                                .split(' – ')[1]
                                                .includes('Present'),
                                        },
                                    )}
                                >
                                    {experience.title}
                                </p>
                            </div>
                            <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                                <div className="slide-up flex flex-col gap-2 leading-none">
                                    <p className="text-2xl capitalize">
                                        {experience.role}
                                    </p>
                                    <span className="text-sm flex items-center gap-1">
                                        {experience.date.split(' – ')[0]}
                                        <span className="inline-block h-[1px] w-3 bg-primary"></span>
                                        {experience.date.split(' – ')[1]}
                                    </span>
                                    <span className="text-sm">
                                        {experience.description}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
