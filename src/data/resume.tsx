import { Icons } from "@/components/ui/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yanuar",
  initials: "YR",
  url: "https://dillion.io",
  location: "Indonesia, ID",
  locationLink: "https://www.google.com/maps/place/Jawabarat",
  description:
    "Backend Developer | Enthusiast With Cloud Computing",
  summary:
    "My Name Yanuar Rahman is a skilled Backend Developer with 2 years of experience in building and maintaining robust backend systems. He is passionate about cloud technologies and continuously explores the latest advancements in the field to enhance his expertise.",
  avatarUrl: "/yanuar.jpg",
  skills: [
    "React",
    "Typescript",
    "Node.js",
    "Go",
    "Docker",
    "Mongo DB",
    "SQL",
    "Postgres",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/YanuarRahman",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Instagrams: {
        name: "Instagram",
        url: "https://www.instagram.com/yanuarr04_/",
        icon: Icons.instagrams,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Bangkit Academy",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Cloud Computing",
      logoUrl: "/bangkit_academy_logo.jpg",
      start: "Feb 2023",
      end: "Jul 2023",
      description:
        "Cloud Computing Student at Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka 2023.",
    },
    {
      company: "Polres Cianjur",
      badges: [],
      href: "",
      location: "Cianjur",
      title: "IT Support Technician",
      logoUrl: "/polres.jpg",
      start: "Des 2018",
      end: "Feb 2019",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
   
  ],
  education: [
    {
      school: "Muhammadiyah Sukabumi University",
      href: "https://buildspace.so",
      degree: "S1 (Computer Science)",
      logoUrl: "/univ.jpg",
      start: "2019",
      end: "2024",
    },
    {
      school: "SMKN 1 Cianjur",
      href: "https://uwaterloo.ca",
      degree: "Rekayasa Perangkat Lunak (RPL)",
      logoUrl: "/waterloo.png",
      start: "2017",
      end: "2019",
    },
    
  ],
  projects: [
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  
} as const;