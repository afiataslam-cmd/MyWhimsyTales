import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock Database
  const products = [
    {
      id: "1",
      name: "The Alchemist's Journal",
      price: 45.0,
      category: "Leather",
      image: "https://res.cloudinary.com/dqbn9syr3/image/upload/f_auto,q_auto/IMG_6148_yi2yeq",
      rating: 4.8,
      description: "Hand-stitched full-grain leather journal with aged parchment paper."
    },
    {
      id: "2",
      name: "Midnight Moss Crochet Shawl",
      price: 65.0,
      category: "Crochet",
      image: "https://res.cloudinary.com/dqbn9syr3/image/upload/v1774472426/IMG_6144_jwot3d.jpg",
      rating: 4.9,
      description: "Intricately woven shawl made from premium merino wool."
    },
    {
      id: "3",
      name: "Vintage Traveler's Notebook",
      price: 38.0,
      category: "Leather",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1000&auto=format&fit=crop",
      rating: 4.7,
      description: "Compact leather notebook with refillable inserts and brass hardware."
    },
    {
      id: "4",
      name: "Sage Fern Amigurumi",
      price: 25.0,
      category: "Crochet",
      image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      rating: 5.0,
      description: "Adorable hand-crocheted forest spirit companion."
    },
    {
      id: "5",
      name: "Embossed Grimoire",
      price: 85.0,
      category: "Leather",
      image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=1000&auto=format&fit=crop",
      rating: 4.9,
      description: "Large format leather book with intricate floral embossing."
    },
    {
      id: "6",
      name: "Autumn Ember Beanie",
      price: 30.0,
      category: "Crochet",
      image: "https://images.unsplash.com/photo-1575425186775-b8de9fa227e2?q=80&w=1000&auto=format&fit=crop",
      rating: 4.6,
      description: "Warm and cozy chunky knit beanie in burnt orange."
    }
  ];

  // API Routes
  app.get("/api/products", (req, res) => {
    const { category } = req.query;
    if (category) {
      return res.json(products.filter(p => p.category.toLowerCase() === (category as string).toLowerCase()));
    }
    res.json(products);
  });

  app.post("/api/cart/checkout", (req, res) => {
    const { items, total } = req.body;
    console.log("Processing checkout for:", items, "Total:", total);
    res.json({ success: true, orderId: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase() });
  });

  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;
    // Mock auth
    if (email && password) {
      res.json({ 
        success: true, 
        user: { id: "u1", email, name: email.split('@')[0] },
        token: "mock-jwt-token"
      });
    } else {
      res.status(400).json({ success: false, message: "Invalid credentials" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
