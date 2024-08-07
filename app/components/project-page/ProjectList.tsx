"use client"

import ProjectCard from "./ProjectCard";

export interface ProjectProps {
  id?: number | null;
  company?: string | null;
  name?: string | null;
  start?: string | null;
  end?: string | null;
  tech?: string | null;
  description?: string | null;
  task?: string | null;
  jobdesk?: string | null;
  file?: string | null;
  link?: string | null;
  confidential?: boolean | null;
  featured?: boolean | null;
};

const ProjectList = (props: { data: ProjectProps[] | [] }) => {
  const { data } = props;

  const unfeaturedProject = data.length > 0 ? data.filter((dt) => dt.featured === false) : [];
  const featuredProject = data.length > 0 ? data.filter((dt) => dt.featured === true) : [];
  const top1 = featuredProject.find((fProject) => fProject.id === 12)!;
  const top2 = featuredProject.find((fProject) => fProject.id === 13)!;
  const top3 = featuredProject.find((fProject) => fProject.id === 15)!;
  
  console.log('📕 -> ', top1, top2, top3);

  return (
    <>
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
        <ProjectCard data={top1} hasReadMore={true} />

        <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
          {[top2, top3].map((project) => (
            <ProjectCard data={project} hasReadMore={true} />
          ))}
        </div>
      </div>
      <div className="hidden w-full h-px md:block bg-zinc-800" />

      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
        <div className="grid grid-cols-1 gap-4">
          {unfeaturedProject
            .filter((_, i) => i % 3 === 0)
            .map((project) => (
              <ProjectCard data={project} hasReadMore={false} />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {unfeaturedProject
            .filter((_, i) => i % 3 === 1)
            .map((project) => (
              <ProjectCard data={project} hasReadMore={false} />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {unfeaturedProject
            .filter((_, i) => i % 3 === 2)
            .map((project) => (
              <ProjectCard data={project} hasReadMore={false} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;