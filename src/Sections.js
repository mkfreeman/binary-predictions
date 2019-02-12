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
        let threshold = this.props.threshold.toFixed(2)
        let ele = null;
        switch (this.props.sectionNumber) {
            case 0:
                ele = <div>
                    <h1 id="intro">Binary Predictions Metrics</h1>
                    <p>This visual explanation introduces the metrics of model fit used when predicting of&nbsp;
            <strong>binary outcomes</strong>. It uses the challenge of classifying tumors as <span style={{
                            color: 'rgba(0, 0, 255, .5)'
                        }}>benign</span> or <span style={{
                            color: 'rgba(255, 0, 0, .5)'
                        }}>malignant</span> to explore the importance of these metrics.</p>
                </div>
                break;
            case 1:
                ele = <div>
                    <h1>Cancer Data</h1>
                    <p>A common analytical challenge is classifying an observation as a member of a group. As we walk through this explanation, we'll consider this example</p>
                    <blockquote>Can you use image data to classify tumors as <span style={{
                        color: 'rgba(0, 0, 255, .5)'
                    }}>benign</span> or <span style={{
                        color: 'rgba(255, 0, 0, .5)'
                    }}>malignant</span>?</blockquote>
                    <p>We'll use the <a target="_blank" href="https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.names">Wisconsin Breast Cancer dataset</a> as a driving example.</p>
                </div >
                break;
            case 2:
                ele = <div>
                    <h1>Modeling the data</h1>
                    <p>The dataset provided has 29 different attributes of each tumor. For simplicity's sake, we'll only use the one that is more correlated with the severity of the tumor.</p>

                    <p>
                        The feature most related to the outcome of interest is the <strong>maximum concavity</strong> of each tumor. As you can see, there is clearly an association between a higher maximum concavity and the tumor's malignancy.
                    </p>
                </div>
                break;
            case 3:
                ele = <div>
                    <h1>Logistic Predictions</h1>
                    <p>There are a variety of statistical and machine learning techniques one could use to predict a binary outcome, though a popular one is the <strong>logistic regression</strong> (more on that another time).</p>
                    <p>
                        Here, we can model the <strong>probability of malignancy</strong> using only the maximum concavity of the tumor.
                    </p>
                </div>
                break;
            case 4:
                ele = <div>
                    <h1>Thresholds</h1>
                    <p>The logistic regression allows us to model the <em>probability</em> of our outcome. If we want to convert these probabilities to binary outcomes (e.g., 0 or 1, benign or malignant), we'll need to pick a <strong>threshold</strong></p>
                    <p>Drag the center line to adjust the threshold:</p>
                    <h3>Threshold: {threshold}</h3>
                </div>
                break;
            case 5:
                ele = <div>
                    <h1>Accuracy</h1>
                    <p>The most direct way that we can assess the fit of the model is using the model's <strong>accuracy</strong>. To compute this, we check the percentage of the time that the predicted class (benign, malignant) matches the data.</p>
                    <div>
                        <Tex texContent="\displaystyle{Accuracy = \frac{Correct Predictions}{Total Cases}}" />
                    </div>
                    <p>More formally, we could express this as:</p>
                    <div>
                        <Tex texContent="\displaystyle{Accuracy = \sum_{n = i}^{N}{\frac{1 - |\hat{y_i} - y_i|}N}{}}" />
                    </div>
                    <p>Drag the center line see the accuracy of the model using different thresholds:</p>
                    <h3>Accuracy: {this.props.accuracy}%.</h3>

                </div>
                break;
            case 6:
                ele = <div>
                    <h1>Vocabulary</h1>
                    <p>In order to understand different metrics of success, it's important to understand the conventional vocabulary. <strong>Hover</strong> over any description to identify relevant points on the plot.</p>
                    <div>

                        <p className="hover" onMouseEnter={() => this.props.update("true_positives")} onMouseLeave={() => this.props.update("all")} ><strong>True Positives (TP)</strong>: The model <em>predicts</em> a case (and the case <em>is true</em> in the data)</p>
                        <p className="hover" onMouseEnter={() => this.props.update("false_positives")} onMouseLeave={() => this.props.update("all")} ><strong>False Positives (FP)</strong>: The model <em>predicts</em> a case (and the case <em>is not</em> true in the data)</p>
                        <p className="hover" onMouseEnter={() => this.props.update("true_negatives")} onMouseLeave={() => this.props.update("all")} ><strong>True Negatives (TN)</strong>: The model <em>does not</em> predict a case (and the case <em>is not</em> true in the data)</p>
                        <p className="hover" onMouseEnter={() => this.props.update("false_negatives")} onMouseLeave={() => this.props.update("all")} ><strong>False Negatives (FN)</strong>: The model <em>does not</em> predict a case (and the case <em>is true</em> in the data)</p>

                    </div>
                </div >
                break;
            case 7:
                ele = <div>
                    <h1>Sensitivity</h1>
                    <p>Another consideration we could make is how well our model identifies <strong>positive cases</strong>. This metric, called the sensitivity, is calculated as:</p>
                    <div>
                        <Tex texContent="\displaystyle{Sensitivity = \frac{Correct Pos Predictions}{All Pos Cases}}" />
                    </div>
                    <p>This is often expressed using the vocabulary provided:</p>
                    <div>
                        <Tex texContent="\displaystyle{Sensitivity = \frac{TP}{TP + FN}}" />
                    </div>
                    <p>Drag the center line see the sensitivity of the model using different thresholds:</p>
                    <h3>Sensitivity: {this.props.sensitivity}%.</h3>
                </div>
                break;
            case 8:
                ele = <div>
                    <h1>Specificity</h1>
                    <p>Conversely, we could consider how well our model identifies <strong>negative cases</strong>. This metric, called the specificity, is calculated as:</p>
                    <div>
                        <Tex texContent="\displaystyle{Specificity = \frac{Correct Neg Predictions}{All Neg Cases}}" />
                    </div>
                    <p>This is often expressed using these conventional terms:</p>
                    <div>
                        <Tex texContent="\displaystyle{Specificity = \frac{TN}{TN + FP}}" />
                    </div>
                    <p>Drag the center line see the sensitivity of the model using different thresholds:</p>
                    <h3>Sensitivity: {this.props.sensitivity}%.</h3>
                    <h3>Specificity: {this.props.specificity}%.</h3>

                </div>
                break;
            case 9:
                ele = <div>
                    <h1>ROC Curve</h1>
                    <p>This trade off between specificity and sensitivity is often displayed using a Receiver Operator Characteristic (ROC) Curve, which displays the following:</p>
                    <p><strong>Sensitivity:</strong> Along the x-axis, the sensitivity (also called the <em>true positive rate</em>.</p>
                    <p><strong>Specificity:</strong> Along the y-axis, the specificity (also called the <em>true negative rate</em></p>
                </div>
                break;

            case 10:
                ele = <div>
                    <h1>About</h1>
                    <p>This project was built by&nbsp;
            <a href="http://mfviz.com/" target="_blank">Michael Freeman</a>, a faculty member at the University of Washington&nbsp;<a href="https://ischool.uw.edu/" target="_blank">
                            Information School</a>.
                        <p>If you like this explanation, check out explanations of writing code to work with data in my <a href="https://www.amazon.com/gp/product/0135133106" target="_blank">new book!</a></p>
                    </p>
                    <p>
                        All code for this project is&nbsp;
            <a href="https://github.com/mkfreeman/binary-predictions/" target="_blank">on GitHub</a>, including the script to create the data and run regressions (done in
            <code>Python</code>). Feel free to issue a pull request for improvements, and if you
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        like it, share it on&nbsp;
            <a
                            href="http://twitter.com/home?status=Check out a Visual Explanation of Binary Predictions Metrics by @mf_viz. http://mfviz.com/binary-predictions"
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