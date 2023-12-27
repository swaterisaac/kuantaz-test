'use client';

import { useSearchParams } from 'next/navigation';

export default function FormData() {
  const queryParams = useSearchParams();

  return (
    <div>
      {Array.from(queryParams.keys()).map(key => (
        <p key={key}>
          {key}: {queryParams.get(key)}
        </p>
      ))}
    </div>
  );
}