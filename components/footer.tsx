import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className='border-t py-12 bg-muted/50'>
      <div className='px-4 md:px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>
              Suon<span className='text-primary'> Phanun</span>
            </h3>
            <p className='text-sm text-muted-foreground'>
              A professional portfolio showcasing my skills and projects as a
              developer.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Quick Links</h3>
            <nav className='flex flex-col space-y-2'>
              <Link
                href='/'
                className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                Home
              </Link>
              <Link
                href='/#about'
                className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                About
              </Link>
              <Link
                href='/#projects'
                className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                Projects
              </Link>
              <Link
                href='/#skills'
                className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                Skills
              </Link>
              <Link
                href='/resume'
                className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                Resume
              </Link>
              <Link
                href='/#contact'
                className='text-sm text-muted-foreground hover:text-primary transition-colors'>
                Contact
              </Link>
            </nav>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Connect</h3>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/nesatkroper'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors'>
                <Github className='h-5 w-5' />
                <span className='sr-only'>GitHub</span>
              </a>
              <a
                href='https://www.linkedin.com/in/suon-phanun-0a7395358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors'>
                <Linkedin className='h-5 w-5' />
                <span className='sr-only'>LinkedIn</span>
              </a>
              <a
                href='https://twitter.com/yourusername'
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted-foreground hover:text-primary transition-colors'>
                <Twitter className='h-5 w-5' />
                <span className='sr-only'>Twitter</span>
              </a>
              <a
                href='mailto:phanunsuon@gmail.com'
                className='text-muted-foreground hover:text-primary transition-colors'>
                <Mail className='h-5 w-5' />
                <span className='sr-only'>Email</span>
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t text-center text-sm text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} Suon Phanun. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
