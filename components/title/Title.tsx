'use client'
import { useTranslations } from 'next-intl';
import styles from "./styles.module.css"
import { useEffect, useRef } from 'react';



interface ITitle {
  'title-key': string;
}

const Title = ({ 'title-key': titleKey}: ITitle) => {
  const t = useTranslations("common");

  const divRef = useRef(null);

  useEffect(() => {
    const current: any = divRef.current
  
    if(typeof window !== "undefined" && current) {
      const computedColor = window.getComputedStyle(current).color;
      current.style.setProperty('--parent-color',computedColor ?? 'transparent');
    }

  }, []);

  return (
    <div ref={divRef} className={`${styles.title}`}>
      {titleKey && <h4 >{t(titleKey)}</h4>}
    </div>
  )
}
export default Title;