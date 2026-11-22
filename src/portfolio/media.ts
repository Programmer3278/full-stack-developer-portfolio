/**
 * Video sources for project demos can be either:
 *  - an uploaded file inside /public (e.g. "videos/payloow-demo.mp4"), or
 *  - a full URL: a direct video file (https://.../demo.mp4), YouTube or Vimeo.
 */
export type VideoSource =
  | { kind: "file"; url: string }
  | { kind: "youtube"; url: string }
  | { kind: "vimeo"; url: string };

const isAbsoluteUrl = (value: string) => /^https?:\/\//i.test(value);

/** Resolve a /public file path against the site base (works on GitHub Pages sub-paths). */
export function asset(path: string, base: string = import.meta.env.BASE_URL ?? "/"): string {
  if (isAbsoluteUrl(path)) return path;
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  return `${cleanBase}${path.replace(/^\/+/, "")}`;
}

export function resolveVideoSource(src: string, base?: string): VideoSource {
  const value = src.trim();
  if (isAbsoluteUrl(value)) {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\.|^m\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.slice(1).split("/")[0];
      if (id) return { kind: "youtube", url: `https://www.youtube.com/embed/${id}` };
    }
    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      const id =
        url.searchParams.get("v") ??
        url.pathname.match(/^\/(?:embed|shorts|live)\/([^/?]+)/)?.[1];
      if (id) return { kind: "youtube", url: `https://www.youtube.com/embed/${id}` };
    }
    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = url.pathname.match(/(\d+)/)?.[1];
      if (id) return { kind: "vimeo", url: `https://player.vimeo.com/video/${id}` };
    }
    return { kind: "file", url: value };
  }
  return { kind: "file", url: base === undefined ? asset(value) : asset(value, base) };
}
