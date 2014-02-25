// @include 'urn.jsx'
// @include 'scriptVars.jsx'
if (app.preferences==null)
{
    alert("Photoshop (current version: "+ app.version+") not open..." ); 
   // photoshop.open();
}
//app.displayDialogs = DialogModes.ERROR;
//alert("Photoshop (current version: "+ app.version+") open..." ); 
// current set up requires photoshop to be open.

app.preferences.rulerUnits = Units.PIXELS


// open club
var idOpn = charIDToTypeID( "Opn " );
var desc68 = new ActionDescriptor();
var idnull = charIDToTypeID( "null" );
desc68.putPath( idnull, new File( appPath+"\\clubs\\backgrounds\\"+ bkgImg ) );
//alert(appPath+"\\clubs\\"+ bkgImg)
executeAction( idOpn, desc68, DialogModes.NO );
backDoc=app.activeDocument; 

// open user photo
var idOpn = charIDToTypeID( "Opn " );
var desc68 = new ActionDescriptor();
var idnull = charIDToTypeID( "null" );
desc68.putPath( idnull, new File( appPath+"\\tmp\\"+URN+".jpg" ) );
executeAction( idOpn, desc68, DialogModes.NO );
doc = app.activeDocument; 
doc.changeMode(ChangeMode.RGB); 
doc.resizeImage(800,600,null,ResampleMethod.BICUBIC);
doc.artLayers[0].isBackgroundLayer = false;



var cropRegion = Array(Array(cropX, cropY),
Array(cropX+cropW, cropY),
Array(cropX+cropW, cropY+cropH),
Array(cropX, cropY+cropH),
Array(cropX, cropY))
app.activeDocument.selection.select(cropRegion)
app.activeDocument.selection.invert()

var fillColor = new SolidColor()
fillColor.rgb.red = 255
fillColor.rgb.green = 0
fillColor.rgb.blue = 0
app.activeDocument.selection.cut();


// open trophy image
var idOpn = charIDToTypeID( "Opn " );
var desc68 = new ActionDescriptor();
var idnull = charIDToTypeID( "null" );
desc68.putPath( idnull, new File( appPath+"\\clubs\\cups\\"+club_trophy ) );
executeAction( idOpn, desc68, DialogModes.NO );

frontDoc = app.activeDocument; 
frontDoc.changeMode(ChangeMode.RGB); 
app.activeDocument=doc;


/*var origRatio=640/480;
var docRatio=doc.width/doc.height;

if (docRatio > origRatio) {
    doc.resizeCanvas(doc.height*origRatio,doc.height,AnchorPosition.MIDDLECENTER);
} else {
    doc.resizeCanvas(doc.width,doc.width/origRatio,AnchorPosition.MIDDLECENTER);
}
*/
doc.resizeImage(800,600,null,ResampleMethod.BICUBIC);
doc.artLayers[0].isBackgroundLayer = false;
doc.artLayers[0].copy (true);
app.activeDocument.selection.select(cropRegion)
doc.paste ();


var idnineeightbfiveasixzeroeightfoursixceoneonedthreebdsixbzerozerosixzerobzeroaonethreedcfour = stringIDToTypeID( "98b5a608-46ce-11d3-bd6b-0060b0a13dc4" );
    var desc86 = new ActionDescriptor();
    var idRGre = charIDToTypeID( "RGre" );
    desc86.putInteger( idRGre, RGre );
    var idRBlk = charIDToTypeID( "RBlk" );
    desc86.putInteger( idRBlk, RBlk );
    var idAGre = charIDToTypeID( "AGre" );
    desc86.putInteger( idAGre, AGre );
    var idSTsp = charIDToTypeID( "STsp" );
    desc86.putInteger( idSTsp, STsp );
    var idSKTp = charIDToTypeID( "SKTp" );
    desc86.putInteger( idSKTp, SKTp );
    var idABGl = charIDToTypeID( "ABGl" );
    desc86.putInteger( idABGl, ABGl );
    var idRInt = charIDToTypeID( "RInt" );
    desc86.putBoolean( idRInt, true );
    var idSSel = charIDToTypeID( "SSel" );
    desc86.putBoolean( idSSel, false );
    var idOutA = charIDToTypeID( "OutA" );
    desc86.putBoolean( idOutA, true );
    var idBlog = charIDToTypeID( "Blog" );
    desc86.putBoolean( idBlog, false );
    var idOrgP = charIDToTypeID( "OrgP" );
    desc86.putBoolean( idOrgP, false );
executeAction( idnineeightbfiveasixzeroeightfoursixceoneonedthreebdsixbzerozerosixzerobzeroaonethreedcfour, desc86, DialogModes.NO );


/*doc.artLayers[0].copy ();
app.activeDocument=backDoc;
backDoc.paste();
app.activeDocument=doc;
doc.artLayers[1].copy ();
app.activeDocument=backDoc;
backDoc.paste();*/

doc.artLayers[0].duplicate(backDoc);
doc.artLayers[1].duplicate(backDoc);
app.activeDocument=backDoc;
backDoc.artLayers[0].visible=false;

app.activeDocument=frontDoc;
frontDoc.resizeImage(cupW,null,null,ResampleMethod.BICUBIC);
//frontDoc.resizeImage(cupW,cupH,null,ResampleMethod.BICUBIC);

frontDoc.artLayers[0].copy (true);

app.activeDocument=backDoc;

var selRegion = Array(Array(cupX, cupY-1),
Array(cupX+cupW, cupY-1),
Array(cupX+cupW, cupY-1+cupH),
Array(cupX, cupY-1+cupH),
Array(cupX, cupY-1))
app.activeDocument.selection.select(selRegion)

backDoc.paste ();

app.activeDocument=doc;
doc.close(SaveOptions.DONOTSAVECHANGES);

app.activeDocument=frontDoc;
frontDoc.close(SaveOptions.DONOTSAVECHANGES);

//finalize();

var options = new ExportOptionsSaveForWeb();
options.quality = 80;
options.format = SaveDocumentType.JPEG;
options.optimized = true;

backDoc.exportDocument(File(appPath+"\\output\\"+URN+".tmp"),ExportType.SAVEFORWEB,options);
backDoc.close(SaveOptions.DONOTSAVECHANGES);

file1 = new File(appPath+"\\output\\"+URN+".tmp");
file1.rename(appPath+"\\output\\"+URN+".jpg");

function finalize() {
// =======================================================
    var idslct = charIDToTypeID( "slct" );
    var desc11 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref7 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    ref7.putName( idLyr, "Layer 1" );
    desc11.putReference( idnull, ref7 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc11.putBoolean( idMkVs, false );
    executeAction( idslct, desc11, DialogModes.NO );

// =======================================================
    var idsetd = charIDToTypeID( "setd" );
    var desc12 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref8 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idfsel = charIDToTypeID( "fsel" );
    ref8.putProperty( idChnl, idfsel );
    desc12.putReference( idnull, ref8 );
    var idT = charIDToTypeID( "T   " );
    var ref9 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idChnl = charIDToTypeID( "Chnl" );
    var idTrsp = charIDToTypeID( "Trsp" );
    ref9.putEnumerated( idChnl, idChnl, idTrsp );
    desc12.putReference( idT, ref9 );
    executeAction( idsetd, desc12, DialogModes.NO );

// =======================================================
    var idCntc = charIDToTypeID( "Cntc" );
    var desc13 = new ActionDescriptor();
    var idBy = charIDToTypeID( "By  " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc13.putUnitDouble( idBy, idPxl, 1.000000 );
    executeAction( idCntc, desc13, DialogModes.NO );
    
// =======================================================
    var idFthr = charIDToTypeID( "Fthr" );
    var desc14 = new ActionDescriptor();
    var idRds = charIDToTypeID( "Rds " );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc14.putUnitDouble( idRds, idPxl, 1.000000 );
    executeAction( idFthr, desc14, DialogModes.NO );

// =======================================================
    var idInvs = charIDToTypeID( "Invs" );
    executeAction( idInvs, undefined, DialogModes.NO );

// =======================================================
    var idDlt = charIDToTypeID( "Dlt " );
    executeAction( idDlt, undefined, DialogModes.NO );

// =======================================================
    var idsetd = charIDToTypeID( "setd" );
    var desc15 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref10 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idfsel = charIDToTypeID( "fsel" );
    ref10.putProperty( idChnl, idfsel );
    desc15.putReference( idnull, ref10 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc15.putEnumerated( idT, idOrdn, idNone );
    executeAction( idsetd, desc15, DialogModes.NO );

// =======================================================
    var idFltI = charIDToTypeID( "FltI" );
    executeAction( idFltI, undefined, DialogModes.NO );

// =======================================================
    var idsetd = charIDToTypeID( "setd" );
    var desc16 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref11 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idBckg = charIDToTypeID( "Bckg" );
    ref11.putProperty( idLyr, idBckg );
    desc16.putReference( idnull, ref11 );
    var idT = charIDToTypeID( "T   " );
    var desc17 = new ActionDescriptor();
    var idOpct = charIDToTypeID( "Opct" );
    var idPrc = charIDToTypeID( "#Prc" );
    desc17.putUnitDouble( idOpct, idPrc, 100.000000 );
    var idMd = charIDToTypeID( "Md  " );
    var idBlnM = charIDToTypeID( "BlnM" );
    var idNrml = charIDToTypeID( "Nrml" );
    desc17.putEnumerated( idMd, idBlnM, idNrml );
    var idLyr = charIDToTypeID( "Lyr " );
    desc16.putObject( idT, idLyr, desc17 );
    executeAction( idsetd, desc16, DialogModes.NO );

// load background etc.
// =======================================================
    var idOpn = charIDToTypeID( "Opn " );
    var desc18 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    desc18.putPath( idnull, new File( appPath+"\\clubs\\background_frame.png" ) );
    executeAction( idOpn, desc18, DialogModes.NO );

// =======================================================
    var idsetd = charIDToTypeID( "setd" );
    var desc19 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref12 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idfsel = charIDToTypeID( "fsel" );
    ref12.putProperty( idChnl, idfsel );
    desc19.putReference( idnull, ref12 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idAl = charIDToTypeID( "Al  " );
    desc19.putEnumerated( idT, idOrdn, idAl );
    executeAction( idsetd, desc19, DialogModes.NO );

// =======================================================
    var idcopy = charIDToTypeID( "copy" );
    executeAction( idcopy, undefined, DialogModes.NO );

// =======================================================
    var idslct = charIDToTypeID( "slct" );
    var desc20 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref13 = new ActionReference();
    var idDcmn = charIDToTypeID( "Dcmn" );
    ref13.putOffset( idDcmn, -1 );
    desc20.putReference( idnull, ref13 );
    executeAction( idslct, desc20, DialogModes.NO );

// =======================================================
    var idCnvS = charIDToTypeID( "CnvS" );
    var desc21 = new ActionDescriptor();
    var idWdth = charIDToTypeID( "Wdth" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc21.putUnitDouble( idWdth, idPxl, 838.000000 );
    var idHght = charIDToTypeID( "Hght" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc21.putUnitDouble( idHght, idPxl, 716.000000 );
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idHrzL = charIDToTypeID( "HrzL" );
    var idLeft = charIDToTypeID( "Left" );
    desc21.putEnumerated( idHrzn, idHrzL, idLeft );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idVrtL = charIDToTypeID( "VrtL" );
    var idTop = charIDToTypeID( "Top " );
    desc21.putEnumerated( idVrtc, idVrtL, idTop );
    executeAction( idCnvS, desc21, DialogModes.NO );

// =======================================================
    var idslct = charIDToTypeID( "slct" );
    var desc22 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref14 = new ActionReference();
    var idDcmn = charIDToTypeID( "Dcmn" );
    ref14.putOffset( idDcmn, 1 );
    desc22.putReference( idnull, ref14 );
    executeAction( idslct, desc22, DialogModes.NO );

// =======================================================
    var idslct = charIDToTypeID( "slct" );
    var desc23 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref15 = new ActionReference();
    var idDcmn = charIDToTypeID( "Dcmn" );
    ref15.putOffset( idDcmn, -1 );
    desc23.putReference( idnull, ref15 );
    executeAction( idslct, desc23, DialogModes.NO );

// =======================================================
    var idpast = charIDToTypeID( "past" );
    var desc24 = new ActionDescriptor();
    var idAntA = charIDToTypeID( "AntA" );
    var idAnnt = charIDToTypeID( "Annt" );
    var idAnno = charIDToTypeID( "Anno" );
    desc24.putEnumerated( idAntA, idAnnt, idAnno );
    executeAction( idpast, desc24, DialogModes.NO );

// =======================================================
    var idmove = charIDToTypeID( "move" );
    var desc25 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref16 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref16.putEnumerated( idLyr, idOrdn, idTrgt );
    desc25.putReference( idnull, ref16 );
    var idT = charIDToTypeID( "T   " );
    var ref17 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    ref17.putIndex( idLyr, 0 );
    desc25.putReference( idT, ref17 );
    var idAdjs = charIDToTypeID( "Adjs" );
    desc25.putBoolean( idAdjs, false );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc25.putInteger( idVrsn, 5 );
    executeAction( idmove, desc25, DialogModes.NO );

// =======================================================
    var idslct = charIDToTypeID( "slct" );
    var desc26 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref18 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    ref18.putName( idLyr, "Layer 0" );
    desc26.putReference( idnull, ref18 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc26.putBoolean( idMkVs, false );
    executeAction( idslct, desc26, DialogModes.NO );

// =======================================================
    var idOfst = charIDToTypeID( "Ofst" );
    var desc27 = new ActionDescriptor();
    var idHrzn = charIDToTypeID( "Hrzn" );
    desc27.putInteger( idHrzn, 19 );
    var idVrtc = charIDToTypeID( "Vrtc" );
    desc27.putInteger( idVrtc, 19 );
    var idFl = charIDToTypeID( "Fl  " );
    var idFlMd = charIDToTypeID( "FlMd" );
    var idWrp = charIDToTypeID( "Wrp " );
    desc27.putEnumerated( idFl, idFlMd, idWrp );
    executeAction( idOfst, desc27, DialogModes.NO );


}