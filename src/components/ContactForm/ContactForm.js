import { Box, Flex, Text } from "rebass";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";

export const ContactForm = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        as="form"
        onSubmit={(e) => e.preventDefault()}
        my={3}
        py={3}
        width={[1,3/4,1 / 2]}
        sx={{
          borderRadius: "20px",
          background: "#212121",
          boxShadow: "9px -9px 12px #1d1d1d,-9px 9px 12px #252525",
        }}
      >
        <Text></Text>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={1}
        >
          <Box width={[3/4,1/2]} mb={3}>
            <Label htmlFor="name" color="white">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              defaultValue="Jane Doe"
              sx={{
                outline: "none",
                border: "none",
                borderBottom: "3px solid",
                borderRadius: 5,
                transition: "all 0.5s ease-in-out",
                "&:focus": {
                  borderImageSource:
                    "linear-gradient(to right, #ff512f, #dd2476) ",
                  borderImageSlice: "2",
                },
                bg: "black",
                color: "grey",
              }}
            />
          </Box>
          <Box width={[3/4,1 / 2]} mb={3}>
            <Label htmlFor="name" color="white">
              Email
            </Label>
            <Input
              id="name"
              name="name"
              defaultValue="janedoe@gmail.com"
              sx={{
                outline: "none",
                border: "none",
                borderBottom: "3px solid",
                borderRadius: 5,
                transition: "all 0.5s ease-in-out",
                "&:focus": {
                  borderImageSource:
                    "linear-gradient(to right, #ff512f, #dd2476) ",
                  borderImageSlice: "2",
                },
                bg: "black",
                color: "grey",
              }}
            />
          </Box>
          <Box width={[3/4,1 / 2]}>
            <Label htmlFor="name" color="white">
              Message
            </Label>
            <Textarea
              id="name"
              name="name"
              defaultValue="janedoe@gmail.com"
              sx={{
                outline: "none",
                border: "none",
                borderBottom: "3px solid",
                borderRadius: 5,
                transition: "all 0.5s ease-in-out",
                "&:focus": {
                  borderImageSource:
                    "linear-gradient(to right, #ff512f, #dd2476) ",
                  borderImageSlice: "2",
                },
                bg: "black",
                color: "grey",
              }}
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};
