"use client";
import ArrowAnimation from "@/components/ArrowAnimation";
import Button from "@/components/Button";
import { generalInfoData, socialLinksData } from "@/lib/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import React from "react";

// Images
import bannerImage from "@/assets/images/banner-image-1.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "bottom 70%",
                    end: "bottom 10%",
                    scrub: 1,
                },
            });

            tl.fromTo(
                ".slide-up-and-fade",
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 }
            );
        },
        { scope: containerRef }
    );

    return (
        <section className="relative overflow-hidden max-lg:pt-section" id="banner">
            <ArrowAnimation />
            <div
                className="container h-svh max-lg:min-h-[1230px] max-md:pb-10 flex justify-center lg:justify-between lg:items-center max-lg:flex-col max-md:gap-20 max-lg:gap-10"
                ref={containerRef}
            >
                <div className="max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <div className="slide-up-and-fade mb-10 -mt-2">
                        <nav aria-label="Social media">
                            <ul className="flex flex-wrap gap-2 sm:gap-3">
                                {socialLinksData.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs sm:text-sm uppercase tracking-wide text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                                        >
                                            <link.icon className="h-6"/>
                                            <MoveUpRight
                                                size={16}
                                                className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">ROBOTICS</span>
                        <br /> <span className="ml-4">ENGINEER</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{" "}
                        <span className="font-medium text-foreground">
                            Titu
                        </span>
                        , a Bangladeshi innovator working in CubeSat technology, robotics, and embedded systems engineering.
                        I am currently developing FavSat , a next-generation DIY CubeSat platform designed for education, research, and real-time telemetry applications.
                    </p>
                    <div className="flex gap-x-4 slide-up-and-fade">
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={generalInfoData.calendlyLink}
                            variant="primary"
                            className="mt-9 banner-button"
                        >
                            Book a Call
                        </Button>
                        <Button
                            as="link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={generalInfoData.resumeLink}
                            variant="dark"
                            defaultBg="bg-primary"
                            className="mt-9 banner-button"
                        >
                            Resume
                        </Button>
                    </div>
                </div>
                <div className="slide-up-and-fade">
                    <Image
                        src={bannerImage}
                        alt="Banner Image"
                        className="w-full max-w-md"
                    />
                </div>
                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            4+
                        </h5>
                        <p className="text-white">Years of Experience</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            10+
                        </h5>
                        <p className="text-white">Completed Projects</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            8K+
                        </h5>
                        <p className="text-white">Hours Worked</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
