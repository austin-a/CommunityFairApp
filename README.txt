Community Fair Mobile App Maintenance Guide

This guide is intended to explain how to maintain the Community Fair mobile app.
The Community Fair application is a series of .html files that support viewing on mobile devices. These pages use the jQuery mobile framework to provide the overall look and feel of the application.
Managing the data on ArcGIS Online
All of the data for the Arts Walk application is stored and managed in the cloud. The data is hosted on the City of Olympia’s ArcGIS Online subscription. There are three pieces of data that are needed for the application. The first of these has the locations of the businesses. It should have the fields: ID, Business, Address, Artist, City, and State. The addresses can then be geocoded in ArcGIS Desktop. The second dataset includes the list of artists that are performing or have art on display. The artist table has the fields: ID, and Artist. The last table contains the events that are occurring during Arts Walk. The event table has the fields: Day, Time, Event, ID, and Sort (the order you wish the events to be listed in). The two tables are then related to the businesses with a relate operation in ArcGIS Desktop before being published to ArcGIS Online as a feature service. Once the data has been published, the related tables will not be editable unless a query (post) operation is used. The businesses can be edited using the editing tools on ArcGIS Online.


Editing Metadata


Maintaining proper metadata is important so that the data remains usable and accessible to a larger audience. This data will most likely go unchanged for long periods of time, but it may be necessary to modify it at some point. To edit the metadata, begin by clicking the “Edit” button located in the toolbar below the thumbnail image, exposing the text fields for editing.


Editing Feature Data


To edit the features and their data, open the feature service using the ArcGIS Online map viewer. Click the “Edit” button in the toolbar above the map view. A new panel will open on the left side of the screen titled “Add Features”. If you wish to add new features to the data, click on the appropriate icon for the layer you wish to edit. You can now place new points by clicking on the map. When you add a new point to the map, you will be prompted to enter data in the pop-up that appears. To edit existing data, click on an existing feature in the map instead of using the “Add Features” panel.  This will open a pop-up displaying the attributes for that point. If multiple points exist at that location, there will be two sideways arrows at the top of the pop-up that enable you to cycle through the features. When you are finished editing, click the “Edit” button again and your edits will be saved automatically.
If you wish to edit the data of the related tables, you must navigate to the rest endpoint of the feature service in a web browser and click on the “update features” button at the bottom of the page. 
The json is in the following format:
[
	{
		“attributes” : {
			“OBJECTID” : 37
			“attribute to edit” : new data
		}
	}
]
The object ID is required so that the program can identify which feature to modify. String values should be surrounded by quotation marks.


Working with jQuery Mobile


jQuery Mobile automatically styles all hyperlinks on a page to appear as large clickable buttons and provides a header and footer for all pages. jQuery uses Ajax to load new pages. Ajax is designed to provide a faster, more responsive user experience that feels akin to a native application. You can insert dynamic content into div tags using jQuery by using the following line.
$(“#divname”).append(‘content to add’)
Since jQuery is not very supportive of dynamic content, the dynamic content that is loaded into the page needs to be styled manually. This is done by adding .trigger(‘create) and the end of the line where you add content. $(“#divname”).append(‘new content’).trigger(‘create’).
Div tags have additional attributes because of jQuery. These attributes often begin with “data-“ and determine how the contents of the div tag are styled.
Certain events are triggered to populate the contents of a div container before the page is shown. The code that is run is determined by the class of the link that was clicked. All of these pageshow and click events have their functions in the jQueryReady() function that is ran when the application is first loaded.
Many of the links involve passing parameters between the pages. This is done
The full jQuery Mobile documentation can be found here: http://jquerymobile.com/demos/1.1.1/


Working with the ArcGIS API


The ArcGIS API is used for interacting with the data on ArcGIS Online, as well as supplying certain elements of the Dojo framework. You can find the documentation for it here: http://help.arcgis.com/en/webapi/javascript/arcgis/ On most of the application pages, the ArcGIS API is used to query data from a feature service on ArcGIS Online. This is a two part process, building the query filter (the query parameters) and executing the query task.
var queryTask = new esri.tasks.QueryTask(“rest endpoint here”);
var query = new esri.tasks.Query();
query.returnGeometry = false;
query.outFields = [“Day, Time, Event”];
query.orderByFields = [“Sort”];
query.where = “1 = 1”;

queryTask.execute(query, receivingFunction);
In this example, receivingFunction gets the results of the query passed into it as a parameter.
The other main use of the API is to draw maps. This is done by creating a new map object and adding additional layers to it.
var map = new esri.Map(“map”);
var layer = new esri.layers.FeatureLayer(“rest endpoint”, {
      “id”: ‘newLayer’,
      Mode: esri.layers.FeatureLayer.MODE_SNAPSHOT
});
map.addLayer(layer);
If you wish to add a different basemap or additional layers to the app, simply add a new layer object using the rest endpoint of the feature service that you wish to add.


Customizing the look and feel


The style sheet was generated by using the jQuery Mobile ThemeRoller: http://jquerymobile.com/themeroller/index.php. This tool is an easy way to rapidly modify the style sheet, especially if you are not familiar with .css files.

A config file has been included in the js folder that can be used to further personalize this application. Through this config file, much of the text displayed in the application can be tailored to a specific case.

If the application requires events to be added on additional days, the “showResults” function can be copied, the variables altered, and results inserted into a new Ajax page displaying the list of events for that day.

Additional comments have been included in the code that explains how certain parts of the program work.
