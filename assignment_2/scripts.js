//Asher Virgona
//gx23gq
//8032492

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

function initDropdowns() {
  const labels = document.querySelectorAll('.dropdown-label');
  if (!labels.length) return; // page without dropdowns

  labels.forEach((label) => {
    label.addEventListener('click', (e) => {
      e.preventDefault();
      // Prefer the immediate next sibling as the content
      let content = label.nextElementSibling;
      if (!content || !content.classList || !content.classList.contains('dropdown-content')) {
        // Fallback: search within the same footer/container
        const container = label.closest('footer') || document;
        content = container.querySelector('.dropdown-content');
      }
      if (!content) return;
      content.classList.toggle('open');
    });
  });
}

function init() {
  tabs();
  initDropdowns();
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}