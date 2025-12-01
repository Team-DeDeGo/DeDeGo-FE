"use client";

import { useState, useEffect } from "react";
import * as styles from "./style.css";
import { LOADING, TIMING } from "../../../constants";
import { getRandomMessage } from "@/utils";

export const Loading = () => {
  const [currentMessage, setCurrentMessage] = useState(() => 
    getRandomMessage(LOADING)
  );
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);

    const interval = setInterval(() => {
      setFadeIn(false);

      setTimeout(() => {
        setCurrentMessage(getRandomMessage(LOADING));
        setFadeIn(true);
      }, TIMING.FADE_TRANSITION);
    }, TIMING.MESSAGE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loadingText} data-fade-in={fadeIn}>
      {currentMessage}
    </div>
  );
};