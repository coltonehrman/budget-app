import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Box from "@mui/joy/Box";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Divider from "@mui/joy/Divider";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Calendar, { type Level, type Activity } from "react-activity-calendar";
import React from "react";
import { Tooltip } from "@mui/joy";
import { eachDayOfInterval, formatISO } from "date-fns";

type Done = Record<string, { count: number; level: Level } | undefined>;

function generateEmptyData(activities: Done): Activity[] {
  const year = new Date().getFullYear();
  const days = eachDayOfInterval({
    start: new Date(year, 0, 1),
    end: new Date(year, 11, 31),
  });

  return days.map((date: Date) => {
    const day = formatISO(date, { representation: "date" });

    return {
      date: day,
      count: 0,
      level: 0,
      ...activities[day],
    };
  });
}

export default function MainDashboard(): JSX.Element {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRoundedIcon fontSize="small" />}
          sx={{ pl: 0 }}
        >
          <Link underline="none" color="neutral" aria-label="Home">
            <HomeRoundedIcon />
          </Link>
          <Link
            underline="hover"
            color="neutral"
            fontSize={12}
            fontWeight={500}
          >
            Dashboard
          </Link>
        </Breadcrumbs>
      </Box>

      <Typography level="h2" component="h1">
        Dashboard
      </Typography>

      <Divider sx={{ my: 1 }} />

      <Calendar
        blockMargin={5}
        blockSize={25}
        colorScheme="light"
        fontSize={22}
        showWeekdayLabels={true}
        weekStart={1}
        labels={{
          legend: {
            less: "Legend",
            more: "",
          },
          totalCount: "{{count}} transactions in {{year}}",
        }}
        theme={{
          light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
        }}
        data={generateEmptyData({
          "2023-12-14": {
            count: 1,
            level: 2,
          },
        })}
        renderBlock={(block, activity) => {
          return <Tooltip title={activity.date}>{block}</Tooltip>;
        }}
      />
    </>
  );
}
