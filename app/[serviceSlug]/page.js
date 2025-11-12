import { terms } from "@/constants";
import { services } from "@/constants/services";
import { notFound } from "next/navigation";
import TermPageLayout from "./PageLayout";
import ServicePageLayout from "./ServicePageLayout";

export async function generateStaticParams() {
  const serviceParams = services.map(({ link }) => ({
    serviceSlug: link.replace(/^\//, ""),
  }));

  const termParams = terms.map(({ url }) => ({
    serviceSlug: url.replace(/^\//, ""),
  }));

  return [...serviceParams, ...termParams];
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;

  const service = services.find((s) => s.link.replace("/", "") === serviceSlug);
  if (service) {
    return {
      title: service.title,
    };
  }

  const term = terms.find((t) => t.url.replace("/", "") === serviceSlug);
  if (term) {
    return {
      title: term.title,
    };
  }

  return {
    title: "Page Not Found",
    description: "The requested page could not be found.",
  };
}

const DynamicPage = async ({ params }) => {
  const { serviceSlug } = await params;
  console.log(serviceSlug);

  const service = services.find((s) => s.link.replace("/", "") === serviceSlug);
  if (service) {
    return <ServicePageLayout service={service} />;
  }

  const term = terms.find((t) => t.url.replace("/", "") === serviceSlug);
  if (term) {
    return <TermPageLayout term={term} />;
  }

  return notFound();
}

export default DynamicPage
