import traffic from "../assets/images/Traffic Management System/Screenshot 2025-03-19 at 10.23.17.png";
import carParkSystem from "../assets/images/Traffic Management System/Screenshot 2025-03-19 at 10.24.07.png"
import carBarrierSystem from "../assets/images/Traffic Management System/Screenshot 2025-03-19 at 10.26.44.png"
import trafficManagementSystem from "../assets/images/Traffic Management System/Screenshot 2025-03-19 at 10.24.17.png"
import parkingGuide from "../assets/images/Traffic Management System/Screenshot 2025-03-19 at 10.24.07.png"
import parkingSpace from "../assets/images/Traffic Management System - Car Park System/5df76659-13ca-4a4a-8d51-0925f03f515a.jpg"
import trafficBarrier from "../assets/images/Traffic Management System - Car Park System/00b946e1-30dc-4d19-bd04-1e52f5834f5b.mp4"
import drone from "../assets/images/Surveillance/Drone.jpg"
import motionDectector from "../assets/images/Surveillance/Video long range listening device/6654fe74-7f98-45e2-9e76-04546a7020f9.mp4"
import longRangeCamera from "../assets/images/Surveillance/Video long range listening device/c4c5837e-539d-4a24-b58a-127c0cd42e04.mp4"
import solarCCTV from "../assets/images/Surveillance/deployable cctv.jpg"
import thermalCamera from "../assets/images/Surveillance/IMG_0103.mp4"
import hiddenCamera from "../assets/images/Surveillance/Video long range listening device/f68a5f8f-4138-4c8b-927c-a9e096452eb4.mp4"
import faceCamera from "../assets/images/Surveillance/IMG_2489.jpg"
import biometricSecurity from "../assets/images/Security/IMG_2337.jpg"
import smartAlarmSecurity from "../assets/images/Security/IMG_2346.jpg"
import intrusionSecurity from  "../assets/images/Security/Airport Security/ea71652f-66b4-46bc-8c04-1778fee653b1.jpg"
import securityScanner from "../assets/images/Security/Airport Security/86c332cd-b497-42f0-8a09-be7f21f6ea3f.jpg"
import securityCheck from "../assets/images/Security/Airport Security/d1d4aa43-6305-4df9-accc-b718fc414650.jpg"
import multipurposeSecurity from  "../assets/images/Security/Airport Security/6d99bb83-6a20-4f67-bd67-c932212b198d.jpg"
import forensicAndCom from "../assets/images/Entry Systems/IMG_3192.jpg"
import facialRecongitionSys from "../assets/images/Surveillance/Covert 4G Wireless glasses.jpg"
import comRoom from "../assets/images/Command Centres - Control Rooms/images.jpg"
import keycardEntry from "../assets/images/Entry Systems/IMG_3194.jpg"
import entry from '../assets/images/Entry Systems/323e2ff7-19d7-46a2-b3fc-7e6938f2af54.mp4'
import internet from "../assets/images/Entry Systems/IMG_3197.jpg"

export const products = [
  // Traffic Management System / Car Park System
  {
    id: "3",
    name: "Smart Traffic Flow Analyzer",
    category: "Traffic Management System / Car Park System",
    imageUrl: traffic,
    description: "An advanced system to monitor and optimize traffic flow in real-time, reducing congestion and improving road safety.",
    fullDescription: "The Smart Traffic Flow Analyzer uses AI-driven algorithms to monitor vehicle movement, predict traffic patterns, and optimize signal timings. Ideal for urban environments, this system integrates with existing infrastructure to reduce congestion and enhance safety.\n\nThe system features:\n- Real-time traffic monitoring with AI analytics\n- Predictive congestion modeling\n- Integration with smart traffic lights\n- Cloud-based data storage for historical analysis\n- Mobile app for traffic updates\n- Customizable alerts for traffic incidents\n\nDesigned for city planners and traffic authorities, this system ensures smoother traffic flow and safer roads.",
    features: [
      "AI-driven traffic prediction",
      "Real-time monitoring",
      "Smart traffic light integration",
      "Cloud-based analytics",
      "Mobile app support",
      "Incident detection and alerts"
    ],
    specifications: {
      "Model": "TFA-2025",
      "Processing Unit": "Quad-Core 2.5GHz",
      "Data Storage": "1TB SSD",
      "Connectivity": "5G, Wi-Fi 6",
      "Power Supply": "220V AC",
      "Operating Temperature": "-20°C to 60°C",
      "Camera Compatibility": "1080P or higher"
    }
  },
  {
    id: "4",
    name: "Automated Parking Guidance System",
    category: "Traffic Management System / Car Park System",
    imageUrl: carParkSystem,
    description: "A smart solution to guide drivers to available parking spaces, reducing search time and improving parking efficiency.",
    fullDescription: "The Automated Parking Guidance System uses sensors and digital displays to direct drivers to open parking spots in real-time. Perfect for large car parks, this system minimizes congestion and enhances user experience.\n\nThe system features:\n- Ultrasonic sensors for space detection\n- LED displays for real-time guidance\n- Integration with mobile apps for pre-booking\n- Analytics dashboard for parking trends\n- Energy-efficient design\n- Scalable for multi-level parking structures\n\nIdeal for shopping malls, airports, and office complexes, this system streamlines parking operations.",
    features: [
      "Real-time parking availability",
      "Ultrasonic space detection",
      "LED guidance displays",
      "Mobile app integration",
      "Parking trend analytics",
      "Energy-efficient sensors"
    ],
    specifications: {
      "Model": "APGS-300",
      "Sensor Type": "Ultrasonic",
      "Display": "LED, 1920x1080",
      "Connectivity": "Wi-Fi, Ethernet",
      "Power": "12V DC",
      "Operating Range": "0-5m",
      "Installation": "Ceiling or wall mount"
    }
  },
  {
    id: "5",
    name: "Intelligent Traffic Signal Controller",
    category: "Traffic Management System / Car Park System",
    imageUrl: trafficManagementSystem,
    description: "A smart controller that adapts traffic signals based on real-time vehicle density to reduce wait times.",
    fullDescription: "The Intelligent Traffic Signal Controller uses AI to dynamically adjust signal timings based on traffic density, weather conditions, and pedestrian activity. It ensures smoother traffic flow and reduces delays.\n\nThe system features:\n- AI-based signal optimization\n- Real-time vehicle detection\n- Pedestrian safety integration\n- Remote management via cloud\n- Emergency vehicle priority mode\n- Energy-efficient operation\n\nPerfect for busy intersections, this system enhances traffic efficiency and safety.",
    features: [
      "AI signal optimization",
      "Real-time vehicle detection",
      "Pedestrian safety features",
      "Cloud-based remote management",
      "Emergency vehicle priority",
      "Energy-efficient design"
    ],
    specifications: {
      "Model": "ITSC-500",
      "Processor": "Dual-Core 1.8GHz",
      "Connectivity": "4G, Ethernet",
      "Power Supply": "110-240V AC",
      "Operating Temperature": "-30°C to 70°C",
      "Signal Compatibility": "LED Traffic Lights",
      "Mounting": "Pole or cabinet"
    }
  },
  {
    id: "6",
    name: "Car Park Payment Kiosk",
    category: "Traffic Management System / Car Park System",
    imageUrl: traffic,
    description: "A user-friendly kiosk for seamless parking payments, supporting multiple payment methods.",
    fullDescription: "The Car Park Payment Kiosk offers a convenient solution for drivers to pay for parking using cash, card, or mobile payments. It integrates with parking management systems for real-time updates.\n\nThe system features:\n- Multi-payment support (cash, card, mobile)\n- Touchscreen interface\n- Integration with parking sensors\n- Receipt printing\n- Weatherproof design\n- Remote monitoring for maintenance\n\nIdeal for public and private car parks, this kiosk simplifies payment processes.",
    features: [
      "Multi-payment support",
      "Touchscreen interface",
      "Integration with parking systems",
      "Receipt printing",
      "Weatherproof design",
      "Remote monitoring"
    ],
    specifications: {
      "Model": "CPPK-200",
      "Display": "15-inch touchscreen",
      "Payment Methods": "Cash, Card, NFC",
      "Connectivity": "Wi-Fi, 4G",
      "Power": "220V AC",
      "Operating Temperature": "-10°C to 50°C",
      "Material": "Stainless Steel"
    }
  },
  {
    id: "7",
    name: "Vehicle Counting System",
    category: "Traffic Management System / Car Park System",
    imageUrl: trafficManagementSystem,
    description: "A system to accurately count vehicles entering and exiting car parks or roads for better traffic management.",
    fullDescription: "The Vehicle Counting System uses advanced sensors to track vehicle entries and exits, providing real-time data for traffic and parking management. It helps optimize space usage and reduce congestion.\n\nThe system features:\n- High-accuracy vehicle detection\n- Real-time counting and reporting\n- Integration with digital displays\n- Cloud-based data storage\n- Low-light performance\n- Easy installation\n\nSuitable for highways, car parks, and toll booths, this system improves operational efficiency.",
    features: [
      "High-accuracy detection",
      "Real-time counting",
      "Digital display integration",
      "Cloud storage",
      "Low-light performance",
      "Easy installation"
    ],
    specifications: {
      "Model": "VCS-100",
      "Sensor Type": "Infrared",
      "Accuracy": "98%",
      "Connectivity": "Wi-Fi, Ethernet",
      "Power": "12V DC",
      "Operating Range": "0-10m",
      "Mounting": "Overhead or side"
    }
  },
  {
    id: "8",
    name: "Smart Toll Collection System",
    category: "Traffic Management System / Car Park System",
    imageUrl: trafficBarrier,
    description: "An automated system for fast and efficient toll collection using RFID and license plate recognition.",
    fullDescription: "The Smart Toll Collection System streamlines toll payments with RFID tags and license plate recognition, reducing wait times and improving traffic flow at toll booths.\n\nThe system features:\n- RFID-based vehicle identification\n- License plate recognition\n- Automated payment deduction\n- Real-time transaction logging\n- Anti-fraud detection\n- Cloud-based management\n\nDesigned for highways and bridges, this system ensures efficient toll operations.",
    features: [
      "RFID vehicle identification",
      "License plate recognition",
      "Automated payments",
      "Real-time logging",
      "Anti-fraud detection",
      "Cloud management"
    ],
    specifications: {
      "Model": "STCS-400",
      "Reader Type": "RFID, LPR",
      "Accuracy": "99%",
      "Connectivity": "5G, Ethernet",
      "Power Supply": "220V AC",
      "Operating Temperature": "-20°C to 60°C",
      "Mounting": "Overhead gantry"
    }
  },
  {
    id: "9",
    name: "Parking Space Reservation System",
    category: "Traffic Management System / Car Park System",
    imageUrl: parkingSpace ,
    description: "A mobile app-integrated system for reserving parking spaces in advance.",
    fullDescription: "The Parking Space Reservation System allows users to book parking spaces via a mobile app, ensuring hassle-free parking in busy areas. It integrates with parking sensors for real-time availability.\n\nThe system features:\n- Mobile app for reservations\n- Real-time space availability\n- Payment integration\n- QR code entry/exit\n- User notifications\n- Analytics for parking trends\n\nPerfect for urban car parks, this system enhances user convenience.",
    features: [
      "Mobile app reservations",
      "Real-time availability",
      "Payment integration",
      "QR code access",
      "User notifications",
      "Parking analytics"
    ],
    specifications: {
      "Model": "PSRS-150",
      "App Compatibility": "iOS, Android",
      "Connectivity": "Wi-Fi, 4G",
      "Payment Gateway": "Stripe, PayPal",
      "Power": "Battery backup",
      "Operating Temperature": "0°C to 50°C",
      "Server": "Cloud-based"
    }
  },
  {
    id: "10",
    name: "Traffic Incident Detection System",
    category: "Traffic Management System / Car Park System",
    imageUrl: trafficBarrier,
    description: "A system to detect and report traffic incidents in real-time for faster response.",
    fullDescription: "The Traffic Incident Detection System uses cameras and AI to identify accidents, roadblocks, and other incidents, alerting authorities for quick response and traffic rerouting.\n\nThe system features:\n- AI-powered incident detection\n- Real-time alerts to authorities\n- Integration with traffic management systems\n- Video recording for evidence\n- Cloud-based analytics\n- Night vision capabilities\n\nIdeal for highways and urban roads, this system enhances safety and response times.",
    features: [
      "AI incident detection",
      "Real-time alerts",
      "Traffic system integration",
      "Video recording",
      "Cloud analytics",
      "Night vision"
    ],
    specifications: {
      "Model": "TIDS-600",
      "Camera Resolution": "4K",
      "AI Processor": "NVIDIA Jetson",
      "Connectivity": "5G, Wi-Fi",
      "Power Supply": "220V AC",
      "Operating Temperature": "-30°C to 70°C",
      "Mounting": "Pole or overhead"
    }
  },
  {
    id: "11",
    name: "Dynamic Lane Management System",
    category: "Traffic Management System / Car Park System",
    imageUrl: parkingGuide,
    description: "A system to dynamically adjust lane usage based on traffic conditions.",
    fullDescription: "The Dynamic Lane Management System uses sensors and digital signage to adjust lane directions and usage based on real-time traffic flow, reducing congestion during peak hours.\n\nThe system features:\n- Real-time lane adjustment\n- Digital signage for driver guidance\n- AI-based traffic analysis\n- Integration with traffic signals\n- Remote management\n- Safety alerts for drivers\n\nSuitable for highways and busy urban roads, this system optimizes lane usage.",
    features: [
      "Real-time lane adjustment",
      "Digital signage",
      "AI traffic analysis",
      "Traffic signal integration",
      "Remote management",
      "Safety alerts"
    ],
    specifications: {
      "Model": "DLMS-700",
      "Signage": "LED, 1920x1080",
      "Sensors": "Infrared, Radar",
      "Connectivity": "4G, Ethernet",
      "Power": "220V AC",
      "Operating Temperature": "-20°C to 60°C",
      "Mounting": "Overhead gantry"
    }
  },
  {
    id: "12",
    name: "Car Park Barrier System",
    category: "Traffic Management System / Car Park System",
    imageUrl:  carBarrierSystem,
    description: "An automated barrier system for secure and efficient car park access control.",
    fullDescription: "The Car Park Barrier System provides secure access control for car parks with automated barriers that operate via RFID, license plate recognition, or mobile app authentication.\n\nThe system features:\n- Automated barrier operation\n- RFID and LPR access\n- Mobile app integration\n- Anti-tailgating technology\n- Durable weatherproof design\n- Remote monitoring\n\nIdeal for private and public car parks, this system ensures secure and efficient access.",
    features: [
      "Automated barriers",
      "RFID and LPR access",
      "Mobile app integration",
      "Anti-tailgating",
      "Weatherproof design",
      "Remote monitoring"
    ],
    specifications: {
      "Model": "CPBS-800",
      "Barrier Length": "3-6m",
      "Operation Speed": "1.5s",
      "Connectivity": "Wi-Fi, Ethernet",
      "Power Supply": "220V AC",
      "Operating Temperature": "-20°C to 60°C",
      "Material": "Aluminum alloy"
    }
  },

  // Surveillance
  {
    id: "13",
    name: "360-Degree Panoramic Surveillance Camera",
    category: "Surveillance",
    imageUrl: trafficManagementSystem,
    description: "A high-resolution camera offering 360-degree coverage for comprehensive surveillance.",
    fullDescription: "The 360-Degree Panoramic Surveillance Camera provides complete coverage with a single device, eliminating blind spots. Ideal for large areas like warehouses, parking lots, and public spaces.\n\nThe system features:\n- 360-degree panoramic view\n- 4K ultra-high-definition resolution\n- AI-powered motion detection\n- Night vision up to 50m\n- Secure cloud storage\n- Remote access via mobile app\n\nDesigned for robust surveillance, this camera ensures no detail is missed.",
    features: [
      "360-degree coverage",
      "4K resolution",
      "AI motion detection",
      "Night vision",
      "Cloud storage",
      "Remote access"
    ],
    specifications: {
      "Model": "PSC-360",
      "Resolution": "4K",
      "Field of View": "360°",
      "IR Distance": "50m",
      "Video Compression": "H.265",
      "Power": "12V DC",
      "Connectivity": "Wi-Fi, Ethernet"
    }
  },
  {
    id: "14",
    name: "Thermal Imaging Surveillance Camera",
    category: "Surveillance",
    imageUrl: thermalCamera,
    description: "A thermal camera for detecting heat signatures in complete darkness or adverse weather.",
    fullDescription: "The Thermal Imaging Surveillance Camera detects heat signatures, making it ideal for surveillance in low-visibility conditions like darkness, fog, or smoke. Perfect for perimeter security.\n\nThe system features:\n- Thermal imaging for heat detection\n- 1080P resolution for visible light\n- AI-based anomaly detection\n- Long-range detection up to 500m\n- Weatherproof design\n- Integration with alarm systems\n\nThis camera ensures reliable surveillance in challenging environments.",
    features: [
      "Thermal imaging",
      "1080P resolution",
      "AI anomaly detection",
      "Long-range detection",
      "Weatherproof design",
      "Alarm integration"
    ],
    specifications: {
      "Model": "TISC-200",
      "Resolution": "1080P",
      "Thermal Range": "500m",
      "Operating Temperature": "-40°C to 70°C",
      "Video Compression": "H.264",
      "Power": "24V DC",
      "Connectivity": "Ethernet"
    }
  },
  {
    id: "15",
    name: "AI-Powered Drone Surveillance System",
    category: "Surveillance",
    imageUrl: drone ,
    description: "A drone-based system for aerial surveillance with AI analytics.",
    fullDescription: "The AI-Powered Drone Surveillance System provides aerial monitoring with real-time AI analytics for large areas like borders, events, or industrial sites. It autonomously patrols and reports incidents.\n\nThe system features:\n- Autonomous flight with pre-set routes\n- 4K camera with zoom capabilities\n- AI-powered object detection\n- Live streaming to control center\n- Long battery life\n- Weather-resistant design\n\nIdeal for expansive surveillance needs, this system offers unmatched flexibility.",
    features: [
      "Autonomous flight",
      "4K camera with zoom",
      "AI object detection",
      "Live streaming",
      "Long battery life",
      "Weather-resistant"
    ],
    specifications: {
      "Model": "ADSS-300",
      "Camera Resolution": "4K",
      "Flight Time": "45 minutes",
      "Range": "5km",
      "Video Compression": "H.265",
      "Power": "Rechargeable battery",
      "Connectivity": "5G"
    }
  },
  {
    id: "16",
    name: "Smart Motion Detection Camera",
    category: "Surveillance",
    imageUrl: motionDectector ,
    description: "A camera with advanced motion detection for real-time alerts and monitoring.",
    fullDescription: "The Smart Motion Detection Camera uses AI to distinguish between humans, animals, and objects, sending real-time alerts for suspicious activity. Perfect for home or business security.\n\nThe system features:\n- AI-powered motion detection\n- 1080P resolution\n- Two-way audio\n- Night vision up to 30m\n- Mobile app notifications\n- Local and cloud storage\n\nThis camera provides reliable monitoring with minimal false alarms.",
    features: [
      "AI motion detection",
      "1080P resolution",
      "Two-way audio",
      "Night vision",
      "Mobile notifications",
      "Dual storage options"
    ],
    specifications: {
      "Model": "SMDC-100",
      "Resolution": "1080P",
      "IR Distance": "30m",
      "Audio": "Two-way",
      "Storage": "128GB local, cloud",
      "Power": "12V DC",
      "Connectivity": "Wi-Fi"
    }
  },
  {
    id: "17",
    name: "Long-Range PTZ Surveillance Camera",
    category: "Surveillance",
    imageUrl: longRangeCamera,
    description: "A pan-tilt-zoom camera for long-range surveillance with precise control.",
    fullDescription: "The Long-Range PTZ Surveillance Camera offers pan, tilt, and zoom functionality for detailed monitoring over large distances. Ideal for critical infrastructure and public spaces.\n\nThe system features:\n- 360° pan, 90° tilt, 30x optical zoom\n- 4K resolution\n- AI tracking for moving objects\n- Night vision up to 200m\n- Weatherproof design\n- Remote control via app\n\nThis camera ensures comprehensive surveillance with precise control.",
    features: [
      "360° pan, 90° tilt",
      "30x optical zoom",
      "4K resolution",
      "AI object tracking",
      "Night vision",
      "Weatherproof"
    ],
    specifications: {
      "Model": "LRPTZ-400",
      "Resolution": "4K",
      "Zoom": "30x optical",
      "IR Distance": "200m",
      "Video Compression": "H.265",
      "Power": "24V DC",
      "Connectivity": "Ethernet"
    }
  },
  {
    id: "18",
    name: "Hidden Indoor Surveillance Camera",
    category: "Surveillance",
    imageUrl: hiddenCamera,
    description: "A discreet camera for covert indoor surveillance.",
    fullDescription: "The Hidden Indoor Surveillance Camera is designed to blend into any environment, providing covert monitoring for homes, offices, or retail spaces. It captures high-quality video without detection.\n\nThe system features:\n- Discreet design (smoke detector style)\n- 1080P resolution\n- Motion detection with alerts\n- Night vision up to 10m\n- Local storage via SD card\n- Remote access via app\n\nPerfect for discreet surveillance needs, this camera ensures privacy and security.",
    features: [
      "Discreet design",
      "1080P resolution",
      "Motion detection",
      "Night vision",
      "Local storage",
      "Remote access"
    ],
    specifications: {
      "Model": "HISC-150",
      "Resolution": "1080P",
      "IR Distance": "10m",
      "Storage": "64GB SD card",
      "Video Compression": "H.264",
      "Power": "5V DC",
      "Connectivity": "Wi-Fi"
    }
  },
  {
    id: "19",
    name: "Solar-Powered Outdoor Surveillance Camera",
    category: "Surveillance",
    imageUrl: solarCCTV ,
    description: "A solar-powered camera for remote outdoor surveillance with no wiring required.",
    fullDescription: "The Solar-Powered Outdoor Surveillance Camera operates on solar energy, making it ideal for remote locations without power access. It provides reliable monitoring with minimal maintenance.\n\nThe system features:\n- Solar-powered with battery backup\n- 1080P resolution\n- Motion detection with alerts\n- Night vision up to 20m\n- Weatherproof design\n- Cloud storage\n\nThis camera is perfect for rural or off-grid surveillance needs.",
    features: [
      "Solar-powered",
      "1080P resolution",
      "Motion detection",
      "Night vision",
      "Weatherproof",
      "Cloud storage"
    ],
    specifications: {
      "Model": "SPOC-200",
      "Resolution": "1080P",
      "IR Distance": "20m",
      "Battery": "10,000mAh",
      "Video Compression": "H.264",
      "Power": "Solar, 5W panel",
      "Connectivity": "4G"
    }
  },
  {
    id: "20",
    name: "AI Facial Recognition Camera",
    category: "Surveillance",
    imageUrl: faceCamera,
    description: "A camera with AI facial recognition for identifying individuals in real-time.",
    fullDescription: "The AI Facial Recognition Camera uses advanced algorithms to identify and track individuals in real-time, making it ideal for high-security areas like airports, banks, and government facilities.\n\nThe system features:\n- AI facial recognition with 99% accuracy\n- 4K resolution\n- Real-time alerts for recognized faces\n- Night vision up to 30m\n- Secure cloud storage\n- Integration with access control systems\n\nThis camera enhances security with precise identification.",
    features: [
      "AI facial recognition",
      "4K resolution",
      "Real-time alerts",
      "Night vision",
      "Cloud storage",
      "Access control integration"
    ],
    specifications: {
      "Model": "AFRC-300",
      "Resolution": "4K",
      "Recognition Accuracy": "99%",
      "IR Distance": "30m",
      "Video Compression": "H.265",
      "Power": "12V DC",
      "Connectivity": "Ethernet"
    }
  },

  // Security
  {
    id: "21",
    name: "Biometric Access Control System",
    category: "Security",
    imageUrl: biometricSecurity,
    description: "A secure access control system using fingerprint and facial recognition.",
    fullDescription: "The Biometric Access Control System ensures secure entry with fingerprint and facial recognition technology, preventing unauthorized access to sensitive areas.\n\nThe system features:\n- Fingerprint and facial recognition\n- High-speed authentication\n- Integration with door locks\n- Audit trail for access logs\n- Anti-spoofing technology\n- Remote management via app\n\nIdeal for offices, data centers, and secure facilities, this system enhances security.",
    features: [
      "Fingerprint recognition",
      "Facial recognition",
      "High-speed authentication",
      "Access log tracking",
      "Anti-spoofing",
      "Remote management"
    ],
    specifications: {
      "Model": "BACS-500",
      "Recognition Speed": "<1s",
      "User Capacity": "10,000",
      "Connectivity": "Wi-Fi, Ethernet",
      "Power Supply": "12V DC",
      "Operating Temperature": "0°C to 50°C",
      "Mounting": "Wall mount"
    }
  },
  {
    id: "22",
    name: "Smart Alarm System",
    category: "Security",
    imageUrl: smartAlarmSecurity,
    description: "A comprehensive alarm system with sensors for intrusion detection.",
    fullDescription: "The Smart Alarm System protects properties with a network of sensors for doors, windows, and motion detection, sending instant alerts to users and authorities.\n\nThe system features:\n- Door/window sensors\n- Motion detection\n- Siren with 120dB output\n- Mobile app alerts\n- Integration with surveillance cameras\n- Battery backup\n\nPerfect for homes and businesses, this system ensures round-the-clock security.",
    features: [
      "Door/window sensors",
      "Motion detection",
      "Loud siren",
      "Mobile alerts",
      "Camera integration",
      "Battery backup"
    ],
    specifications: {
      "Model": "SAS-200",
      "Siren Output": "120dB",
      "Sensor Range": "10m",
      "Connectivity": "Wi-Fi, 4G",
      "Power": "220V AC, battery backup",
      "Operating Temperature": "-10°C to 50°C",
      "Installation": "DIY or professional"
    }
  },
  {
    id: "23",
    name: "Perimeter Intrusion Detection System",
    category: "Security",
    imageUrl: intrusionSecurity,
    description: "A system to detect and alert on unauthorized perimeter breaches.",
    fullDescription: "The Perimeter Intrusion Detection System uses infrared and microwave sensors to detect unauthorized entry along a perimeter, ideal for securing large properties.\n\nThe system features:\n- Infrared and microwave detection\n- Real-time alerts\n- Integration with surveillance cameras\n- Weatherproof sensors\n- Long-range detection up to 100m\n- Remote monitoring\n\nThis system is perfect for industrial sites, military bases, and estates.",
    features: [
      "Infrared detection",
      "Microwave detection",
      "Real-time alerts",
      "Camera integration",
      "Weatherproof",
      "Long-range detection"
    ],
    specifications: {
      "Model": "PIDS-300",
      "Detection Range": "100m",
      "Sensor Type": "Infrared, Microwave",
      "Connectivity": "Ethernet",
      "Power Supply": "24V DC",
      "Operating Temperature": "-30°C to 70°C",
      "Mounting": "Fence or ground"
    }
  },
  {
    id: "24",
    name: "Smart Door Lock System",
    category: "Security",
    imageUrl: intrusionSecurity,
    description: "A keyless door lock system with multiple access methods.",
    fullDescription: "The Smart Door Lock System offers keyless entry with fingerprint, PIN, and mobile app access, providing convenience and enhanced security for homes and offices.\n\nThe system features:\n- Fingerprint and PIN access\n- Mobile app control\n- Anti-tamper alarm\n- Low battery alerts\n- Temporary access codes\n- Durable design\n\nThis lock system ensures secure and convenient access control.",
    features: [
      "Fingerprint access",
      "PIN access",
      "Mobile app control",
      "Anti-tamper alarm",
      "Temporary codes",
      "Durable design"
    ],
    specifications: {
      "Model": "SDLS-400",
      "Unlock Methods": "Fingerprint, PIN, App",
      "User Capacity": "100",
      "Battery": "4x AA",
      "Operating Temperature": "-20°C to 60°C",
      "Material": "Stainless Steel",
      "Connectivity": "Bluetooth"
    }
  },
  {
    id: "25",
    name: "Portable Security Scanner",
    category: "Security",
    imageUrl: securityScanner,
    description: "A handheld scanner for detecting metal and contraband items.",
    fullDescription: "The Portable Security Scanner is a lightweight device for detecting metal objects and contraband, ideal for event security, schools, and public venues.\n\nThe system features:\n- High-sensitivity metal detection\n- Audio and vibration alerts\n- Lightweight and ergonomic design\n- Rechargeable battery\n- Adjustable sensitivity\n- LED indicators\n\nThis scanner ensures quick and effective security checks.",
    features: [
      "High-sensitivity detection",
      "Audio/vibration alerts",
      "Lightweight design",
      "Rechargeable battery",
      "Adjustable sensitivity",
      "LED indicators"
    ],
    specifications: {
      "Model": "PSS-100",
      "Detection Range": "5cm",
      "Battery Life": "8 hours",
      "Weight": "300g",
      "Power": "Rechargeable battery",
      "Operating Temperature": "0°C to 50°C",
      "Material": "ABS Plastic"
    }
  },
  {
    id: "26",
    name: "Anti-Drone Security System",
    category: "Security",
    imageUrl: multipurposeSecurity,
    description: "A system to detect and neutralize unauthorized drones.",
    fullDescription: "The Anti-Drone Security System detects and neutralizes unauthorized drones using RF jamming and laser technology, protecting sensitive areas from aerial threats.\n\nThe system features:\n- Drone detection up to 2km\n- RF jamming for neutralization\n- Laser-based drone disabling\n- Real-time alerts\n- Integration with surveillance\n- Weatherproof design\n\nIdeal for airports, prisons, and military bases, this system ensures aerial security.",
    features: [
      "Drone detection",
      "RF jamming",
      "Laser disabling",
      "Real-time alerts",
      "Surveillance integration",
      "Weatherproof"
    ],
    specifications: {
      "Model": "ADSS-500",
      "Detection Range": "2km",
      "Jamming Range": "1km",
      "Power Supply": "220V AC",
      "Operating Temperature": "-20°C to 60°C",
      "Mounting": "Fixed or mobile",
      "Connectivity": "Ethernet"
    }
  },
  {
    id: "27",
    name: "Smart Safe with Biometric Lock",
    category: "Security",
    imageUrl: securityCheck,
    description: "A secure safe with biometric locking for valuables.",
    fullDescription: "The Smart Safe with Biometric Lock uses fingerprint recognition to secure valuables, offering a high level of protection for homes, offices, or retail environments.\n\nThe system features:\n- Fingerprint biometric lock\n- Tamper-proof design\n- Internal LED lighting\n- Mobile app for access logs\n- Emergency override key\n- Fire-resistant material\n\nThis safe ensures the security of your most valuable items.",
    features: [
      "Fingerprint lock",
      "Tamper-proof",
      "Internal lighting",
      "Access log via app",
      "Emergency key",
      "Fire-resistant"
    ],
    specifications: {
      "Model": "SSBL-200",
      "Capacity": "50L",
      "Weight": "30kg",
      "Lock Type": "Biometric",
      "Battery": "4x AA",
      "Material": "Steel",
      "Fire Rating": "30 minutes"
    }
  },
  {
    id: "28",
    name: "Explosion-Proof Security Camera",
    category: "Security",
    imageUrl: smartAlarmSecurity,
    description: "A camera designed for hazardous environments with explosion-proof housing.",
    fullDescription: "The Explosion-Proof Security Camera is built for use in hazardous environments like oil rigs, chemical plants, and mines, with a robust housing that withstands explosions and extreme conditions.\n\nThe system features:\n- Explosion-proof housing\n- 1080P resolution\n- Night vision up to 50m\n- Corrosion-resistant material\n- Remote monitoring\n- Integration with alarm systems\n\nThis camera ensures safety and security in high-risk areas.",
    features: [
      "Explosion-proof",
      "1080P resolution",
      "Night vision",
      "Corrosion-resistant",
      "Remote monitoring",
      "Alarm integration"
    ],
    specifications: {
      "Model": "EPSC-300",
      "Resolution": "1080P",
      "IR Distance": "50m",
      "Housing": "Stainless Steel",
      "Video Compression": "H.264",
      "Power": "24V DC",
      "Operating Temperature": "-40°C to 80°C"
    }
  },

  // Forensic Systems
  {
    id: "29",
    name: "Digital Evidence Management System",
    category: "Forensic Systems",
    imageUrl: forensicAndCom,
    description: "A system for securely storing and managing digital forensic evidence.",
    fullDescription: "The Digital Evidence Management System provides a secure platform for storing, organizing, and analyzing digital evidence, ensuring chain of custody for legal proceedings.\n\nThe system features:\n- Secure cloud storage\n- Chain of custody tracking\n- Metadata analysis\n- Access control with audit logs\n- Integration with forensic tools\n- User-friendly interface\n\nIdeal for law enforcement and legal teams, this system streamlines evidence management.",
    features: [
      "Secure storage",
      "Chain of custody",
      "Metadata analysis",
      "Access control",
      "Forensic tool integration",
      "User-friendly"
    ],
    specifications: {
      "Model": "DEMS-100",
      "Storage": "10TB",
      "Encryption": "AES-256",
      "Connectivity": "Ethernet",
      "User Capacity": "Unlimited",
      "Operating System": "Windows/Linux",
      "Access": "Role-based"
    }
  },
  {
    id: "30",
    name: "Portable DNA Analyzer",
    category: "Forensic Systems",
    imageUrl: biometricSecurity,
    description: "A compact device for rapid DNA analysis at crime scenes.",
    fullDescription: "The Portable DNA Analyzer allows forensic teams to perform rapid DNA analysis on-site, providing quick results for suspect identification and evidence matching.\n\nThe system features:\n- Rapid DNA profiling\n- Compact and portable design\n- High accuracy results\n- Integration with DNA databases\n- User-friendly interface\n- Battery-powered operation\n\nThis analyzer speeds up forensic investigations in the field.",
    features: [
      "Rapid DNA profiling",
      "Portable design",
      "High accuracy",
      "Database integration",
      "User-friendly",
      "Battery-powered"
    ],
    specifications: {
      "Model": "PDNA-200",
      "Analysis Time": "90 minutes",
      "Accuracy": "99.9%",
      "Battery Life": "6 hours",
      "Weight": "2kg",
      "Connectivity": "Wi-Fi",
      "Sample Capacity": "1 sample"
    }
  },
  {
    id: "31",
    name: "Forensic Video Analysis Software",
    category: "Forensic Systems",
    imageUrl: faceCamera,
    description: "Software for enhancing and analyzing video evidence.",
    fullDescription: "The Forensic Video Analysis Software provides tools to enhance, stabilize, and analyze video footage, helping investigators extract critical details from surveillance or body cam videos.\n\nThe system features:\n- Video enhancement and stabilization\n- Frame-by-frame analysis\n- Object and facial recognition\n- Timestamp verification\n- Exportable reports\n- Integration with evidence systems\n\nThis software is essential for forensic video investigations.",
    features: [
      "Video enhancement",
      "Frame-by-frame analysis",
      "Object recognition",
      "Timestamp verification",
      "Exportable reports",
      "Evidence integration"
    ],
    specifications: {
      "Model": "FVAS-300",
      "Supported Formats": "MP4, AVI, MOV",
      "Resolution Support": "Up to 4K",
      "Operating System": "Windows 10/11",
      "Processor": "Intel i7 or higher",
      "RAM": "16GB",
      "Storage": "1TB SSD"
    }
  },
  {
    id: "32",
    name: "Fingerprint Analysis System",
    category: "Forensic Systems",
    imageUrl:  biometricSecurity,
    description: "A system for capturing and analyzing fingerprints with high accuracy.",
    fullDescription: "The Fingerprint Analysis System captures high-resolution fingerprints and compares them against databases for identification, aiding in criminal investigations.\n\nThe system features:\n- High-resolution fingerprint scanning\n- Automated matching with databases\n- Latent print analysis\n- User-friendly interface\n- Secure data storage\n- Integration with forensic labs\n\nThis system is crucial for forensic identification processes.",
    features: [
      "High-resolution scanning",
      "Automated matching",
      "Latent print analysis",
      "User-friendly",
      "Secure storage",
      "Lab integration"
    ],
    specifications: {
      "Model": "FAS-400",
      "Resolution": "1000 dpi",
      "Scan Area": "2x2 inches",
      "Matching Speed": "<1s",
      "Connectivity": "USB, Ethernet",
      "Operating System": "Windows",
      "Storage": "500GB"
    }
  },
  {
    id: "33",
    name: "Forensic Audio Enhancement Tool",
    category: "Forensic Systems",
    imageUrl: forensicAndCom,
    description: "A tool for enhancing and analyzing audio evidence.",
    fullDescription: "The Forensic Audio Enhancement Tool cleans and enhances audio recordings, helping investigators identify voices, background noises, and other critical details.\n\nThe system features:\n- Noise reduction and audio enhancement\n- Voice identification\n- Frequency analysis\n- Timestamp verification\n- Exportable reports\n- Integration with evidence systems\n\nThis tool is vital for audio-based forensic investigations.",
    features: [
      "Noise reduction",
      "Voice identification",
      "Frequency analysis",
      "Timestamp verification",
      "Exportable reports",
      "Evidence integration"
    ],
    specifications: {
      "Model": "FAET-500",
      "Supported Formats": "WAV, MP3",
      "Frequency Range": "20Hz-20kHz",
      "Operating System": "Windows 10/11",
      "Processor": "Intel i5 or higher",
      "RAM": "8GB",
      "Storage": "500GB SSD"
    }
  },

  // Entry Systems
  {
    id: "34",
    name: "RFID Gate Entry System",
    category: "Entry Systems",
    imageUrl: intrusionSecurity,
    description: "An RFID-based system for secure gate entry.",
    fullDescription: "The RFID Gate Entry System allows authorized vehicles or personnel to enter through gates using RFID cards or tags, ensuring secure and efficient access control.\n\nThe system features:\n- RFID-based access\n- Fast gate operation\n- Anti-tailgating technology\n- Integration with surveillance\n- Weatherproof design\n- Remote management\n\nIdeal for residential complexes, offices, and industrial sites.",
    features: [
      "RFID access",
      "Fast operation",
      "Anti-tailgating",
      "Surveillance integration",
      "Weatherproof",
      "Remote management"
    ],
    specifications: {
      "Model": "RGES-100",
      "Reader Range": "5m",
      "Gate Speed": "2s",
      "Connectivity": "Ethernet",
      "Power Supply": "220V AC",
      "Operating Temperature": "-20°C to 60°C",
      "Material": "Steel"
    }
  },
  {
    id: "35",
    name: "Facial Recognition Turnstile",
    category: "Entry Systems",
    imageUrl: facialRecongitionSys,
    description: "A turnstile with facial recognition for secure pedestrian entry.",
    fullDescription: "The Facial Recognition Turnstile uses advanced facial recognition to grant access to authorized individuals, ideal for high-security areas like offices and stadiums.\n\nThe system features:\n- Facial recognition with 99% accuracy\n- Fast throughput\n- Anti-tailgating technology\n- Integration with access control\n- Durable design\n- User-friendly interface\n\nThis turnstile ensures secure and efficient pedestrian access.",
    features: [
      "Facial recognition",
      "Fast throughput",
      "Anti-tailgating",
      "Access control integration",
      "Durable design",
      "User-friendly"
    ],
    specifications: {
      "Model": "FRT-200",
      "Recognition Speed": "<1s",
      "Throughput": "30 persons/min",
      "Connectivity": "Ethernet",
      "Power Supply": "220V AC",
      "Operating Temperature": "0°C to 50°C",
      "Material": "Stainless Steel"
    }
  },
  {
    id: "36",
    name: "Smart Intercom Entry System",
    category: "Entry Systems",
    imageUrl: entry,
    description: "A video intercom system for secure visitor entry.",
    fullDescription: "The Smart Intercom Entry System allows residents or staff to verify and grant access to visitors via video and audio communication, enhancing security at entry points.\n\nThe system features:\n- HD video and two-way audio\n- Mobile app integration\n- Remote door unlock\n- Night vision camera\n- Weatherproof design\n- Access log tracking\n\nPerfect for apartments, offices, and gated communities.",
    features: [
      "HD video",
      "Two-way audio",
      "Mobile app integration",
      "Remote unlock",
      "Night vision",
      "Weatherproof"
    ],
    specifications: {
      "Model": "SIES-300",
      "Camera Resolution": "1080P",
      "Audio": "Two-way",
      "Connectivity": "Wi-Fi",
      "Power Supply": "12V DC",
      "Operating Temperature": "-20°C to 50°C",
      "Mounting": "Wall mount"
    }
  },
  {
    id: "37",
    name: "Keycard Entry System",
    category: "Entry Systems",
    imageUrl: keycardEntry,
    description: "A keycard-based system for secure door access.",
    fullDescription: "The Keycard Entry System uses RFID keycards to grant access to authorized personnel, providing a simple and secure solution for door entry in offices and hotels.\n\nThe system features:\n- RFID keycard access\n- Fast authentication\n- Access log tracking\n- Integration with security systems\n- Easy card management\n- Durable reader design\n\nThis system ensures secure and efficient access control.",
    features: [
      "RFID keycard access",
      "Fast authentication",
      "Access log tracking",
      "Security integration",
      "Easy management",
      "Durable design"
    ],
    specifications: {
      "Model": "KES-400",
      "Reader Range": "5cm",
      "User Capacity": "5,000",
      "Connectivity": "Ethernet",
      "Power Supply": "12V DC",
      "Operating Temperature": "0°C to 50°C",
      "Mounting": "Wall mount"
    }
  },
  {
    id: "38",
    name: "Vehicle License Plate Entry System",
    category: "Entry Systems",
    imageUrl: carParkSystem,
    description: "A system for vehicle entry using license plate recognition.",
    fullDescription: "The Vehicle License Plate Entry System uses LPR technology to automatically grant access to authorized vehicles, ideal for secure parking lots and gated communities.\n\nThe system features:\n- License plate recognition\n- Fast gate operation\n- Integration with barriers\n- Access log tracking\n- Night vision camera\n- Weatherproof design\n\nThis system ensures secure and efficient vehicle access.",
    features: [
      "License plate recognition",
      "Fast gate operation",
      "Barrier integration",
      "Access log tracking",
      "Night vision",
      "Weatherproof"
    ],
    specifications: {
      "Model": "VLPES-500",
      "Camera Resolution": "1080P",
      "Recognition Speed": "<1s",
      "Connectivity": "Ethernet",
      "Power Supply": "220V AC",
      "Operating Temperature": "-20°C to 60°C",
      "Mounting": "Pole mount"
    }
  },

  // Communication
  {
    id: "39",
    name: "Secure Radio Communication System",
    category: "Communication",
    imageUrl: forensicAndCom,
    description: "A secure radio system for encrypted communication.",
    fullDescription: "The Secure Radio Communication System provides encrypted voice communication for teams in security, law enforcement, or emergency response, ensuring privacy and reliability.\n\nThe system features:\n- AES-256 encryption\n- Long-range communication\n- Clear audio quality\n- Rugged design\n- Group and private channels\n- Battery life up to 12 hours\n\nThis system ensures secure and reliable communication in critical situations.",
    features: [
      "AES-256 encryption",
      "Long-range",
      "Clear audio",
      "Rugged design",
      "Group channels",
      "Long battery life"
    ],
    specifications: {
      "Model": "SRCS-100",
      "Range": "10km",
      "Encryption": "AES-256",
      "Battery Life": "12 hours",
      "Weight": "500g",
      "Operating Temperature": "-20°C to 60°C",
      "Channels": "16"
    }
  },
  {
    id: "40",
    name: "Video Conferencing System for Control Rooms",
    category: "Communication",
    imageUrl: comRoom,
    description: "A high-definition video conferencing system for control room communication.",
    fullDescription: "The Video Conferencing System for Control Rooms enables seamless communication between teams with high-definition video and audio, ideal for coordinating operations.\n\nThe system features:\n- 4K video resolution\n- Noise-canceling audio\n- Multi-user conferencing\n- Screen sharing\n- Secure encryption\n- Integration with control systems\n\nThis system enhances collaboration in control room environments.",
    features: [
      "4K video",
      "Noise-canceling audio",
      "Multi-user support",
      "Screen sharing",
      "Secure encryption",
      "Control system integration"
    ],
    specifications: {
      "Model": "VCS-200",
      "Video Resolution": "4K",
      "Audio": "Noise-canceling",
      "Connectivity": "Ethernet, Wi-Fi",
      "Power Supply": "220V AC",
      "Operating System": "Windows/Linux",
      "User Capacity": "50"
    }
  },
  {
    id: "41",
    name: "Emergency Communication Beacon",
    category: "Communication",
    imageUrl: forensicAndCom,
    description: "A portable beacon for emergency communication in remote areas.",
    fullDescription: "The Emergency Communication Beacon allows users to send distress signals and communicate in remote areas with no cellular coverage, ideal for search and rescue operations.\n\nThe system features:\n- Satellite-based communication\n- SOS distress signal\n- Two-way messaging\n- GPS location tracking\n- Rugged and waterproof design\n- Long battery life\n\nThis beacon ensures safety in remote environments.",
    features: [
      "Satellite communication",
      "SOS signal",
      "Two-way messaging",
      "GPS tracking",
      "Rugged design",
      "Long battery life"
    ],
    specifications: {
      "Model": "ECB-300",
      "Range": "Global",
      "Battery Life": "24 hours",
      "Weight": "200g",
      "Connectivity": "Satellite",
      "Operating Temperature": "-30°C to 70°C",
      "Waterproof Rating": "IP67"
    }
  },

  // Command Centres / Control Rooms
  {
    id: "42",
    name: "Integrated Control Room Management System",
    category: "Command Centres / Control Rooms",
    imageUrl: internet,
    description: "A comprehensive system for managing control room operations.",
    fullDescription: "The Integrated Control Room Management System centralizes monitoring and control of surveillance, communication, and security systems, providing a unified interface for operators.\n\nThe system features:\n- Centralized monitoring dashboard\n- Real-time video feeds\n- Incident management tools\n- Integration with surveillance and security\n- Customizable operator interface\n- Secure data encryption\n\nIdeal for command centers in law enforcement, traffic management, or critical infrastructure.",
    features: [
      "Centralized dashboard",
      "Real-time video",
      "Incident management",
      "System integration",
      "Customizable interface",
      "Secure encryption"
    ],
    specifications: {
      "Model": "ICRMS-100",
      "Display Support": "Up to 8 monitors",
      "Processor": "Intel Xeon",
      "Storage": "2TB SSD",
      "Connectivity": "Ethernet, 5G",
      "Operating System": "Windows/Linux",
      "Encryption": "AES-256"
    }
  }
]
