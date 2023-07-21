/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// `/admin/vendors/${cell.row.values.id}`
import "regenerator-runtime/runtime";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
} from "react-table";
import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Icon,
  Box,
  Flex,
  Select,
  Button,
  Text,
  Input,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import TableCard from "../TableCard/TableCard";
import React from "react";

const TableModel = ({
  data: v,
  columns,
  FetchData,
  isLoading,
  isError,
  isSuccess,
  goToNextPage,
  goToPreviousPage,
  currentPage,
  // error,
}) => {
  console.log(v);
  console.log(FetchData);
  const data = React.useMemo(() => v, [v]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state: { pageIndex, pageSize },
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div style={{ minHeight: "75vh" }}>
      {isLoading && <p>loading...</p>}
      {isError && <p>error</p>}
      {isSuccess && (
        <>
          <div className="tableContainer">
            <TableContainer>
              <Table {...getTableProps()}>
                <Thead bgColor={"#95B6D8"} padding="20px 0px">
                  {headerGroups.map((headerGroup, i) => (
                    <Tr key={i} {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <Th
                          align="center"
                          padding="18px"
                          key={i}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps
                          )}
                        >
                          <span>{column.render("Header")}</span>
                          <Text>
                            <HStack>
                              <Flex>
                                {column.isSortedDesc ? (
                                  <Icon
                                    as={AiOutlineSortAscending}
                                    boxSize={6}
                                  />
                                ) : (
                                  <Icon
                                    as={AiOutlineSortDescending}
                                    boxSize={6}
                                  />
                                )}
                              </Flex>
                            </HStack>
                          </Text>
                        </Th>
                      ))}
                    </Tr>
                  ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <Tr
                        key={i}
                        {...row.getRowProps()}
                        _hover={{ bg: "#EDF2F7" }}
                      >
                        {row.cells.map((cell) => (
                          <Td key={i} {...cell.getCellProps()}>
                            <span>{cell.render("Cell")}</span>
                            {/* {
                        console.log(cell.render("Cell").props.allColumns[7])
                      } */}
                          </Td>
                        ))}
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Box className="pagination" padding="15px" justifyItems="center">
                {/* <Flex gap="10px">
                <Button
                  h={"35px"}
                  _hover={{ bg: "#95B6D8" }}
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  <BiFirstPage fontSize={"20px"} />
                </Button>{" "}
                <Button
                  h={"35px"}
                  _hover={{ bg: "#95B6D8" }}
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <MdOutlineKeyboardArrowLeft fontSize={"22px"} />
                </Button>
                <Text alignItems="center" fontSize="18px" pt={"2px"}>
                  Page
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </Text>
                <Button
                  h={"35px"}
                  _hover={{ bg: "#95B6D8" }}
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  <MdOutlineKeyboardArrowRight fontSize={"22px"} />
                </Button>
                <Button
                  h={"35px"}
                  _hover={{ bg: "#95B6D8" }}
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  <BiLastPage fontSize={"20px"} />
                </Button>{" "}
                <Text fontSize="18px" pt={"2px"}>
                  | Go to page :
                </Text>{" "}
                <Input
                  border={"1px solid black"}
                  h={"35px"}
                  type="number"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(page);
                  }}
                  width="50px"
                />
                <Select
                  //  _hover={{ bg: "#95B6D8" }}
                  border={"1px solid black"}
                  h={"35px"}
                  // placeholder="Select option"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                  width="110px"
                >
                  {[5, 10, 15, 20, 25].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </Select>
              </Flex> */}

                <Flex justifyContent={"flex-end"}>
                  <Button
                    marginRight={"20px"}
                    onClick={goToPreviousPage}
                    isDisabled={currentPage === 0}
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    w="150px"
                    // isDisabled={currentPage < 0 ? "true" : "false"}
                  >
                    <span style={{ marginRight: "2px", padding: "5px" }}>
                      <ArrowLeftIcon />
                    </span>
                    Previous Page
                  </Button>
                  <Button
                    onClick={goToNextPage}
                    isDisabled={isError}
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    w="150px"
                  >
                    <span style={{ marginLeft: "5px", padding: "5px" }}>
                      Next Page <ArrowRightIcon />
                    </span>
                  </Button>
                </Flex>
              </Box>
            </TableContainer>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              padding: "40px",
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default TableModel;
