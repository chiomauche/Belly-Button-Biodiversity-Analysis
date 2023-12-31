# belly-button-biodiversity

* I built an interactive dashboard to explore the Belly Button Biodiversity , which catalogs the microbes that colonize human navels.
* The dataset revealed that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

# For the analysis:
* I used JavaScript to display data on an interactive dashboard. The JSON data was read from an external site using D3 and drop down was  populated.
* I created bar chart, bubble chart, and gauge chart with Plotly.

* I completed the task by taking the following steps:
* I used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
* I created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

![Alt text](<Screenshot 2023-10-24 040349.png>)

* I created a bubble chart that displays each sample.

![Alt text](<Screenshot 2023-10-24 035610.png>)

*I displayed the sample metadata, i.e., an individual's demographic information.

![Alt text](<Screenshot 2023-10-24 040552.png>)

* I displayed each key-value pair from the metadata JSON object somewhere on the page.

![Alt text](<Screenshot 2023-10-24 040633.png>)
   

* I adapted the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
* I modified the example gauge code to account for values ranging from 0 through 10.

![Alt text](<Screenshot 2023-10-24 041307.png>)

* I finally set an update to all the plots when a new sample is selected.



   # Dashboard link
    https://chiomauche.github.io/Belly-Button-Biodiversity-Analysis/


![Alt text](Dashboard_Screenshot.png)


# References

Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/

