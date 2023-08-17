import '../globals.css';
import React from "react";
import Providers from '@app/utils/provider';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <main className={'tw-container tw-mx-auto tw-px-4'}> <Providers>{children}</Providers></main>
    );
}
