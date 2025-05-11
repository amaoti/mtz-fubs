window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("wordCloudCanvas");
    if (!canvas || typeof Chart === "undefined") {
      console.error("Canvas or Chart.js not found");
      return;
    }
  
    // Manually register plugin components
    if (window.WordCloudController && window.WordCloudElement) {
      Chart.register(window.WordCloudController, window.WordCloudElement);
    } else {
      console.error("WordCloud plugin components not available");
      return;
    }
  
    const ctx = canvas.getContext("2d");
  
    new Chart(ctx, {
      type: "wordCloud",
      data: {
        labels: ["One", "Two", "Three", "Four", "Five"],
        datasets: [{
          data: [30, 25, 20, 15, 10]
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        }
      }
    });
  });
  