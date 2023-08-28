import { GetServerSideProps, NextPage } from 'next';
import { FlippableCard } from '../components/FlippableCard';
import { SiDevdotto } from "react-icons/si";
import { TbBrowser, TbInfinity } from "react-icons/tb";
import { ShortcutCard } from '../components/ShortcutCard';
import { useRef } from 'react';
import { RollingCard } from '../components/RollingCard';
import { AppearingCard } from '../components/AppearingCard';
import { ProjectCard } from '../components/ProjectCard';
import { TitleSection } from '../components/TitleSection';
import payload from 'payload';
import { TProject } from '../collections/Projects';
import escapeHTML from 'escape-html';

/*
  TODO
  -----
  > Custom Scrollbar
  > CMS
    > Content Management for Experiences
  > SEO
  > FlippableCard
    > Show "Click to reveal" message when hover
*/

const LandingPage: NextPage<{ projects: TProject[] }> = ({ projects }) => {
  const expertiseSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="grid grid-cols-4 grid-rows-19 gap-4 p-4 w-full min-h-screen bg-black relative">
      <div className="col-span-4 row-span-2" style={{ height: 'calc(50vh - 1.5rem)' }}>
        <TitleSection>ALTAY BATUHAN</TitleSection>
      </div>
      <div className="col-span-2 row-start-3">
        <ShortcutCard
          text='Expertise'
          onScrollTrigger={() => expertiseSectionRef.current.scrollIntoView({
            behavior: "smooth",
          })}
        />
      </div>
      <div className="col-span-2 col-start-1 row-start-4">
        <ShortcutCard
          text='Experience'
          onScrollTrigger={() => experienceSectionRef.current.scrollIntoView({
            behavior: "smooth",
          })}
        />
      </div>
      <div className="col-span-2 row-span-2 col-start-3 row-start-3">
        <ShortcutCard
          text='Portfolio'
          onScrollTrigger={() => portfolioSectionRef.current.scrollIntoView({
            behavior: "smooth",
          })}
        />
      </div>
      <div ref={expertiseSectionRef} className="col-span-4 row-start-5">
        <TitleSection>Expertise</TitleSection>
      </div>
      <div className="col-span-2 row-span-2 row-start-6">
        <FlippableCard
          title='Software Development'
          icon={<SiDevdotto />}
          para="I love being a software developer. It's great to see how my work can help people, making a real difference in their lives. I enjoy the daily challenges and the chance to learn something new, as technology is always changing. But it's not just about writing code; it's about working together as a team to solve problems and create something that can truly make a difference"
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-6">
        <FlippableCard
          title='Web Dev'
          icon={<TbBrowser />}
          para="In web development, I believe each line of code I craft has the potential to improve someone's online experience"
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-7">
        <FlippableCard
          title='DevOps'
          icon={<TbInfinity />}
          para="Don't just keep the lights on, ensure they're energy efficient and perfectly dimmable!"
        />
      </div>
      <div ref={portfolioSectionRef} className="col-span-4 row-start-[8]">
        <TitleSection>Portfolio</TitleSection>
      </div>
      <div className='col-span-4 row-span-3 col-start-1 row-start-[9] grid grid-cols-2 grid-rows-3 auto-rows-min gap-2'>
        {projects?.map((project, i) => (
          <div className='row-span-1' key={i}>
            <ProjectCard
              bgImageUrl={escapeHTML(project.thumbnail.url)}
              projectTitle={escapeHTML(project.title)}
              projectSlug={escapeHTML(project.slug)}
            />
          </div>
        ))}
      </div>
      <div ref={experienceSectionRef} className="col-span-4 col-start-1 row-start-[12]">
        <TitleSection>Experience</TitleSection>
      </div>
      <div className="col-span-3 col-start-1 row-span-2 row-start-[13]">
        <RollingCard
          from='left'
          title="CO-OP Web Support"
          para='WIP'
        />
      </div>
      <div className="row-span-2 col-start-4 row-start-[13]">
        <AppearingCard
          img={{
            src: "/images/UBC-logo.webp",
            alt: "University of British Columbia"
          }}
          title='PHSA'
          subtitle='Burnaby, Canada'
          footer='May-Sept 2023'
        />
      </div>
      <div className="row-span-2 col-start-1 row-start-[15]">
        <AppearingCard
          img={{
            src: "/images/HT-logo.svg",
            alt: "HackerTables"
          }}
          title='HackerTables'
          subtitle='Vancouver, Canada'
          footer='Sept 2021-Jan 2023'
        />
      </div>
      <div className="col-span-3 col-start-2 row-span-2 row-start-[15]">
        <RollingCard
          from='right'
          title="Lead Developer"
          para='During my role as CTO at HackerTables, I was responsible for leading the technical side of the company and ensuring that our products and services met the needs of our customers. I worked closely with the rest of the leadership team to set the technical direction of the company and to make strategic decisions about the products and technologies we used. I also managed a team of developers and other technical staff, providing guidance and mentorship to help them grow and develop their skills. I also played a key role in building and maintaining our technical infrastructure, ensuring that it was secure, scalable, and able to handle the demands of a growing user base. Additionally, I was involved in the development of new features and products, working closely with the product team to identify and implement new features and improvements.'
        />
      </div>
      <div className="col-span-3 col-start-1 row-span-2 row-start-[17]">
        <RollingCard
          from='left'
          title="Software Developer Intern"
          para='My internship as a software developer at SAP provided valuable experience in real-world projects. I learned about Agile software development and team collaboration. I gained hands-on experience with various programming languages and tools. Mentorship from experienced developers taught me best practices in software development. The internship exposed me to the challenges and complexities of enterprise software development. I learned how to work with large code bases and handle complex projects. I got a better understanding of the software development industry. The internship helped me develop my technical skills and problem-solving abilities. I gained a broader perspective on the field of computer science. Overall, it was a valuable and enlightening experience.'
        />
      </div>
      <div className="row-span-2 col-start-4 row-start-[17]">
        <AppearingCard
          img={{
            src: "/images/SAP-logo.webp",
            alt: "SAP"
          }}
          title='SAP'
          subtitle='Vancouver, Canada'
          footer='Sept 2020-2021'
        />
      </div>
      <div className="row-span-2 col-start-1 row-start-[19]">
        <AppearingCard
          img={{
            src: "/images/UBC-logo.webp",
            alt: "University of British Columbia"
          }}
          title='UBC'
          subtitle='Vancouver, Canada'
          footer='Sept 2018-Dec 2023'
        />
      </div>
      <div className="col-span-3 col-start-2 row-span-2 row-start-[19]">
        <RollingCard
          from='right'
          title="Computer Science, Bachelor of Science"
          para='I am in my 4th year of Bachelor of Science in Computer Science at UBC. My major has provided me with a solid foundation in the fundamentals of computer science. I have learned programming languages, algorithms and data structures, software engineering, and various other computer science concepts. I have also gained experience in working on real-world projects and have honed my problem-solving and critical thinking skills. Additionally, I have been able to apply my knowledge in a practical setting by participating in internships and other opportunities. My degree has equipped me with the knowledge and skills necessary to excel in the field of computer science and has prepared me to take on new challenges and opportunities in the future.'
        />
      </div>
    </main>
  );
}

export default LandingPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const pageQuery = await payload.find({
    collection: 'projects',
    sort: "-createdAt",
    limit: 6,
  });

  return {
    props: {
      projects: pageQuery.docs,
    },
  };
};