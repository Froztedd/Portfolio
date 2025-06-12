import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import Layout from "@/components/Layout";

const MotionLink = motion(Link);

interface ResearchLayoutProps {
  title: string;
  summary: string;
  img: string;
  link?: string;
  github?: string;
  type: string;
  children: React.ReactNode;
}

const ResearchLayout: React.FC<ResearchLayoutProps> = ({
  title,
  summary,
  img,
  link,
  github,
  type,
  children,
}) => {
  return (
    <Layout className="pt-16">
      <article className="w-full flex flex-col items-center justify-center mb-16">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <h1 className="font-bold text-4xl md:text-5xl text-left mb-4">
              {title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="font-medium text-primary dark:text-primaryDark">
                {type}
              </span>
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <GithubIcon className="w-6" /> GitHub
                </Link>
              )}
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  className="hover:underline text-primary dark:text-primaryDark"
                >
                  Paper Link ↗
                </Link>
              )}
            </div>
            <p className="font-medium text-lg mb-8">{summary}</p>
          </motion.div>

          <div className="grid grid-cols-12 gap-6">
            <motion.div
              className="col-span-12 lg:col-span-8 prose dark:prose-invert max-w-none"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              {children}
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-4"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
            >
              <div className="sticky top-24">
                {img ? (
                  <img
                    src={img}
                    alt={title}
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                ) : (
                  <div className="w-full aspect-video rounded-lg shadow-lg mb-6 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-muted-foreground">Diagram coming soon</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ResearchLayout; 