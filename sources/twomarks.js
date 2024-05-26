function toggleAnswer(element) {
  const answer = element.querySelector('.answer');
  if (answer.classList.contains('visible')) {
      answer.classList.remove('visible');
  } else {
      answer.classList.add('visible');
  }
}
