import Page from "components/utility/Page";

import { GetStatiProps, GetStaticPaths } from "next";
import { allKebabTags, allTags } from "@/data/content/projects";

import projects from "@/data/content/projects";

import { kebabCase, kebabArray } from "@/utils/utils";
import Projects from "components/projects/Projects";
import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Link from "next/link";
import { Fade } from "react-reveal";

export const getStaticPaths = async () => {
  const allTags = [];
  projects.forEach((project) =>
    project.tags.forEach((tag) => {
      allTags.push(tag);
    })
  );
  const uniqueAllTags = [...new Set(allTags)];
  const allTagsPaths = uniqueAllTags.map((path) => ({
    params: { tag: `${kebabCase(path)}` },
  }));
  return {
    paths: allTagsPaths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const tag = params.tag;
  const filteredProjects = projects.filter((project) =>
    [...kebabArray(project.tags)].includes(tag)
  );
  return {
    props: JSON.parse(
      JSON.stringify({
        filteredProjects,
        tag: tag,
      })
    ),
  };
};

function PostPage({ filteredProjects, tag }) {
  const capsTag = allTags[allKebabTags.indexOf(tag)];
  return (
    <Page
      currentPage="Projects"
      meta={{
        title: `${capsTag} Projects`,
        desc: `A showcase for all of my ${capsTag} projects.`,
      }}
    >
      <Fade top>
        <Heading tag={capsTag} />
      </Fade>
      <Projects overwriteProjects={filteredProjects} />
      <Fade bottom>
        <Link href="/projects">
          <a>
            <div className="mt-8 max-w-sm md:max-w-2xl border text-white border-white bg-bg hover:bg-pink hover:border-pink  font-semibold  mx-auto text-center w-full whitespace-nowrap px-8 py-3 rounded-full dark:bg-gray-50 dark:border-gray-800 dark:hover:border-rach-blue dark:text-rach-800   dark:hover:bg-rach-blue dark:hover:text-white hover:text-white transition-colors cursor-pointer">
              View All
            </div>
          </a>
        </Link>

      </Fade>
      {/* <More /> */}
    </Page>
  );
}

export default PostPage;
