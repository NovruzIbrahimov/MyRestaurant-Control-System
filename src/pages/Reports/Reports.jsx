import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import reports from "../../data/reports";
import "./Reports.css";

function Reports() {
  const dailyChartRef = useRef(null);
  const monthlyChartRef = useRef(null);
  const dailyChartInstance = useRef(null);
  const monthlyChartInstance = useRef(null);

  useEffect(() => {
    // Köhnə chart-ları destroy et
    if (dailyChartInstance.current) {
      dailyChartInstance.current.destroy();
    }
    if (monthlyChartInstance.current) {
      monthlyChartInstance.current.destroy();
    }

    // Günlük gəlir chart
    const dailyCtx = dailyChartRef.current.getContext("2d");
    dailyChartInstance.current = new Chart(dailyCtx, {
      type: "bar",
      data: {
        labels: reports.daily.map((d) => d.day),
        datasets: [
          {
            label: "Gəlir (₼)",
            data: reports.daily.map((d) => d.income),
            backgroundColor: "#27ae60",
          },
          {
            label: "Sifarişlər",
            data: reports.daily.map((d) => d.orders),
            backgroundColor: "#2980b9",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
        },
      },
    });

    // Aylıq gəlir chart
    const monthlyCtx = monthlyChartRef.current.getContext("2d");
    monthlyChartInstance.current = new Chart(monthlyCtx, {
      type: "line",
      data: {
        labels: reports.monthly.map((m) => m.month),
        datasets: [
          {
            label: "Aylıq gəlir (₼)",
            data: reports.monthly.map((m) => m.income),
            borderColor: "#f39c12",
            backgroundColor: "rgba(243, 156, 18, 0.2)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Cleanup – komponent unmount olanda destroy
    return () => {
      if (dailyChartInstance.current) {
        dailyChartInstance.current.destroy();
      }
      if (monthlyChartInstance.current) {
        monthlyChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="reports-container">
      <h2 className="mb-4">Hesabatlar</h2>
      <div className="row">
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="chart-card">
            <h5>Günlük gəlir və sifarişlər</h5>
            <canvas ref={dailyChartRef}></canvas>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <div className="chart-card">
            <h5>Aylıq gəlir</h5>
            <canvas ref={monthlyChartRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
