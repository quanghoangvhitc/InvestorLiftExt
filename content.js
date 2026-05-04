
let url = document.location.href.toLowerCase();
let arrUrl = url.split('/');
let id = arrUrl[arrUrl.length - 1];
let apiUrl = 'https://vthoangpq.bsite.net/api/ApiUpdateFullAddress';

let btnViewFullAddress = document.getElementById('view_full_address');
if (btnViewFullAddress != null) {
    btnViewFullAddress.click();

    setTimeout(function () {
        let chk = document.querySelector('input[type=checkbox]');
        if (chk != null) {
            chk.click();

            setTimeout(function () {
                let btnViewAddress = document.querySelector('button#view_full_address');
                if (btnViewAddress != null) {
                    btnViewAddress.click();

                    setTimeout(function () {
                        //let fullAddress = document.querySelector('p.text-success').outerText;
                        let cTextAddress = document.querySelector('p.text-success');
                        if (cTextAddress != null) {
                            let fullAddress = cTextAddress.outerText;

                            let IsNotUpdate = false;
                            if (fullAddress.toLowerCase() == 'our request has been submitted. our manager will contact you shortly.') {
                                IsNotUpdate = true;
                            }

                            let objPost = {};
                            objPost.Id = id;

                            if (!IsNotUpdate)
                                objPost.FullAddress = fullAddress;

                            if (!IsNotUpdate)
                                objPost.CrawlDetailStatus = 2;
                            else
                                objPost.CrawlDetailStatus = 3;

                            $.ajax({
                                url: apiUrl,
                                type: 'POST',
                                dataType: 'json',
                                contentType: 'application/json',
                                data: JSON.stringify(objPost),
                                success: function (res) {
                                    if (res.status) {
                                        if (res.data != null) {
                                            window.location.href = `https://investorlift.com/property/${res.data.id}`;
                                        }
                                        else {
                                            window.location.href = 'https://google.com.vn';
                                        }
                                    }
                                },
                                error: function (xhr, status, error) {
                                    window.location.href = 'https:/ / investorlift.com';
                                }
                            });
                        }
                        else {
                            let objPost = {};
                            objPost.Id = id;
                            objPost.CrawlDetailStatus = 3;

                            $.ajax({
                                url: apiUrl,
                                type: 'POST',
                                dataType: 'json',
                                contentType: 'application/json',
                                data: JSON.stringify(objPost),
                                success: function (res) {
                                    if (res.status) {
                                        if (res.data != null) {
                                            window.location.href = `https://investorlift.com/property/${res.data.id}`;
                                        }
                                        else {
                                            window.location.href = 'https://google.com.vn';
                                        }
                                    }
                                },
                                error: function (xhr, status, error) {
                                    window.location.href = 'https:/ / investorlift.com';
                                }
                            });
                        }

                    }, 3000);
                }
                else {
                    window.location.href = `https://investorlift.com/property/${id}`;
                }

            }, 250);
        }
        else {
            window.location.href = `https://investorlift.com/property/${id}`;
        }

    }, 1000);
}
else {
    let cFullAddress = document.querySelector('a.listing-address');
    if (cFullAddress != null) {
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function (res) {
                if (res.status) {
                    if (res.data != null) {
                        window.location.href = `https://investorlift.com/property/${res.data.id}`;
                    }
                    else {
                        window.location.href = 'https://google.com.vn';
                    }
                }
            },
            error: function (xhr, status, error) {
                window.location.href = 'https:/ / investorlift.com';
            }
        });
    }
    else {
        //let cNotFound = document.querySelector('div.container.text-center h2');

        let objPost = {};
        objPost.Id = id;
        //objPost.FullAddress = 'Not found';
        objPost.CrawlDetailStatus = 3;

        $.ajax({
            url: apiUrl,
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(objPost),
            success: function (res) {
                if (res.status) {
                    if (res.data != null) {
                        window.location.href = `https://investorlift.com/property/${res.data.id}`;
                    }
                    else {
                        window.location.href = 'https://google.com.vn';
                    }
                }
            },
            error: function (xhr, status, error) {
                window.location.href = 'https:/ / investorlift.com';
            }
        });
    }
}

