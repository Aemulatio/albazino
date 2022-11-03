$(document).ready(function () {

        let idleTimer = null;
        let idleWait = 3 * 60 * 1000; //3 minutes

        let fancyVal = null;

        function start() {
            $.fancybox.open(
                [
                    {
                        src: "./ajax/start.html",
                        type: "ajax",
                        // smallBtn: false,
                        touch: false,
                        opts: {
                            afterLoad: (fancybox) => {
                                $("#start .fancybox-button.fancybox-close-small").remove()

                                fancyVal = true;
                                setTimeout(function () {
                                    $(".modal_block .logo_block img").addClass("img_transition");
                                }, 500);
                                setTimeout(function () {
                                    $(".modal_block .map_title").addClass("map_title_transition");
                                }, 1500);
                                setTimeout(function () {
                                    $(".modal_block .map_subtitle").addClass("map_subtitle_transition");
                                }, 2500);
                                $("#main").fadeTo('fast', 0);
                            },
                            afterClose: function () {
                                $("#main").fadeTo('fast', 1)

                                window.player[0].stop();
                                clearInterval(window.videoInterval);

                                // console.log("destroyed")
                                settimeout()
                                $(document).bind('mousemove keydown scroll', function () {
                                    clearTimeout(idleTimer);
                                    settimeout();
                                    // console.log("cleared")
                                });

                                function settimeout() {
                                    // console.log("timer setted")
                                    idleTimer = setTimeout(function () {
                                        if ($.fancybox.getInstance() !== null) {
                                            $.fancybox.destroy($.fancybox.getInstance()['id'])
                                        }
                                        clearTimeout(idleTimer);
                                        $(document).unbind("mousemove keydown scroll")
                                        $("#menu-toggle")[0].checked = false
                                        start();
                                    }, idleWait)
                                }

                                setTimeout(function () {
                                    $(".main .left_block .logo:nth-child(1)").addClass("logo_1");
                                }, 100);
                                setTimeout(function () {
                                    $(".main .left_block .logo:nth-child(2)").addClass("logo_2");
                                }, 300);
                                setTimeout(function () {
                                    $(".main .left_block .left_menu .left_menu_item:nth-child(1)").addClass("left_menu_item_1");
                                }, 500);
                                setTimeout(function () {
                                    $(".main .left_block .left_menu .left_menu_item:nth-child(2)").addClass("left_menu_item_2");
                                }, 700);
                            }
                        }
                    },
                ],
            );

        }

        start();

        let callModal = (name) => {
            // console.log(name)
            $.fancybox.open(
                [
                    {
                        src: `./ajax/map/${name}.html`,
                        type: "ajax",
                        // smallBtn: false,
                        touch: false,
                        opts: {
                            touch: false,
                            afterLoad: (fancybox) => {
                                $(".fancybox-button.fancybox-close-small").remove()
                                // console.log("del")
                                $(".map_point_modal__parent").append(`<div onclick="$.fancybox.close();" class="closeTHISPEACEOFSHIT"></div>`)
                                // console.log("append")
                            },
                        }
                    },
                ],
            );

        }

        $(document).ready(function () {
            setTimeout(() => {
                $("#map").ready(function () {
                    let svg = $("#map")[0].contentDocument; //this.contentDocument; // get object document as current scope
                    let elements = svg.querySelectorAll('*[id]') // get all elements with id
                    for (const element of elements) {
                        element.addEventListener("click", function () {
                            // console.log(this)
                            callModal(element.id)
                        })
                    }
                    setTimeout(() =>
                        $(svg).on('contextmenu', function (e) {
                            e.preventDefault();
                        }), 1000)
                })
            }, 1000);
        })
    }
)