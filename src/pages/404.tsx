import { HeadFC, Link, PageProps } from "gatsby";
import { FC } from "react";

const NotFoundPage: FC<PageProps> = () => {
  return (
    <main>
      <Link to="/">Go home</Link>.
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
