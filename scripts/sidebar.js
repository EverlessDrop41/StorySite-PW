var sidebarOut = true;

$(document).ready(function(){
   $("#b").click(function(){
       if (sidebarOut){
           console.log("Hiding");
            $("#NavBox").hide("slide", { direction: "left" }, 500,function(){
                $("#Content").animate({width: "99%"},500);
                sidebarOut = false;
            });
       }
       else{
           console.log("Showing");
           $("#Content").animate({width: percentage(screen.width, 78)},500,function(){
                $("#NavBox").show("slide", { direction: "left" }, 500);
           });
           sidebarOut = true;
       }
   }); 
});

function percentage (total, percent){
    return (total / 100) * percent;
}