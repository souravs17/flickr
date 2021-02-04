// import { PieChart as Pie } from "react-minimal-pie-chart";
import Chart from "react-google-charts";
const PieChart = (props) => {
  const { data } = props;
  return (
    <Chart
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        is3D: true,
      }}
      rootProps={{ "data-testid": "2" }}
    />
  );
};

export default PieChart;
