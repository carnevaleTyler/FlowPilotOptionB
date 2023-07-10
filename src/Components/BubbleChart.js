import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { zoom, zoomIdentity } from "d3-zoom";

const BubbleChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Get the dimensions of the viewport
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Create the SVG element
    const svg = d3
      .select(chartRef.current)
      .attr("width", width)
      .attr("height", height)
      .call(
        zoom().on("zoom", function (event) {
          svg.attr("transform", event.transform);
        })
      )
      .append("g");

    // Generate random data for the bubbles
    const data = d3.range(30).map((d, i) => ({
      index: i,
      radius: Math.random() * 50 + 10,
      scaledRadius: 0,
      selected: false,
    }));

    // Create a pack layout
    const pack = d3.pack().size([width, height]).padding(1);

    // Assign x, y, and r values to the data
    const root = d3
      .hierarchy({ children: data })
      .sum((d) => d.radius * 2)
      .sort((a, b) => b.value - a.value);

    // Create the packed bubbles
    pack(root);

    // Create the circles
    const circles = svg
      .selectAll("circle")
      .data(root.descendants().slice(1))
      .enter()
      .append("circle")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => d.r)
      .style("fill", "#D9D9D9")
      .style("stroke", "none")
      .style("pointer-events", "all")
      .on("click", function (event, d) {
        const clickedCircle = d3.select(this);
        const clickedRadius = d.r;
        const scaleUpFactor = 1.5;
        const scaleDownFactor = 0.8;

        // Check if the clicked circle is already scaled up
        const isScaledUp = clickedCircle.attr("r") > clickedRadius;

        // Revert the previously scaled up circles
        circles
          .transition()
          .duration(200)
          .attr("r", (d) => d.r)
          .style("fill", "#D9D9D9");

        if (!isScaledUp) {
          // Scale up the clicked circle
          clickedCircle
            .transition()
            .duration(200)
            .attr("r", clickedRadius * scaleUpFactor)
            .style("fill", "#006BFF");

          // Scale down the surrounding circles
          const surroundingCircles = circles.filter(function (datum) {
            if (datum === d) {
              return false; // Exclude the clicked circle itself
            }
            const dx = clickedCircle.attr("cx") - d3.select(this).attr("cx");
            const dy = clickedCircle.attr("cy") - d3.select(this).attr("cy");
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = clickedRadius + d.r + datum.r;
            return distance < minDistance;
          });

          surroundingCircles
            .transition()
            .duration(200)
            .attr("r", (d) => d.r * scaleDownFactor)
            .style("fill", "#D9D9D9");
        }
      });

    // Create the text labels
    const labels = svg
      .selectAll("text")
      .data(root.descendants().slice(1))
      .enter()
      .append("text")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .style("font-size", (d) => Math.min(d.r / 2, 20))
      .style("fill", "black")
      .text((d) => d.data.index)
      .style("pointer-events", "none");

    // Clean up the SVG element on unmount
    return () => {
      svg.selectAll("*").remove();
    };
  }, []);

  return <svg ref={chartRef} />;
};

export default BubbleChart;
