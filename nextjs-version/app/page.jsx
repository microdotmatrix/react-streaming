import { Suspense } from "react";
import Comments from "./Comments";

const fetchDescription = () => new Promise((resolve) => setTimeout(() => resolve("Product information ready for SEO"), 100));

export default async function Home() {
  const description = (await fetchDescription());

  return (
    <>
      <h2>Product Description</h2>
      <p>{description}</p>

      <h2>Comments</h2>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Comments />
      </Suspense>
    </>
  );
}
