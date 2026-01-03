import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Shield, 
  Users, 
  Leaf, 
  DollarSign, 
  Home,
  CheckCircle2,
  ArrowRight,
  Scale,
  HandHeart
} from "lucide-react";

const coreValues = [
  {
    icon: Shield,
    title: "Quality & Compliance",
    description: "We maintain the highest standards of construction quality and regulatory compliance. Every project meets or exceeds HUD requirements, LIHTC standards, and local building codes.",
    points: [
      "100% compliance record with all federal programs",
      "Rigorous quality control at every construction phase",
      "Regular third-party inspections and audits",
      "Comprehensive documentation and reporting"
    ]
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "We build more than housing—we build communities. Our developments include amenities and services that support resident success and neighborhood revitalization.",
    points: [
      "On-site resident services and programs",
      "Community spaces that foster connection",
      "Local hiring and workforce development",
      "Partnerships with community organizations"
    ]
  },
  {
    icon: DollarSign,
    title: "Financial Responsibility",
    description: "We are careful stewards of public funds. Our track record of on-budget delivery and efficient operations maximizes the impact of every dollar invested.",
    points: [
      "Transparent budget reporting",
      "Competitive bidding processes",
      "Value engineering without quality compromise",
      "Long-term asset preservation"
    ]
  },
  {
    icon: Leaf,
    title: "Sustainable Development",
    description: "We design and build for long-term sustainability—both environmental and financial. Our communities are built to serve families for generations.",
    points: [
      "Energy-efficient building systems",
      "Green building certifications",
      "Sustainable site planning",
      "Low operating costs for residents"
    ]
  },
  {
    icon: Heart,
    title: "Resident Dignity",
    description: "Every family deserves a quality home. We design our communities to the same standards as market-rate housing, ensuring residents take pride in where they live.",
    points: [
      "Market-quality finishes and amenities",
      "Thoughtful architectural design",
      "Safe, well-maintained properties",
      "Responsive property management"
    ]
  }
];

export default function Mission() {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mission & Core Values</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Our mission guides every decision we make. Our values define how we work 
              with partners, communities, and the families we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center">
            <Home className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8">
              "To provide quality, affordable housing that strengthens communities, 
              empowers families to achieve stability and success, and creates lasting 
              positive change in the neighborhoods we serve."
            </p>
            <div className="h-1 w-24 bg-secondary mx-auto" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-surface-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="space-y-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card rounded-lg p-8 border border-border shadow-sm"
              >
                <div className="grid lg:grid-cols-[auto_1fr] gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-primary/10 rounded-lg">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="lg:hidden">
                      <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 hidden lg:block">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{value.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {value.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Commitment */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <HandHeart className="h-12 w-12 text-secondary mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Community Commitment
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We believe that affordable housing is more than shelter—it's the 
                  foundation for family stability, educational achievement, and 
                  economic mobility. Every community we develop is designed to 
                  support residents in building better lives.
                </p>
                <p>
                  Our commitment extends beyond construction. We partner with local 
                  organizations to provide resident services, support local hiring, 
                  and invest in neighborhood improvements that benefit the broader 
                  community.
                </p>
                <p>
                  We are proud to have housed over 25,000 families and served as a 
                  catalyst for positive change in communities across America.
                </p>
              </div>
            </div>
            <div className="bg-surface-light rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Our Community Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-primary">25,000+</div>
                  <div className="text-muted-foreground">Families housed in quality communities</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-primary">$2.5B</div>
                  <div className="text-muted-foreground">Invested in underserved communities</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-primary">5,000+</div>
                  <div className="text-muted-foreground">Local jobs created through development</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Community organization partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding bg-secondary text-secondary-foreground">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Leaf className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sustainability Practices
            </h2>
            <p className="text-lg text-secondary-foreground/90 max-w-2xl mx-auto">
              Building for today while preserving resources for tomorrow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Energy Efficiency",
                points: ["ENERGY STAR certified appliances", "High-efficiency HVAC systems", "LED lighting throughout", "Enhanced insulation"],
              },
              {
                title: "Water Conservation",
                points: ["Low-flow fixtures", "Drought-resistant landscaping", "Stormwater management", "Water-efficient irrigation"],
              },
              {
                title: "Sustainable Materials",
                points: ["Recycled content materials", "Low-VOC paints and finishes", "Sustainable flooring", "Local sourcing when possible"],
              },
            ].map((category) => (
              <div key={category.title} className="bg-secondary-foreground/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equal Opportunity */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="bg-surface-light rounded-lg p-8 md:p-12 border border-border text-center">
            <Scale className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Equal Housing Opportunity
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              HIG is committed to providing equal housing opportunity in accordance with 
              the Fair Housing Act. We do not discriminate based on race, color, national 
              origin, religion, sex, familial status, disability, or any other protected 
              class. All qualified applicants receive equal consideration.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-4 py-2 border border-border rounded">Equal Housing Opportunity</span>
              <span className="px-4 py-2 border border-border rounded">Fair Housing Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-light">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Partner With a Values-Driven Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our mission and values aren't just words—they guide every project we undertake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/testimonials">See What Partners Say</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
