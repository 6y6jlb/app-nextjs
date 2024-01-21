'use client'
import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import styles from "./styles.module.css";


const Title = ({ 'title-key': titleKey }: IProps) => {
  const t = useTranslations("common");

  const divRef = useRef(null);

  useEffect(() => {
    const current: any = divRef.current

    if (typeof window !== "undefined" && current) {
      const computedColor = window.getComputedStyle(current).color;
      current.style.setProperty('--parent-color', computedColor ?? 'transparent');
    }

  }, []);

  return (
    <div ref={divRef} className={`${styles.title}`}>
      {titleKey && <h4 >{t(titleKey)}</h4>}
    </div>
  )
}
export default Title;


interface IProps {
  'title-key': string;
}