import React from "react";
import Link from "next/link";
import { Box, Button, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <Flex
      direction="column"
      minH="100vh"
      bg="var(--cairno-bg-canvas)"
      color="var(--cairno-fg-primary)"
    >
      <Navbar />
      <Box as="main" flex="1" display="flex" alignItems="center">
        <Container maxW="640px" px={{ base: 4, md: 6 }} py={16}>
          <VStack align="flex-start" gap={4}>
            <Text
              className="cairno-mono"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.1em"
              color="var(--cairno-ochre)"
              fontWeight="700"
            >
              404 · Trail Marker Not Found
            </Text>
            <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-0.03em">
              This page does not exist.
            </Heading>
            <Text fontSize="sm" color="var(--cairno-fg-secondary)" lineHeight="1.7">
              The link you followed may be outdated or mistyped. Return to Cairno Labs to explore
              our products, security architecture, and documentation.
            </Text>
            <Link href="/" style={{ textDecoration: "none", marginTop: "8px" }}>
              <Button
                borderRadius="10px"
                px={5}
                bg="var(--cairno-accent)"
                color="var(--cairno-accent-fg)"
                _hover={{ bg: "var(--cairno-accent-hover)" }}
              >
                Back to Cairno Labs
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
}
