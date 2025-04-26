"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendToTelegram = async (message: string) => {
    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram bot token or chat ID not configured");
      return false;
    }

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      return response.ok;
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format the message for Telegram
      const telegramMessage = `
        <b>New Contact Form Next Portfolio</b>
        <b>==========================</b>
        <b>Name:</b> ${formData.name}
        <b>Email:</b> ${formData.email}
        <b>Subject:</b> ${formData.subject}
        <b>Mobile:</b> ${formData.phone}
        <b>Message:</b>
        ${formData.message}
      `.trim();

      const success = await sendToTelegram(telegramMessage);

      if (success) {
        toast.success("Message sent!", {
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message", {
          description: "Please try again later or contact me directly.",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

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

  const contactInfo = [
    {
      icon: <Mail className='h-6 w-6 text-primary' />,
      title: "Email",
      value: "phanusuon@gmail.com",
      link: "mailto:phanusuon@gmail.com",
    },
    {
      icon: <Phone className='h-6 w-6 text-primary' />,
      title: "Phone",
      value: "+855 (010) 280-202",
      link: "tel:+85510280202",
    },
    {
      icon: <MapPin className='h-6 w-6 text-primary' />,
      title: "Location",
      value: "Puok, Siem Reap, Cambodia",
      link: null,
    },
  ];

  return (
    <section id='contact' className='py-20'>
      <div className='px-4 md:px-6'>
        <motion.div
          className='space-y-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}>
          <motion.div className='text-center space-y-4' variants={itemVariants}>
            <h2 className='text-3xl md:text-4xl font-bold'>Get In Touch</h2>
            <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Have a question or want to work together? Feel free to contact me!
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8'>
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}>
                <Card>
                  <CardContent className='p-6 flex flex-col items-center text-center space-y-4'>
                    <div className='p-3 rounded-full bg-primary/10'>
                      {info.icon}
                    </div>
                    <h3 className='font-semibold'>{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className='text-muted-foreground hover:text-primary transition-colors'>
                        {info.value}
                      </a>
                    ) : (
                      <p className='text-muted-foreground'>{info.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants}>
            <Card>
              <CardContent className='p-6 md:p-8'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label htmlFor='name' className='text-sm font-medium'>
                        Name
                      </label>
                      <Input
                        id='name'
                        name='name'
                        placeholder='Your name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <label htmlFor='email' className='text-sm font-medium'>
                        Email
                      </label>
                      <Input
                        id='email'
                        name='email'
                        type='email'
                        placeholder='Your email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label htmlFor='subject' className='text-sm font-medium'>
                        Subject
                      </label>
                      <Input
                        id='subject'
                        name='subject'
                        placeholder='Subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className='space-y-2'>
                      <label htmlFor='subject' className='text-sm font-medium'>
                        Mobile Number
                      </label>
                      <Input
                        id='phone'
                        name='phone'
                        placeholder='010 280 202'
                        type='tel'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <label htmlFor='message' className='text-sm font-medium'>
                      Message
                    </label>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder='Your message'
                      rows={10}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}>
                    <Button
                      type='submit'
                      className='w-full'
                      disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className='flex items-center'>
                          <svg
                            className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'>
                            <circle
                              className='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              strokeWidth='4'></circle>
                            <path
                              className='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                          </svg>
                          Sending...
                        </span>
                      ) : isSubmitted ? (
                        <span className='flex items-center'>
                          <CheckCircle className='mr-2 h-4 w-4' /> Sent!
                        </span>
                      ) : (
                        <span className='flex items-center'>
                          <Send className='mr-2 h-4 w-4' /> Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
