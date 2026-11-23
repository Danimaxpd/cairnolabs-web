"use client";

import React from "react";
import Link from "next/link";
import { Box, Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Moon, Sun } from "lucide-react";
import { CairnLogo } from "@/components/CairnLogo";
import { useCairnoTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const { theme, mounted, toggleTheme } = useCairnoTheme();
  const isDark = mounted && theme === "dark";

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={40}
      borderBottom="1px solid"
      borderColor="var(--cairno-border)"
      bg="var(--cairno-bg-nav)"
      backdropFilter="blur(12px)"
    >
      <Container maxW="1120px" px={{ base: 4, md: 6 }} py={3.5}>
        <Flex align="center" justify="space-between" gap={4}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <HStack gap={2.5} align="center">
              <CairnLogo size={30} />
              <Flex direction="column" lineHeight="1.05">
                <Text
                  fontWeight="700"
                  fontSize="md"
                  letterSpacing="-0.02em"
                  color="var(--cairno-fg-primary)"
                >
                  Cairno Labs
                </Text>
                <Text
                  className="cairno-mono"
                  fontSize="10px"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  color="var(--cairno-fg-muted)"
                >
                  Software Studio
                </Text>
              </Flex>
            </HStack>
          </Link>

          <HStack gap={{ base: 3, md: 6 }} align="center">
            <HStack gap={5} display={{ base: "none", md: "flex" }}>
              <Link
                href="/#product"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--cairno-fg-secondary)",
                  textDecoration: "none",
                }}
              >
                Cairno Docs
              </Link>
              <Link
                href="/#architecture"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--cairno-fg-secondary)",
                  textDecoration: "none",
                }}
              >
                Zero-Egress
              </Link>
              <Link
                href="/#pricing"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--cairno-fg-secondary)",
                  textDecoration: "none",
                }}
              >
                Pricing
              </Link>
              <Link
                href="/security/"
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--cairno-fg-secondary)",
                  textDecoration: "none",
                }}
              >
                Security
              </Link>
            </HStack>

            <Button
              size="sm"
              variant="outline"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              borderRadius="full"
              px={3}
              borderColor="var(--cairno-border-strong)"
              bg="var(--cairno-bg-surface)"
              color="var(--cairno-fg-primary)"
              _hover={{
                bg: "var(--cairno-bg-subtle)",
              }}
            >
              <HStack gap={1.5}>
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
                <Text fontSize="xs" fontWeight="600">
                  {isDark ? "Light" : "Dark"}
                </Text>
              </HStack>
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
