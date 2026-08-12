import PageHero from "../components/about/PageHero";

export default function CookiePolicy() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        subtitle="Learn how FAOPS uses cookies and related technologies to improve your browsing experience."
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-10">

            <p className="text-gray-600 mb-10">
              <strong>This Cookie Policy was last updated on September 17, 2023</strong> and applies to citizens and legal permanent residents of the European Economic Area and Switzerland.
            </p>

            {/* 1 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#344474] mb-4">
                1. Introduction
              </h2>

              <p className="text-gray-700 leading-8">
                Our website, https://faopsperinatal.org (hereinafter: "the website") uses cookies and other related technologies (for convenience all technologies are referred to as "cookies"). Cookies are also placed by third parties we have engaged. In the document below we inform you about the use of cookies on our website.
              </p>
            </div>

            {/* 2 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#344474] mb-4">
                2. What are cookies?
              </h2>

              <p className="text-gray-700 leading-8">
                A cookie is a small simple file that is sent along with pages of this website and stored by your browser on the hard drive of your computer or another device. The information stored therein may be returned to our servers or to the servers of the relevant third parties during a subsequent visit.
              </p>
            </div>

            {/* 3 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#344474] mb-4">
                3. What are scripts?
              </h2>

              <p className="text-gray-700 leading-8">
                A script is a piece of program code that is used to make our website function properly and interactively. This code is executed on our server or on your device.
              </p>
            </div>

            {/* 4 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#344474] mb-4">
                4. What is a web beacon?
              </h2>

              <p className="text-gray-700 leading-8">
                A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to monitor traffic on a website. In order to do this, various data about you is stored using web beacons.
              </p>
            </div>

            {/* 5 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#344474] mb-4">
                5. Cookies
              </h2>

              <h3 className="text-xl font-semibold text-[#344474] mb-3">
                5.1 Technical or Functional Cookies
              </h3>

              <p className="text-gray-700 leading-8 mb-6">
                Some cookies ensure that certain parts of the website work properly and that your user preferences remain known. By placing functional cookies, we make it easier for you to visit our website. This way, you do not need to repeatedly enter the same information when visiting our website and, for example, the items remain in your shopping cart until you have paid. We may place these cookies without your consent.
              </p>

              <h3 className="text-xl font-semibold text-[#344474] mb-3">
                5.2 Marketing / Tracking Cookies
              </h3>

              <p className="text-gray-700 leading-8 mb-6">
                Marketing/Tracking cookies are cookies or any other form of local storage, used to create user profiles to display advertising or to track the user on this website or across several websites for similar marketing purposes.
              </p>

              <h3 className="text-xl font-semibold text-[#344474] mb-3">
                5.3 Social Media
              </h3>

              <p className="text-gray-700 leading-8">
                On our website, we have included content from WhatsApp to promote web pages (e.g. “like”, “pin”) or share (e.g. “tweet”) on social networks like WhatsApp. This content is embedded with code derived from WhatsApp and places cookies. This content might store and process certain information for personalized advertising.
              </p>

              <p className="text-gray-700 leading-8 mt-4">
                Please read the privacy statement of these social networks (which can change regularly) to read what they do with your (personal) data which they process using these cookies. The data that is retrieved is anonymized as much as possible. WhatsApp is located in the United States.
              </p>
            </div>

            {/* 6 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#344474] mb-5">
                6. Placed Cookies
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                  <thead className="bg-[#344474] text-white">
                    <tr>
                      <th className="border p-3 text-left">Service</th>
                      <th className="border p-3 text-left">Purpose</th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      ["Elementor", "Statistics (anonymous)"],
                      ["WordPress", "Functional"],
                      ["WooCommerce", "Functional"],
                      ["Stripe", "Functional"],
                      ["Active Campaign", "Marketing"],
                      ["Google Fonts", "Marketing"],
                      ["Google reCAPTCHA", "Marketing"],
                      ["Google Maps", "Marketing"],
                      ["YouTube", "Marketing"],
                      ["PayPal", "Functional"],
                      ["LiveChat", "Functional, Marketing"],
                      ["WhatsApp", "Functional"],
                      ["Miscellaneous", "Functional"],
                    ].map((item, index) => (
                      <tr key={index}>
                        <td className="border p-3">{item[0]}</td>
                        <td className="border p-3">{item[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 7 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#344474] mb-4">
                7. Consent
              </h2>

              <p className="text-gray-700 leading-8">
                When you visit our website for the first time, we will show you a pop-up with an explanation about cookies. As soon as you click on "Save preferences", you consent to us using the categories of cookies and plug-ins you selected in the pop-up, as described in this Cookie Policy. You can disable the use of cookies via your browser, but please note that our website may no longer work properly.
              </p>

              <div className="mt-6 border rounded-xl p-5 bg-gray-50">
                <h3 className="font-semibold text-lg mb-3">
                  7.1 Manage your consent settings
                </h3>

                <p><strong>Functional:</strong> Always Active</p>
                <p><strong>Marketing:</strong> Optional</p>
              </div>
            </div>

            {/* 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#344474] mb-4">
                8. Enabling / Disabling and Deleting Cookies
              </h2>

              <p className="text-gray-700 leading-8">
                You can use your internet browser to automatically or manually delete cookies. You can also specify that certain cookies may not be placed. Another option is to change the settings of your internet browser so that you receive a message each time a cookie is placed. For more information about these options, please refer to the instructions in the Help section of your browser.
              </p>

              <p className="text-gray-700 leading-8 mt-4">
                Please note that our website may not work properly if all cookies are disabled. If you do delete the cookies in your browser, they will be placed again after your consent when you visit our website again.
              </p>
            </div>

            {/* 9 */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-[#344474] mb-4">
                9. Your Rights with Respect to Personal Data
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-8">
                <li>You have the right to know why your personal data is needed, what will happen to it, and how long it will be retained.</li>
                <li>Right of access to your personal data.</li>
                <li>Right to rectification or deletion of your personal data.</li>
                <li>Right to withdraw your consent at any time.</li>
                <li>Right to transfer your personal data.</li>
                <li>Right to object to the processing of your personal data.</li>
              </ul>

              <p className="mt-5 text-gray-700 leading-8">
                To exercise these rights, please contact us. If you have a complaint about how we handle your data, you also have the right to submit a complaint to the Data Protection Authority.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-bold text-[#344474] mb-4">
                10. Contact Details
              </h2>

              <div className="border rounded-2xl p-6 bg-gray-50 space-y-3 text-gray-700">
                <p><strong>Organization:</strong> FAOPS: Federation of Asian & Oceania Perinatal Societies</p>

                <p><strong>Country:</strong> Japan</p>

                <p><strong>Website:</strong> https://faopsperinatal.org</p>

                <p><strong>Email:</strong> info@faopsperinatal.org</p>

                <p><strong>Phone:</strong> +91 9822096280</p>

                <p className="pt-4 text-sm text-gray-500">
                  This Cookie Policy was synchronized with cookiedatabase.org on September 17, 2023.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}