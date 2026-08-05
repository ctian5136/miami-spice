import React, { useRef, useState } from "react";
import { X, Upload } from "lucide-react";
import { styles } from "../styles";
import { uploadEatenPhotos, deletePhoto, MAX_PHOTOS_PER_REVIEW } from "../lib/social";

export default function EatenDialog({ uid, restaurantName, initialNotes, initialPhotos, onClose, onSave }) {
  const [notes, setNotes] = useState(initialNotes || "");
  const [photos, setPhotos] = useState(initialPhotos || []);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;

    const remaining = MAX_PHOTOS_PER_REVIEW - photos.length;
    if (remaining <= 0) {
      setError(`Max ${MAX_PHOTOS_PER_REVIEW} photos per review.`);
      return;
    }
    setError("");
    setUploading(true);
    try {
      const uploaded = await uploadEatenPhotos(uid, restaurantName, files.slice(0, remaining));
      setPhotos((prev) => [...prev, ...uploaded]);
    } catch (err) {
      setError("Photo upload failed — " + err.message);
    } finally {
      setUploading(false);
    }
  };

  const removePhoto = async (index) => {
    const photo = photos[index];
    setPhotos((prev) => prev.filter((_, i) => i !== index));
    if (photo?.path) await deletePhoto(photo.path);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(notes, photos);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={styles.dialogOverlay} onClick={onClose}>
      <div style={styles.dialogBox} onClick={(e) => e.stopPropagation()}>
        <h3 style={styles.dialogTitle}>{restaurantName}</h3>
        <p style={styles.dialogSub}>How was it? Notes and photos are just for you (and friends you accept).</p>

        <label style={styles.label}>Notes</label>
        <textarea
          style={styles.textarea}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="What did you order, would you go back, etc."
        />

        <div style={{ marginTop: 16 }}>
          <label style={styles.label}>Photos ({photos.length}/{MAX_PHOTOS_PER_REVIEW})</label>
          {photos.length > 0 && (
            <div style={{ ...styles.photoStrip, marginBottom: 10 }}>
              {photos.map((p, i) => (
                <div key={p.path || i} style={{ position: "relative" }}>
                  <img src={p.url} alt="" style={styles.photoThumb} />
                  <button
                    onClick={() => removePhoto(i)}
                    style={{
                      position: "absolute", top: -6, right: -6, width: 20, height: 20, borderRadius: 999,
                      border: "none", background: "#2B231C", color: "#fff", cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <X size={12} strokeWidth={3} />
                  </button>
                </div>
              ))}
            </div>
          )}
          {photos.length < MAX_PHOTOS_PER_REVIEW && (
            <div style={styles.fileInputWrap} onClick={() => fileInputRef.current?.click()}>
              <Upload size={16} style={{ marginBottom: 4 }} />
              <div>{uploading ? "Uploading…" : "Click to add photos"}</div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFiles}
                style={{ display: "none" }}
                disabled={uploading}
              />
            </div>
          )}
        </div>

        {error && <p style={styles.errorText}>{error}</p>}

        <div style={styles.dialogActions}>
          <button style={styles.secondaryBtn} onClick={onClose}>Cancel</button>
          <button style={styles.primaryBtn} onClick={handleSave} disabled={saving || uploading}>
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
