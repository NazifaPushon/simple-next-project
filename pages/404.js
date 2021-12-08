import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className="not-found">
            <h1>0ppsss ......</h1>
            <h3> This page cannot be found </h3>
            <p>
                <Link href="/"><a >Go back</a></Link>
            </p>
        </div>
    );
};

export default notFound;