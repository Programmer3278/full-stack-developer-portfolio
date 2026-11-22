import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/portfolio/Portfolio";

const title = "Abdulrasheed Abubakar — Full Stack Web Developer";
const description =
  "Full stack web developer in Katsina, Nigeria. See Payloow (fintech) and Arewaflix (streaming), built with Node.js, React, React Native, FastAPI and PostgreSQL.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});
