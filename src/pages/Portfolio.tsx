import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MapPin, 
  Building2, 
  Calendar, 
  Users, 
  Filter,
  ArrowRight,
  ChevronDown
} from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import communityCenter from "@/assets/community-center.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import communityGarden from "@/assets/community-garden.jpg";

type ProjectStatus = "all" | "completed" | "construction" | "planning";
type FundingType = "all" | "lihtc" | "section8" | "mixed";

const projects = [
  {
    id: 1,
    name: "Riverside Commons",
    location: "Atlanta, GA",
    units: 156,
    type: "Family Housing",
    status: "completed" as const,
    funding: "lihtc" as const,
    fundingLabel: "LIHTC / Section 8",
    completionDate: "2023",
    demographic: "Families with children",
    image: project1,
    description: "A vibrant family community featuring modern amenities, on-site childcare, and comprehensive resident services.",
  },
  {
    id: 2,
    name: "Meadowbrook Senior Living",
    location: "Charlotte, NC",
    units: 88,
    type: "Senior Housing",
    status: "completed" as const,
    funding: "lihtc" as const,
    fundingLabel: "LIHTC / HOME",
    completionDate: "2022",
    demographic: "Seniors 62+",
    image: project2,
    description: "Accessible senior housing with community spaces, wellness programs, and transportation services.",
  },
  {
    id: 3,
    name: "Parkview Family Community",
    location: "Nashville, TN",
    units: 124,
    type: "Mixed-Income",
    status: "completed" as const,
    funding: "mixed" as const,
    fundingLabel: "LIHTC / CDBG",
    completionDate: "2023",
    demographic: "Mixed-income families",
    image: project3,
    description: "Award-winning mixed-income development with playground, community center, and green spaces.",
  },
  {
    id: 4,
    name: "Harbor View Apartments",
    location: "Savannah, GA",
    units: 200,
    type: "Family Housing",
    status: "construction" as const,
    funding: "section8" as const,
    fundingLabel: "Section 8 / HOME",
    completionDate: "2025 (Est.)",
    demographic: "Low-income families",
    image: communityCenter,
    description: "Currently under construction, this community will feature waterfront views and extensive amenities.",
  },
  {
    id: 5,
    name: "Oakwood Terrace",
    location: "Birmingham, AL",
    units: 96,
    type: "Senior Housing",
    status: "completed" as const,
    funding: "lihtc" as const,
    fundingLabel: "LIHTC / State HTC",
    completionDate: "2021",
    demographic: "Seniors 55+",
    image: apartmentInterior,
    description: "Modern senior living community with accessible design and on-site health services.",
  },
  {
    id: 6,
    name: "Summit Gardens",
    location: "Knoxville, TN",
    units: 144,
    type: "Mixed-Income",
    status: "planning" as const,
    funding: "mixed" as const,
    fundingLabel: "LIHTC / CDBG / HOME",
    completionDate: "2026 (Est.)",
    demographic: "Mixed-income families",
    image: communityGarden,
    description: "Planned sustainable community with community gardens, walking trails, and energy-efficient design.",
  },
];

const statusLabels = {
  all: "All Projects",
  completed: "Completed",
  construction: "Under Construction",
  planning: "In Planning",
};

const fundingLabels = {
  all: "All Funding Types",
  lihtc: "LIHTC",
  section8: "Section 8",
  mixed: "Mixed Funding",
};

export default function Portfolio() {
  const [statusFilter, setStatusFilter] = useState<ProjectStatus>("all");
  const [fundingFilter, setFundingFilter] = useState<FundingType>("all");

  const filteredProjects = projects.filter((project) => {
    const statusMatch = statusFilter === "all" || project.status === statusFilter;
    const fundingMatch = fundingFilter === "all" || project.funding === fundingFilter;
    return statusMatch && fundingMatch;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Explore our comprehensive portfolio of affordable housing developments 
              across the Southeast and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-surface-light border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">12,500+</div>
              <div className="text-sm text-muted-foreground">Total Units</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">85+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">45+</div>
              <div className="text-sm text-muted-foreground">Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">$2.5B+</div>
              <div className="text-sm text-muted-foreground">Total Development Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-background border-b border-border sticky top-20 z-40">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as ProjectStatus)}
                  className="appearance-none bg-card border border-border rounded-md px-4 py-2 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {Object.entries(statusLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
              <div className="relative">
                <select
                  value={fundingFilter}
                  onChange={(e) => setFundingFilter(e.target.value as FundingType)}
                  className="appearance-none bg-card border border-border rounded-md px-4 py-2 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {Object.entries(fundingLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
            <div className="text-sm text-muted-foreground ml-auto">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${project.status === 'completed' ? 'bg-secondary text-secondary-foreground' : ''}
                      ${project.status === 'construction' ? 'bg-amber-500 text-white' : ''}
                      ${project.status === 'planning' ? 'bg-primary text-primary-foreground' : ''}
                    `}>
                      {statusLabels[project.status]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2 text-sm border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{project.units} Units • {project.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{project.demographic}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{project.completionDate}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-1">Funding Sources</p>
                    <p className="text-sm font-medium text-primary">{project.fundingLabel}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects match your current filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setStatusFilter("all");
                  setFundingFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-light">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interested in Partnering With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download our capability statement or contact our development team to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Download Capability Statement
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
