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
        name: "Binary Outcomes"
    }, {
        id: "logistic-preds",
        name: 'Logistic Predictions'
    },
    {
        id: 'about',
        name: "About"
    }
];

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataStep: 0,
            allData: [],
            width: 0,
            height: 0,
            allLineData: [],
            scatterSettings: [
                {
                    pack: false,
                    hideAxes: true,
                    xSwarm: false
                }, {
                    pack: true,
                    hideAxes: true,
                    xSwarm: false
                }, {
                    pack: false,
                    xSwarm: false,
                    hideAxes: false
                },
                {
                    pack: false,
                    hideAxes: false,
                    xSwarm: true
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
            let formatted = data.map(function (d, i) {
                return { id: i, x: +d.worst_concave_points, y: +d.logistic_preds, color: d.outcome }
            })
            let random = data.map(function (d, i) {
                return {
                    id: i,
                    x: +Math.random(),
                    y: +Math.random(),
                    color: d.outcome
                }
            });


            // Screen dimensions
            let dims = this.getDimensions();
            this.setState({
                allData: [
                    random,
                    formatted.slice(0),
                    formatted.slice(0),
                    formatted.slice(0)
                ],
                width: dims.width,
                height: dims.height
            });
        }.bind(this))
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
            case ('logistic-preds'):
                dataStep = 2
                break;
            // case ('random-intercept'):
            //     dataStep = 3
            //     break;
            // case ('random-slope'):
            //     dataStep = 4
            //     break;
            // case ('random-slope-intercept'):
            //     dataStep = 5;
            //     break;
            case ('about'):
                dataStep = 3;
                break;
        }
        this.setState({ dataStep: dataStep })
    }
    render() {
        let colorScale = d3
            .scaleOrdinal()
            .range(d3.schemeCategory10);
        let chartData = this.state.allData[this.state.dataStep];
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
                        width={this.state.width}
                        height={this.state.height}
                        marginLeft={dims.fullWidth - dims.width}
                        xTitle="Years of Experience"
                        yTitle="Salary" />
                    {elementList
                        .map(function (d, i) {
                            return <Element key={'ele-' + i} name={d.id} className="element">
                                <Sections sectionNumber={i} styles={sectionStyle} />
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