var redraw, g, renderer;
var filterCount = 1;
var aggrCount = 1;
var grpCount = 1;
var pattrnCount = 1;
var tempoCount = 1;
var resultCount = 1;
var initial ="Start";


/* only do all this when document has finished loading (needed for RaphaelJS) */
    
    //var width = $(document).width() - 20;
    //var height = $(document).height() - 60;

    var width = 750;
    var height = 400;
    
	var filterSelectedDS = [];
	var groupSelectedDS = [];
	var aggregationSelectedDS = [];

	var queryFilter =  '';
	var queryGroup = '';
	var queryAggregation = '';
	var queriesAll = [];


	function queryGraphStart(operator,dropdown){

		if($('#ui-accordion-accordion-panel-0').css('display') == 'none'){
                   $('#ui-accordion-accordion-panel-0').css('display','block');                                            
        }
		$('#canvas').html('');

		//Getting selected values
		$('#'+dropdown+' option:selected').each(function(){
	       	var selectedValue =$(this).val();
	        filterSelectedDS.push(selectedValue);			
		});

		console.log("Selected Elements in Filter: "+removeDuplicates(filterSelectedDS));
		filterSelectedDS = removeDuplicates(filterSelectedDS);
		var queryFilter =  new queryOp(operator, filterSelectedDS);
		queriesAll.push(queryFilter);
		formGraph(queriesAll);
		
	}

	//console.log("After removing duplicates: "+removeDuplicates(inputArray));

	function removeDuplicates(inputArray) {
            var outputArray=new Array();

            if(inputArray.length>0){
                jQuery.each(inputArray, function(index, value) {
                    if(jQuery.inArray(value, outputArray) == -1){
                        outputArray.push(value);
                    }
                });
            }           
            return outputArray;
    }



	function queryOp (opType,opNodes) {
		this.opName = getOpName(opType);
		this.opType = opType;
		this.queryNodes = new getQueryNodes(opNodes);
		this.queryEdges = opNodes;
		//this.nodes = getNode(opNodes);
		this.result = "R"+resultCount;

		$('#sSource').append('<option value="'+this.result+'">'+this.result+'</option>');
		$('#m-selectable').append('<option value="'+this.result+'">'+this.result+'</option>');

		$('#gSource').append('<option value="'+this.result+'">'+this.result+'</option>');
		$('#m-selectable_1').append('<option value="'+this.result+'">'+this.result+'</option>');
		
		$('#aSource').append('<option value="'+this.result+'">'+this.result+'</option>');
		$('#m-selectable_2').append('<option value="'+this.result+'">'+this.result+'</option>');
		
		resultCount++;
		
	}
	
	function getOpName(opType) {
		opName = "";
		switch(opType) {
			case "filter" :
				opName = "F" + filterCount;
				filterCount++;
				break;
			case "group" :
				opName = "G" + grpCount;
				grpCount++;
				break;
			case "aggr" :
				opName = "A" + aggrCount;
				aggrCount++;
				break;			
			case "pattrn" :
				opName = "P" + pattrnCount;
				pattrnCount++;
				break;			
			case "temporal" :
				opName = "T" + tempoCount;
				tempoCount++;
				break;			
		}
		return opName;
	}
	
	function getQueryNodes(opNodes) {
		var queryNodes = new Array();
		var count = 0;
		for (var i=0;i<opNodes.length;i++) {	
			/*if(opNodes[i].substring(0,1) == "R") {
				continue;
			}*/
			queryNodes[count] = new queryNode(opNodes[i]);
			//console.log("opnodes: "+opNodes[i]);
			count++;
		}
		//console.log("sending nodes "+queryNodes.length);
		return queryNodes;
	}
	function queryNode(opNode) {					
			this.nodeName = opNode;
			this.nodeEdge1 = ((opNode.substring(0,1) == "R")?opNode:initial);
			this.nodeEdge2 = ((opNode.substring(0,1) == "R")?"":opNode);					
	}
	
	var renderResult = function(r, n) {
            /* the Raphael set is obligatory, containing all you want to display */
            var set = r.set().push(
                /* custom objects go here */
                r.rect(n.point[0]-30, n.point[1]-13, 60, 44).attr({"fill": "#FF0000", r : "12px", "stroke-width" : n.distance == 0 ? "3px" : "1px" })).push(
                r.text(n.point[0], n.point[1] + 10, (n.label || n.id) + "\n"));
            return set;
        };
		
		function formGraph(queries) {
            g = new Graph();
            g.addNode(initial);
            //console.log("starting");
        	for(var j=0;j<queries.length;j++) {
                g.addNode(queries[j].opName);                                              
                for (var k=0;k<queries[j].queryNodes.length;k++) {
                   g.addNode(queries[j].queryNodes[k].nodeName);
                	if (queries[j].queryNodes[k].nodeEdge2 != "") {
                 		g.addEdge(queries[j].queryNodes[k].nodeEdge1,queries[j].queryNodes[k].nodeEdge2,{weight:9, directed: true,stroke : "#FF0000"});
                    }
                    g.addEdge(queries[j].queryNodes[k].nodeName,queries[j].opName,{weight:9, directed: true,stroke : "#000000"});
                    }
            //,{x:cx, y:cy, label : labelName, render : render}
                g.addNode(queries[j].result,{render:renderResult});
                g.addEdge(queries[j].opName,queries[j].result,{weight:9, directed: true,stroke : "#00ffff"});
                                
            }
	
		
		var layouter = new Graph.Layout.Spring(g);
    
    /* draw the graph using the RaphaelJS draw implementation */
			renderer = new Graph.Renderer.Raphael('canvas', g, width, height);
			
			redraw = function() {
				layouter.layout();
				renderer.draw();
			};
	}

