import type { Metadata } from "next";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Cairno Labs",
  description: "Cairno Labs privacy policy covering cairnolabs.com and Runs on Atlassian Forge apps.",
};

export default function PrivacyPage() {
  return (
    <LegalShell eyebrow="Legal · Privacy" title="Privacy Policy" updatedAt="November 2026">
      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          1. Zero-Tracking Website Policy (cairnolabs.com)
        </Heading>
        <Text>
          Cairno Labs does not run Google Analytics, advertising pixels, behavioral fingerprinting,
          or third-party marketing cookies on <strong>cairnolabs.com</strong>. We use only two
          strictly functional first-party cookies stored locally in your browser:
        </Text>
        <Box as="ul" pl={5} mt={2} display="grid" gap={1.5}>
          <li>
            <code className="cairno-mono">cairno_theme</code> — remembers your chosen appearance
            mode (<code>light</code> or <code>dark</code>).
          </li>
          <li>
            <code className="cairno-mono">cairno_notice_ack</code> — remembers that you dismissed
            the informational cookie notice banner.
          </li>
        </Box>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          2. Atlassian Forge Apps (Zero External Egress)
        </Heading>
        <Text>
          Our Confluence Cloud applications (including <strong>Cairno Docs</strong>) are built on{" "}
          <strong>Atlassian Forge</strong> under the <em>Runs on Atlassian</em> model. Document
          contents, diagrams, and specifications are processed strictly within Atlassian&apos;s
          hosted infrastructure and your browser. Cairno Labs does not transmit, copy, or store
          Confluence page content on external third-party servers.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          3. Support Communications &amp; Billing
        </Heading>
        <Text>
          Subscriptions, invoicing, and tax compliance are processed exclusively by{" "}
          <strong>Atlassian Marketplace</strong>. When you contact{" "}
          <a href="mailto:support@cairnolabs.com" style={{ color: "var(--cairno-accent)" }}>
            support@cairnolabs.com
          </a>
          , we use your email solely to respond to your inquiry and never sell or share contact
          details with third parties.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          4. Data Deletion &amp; Contact
        </Heading>
        <Text>
          To request deletion of any support correspondence or ask privacy questions, email{" "}
          <a href="mailto:security@cairnolabs.com" style={{ color: "var(--cairno-accent)" }}>
            security@cairnolabs.com
          </a>
          .
        </Text>
      </Box>
    </LegalShell>
  );
}
