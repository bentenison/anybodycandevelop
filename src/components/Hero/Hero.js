import { Box, Flex, Heading, Button } from "rebass";
const Hero = () => {
  return (
    <>
      <Box mx={"-10px"} height={["auto"]} >
        <Box height={["auto","90vh"]} width={1} bg="black">
          <Heading
            sx={{ position: "absolute", top: "20%", left: 50 }}
            fontFamily="Staatliches"
            fontSize={[5, 5, 8]}
            color="#ff512f"
            width={[1 / 2]}
            mt={[2,0,0]}
            px={2}
          >
            This is the place where coders
          </Heading>
          <Button
            bg="transparent"
            fontSize={[2, 3, 4]}
            sx={{
              color: "#ff512f",
              border: "2px solid #ff512f",
              fontFamily: "Staatliches",
              position: "absolute",
              left: 60,
              top: "50%",
              "@media screen and (max-width:40em)": {
                top: "40%",
              },
            }}
          >
            Get Started
          </Button>
          {/* <Image src={["/static/bg.svg",""]}/> */}
          <Box
            height={["90vh"]}
            sx={{
              bg: "#ff512f",
              color: "#000",
              clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
              position: "relative",
            }}
            width={1}
          >
            <Heading
              sx={{
                position: "absolute",
                bottom: "20%",
                right: -20,
                "@media screen and (max-width:64em)": {
                  right: 20,
                },
              }}
              fontFamily="Staatliches"
              fontSize={[5, 5, 8]}
              width={[1 / 2]}
            >
              stay up-to-date and grow their careers.
            </Heading>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;

//USE THIS GRADIENT AS A BACKGROUND ON HERO
//USE COLOR WHITE

// background: #8A2387;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
