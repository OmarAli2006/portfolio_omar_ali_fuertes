"use client";

import {
  DiHtml5,
  DiCss3,
  DiJs,
  DiReact,
  DiNodejs,
  DiPython,
  DiJava,
  DiPostgresql,
  DiJavascript,
} from "react-icons/di";

import { SiTailwindcss, SiNextdotjs, SiHtml5 } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Passionate about continuous learning and growth.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Omar Ali Fuertes",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+591) 72381963",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nacionality",
      fieldValue: "Bolivian",
    },
    {
      fieldName: "Email",
      fieldValue: "ali.potosi@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languajes",
      fieldValue: "Spanish, English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I am an experienced IT Manager, Census Taker, and Freelance Developer. I have managed technology systems, conducted detailed data collection, and developed custom software solutions for various clients. My diverse background allows me to bring a unique perspective to every project.",
  items: [
    {
      company: "Econ Calvo Construction Company",
      position: "Cadastral Registry Manager",
      duration: "2018 - 2019",
    },
    {
      company: "Econ Calvo Construction Company",
      position: "IT Manager",
      duration: "2020 - 2023",
    },
    {
      company: "Instituto Nacional de Estadistica Bolivia (INE)",
      position: "Census Taker",
      duration: "2024",
    },
    {
      company: "Freelance",
      position: "Freelance Web Developer",
      duration: "2022 - Now",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Computer Science Engineer with a solid foundation in software development, databases, networking, and cybersecurity. Practical experience in developing web solutions and mobile applications using a wide range of technologies, including Java, JavaScript, Python, React, and Node.js.",
  items: [
    {
      institution: "Universidad Autonoma Tomas Frias",
      degree: "Computer Engineer",
      duration: "2016 - 2023",
    },
    {
      institution: "Fundacion CEFIC",
      degree: "Computer Service Technician",
      duration: "2010",
    },
    {
      institution: "Colegio Nacional Mariscal Otto Felipe Braun",
      degree: "Bachelor",
      duration: "2006 - 2009",
    },
    {
      institution: "Online Learning",
      degree: "React Development",
      duration: "2020",
    },
    {
      institution: "Online Learning",
      degree: "NodeJS Development",
      duration: "2020",
    },
    {
      institution: "Online Learning",
      degree: "Python Development",
      duration: "2022",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Full-stack Developer with a strong foundation in Computer Science. Expertise in designing, developing, and deploying end-to-end web applications using modern technologies such as React, Node.js, and MongoDB. Proficient in languages like Java, JavaScript, and Python.",
  skillList: [
    {
      icon: <SiHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <DiCss3 />,
      name: "CSS 3",
    },
    {
      icon: <DiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <DiReact />,
      name: "React JS",
    },
    {
      icon: <DiNodejs />,
      name: "Node JS",
    },
    {
      icon: <DiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <DiPython />,
      name: "Python",
    },
    {
      icon: <DiJava />,
      name: "Java",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className={"min-h-[80vh] flex items-center justify-center py-12 xl:py-0"}
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 
        gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                      flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                        text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl
                      flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                        text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
                xl:gap-[30px]"
                  >
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className="w-full h-[150px] bg-[#232329]
                            rounded-xl flex justify-center items-center group"
                              >
                                <div
                                  className="text-6xl group-hover:text-accent
                              transition-all duration-300"
                                >
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent><p className="capitalize"
                              >{skill.name}</p></TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6
                max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                    <li key="index" className="flex items-center justify-center
                    xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
