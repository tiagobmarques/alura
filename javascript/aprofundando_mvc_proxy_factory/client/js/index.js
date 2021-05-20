var fields = [
    $("#data"),
    $("#quantidade"),
    $("#valor")
];

$("form").on("submit", function () {
    event.preventDefault();

    let tr = $("<tr>");

    fields.forEach(field => {
        let tableField = $("<td>").text(field.val());
        tr.append(tableField);
    });

    let volumeField = $("<td>").text(fields[1].val() * fields[2].val());
    tr.append(volumeField);

    $("table tbody").append(tr);

    fields[0].focus();  
    fields[0].val("");
    fields[1].val(1);
    fields[2].val(0.0);
})