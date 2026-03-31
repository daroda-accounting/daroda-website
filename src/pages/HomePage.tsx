import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { RouterLink } from "../components/RouterLink";

type Testimonial = {
  name: string;
  company: string | null;
  role: string | null;
  photo: string | null;
  feedback: string;
};

const calendlyUrl = "https://calendly.com/darodaaccounting/initialconsult";

function SectionShell({ children }: { children: React.ReactNode }) {
  return (
    <Box w="full">
      <Box maxW="1280px" mx="auto" px={{ base: 4, md: 10 }}>
        {children}
      </Box>
    </Box>
  );
}

function PrimaryCtaButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button
      borderRadius="0"
      bg="red.500"
      color="white"
      px={10}
      h="48px"
      letterSpacing="0.08em"
      fontWeight="500"
      textTransform="uppercase"
      _hover={{ bg: "red.600" }}
      {...props}
    />
  );
}

function SecondaryCtaButton(props: React.ComponentProps<typeof Button>) {
  return (
    <Button
      borderRadius="0"
      bg="orange.600"
      color="white"
      px={10}
      h="48px"
      letterSpacing="0.08em"
      fontWeight="500"
      textTransform="uppercase"
      _hover={{ bg: "orange.700" }}
      {...props}
    />
  );
}

function SerifHeading(props: React.ComponentProps<typeof Text>) {
  return (
    <Text
      as="h2"
      fontFamily="serif"
      fontWeight="600"
      lineHeight="1"
      {...props}
    />
  );
}

function HeroSection() {
  return (
    <Box
      w="full"
      minH={{ base: "520px", md: "560px" }}
      bgImage="url(/images/homepage-01-hero-image.avif)"
      bgSize="cover"
      bgPos="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      py={{ base: 10, md: 14 }}
    >
      <Box
        bg="whiteAlpha.800"
        w={{ base: "92%", md: "760px" }}
        px={{ base: 6, md: 12 }}
        py={{ base: 8, md: 10 }}
        textAlign="center"
      >
        <Text
          color="red.500"
          letterSpacing="0.12em"
          textTransform="uppercase"
          fontSize="sm"
          mb={3}
        >
          Hey beauty professionals!
        </Text>
        <SerifHeading color="#b59b63" fontSize={{ base: "44px", md: "60px" }}>
          Tired of leaving
          <br />
          money on the table?
        </SerifHeading>
        <Text mt={4} maxW="520px" mx="auto" color="blackAlpha.700">
          It's time to be <Text as="span" fontWeight="700">empowered about your money</Text>,
          <br />
          run your business with <Text as="span" fontWeight="700">ease</Text> and do what you do best!
        </Text>
        <PrimaryCtaButton asChild mt={8}>
          <a href={calendlyUrl} target="_blank" rel="noreferrer">
            TAKE THE NEXT BEST STEP!
          </a>
        </PrimaryCtaButton>
      </Box>
    </Box>
  );
}

function IntroSection() {
  return (
    <Box
      bg="orange.600"
      color="white"
      position="relative"
      py={{ base: 14, md: 16 }}
      overflow="hidden"
      _after={{
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: "-120px",
        height: "240px",
        bg: "white",
        borderTopLeftRadius: "100%",
        borderTopRightRadius: "100%",
      }}
    >
      <SectionShell>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          gap={{ base: 10, md: 14 }}
          position="relative"
          zIndex={1}
        >
          <Box
            bg="#d8b9a8"
            p={8}
            borderRadius="2xl"
            maxW={{ base: "360px", md: "380px" }}
            w="full"
          >
            <Image
              src="/images/homepage-02-rose-profile.avif"
              alt="Rose"
              borderRadius="xl"
              objectFit="cover"
              w="full"
            />
          </Box>
          <Box maxW="680px" textAlign={{ base: "center", md: "left" }}>
            <SerifHeading fontSize={{ base: "44px", md: "64px" }}>
              Let's be honest....
            </SerifHeading>
            <Text fontSize={{ base: "18px", md: "22px" }} mt={4}>
              Your business should be serving <Text as="span" fontWeight="800">you</Text>, not the other way around.
            </Text>

            <SerifHeading fontSize={{ base: "44px", md: "70px" }} mt={10}>
              Hey! I'm Rose!
            </SerifHeading>
            <Text mt={4} maxW="560px">
              As a seasoned finance professional with over 10 years of experience, I know first-hand that running a business
              can be hard AF! I've made mistakes and I don't want you to make the same ones.
            </Text>
            <Text mt={4} fontSize={{ base: "18px", md: "20px" }}>
              Since running my business, I've helped my clients save an average of <Text as="span" fontWeight="900">600%</Text> at tax time!
            </Text>

            <PrimaryCtaButton asChild mt={10}>
              <a href={calendlyUrl} target="_blank" rel="noreferrer">
                IT'S YOUR TURN!
              </a>
            </PrimaryCtaButton>
          </Box>
        </Flex>
      </SectionShell>
    </Box>
  );
}

function CheckSquareIcon({ size = 44 }: { size?: number }) {
  return (
    <Box as="span" display="inline-flex" w={`${size}px`} h={`${size}px`}>
      <svg viewBox="0 0 200 200" width={size} height={size} aria-hidden="true">
        <rect x="10" y="10" width="180" height="180" fill="none" stroke="#ef4444" strokeWidth="10" />
        <path
          d="M55 105 L90 140 L150 65"
          fill="none"
          stroke="#f97316"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
}

function WorkHardSection() {
  const items = [
    "Having enough money to take care of your day-to-day activities.",
    "Going on that much needed vacation (whether solo or with family).",
    "Saving for your retirement.",
    "Writing checks with ease.",
  ];

  return (
    <Box bg="white" py={{ base: 18, md: 24 }}>
      <SectionShell>
        <Box maxW="980px" mx="auto">
          <SerifHeading color="red.500" fontSize={{ base: "44px", md: "66px" }} textAlign="center">
            You work hard in your business, and
            <br />
            don't need to be stressed out about...
          </SerifHeading>

          <Stack gap={10} mt={{ base: 12, md: 14 }} align="start" maxW="740px" mx="auto">
            {items.map((text) => (
              <HStack key={text} gap={6} align="center">
                <CheckSquareIcon />
                <Text fontSize={{ base: "18px", md: "20px" }} color="black" textAlign="left">
                  {text}
                </Text>
              </HStack>
            ))}
          </Stack>
        </Box>
      </SectionShell>
    </Box>
  );
}

function GoalsSection() {
  return (
    <Box bg="gray.100" py={{ base: 0, md: 0 }}>
      <Flex w="full" minH={{ base: "420px", md: "520px" }}>
        <Box flex="1" display={{ base: "none", md: "block" }}>
          <Image
            src="/images/homepage-04-video-sample.png"
            alt="Goals"
            w="full"
            h="full"
            objectFit="cover"
            filter="auto"
            blur="0px"
          />
        </Box>
        <Box
          flex="1"
          bg="#cdb7b7"
          display="flex"
          alignItems="center"
          justifyContent="center"
          py={{ base: 12, md: 0 }}
        >
          <Box maxW="560px" px={{ base: 6, md: 12 }} textAlign={{ base: "center", md: "left" }}>
            <SerifHeading color="red.500" fontSize={{ base: "44px", md: "64px" }}>
              Profits made easy...
            </SerifHeading>
            <Text mt={6} color="black" lineHeight="1.9">
              Our main goal is to help you make your business profitable. We specialize in helping business owners in the beauty industry
              navigate the complexities of taxes, payroll, financial statements and more. With our expertise and dedication to our clients,
              we can help you make the most of your business without the added stress. Let us help you take the guesswork out of your finances
              and make the right profits with ease.
            </Text>

            <HStack gap={6} mt={10} justify={{ base: "center", md: "start" }}>
              <Button asChild borderRadius="0" bg="red.500" color="white" px={10} h="44px" _hover={{ bg: "red.600" }}>
                <RouterLink to="/services">SERVICES</RouterLink>
              </Button>
              <Button
                asChild
                borderRadius="0"
                bg="orange.600"
                color="white"
                px={10}
                h="44px"
                _hover={{ bg: "orange.700" }}
              >
                <a href={calendlyUrl} target="_blank" rel="noreferrer">
                  BOOK A FREE CALL!
                </a>
              </Button>
            </HStack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

function PlannerSection() {
  return (
    <Box bg="#d9d9d9" py={{ base: 14, md: 16 }}>
      <SectionShell>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 10, md: 12 }}
        >
          <Box flex="1" maxW={{ base: "680px", md: "560px" }} textAlign={{ base: "center", md: "left" }}>
            <SerifHeading fontSize={{ base: "44px", md: "64px" }} color="blackAlpha.800">
              Salon Owners: Access my
              <br />
              <Text as="span" fontStyle="italic" fontWeight="700">
                Free
              </Text>{" "}
              Cash Flow Planner!
            </SerifHeading>
            <Text mt={6} color="blackAlpha.700">
              Discover the hidden cash and profits in your salon business with my simple planner!
            </Text>

            <Box mt={10} textAlign="left">
              <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
                <Box>
                  <Text fontSize="sm" mb={2} color="black">
                    First name
                  </Text>
                  <Input
                    placeholder=""
                    borderRadius="0"
                    border="0"
                    borderBottom="2px solid"
                    borderColor="blackAlpha.400"
                    bg="transparent"
                    _focusVisible={{ borderColor: "blackAlpha.700", boxShadow: "none" }}
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" mb={2} color="black">
                    Last name
                  </Text>
                  <Input
                    placeholder=""
                    borderRadius="0"
                    border="0"
                    borderBottom="2px solid"
                    borderColor="blackAlpha.400"
                    bg="transparent"
                    _focusVisible={{ borderColor: "blackAlpha.700", boxShadow: "none" }}
                  />
                </Box>
              </Grid>

              <Box mt={8}>
                <Text fontSize="sm" mb={2} color="black">
                  Email *
                </Text>
                <Input
                  placeholder=""
                  borderRadius="0"
                  border="0"
                  borderBottom="2px solid"
                  borderColor="blackAlpha.400"
                  bg="transparent"
                  _focusVisible={{ borderColor: "blackAlpha.700", boxShadow: "none" }}
                />
              </Box>

              <SecondaryCtaButton mt={10} type="button" w={{ base: "full", md: "220px" }}>
                Submit
              </SecondaryCtaButton>
            </Box>
          </Box>

          <Box flex="1" display="flex" justifyContent={{ base: "center", md: "end" }}>
            <Image
              src="/images/homepage-05-cash-flow-planner.avif"
              alt="Cash Flow Planner"
              maxW={{ base: "520px", md: "540px" }}
              w="full"
              objectFit="contain"
            />
          </Box>
        </Flex>
      </SectionShell>
    </Box>
  );
}

function PlaceholderAnalysisIcon() {
  return (
    <Box
      w={{ base: "120px", md: "140px" }}
      h={{ base: "120px", md: "140px" }}
      mx="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="orange.600"
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%" aria-hidden="true">
        <circle cx="42" cy="42" r="26" fill="none" stroke="#ea580c" strokeWidth="6" />
        <path d="M58 58 L90 90" stroke="#ea580c" strokeWidth="8" strokeLinecap="round" />
        <path d="M30 45 L38 38 L46 44 L56 30" fill="none" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Box>
  );
}

function ServicesSection() {
  const services = [
    {
      key: "financial-analysis",
      title: "Financial Analysis",
      body: (
        <>
          We know you are tired of spending countless hours hunting down reports that don't make sense.
          <br />
          <Text as="span" fontWeight="900">
            Let us customize everything!
          </Text>
        </>
      ),
      icon: <PlaceholderAnalysisIcon />,
    },
    {
      key: "specialized-service",
      title: "Specialized Service",
      body: "We help you get the financial details out of your hair so you can get back to focusing your clients!",
      icon: (
        <Image
          src="/images/homepage-06-specialized-service-icon.png"
          alt="Specialized Service"
          w={{ base: "120px", md: "140px" }}
          h={{ base: "120px", md: "140px" }}
          objectFit="contain"
          mx="auto"
        />
      ),
    },
    {
      key: "bookkeeping",
      title: "Bookkeeping",
      body: "Tired of trying to keep track of all your receipts in an organized manner? With Daroda, you can take the burden of spending hours handling your finances off your shoulders.",
      icon: (
        <Image
          src="/images/homepage-06-bookkeeping-icon.png"
          alt="Bookkeeping"
          w={{ base: "120px", md: "140px" }}
          h={{ base: "120px", md: "140px" }}
          objectFit="contain"
          mx="auto"
        />
      ),
    },
    {
      key: "sensible-service",
      title: "Sensible Service",
      body: "We will never charge you for services you don't need.",
      icon: (
        <Image
          src="/images/homepage-06-sensible-service-icon.png"
          alt="Sensible Service"
          w={{ base: "120px", md: "140px" }}
          h={{ base: "120px", md: "140px" }}
          objectFit="contain"
          mx="auto"
        />
      ),
    },
  ];

  return (
    <Box bg="white" py={{ base: 18, md: 22 }}>
      <SectionShell>
        <Box maxW="980px" mx="auto">
          <SerifHeading color="blackAlpha.700" fontSize={{ base: "44px", md: "58px" }} textAlign="center">
            Quality Accounting: Core Service Areas
          </SerifHeading>
          <Text mt={3} color="blackAlpha.700" textAlign="center">
            We only provide services you need so you always receive real value!
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={{ base: 10, md: 14 }} mt={{ base: 14, md: 16 }}>
            {services.map((svc) => (
              <Box
                key={svc.key}
                bg="white"
                boxShadow="md"
                px={{ base: 10, md: 12 }}
                py={{ base: 10, md: 12 }}
                textAlign="center"
              >
                {svc.icon}
                <Text
                  mt={6}
                  letterSpacing="0.28em"
                  textTransform="uppercase"
                  fontWeight="600"
                  fontSize="sm"
                  color="blackAlpha.800"
                >
                  {svc.title}
                </Text>
                <Text mt={3} color="blackAlpha.700" maxW="420px" mx="auto">
                  {svc.body as any}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <PrimaryCtaButton asChild mt={{ base: 14, md: 16 }}>
            <a href={calendlyUrl} target="_blank" rel="noreferrer">
              TAKE THE NEXT BEST STEP!
            </a>
          </PrimaryCtaButton>
        </Box>
      </SectionShell>
    </Box>
  );
}

function useTestimonials(): { items: Testimonial[]; error: string | null } {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetch("/data/testimonials.json")
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load testimonials: ${r.status}`);
        return r.json() as Promise<Testimonial[]>;
      })
      .then((data) => {
        if (!isMounted) return;
        setItems(Array.isArray(data) ? data : []);
      })
      .catch((e: unknown) => {
        if (!isMounted) return;
        setError(e instanceof Error ? e.message : "Failed to load testimonials");
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { items, error };
}

function pickThreeRandom(items: Testimonial[]): Testimonial[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, 3);
}

function TestimonialsSection() {
  const { items, error } = useTestimonials();
  const sample = useMemo(() => pickThreeRandom(items), [items]);

  return (
    <Box bg="#cfd0c8" py={{ base: 18, md: 22 }}>
      <SectionShell>
        <Box maxW="920px" mx="auto">
          <SerifHeading color="red.500" fontSize={{ base: "44px", md: "64px" }} textAlign="center">
            What our clients say...
          </SerifHeading>

          <Image
            src="/images/testimonial-screenshot-1.avif"
            alt="Testimonial screenshot"
            mt={{ base: 10, md: 12 }}
            mx="auto"
            maxW={{ base: "100%", md: "680px" }}
            borderRadius="md"
          />

          <Stack gap={8} mt={{ base: 10, md: 12 }}>
            {error && (
              <Box bg="whiteAlpha.700" px={6} py={4} borderRadius="md">
                <Text color="blackAlpha.700" textAlign="center">
                  {error}
                </Text>
              </Box>
            )}

            {sample.map((t) => (
              <Box key={`${t.name}-${t.company ?? ""}`} bg="white" px={{ base: 6, md: 10 }} py={{ base: 6, md: 8 }}>
                <Text color="blackAlpha.800" textAlign="left" lineHeight="1.9">
                  {t.feedback}
                </Text>
                <Text mt={4} fontWeight="700" color="black" textAlign="center">
                  ~{t.name}
                  {t.role ? ` ${t.role}` : ""}
                  {t.company ? ` - ${t.company}` : ""}
                </Text>
              </Box>
            ))}
          </Stack>

          <Button
            asChild
            mt={{ base: 12, md: 14 }}
            borderRadius="0"
            bg="red.500"
            color="white"
            px={12}
            h="48px"
            letterSpacing="0.08em"
            textTransform="uppercase"
            _hover={{ bg: "red.600" }}
          >
            <RouterLink to="/testimonials">VIEW MORE TESTIMONIALS</RouterLink>
          </Button>
        </Box>
      </SectionShell>
    </Box>
  );
}

function PodcastSection() {
  return (
    <Box bg="orange.600" py={{ base: 18, md: 22 }}>
      <SectionShell>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={{ base: 10, md: 10 }}>
          <Box flex="1" display="flex" justifyContent={{ base: "center", md: "start" }}>
            <Box transform={{ base: "rotate(-6deg)", md: "rotate(-10deg)" }} boxShadow="lg" bg="white" p={2}>
              <Image
                src="/images/homepage-08-podcast-card.avif"
                alt="WDINA Podcast"
                w={{ base: "260px", md: "300px" }}
                objectFit="contain"
              />
            </Box>
          </Box>

          <Box flex="2" textAlign="center" color="white" maxW="680px">
            <SerifHeading fontSize={{ base: "44px", md: "64px" }}>
              Keep Your Business
              <br />
              (and profits) Growing!
            </SerifHeading>
            <Text mt={6} opacity={0.95}>
              The WDINA Podcast answers all your small business questions about what you need, who you should work with,
              and the process for doing most things small business!
            </Text>

            <Button
              asChild
              mt={10}
              borderRadius="0"
              bg="white"
              color="black"
              px={16}
              h="46px"
              letterSpacing="0.12em"
              textTransform="uppercase"
              _hover={{ bg: "whiteAlpha.800" }}
            >
              <a
                href="https://www.youtube.com/playlist?list=PL_3tF4MFWg-Y3ZcNppBsXx6wU5l4vSXac"
                target="_blank"
                rel="noreferrer"
              >
                TUNE IN NOW
              </a>
            </Button>
          </Box>

          <Box flex="1" display="flex" justifyContent={{ base: "center", md: "end" }}>
            <Image
              src="/images/homepage-08-rose-profile-02.avif"
              alt="Rose"
              w={{ base: "260px", md: "300px" }}
              objectFit="contain"
            />
          </Box>
        </Flex>
      </SectionShell>
    </Box>
  );
}

function BookingCtaSection() {
  return (
    <Box bg="#dedede" py={{ base: 18, md: 22 }}>
      <SectionShell>
        <Box maxW="980px" mx="auto" textAlign="center">
          <Text color="red.500" fontFamily="serif" fontSize={{ base: "26px", md: "34px" }}>
            Helping beauty professionals achieve better profit margins!
          </Text>
          <Image
            src="/images/homepage-09-da-logo-icon.png"
            alt="Daroda Accounting"
            mt={10}
            mx="auto"
            w={{ base: "140px", md: "170px" }}
          />
          <Text mt={6} fontSize={{ base: "20px", md: "22px" }} color="blackAlpha.800">
            Book a meeting with us!
          </Text>
          <Text mt={2} fontSize={{ base: "20px", md: "22px" }} color="blackAlpha.800">
            We'd love to hear from you!
          </Text>

          <Box
            mt={{ base: 12, md: 14 }}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            <Image
              src="/images/calendly-booking-calendar-widget-placeholder.png"
              alt="Calendly booking placeholder"
              w="full"
            />
          </Box>

          <Button
            asChild
            mt={10}
            borderRadius="0"
            variant="outline"
            borderColor="blackAlpha.400"
            color="black"
            px={12}
            h="46px"
            letterSpacing="0.08em"
            textTransform="uppercase"
            _hover={{ bg: "blackAlpha.50" }}
          >
            <a href={calendlyUrl} target="_blank" rel="noreferrer">
              Open booking page
            </a>
          </Button>
        </Box>
      </SectionShell>
    </Box>
  );
}

export function HomePage() {
  return (
    <Box w="full">
      <HeroSection />
      <IntroSection />
      <WorkHardSection />
      <GoalsSection />
      <PlannerSection />
      <ServicesSection />
      <TestimonialsSection />
      <PodcastSection />
      <BookingCtaSection />
    </Box>
  );
}