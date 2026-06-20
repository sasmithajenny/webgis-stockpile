var wms_layers = [];

var lyr_260531_OrthoEOM2605_0 = new ol.layer.Image({
        opacity: 1,
        
    title: '260531_Ortho EOM 2605<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/260531_OrthoEOM2605_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13534468.294246, -479578.557389, 13547241.579744, -466602.034410]
        })
    });
var format_BdyDome_1 = new ol.format.GeoJSON();
var features_BdyDome_1 = format_BdyDome_1.readFeatures(json_BdyDome_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BdyDome_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BdyDome_1.addFeatures(features_BdyDome_1);
var lyr_BdyDome_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BdyDome_1, 
                style: style_BdyDome_1,
                popuplayertitle: 'Bdy Dome',
                interactive: true,
                title: '<img src="styles/legend/BdyDome_1.png" /> Bdy Dome'
            });
var format_BdyDomeHabis_2 = new ol.format.GeoJSON();
var features_BdyDomeHabis_2 = format_BdyDomeHabis_2.readFeatures(json_BdyDomeHabis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BdyDomeHabis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BdyDomeHabis_2.addFeatures(features_BdyDomeHabis_2);
var lyr_BdyDomeHabis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BdyDomeHabis_2, 
                style: style_BdyDomeHabis_2,
                popuplayertitle: 'Bdy Dome Habis',
                interactive: true,
                title: '<img src="styles/legend/BdyDomeHabis_2.png" /> Bdy Dome Habis'
            });

lyr_260531_OrthoEOM2605_0.setVisible(true);lyr_BdyDome_1.setVisible(true);lyr_BdyDomeHabis_2.setVisible(true);
var layersList = [lyr_260531_OrthoEOM2605_0,lyr_BdyDome_1,lyr_BdyDomeHabis_2];
lyr_BdyDome_1.set('fieldAliases', {'ID_DOME': 'ID_DOME', 'DISPOSAL_S': 'DISPOSAL_S', });
lyr_BdyDomeHabis_2.set('fieldAliases', {'ID_DOME': 'ID_DOME', 'DISPOSAL_S': 'DISPOSAL_S', });
lyr_BdyDome_1.set('fieldImages', {'ID_DOME': '', 'DISPOSAL_S': '', });
lyr_BdyDomeHabis_2.set('fieldImages', {'ID_DOME': '', 'DISPOSAL_S': '', });
lyr_BdyDome_1.set('fieldLabels', {'ID_DOME': 'no label', 'DISPOSAL_S': 'no label', });
lyr_BdyDomeHabis_2.set('fieldLabels', {'ID_DOME': 'no label', 'DISPOSAL_S': 'no label', });
lyr_BdyDomeHabis_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});