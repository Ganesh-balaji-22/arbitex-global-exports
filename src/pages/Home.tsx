import HeroSlider from "@/components/HeroSlider";
import { Link } from "react-router-dom";
import { Globe, Shield, Truck, Award } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Exporting to 50+ countries across all continents with reliable logistics partners.",
    },
    {
      icon: Shield,
      title: "Certified & Compliant",
      description: "DGFT, APEDA, MSME, and industry certifications ensuring quality and compliance.",
    },
    {
      icon: Truck,
      title: "Multi-Modal Logistics",
      description: "Land, sea, and air freight solutions tailored to your specific requirements.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous quality control and transparent documentation at every step.",
    },
  ];

  return (
    <div>
      <HeroSlider />

      {/* Features Section */}
      <section className="py-20 bg-background" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-gold">
              Why Choose Arbitex?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your trusted partner for seamless global trade and export solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all group"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-background">
            Ready to Go Global?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-background/90 max-w-2xl mx-auto">
            Let's discuss your export requirements and create a customized solution for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-background text-primary font-semibold rounded-lg hover:bg-background/90 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
