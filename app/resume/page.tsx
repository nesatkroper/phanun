import type { Metadata } from "next";
import ResumeContent from "@/components/resume-content";

export const metadata: Metadata = {
  title: "Resume | Developer Portfolio",
  description: "My professional resume and work experience",
};

export default function ResumePage() {
  return (
    <main className='container mx-auto py-12 px-4 md:px-6'>
      <ResumeContent />
    </main>
  );
}
