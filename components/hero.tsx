"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { profilePicture } from "@/constant/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.5,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16'>
      {/* Background Animation */}
      <motion.div
        className='absolute inset-0 -z-10'
        initial='hidden'
        animate='visible'
        variants={backgroundVariants}>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-background' />
        <div className='absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent' />
      </motion.div>

      <div className='px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12'>
        <motion.div
          className='flex-1 space-y-8'
          initial='hidden'
          animate='visible'
          variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter'>
              {` Hi, I'm`} <span className='text-primary'>Your Name</span>
            </h1>
            <h2 className='text-2xl md:text-3xl font-medium mt-2 text-muted-foreground'>
              Full-Stack Developer
            </h2>
          </motion.div>

          <motion.p
            className='text-lg text-muted-foreground max-w-[600px]'
            variants={itemVariants}>
            I build modern, responsive, and performant web applications with a
            focus on user experience and clean code.
          </motion.p>

          <motion.div className='flex flex-wrap gap-4' variants={itemVariants}>
            <motion.div variants={buttonVariants} whileHover='hover'>
              <Button asChild size='lg' className='rounded-full'>
                <Link href='#projects'>
                  View My Projects <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover='hover'>
              <Button
                asChild
                size='lg'
                variant='outline'
                className='rounded-full'>
                <Link href='/resume'>
                  Download Resume <Download className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className='flex gap-4' variants={itemVariants}>
            <motion.a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              whileHover={{ scale: 1.1 }}>
              <Github className='h-6 w-6' />
              <span className='sr-only'>GitHub</span>
            </motion.a>
            <motion.a
              href='https://linkedin.com/in/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              whileHover={{ scale: 1.1 }}>
              <Linkedin className='h-6 w-6' />
              <span className='sr-only'>LinkedIn</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className='flex-1 flex justify-center'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <div className='relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-primary/20'>
            <Image
              src={profilePicture}
              alt='Developer Portrait'
              fill
              className='object-cover'
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
