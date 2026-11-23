"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Button, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { CairnLogo } from "@/components/CairnLogo";
import { useCairnoTheme } from "@/components/ThemeProvider";

const NAV_ITEMS = [
  { href: "/#product", label: "Cairno Docs" },
  { href: "/#architecture", label: "Zero-Egress" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/security/", label: "Security" },
];

export function Navbar() {
  const { theme, mounted, toggleTheme } = useCairnoTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isDark = mounted && theme === "dark";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
          <Link href="/" className="cairno-nav-link" style={{ display: "inline-flex" }}>
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

          <HStack gap={{ base: 2, md: 6 }} align="center">
            <HStack as="nav" aria-label="Primary navigation" gap={5} display={{ base: "none", md: "flex" }}>
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} className="cairno-nav-link">
                  {item.label}
                </Link>
              ))}
            </HStack>

            <Button
              size="sm"
              variant="outline"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={isDark}
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

            <Button
              display={{ base: "inline-flex", md: "none" }}
              size="sm"
              variant="outline"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              borderRadius="full"
              px={2.5}
              borderColor="var(--cairno-border-strong)"
              bg="var(--cairno-bg-surface)"
              color="var(--cairno-fg-primary)"
              _hover={{
                bg: "var(--cairno-bg-subtle)",
              }}
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          </HStack>
        </Flex>

        {mobileOpen && (
          <Box
            as="nav"
            aria-label="Mobile navigation"
            display={{ base: "block", md: "none" }}
            mt={3}
            pt={3}
            borderTop="1px solid"
            borderColor="var(--cairno-border)"
          >
            <VStack align="stretch" gap={2.5}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="cairno-nav-link"
                  onClick={() => setMobileOpen(false)}
                  style={{ padding: "4px 2px", display: "block" }}
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
          </Box>
        )}
      </Container>
    </Box>
  );
}
