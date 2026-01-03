import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Camera, 
  Building2, 
  Users, 
  Home,
  Hammer,
  PartyPopper,
  Grid,
  ArrowRight,
  X
} from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import communityCenter from "@/assets/community-center.jpg";
import apartmentInterior from "@/assets/apartment-interior.jpg";
import communityGarden from "@/assets/community-garden.jpg";
import ribbonCutting from "@/assets/ribbon-cutting.jpg";
import heroCommunity from "@/assets/hero-community.jpg";

type GalleryCategory = "all" | "communities" | "interiors" | "amenities" | "construction" | "events";

const categories = [
  { id: "all" as const, label: "All Photos", icon: Grid },
  { id: "communities" as const, label: "Completed Communities", icon: Building2 },
  { id: "interiors" as const, label: "Unit Interiors", icon: Home },
  { id: "amenities" as const, label: "Community Spaces", icon: Users },
  { id: "construction" as const, label: "Construction", icon: Hammer },
  { id: "events" as const, label: "Events", icon: PartyPopper },
];

const galleryImages = [
  {
    id: 1,
    src: heroCommunity,
    alt: "Aerial view of Riverside Commons community",
    category: "communities" as const,
    title: "Riverside Commons",
    location: "Atlanta, GA",
  },
  {
    id: 2,
    src: project1,
    alt: "Modern apartment building exterior",
    category: "communities" as const,
    title: "Oakwood Terrace",
    location: "Birmingham, AL",
  },
  {
    id: 3,
    src: project2,
    alt: "Senior living community walkway",
    category: "communities" as const,
    title: "Meadowbrook Senior Living",
    location: "Charlotte, NC",
  },
  {
    id: 4,
    src: project3,
    alt: "Family community with playground",
    category: "amenities" as const,
    title: "Parkview Family Community",
    location: "Nashville, TN",
  },
  {
    id: 5,
    src: apartmentInterior,
    alt: "Modern apartment living room and kitchen",
    category: "interiors" as const,
    title: "Two-Bedroom Unit Interior",
    location: "Standard Floor Plan",
  },
  {
    id: 6,
    src: communityCenter,
    alt: "Community center with seating and kitchen",
    category: "amenities" as const,
    title: "Community Center",
    location: "Riverside Commons, Atlanta",
  },
  {
    id: 7,
    src: communityGarden,
    alt: "Residents in community garden",
    category: "amenities" as const,
    title: "Community Garden",
    location: "Summit Gardens, Knoxville",
  },
  {
    id: 8,
    src: ribbonCutting,
    alt: "Ribbon cutting ceremony with officials",
    category: "events" as const,
    title: "Grand Opening Ceremony",
    location: "Meadowbrook Senior Living, 2022",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = galleryImages.filter(
    (image) => activeCategory === "all" || image.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero text-primary-foreground section-padding">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Explore our portfolio through professional photography of completed 
              communities, unit interiors, amenities, and development milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-surface-light border-b border-border sticky top-20 z-40">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary'
                  }
                `}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm">{image.title}</p>
                    <p className="text-white/80 text-xs">{image.location}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="h-5 w-5 text-white" />
                </div>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div 
            className="max-w-5xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70">
              <p className="text-white font-medium">{selectedImage.title}</p>
              <p className="text-white/80 text-sm">{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}

      {/* Download Section */}
      <section className="section-padding bg-surface-light">
        <div className="container-narrow text-center">
          <Camera className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground mb-4">
            High-Resolution Images
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            High-resolution versions of these images are available for press releases, 
            proposals, and official publications. Contact our communications team for access.
          </p>
          <Button variant="trust" size="lg" asChild>
            <Link to="/contact">
              Request Image Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            See Our Work in Person
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule a tour of one of our completed communities to experience our quality firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="trust" size="lg" asChild>
              <Link to="/contact">
                Schedule a Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
