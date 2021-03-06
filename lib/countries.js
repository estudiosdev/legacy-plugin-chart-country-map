"use strict";

exports.__esModule = true;
exports.default = exports.countryOptions = exports.countries = void 0;

var _austria = _interopRequireDefault(require("file-loader!./countries/austria.geojson"));

var _australia = _interopRequireDefault(require("file-loader!./countries/australia.geojson"));

var _belgium = _interopRequireDefault(require("file-loader!./countries/belgium.geojson"));

var _brazil = _interopRequireDefault(require("file-loader!./countries/brazil.geojson"));

var _bulgaria = _interopRequireDefault(require("file-loader!./countries/bulgaria.geojson"));

var _canada = _interopRequireDefault(require("file-loader!./countries/canada.geojson"));

var _china = _interopRequireDefault(require("file-loader!./countries/china.geojson"));

var _denmark = _interopRequireDefault(require("file-loader!./countries/denmark.geojson"));

var _dominican = _interopRequireDefault(require("file-loader!./countries/dominican.geojson"));

var _egypt = _interopRequireDefault(require("file-loader!./countries/egypt.geojson"));

var _estonia = _interopRequireDefault(require("file-loader!./countries/estonia.geojson"));

var _france = _interopRequireDefault(require("file-loader!./countries/france.geojson"));

var _finland = _interopRequireDefault(require("file-loader!./countries/finland.geojson"));

var _germany = _interopRequireDefault(require("file-loader!./countries/germany.geojson"));

var _iceland = _interopRequireDefault(require("file-loader!./countries/iceland.geojson"));

var _india = _interopRequireDefault(require("file-loader!./countries/india.geojson"));

var _indonesia = _interopRequireDefault(require("file-loader!./countries/indonesia.geojson"));

var _iran = _interopRequireDefault(require("file-loader!./countries/iran.geojson"));

var _italy = _interopRequireDefault(require("file-loader!./countries/italy.geojson"));

var _italy_regions = _interopRequireDefault(require("file-loader!./countries/italy_regions.geojson"));

var _japan = _interopRequireDefault(require("file-loader!./countries/japan.geojson"));

var _korea = _interopRequireDefault(require("file-loader!./countries/korea.geojson"));

var _liechtenstein = _interopRequireDefault(require("file-loader!./countries/liechtenstein.geojson"));

var _norway = _interopRequireDefault(require("file-loader!./countries/norway.geojson"));

var _malaysia = _interopRequireDefault(require("file-loader!./countries/malaysia.geojson"));

var _morocco = _interopRequireDefault(require("file-loader!./countries/morocco.geojson"));

var _myanmar = _interopRequireDefault(require("file-loader!./countries/myanmar.geojson"));

var _netherlands = _interopRequireDefault(require("file-loader!./countries/netherlands.geojson"));

var _peru = _interopRequireDefault(require("file-loader!./countries/peru.geojson"));

var _poland = _interopRequireDefault(require("file-loader!./countries/poland.geojson"));

var _portugal = _interopRequireDefault(require("file-loader!./countries/portugal.geojson"));

var _russia = _interopRequireDefault(require("file-loader!./countries/russia.geojson"));

var _saudi_arabia = _interopRequireDefault(require("file-loader!./countries/saudi_arabia.geojson"));

var _singapore = _interopRequireDefault(require("file-loader!./countries/singapore.geojson"));

var _slovenia = _interopRequireDefault(require("file-loader!./countries/slovenia.geojson"));

var _sweden = _interopRequireDefault(require("file-loader!./countries/sweden.geojson"));

var _spain = _interopRequireDefault(require("file-loader!./countries/spain.geojson"));

var _switzerland = _interopRequireDefault(require("file-loader!./countries/switzerland.geojson"));

var _syria = _interopRequireDefault(require("file-loader!./countries/syria.geojson"));

var _thailand = _interopRequireDefault(require("file-loader!./countries/thailand.geojson"));

var _timorleste = _interopRequireDefault(require("file-loader!./countries/timorleste.geojson"));

var _uk = _interopRequireDefault(require("file-loader!./countries/uk.geojson"));

var _ukraine = _interopRequireDefault(require("file-loader!./countries/ukraine.geojson"));

var _uruguay = _interopRequireDefault(require("file-loader!./countries/uruguay.geojson"));

var _usa = _interopRequireDefault(require("file-loader!./countries/usa.geojson"));

var _zambia = _interopRequireDefault(require("file-loader!./countries/zambia.geojson"));

var _vietnam = _interopRequireDefault(require("file-loader!./countries/vietnam.geojson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
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

/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved */
const countries = {
  austria: _austria.default,
  australia: _australia.default,
  belgium: _belgium.default,
  brazil: _brazil.default,
  bulgaria: _bulgaria.default,
  canada: _canada.default,
  china: _china.default,
  denmark: _denmark.default,
  dominican: _dominican.default,
  egypt: _egypt.default,
  estonia: _estonia.default,
  france: _france.default,
  finland: _finland.default,
  germany: _germany.default,
  iceland: _iceland.default,
  india: _india.default,
  indonesia: _indonesia.default,
  iran: _iran.default,
  italy: _italy.default,
  italy_regions: _italy_regions.default,
  japan: _japan.default,
  korea: _korea.default,
  liechtenstein: _liechtenstein.default,
  malaysia: _malaysia.default,
  morocco: _morocco.default,
  myanmar: _myanmar.default,
  netherlands: _netherlands.default,
  norway: _norway.default,
  peru: _peru.default,
  poland: _poland.default,
  portugal: _portugal.default,
  russia: _russia.default,
  saudi_arabia: _saudi_arabia.default,
  singapore: _singapore.default,
  slovenia: _slovenia.default,
  spain: _spain.default,
  sweden: _sweden.default,
  switzerland: _switzerland.default,
  syria: _syria.default,
  thailand: _thailand.default,
  timorleste: _timorleste.default,
  uk: _uk.default,
  ukraine: _ukraine.default,
  uruguay: _uruguay.default,
  usa: _usa.default,
  zambia: _zambia.default,
  vietnam: _vietnam.default
};
exports.countries = countries;
const countryOptions = Object.keys(countries).map(x => {
  if (x === 'uk' || x === 'usa') {
    return [x, x.toUpperCase()];
  }

  if (x === 'italy_regions') {
    return [x, 'Italy (regions)'];
  }

  return [x, x[0].toUpperCase() + x.slice(1)];
});
exports.countryOptions = countryOptions;
var _default = countries;
exports.default = _default;