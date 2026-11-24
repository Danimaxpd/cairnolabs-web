import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Data Processing Addendum (DPA) — Cairno Labs",
  description:
    "GDPR Data Processing Addendum for Cairno Labs Atlassian Forge Zero-Egress applications.",
};

export default function DpaPage() {
  return (
    <LegalShell
      eyebrow="Legal · GDPR"
      title="Data Processing Addendum (DPA)"
      updatedAt="November 2026"
    >
      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          1. Scope &amp; Roles of the Parties
        </Heading>
        <Text>
          This Data Processing Addendum (&quot;DPA&quot;) forms part of the applicable End User
          License Agreement and{" "}
          <Link href="/terms/" className="cairno-inline-link">
            Terms of Service
          </Link>{" "}
          between your organization (&quot;Customer&quot;, acting as the{" "}
          <strong>Data Controller</strong>) and <strong>Cairno Labs</strong> (acting as the{" "}
          <strong>Data Processor</strong>) with respect to the processing of End-User Data under
          applicable data protection laws, including the EU/UK General Data Protection Regulation
          (GDPR), in connection with Atlassian Marketplace Cloud applications published by Cairno
          Labs (including <strong>Cairno Docs</strong>).
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          2. Nature, Purpose &amp; Categories of Data Processed
        </Heading>
        <Text mb={2}>
          Cairno Docs is designed to process technical documentation and does not intentionally
          collect, index, or store personal data, user credentials, or behavioral telemetry.
          Processing under this DPA is strictly limited to:
        </Text>
        <Box as="ul" pl={5} display="grid" gap={1.5}>
          <li>
            <strong>Subject Matter &amp; Purpose:</strong> Rendering and persisting user-authored
            Markdown documents, Mermaid diagrams, and OpenAPI 3.x specifications inside Customer
            Confluence Cloud pages.
          </li>
          <li>
            <strong>Categories of End-User Data:</strong> Only content voluntarily authored or
            pasted by Customer&apos;s Confluence users into a Cairno Docs macro (which may
            incidentally contain names, email addresses, or other personal data written inside
            technical RFCs or architecture notes).
          </li>
          <li>
            <strong>Data Subjects:</strong> Customer&apos;s authorized Confluence Cloud users and
            any individuals referenced within Customer-authored documentation.
          </li>
          <li>
            <strong>Duration:</strong> Solely for the duration of the active Confluence Cloud
            installation until Customer deletes the macro content or uninstalls the application.
          </li>
        </Box>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          3. Zero-Egress Architecture &amp; Sub-processors
        </Heading>
        <Text mb={2}>
          All Cairno Labs applications are built natively on <strong>Atlassian Forge</strong>{" "}
          (<em>Runs on Atlassian</em>) with <strong>zero external network egress</strong>. Cairno
          Labs operates no external application servers, third-party databases, analytics services,
          or external log sinks.
        </Text>
        <Box as="ul" pl={5} display="grid" gap={1.5}>
          <li>
            <strong>Storage Boundary:</strong> All macro payloads are stored exclusively within
            Confluence native macro configuration and Atlassian-hosted Forge App Storage (
            <code className="cairno-mono">storage:app</code>).
          </li>
          <li>
            <strong>Authorized Sub-processor:</strong>{" "}
            <strong>Atlassian Pty Ltd / Atlassian, Inc.</strong> (Atlassian Forge Cloud compute
            and hosted storage). No other sub-processors receive, process, or store Customer
            End-User Data.
          </li>
          <li>
            <strong>Data Residency:</strong> Because all in-scope data resides exclusively within
            Atlassian Forge Hosted Storage, data remains pinned to Customer&apos;s selected
            Atlassian Cloud Data Residency realm and supports Atlassian-managed region migrations.
          </li>
        </Box>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          4. Technical &amp; Organizational Security Measures
        </Heading>
        <Box as="ul" pl={5} display="grid" gap={1.5}>
          <li>
            Manifest-enforced zero external egress (zero{" "}
            <code className="cairno-mono">external.fetch</code> or external script domains).
          </li>
          <li>
            100% local browser rendering with strict XSS sanitization (
            <code className="cairno-mono">rehype-sanitize</code>, Mermaid{" "}
            <code className="cairno-mono">securityLevel: &apos;strict&apos;</code>, and read-only
            OpenAPI parsing with no live network execution).
          </li>
          <li>
            No logging of End-User Data in application logs or external diagnostics.
          </li>
          <li>
            Encryption in transit and at rest, access isolation, and infrastructure controls
            managed by Atlassian Cloud. See our{" "}
            <Link href="/security/" className="cairno-inline-link">
              Security &amp; Zero-Egress Architecture
            </Link>{" "}
            page for details.
          </li>
        </Box>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          5. Data Subject Rights, Deletion &amp; Incident Notification
        </Heading>
        <Text mb={2}>
          Because all End-User Data stays inside Customer&apos;s Confluence Cloud site and
          Atlassian Forge storage, Customer has direct, self-service control to access, rectify,
          export, or delete macro content at any time. Uninstalling Cairno Docs triggers
          Atlassian&apos;s standard Forge app storage cleanup lifecycle.
        </Text>
        <Text>
          Cairno Labs will assist Customer with data protection inquiries without undue delay and
          will notify Customer without undue delay (and no later than 48 hours after confirmation)
          upon becoming aware of any security incident affecting Cairno Labs application code or
          Customer End-User Data.
        </Text>
      </Box>

      <Box>
        <Heading as="h2" fontSize="lg" color="var(--cairno-fg-primary)" mb={2}>
          6. Contact &amp; Executed Copies
        </Heading>
        <Text>
          This DPA applies automatically to all Customers using Cairno Labs Forge applications on
          Atlassian Marketplace. To request a countersigned copy or submit privacy and compliance
          inquiries, contact{" "}
          <a href="mailto:security@cairnolabs.com" className="cairno-inline-link">
            security@cairnolabs.com
          </a>
          .
        </Text>
      </Box>
    </LegalShell>
  );
}
