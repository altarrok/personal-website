import { NextPage } from 'next';
import { FlippableCard } from '../components/FlippableCard';
import { SiDevdotto } from "react-icons/si";
import { TbBrowser, TbInfinity } from "react-icons/tb";


const LandingPage: NextPage = () => {
  return (
    <main className="grid grid-cols-4 grid-rows-18 gap-4 p-4 w-full min-h-screen bg-black">
      <div className="col-span-4 row-span-2 h-[50vh]">BIG TITLE</div>
      {/* Shortcut Cards: Show small text. When hover; show big scrolling message */}
      <div className="col-span-2 row-start-3">Expertise Shortcut</div>
      <div className="col-span-2 col-start-1 row-start-4">Experience Shortcut</div>
      <div className="col-span-2 row-span-2 col-start-3 row-start-3">Portfolio Shortcut</div>
      <div className="col-span-4 row-start-5">Experience</div>
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
      <div className="col-span-4 row-start-[8]">Portfolio Title</div>
      {/* Project Cards: Similar to flat cards, but when clicked, transition to the project page */}
      <div className="col-span-2 col-start-1 row-start-[9]">Project 1</div>
      <div className="col-span-2 col-start-3 row-start-[9]">Project 2</div>
      <div className="col-span-2 col-start-1 row-start-[10]">Project 3</div>
      <div className="col-span-2 col-start-3 row-start-[10]">Project 4</div>
      <div className="col-span-4 col-start-1 row-start-[11]">Experience</div>
      {/* Flat cards */}
      <div className="col-span-3 col-start-1 row-span-2 row-start-[12]">PHSA</div>
      <div className="row-span-2 col-start-4 row-start-[12]">PHSA metadata</div>
      <div className="row-span-2 col-start-1 row-start-[14]">HackerTables metadata</div>
      <div className="col-span-3 col-start-2 row-span-2 row-start-[14]">HackerTables</div>
      <div className="col-span-3 col-start-1 row-span-2 row-start-[16]">SAP</div>
      <div className="row-span-2 col-start-4 row-start-[16]">SAP metadata</div>
      <div className="row-span-2 col-start-1 row-start-[18]">UBC metadata</div>
      <div className="col-span-3 col-start-2 row-span-2 row-start-[18]">UBC</div>
    </main>
  );
}

export default LandingPage;
