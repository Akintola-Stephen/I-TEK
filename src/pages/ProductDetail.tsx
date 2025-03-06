import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Layout from "../components/Layout";
import { products } from "../data/products";

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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Breadcrumb */}
        <div className="mb-8 animate-fade-up">
          <Link
            to="/products"
            className="inline-flex items-center text-sm text-itek-600 hover:text-itek-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>

        {/* Product Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Product Image */}
          <div className="animate-fade-up">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <div className="space-y-6">
              <div>
                <span className="inline-block py-1 px-3 text-sm font-medium bg-itek-100 text-itek-700 rounded-md mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold">
                  {product.name}
                </h1>
              </div>

              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-itek-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-itek-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-itek-700 focus:outline-none focus:ring-2 focus:ring-itek-400 focus:ring-offset-2"
                >
                  Request Information
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mb-16 animate-fade-up [animation-delay:400ms]">
          <h2 className="text-2xl font-bold mb-6">Product Details</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {product.fullDescription.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="animate-fade-up [animation-delay:600ms]">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="overflow-hidden rounded-xl border shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {Object.entries(product.specifications).map(
                  ([key, value], index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-slate-50 dark:bg-slate-800/50"
                          : ""
                      }
                    >
                      <th className="px-6 py-4 text-left font-medium">{key}</th>
                      <td className="px-6 py-4 text-muted-foreground">
                        {value as string}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;
