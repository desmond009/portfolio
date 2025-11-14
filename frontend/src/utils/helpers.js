// filepath: frontend/src/utils/helpers.js
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const downloadResume = () => {
  window.location.href = 'http://localhost:5000/resume';
};
