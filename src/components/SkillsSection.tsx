import React from 'react';

import ContentArea from '../core/ContentArea';
import Heading from '../core/Heading';
import Link from '../core/Link';

import classes from './SkillsSection.module.css';

const SkillsSection = () => {
  return (
    <section>
      <ContentArea title="Skills" className={classes.container}>
        <div>
          <Heading level={3}>Main Stack</Heading>
          <p>
            I currently have a high emphasis on backend development in a cross-platform (mobile)
            context.
          </p>
        </div>
        <div className={classes.skills}>
          <Skill
            title="Ruby on Rails"
            image="/images/rails-black.jpeg"
            website="https://rubyonrails.org/"
          />
          <Skill
            title="GraphQL"
            image="/images/graphql-black.jpeg"
            website="https://graphql.org/"
          />
          <Skill
            title="Typescript"
            image="/images/typescript-black.jpeg"
            website="https://www.typescriptlang.org/"
          />
        </div>
      </ContentArea>
    </section>
  );
};

interface SkillProps {
  title: string;
  image: string;
  website: string;
}

const Skill: React.FC<SkillProps> = ({ title, image, website }) => {
  return (
    <div className={classes.skill}>
      <Link href={website} target="_blank">
        <img src={image} role="presentation" alt="" />
      </Link>
      <strong>{title}</strong>
    </div>
  );
};

export default SkillsSection;
