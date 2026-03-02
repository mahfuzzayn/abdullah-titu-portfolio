import { generalInfoData } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';
import Link from 'next/link';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats = await fetch(
        'https://api.github.com/repos/abdullah-titu/abdullah-titu-portfolio',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        },
    );

    const { stargazers_count, forks_count } =
        (await repoStats.json()) as RepoStats;

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Want to have a conversation?</p>
                <div className="flex flex-col">
                    <Link
                        href={`mailto:${generalInfoData.email}`}
                        className="text-3xl sm:text-4xl font-anton inline-block mt-5 hover:underline"
                    >
                        {generalInfoData.email}
                    </Link>
                    <Link
                        href={`https://wa.me/+8801862100733`}
                        className="text-xl sm:text-2xl font-anton inline-block mt-5 mb-10 hover:underline"
                    >
                        {generalInfoData.number}
                    </Link>
                </div>
                <div className="">
                    <Link
                        href="https://github.com/mahfuzzayn/"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by Mahfuz Zayn
                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className="flex items-center gap-2">
                                <Star size={18} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-2">
                                <GitFork size={18} /> {forks_count}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
