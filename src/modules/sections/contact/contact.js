const countTextareaCharacters = () => {
  const contactForm = document.querySelector('.contact__form');

  if (!contactForm) return;

  const textarea = contactForm.querySelector('textarea');
  const currentCountElement = contactForm.querySelector(
    '.contact__textarea-count-current'
  );

  textarea.addEventListener('input', (e) => {
    const currentCharCount = e.target.value.length;
    currentCountElement.textContent = currentCharCount;
  });
};

export default countTextareaCharacters;