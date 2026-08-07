import React, { useEffect } from "react";
import { X } from "lucide-react";
import { styles } from "../styles";

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [src, onClose]);

  if (!src) return null;

  const close = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div style={styles.lightboxOverlay} onClick={close}>
      <button style={styles.lightboxCloseBtn} onClick={close}>
        <X size={20} strokeWidth={2.5} />
      </button>
      <img src={src} alt="" style={styles.lightboxImage} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
