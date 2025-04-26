"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { containerVariants, itemVariants } from "@/motion";
import { categories, skills } from "@/db/skills";

export default function Skills() {
  return (
    <section id='skills' className='py-20 bg-muted/50'>
      <div className='px-4 md:px-6'>
        <motion.div
          className='space-y-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}>
          <motion.div className='text-center space-y-4' variants={itemVariants}>
            <h2 className='text-3xl md:text-4xl font-bold'>My Skills</h2>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              {`Here's an overview of my technical skills and proficiency levels.`}
            </p>
          </motion.div>

          <div className='grid gap-8 md:grid-cols-2'>
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className='space-y-6'>
                <h3 className='text-xl font-semibold'>{category.name}</h3>
                <Card>
                  <CardContent className='p-6 space-y-4'>
                    {skills
                      .filter((skill) => skill.category === category.id)
                      .map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className='space-y-2'>
                          <div className='flex justify-between'>
                            <span className='font-medium'>{skill.name}</span>
                            <span className='text-muted-foreground'>
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className='h-2' />
                        </motion.div>
                      ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
