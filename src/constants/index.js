import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project9 from "../assets/projects/project-9.jpg";

import hk from "../assets/hkk.jpg";
import firstcry from "../assets/firstcry.png";
import hc from "../assets/hcc.jpg";
import md from "../assets/mdd.jpg";
import z from "../assets/z.jpg";

export const HERO_CONTENT = `I am a dedicated and experienced Category Manager in the e-commerce industry, having successfully navigated this dynamic field for the past six years. My role has allowed me to develop a keen understanding of market trends, consumer behavior, and strategic planning. I hold a master's degree in management from NMIMS, Mumbai, which has equipped me with a solid foundation in business principles and analytical skills. My academic background, combined with my hands-on experience, has enabled me to drive growth, optimize product assortments, and enhance customer satisfaction in a highly competitive market. I am passionate about leveraging data-driven insights to make informed decisions and continuously improve the shopping experience for our customers.`;

export const ABOUT_TEXT = `Results-oriented business professional with over 6 years of experience in category management and merchandise planning. I have consistently demonstrated a track record of success in analyzing market trends, developing strategic initiatives, and driving profitable growth across diverse product categories. My expertise lies in optimizing product assortments, enhancing vendor relationships, and leveraging data-driven insights to exceed revenue targets.I thrive in dynamic environments where innovation and adaptability are key to success. I am now seeking a challenging opportunity to apply my strategic mindset and operational acumen to make a significant impact within a forward-thinking organization committed to achieving excellence in category performance and customer satisfaction. This addition emphasizes specific strengths such as optimizing assortments, enhancing vendor relationships, and aligning with a dynamic organizational culture that values innovation and growth. It positions the candidate as someone who not only analyzes market trends but also excels in executing strategic initiatives for sustainable business success.`;

export const EXPERIENCES = [
  {
    year: "Oct 2021 - Present",
    role: " Category Manager & Merchandise Planner",
    title: "Haus & Kinder",
    company: "Haus & Kinder.",
    description: `Developed and implemented strategic category management plans to optimize product assortment and drive sales growth
Analyzed market trends and evaluated competitor performance to guide data-driven decisions on product selection and pricing strategies
Collaborated with cross-functional teams to execute promotions and marketing initiatives, increasing brand visibility and enhancing customer engagement
Negotiated vendor contracts and managed supplier relationships to ensure timely merchandise delivery and align inventory levels with sales forecasts.`,
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link: hk,
  },
  {
    year: "Mar 2019 - Sept 2021",
    role: "  Assistant Manager : Buying",
    title: "Firstcry.com",
    company: "Firstcry.com.",
    description: `Conducted market research to identify current trends and forecast future demand in order to make strategic purchasing decisions.
Collaborated with vendors to negotiate pricing, terms, and promotional opportunities to maximize profitability.
Managed inventory levels and product assortments to ensure optimal stock levels and minimize overstock or stockouts.
Trained and supervised a team of buying assistants to support department goals and objectives`,
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link: firstcry,
  },
  {
    year: "June 2018 - Feb 2019",
    role: " Management Trainee",
    title: "Homecentre India",
    company: "Homecentre India.",
    description: `Promoted seasonal products and trends to ensure efficient movement of stock. Supervised a team of up to 6 employees and monitored adherence to company standard. If required changes or modifications to be made to the sample
after receiving buyers feedback Devise long-term development
strategies for product categories.
Develop exit strategies for unsuccessful product,`,
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link: hc,
  },
  {
    year: "Jun 2017 - Jul 2017",
    role: "Intern",
    title: "Massimo Dutti",
    company: "Massimo Dutti.",
    description: `Trained in the workings of the Oracle Point of Sale software used for everyday opening and
closing procedures. Managed 500+ customers and gained, thorough learning experience of direct one-to-one
customer interaction, stock replenishment and visual merchandising.`,
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link: md,
  },
  {
    year: "Jun 2016 - Jul 2016",
    role: "Intern",
    company: "Zara.",
    title: "Zara",
    description:`Trained in a store experiencing 1000+ footfall on daily basis, in both the creative and functional
aspects of VM. Initiated the understanding of cross functioning of the VM and Marketing functional domains. Enhanced overall store appearance by applying careful consideration to product and display
locations. Promoted seasonal products and trends to ensure efficient movement of stock. `,
    technologies: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Sql",
      "API design ",
      "Authentication",
      "Bitbucket",
      "Swagger",
      "Postman",
    ],
    link: z,
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    link: "https://prateek-premanand.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind Css", "Framer-motion"],
  },
  {
    title: "Product Order /Invoice Generator",
    image: project2,
    link: "https://kb-eight-khaki.vercel.app/",
    description:
      "Product Order Invoice Generator, built on React, which lets you Print and download Product Invoices on the fly. (Client side)",
    technologies: ["React", "Tailwind CSS", "React"],
  },
  {
    title: "Itodo (FULL STACK App)",
    image: project3,
    link: "https://react-portfolio-prateek.vercel.app/",
    description:
      "To-do lists offer a way to increase productivity, stop you from forgetting things, helps prioritise tasks, manage tasks effectively, use time wisely and improve time management and workflow.",
    technologies: ["Node.js", "Express.js", "React", "MongoDb"],
  },

  {
    title: "Ping Pong Game Clone",
    image: project4,
    link: "https://gamepongjavascript.netlify.app/",
    description:
      "The game is a game played in a simple way where the player uses the paddle to knock the ball back and forth and must get the ball past the other paddle to get a score. The score is represented by digits on top of the screen.",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Netflix-Logo-Animation",
    image: project9,
    link: "https://resplendent-tiramisu-c48b3b.netlify.app/",
    description: " Netflix Intro Animation using just HTML and CSS.",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Timeline Design",
    image: project6,
    link: "https://timelinedesignhtmlcss.netlify.app/",
    description:
      "It is a timeline design for the website and displays each content with animation",
    technologies: ["HTML", "CSS"],
  },
  {
    title: "Analog Clock",
    image: project7,
    link: "https://analogclockjavascript.netlify.app/",
    description:
      "An analog clock is a tool for reading the time of day. The shortest hand indicates the hour, the longer hand indicates the minutes, and the longest arm indicates the seconds",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "Mumbai, India",
  phoneNo: "+12 4555 666 00 ",
  email: "kdeepti2497@gmail.com",
};
