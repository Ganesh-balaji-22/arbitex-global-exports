import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    contactMethod: "",
    message: "",
  });

  const categories = [
    "Fruits & Vegetables",
    "Spices Products",
    "Grocery Products",
    "Namkeen & Frozen",
    "Handicraft Products",
    "Copper Products",
    "Imitation Jewellery",
    "Furniture",
    "Leather Products",
    "Garment Products",
    "Ceramic & Stone",
    "General Inquiry",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      emailjs.init("f73K88UTMa522x8rC");

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        category: formData.category,
        contact_method: formData.contactMethod,
        message: formData.message,
        to_email: "Arbitexglobal@gmail.com",
      };

      await emailjs.send(
        "service_3p4qh0j",
        "template_y5xeois",
        templateParams
      );

      toast.success("Message sent successfully! We'll contact you soon.");
      
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        category: "",
        contactMethod: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-24" id="contact">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for export inquiries, quotes, or any questions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gradient-gold">
                Get In Touch
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Address</h3>
                    <p className="text-muted-foreground">
                      29/30, Diwan Bahadur Rd, near Bharat Petroleum bunk,<br />
                      R.S. Puram, Coimbatore, Tamil Nadu 641002
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                    <a
                      href="tel:+919751912197"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +91 9751912197
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Send className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">WhatsApp</h3>
                    <a
                      href="https://wa.me/919751912197"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                    <a
                      href="mailto:Arbitexglobal@gmail.com"
                      className="text-muted-foreground hover:text-primary"
                    >
                      Arbitexglobal@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold mb-4 text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/ganeshbalaji22/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/ajay_arulkumaran?igsh=MWt5cnFrMTN3bzM2ag=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h2 className="text-2xl font-bold mb-6 text-gradient-gold">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">Product/Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="contactMethod">Preferred Contact Method</Label>
                  <Select
                    value={formData.contactMethod}
                    onValueChange={(value) =>
                      setFormData({ ...formData, contactMethod: value })
                    }
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="Select contact method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message / Specifications *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-background"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-background font-semibold hover:opacity-90"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
