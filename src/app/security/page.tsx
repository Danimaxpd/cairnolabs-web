import type { Metadata } from "next";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Security & Zero-Egress Architecture — Cairno Labs",
  description: "Security posture and Runs on Atlassian Zero-Egress architecture for Cairno Labs apps.",
};

export default function SecurityPage() {
  return (
    <LegalShell
      eyebrow="Trust · Architecture"
      title="Security & Zero-Egress Architecture"
      updatedAt="November 2026"
    >
      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          1. Built Exclusively on Atlassian Forge (Runs on Atlassian)
        </Heading>
        <Text>
          <strong>Cairno Docs</strong> is engineered to qualify for Atlassian&apos;s{" "}
          <em>Runs on Atlassian</em> architecture. All compute, macro configuration, and optional
          extended document storage remain inside Atlassian&apos;s infrastructure — inheriting
          Atlassian Cloud&apos;s data residency and compliance controls.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          2. Zero External Network Egress
        </Heading>
        <Text>
          Our v1 Forge manifest declares <strong>zero</strong> external fetch domains and{" "}
          <strong>zero</strong> external script origins. All rendering libraries (Markdown, Mermaid,
          and OpenAPI/Swagger viewers) are bundled statically inside the Forge Custom UI package and
          execute locally in the user&apos;s browser.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          3. Client-Side XSS Hardening
        </Heading>
        <Text>
          Markdown HTML output is sanitized with strict allowlists (
          <code className="cairno-mono">rehype-sanitize</code>), and Mermaid diagrams render under{" "}
          <code className="cairno-mono">securityLevel: &apos;strict&apos;</code> to block inline
          script execution inside SVG output.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          4. Vulnerability Disclosure
        </Heading>
        <Text>
          If you discover a potential security issue in any Cairno Labs product or website, please
          report it responsibly to{" "}
          <a href="mailto:security@cairnolabs.com" style={{ color: "var(--cairno-accent)" }}>
            security@cairnolabs.com
          </a>
          .
        </Text>
      </Box>
    </LegalShell>
  );
}
