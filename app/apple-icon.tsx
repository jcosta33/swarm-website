import { ImageResponse } from "next/og";

// Apple touch icon (home-screen on iOS) — generated at build, same hex mark on chassis, padded.
export const dynamic = "force-static"; // required for output:export (generated at build, not runtime)
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const MARK =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">` +
      `<path d="M16 6L26 11V21L16 26L6 21V11L16 6Z" stroke="#FACC15" stroke-width="1.5" stroke-linejoin="round"/>` +
      `<path d="M16 6V26M6 11L26 21M26 11L6 21" stroke="#FACC15" stroke-width="1.5" stroke-linecap="round"/>` +
      `<circle cx="16" cy="16" r="3" fill="#FACC15"/>` +
      `<path d="M16 2V6M16 26V30M2 16H6M26 16H30" stroke="#FACC15" stroke-width="1.5" stroke-linecap="round"/>` +
      `</svg>`
  );

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A08",
        }}
      >
        <img src={MARK} width={118} height={118} alt="" />
      </div>
    ),
    { ...size }
  );
}
