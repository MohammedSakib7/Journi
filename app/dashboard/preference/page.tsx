'use client';
import PForm from "@/app/ui/pForm";
import React from "react";
import { redirect } from "next/navigation";


interface PreferenceProps {
    formdata: any; // Replace 'any' with a more specific type if possible
}

export default function Preference({ formdata }: PreferenceProps) {
    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        try {
            // TODO: fetch the api 
            const response = await fetch('/api/submit', {
                method: 'POST',
                body: formdata,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            // redirect('/schedule?data=${encode}')
            redirect(`/dashboard/schedule?data=${encodeURIComponent(JSON.stringify(result))}`);

        } catch(error) {
            console.error('Error submitting form: ', error)
        }

        // Get the value of a specific input field
        // const destinationValue = formData.get('destination') as string | null;

        // console.log('Destination:', destinationValue);
    }

    return (
        <div className="w-full max-w-3xl mx-auto px-3 md:px-4 py-6">
            <form onSubmit={onSubmit}>
                <PForm />
            </form>
        </div>
    );
}