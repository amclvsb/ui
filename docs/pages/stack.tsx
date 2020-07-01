import {AppLayout, CodeBlock} from '~/components'
import {Box, Card, Stack, Text} from '@sanity/ui'
import Head from 'next/head'
import React from 'react'

function StackPage() {
  return (
    <>
      <Head>
        <title>Stack – Sanity UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <Box as="main" padding={4}>
          <h1>Stack</h1>

          <Card padding={2} tone="transparent">
            <Stack space={4}>
              <Card>
                <Text>foo</Text>
              </Card>
              <Card>
                <Text>bar</Text>
              </Card>
              <Card>
                <Text>baz</Text>
              </Card>
            </Stack>
          </Card>

          <CodeBlock>{`<Stack space={4}>
  <Card>
    <Text>foo</Text>
  </Card>
  <Card>
    <Text>bar</Text>
  </Card>
  <Card>
    <Text>baz</Text>
  </Card>
</Stack>`}</CodeBlock>
        </Box>
      </AppLayout>
    </>
  )
}

export default StackPage
