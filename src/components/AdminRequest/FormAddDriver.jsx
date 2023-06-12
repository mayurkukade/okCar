import { Stack, Input, ButtonGroup, Button, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const FormAdddealer = ({ firstFieldRef, onCancel }) => {
  const [licenseUpload, setLicenseUpload] = useState("");

  const [dealer, setdealer] = useState({
    dealerName: "",
    dealerAddress: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setdealer((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();

    try {
      console.log(dealer, licenseUpload);

      onCancel();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Stack spacing={4}>
        <FormLabel>Fill In Required Details</FormLabel>
        <Input
          label="Dealer's Full Name"
          id="dealerName"
          name="dealerName"
          ref={firstFieldRef}
          onChange={onChangeHandler}
          placeholder="please fill dealer name"
          value={dealer.dealerName}
        />
        <FormLabel>Address</FormLabel>
        <Input
          label="address"
          id="address"
          name="address"
          placeholder="please fill address"
          value={dealer.dealerAddress}
          onChange={onChangeHandler}
        />

        <FormLabel htmlFor="dealerUplaod">Upload dealer Licencs</FormLabel>
        <input
          type="file"
          accept="image/png, image/jpeg"
          name="dealerUplaod"
          placeholder="please fill dealer linces"
          onChange={(e) => setLicenseUpload(e.target.files[0])}
        />
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button onClick={SubmitHandler} colorScheme="teal">
            Save
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
};

export default FormAdddealer;
