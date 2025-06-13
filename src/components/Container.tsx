'use client';

import Head from "next/head";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn, scrollTo } from "@/lib/utils";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Preloader from "@/components/Preloader";
import styles from "@/styles/Container.module.css";

type IconProps = {
  ["data-hide"]: boolean;
};

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
    },
  }),
  hidden: { opacity: 0 },
};

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#education", text: "Education" },
  { href: "#experience", text: "Experience" },
  { href: "#projects", text: "Projects" },
  { href: "#research", text: "Research" },
  { href: "#extracurriculars", text: "Extracurriculars" },
  { href: "#contact", text: "Contact" },
];

function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  const href = e.currentTarget.getAttribute("href");

  if (href && href.startsWith("#")) {
    e.preventDefault();
    const section = document.querySelector(href);
    scrollTo(section);
  }
}

function NavItem(props: NavProps) {
  return (
    <motion.li
      className={props.className}
      variants={variants}
      custom={props.i}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <a
        href={props.href}
        onClick={handleClick}
        className={cn(props.i === 0 && "nav-active", "nav-link")}
      >
        {props.text}
      </a>
    </motion.li>
  );
}

export default function Container(props: ContainerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mounted, setMounted] = useState<boolean>(false);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Charan Kumar",
    description: `AI/ML Engineer | Full-Stack Developer | USC Graduate Student`,
    image: "/assets/logo.webp",
    type: "website",
    ...customMeta,
  };

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll
  useEffect(() => {
    if (!mounted) return;

    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mounted]);

  // Handle preloader
  useEffect(() => {
    if (!mounted) return;

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#7B82FE" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.wendoj.codes${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.wendoj.codes${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="WendoJ" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="WendoJ" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </Head>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <div className="relative min-h-screen">
            <nav
              className={cn(
                styles.nav,
                isScrolled
                  ? "bg-gradient-to-br from-background to-transparent shadow-md backdrop-blur transition"
                  : "bg-transparent",
              )}
            >
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={cn(
                    styles.burger,
                    "inline-flex transform items-center justify-center rounded-md p-2 transition-all duration-300 focus:outline-none",
                  )}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon data-hide={isOpen} />
                  <CrossIcon data-hide={!isOpen} />
                </button>
              </div>
              <Link href="/">
                <span className="font-clash-display text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CK</span>
              </Link>

              {/* Desktop menu */}
              <nav className="w-full flex justify-center items-center mt-8">
                <ul className="flex rounded-full border border-white/20 shadow-xl px-6 py-2 space-x-8 bg-white/5 backdrop-blur-[10px] backdrop-saturate-150">
                  {navLinks.map((link, i) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={handleClick}
                        className="text-white text-sm font-medium capitalize transition-colors duration-200 hover:text-primary"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile menu */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="fixed right-0 top-0 z-40 flex h-screen w-full flex-col justify-start overflow-y-hidden bg-background"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 1, type: "spring", bounce: 0.25 }}
                  >
                    {/* Expandable menu */}
                    <div className="flex h-20 max-h-20 min-h-[60px] w-full items-center justify-between border-b pl-[22px] pr-1">
                      <span className="text-base font-medium lowercase">Menu</span>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={styles.burger}
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                      >
                        <span className="sr-only">Open main menu</span>
                        <CrossIcon data-hide={!isOpen} />
                      </button>
                    </div>
                    <div className="flex h-full flex-col items-start justify-between overflow-y-auto">
                      {/* Links */}
                      <ul className="flex min-h-fit w-full flex-col items-start space-y-6 px-[22px] py-[58px]">
                        {navLinks.map((link, i) => (
                          <button key={link.href} onClick={() => setIsOpen(false)}>
                            <NavItem
                              href={link.href}
                              text={link.text}
                              i={i}
                              className="text-xl"
                            />
                          </button>
                        ))}
                      </ul>

                      {/* Footer */}
                      <div className="flex min-h-fit w-full flex-col space-y-8 px-[22px] py-10">
                        <span className="text-sm text-muted-foreground">
                          © {new Date().getFullYear()} wendo. All rights reserved.
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>

            <main className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", props.className)}>
              {children}
            </main>

            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute h-5 w-5 text-neutral-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 2.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: IconProps) {
  return (
    <svg
      className="absolute h-5 w-5 text-neutral-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
