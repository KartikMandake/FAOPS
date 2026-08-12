import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import ScrollToTop from "./components/ScrollToTop";

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Publications from './pages/Pulication';
import Doctors from './pages/Doctors';
import DoctorProfile from './pages/DoctorProfile';
import Departments from './pages/Departments';
import DepartmentDetails from './pages/DepartmentDetails';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import History from './pages/History';
import Vision from './pages/Vision';
import Mission from './pages/Mission';
import Programs from './pages/Programs';
import Values from './pages/Values';
import Council from './pages/Council';
import CommitteeChairperson from './pages/CommitteeChairperson';
import DeputySecretaryGeneral from './pages/DeputySecretaryGeneral';
import AdvisoryBoard from './pages/AdvisoryBoard';
import OrganizationChart from './pages/OrganizationChart';
import gallerygrid from './pages/gallerygrid';
import Constitution from './pages/Constitution';
import GeneralAssembly from './pages/GeneralAssembly';
import UsefulLinks from './pages/UsefulLinks';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAOPS2022 from './pages/FAOPS2022';
import FAOPS2023 from "./pages/FAOPS2023";
import Presidentcorner from "./pages/Presidentcorner";
import Membership from "./pages/Membership";
import Congresses from "./pages/Congresses";
import Countrydetails from "./pages/Countrydetails";
import TermsConditions from "./pages/TermsConditions";
import Cookiepolicy from "./pages/Cookiepolicy";

export default function App() { 
  return (
    <Router>

      {/* THIS FIXES YOUR SCROLL ISSUE */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Publications" element={<Publications />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:slug" element={<EventDetails />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:doctorId" element={<DoctorProfile />} />
          <Route path="departments" element={<Departments />} />
          <Route path="departments/:id" element={<DepartmentDetails />} />
          <Route path="services" element={<Services />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="History" element={<History />} />
          <Route path="Vision" element={<Vision />} />
          <Route path="Mission" element={<Mission />} />
          <Route path="Values" element={<Values />} />
          <Route path="Programs" element={<Programs />} />
          <Route path="Council" element={<Council />} />
          <Route path="CommitteeChairperson" element={<CommitteeChairperson />} />
          <Route path="DeputySecretaryGeneral" element={<DeputySecretaryGeneral />} />
          <Route path="AdvisoryBoard" element={<AdvisoryBoard />} />
          <Route path="OrganizationChart" element={<OrganizationChart />} />
          <Route path="gallerygrid" element={<gallerygrid />} />
          <Route path="Constitution" element={<Constitution />} />
          <Route path="GeneralAssembly" element={<GeneralAssembly />} />
          <Route path="UsefulLinks" element={<UsefulLinks />} />
          {/* Old duplicate contact page -- kept as a redirect so existing links survive. */}
          <Route path="ContactUs" element={<Navigate to="/contact" replace />} />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="Presidentcorner" element={<Presidentcorner />} />
          {/* <Route path="faops2022" element={<faops2022 />} /> */}
          {/* <Route path="faops2023" element={<faops2023 />} /> */}
          {/* Legacy alias -- everything membership lives on /membership now */}
          <Route path="MembershipPage" element={<Navigate to="/membership" replace />} />
          <Route path="Congresses" element={<Congresses />} />
          <Route path="Countrydetails" element={<Countrydetails />} />
          <Route path="TermsConditions" element={<TermsConditions />} />
          <Route path="Cookiepolicy" element={<Cookiepolicy />} />
          
{/* One page, two views: index without a param, country detail with one */}
<Route
  path="/membership"
  element={<Membership />}
/>

<Route
  path="/membership/:country"
  element={<Membership />}
/>
          <Route path="/gallery" element={<Gallery />} />

<Route
  path="/gallery/faops2022"
  element={<FAOPS2022 />}
/>

<Route
  path="/gallery/faops2023"
  element={<FAOPS2023 />}
/>

{/* <Route
  path="/gallery/faops2024"
  element={<FAOPS2024 />}
/> */}
          
        </Route>
      </Routes>

    </Router>
  );
}