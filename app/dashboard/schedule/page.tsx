// pages/result-page.tsx
import { useRouter } from 'next/router';
import React from 'react';

const ResultPage = () => {
    const router = useRouter();
    const { data } = router.query;
    const processedData = data ? JSON.parse(data as string) : {};

    return (
        <div>
            <h1>Processed Data</h1>
            <pre>{JSON.stringify(processedData, null, 2)}</pre>
        </div>
    );
};

export default ResultPage;