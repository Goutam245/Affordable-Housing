import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Building2, 
  Shield, 
  FileCheck, 
  Briefcase,
  GraduationCap,
  ArrowRight 
} from "lucide-react";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";

const timeline = [
  { year: "1985", event: "Founded in Atlanta, GA with first 24-unit project" },
  { year: "1992", event: "Expanded operations to 5 Southeastern states" },
  { year: "1998", event: "Completed 1,000th affordable housing unit" },
  { year: "2005", event: "Launched senior housing division" },
  { year: "2010", event: "Achieved $1B in cumulative development value" },
  { year: "2015", event: "Expanded to nationwide operations" },
  { year: "2020", event: "Reached 10,000+ units milestone" },
  { year: "2024", event: "Celebrating 38 years of community building" },
];

const leadership = [
  {
    name: "Marcus Thompson",
    title: "Chief Executive Officer",
    image: leader1,
    bio: "With over 25 years in affordable housing development, Marcus has led HIG through transformative growth. He serves on the NAHB Affordable Housing Board and holds certifications in LIHTC compliance and HUD program management.",
    credentials: ["MBA, Wharton School", "LIHTC Certified", "NAHB Board Member"],
  },
  {
    name: "Sandra Mitchell",
    title: "Chief Operating Officer",
    image: leader2,
    bio: "Sandra oversees all development operations and has successfully delivered over $800M in affordable housing projects. Her expertise in navigating complex funding structures has been instrumental in HIG's success.",
    credentials: ["MS, Real Estate Development", "LEED AP", "CPM Certified"],
  },
  {
    name: "David Rodriguez",
    title: "Chief Financial Officer",
    image: leader3,
    bio: "David brings 20+ years of experience in affordable housing finance. He manages investor relationships and oversees the financial structuring of all LIHTC and bond-financed developments.",
    credentials: ["CPA", "MBA Finance", "LIHTC Financial Specialist"],
  },
];

const affiliations = [
  "National Association of Home Builders (NAHB)",
  "National Council of State Housing Agencies (NCSHA)",
  "National Affordable Housing Management Association (NAHMA)",
  "Urban Land Institute (ULI)",
  "Enterprise Community Partners",
  "Local Initiatives Support Corporation (LISC)",
];

const licenses = [
  { type: "General Contractor License", coverage: "All 50 States" },
  { type: "Real Estate Development License", coverage: "All 50 States" },
  { type: "HUD Approved Developer", coverage: "Nationwide" },
  { type: "Section 8 Administrator", coverage: "Certified" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About HIG</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              For nearly four decades, HIG Affordable Housing Development has been 
              a trusted partner to housing authorities and government agencies, 
              delivering quality affordable housing communities across America.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  HIG Affordable Housing Development was founded in 1985 with a simple 
                  mission: to create quality housing that families can afford while 
                  meeting the highest standards of government compliance.
                </p>
                <p>
                  What began as a small regional developer has grown into a nationally 
                  recognized firm, having completed over 12,500 affordable housing units 
                  across 45+ cities. Our success is built on unwavering commitment to 
                  quality, regulatory compliance, and community impact.
                </p>
                <p>
                  Today, HIG is a full-service affordable housing developer with expertise 
                  spanning LIHTC, Section 8, HOME, CDBG, and state housing programs. Our 
                  integrated approach—from acquisition through asset management—ensures 
                  seamless project delivery and long-term community success.
                </p>
              </div>
            </div>
            <div className="bg-surface-light rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Company Timeline</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-primary font-bold">
                      {item.year}
                    </div>
                    <div className="flex-1 pb-4 border-b border-border last:border-0">
                      <p className="text-foreground">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="section-padding bg-surface-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals with deep expertise in affordable housing development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader) => (
              <article key={leader.name} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                  <p className="text-secondary font-medium mb-4">{leader.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{leader.bio}</p>
                  <div className="space-y-2">
                    {leader.credentials.map((cred) => (
                      <div key={cred} className="flex items-center gap-2 text-sm">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Team Structure
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "Development Team", count: "25+", desc: "Project managers, coordinators, and acquisition specialists" },
              { icon: FileCheck, title: "Compliance Team", count: "15+", desc: "LIHTC specialists, fair housing experts, and auditors" },
              { icon: Briefcase, title: "Construction Management", count: "30+", desc: "Site managers, superintendents, and quality control" },
              { icon: Users, title: "Asset Management", count: "20+", desc: "Property managers and resident services coordinators" },
            ].map((dept) => (
              <div key={dept.title} className="bg-card p-6 rounded-lg border border-border text-center">
                <dept.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-1">{dept.title}</h3>
                <p className="text-2xl font-bold text-secondary mb-2">{dept.count}</p>
                <p className="text-sm text-muted-foreground">{dept.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="section-padding bg-surface-light">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Professional Affiliations
              </h2>
              <ul className="space-y-3">
                {affiliations.map((org) => (
                  <li key={org} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{org}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Licenses & Certifications
              </h2>
              <div className="space-y-4">
                {licenses.map((license) => (
                  <div key={license.type} className="bg-card p-4 rounded-lg border border-border">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-foreground">{license.type}</h4>
                        <p className="text-sm text-muted-foreground">{license.coverage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance & Bonding */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Shield className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">$50M+</h3>
                <p className="text-primary-foreground/80">Bonding Capacity</p>
              </div>
              <div>
                <FileCheck className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">$25M</h3>
                <p className="text-primary-foreground/80">Professional Liability Coverage</p>
              </div>
              <div>
                <Building2 className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">$100M</h3>
                <p className="text-primary-foreground/80">Umbrella Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-light">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Learn More About Our Work
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our mission and values or view our portfolio of completed projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/mission">
                Our Mission & Values
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
