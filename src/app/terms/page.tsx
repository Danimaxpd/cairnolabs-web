import type { Metadata } from "next";
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — Cairno Labs",
  description: "End-User License Agreement and Terms of Service for Cairno Labs software.",
};

export default function TermsPage() {
  return (
    <LegalShell eyebrow="Legal · EULA" title="Terms of Service" updatedAt="November 2026">
      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          1. Scope &amp; Marketplace Governance
        </Heading>
        <Text>
          These Terms govern your use of <strong>cairnolabs.com</strong> and software applications
          published by <strong>Cairno Labs</strong> on the Atlassian Marketplace. For Atlassian
          Marketplace installations, Atlassian&apos;s Marketplace Terms of Use and standard billing
          policies apply alongside these terms.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          2. License Grant
        </Heading>
        <Text>
          Subject to an active free or paid Marketplace subscription, Cairno Labs grants your
          organization a non-exclusive, non-transferable license to use our applications within your
          licensed Atlassian Cloud sites.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          3. Support &amp; Availability
        </Heading>
        <Text>
          Applications hosted on Atlassian Forge inherit Atlassian Cloud&apos;s platform
          availability. Cairno Labs provides asynchronous email support via{" "}
          <a href="mailto:support@cairnolabs.com" className="cairno-inline-link">
            support@cairnolabs.com
          </a>{" "}
          with target responses within one business day.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          4. Limitation of Liability
        </Heading>
        <Text>
          Our software is provided &quot;as is&quot; without warranties of merchantability or
          fitness for a particular purpose. To the maximum extent permitted by law, Cairno
          Labs&apos; aggregate liability for any claim shall not exceed the fees paid by your
          organization for the applicable app during the preceding twelve (12) months.
        </Text>
      </Box>
    </LegalShell>
  );
}
