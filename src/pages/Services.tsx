import { Truck, Ship, Plane, FileCheck, Thermometer, Award, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Import/Export Brokerage",
      description: "Comprehensive brokerage services facilitating smooth international trade transactions with competitive rates and expert guidance.",
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description: "Efficient customs clearance handling all documentation, tariffs, and regulatory compliance to expedite your shipments.",
    },
    {
      icon: Ship,
      title: "Freight Forwarding (Sea)",
      description: "Reliable ocean freight solutions with full container load (FCL) and less than container load (LCL) options worldwide.",
    },
    {
      icon: Plane,
      title: "Air Freight Services",
      description: "Fast and secure air cargo services for time-sensitive shipments with door-to-door tracking capabilities.",
    },
    {
      icon: Truck,
      title: "Land Transportation",
      description: "Complete land logistics solutions including cross-border trucking and last-mile delivery services.",
    },
    {
      icon: Thermometer,
      title: "Cold Chain Management",
      description: "Temperature-controlled logistics for perishable goods ensuring quality from origin to destination.",
    },
    {
      icon: Award,
      title: "Quality Assurance & Inspection",
      description: "Rigorous quality control processes and third-party inspections to ensure export standards are met.",
    },
    {
      icon: FileCheck,
      title: "Documentation & Compliance",
      description: "Complete documentation support including bills of lading, certificates of origin, and compliance verification.",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "Global Trade Inc.",
      country: "USA",
      rating: 5,
      text: "Arbitex has been our trusted partner for 3 years. Their attention to detail and commitment to timely delivery is exceptional.",
    },
    {
      name: "Maria Garcia",
      company: "EuroFood Imports",
      country: "Spain",
      rating: 5,
      text: "Outstanding service! The quality of products and professionalism in handling cold chain logistics is remarkable.",
    },
    {
      name: "Ahmed Al-Rashid",
      company: "Middle East Trading Co.",
      country: "UAE",
      rating: 5,
      text: "Highly reliable export partner. Their documentation and compliance support makes international trade seamless.",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive export and logistics solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all group"
              >
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Terms Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-gold">
              Trade Terms We Support
            </h2>
            <p className="text-muted-foreground text-lg">
              Flexible international trade terms to suit your requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-8 rounded-xl border border-border text-center">
              <h3 className="text-2xl font-bold text-primary mb-3">FOB</h3>
              <p className="text-muted-foreground">Free On Board - Goods delivered on board vessel at port of shipment</p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border text-center">
              <h3 className="text-2xl font-bold text-primary mb-3">CIF</h3>
              <p className="text-muted-foreground">Cost, Insurance & Freight - Delivered to destination port with insurance</p>
            </div>
            <div className="bg-background p-8 rounded-xl border border-border text-center">
              <h3 className="text-2xl font-bold text-primary mb-3">CFR</h3>
              <p className="text-muted-foreground">Cost & Freight - Delivered to destination port without insurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gradient-gold">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Trusted by businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  <p className="text-sm text-primary">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
