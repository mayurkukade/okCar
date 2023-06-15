// import { Box, Heading, Text, Button } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// export default function NotFound() {
//   return (
//     <Box textAlign="center" py={10} px={6} h={"90vh"}>
//       <Heading
//         display="inline-block"
//         as="h1"
//         size="4xl"
//         bgGradient="linear(to-r, teal.400, teal.600)"
//         backgroundClip="text"
//       >
//         404
//       </Heading>
//       <Text fontSize="18px" mt={3} mb={2}>
//         Page Not Found
//       </Text>
//       <Text color={"gray.500"} mb={6}>
//         The page you&apos; re looking for does not seem to exist
//       </Text>

//       <Button
//         colorScheme="teal"
//         bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
//         color="white"
//         variant="solid"
//       >
//         <Link to="/">Go to Home</Link>
//       </Button>
//     </Box>
//   );
// }

import { Link } from "react-router-dom";
import SubNav from "../Navbar/SubNav";

const NotFound = () => {
  return (
    <>
      <SubNav componentsName={"Not Found"} />

      <div className="error-page-wrap">
        <div className="container">
          <div className="errormain">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "18vh",
              }}
            >
              <h3 style={{ border: "none", fontSize: "10rem" }}>404</h3>
              <h3 style={{ border: "none", marginTop: "10px" }}>
                Page was not Found
              </h3>
            </div>
            <div className="error-msg">
              <p style={{}}>
                The page you are looking is not available or has been removed.
                Try going to Home Page by using the button below.
              </p>
              <Link to="/">
                <a href="#." className="btn">
                  Go to Home Page
                </a>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
