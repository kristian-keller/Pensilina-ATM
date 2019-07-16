
var previous_line_status = {};
var previous_bulletins = "";
function parseData(data) {
    $("#stop_code_input").hide();
    $("#stop_code_button").hide();
    $(".connection").hide();
    let stop_name = data.Description;
    let stop_code = data.CustomerCode;
    $("#stop_name").html(stop_name);
    $("#stop_code").html(stop_code);
    let lines = data.Lines;
    let bulletins = "";
    $("#lines").html("");
    for (let line of lines) {
        let output_line = "";
        let line_code = line.Line.LineCode;
        let line_status = line.WaitMessage;
        let line_bulletins = line.TrafficBulletins;
        for (let bulletin of line_bulletins) {
            let title = bulletin.Title;
            let body = bulletin.Body;
            bulletins += title + ": " + body;
            bulletins = bulletins.replace(/<[^>]+>/g, '');
        }
        if (line_status === null || line_status === "*") {
            line_status = "";
        }
        output_line += "<div class='line' id='"+line_code+"'>";
        output_line += "<div class='line_code'>"+line_code+"</div>";
        output_line += "<div class='line_status'>"+line_status+"</div>";
        output_line += "</div>";
        $("#lines").append(output_line);
        if (previous_line_status[line_code] === undefined || previous_line_status[line_code] != line_status) {
            previous_line_status[line_code] = line_status;
            $("#"+line_code).css("animation", "refresh 1s");
        }
    }
    if ((previous_bulletins === "" || previous_bulletins != bulletins) && bulletins != "") {
        previous_bulletins = bulletins;
        let output_bulletin = "<div class='line_small'><div class='line_bulletin'>"+bulletins+"</div></div>";
        $("#bulletins").html("");
        $("#bulletins").append(output_bulletin);
    }
}

function getStopData(stop) {
    let url = "tpPortal/geodata/pois/stops/" + stop;
    $.ajax({
        method: "post",
        url: "https://giromilano.atm.it/proxy.ashx",
        data: {url: url},
        success: parseData,
        error: function(data) {
            console.log("Error while getting Stop Data");
            console.log(data);
        }
    });
    setTimeout(function() {getStopData(stop)}, 5000);
}

function searchStop() {
    let stop_code = $("#stop_code_input").val();
    getStopData(stop_code);
    $("body").append("<div class='connection'>Contatto il server ATM</div>");
}

$(document).ready(function() {
    $("#stop_code_button").click(searchStop);
});