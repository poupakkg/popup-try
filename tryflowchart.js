const screenWidthBreakpoint = 768

// This function for expanding grid adapted from: w3schools How TO - Expanding Grid
// https://www.w3schools.com/howto/howto_js_expanding_grid.asp
// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab(sectionName, tabName) {
  const secNames = ["preproject-section", "initiation-section", "planning-section", "execution-section", "closing-section"]
  const secWidths = ["23.5vw", "23.5vw", "99vw", "75.5vw", "23.5vw"]
  var winWidth = window.innerWidth;
  var fcSection, fcTab;
  fcSection = document.getElementsByClassName("flowchart-section");
  fcTab = document.getElementsByClassName("flowchart-tab");
  if ( winWidth < screenWidthBreakpoint ) {
    for ( let i = 0; i < fcSection.length; i++) {
      fcSection[i].style.display = "none";
      fcTab[i].style.borderBottomStyle = "solid";
      fcTab[i].style.borderBottomWidth = "1px";
        fcTab[i].style.backgroundColor = "#c0c6d0";
    }
    for ( let i = 0; i < 5; i++) {
      if ( sectionName === secNames[i] ) {
        document.getElementById("full-flowchart").style.gridTemplateColumns = secWidths[i]
      }
    }
    document.getElementById(sectionName).style.display = "grid";
    document.getElementById(tabName).style.borderBottomStyle = "none";
    document.getElementById(tabName).style.backgroundColor = "#fcf7f8";
  }
}

// Change button appearance at screen width breakpoint
var lastWinWidth

function handleResize() {
  var winWidth = window.innerWidth;
  var fcSection, fcTab;
  fcSection = document.getElementsByClassName("flowchart-section");
  fcTab = document.getElementsByClassName("flowchart-tab");
  if ( lastWinWidth < screenWidthBreakpoint && winWidth >= screenWidthBreakpoint ) {
    for ( let i = 0; i < fcSection.length; i++) {
      fcSection[i].style.display = "grid";
      fcTab[i].style.borderBottomStyle = "solid";
      fcTab[i].style.backgroundColor = "#fcf7f8";
    }  
    document.getElementById("full-flowchart").style.gridTemplateColumns = "9.5vw 9.5vw 40vw 30.5vw 9.5vw"
  } else if ( lastWinWidth >= screenWidthBreakpoint && winWidth < screenWidthBreakpoint ) {
    openTab("preproject-section", "preproject-tab")
  }
  lastWinWidth=winWidth
}

//popoup boxes

mybox.addEventListener( 'mouseover', function ( event ) {
    var mybox = document.getElementById( 'stakeholder-management-plan' );
        this.className = 'salmon-background';
    mybox.addEventListener( 'click', function ( event ) {
        // this.className = 'salmon-background';
        // console.log(boxes)
        // console.log(boxes)
        // var popupDiv = document.getElementsById('popup-div')
        var popupDiv = document.getElementById('first-popup')
        // popupDiv.className = 'popup popup-visible'
        var divClass = popupDiv.className
    });
        if (divClass === 'popup popup-visible') {
            popupDiv.className = 'popup popup-hidden'
        } else {
            popupDiv.className = 'popup popup-visible'
        }
    });

    
var mybox = document.getElementById( 'my-text' );
mybox.addEventListener( 'click', function ( event ) {
    // this.className = 'salmon-background';
    // console.log(boxes)
    var popupDiv = document.getElementById('popup-div')
    var divClass = popupDiv.className
    if (divClass === 'popup popup-visible') {
        popupDiv.className = 'popup popup-hidden'
    } else {
        popupDiv.className = 'popup popup-visible'
    }
});

var mybox = document.getElementsByClassName( 'my-box' );
mybox[0].addEventListener( 'click', function ( event ) {
    // this.className = 'salmon-background';
    // console.log(boxes)
    var popupDiv = document.getElementById('popup-div')
    var divClass = popupDiv.className
    if (divClass === 'popup popup-visible') {
        popupDiv.className = 'popup popup-hidden'
    } else {
        popupDiv.className = 'popup popup-visible'
    }
}); 

/** Jquary website

  $( ".selector" ).dialog({
    classes: {
      "ui-dialog": "highlight",
      "ui-dialog": "ui-corner-all",
      "ui-dialog-titlebar": "ui-corner-all",
      }
  });
  
// Getter
var themeClass = $( ".selector" ).dialog( "option", "classes.ui-dialog" );
 
// Setter
$( ".selector" ).dialog( "option", "classes.ui-dialog", "highlight" );



( ".selector" ).dialog({
    dialogClass: "alert"
  });

  // Getter
var dialogClass = $( ".selector" ).dialog( "option", "dialogClass" );
 
// Setter
$( ".selector" ).dialog( "option", "dialogClass", "alert" );

//Draggable
$( ".selector" ).dialog({
    draggable: false
  });
  // Getter
var draggable = $( ".selector" ).dialog( "option", "draggable" );
 
// Setter
$( ".selector" ).dialog( "option", "draggable", false );

//height
$( ".selector" ).dialog({
    height: 400
  });
  // Getter
var height = $( ".selector" ).dialog( "option", "height" );
 
// Setter
$( ".selector" ).dialog( "option", "height", 400 );

//position
$( ".selector" ).dialog({
    position: { my: "right top", at: "left bottom", of: button }
  });
  // Getter
var position = $( ".selector" ).dialog( "option", "position" );
 
// Setter
$( ".selector" ).dialog( "option", "position", { my: "left top", at: "left bottom", of: button } );

//resizable
$( ".selector" ).dialog({
    resizable: false
  })
  // Getter
var resizable = $( ".selector" ).dialog( "option", "resizable" );
 
// Setter
$( ".selector" ).dialog( "option", "resizable", false );

//tite of the dialog
$( ".selector" ).dialog({
    title: "More information"
  });
  // Getter
var title = $( ".selector" ).dialog( "option", "title" );
 
// Setter
$( ".selector" ).dialog( "option", "title", "Dialog Title" );

//width dialog box
$( ".selector" ).dialog({
    width: 500
  });
  // Getter
var width = $( ".selector" ).dialog( "option", "width" );
 
// Setter
$( ".selector" ).dialog( "option", "width", 500 );
*/