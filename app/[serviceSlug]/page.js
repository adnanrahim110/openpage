import TermPageLayout from "@/app/[serviceSlug]/PageLayout";
import ServicePageLayout from "@/app/[serviceSlug]/ServicePageLayout";
import { terms } from "@/constants";
import { services } from "@/constants/services";
import { notFound } from "next/navigation";

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
      title: service.metaTitle || `${service.title} | Open Page Publishing`,
      description: service.metaDesc && service.metaDesc,
      keywords: service.metaKeywords && service.metaKeywords,
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
