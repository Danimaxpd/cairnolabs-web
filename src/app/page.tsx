import React from "react";
import Link from "next/link";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  ArrowRight,
  Check,
  Layers,
  Lock,
  Mail,
  ServerOff,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { DocsShowcase } from "@/components/DocsShowcase";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <Box minH="100vh" bg="var(--cairno-bg-canvas)" color="var(--cairno-fg-primary)">
      <Navbar />

      {/* HERO */}
      <Box
        as="section"
        className="cairno-dot-grid"
        borderBottom="1px solid"
        borderColor="var(--cairno-border)"
        py={{ base: 14, md: 24 }}
      >
        <Container maxW="1120px" px={{ base: 4, md: 6 }}>
          <VStack align="flex-start" gap={6} maxW="780px">
            <Badge
              className="cairno-mono"
              px={3}
              py={1}
              borderRadius="full"
              border="1px solid"
              borderColor="var(--cairno-border-strong)"
              bg="var(--cairno-bg-surface)"
              color="var(--cairno-accent)"
              fontSize="11px"
              fontWeight="600"
              letterSpacing="0.06em"
            >
              INDEPENDENT B2B SOFTWARE STUDIO · ZERO-EGRESS BY DEFAULT
            </Badge>

            <Heading
              as="h1"
              fontSize={{ base: "3xl", sm: "4xl", md: "56px" }}
              lineHeight={{ base: "1.12", md: "1.06" }}
              letterSpacing="-0.035em"
              fontWeight="800"
              color="var(--cairno-fg-primary)"
            >
              Software built like stacked stone — quiet, zero-egress, made to last.
            </Heading>

            <Text
              fontSize={{ base: "md", md: "xl" }}
              lineHeight="1.65"
              color="var(--cairno-fg-secondary)"
              maxW="660px"
            >
              Cairno Labs builds focused B2B utilities for modern cloud platforms — starting with{" "}
              <Box as="strong" color="var(--cairno-fg-primary)">
                Cairno Docs for Confluence
              </Box>
              . No external vendor servers, no bloated suites, and no surprise enterprise markups.
            </Text>

            <HStack gap={3} pt={2} wrap="wrap">
              <a href="#product" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  borderRadius="12px"
                  px={6}
                  bg="var(--cairno-accent)"
                  color="var(--cairno-accent-fg)"
                  fontWeight="600"
                  _hover={{ bg: "var(--cairno-accent-hover)" }}
                >
                  <HStack gap={2}>
                    <Text>Explore Cairno Docs</Text>
                    <ArrowRight size={17} />
                  </HStack>
                </Button>
              </a>

              <Link href="/security/" style={{ textDecoration: "none" }}>
                <Button
                  size="lg"
                  variant="outline"
                  borderRadius="12px"
                  px={6}
                  borderColor="var(--cairno-border-strong)"
                  bg="var(--cairno-bg-surface)"
                  color="var(--cairno-fg-primary)"
                  fontWeight="600"
                  _hover={{ bg: "var(--cairno-bg-subtle)" }}
                >
                  Zero-Egress Architecture
                </Button>
              </Link>
            </HStack>

            <Grid
              templateColumns={{ base: "1fr", sm: "repeat(3, auto)" }}
              gap={{ base: 3, sm: 8 }}
              pt={4}
            >
              {[
                ["100%", "Client-side rendering"],
                ["$0", "External data egress"],
                ["Free ≤ 10", "Users on Confluence Cloud"],
              ].map(([metric, label]) => (
                <Box key={label}>
                  <Text
                    className="cairno-mono"
                    fontSize="lg"
                    fontWeight="700"
                    color="var(--cairno-fg-primary)"
                  >
                    {metric}
                  </Text>
                  <Text fontSize="xs" color="var(--cairno-fg-muted)">
                    {label}
                  </Text>
                </Box>
              ))}
            </Grid>
          </VStack>
        </Container>
      </Box>

      {/* FLAGSHIP PRODUCT: CAIRNO DOCS */}
      <Box as="section" id="product" py={{ base: 14, md: 20 }}>
        <Container maxW="1120px" px={{ base: 4, md: 6 }}>
          <VStack align="stretch" gap={8}>
            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "flex-start", md: "flex-end" }}
              gap={4}
            >
              <Box maxW="640px">
                <Text
                  className="cairno-mono"
                  fontSize="xs"
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  color="var(--cairno-ochre)"
                  fontWeight="700"
                  mb={2}
                >
                  Flagship Product · Confluence Cloud
                </Text>
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  letterSpacing="-0.03em"
                  mb={3}
                >
                  Cairno Docs: Markdown, Mermaid &amp; OpenAPI
                </Heading>
                <Text color="var(--cairno-fg-secondary)" lineHeight="1.7">
                  One lightweight macro for engineering RFCs, architecture diagrams, and API specs.
                  Live split-pane editing, Expand-macro safe rendering, dark-mode sync, and 1-click
                  SVG/PNG exports — without your intellectual property ever leaving Atlassian.
                </Text>
              </Box>
              <Badge
                className="cairno-mono"
                px={3}
                py={1.5}
                borderRadius="10px"
                bg="var(--cairno-accent-soft)"
                color="var(--cairno-accent)"
                fontSize="xs"
                fontWeight="600"
              >
                Coming to Atlassian Marketplace
              </Badge>
            </Flex>

            <DocsShowcase />
          </VStack>
        </Container>
      </Box>

      {/* ZERO-EGRESS ARCHITECTURE PRINCIPLES */}
      <Box
        as="section"
        id="architecture"
        py={{ base: 14, md: 20 }}
        borderTop="1px solid"
        borderBottom="1px solid"
        borderColor="var(--cairno-border)"
        bg="var(--cairno-bg-subtle)"
      >
        <Container maxW="1120px" px={{ base: 4, md: 6 }}>
          <Box maxW="620px" mb={10}>
            <Text
              className="cairno-mono"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.1em"
              color="var(--cairno-accent)"
              fontWeight="700"
              mb={2}
            >
              Built for Security Reviews
            </Text>
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} letterSpacing="-0.025em">
              Why engineering &amp; IT teams choose Zero-Egress Forge apps
            </Heading>
          </Box>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {[
              {
                icon: ServerOff,
                title: "Zero External Servers",
                body: "Legacy Connect macros ship your internal architecture diagrams and OpenAPI specs through third-party vendor servers. Cairno Docs runs strictly inside Atlassian Forge and your browser.",
              },
              {
                icon: ShieldCheck,
                title: "Strict XSS & Content Hygiene",
                body: "Markdown is sanitized via rehype-sanitize, Mermaid executes in strict security mode, and our Forge manifest declares zero external fetch permissions.",
              },
              {
                icon: Layers,
                title: "Three Formats, One Predictable Bill",
                body: "Replace fragmented single-purpose Markdown, Mermaid, and Swagger add-ons with one cohesive macro designed for Atlassian's 2027 Connect End-of-Support transition.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <Box
                key={title}
                p={6}
                borderRadius="16px"
                border="1px solid"
                borderColor="var(--cairno-border)"
                bg="var(--cairno-bg-surface)"
              >
                <Box
                  w={10}
                  h={10}
                  borderRadius="10px"
                  bg="var(--cairno-accent-soft)"
                  color="var(--cairno-accent)"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={4}
                >
                  <Icon size={20} />
                </Box>
                <Heading as="h3" fontSize="lg" letterSpacing="-0.015em" mb={2}>
                  {title}
                </Heading>
                <Text fontSize="sm" lineHeight="1.7" color="var(--cairno-fg-secondary)">
                  {body}
                </Text>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* TRANSPARENT PRICING */}
      <Box as="section" id="pricing" py={{ base: 14, md: 20 }}>
        <Container maxW="1120px" px={{ base: 4, md: 6 }}>
          <VStack align="flex-start" gap={3} maxW="620px" mb={10}>
            <Text
              className="cairno-mono"
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.1em"
              color="var(--cairno-ochre)"
              fontWeight="700"
            >
              Simple Atlassian Marketplace Billing
            </Text>
            <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} letterSpacing="-0.025em">
              Transparent pricing. Half the cost of legacy suites.
            </Heading>
            <Text color="var(--cairno-fg-secondary)" fontSize="sm" lineHeight="1.7">
              Billed natively on your existing Atlassian invoice. No separate contracts, no hidden
              overages, and a 30-day free trial for every paid tier.
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} maxW="880px">
            {/* Free Tier */}
            <Box
              p={7}
              borderRadius="18px"
              border="1px solid"
              borderColor="var(--cairno-border)"
              bg="var(--cairno-bg-surface)"
            >
              <Text className="cairno-mono" fontSize="xs" color="var(--cairno-fg-muted)" mb={1}>
                STARTER · UP TO 10 USERS
              </Text>
              <HStack align="baseline" gap={1.5} mb={4}>
                <Text fontSize="4xl" fontWeight="800" letterSpacing="-0.03em">
                  $0
                </Text>
                <Text fontSize="sm" color="var(--cairno-fg-muted)">
                  / month forever
                </Text>
              </HStack>
              <VStack align="stretch" gap={2.5} mb={6} fontSize="sm" color="var(--cairno-fg-secondary)">
                {[
                  "Full Markdown (GFM), Mermaid & OpenAPI 3.1 support",
                  "Live Split-Pane editor + Dark Mode sync",
                  "1-click SVG & 2x PNG diagram exports",
                  "100% Zero-Egress Runs on Atlassian architecture",
                ].map((item) => (
                  <HStack key={item} gap={2.5} align="flex-start">
                    <Box color="var(--cairno-accent)" pt="3px">
                      <Check size={15} />
                    </Box>
                    <Text>{item}</Text>
                  </HStack>
                ))}
              </VStack>
              <a href="mailto:support@cairnolabs.com?subject=Cairno%20Docs%20Early%20Access" style={{ textDecoration: "none" }}>
                <Button
                  w="100%"
                  variant="outline"
                  borderRadius="10px"
                  borderColor="var(--cairno-border-strong)"
                  color="var(--cairno-fg-primary)"
                  _hover={{ bg: "var(--cairno-bg-subtle)" }}
                >
                  Request Early Access
                </Button>
              </a>
            </Box>

            {/* Paid Tier */}
            <Box
              p={7}
              borderRadius="18px"
              border="2px solid"
              borderColor="var(--cairno-accent)"
              bg="var(--cairno-bg-surface)"
              boxShadow="var(--cairno-shadow-card)"
            >
              <Flex justify="space-between" align="center" mb={1}>
                <Text className="cairno-mono" fontSize="xs" color="var(--cairno-accent)" fontWeight="700">
                  TEAM &amp; ENTERPRISE · 11+ USERS
                </Text>
                <Badge
                  className="cairno-mono"
                  px={2}
                  py={0.5}
                  borderRadius="full"
                  bg="var(--cairno-ochre-soft)"
                  color="var(--cairno-ochre)"
                  fontSize="10px"
                >
                  30-DAY FREE TRIAL
                </Badge>
              </Flex>
              <HStack align="baseline" gap={1.5} mb={4}>
                <Text fontSize="4xl" fontWeight="800" letterSpacing="-0.03em">
                  $0.55
                </Text>
                <Text fontSize="sm" color="var(--cairno-fg-muted)">
                  / user / month
                </Text>
              </HStack>
              <VStack align="stretch" gap={2.5} mb={6} fontSize="sm" color="var(--cairno-fg-secondary)">
                {[
                  "~$55/mo for 100 users (over 50% less than legacy suites)",
                  "Everything in Starter, unlimited pages & macros",
                  "Native Atlassian Marketplace billing & progressive volume tiers",
                  "Direct asynchronous engineering support (<24h business days)",
                ].map((item) => (
                  <HStack key={item} gap={2.5} align="flex-start">
                    <Box color="var(--cairno-accent)" pt="3px">
                      <Check size={15} />
                    </Box>
                    <Text>{item}</Text>
                  </HStack>
                ))}
              </VStack>
              <a href="mailto:support@cairnolabs.com?subject=Cairno%20Docs%20Team%20Waitlist" style={{ textDecoration: "none" }}>
                <Button
                  w="100%"
                  borderRadius="10px"
                  bg="var(--cairno-accent)"
                  color="var(--cairno-accent-fg)"
                  _hover={{ bg: "var(--cairno-accent-hover)" }}
                >
                  <HStack gap={2}>
                    <Sparkles size={15} />
                    <Text>Join Marketplace Launch List</Text>
                  </HStack>
                </Button>
              </a>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* CONTACT / TRUST CTA */}
      <Box as="section" id="contact" pb={6}>
        <Container maxW="1120px" px={{ base: 4, md: 6 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            gap={6}
            p={{ base: 6, md: 9 }}
            borderRadius="20px"
            border="1px solid"
            borderColor="var(--cairno-border)"
            bg="var(--cairno-bg-surface)"
          >
            <Box maxW="600px">
              <HStack gap={2} color="var(--cairno-accent)" mb={2}>
                <Lock size={16} />
                <Text className="cairno-mono" fontSize="xs" fontWeight="700" textTransform="uppercase">
                  Direct Asynchronous Support
                </Text>
              </HStack>
              <Heading as="h2" fontSize={{ base: "xl", md: "2xl" }} letterSpacing="-0.02em" mb={2}>
                Questions about security review or Connect → Forge migration?
              </Heading>
              <Text fontSize="sm" color="var(--cairno-fg-secondary)" lineHeight="1.65">
                Reach our engineering team directly by email. No sales calls, no bots, and no
                ticket mazes.
              </Text>
            </Box>

            <a href="mailto:support@cairnolabs.com" style={{ textDecoration: "none" }}>
              <Button
                size="lg"
                borderRadius="12px"
                px={6}
                bg="var(--cairno-accent)"
                color="var(--cairno-accent-fg)"
                _hover={{ bg: "var(--cairno-accent-hover)" }}
              >
                <HStack gap={2}>
                  <Mail size={16} />
                  <Text>support@cairnolabs.com</Text>
                </HStack>
              </Button>
            </a>
          </Flex>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
