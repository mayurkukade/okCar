import { useState } from "react";
import React from "react";
import TableModel from "../tableModel/TableModel";
import { Dealers } from "../../json/driver.json";
import { EditIcon, DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  FormLabel,
  Select,
  Input,
  FormControl,
  Textarea,
  Text,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const DealersModel = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    price: "",
    location: "",
    status: "",
    carDetails: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Form data:", formData);
  //   handleModalClose();
  // };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleModalClose = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  // delete item
  const handleDeleteItem = () => {
    console.log("Delete");
    setIsDeleteModalOpen(false);
  };
  const data = React.useMemo(() => Dealers, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "Car ID",
        accessor: "DealerID",
      },
      {
        Header: "Price",
        accessor: "DealerName",
      },
      {
        Header: "Location",
        accessor: "Location",
      },
      {
        Header: "Status",
        accessor: "PhoneNo",
      },
      {
        Header: "Car Details",
        accessor: "TotalCars",
        Cell: (cell) => (
          <Flex>
            {/* Edit Button */}
            <Link to={`carDetails/${cell.value}`}>
              <Button
                variant="outline"
                colorScheme="teal"
                leftIcon={<ExternalLinkIcon />}
                _hover={{ bg: "#5DC302" }}
                mr={2}
              >
                Details
              </Button>
            </Link>
          </Flex>
        ),
      },
      {
        Header: "Action",
        accessor: "Edit",
        Cell: (cell) => (
          <Flex>
            {/* Edit Button */}
            <Button
              variant="outline"
              colorScheme="teal"
              onClick={handleEditClick}
              leftIcon={<EditIcon />}
              _hover={{ bg: "#5DC302" }}
              mr={2}
            >
              Edit
            </Button>
            {/* Delete */}
            <Button
              variant="outline"
              colorScheme="teal"
              onClick={handleDeleteClick}
              leftIcon={<DeleteIcon />}
              _hover={{ bg: "#5DC302" }}
            >
              Delete
            </Button>
            {/* Edit Modal */}
            <Modal isOpen={isEditModalOpen} onClose={handleModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {/* <form onSubmit={handleFormSubmit}> */}
                  <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                    <FormLabel>Location</FormLabel>
                    <Input
                      type="text"
                      name="location"
                      placeholder="Enter location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                    <FormLabel>Status</FormLabel>
                    <Select
                      placeholder="Select status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                    >
                      <option value="open">Open</option>
                      <option value="close">Close</option>
                    </Select>
                    <FormLabel>Car Details</FormLabel>
                    <Textarea
                      placeholder="Enter car details"
                      name="carDetails"
                      value={formData.carDetails}
                      onChange={handleInputChange}
                    />
                  </FormControl>
                  {/* </form> */}
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="teal" mr={3} onClick={handleModalClose}>
                    Save
                  </Button>
                  <Button variant="ghost" onClick={handleModalClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            {/* Delete Modal */}
            <Modal isOpen={isDeleteModalOpen} onClose={handleModalClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Delete Item</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Are you sure you want to delete this item?</Text>
                </ModalBody>
                <ModalFooter>
                  <Link to={`carDetails/${cell.value}`}>
                    <Button colorScheme="red" mr={3} onClick={handleDeleteItem}>
                      Delete
                    </Button>
                  </Link>
                  <Button variant="ghost" onClick={handleModalClose}>
                    Cancel
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>
        ),
      },
    ],
    [
      isEditModalOpen,
      formData.price,
      formData.location,
      formData.status,
      formData.carDetails,
      isDeleteModalOpen,
    ]
  );

  return (
    <>
      <TableModel data={data} columns={columns} />
    </>
  );
};

export default DealersModel;
