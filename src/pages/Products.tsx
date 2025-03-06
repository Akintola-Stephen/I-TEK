import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { SectionHeader } from "../components/ui/section-header";
import { products } from "../data/products";
import { ProductCard } from "../components/ui/product-card";


const ProductsPage = () => {
  useEffect(() => {
    document.title = "Products | I-TEK";
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore our range of innovative security and intelligence
              solutions designed to meet the most demanding requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Security & Intelligence Solutions"
            subtitle="Discover our comprehensive range of hardware and software solutions tailored for intelligence and security operations."
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-up [animation-delay:400ms]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-itek-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                category={product.category}
                className="animate-fade-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-16 md:py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold mb-6">Custom Solutions</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Beyond our standard product offerings, I-TEK specializes in
                  developing bespoke solutions tailored to the specific
                  requirements of our clients.
                </p>
                <p>
                  Our team of expert engineers and developers can create custom
                  applications and hardware configurations that address unique
                  challenges and operational needs.
                </p>
                <p>
                  From specialized surveillance systems to custom data analytics
                  platforms, we work closely with clients to understand their
                  requirements and deliver solutions that exceed expectations.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-up [animation-delay:300ms]">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2000&h=1200"
                  alt="Custom Solutions"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsPage;
