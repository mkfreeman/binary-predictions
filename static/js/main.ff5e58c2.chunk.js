(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(51)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},37:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),s=a.n(r),l=(a(30),a(5)),o=a(6),c=a(9),u=a(7),h=a(8),d=a(3),m=(a(31),a(1)),p=(a(32),a(24)),f=a.n(p),y=function(){var e,t,a,n,i=500,r=.7*window.innerWidth,s=m.scaleLinear(),l=m.scaleLinear(),o="X Axis Title",c="Y Axis Title",u=!1,h=function(){return!1},d=!1,p=!1,y=!1,g=!0,v=!1,x=function(e){return e.color||"green"},w=function(e){return 6},E={left:70,bottom:50,top:0,right:50},b=function(e){return s(e.x)/s.range()[1]*500},k=!1,T="group",S="y",A=function(e){return m.format(".1")(+e)},C=[];function M(e){m.select(this).attr("id","inactive_threshold")}function D(e){l.invert(m.event.y)<l.domain()[0]|l.invert(m.event.y)>l.domain()[1]||h(l.invert(m.event.y))}function N(e){m.select(this).attr("id","threshold")}var _=function(h){var S=i-E.bottom-E.top,_=r-E.left-E.right;h.each(function(h){var P=m.select(this),L=P.selectAll("svg").attr("width",r).attr("height",i).data([h]).enter().append("svg").append("g");L.append("g").attr("transform","translate("+E.left+","+E.top+")").attr("height",S).attr("width",_).attr("class","chartG"),L.append("g").attr("transform","translate("+E.left+","+(S+E.top)+")").attr("class","axis x").style("opacity",1==d?0:1),L.append("g").attr("class","axis y").attr("transform","translate("+E.left+","+E.top+")").style("opacity",1==p?0:1),L.append("text").attr("transform","translate("+(E.left+_/2)+","+(S+E.top+40)+")").attr("class","title x").style("opacity",1==d?0:1),L.append("text").attr("transform","translate("+(E.left-50)+","+(E.top+S/2)+") rotate(-90)").attr("class","title y").style("opacity",1==p?0:1);var O=m.axisBottom(),X=m.axisLeft(),j=f()().attr("class","d3-tip").offset([-10,0]).html(function(e){return"<strong>"+e.color+"</strong>"});P.select("svg").call(j);var F=e||1.05*m.max(h.scatter,function(e){return+e.x}),Y=t||m.min(h.scatter,function(e){return+e.x})-F/15;s.range([0,_]).domain([Y,F]);var z=n||.95*m.min(h.scatter,function(e){return+e.y}),W=a||1.05*m.max(h.scatter,function(e){return+e.y});if(l.range([S,0]).domain([z,W]),O.scale(s),X.scale(l).tickFormat(A),P.select(".axis.x").attr("transform","translate("+E.left+","+(S+E.top)+")").transition().delay(1!=d?1e3:0).duration(1e3).style("opacity",1==d?0:1).call(O),P.select(".axis.y").transition().duration(1e3).delay(1!=p?1e3:0).style("opacity",1==p?0:1).call(X),P.select(".title.x").text(o).attr("transform","translate("+(E.left+_/2)+","+(S+E.top+40)+")").transition().delay(1!=d?1e3:0).duration(1e3).style("opacity",1==d?0:1),P.select(".title.y").attr("transform","translate("+(E.left-50)+","+(E.top+S/2)+") rotate(-90)").text(c).transition().delay(1!=p?1e3:0).duration(1e3).style("opacity",1==p?0:1),!0===k){var R=m.min([r,i]),V=m.pack().size([R,R]),B=m.nest().key(function(e){return e[T]}).entries(h.pack),G=m.hierarchy({values:B},function(e){return e.values}).sum(function(e){return 1});V(G),C=G.descendants().filter(function(e){return 0!=e.depth}).map(function(e){return{x:e.x,y:e.y,id:e.data.id,color:e.data.color,r:e.r,container:1==e.depth}}),Y=m.min(C,function(e){return e.x}),F=m.max(C,function(e){return e.x});var I=E.left,H=[Y-I,F-I];s.domain([Y,F]).range(H),z=m.min(C,function(e){return e.y}),W=m.max(C,function(e){return e.y}),l.domain([z,W]).range([z,W]),w=function(e){return e.r}}else if(!0===u){for(var J=h.swarm.map(function(e){return e}),q=m.forceSimulation(J).force("x",m.forceX(function(e){return s(e.x)}).strength(1)).force("y",m.forceY(i/2)).force("collide",m.forceCollide(8)).stop(),U=0;U<50;++U)q.tick();C=J.map(function(e){return{id:e.id,x:s.invert(e.x),y:l.invert(e.y),color:e.color}})}else C=h.scatter.map(function(e){return{x:e.x,y:e.y,color:e.color,id:e.id}});var $=P.select(".chartG").selectAll("circle").data(C,function(e){return e.id});$.enter().append("circle").attr("cx",function(e){return s(e.x)}).attr("cy",function(e){return l(e.y)}).attr("r",function(e){return w(e)}).style("fill",function(e){return 1==e.container?"none":x(e.color)}).merge($).style("opacity",function(e){return!0===g?.4:0}).transition().duration(1500).delay(b).style("stroke",function(e){return 1==e.container?"black":"none"}).style("fill",function(e){return 1==e.container?"none":x(e.color)}).attr("cx",function(e){return s(e.x)}).attr("cy",function(e){return l(e.y)}).attr("r",function(e){return w(e)}),$.exit().transition().duration(500).style("opacity",0).remove();var K=0==y?[]:[{x:0,y:l(h.horizontalLine),width:s.range()[1],height:l.range()[0]-l(h.horizontalLine)},{x:0,y:0,width:s.range()[1],height:l(h.horizontalLine)}],Q=P.select(".chartG").selectAll("rect").data(K);Q.enter().append("rect").style("opacity",0).merge(Q).style("stroke","black").attr("x",function(e){return e.x}).attr("y",function(e){return e.y}).attr("width",function(e){return e.width}).attr("height",function(e){return e.height}).style("fill",function(e,t){return 0===t?"blue":"red"}).transition().duration(1e3).style("opacity",.2),Q.exit().transition().duration(1e3).style("opacity",0).remove().remove();var Z=0==y?[]:["line"],ee=P.select(".chartG").selectAll("line").data(Z);ee.enter().append("line").style("opacity",0).attr("id","threshold").merge(ee).style("cursor","pointer").style("stroke","black").attr("x1",0).attr("y1",l(h.horizontalLine)).attr("x2",s.range()[1]).attr("y2",l(h.horizontalLine)).style("stroke-width","5").call(m.drag().on("start",M).on("drag",D).on("end",N)).transition().duration(1e3).style("opacity",1),ee.exit().transition().duration(1e3).style("opacity",0).remove();var te=m.line().x(function(e){return s(e.x)}).y(function(e){return l(e.y)}),ae=!0===v?C.sort(function(e,t){return e.x-t.x}):"",ne=P.select(".chartG").selectAll("path.custom").data([ae]);ne.enter().append("path").attr("class","custom").style("opacity",0).merge(ne).style("cursor","pointer").style("stroke","black").attr("d",te).style("fill","none").style("stroke-width","2").transition().duration(1e3).style("opacity",!0===v?1:0),ne.exit().remove()})};return _.height=function(e){return arguments.length?(i=e,_):i},_.width=function(e){return arguments.length?(r=e,_):r},_.colorScale=function(e){return arguments.length?(x=e,_):x},_.xTitle=function(e){return arguments.length?(o=e,_):o},_.yTitle=function(e){return arguments.length?(c=e,_):c},_.radius=function(e){return arguments.length?(w=e,_):w},_.pack=function(e){return arguments.length?(k=e,_):k},_.packValue=function(e){return arguments.length?(S=e,_):S},_.packGroup=function(e){return arguments.length?(T=e,_):T},_.delay=function(e){return arguments.length?(b=e,_):b},_.margin=function(e){return arguments.length?(E=e,_):E},_.xSwarm=function(e){return arguments.length?(u=e,_):u},_.hideYAxis=function(e){return arguments.length?(p=e,_):p},_.hideXAxis=function(e){return arguments.length?(d=e,_):d},_.onDrag=function(e){return arguments.length?(h=e,_):h},_.fixedXMin=function(e){return arguments.length?(t=e,_):t},_.fixedXMax=function(t){return arguments.length?(e=t,_):e},_.fixedYMin=function(e){return arguments.length?(n=e,_):n},_.fixedYMax=function(e){return arguments.length?(a=e,_):a},_.showThreshold=function(e){return arguments.length?(y=e,_):y},_.showCircles=function(e){return arguments.length?(g=e,_):g},_.showPath=function(e){return arguments.length?(v=e,_):v},_},g=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.scatter=y(),this.update()}},{key:"update",value:function(){var e=JSON.parse(JSON.stringify(this.props.data)),t=this.props.data.map(function(e){return{x:e.x,y:e.y,id:e.id,color:e.color}});1==this.props.settings.pack||this.props.hideXAxix,console.log(this.props.showCircles),this.scatter.width(this.props.width).height(this.props.height).colorScale(this.props.colorScale).xTitle(this.props.xTitle).yTitle(this.props.yTitle).radius(this.props.radius).showThreshold(this.props.settings.showThreshold).pack(this.props.settings.pack).packValue("y").xSwarm(this.props.settings.xSwarm).hideXAxis(this.props.settings.hideXAxis).hideYAxis(this.props.settings.hideYAxis).packGroup("color").onDrag(this.props.update).fixedXMin(this.props.axisLimits.xMin).fixedYMin(this.props.axisLimits.yMin).fixedXMax(this.props.axisLimits.xMax).showCircles(this.props.showCircles).showPath(this.props.showPath).fixedYMax(this.props.axisLimits.yMax),m.select(this.root).datum({scatter:e,pack:this.props.data.slice(0),swarm:t,horizontalLine:this.props.threshold}).call(this.scatter)}},{key:"componentWillReceiveProps",value:function(e){this.props=e,this.update()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"chart",style:{marginLeft:this.props.marginLeft},width:this.props.width,height:this.props.height,ref:function(t){e.root=t}})}}]),t}(n.Component);g.defaultProps={width:.6*window.innerWidth,height:.8*window.innerHeight,xTitle:"X Title",colorScale:function(e){return"blue"},yTitle:"Y Title",title:"Title",delay:function(e){return 0},hideXAxis:!1,hideYAxis:!1,radius:function(e){return 1==e.selected?6:10},fill:function(e){return"blue"},settings:{pack:!1},data:[{x:10,y:1e3,id:"a"},{x:10,y:1e3,id:"b"},{x:5,y:1200,id:"c"}],lineData:[]};var v=g,x=a(4),w=(a(37),function(e){function t(e){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.threshold.toFixed(2),a=null;switch(this.props.sectionNumber){case 0:a=i.a.createElement("div",null,i.a.createElement("h1",{id:"intro"},"Binary Predictions Metrics"),i.a.createElement("p",null,"This visual explanation introduces the metrics of model fit used when predicting of\xa0",i.a.createElement("strong",null,"binary outcomes"),". It uses the challenge of classifying tumors as ",i.a.createElement("span",{style:{color:"rgba(0, 0, 255, .5)"}},"benign")," or ",i.a.createElement("span",{style:{color:"rgba(255, 0, 0, .5)"}},"malignant")," to explore the importance of these metrics."));break;case 1:a=i.a.createElement("div",null,i.a.createElement("h1",null,"Cancer Data"),i.a.createElement("p",null,"A common analytical challenge is classifying an observation as a member of a group. As we walk through this explanation, we'll consider this example"),i.a.createElement("blockquote",null,"Can you use image data to classify tumors as ",i.a.createElement("span",{style:{color:"rgba(0, 0, 255, .5)"}},"benign")," or ",i.a.createElement("span",{style:{color:"rgba(255, 0, 0, .5)"}},"malignant"),"?"),i.a.createElement("p",null,"We'll use the ",i.a.createElement("a",{target:"_blank",href:"https://archive.ics.uci.edu/ml/machine-learning-databases/breast-cancer-wisconsin/wdbc.names"},"Wisconsin Breast Cancer dataset")," as a driving example."));break;case 2:a=i.a.createElement("div",null,i.a.createElement("h1",null,"Modeling the data"),i.a.createElement("p",null,"The dataset provided has 29 different attributes of each tumor. For simplicity's sake, we'll only use the one that is more correlated with the severity of the tumor."),i.a.createElement("p",null,"The feature most related to the outcome of interest is the ",i.a.createElement("strong",null,"maximum concavity")," of each tumor. As you can see, there is clearly an association between a higher maximum concavity and the tumor's malignancy."));break;case 3:a=i.a.createElement("div",null,i.a.createElement("h1",null,"Logistic Predictions"),i.a.createElement("p",null,"There are a variety of statistical and machine learning techniques one could use to predict a binary outcome, though a popular one is the ",i.a.createElement("strong",null,"logistic regression")," (more on that another time)."),i.a.createElement("p",null,"Here, we can model the ",i.a.createElement("strong",null,"probability of malignancy")," using only the maximum concavity of the tumor."));break;case 4:a=i.a.createElement("div",null,i.a.createElement("h1",null,"Thresholds"),i.a.createElement("p",null,"The logistic regression allows us to model the ",i.a.createElement("em",null,"probability")," of our outcome. If we want to convert these probabilities to binary outcomes (e.g., 0 or 1, benign or malignant), we'll need to pick a ",i.a.createElement("strong",null,"threshold")),i.a.createElement("p",null,"Drag the center line to adjust the threshold:"),i.a.createElement("h3",null,"Threshold: ",t));break;case 5:a=i.a.createElement("div",null,i.a.createElement("h1",null,"Accuracy"),i.a.createElement("p",null,"The most direct way that we can assess the fit of the model is using the model's ",i.a.createElement("strong",null,"accuracy"),". To compute this, we check the percentage of the time that the predicted class (benign, malignant) matches the data."),i.a.createElement("div",null,i.a.createElement(x.Tex,{texContent:"\\displaystyle{Accuracy = \\frac{Correct Predictions}{Total Cases}}"})),i.a.createElement("p",null,"More formally, we could express this as:"),i.a.createElement("div",null,i.a.createElement(x.Tex,{texContent:"\\displaystyle{Accuracy = \\sum_{n = i}^{N}{\\frac{1 - |\\hat{y_i} - y_i|}N}{}}"})),i.a.createElement("p",null,"Drag the center line see the accuracy of the model using different thresholds:"),i.a.createElement("h3",null,"Accuracy: ",this.props.accuracy,"%."));break;case 6:a=i.a.createElement("div",null,i.a.createElement("h1",null,"Vocabulary"),i.a.createElement("p",null,"In order to understand different metrics of success, it's important to understand the conventional vocabulary. ",i.a.createElement("strong",null,"Hover")," over any description to identify relevant points on the plot."),i.a.createElement("div",null,i.a.createElement("p",{className:"hover",onMouseEnter:function(){return e.props.update("true_positives")},onMouseLeave:function(){return e.props.update("all")}},i.a.createElement("strong",null,"True Positives (TP)"),": The model ",i.a.createElement("em",null,"predicts")," a case (and the case ",i.a.createElement("em",null,"is true")," in the data)"),i.a.createElement("p",{className:"hover",onMouseEnter:function(){return e.props.update("false_positives")},onMouseLeave:function(){return e.props.update("all")}},i.a.createElement("strong",null,"False Positives (FP)"),": The model ",i.a.createElement("em",null,"predicts")," a case (and the case ",i.a.createElement("em",null,"is not")," true in the data)"),i.a.createElement("p",{className:"hover",onMouseEnter:function(){return e.props.update("true_negatives")},onMouseLeave:function(){return e.props.update("all")}},i.a.createElement("strong",null,"True Negatives (TN)"),": The model ",i.a.createElement("em",null,"does not")," predict a case (and the case ",i.a.createElement("em",null,"is not")," true in the data)"),i.a.createElement("p",{className:"hover",onMouseEnter:function(){return e.props.update("false_negatives")},onMouseLeave:function(){return e.props.update("all")}},i.a.createElement("strong",null,"False Negatives (FN)"),": The model ",i.a.createElement("em",null,"does not")," predict a case (and the case ",i.a.createElement("em",null,"is true")," in the data)")));break;case 7:a=i.a.createElement("div",null,i.a.createElement("h1",null,"Sensitivity"),i.a.createElement("p",null,"Another consideration we could make is how well our model identifies ",i.a.createElement("strong",null,"positive cases"),". This metric, called the sensitivity, is calculated as:"),i.a.createElement("div",null,i.a.createElement(x.Tex,{texContent:"\\displaystyle{Sensitivity = \\frac{Correct Pos Predictions}{All Pos Cases}}"})),i.a.createElement("p",null,"This is often expressed using the vocabulary provided:"),i.a.createElement("div",null,i.a.createElement(x.Tex,{texContent:"\\displaystyle{Sensitivity = \\frac{TP}{TP + FN}}"})),i.a.createElement("p",null,"Drag the center line see the sensitivity of the model using different thresholds:"),i.a.createElement("h3",null,"Sensitivity: ",this.props.sensitivity,"%."));break;case 8:a=i.a.createElement("div",null,i.a.createElement("h1",null,"Specificity"),i.a.createElement("p",null,"Conversely, we could consider how well our model identifies ",i.a.createElement("strong",null,"negative cases"),". This metric, called the specificity, is calculated as:"),i.a.createElement("div",null,i.a.createElement(x.Tex,{texContent:"\\displaystyle{Specificity = \\frac{Correct Neg Predictions}{All Neg Cases}}"})),i.a.createElement("p",null,"This is often expressed using these conventional terms:"),i.a.createElement("div",null,i.a.createElement(x.Tex,{texContent:"\\displaystyle{Specificity = \\frac{TN}{TN + FP}}"})),i.a.createElement("p",null,"Drag the center line see the sensitivity of the model using different thresholds:"),i.a.createElement("h3",null,"Sensitivity: ",this.props.sensitivity,"%."),i.a.createElement("h3",null,"Specificity: ",this.props.specificity,"%."));break;case 9:a=i.a.createElement("div",null,i.a.createElement("h1",null,"ROC Curve"),i.a.createElement("p",null,"This trade off between specificity and sensitivity is often displayed using a Receiver Operator Characteristic (ROC) Curve, which displays the following:"),i.a.createElement("p",null,i.a.createElement("strong",null,"False Positive Rate:")," Along the x-axis, the ",i.a.createElement("em",null,"false positive rate"),", which is ",i.a.createElement("code",null,"1 - specificity"),"."),i.a.createElement("p",null,i.a.createElement("strong",null,"True Positive Rate:")," Along the y-axis, the ",i.a.createElement("em",null,"true positive rate")," which is the ",i.a.createElement("code",null,"sensitivity"),"."));break;case 10:a=i.a.createElement("div",null,i.a.createElement("h1",null,"About"),i.a.createElement("p",null,"This project was built by\xa0",i.a.createElement("a",{href:"http://mfviz.com/",target:"_blank"},"Michael Freeman"),", a faculty member at the University of Washington\xa0",i.a.createElement("a",{href:"https://ischool.uw.edu/",target:"_blank"},"Information School"),".",i.a.createElement("p",null,"If you like this explanation, check out explanations of writing code to work with data in my ",i.a.createElement("a",{href:"https://www.amazon.com/gp/product/0135133106",target:"_blank"},"new book!"))),i.a.createElement("p",null,"All code for this project is\xa0",i.a.createElement("a",{href:"https://github.com/mkfreeman/binary-predictions/",target:"_blank"},"on GitHub"),", including the script to create the data and run regressions (done in",i.a.createElement("code",null,"Python"),"). Feel free to issue a pull request for improvements, and if you like it, share it on\xa0",i.a.createElement("a",{href:"http://twitter.com/home?status=Check out a Visual Explanation of Binary Predictions Metrics by @mf_viz. http://mfviz.com/binary-predictions",target:"_blank"},"Twitter"),". Layout inspired by\xa0",i.a.createElement("a",{href:"https://twitter.com/tonyhschu",target:"_blank"},"Tony Chu"),"."));break;default:a=""}return i.a.createElement("div",{className:"Sections",style:this.props.styles},a)}}]),t}(n.Component)),E=a(50),b=a(40);var k=a(0),T=a(42),S=T.Link,A=(T.DirectLink,T.Element),C=T.Events,M=(T.animateScroll,T.scrollSpy),D=T.scroller,N=[{id:"intro",name:"Introduction"},{id:"nested-data",name:"Data"},{id:"modeling",name:"Modeling"},{id:"logistic-preds",name:"Predictions"},{id:"threshold",name:"Thresholds"},{id:"accuracy",name:"Accuracy"},{id:"vocab",name:"Vocab"},{id:"sensitivity",name:"Sensitivity"},{id:"specificity",name:"Specificity"},{id:"roc",name:"ROC"},{id:"about",name:"About"}],_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onResize=function(){return a.updateDimensions.bind(Object(d.a)(Object(d.a)(a)))},a.updateThreshold=a.updateThreshold.bind(Object(d.a)(Object(d.a)(a))),a.setFilter=a.setFilter.bind(Object(d.a)(Object(d.a)(a))),a.state={dataStep:0,threshold:.5,allData:[],width:0,typeFilter:"all",height:0,allLineData:[],scatterSettings:[{pack:!1,hideXAxis:!0,hideYAxis:!0,xSwarm:!1,showThreshold:!1},{pack:!0,hideXAxis:!0,hideYAxis:!0,xSwarm:!1,showThreshold:!1},{pack:!1,xSwarm:!0,hideXAxis:!1,hideYAxis:!0,showThreshold:!1},{pack:!1,hideXAxis:!1,hideYAxis:!1,xSwarm:!1,showThreshold:!1},{pack:!1,hideXAxis:!1,hideYAxis:!1,xSwarm:!1,showThreshold:!0},{pack:!1,hideXAxis:!1,hideYAxis:!1,xSwarm:!1,showThreshold:!0},{pack:!1,hideXAxis:!1,hideYAxis:!1,xSwarm:!1,showThreshold:!0},{pack:!1,hideXAxis:!1,hideYAxis:!1,xSwarm:!1,showThreshold:!0},{pack:!1,hideXAxis:!1,hideYAxis:!1,xSwarm:!1,showThreshold:!0},{pack:!1,hideXAxis:!1,hideYAxis:!1,xSwarm:!1,showThreshold:!1},{pack:!1,hideXAxis:!0,hideYAxis:!0,xSwarm:!1,showThreshold:!1}]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){E.initialize("UA-49431863-8"),E.set({page:window.location.pathname+window.location.search}),E.pageview(window.location.pathname+window.location.search),document.title="Binary Prediction Metrics",C.scrollEvent.register("begin",function(){}),C.scrollEvent.register("end",function(){}),window.addEventListener("resize",this.onResize()),M.update(),m.csv("data/cancer_data.csv",function(e,t){var a=t.map(function(e,t){return{id:t,x:+e.worst_concave_points,y:+e.logistic_preds,color:e.outcome}}),n=t.map(function(e,t){return{id:t,x:+Math.random()/3.4,y:+Math.random(),color:e.outcome}}),i=this.getDimensions();this.setState({rawData:t,randomData:n,formattedData:a,width:i.width,height:i.height})}.bind(this)),m.csv("data/roc_data.csv",function(e,t){var a=t.map(function(e,t){return{id:t,x:+e.fpr,y:+e.tpr}});this.setState({rocData:a})}.bind(this))}},{key:"updateThreshold",value:function(e){this.setState({threshold:e})}},{key:"computeAccuracy",value:function(){var e=this,t=this.state.rawData||[];return(t.reduce(function(t,a){return((+a.logistic_preds>e.state.threshold?1:0)===+a.outcome?1:0)+t},0)/t.length*100).toFixed(1)}},{key:"computeSensitivity",value:function(){var e=this,t=(this.state.rawData||[]).filter(function(e){return 1===+e.outcome});return(t.reduce(function(t,a){return((+a.logistic_preds>e.state.threshold?1:0)===+a.outcome?1:0)+t},0)/t.length*100).toFixed(1)}},{key:"computeSpecificity",value:function(){var e=this,t=(this.state.rawData||[]).filter(function(e){return 0===+e.outcome});return(t.reduce(function(t,a){return((+a.logistic_preds>e.state.threshold?1:0)===+a.outcome?1:0)+t},0)/t.length*100).toFixed(1)}},{key:"getDimensions",value:function(){var e=document.getElementById("main-wrapper"),t=null==e?0:e.offsetWidth,a=window.innerWidth<960?.55:.75;return{fullWidth:t,width:t*a,height:null==e?0:window.innerHeight-140,sectionWidth:t*(.97-a)}}},{key:"updateDimensions",value:function(){var e=this.getDimensions();this.setState({width:e.width,height:e.height})}},{key:"componentWillUnmount",value:function(){C.scrollEvent.remove("begin"),C.scrollEvent.remove("end"),window.removeEventListener("resize",this.onResize)}},{key:"handleSetActive",value:function(e){var t=0;switch(e){case"intro":t=0;break;case"nested-data":t=1;break;case"modeling":t=2;break;case"logistic-preds":t=3;break;case"threshold":t=4;break;case"accuracy":t=5;break;case"vocab":t=6;break;case"sensitivity":t=7;break;case"specificity":t=8;break;case"roc":t=9;break;case"about":t=10}this.setState({dataStep:t})}},{key:"getData",value:function(){var e=this,t=[];if(!this.state.formattedData)return t;if(0===this.state.dataStep||this.state.dataStep===N.length-1)return this.state.randomData;if(this.state.dataStep===N.length-2)return console.log("ROC!"),this.state.rocData;switch(this.state.typeFilter){case"true_positives":t=this.state.formattedData.filter(function(t){return 1===+t.color&&+t.y>e.state.threshold});break;case"false_positives":t=this.state.formattedData.filter(function(t){return 0===+t.color&&+t.y>e.state.threshold});break;case"true_negatives":t=this.state.formattedData.filter(function(t){return 0===+t.color&&+t.y<e.state.threshold});break;case"false_negatives":t=this.state.formattedData.filter(function(t){return 1===+t.color&&+t.y<e.state.threshold});break;default:t=this.state.formattedData}return t}},{key:"setFilter",value:function(e){this.setState({typeFilter:e})}},{key:"getXTitle",value:function(){return 9===this.state.dataStep?"False Positive Rate (1 - Specificity)":"Maximum Tumor Concavity"}},{key:"getYTitle",value:function(){return 9===this.state.dataStep?"True Positive Rate (Sensitivity)":"Probability of Malignancy"}},{key:"getAxisLimits",value:function(){return 9===this.state.dataStep?{xMin:-.01,xMax:1,yMin:-.09,yMax:1.09}:{xMin:-.01,xMax:.3,yMin:-.09,yMax:1.09}}},{key:"getCircleVisibility",value:function(){return 9!==this.state.dataStep}},{key:"getPathVisibility",value:function(){return 9===this.state.dataStep}},{key:"render",value:function(){var e=this;this.computeAccuracy();var t=m.scaleOrdinal().domain([1,0]).range(["red","blue"]),a=this.getData(),n=this.state.scatterSettings[this.state.dataStep],i=this.state.dataStep==N.length-1?0:this.state.dataStep+1,r=function(){return D.scrollTo(N[i].id,{duration:1500,delay:100,smooth:!0,offset:0==i?0:50})},s=0==i?"chevron-up":"chevron-down",l=this.getDimensions(),o={width:l.sectionWidth};return k.createElement("div",null,k.createElement("div",{className:"container"},k.createElement("nav",{className:"navbar navbar-default navbar-fixed-top"},k.createElement("div",{className:"container"},k.createElement("div",{className:"menu-large"},k.createElement("ul",{className:"nav navbar-nav"},N.map(function(e,t){var a="intro"==e.id?0:50;return k.createElement("li",{key:"link-"+t},k.createElement(S,{activeClass:"active",onSetActive:this.handleSetActive.bind(this),className:e.id,offset:a,to:e.id,spy:!0,smooth:!0,duration:500},e.name))}.bind(this)))),k.createElement("div",{className:"small-menu"},k.createElement(b,{id:"last-step",name:"chevron-left",size:"3x",onClick:function(){return D.scrollTo(N[e.state.dataStep-1].id,{duration:1500,delay:100,smooth:!0,offset:0==i?0:50})},className:0==this.state.dataStep?"inactive-scroll":"active-scroll"}),N.filter(function(t,a){return a==e.state.dataStep}).map(function(e,t){e.id;return k.createElement("span",{key:"step-label-"+t,className:"step-label"},e.name)}.bind(this)),k.createElement(b,{className:this.state.dataStep==N.length-1?"inactive-scroll":"active-scroll",id:"next-step",name:"chevron-right",size:"3x",onClick:r}))))),k.createElement("div",{id:"main-wrapper",className:"container"},k.createElement(v,{settings:n,colorScale:t,data:a,axisLimits:this.getAxisLimits(),width:this.state.width,height:this.state.height,marginLeft:l.fullWidth-l.width,update:this.updateThreshold,threshold:this.state.threshold,xTitle:this.getXTitle(),showCircles:this.getCircleVisibility(),showPath:this.getPathVisibility(),yTitle:this.getYTitle()}),N.map(function(e,t){return k.createElement(A,{key:"ele-"+t,name:e.id,className:"element"},k.createElement(w,{sectionNumber:t,styles:o,threshold:this.state.threshold,accuracy:this.computeAccuracy(),sensitivity:this.computeSensitivity(),specificity:this.computeSpecificity(),update:this.setFilter}))}.bind(this)),k.createElement("div",{id:"scroll-wrapper"},k.createElement(b,{id:"scroll-down",name:s,size:"3x",onClick:r}))),k.createElement("footer",null,k.createElement("div",{className:"footer-copyright"},k.createElement("div",{className:"container"},"\xa9 2019 Copyright",k.createElement("a",{href:"http://mfviz.com/",target:"_blank"},"\xa0Michael Freeman"),k.createElement("a",{className:"right",target:"_blank",href:"http://twitter.com/mf_viz"},"@mf_viz")))))}}]),t}(k.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.ff5e58c2.chunk.js.map