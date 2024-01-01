import { Link, type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Hello there </h1>
      <Link to="/about">About</Link>
      <StaticImage
        width={500}
        src="../images/red-bull.jpeg"
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
