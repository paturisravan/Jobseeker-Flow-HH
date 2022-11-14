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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import JobSeekerProfileFlow from "./JobSeekerProfileFlow/JobSeekerProfileFlow";
import { TabPanel } from "../components/TabWrapper/TabWrapper";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./JobSeekerBaseStyles.css";
import Notification from "../components/Notification";
import { useAppSelector, useAppDispatch } from "../services/StoreHooks";
import { initialAlertState } from "../modules/notificationState";
var useStyles = makeStyles(function () { return ({}); });
var JobSeekerBase = function (props) {
    var id = props.id, contestId = props.contestId;
    var classes = useStyles();
    var dispatch = useAppDispatch();
    var notifyDataState = useAppSelector(function (state) { return state.notificationAlert; });
    var activeTabState = useAppSelector(function (state) { return state.tabsState; });
    var _a = React.useState(0), activeTab = _a[0], setActiveTab = _a[1];
    var _b = React.useState(""), dataMessage = _b[0], setDataMessage = _b[1];
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var _d = React.useState(""), type = _d[0], setType = _d[1];
    var stepAndTabForAddProile = function () {
        dispatch({
            type: "STEP_CHANGE",
            data: {
                step: 0,
                tab: 0,
            },
        });
    };
    useEffect(function () {
        stepAndTabForAddProile();
    }, []);
    var jobSeekerTabs = [
        {
            title: "Add Profile",
            index: 0,
            component: (_jsx(JobSeekerProfileFlow, { setType: setType, setOpen: setOpen, setDataMessage: setDataMessage, contestId: id })),
        },
    ];
    var resetNotificationData = function () {
        dispatch({
            type: "SEND_ALERT",
            data: {
                enable: initialAlertState.enable,
                type: initialAlertState.type,
                message: initialAlertState.message,
                duration: initialAlertState.duration,
            },
        });
    };
    return (_jsxs(Grid, __assign({ container: true, p: 2 }, { children: [_jsx(Notification, { open: open, type: type, message: dataMessage, setOpen: setOpen }), jobSeekerTabs.map(function (tab) { return (_jsx(TabPanel, __assign({ value: activeTab, index: tab.index, disablePadding: true }, { children: tab.component }), tab.index)); }), notifyDataState && (_jsx(Notification, { open: notifyDataState.enable, type: notifyDataState.type, message: notifyDataState.message, duration: notifyDataState.duration, setOpen: function () { return resetNotificationData(); } }))] })));
};
export default JobSeekerBase;
