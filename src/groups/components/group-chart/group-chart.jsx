import { PieChart } from "../../../shared/components/chart";
import { connect } from "react-redux";
import { Typography } from "../../../shared/components/typography";
const GroupChart = (props) => {
  const { groupList, chartData } = props;
  return groupList.length ? (
    <>
      <Typography variant="h4" align="center">
        <b>Photo Count</b>
      </Typography>
      <PieChart id="group_chart" data={chartData} />
    </>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    chartData: [...state.groups.groupList].reduce(
      (acc, item) => {
        if (+item.pictures > 20000) acc[4][1]++;
        else if (+item.pictures > 5000) acc[3][1]++;
        else if (+item.pictures > 1000) acc[2][1]++;
        else acc[1][1]++;
        return acc;
      },
      [
        ["Groups", "Photo Count"],
        ["Below 1000", 0],
        ["1000-5000", 0],
        ["5001-20000", 0],
        ["Above 20000", 0],
      ]
    ),
    groupList: state.groups.groupList,
  };
};

export default connect(mapStateToProps)(GroupChart);
