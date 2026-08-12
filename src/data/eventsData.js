// Source of truth for the events module.
// Consumed by: src/pages/Events.jsx (list / month / day views) and
// src/pages/EventDetails.jsx (full detail page at /events/:slug).
//
// `slug` is the URL param for /events/:slug. Keep it unique and lowercase.
// The detail page reads: overview, highlights, agenda, venue, organizer,
// audience, registration.

export const eventsData = [
  {
    id: 1,
    slug: "faops-annual-congress-2026",
    title: "FAOPS Annual Congress 2026",
    date: "2026-07-02",
    time: "09:00 AM",
    endTime: "05:00 PM",
    location: "Singapore",
    venue: "Suntec Singapore Convention & Exhibition Centre",
    category: "Congress",
    image: "/gallery/DSC10522.webp",
    organizer: "Federation of Asia and Oceania Perinatal Societies (FAOPS)",
    audience:
      "Obstetricians, neonatologists, maternal-fetal medicine specialists, midwives, nurses and research fellows.",
    registration: "Registration is open to FAOPS member societies and invited delegates.",
    description:
      "The FAOPS Annual Congress brings together leading experts in maternal, fetal and neonatal medicine from Asia and Oceania for scientific sessions, keynote lectures, workshops and networking opportunities.",
    overview: [
      "The FAOPS Annual Congress is the flagship scientific meeting of the Federation of Asia and Oceania Perinatal Societies. Held across three days, it gathers clinicians, researchers and policy makers working across the full perinatal continuum, from preconception counselling through to neonatal follow-up.",
      "The 2026 edition focuses on translating evidence into everyday practice. Plenary lectures set the scientific agenda each morning, while parallel afternoon tracks dive into fetal therapy, high-risk obstetrics, neonatal intensive care and perinatal public health.",
      "Delegates also get access to hands-on workshops, a moderated poster hall, and dedicated sessions where member societies share national programme outcomes and implementation lessons.",
    ],
    highlights: [
      "Three days of plenary lectures from international faculty",
      "Parallel tracks on fetal therapy, high-risk obstetrics and neonatal care",
      "Hands-on ultrasound and neonatal resuscitation workshops",
      "Moderated poster hall with young investigator presentations",
      "Member society roundtable on regional perinatal outcomes",
      "Delegate networking dinner and welcome reception",
    ],
    agenda: [
      {
        time: "09:00 AM",
        title: "Registration & Welcome Address",
        speaker: "FAOPS President",
      },
      {
        time: "10:00 AM",
        title: "Plenary: Advances in Maternal-Fetal Medicine",
        speaker: "International Faculty Panel",
      },
      {
        time: "11:30 AM",
        title: "Scientific Session I: High-Risk Pregnancy Management",
        speaker: "Invited Speakers",
      },
      {
        time: "01:30 PM",
        title: "Parallel Workshops: Ultrasound & Neonatal Resuscitation",
        speaker: "Workshop Faculty",
      },
      {
        time: "03:00 PM",
        title: "Free Paper & Poster Presentations",
        speaker: "Young Investigators",
      },
      {
        time: "04:30 PM",
        title: "Member Society Roundtable & Closing Remarks",
        speaker: "FAOPS Council",
      },
    ],
  },

  {
    id: 2,
    slug: "young-investigator-award",
    title: "Young Investigator Award",
    date: "2026-07-05",
    time: "11:00 AM",
    endTime: "02:00 PM",
    location: "India",
    venue: "FAOPS Regional Academic Centre, New Delhi",
    category: "Award",
    image: "/gallery/DSC10522.webp",
    organizer: "FAOPS Scientific Committee",
    audience:
      "Researchers and clinicians under 40 years of age from FAOPS member societies.",
    registration:
      "Abstract submission is required ahead of the session. Shortlisted candidates present in person.",
    description:
      "Recognition of outstanding young researchers in perinatal medicine for their innovative research and contributions.",
    overview: [
      "The Young Investigator Award recognises early-career researchers who are advancing perinatal medicine across Asia and Oceania. Shortlisted candidates present their work to a panel of senior faculty, followed by open scientific discussion.",
      "Submissions are judged on originality, methodological rigour, regional relevance and potential clinical impact. Winners receive a travel grant toward the next FAOPS Annual Congress and mentoring support from the Scientific Committee.",
      "The session is open to all delegates, and attending it is one of the best ways to see where perinatal research in the region is heading.",
    ],
    highlights: [
      "Oral presentations from shortlisted candidates",
      "Live feedback from a senior international judging panel",
      "Travel grant and mentorship for award winners",
      "Open discussion on research methodology and funding",
      "Networking lunch with the Scientific Committee",
    ],
    agenda: [
      {
        time: "11:00 AM",
        title: "Opening & Judging Criteria Briefing",
        speaker: "Scientific Committee Chair",
      },
      {
        time: "11:20 AM",
        title: "Shortlisted Presentations (Round I)",
        speaker: "Young Investigators",
      },
      {
        time: "12:30 PM",
        title: "Panel Discussion: Building a Research Career",
        speaker: "Senior Faculty",
      },
      {
        time: "01:30 PM",
        title: "Award Announcement & Networking Lunch",
        speaker: "FAOPS Council",
      },
    ],
  },

  {
    id: 3,
    slug: "perinatal-research-workshop",
    title: "Perinatal Research Workshop",
    date: "2026-07-10",
    time: "10:30 AM",
    endTime: "04:00 PM",
    location: "Japan",
    venue: "Tokyo Perinatal Sciences Institute",
    category: "Workshop",
    image: "/gallery/DSC10522.webp",
    organizer: "FAOPS Research & Education Committee",
    audience:
      "Clinical researchers, fellows, statisticians and trial coordinators in perinatal medicine.",
    registration: "Limited seats. Priority is given to active research fellows.",
    description:
      "Interactive workshop focusing on current trends in perinatal research, clinical studies and collaborative projects.",
    overview: [
      "This full-day workshop is built around small-group work rather than lectures. Participants bring a live research question and leave with a sharpened protocol, a realistic analysis plan and a shortlist of potential collaborators.",
      "Facilitators cover study design for perinatal cohorts, registry data quality, ethics and consent in pregnancy research, and the practicalities of running a multi-country study across member societies.",
      "The closing session maps out collaborative projects that FAOPS can support in the coming year.",
    ],
    highlights: [
      "Small-group protocol review with experienced facilitators",
      "Study design clinics for perinatal cohorts and registries",
      "Ethics and consent considerations in pregnancy research",
      "Practical guidance on multi-country collaboration",
      "Statistical analysis planning session",
      "Collaborative project matchmaking",
    ],
    agenda: [
      {
        time: "10:30 AM",
        title: "Workshop Opening & Participant Introductions",
        speaker: "Research Committee Chair",
      },
      {
        time: "11:00 AM",
        title: "Session I: Study Design for Perinatal Cohorts",
        speaker: "Workshop Faculty",
      },
      {
        time: "12:30 PM",
        title: "Small-Group Protocol Clinics",
        speaker: "Facilitators",
      },
      {
        time: "02:00 PM",
        title: "Session II: Data Quality, Ethics & Consent",
        speaker: "Workshop Faculty",
      },
      {
        time: "03:15 PM",
        title: "Collaborative Project Matchmaking & Wrap-Up",
        speaker: "FAOPS Research Committee",
      },
    ],
  },

  {
    id: 4,
    slug: "neonatal-care-conference",
    title: "Neonatal Care Conference",
    date: "2026-07-15",
    time: "09:30 AM",
    endTime: "05:00 PM",
    location: "Korea",
    venue: "Seoul International Medical Convention Hall",
    category: "Conference",
    image: "/gallery/DSC10522.webp",
    organizer: "FAOPS Neonatology Section",
    audience:
      "Neonatologists, paediatric residents, NICU nurses and respiratory therapists.",
    registration: "Open registration with early-bird rates for member societies.",
    description:
      "International conference discussing advances in neonatal intensive care, technology and evidence-based practices.",
    overview: [
      "The Neonatal Care Conference brings the newborn intensive care community together around one question: what actually improves outcomes at the cot side. Sessions pair evidence reviews with case-based discussion so recommendations stay grounded in real unit constraints.",
      "Core themes include respiratory support strategies for the extremely preterm infant, neuroprotective care bundles, nutrition and growth monitoring, and the safe adoption of new monitoring technology.",
      "A dedicated nursing and allied health track runs alongside the medical programme, and the final session covers family-centred care and long-term follow-up.",
    ],
    highlights: [
      "Evidence updates on non-invasive respiratory support",
      "Neuroprotective care bundles and quality improvement data",
      "Neonatal nutrition and growth monitoring session",
      "Dedicated nursing and allied health track",
      "Case-based discussions on complex NICU scenarios",
      "Family-centred care and follow-up programmes",
    ],
    agenda: [
      {
        time: "09:30 AM",
        title: "Opening Remarks & Conference Overview",
        speaker: "Neonatology Section Chair",
      },
      {
        time: "10:00 AM",
        title: "Keynote: Respiratory Support in the Extremely Preterm Infant",
        speaker: "Invited Keynote Speaker",
      },
      {
        time: "11:30 AM",
        title: "Session I: Neuroprotection & Quality Improvement",
        speaker: "Invited Faculty",
      },
      {
        time: "01:30 PM",
        title: "Parallel Tracks: Medical & Nursing / Allied Health",
        speaker: "Track Faculty",
      },
      {
        time: "03:00 PM",
        title: "Case-Based Panel: Complex NICU Scenarios",
        speaker: "Expert Panel",
      },
      {
        time: "04:15 PM",
        title: "Family-Centred Care, Follow-Up & Closing",
        speaker: "FAOPS Neonatology Section",
      },
    ],
  },

  {
    id: 5,
    slug: "maternal-health-symposium",
    title: "Maternal Health Symposium",
    date: "2026-07-20",
    time: "02:00 PM",
    endTime: "06:00 PM",
    location: "Indonesia",
    venue: "Jakarta Convention Centre",
    category: "Symposium",
    image: "/gallery/DSC10522.webp",
    organizer: "FAOPS Maternal Health Committee",
    audience:
      "Obstetricians, midwives, public health professionals and health policy makers.",
    registration: "Free for delegates of FAOPS member societies.",
    description:
      "Symposium highlighting maternal health challenges, policy development and collaborative healthcare strategies.",
    overview: [
      "This half-day symposium looks at maternal health where clinical care meets public health policy. Speakers present regional data on maternal mortality and morbidity, then work through what it takes to move indicators in real health systems.",
      "Discussion covers referral networks and emergency obstetric access, workforce training and retention, postpartum haemorrhage protocols, and maternal mental health as a routine part of antenatal care.",
      "The closing panel drafts practical advocacy points that member societies can carry back to their national health ministries.",
    ],
    highlights: [
      "Regional maternal mortality and morbidity data review",
      "Referral networks and emergency obstetric access",
      "Postpartum haemorrhage protocol implementation",
      "Maternal mental health in routine antenatal care",
      "Workforce training and retention strategies",
      "Policy advocacy panel with member society representatives",
    ],
    agenda: [
      {
        time: "02:00 PM",
        title: "Welcome & Regional Maternal Health Snapshot",
        speaker: "Maternal Health Committee Chair",
      },
      {
        time: "02:40 PM",
        title: "Session I: Emergency Obstetric Access & Referral Networks",
        speaker: "Invited Speakers",
      },
      {
        time: "03:50 PM",
        title: "Session II: Postpartum Care & Maternal Mental Health",
        speaker: "Invited Speakers",
      },
      {
        time: "05:00 PM",
        title: "Policy Advocacy Panel & Closing Statement",
        speaker: "Member Society Representatives",
      },
    ],
  },
];

/**
 * Look up an event by its slug, falling back to a numeric id match so old
 * `/events/1` style links keep working.
 */
export function getEventBySlug(param) {
  if (!param) return undefined;

  return eventsData.find(
    (event) => event.slug === param || String(event.id) === String(param)
  );
}
