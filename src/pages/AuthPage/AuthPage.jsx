import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image
              src="https://img.freepik.com/premium-vector/instagram-social-media-post-user-interface-mockup-template-smartphone-device-online-branding_34480-1415.jpg"
              h={650}
              alt="phone-img"
            />
          </Box>

          <VStack textAlign={"center"} spacing={4} align={"stretch"}>
            <AuthForm />
            <Box>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADMTEo4YEurEn-gXFBOfumKYAJMviq-T9ww&s"
                h={"10"}
                alt="playstore-logo"
              />
              <Image
                src="https://evergreenleadership.com/wp-content/uploads/2019/05/microsoft-logo-png-transparent-20.png"
                h={"10"}
                alt="microsoft-logo"
              />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
