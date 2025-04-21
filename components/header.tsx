"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/resume", label: "Resume" },
    { href: "/#contact", label: "Contact" },
  ];

  const headerVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
      initial='initial'
      animate='animate'
      variants={headerVariants}>
      <div className='container mx-auto px-4 md:px-6 py-4 flex items-center justify-between'>
        <Link href='/' className='text-xl font-bold'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            Suon<span className='text-primary'> Phanun</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-6'>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              initial='hidden'
              animate='visible'
              variants={navItemVariants}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ||
                    (pathname === "/" && link.href.startsWith("/#"))
                    ? "text-primary"
                    : "text-muted-foreground"
                )}>
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            custom={navLinks.length}
            initial='hidden'
            animate='visible'
            variants={navItemVariants}>
            <ModeToggle />
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className='flex items-center md:hidden space-x-4'>
          <ModeToggle />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
            {isMenuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <motion.div
          className='fixed inset-0 top-16 bg-background z-40 p-6 flex flex-col'
          initial='closed'
          animate={isMenuOpen ? "open" : "closed"}
          variants={mobileMenuVariants}>
          <nav className='flex flex-col space-y-6 pt-6'>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === link.href ||
                      (pathname === "/" && link.href.startsWith("/#"))
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
