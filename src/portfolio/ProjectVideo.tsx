import { asset, resolveVideoSource } from "./media";

type Props = { src: string; poster?: string | undefined; title: string };

export function ProjectVideo({ src, poster, title }: Props) {
  const source = resolveVideoSource(src);

  if (source.kind !== "file") {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl border border-background/15 bg-foreground shadow-phone">
        <iframe
          src={source.url}
          title={`${title} demo`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="rounded-[2.6rem] bg-phone p-3 shadow-phone ring-1 ring-background/10">
        <div className="relative overflow-hidden rounded-[2rem] bg-phone">
          <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-phone" />
          <video
            className="block h-auto w-full"
            src={source.url}
            poster={poster ? asset(poster) : undefined}
            controls
            playsInline
            preload="metadata"
            aria-label={`${title} demo video`}
          />
        </div>
      </div>
    </div>
  );
}
