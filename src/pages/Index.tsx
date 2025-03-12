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
          <div className="video-overlay"></div>
        </div>
        <div className="hero-content flex flex-col items-center justify-center min-h-[70vh]">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-4 py-1.5 bg-itek-100 text-itek-700 rounded-full text-sm font-semibold mb-2">
              Innovation in Technology
            </div>
            <h1 className="hero-title text-center">
              I-TEK Information Solutions Ltd
            </h1>
            <p className="hero-description text-center mx-auto">
              Specialized in providing top-notch application and
              state-of-the-art surveillance devices that enhance intelligence
              expertise across the globe.
            </p>
            <div className="flex flex-wrap gap-4 pt-6 justify-center">
              <Link
                to="/products"
                className="inline-flex h-11 items-center justify-center rounded-md bg-itek-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-itek-700 focus:outline-none focus:ring-2 focus:ring-itek-400 focus:ring-offset-2"
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Solutions"
            subtitle="I-TEK provides comprehensive security and intelligence solutions designed with operational excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                className="animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section Preview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
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
                <div className="pt-6">
                  <Link
                    to="/about"
                    className="inline-flex items-center text-itek-600 font-medium hover:text-itek-700 transition-colors"
                  >
                    Learn more about us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl animate-fade-up animate-delay-300">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000&h=1200"
                  alt="Advanced Technology"
                  className="w-full h-auto"
                />
              </div>
            </div>
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
        <div className="hero-overlay" />
        <div className="hero-bg-pattern" />
        <div className="hero-content">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Transform Your Security Infrastructure?
            </h2>
            <p className="text-xl text-itek-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discover how our solutions can enhance your
              intelligence and security operations.
            </p>
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-itek-700 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-itek-200 focus:ring-offset-2"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
