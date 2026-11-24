import type { Metadata } from "next";
import React from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Service Level Agreement (SLA) — Cairno Labs",
  description:
    "Support response times, availability posture, and Service Level Agreement for Cairno Labs Atlassian Marketplace apps.",
};

export default function SlaPage() {
  return (
    <LegalShell
      eyebrow="Legal · Support SLA"
      title="Service Level Agreement (SLA)"
      updatedAt="November 2026"
    >
      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          1. Scope &amp; Support Channels
        </Heading>
        <Text>
          This Service Level Agreement applies to all paid Atlassian Marketplace Cloud applications
          published by <strong>Cairno Labs</strong>. Support is provided asynchronously via email at{" "}
          <a href="mailto:support@cairnolabs.com" className="cairno-inline-link">
            support@cairnolabs.com
          </a>{" "}
          (and{" "}
          <a href="mailto:security@cairnolabs.com" className="cairno-inline-link">
            security@cairnolabs.com
          </a>{" "}
          for security reports).
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          2. Support Hours &amp; Initial Response Targets
        </Heading>
        <Text mb={3}>
          Standard support hours are <strong>Monday through Friday, 09:00–17:00 UTC-5 (EST)</strong>
          , excluding public holidays. Cairno Labs commits to an initial human response within{" "}
          <strong>24 hours on business days</strong> (5 days a week):
        </Text>
        <Box
          border="1px solid"
          borderColor="var(--cairno-border)"
          borderRadius="12px"
          overflow="hidden"
          fontSize="xs"
        >
          <Grid
            templateColumns={{ base: "1fr 1fr", sm: "1fr 1.6fr 0.9fr" }}
            bg="var(--cairno-bg-subtle)"
            px={3.5}
            py={2.5}
            fontWeight="700"
            color="var(--cairno-fg-primary)"
          >
            <Text>Severity</Text>
            <Text display={{ base: "none", sm: "block" }}>Description</Text>
            <Text>Initial Response</Text>
          </Grid>
          {[
            [
              "Critical (P1)",
              "App completely unusable across an active production site or confirmed security issue.",
              "≤ 24 hours (Mon–Fri)",
            ],
            [
              "High (P2)",
              "Major functional defect with no practical workaround affecting multiple users.",
              "≤ 24 hours (Mon–Fri)",
            ],
            [
              "Standard (P3)",
              "Minor issue, rendering edge case, configuration question, or feature inquiry.",
              "≤ 1–2 business days",
            ],
          ].map(([sev, desc, target]) => (
            <Grid
              key={sev}
              templateColumns={{ base: "1fr 1fr", sm: "1fr 1.6fr 0.9fr" }}
              px={3.5}
              py={2.5}
              borderTop="1px solid"
              borderColor="var(--cairno-border)"
              gap={2}
            >
              <Text fontWeight="600" color="var(--cairno-fg-primary)">
                {sev}
              </Text>
              <Text display={{ base: "none", sm: "block" }}>{desc}</Text>
              <Text className="cairno-mono" color="var(--cairno-accent)" fontWeight="600">
                {target}
              </Text>
            </Grid>
          ))}
        </Box>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          3. Platform Availability (Runs on Atlassian)
        </Heading>
        <Text>
          Cairno Labs apps are built natively on <strong>Atlassian Forge</strong> with zero
          external hosting servers. Accordingly, runtime uptime and infrastructure availability are
          governed directly by <strong>Atlassian Cloud</strong> platform availability and status
          commitments.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          4. Included Support &amp; Exclusions
        </Heading>
        <Text mb={2}>
          <strong>Included:</strong> Investigation of confirmed software defects, compatibility
          updates for supported Atlassian Cloud releases, security vulnerability triage, and setup
          guidance for documented features.
        </Text>
        <Text>
          <strong>Excluded:</strong> Outages originating in Atlassian Cloud or third-party add-ons,
          custom feature development or bespoke consulting, unsupported legacy browsers, and
          unlicensed or expired trial instances. Initial response targets represent acknowledgement
          and triage by engineering, not guaranteed resolution time for upstream platform defects.
        </Text>
      </Box>
    </LegalShell>
  );
}
