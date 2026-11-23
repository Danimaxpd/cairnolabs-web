import React from "react";
import Link from "next/link";
import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { CairnLogo } from "@/components/CairnLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      borderTop="1px solid"
      borderColor="var(--cairno-border)"
      bg="var(--cairno-bg-surface)"
      py={10}
      mt={16}
    >
      <Container maxW="1120px" px={{ base: 4, md: 6 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap={6}
        >
          <Box>
            <HStack gap={2.5} mb={2}>
              <CairnLogo size={24} />
              <Text fontWeight="700" fontSize="sm" color="var(--cairno-fg-primary)">
                Cairno Labs
              </Text>
            </HStack>
            <Text fontSize="xs" color="var(--cairno-fg-muted)" maxW="420px" lineHeight="1.6">
              Focused, zero-egress B2B software utilities engineered to last.
              This website uses only a functional theme preference cookie — zero analytics or ad tracking.
            </Text>
          </Box>

          <Flex direction="column" align={{ base: "flex-start", md: "flex-end" }} gap={2}>
            <HStack gap={5} wrap="wrap" fontSize="xs" fontWeight="600">
              <Link href="/privacy/" style={{ color: "var(--cairno-fg-secondary)", textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link href="/terms/" style={{ color: "var(--cairno-fg-secondary)", textDecoration: "none" }}>
                Terms of Service
              </Link>
              <Link href="/security/" style={{ color: "var(--cairno-fg-secondary)", textDecoration: "none" }}>
                Security &amp; Zero-Egress
              </Link>
              <a
                href="mailto:support@cairnolabs.com"
                style={{ color: "var(--cairno-accent)", textDecoration: "none" }}
              >
                support@cairnolabs.com
              </a>
            </HStack>
            <Text className="cairno-mono" fontSize="11px" color="var(--cairno-fg-muted)">
              © {year} Cairno Labs · cairnolabs.com
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
