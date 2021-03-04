import { Flex, Box, Heading, Text } from "rebass";
import Link from "next/link";
import styled from "@emotion/styled";
export const Footer = () => {
  return (
    <Flex
      color="#e4e4e4"
      bg="black"
      width={1}
      flexDirection={["column", "row"]}
      alignItems="center"
      justifyContent="space-around"
      flexWrap="wrap"
      px={3}
      sx={{
        borderRadius: 5,
      }}
    >
      <Flex width={[1, 1 / 4]} alignItems="center" justifyContent="center">
        <Text p={2} fontSize={[3, 4]} textAlign="center">
          Made with ❤️ by{" "}
          <span
            style={{
              color: "#ff512f",
              "&:hover": {
                color: "#dd2476",
              },
            }}
          >
            {" "}
            @Bentennison
          </span>
          .
        </Text>
      </Flex>
      <Flex width={[1, 3 / 4]} p={2} flexWrap="wrap">
        <Box width={[1 / 2, 1 / 4]}>
          <StyledUl>
            <li style={{ color: "#ff512f" }}>LINKS</li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "#e4e4e4",
                  fontFamily: "Nunito",
                  fontSize: "14px",
                }}
                href="Portfolio"
                target="_blank"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "#e4e4e4",
                  fontFamily: "Nunito",
                  fontSize: "14px",
                }}
                href="ParkIT"
                target="_blank"
              >
                ParkIT
              </a>
            </li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "#e4e4e4",
                  fontFamily: "Nunito",
                  fontSize: "14px",
                }}
                href="ShoeFactory"
                target="_blank"
              >
                ShoeFactory
              </a>
            </li>
          </StyledUl>
        </Box>
        <Box width={[1 / 2, 1 / 4]}>
          <StyledUl>
            <li style={{ color: "#ff512f" }}>Contact</li>
            <li>
              <a
                style={{
                  textDecoration: "none",
                  color: "#e4e4e4",
                  fontFamily: "Nunito",
                  fontSize: "14px",
                }}
                href="mailto:bentennison707@gmail.com"
              >
                Email
              </a>
            </li>
          </StyledUl>
        </Box>

        <Box width={[1/2,1 / 4]}>
          <StyledUl>
            <li style={{ color: "#ff512f" }}>LINKS</li>
            <li>Portfolio</li>
            <li>ParkIT</li>
          </StyledUl>
        </Box>
        <Box width={[1/2,1 / 4]}>
          <StyledUl>
            <li style={{ color: "#ff512f" }}>LINKS</li>
            <li>Portfolio</li>
            <li>ParkIT</li>
          </StyledUl>
        </Box>
      </Flex>
      <Box height={2} width={1} mb={3} bg="#424242" />
      <Box width={1} textAlign="center">
        <Text fontFamily="Nunito" color="grey" py={3}>
          &copy;2021 | Made with ❤️ by Bentennison.{" "}
        </Text>
      </Box>
    </Flex>
  );
};
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  height: 100px;
  list-style: none;
`;
//USE COLUMNS OF DIFFRENT LINKS AS CONTACT LINKS FOLLOW

// INTERSECTING LINE BACKGROUNDS
