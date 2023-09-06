import { GetServerSideProps, NextPage } from 'next';
import { TProject } from "@/payload/collections/Projects"
import { GiHalfDead } from "react-icons/gi";
import { BackToMainPageButton } from '@/components/BackToMainPageButton';
import RichText from '@/components/RichText';
import escapeHTML from 'escape-html';
import Head from 'next/head';
import getPayloadClient from '@/payload/payloadClient';

const _renderProjectContent = (project?: TProject) => {
    if (!project) {
        return (
            <div className='flex flex-col items-center gap-8'>
                <GiHalfDead className='text-8xl text-purple-700' />
                <h1 className='font-bold text-5xl text-purple-700'>Project Not Found</h1>
                <BackToMainPageButton />
            </div>
        );
    }

    return (
        <>
            <h1 className='text-9xl font-bold text-center'>{escapeHTML(project.title)}</h1>
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <section>
                <RichText content={project.content} />
            </section>
        </>
    );
}


const ProjectPage: NextPage<{ project?: TProject }> = ({ project }) => {
    return (
        <>
            <Head>
                <title>Altay Batuhan | {project?.title || "Interactive Resume"}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon-light.ico" media="(prefers-color-scheme: light)" />
                <link rel="icon" href="/images/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
            </Head>
            <main className="w-full min-h-screen bg-black relative flex items-center justify-center">
                <div className='fixed top-4 left-4'>
                    <BackToMainPageButton />
                </div>
                <div className='max-w-5xl py-8 px-16 bg-white rounded-2xl m-16'>
                    {_renderProjectContent(project)}
                </div>
            </main>
        </>
    );
}

export default ProjectPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const slug = ctx.params?.slug;

    const payload = await getPayloadClient();
    const projectQuery = await payload.find({
        collection: 'projects',
        where: {
            slug: {
                equals: slug,
            },
        },
    });

    if (!projectQuery.docs[0]) {
        ctx.res.statusCode = 404;

        return {
            props: {},
        };
    }

    return {
        props: {
            project: projectQuery.docs[0],
        },
    };
};