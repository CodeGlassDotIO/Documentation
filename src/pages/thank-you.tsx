import { type ReactNode } from 'react';

import "./thank-you.css";
import Layout from '@theme/Layout';


export default function Home(): ReactNode {
  return (
    <Layout>
      <section className="thank-you">
        <h1>Thank you for your purchase</h1>
        <p>
          Your order has been successfully processed. You will receive a confirmation
          email shortly with your account details.
        </p>

        <p>
          If you haven't downloaded CodeGlass yet, you can get started here:{' '}
          <a
            href="https://github.com/CodeGlassDotIO/CodeGlass"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CodeGlass from GitHub
          </a>.
        </p>

        <p>
          Once installed, simply log in using the account details sent to your email.
        </p>

        <p>
          If you run into any issues or have questions, feel free to{' '}
          <a href="./contact">contact us</a>.
        </p>
      </section>S
  </Layout>
  );
}