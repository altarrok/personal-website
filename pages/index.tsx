import { GetServerSideProps, NextPage } from 'next';
import { FlippableCard } from '../components/FlippableCard';
import { SiDevdotto } from "react-icons/si";
import { TbBrowser, TbInfinity } from "react-icons/tb";
import { ShortcutCard } from '@/components/ShortcutCard';
import { useRef } from 'react';
import { RollingCard } from '@/components/RollingCard';
import { AppearingCard } from '@/components/AppearingCard';
import { ProjectCard } from '@/components/ProjectCard';
import { TitleSection } from '@/components/TitleSection';
import { TProject } from '@/payload/collections/Projects';
import escapeHTML from 'escape-html';
import { TExperience } from '@/payload/collections/Experiences';
import Head from 'next/head';
import Image from 'next/image';
import { GithubButton } from '@/components/GithubButton';
import { LinkedinButton } from '@/components/LinkedinButton';
import { EmailButton } from '@/components/EmailButton';
import getPayloadClient from '@/payload/payloadClient';

/*
  TODO
  -----
  > Issue with user-select, on touch controls when a card is holded, it  is selected, which is unwanted behavior
  > Custom Scrollbar
  > SEO
  > Project Card
    > Make the thumbnail move, and carousel around different pictures, with animation delay on each card
*/

const LandingPage: NextPage<{ projects: TProject[], experiences: TExperience[] }> = ({ projects, experiences }) => {
  const expertiseSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Altay Batuhan | Interactive Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Explore Altay Batuhan's dynamic resume – a passionate junior web developer showcasing enthusiasm and creativity. Dive into a world of interactive experiences and discover the skills that set Altay apart."
          key="desc"
        />
        <link rel="icon" href="/images/favicon-light.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/images/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
      </Head>
      <main className="w-full min-h-screen bg-black">
        <div className='xl:max-w-3xl flex flex-col mx-auto gap-4 p-4'>
          <div className='w-full min-h-[calc(100vh-2rem)] flex flex-col gap-4'>
            <div className='flex gap-4 w-full items-end justify-center h-12'>
              <GithubButton />
              <LinkedinButton />
              <EmailButton />
            </div>
            <div className="lg:h-[calc(50%-3rem)] flex items-end justify-center">
              <Image
                priority
                src="/images/transparent-logo.png"
                alt="Altay Batuhan Logo"
                width={1622}
                height={600}
                className='max-h-full w-auto'
              />
            </div>
            <div className='w-full flex gap-4 flex-1 lg:h-1/2 flex-col lg:flex-row'>
              <div className='flex gap-4 flex-col w-full flex-[2] lg:flex-1'>
                <ShortcutCard
                  text='Expertise'
                  onScrollTrigger={() => expertiseSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })}
                />
                <ShortcutCard
                  text='Experience'
                  onScrollTrigger={() => experienceSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })}
                />
              </div>
              <div className='w-full flex-1 flex flex-col'>
                <ShortcutCard
                  text='Portfolio'
                  onScrollTrigger={() => portfolioSectionRef.current?.scrollIntoView({
                    behavior: "smooth",
                  })}
                />
              </div>
            </div>

          </div>
          <div className='w-full h-[150vh] xl:h-[75vh] flex flex-col gap-4'>
            <div ref={expertiseSectionRef} className="h-1/6 xl:h-1/3">
              <TitleSection>Expertise</TitleSection>
            </div>
            <div className='w-full h-5/6 flex gap-4 flex-col xl:flex-row'>
              <FlippableCard
                title='Software Development'
                icon={<SiDevdotto />}
                para="I love being a software developer. It's great to see how my work can help people, making a real difference in their lives. I enjoy the daily challenges and the chance to learn something new, as technology is always changing. But it's not just about writing code; it's about working together as a team to solve problems and create something that can truly make a difference"
              />
              <div className='w-full h-full flex flex-col gap-4'>
                <FlippableCard
                  title='Web Dev'
                  icon={<TbBrowser />}
                  para="In web development, I believe each line of code I craft has the potential to improve someone's online experience"
                />
                <FlippableCard
                  title='DevOps'
                  icon={<TbInfinity />}
                  para="Don't just keep the lights on, ensure they're energy efficient and perfectly dimmable!"
                />
              </div>
            </div>
          </div>
          <div className='w-full h-[150vh] xl:h-screen flex flex-col gap-4'>
            <div ref={portfolioSectionRef} className="h-1/6">
              <TitleSection>Portfolio</TitleSection>
            </div>
            <div className='w-full h-5/6 grid grid-cols-2 grid-rows-6 lg:grid-rows-3 gap-6 px-6'>
              {projects?.map((project, i) => (
                <div className='row-span-1 col-span-2 lg:col-span-1' key={i}>
                  <ProjectCard
                    bgImageUrl={escapeHTML(project.thumbnail.url)}
                    projectTitle={escapeHTML(project.title)}
                    projectSlug={escapeHTML(project.slug)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div ref={experienceSectionRef} className="h-[25vh]">
            <TitleSection>Experience</TitleSection>
          </div>
          <div className='col-span-4 row-span-20 xl:row-span-8 col-start-1 row-start-[22] lg:row-start-[13] grid grid-rows-20 xl:grid-rows-4 gap-6'>
            {
              experiences.map((experience, i) => (
                <div key={i} className="xl:min-h-[25rem] row-span-5 xl:row-span-1 grid grid-cols-1 xl:grid-cols-5 grid-rows-5 xl:grid-rows-1 gap-2">
                  <div
                    className={`xl:col-span-3 ${i % 2 === 0 ? 'xl:col-start-1' : 'xl:col-start-3'} row-span-4 xl:row-span-1 row-start-2 xl:row-start-1`}
                  >
                    <RollingCard
                      from={i % 2 === 0 ? 'left' : 'right'}
                      title={experience.role}
                      para={experience.content}
                    />
                  </div>
                  <div
                    className={`row-span-1 ${i % 2 === 0 ? 'xl:col-start-4' : 'xl:col-start-1'} row-start-1 xl:col-span-2`}
                  >
                    <AppearingCard
                      img={{
                        src: experience.logo.url,
                        alt: experience.logo.alt
                      }}
                      title={experience.instutition}
                      subtitle={experience.location}
                      footer={experience.duration}
                    />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </main>
      <footer className='w-full bg-black h-12 flex items-center justify-center'>
        <h5 className='text-white text-base'>Thank you for visiting my website - Altay Batuhan</h5>
      </footer>
    </>
  );
}

export default LandingPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const payload = await getPayloadClient();
  const projectQuery = await payload.find({
    collection: 'projects',
    sort: "-createdAt",
    limit: 6, // To increase the number of projects, re-configure the layout and increase this limit
  });

  const experienceQuery = await payload.find({
    collection: "experiences",
    sort: "-createdAt",
    limit: 4, // To increase the number of experiences, re-configure the layout and increase this limit
  })

  return {
    props: {
      projects: projectQuery.docs,
      experiences: experienceQuery.docs,
    },
  };
};
