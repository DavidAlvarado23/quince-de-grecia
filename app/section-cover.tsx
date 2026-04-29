import Image from "next/image";
import type { CSSProperties } from "react";

import { TINY_BLUR_DATA_URL } from "./image-placeholders";

type SectionCoverProps = {
  src: string;
  /** CSS `object-position` / `background-position`, e.g. `"50% 30%"`. */
  objectPosition: string;
  children?: React.ReactNode;
};

/**
 * Full-bleed band (~60% viewport height).
 *
 * - **Below `md`:** `next/image` `fill`, **`h-[60vh]`** only (no `dvh` on mobile).
 * - **`md` and up:** CSS `background-image` + **`background-attachment: fixed`**
 *   (`.section-cover-desktop` in `globals.css`), **`h-[60vh]`**.
 */
export function SectionCover({
  src,
  objectPosition,
  children,
}: SectionCoverProps) {
  const desktopBg: CSSProperties = {
    backgroundImage: `url("${src}")`,
    backgroundSize: "cover",
    backgroundPosition: objectPosition,
  };

  return (
    <>
      <div
        className="relative block min-h-[240px] w-full overflow-hidden
          md:hidden"
        aria-hidden
      >
        <Image
          src={src}
          alt=""
          // fill
          width={1000}
          height={1500}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
          quality={75}
          loading="eager"
          placeholder="blur"
          blurDataURL={TINY_BLUR_DATA_URL}
        />
        {children}
      </div>
      <div
        className="section-cover-desktop hidden min-h-[280px] h-[60vh] w-full
          md:block"
        style={desktopBg}
        aria-hidden
      />
    </>
  );
}
