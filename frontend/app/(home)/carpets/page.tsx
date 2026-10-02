import React from 'react';
import Sections from '@/components/carpet/Sections';

const page = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const sort = resolvedSearchParams?.sort || 'default';

  return (
    <div>
      <Sections sort={sort} />
    </div>
  );
};

export default page;