import React from 'react';
import { Meta, Story } from '@storybook/react';
import ScrollArea from './ScrollArea';
import '@/styles/core.scss';
import { ThemeProvider } from '../Theme/Theme';
import Flex from '../Flex';
import Layout from '../Layout/Layout';
import Typography from '../Typography';

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea,
} as Meta;

// ScrollArea Story
const ScrollAreaTemplate: Story = (args) => (
  <ThemeProvider appearance={'light'}>
    <Layout.Container>
      <Layout.Row gutter={[32, 32]}>
        <Layout.Col xs={24} sm={12}>
          <ScrollArea id={'test1'} type="always" persistent scrollbars="vertical" style={{ height: 150 }}>
            <Layout.Container>
              <Typography.Text size="2">
                {`Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
                synonymously, typographically they are separate but related concepts.`}
              </Typography.Text>

              <Typography.Text size="2">
                {`Legibility describes how easily individual ch aracters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>

              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
  and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>

              <Typography.Text size="4">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
  and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>

              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>
            </Layout.Container>
          </ScrollArea>
        </Layout.Col>
        <Layout.Col xs={24} sm={12}>
          <ScrollArea id={'test_2'} persistent type="always" scrollbars="vertical" style={{ height: 150 }}>
            <Flex width={1200}>
              <Typography.Text size="12">
                {`Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense "legible" and "readable" are often used
                synonymously, typographically they are separate but related concepts.`}
              </Typography.Text>
              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>
              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>
              <Typography.Text size="2">
                {`Legibility describes how easily individual characters can be distinguished from one another. It is described by Walter Tracy as "the quality of being decipherable
                and recognisable". For instance, if a "b" and an "h", or a "3" and an "8", are difficult to distinguish at small sizes, this is a problem of legibility.`}
              </Typography.Text>
            </Flex>
          </ScrollArea>
        </Layout.Col>
      </Layout.Row>
    </Layout.Container>
  </ThemeProvider>
);
export const Default = ScrollAreaTemplate.bind({});
Default.args = {};
