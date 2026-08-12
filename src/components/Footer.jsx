// // import { Link } from 'react-router-dom';
// // import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

// // export default function Footer() {
// //   return (
// //     <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

// // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10">
// //           {/* 🔥 BRAND (FIXED) */}
// //           <div className="space-y-6">
// //             <Link to="/" className="flex items-center gap-3">

// //               {/* Logo */}
// //               <div className="bg-white p-1.5 rounded-lg flex items-center justify-center">
// //                 <img
// //                   src="https://res.cloudinary.com/dgcyqntse/image/upload/v1773725210/1000572077-removebg-preview_o0stug.png"
// //                   alt="Q9 Hospital Logo"
// //                   className="w-10 h-10 object-contain"
// //                 />
// //               </div>

// //               {/* Text */}
// //               <div className="leading-tight">
// //                 <h2 className="text-lg font-bold text-white tracking-wide">
// //                   FAOPS
// //                 </h2>
// //                 <p className="text-sm text-blue-500 font-medium">
// //                   Federation of Asia and Oceania Perinatal Societies
// //                 </p>
// //               </div>

// //             </Link>
// //              <h3 className="text-white font-semibold text-lg mb-4">
// //     Our Visitors
// //   </h3>

// //   <div className="flex gap-2 mb-3">

// //     {["0", "0", "2", "6", "1", "9"].map((num, index) => (
// //       <div
// //         key={index}
// //         className="w-9 h-9 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center shadow-md"
// //       >
// //         {num}
// //       </div>
// //     ))}

// //   </div>

// //   <p className="text-sm text-slate-400">
// //     Users Today :
// //     <span className="text-white font-semibold ml-2">
// //       4
// //     </span>
// //   </p>

// //             {/* <p className="text-slate-400 leading-relaxed text-sm">
// //               Providing world-class healthcare services with a patient-first approach.
// //               Our mission is to improve lives through advanced medical technology and compassionate care.
// //             </p> */}

// //             {/* Social Icons */}
           
// //           </div>

// //           {/* Quick Links */}
// //           <div >
// //             <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
// //             <ul className="space-y-4">
// //                             <li><Link to="/about" className="hover:text-blue-400 transition">Home</Link></li>

// //               <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
// //               <li><Link to="/doctors" className="hover:text-blue-400 transition">Events</Link></li>
// //               <li><Link to="/departments" className="hover:text-blue-400 transition">Contact Us</Link></li>
// //                 </ul>
// //           </div>

// //           {/* Departments */}
// //           <div>
// //             <h3 className="text-white font-semibold text-lg mb-6">Legal Links</h3>
// //             <ul className="space-y-4">
// //               <li><Link to="/departments" className="hover:text-blue-400 transition">Privacy Policy </Link></li>
// //               <li><Link to="/departments" className="hover:text-blue-400 transition">Terms Conition</Link></li>
// //               <li><Link to="/departments" className="hover:text-blue-400 transition">Cookie Policy</Link></li>
// //             </ul><br></br>
// //              <div className="flex space-x-4">
// //               {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
// //                 <a
// //                   key={i}
// //                   href="#"
// //                   className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition"
// //                 >
// //                   <Icon className="h-5 w-5" />
// //                 </a>
// //               ))}
// //             </div>
// //           </div>
          

// //           {/* Contact */}
// //           {/* Gallery + Visitors */}
// // <div>
// //   <h3 className="text-white font-semibold text-lg mb-6">
// //     Gallery
// //   </h3>

// //   <div className="grid grid-cols-3 gap-2 mb-8">

// //     <img
// //       src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200"
// //       alt=""
// //       className="rounded-lg h-20 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
// //     />

// //     <img
// //       src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=200"
// //       alt=""
// //       className="rounded-lg h-20 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
// //     />

// //     <img
// //       src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200"
// //       alt=""
// //       className="rounded-lg h-20 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
// //     />

// //     <img
// //       src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200"
// //       alt=""
// //       className="rounded-lg h-20 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
// //     />

// //     <img
// //       src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200"
// //       alt=""
// //       className="rounded-lg h-20 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
// //     />

// //     <img
// //       src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=200"
// //       alt=""
// //       className="rounded-lg h-20 w-full object-cover hover:scale-105 duration-300 cursor-pointer"
// //     />

// //   </div>

// //   {/* Visitor Counter */}

 

// // </div>
// //           {/* <div>
// //             <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
// //             <ul className="space-y-4 text-sm">

// //               <li className="flex items-start gap-3">
// //                 <MapPin className="h-5 w-5 text-blue-500 mt-1" />
// //                 <span>
// //                   D.No: 10-21/1/6, Sriramanagar,<br />
// //                   Near Petrol Bunk, Opp. GVMC Park,<br />
// //                   Lankelapalem, Anakapalli Dist - 531019
// //                 </span>
// //               </li>

// //               <li className="flex items-center gap-3">
// //                 <Phone className="h-5 w-5 text-blue-500" />
// //                 <span>
// //                   +91 7702021224<br />
// //                   +91 7672021224
// //                 </span>
// //               </li>

// //               <li className="flex items-center gap-3">
// //                 <Mail className="h-5 w-5 text-blue-500" />
// //                 <span>q9hospital2026@gmail.com</span>
// //               </li>

// //             </ul>
// //           </div> */}

// //         </div>

// //         {/* Bottom */}
// //         <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
// //           <p>© {new Date().getFullYear()} Q9 Multy Speciality Hospital. All rights reserved.</p>
// //         </div>

// //       </div>
// //     </footer>
// //   );
// // }


// import { Link } from "react-router-dom";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
// } from "lucide-react";
// import { FaXTwitter } from "react-icons/fa6";
// import {
//   MapPin,
//   Phone,
//   Mail,
// } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-8">

// <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-10 items-start">
//           {/* Logo */}
//           <div className="xl:col-span-4 space-y-4">

//             <Link to="/" className="flex items-center gap-3">

//               <div className="bg-white rounded-lg p-2">
//                 <img
//                   src="/logo.png"
//                   alt="FAOPS"
//                   className="w-12 h-12 object-contain"
//                 />
//               </div>

//                <div>
//                 <h2 className="text-xl font-bold text-white">
//                   FAOPS
//                 </h2>

//                 <p className="text-sm text-blue-400 leading-5">
//                   Federation of Asia and<br></br>
//                   Oceania Perinatal Societies
//                 </p>
//               </div>

//             </Link>
//             {/* Address */}

//               <h1 className="text-white text-lg font-semibold mb-4">
//               Contact Us
//             </h1>
    
// <a href="https://maps.app.goo.gl/prqsU6TRXMYeWRV16"><div className="flex items-start gap-3">
//       <MapPin
//         className="text-[#F7DB07] mt-1 shrink-0"
//         size={20}
//       />
//       <p className="text-slate-300 leading-7">
//         78, Railway Lines,
//         <br />
//         Near St. Joseph High School Main Gate,
//         <br />
//         Solapur,
//         Maharashtra, India – 413001
//       </p>
//     </div>
// </a>
    
// <div className="flex items-center gap-3">
//       <Phone
//         className="text-[#F7DB07]"
//         size={20}
//       />

//       <a
//         href="tel:+919822096280"
//         className="text-slate-300 hover:text-[#F7DB07] transition"
//       >
//        (+91) 98220 96280
//       </a>
//     </div>

//     <div className="flex items-center gap-3">
//       <Mail
//         className="text-[#F7DB07]"
//         size={20}
//       />

//       <a
//         href="mailto:info@faopsperinatal.org"
//         className="text-slate-300 hover:text-[#F7DB07] transition"
//       >
//         info@faopsperinatal.org
//       </a>
//     </div>
            

//           </div>


// {/* <div>
//   <h3 className="text-xl font-semibold text-white mb-6">
//     Contact Us
//   </h3>

//   <div className="space-y-5">

    

    

//   </div>
// </div>
//  */}



//           {/* Quick Links */}

//           <div className="xl:col-span-2 ml-15">

//             <h3 className="text-white text-lg font-semibold mb-4">
//               Quick Links
//             </h3>

//             <ul className="space-y-2">

//               <li>
//                 <Link to="/" className="hover:text-blue-400">
//                   Home
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/about">
//                   About Us
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/events">
//                   Events
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/contact">
//                   Contact Us
//                 </Link>
//               </li>

//             </ul>
            

//           </div>

//           {/* Legal */}

//           <div className="xl:col-span-2">

//             <h3 className="text-white text-lg font-semibold mb-4">
//               Legal Links
//             </h3>

//             <ul className="space-y-2">

//               <li>
//                 <Link to="/PrivacyPolicy">
//                   Privacy Policy
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/TermsConditions">
//                   Terms & Conditions
//                 </Link>
//               </li>

//               <li>
//                 <Link to="/Cookiepolicy">
//                   Cookie Policy
//                 </Link>
//               </li>

//             </ul>

//            <div className="flex gap-3 mt-5">

//   {[
//     {
//       icon: Facebook,
//       link: "https://www.facebook.com/faopsperinatal",
//     },
//     {
//       icon: FaXTwitter,
//       link: "https://twitter.com/faopsperinatal",
//     },
//     {
//       icon: Instagram,
//       link: "https://www.instagram.com/faopsperinatal",
//     },
//     {
//       icon: Linkedin,
//       link: "https://www.linkedin.com/company/faopsperinatal?_l=en_US",
//     },
//     {
//       icon: Youtube,
//       link: "https://www.youtube.com/@faopsperinatal",
//     },
//   ].map(({ icon: Icon, link }, index) => (
//     <a
//       key={index}
//       href={link}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white duration-300"
//     >
//       <Icon size={18} />
//     </a>
//   ))}

// </div>
//           </div>
//                     {/* Gallery */}

//           <div className="xl:col-span-4">

//             <h3 className="text-white text-lg font-semibold mb-4">
//               Gallery
//             </h3>

//             <div className="grid grid-cols-3 gap-2">

//               {[
//                 "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300",
//                 "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=300",
//                 "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300",
//                 "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300",
//                 "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300",
//                 "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=300",
//               ].map((img, index) => (

//                 <img
//                   key={index}
//                   src={img}
//                   alt={`Gallery ${index + 1}`}
//                   className="h-20 w-full object-cover rounded-lg hover:scale-105 transition duration-300 cursor-pointer"
//                 />

//               ))}

//             </div>
//             <br></br>
//             <div>

//               <h3 className="text-white font-semibold mb-3">
//                 Our Visitors
//               </h3>

//               <div className="flex gap-1.5 mb-2">

//                 {["0", "0", "2", "6", "1", "9"].map((num, index) => (
//                   <div
//                     key={index}
//                     className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-xs font-bold text-white"
//                   >
//                     {num}
//                   </div>
//                 ))}

//               </div>

//               <p className="text-sm text-slate-400">
//                 Users Today :
//                 <span className="text-white font-semibold ml-2">
//                   4
//                 </span>
//               </p>

//             </div>

//           </div>
          

//         </div>

//         {/* Bottom */}

//         <div className="mt-10 pt-5 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-slate-500">

//           <p>
//             © {new Date().getFullYear()} FAOPS. All Rights Reserved.
//           </p>

//           <p>
//             Federation of Asia and Oceania Perinatal Societies
//           </p>

//         </div>
//         {/* </div> */}

//       </div>
//     </footer>
//   );
// }


import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function Footer() {
  const gallery = [
    "/gallery/DSC1131.webp",
    "/gallery/4E2A0399-1536x1024.webp",
    "/gallery/DSC10522.webp",
    "/gallery/IMG_0300-1536x1020.webp",
    "/gallery/Purple-lights-@-KKH-1.webp",
    "/gallery/IMG-20221112-WA0021.webp",
  ];

  const [visitorCount, setVisitorCount] = useState("...");
  const [usersToday, setUsersToday] = useState("...");

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => {
        setVisitorCount(data.total_count);
        setUsersToday(data.today_count);
      })
      .catch((err) => {
        console.error("Failed to fetch visitors from DB:", err);
        setVisitorCount("0");
        setUsersToday("0");
      });
  }, []);

  // Safe conversion
  const visitors = String(visitorCount === "..." ? "000000" : visitorCount).padStart(6, "0").split("");

  return (
    <footer className="bg-[#1F2D4D] text-white mt-20">

      {/* Top Border */}
      <div className="h-2 bg-[#F7DB07]"></div>

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= CONTACT ================= */}

          <div>

            {/* <Link to="/" className="flex items-center gap-3 mb-6"> */}

              {/* <img
                src="/logo.png"
                alt="FAOPS"
                className="w-16 h-16 object-contain bg-white rounded-xl p-2 shadow-lg"
              /> */}

              {/* <div>

                <h2 className="text-2xl font-bold">
                  FAOPS
                </h2>

                <p className="text-sm text-gray-300 leading-5">
                  Federation of Asia &
                  <br />
                  Oceania Perinatal Societies
                </p>

              </div> */}

            {/* </Link> */}

            <h3 className="font-semibold text-xl mb-5">
              Contact Us
            </h3>

            <div className="space-y-5">

              <a
                href="https://maps.app.goo.gl/prqsU6TRXMYeWRV16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-[#F7DB07] duration-300"
              >

                <MapPin
                  size={20}
                  className="mt-1 text-[#F7DB07] shrink-0"
                />

                <span className="leading-7 text-gray-300">
                  78, Railway Lines,
                  <br />
                  Near St. Joseph High School,
                  <br />
                  Solapur,
                  Maharashtra – 413001
                </span>

              </a>

              <a
                href="tel:+919822096280"
                className="flex items-center gap-3 hover:text-[#F7DB07] duration-300"
              >

                <Phone
                  size={20}
                  className="text-[#F7DB07]"
                />

                (+91) 98220 96280

              </a>

              <a
                href="mailto:info@faopsperinatal.org"
                className="flex items-center gap-3 hover:text-[#F7DB07] duration-300"
              >

                <Mail
                  size={20}
                  className="text-[#F7DB07]"
                />

                info@faopsperinatal.org

              </a>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="hover:text-[#F7DB07] duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#F7DB07] duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/events"
                  className="hover:text-[#F7DB07] duration-300"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  to="/publications"
                  className="hover:text-[#F7DB07] duration-300"
                >
                  Publications
                </Link>
              </li>

              <li>
                <Link
                  to="/meetings"
                  className="hover:text-[#F7DB07] duration-300"
                >
                  Meetings
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#F7DB07] duration-300"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= LEGAL LINKS ================= */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Legal Links
            </h3>

            <ul className="space-y-4">

              <li>

                <Link
                  to="/PrivacyPolicy"
                  className="hover:text-[#F7DB07] duration-300"
                >
                  Privacy Policy
                </Link>

              </li>

              <li>

                <Link
                  to="/TermsConditions"
                  className="hover:text-[#F7DB07] duration-300"
                >
                  Terms & Conditions
                </Link>

              </li>

              <li>

                <Link
                  to="/Cookiepolicy"
                  className="hover:text-[#F7DB07] duration-300"
                >
                  Cookie Policy
                </Link>

              </li>

            </ul>

            <h4 className="font-semibold text-lg mt-8 mb-4">
              Follow Us
            </h4>

            <div className="flex gap-3">

              {[
                {
                  icon: Facebook,
                  url: "https://www.facebook.com/faopsperinatal",
                },
                {
                  icon: FaXTwitter,
                  url: "https://twitter.com/faopsperinatal",
                },
                {
                  icon: Instagram,
                  url: "https://www.instagram.com/faopsperinatal",
                },
                {
                  icon: Linkedin,
                  url: "https://www.linkedin.com/company/faopsperinatal",
                },
                {
                  icon: Youtube,
                  url: "https://www.youtube.com/@faopsperinatal",
                },
              ].map(({ icon: Icon, url }, i) => (

                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#31446F] flex items-center justify-center hover:bg-[#1E3A5F] hover:text-[#fff] duration-300"
                >

                  <Icon size={18} />

                </a>

              ))}

            </div>

          </div>

                    {/* ================= GALLERY ================= */}


<div>
  <h3 className="text-xl font-semibold mb-6">
    Gallery
  </h3>

  <div className="grid grid-cols-3 gap-3">

    {gallery.map((img, index) => (

      <Link
        to="/gallery"
        key={index}
        className="block overflow-hidden border-2 border-white/15 hover:border-[#F7DB07] shadow-lg shadow-slate-950/40 transition-colors duration-300"
      >

        <img
          src={img}
          alt={`Gallery ${index + 1}`}
          className="block w-full aspect-square object-cover hover:scale-110 duration-500 cursor-pointer"
        />

      </Link>

    ))}

  </div>
{/* </div> */}

            {/* Visitors */}

            <div className="mt-8">

              <h3 className="text-lg font-semibold mb-4">
                Our Visitors
              </h3>

              <div className="flex gap-2 mb-3">

                {visitors.map((num, index) => (

                  <div
                    key={index}
                    className="w-10 h-10 rounded-lg bg-[#344474] border border-[#4b6399] flex items-center justify-center font-bold text-white shadow-md"
                  >
                    {num}
                  </div>

                ))}

              </div>

              <p className="text-gray-300">
                Users Today :
                <span className="ml-2 text-[#F7DB07] font-bold">
                  {usersToday}
                </span>
              </p>

            </div>

          </div>

        </div>

        {/* ================= Bottom ================= */}

        <div className="border-t border-slate-700 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} FAOPS. All Rights Reserved.
          </p>

          <p className="text-gray-400 text-sm text-center">
            Federation of Asia and Oceania Perinatal Societies
          </p>

        </div>

      </div>

    </footer>
  );
}