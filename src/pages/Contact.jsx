import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import PageHero from "../components/about/PageHero";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    lines: [
      "78, Railway Lines, Near St. Joseph High School Main Gate,",
      "Solapur, Maharashtra, India 413001",
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["info@faopsperinatal.org"],
    href: "mailto:info@faopsperinatal.org",
  },
  {
    icon: Phone,
    label: "Phone",
    lines: ["(+91) 98220 96280"],
    href: "tel:+919822096280",
  },
  {
    icon: Clock,
    label: "Response Time",
    lines: ["We usually reply within 24 hours"],
  },
];

const socialLinks = [
  { icon: FaFacebookF, link: "https://www.facebook.com/faopsperinatal", label: "Facebook" },
  { icon: FaXTwitter, link: "https://twitter.com/faopsperinatal", label: "X" },
  { icon: FaInstagram, link: "https://www.instagram.com/faopsperinatal", label: "Instagram" },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/faopsperinatal?_l=en_US",
    label: "LinkedIn",
  },
  { icon: FaYoutube, link: "https://www.youtube.com/@faopsperinatal", label: "YouTube" },
];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* No backend is wired yet -- this only confirms locally. */
    setIsSubmitted(true);
    setForm(emptyForm);

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const inputClass =
    "w-full h-14 rounded-xl border border-slate-300 px-4 outline-none transition focus:border-[#344474] focus:ring-2 focus:ring-[#344474]/20";

  return (
    <>
      <PageHero
        title="Contact Us"
        breadcrumb="Home"
        currentPage="Contact Us"
      />

      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-white">

        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="uppercase tracking-[4px] text-[#344474] font-semibold text-sm">
              Get In Touch
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#344474] mt-3">
              We'd Love To Hear From You
            </h2>

            <div className="w-24 h-1 bg-[#F7DB07] rounded-full mx-auto my-6" />

            <p className="text-slate-600 max-w-2xl mx-auto leading-8">
              Questions about membership, congresses or collaboration in
              perinatal medicine? Send us a message and the FAOPS secretariat
              will get back to you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* ================= CONTACT INFO ================= */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 space-y-6"
            >

              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8">

                <h3 className="text-xl font-bold text-[#344474]">
                  Contact Information
                </h3>

                <div className="mt-7 space-y-6">

                  {contactDetails.map(({ icon: Icon, label, lines, href }) => (

                    <div key={label} className="flex items-start gap-4">

                      <div className="w-11 h-11 rounded-xl bg-[#344474] flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-[#F7DB07]" />
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
                          {label}
                        </p>

                        {href ? (
                          <a
                            href={href}
                            className="block text-slate-700 mt-1 leading-7 hover:text-[#344474] font-medium"
                          >
                            {lines[0]}
                          </a>
                        ) : (
                          lines.map((line) => (
                            <p key={line} className="text-slate-600 mt-1 leading-7">
                              {line}
                            </p>
                          ))
                        )}
                      </div>

                    </div>

                  ))}

                </div>

                {/* Socials */}

                <div className="mt-8 pt-6 border-t border-slate-200">

                  <p className="text-xs uppercase tracking-wide text-slate-400 font-semibold">
                    Follow FAOPS
                  </p>

                  <div className="flex items-center gap-3 mt-4">

                    {socialLinks.map(({ icon: Icon, link, label }) => (
                      <a
                        key={label}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 text-[#344474] flex items-center justify-center transition-all hover:bg-[#344474] hover:text-white"
                      >
                        <Icon size={15} />
                      </a>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

            {/* ================= FORM ================= */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >

              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 md:p-10 h-full">

                {isSubmitted ? (

                  <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center">

                    <div className="w-16 h-16 rounded-full bg-[#344474]/10 flex items-center justify-center">
                      <CheckCircle2 size={32} className="text-[#344474]" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#344474] mt-6">
                      Message Sent
                    </h3>

                    <p className="text-slate-600 mt-3">
                      Thank you for reaching out. We will get back to you shortly.
                    </p>

                  </div>

                ) : (

                  <>
                    <h3 className="text-xl font-bold text-[#344474]">
                      Send Us A Message
                    </h3>

                    <form onSubmit={handleSubmit} className="mt-7 space-y-6">

                      <div className="grid md:grid-cols-2 gap-6">

                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-slate-700 mb-2"
                          >
                            Full Name
                          </label>

                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-slate-700 mb-2"
                          >
                            Email Address
                          </label>

                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>

                      </div>

                      <div className="grid md:grid-cols-2 gap-6">

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-semibold text-slate-700 mb-2"
                          >
                            Phone{" "}
                            <span className="text-slate-400 font-normal">
                              (optional)
                            </span>
                          </label>

                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-semibold text-slate-700 mb-2"
                          >
                            Subject
                          </label>

                          <input
                            id="subject"
                            name="subject"
                            type="text"
                            required
                            value={form.subject}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>

                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-slate-700 mb-2"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          value={form.message}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-slate-300 p-4 outline-none resize-none transition focus:border-[#344474] focus:ring-2 focus:ring-[#344474]/20"
                        />
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-3 bg-[#344474] hover:bg-[#22345f] text-white px-8 py-4 rounded-full font-semibold transition-all"
                      >
                        Send Message
                        <Send size={18} />
                      </button>

                    </form>
                  </>

                )}

              </div>

            </motion.div>

          </div>

          {/* ================= MAP ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden"
          >

            <div className="p-7 border-b border-slate-200">

              <h3 className="text-xl font-bold text-[#344474]">
                Our Location
              </h3>

              <p className="text-slate-500 text-sm mt-1">
                FAOPS Office, Solapur, Maharashtra
              </p>

            </div>

            <iframe
              title="FAOPS office location"
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d48066.457405320114!2d75.82938707649154!3d17.698786580715623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d17.730471299999998!2d75.8417746!4m5!1s0x3bc5da7c3fffffff%3A0x33971f1d700cf68b!2sSt.%20Joseph%20High%20School%20and%20Jr.%20College%2C%20Railway%20Lines%20Rd%2C%20Railway%20lines%2C%20Sidheshwar%20Peth%2C%20Solapur%2C%20Maharashtra%20413001!3m2!1d17.6673149!2d75.8988158!5e0!3m2!1sen!2sin!4v1783023886848!5m2!1sen!2sin"
              className="w-full h-[420px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </motion.div>

        </div>

      </section>
    </>
  );
}
