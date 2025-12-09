import React from "react";

// Data structure for the footer links and main sections
const footerData = [
  {
    title: "Company",
    links: ["About Us", "Investors", "Careers", "Blogs and news"],
  },
  {
    title: "Buyers",
    links: ["Find store", "Registration", "Partnerships", "Gift vouchers"],
  },
  {
    title: "Help",
    links: ["Contact us", "Live chat", "Refund", "Track order"],
  },
  {
    title: "Service",
    links: ["Trade Resources", "Logistics service", "Refund", "Safe purchase"],
  },
  {
    title: "Language",
    links: ["Español", "Português", "Deutsch", "日本語"],
  },
];

// URLs for the social media icons (Replace with actual links)
const socialLinks = [
  { icon: "fa-facebook-f", color: "text-blue-600" },
  { icon: "fa-youtube", color: "text-red-600" },
  { icon: "fa-linkedin-in", color: "text-blue-700" },
  { icon: "fa-telegram-plane", color: "text-blue-400" },
];

const Footer01 = () => {
  // Common link styles for hover effect and text appearance
  const linkClass =
    "text-gray-600 hover:text-blue-500 transition-colors duration-200";

  return (
    <footer className="bg-blue-100 dark:bg-muted/40 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Link Columns */}
        <div className="flex flex-wrap justify-between gap-y-8 pb-8">
          {footerData.map((section, index) => (
            <div key={index} className="w-1/2 sm:w-1/5 min-w-[120px]">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className={linkClass}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Horizontal Divider Line */}
        <hr className="my-8 border-gray-300" />

        {/* Middle Section: App Downloads and Social Media */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-6">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            {/* Download App Store Button (Styling placeholder for image) */}
            <a
              href="#"
              className="w-32 h-10 bg-black rounded-lg flex items-center justify-center p-1"
            >
              <span className="text-white font-semibold text-xs">
                Download on the
              </span>
              <span className="text-white font-bold text-lg ml-1">
                App Store
              </span>
              {/*  - Consider replacing with actual SVG/Image */}
            </a>
            {/* Download Google Play Button (Styling placeholder for image) */}
            <a
              href="#"
              className="w-32 h-10 bg-black rounded-lg flex items-center justify-center p-1"
            >
              <span className="text-white font-semibold text-xs">
                GET IT ON
              </span>
              <span className="text-white font-bold text-lg ml-1">
                Google Play
              </span>
              {/*  - Consider replacing with actual SVG/Image */}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Follow us</span>
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow-sm hover:shadow-lg transition-shadow duration-300`}
                >
                  {/* Using Font Awesome icons. You'll need to link the library in your index.html */}
                  <i className={`fab ${social.icon} ${social.color}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <hr className="my-8 border-gray-300" />

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-sm text-gray-500">
          <p>Copyright © 1995-2025 Company Inc. All Rights Reserved</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className={linkClass}>
              Terms of service
            </a>
            <span className="text-gray-400">·</span>
            <a href="#" className={linkClass}>
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer01;
