import { Volunteer } from "@/data/volunteer";

export function VolunteerEntry({ volunteer }: { volunteer: Volunteer}) {
    return (
        <div className="grid grid-cols-4 gap-x-2">
            <span className="text-xs text-zinc-500 mt-1">
                {volunteer.date}
            </span>
            
            <div className="col-span-3 flex flex-col">
                <h3 className="text-base front-sherif">
                    {volunteer.title} -{" "}
                    {volunteer.organisationUrl ? (
                        <a
                            href={volunteer.organisationUrl}
                            className="hover:text-zinc-600 transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {volunteer.organisation}
                        </a>
                    ) : (
                        volunteer.organisation
                    )}
                </h3>

                {volunteer.description && (
                    <p className="text-sm text-zinc-600 leading-relaxed mt-2">
                        {volunteer.description}
                    </p>
                )}
            </div>
        </div>
    );
}