function scrollToFormLead() {
  const target = document.getElementById('formLead');

  if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
  }
}

export default scrollToFormLead;