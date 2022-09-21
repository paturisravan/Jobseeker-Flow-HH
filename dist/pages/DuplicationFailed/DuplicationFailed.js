var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useMemo, useEffect, useCallback, } from "react";
import { Button, Grid, Typography, Box, Checkbox } from "@mui/material";
import StepCount from "../../components/StepCount";
import { LISTING_GENERIC_HEADERS } from "./DuplicationFailedColumnHeaders";
import KeycloakService from "../../services/KeycloakService";
import ColumnSelection from "../../components/ColumnSelection/ColumnSelection";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import { LIGHT_GREY } from "../../color";
import BookmarkIcon from "../../../src/assets/bookmark.svg";
import { PAGE_SIZE_ARRAY } from "../../constants";
import AgGridWithPagination from "../GridItem/AgGridWithPagination";
var DuplicationFailed = function () {
    var _a = useState(1), selectedButton = _a[0], setSelectedButton = _a[1];
    var gridRef = useRef();
    var _b = useState(LISTING_GENERIC_HEADERS), columnDefs = _b[0], setColumnDefs = _b[1];
    var _c = useState(10), pageSize = _c[0], setPageSize = _c[1];
    var _d = useState([]), selectedRows = _d[0], setSelectedRows = _d[1];
    var _e = useState(2), totalPages = _e[0], setTotalPages = _e[1];
    var _f = useState(), rowData = _f[0], setRowData = _f[1];
    var _g = React.useState(false), columnsListOpen = _g[0], setColumnsListOpen = _g[1];
    var _h = React.useState(true), floatingFilter = _h[0], setFloatingFilter = _h[1];
    var _j = React.useState(0), pageNo = _j[0], setPageNo = _j[1];
    var row = [
        {
            firstName: "Vinod",
            lastName: 2,
            dob: "30-09-2022",
            recruiterUploading: "",
            phoneNumber: 9493947123,
            emailAddress: "test@gmail.com",
            pdcStatus: "HYD",
            fdcStatus: "Yes",
            interviewed: "no",
            panNumber: "HH-1234",
        },
        {
            firstName: "Harish",
            lastName: 2,
            expectedCTC: "7 LPA",
            dob: "30-09-2022",
            recruiterUploading: "",
            phoneNumber: 9493947123,
            emailAddress: "test@gmail.com",
            pdcStatus: "HYD",
            currentlyWorking: "Yes",
            interviewed: "no",
            panNumber: "HH-1234",
        },
        {
            firstName: "Joel",
            lastName: 2,
            expectedCTC: "7 LPA",
            dob: "30-09-2022",
            recruiterUploading: "",
            phoneNumber: 9493947123,
            emailAddress: "test@gmail.com",
            pdcStatus: "HYD",
            currentlyWorking: "Yes",
            interviewed: "no",
            panNumber: "HH-1234",
        },
        {
            firstName: "Sam",
            lastName: 0,
            expectedCTC: "",
            dob: "20-09-2022",
            recruiterUploading: "",
            phoneNumber: 0,
            emailAddress: "",
            pdcStatus: "",
            currentlyWorking: "",
            interviewed: "no",
            panNumber: "",
        },
        {
            firstName: "Jagadish",
            lastName: 0,
            expectedCTC: "",
            dob: "20-09-2022",
            recruiterUploading: "",
            phoneNumber: 0,
            emailAddress: "",
            pdcStatus: "",
            currentlyWorking: "",
            interviewed: "no",
            panNumber: "",
        },
        {
            firstName: "Vinod",
            lastName: 2,
            expectedCTC: "7 LPA",
            dob: "30-09-2022",
            recruiterUploading: "",
            phoneNumber: 9493947123,
            emailAddress: "test@gmail.com",
            pdcStatus: "HYD",
            currentlyWorking: "Yes",
            interviewed: "no",
            panNumber: "HH-1234",
        },
        {
            firstName: "Harish",
            lastName: 2,
            expectedCTC: "7 LPA",
            dob: "30-09-2022",
            recruiterUploading: "",
            phoneNumber: 9493947123,
            emailAddress: "test@gmail.com",
            pdcStatus: "HYD",
            currentlyWorking: "Yes",
            interviewed: "yes",
            panNumber: "HH-1234",
        },
    ];
    var defaultColDef = useMemo(function () {
        return {
            flex: 1,
            minWidth: 170,
            maxWidth: 250,
            sortable: true,
            floatingFilter: true,
            enableRowGroup: true,
            enablePivot: true,
            enableValue: true,
            resizable: true,
            cellStyle: { "border-right-color": "#DFE5FF" },
        };
    }, []);
    var autoGroupColumnDef = useMemo(function () {
        return {
            headerName: "Group",
            minWidth: 170,
            field: "athlete",
            valueGetter: function (params) {
                if (params.node.group) {
                    return params.node.key;
                }
                else {
                    return params.data[params.colDef.field];
                }
            },
            headerCheckboxSelection: true,
            cellRenderer: "agGroupCellRenderer",
            cellRendererParams: {
                checkbox: true,
            },
        };
    }, []);
    useEffect(function () {
        fetchToken();
    }, []);
    var fetchToken = function () { return __awaiter(void 0, void 0, void 0, function () {
        var token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, KeycloakService.fetchTokenOtherUser()];
                case 1:
                    token = _a.sent();
                    sessionStorage.setItem("react-token", token);
                    return [2 /*return*/];
            }
        });
    }); };
    var setColumnsDisplay = function (columnList) {
        var newColumnDefs = columnDefs.map(function (colDef) {
            var columnReference = columnList.find(function (col) { return col.headerName === colDef.headerName; });
            if (columnReference) {
                return __assign(__assign({}, colDef), { hide: !columnReference.hide });
            }
        });
        onUpdateColumns(newColumnDefs);
    };
    var toogleFloatingFilter = function (toggleOption) {
        setFloatingFilter(toggleOption);
        var newColumnDefs = columnDefs.map(function (colDef) {
            return __assign(__assign({}, colDef), { floatingFilter: toggleOption });
        });
        onUpdateColumns(newColumnDefs);
    };
    var onUpdateColumns = useCallback(function (data) {
        if (gridRef === null || gridRef === void 0 ? void 0 : gridRef.current)
            gridRef.current.api.setColumnDefs(data);
    }, []);
    var onSelectionChanged = useCallback(function () {
        if (gridRef.current) {
            var rowSelection = gridRef.current.api.getSelectedRows();
            setSelectedRows(rowSelection);
        }
    }, []);
    var pageChange = function (pageNumber) {
        setPageNo(pageNumber);
        // apiCallRelatedFormData(contestStatus, pageNumber - 1);
    };
    var pageSizeChange = function (pageSizeChanged) {
        setPageSize(pageSizeChanged);
        // apiCallRelatedFormData(contestStatus, 0, pageSizeChanged);
    };
    return (_jsxs(Grid, __assign({ container: true, spacing: 3, rowSpacing: 4 }, { children: [_jsx(Grid, __assign({ item: true, xs: 12, p: 2 }, { children: _jsx(Typography, __assign({ fontSize: 30 }, { children: "Previously Failed PDC and FDC Profiles." })) })), _jsx(Grid, __assign({ item: true, xs: 12, p: 2 }, { children: _jsx(StepCount, { StepCountList: [
                        {
                            label: "Submitted",
                            tooltip: "Submitted",
                            id: 1,
                        },
                        {
                            label: "PDC Fail",
                            tooltip: "PDC Fail",
                            id: 2,
                        },
                        {
                            label: "PDC Pass",
                            tooltip: "PDC Pass",
                            id: 3,
                        },
                        {
                            label: "FDC Fail",
                            tooltip: "FDC Fail",
                            id: 4,
                        },
                    ], countsList: [
                        { _id: 1, count: 5 },
                        { _id: 2, count: 5 },
                        { _id: 3, count: 5 },
                        { _id: 4, count: 5 },
                    ], setSelectedButton: setSelectedButton, selectedButton: selectedButton }) })), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsxs("div", __assign({ className: "forms-button-container" }, { children: [_jsxs("div", { children: [_jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return setColumnsListOpen(true); }, disabled: columnsListOpen }, { children: ["Columns ", _jsx(GridViewOutlinedIcon, { className: "generic-icon" })] })), _jsxs(Button, __assign({ variant: "outlined", className: "save-draft-button", onClick: function () { return toogleFloatingFilter(!floatingFilter); }, sx: { background: floatingFilter ? LIGHT_GREY : "inherit" } }, { children: ["Filters ", _jsx(FilterAltOutlinedIcon, { className: "generic-icon" })] }))] }), _jsx("div", { children: _jsxs(Box, __assign({ display: "inline-block" }, { children: [_jsx(Checkbox, {}), " 10 Selected", _jsx("img", { src: BookmarkIcon })] })) })] })) })), _jsx(ColumnSelection, { AllColumns: columnDefs.map(function (cl) {
                    return Object.assign({ headerName: cl.headerName, hide: !cl.hide });
                }), setColumnsDisplay: setColumnsDisplay, onClose: setColumnsListOpen, open: columnsListOpen }), _jsx(Grid, __assign({ item: true, xs: 12 }, { children: _jsx(AgGridWithPagination, { gridRef: gridRef, rowData: row, columnDefs: columnDefs, defaultColDef: defaultColDef, autoGroupColumnDef: autoGroupColumnDef, suppressRowClickSelection: true, groupSelectsChildren: true, rowSelection: "multiple", rowGroupPanelShow: "always", pivotPanelShow: "always", enableRangeSelection: true, pagination: false, pageSize: pageSize, onSelectionChanged: onSelectionChanged, pageSizeArray: PAGE_SIZE_ARRAY, totalPages: totalPages, pageChange: pageChange, pageSizeChange: pageSizeChange }) }))] })));
};
export default DuplicationFailed;
