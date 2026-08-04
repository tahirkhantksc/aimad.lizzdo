import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import RSSParser from "rss-parser";
import axios from "axios";

const parser = new RSSParser();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route to fetch Behance projects
  app.get("/api/behance", async (req, res) => {
    try {
      const feed = await parser.parseURL("https://www.behance.net/feeds/user/aimadulislam");
      
      const projects = feed.items.map(item => {
        // Extract image from content: Behance puts an <img> tag in the description
        const content = item.content || item.description || "";
        const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
        const imageUrl = imgMatch ? imgMatch[1] : null;

        return {
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          imageUrl: imageUrl,
          guid: item.guid
        };
      });

      res.json({ projects });
    } catch (error) {
      console.error("Error fetching Behance feed:", error);
      res.status(500).json({ error: "Failed to fetch Behance projects" });
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
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
