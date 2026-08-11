export interface Volunteer {
    date: string;
    title: string;
    organisation: string;
    description: string;
    organisationUrl?: string;
}

export const volunteerData: Volunteer[] = [
    {
        date: "Feb 2022 - Present",
        title: "Founder",
        organisation: "Britain’s Tech and Trade Policy (BTTP)",
        description: "Consult with companies and individuals to shape and influence the UK's technology and trade policy.",
    },
    {
        date: "Nov 2025 - Present",
        title: "Founder",
        organisation: "Tech And Science Crisis Force",
        description: "Manage scientific advisory teams in response to global crises, providing expertise to aid decision making.",
    },
];