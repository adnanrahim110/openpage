import { services } from "@/constants/services";
import Pagelayout from "./Pagelayout";


export async function generateStaticParams() {
  return services.map(({ link }) => ({
    serviceSlug: link.replace(/^\//, ""),
  }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  const service = services.find((s) => s.link.replace("/", "") === serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service post could not be found.",
    };
  }
  return {
    title: service.title,
  };
}

const ServicePage = async ({ params }) => {

  const { serviceSlug } = await params;
  console.log(serviceSlug);
  const service = services.find((s) => s.link.replace("/", "") === serviceSlug);

  if (!service) return notFound();
  return (
    <Pagelayout service={service} />
  )
}

export default ServicePage
