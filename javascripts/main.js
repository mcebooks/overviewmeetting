moment.lang('es');
var viewModel = function() {
    self = this;
    self.fecha = ko.observable();
    
};
var instanceApp = new viewModel();
$(document).ready(function() {
   
        ko.applyBindings(instanceApp);
    var diaActual = moment().add('days', -1);
    for (iDia = 0; iDia < 35; iDia++) {
        console.log(diaActual.format('YYYY/MM/DD'), 'diaActual');
        var auxDiaCalculado = diaActual.add('days', 1);
    }
    var headers = ["H1", "H2", "H3", "H4", "H5", "H6"];
    $(".accordion").click(function(e) {
        var target = e.target,
            name = target.nodeName.toUpperCase();
        if (!$(target).hasClass("disabled")) {
            if ($.inArray(name, headers) > -1) {
                var subItem = $(target).next();
                //slideUp all elements (except target) at current depth or greater
                var depth = $(subItem).parents().length;
                var allAtDepth = $(
                    ".accordion p, .accordion div").filter(
                    function() {
                        if ($(this).parents().length >=
                            depth && this !== subItem.get(0)
                        ) {
                            return true;
                        }
                    });
                $(allAtDepth).slideUp("fast");
                //slideToggle target content and adjust bottom border if necessary
                subItem.slideToggle("fast", function() {
                    $(".accordion :visible:last").css(
                        "border-radius",
                        "0 0 10px 10px");
                });
                $(target).css({
                    "border-bottom-right-radius": "0",
                    "border-bottom-left-radius": "0"
                });
            }
        }
    });
    $(".accordion").find("h1").eq(3).click();
   
    
});
