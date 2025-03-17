import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import React from "react";
import { List } from "react-admin";
import { DatagridAGClient } from "@react-admin/ra-datagrid-ag";

const CustomList = () => {
  const columnDefs = [
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      editable: false,
      minWidth: 48,
      maxWidth: 48,
      suppressColumnsToolPanel: true,
      suppressHeaderFilterButton: true,
    },
    { field: "athlete" },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" },
  ];
  const gridRef = React.useRef(null);
  const onFirstDataRendered = React.useCallback(() => {
    gridRef.current.api.autoSizeAllColumns();
  }, []);
  const defaultColDef = {
    enableRowGroup: true,
  };
  return (
    <List perPage={10000} pagination={false}>
      <DatagridAGClient
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        ref={gridRef}
        onFirstDataRendered={onFirstDataRendered}
        rowGroupPanelShow="always"
        groupSelectsChildren
      />
    </List>
  );
};
export default CustomList;
