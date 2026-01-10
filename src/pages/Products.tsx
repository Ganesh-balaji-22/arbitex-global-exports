import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    {
      name: "Coco Peat & Coco-Based Products",
      slug: "coco_peat",
      description: "Premium coco peat and coco-based growing media for global horticulture markets.",
      image: "/assets/products/coco_peat/coco_peat_blocks.jpg",
      items: ["Coco Peat Blocks (5 kg)", "Coco Peat Blocks (650 g / 1 kg)", "Washed Low EC Coco Peat", "Coco Grow Bags", "Coco Peat Discs"],
    },
    {
      name: "Fresh Fruits",
      slug: "fruits",
      description: "Export-quality fresh fruits sourced from premium Indian farms.",
      image: "/assets/products/fruits/fruits_pomegranate.jpg",
      items: ["Pomegranate (Bhagwa)", "Banana (Cavendish)", "Mango (Alphonso / Kesar)", "Grapes", "Papaya"],
    },
    {
      name: "Fresh Vegetables",
      slug: "vegetables",
      description: "Farm-fresh vegetables meeting international quality standards.",
      image: "/assets/products/vegetables/vegetables_onion.jpg",
      items: ["Onion (Red / White)", "Potato", "Tomato", "Green Chilli", "Drumstick"],
    },
    {
      name: "Spices Products",
      slug: "spices",
      description: "Authentic Indian spices with rich aroma and superior quality.",
      image: "/assets/products/spices/spices_cardamom.jpg",
      items: ["Red Chilli (Teja / Sannam)", "Turmeric Fingers", "Turmeric Powder", "Cardamom", "Black Pepper"],
    },
    {
      name: "Rice & Cereals",
      slug: "rice",
      description: "Premium quality rice and cereals for global food markets.",
      image: "/assets/products/rice/rice_basmati.jpg",
      items: ["Basmati Rice (1121)", "Non-Basmati Rice (IR64 / Sona Masuri)", "Parboiled Rice", "Broken Rice", "Millets (Ragi / Bajra)"],
    },
    {
      name: "Pulses & Lentils",
      slug: "pulses",
      description: "High-quality pulses and lentils for nutritious food supply.",
      image: "/assets/products/pulses/pulses_toor.jpg",
      items: ["Urad Dal (Black Matpe)", "Toor Dal", "Moong Dal", "Chickpeas", "Masoor Dal"],
    },
    {
      name: "Grocery & Food Products",
      slug: "grocery",
      description: "Essential grocery items and processed food products for export.",
      image: "/assets/products/grocery/grocery_jaggery.jpg",
      items: ["Dry Fruits", "Jaggery", "Dehydrated Onion Flakes", "Coconut Copra", "Desiccated Coconut"],
    },
    {
      name: "Namkeen & Frozen Foods",
      slug: "namkeen_frozen",
      description: "Traditional Indian snacks and frozen food products.",
      image: "/assets/products/namkeen_frozen/namkeen_snacks.jpg",
      items: ["Frozen Vegetables", "Frozen Fruits", "Indian Namkeen Snacks", "Ready-to-Fry Products", "IQF Vegetables"],
    },
    {
      name: "Handicraft Products",
      slug: "handicraft",
      description: "Traditional Indian handicrafts and artisan products.",
      image: "/assets/products/handicraft/handicraft_wooden.jpg",
      items: ["Wooden Handicrafts", "Brass Handicrafts", "Decorative Art Items", "Home Décor Crafts", "Gift Articles"],
    },
    {
      name: "Cotton & Textile Products",
      slug: "cotton_textile",
      description: "Premium cotton and textile products for global markets.",
      image: "/assets/products/cotton_textile/cotton_fabric.jpg",
      items: ["Cotton Fabric", "Cotton Yarn", "Textile Fabrics", "Home Textiles", "Cotton Garments"],
    },
  ];

  const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Quote request submitted! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-gold">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our diverse range of export-quality products across multiple categories
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/assets/images/slider1.jpg';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  
                  {/* Sample Items */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Sample Items:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.slice(0, 4).map((item, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-background rounded-full text-muted-foreground border border-border"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="flex-1 bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90"
                          onClick={() => setSelectedCategory(category.name)}
                        >
                          Ask for Quote
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-card">
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-gradient-gold">
                            Request a Quote - {selectedCategory}
                          </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleQuoteSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="name">Name *</Label>
                            <Input id="name" required className="bg-background" />
                          </div>
                          <div>
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" className="bg-background" />
                          </div>
                          <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" type="email" required className="bg-background" />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone *</Label>
                            <Input id="phone" type="tel" required className="bg-background" />
                          </div>
                          <div>
                            <Label htmlFor="product">Product</Label>
                            <Select>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select product" />
                              </SelectTrigger>
                              <SelectContent>
                                {categories.find(c => c.name === selectedCategory)?.items.map((item, i) => (
                                  <SelectItem key={i} value={item.toLowerCase()}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="message">Message / Specifications *</Label>
                            <Textarea id="message" required className="bg-background" />
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-primary to-secondary text-background"
                          >
                            Submit Request
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
