"use strict";
import './App.css';
import ScatterPlotComponent from './ScatterPlotComponent';
import * as d3 from 'd3';
import Sections from './Sections';

var ReactGA = require('react-ga');
var FontAwesome = require('react-fontawesome');
function logPageView() {
    ReactGA.set({
        page: window.location.pathname + window.location.search
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
}
var React = require('react');
var Scroll = require('react-scroll');

// Scrolling variables
var Link = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;
var scroller = Scroll.scroller;

var durationFn = function (deltaTop) {
    return deltaTop;
};

// List of elements
const elementList = [
    {
        id: 'intro',
        name: "Introduction"
    }, {
        id: 'nested-data',
        name: "Data"
    }, {
        id: 'modeling',
        name: "Modeling"
    },
    {
        id: "logistic-preds",
        name: 'Predictions'
    },
    {
        id: "threshold",
        name: 'Thresholds'
    },
    {
        id: "accuracy",
        name: 'Accuracy'
    },
    {
        id: "vocab",
        name: 'Vocab'
    },
    {
        id: "sensitivity",
        name: 'Sensitivity'
    },
    {
        id: "specificity",
        name: 'Specificity'
    },
    {
        id: "roc",
        name: 'ROC'
    },
    {
        id: 'about',
        name: "About"
    }
];

class App extends React.Component {

    constructor(props) {
        super(props);
        this.updateThreshold = this.updateThreshold.bind(this);
        this.setFilter = this.setFilter.bind(this);
        this.state = {
            dataStep: 0,
            threshold: .5,
            allData: [],
            width: 0,
            typeFilter: "all",
            height: 0,
            allLineData: [],
            scatterSettings: [
                {
                    pack: false,
                    hideXAxis: true,
                    hideYAxis: true,
                    xSwarm: false,
                    showThreshold: false
                }, {
                    pack: true,
                    hideXAxis: true,
                    hideYAxis: true,
                    xSwarm: false,
                    showThreshold: false
                }, {
                    pack: false,
                    xSwarm: true,
                    hideXAxis: false,
                    hideYAxis: true,
                    showThreshold: false
                },
                {
                    pack: false,
                    hideXAxis: false,
                    hideYAxis: false,
                    xSwarm: false,
                    showThreshold: false
                },
                {
                    pack: false,
                    hideXAxis: false,
                    hideYAxis: false,
                    xSwarm: false,
                    showThreshold: true
                },
                {
                    pack: false,
                    hideXAxis: false,
                    hideYAxis: false,
                    xSwarm: false,
                    showThreshold: true
                },
                {
                    pack: false,
                    hideXAxis: false,
                    hideYAxis: false,
                    xSwarm: false,
                    showThreshold: true
                },
                {
                    pack: false,
                    hideXAxis: false,
                    hideYAxis: false,
                    xSwarm: false,
                    showThreshold: true
                },
                {
                    pack: false,
                    hideXAxis: false,
                    hideYAxis: false,
                    xSwarm: false,
                    showThreshold: true
                },
                {
                    pack: false,
                    hideXAxis: false,
                    hideYAxis: false,
                    xSwarm: false,
                    showThreshold: false
                },
                {
                    pack: false,
                    hideXAxis: true,
                    hideYAxis: true,
                    xSwarm: false,
                    showThreshold: false
                }
            ]
        }
    }

    componentDidMount() {
        // Google analytics
        ReactGA.initialize('UA-49431863-5');
        logPageView();

        // Page title
        document.title = "Binary Prediction Metrics";
        Events
            .scrollEvent
            .register('begin', function () { });

        Events
            .scrollEvent
            .register('end', function () { });

        // Listen for resize
        window.addEventListener("resize", this.onResize());

        scrollSpy.update();
        d3.csv('data/cancer_data.csv', function (error, data) {

            // Format plot data
            let formatted = data.map(function (d, i) {
                return { id: i, x: +d.worst_concave_points, y: +d.logistic_preds, color: d.outcome }
            })

            // Random data to display at start / end
            let random = data.map(function (d, i) {
                return {
                    id: i,
                    x: +Math.random() / 3.4,
                    y: +Math.random(),
                    color: d.outcome
                }
            });

            // Screen dimensions
            let dims = this.getDimensions();

            // Set the state
            this.setState({
                rawData: data,
                randomData: random,
                formattedData: formatted,
                width: dims.width,
                height: dims.height
            });
        }.bind(this))

        d3.csv('data/roc_data.csv', function (error, data) {
            // Format plot data
            let formatted = data.map(function (d, i) {
                return { id: i, x: +d.fpr, y: +d.tpr }
            });

            this.setState({
                rocData: formatted
            });
        }.bind(this));
    }

    // Update the threshold
    updateThreshold(d) {
        this.setState({ threshold: d })
    }

    // Compute accuracy
    computeAccuracy() {
        let data = this.state.rawData || [];
        let preds = data.reduce((total, d) => {
            let guess = +d.logistic_preds > this.state.threshold ? 1 : 0;
            let add = guess === +d.outcome ? 1 : 0;
            return add + total;
        }, 0);
        return (preds / data.length * 100).toFixed(1);
    }
    computeSensitivity() {
        let data = this.state.rawData || [];
        let posCases = data.filter((d) => +d.outcome === 1);
        let preds = posCases.reduce((total, d) => {
            let guess = +d.logistic_preds > this.state.threshold ? 1 : 0;
            let add = guess === +d.outcome ? 1 : 0;
            return add + total;
        }, 0);
        return (preds / posCases.length * 100).toFixed(1);
    }
    computeSpecificity() {
        let data = this.state.rawData || [];
        let negCases = data.filter((d) => +d.outcome === 0);
        let preds = negCases.reduce((total, d) => {
            let guess = +d.logistic_preds > this.state.threshold ? 1 : 0;
            let add = guess === +d.outcome ? 1 : 0;
            return add + total;
        }, 0);
        return (preds / negCases.length * 100).toFixed(1);
    }
    // Get dimensions
    getDimensions() {
        let wrapper = document.getElementById('main-wrapper');
        let fullWidth = wrapper == null
            ? 0
            : wrapper.offsetWidth;
        let fraction = window.innerWidth < 960
            ? .55
            : .75;
        let width = fullWidth * fraction;
        let height = wrapper == null
            ? 0
            : window.innerHeight - 140;

        let sectionWidth = fullWidth * (.97 - fraction);
        return { fullWidth: fullWidth, width: width, height: height, sectionWidth: sectionWidth };
    }

    // Resize
    updateDimensions() {
        let dims = this.getDimensions();
        this.setState({ width: dims.width, height: dims.height })
    }

    onResize = () => this
        .updateDimensions
        .bind(this);

    componentWillUnmount() {
        Events
            .scrollEvent
            .remove('begin');
        Events
            .scrollEvent
            .remove('end');

        // Resize event
        window.removeEventListener("resize", this.onResize);

    }
    handleSetActive(to) {
        let dataStep = 0;
        switch (to) {
            case ('intro'):
                dataStep = 0
                break;
            case ('nested-data'):
                dataStep = 1
                break;
            case ('modeling'):
                dataStep = 2
                break;
            case ('logistic-preds'):
                dataStep = 3
                break;
            case ('threshold'):
                dataStep = 4
                break;
            case ('accuracy'):
                dataStep = 5
                break;
            case ('vocab'):
                dataStep = 6
                break;
            case ('sensitivity'):
                dataStep = 7
                break;
            case ('specificity'):
                dataStep = 8;
                break;
            case ('roc'):
                dataStep = 9;
                break;
            case ('about'):
                dataStep = 10;
                break;
        }
        this.setState({ dataStep: dataStep })
    }
    getData() {
        let data = [];
        if (!this.state.formattedData) return data;
        if (this.state.dataStep === 0 || this.state.dataStep === elementList.length - 1) {
            return this.state.randomData
        }
        else if (this.state.dataStep === elementList.length - 2) {
            console.log("ROC!")
            return this.state.rocData;
        }
        else {
            switch (this.state.typeFilter) {
                case ("true_positives"):
                    data = this.state.formattedData.filter((d) => +d.color === 1 && +d.y > this.state.threshold)
                    break;
                case ("false_positives"):
                    data = this.state.formattedData.filter((d) => +d.color === 0 && +d.y > this.state.threshold)
                    break;
                case ("true_negatives"):
                    data = this.state.formattedData.filter((d) => +d.color === 0 && +d.y < this.state.threshold)
                    break;
                case ("false_negatives"):
                    data = this.state.formattedData.filter((d) => +d.color === 1 && +d.y < this.state.threshold)
                    break;
                default:
                    data = this.state.formattedData;
                    break;
            }
            return (data)
        }
    }
    setFilter(filter) {
        this.setState({ typeFilter: filter });
    }
    getXTitle() {
        return this.state.dataStep === 9 ? "Sensitivity" : "Maximum Tumor Concavity"
    }
    getYTitle() {
        return this.state.dataStep === 9 ? "Specificity" : "Probability of Malignancy"
    }
    getAxisLimits() {
        let limits = {
            xMin: -.01,
            xMax: 1,
            yMin: -.09,
            yMax: 1.09
        }
        let altLimits = {
            xMin: -.01,
            xMax: .3,
            yMin: -.09,
            yMax: 1.09
        }
        return this.state.dataStep === 9 ? limits : altLimits;
    }

    getCircleVisibility() {
        return this.state.dataStep === 9 ? false : true;
    }
    getPathVisibility() {
        return this.state.dataStep === 9 ? true : false;
    }
    render() {
        this.computeAccuracy()
        let colorScale = d3
            .scaleOrdinal()
            .domain([1, 0])
            .range(["red", "blue"]);
        let chartData = this.getData();
        // let lineData = this.state.allLineData[this.state.dataStep];
        let scatterSettings = this.state.scatterSettings[this.state.dataStep];
        let nextIndex = this.state.dataStep == elementList.length - 1
            ? 0
            : this.state.dataStep + 1
        let scrollNext = () => scroller.scrollTo(elementList[nextIndex].id, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: nextIndex == 0
                ? 0
                : 50
        })
        let scrollLast = () => scroller.scrollTo(elementList[this.state.dataStep - 1].id, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: nextIndex == 0
                ? 0
                : 50
        })
        let icon = nextIndex == 0
            ? "chevron-up"
            : "chevron-down"

        let dims = this.getDimensions();
        let sectionStyle = {
            width: dims.sectionWidth
        }
        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-default navbar-fixed-top">
                        <div className="container">
                            <div className="menu-large">
                                <ul className="nav navbar-nav">
                                    {elementList
                                        .map(function (d, i) {
                                            let offset = d.id == "intro"
                                                ? 0
                                                : 50;
                                            return <li key={'link-' + i}>
                                                <Link
                                                    activeClass="active"
                                                    onSetActive={this
                                                        .handleSetActive
                                                        .bind(this)}
                                                    className={d.id}
                                                    offset={offset}
                                                    to={d.id}
                                                    spy={true}
                                                    smooth={true}
                                                    duration={500}
                                                >
                                                    {d.name}
                                                </Link>
                                            </li>
                                        }.bind(this))}
                                </ul>
                            </div>
                            <div className="small-menu">
                                <FontAwesome
                                    id="last-step"
                                    name="chevron-left"
                                    size="3x"
                                    onClick={scrollLast}
                                    className={this.state.dataStep == 0
                                        ? 'inactive-scroll'
                                        : 'active-scroll'} />
                                {elementList.filter((d, i) => i == this.state.dataStep)
                                    .map(function (d, i) {
                                        let offset = d.id == "intro"
                                            ? 0
                                            : 50;
                                        return <span key={'step-label-' + i} className="step-label">{d.name}</span>
                                    }.bind(this))
                                }
                                <FontAwesome
                                    className={this.state.dataStep == elementList.length - 1
                                        ? 'inactive-scroll'
                                        : 'active-scroll'}
                                    id="next-step"
                                    name="chevron-right"
                                    size="3x"
                                    onClick={scrollNext} />
                            </div>
                        </div>
                    </nav>
                </div>
                <div id="main-wrapper" className="container">
                    <ScatterPlotComponent
                        settings={scatterSettings}
                        colorScale={colorScale}
                        data={chartData}
                        axisLimits={this.getAxisLimits()}
                        width={this.state.width}
                        height={this.state.height}
                        marginLeft={dims.fullWidth - dims.width}
                        update={this.updateThreshold}
                        threshold={this.state.threshold}
                        xTitle={this.getXTitle()}
                        showCircles={this.getCircleVisibility()}
                        showPath={this.getPathVisibility()}
                        yTitle={this.getYTitle()} />
                    {elementList
                        .map(function (d, i) {
                            return <Element key={'ele-' + i} name={d.id} className="element">
                                <Sections
                                    sectionNumber={i}
                                    styles={sectionStyle}
                                    threshold={this.state.threshold}
                                    accuracy={this.computeAccuracy()}
                                    sensitivity={this.computeSensitivity()}
                                    specificity={this.computeSpecificity()}
                                    update={this.setFilter}
                                />
                            </Element>
                        }.bind(this))}
                    <div id="scroll-wrapper">
                        <FontAwesome id="scroll-down" name={icon} size="3x" onClick={scrollNext} />
                    </div>
                </div>
                <footer>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2017 Copyright
                            <a href="http://mfviz.com/" target="_blank">&nbsp;Michael Freeman</a>
                            <a className="right" target="_blank" href="http://twitter.com/mf_viz">@mf_viz</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
};

export default App;