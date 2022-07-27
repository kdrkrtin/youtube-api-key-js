import { apiKey, ytpVideos } from './data.js'
$(document).ready(function () {
    const key = apiKey;
    const splitText = ytpVideos;
    const idList = splitText.toString() !== '' ? splitText : false;
    const url = 'https://www.googleapis.com/youtube/v3/videos';
    var options = {
        part: 'snippet',
        key,
    }

    function loadVideos() {
        if (idList) {
            for (let i = 0; i < idList.length; i++) {
                options.id = idList[i];
                $.getJSON(url, options, function (data) {
                    if (i == 0) {
                        $('#ytp-main-video iframe').attr('src', `https://www.youtube.com/embed/${data.items[0].id}`);
                        $('.ytp-video-item.first-video').attr('ytp-id', `${data.items[0].id}`);
                        $('.ytp-video-item.first-video .ytp-video-img img').attr('src', `${data.items[0].snippet.thumbnails.default.url}`)
                        $('.ytp-video-item.first-video .ytp-video-title .title').text(`${data.items[0].snippet.title}`)
                        $('.ytp-video-item.first-video .ytp-channel span').text(`${data.items[0].snippet.channelTitle}`)
                        $('.ytp-video-item.first-video .ytp-channel a').attr('href', `https://www.youtube.com/channel/${data.items[0].snippet.channelId}`)
                        $('.ytp-video-item.first-video .ytp-date span.date-span').text(`${data.items[0].snippet.publishedAt.split('-')[0]}`)
                    } else {
                        $('.video-list-div').append(`
									<div class="ytp-video-item video-div d-flex align-items-center mb-3 px-2" ytp-id="${data.items[0].id}">
										<div class="ytp-video-img">
											<img src="${data.items[0].snippet.thumbnails.default.url}" alt="${data.items[0].snippet.title}">
										</div>
										<div class="ytp-video-head ps-lg-2">
											<div class="ytp-video-title">
												<h5 class="title small">${data.items[0].snippet.title}</h5>
											</div>
											<div class="ytp-channel small">
												<strong>Kanal:</strong> <a href="https://www.youtube.com/channel/${data.items[0].snippet.channelId}" target="_blank" rel="nopenner"><span>${data.items[0].snippet.channelTitle}</span></a>
											</div>
											<div class="ytp-date">
												<strong>Tarih:</strong>
												<span class="text-muted date-span">${data.items[0].snippet.publishedAt.split('-')[0]}</span>
											</div>
										</div>
									</div>
								`)
                    }
                });
            }
        } else {
            $('.speaker-videos').remove();
        }
    }

    $(document).on('click', '.ytp-video-item', function () {
        const iframeSrc = $(this).attr('ytp-id');
        $('.ytp-video-item').removeClass('active-item');
        $(this).addClass('active-item');
        $('#ytp-main-video iframe').attr('src', `https://www.youtube.com/embed/${iframeSrc}`);
    });

    loadVideos();
})