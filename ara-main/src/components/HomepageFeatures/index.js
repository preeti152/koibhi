import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built for Engineers',
    Svg: require('@site/static/img/undraw_community.svg').default,
    description: (
      <>

       Seeking to help engineers at Optum, identify gaps, and build solutions for everyone.
      </>
    ),
  },
  {
    title: 'Learn And Share',
    Svg: require('@site/static/img/undraw_coworking.svg').default,
    description: (
      <>
        Aimed to connect engineers with documentation, training, and experts that can help them find what they are looking for..
      </>
    ),
  },
  {
    title: 'Grow And Adapt',
    Svg: require('@site/static/img/undraw_construct.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
