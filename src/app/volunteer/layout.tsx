import '../globals.css';
import React from "react";

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <main className={'tw-container tw-mx-auto tw-px-4'}>{children}</main>
    );
}