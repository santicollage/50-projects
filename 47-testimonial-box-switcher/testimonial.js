const testimonial = document.querySelector('p');
const img = document.querySelector('img');
const name = document.querySelector('h3');
const country = document.querySelector('h4');

let current = 0;

changeTestimonial();

const interval = setInterval(changeTestimonial, 10000);

function changeTestimonial() {
  testimonial.innerText = testimonials[current].testimonial;
  img.src = testimonials[current].imageUrl;
  name.innerText = testimonials[current].name;
  country.innerText = testimonials[current].city;

  current++;
  if (current >= testimonials.length) current = 0;
}