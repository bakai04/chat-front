import React, { useEffect, useRef } from 'react'

type ScrollHandler = (() => void) | undefined;

export const useScroll = (
  onScrollTop: ScrollHandler = undefined,
  onScrollBottom: ScrollHandler = undefined,
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const div = ref.current;
      if (div) {
        const { scrollTop, scrollHeight, clientHeight } = div;
        if (scrollTop === 0 && onScrollTop) {
          onScrollTop();
        }

        if (Math.abs(scrollHeight) - Math.abs(scrollTop) === clientHeight && onScrollBottom) {
          onScrollBottom();
        }
      }
    };
    ref.current?.addEventListener("scroll", handleScroll);
    return () => {
      ref.current?.removeEventListener("scroll", handleScroll);
    };
  }, [onScrollTop, onScrollBottom]);

  return ref
}
