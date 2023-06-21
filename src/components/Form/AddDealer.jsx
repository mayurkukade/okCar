import { FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
const AddDealer = () => {
  const [inputField, setInputField] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    area: "",
    whatsApp: "",
    alternateNumber: "",
    email: "",
    shopact: "",
    adhar: "",
  });
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  const onChangeFormHandler = (e) => {
    const { name, value } = e.target;
    setInputField((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(inputField);
  };
  return (
    <>
      <Box>
        <FormControl>
          <form onSubmit={onSubmitHandler}>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <Input
              type="text"
              name="firstName"
              onChange={onChangeFormHandler}
              value={inputField.firstName}
              required
            />

            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              name="lastName"
              onChange={onChangeFormHandler}
              value={inputField.lastName}
            />
            <FormLabel>Address Details</FormLabel>
            <Input
              type="text"
              name="address"
              onChange={onChangeFormHandler}
              value={inputField.address}
            />
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              name="city"
              onChange={onChangeFormHandler}
              value={inputField.city}
            />
            <FormLabel>Area</FormLabel>
            <Input
              type="text"
              name="area"
              onChange={onChangeFormHandler}
              value={inputField.area}
            />
            <FormLabel>WhatsApp Number</FormLabel>
            <Input
              type="text"
              name="whatsApp"
              onChange={onChangeFormHandler}
              value={inputField.whatsApp}
            />
            <FormLabel>Alternate Number</FormLabel>
            <Input
              type="text"
              name="alternateNumber"
              onChange={onChangeFormHandler}
              value={inputField.alternateNumber}
            />
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={onChangeFormHandler}
              value={inputField.email}
            />
            <RadioGroup onChange={setInputField} value={inputField}>
              <Stack spacing={5} direction="row">
                <Radio colorScheme="green" name="shopact" value="shopact">
                  Shopact
                </Radio>
                <Radio colorScheme="green" name="adhar" value="adhar">
                  Adhar
                </Radio>
              </Stack>
            </RadioGroup>
            <Input type="file" onChange={handleChange} />
            {file ? (
              <img src={file} style={{ height: "50px", width: "100px" }} />
            ) : (
              ""
            )}
          </form>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Box>
    </>
  );
};

export default AddDealer;
