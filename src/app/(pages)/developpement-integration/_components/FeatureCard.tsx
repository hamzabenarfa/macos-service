"use client";

import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    children: React.ReactNode;
    icon?: LucideIcon;
}

export default function FeatureCard({ title, children, icon: Icon }: FeatureCardProps) {
    return (
        <div className="rounded-xl bg-white shadow-lg px-6 py-16 space-y-4 flex flex-col justify-center items-start w-80">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl">{title}</h1>
                {Icon && <Icon />}
            </div>
            <p>{children}</p>
        </div>
    );
}