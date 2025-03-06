import { useEffect } from "react";
import { Shield, Target, Code, Users, Clock, Globe } from "lucide-react";
import Layout from "../components/Layout";
import { SectionHeader } from "../components/ui/section-header";

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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About I-TEK</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              A complete hardware and software company that specializes in
              providing top-notch applications and state-of-the-art surveillance
              devices.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <div className="space-y-4 text-lg">
                <p>
                  I-TEK is a complete hardware and software company that
                  specialised in providing top notch application and state of
                  art surveillance devices that enhances how security agencies
                  gather and process information to achieve enviable
                  intelligence expertise across the globe.
                </p>
                <p>
                  Our aims and pledges to our reputable client are deeply rooted
                  in how our devices are designed with operational ease to
                  ensure that it covers, prevents and act as a deterrent to
                  would be offenders.
                </p>
                <p>
                  I-TEK expert develops robust bespoke applications as requested
                  by our clients based on their business case requirements, also
                  I-TEK have various off the shelf application that can be
                  tailored to meet client's needs.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-up [animation-delay:300ms]">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000&h=1200"
                  alt="I-TEK Mission"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 md:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative animate-fade-up [animation-delay:300ms]">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2000&h=1200"
                    alt="I-TEK Vision"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-fade-up">
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    We provides digitisation solutions that transforms manual
                    process into a unique system that satisfy our clients' needs
                    by working corroboratively with the stakeholders.
                  </p>
                  <p>
                    Whatever your needs I-TEK solutions will bring your dreams
                    to reality. Our team of experts works diligently to
                    understand the unique challenges faced by each client and
                    develop tailored solutions that address their specific
                    requirements.
                  </p>
                  <p>
                    With a focus on innovation and excellence, we continuously
                    improve our technologies to stay ahead of emerging threats
                    and provide our clients with the most advanced security
                    solutions available.
                  </p>
                </div>
              </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="rounded-full w-16 h-16 flex items-center justify-center bg-itek-50 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
