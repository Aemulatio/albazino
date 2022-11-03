$(document).ready(function () {

    let menuModal = (name) => {
        $.fancybox.open(
            [
                {
                    src: `./ajax/${name}.html`,
                    type: "ajax",
                    touch: {vertical: false},
                    opts: {
                        touch: false,
                        afterLoad: (fancybox) => {
                            $(".fancybox-button.fancybox-close-small").remove()
                            // console.log("del")
                            $(".fancybox-content").append(`<div onclick="$.fancybox.close();" class="closeTHISPEACEOFSHIT"></div>`)
                            // console.log("append")
                        },
                    }
                }
            ],
        );
        $(".fancybox-button.fancybox-close-small").remove()
    }


    $("#ostrog").on("click", function (e) {
        menuModal(e.target.id)
    });

    $("#reconstructions").on("click", function (e) {
        $.fancybox.open(
            [
                {
                    src: `./ajax/reconstructions.html`,
                    type: "ajax",
                    touch: false,

                },
            ],
        );
        $("#personals_modal .fancybox-button.fancybox-close-small").remove()
    });

    $("#watch_video").on("click", function (e) {
        menuModal(e.target.id)
    });

    $("#victorina").on("click", function (e) {
        menuModal(e.target.id)
    });

    $("#personals").on("click", function (e) {
        $.fancybox.open(
            [
                {
                    src: `./ajax/personals.html`,
                    type: "ajax",
                    touch: false,
                },
            ],
        );

        $("#personals_modal .fancybox-button.fancybox-close-small").remove()
    });

})
;