import Head from "next/head";
import Header from "@components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="container">
      <Header />
      <Head>
        <title>Terms of service</title>
      </Head>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="p-4">
            <h1 className="text-center mb-4 mt-4">Terms of service</h1>

            <p className="text-center">
              Welcome to FREE2LEARN! These Terms of Service (&quot;Terms&quot;) govern
              your use of FREE2LEARN website, its services, and any content or
              materials available through FREE2LEARN. By accessing or using
              FREE2LEARN, you agree to comply with these Terms. If you do not
              agree with any provision of these Terms, please do not use
              FREE2LEARN.
            </p>

            <p className="text-center">1. Use of FREE2LEARN</p>

            <p className="text-center">
              1.1 Eligibility: You must be at least 13 years old to use
              FREE2LEARN. If you are under 13 years old, please do not use
              FREE2LEARN.
            </p>

            <p className="text-center">
              1.2 User Accounts: Some features of FREE2LEARN may require you to
              create a user account. When creating an account, you agree to
              provide accurate and complete information. You are responsible for
              maintaining the confidentiality of your account credentials and
              for all activities that occur under your account. If you become
              aware of any unauthorized use of your account, you must notify us
              immediately.
            </p>

            <p className="text-center">
              1.3 User Content: FREE2LEARN allows users to contribute content,
              including questions, answers, comments, and other materials (&quot;User
              Content&quot;). By submitting User Content, you grant us a worldwide,
              non-exclusive, royalty-free, perpetual, irrevocable, and
              sublicensable right to use, reproduce, modify, adapt, publish,
              translate, distribute, publicly perform, and display the User
              Content in any media or format.
            </p>

            <p className="text-center">
              1.4 Prohibited Conduct: While using FREE2LEARN, you agree not to:
            </p>
            <p className="text-center">
              a. Violate any applicable laws or regulations;
            </p>
            <p className="text-center">
              b. Impersonate any person or entity or falsely state or
              misrepresent your affiliation with a person or entity;
            </p>
            <p className="text-center">
              c. Post or transmit any content that is unlawful, harmful,
              threatening, abusive, harassing, defamatory, vulgar, obscene,
              libelous, invasive of another&apos;s privacy, or otherwise
              objectionable;
            </p>
            <p className="text-center">
              d. Engage in any activity that interferes with or disrupts the
              proper functioning of FREE2LEARN;
            </p>
            <p className="text-center">
              e. Attempt to gain unauthorized access to FREE2LEARN&apos;s systems or
              networks;
            </p>
            <p className="text-center">
              f. Collect or store personal data about other users without their
              consent;
            </p>
            <p className="text-center">
              g. Use FREE2LEARN for any commercial or advertising purposes
              without our prior written consent.
            </p>

            <p className="text-center">2. Intellectual Property</p>

            <p className="text-center">
              2.1 Ownership: FREE2LEARN and its content, including but not
              limited to text, graphics, logos, images, software, and
              audiovisual materials, are owned by FREE2LEARN or its licensors
              and are protected by copyright, trademark, and other intellectual
              property laws. You acknowledge that you do not acquire any
              ownership rights by using FREE2LEARN.
            </p>

            <p className="text-center">
              2.2 Limited License: FREE2LEARN grants you a limited,
              non-exclusive, revocable, and non-transferable license to access
              and use FREE2LEARN and its content for personal, non-commercial
              purposes. You may not reproduce, distribute, modify, create
              derivative works of, publicly display, or publicly perform any
              portion of FREE2LEARN or its content without our prior written
              consent.
            </p>

            <p className="text-center">3. Disclaimer of Warranties</p>

            <p className="text-center">
              FREE2LEARN is provided on an &quot;as is&quot; and &quot;as available&quot; basis
              without warranties of any kind, either express or implied. We do
              not warrant that FREE2LEARN will be uninterrupted, error-free, or
              free from viruses or other harmful components. We disclaim all
              warranties, express or implied, including but not limited to
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </p>

            <p className="text-center">4. Limitation of Liability</p>

            <p className="text-center">
              To the maximum extent permitted by applicable law, FREE2LEARN and
              its owners, directors, employees, and agents shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages, including but not limited to damages for loss of profits,
              data, or use, arising out of or in any way connected with the use
              or performance of FREE2LEARN, even if advised of the possibility
              of such damages.
            </p>

            <p className="text-center">5. Indemnification</p>

            <p className="text-center">
              You agree to indemnify and hold FREE2LEARN and its owners,
              directors, employees, and agents harmless from any claims, losses,
              damages, liabilities, and expenses, including reasonable
              attorneys&apos; fees, arising out of or in connection with your use of
              FREE2LEARN or your violation of these Terms.
            </p>

            <p className="text-center">6. Modifications to the Terms</p>

            <p className="text-center">
              We reserve the right to modify these Terms at any time, and such
              modifications will be effective upon posting on FREE2LEARN. It is
              your responsibility to review these Terms periodically. Continued
              use of FREE2LEARN after any modifications to the Terms constitutes
              your acceptance of the modified Terms.
            </p>

            <p className="text-center">7. Termination</p>

            <p className="text-center">
              We may terminate or suspend your access to FREE2LEARN at any time,
              with or without cause, without prior notice or liability.
            </p>

            <p className="text-center">8. Governing Law</p>

            <p className="text-center">
              These Terms shall be governed by and construed in accordance with
              the laws of [Jurisdiction]. Any legal action or proceeding arising
              out of or relating to these Terms or FREE2LEARN shall be
              exclusively brought in the courts of [Jurisdiction].
            </p>

            <p className="text-center">9. Contact Us</p>

            <p className="text-center">
              If you have any questions or concerns regarding these Terms,
              please contact us at [contact email].
            </p>

            <p className="text-center">Effective Date: 07-02-2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
