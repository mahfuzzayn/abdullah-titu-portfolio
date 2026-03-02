/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { toast } from "sonner";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Enter a valid email"),
    message: z.string().min(5, "Message must be at least 5 characters"),
});

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactMe = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "bottom 50%",
                    toggleActions: "restart none none reverse",
                    scrub: 1,
                },
            });

            tl.from(".contact-form-item", {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef }
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "bottom 50%",
                    end: "bottom 20%",
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef }
    );

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        const formData = new FormData();
        const toastId = toast.loading("Sending message...");

        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);

        formData.append(
            "access_key",
            `${process.env.NEXT_PUBLIC_MESSAGE_SENDER_API_KEY as string}`
        );

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            }).then((res) => res.json());

            if (res?.success) {
                form.reset();
                toast.success("Message has been sent successfully.", {
                    id: toastId,
                });
            } else {
                toast.error("Message has not been sent.", {
                    id: toastId,
                });
            }
        } catch (error) {
            toast.error("Something went wrong.", {
                id: toastId,
            });
            form.reset();
        }
    };

    return (
        <section id="contact" className="pb-section">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Contact Me" />
                <div className="space-y-10">
                    <p>Fill out the form and submit</p>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <div className="flex flex-col md:flex-row gap-6 h-full">
                                <div className="space-y-6 w-full">
                                    <div>
                                        <FormField
                                            control={form.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="text"
                                                            placeholder="Enter your name..."
                                                            className="h-12 md:text-lg!"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="email"
                                                            placeholder="Enter your email..."
                                                            className="h-12 md:text-lg!"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea
                                                        placeholder="Enter your message..."
                                                        className="md:h-[142px] md:text-lg!"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                            <Button as="button" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
