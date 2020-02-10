var DisplayModel = function(id, options) {


    if(typeof options === "undefined")
    {
        this.options = {
            width:'200px',
            height:'80px'
        };
    }
    else
    {
        var w=options.width;
        var h=options.height;

        if(w == undefined)
        {
            w="200px";
        }
        if(h == undefined)
        {
            h="80px";
        }
        this.options = {
            width:w,
            height:h
         };
    }

    //check for the options and override the default values
    this.id = id;
};

//var DisplayModel = function(id, options) {
//   //check for the options and override the default values
//
//   if(!options) { options = {};}
//
//   this.options = {
//       width: options.width ? options.width : '200px',
//       height: options.height ? options.height : '80px'
//    }
//    this.id = id;
//};


