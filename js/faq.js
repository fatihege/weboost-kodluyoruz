var questionBlocks = document.querySelectorAll('.question-block');
questionBlocks.forEach(function (qb) {
    qb.querySelector('.question').addEventListener('click', function () {
        qb.classList.toggle('active');
    });
});
