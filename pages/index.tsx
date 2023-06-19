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
          para="I absolutely love software development! Seeing my work come to life and positively impact users is one of the most satisfying things in the world. The field is always changing, which keeps things interesting and ensures there's always something new to learn."
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-6">
        <FlippableCard
          title='Web Dev'
          icon={<TbBrowser />}
          para="Web development is a true passion of mine. From writing clean and efficient code to utilizing the latest technologies and trends, I take pride in staying current and pushing the boundaries of what is possible. I really enjoy the challenge of taking a client's idea and making it a reality."
        />
      </div>
      <div className="col-span-2 col-start-3 row-start-7">
      <FlippableCard
          title='DevOps'
          icon={<TbInfinity />}
          para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quos repudiandae omnis distinctio quam molestias itaque ut, temporibus illo soluta? Rerum, nemo aperiam. Suscipit, quos illum? Adipisci odio omnis molestiae!"
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
