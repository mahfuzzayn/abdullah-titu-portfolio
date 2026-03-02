import { IExperience, IProject } from '@/types';

export const generalInfoData = {
    email: 'abdullahtitu@gmail.com',
    number: '+880 1606-451099',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Titu, I am reaching out to you because...',

    oldPortfolio: 'https://abdullahtitu.com/',
    calendlyLink: '/',
    resumeLink: '/',
};

export const socialLinksData = [
    { name: 'facebook', url: 'https://www.facebook.com/abdullahtitu' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/abdullahtitu' },
    { name: 'github', url: 'https://github.com/abdullahtitu' },
    { name: 'instagram', url: 'https://instagram.com/abdullahtitu' },
    { name: 'telegram', url: 'https://t.me/abdullahtitu' },
];

export const stackData = {
    'Embedded Systems & IoT': [
        {
            name: 'Arduino',
            icon: '/logo/arduino.png',
        },
        {
            name: 'ESP32',
            icon: '/logo/esp-32.png',
        },
        {
            name: 'raspberry Pi',
            icon: '/logo/raspb.png',
        },
        {
            name: 'Jetson Nano',
            icon: '/logo/nvidia.png',
        },
        {
            name: 'Automation',
            icon: '/logo/automatic.png',
        },
    ],
    '3D Design & Prototyping': [
        {
            name: '3D Printing',
            icon: '/logo/3d.png',
        },
        {
            name: 'Fusion 360',
            icon: '/logo/autodesk-fusion-360.png',
        },
        {
            name: 'TinkerCAD',
            icon: '/logo/tinkercad.png',
        },
        {
            name: 'SolidWorks',
            icon: '/logo/solidworks.png',
        },
    ],
    'Programming & Engineering Tools': [
        {
            name: 'C/C++',
            icon: '/logo/cpp.png',
        },
        {
            name: 'Python',
            icon: '/logo/python.png',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'MATLAB',
            icon: '/logo/matlab.png',
        },
    ],
    'Tools & Development Workflow': [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Github',
            icon: '/logo/github.png',
        },
        {
            name: 'Linux',
            icon: '/logo/linux.png',
        },
        {
            name: 'Project Management',
            icon: '/logo/management.png',
        },
    ],
};

export const experienceData: IExperience[] = [
    {
        title: 'Polynomial Labs',
        role: 'Hardware Engineer',
        date: 'Jan 2023 – Present',
        description:
            'Led system integration, automation, and maintenance for 3D printers and servers. Improved uptime and streamlined prototyping workflows.',
    },
    {
        title: '3D Printing BD',
        role: '3D Printing Operations Engineer',
        date: 'Oct 2024 – Present',
        description:
            'Managed and optimised multiple 3D printers, achieving under 1% print failure rate and enhanced production efficiency.',
    },
    {
        title: '3D Printing BD',
        role: '3D Printing Operations Engineer',
        date: 'Oct 2024 – Present',
        description:
            'Managed and optimised multiple 3D printers, achieving under 1% print failure rate and enhanced production efficiency.',
    },
    {
        title: 'FAUNA InfoTech Ltd',
        role: 'Robotics Consultant',
        date: 'Apr 2025 – Present',
        description:
            'Developed robotics projects integrating hardware, software, and automation systems. Created hands-on robotics curricula.',
    },
    {
        title: 'Dreams of Bangladesh',
        role: '3D Designer',
        date: 'Apr 2025 – Sept 2025',
        description:
            'Designed 3D models and mechanical structures for the WISE Rover projects for both junior and senior teams.',
    },
    {
        title: 'Foot Balance Technology BD',
        role: '3D Consultant',
        date: 'Sept 2025 – Present',
        description:
            'Modernised 3D printing systems with Klipper-based printers. Enhanced precision, speed, and automation in industrial processes.',
    },
];

export const projectsData: IProject[] = [
    {
        title: 'Industrial Robotic Arm',
        slug: 'industrial-robotic-arm',
        liveUrl: 'https://industrial-robotic-arm.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/industrial-robotic-arm-client',
            server: 'https://github.com/abdullahtitu/industrial-robotic-arm-server',
        },
        year: 2025,
        techStack: [
            'Arduino',
            'ESP32',
            'Inverse Kinematics',
            'PID Control',
            '3D Printed Components',
            'C++',
            'ROS2',
        ],
        thumbnail: '/projects/thumbnail/industrial-robotic-arm.png',
        longThumbnail: '/projects/long/industrial-robotic-arm.png',
        images: [
            '/projects/images/industrial-robotic-arm-1.png',
            '/projects/images/industrial-robotic-arm-2.png',
        ],
        description: `
            A 6DOF industrial robotic arm designed for precision automation and 
            research applications. Built with a custom kinematic model, high-torque 
            servo motors, and 3D-printed structural components.
            <br /><br />
            <strong>Key Features:</strong>
            <ul>
                <li>6DOF articulated arm with inverse kinematics</li>
                <li>Real-time motion control using ESP32</li>
                <li>High-precision servo calibration & PID tuning</li>
                <li>Wireless control panel for remote movement</li>
                <li>Modular 3D-printed joints and mount points</li>
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
        title: '3D Printer Automation',
        slug: '3d-printer-automation',
        liveUrl: 'https://3d-printer-automation.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/3d-printer-automation-client',
            server: 'https://github.com/abdullahtitu/3d-printer-automation-server',
        },
        year: 2025,
        techStack: [
            'OctoPrint API',
            'Raspberry Pi',
            'Marlin Firmware',
            'Next.js',
            'MQTT',
            'ESP8266',
        ],
        thumbnail: '/projects/thumbnail/3d-printer-automation.jpg',
        longThumbnail: '/projects/long/3d-printer-automation.jpg',
        images: [
            '/projects/images/3d-printer-automation-1.jpg',
            '/projects/images/3d-printer-automation-2.jpg',
        ],
        description: `
            A smart automation system enabling remote monitoring and wireless 
            control of FDM 3D printers. Integrated with OctoPrint for print 
            management, error alerts, and live camera feeds.
            <br /><br />
            <strong>Key Features:</strong>
            <ul>
                <li>Print start/stop control from web dashboard</li>
                <li>Real-time temperature and progress monitoring</li>
                <li>Automatic error detection and notifications</li>
                <li>Power control & safety shutdown system</li>
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
    {
        title: 'Smart Home Automation System',
        slug: 'smart-home-automation-system',
        liveUrl: 'https://smart-home-automation-system.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/smart-home-automation-system-client',
            server: 'https://github.com/abdullahtitu/smart-home-automation-system-server',
        },
        year: 2023,
        techStack: ['ESP32', 'MQTT', 'Node-RED', 'Next.js', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/smart-home-automation-system.png',
        longThumbnail: '/projects/long/smart-home-automation-system.png',
        images: [
            '/projects/images/smart-home-automation-system-1.png',
            '/projects/images/smart-home-automation-system-2.png',
        ],
        description: `
            A centralized IoT system for controlling home appliances, monitoring 
            energy usage, and enabling remote access through a web dashboard.
            <br /><br />
            <strong>Key Features:</strong>
            <ul>
                <li>Real-time device control via ESP32</li>
                <li>Secure MQTT-based communication</li>
                <li>Mobile-friendly dashboard for automation scenes</li>
                <li>Live temperature, humidity, and power graphs</li>
            </ul>
        `,
        role: `
            Embedded Systems Developer
            <ul>
                <li>Designed ESP32 firmware for automation</li>
                <li>Implemented MQTT communication flow</li>
                <li>Built UI dashboards and automation presets</li>
            </ul>
        `,
    },
    {
        title: 'Rover Control Platform',
        slug: 'rover-control-platform',
        liveUrl: 'https://rover-control-platform.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/rover-control-platform-client',
            server: 'https://github.com/abdullahtitu/rover-control-platform-server',
        },
        year: 2023,
        techStack: [
            'React.js',
            'WebSockets',
            'ESP32',
            'Motor Drivers',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/rover-control-platform.png',
        longThumbnail: '/projects/long/rover-control-platform.png',
        images: [
            '/projects/images/rover-control-platform-1.png',
            '/projects/images/rover-control-platform-2.png',
        ],
        description: `
            A real-time remote control interface for a robotic rover designed for 
            exploration and rescue tasks.
            <br /><br />
            <strong>Key Features:</strong>
            <ul>
                <li>Live rover direction & speed control</li>
                <li>WebSocket-based low-latency communication</li>
                <li>FPV video streaming support</li>
                <li>Modular sensor data visualization</li>
            </ul>
        `,
        role: `
            Robotics Interface Developer
            <ul>
                <li>Created control dashboard using React</li>
                <li>Developed ESP32 firmware for rover motor control</li>
                <li>Integrated WebSockets for real-time commands</li>
            </ul>
        `,
    },
    {
        title: 'Weather Monitoring Station',
        slug: 'weather-monitoring-station',
        liveUrl: 'https://weather-monitoring-station.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/weather-monitoring-station-client',
            server: 'https://github.com/abdullahtitu/weather-monitoring-station-server',
        },
        year: 2023,
        techStack: ['ESP8266', 'DHT22', 'BMP280', 'MQTT', 'Chart.js'],
        thumbnail: '/projects/thumbnail/weather-monitoring-station.jpg',
        longThumbnail: '/projects/long/weather-monitoring-station.jpg',
        images: [
            '/projects/images/weather-monitoring-station-1.jpg',
            '/projects/images/weather-monitoring-station-2.jpg',
        ],
        description: `
            A wireless IoT weather station designed to collect temperature, 
            humidity, pressure, and air-quality data and visualize them online.
        `,
        role: `
            Hardware Developer & IoT Engineer
            <ul>
                <li>Configured sensors with ESP8266</li>
                <li>Built live dashboard for data visualization</li>
            </ul>
        `,
    },
    {
        title: 'IoT Greenhouse Monitor',
        slug: 'iot-greenhouse-monitor',
        liveUrl: 'https://iot-greenhouse-monitor.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/iot-greenhouse-monitor-client',
            server: 'https://github.com/abdullahtitu/iot-greenhouse-monitor-server',
        },
        year: 2023,
        techStack: [
            'ESP32',
            'Soil Sensor',
            'Humidity Sensor',
            'Next.js',
            'MQTT',
        ],
        thumbnail: '/projects/thumbnail/iot-greenhouse-monitor.jpeg',
        longThumbnail: '/projects/long/iot-greenhouse-monitor.jpeg',
        images: [
            '/projects/images/iot-greenhouse-monitor-1.jpeg',
            '/projects/images/iot-greenhouse-monitor-2.jpeg',
        ],
        description: `
            Automated monitoring system for greenhouse environments, tracking 
            soil moisture, temperature, humidity, and controlling water pumps.
        `,
        role: `
            Embedded Systems Engineer
            <ul>
                <li>Built sensor integration firmware</li>
                <li>Developed automated irrigation logic</li>
            </ul>
        `,
    },
    {
        title: 'Robotics Simulation Toolkit',
        slug: 'robotics-simulation-toolkit',
        liveUrl: 'https://robotics-simulation-toolkit.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/robotics-simulation-toolkit-client',
            server: 'https://github.com/abdullahtitu/robotics-simulation-toolkit-server',
        },
        year: 2023,
        techStack: ['Python', 'PyBullet', 'ROS2', 'Next.js'],
        thumbnail: '/projects/thumbnail/robotics-simulation-toolkit.png',
        longThumbnail: '/projects/long/robotics-simulation-toolkit.png',
        images: [
            '/projects/images/robotics-simulation-toolkit-1.png',
            '/projects/images/robotics-simulation-toolkit-2.png',
        ],
        description: `
            A robotics simulation toolkit for testing robotic arms, rovers, and 
            sensors in virtual physics-based environments.
        `,
        role: `
            Simulation Developer
            <ul>
                <li>Created simulation scenes in PyBullet</li>
                <li>Integrated ROS2 nodes for control</li>
            </ul>
        `,
    },
    {
        title: 'Rescue Robot Vehicle',
        slug: 'rescue-robot-vehicle',
        liveUrl: 'https://rescue-robot-vehicle.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/rescue-robot-vehicle-client',
            server: 'https://github.com/abdullahtitu/rescue-robot-vehicle-server',
        },
        year: 2023,
        techStack: ['ESP32-CAM', 'Motor Driver', 'Wireless Control', 'React'],
        thumbnail: '/projects/thumbnail/rescue-robot-vehicle.png',
        longThumbnail: '/projects/long/rescue-robot-vehicle.png',
        images: [
            '/projects/images/rescue-robot-vehicle-1.png',
            '/projects/images/rescue-robot-vehicle-2.png',
        ],
        description: `
            A camera-assisted rescue robot designed for navigating dangerous 
            environments and streaming real-time video.
        `,
        role: `
            Robotics Engineer
            <ul>
                <li>Developed ESP32-CAM streaming system</li>
                <li>Built motor control firmware and rover chassis</li>
            </ul>
        `,
    },
    {
        title: 'IoT Device Dashboard',
        slug: 'iot-device-dashboard',
        liveUrl: 'https://iot-device-dashboard.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/iot-device-dashboard-client',
            server: 'https://github.com/abdullahtitu/iot-device-dashboard-server',
        },
        year: 2023,
        techStack: ['Next.js', 'MQTT', 'Node.js', 'Chart.js'],
        thumbnail: '/projects/thumbnail/iot-device-dashboard.png',
        longThumbnail: '/projects/long/iot-device-dashboard.png',
        images: [
            '/projects/images/iot-device-dashboard-1.png',
            '/projects/images/iot-device-dashboard-2.png',
        ],
        description: `
            A unified dashboard for monitoring and controlling multiple IoT devices 
            through MQTT and a clean UI interface.
        `,
        role: `
            Full-Stack IoT Developer
            <ul>
                <li>Created MQTT broker communication logic</li>
                <li>Built interactive charts and control widgets</li>
            </ul>
        `,
    },
    {
        title: 'IoT Cloud Platform',
        slug: 'iot-cloud-platform',
        liveUrl: 'https://iot-cloud-platform.vercel.app/',
        github: {
            client: 'https://github.com/abdullahtitu/iot-cloud-platform-client',
            server: 'https://github.com/abdullahtitu/iot-cloud-platform-server',
        },
        year: 2023,
        techStack: ['Node.js', 'MQTT Broker', 'Cloud Database', 'Next.js'],
        thumbnail: '/projects/thumbnail/iot-cloud-platform.png',
        longThumbnail: '/projects/long/iot-cloud-platform.png',
        images: [
            '/projects/images/iot-cloud-platform-1.png',
            '/projects/images/iot-cloud-platform-2.png',
        ],
        description: `
            A cloud platform for IoT device registration, telemetry storage, 
            and remote access APIs.
        `,
        role: `
            Platform Developer
            <ul>
                <li>Designed cloud architecture for IoT data</li>
                <li>Developed REST and MQTT APIs</li>
            </ul>
        `,
    },
];

export const educationData = [
    {
        title: 'Higher Secondary Certificate (HSC)',
        institution: 'Major General Mahmudul Hasan College, Tangail',
        result: 'GPA 4.50',
        duration: '2023 - 2025',
    },
    {
        title: 'Secondary School Certificate (SSC)',
        institution: 'Mukul Niketan High School, Mymensingh',
        result: 'GPA 5.00',
        duration: '2021 - 2023',
    },
];
