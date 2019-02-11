// Sections
import React, { Component } from 'react';
import { Tex } from 'react-tex';
import './Sections.css';

// Written Sections
class Sections extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let ele = null;
        switch (this.props.sectionNumber) {
            case 0:
                ele = <div>
                    <h1 id="intro">An Introduction to Hierarchical Modeling</h1>
                    <p>This visual explanation introduces the statistical concept of&nbsp;
            <strong>Hierarchical Modeling</strong>, also known as&nbsp;
            <em>Mixed Effects Modeling</em>&nbsp;or by&nbsp;
            <a href="https://en.wikipedia.org/wiki/Multilevel_model" target="_blank">
                            these other terms</a>. This is an approach for modeling&nbsp;
            <strong>nested data</strong>. Keep reading to learn how to translate an
            understanding of your data into a hierarchical model specification.</p>
                </div>
                break;
            case 1:
                ele = <div>
                    <h1>Nested Data</h1>
                    <p>You'll frequently encounter nested data structures when doing analytical
                      work. These are instances in which each observation is a member of a group, and
                      you believe that group membership has an important effect on your outcome of
            interest. As we walk through this explanation, we'll consider this example</p>
                    <blockquote>Estimating faculty salaries, where the faculty work in different&nbsp;
            <em>departments</em>.
          </blockquote>
                    <div className="span-wrapper">
                        As you could imagine, the group (<em>department</em>) that a faculty member
            belongs to could determine their salary in different ways. In this example,
            we'll consider faculty who work in the&nbsp;
            <span style={{
                            color: 'rgba(148, 103, 189, .5)'
                        }}>Informatics</span>
                        <span>,&nbsp;</span>
                        <span style={{
                            color: 'rgba(214, 39, 40, .5)'
                        }}>English</span>
                        <span>,&nbsp;</span>
                        <span style={{
                            color: 'rgba(255, 127, 14, .5)'
                        }}>Sociology</span>
                        <span>,&nbsp;</span>
                        <span style={{
                            color: 'rgba(44, 160, 44, .5)'
                        }}>Biology</span>
                        <span>, and&nbsp;</span>
                        <span style={{
                            color: 'rgba(31, 119, 180, .5)'
                        }}>Statistics</span>
                        departments.
          </div>
                </div>
                break;
            case 2:
                ele = <div>
                    <h1>About</h1>
                    <p>This project was built by&nbsp;
            <a href="http://mfviz.com/" target="_blank">Michael Freeman</a>, a faculty member at the University of Washington&nbsp;<a href="https://ischool.uw.edu/" target="_blank">
                            Information School</a>.
          </p>
                    <p>
                        All code for this project is&nbsp;
            <a href="https://github.com/mkfreeman/hierarchical-models/" target="_blank">on GitHub</a>, including the script to create the data and run regressions (done in
            <code>R</code>). Feel free to issue a pull request for improvements, and if you
                        like it, share it on&nbsp;
            <a
                            href="http://twitter.com/home?status=Check out a Visual Introduction to Hierarchical Modeling by @mf_viz. http://mfviz.com/hierarchical-models"
                            target="_blank">Twitter</a>. Layout inspired by&nbsp;
            <a href="https://twitter.com/tonyhschu" target="_blank">Tony Chu</a>.
          </p>
                </div>
                break;
            default:
                ele = '';
        }
        return <div className="Sections" style={this.props.styles}>
            {ele}
        </div>;
    }
}
export default Sections;