// Navbar.tsx
import React from 'react';
import Link from 'next/link';
import { MountainIcon } from '@/components/ui/icons'; // Import your MountainIcon component

export function Navbar() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
            <div className="flex items-center justify-between w-full">
                <Link href="/" className="flex items-center justify-center" prefetch={false}>
                    <MountainIcon className="size-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="flex gap-4 sm:gap-6">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Features
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Pricing
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
