import { IAchievement, IExperience, IProject } from "@/types";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagranIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import XIcon from "@/components/icons/XIcon";

export const generalInfoData = {
  email: "contact@abdullahtitu.com",
  number: "+880 01622-766644",

  emailSubject: "Let's collaborate on a project",
  emailBody: "Hi Titu, I am reaching out to you because...",

  oldPortfolio: "https://abdullahtitu.com/",
  calendlyLink: "/",
  resumeLink: "/",
};

export const socialLinksData = [
  {
    name: "facebook",
    url: "https://www.facebook.com/Abdullah.Al.T2",
    icon: FacebookIcon,
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/abdullahtitu",
    icon: LinkedInIcon,
  },
  {
    name: "whatsapp",
    url: "https://wa.me/8801622766644",
    icon: WhatsAppIcon,
  },
  {
    name: "instagram",
    url: "https://instagram.com/t2_ins",
    icon: InstagramIcon,
  },
  {
    name: "x",
    url: "https://x.com/T2_X21",
    icon: XIcon,
  },
];

export const stackData = {
  Programming: [
    {
      name: "C",
      icon: "/logo/c.png",
    },
    {
      name: "C++",
      icon: "/logo/cpp.png",
    },
    {
      name: "Python",
      icon: "/logo/python.png",
    },
    {
      name: "ROS",
      icon: "/logo/ros.png",
    },
    {
      name: "Java",
      icon: "/logo/java.png",
    },
  ],
  "Embedded & Development Tools": [
    {
      name: "VS Code",
      icon: "/logo/vscode.png",
    },
    {
      name: "Arduino IDE",
      icon: "/logo/arduino-ide.png",
    },
    {
      name: "STM32CubeIDE",
      icon: "/logo/stm32-cube.png",
    },
    {
      name: "STM32CubeMX",
      icon: "/logo/stm32-cube.png",
    },
    {
      name: "STM32CubeProgrammer",
      icon: "/logo/stm32-cube.png",
    },
  ],
  "Design & Creative Software": [
    {
      name: "Adobe Illustrator",
      icon: "/logo/adobe-illustractor.png",
    },
    {
      name: "Adobe Photoshop",
      icon: "/logo/adobe-photoshop.png",
    },
    {
      name: "Canva",
      icon: "/logo/canva.png",
    },
  ],
  "3D Printing & Prototyping": [
    {
      name: "Advanced Slicing (Bambu Studio, Cura, PrusaSlicer)",
      icon: "/logo/advance-tools.png",
    },
  ],
  "3D Design & Modeling": [
    {
      name: "FreeCAD",
      icon: "/logo/freecad.png",
    },
    {
      name: "Tinkercad",
      icon: "/logo/tinkercad.png",
    },
  ],
  "PCB Design": [
    {
      name: "EasyEDA",
      icon: "/logo/easy-eda.png",
    },
  ],
  "Development Boards & Platforms": [
    {
      name: "STM32",
      icon: "/logo/stm32.png",
    },
    {
      name: "Arduino",
      icon: "/logo/arduino.png",
    },
    {
      name: "Raspberry Pi",
      icon: "/logo/raspb.png",
    },
    {
      name: "NVIDIA Jetson Nano",
      icon: "/logo/nvidia.png",
    },
    {
      name: "ESP32",
      icon: "/logo/esp32.png",
    },
  ],
};

export const experienceData: IExperience[] = [
  {
    title: "Polynomial Labs",
    role: "Hardware Engineer",
    date: "Jan 2023 – Present",
    description:
      "Led system integration, automation, and maintenance for 3D printers and servers. Improved uptime and streamlined prototyping workflows.",
  },
  {
    title: "3D Printing BD",
    role: "3D Printing Operations Engineer",
    date: "Oct 2024 – Present",
    description:
      "Managed and optimised multiple 3D printers, achieving under 1% print failure rate and enhanced production efficiency.",
  },
  {
    title: "3D Printing BD",
    role: "3D Printing Operations Engineer",
    date: "Oct 2024 – Present",
    description:
      "Managed and optimised multiple 3D printers, achieving under 1% print failure rate and enhanced production efficiency.",
  },
  {
    title: "FAUNA InfoTech Ltd",
    role: "Robotics Consultant",
    date: "Apr 2025 – Present",
    description:
      "Developed robotics projects integrating hardware, software, and automation systems. Created hands-on robotics curricula.",
  },
  {
    title: "Dreams of Bangladesh",
    role: "3D Designer",
    date: "Apr 2025 – Sept 2025",
    description:
      "Designed 3D models and mechanical structures for the WISE Rover projects for both junior and senior teams.",
  },
  {
    title: "Foot Balance Technology BD",
    role: "3D Consultant",
    date: "Sept 2025 – Present",
    description:
      "Modernised 3D printing systems with Klipper-based printers. Enhanced precision, speed, and automation in industrial processes.",
  },
];

export const achievementsData: IAchievement[] = [
  {
    title:
      "International Robot Olympiad (IRO) – Gold Medalist, Australia, 2025",
  },
  {
    title:
      "Champion – 46th National Science and Technology Fair, Bangladesh, 2025",
  },
  {
    title: "Bronze Medalist – World Robot Olympiad, Bangladesh",
  },
  {
    title: "First Indigenous CubeSat Developer in Bangladesh",
  },
  {
    title:
      "Winner and participant in multiple University Science Fests across Bangladesh",
  },
  {
    title:
      "Recognized for excellence in Robotics, Embedded Systems, and Space Technology Projects",
  },
];

export const missionAndVisionData: IAchievement[] = [
  {
    title: "Promote space technology awareness in Bangladesh",
  },
  {
    title: "Develop accessible CubeSat platforms for students and researchers",
  },
  {
    title:
      "Build internationally competitive robotics and embedded systems projects",
  },
  {
    title: "Inspire the next generation of engineers",
  },
];

export const projectsData: IProject[] = [
  {
    title: "FavSat 2.0 DIY CubeSat Platform",
    slug: "favsat-2.0",
    year: 2025,
    techStack: [
      "Arduino",
      "ESP32",
      "Inverse Kinematics",
      "PID Control",
      "3D Printed Components",
      "C++",
      "ROS2",
    ],
    thumbnail: "/projects/images/cube-sat.jpg",
    longThumbnail: "/projects/images/cube-sat.jpg",
    images: ["/projects/images/cube-sat.jpg"],
    description: `
            FavSat 2.0 is a low-cost CubeSat system built using STM32 microcontrollers and LoRa telemetry communication.
            <br /><br />
            <strong>Key Features:</strong>
            <ul>
                <li>Real-time Telemetry Data Transmission</li>
                <li>Artificial Horizon Visualization</li>
                <li>3D Orientation Cube Display</li>
                <li>GPS Tracking System</li>
                <li>Environmental Monitoring</li>
                <li>Gas Detection System</li>
                <li>Ground Station Data Reception</li>
            </ul>
            <br /><br />
            <strong>Ground Station:</strong>
            <ul>
                <li>Arduino-based LoRa Receiver</li>
                <li>PC-based Processing Dashboard</li>
                <li>Live Sensor Data Visualization</li>
            </ul>
        `,
    role: `
            Robotics Engineer & Developer
            <ul>
                <li>Designed arm kinematics and structural 3D models</li>
                <li>Programmed servo control system with ESP32</li>
                <li>Implemented real-time motion algorithms</li>
                <li>Built wireless UI for manual and autonomous control</li>
            </ul>
        `,
  },
  {
    title: "Asteroid Exploration Robot",
    slug: "asteroid-exploration-robot",
    liveUrl: "https://asteroid-exploration-robot.vercel.app/",
    year: 2025,
    techStack: [
      "OctoPrint API",
      "Raspberry Pi",
      "Marlin Firmware",
      "Next.js",
      "MQTT",
      "ESP8266",
    ],
    // thumbnail: "/projects/thumbnail/3d-printer-automation.jpg",
    // longThumbnail: "/projects/long/3d-printer-automation.jpg",
    // images: [
    //   "/projects/images/3d-printer-automation-1.jpg",
    //   "/projects/images/3d-printer-automation-2.jpg",
    // ],
    description: `
            An Arduino Uno R3-based robotic platform designed to simulate asteroid exploration missions.
            <br /><br />
            <strong>Key Features:</strong>
            <ul>
                <li>BTS7960 Motor Driver Control</li>
                <li>Bluetooth Remote Operation</li>
                <li>High-Torque Drive System</li>
                <li>Expandable Sensor-Based Navigation</li>
            </ul>
        `,
    role: `
            System Developer
            <ul>
                <li>Integrated OctoPrint API with custom dashboard</li>
                <li>Configured Raspberry Pi for automation pipelines</li>
                <li>Built WiFi-controlled relay system using ESP8266</li>
                <li>Simplified UI for remote monitoring</li>
            </ul>
        `,
  },
];

export const educationData = [
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Major General Mahmudul Hasan College, Tangail",
    result: "GPA 4.50",
    duration: "2023 - 2025",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Mukul Niketan High School, Mymensingh",
    result: "GPA 5.00",
    duration: "2021 - 2023",
  },
];
