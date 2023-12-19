import { Link } from "gatsby";
import * as React from "react";

const AboutPage = () => {
  return (
    <main>
      <h1 className="text-red-600">About Me</h1>
      <Link to="/">Back to home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
