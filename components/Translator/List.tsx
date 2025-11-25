"use client";

import * as styles from "./style.css";
import type { termType } from "@/types";

interface TermsListProps {
  terms: termType[];
}

export const TermsList = ({ terms }: TermsListProps) => {
  if (!terms?.length) return null;

  return (
    <div className={styles.termsSection}>
      <div className={styles.termsList}>
        {terms.map((term, index) => (
          <TermItem key={index} term={term} />
        ))}
      </div>
    </div>
  );
};

const TermItem = ({ term }: { term: termType }) => (
  <div className={styles.termItem}>
    <div className={styles.termHeader}>
      <span className={styles.termWord}>{term.term}</span>
      {term.original && (
        <span className={styles.termOriginal}>({term.original})</span>
      )}
    </div>
    <p className={styles.termMeaning}>{term.meaning}</p>
  </div>
);