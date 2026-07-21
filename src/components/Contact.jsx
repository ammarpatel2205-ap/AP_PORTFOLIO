import React from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-700">
            <span className="text-teal-600">Let’s </span>
            Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Open to internships, freelance projects, and full-time
            opportunities.
          </p>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm shadow-slate-200/70 sm:p-10">
          <div className="text-center">
            <p className="text-base text-slate-600">
              Feel free to reach out through any platform below.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <a
              href="mailto:ammarpatel2206@gmail.com"
              className="flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-slate-50 px-6 py-4 text-slate-900 transition duration-300 hover:bg-white"
            >
              <FiMail className="h-5 w-5" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ammar-patel-22952332b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-slate-50 px-6 py-4 text-slate-900 transition duration-300 hover:bg-white"
            >
              <FiLinkedin className="h-5 w-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ammarpatel2205-ap/"
              className="flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-slate-50 px-6 py-4 text-slate-900 transition duration-300 hover:bg-white"
            >
              <FiGithub className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
