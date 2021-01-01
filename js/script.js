$(document).ready(function() {

    $("#gstbtn").click(function(){
        CalGST();
    }); 
    
    function CalGST()
    {
        var a = $("#amount").val();
        var b = $("#gstpercent").val();
    
        a = a || 0;
        
        var gst = parseFloat(a) * parseFloat(b) / 100;
        var total = parseFloat(a) + parseFloat(gst);
    
        $("#gstamt").val(gst);
          $("#tamt").val(total);
    } 
      
});
    