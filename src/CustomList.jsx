import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-enterprise";
import React from "react";
import { List } from "react-admin";
import { DatagridAGClient } from "@react-admin/ra-datagrid-ag";
import { CommunityFeaturesModule } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { CsvExportModule } from "@ag-grid-community/csv-export";

import {
  ClipboardModule,
  ColumnsToolPanelModule,
  ExcelExportModule,
  FiltersToolPanelModule,
  MenuModule,
  RowGroupingModule,
  SetFilterModule,
} from "ag-grid-enterprise";

const modules = [
  ClientSideRowModelModule,
  CommunityFeaturesModule,
  CsvExportModule,
  RowGroupingModule,
  ClipboardModule,
  ColumnsToolPanelModule,
  ExcelExportModule,
  FiltersToolPanelModule,
  MenuModule,
  SetFilterModule,
];

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
    enablePivot: true,
    filter: true,
  };
  const getContextMenuItems = React.useCallback(
    () => [
      "copy",
      "copyWithHeaders",
      "copyWithGroupHeaders",
      "paste",
      "separator",
      "export",
    ],
    []
  );

  return (
    <List perPage={10000} pagination={false}>
      <DatagridAGClient
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        ref={gridRef}
        onFirstDataRendered={onFirstDataRendered}
        rowGroupPanelShow="always"
        getContextMenuItems={getContextMenuItems}
        groupSelectsChildren
        modules={modules}
        sideBar={true}
      />
    </List>
  );
};
export default CustomList;
