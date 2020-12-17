import {Box, Button, Card, Container, Grid, Heading, Inline, Stack, Text} from '@sanity/ui'
import Link from 'next/link'
import React from 'react'

export function ScreenHeroSection({data}: {data: any}) {
  return (
    <>
      <Card flex={1} paddingX={[3, 4, 5]} paddingY={[6, 7, 8]}>
        <Container width={0}>
          <Stack space={[3, 4, 5]}>
            <Heading align="center" size={[3, 4, 5]}>
              {data.headline}
            </Heading>

            {data.copy && (
              <Text align="center" muted size={[2, 2, 3]}>
                {data.copy}
              </Text>
            )}

            {data.ctas && (
              <Inline space={2} style={{textAlign: 'center'}}>
                {data.ctas.map((cta: any) => (
                  <Link href={cta.href} key={cta._key} passHref>
                    <Button
                      as="a"
                      fontSize={[2, 2, 3]}
                      mode={cta.mode}
                      padding={[3, 3, 4]}
                      text={cta.label}
                      tone={cta.tone}
                    />
                  </Link>
                ))}
              </Inline>
            )}
          </Stack>
        </Container>

        {data.linksHeader && (
          <Box marginTop={[5, 6, 7]}>
            <Heading accent align="center" size={[1, 1, 2]}>
              {data.linksHeader}
            </Heading>
          </Box>
        )}

        {data.links && (
          <Container width={2}>
            <Box marginTop={[3, 4, 5]}>
              <Grid columns={[1, 1, 2, 3]} gap={[3, 4, 4, 5]}>
                {data.links.map((link: any) => (
                  <Link href={link.href ? link.href : '/docs'} key={link._key} passHref>
                    <Card as="a" border padding={4} radius={2}>
                      <Stack space={3}>
                        <Heading size={1}>{link.title || <em>Untitled</em>}</Heading>
                        {link.subtitle && (
                          <Text muted size={2}>
                            {link.subtitle}
                          </Text>
                        )}
                      </Stack>
                    </Card>
                  </Link>
                ))}
              </Grid>
            </Box>
          </Container>
        )}
      </Card>
    </>
  )
}
