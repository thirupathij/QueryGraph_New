$("rect").attr('onclick', function() { alert("Hello!") });


jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#imgaddDS').click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});
});


jQuery(function ($) {
	
	// Close dialog on click
	$('#Ok').click(function (e) {
		$.modal.close();

		return false;
	});
});

jQuery(function ($) {
	

	// Close dialog on click
	$('#Ok').click(function (e) {
		$.modal.close();

		return false;
	});
});

jQuery(function ($) {
	
	// Close dialog on click
	$('#add').click(function (e) {
		$.modal.close();

		return false;
	});
});

jQuery(function ($) {
	
	// Close dialog on click
	$('#cancel').click(function (e) {
		$.modal.close();

		return false;
	});
});


jQuery(function ($) {
// Highlight row 
$('#dataTable tr').click(function () {
    $(this).find('td input:radio').prop('checked', true);
    $('#dataTable tr').removeClass("active");
    $(this).addClass("active");
});

});


 jQuery(function ($) {
 $("input[name$='one']").click(function() {
      var test = $(this).val();
	  $("#displayText").val(test);
    });
});


jQuery(function ($) {
// Highlight row 
$('#queryTable tr').click(function () {
    $(this).find('td input:radio').prop('checked', true);
    $('#queryTable tr').removeClass("active");
    $(this).addClass("active");
});

});

jQuery(function ($) {
// Add row on click
$('#add').click(function () {
    var original = $('#firstRow');
	original.clone().appendTo('#datasourceTable');
     $('#datasourceTable tr').removeClass("active");
    $(this).addClass("active");
});
});

jQuery(function ($) {
 $("#pagination").pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});


jQuery(function ($) {
 $('#maphide').change(function(){
 
       if ($(this).is(":checked")) {
	       $('#googleMap').hide();
       } else {
           $('#googleMap').show();
       }
   });
});


jQuery(function ($) {
 $('#chksptbounds').change(function(){
 
       if ($(this).is(":checked")) {
	       $('#spatBounds').show();
       } else {
           $('#spatBounds').hide();
       }
   });
});


 

function chartonClick(data){
var chartType=$('#chartList').val();
if(chartType=='bar' || chartType=='select' ){

var margin = {top: 10, right: 10, bottom: 30, left: 30},
    width = 400 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0, 10])
    .range([0, width]);

var y = d3.scale.log()
    .domain([1,5])
    .range([0, height]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");
d3.select('svg').remove();
var svg = d3.select("#chart").append("svg:svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
	.style("margin-left","10%")
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
            

var bars = svg.selectAll("rect")
    .data(data)
 .enter().append("rect")
    .attr("x", function(d) {return x(d[0]) - 5;})
    .attr("y", function(d) {return height - y(d[1]);})
    .attr("width",10)
    .attr("height", function(d) {return y(d[1]);})
    .style("fill","blue");
}
else if(chartType='line'){
var data = [];  								
	// this is our data array
	var startingDate = new Date(2012, 8, 18);		
	// this is a date object. each of our data objects is attached to a date
	for (var i = 0; i < 10; i++) {					
	// loop 10 times to create 10 data objects
		var tmpObj 	= {};							
			// this is a temporary data object
		tmpObj.date = new Date(startingDate.getFullYear(), startingDate.getMonth(), startingDate.getDate()+i);				
			// the data for this data object. Increment it from the starting date.
		tmpObj.DAU 	= Math.round(Math.random() * 300);  			
			// random value. Round it to a whole number.
		data.push(tmpObj); 							
			// push the object into our data array
	}

	var width = 300, height = 300;
	var margin = {top: 30, right: 10, bottom: 40, left: 60}, width = width - margin.left - margin.right, height = height - margin.top - margin.bottom;
	// these are graph size settings

	var minDate = (data[0].date),
	maxDate = data[data.length-1].date;
	minObjectValue = getMinObjectValue(data, 'DAU');
	maxObjectValue = getMaxObjectValue(data, 'DAU');
d3.select('svg').remove();
	//create the graph object
	var vis= d3.select("#chart").append("svg")
    	.data(data)
		.attr("class", "metrics-container")
   		.attr("width", width + margin.left + margin.right)
    	.attr("height", height + margin.top + margin.bottom)
		.append("g")
    	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var y = d3.scale.linear().domain([ minObjectValue - (.1 * minObjectValue) , maxObjectValue + (.1 * maxObjectValue) ]).range([height, 0]),
	x = d3.time.scale().domain([minDate, maxDate]).range([0, width]);

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(5);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom")
		.ticks(5);

	vis.append("g")
	    .attr("class", "axis")
	    .call(yAxis);

	vis.append("g")
		.attr("class", "axis")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis);

	//add the axes labels
	vis.append("text")
	    .attr("class", "axis-label")
	    .attr("text-anchor", "end")
	    .attr("x", 20)
	    .attr("y", height + 34)
		.style("","5%")
	    .text('Date');

	vis.append("text")
	    .attr("class", "axis-label")
	    .attr("text-anchor", "end")
	    .attr("y", 6)
	    .attr("dy", "-3.4em")
	    .attr("transform", "rotate(-90)")
	    .text('Daily Active Users');

	var line = d3.svg.line()
		.x(function(d) { return x(d["date"]); })
		.y(function(d) { return y(d["DAU"]); })

	vis.append("svg:path")
		.attr("d", line(data))
		.style("stroke", function() { 
			return "#000000";
		})
		.style("fill", "none")
		.style("stroke-width", "2.5");

		var dataCirclesGroup = vis.append('svg:g');

		var circles = dataCirclesGroup.selectAll('.data-point')
			.data(data);

		circles
			.enter()
			.append('svg:circle')
			.attr('class', 'dot')
			.attr('fill', function() { return "red"; })
			.attr('cx', function(d) { return x(d["date"]); })
			.attr('cy', function(d) { return y(d["DAU"]); })
			.attr('r', function() { return 3; })
			.on("mouseover", function(d) {
  				d3.select(this)
					.attr("r", 8)
					.attr("class", "dot-selected")
					.transition()
      					.duration(750);
			})
			.on("mouseout", function(d) {
  				d3.select(this)
					.attr("r", 3)
					.attr("class", "dot")
					.transition()
      					.duration(750);
			});


}

}


function pieChart(data){
 var w = 300,                        
    h = 300,                            
    r = 100,                           
    color = d3.scale.category20c();     

     d3.select('svg').remove();
    var vis = d3.select("#chart")
        .append("svg:svg")              //create the SVG element inside the <body>
        .data([data])                   //associate our data with the document
            .attr("width", w)           //set the width and height of our visualization (these will be attributes of the <svg> tag
            .attr("height", h)
			.style("margin-left","30%")
			.style("margin-top","20%")
        .append("svg:g")                //make a group to hold our pie chart
            .attr("transform", "translate(" + r + "," + r + ")")    //move the center of the pie chart from 0, 0 to radius, radius

    var arc = d3.svg.arc()              //this will create <path> elements for us using arc data
        .outerRadius(r);

    var pie = d3.layout.pie()           //this will create arc data for us given a list of values
        .value(function(d) { return d.value; });    //we must tell it out to access the value of each element in our data array

    var arcs = vis.selectAll("g.slice")     //this selects all <g> elements with class slice (there aren't any yet)
        .data(pie)                          //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties) 
        .enter()                            //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
            .append("svg:g")                //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
                .attr("class", "slice");    //allow us to style things in the slices (like text)

        arcs.append("svg:path")
                .attr("fill", function(d, i) { return color(i); } ) //set the color for each slice to be chosen from the color function defined above
                .attr("d", arc);                                    //this creates the actual SVG path using the associated data (pie) with the arc drawing function

        arcs.append("svg:text")                                     //add a label to each slice
                .attr("transform", function(d) {                    //set the label's origin to the center of the arc
                //we have to make sure to set these before calling arc.centroid
                d.innerRadius = 0;
                d.outerRadius = r;
                return "translate(" + arc.centroid(d) + ")";        //this gives us a pair of coordinates like [50, 50]
            })
            .attr("text-anchor", "middle")                          //center the text on it's origin
            .text(function(d, i) { return data[i].label; });        //get the label from our original data array

}


jQuery(function ($) {
var data = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7];
 var treeData = {"name" : "R", "info" : "tst", "children" : [
            {"name" : "Filter","children" :[{"name" :"D1"}]},
            {"name" : "D3" },
            {"name" : "Filter","children":[{
			"name":"D2"},
			 {"name" : "A3", "children": [
                  {"name" : "A31", "children" :[
            {"name" : "A311" },
            {"name" : "A312" }
    ]}] }
			]}
      ]};
	 
renderLineChart(data);
//drawOwn();
renderTreeChart(treeData);

});



function getMaxObjectValue(this_array, element) {
	var values = [];
	for (var i = 0; i < this_array.length; i++) {
			values.push(Math.ceil(parseFloat(this_array[i][""+element])));
	}
	values.sort(function(a,b){return a-b});
	return values[values.length-1];
}

function getMinObjectValue(this_array, element) {
	var values = [];
	for (var i = 0; i < this_array.length; i++) {
			values.push(Math.floor(parseFloat(this_array[i][""+element])));
	}
	values.sort(function(a,b){return a-b});
	return values[0];
}

jQuery(function ($) {

$('#chartList').change(function () {
var chartType=$('#chartList').val();
    if(chartType=='bar'){
	var data = [[1,1.5],[2,2],[3,2.5],[4,3],[5,3.5],[6,4],[7,4.5],[8,5],[1,5],[7,5]];
	chartonClick(data);
	}else if(chartType=='line'){
	var dataOne=[];
	chartonClick(dataOne);
	}else if(chartType=='pie'){
	var pieData = [{"value":20}, 
            {"value":10}, 
            {"value":30},
			{"value":7},
			{"value":9}];
	pieChart(pieData);
	}
	 
});
});


function filter (term, _id, cellNr){
	var suche = term.value.toLowerCase();
	var table = document.getElementById(_id);
	var ele;
	for (var r = 1; r < table.rows.length; r++){
		ele = table.rows[r].cells[cellNr].innerHTML.replace(/<[^>]+>/g,"");
		if (ele.toLowerCase().indexOf(suche)>=0 )
			table.rows[r].style.display = '';
		else table.rows[r].style.display = 'none';
	}
}

function validation (){

var userId=document.getElementById('userId');
var mailId=document.getElementById('userMailId');
var userPWD=document.getElementById('userPWD');
var fullName=document.getElementById('fullName');
mailVal=mailId.value;
atpos = mailVal.indexOf("@");
dotpos = mailVal.lastIndexOf(".");
if(userId.value==''){
	 alert( "Please provide user name!" );
     return false;
}

if(mailVal=='' ||atpos < 1 || ( dotpos - atpos < 2 )){
 alert( "Please provide valid mail id!" );
     return false;
	 
}

if(userPWD.value==''){
 alert( "Please provide the password!" );
     return false;
}

if(fullName.value==''){
 alert( "Please provide the fullname!" );
     return false;
}

if( userId.value!=='' && mailVal!=='' && userPWD.value!=='' && fullName.value!=='' ){
alert('User created successfully');
window.location.href="login.html";
return true;
}

}

function logout(){
window.location.href="login.html";
}

function loginValidation(){
var loginId=document.getElementById('loginId');
var loginPWD=document.getElementById('loginPWD');
var loginVal=loginId.value;
atpos = loginVal.indexOf("@");
dotpos = loginVal.lastIndexOf(".");


if(loginVal=='' ||atpos < 1 || ( dotpos - atpos < 2 )){
 alert( "Please provide valid mail id!" );
     return false;
	 
}

if(loginPWD.value==''){
 alert( "Please provide the password!" );
     return false;
}

if(loginVal!=='' && loginPWD.value!==''){
window.location.href="index.html";
return true;
}
}



/*jQuery(function ($) {
$( ".column" ).sortable({
      connectWith: ".column"
    });
 
    $( ".portlet" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
      .find( ".portlet-header" )
        .addClass( "ui-widget-header ui-corner-all" )
        .prepend( "<span class='ui-icon ui-icon-minusthick'></span>")
        .end()
      .find( ".portlet-content" );
 
    $( ".portlet-header .ui-icon" ).click(function() {
      $( this ).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" );
      $( this ).parents( ".portlet:first" ).find( ".portlet-content" ).toggle();
    });
 
    $( ".column" ).disableSelection();
});



 jQuery(function ($) {
    $('.portlet-container').holseePortlets();
  });*/
  
  
  function renderLineChart(data){
		// define dimensions of graph
		var m = [80, 80, 80, 80]; // margins
		var w = 900 - m[1] - m[3]; // width
		var h = 400 - m[0] - m[2]; // height
		
		// create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
		//var data = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9];
		//var data = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7];


		// X scale will fit all values from data[] within pixels 0-w
		var x = d3.scale.linear().domain([0, data.length]).range([0, w]);
		// Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
		var y = d3.scale.linear().domain([0, 10]).range([h, 0]);
			// automatically determining max range can work something like this
			// var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);

		// create a line function that can convert data[] into x and y points
		var line = d3.svg.line()
			// assign the X function to plot our line as we wish
			.x(function(d,i) { 
				// verbose logging to show what's actually being done
				//console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
				// return the X coordinate where we want to plot this datapoint
				return x(i); 
			})
			.y(function(d) { 
				// verbose logging to show what's actually being done
				//console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
				// return the Y coordinate where we want to plot this datapoint
				return y(d); 
			})

			// Add an SVG element with the desired dimensions and margin.
             // d3.select('svg').remove();
			 d3.select("#graph").html('');
      		var graph = d3.select("#graph").append("svg:svg")
			      .attr("width", w + m[1] + m[3])
			      .attr("height", h + m[0] + m[2])
			    .append("svg:g")
			      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");

			// create yAxis
			var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(true).tickFormat(function(d) { return d3.time.format("%b-%Y")(new Date(d)); });;
			//var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickValues([1, 2, 3, 5, 8, 13,1, 2, 3, 5, 8, 13,2, 3, 5, 8, 13]);
			//var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickValues(1,2,3,4,5,6,7);

        
			// Add the x-axis.
			graph.append("svg:g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + h + ")")
			      .call(xAxis);

	/*	graph.append("text")
	    .attr("class", "axis-label")
	    .attr("text-anchor", "end")
	    .attr("x", 20)
	    //.attr("y", height + 34)
	    .text('Date'); */


			// create left yAxis
			var yAxisLeft = d3.svg.axis().scale(y).ticks(4).orient("left");
			// Add the y-axis to the left
			graph.append("svg:g")
			      .attr("class", "y axis")
			      .attr("transform", "translate(-25,0)")
			      .call(yAxisLeft);
			
  			// Add the line by appending an svg:path element with the data line we created above
			// do this AFTER the axes above so that the line is above the tick-lines
			graph.append("svg:path").attr("d", line(data));
			// d3.select('svg').remove();
}
function renderTreeChart(){

}
function changeTreeValue(e){
var index = document.getElementById("sSource").options;
//var indexVal = index.options[index.selectedIndex].value;
var str=[];
var treeData;
for(var i=0;i<index.length;i++){
if(index[i].selected){
str =index[i].value;

}

/*if((str=='d1') && (str=='d2')){
alert('test');
 var treeData = {"name" : "R", "info" : "tst", "children" : [
                {"name" : "D1" },
				{"name" : "D2" }
            
      ]};
}*/
/*if(str=='d3' || str=='d4'){
 var treeData = {"name" : "R", "info" : "tst", "children" : [
                {"name" : "D3" },
				{"name" : "D4" }
            
      ]};

} */


}

//renderTreeChart(treeData);
} 


/************* QUery Graph Codes Starts Here ****************/
 // Variable Declaration
 var datasourceList = new Array();
 var resultArray = new Array();
 var selectedDSArray = new Array();
 var tmpGrpValue="";
 var tmpAggValue="";
 
 var datasourceListFilter = new Array();
 var datasourceListGroup = new Array();
 var click = 0; 

//Common Functions for Generating Query Graph
//This function is used to whether the element is available in a array 
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

//This function is used to whether the element is available in a array for IE8
if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(needle) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === needle) {
                return i;
            }
        }
        return -1;
    };
}

//This function is used to Find and Remove json array object the element 
function removeDataSource(array, property, value) {
   $.each(array, function(index, result) {
      if(result[property] == value) {
          //Remove from array
          array.splice(index, 1);
      }    
   });
}

function RemoveResultData(resArray,data)
{
	var deleteIndex = resArray.indexOf(data);
	if(deleteIndex != -1)
	{
		resArray.splice(deleteIndex, 1);	
	}
	return resArray
}

//This function is used to rendering the Query Graph based on DataSource
 function renderQueryGraph(datasourceList,resultData){
 
	//console.log("Rendering Query Graph dataSourceInfo: "+datasourceList.toSource());
	//console.log("Rendering Query Graph resultData: "+resultData);
 	
 	var width = 750;
    var height = 175;
    var cx=0;var cy=0;
 	var tmpGY=0,tmpFY=0;
    //Testing Purpose
    Graph.Layout.Fixed = function(graph) {
        this.graph = graph; //Give me an answer for this
        this.layout();
        };
        Graph.Layout.Fixed.prototype = {
        layout: function() {
        this.layoutPrepare();
        this.layoutCalcBounds();
        },

        layoutPrepare: function() {
        for (i in this.graph.nodes) {
        var node = this.graph.nodes[i];
        if (node.x) {
        node.layoutPosX = node.x;
        } else {
        node.layoutPosX = 0;
        }
        if (node.y) {
        node.layoutPosY = node.y;
        } else {
        node.layoutPosY = 0;
        }
        }
        },

        layoutCalcBounds: function() {
        var minx = Infinity, maxx = -Infinity, miny = Infinity, maxy = -Infinity;

        for (i in this.graph.nodes) {
        var x = this.graph.nodes[i].layoutPosX;
        var y = this.graph.nodes[i].layoutPosY;
    
        if(x > maxx) maxx = x;
        if(y > maxy) maxy = y;
        if(y < miny) miny = y;
        if(x < minx) minx = x;
        }
       //minx=20;
        this.graph.layoutMinX = minx;
        this.graph.layoutMaxX = maxx;

        this.graph.layoutMinY = miny;
        this.graph.layoutMaxY = maxy;
        }
        };
    //Testing Purpose	
    var g = new Graph();
    g.edgeFactory.template.style.directed = true;

    var set={};
    var render = function(r, n) {
    var label = r.text(0, 30, n.label).attr({opacity:0});
    //var n.label;
    var temp = [];
    //the Raphael set is obligatory, containing all you want to display 
    temp =r.rect(-30, -13, 52, 26).attr({"fill": "#fa8","stroke-width": 2, r : 5});
    set = r.set().push(temp).push(r.text(-5, 0, n.label).attr({"fill": "#000000"}));
/*set.node.onclick = function () {
alert("hey r u fool");
}
   */
    /*console.log(temp["temp"+n.label]);
    temp["temp"+n.label].onclick(function() {
  alert('clicked!');
});*/

/*

triggerClick(temp);

*/

   /* temp.click(function() {
   // console.log('test');
    temp.toFront();
});*/
    //set.item.push(r.node.attr("id",n.label)); 
     /* yourSet.click(function() {
alert("rect clicked");
});
      // make the label show only on hover 
      set.onclick=function(){
      	console.log("hi");
      }
     /* for(i in set.items) {
        console.log(set.items[i]);
      };*/
      /* custom tooltip attached to the set */
 /*$("svg").delegate("text", "click", function() {
alert("you  r a fool");
});
 $("text").trigger("click", function(event){
 alert("you  r a fool");
});
$("text").bind('click',function() {
  //$( "#dialog" ).dialog( "open" );
  alert("hi i m here");
}); 
*//*
$("path").click(function(){
                
               alert("hi sdfsdfsdf");
         });
*/
        set.items.forEach(
            function(el) {
            	el.id=n.label;
            	//console.log(el);
            	//el.addListener("click", handlerFunction, false);
            	//el.node.removeEventListener();
            	var evObj = document.createEvent('MouseEvents');
            	//evObj.attachEvent('click',triggerClick);
            	//el.node.attachEvent('onclick',handlerFunction); 
				evObj.initEvent('click', true, false); 
				//el.node.dispatchEvent(evObj);

              el.node.onclick=function(){ alert("hi");}
               /* el.tooltip(r.set().push(r.rect(-400,-300, 72, 56)
                    .attr({"fill": "#fec", "stroke-width": 1, r : "20px"}))
                	.push(r.text(-370, -270, n.label).attr({"fill": "#000000"})))*/
                });

      return set;
  		};
  		function triggerClick(element) {
    for(var i = 0, len = element.events.length; i < len; i++) {
        if (element.events[i].name == 'click') {
            element.events[i].f();
        }
    }
}
//console.log();
  		/*$.each(set.items , function(el) {
  			console.log(el);
  		});*/
function handlerFunction(){
	alert("handler function");
}
	$("#START").click(function(){
		console.log("hi i am here ");
	});
  	$.each(datasourceList , function() {
		// Label Name to Make "START"
		if(this.label=="DS0")
		{ // why here and not at the point of creating DS0
			labelName="START";
			cx= 0;cy=250; //We are setting the position of the node in graph inside layout
		}
		else
		{
		//Operator of choice?
			if(this.type=="Filter")
			{
				cx=50;
				tmpFY=tmpFY+200;
				cy=tmpFY;
			}else if(this.type=="Operator")
			{
				cx=70;
				tmpFY=tmpFY+75;
				cy=tmpFY;
			}else if(this.type=="Result")
			{
				cx=100;
				tmpFY=tmpFY+75;
				cy=tmpFY;
			}
			else
			{
				//width decisions // there are not widths, We are setting the position of the node in graph inside layout based on type
				cx=100;
				tmpGY=tmpGY+75;
				cy=tmpGY;
			}
			labelName=this.label;	
		}
		// Adding the Node
		g.addNode(this.label,{x:cx, y:cy, label : labelName, render : render});
		
		//console.log("X  "+cx+" Y "+cy);
		//console.log("labelName: "+labelName);
		//console.log("Render  "+render.toSource());
		
		
		if (this.edge.length > 0) {
			for (j=0;j<this.edge.length;j++) {	
				//To make a connection between two nodes
				console.log("Edge: from  "+this.edge[j][0]+" to "+this.edge[j][1]);
				g.addEdge(this.edge[j][0],this.edge[j][1],{stroke : this.color});
			}
		}
    });
	// to make a connection between Result and other Nodes
	//Commented result for now
	/*
	if(resultData.length>0)
	{
		g.addNode("RESULT",{x:170,y:250,label:"RESULT",directed : false, render : render})
		for(var k=0; k< resultData.length;k++)
		{
			g.addEdge(resultData[k],"RESULT",{stroke:"black"});	
		}
	}
	*/
	
	//Empty the Query Graph Area	
    $("#canvas").html(" ");
    //Generating a Query Graph
    //var layouter = new Graph.Layout.Ordered(g, topological_sort(g));
    //Testing Purpose
    var layouter = new Graph.Layout.Fixed(g, topological_sort(g));
    var renderer = new Graph.Renderer.Raphael('canvas', g, width, height);
    //console.log("What is there in set: "+set.toSource());
    $.each(set.items, function(el) {
  			//this.node.id="Test";
  			$.each(this.set, function() {
  				$.each(this.events, function() {
  					//this.unbind=function (){R.addEventListener(i,E,false);return true;} 
  					this.unbind="";
  					//console.log(this.unbind);

  				});
  				
  			});
  		});
    $("#RESULT").click(function(){alert("you are a fool")});
}
$(document).ready(function(){
 /*   $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 */
// var target = document.getElementByTagName("myTarget");
 $("tspan").attr('onclick', function() { alert("Hello!") });

 $("rect").click(function() {
      alert("i am here");
    });
  $("body").delegate("tspan", "click", function(e) {
		alert("i am here");
	  });
 $("svg").on('click',function(){
 	alert("i am here");
 });

});






function addDataSourceList(value,rootNode,connection,color,type)
{
 	var datasource = new Object();
	datasource.label =value;
	datasource.type =type;
	datasource.edge = [];
	datasource.shape = "dot";
	datasource.color = color;
	if(rootNode != "NULL")
	{
		datasource.edge.push([rootNode,value]);
	}
	if(connection != "NULL")
	{
		for(var k=0;k<connection.length;k++)
		{
			datasource.edge.push([connection[k],value]);
		}
	}
	
	console.log("What is in DS: "+datasource.toSource());
	
	datasourceList.push(datasource);
}
function nodeDynamic(){
 
	datasourceList = [];
	var datasource = new Object();
	datasource.label ="DS0";
	datasource.edge = [];
	datasource.shape = "dot";
	datasource.color = "green";
	datasourceList.push(datasource);		
	
	$('#sSource option:selected').each(function(){
	       	var selectedValues =$(this).val();
	        selectedDSArray.push(selectedValues);
			resultArray.push(selectedValues);
			addDataSourceList(selectedValues,"DS0","NULL","green","Filter");			
	});
		
	click++;
	var filter_label = 'F'+click;
	addDataSourceList(filter_label,"NULL",resultArray,"brown","Operator");
	resultArray.push(filter_label);
	
	var result_Label = 'R'+click;
	addDataSourceList(result_Label,filter_label,"NULL","pink","Result");
	resultArray.push(result_Label);
		
	renderQueryGraph(datasourceList,resultArray);
	
	//appending the result of first tab to second tab
	$('#gSource').append('<option value="'+result_Label+'">'+result_Label+'</option>');
	$('#m-selectable_1').append('<option value="'+result_Label+'">'+result_Label+'</option>');
	

	datasourceListFilter[click] = datasourceList; //for saving the states of first tab

	//console.log("datasourceListStatesFilter Array : "+datasourceListFilter.toSource());
	
	/*var options = '<option value="DS1">D1:Test</option><option value="DS2">D2:Test</option><option value="DS3">D3:Test</option><option value="DS4">D4:Test</option>';
	for(var i=0; i<datasourceListFilter.length; i++){
			var j = i+1;
			var label =  'F'+j;			
			options += '<option value="'+label+'">'+label+'</option>';
	}
	options += '<option value="'+result_Label+'">'+result_Label+'</option>';
	
	//console.log("Options:"+options);
	$('#gSource').html(options);
	$('#m-selectable_1').html(options);*/

}

function addGroupby(){
	var grpSelectedArray= new Array();
	
	if(tmpGrpValue != "")
	{
		removeDataSource(datasourceList, 'label', tmpGrpValue);
		if(selectedDSArray.contains(tmpGrpValue) == true)
		{
			delete(selectedDSArray[tmpGrpValue]);
		}
		//deleting elements from the Result Array because to made a connection between datasources and result
		RemoveResultData(resultArray,tmpGrpValue);

	}	
	var index = document.getElementById("groupBy");
	var indexVal = index.options[index.selectedIndex].value;
	tmpGrpValue=indexVal;
	$('#gSource option:selected').each(function(){
		var GrpselectedValues =$(this).val()
	    if(selectedDSArray.contains(GrpselectedValues)==false){
	    	addDataSourceList(GrpselectedValues,"DS0","NULL","red","Filter"); 
			selectedDSArray.push(GrpselectedValues);
			resultArray.push(GrpselectedValues); 
		}
		else if(selectedDSArray.indexOf(GrpselectedValues) == -1)
		{
			addDataSourceList(GrpselectedValues,"DS0","NULL","red","Filter"); 
			resultArray.push(GrpselectedValues);
	    	selectedDSArray.push(GrpselectedValues); 
		}
		//deleting elements from the Result Array because to made a connection between datasources and result
		RemoveResultData(resultArray,GrpselectedValues);
		grpSelectedArray.push(GrpselectedValues);
	});
	//console.log("grouping elements: "+indexVal+" DS: "+grpSelectedArray);
	addDataSourceList(indexVal,"NULL",grpSelectedArray,"red","Operator");
	//resultArray.push(indexVal);
	click++;
	
	//alert("COunt:"+click);
	var result_Label = 'R'+click;	
	addDataSourceList(result_Label,indexVal,"NULL","pink","Result");
	resultArray.push(result_Label);	
	renderQueryGraph(datasourceList,resultArray);

	$('#aSource').append('<option value="'+result_Label+'">'+result_Label+'</option>');
	$('#m-selectable_2').append('<option value="'+result_Label+'">'+result_Label+'</option>');	
	
	/*var options = '<option value="DS1">D1:Test</option><option value="DS2">D2:Test</option><option value="DS3">D3:Test</option><option value="DS4">D4:Test</option>';
	for(var i=0; i<click; i++){
			var j = i+1;
			var label =  'R'+j;			
			options += '<option value="'+label+'">'+label+'</option>';
	}
	$('#aSource').html(options);
	$('#m-selectable_2').html(options);*/	
	
}

function addAggregation(){
	var aggSelectedArray= new Array();
	if(tmpAggValue != "")
	{
		removeDataSource(datasourceList, 'label', tmpAggValue);
		if(selectedDSArray.contains(tmpAggValue) == true)
		{
			delete(selectedDSArray[tmpAggValue]);
		}
		RemoveResultData(resultArray,tmpAggValue);
		
	}
	var Aggindex = document.getElementById("aggBy");
	var AggindexVal = Aggindex.options[Aggindex.selectedIndex].value;
	tmpAggValue=AggindexVal;
	$('#aSource option:selected').each(function(){
		var aggSelectedValues =$(this).val()
	    if(selectedDSArray.contains(aggSelectedValues)==false){
	    	addDataSourceList(aggSelectedValues,"DS0","NULL","blue","Filter"); 
	    	selectedDSArray.push(aggSelectedValues);
	    	resultArray.push(aggSelectedValues); 
		}
		//IE8  
		else if(selectedDSArray.indexOf(aggSelectedValues) == -1)
		{
			addDataSourceList(aggSelectedValues,"DS0","NULL","blue","Filter"); 
	    	selectedDSArray.push(aggSelectedValues);
	    	resultArray.push(aggSelectedValues); 
		}
		aggSelectedArray.push(aggSelectedValues);
		RemoveResultData(resultArray,aggSelectedValues);
		
	});
		
	addDataSourceList(AggindexVal,"NULL",aggSelectedArray,"blue","Operator");
	resultArray.push(AggindexVal);
	
	click++;	
	//alert("COunt:"+click);
	var result_Label = 'R'+click;	
	addDataSourceList(result_Label,AggindexVal,"NULL","pink","Result");
	//resultArray.push(result_Label);
	console.log("Result from final:"+datasourceList.toSource());	
	
	renderQueryGraph(datasourceList,resultArray);
	
}


/************* QUery Graph Codes Ends Here ****************/
