var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Route_points_1 = new ol.format.GeoJSON();
var features_Route_points_1 = format_Route_points_1.readFeatures(json_Route_points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Route_points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_points_1.addFeatures(features_Route_points_1);
var lyr_Route_points_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_points_1, 
                style: style_Route_points_1,
                interactive: true,
                title: '<img src="styles/legend/Route_points_1.png" /> Route_points'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Route_points_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Route_points_1];
lyr_Route_points_1.set('fieldAliases', {'State': ' State Name', 'Name': 'Visited Place', });
lyr_Route_points_1.set('fieldImages', {'State': 'TextEdit', 'Name': 'TextEdit', });
lyr_Route_points_1.set('fieldLabels', {'State': 'inline label', 'Name': 'inline label', });
lyr_Route_points_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});