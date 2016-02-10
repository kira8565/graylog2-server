/* global resultHistogram */

'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Widget = require('../widgets/Widget');
var AddToDashboardMenu = require('../dashboard/AddToDashboardMenu');

var SearchStore = require('../../stores/search/SearchStore');

import resultHistogram from 'legacy/result-histogram';

// Hue-manatee. We tried to be sorry, but aren't.
const LegacyHistogram = React.createClass({
  RESOLUTIONS: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute'],
  getInitialState() {
    return {};
  },
  componentDidUpdate() {
    resultHistogram.resetContainerElements(ReactDOM.findDOMNode(this));
    resultHistogram.setData(this.props.formattedHistogram);
    resultHistogram.drawResultGraph();
  },
  _resolutionChanged(newResolution) {
    return (event) => {
      event.preventDefault();
      SearchStore.resolution = newResolution;
    };
  },
  _getFirstHistogramValue() {
    if (SearchStore.rangeType === 'relative' && SearchStore.rangeParams.get('relative') === 0) {
      return null;
    }

    return this.props.histogram['histogram_boundaries'].from;
  },
  render() {
    if (SearchStore.resolution === undefined) {
      SearchStore.resolution = this.props.histogram.interval;
    }
    var resolutionLinks = this.RESOLUTIONS.map((resolution) => {
      var className = "date-histogram-res-selector";
      if (this.props.histogram.interval === resolution) {
        className += " selected-resolution";
      }
      var suffix = resolution === this.RESOLUTIONS[this.RESOLUTIONS.length - 1] ? "" : ",";
      return (
        <li key={resolution}>
          <a href="#" className={className} data-resolution={resolution}
             onClick={this._resolutionChanged(resolution)}>
            {resolution}
          </a>
          {suffix}
        </li>
      );
    });

    var resolutionSelector = (
      <ul className="graph-resolution-selector list-inline">
        <li><i className="fa fa-clock-o"></i></li>
        {resolutionLinks}
      </ul>
    );

    return (<div className="content-col">
      <div className="pull-right">
        <AddToDashboardMenu title="Add to dashboard"
                            widgetType={Widget.Type.SEARCH_RESULT_CHART}
                            configuration={{interval: this.props.histogram.interval}}
                            pullRight={true}
                            permissions={this.props.permissions}
                            isStreamSearch={this.props.isStreamSearch}/>
      </div>
      <h1>Histogram</h1>

      {resolutionSelector}

      <div id="result-graph-container">
        <div id="y_axis"></div>
        <div id="result-graph" data-from={this._getFirstHistogramValue()}
             data-to={this.props.histogram['histogram_boundaries'].to}></div>
        <div id="result-graph-timeline"></div>
      </div>

    </div>);
  }
});

module.exports = LegacyHistogram;
