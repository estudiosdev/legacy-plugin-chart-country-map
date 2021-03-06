"use strict";

exports.__esModule = true;
exports.default = void 0;

var _d = _interopRequireDefault(require("d3"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _d3Array = require("d3-array");

var _core = require("@superset-ui/core");

var _countries = _interopRequireWildcard(require("./countries"));

require("./CountryMap.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable react/sort-prop-types */
const propTypes = {
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    country_id: _propTypes.default.string,
    metric: _propTypes.default.number
  })),
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  country: _propTypes.default.string,
  linearColorScheme: _propTypes.default.string,
  mapBaseUrl: _propTypes.default.string,
  numberFormat: _propTypes.default.string
};
const maps = {};

function CountryMap(element, props) {
  const {
    data,
    width,
    height,
    country,
    linearColorScheme,
    numberFormat
  } = props;
  const container = element;
  const format = (0, _core.getNumberFormatter)(numberFormat);
  const colorScale = (0, _core.getSequentialSchemeRegistry)().get(linearColorScheme).createLinearScale((0, _d3Array.extent)(data, v => v.metric));
  const colorMap = {};
  data.forEach(d => {
    colorMap[d.country_id] = colorScale(d.metric);
  });

  const colorFn = d => colorMap[d.properties.ISO] || 'none';

  const path = _d.default.geo.path();

  const div = _d.default.select(container);

  div.classed('superset-legacy-chart-country-map', true);
  div.selectAll('*').remove();
  container.style.height = `${height}px`;
  container.style.width = `${width}px`;
  const svg = div.append('svg:svg').attr('width', width).attr('height', height).attr('preserveAspectRatio', 'xMidYMid meet');
  const backgroundRect = svg.append('rect').attr('class', 'background').attr('width', width).attr('height', height);
  const g = svg.append('g');
  const mapLayer = g.append('g').classed('map-layer', true);
  const textLayer = g.append('g').classed('text-layer', true).attr('transform', `translate(${width / 2}, 45)`);
  const bigText = textLayer.append('text').classed('big-text', true);
  const resultText = textLayer.append('text').classed('result-text', true).attr('dy', '1em');
  let centered;

  const clicked = function clicked(d) {
    const hasCenter = d && centered !== d;
    let x;
    let y;
    let k;
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    if (hasCenter) {
      const centroid = path.centroid(d);
      [x, y] = centroid;
      k = 4;
      centered = d;
    } else {
      x = halfWidth;
      y = halfHeight;
      k = 1;
      centered = null;
    }

    g.transition().duration(750).attr('transform', `translate(${halfWidth},${halfHeight})scale(${k})translate(${-x},${-y})`);
    textLayer.style('opacity', 0).attr('transform', `translate(0,0)translate(${x},${hasCenter ? y - 5 : 45})`).transition().duration(750).style('opacity', 1);
    bigText.transition().duration(750).style('font-size', hasCenter ? 6 : 16);
    resultText.transition().duration(750).style('font-size', hasCenter ? 16 : 24);
  };

  backgroundRect.on('click', clicked);

  const selectAndDisplayNameOfRegion = function selectAndDisplayNameOfRegion(feature) {
    let name = '';

    if (feature && feature.properties) {
      if (feature.properties.ID_2) {
        name = feature.properties.NAME_2;
      } else {
        name = feature.properties.NAME_1;
      }
    }

    bigText.text(name);
  };

  const updateMetrics = function updateMetrics(region) {
    if (region.length > 0) {
      resultText.text(format(region[0].metric));
    }
  };

  const mouseenter = function mouseenter(d) {
    // Darken color
    let c = colorFn(d);

    if (c !== 'none') {
      c = _d.default.rgb(c).darker().toString();
    }

    _d.default.select(this).style('fill', c);

    selectAndDisplayNameOfRegion(d);
    const result = data.filter(region => region.country_id === d.properties.ISO);
    updateMetrics(result);
  };

  const mouseout = function mouseout() {
    _d.default.select(this).style('fill', colorFn);

    bigText.text('');
    resultText.text('');
  };

  function drawMap(mapData) {
    const {
      features
    } = mapData;

    const center = _d.default.geo.centroid(mapData);

    const scale = 100;

    const projection = _d.default.geo.mercator().scale(scale).center(center).translate([width / 2, height / 2]);

    path.projection(projection); // Compute scale that fits container.

    const bounds = path.bounds(mapData);
    const hscale = scale * width / (bounds[1][0] - bounds[0][0]);
    const vscale = scale * height / (bounds[1][1] - bounds[0][1]);
    const newScale = hscale < vscale ? hscale : vscale; // Compute bounds and offset using the updated scale.

    projection.scale(newScale);
    const newBounds = path.bounds(mapData);
    projection.translate([width - (newBounds[0][0] + newBounds[1][0]) / 2, height - (newBounds[0][1] + newBounds[1][1]) / 2]); // Draw each province as a path

    mapLayer.selectAll('path').data(features).enter().append('path').attr('d', path).attr('class', 'region').attr('vector-effect', 'non-scaling-stroke').style('fill', colorFn).on('mouseenter', mouseenter).on('mouseout', mouseout).on('click', clicked);
  }

  const map = maps[country];

  if (map) {
    drawMap(map);
  } else {
    const url = _countries.default[country];

    _d.default.json(url, (error, mapData) => {
      if (error) {
        var _countryOptions$find;

        const countryName = ((_countryOptions$find = _countries.countryOptions.find(x => x[0] === country)) == null ? void 0 : _countryOptions$find[1]) || country;

        _d.default.select(element).html(`<div class="alert alert-danger">Could not load map data for ${countryName}</div>`);
      } else {
        maps[country] = mapData;
        drawMap(mapData);
      }
    });
  }
}

CountryMap.displayName = 'CountryMap';
CountryMap.propTypes = propTypes;
var _default = CountryMap;
exports.default = _default;