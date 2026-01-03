import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  FileText,
  Building2,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fundingSources = [
  "LIHTC (Low-Income Housing Tax Credit)",
  "Section 8 / Project-Based Vouchers",
  "HOME Investment Partnerships",
  "CDBG (Community Development Block Grant)",
  "State Housing Credits",
  "Bond Financing",
  "Mixed Funding Sources",
  "Other / Not Sure",
];

const projectTypes = [
  "New Construction - Family Housing",
  "New Construction - Senior Housing",
  "New Construction - Mixed-Income",
  "Preservation / Rehabilitation",
  "Adaptive Reuse",
  "RAD Conversion",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: "",
    contactName: "",
    title: "",
    email: "",
    phone: "",
    projectType: "",
    fundingSource: "",
    location: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Inquiry Submitted Successfully",
      description: "Our development team will respond within 48 hours.",
    });
    
    setFormData({
      organizationName: "",
      contactName: "",
      title: "",
      email: "",
      phone: "",
      projectType: "",
      fundingSource: "",
      location: "",
      timeline: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ready to discuss your next affordable housing project? Our development 
              team responds to all inquiries within 48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <a href="tel:1-800-555-0123" className="text-muted-foreground hover:text-primary transition-colors">
                      1-800-555-0123
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Toll-free nationwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:development@highousing.com" className="text-muted-foreground hover:text-primary transition-colors">
                      development@highousing.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">For project inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Headquarters</h3>
                    <p className="text-muted-foreground">
                      1200 Corporate Center Drive<br />
                      Suite 400<br />
                      Atlanta, GA 30339
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 p-6 bg-surface-light rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Capability Statement
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Building2 className="h-4 w-4 mr-2" />
                    Request RFP/RFQ Response
                  </Button>
                </div>
              </div>

              {/* Social Responsibility */}
              <div className="mt-6 p-6 bg-secondary/10 rounded-lg border border-secondary/20">
                <h3 className="font-semibold text-foreground mb-2">Our Commitment</h3>
                <p className="text-sm text-muted-foreground">
                  HIG is committed to equal opportunity in housing and employment. 
                  We welcome partnerships with MBE, WBE, and Section 3 contractors.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-2">Project Inquiry Form</h2>
                <p className="text-muted-foreground mb-8">
                  Complete this form and our development team will contact you within 48 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organizationName">Organization Name *</Label>
                      <Input
                        id="organizationName"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        required
                        placeholder="Housing Authority Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Person *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title / Position</Label>
                      <Input
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Executive Director"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@organization.gov"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 555-5555"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Project Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select project type...</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="fundingSource">Anticipated Funding Source</Label>
                      <select
                        id="fundingSource"
                        name="fundingSource"
                        value={formData.fundingSource}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select funding source...</option>
                        {fundingSources.map((source) => (
                          <option key={source} value={source}>{source}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Input
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      placeholder="e.g., RFP response due March 2024, construction start Fall 2024"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details / Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Please describe your project needs, any specific requirements, or questions for our team..."
                    />
                  </div>

                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <p>
                      Your information is secure and will only be used to respond to your inquiry. 
                      We do not share contact information with third parties.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    variant="trust" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-surface-light border-t border-border">
        <div className="container-wide">
          <div className="bg-muted rounded-lg overflow-hidden h-64 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                1200 Corporate Center Drive, Suite 400<br />
                Atlanta, GA 30339
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
