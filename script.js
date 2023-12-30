// JavaScript for smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        var startPosition = window.pageYOffset;
        var targetPosition = targetElement.offsetTop;
        var distance = targetPosition - startPosition;
        var duration = 1000; // Duration in milliseconds
        var start = null;

        function animation(currentTime) {
            if (start === null) start = currentTime;
            var progress = currentTime - start;
            var percentage = Math.min(progress / duration, 1);
            window.scrollTo(0, startPosition + distance * ease(percentage));
            if (progress < duration) requestAnimationFrame(animation);
        }

        function ease(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        requestAnimationFrame(animation);
    }
});

function downloadResume() {
    var resumeUrl = 'https://drive.google.com/file/d/1OrdKYF9R9h3YAJZXlvAZ99GxFVo-eeaJ/view?usp=drive_link'; // Replace with the actual URL or file path of your resume

    var link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'resume.pdf'; // Specify the filename for the downloaded file

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Python Programmer', 'Machine Learning Expert', 'Software Developer'],
    typeSpeed: 40,
});