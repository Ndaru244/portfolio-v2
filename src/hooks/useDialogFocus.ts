"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

interface Options {
  open: boolean;
  onClose: () => void;
  /** When true, Escape closes the dialog */
  closeOnEscape?: boolean;
}

/**
 * Trap focus inside a dialog, lock body scroll, handle Escape,
 * and restore focus to the previously focused element on close.
 */
export function useDialogFocus<T extends HTMLElement = HTMLElement>({
  open,
  onClose,
  closeOnEscape = true,
}: Options) {
  const containerRef = useRef<T>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousFocus.current =
      (document.activeElement as HTMLElement | null) ?? null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const container = containerRef.current;
    const focusables = () =>
      container
        ? ([...container.querySelectorAll(FOCUSABLE)] as HTMLElement[]).filter(
            (el) => !el.hasAttribute("disabled") && el.offsetParent !== null,
          )
        : [];

    // Defer focus until dialog paints
    const focusTimer = window.setTimeout(() => {
      const items = focusables();
      items[0]?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape) {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !container) return;

      const items = focusables();
      if (!items.length) {
        event.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey) {
        if (active === first || !container.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus.current?.focus?.();
    };
  }, [open, onClose, closeOnEscape]);

  return containerRef;
}
