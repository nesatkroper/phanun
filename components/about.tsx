"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Laptop, Server, Database } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  const technologies = [
    "React",
    "Next.js",
    "JavaScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "Docker",
  ];

  return (
    <section id='about' className='py-20 bg-muted/50'>
      <div className='px-4 md:px-6'>
        <motion.div
          className='space-y-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}>
          <motion.div className='text-center space-y-4' variants={itemVariants}>
            <h2 className='text-3xl md:text-4xl font-bold'>About Me</h2>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
          </motion.div>

          <motion.div
            className='grid md:grid-cols-2 gap-12 items-center'
            variants={itemVariants}>
            <div className='space-y-6'>
              <p className='text-lg'>
                {`          I'm a passionate full-stack developer with a strong focus on creating elegant, efficient, and
                user-friendly web applications. With several years of experience in the industry, I've developed a deep
                understanding of both front-end and back-end technologies.`}
              </p>
              <p className='text-lg'>
                My journey in software development began with a curiosity about
                how things work on the web. That curiosity has evolved into a
                career where I continuously learn and adapt to new technologies
                and methodologies.
              </p>
              <p className='text-lg'>
                {`    When I'm not coding, you can find me hiking in the mountains,
                reading science fiction, or experimenting with new recipes in
                the kitchen.`}
              </p>
            </div>

            <div className='space-y-6'>
              <h3 className='text-xl font-semibold'>My Expertise</h3>
              <div className='grid grid-cols-2 gap-4'>
                <Card>
                  <CardContent className='p-6 flex flex-col items-center text-center space-y-2'>
                    <Laptop className='h-10 w-10 text-primary' />
                    <h4 className='font-medium'>Frontend Development</h4>
                    <p className='text-sm text-muted-foreground'>
                      Creating responsive and interactive user interfaces
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='p-6 flex flex-col items-center text-center space-y-2'>
                    <Server className='h-10 w-10 text-primary' />
                    <h4 className='font-medium'>Backend Development</h4>
                    <p className='text-sm text-muted-foreground'>
                      Building robust APIs and server-side applications
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='p-6 flex flex-col items-center text-center space-y-2'>
                    <Database className='h-10 w-10 text-primary' />
                    <h4 className='font-medium'>Database Design</h4>
                    <p className='text-sm text-muted-foreground'>
                      Designing efficient database schemas and queries
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='p-6 flex flex-col items-center text-center space-y-2'>
                    <Code className='h-10 w-10 text-primary' />
                    <h4 className='font-medium'>Clean Code</h4>
                    <p className='text-sm text-muted-foreground'>
                      Writing maintainable and well-documented code
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='space-y-4'>
            <h3 className='text-xl font-semibold text-center'>
              Technologies I Work With
            </h3>
            <div className='flex flex-wrap justify-center gap-2'>
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}>
                  <Badge variant='secondary' className='px-3 py-1 text-sm'>
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
