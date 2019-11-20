           
           const map = new harp.MapView({
            canvas: document.getElementById("map"),
            theme: "https://assets.vector.hereapi.com/styles/berlin/base/harp.gl/tilezen?apikey=xxx",
         });
   
         const controls = new harp.MapControls(map);
         window.onresize = () => map.resize(window.innerWidth, window.innerHeight);
         map.setCameraGeolocationAndZoom(
            new harp.GeoCoordinates(37.773972, -122.431297), //Latitude, Longitude
            11
         );
   
         const copyrights = {
            id: "here.com",
            year: new Date().getFullYear(),
            label: "HERE",
            link: "https://legal.here.com/terms"
         };
   
         //Be sure to replace this key with your own HERE developer key from developer.here.com
         //This key will randomly expire
         
         const key = apikey;
         const omvDataSource = new harp.OmvDataSource({
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
            apiFormat: harp.APIFormat.XYZOMV,
            styleSetName: "tilezen",
            authenticationCode: key,
            authenticationMethod: {
                method: harp.AuthenticationMethod.QueryString,
                name: "apikey"
            },
            copyrightInfo: [copyrights]
         });
         map.addDataSource(omvDataSource);
   
