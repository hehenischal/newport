const dvdLogo = document.getElementById('dvdLogo');
        let x = 0, y = 0;
        let xSpeed = 2, ySpeed = 2;
        const logoWidth = 100;
        const logoHeight = 50;

        function updateLogoPosition() {
            dvdLogo.style.left = x + 'px';
            dvdLogo.style.top = y + 'px';
        }

        function animateLogo() {
            const mainDiv = document.querySelector('.main');
            const mainWidth = mainDiv.offsetWidth;
            const mainHeight = mainDiv.offsetHeight;

            x += xSpeed;
            y += ySpeed;

            if (x + logoWidth >= mainWidth || x <= 0) {
                xSpeed = -xSpeed;
            }

            if (y + logoHeight >= mainHeight || y <= 0) {
                ySpeed = -ySpeed;
            }

            updateLogoPosition();
        }

        function startAnimation() {
            setInterval(animateLogo, 10);
        }

        startAnimation();