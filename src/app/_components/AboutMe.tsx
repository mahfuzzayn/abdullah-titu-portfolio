'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import aboutMeImg from '@/assets/images/about-me-image-1.jpg';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    I build user-focused robotic and embedded solutions designed
                    to meet real-world needs with precision and reliability.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9 md:gap-10">
                    <div className="md:col-span-5 space-y-6">
                        <p className="text-5xl slide-up-and-fade">
                            Abdullah Titu
                        </p>
                        <Image
                            src={aboutMeImg}
                            alt="About Me Image"
                            className="w-full slide-up-and-fade object-cover"
                        />
                    </div>
                    <div className="md:col-span-7 md:mt-16">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a Robotics Engineer and Embedded Systems Developer passionate about building intelligent, industry-grade hardware systems. My work spans robotics, avionics, and CubeSat development, where I design and implement reliable, high-performance solutions using multiple development boards and advanced embedded architectures. I also specialize in 3D printing, including advanced slicing and prototyping, and PCB design for custom electronics development.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                As an <span className="font-medium text-gray-300">International Robot Olympiad Gold Medalist</span>, I have been recognized for technical excellence and innovation at an international level. My interests strongly align with aerospace engineering, particularly in the development of scalable CubeSat platforms, real-time telemetry systems, and mission-focused avionics design.

                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I am also interpreting and leading FavLab Bangladesh, and I am actively involved with Tech Bee, contributing to technology-driven initiatives and innovation-focused projects. Through industry-grade development and research-oriented engineering, my goal is to make a meaningful impact in robotics and aerospace technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
