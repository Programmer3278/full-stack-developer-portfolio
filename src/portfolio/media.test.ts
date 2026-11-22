import { describe, expect, it } from "vitest";
import { asset, resolveVideoSource } from "./media";

describe("project video sources", () => {
  it("serves an uploaded file from the GitHub Pages sub-path", () => {
    expect(resolveVideoSource("videos/payloow-demo.mp4", "/portfolio/")).toEqual({
      kind: "file",
      url: "/portfolio/videos/payloow-demo.mp4",
    });
  });

  it("uses a direct video URL as-is", () => {
    expect(resolveVideoSource("https://cdn.example.com/demo.mp4")).toEqual({
      kind: "file",
      url: "https://cdn.example.com/demo.mp4",
    });
  });

  it("turns YouTube watch, short and shorts links into embeds", () => {
    const embed = "https://www.youtube.com/embed/abc123";
    expect(resolveVideoSource("https://www.youtube.com/watch?v=abc123").url).toBe(embed);
    expect(resolveVideoSource("https://youtu.be/abc123").url).toBe(embed);
    expect(resolveVideoSource("https://youtube.com/shorts/abc123").url).toBe(embed);
  });

  it("turns Vimeo links into embeds", () => {
    expect(resolveVideoSource("https://vimeo.com/76979871")).toEqual({
      kind: "vimeo",
      url: "https://player.vimeo.com/video/76979871",
    });
  });

  it("resolves public files at the site root", () => {
    expect(asset("/images/abdul.jpg", "/")).toBe("/images/abdul.jpg");
  });
});
