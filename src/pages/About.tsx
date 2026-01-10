import { CheckCircle, Target, Eye, Users } from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Mr. Ajay Arulkumaran",
      role: "Co-Founder",
      // image: "/assets/founders/founder_ajay.jpg",
      bio: "Committed to excellence in global trade, bringing expertise across operations, business development, and logistics.",
    },
    {
      name: "Mr. Ganesh Balaji",
      role: "Co-Founder",
      // image: "/assets/founders/founder_ganesh.jpg",
      bio: "Dedicated to delivering quality export solutions with comprehensive knowledge of international trade and compliance.",
    },
    {
      name: "Mr. Kevin Rhichard",
      role: "Co-Founder",
      // image: "/assets/founders/founder_kevin.jpg",
      bio: "Passionate about building trusted partnerships and ensuring seamless global logistics for every client.",
    },
  ];

  const certificates = [
    { name: "DGFT", image: "/assets/certificates/dgft.png" },
    { name: "APEDA", image: "/assets/certificates/apeda.png" },
    { name: "MSME", image: "/assets/certificates/msme.png" },
    { name: "FIEO", image: "/assets/certificates/fieo.png" },
    { name: "FICCI", image: "/assets/certificates/ficci.png" },
    { name: "GCCI", image: "/assets/certificates/gcci.png" },
    { name: "Udyog Aadhar", image: "/assets/certificates/udyog_aadhar.png" },
    { name: "GST", image: "/assets/certificates/gst.png" },
    { name: "FDA", image: "/assets/certificates/fda.png" },
    { name: "Spice Board", image: "/assets/certificates/spice_board.png" },
    { name: "Halal", image: "/assets/certificates/halal.png" },
    { name: "GMP", image: "/assets/certificates/gmp.png" },
  ];

  const strengths = [
    "Comprehensive export solutions across multiple product categories",
    "Global network spanning 50+ countries",
    "FOB, CIF, and CFR trade terms expertise",
    "Complete documentation and compliance support",
    "Quality assurance and traceability systems",
    "Competitive pricing and timely delivery",
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
              About Arbitex Global Exports
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in global trade, connecting businesses worldwide with quality products and reliable logistics solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the most trusted and innovative global export partner, connecting businesses across continents with quality products and exceptional service.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground">
                To deliver excellence in every shipment through transparent operations, quality assurance, and customer-centric solutions that drive global commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient-gold">
            Our Core Strengths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {strengths.map((strength, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">{strength}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-gradient-gold">
              Meet Our Founders
            </h2>
            <p className="text-muted-foreground text-lg">
              Led by experienced professionals committed to excellence in global trade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    // src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{founder.role}</p>
                  <p className="text-muted-foreground text-sm">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-gold">
              Certifications & Affiliations
            </h2>
            <p className="text-muted-foreground text-lg">
              Recognized and certified by leading industry authorities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border border-border hover:border-primary/50 hover:scale-105 transition-all flex items-center justify-center"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-auto max-h-20 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback: show certificate name as text
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const textNode = document.createElement('div');
                      textNode.textContent = cert.name;
                      textNode.className = 'text-muted-foreground text-sm font-medium text-center';
                      parent.appendChild(textNode);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
