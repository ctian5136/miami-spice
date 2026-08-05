import React, { useState } from "react";
import { X, Search, BookmarkPlus, UtensilsCrossed, Users, UserPlus } from "lucide-react";
import { styles, colors } from "../styles";
import browseImg from "../assets/tutorial/browse.png";
import addToListImg from "../assets/tutorial/add-to-list.png";
import leaveAReviewImg from "../assets/tutorial/leave-a-review.png";
import friendsReviewsImg from "../assets/tutorial/friends-reviews.png";
import sharedListsImg from "../assets/tutorial/shared-lists.png";

const SLIDES = [
  {
    icon: Search,
    image: browseImg,
    title: "Browse this year's Spice",
    body: "Filter by Michelin, deals, cuisine, area, or meal to find your next reservation fast.",
  },
  {
    icon: BookmarkPlus,
    image: addToListImg,
    title: "Save spots to a list",
    body: "Hit \"Add to list\" on any restaurant to save it to your personal Want to Eat list, or a shared list you're planning with friends.",
  },
  {
    icon: UtensilsCrossed,
    image: leaveAReviewImg,
    title: "Leave yourself a review",
    body: "Once you've been, mark it eaten and jot down notes or add photos — for your own memory, not just friends'.",
  },
  {
    icon: Users,
    image: friendsReviewsImg,
    title: "See what your friends think",
    body: "Every restaurant page shows your friends' reviews and photos right alongside your own.",
  },
  {
    icon: UserPlus,
    image: sharedListsImg,
    title: "Plan together",
    body: "Invite friends to a shared list so everyone can add spots, and see who's already been.",
  },
];

export default function TutorialModal({ onClose }) {
  const [step, setStep] = useState(0);
  const slide = SLIDES[step];
  const Icon = slide.icon;
  const isLast = step === SLIDES.length - 1;

  return (
    <div style={styles.dialogOverlay} onClick={onClose}>
      <div style={styles.dialogBoxWide} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button onClick={onClose} style={styles.removeBtn}>
            <X size={14} strokeWidth={2.5} />
          </button>
        </div>

        {slide.image ? (
          <img src={slide.image} alt={slide.title} style={styles.tutorialImage} />
        ) : (
          <div style={styles.tutorialIconWrap}>
            <Icon size={26} color={colors.accent} strokeWidth={2} />
          </div>
        )}

        <h3 style={{ ...styles.dialogTitle, textAlign: "center", margin: "0 0 8px" }}>{slide.title}</h3>
        <p style={{ ...styles.dialogSub, textAlign: "center", margin: "0 0 24px" }}>{slide.body}</p>

        <div style={styles.tutorialDots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              style={{ ...styles.tutorialDot, ...(i === step ? styles.tutorialDotActive : {}) }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div style={styles.tutorialNavRow}>
          {step > 0 ? (
            <button style={styles.secondaryBtn} onClick={() => setStep((s) => s - 1)}>Back</button>
          ) : (
            <button style={styles.secondaryBtn} onClick={onClose}>Skip</button>
          )}
          <button
            style={styles.primaryBtn}
            onClick={() => (isLast ? onClose() : setStep((s) => s + 1))}
          >
            {isLast ? "Get started" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
