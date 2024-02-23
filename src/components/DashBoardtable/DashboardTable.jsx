import { DataGrid, GridToolbarContainer } from "@mui/x-data-grid";
import { FiSearch } from "react-icons/fi";
import IconButton from "@mui/material/IconButton";
import { MdMoreVert } from "react-icons/md";
import LinearProgress from "@mui/material/LinearProgress";
import "./DashboardTable.css";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <div className="table-header">
        <h2>User list</h2>
        <div className="search-table">
          <FiSearch />
          <input type="search" name="" id="" placeholder="Search ..." />
        </div>
      </div>
    </GridToolbarContainer>
  );
}

const columns = [
  {
    field: "name",
    headerName: "Name",
    width: 190,
    renderCell: (params) => {
      const { name, date } = params.row; // Destructure date from the row object
      const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase(); // Extract initials

      return (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="tableName">{initials}</span>
          <div>
            <p>{name}</p>
            <p className="date">{date}</p>
          </div>
        </div>
      );
    },
  },
  { field: "phone", headerName: "Phone", width: 180 },
  {
    field: "class",
    headerName: "Class",
    width: 170,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <span className="tableClass">{`${params.value}`}</span>
      </div>
    ),
  },
  { field: "id", headerName: "ID", width: 120 },
  {
    field: "work",
    headerName: "Work",
    width: 350,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <LinearProgress
          variant="determinate"
          value={params.value}
          sx={{
            height: 10,
            width: 250,
            borderRadius: 4,
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#54D62C", // Change the progress bar color
            },
            backgroundColor: "#d4f5ca !IMPORTANT",
          }}
        />
        <span
          style={{
            marginLeft: 8,
            fontSize: "14px",
          }}
        >{`${params.value}%`}</span>
      </div>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 80,
    renderCell: () => (
      <IconButton>
        <MdMoreVert />
      </IconButton>
    ),
  },
];

const rows = [
  {
    name: "Willem berchiche",
    phone: "123-456-7890",
    class: "2as",
    id: 35,
    work: 35,
    actions: "",
    date: "2024-02-22",
  },
  {
    name: "Salim",
    phone: "123-456-7890",
    class: "3as",
    id: 42,
    work: 65,
    actions: "",
    date: "2024-02-22",
  },
  {
    name: "Sidali",
    phone: "123-456-7890",
    class: "3as",
    id: 45,
    work: 35,
    actions: "",
    date: "2024-02-22",
  },
  {
    name: "Willem",
    phone: "123-456-7890",
    class: "1as",
    id: 16,
    work: 35,
    actions: "",
    date: "2024-02-22",
  },
  {
    name: "Willem",
    phone: "123-456-7890",
    class: "1as",
    id: 17,
    work: 35,
    actions: "",
    date: "2024-02-22",
  },
  {
    name: "Willem",
    phone: "123-456-7890",
    class: null,
    id: 150,
    work: 35,
    actions: "",
    date: "2024-02-22",
  },
  {
    name: "Willem",
    phone: "123-456-7890",
    class: "Ferrara",
    id: 44,
    work: 35,
    actions: "",
    date: "2024-02-22",
  },
  {
    name: "Willem",
    phone: "123-456-7890",
    class: "Rossini",
    id: 36,
    work: 35,
    actions: "",
    date: "2024-02-22",
  },
  {
    name: "Willem",
    phone: "Roxie",
    class: "Harvey",
    id: 65,
    work: 35,
    actions: "",
    date: "2024-02-22",
  },
];

const DashboardTable = () => {
  return (
    <div style={{ height: "100%", width: "98%", marginLeft: "10px",padding:"30px 40px 0 40px"}}>
      <DataGrid
      sx={{paddingTop:"20px"}}
      
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 7},
          },
        }}
        pageSizeOptions={[7, 10]}
        checkboxSelection
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
};

export default DashboardTable;
