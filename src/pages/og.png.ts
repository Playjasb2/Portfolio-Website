import satori from "satori";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import type { APIRoute } from "astro";

// Initialize WASM once
export const GET: APIRoute = async () => {
  try {
    await initWasm(fetch("https://unpkg.com/@resvg/resvg-wasm/index_bg.wasm"));
  } catch {
    // Already initialized or fetch failed (handle gracefully)
  }

  // 1. Fetch Font (Inter from unpkg/jsdelivr)
  const fontData = await fetch(
    "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.woff",
  ).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch font");
    return res.arrayBuffer();
  });

  // 2. Define Markup (JSX-like object structure)
  const markup = {
    type: "div",
    props: {
      style: {
        display: "flex",
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        letterSpacing: "-.02em",
        fontWeight: 700,
        background: "#09090b", // zinc-950
        color: "white",
        flexDirection: "column",
        backgroundImage:
          "radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #a855f7 0%, transparent 50%)",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#18181b", // zinc-900 surface
              padding: "40px 80px",
              borderRadius: "30px",
              border: "2px solid rgba(255,255,255,0.1)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
            },
            children: [
              {
                type: "div",
                props: {
                  children: "Jasmeet Brar",
                  style: {
                    fontSize: 60,
                    marginBottom: 10,
                    backgroundClip: "text",
                    color: "white",
                  },
                },
              },
              {
                type: "div",
                props: {
                  children: "Full Stack Engineer",
                  style: {
                    fontSize: 30,
                    color: "#a1a1aa", // zinc-400
                  },
                },
              },
            ],
          },
        },
      ],
    },
  };

  // 3. Generate SVG
  const svg = await satori(markup as any, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Roboto Slab",
        data: fontData,
        style: "normal",
        weight: 700,
      },
    ],
  });

  // 4. Convert to PNG
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: "width",
      value: 1200,
    },
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer as any, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
