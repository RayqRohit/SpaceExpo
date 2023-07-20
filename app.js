(function () {

    let socials = document.querySelectorAll(".social div");

    socials.forEach(function (social, index) {
        social.style.animation = `moveIn 0.8s cubic-bezier(.51,.92,.24,1.15) forwards ${index/5}s`
    });

}())