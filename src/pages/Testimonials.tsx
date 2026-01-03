import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Quote, 
  Building2, 
  Star, 
  ArrowRight,
  Award,
  Users,
  FileCheck
} from "lucide-react";
import leader1 from "@/assets/leader-1.jpg";
import leader2 from "@/assets/leader-2.jpg";
import leader3 from "@/assets/leader-3.jpg";

const testimonials = [
  {
    quote: "HIG has been an exceptional partner on three major LIHTC developments. Their attention to compliance, construction quality, and community engagement is unmatched. They consistently deliver on-time and on-budget.",
    author: "James Williams",
    title: "Executive Director",
    organization: "Georgia Housing Authority",
    category: "Housing Authority",
    image: leader1,
  },
  {
    quote: "Working with HIG on our Section 8 preservation project was seamless. Their expertise in navigating HUD requirements and their commitment to resident welfare made them the ideal development partner.",
    author: "Patricia Chen",
    title: "Director of Housing Development",
    organization: "Charlotte Housing Authority",
    category: "Government Official",
    image: leader2,
  },
  {
    quote: "HIG's financial transparency and performance reporting throughout the development process gave our investors complete confidence. Their track record speaks for itself.",
    author: "Robert Martinez",
    title: "Senior Vice President",
    organization: "Regional Housing Finance Agency",
    category: "Funding Agency",
    image: leader3,
  },
  {
    quote: "The Riverside Commons development has transformed our neighborhood. HIG didn't just build housing—they built a community with spaces and programs that support our families.",
    author: "Angela Thompson",
    title: "Executive Director",
    organization: "Riverside Community Development Corp",
    category: "Community Organization",
  },
  {
    quote: "In 20 years of affordable housing finance, HIG stands out for their professionalism and reliability. Their projects consistently meet or exceed performance projections.",
    author: "Michael Foster",
    title: "Managing Director, Housing Finance",
    organization: "State Housing Finance Agency",
    category: "Funding Agency",
  },
  {
    quote: "HIG's approach to resident services and community building sets them apart. They understand that quality affordable housing is about more than just units—it's about creating opportunities.",
    author: "Dr. Sarah Mitchell",
    title: "Housing Policy Director",
    organization: "Urban Institute Southeast",
    category: "Government Official",
  },
];

const references = [
  {
    organization: "Georgia Housing Authority",
    contact: "James Williams, Executive Director",
    projects: "3 LIHTC Developments",
    available: "Available upon request",
  },
  {
    organization: "Charlotte Housing Authority",
    contact: "Patricia Chen, Director of Housing Development",
    projects: "2 Section 8 Projects",
    available: "Available upon request",
  },
  {
    organization: "Tennessee Housing Development Agency",
    contact: "Development Review Committee",
    projects: "5 LIHTC Developments",
    available: "Available upon request",
  },
  {
    organization: "Alabama Housing Finance Authority",
    contact: "Multifamily Programs Division",
    projects: "4 Mixed-Funding Projects",
    available: "Available upon request",
  },
];

const performanceMetrics = [
  { metric: "On-Time Completion Rate", value: "98%" },
  { metric: "On-Budget Performance", value: "97%" },
  { metric: "Compliance Audit Success", value: "100%" },
  { metric: "Investor Satisfaction", value: "4.9/5" },
];

export default function Testimonials() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimonials & References</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Hear from the housing authorities, government officials, and community 
              organizations who have partnered with HIG.
            </p>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-8 bg-surface-light border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {performanceMetrics.map((item) => (
              <div key={item.metric}>
                <div className="text-3xl font-bold text-primary">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partner Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What housing authorities and partners say about working with HIG
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article key={index} className="testimonial-card">
                <div className="flex items-start gap-4 mb-4">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  )}
                  <div>
                    <span className="text-xs font-medium text-secondary uppercase tracking-wide">
                      {testimonial.category}
                    </span>
                  </div>
                </div>
                
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <footer className="border-t border-border pt-4">
                  <cite className="not-italic">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-primary">{testimonial.organization}</div>
                  </cite>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section className="section-padding bg-surface-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional References
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contact information for verified references available upon request
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {references.map((ref, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border border-border">
                <div className="flex items-start gap-4">
                  <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{ref.organization}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{ref.contact}</p>
                    <p className="text-sm text-secondary">{ref.projects}</p>
                    <p className="text-xs text-muted-foreground mt-2 italic">{ref.available}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Award className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Awards & Recognition
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: "2023", award: "NAHB Pillars of the Industry Award", category: "Best Affordable Community" },
              { year: "2022", award: "Georgia Housing Association", category: "Developer of the Year" },
              { year: "2021", award: "Enterprise Green Communities", category: "Sustainability Excellence" },
              { year: "2020", award: "HUD Secretary's Award", category: "Excellence in Housing" },
              { year: "2019", award: "ULI Impact Award", category: "Community Development" },
              { year: "2018", award: "NAHMA Communities of Quality", category: "National Award" },
            ].map((award, index) => (
              <div key={index} className="bg-primary-foreground/10 rounded-lg p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-3 text-secondary" />
                <div className="text-sm font-medium text-primary-foreground/70 mb-1">{award.year}</div>
                <h3 className="font-bold mb-1">{award.award}</h3>
                <p className="text-sm text-primary-foreground/80">{award.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Letters Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center">
          <FileCheck className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Letters of Recommendation
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We maintain a portfolio of letters of recommendation from housing authorities, 
            funding agencies, and community partners. These letters are available as part 
            of our qualification package for RFP/RFQ responses.
          </p>
          <Button variant="trust" size="lg" asChild>
            <Link to="/contact">
              Request Qualification Package
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-light">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Become Our Next Success Story?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our development team to discuss how we can partner on your next affordable housing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
