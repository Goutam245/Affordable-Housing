import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Home,
  Landmark,
  FileCheck
} from "lucide-react";
import heroCommunity from "@/assets/hero-community.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const stats = [
  { value: "12,500+", label: "Units Developed", icon: Building2 },
  { value: "45+", label: "Cities Served", icon: MapPin },
  { value: "25,000+", label: "Families Housed", icon: Users },
  { value: "38", label: "Years of Experience", icon: Award },
];

const programs = [
  { name: "LIHTC", description: "Low-Income Housing Tax Credit" },
  { name: "Section 8", description: "Project-Based Vouchers" },
  { name: "HOME", description: "HOME Investment Partnerships" },
  { name: "CDBG", description: "Community Development Block Grant" },
];

const featuredProjects = [
  {
    name: "Riverside Commons",
    location: "Atlanta, GA",
    units: 156,
    type: "Family Housing",
    image: project1,
    funding: "LIHTC / Section 8",
  },
  {
    name: "Meadowbrook Senior Living",
    location: "Charlotte, NC",
    units: 88,
    type: "Senior Housing",
    image: project2,
    funding: "LIHTC / HOME",
  },
  {
    name: "Parkview Family Community",
    location: "Nashville, TN",
    units: 124,
    type: "Mixed-Income",
    image: project3,
    funding: "LIHTC / CDBG",
  },
];

const certifications = [
  "NAHB Certified",
  "HUD Approved",
  "LIHTC Specialist",
  "Fair Housing Certified",
  "Green Building Certified",
  "ADA Compliant",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCommunity})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="container-wide relative z-10 py-20">
          <div className="max-w-2xl">
            <p className="text-primary-foreground/90 font-medium mb-4 tracking-wide uppercase text-sm">
              Government-Funded Housing Experts
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Building Quality Affordable Housing Communities
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              For over 38 years, HIG has partnered with housing authorities and government 
              agencies to create sustainable, dignified housing for families across America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 bg-surface-light border-b border-border">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl font-serif text-foreground italic">
              "Our mission is to provide quality, affordable housing that strengthens 
              communities and empowers families to achieve stability and success."
            </h2>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <stat.icon className="h-10 w-10 text-secondary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Programs Expertise */}
      <section className="section-padding bg-surface-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Government Programs Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep experience navigating federal, state, and local affordable housing programs
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div 
                key={program.name}
                className="bg-card p-6 rounded-lg border border-border text-center hover:shadow-trust transition-shadow"
              >
                <Landmark className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">{program.name}</h3>
                <p className="text-sm text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A selection of our recently completed affordable housing communities
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-secondary font-medium mb-2">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground mb-4">
                    <p>{project.units} Units • {project.type}</p>
                    <p>Funding: {project.funding}</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/portfolio">View Details</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HIG */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Housing Authorities Choose HIG
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                We understand the complexities of government-funded housing development. 
                Our track record of on-time, on-budget delivery and full regulatory 
                compliance makes us a trusted partner for housing authorities nationwide.
              </p>
              <ul className="space-y-4">
                {[
                  "38 years of consistent performance",
                  "100% compliance record with HUD regulations",
                  "Proven ability to navigate complex funding structures",
                  "Strong relationships with state housing finance agencies",
                  "In-house compliance and asset management team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold text-lg mb-2">Full Bonding</h3>
                <p className="text-sm text-primary-foreground/80">$50M+ bonding capacity</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 text-center">
                <FileCheck className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold text-lg mb-2">Licensed</h3>
                <p className="text-sm text-primary-foreground/80">In all 50 states</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 text-center">
                <Home className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold text-lg mb-2">On-Time Delivery</h3>
                <p className="text-sm text-primary-foreground/80">98% on-schedule completion</p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur rounded-lg p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <h3 className="font-bold text-lg mb-2">Award Winning</h3>
                <p className="text-sm text-primary-foreground/80">15+ industry awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 bg-surface-light border-y border-border">
        <div className="container-wide">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Certifications & Accreditations
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert) => (
              <span key={cert} className="trust-badge">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="bg-surface-light rounded-2xl p-8 md:p-12 text-center border border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact our development team to discuss your next affordable housing project. 
              We respond to all RFP and RFQ inquiries within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="trust" size="lg" asChild>
                <Link to="/contact">
                  Request Qualification Package
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio">
                  Download Capability Statement
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
