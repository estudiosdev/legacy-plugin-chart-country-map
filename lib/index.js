"use strict";

exports.__esModule = true;
exports.default = exports.countries = void 0;

var _core = require("@superset-ui/core");

var _transformProps = _interopRequireDefault(require("./transformProps"));

var _thumbnail = _interopRequireDefault(require("./images/thumbnail.png"));

var _controlPanel = _interopRequireDefault(require("./controlPanel"));

var _countries = _interopRequireDefault(require("./countries"));

exports.countries = _countries.default;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const metadata = new _core.ChartMetadata({
  category: (0, _core.t)('Map'),
  credits: ['https://bl.ocks.org/john-guerra'],
  description: (0, _core.t)("Visualizes how a single metric varies across a country's principal subdivisions (states, provinces, etc) on a chloropleth map. Each subdivision's value is elevated when you hover over the corresponding geographic boundary."),
  name: (0, _core.t)('Country Map'),
  tags: [(0, _core.t)('2D'), (0, _core.t)('Comparison'), (0, _core.t)('Geo'), (0, _core.t)('Range'), (0, _core.t)('Report'), (0, _core.t)('Stacked')],
  thumbnail: _thumbnail.default,
  useLegacyApi: true
});

class CountryMapChartPlugin extends _core.ChartPlugin {
  constructor() {
    super({
      loadChart: () => Promise.resolve().then(() => _interopRequireWildcard(require('./ReactCountryMap'))),
      metadata,
      transformProps: _transformProps.default,
      controlPanel: _controlPanel.default
    });
  }

}

exports.default = CountryMapChartPlugin;