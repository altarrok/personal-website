import { NextPage } from 'next';
import { FlippableCard } from '../components/FlippableCard';
import { SiDevdotto } from "react-icons/si";
import { TbBrowser, TbInfinity } from "react-icons/tb";
import { ShortcutCard } from '../components/ShortcutCard';
import { useRef } from 'react';
import { RollingCard } from '../components/RollingCard';
import { AppearingCard } from '../components/AppearingCard';
import { ProjectCard } from '../components/ProjectCard';

/*
  TODO
  -----
  > Project cards
    > Project Card
    > Project Page
    > Page transition
  > Title sections
  > Custom Scrollbar
  > CMS
    > Content Management for Projects
    > (BONUS) Content Management for Experiences
  > SEO
  > FlippableCard
    > Show "Click to reveal" message when hover
*/

const LandingPage: NextPage = () => {
  const expertiseSectionRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main className="grid grid-cols-4 grid-rows-19 gap-4 p-4 w-full min-h-screen bg-black relative">
      <div className="col-span-4 row-span-2" style={{ height: 'calc(50vh - 1.5rem)' }}>BIG TITLE</div>
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
      <div ref={expertiseSectionRef} className="col-span-4 row-start-5">Expertise</div>
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
      <div ref={portfolioSectionRef} className="col-span-4 row-start-[8]">Portfolio Title</div>
      {/* Project Cards: When clicked, transition to the project page */}
      <div className="col-span-2 col-start-1 row-start-[9]">
        <ProjectCard
          bgImageUrl="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1800&t=st=1691781076~exp=1691781676~hmac=60efc9c4d9c98f3df1365e3e4d0664e4ea0c197744d615f314f2ab8b8acdf08a"
          projectTitle='Woo'
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-[9]">
        <ProjectCard
          bgImageUrl="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1800&t=st=1691781076~exp=1691781676~hmac=60efc9c4d9c98f3df1365e3e4d0664e4ea0c197744d615f314f2ab8b8acdf08a"
          projectTitle='Woo'
        />
      </div>
      <div className="col-span-2 col-start-1 row-start-[10]">
        <ProjectCard
          bgImageUrl="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1800&t=st=1691781076~exp=1691781676~hmac=60efc9c4d9c98f3df1365e3e4d0664e4ea0c197744d615f314f2ab8b8acdf08a"
          projectTitle='Woo'
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-[10]">
        <ProjectCard
          bgImageUrl="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=1800&t=st=1691781076~exp=1691781676~hmac=60efc9c4d9c98f3df1365e3e4d0664e4ea0c197744d615f314f2ab8b8acdf08a"
          projectTitle='Woo'
        />
      </div>
      <div ref={experienceSectionRef} className="col-span-4 col-start-1 row-start-[11]">Experience</div>
      <div className="col-span-3 col-start-1 row-span-2 row-start-[12]">
        <RollingCard
          from='left'
          title="CO-OP Web Support"
          para='WIP'
        />
      </div>
      <div className="row-span-2 col-start-4 row-start-[12]">
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
      <div className="row-span-2 col-start-1 row-start-[14]">
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
      <div className="col-span-3 col-start-2 row-span-2 row-start-[14]">
        <RollingCard
          from='right'
          title="Lead Developer"
          para='During my role as CTO at HackerTables, I was responsible for leading the technical side of the company and ensuring that our products and services met the needs of our customers. I worked closely with the rest of the leadership team to set the technical direction of the company and to make strategic decisions about the products and technologies we used. I also managed a team of developers and other technical staff, providing guidance and mentorship to help them grow and develop their skills. I also played a key role in building and maintaining our technical infrastructure, ensuring that it was secure, scalable, and able to handle the demands of a growing user base. Additionally, I was involved in the development of new features and products, working closely with the product team to identify and implement new features and improvements.'
        />
      </div>
      <div className="col-span-3 col-start-1 row-span-2 row-start-[16]">
        <RollingCard
          from='left'
          title="Software Developer Intern"
          para='My internship as a software developer at SAP provided valuable experience in real-world projects. I learned about Agile software development and team collaboration. I gained hands-on experience with various programming languages and tools. Mentorship from experienced developers taught me best practices in software development. The internship exposed me to the challenges and complexities of enterprise software development. I learned how to work with large code bases and handle complex projects. I got a better understanding of the software development industry. The internship helped me develop my technical skills and problem-solving abilities. I gained a broader perspective on the field of computer science. Overall, it was a valuable and enlightening experience.'
        />
      </div>
      <div className="row-span-2 col-start-4 row-start-[16]">
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
      <div className="row-span-2 col-start-1 row-start-[18]">
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
      <div className="col-span-3 col-start-2 row-span-2 row-start-[18]">
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
