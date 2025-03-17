import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Cpu,
  Server,
  Zap,
  Database,
  Lock,
} from "lucide-react";
import Layout from "../components/Layout";
import { FeatureCard } from "../components/ui/feature-card";
import { SectionHeader } from "../components/ui/section-header";
("lucide-react");
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "State-of-the-art security solutions for intelligence and surveillance operations.",
  },
  {
    icon: Server,
    title: "Hardware Solutions",
    description:
      "Cutting-edge hardware designed for optimal performance in critical environments.",
  },
  {
    icon: Database,
    title: "Data Processing",
    description:
      "Sophisticated data processing systems that transform raw data into actionable intelligence.",
  },
  {
    icon: Cpu,
    title: "Custom Applications",
    description:
      "Bespoke software applications tailored to meet specific operational requirements.",
  },
  {
    icon: Lock,
    title: "Digital Security",
    description:
      "Comprehensive digital security measures to protect sensitive information.",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    description:
      "Solutions designed to streamline operations and enhance productivity.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const heroItemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const scaleVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

const HomePage = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.title = "I-TEK | Information Solutions";

    // Ensure video plays correctly
    const videoElement = videoRef.current;
    if (videoElement) {
      // Try playing immediately on mount
      const playPromise = videoElement.play();

      // Handle play promise properly to avoid AbortError
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Initial video playback failed:", error);

          // Try again after a short delay
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current
                .play()
                .catch((e) => console.error("Retry video playback failed:", e));
            }
          }, 1000);
        });
      }
    }
  }, []);

  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="video-hero-section">
        <div className="video-container">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000&h=1200"
          >
            <source
              src="https://static.nike.com/a/videos/q_90/61c452cc-a0e9-4a42-b67e-83ed3624ea6c/video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <motion.div
            className="video-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          />
        </div>
        <motion.div
          className="hero-content flex flex-col items-center justify-center min-h-[70vh]"
          variants={heroVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="inline-block px-4 py-1.5 bg-itek-100 text-itek-700 rounded-full text-sm font-semibold mb-2"
              variants={heroItemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "#d4e5f9" }}
              whileTap={{ scale: 0.98 }}
            >
              Innovation in Technology
            </motion.div>
            <motion.h1
              className="hero-title text-center"
              variants={heroItemVariants}
            >
              I-TEK Information Solutions Ltd
            </motion.h1>
            <motion.p
              className="hero-description text-center mx-auto"
              variants={heroItemVariants}
            >
              Specialized in providing top-notch application and
              state-of-the-art surveillance devices that enhance intelligence
              expertise across the globe.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 pt-6 justify-center"
              variants={heroItemVariants}
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={scaleVariants}
              >
                <Link
                  to="/products"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-itek-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-itek-700 focus:outline-none focus:ring-2 focus:ring-itek-400 focus:ring-offset-2"
                >
                  Explore Products
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      repeatDelay: 2,
                      duration: 1,
                    }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={scaleVariants}
              >
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Solutions"
            subtitle="I-TEK provides comprehensive security and intelligence solutions designed with operational excellence."
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                viewport={{ once: true }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Why Choose I-TEK?
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  I-TEK is a complete hardware and software company that
                  specializes in providing top-notch applications and
                  state-of-the-art surveillance devices.
                </p>
                <p>
                  Our aims and pledges to our reputable clients are deeply
                  rooted in how our devices are designed with operational ease
                  to ensure comprehensive security coverage.
                </p>
                <motion.div
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      to="/about"
                      className="inline-flex items-center text-itek-600 font-medium hover:text-itek-700 transition-colors"
                    >
                      Learn more about us
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          repeat: Infinity,
                          repeatDelay: 2,
                          duration: 1,
                        }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 0.4,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="relative rounded-xl overflow-hidden shadow-xl"
                whileHover={{
                  scale: 1.03,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000&h=1200"
                  alt="Advanced Technology"
                  className="w-full h-auto"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-itek-700/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-section">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000&h=1200')",
          }}
        />
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <motion.div
          className="hero-bg-pattern"
          initial={{ opacity: 0, backgroundPosition: "0% 0%" }}
          whileInView={{
            opacity: 0.1,
            backgroundPosition: "100% 100%",
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          viewport={{ once: true }}
        />
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            variants={itemVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white"
              variants={itemVariants}
              whileInView={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 4px 10px rgba(0,0,0,0.3)",
                ],
                transition: { duration: 1, ease: "easeInOut" },
              }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Security Infrastructure?
            </motion.h2>
            <motion.p
              className="text-xl text-itek-100 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Contact us today to discover how our solutions can enhance your
              intelligence and security operations.
            </motion.p>
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              custom={5}
            >
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-itek-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-itek-200 focus:ring-offset-2"
              >
                Get in Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 2, duration: 1 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default HomePage;
