const projectsContainer = document.querySelector('.projects-container');

const projects = [
  {
    name: 'Expanding Card',
    link: './1-expanding-card/expanding.html'
  },
  {
    name: 'Steps',
    link: './2-steps/steps.html'
  },
  {
    name: 'Rotating',
    link: './3-rotating/rotating.html'
  },
  {
    name: 'Hidden Search',
    link: './4-hidden-search/hidden.html'
  },
  {
    name: 'Blurry Loading',
    link: './5-blurry-loading/blurry.html'
  },
  {
    name: 'Scroll Animation',
    link: './6-scroll/scroll.html'
  },
  {
    name: 'Split Landing',
    link: './7-split-landing/split.html'
  },
  {
    name: 'Form Wave',
    link: './8-form-wave/form.html'
  },
  {
    name: 'Sound Board',
    link: './9-sound-board/sound.html'
  },
  {
    name: 'Random Meal',
    link: './10-random-meal/random.html'
  },
  {
    name: 'Event Keycode',
    link: './11-event-keycode/event.html'
  },
  {
    name: 'Frequently Asked Questions',
    link: './12-frequently-asked-questions/questions.html'
  },
  {
    name: 'Random Choice Picker',
    link: './13-random-choice-picker/choice.html'
  },
  {
    name: 'Animated Navigation',
    link: './14-animated-navigation/animated.html'
  },
  {
    name: 'Incrementing Counter',
    link: './15-incrementing-counter/incrementing.html'
  },
  {
    name: 'Drink Water',
    link: './16-drink-water/drink.html'
  },
  {
    name: 'Movie App',
    link: './17-movie-app/movie.html'
  },
  {
    name: 'Background Slider',
    link: './18-background-slider/slider.html'
  },
  {
    name: 'Theme Clock',
    link: './19-theme-clock/clock.html'
  },
  {
    name: 'Button Ripple',
    link: './20-button-ripple/ripple.html'
  },
  {
    name: 'Drag & Drop',
    link: './21-drag-&-drop/drag.html'
  },
  {
    name: 'Drawing App',
    link: './22-drawing-app/drawing.html'
  },
  {
    name: 'Kinetic Loader',
    link: './23-kinetic-loader/kinetic.html'
  },
  {
    name: 'Content Placeholder',
    link: './24-content-placeholder/placeholder.html'
  },
  {
    name: 'Sticky Navbar',
    link: './25-sticky-navbar/sticky.html'
  },
  {
    name: 'Vertical Slider',
    link: './26-vertical-slider/slider.html'
  },
  {
    name: 'Toast Notification',
    link: './27-toast-notification/toast.html'
  },
  {
    name: 'Github Profile',
    link: './28-github-profile/github.html'
  },
  {
    name: 'Like Heart',
    link: './29-like-heart/like.html'
  },
  {
    name: 'Text Effect',
    link: './30-text-effect/text.html'
  },
  {
    name: 'Password Generator',
    link: './31-password-generator/password.html'
  },
  {
    name: 'Good Cheap Fast',
    link: './32-good-cheap-fast/good.html'
  },
  {
    name: 'Notes App',
    link: './33-notes-app/notes.html'
  },
  {
    name: 'Animated Countdown',
    link: './34-animated-countdown/countdown.html'
  },
  {
    name: 'Image Carousel',
    link: './35-image-carousel/carousel.html'
  },
  {
    name: 'Hoverboard',
    link: './36-hoverboard/hoverboard.html'
  },
  {
    name: 'Pokedex',
    link: './37-pokedex/pokedex.html'
  },
  {
    name: 'Mobile Navigation',
    link: './38-mobile-navigation/mobile.html'
  },
  {
    name: 'Password Strength',
    link: './39-password-strength/strength.html'
  },
  {
    name: '3D Boxes',
    link: './40-3d-boxes/boxes.html'
  },
  {
    name: 'Verify Account',
    link: './41-verify-account/verify.html'
  },
  {
    name: 'Live User Filter',
    link: './42-live-user-filter/filter.html'
  },
  {
    name: 'Feedback',
    link: './43-feedback/feedback.html'
  },
  {
    name: 'Custom Range Slider',
    link: './44-custom-range-slider/range.html'
  },
  {
    name: 'Netflix Navigation',
    link: './45-netflix-navigation/netflix.html'
  },
  {
    name: 'Quiz App',
    link: './46-quiz-app/quiz.html'
  },
  {
    name: 'Testimonial Box Switcher',
    link: './47-testimonial-box-switcher/testimonial.html'
  },
  {
    name: 'Random Image Feed',
    link: './48-random-image-feed/feed.html'
  },
  {
    name: 'To Do List',
    link: './49-to-do-list/list.html'
  },
  {
    name: 'Insect Catch Game',
    link: './50-insect-catch-game/insect.html'
  },
]

projects.forEach((project,index) => {
  const li = document.createElement('li');

  li.innerHTML = `
    <a href="${project.link}">${index + 1} - ${project.name}</a>
  `;

  projectsContainer.appendChild(li);
})
