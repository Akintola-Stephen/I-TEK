import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Layout from "../components/Layout";
import { products } from "../data/products";
import { motion } from "framer-motion";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    if (!product) {
      navigate("/products", { replace: true });
      return;
    }

    document.title = `${product.name} | I-TEK`;

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [product, navigate]);

  if (!product) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: i * 0.05,
      },
    }),
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.1,
          }}
        >
          <Link
            to="/products"
            className="inline-flex items-center text-sm text-itek-600 hover:text-itek-700 transition-colors"
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
            </motion.span>
            Back to Products
          </Link>
        </motion.div>

        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 15,
              delay: 0.2,
            }}
          >
            <motion.div
              className="rounded-xl overflow-hidden shadow-xl"
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
            >
              {product.imageUrl.includes(".mp4") ? (
                <video
                  src={product.imageUrl}
                  autoPlay
                  muted
                  className="w-full h-auto object-cover"
                />
              ) : (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              )}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-itek-700/10 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.div variants={itemVariants} custom={0}>
                <motion.span
                  className="inline-block py-1 px-3 text-sm font-medium bg-itek-100 text-itek-700 rounded-md mb-3"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#d4e5f9",
                  }}
                >
                  {product.category}
                </motion.span>
                <motion.h1
                  className="text-3xl md:text-4xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {product.name}
                </motion.h1>
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground"
                variants={itemVariants}
                custom={1}
              >
                {product.description}
              </motion.p>

              <motion.div className="pt-4" variants={itemVariants} custom={2}>
                <motion.h3
                  className="text-xl font-semibold mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  Key Features
                </motion.h3>
                <motion.ul
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {product.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      variants={itemVariants}
                      custom={index}
                      whileHover={{
                        x: 5,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 10,
                        },
                      }}
                    >
                      <motion.span
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.6, ease: "easeInOut" },
                        }}
                      >
                        <CheckCircle className="h-5 w-5 text-itek-600 shrink-0 mt-0.5" />
                      </motion.span>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div className="pt-6" variants={itemVariants} custom={3}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-itek-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-itek-700 focus:outline-none focus:ring-2 focus:ring-itek-400 focus:ring-offset-2"
                  >
                    Request Information
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Description */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.4,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Product Details
          </motion.h2>
          <motion.div
            className="prose prose-lg max-w-none dark:prose-invert"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {product.fullDescription.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                custom={index}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            delay: 0.6,
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Specifications
          </motion.h2>
          <motion.div
            className="overflow-hidden rounded-xl border shadow-sm"
            whileHover={{
              boxShadow:
                "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.table className="w-full text-sm">
              <motion.tbody
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {Object.entries(product.specifications).map(
                  ([key, value], index) => (
                    <motion.tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-slate-50 dark:bg-slate-800/50"
                          : ""
                      }
                      variants={itemVariants}
                      custom={index}
                      whileHover={{
                        backgroundColor:
                          index % 2 === 0 ? "#E5DEFF" : "#F3F0FF",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.th className="px-6 py-4 text-left font-medium">
                        {key}
                      </motion.th>
                      <motion.td className="px-6 py-4 text-muted-foreground">
                        {value as string}
                      </motion.td>
                    </motion.tr>
                  )
                )}
              </motion.tbody>
            </motion.table>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
