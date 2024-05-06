import "./_bootstrap";

import "./_header";
import "./_footer";

import "../sections/hero";
import "../sections/brands";
import "../sections/portfolio";
import "../sections/services";
import "../sections/testimonials";
import "../sections/cta";
import "../sections/scenario";

import "../sections/blog-list";
import "../sections/blog-single";

document.addEventListener("DOMContentLoaded", function() {
  const fadeInElementObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-on-visible-animation');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 1, // Trigger when least 100% of the target is visible
    },
  );

  const fadeInElements = document.querySelectorAll('.fade-in-on-visible');
  fadeInElements.forEach(el => fadeInElementObserver.observe(el));
});
