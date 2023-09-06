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
        <link rel="icon" href="/images/favicon-light.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/images/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
      </Head>
      <main className="grid grid-cols-4 grid-rows-37 lg:grid-rows-28 xl:grid-rows-19 gap-4 p-4 w-full min-h-screen bg-black relative">
        <div className="col-span-4 row-span-2 min-h-full h-mobile-title lg:h-title flex flex-col items-center">
          <div className='flex flex-0 gap-4'>
            <GithubButton />
            <LinkedinButton />
            <EmailButton />
          </div>
          <div className='flex-1 h-0 flex items-center'>
            <Image
              src="/images/transparent-logo.png"
              alt="Altay Batuhan Logo"
              width={1622}
              height={600}
              className='max-h-full w-auto'
            />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 row-start-3">
          <ShortcutCard
            text='Expertise'
            onScrollTrigger={() => expertiseSectionRef.current?.scrollIntoView({
              behavior: "smooth",
            })}
          />
        </div>
        <div className="col-span-4 lg:col-span-2 col-start-1 row-start-5 lg:row-start-4">
          <ShortcutCard
            text='Experience'
            onScrollTrigger={() => experienceSectionRef.current?.scrollIntoView({
              behavior: "smooth",
            })}
          />
        </div>
        <div className="col-span-4 lg:col-span-2 lg:row-span-2 lg:col-start-3 row-start-4 lg:row-start-3">
          <ShortcutCard
            text='Portfolio'
            onScrollTrigger={() => portfolioSectionRef.current?.scrollIntoView({
              behavior: "smooth",
            })}
          />
        </div>
        <div ref={expertiseSectionRef} className="col-span-4 row-start-6 lg:row-start-5">
          <TitleSection>Expertise</TitleSection>
        </div>
        <div className="col-span-4 lg:col-span-2 row-span-3 row-start-7 lg:row-start-6 lg:row-span-2">
          <FlippableCard
            title='Software Development'
            icon={<SiDevdotto />}
            para="I love being a software developer. It's great to see how my work can help people, making a real difference in their lives. I enjoy the daily challenges and the chance to learn something new, as technology is always changing. But it's not just about writing code; it's about working together as a team to solve problems and create something that can truly make a difference"
          />
        </div>
        <div className="col-span-4 lg:col-span-2 lg:col-start-3 row-start-[10] row-span-2 lg:row-start-6 lg:row-span-1">
          <FlippableCard
            title='Web Dev'
            icon={<TbBrowser />}
            para="In web development, I believe each line of code I craft has the potential to improve someone's online experience"
          />
        </div>
        <div className="col-span-4 lg:col-span-2 lg:col-start-3 row-start-[12] row-span-2 lg:row-start-7 lg:row-span-1">
          <FlippableCard
            title='DevOps'
            icon={<TbInfinity />}
            para="Don't just keep the lights on, ensure they're energy efficient and perfectly dimmable!"
          />
        </div>
        <div ref={portfolioSectionRef} className="col-span-4 row-start-[14] lg:row-start-[8]">
          <TitleSection>Portfolio</TitleSection>
        </div>
        <div className='col-span-4 row-span-6 lg:row-span-3 row-start-[15] lg:row-start-[9] grid grid-cols-2 grid-rows-6 lg:grid-rows-3 gap-2'>
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
        <div ref={experienceSectionRef} className="col-span-4 col-start-1 row-start-[21] lg:row-start-[12]">
          <TitleSection>Experience</TitleSection>
        </div>
        <div className='col-span-4 row-span-20 xl:row-span-8 col-start-1 row-start-[22] lg:row-start-[13] grid grid-rows-20 xl:grid-rows-4 gap-6 xl:gap-2'>
          {
            experiences.map((experience, i) => (
              <div key={i} className="row-span-5 xl:row-span-1 grid grid-cols-1 xl:grid-cols-4 grid-rows-5 xl:grid-rows-1 gap-2">
                <div
                  className={`xl:col-span-3 ${i % 2 === 0 ? 'xl:col-start-1' : 'xl:col-start-2'} row-span-4 xl:row-span-1 row-start-2 xl:row-start-1`}
                >
                  <RollingCard
                    from={i % 2 === 0 ? 'left' : 'right'}
                    title={experience.role}
                    para={experience.content}
                  />
                </div>
                <div
                  className={`row-span-1 ${i % 2 === 0 ? 'xl:col-start-4' : 'xl:col-start-1'} row-start-1`}
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
