// The given url containing the data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

//  Retrive and log JSON data
d3.json(url).then(function(data) {console.log(data); });

// set values after JSON is loaded
//let dataNames = data.names;
//let Metadata = data.metadata;
//let dataSamples = data.samples;

// start up the dashboard
function init() {

    // Create drop down menu
    let dropDownMenu = d3.select("#selDataset");

    // select and set values into the dropdown menu using D3
    d3.json(url).then((data) => {
        let dataNames = data.names;
        dataNames.forEach((id) => {//console.log(id);
     
            dropDownMenu.append("option")
            .text(id)
            .property("value",id); });

        // Assign and log in  the  first sample from list 
        let testSubject= dataNames[0];
            console.log(testSubject);

        // setup functions for the creation of the dashboard
        demographicInfo(testSubject);
        barChart(testSubject);
        bubbleChart(testSubject);
        gaugeChart(testSubject); }); };

// setup the function to create Demographic Info panel
function demographicInfo(sample) {

    // Fetch the JSON data
    d3.json(url).then((data) => {

        // Set and log in the demographic info data variables and log it
        let metadata = data.metadata;
        let resultData = metadata.filter(meta => meta.id == sample);
        //console.log(resultData)
        
        // Assign the first object to object variable
        let firstObj = resultData[0];

        // Clear out information with id sample-metadata
        d3.select("#sample-metadata").html("");

        // Append each key and resultData values  to the chart and log it
        Object.entries(firstObj).forEach(([key,resultData]) => {
            //console.log(key,resultData);
            d3.select("#sample-metadata").append("h5").text(`${key}: ${resultData}`);}); });};


// Make the bar chart
function barChart(sample) {

    // Fetch the JSON data 
    d3.json(url).then((data) => {

        // Set up the variables for bar chart
        let dataSamples = data.samples;
        let resultData = dataSamples.filter(result => result.id == sample);
        let firstObj = resultData[0];
        let otu_ids = firstObj.otu_ids;
        let otu_labels = firstObj.otu_labels;
        let sample_values = firstObj.sample_values;
        // Log it
        console.log(otu_ids,otu_labels,sample_values);
        // Set up the variables for the graph
        let x_axis = sample_values.slice(0,10).reverse();
        let y_axis = otu_ids.slice(0,10).map(otu_id => `OTU ${otu_id}`).reverse();
        let text = otu_labels.slice(0,10).reverse();
        
        // Trace for the data for the horizontal bar chart
        let trace = [{
            type: "bar",
            orientation: "h",
            x: x_axis,
            y: y_axis,
            marker: { color: "blue"} }];
        // Create layout for bar chart
        let layout = {
            title: "Top 10 OTUs",
            margin: {
                t:50, 
                b:50}, };

        // Plot the data into bar chart
        Plotly.newPlot("bar", trace, layout);});};


// Make bubble chart
function bubbleChart(sample) {

    // Fetch the JSON data
    d3.json(url).then((data) => {
        
        // Set variables for bubble chart 
        let dataSamples = data.samples;
        let resultData = dataSamples.filter(result => result.id == sample);
        let firstObj = resultData[0];
        let otu_ids = firstObj.otu_ids;
        let otu_labels = firstObj.otu_labels;
        let sample_values = firstObj.sample_values;
        console.log(otu_ids,otu_labels,sample_values);
        
        // Trace for the data for the horizontal bubble chart
        let trace = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids}, }];

        // Create layout for bubble chart
        let layout = {
            title: "Values per OTU ID",
            margin: {
                l: 100,
                r: 100,
                t: 100,
                b: 100,
                pad: 6},
            xaxis: {title: "OTU ID"},
            yaxis: {title: "Sample Values"},};

       // Plot the data into bubble chart
        Plotly.newPlot("bubble", trace, layout) });};



// Make the gauge chart
function gaugeChart(sample) {

    // Fetch the JSON data
    d3.json(url).then((data) => {

        // Set variables for gauge chart 
        let metadata = data.metadata;
        let resultData = metadata.filter(result => result.id == sample);
        // Assign the first object to Obj variable
        let firstObj = resultData[0];

        // Trace for the data for the horizontal gauge chart 
        let trace = [{
            domain: {x: [0,1], y: [0,1]},
            value: firstObj.wfreq,
            title: {text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week"},
            type: "indicator",
            mode: "gauge+number",
            gauge: {
                axis: {range: [0,10], 
                       tickmode: "linear", 
                       tick0: 1, 
                       dtick: 1},
                bar: {color: "rgb(139,0,0)"},
                steps: [
                    {range: [0, 1], color: "rgb(240,230,140)"},
                    {range: [1, 2], color: "rgb(240,230,140)"},
                    {range: [2, 3], color: "rgb(189,183,107)"},
                    {range: [3, 4], color: "rgb(154,205,50)"},
                    {range: [4, 5], color: "rgb(85,107,47)"},
                    {range: [5, 6], color: "rgb(107,142,35)"},
                    {range: [6, 7], color: "rgb(173,255,47)"},
                    {range: [7, 8], color: "rgb(50,205,50)"},
                    {range: [8, 9], color: "rgb(34,139,34)"},
                    {range: [9, 10], color: "rgb(0,100,0)"} ] } }];

        // Plot the data into gauge chart
        Plotly.newPlot("gauge", trace)});};


// Update and log the dashboard with each new selection
function optionChanged(newSampleId) { 
    console.log(newSampleId); 
    demographicInfo(newSampleId);
    barChart(newSampleId);
    bubbleChart(newSampleId);
    gaugeChart(newSampleId);
};

init();