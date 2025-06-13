import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
  Camera,
  Paintbrush,
  CheckCircle,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll';

const aboutStats = [
  { label: "Years of experience", value: "3+" },
  { label: "AI/ML Projects", value: "10+" },
  { label: "Technologies mastered", value: "15+" },
];

const projects = [
  {
    title: "Advanced Go AI Agent",
    description: "AI agent for playing the game of Go using advanced algorithms",
    image: "/assets/Go_board.jpg",
    href: "https://github.com/Froztedd/Advanced-Go-AI-Agent",
    detailsLink: "/projects/go-ai"
  },
  {
    title: "Image Denoising",
    description: "Encoder-Decoder architecture for image denoising",
    image: "/assets/image denoising.jpg",
    href: "https://github.com/Froztedd/Image-Denoising-Encoder-Decoder",
    detailsLink: "/projects/image-denoising"
  },
  {
    title: "Web Development Projects",
    description: "Collection of full-stack web development projects",
    image: "/assets/Web dev.jpg",
    href: "https://github.com/Froztedd/Web-Dev-Projects",
    detailsLink: "/projects/web-dev"
  },
  {
    title: "Heart Disease Prediction",
    description: "ML model for predicting heart disease using various algorithms",
    image: "/assets/Heart.jpg",
    href: "https://github.com/Froztedd/Heart-Disease-Prediction",
    detailsLink: "/projects/heart-disease"
  },
  {
    title: "Skin Cancer Classification",
    description: "Deep learning model using ResNet, DenseNet and CNN for skin cancer classification",
    image: "/assets/skin.jpg",
    href: "https://github.com/Froztedd/Skin-Cancer-Classification",
    detailsLink: "/projects/skin-cancer"
  },
];

const services = [
  {
    service: "Frontend Development",
    description:
      "Creating stellar user interfaces and web experiences using the latest technologies.",
    icon: Code2,
  },
  {
    service: "UX Design",
    description:
      "Building intuitive, user-centric designs that drive engagement and conversion.",
    icon: Frame,
  },
  {
    service: "SEO Optimization",
    description:
      "Enhancing your website's visibility in search engines for increased organic traffic.",
    icon: SearchCheck,
  },
  {
    service: "Responsive Design",
    description:
      "Designing websites that look and perform equally well on all devices and screen sizes.",
    icon: MonitorSmartphone,
  },
  {
    service: "Backend Development",
    description:
      "Developing robust, scalable server-side logic for a wide range of web applications.",
    icon: Eye,
  },
];

const experiences = [
  {
    title: "AI Intern",
    company: "CoEZET IIT Madras",
    period: "Apr 2024 - June 2024",
    location: "Chennai, TN, India",
    description: "Developed a full-stack lab reservation application with integrated LLM-powered recommendation system for 500+ users. Implemented real-time decision algorithms optimizing resource utilization by 75%. Led end-to-end implementation including model fine-tuning and testing, achieving 98% adoption rate.",
  },
  {
    title: "Deep Learning Academic Intern",
    company: "NUS Advanced Computing for Executives",
    period: "July 2023",
    location: "Singapore",
    description: "Led a team of 3 to design and implement a neural network-based letter recognition system achieving 93% accuracy. Implemented pattern recognition algorithms and optimized training datasets. Deployed solution using AWS EC2 and Hadoop for distributed processing.",
  },
  {
    title: "Software Developer Intern",
    company: "DSSI Solutions",
    period: "Nov 2022 - Jan 2023",
    location: "Chennai, TN, India",
    description: "Developed high-performance surveillance monitoring system in C++ using OpenCV, reducing incident response times by 45%. Implemented secure image processing pipeline handling 1000+ daily video transactions.",
  },
  {
    title: "Graduate Student",
    company: "University of Southern California",
    period: "2023 - Present",
    location: "Los Angeles, CA",
    description: "M.S. in Computer Science with specialization in Artificial Intelligence. Research focus on deep learning and computer vision.",
  },
];

const research = [
  {
    title: "Agent Decision-Making through Multimodal LLM-RAG Simulation",
    description: "Developing a novel multimodal RAG system for visualization retrieval and medical image analysis, with an experimental simulation framework reducing errors by 45%",
    image: "/assets/research-1.webm",
    date: "Jan 2025 - Present"
  },
  {
    title: "Career Guidance System using Machine Learning and Blockchain",
    description: "Published in IEEE, demonstrating expertise in applying ML algorithms for practical decision-making systems with secure data handling",
    image: "/assets/research-2.webm",
    date: "June 2024"
  }
];

const extracurriculars = [
  {
    title: "Photography",
    description: "Professional photographer specializing in landscape and portrait photography",
    items: [
      "Published works in various photography magazines",
      "Conducted photography workshops",
      "Expertise in Adobe Lightroom and Photoshop",
    ],
    icon: Camera,
  },
  {
    title: "Creative Design",
    description: "Digital artist and graphic designer",
    items: [
      "Proficient in Adobe Creative Suite",
      "Created digital art and illustrations",
      "UI/UX design for various projects",
    ],
    icon: Paintbrush,
  },
];

export default function Home() {
  const refScrollContainer = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  // Initialize locomotive scroll
  useEffect(() => {
    let locomotiveScroll: LocomotiveScroll | null = null;

    async function initLocomotive() {
      try {
        const Locomotive = (await import("locomotive-scroll")).default;
        if (refScrollContainer.current) {
          locomotiveScroll = new Locomotive({
            el: refScrollContainer.current,
            smooth: true,
            lerp: 0.08,
          });
        }
      } catch (error) {
        console.error("Failed to initialize Locomotive Scroll:", error);
      }
    }

    if (mounted) {
      void initLocomotive();
    }

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [mounted]);

  // Handle scroll
  useEffect(() => {
    if (!mounted) return;

    function handleScroll() {
      setIsScrolled(window.scrollY > 0);

      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");
        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle card hover effect
  useEffect(() => {
    if (!mounted) return;

    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <Container>
      <div ref={refScrollContainer} className="relative">
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Charan Kumar.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                AI/ML Engineer, Researcher and Full-Stack Developer pursuing M.S. in Computer Science (AI) at University of Southern California
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:d.charankumarnaidu@gmail.com" passHref>
                <Button>
                  Get in touch <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                Learn more
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"],
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-center items-center space-y-10 mx-auto"
          >
            <h2 className="py-16 pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px] text-center text-justify mx-auto">
              My expertise spans into PyTorch, TensorFlow, app development, LLMs, AI Agents, and MERN stack. I specialize in developing cutting-edge solutions in neural networks, computer vision, and natural language processing. My work encompasses both research-driven innovations and practical implementations, from fine-tuning large language models to building autonomous AI agents and robust full-stack applications.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-items-center text-center">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center"
                >
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            className="my-24"
          >
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              🎓 Education
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Academic Journey.
            </h2>

            <div className="mt-14 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>
              
              {/* USC */}
              <div className="relative pl-16 mb-12 group" data-scroll data-scroll-speed="0.1">
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">University of Southern California</h3>
                      <p className="text-primary">M.S. in Computer Science (AI)</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">2024 - 2026</p>
                      <p className="text-sm text-muted-foreground">Los Angeles, CA</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Specializing in Artificial Intelligence and Machine Learning. Research focus on deep learning, computer vision, and natural language processing.</p>
                </div>
              </div>

              {/* NUS */}
              <div className="relative pl-16 mb-12 group" data-scroll data-scroll-speed="0.2">
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">National University of Singapore</h3>
                      <p className="text-primary">Research & Academic Internship</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">2023</p>
                      <p className="text-sm text-muted-foreground">Singapore</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Conducted research in deep learning and computer vision. Developed neural network architectures for medical image analysis and pattern recognition.</p>
                </div>
              </div>

              {/* SRM */}
              <div className="relative pl-16 mb-12 group" data-scroll data-scroll-speed="0.3">
                <div className="absolute left-6 w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold">SRM Institute of Science and Technology</h3>
                      <p className="text-primary">B.Tech in Computer Science</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">2020 - 2024</p>
                      <p className="text-sm text-muted-foreground">Chennai, India</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Specialized in AI/ML and software development. Led research projects in deep learning and computer vision.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          <div data-scroll data-scroll-speed=".4" className="my-32">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Personal Projects & Implementations.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:scale-[1.02] transition-transform duration-300">
                    <CardHeader className="p-0">
                      <Link href={project.href} target="_blank" passHref>
                        {project.image.endsWith(".webm") ? (
                          <video
                            src={project.image}
                            autoPlay
                            loop
                            muted
                            className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                          />
                        ) : (
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={300}
                            quality={100}
                            className="aspect-video h-full w-full rounded-t-md bg-primary object-cover"
                          />
                        )}
                      </Link>
                    </CardHeader>
                    <CardContent className="p-4 bg-background/50 backdrop-blur">
                      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <Link href={project.href} target="_blank" passHref>
                          <Button variant="outline" size="sm">
                            View Code <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section id="research" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            className="my-32"
          >
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              📚 Research
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Research Projects & Publications.
            </h2>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Graph RAG Paper */}
              <Link href="/research/graph-rag" target="_blank" className="group">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-background/50 border border-white/10 transition-colors hover:border-primary/50">
                  <div className="aspect-video w-full bg-primary/20"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Agent Decision-Making through Multimodal LLM-RAG Simulation</h3>
                    <p className="text-muted-foreground mb-4">Developing a novel multimodal RAG system for visualization retrieval and medical image analysis, with an experimental simulation framework reducing errors by 45%</p>
                    <p className="text-sm text-muted-foreground">Jan 2024 - Present</p>
                  </div>
                </div>
              </Link>

              {/* Career Guidance Paper */}
              <Link href="/research/career-guidance" target="_blank" className="group">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-background to-background/50 border border-white/10 transition-colors hover:border-primary/50">
                  <div className="aspect-video w-full bg-primary/20"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Career Guidance System using Machine Learning and Blockchain</h3>
                    <p className="text-muted-foreground mb-4">Published in IEEE, demonstrating expertise in applying ML algorithms for practical decision-making systems with secure data handling</p>
                    <p className="text-sm text-muted-foreground">June 2024</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            className="my-32"
          >
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Experience
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Professional Journey.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              My career path in AI/ML and software development.
            </p>

            <div className="mt-14 relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-transparent"></div>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-16 mb-12 group"
                  data-scroll
                  data-scroll-speed={0.1 * (index + 1)}
                >
                  <div className="absolute left-6 w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                  <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extracurriculars */}
        <section id="extracurriculars" data-scroll-section>
          <div data-scroll data-scroll-speed=".4" className="my-32">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              🎨 Beyond Tech
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Creative Pursuits.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Exploring creativity through various mediums.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {extracurriculars.map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  data-scroll
                  data-scroll-speed={0.1 * (index + 1)}
                >
                  <item.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.items.map((bullet, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Photography Grid */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-lg"
                  data-scroll
                  data-scroll-speed={0.05 * i}
                >
                  <Image
                    src={`/assets/photo-${i}.jpg`}
                    alt={`Photography sample ${i}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-32">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Let&apos;s work{" "}
              <span className="text-gradient clash-grotesk">together.</span>
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              I&apos;m currently available for freelance work and open to
              discussing new projects.
            </p>
            <Link href="mailto:d.charankumarnaidu@gmail.com" passHref>
              <Button className="mt-6">Get in touch</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
