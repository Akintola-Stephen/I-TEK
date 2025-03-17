import { useEffect } from "react";
import { Shield, Target, Code, Users, Clock, Globe } from "lucide-react";
import Layout from "../components/Layout";
import { SectionHeader } from "../components/ui/section-header";
import { motion } from 'framer-motion';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | I-TEK";
  }, []);

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-itek-600" />,
      title: "Security Excellence",
      description:
        "We prioritize creating security solutions that are robust, reliable, and impenetrable.",
    },
    {
      icon: <Target className="h-8 w-8 text-itek-600" />,
      title: "Precision",
      description:
        "Our systems are designed with meticulous attention to detail and accuracy in data processing.",
    },
    {
      icon: <Code className="h-8 w-8 text-itek-600" />,
      title: "Innovation",
      description:
        "We constantly push the boundaries of technology to create cutting-edge solutions.",
    },
    {
      icon: <Users className="h-8 w-8 text-itek-600" />,
      title: "Client Partnership",
      description:
        "We work collaboratively with clients to understand their unique needs and challenges.",
    },
    {
      icon: <Clock className="h-8 w-8 text-itek-600" />,
      title: "Reliability",
      description:
        "Our systems are built to operate consistently and efficiently in critical situations.",
    },
    {
      icon: <Globe className="h-8 w-8 text-itek-600" />,
      title: "Global Reach",
      description:
        "We provide intelligence solutions for organizations across the globe.",
    },
  ];

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
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: i * 0.1,
      },
    }),
  };

  const imageVariants = {
    hidden: {
      scale: 0.95,
      opacity: 0,
      y: 20,
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000&h=1200')",
          }}
        />
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.div
          className="hero-bg-pattern"
          initial={{ opacity: 0, backgroundPosition: "0% 0%" }}
          animate={{
            opacity: 0.1,
            backgroundPosition: "100% 100%",
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        <div className="hero-content">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 0.2,
            }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              About I-TEK
            </motion.h1>
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A complete hardware and software company that specializes in
              providing top-notch applications and state-of-the-art surveillance
              devices.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
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
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  I-TEK is a complete hardware and software company that
                  specialised in providing top notch application and state of
                  art surveillance devices that enhances how security agencies
                  gather and process information to achieve enviable
                  intelligence expertise across the globe.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our aims and pledges to our reputable client are deeply rooted
                  in how our devices are designed with operational ease to
                  ensure that it covers, prevents and act as a deterrent to
                  would be offenders.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  I-TEK expert develops robust bespoke applications as requested
                  by our clients based on their business case requirements, also
                  I-TEK have various off the shelf application that can be
                  tailored to meet client's needs.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000&h=1200"
                  alt="I-TEK Mission"
                  className="w-full h-auto"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-itek-700/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-20 md:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="order-2 lg:order-1"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000&h=1200"
                    alt="I-TEK Vision"
                    className="w-full h-auto"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-itek-700/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
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
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <div className="space-y-4 text-lg">
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    We provides digitisation solutions that transforms manual
                    process into a unique system that satisfy our clients' needs
                    by working corroboratively with the stakeholders.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Whatever your needs I-TEK solutions will bring your dreams
                    to reality. Our team of experts works diligently to
                    understand the unique challenges faced by each client and
                    develop tailored solutions that address their specific
                    requirements.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    With a focus on innovation and excellence, we continuously
                    improve our technologies to stay ahead of emerging threats
                    and provide our clients with the most advanced security
                    solutions available.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide our work and relationships with clients"
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                }}
              >
                <motion.div
                  className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border h-full"
                  whileHover={{
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="rounded-full w-16 h-16 flex items-center justify-center bg-itek-50 mb-4"
                    whileHover={{
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5, repeat: 0 },
                    }}
                  >
                    {value.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {value.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
