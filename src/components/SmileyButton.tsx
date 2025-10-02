import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, CSSProperties } from "react";
import Smiley, { SmileyColor, SmileyDirection } from "./Smiley";

import styles from "./Hero.module.scss";

const popOutDuration = 0.4;
const popInDuration = 0.4;
const cycleDelay = 0.3;

const minScale = 0.75;
const maxScale = 1.25;

export default function SmileyButton({
  onClick = () => {},
  className = "",
  style = {},
}: {
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
}) {
  const [visible, setVisible] = useState(true);
  const [params] = useState({
    color: SmileyColor[Math.floor(Math.random() * SmileyColor.length)],
    direction:
      SmileyDirection[Math.floor(Math.random() * SmileyDirection.length)],
    right: Math.random() < 0.5,
    scale: Math.random() * (maxScale - minScale) + minScale,
  });

  useEffect(() => {
    if (!visible) {
      const timeout = setTimeout(() => {
        setVisible(true);
      }, (popOutDuration + cycleDelay) * 1000);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{
            scale: params.scale * 1.2, // Zoom to 1.2x the base scale on hover
            transition: { duration: 0.3, ease: "easeInOut" }, // Smooth ease transition
          }}
          transition={{
            scale: {
              duration: visible ? popInDuration : popOutDuration,
              ease: "easeInOut",
            },
            opacity: {
              duration: visible ? popInDuration : popOutDuration,
              ease: "easeInOut",
            },
          }}
          className={className}
          style={style}
          onClick={() => {
            setVisible(false);
            onClick();
          }}
        >
          <Smiley
            color={params.color}
            direction={params.direction}
            right={params.right}
            className={styles.smiley}
            style={{ scale: params.scale }} // Base scale applied here
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}