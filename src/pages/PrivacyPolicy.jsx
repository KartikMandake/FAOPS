import PageHero from "../components/about/PageHero";

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        breadcrumb="Privacy Policy"
      />

      <section className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 md:p-12">

            <h1 className="text-4xl font-bold text-[#344474] mb-2">
              Privacy Policy
            </h1>

            <p className="text-slate-500 mb-10">
              Last Updated: July 2026
            </p>

            {/* Who We Are */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Who We Are
              </h2>

              <p className="text-slate-600 leading-8">
                Our website address is:
              </p>

              <a
                href="https://faopsperinatal.org"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://faopsperinatal.org
              </a>
            </div>

            {/* Personal Data */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                What Personal Data We Collect and Why We Collect It
              </h2>

              <p className="text-slate-600 leading-8">
                We may collect personal information that you voluntarily provide
                when using our website, such as your name, email address,
                contact details, and information submitted through forms. This
                information helps us respond to inquiries, improve our services,
                and maintain website security.
              </p>
            </div>

            {/* Comments */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Comments
              </h2>

              <p className="text-slate-600 leading-8">
                When visitors leave comments on the website, we collect the
                information provided in the comment form along with the visitor's
                IP address and browser information to help detect spam and
                protect our website.
              </p>

              <p className="text-slate-600 leading-8 mt-4">
                An anonymized version of your email address (hash) may be sent
                to the Gravatar service to verify whether you use it. Once your
                comment is approved, your profile picture may be visible
                publicly with your comment.
              </p>
            </div>

            {/* Media */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Media
              </h2>

              <p className="text-slate-600 leading-8">
                If you upload images to our website, please avoid uploading
                images containing embedded location data (EXIF GPS), as visitors
                may be able to extract this information.
              </p>
            </div>

            {/* Contact Forms */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Contact Forms
              </h2>

              <p className="text-slate-600 leading-8">
                Information submitted through our contact forms is used solely
                for responding to your inquiries and providing requested
                services.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Cookies
              </h2>

              <p className="text-slate-600 leading-8">
                Our website uses cookies to enhance your browsing experience,
                remember your preferences, and improve website functionality.
                Cookies may also be used for login sessions and website
                performance.
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-600">
                <li>Comment cookies may remain for up to one year.</li>
                <li>Login cookies remain active for two days.</li>
                <li>"Remember Me" login lasts for two weeks.</li>
                <li>Editing cookies expire after one day.</li>
              </ul>
            </div>

            {/* Embedded Content */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Embedded Content from Other Websites
              </h2>

              <p className="text-slate-600 leading-8">
                Articles or pages on this website may contain embedded content
                such as videos, images, or articles from third-party websites.
                These websites may collect information about you, use cookies,
                and monitor your interaction with the embedded content.
              </p>
            </div>

            {/* Analytics */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Analytics
              </h2>

              <p className="text-slate-600 leading-8">
                We may use website analytics tools to understand visitor
                behavior and improve the overall performance of our website.
              </p>
            </div>

            {/* Sharing */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Who We Share Your Data With
              </h2>

              <p className="text-slate-600 leading-8">
                We do not sell your personal information. Data may only be
                shared with trusted service providers when necessary for website
                operation, security, or legal compliance.
              </p>
            </div>

            {/* Retention */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                How Long We Retain Your Data
              </h2>

              <p className="text-slate-600 leading-8">
                Comments and related metadata may be retained indefinitely.
                Registered users may update or delete their personal information
                at any time, except for usernames.
              </p>
            </div>

            {/* Rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Your Rights Over Your Data
              </h2>

              <p className="text-slate-600 leading-8">
                You may request a copy of the personal data we hold about you or
                request deletion of your personal information where legally
                permitted.
              </p>
            </div>

            {/* Security */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Data Protection
              </h2>

              <p className="text-slate-600 leading-8">
                We implement appropriate technical and organizational security
                measures to safeguard your personal information against
                unauthorized access, disclosure, or misuse.
              </p>
            </div>

            {/* Additional */}
            <div>
              <h2 className="text-2xl font-semibold text-[#344474] mb-4">
                Additional Information
              </h2>

              <p className="text-slate-600 leading-8">
                We continuously review and improve our privacy practices to
                comply with applicable laws and protect the confidentiality,
                integrity, and availability of your information.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}