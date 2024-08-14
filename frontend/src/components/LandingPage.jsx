import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUp,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react"
import { Navigate } from "react-router-dom"
export default function Auth() {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <SignedIn>
        <Navigate to="/dashboard" />
      </SignedIn>

      <SignedOut>
        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
          <div className="text-2xl font-bold text-indigo-600">
            Expense Tracker
          </div>
          <nav className="space-x-6">
            <a href="#features" className="hover:text-indigo-600">
              Features
            </a>
            <a href="#testimonials" className="hover:text-indigo-600">
              Feedback
            </a>
            <a href="#pricing" className="hover:text-indigo-600">
              Pricing
            </a>
            {/* <a href="#about" className="hover:text-indigo-600">
            About Us
          </a> */}
            <SignInButton
              mode="modal"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-500 transition duration-300"
            />
            <SignUpButton
              mode="modal"
              className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-500 transition duration-300"
            />
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center py-24">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Master Your Finances with Ease
          </h1>
          <p className="text-lg md:text-xl mb-10">
            Your journey to financial freedom starts here. Track, manage, and
            plan your finances effortlessly.
          </p>
          <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Start Now
          </button>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Powerful Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="feature-card p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Real-Time Expense Tracking
                </h3>
                <p>
                  Monitor your spending as it happens with instant updates and
                  clear insights.
                </p>
              </div>
              <div className="feature-card p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Income Management
                </h3>
                <p>Keep tabs on all your income sources in one place.</p>
              </div>
              <div className="feature-card p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Intuitive Budgeting Tools
                </h3>
                <p>
                  Set budgets, track progress, and get notified when you’re
                  close to your limit.
                </p>
              </div>
              <div className="feature-card p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-indigo-600 mb-4">
                  <svg
                    className="w-12 h-12 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Personalized Insights
                </h3>
                <p>
                  Receive tailored financial advice based on your spending
                  habits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="testimonial p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="mb-4">
                  "This app has completely transformed how I manage my finances.
                  It’s intuitive and user-friendly!"
                </p>
                <span className="text-gray-600">- Alex J.</span>
              </div>
              <div className="testimonial p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="mb-4">
                  "The budgeting tools are fantastic. I’ve saved so much money
                  since using this app!"
                </p>
                <span className="text-gray-600">- Maria R.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Choose Your Plan</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="pricing-plan p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4">Free Plan</h3>
                <p>Access essential features for tracking your finances.</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center justify-center text-sm">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                      ✔
                    </span>{" "}
                    Real-Time Tracking
                  </li>
                  <li className="flex items-center justify-center text-sm">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                      ✔
                    </span>{" "}
                    Budgeting Tools
                  </li>
                </ul>
              </div>
              <div className="pricing-plan p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
                <p>Unlock advanced features for power users.</p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center justify-center text-sm">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                      ✔
                    </span>{" "}
                    Personalized Insights
                  </li>
                  <li className="flex items-center justify-center text-sm">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                      ✔
                    </span>{" "}
                    Income Management
                  </li>
                  <li className="flex items-center justify-center text-sm">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                      ✔
                    </span>{" "}
                    Advanced Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer py-10 bg-gray-800 text-white">
          <div className="container mx-auto text-center space-y-6">
            <div className="footer-links space-x-6">
              <a href="#privacy" className="hover:text-indigo-400">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-indigo-400">
                Terms of Service
              </a>
              <a href="#contact" className="hover:text-indigo-400">
                Contact Us
              </a>
            </div>
            <div className="footer-social space-x-4">
              <a href="#facebook" className="hover:text-indigo-400">
                Facebook
              </a>
              <a href="#twitter" className="hover:text-indigo-400">
                Twitter
              </a>
              <a href="#linkedin" className="hover:text-indigo-400">
                LinkedIn
              </a>
            </div>
            <p className="text-sm">
              &copy; 2024 YourCompany. All rights reserved.
            </p>
          </div>
        </footer>
      </SignedOut>
    </div>
  )
}
