var userConfig = {

    // This file contains various configuration settings for "Election Polling Place" template
    // 
    // Use this file to perform the following:
    //
    // 1.  Specify application title                  - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon              - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set splash screen message                  - [ Tag(s) to look for: SplashScreenMessage ]
    // 4.  Set URL for help page                      - [ Tag(s) to look for: HelpURL ]
    //
    // 5.  Specify URLs for basemaps                  - [ Tag(s) to look for: BaseMapLayers ]
    // 6.  Set initial map extent                     - [ Tag(s) to look for: DefaultExtent ]
    //
    // 7.  Choose to use WebMap or map services       - [ Tag(s) to look for: UseWebmap <true/false> ]
    // 8.  Specify WebMapId, if using WebMap          - [ Tag(s) to look for: WebMapId ]
    // 9.  Or for using map services:
    // 9a. Specify URLs for operational layers        - [ Tag(s) to look for: PollLayer, PollMobileLayer, PrecinctLayer, PrecinctOfficeLayer, PollingCommentsLayer, ReferenceOverlayLayer ]
    // 9b. Customize info-Window settings             - [ Tag(s) to look for: InfoWindowHeader, InfoWindowContent ]
    // 9c. Customize info-Popup settings              - [ Tag(s) to look for: InfoPopupFieldsCollection, ShowCommentsTab ]
    // 9d. Customize info-Popup size                  - [ Tag(s) to look for: InfoPopupHeight, InfoPopupWidth ]
    // 9e. Customize data formatting                  - [ Tag(s) to look for: ShowNullValueAs, FormatDateAs ]
    //
    // 10. Customize address search settings          - [ Tag(s) to look for: LocatorURL, LocatorFields, LocatorDefaultAddress, LocatorMarkupSymbolPath, LocatorRippleSize ]
    //
    // 11. Set URL for geometry service               - [ Tag(s) to look for: GeometryService ]
    //
    // 12. Customize routing settings for directions  - [ Tag(s) to look for: RouteServiceURL, RouteColor, RouteWidth ]
    // 12a.Choose destination for route generation    - [ Tag(s) to look for: GenerateRouteToNonDesignatedPollingPlace <true/false> ]
    //
    // 13. Configure data to be displayed on the bottom panel
    //                                                - [ Tag(s) to look for: InfoBoxWidth, PollingPlaceTabData, ElectedOfficialsTabData ]
    //
    // 14. Specify URLs for map sharing               - [ Tag(s) to look for: FacebookShareURL, TwitterShareURL, ShareByMailLink ]
    // 14a.In case of changing the TinyURL service
    //     Specify URL for the new service            - [ Tag(s) to look for: MapSharingOptions (set TinyURLServiceURL, TinyURLResponseAttribute) ]
    //
    //

    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "Community Fair App",

    // Set application icon path
    //ApplicationIcon: "images/EPPIcon.png",
	
	// Set application message
    ApplicationMessage: "Welcome! This app will function as your virtual guide while you visit this event. You can find venues, presenters, and events using the buttons below.",
	
	// Set application info
	ApplicationAbout: "<p>Community Fair Mobile Guide</p><p>v1.0.0, September 2012</p><p>Developed by Austin Amort</p>",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All basemaps need to use the same spatial reference. By default, on application start the first basemap will be loaded 
    BaseMapLayers:
          [
                    {
                        Key: "parcelMap",
                        ThumbnailSource: "images/parcelMap.png",
                        Name: "Parcel Map",
                        MapURL: "http://localgovtemplates.esri.com/ArcGIS/rest/services/ParcelPublicAccess/MapServer"
                    },
                    {
                        Key: "hybridMap",
                        ThumbnailSource: "images/imageryHybrid.png",
                        Name: "Hybrid Map",
                        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
                    }
          ],

    // Initial map extent. Use comma (,) to separate values and dont delete the last comma
    DefaultExtent: "-13557377.978100,5199254.386400,-13556927.127200,5199616.337100",
	SpatialReference: 102100,
	
	LocationsLayer: "http://services1.arcgis.com/FB50u5E6wrw7l3d1/arcgis/rest/services/SampleLocations/FeatureServer/0",
	
	PeopleLayer: "http://services1.arcgis.com/FB50u5E6wrw7l3d1/arcgis/rest/services/SampleLocations/FeatureServer/1",

	ActivityLayer: "http://services1.arcgis.com/FB50u5E6wrw7l3d1/arcgis/rest/services/SampleLocations/FeatureServer/2",

};
