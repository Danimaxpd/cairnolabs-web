"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { ShieldCheck } from "lucide-react";
import { getCookie, NOTICE_COOKIE_NAME, setFunctionalCookie } from "@/lib/cookies";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const acknowledged = getCookie(NOTICE_COOKIE_NAME);
    if (acknowledged !== "1") {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const handleDismiss = () => {
    setFunctionalCookie(NOTICE_COOKIE_NAME, "1");
    setVisible(false);
  };

  return (
    <Box
      role="region"
      aria-label="Cookie notice"
      position="fixed"
      bottom={{ base: 3, md: 5 }}
      right={{ base: 3, md: 5 }}
      left={{ base: 3, md: "auto" }}
      maxW="420px"
      zIndex={50}
      p={4}
      borderRadius="14px"
      border="1px solid"
      borderColor="var(--cairno-border-strong)"
      bg="var(--cairno-bg-surface)"
      boxShadow="var(--cairno-shadow-card)"
    >
      <Flex direction="column" gap={2.5}>
        <HStack gap={2} color="var(--cairno-accent)">
          <ShieldCheck size={16} />
          <Text fontSize="xs" fontWeight="700" textTransform="uppercase" letterSpacing="0.06em" className="cairno-mono">
            Functional Cookie Only · Zero Tracking
          </Text>
        </HStack>

        <Text fontSize="xs" lineHeight="1.6" color="var(--cairno-fg-secondary)">
          We store a single functional cookie ({" "}
          <Box as="code" className="cairno-mono" color="var(--cairno-fg-primary)">
            cairno_theme
          </Box>{" "}
          ) solely to remember your light or dark appearance preference. No analytics, no ad pixels, and no third-party tracking.
        </Text>

        <Flex align="center" justify="space-between" pt={1}>
          <Link
            href="/privacy/"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--cairno-accent)",
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </Link>
          <Button
            size="xs"
            borderRadius="full"
            px={4}
            onClick={handleDismiss}
            bg="var(--cairno-accent)"
            color="var(--cairno-accent-fg)"
            _hover={{ bg: "var(--cairno-accent-hover)" }}
          >
            Got it
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
