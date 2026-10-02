// app/carpets/[slug]/page.tsx

import React from 'react';
import Section3 from "../../../../components/carpet/Section3";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await the promise here

  return (
    <div>
      {/* Pass the slug as a prop to Section3 */}
      <Section3 slug={slug} />
    </div>
  );
}