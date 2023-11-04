(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');

    if (!close || !modal) {
        return;
    }

    close.addEventListener('click', () => {
        modal.style.display = 'none';
    });
})();