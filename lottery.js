window.pick=1;
const odds={BOS:.25, PHO:.199, LAL:.156,PHL:.119,ORL:.088,MIN:.053,NYK:.053,SAC:.028,DAL:.017,NOP:.011,CHO:.008,DET:.007,DEN:.006,MIA:.005}

colors=["#56b563","#e76221","#fdb927",'#003DA6',"#0077C0","#286294","f58426","#5a2e80","#07a750","#0c2340","#00848e","#fa002c","#5190ca","#98002e"]

console.log(d3.keys(odds).length)



var pad={t:20,r:20,b:20,l:50}

var w=1000-pad.r-pad.l;
var h=600-pad.t-pad.b;


var colorScale = d3.scaleOrdinal()
						.domain(d3.keys(odds))
						.range(colors);


var svg = d3.select('#root').append('svg')
							.attr('width',w+pad.r+pad.l)
							.attr('height',h+pad.t+pad.b)
							.attr('id','svg');
							
							
 var g = svg.append('g').attr('id','g')
 						.attr('width',w)
 						.attr('height',h)
 						.attr('transform','translate('+pad.l+','+pad.t+')');
 						
 						
 						
 var scaleX = d3.scaleBand()
 					.domain(d3.keys(odds))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
 
 var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 
 var Yaxis= d3.axisLeft(scaleY);
 
 
 g.append('g').attr('class','Xaxis').attr('transform','translate(0,'+h+')').call(Xaxis);
 g.append('g').attr('class','Yaxis').call(Yaxis);
 
 
 var rect = g.selectAll('rect').data(d3.keys(odds)).enter();
 
  rect.append('rect')
  		.attr('x', function(d){return scaleX(d)})
  		.attr('y',function(d){ return scaleY(odds[d])})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(odds[d])})
  		.attr('fill',function(d){return colorScale(d)});
  		
  	var pick1 = function(team){
  		
  		var keys=d3.keys(odds)
  		 teams={};
  		
  		keys.forEach(function(key){
  					
  			var odd = odds[key]
  			teams[key]=odd;
  			
  		
  		});
  		
  		  var scaleX = d3.scaleBand()
 					.domain(d3.keys(teams))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
  		 
  		 d3.select('.Xaxis').transition().call(Xaxis);
  		 
  		 var rect = d3.select('g').selectAll('rect').data(d3.keys(teams));
  		     rect.exit().remove();
 		var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 					
  rect.transition().duration(1000)
  		.attr('y',function(d){ return scaleY(teams[d])})
  		.attr('x', function(d){return scaleX(d)})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(teams[d])})
  		.attr('fill',function(d){return colorScale(d)});
  		
  		
  		
  		}	
  		
  		
  		
  		var pick2 = function(team){
  		pick1=team;
  		var keys=d3.keys(odds)
  		 teams={};
  		
  		keys.forEach(function(key){
  					if(key!=team){
  			var odd = odds[key]/(1-odds[team])
  			teams[key]=odd;}
  			
  		
  		});
  		 console.log(teams)
  		  var scaleX = d3.scaleBand()
 					.domain(d3.keys(teams))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
  		 
  		 d3.select('.Xaxis').transition().call(Xaxis);
  		 
  		 var rect = d3.select('g').selectAll('rect').data(d3.keys(teams));
  		     rect.exit().remove();
 		var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 					
  rect.transition().duration(1000)
  		.attr('y',function(d){ return scaleY(teams[d])})
  		.attr('x', function(d){return scaleX(d)})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(teams[d])})
  		.attr('fill',function(d){return colorScale(d)});
  		
  		
  		
  		}
  		
  		
  		
  		
     		var pick3 = function(team){
  					pick2=team
  		var keys=d3.keys(odds)
  		 teams2={};
  		
  		keys.forEach(function(key){
  					if(key!=team && key!=pick1){
  			var odd = odds[key]/(1-odds[team])/(1-teams[team])
  			teams2[key]=odd;}
  			
  		
  		});
  		 
  		  var scaleX = d3.scaleBand()
 					.domain(d3.keys(teams2))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
  		 
  		 d3.select('.Xaxis').transition().call(Xaxis);
  		 
  		 var rect = d3.select('g').selectAll('rect').data(d3.keys(teams2));
  		     rect.exit().remove();
 		var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 					
  rect.transition().duration(1000)
  		.attr('y',function(d){ return scaleY(teams2[d])})
  		.attr('x', function(d){return scaleX(d)})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(teams2[d])})
  		.attr('fill',function(d){return colorScale(d)});
  		
  		
  		
  		}
  		
  		
  		
  		
  	var	pick4=function(team){
  			var keys=d3.keys(odds)
  		 teams3={};
  		
  		keys.forEach(function(key){
  					if(key!=team && key!=pick1 && key!=pick2){
  			var odd = 1;
  			teams3[key]=odd;}
  			
  		
  		});
  		 
  		  var scaleX = d3.scaleBand()
 					.domain(d3.keys(teams3))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
  		 
  		 d3.select('.Xaxis').transition().call(Xaxis);
  		 
  		 var rect = d3.select('g').selectAll('rect').data(d3.keys(teams3));
  		     rect.exit().remove();
 		var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 					
  rect.transition().duration(1000)
  		.attr('y',function(d){ return scaleY(teams3[d])})
  		.attr('x', function(d){return scaleX(d)})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(teams3[d])})
  		
  		
  		
  		
  		
  		
  		}
  		
  	 svg.append('text').attr('id','svgText').attr('x',100).attr('y',20).text("Odds to get the #"+window.pick+" pick.");
  		

  
     var selections = ""; 
       var values=['No Pick'];
        
        var keyed=d3.keys(odds)
        console.log(keyed);
        keyed.forEach(function(team){
        	values.push(team);
        	
        	});
           console.log(values)
        	values.forEach(function(value){	
         
  			selections+="<option value="+value+">"+value+" </option>"
  			
  			
  				})
  console.log(selections)
  
  d3.select("#form").html("<div id='form1'>Choose a Team to that gets the <b>1st</b> pick. <select id='select1' name='odds'>"+selections+"</select></div>") 
   
 
 
 
  
  
  
 
  $('#select1').on('change', function() {
    if(this.value=="No"){
    var pick1 = function(team){
  		
  		var keys=d3.keys(odds)
  		 teams={};
  		
  		keys.forEach(function(key){
  					
  			var odd = odds[key]
  			teams[key]=odd;
  			
  		
  		});
  		
  		  var scaleX = d3.scaleBand()
 					.domain(d3.keys(teams))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
  		 
  		 d3.select('.Xaxis').transition().call(Xaxis);
  		 
  		 var rect = d3.select('g').selectAll('rect').data(d3.keys(teams));
  		     rect.exit().remove();
 		var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 					
  rect.transition().duration(1000)
  		.attr('y',function(d){ return scaleY(teams[d])})
  		.attr('x', function(d){return scaleX(d)})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(teams[d])})
  		.attr('fill',function(d){return colorScale(d)});
  		
  		
  		
  		}	
      pick1(odds)
      window.pick=1
      d3.select('#form2').remove()
  	  d3.select('#form3').remove()
      
      d3.select('#svgText').remove();
       svg.append('text').attr('id','svgText').attr('x',100).attr('y',20).text("Odds to get the #"+window.pick+" pick.");
      
    
    }else{
    
     var pick2 = function(team){
  		pick1=team;
  		var keys=d3.keys(odds)
  		 teams={};
  		
  		keys.forEach(function(key){
  					if(key!=team){
  			var odd = odds[key]/(1-odds[team])
  			teams[key]=odd;}
  			
  		
  		});
  		 console.log(teams)
  		  var scaleX = d3.scaleBand()
 					.domain(d3.keys(teams))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
  		 
  		 d3.select('.Xaxis').transition().call(Xaxis);
  		 
  		 var rect = d3.select('g').selectAll('rect').data(d3.keys(teams));
  		     rect.exit().remove();
 		var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 					
  rect.transition().duration(1000)
  		.attr('y',function(d){ return scaleY(teams[d])})
  		.attr('x', function(d){return scaleX(d)})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(teams[d])})
  		.attr('fill',function(d){return colorScale(d)});
  		
  		
  		
  		}
  		window.pick=2
  		d3.select('#svgText').remove();
       svg.append('text').attr('id','svgText').attr('x',100).attr('y',20).text("Odds to get the #"+window.pick+" pick.");
      
      pick2(this.value);
      d3.select('#form2').remove()
  	  d3.select('#form3').remove()
  
     var selections = ""; 
       var values=['No Pick'];
        
        var keyed=d3.keys(teams)
        console.log(keyed);
        keyed.forEach(function(team){
        	values.push(team);
        	
        	});
           console.log(values)
        	values.forEach(function(value){	
         
  			selections+="<option value="+value+">"+value+" </option>"
  			
  			})
  				
  console.log(selections)
  
  d3.select("#formTwo").html("<div id='form2'>Choose a Team to that gets the <b>2nd</b> pick. <select id='select2' name='odds'>"+selections+"</select></div>") 
   $('#select2').on('change', function() {
    if(this.value=="No"){
    var pick2 = function(team){
  		pick1=team;
  		var keys=d3.keys(odds)
  		 teams={};
  		
  		keys.forEach(function(key){
  					if(key!=team){
  			var odd = odds[key]/(1-odds[team])
  			teams[key]=odd;}
  			
  		
  		});
  		 console.log(teams)
  		  var scaleX = d3.scaleBand()
 					.domain(d3.keys(teams))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
  		 
  		 d3.select('.Xaxis').transition().call(Xaxis);
  		 
  		 var rect = d3.select('g').selectAll('rect').data(d3.keys(teams));
  		     rect.exit().remove();
 		var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 					
  rect.transition().duration(1000)
  		.attr('y',function(d){ return scaleY(teams[d])})
  		.attr('x', function(d){return scaleX(d)})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(teams[d])})
  		.attr('fill',function(d){return colorScale(d)});
  		
  		
  		
  		}
    pick2($('#select1').val())
    window.pick=2
  		d3.select('#svgText').remove();
       svg.append('text').attr('id','svgText').attr('x',100).attr('y',20).text("Odds to get the #"+window.pick+" pick.");
     d3.select('#form3').remove()
    }else{
      var pick3 = function(team){
  					pick2=team
  		var keys=d3.keys(odds)
  		 teams2={};
  		
  		keys.forEach(function(key){
  					if(key!=team && key!=pick1){
  			var odd = odds[key]/(1-odds[team])/(1-teams[team])
  			teams2[key]=odd;}
  			
  		
  		});
  		 
  		  var scaleX = d3.scaleBand()
 					.domain(d3.keys(teams2))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
  		 
  		 d3.select('.Xaxis').transition().call(Xaxis);
  		 
  		 var rect = d3.select('g').selectAll('rect').data(d3.keys(teams2));
  		     rect.exit().remove();
 		var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 					
  rect.transition().duration(1000)
  		.attr('y',function(d){ return scaleY(teams2[d])})
  		.attr('x', function(d){return scaleX(d)})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(teams2[d])})
  		.attr('fill',function(d){return colorScale(d)});
  		
  		
  		
  		}
      
      pick3(this.value);
      window.pick=3
  		d3.select('#svgText').remove();
       svg.append('text').attr('id','svgText').attr('x',100).attr('y',20).text("Odds to get the #"+window.pick+" pick.");
      var selections = ""; 
       var values=['No Pick'];
        
        var keyed=d3.keys(teams2)
        console.log(keyed);
        keyed.forEach(function(team){
        	values.push(team);
        	
        	});
           console.log(values)
        	values.forEach(function(value){	
         
  			selections+="<option value="+value+">"+value+" </option>"
  			
  			})
  				
  console.log(selections)
  
  d3.select("#formThree").html("<div id='form3'>Choose a Team to that gets the <b>3rd</b> pick. <select id='select3' name='odds'>"+selections+"</select></div>") 
   $('#select3').on('change', function() {
    if(this.value=="No"){
       var pick3 = function(team){
  					pick2=team
  		var keys=d3.keys(odds)
  		 teams2={};
  		
  		keys.forEach(function(key){
  					if(key!=team && key!=pick1){
  			var odd = odds[key]/(1-odds[team])/(1-teams[team])
  			teams2[key]=odd;}
  			
  		
  		});
  		 
  		  var scaleX = d3.scaleBand()
 					.domain(d3.keys(teams2))
 					.range([0,w],.01);
 					
 var Xaxis = d3.axisBottom(scaleX)
  		 
  		 d3.select('.Xaxis').transition().call(Xaxis);
  		 
  		 var rect = d3.select('g').selectAll('rect').data(d3.keys(teams2));
  		     rect.exit().remove();
 		var scaleY = d3.scaleLinear()
 					.domain([0,1])
 					.range([h,0]);
 					
  rect.transition().duration(1000)
  		.attr('y',function(d){ return scaleY(teams2[d])})
  		.attr('x', function(d){return scaleX(d)})
  		.attr('width',function(){return (w/(d3.keys(odds).length+1))-2})
  		.attr('height',function(d){return h-scaleY(teams2[d])})
  		.attr('fill',function(d){return colorScale(d)});
  		
  		
  		
  		}
           pick3($('#select2').val())
            window.pick=3
  		d3.select('#svgText').remove();
       svg.append('text').attr('id','svgText').attr('x',100).attr('y',20).text("Odds to get the #"+window.pick+" pick.");
    
    
    }else{
      window.pick=4
  		d3.select('#svgText').remove();
     pick4(this.value)
      
      
    }  

})
 }
     
 
})

}
})
	
	

	
	
	

 
  