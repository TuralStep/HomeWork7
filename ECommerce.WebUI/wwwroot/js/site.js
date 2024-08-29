


const inputElement = document.getElementById('searchBox');
inputElement.addEventListener('keyDown', onKeyPress);

function keyDown() {
    var key = searchBox.value();
    fetchData(key);
}

function fetchData(key) {
    $.ajax({
        url: '/Product/GetData',
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: { sKey: key },
        success: function (response) {
            $('#resultDiv').html(response);
        },
        error: function (xhr, status, error) {
            console.log('Error: ' + error);
        }
    });
}