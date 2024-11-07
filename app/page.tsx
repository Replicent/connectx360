import type { Metadata } from "next";
import Button from "@/components/atoms/Button";

export const metadata: Metadata = {
  title: "ConnectX360",
  description:
    "ConnectX360 is a platform for connecting people with similar interests.",
};

export default function LandingPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-indigo-600">ConnectX360</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-600">
              <li>
                <a href="#features" className="hover:text-indigo-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Boost Your Business with Email-based Service Proposals
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          ConnectX360 helps you deliver impactful, tailored proposals via email
          to reach more clients and grow faster.
        </p>
        <Button
          href="/sign-in"
          className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 max-w-sm"
        >
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Features
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Personalized Proposals
              </h4>
              <p className="text-gray-600">
                Create custom, client-focused proposals to ensure your services
                stand out.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Automated Follow-Ups
              </h4>
              <p className="text-gray-600">
                Automate follow-up emails to ensure that no opportunity goes
                unanswered.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h4 className="text-xl font-semibold text-indigo-600 mb-2">
                Analytics Dashboard
              </h4>
              <p className="text-gray-600">
                Track email engagement and proposal performance to optimize your
                approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Our Services
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            From proposal creation to advanced tracking, we provide the tools
            and support you need to grow your business.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700">
            Learn More
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">
            Get In Touch
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            Want to see how ConnectX360 can help your business grow?
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more!
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ConnectX360. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
