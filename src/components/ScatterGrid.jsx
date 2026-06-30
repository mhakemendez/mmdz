import { Children, cloneElement, useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScatterGrid({ children, className,  itemProps = {}, }) {
  const ref = useRef(null);

  const items = Children.toArray(children);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Generate starting positions once
  const positions = useMemo(() => {
    return items.map((_, index) => {
      const angle = (index / items.length) * Math.PI * 2;

      return {
        x: Math.cos(angle) * 250,
        y: Math.sin(angle) * 250,
        rotate: (Math.random() - 0.5) * 20,
      };
    });
  }, [items]);

  return (
    <div ref={ref} className={className}>
      {items.map((child, index) => {
        const start = positions[index];

        const x = useTransform(scrollYProgress, [0, 0.7], [start.x, 0]);
        const y = useTransform(scrollYProgress, [0, 0.7], [start.y, 0]);
        const rotate = useTransform(
          scrollYProgress,
          [0, 0.7],
          [start.rotate, 0]
        );
        const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
        const scale = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);

        return (
          <motion.div
            key={index}
            {...itemProps}
            style={{
              x,
              y,
              rotate,
              opacity,
              scale,
              ...itemProps.style,
            }}
          >
            {child}
          </motion.div>
        );
      })}
    </div>
  );
}