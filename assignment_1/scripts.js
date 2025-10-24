function tabs() {
    const tabButtons = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    if (!tabButtons.length || !tabContents.length) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const target = document.getElementById(button.dataset.target);
            if (target) target.classList.add('active');
        });
    });
}

// Call it
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', tabs);
} else {
  tabs();
}