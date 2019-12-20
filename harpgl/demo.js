           
         const canvas = document.getElementById("map");
         const map = new harp.MapView({
            canvas: canvas,
            theme: "https://assets.vector.hereapi.com/styles/berlin/base/harp.gl/tilezen?apikey=xxx",
         });
   
         const controls = new harp.MapControls(map);
         window.onresize = () => map.resize(canvas.clientWidth, canvas.clientHeight);
         map.lookAt(new harp.GeoCoordinates(37.773972, -122.431297), 14000, 0, 0);
   
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
   
