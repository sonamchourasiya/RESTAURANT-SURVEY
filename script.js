document.addEventListener('DOMContentLoaded', function() {
    const serviceUp = document.getElementById('service-up');
    const serviceDown = document.getElementById('service-down');
    const ambienceRating = document.querySelectorAll('input[name="ambience"]');
    const foodRating = document.querySelectorAll('input[name="food"]');

    serviceUp.addEventListener('change', function() {
        document.getElementById('service-comment-up').classList.remove('hidden');
        document.getElementById('service-comment-down').classList.add('hidden');
    });

    serviceDown.addEventListener('change', function() {
        document.getElementById('service-comment-down').classList.remove('hidden');
        document.getElementById('service-comment-up').classList.add('hidden');
    });

    ambienceRating.forEach((input) => {
        input.addEventListener('change', function() {
            const value = this.value;
            ambienceRating.forEach((star) => {
                if (star.value <= value) {
                    star.nextElementSibling.style.color = 'gold'; // Highlight stars
                } else {
                    star.nextElementSibling.style.color = '#ccc'; // Reset unselected stars
                }
            });
            toggleCommentBoxes('ambience', value);
        });
    });

    foodRating.forEach((input) => {
        input.addEventListener('change', function() {
            const value = this.value;
            foodRating.forEach((star) => {
                if (star.value <= value) {
                    star.nextElementSibling.style.color = 'gold'; // Highlight stars
                } else {
                    star.nextElementSibling.style.color = '#ccc'; // Reset unselected stars
                }
            });
            toggleCommentBoxes('food', value);
        });
    });

    function toggleCommentBoxes(type, value) {
        if (value >= 4) {
            document.getElementById(`${type}-comment-up`).classList.remove('hidden');
            document.getElementById(`${type}-comment-down`).classList.add('hidden');
        } else {
            document.getElementById(`${type}-comment-down`).classList.remove('hidden');
            document.getElementById(`${type}-comment-up`).classList.add('hidden');
        }
    }
});
