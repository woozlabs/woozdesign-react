import React from 'react';
import { Meta, Story } from '@storybook/react';

import Layout, { ContainerProps, RowProps, ColProps } from './Layout';
import Card from '../Card';
import '@/styles/core.scss';
import Theme from '../Theme/Theme';

export default {
  title: 'Layout/Layout',
  component: Layout,
} as Meta;

// // Container Stories
// const ContainerTemplate: Story<ContainerProps> = (args) => <Layout.Container {...args}>Content inside container</Layout.Container>;
// export const ContainerStory = ContainerTemplate.bind({});
// ContainerStory.args = {};

// // Row Stories
// const RowTemplate: Story<RowProps> = (args) => <Layout.Row {...args}>Content inside a row (no columns)</Layout.Row>;
// export const RowStory = RowTemplate.bind({});
// RowStory.args = {
//   gutter: [10, 10],
//   align: 'center',
//   justify: 'center',
// };

// // Col Stories
// const ColTemplate: Story<ColProps> = (args) => <Layout.Col {...args}>Column Content</Layout.Col>;
// export const ColStory = ColTemplate.bind({});
// ColStory.args = {
//   xs: 12,
//   sm: 6,
//   md: 4,
//   lg: 3,
//   xl: 2,
// };

// Combined Story with Container, Row, and Col
export const GridSystemStory: Story<ContainerProps> = (args) => (
  <Theme.ThemeProvider>
    <Layout.Container {...args}>
      <Layout.Row gutter={[32, 32]}>
        <Layout.Col xs={24} md={8}>
          <Card outlined>
            <Card.Content>Column 1</Card.Content>
          </Card>
        </Layout.Col>
        <Layout.Col xs={24} md={8}>
          <Card outlined>
            <Card.Content>Column 2</Card.Content>
          </Card>
        </Layout.Col>
        <Layout.Col xs={12} md={8}>
          <Card outlined>
            <Card.Content>Column 3</Card.Content>
          </Card>
        </Layout.Col>
        <Layout.Col xs={12} md={8}>
          <Card outlined>
            <Card.Content>Column 4</Card.Content>
          </Card>
        </Layout.Col>
        <Layout.Col xs={16} md={8}>
          <Card outlined>
            <Card.Content>Column 5</Card.Content>
          </Card>
        </Layout.Col>
      </Layout.Row>
      <Layout.Row gutter={[32, 32]} style={{ marginTop: '4rem' }} align="center" justify="center">
        <Layout.Col xs={24} md={8}>
          <Card outlined>
            <Card.Content>Column 1</Card.Content>
          </Card>
        </Layout.Col>
        <Layout.Col xs={24} md={8}>
          <Card outlined>
            <Card.Content>Column 2</Card.Content>
          </Card>
        </Layout.Col>
        <Layout.Col xs={12} md={8}>
          <Card outlined>
            <Card.Content>Column 3</Card.Content>
          </Card>
        </Layout.Col>
        <Layout.Col xs={12} md={8}>
          <Card outlined>
            <Card.Content>Column 4</Card.Content>
          </Card>
        </Layout.Col>
        <Layout.Col xs={16} md={8}>
          <Card outlined>
            <Card.Content>Column 5</Card.Content>
          </Card>
        </Layout.Col>
      </Layout.Row>
    </Layout.Container>
  </Theme.ThemeProvider>
);
