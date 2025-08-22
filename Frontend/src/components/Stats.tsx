// Stats.tsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { fetchStatsRequest } from "../features/audiobook/audiobookSlice";
import {
  Box,
  Heading,
  Card,
  Container,
  FlexRow,
} from "./ui/UiComponents";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { FaHeadphones, FaFolderOpen, FaMicrophoneAlt, FaBookOpen } from "react-icons/fa";


// 🎨 Shared Nivo theme
const nivoTheme = {
  textColor: "#fff",
  fontSize: 12,
  axis: {
    ticks: { text: { fill: "#fff" } },
    legend: { text: { fill: "#fff" } },
  },
  legends: { text: { fill: "#fff" } },
  tooltip: {
    container: {
      background: "#222",
      color: "#fff",
      borderRadius: "4px",
      padding: "6px 10px",
    },
  },
};

const Stats: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { stats, loading, error } = useSelector(
    (state: RootState) => state.audiobook
  );

  useEffect(() => {
    dispatch(fetchStatsRequest());
  }, [dispatch]);

  if (loading) return <Box color="gray">Loading stats...</Box>;
  if (error) return <Box color="red">{error}</Box>;
  if (!stats) return null;

  // 📊 prepare data
  const barData = stats.seriesPerNarrator.map((s) => ({
    narrator: s.narrator,
    series: s.seriesCount,
  }));

  const categoryData = stats.categories.map((c) => ({
    id: c._id,
    label: c._id,
    value: c.count,
  }));

  const narratorData = stats.narrators.map((n) => ({
    id: n._id,
    label: n._id,
    value: n.count,
  }));

  return (
    <Container>
      <Heading as="h1" fontSize={4} mb={4} textAlign="center" color={"white"}>
        Audiobook Statistics
      </Heading>

      {/* Totals */}
      <FlexRow
        flexWrap="wrap"
        justifyContent="space-between"
        
        mb={4}
        flexDirection={["column", "row"]}
      >
        <Card width={["100%", "48%", "23%"]}>
          <Heading as="h4" fontSize={[2, 3]} mb={2} display="flex" alignItems="center" >
            <FaHeadphones /> Audiobooks
          </Heading>
          <Box fontSize={3}>{stats.totalAudiobooks}</Box>
        </Card>

        <Card width={["100%", "48%", "23%"]}>
          <Heading as="h4" fontSize={[2, 3]} mb={2} display="flex" alignItems="center" >
            <FaFolderOpen /> Categories
          </Heading>
          <Box fontSize={3}>{stats.totalCategories}</Box>
        </Card>

        <Card width={["100%", "48%", "23%"]}>
          <Heading as="h4" fontSize={[2, 3]} mb={2} display="flex" alignItems="center" >
            <FaMicrophoneAlt /> Narrators
          </Heading>
          <Box fontSize={3}>{stats.totalNarrators}</Box>
        </Card>

        <Card width={["100%", "48%", "23%"]}>
          <Heading as="h4" fontSize={[2, 3]} mb={2} display="flex" alignItems="center" >
            <FaBookOpen /> Series
          </Heading>
          <Box fontSize={3}>{stats.totalSeries}</Box>
        </Card>
      </FlexRow>


      {/* Bar Chart */}
      <FlexRow mb={4}>
        <Card width="100%" height="400px">
          <Heading as="h4" mb={3}>Series per Narrator</Heading>
          <ResponsiveBar
            data={barData}
            keys={["series"]}
            indexBy="narrator"
            margin={{ top: 20, right: 20, bottom: 60, left: 60 }}
            padding={0.3}
            colors={{ scheme: "category10" }}
            axisBottom={{ tickRotation: -30 }}
            theme={nivoTheme}
            borderRadius={10}
            animate
          />
        </Card>
      </FlexRow>

      {/* Pie Charts */}
      <FlexRow>
        <Card width={["100%", "48%"]} height="350px">
          <Heading as="h4" mb={3}>Categories</Heading>
          <ResponsivePie
            data={categoryData}
            margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
            innerRadius={0.5}
            padAngle={1}
            colors={{ scheme: "category10" }}
            theme={nivoTheme}
            animate

            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="white"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          />
        </Card>

        <Card width={["100%", "48%"]} height="350px">
          <Heading as="h4" mb={3}>Narrators</Heading>
          <ResponsivePie
            data={narratorData}
            margin={{ top: 20, right: 20, bottom: 40, left: 20 }}
            innerRadius={0.5}
            padAngle={1}
            colors={{ scheme: "set2" }}
            theme={nivoTheme}
            animate

            cornerRadius={2}
            activeOuterRadiusOffset={8}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="white"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
          />
        </Card>
      </FlexRow>
    </Container>
  );
};

export default Stats;
