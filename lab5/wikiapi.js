var query = $('#query');
var key = Rx.Observable.fromEvent(query, 'keyup');

key.throttleTime(500).map(function(x) {
        return query.val();
    })
    .switchMap(function(x){
        return wikiQuery(x);
    })
    .subscribe(function(x){
        for (var i = 0; i < x[1].length; i++) {
            x[1][i] = `<a href="${x[3][i]}"> ${x[1][i]} </a> <br></br>`
        }
        $('#output').html(x[1]);
    });

function wikiQuery(query){
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: query
        }
    }).promise();
}
