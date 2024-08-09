'use client';
import PForm from "@/app/ui/pForm";
import React from "react";

interface PreferenceProps {
    formdata: any; // Replace 'any' with a more specific type if possible
}

export default function Preference({ formdata }: PreferenceProps) {
    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        // Get the value of a specific input field
        const destinationValue = formData.get('destination') as string | null;

        console.log('Destination:', destinationValue);
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={onSubmit}>
                <PForm />
            </form>
        </div>
    );
}