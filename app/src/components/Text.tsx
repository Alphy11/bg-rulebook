import React from 'react';

type ContentBodyProps = {
    content: NonNullable<React.ReactNode>[];
};

export function ContentBody({ content }: ContentBodyProps) {
    return (
        <>
            {content.map((line, i) => (
                // we cna use index here since it is static data
                <div key={i}>{line}</div>
            ))}
        </>
    );
}

interface TitleBodyProps {
    children: React.ReactNode;
}

export function TitleBody({ children }: TitleBodyProps) {
    return <div className="font-bold">{children}</div>;
}
