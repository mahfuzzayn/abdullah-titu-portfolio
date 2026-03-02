import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { projectsData } from '@/lib/data';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return projectsData.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const project = projectsData.find((project) => project.slug === slug);

    return {
        title: `${project?.title} - ${project?.techStack
            .slice(0, 3)
            .join(', ')}`,
        description: project?.description,
    } as Metadata;
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = projectsData.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
