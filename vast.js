jwplayer("my-video").setup({
        /**** ADVERTISING SECTION STARTS HERE ****/
        advertising: {
            client: "vast",
            schedule: {
                "myAds": {
                    "offset": "pre",
                    "tag": "https://syndication.exoclick.com/splash.php?idzone=3514399"
                }
            }
        },
        /**** ADVERTISING SECTION ENDS HERE ****/
        file: "http://example.com/main_video.mp4",
        width: "580",
        height: "370"
    });