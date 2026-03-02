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
                            className="w-full slide-up-and-fade max-h-[328px] object-cover"
                        />
                    </div>
                    <div className="md:col-span-7 md:mt-16">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                I&apos;m a Robotics Engineer and Embedded
                                Systems Developer passionate about turning ideas
                                into intelligent and reliable hardware
                                solutions. I work across robotics, automation,
                                and 3D printing to build systems that are both
                                innovative and practical.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                I focus on designing efficient, scalable, and
                                user-centered embedded systems that solve
                                real-world problems. My goal is to create
                                technology that performs with precision while
                                delivering meaningful impact.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
