'use client';
/* eslint-disable react/display-name */
import { combineClassNames } from '@/utils/helper/combineClassNames';
import React, { FC, ReactNode } from 'react';
import Typography from '../Typography/Typography';
import styles from './Card.module.scss';

export interface CardProps extends React.HTMLProps<HTMLDivElement> {
  outlined?: boolean;
  backgroundColor?: string;
  children: ReactNode;
}

const Card: React.FC<CardProps> & {
  Title: FC<TitleProps>;
  Subtitle: FC<SubtitleProps>;
  Text: FC<TextProps>;
  Actions: FC<ActionsProps>;
  Content: FC<ContentProps>;
} = ({ outlined, backgroundColor, children, ...others }) => {
  const cardClasses = [styles.card];

  if (outlined) {
    cardClasses.push(styles['card--outlined']);
  }

  const cardStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className={combineClassNames(cardClasses)} style={cardStyle} {...others}>
      {children}
    </div>
  );
};

export interface TitleProps extends Omit<React.HTMLProps<HTMLDivElement>, 'type'> {
  level?: number;
  children: ReactNode;
}

Card.Title = ({ children, level = 4, ...others }: TitleProps) => {
  return (
    <div className={styles.title}>
      <Typography.Title level={level} style={{ margin: '0' }} {...others}>
        {children}
      </Typography.Title>
    </div>
  );
};

export interface SubtitleProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

Card.Subtitle = ({ children }: SubtitleProps) => {
  return <div className={styles.subtitle}>{children}</div>;
};

export interface TextProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

Card.Text = ({ children }: TextProps) => {
  return <div className={styles.text}>{children}</div>;
};

export interface ContentProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

Card.Content = ({ children }: ContentProps) => {
  return <div className={styles.content}>{children}</div>;
};

export interface ActionsProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

Card.Actions = ({ children }: ActionsProps) => {
  return <div className={styles.actions}>{children}</div>;
};

export default Card;
