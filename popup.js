$(document).on('click', '#btnActCrawl', function () {
    //window.open('https://www.youtube.com/watch?v=92cBLM6Hawc', 'blank');
    //
    //chrome.tabs.update({ url: "https://www.youtube.com/watch?v=92cBLM6Hawc" });
    $('#divMess').text('loading...!');
    $('#divViewMess').show();
    $.ajax({
        url: `https://vthoangpq.bsite.net/api/ApiUpdateFullAddress`,
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            if (res.status) {
                if (res.data != null) {
                    $('#divViewMess').hide();
                    chrome.tabs.update({ url: `https://investorlift.com/property/${res.data.id}` });
                }
                else {
                    $('#divMess').text(JSON.stringify('full item success'));
                    setTimeout(function () {
                        $('#divViewMess').hide();
                    }, 5000);
                }
            }
        },
        error: function (xhr, status, error) {
            $('#divMess').text(JSON.stringify(error));
            setTimeout(function () {
                $('#divViewMess').hide();
            }, 5000);
        }
    });
});