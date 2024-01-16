import DataTable from "../../components/dataTable/DataTable"
import { GridValueGetterParams, GridColDef } from "@mui/x-data-grid";
import "./users.scss"
import { userRows } from "../../data";
import { useState } from "react";
import Add from "../../components/add/Add";

// Layout of Every Column
const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },

    {
        field: "img",
        headerName: "Avatar",
        width: 100,
        renderCell: (params) => {
            return <img src={params.row.img || "/noavatar.png"} alt="" />;
        },
    },
    {
        field: 'FirstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'LastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'Status',
        headerName: 'Status',
        width: 150,
        type: "boolean",
    },
    {
        field: 'Email',
        headerName: 'Email',
        width: 150,
        type: "string",
    },

    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'FullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 100,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];


const Users = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="users">
            <div className="info">
                <h1>Users</h1>
                <button onClick={() => setOpen(true)}>Add New User</button>
            </div>
            <DataTable slug="users" columns={columns} rows={userRows} />
            {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
        </div>
    )
}

export default Users