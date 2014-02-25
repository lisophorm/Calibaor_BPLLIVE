// @include 'urn.jsx'
// @include 'scriptVars.jsx'

app.preferences.rulerUnits = Units.PIXELS

var idOpn = charIDToTypeID( "Opn " );
    var desc68 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    desc68.putPath( idnull, new File( appPath+"\\clubs\\backgrounds\\"+ bkgImg ) );
executeAction( idOpn, desc68, DialogModes.NO );

//backDoc=app.activeDocument; 

var idOpn = charIDToTypeID( "Opn " );
var desc68 = new ActionDescriptor();
var idnull = charIDToTypeID( "null" );
desc68.putPath( idnull, new File( appPath+"\\demo\\lastpicture.jpg" ) );
executeAction( idOpn, desc68, DialogModes.NO );

doc = app.activeDocument; 

doc.changeMode(ChangeMode.RGB); 

doc.artLayers[0].isBackgroundLayer = false;