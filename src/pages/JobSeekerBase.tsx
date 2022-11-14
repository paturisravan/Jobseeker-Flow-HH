import React, { ReactElement, FC, useEffect } from "react";
import JobSeekerProfileFlow from "./JobSeekerProfileFlow/JobSeekerProfileFlow";
import { TabPanel } from "../components/TabWrapper/TabWrapper";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./JobSeekerBaseStyles.css";
import Notification from "../components/Notification";
import { useAppSelector, useAppDispatch } from "../services/StoreHooks";
import { initialAlertState } from "../modules/notificationState";

const useStyles = makeStyles(() => ({}));

const JobSeekerBase: FC<any> = (props): ReactElement => {
  const { id, contestId } = props;
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const notifyDataState = useAppSelector((state) => state.notificationAlert);
  const activeTabState = useAppSelector((state) => state.tabsState);
  const [activeTab, setActiveTab] = React.useState(0);
  const [dataMessage, setDataMessage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");

  const stepAndTabForAddProile = () => {
    dispatch({
      type: "STEP_CHANGE",
      data: {
        step: 0,
        tab: 0,
      },
    });
  };
  useEffect(() => {
    stepAndTabForAddProile();
  }, []);

  const jobSeekerTabs = [
    {
      title: "Add Profile",
      index: 0,
      component: (
        <JobSeekerProfileFlow
          setType={setType}
          setOpen={setOpen}
          setDataMessage={setDataMessage}
          contestId={id}
        />
      ),
    },
  ];

  const resetNotificationData = () => {
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

  return (
    <Grid container p={2}>
      <Notification
        open={open}
        type={type}
        message={dataMessage}
        setOpen={setOpen}
      />

      {jobSeekerTabs.map((tab) => (
        <TabPanel
          value={activeTab}
          index={tab.index}
          key={tab.index}
          disablePadding={true}
        >
          {tab.component}
        </TabPanel>
      ))}
      {notifyDataState && (
        <Notification
          open={notifyDataState.enable}
          type={notifyDataState.type}
          message={notifyDataState.message}
          duration={notifyDataState.duration}
          setOpen={() => resetNotificationData()}
        />
      )}
    </Grid>
  );
};

export default JobSeekerBase;
