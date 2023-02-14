import Head from 'next/head'
import { useRef } from 'react';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { DiReact } from "react-icons/di";
import { VscTypeHierarchy } from "react-icons/vsc";

const softwareDevPara = "I absolutely love software development! Seeing my work come to life and positively impact users is one of the most satisfying things in the world. The field is always changing, which keeps things interesting and ensures there's always something new to learn.";
const webDevPara = "Web development is a true passion of mine. From writing clean and efficient code to utilizing the latest technologies and trends, I take pride in staying current and pushing the boundaries of what is possible. I really enjoy the challenge of taking a client's idea and making it a reality.";
const sysArchPara = "I have a passion for systems architecture, the process of designing and building complex, scalable and secure systems. I enjoy staying up to date with the latest technologies and trends, and the satisfaction of seeing a system go from design to successful deployment."
const ubcPara = "I am in my 4th year of Bachelor of Science in Computer Science at UBC. My major has provided me with a solid foundation in the fundamentals of computer science. I have learned programming languages, algorithms and data structures, software engineering, and various other computer science concepts. I have also gained experience in working on real-world projects and have honed my problem-solving and critical thinking skills. Additionally, I have been able to apply my knowledge in a practical setting by participating in internships and other opportunities. My degree has equipped me with the knowledge and skills necessary to excel in the field of computer science and has prepared me to take on new challenges and opportunities in the future."
const sapPara = "My internship as a software developer at SAP provided valuable experience in real-world projects. I learned about Agile software development and team collaboration. I gained hands-on experience with various programming languages and tools. Mentorship from experienced developers taught me best practices in software development. The internship exposed me to the challenges and complexities of enterprise software development. I learned how to work with large code bases and handle complex projects. I got a better understanding of the software development industry. The internship helped me develop my technical skills and problem-solving abilities. I gained a broader perspective on the field of computer science. Overall, it was a valuable and enlightening experience."
const htPara = "During my role as CTO at HackerTables, I was responsible for leading the technical side of the company and ensuring that our products and services met the needs of our customers. I worked closely with the rest of the leadership team to set the technical direction of the company and to make strategic decisions about the products and technologies we used. I also managed a team of developers and other technical staff, providing guidance and mentorship to help them grow and develop their skills. I also played a key role in building and maintaining our technical infrastructure, ensuring that it was secure, scalable, and able to handle the demands of a growing user base. Additionally, I was involved in the development of new features and products, working closely with the product team to identify and implement new features and improvements."

export default function Home() {
  const secondSectionRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Altay Batuhan | Interactive Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-light.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-dark.ico" media="(prefers-color-scheme: dark)" />
      </Head>
      <main>
        <div className='h-screen bg-teal-600 flex flex-col justify-center items-center'>
          <div className='w-11/12 lg:w-1/2'>
            <img className="w-full" src="trans_entrance.png" alt="Altay Batuhan" />
          </div>
          <div
            className='z-0 animate-ping absolute bottom-10 w-16 h-16 border-2 border-white flex items-center justify-center py-2'
          >
            <div className='h-full flex items-center justify-center'>
              <div className='animate-bounce h-1/2'><i className='inline-block p-2 border-white border-b-2 border-r-2 rotate-45'></i></div>
            </div>
          </div>
          <div
            className='z-10 absolute bottom-10 w-16 h-16 cursor-pointer border-2 border-white flex items-center justify-center py-2'
            onClick={() => secondSectionRef.current!.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          >
            <div className='h-full flex items-center justify-center'>
              <div className='animate-bounce h-1/2'><i className='inline-block p-2 border-white border-b-4 border-r-4 rotate-45'></i></div>
            </div>
          </div>
        </div>
        <div ref={secondSectionRef} className='min-h-[110vh] bg-zinc-800 flex flex-col items-center justify-center'>
          <div className='w-full flex flex-col items-center text-white m-12'>
            <div className='text-7xl font-semibold mb-12 text-center'>My Expertise</div>
            <div className='flex flex-row items-stretch flex-wrap justify-center align-middle w-10/12'>
              <div className='min-w-[20rem] w-1/3 aspect-square border border-white p-5 flex flex-col mb-6'>
                <div className='text-3xl font-semibold flex flex-row items-stretch mb-5 h-20'>
                  <span className='flex items-center'><HiOutlineComputerDesktop className='inline text-6xl' /></span>
                  <span className='pl-3 ml-2 flex-1 flex items-center'>Software Development</span>
                </div>
                <div className='text-lg flex flex-col justify-center flex-1'>
                  <span className='text-slate-500'>{'<p>'}</span>
                  <div className='pl-4 border-l-2 border-slate-700 text-justify text-base'>{softwareDevPara}</div>
                  <span className='text-slate-500'>{'</p>'}</span>
                </div>
              </div>
              <div className='min-w-[20rem] w-1/3 aspect-square border border-white p-5 flex flex-col mb-6'>
                <div className='text-3xl font-semibold flex flex-row items-stretch mb-5 h-20'>
                  <span className='flex items-center'><DiReact className='inline text-6xl' /></span>
                  <span className='pl-3 ml-2 flex-1 flex items-center'>Web Dev</span>
                </div>
                <div className='text-lg flex flex-col justify-center flex-1'>
                  <span className='text-slate-500'>{'<p>'}</span>
                  <div className='pl-4 border-l-2 border-slate-700 text-justify text-base'>{webDevPara}</div>
                  <span className='text-slate-500'>{'</p>'}</span>
                </div>
              </div>
              <div className='min-w-[20rem] w-1/3 aspect-square border border-white p-5 flex flex-col mb-6'>
                <div className='text-3xl font-semibold flex flex-row items-stretch mb-5 h-20'>
                  <span className='flex items-center'><VscTypeHierarchy className='inline text-6xl' /></span>
                  <span className='pl-3 ml-2 flex-1 flex items-center'>Systems Architect</span>
                </div>
                <div className='text-lg flex flex-col justify-center flex-1'>
                  <span className='text-slate-500'>{'<p>'}</span>
                  <div className='pl-4 border-l-2 border-slate-700 text-justify text-base'>{sysArchPara}</div>
                  <span className='text-slate-500'>{'</p>'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-teal-600 flex flex-row justify-end items-stretch pt-80'>
          <div className='w-2/12 hidden lg:inline-block mx-6'><img src="path.svg" alt="Path" /></div>
          <div className='flex-1 flex flex-col'>
            <div className='h-screen'>
              <div style={{ marginTop: 'calc(150px - 3.5rem)' }} className='shadow-l -translate-y-1/2 top-1/2 bg-amber-100 w-full sticky flex flex-row justify-left p-5 py-12'>
                <div className='border-r border-solid border-black w-1/3 hidden lg:w-1/5 pr-4 sm:flex flex-col justify-start items-end'>
                  <div className='text-lg font-semibold'>Vancouver, Canada</div>
                  <div className='mb-2'>Sept 2018</div>
                  <div className='flex-1 flex items-center'><img src="UBC-logo.png" alt="University of British Columbia" /></div>
                </div>
                <div className='flex-1 ml-4 flex flex-col'>
                  <div className='text-3xl font-bold'>UBC</div>
                  <div className='text-xl mb-2 font-semibold'>Computer Science, Bachelor of Science</div>
                  <div className='flex-1 flex items-center text-justify'>{ubcPara}</div>
                </div>
              </div>
            </div>
            <div className='h-screen'>
              <div style={{ marginTop: 'calc(150px - 3.5rem)' }} className='shadow-l -translate-y-1/2 top-1/2 bg-amber-300 w-full sticky flex flex-row justify-left p-5 py-12'>
                <div className='border-r border-solid border-black w-1/3 hidden lg:w-1/5 pr-4 sm:flex flex-col justify-start items-end'>
                  <div className='text-lg font-semibold'>Vancouver, Canada</div>
                  <div className='mb-2'>Sept 2020-2021</div>
                  <div className='flex-1 flex items-center'><img src="SAP-logo.png" alt="SAP" /></div>
                </div>
                <div className='flex-1 ml-4 flex flex-col'>
                  <div className='text-3xl font-bold'>SAP</div>
                  <div className='text-xl mb-2 font-semibold'>Software Developer Intern</div>
                  <div className='flex-1 flex items-center text-justify'>{sapPara}</div>
                </div>
              </div>
            </div>
            <div className='h-screen'>
              <div style={{ marginTop: 'calc(150px - 3.5rem)' }} className='shadow-l -translate-y-1/2 top-1/2 bg-amber-500 w-full sticky flex flex-row justify-left p-5 py-12'>
                <div className='border-r border-solid border-black w-1/3 hidden lg:w-1/5 pr-4 sm:flex flex-col justify-start items-end'>
                  <div className='text-lg font-semibold'>Vancouver, Canada</div>
                  <div className='mb-2'>Sept 2021-Jan 2023</div>
                  <img src="HT-logo.svg" alt="SAP" className='w-full flex-1' />
                </div>
                <div className='flex-1 ml-4 flex flex-col'>
                  <div className='text-3xl font-bold'>HackerTables (start-up)</div>
                  <div className='text-xl mb-2 font-semibold'>Chief Technology Officer</div>
                  <div className='flex-1 flex items-center text-justify'>{htPara}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
