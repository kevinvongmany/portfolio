import Animated from "./Animated";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Animated>
      <h1 className="mb-4 text-blue-500 ">Solution and software development</h1>
      <p className="text-xl">
        As a developer with over a decade's worth of technological experience, I
        often create content-driven integrations and tailored solutions for
        Content Management platforms.
      </p>
      <p className="text-xl mt-3">
        I have experience building solutions including front end webpages,
        dashboards, reporting tools, APIs and more.
      </p>
      <p className="text-xl mt-3">
        Check out some of my{" "}
        <Link to="/projects" className="text-blue-600">
          projects
        </Link>{" "}
        or my{" "}
        <Link to="/resume" className="text-blue-600">
          resume
        </Link>{" "}
        to find out more!
      </p>
      <p className="text-xl mt-3">
        You can also follow me on{" "}
        <a
          href="https://www.linkedin.com/in/kevin-vongmany"
          target="_blank"
          className="text-blue-600"
        >
          LinkedIn
        </a>{" "}
        or check out some of my home projects on{" "}
        <a
          href="https://github.com/kevinvongmany"
          target="_blank"
          className="text-blue-600"
        >
          GitHub
        </a>
        !
      </p>
    </Animated>
  );
}
