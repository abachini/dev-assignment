import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";

const columns = [
  {
    width: 150,
    label: "Thumbnail",
    dataKey: "thumbnail",
  },
  {
    width: 120,
    label: "Title",
    dataKey: "title",
  },
  {
    width: 120,
    label: "Price\u00A0($)",
    dataKey: "price",
    numeric: true,
  },
  {
    width: 200,
    label: "Description",
    dataKey: "description",
  },
  {
    width: 120,
    label: "Brand",
    dataKey: "brand",
  },
  {
    width: 120,
    label: "Category",
    dataKey: "category",
  },
];

export const TableWithInfiniteScroll = ({ data, isLoading, hasMore }) => {
  const tableElement = useRef();
  const [rows, setRows] = useState(data);
  const [distanceBottom, setDistanceBottom] = useState(0);

  useEffect(() => {
    if (data) setRows(data);
  }, [data, setRows]);

  const scrollListener = useCallback(() => {
    let bottom = tableElement.current.scrollHeight - tableElement.current.clientHeight;
    setDistanceBottom(Math.round(bottom * 0.2));

    if (tableElement.current.scrollTop > bottom - distanceBottom && hasMore && !isLoading) {
      // here is where i would trigger the loading of more products using React Query infinite load
    }
  }, [isLoading, distanceBottom]);

  useLayoutEffect(() => {
    const tableRef = tableElement.current;
    tableRef.addEventListener("scroll", scrollListener);
    return () => {
      tableRef.removeEventListener("scroll", scrollListener);
    };
  }, [scrollListener]);

  return (
    <TableContainer style={{ maxWidth: "1600px", margin: "auto", maxHeight: "800px" }} ref={tableElement}>
      <Table stickyHeader>
        <TableHead>
          {columns.map((column) => (
            <TableCell
              key={column.dataKey}
              variant="head"
              align={column.numeric || false ? "right" : "left"}
              style={{ width: column.width }}
              sx={{
                backgroundColor: "background.paper",
              }}
            >
              {column.label}
            </TableCell>
          ))}
        </TableHead>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <TableBody>
            {rows.length ? (
              rows.map(({ id, thumbnail, title, price, description, brand, category }) => (
                <TableRow key={id}>
                  <TableCell>
                    <img src={thumbnail} style={{ height: 150, width: 250 }} />
                  </TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell align={"right"}>{price}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell>{brand}</TableCell>
                  <TableCell>{category}</TableCell>
                </TableRow>
              ))
            ) : (
              <p>No elements to show</p>
            )}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

TableWithInfiniteScroll.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  hasMore: PropTypes.bool,
};
