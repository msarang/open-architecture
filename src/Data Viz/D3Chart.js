import * as d3 from 'd3';
import url from "./Missions.csv";
import { csv } from 'd3';



export default class D3Chart {
    constructor(element) {
       const svg = d3.select(element)
        .append("svg")
            .attr("width", 1000)
            .attr("height", 500)

        d3.csv(url).then(function(missionsData) {

            let map = new Map();

                var max = 0

                for (var i = 0; i < missionsData.length; i++) {
    
                    var currentData = JSON.stringify(missionsData[i])

                    

                    if (map.has(currentData)) {

                        var newValue = map.get(currentData) + 1

                        if (newValue > max) {
                            max = newValue
                        }

                        map.set(currentData,map.get(currentData)+1)
                    }

                    else {
                        map.set(currentData, 1)
                    };




                };

                console.log(max)

            const y = d3.scaleLinear()
            .domain([0,2024])
            .range([0,500])

            const x = d3.scaleBand()
                .domain([0, map.size])
                .range([0,max])
                .padding(0.4)

            const rects = svg.selectAll("rect")
                .data(missionsData)

            rects.enter()
                .append("rect")
                    .attr("x", d => x(d.Actor))
                    .attr("y", d => {
                        if (d.Actor == "NASA") {
                            return 50
                        }
                        else {
                            return 10
                        }
                    }    
                    )
                    .attr("width", x.bandwidth)
                    .attr("height", d => y(d.Year))
                    .attr("fill", d => {
                        if (d.Actor == "NASA") {
                            return "red"
                        }
                        else {
                            return "blue"
                        }
                    })
        });

    }
}  