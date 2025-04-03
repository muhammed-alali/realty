import BlogDetay from "@/components/externalPages/detayils/blogDetay";

export default async function Detay({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  return <BlogDetay />;
}
