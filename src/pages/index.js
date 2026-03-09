import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useColorMode } from '@docusaurus/theme-common';
import React, { useEffect, useRef } from 'react';
import Translate from '@docusaurus/Translate';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  const headerRef = useRef(null);

  const bannerSrc = colorMode === 'dark' ? 'img/banner-dark.png' : 'img/banner-light.png';
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!headerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate movement (50 is the intensity, lower = more movement)
      const x = (clientX - innerWidth / 2) / 50;
      const y = (clientY - innerHeight / 2) / 50;

      headerRef.current.style.setProperty('--x', x);
      headerRef.current.style.setProperty('--y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <header ref={headerRef} className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img 
          src={ bannerSrc } 
          alt={ siteConfig.title } 
          className={ styles.heroBannerImage } 
        />
        <div className={ styles.buttons }>
          <Link className={clsx('button button--lg', styles.heroButton)} to="/docs/introduction">
            <Translate id="homepage.visitDocsButton">DOCUMENTATION</Translate> 📄
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
