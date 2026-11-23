"use client";

import React, { useState } from "react";
import { Badge, Box, Button, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import { Check, Code2, Download, FileText, GitBranch, Lock } from "lucide-react";

type Mode = "mermaid" | "markdown" | "openapi";

const CODE_SNIPPETS: Record<Mode, string> = {
  mermaid: `flowchart LR
  A[Confluence Page] --> B[Cairno Docs Macro]
  B --> C{100% Browser Render}
  C -->|Zero Egress| D[SVG / PNG Export]
  C -->|Theme Sync| E[Light & Dark Mode]`,
  markdown: `# Service Architecture RFC-14

| Component | Hosting | External Egress |
| :--- | :--- | :---: |
| Rendering Engine | Browser (Forge UI) | None |
| Spec Storage | Atlassian Forge | None |
| Security Review | Runs on Atlassian | Passed |

\`\`\`bash
forge deploy -e production
\`\`\``,
  openapi: `openapi: 3.1.0
info:
  title: Orders Fulfillment API
  version: 2.4.0
paths:
  /v2/orders/{orderId}/dispatch:
    post:
      summary: Dispatch verified shipment
      responses:
        "200":
          description: Shipment queued`,
};

export function DocsShowcase() {
  const [mode, setMode] = useState<Mode>("mermaid");

  return (
    <Box
      border="1px solid"
      borderColor="var(--cairno-border)"
      borderRadius="20px"
      bg="var(--cairno-bg-surface)"
      boxShadow="var(--cairno-shadow-card)"
      overflow="hidden"
    >
      {/* Top Editor Chrome */}
      <Flex
        px={{ base: 4, md: 5 }}
        py={3}
        borderBottom="1px solid"
        borderColor="var(--cairno-border)"
        bg="var(--cairno-bg-subtle)"
        align="center"
        justify="space-between"
        wrap="wrap"
        gap={3}
      >
        <HStack gap={2} wrap="wrap">
          <Button
            size="xs"
            borderRadius="full"
            px={3}
            onClick={() => setMode("mermaid")}
            bg={mode === "mermaid" ? "var(--cairno-accent)" : "transparent"}
            color={mode === "mermaid" ? "var(--cairno-accent-fg)" : "var(--cairno-fg-secondary)"}
            border="1px solid"
            borderColor={mode === "mermaid" ? "transparent" : "var(--cairno-border-strong)"}
            _hover={{ opacity: 0.9 }}
          >
            <HStack gap={1.5}>
              <GitBranch size={13} />
              <Text>Mermaid</Text>
            </HStack>
          </Button>
          <Button
            size="xs"
            borderRadius="full"
            px={3}
            onClick={() => setMode("markdown")}
            bg={mode === "markdown" ? "var(--cairno-accent)" : "transparent"}
            color={mode === "markdown" ? "var(--cairno-accent-fg)" : "var(--cairno-fg-secondary)"}
            border="1px solid"
            borderColor={mode === "markdown" ? "transparent" : "var(--cairno-border-strong)"}
            _hover={{ opacity: 0.9 }}
          >
            <HStack gap={1.5}>
              <FileText size={13} />
              <Text>Markdown</Text>
            </HStack>
          </Button>
          <Button
            size="xs"
            borderRadius="full"
            px={3}
            onClick={() => setMode("openapi")}
            bg={mode === "openapi" ? "var(--cairno-accent)" : "transparent"}
            color={mode === "openapi" ? "var(--cairno-accent-fg)" : "var(--cairno-fg-secondary)"}
            border="1px solid"
            borderColor={mode === "openapi" ? "transparent" : "var(--cairno-border-strong)"}
            _hover={{ opacity: 0.9 }}
          >
            <HStack gap={1.5}>
              <Code2 size={13} />
              <Text>OpenAPI 3.1</Text>
            </HStack>
          </Button>
        </HStack>

        <HStack gap={2}>
          <Badge
            className="cairno-mono"
            px={2.5}
            py={0.5}
            borderRadius="full"
            bg="var(--cairno-ochre-soft)"
            color="var(--cairno-ochre)"
            fontSize="11px"
            fontWeight="600"
          >
            <HStack gap={1}>
              <Lock size={11} />
              <Text>0 external requests</Text>
            </HStack>
          </Badge>
        </HStack>
      </Flex>

      {/* Split-Pane Preview */}
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        {/* Source Pane */}
        <Box
          minW={0}
          p={{ base: 4, md: 6 }}
          bg="var(--cairno-bg-code)"
          borderRight={{ base: "none", md: "1px solid" }}
          borderBottom={{ base: "1px solid", md: "none" }}
          borderColor="var(--cairno-border)"
        >
          <Flex justify="space-between" align="center" mb={3}>
            <Text
              className="cairno-mono"
              fontSize="11px"
              textTransform="uppercase"
              letterSpacing="0.08em"
              color="var(--cairno-fg-muted)"
            >
              Source ({mode})
            </Text>
            <Text className="cairno-mono" fontSize="11px" color="var(--cairno-accent)">
              Live Split-Pane
            </Text>
          </Flex>
          <Box
            as="pre"
            className="cairno-mono"
            fontSize={{ base: "12px", md: "12.5px" }}
            lineHeight="1.65"
            color="var(--cairno-fg-secondary)"
            overflowX="auto"
            maxW="100%"
            m={0}
          >
            {CODE_SNIPPETS[mode]}
          </Box>
        </Box>

        {/* Rendered Preview Pane */}
        <Box minW={0} p={{ base: 4, md: 6 }} bg="var(--cairno-bg-surface)">
          <Flex justify="space-between" align="center" mb={4}>
            <Text
              className="cairno-mono"
              fontSize="11px"
              textTransform="uppercase"
              letterSpacing="0.08em"
              color="var(--cairno-fg-muted)"
            >
              Confluence Live Render
            </Text>
            <HStack gap={1} color="var(--cairno-fg-muted)" fontSize="11px" className="cairno-mono">
              <Download size={12} />
              <Text>SVG / PNG</Text>
            </HStack>
          </Flex>

          {mode === "mermaid" && (
            <VStack align="stretch" gap={3} py={2}>
              <Flex align="center" justify="center" gap={2} wrap="wrap">
                <Box
                  px={3.5}
                  py={2}
                  borderRadius="10px"
                  border="1px solid"
                  borderColor="var(--cairno-border-strong)"
                  bg="var(--cairno-bg-subtle)"
                  fontSize="xs"
                  fontWeight="600"
                >
                  Confluence Page
                </Box>
                <Text color="var(--cairno-fg-muted)">→</Text>
                <Box
                  px={3.5}
                  py={2}
                  borderRadius="10px"
                  border="1px solid"
                  borderColor="var(--cairno-accent)"
                  bg="var(--cairno-accent-soft)"
                  color="var(--cairno-accent)"
                  fontSize="xs"
                  fontWeight="700"
                >
                  Cairno Docs Macro
                </Box>
              </Flex>
              <Flex justify="center">
                <Text color="var(--cairno-fg-muted)" fontSize="xs">
                  ↓ 100% Browser Render (Forge Custom UI)
                </Text>
              </Flex>
              <Grid templateColumns="1fr 1fr" gap={3}>
                <Box
                  p={3}
                  borderRadius="10px"
                  border="1px solid"
                  borderColor="var(--cairno-border)"
                  bg="var(--cairno-bg-canvas)"
                  textAlign="center"
                >
                  <Text className="cairno-mono" fontSize="11px" color="var(--cairno-ochre)" mb={1}>
                    Zero Egress
                  </Text>
                  <Text fontSize="xs" fontWeight="600">
                    1-Click SVG / PNG Export
                  </Text>
                </Box>
                <Box
                  p={3}
                  borderRadius="10px"
                  border="1px solid"
                  borderColor="var(--cairno-border)"
                  bg="var(--cairno-bg-canvas)"
                  textAlign="center"
                >
                  <Text className="cairno-mono" fontSize="11px" color="var(--cairno-accent)" mb={1}>
                    Theme Sync
                  </Text>
                  <Text fontSize="xs" fontWeight="600">
                    Light &amp; Dark Native
                  </Text>
                </Box>
              </Grid>
            </VStack>
          )}

          {mode === "markdown" && (
            <VStack align="stretch" gap={3}>
              <Text fontWeight="700" fontSize="md" letterSpacing="-0.01em">
                Service Architecture RFC-14
              </Text>
              <Box
                border="1px solid"
                borderColor="var(--cairno-border)"
                borderRadius="10px"
                overflow="hidden"
                fontSize="xs"
              >
                <Grid
                  templateColumns="1.2fr 1fr 0.8fr"
                  bg="var(--cairno-bg-subtle)"
                  px={3}
                  py={2}
                  fontWeight="700"
                >
                  <Text>Component</Text>
                  <Text>Hosting</Text>
                  <Text>Egress</Text>
                </Grid>
                {[
                  ["Rendering Engine", "Browser", "None"],
                  ["Spec Storage", "Forge Native", "None"],
                  ["Security Review", "Runs on Atlassian", "Passed"],
                ].map(([col1, col2, col3]) => (
                  <Grid
                    key={col1}
                    templateColumns="1.2fr 1fr 0.8fr"
                    px={3}
                    py={2}
                    borderTop="1px solid"
                    borderColor="var(--cairno-border)"
                    color="var(--cairno-fg-secondary)"
                  >
                    <Text fontWeight="500">{col1}</Text>
                    <Text>{col2}</Text>
                    <Text color="var(--cairno-accent)" fontWeight="600">
                      {col3}
                    </Text>
                  </Grid>
                ))}
              </Box>
            </VStack>
          )}

          {mode === "openapi" && (
            <VStack align="stretch" gap={3}>
              <Flex justify="space-between" align="center">
                <Text fontWeight="700" fontSize="md">
                  Orders Fulfillment API
                </Text>
                <Badge
                  className="cairno-mono"
                  fontSize="11px"
                  px={2}
                  py={0.5}
                  borderRadius="md"
                  bg="var(--cairno-bg-subtle)"
                  color="var(--cairno-fg-secondary)"
                >
                  v2.4.0
                </Badge>
              </Flex>
              <Box
                p={3.5}
                borderRadius="10px"
                border="1px solid"
                borderColor="var(--cairno-border)"
                bg="var(--cairno-bg-canvas)"
              >
                <HStack gap={2.5} mb={2} wrap="wrap">
                  <Badge
                    className="cairno-mono"
                    px={2}
                    py={0.5}
                    borderRadius="md"
                    bg="var(--cairno-accent)"
                    color="var(--cairno-accent-fg)"
                    fontSize="11px"
                    fontWeight="700"
                  >
                    POST
                  </Badge>
                  <Text className="cairno-mono" fontSize="xs" fontWeight="600">
                    /v2/orders/{"{orderId}"}/dispatch
                  </Text>
                </HStack>
                <Text fontSize="xs" color="var(--cairno-fg-muted)" mb={2.5}>
                  Dispatch verified shipment
                </Text>
                <HStack gap={1.5} color="var(--cairno-accent)" fontSize="xs" fontWeight="600">
                  <Check size={14} />
                  <Text className="cairno-mono">200 OK · Shipment queued</Text>
                </HStack>
              </Box>
            </VStack>
          )}
        </Box>
      </Grid>
    </Box>
  );
}
