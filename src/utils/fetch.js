import $ from 'jquery';
export function fetchData(url, stringData) {
    $.ajax({
        url: url,
        type: 'GET',
        ansync: true,
        success: function(data) {
            stringData = data;
        }
    })
}