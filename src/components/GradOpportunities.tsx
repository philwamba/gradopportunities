import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

type Opportunity = {
    title: string;
    institution: string;
    description: string;
    postedDate: string;
};

type OpportunityCardProps = Opportunity;

export default function GraduateSchoolOpportunities() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 font-sans">
            <header className="bg-blue-800 text-white py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-center">Graduate School Opportunities</h1>
            </header>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <p className="text-gray-700 mb-4">
                        Graduate School Opportunities Listings will be kept for a month after being posted or until their deadline
                        (if listed). I do not post positions that require a masters degree, as this site is aimed at undergraduates.
                    </p>
                    <div className="flex items-center justify-center">
                        <Link
                            href="#"
                            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            <Mail className="mr-2" size={20} />
                            Send unlisted opportunities
                        </Link>
                    </div>
                </section>

                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
                    <p className="text-yellow-700">
                        <strong>N.B.</strong> This webpage crashed, and I have rebuilt it starting on 1/17/25.
                    </p>
                </div>

                <div className="space-y-8">
                    {opportunities.map((opportunity, index) => (
                        <OpportunityCard key={index} {...opportunity} />
                    ))}
                </div>
            </main>

            <footer className="bg-blue-800 text-white py-4 px-4 sm:px-6 lg:px-8 mt-12">
                <div className="flex justify-center">
                    <Link href="/graduate-school" className="inline-flex items-center text-white hover:underline">
                        <ArrowLeft className="mr-2" size={20} />
                        Return to Graduate School Page
                    </Link>
                </div>
            </footer>
        </div>
    )
}

function OpportunityCard({ title, institution, description, postedDate }: OpportunityCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-xl">
            <div className="bg-green-700 text-white px-6 py-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-green-100">{institution}</p>
            </div>
            <div className="p-6">
                <div className="mt-3 text-gray-600">
                    <p className="text-sm">{description}</p>
                </div>
            </div>
            <div className="bg-gray-100 px-6 py-4">
                <p className="text-sm text-gray-600">Posted {postedDate}</p>
            </div>
        </div>
    )
}

const opportunities: Opportunity[] = [
    {
        title: "MS position - elk survival",
        institution: "University of Nevada Reno",
        description: `Project description and responsibilities: We seek a graduate research assistant (MS student) in wildlife ecology to study the contributions of trace mineral elements and space use on elk survival in Nevada. The research project seeks to understand potential causes of puzzling springtime mortality of elk in northern Nevada that may contribute to population declines. In collaboration with staff at the Nevada Department of Wildlife (NDOW), the student will evaluate whether spring mortality is driven by trace mineral deficiencies, novel diseases, space use, and/or landscape-scale factors. The student will be based out of the Nevada Cooperative Fish and Wildlife Research Unit (NVCFWRU) at the University of Nevada, Reno (UNR) and will have opportunity to pursue their MS degree through the Department of Natural Resources and Environmental Sciences or the Ecology, Evolution, and Conservation Biology programs. The student will be advised by Dr. Brian Folt at the NVCFWRU at UNR and will be expected to take classes, assist with field work, contribute to annual reports, write a MS thesis, publish at least one peer-reviewed journal article, give presentations to cooperators and at conferences, and enthusiastically participate in various academic communities at UNR, among other duties.`,
        postedDate: "1/18/25",
    },
    {
        title: "Master's students in Applied Ecology and Conservation Ecology",
        institution: "Frostburg State University",
        description: `Frostburg State University is happy to announce several new graduate positions becoming available for Fall 2025. In addition, we are launching a new scholarship program to encourage regional professionals in the Natural Resources to obtain a Master's, taking classes part-time for three years. Several MS positions in Applied Ecology and Conservation Biology are available. We are specifically seeking candidates to join the Parasites and Plastics Ecology Group, with at least three funded graduate research positions available.`,
        postedDate: "1/18/25",
    },
    {
        title: "MS Assistantship in Termite Methane Emissions",
        institution: "Utah State University",
        description: `Our group is recruiting a MS student interested in studying termite methane emissions at Utah State University. This position focuses on studying termite methane emissions at the individual species level and exploring the variations in species-specific termite methane emissions in relation to termite gut microbiomes. Fieldwork will be conducted across tropical savannas and forests in the Republic of Congo. The graduate student will have opportunities to collaborate with diverse groups of researchers at Harvard University, the Cary Institute of Ecosystem Studies, and the Natural History Museum (London).`,
        postedDate: "1/17/25",
    },
    {
        title: "Ph.D. and M.S. Opportunities, Fisheries Ecology Lab",
        institution: "University of South Alabama, Dauphin Island, AL",
        description: `The Fisheries Ecology Lab led by Dr. Sean Powers of the Stokes School of Marine and Environmental Sciences at the University of South Alabama (USA) has opportunities starting Fall 2025 for qualified students who want to advance their education in marine fisheries sciences. The Fisheries Ecology Lab conducts basic and applied research on fisheries species in inshore and offshore areas (inshore sportfish to offshore reef fish and pelagics). The lab offers graduate assistantships for highly competitive students seeking Ph.D.'s. Opportunities are also available for M.S. seeking students on projects as internships or assistantships.`,
        postedDate: "1/17/25",
    },
]

