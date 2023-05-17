"use client";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import PaginationItem from "./components/PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export const Pagination: React.FC<PaginationProps> = ({
  totalCountOfRegisters,
  currentPage = 1,
  registerPerPage = 10,
  onPageChange,
}) => {
  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previusPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify={"space-between"}
      align="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) && (
              <Text color="gray.300" width='8' textAlign={'center'}>...</Text>
            )}
          </>
        )}
        {previusPages.length > 0 &&
          previusPages.map((page) => {
            return <PaginationItem onPageChange={onPageChange} number={page} />;
          })}

        <PaginationItem  onPageChange={onPageChange} number={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return <PaginationItem onPageChange={onPageChange} number={page} />;
          })}

        {(currentPage + siblingsCount) < lastPage && (
          <>
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
            {(currentPage + 1 + siblingsCount) < lastPage && (
              <Text color="gray.300" width='8' textAlign={'center'}>...</Text>
            )}
          </>
        )}
      </Stack>
    </Stack>
  );
};
