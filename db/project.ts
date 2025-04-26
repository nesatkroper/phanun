import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart, and checkout functionality.",
    image:
      "https://github.com/nesatkroper/img/blob/main/phanunlogo.png?raw=true",
    category: ["frontend", "fullstack"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "MongoDB",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    details:
      "This e-commerce platform features a responsive design, user authentication, product filtering, shopping cart functionality, and secure checkout with Stripe integration. The admin dashboard allows for product and order management. Built with Next.js for server-side rendering and optimized performance.",
  },
  {
    id: "project2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    image:
      "https://github.com/nesatkroper/img/blob/main/phanunlogo.png?raw=true",
    category: ["frontend", "fullstack"],
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    details:
      "This task management application allows teams to collaborate on projects in real-time. Features include drag-and-drop task organization, commenting, file attachments, and user permissions. The real-time functionality is implemented using Socket.io, while the backend API is built with Node.js and Express.",
  },
  {
    id: "project3",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data.",
    image:
      "https://github.com/nesatkroper/img/blob/main/phanunlogo.png?raw=true",
    category: ["frontend"],
    technologies: ["React", "Chart.js", "OpenWeather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    details:
      "This weather dashboard provides users with current weather conditions and a 7-day forecast for any location. It features interactive charts for temperature, humidity, and wind speed trends. The application uses the OpenWeather API for data and implements client-side caching to minimize API calls.",
  },
  {
    id: "project4",
    title: "Content Management System",
    description:
      "A headless CMS for managing digital content across multiple platforms.",
    image:
      "https://github.com/nesatkroper/img/blob/main/phanunlogo.png?raw=true",
    category: ["backend", "fullstack"],
    technologies: ["Node.js", "Express", "MongoDB", "GraphQL"],
    githubUrl: "https://github.com/yourusername/project",
    details:
      "This headless CMS provides a flexible backend for managing content across websites, mobile apps, and other digital platforms. It features a GraphQL API, role-based access control, content versioning, and media management. The system is designed to be extensible with a plugin architecture.",
  },
  {
    id: "project5",
    title: "Fitness Tracking App",
    description:
      "A mobile-first application for tracking workouts and nutrition.",
    image:
      "https://github.com/nesatkroper/img/blob/main/phanunlogo.png?raw=true",
    category: ["frontend", "mobile"],
    technologies: ["React Native", "Firebase", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
    details:
      "This fitness tracking application allows users to log workouts, track nutrition, set goals, and view progress over time. It features customizable workout plans, a barcode scanner for food logging, and social sharing capabilities. The app uses Firebase for authentication and real-time database functionality.",
  },
  {
    id: "project6",
    title: "API Gateway Service",
    description:
      "A microservice gateway for routing and authenticating API requests.",
    image:
      "https://github.com/nesatkroper/img/blob/main/phanunlogo.png?raw=true",
    category: ["backend"],
    technologies: ["Node.js", "Express", "Redis", "Docker"],
    githubUrl: "https://github.com/yourusername/project",
    details:
      "This API gateway service provides a unified entry point for microservices architecture. It handles request routing, authentication, rate limiting, and request/response transformation. The service is containerized with Docker and uses Redis for caching and rate limiting.",
  },
];
