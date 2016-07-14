import { Component, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  display = d3.time.format('%Y-%m-%d %H:%M')(new Date());

    margin = 20;
    diameter = 960;
    color = d3.scale.linear()
        .domain([-1, 5])
        .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
        .interpolate(d3.interpolateHcl);

    pack = d3.layout.pack()
        .padding(2)
        .size([this.diameter - this.margin, this.diameter - this.margin])
        .value(function (d) { return d.size; })

    svg = d3.select("body").append("svg")
        .attr("width", this.diameter)
        .attr("height", this.diameter)
        .append("g")
        .attr("transform", "translate(" + this.diameter / 2 + "," + this.diameter / 2 + ")");

    chart = d3.json("app/shared/flare.json", (error, root) => {
        if (error) throw error;

        var focus = root,
            nodes = this.pack.nodes(root),
            view;

        var circle = this.svg.selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("class", function (d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
            .style("fill", (d) => { return d.children ? this.color(d.depth) : null; })
            .on("click", (d) => { if (focus !== d) zoom.call(this, d), d3.event.stopPropagation(); });

        var text = this.svg.selectAll("text")
            .data(nodes)
            .enter().append("text")
            .attr("class", "label")
            .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
            .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
            .text(function (d) { return d.name; });

        var node = this.svg.selectAll("circle,text");

        d3.select("body")
            .style("background", this.color(-1))
            .on("click", () => { zoom.call(this, root); });

        zoomTo.call(this, [root.x, root.y, root.r * 2 + this.margin]);

        function zoom(d) {
            var focus0 = focus; focus = d;

            var transition = d3.transition()
                .duration(d3.event.altKey ? 7500 : 750)
                .tween("zoom", (d) => {
                    var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + this.margin]);
                    return (t) => { zoomTo.call(this, i(t)); };
                });

            transition.selectAll("text")
                .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
                .style("fill-opacity", function (d) { return d.parent === focus ? 1 : 0; })
                .each("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
                .each("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
        }

        function zoomTo(v) {
            var k = this.diameter / v[2]; view = v;
            node.attr("transform", function (d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
            circle.attr("r", function (d) { return d.r * k; });
        }
    });
}
