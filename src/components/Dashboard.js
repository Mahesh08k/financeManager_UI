import { Chart } from "react-google-charts";
export const Dashboard = () => {
  const data = [
    ["Sector", "Invested amout"],
    ["Bank", 70000],
    ["Share Market", 300000],
    ["Post Office", 50000],
  
  ];
  let totalAmount = 0 ;
  for(let i =1 ; i<data.length ; i++){
    totalAmount = totalAmount + data[i][1]
  }
  

  const options = {
    title: `Total Investements : ${totalAmount}`,
  };
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};
