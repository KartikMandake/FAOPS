// export const navLinks = [
//   {
//     title: "Home",
//     path: "/",
//     children: [
//       {
//         title: "President's Corner",
//         path: "/presidents-corner",
//       },
//     ],
//   },

//   {
//     title: "About Us",
//     children: [
//       {
//         title: "About FAOPS",
//         path: "/about",
//       },
//       {
//         title: "History",
//         path: "/history",
//       },
//       {
//         title: "Vision",
//         path: "/vision",
//       },
//       {
//         title: "Mission",
//         path: "/mission",
//       },
//       {
//         title: "Core Values",
//         path: "/values",
//       },
//       {
//         title: "Programs",
//         path: "/programs",
//       },
//     ],
//   },

//   {
//     title: "Office Bearers",
//     children: [
//       {
//         title: "The Council",
//         path: "/council",
//       },
//       {
//         title: "Committee Chairperson",
//         path: "/CommitteeChairperson",
//       },
//       {
//         title: "Deputy Secretary General",
//         path: "/DeputySecretaryGeneral",
//       },
//       {
//         title: "Advisory Board",
//         path: "/advisoryboard",
//       },
//     ],
//   },

//   {
//     title: "Membership",
//     children: [
//       {
//         title: "Bangladesh",
//         path: "/membership/bangladesh",
//       },
//       {
//         title: "India",
//         path: "/membership/india",
//       },
//       {
//         title: "Indonesia",
//         path: "/membership/indonesia",
//       },
//       {
//         title: "Japan",
//         path: "/membership/japan",
//       },
//       {
//         title: "Malaysia",
//         path: "/membership/malaysia",
//       },
//       {
//         title: "Nepal",
//         path: "/membership/nepal",
//       },
//       {
//         title: "Pakistan",
//         path: "/membership/pakistan",
//       },
//       {
//         title: "Philippines",
//         path: "/membership/philippines",
//       },
//       {
//         title: "Singapore",
//         path: "/membership/singapore",
//       },
//       {
//         title: "Sri Lanka",
//         path: "/membership/sri-lanka",
//       },
//       {
//         title: "Thailand",
//         path: "/membership/thailand",
//       },
//     ],
//   },

//   {
//     title: "Events",
//     path: "/events",
//   },

//   {
//     title: "Publications",
//     path: "/publications",
//   },

//   {
//     title: "Others",
//     children: [
//       {
//         title: "Organization Chart",
//         path: "/organizationchart",
//       },
//       {
//         title: "Gallery",
//         path: "/Gallery",
//       },
//       {
//         title: "Country Details",
//         path: "/country-details",
//       },
//        {
//         title: "Society Congresses",
//         path: "/country-details",
//       },
//        {
//         title: "Constitution",
//         path: "/Constitution",
//       },
//        {
//         title: "Meetings",
//         path: "/GeneralAssembly",
//       },

//        {
//         title: "Useful Links",
//         path: "/UsefulLinks",
//       },
//        {
//         title: "Contact Us",
//         path: "/ContactUs",
//       },
//     ],
//   },
// ];

export const navLinks = [
  {
    title: "Home",
    path: "/",
    children: [
      {
        title: "President's Corner",
        path: "/Presidentcorner",
      },
    ],
  },

  {
    title: "About Us",
    children: [
      { title: "About FAOPS", path: "/about" },
      { title: "History", path: "/history" },
      { title: "Vision", path: "/vision" },
      { title: "Mission", path: "/mission" },
      { title: "Core Values", path: "/values" },
      { title: "Programs", path: "/programs" },
    ],
  },

  {
    title: "Office Bearers",
    children: [
      { title: "The Council", path: "/council" },
      { title: "Committee Chairperson", path: "/CommitteeChairperson" },
      { title: "Deputy Secretary General", path: "/DeputySecretaryGeneral" },
      { title: "Advisory Board", path: "/advisoryboard" },
    ],
  },

  /* 🌏 REGIONAL MEMBERSHIP STRUCTURE */
  {
    title: "Membership",
    children: [
      {
        title: "Central Region",
        children: [
          { title: "Cambodia", path: "/membership/cambodia" },
          { title: "Indonesia", path: "/membership/indonesia" },
          { title: "Malaysia", path: "/membership/malaysia" },
          { title: "Singapore", path: "/membership/singapore" },
          { title: "Thailand", path: "/membership/thailand" },
          { title: "Vietnam", path: "/membership/vietnam" },
        ],
      },
      {
        title: "West Region",
        children: [
          { title: "Afghanistan", path: "/membership/afghanistan" },
          { title: "Bangladesh", path: "/membership/bangladesh" },
          { title: "India", path: "/membership/india" },
          { title: "Nepal", path: "/membership/nepal" },
          { title: "Pakistan", path: "/membership/pakistan" },
          { title: "Sri Lanka", path: "/membership/sri-lanka" },
          { title: "United Arab Emirates", path: "/membership/uae" },

        ],
      },
      {
        title: "East Region",
        children: [
          { title: "Japan", path: "/membership/japan" },
          { title: "Korea", path: "/membership/korea" },
          { title: "Mangolia", path: "/membership/mongolia" },
          { title: "Philippines", path: "/membership/philippines" },
          { title: "Taiwan", path: "/membership/taiwan" },
        ],
      },
      {
        title: "Oceania Region",
        children: [
          { title: "Australia and New Zealand", path: "/membership/australia" },
          // { title: "", path: "/membership/new-zealand" },
        ],
      },
    ],
  },

  {
    title: "Events",
    path: "/events",
  },

  {
    title: "Publications",
    path: "/publications",
  },

  {
    title: "Others",
    children: [
      { title: "Organization Chart", path: "/OrganizationChart" },
      { title: "Gallery", path: "/gallery" },
      { title: "Country Details", path: "/Countrydetails" },
      { title: "Society Congresses", path: "/Congresses" },
      { title: "Constitution", path: "/constitution" },
      { title: "Meetings", path: "/GeneralAssembly" },
      { title: "Useful Links", path: "/UsefulLinks" },
      { title: "Contact Us", path: "/contact" },
    ],
  },
];