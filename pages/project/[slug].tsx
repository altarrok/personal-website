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
            <h1 className='text-9xl font-bold text-center break-words'>{escapeHTML(project.title)}</h1>
            <hr className="h-px my-8 bg-gray-300 border-0" />
            <section className='break-words'>
                <RichText content={project.content} />
            </section>
        </>
    );
}


const ProjectPage: NextPage<{ project?: TProject }> = ({ project }) => {
    const title = `Altay Batuhan | ${project?.title || "Interactive Resume"}`;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/favicon-light.ico" media="(prefers-color-scheme: light)" />
                <link rel="icon" href="/images/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
            </Head>
            <main className="w-full min-h-screen bg-black relative flex items-center justify-center overflow-x-hidden">
                <div className='fixed top-2.5 left-4 z-50'>
                    <BackToMainPageButton />
                </div>
                <div className='w-screen lg:max-w-5xl py-8 px-8 lg:px-16 bg-white lg:rounded-2xl my-16 lg:m-16'>
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