"use client";

import { generateUrl } from "@/generate-url";
import { useRouter } from "next/navigation";
import QRCode from "qrcode.react";
import { useRef, useState } from "react";

export default function Home() {
  const router = useRouter();

  const amountRef = useRef<HTMLInputElement>(null);
  const vpaRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  const [url, setUrl] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "16px",
      }}
    >
      <p>enter the vpa id *</p>
      <input type="text" ref={vpaRef} defaultValue="8447637322@paytm" />
      <p>enter the amount *</p>
      <input type="number" ref={amountRef} defaultValue="1.50" />
      <p>enter the description (optional)</p>
      <input type="textarea" ref={descRef} defaultValue="this is dummy txn" />

      <button
        onClick={() => {
          const u = generateUrl({
            pa: vpaRef.current?.value || "",
            am: amountRef.current?.value?.toString() || "1",
            tn: descRef.current?.value?.toString(),
          });
          setUrl(u);
          router.replace(u);
        }}
      >
        generate
      </button>

      {url && (
        <>
          <a href={url}>{url}</a>

          <div
            style={{
              backgroundColor: "white",
              padding: "8px",
              width: "fit-content",
            }}
          >
            <QRCode value={url} />
          </div>
        </>
      )}
    </div>
  );
}
