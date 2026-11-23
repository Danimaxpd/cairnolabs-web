import React from "react";
import Link from "next/link";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface LegalShellProps {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: React.ReactNode;
}

export function LegalShell({ eyebrow, title, updatedAt, children }: LegalShellProps) {
  return (
    <Box minH="100vh" bg="var(--cairno-bg-canvas)" color="var(--cairno-fg-primary)">
      <Navbar />
      <Container maxW="780px" px={{ base: 4, md: 6 }} py={{ base: 12, md: 16 }}>
        <VStack align="stretch" gap={6}>
          <Box>
            <Link
              href="/"
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--cairno-accent)",
                textDecoration: "none",
              }}
            >
              ← Back to Cairno Labs
            </Link>
            <Text
              className="cairno-mono"
              fontSize="11px"
              textTransform="uppercase"
              letterSpacing="0.1em"
              color="var(--cairno-ochre)"
              mt={5}
              mb={2}
            >
              {eyebrow}
            </Text>
            <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }} letterSpacing="-0.03em" mb={2}>
              {title}
            </Heading>
            <Text className="cairno-mono" fontSize="xs" color="var(--cairno-fg-muted)">
              Last updated: {updatedAt}
            </Text>
          </Box>

          <Box
            p={{ base: 6, md: 8 }}
            borderRadius="16px"
            border="1px solid"
            borderColor="var(--cairno-border)"
            bg="var(--cairno-bg-surface)"
            fontSize="sm"
            lineHeight="1.75"
            color="var(--cairno-fg-secondary)"
          >
            <VStack align="stretch" gap={5}>
              {children}
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </Box>
  );
}
