import { useCallback, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Google Drive style full-screen image carousel.
 *
 * Controlled component: the parent owns the active index.
 *
 * @param items    Array of image sources, or `{ src, caption }` objects.
 * @param index    Active index, or `null` when closed.
 * @param onIndexChange(nextIndex)
 * @param onClose()
 */
export default function GalleryLightbox({
  items = [],
  index,
  onIndexChange,
  onClose,
}) {
  const slides = useMemo(
    () =>
      items.map((item) =>
        typeof item === "string" ? { src: item } : item
      ),
    [items]
  );

  const isOpen =
    index !== null &&
    index !== undefined &&
    index >= 0 &&
    index < slides.length;

  const total = slides.length;

  /* Track travel direction so slides animate the way the user moved. */
  const directionRef = useRef(1);
  const previousIndexRef = useRef(index);

  useEffect(() => {
    if (typeof index === "number" && typeof previousIndexRef.current === "number") {
      directionRef.current = index >= previousIndexRef.current ? 1 : -1;
    }

    previousIndexRef.current = index;
  }, [index]);

  const goTo = useCallback(
    (next) => {
      if (total === 0) return;

      /* Wrap around at both ends. */
      onIndexChange((next + total) % total);
    },
    [onIndexChange, total]
  );

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  /* Keyboard: arrows navigate, Escape closes. */
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, goNext, goPrev, onClose]);

  /* Lock background scrolling while the viewer is open. */
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /* Keep the active thumbnail in view. */
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !thumbsRef.current) return;

    const active = thumbsRef.current.querySelector('[data-active="true"]');

    active?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [isOpen, index]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-sm flex flex-col"
          onClick={onClose}
        >

          {/* ================= TOP BAR ================= */}

          <div
            className="relative z-10 flex items-center justify-between gap-4 px-5 md:px-8 py-4 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm font-medium text-white/80 tabular-nums">
              {index + 1} / {total}
            </span>

            <button
              onClick={onClose}
              aria-label="Close viewer"
              className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* ================= STAGE ================= */}

          <div className="relative flex-1 min-h-0 flex items-center justify-center px-3 md:px-20">

            {/* Prev */}

            {total > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous image"
                className="absolute left-2 md:left-6 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Slide */}

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                initial={{ opacity: 0, x: directionRef.current * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: directionRef.current * -60 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                drag={total > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -80) goNext();
                  else if (info.offset.x > 80) goPrev();
                }}
                className="max-h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={slides[index].src}
                  alt={slides[index].caption || ""}
                  draggable={false}
                  className="max-h-[68vh] md:max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl select-none"
                />

                {slides[index].caption && (
                  <p className="mt-4 max-w-3xl text-center text-sm md:text-base text-white/80 px-4">
                    {slides[index].caption}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Next */}

            {total > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next image"
                className="absolute right-2 md:right-6 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-colors"
              >
                <ChevronRight size={28} />
              </button>
            )}

          </div>

          {/* ================= THUMBNAILS ================= */}

          {total > 1 && (
            <div
              ref={thumbsRef}
              className="relative z-10 shrink-0 flex gap-3 overflow-x-auto px-5 md:px-8 py-5"
              onClick={(e) => e.stopPropagation()}
            >
              {slides.map((slide, thumbIndex) => (
                <button
                  key={`${slide.src}-${thumbIndex}`}
                  data-active={thumbIndex === index}
                  onClick={() => onIndexChange(thumbIndex)}
                  aria-label={`View image ${thumbIndex + 1}`}
                  aria-current={thumbIndex === index}
                  className={`shrink-0 w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 transition-all
                  ${
                    thumbIndex === index
                      ? "border-[#F7DB07] opacity-100 scale-105"
                      : "border-white/20 opacity-55 hover:opacity-90"
                  }`}
                >
                  <img
                    src={slide.src}
                    alt=""
                    draggable={false}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
