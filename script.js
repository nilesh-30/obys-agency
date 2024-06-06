function loadingAnimation() {

    var tl = gsap.timeline();

    tl.from(".line h1", {
        y: 150,
        stagger: 0.3,
        duration: 0.6,
        delay: 0.5
    })

    tl.from("#counting", {
        opacity: 0,
        onStart: function () {
            var h5 = document.querySelector("h5")
            var count = 0;

            setInterval(function () {
                if (count < 100) {
                    h5.innerHTML = count++
                }
                else {
                    h5.innerHTML = 100
                }
            }, 30);
        }
    })

    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1
    })

    tl.to("#loader", {
        opacity: 0,
        duration: 0.4,
        delay: 3
    })

    tl.from("#page1", {
        opacity: 0,
        delay: 0.2,
        duration: 0.5,
        y: 1600
    })

    tl.to("#loader", {
        display: "none"
    })

    tl.from("#nav", {
        opacity: 0
    })

    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
        y: 120,
        stagger: 0.2,
    })
}

function cursorAnimation() {
    document.addEventListener("mousemove", function(dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })
    Shery.makeMagnet("#nav2 h4");
}

loadingAnimation();
cursorAnimation();