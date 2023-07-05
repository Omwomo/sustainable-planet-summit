// Variables for mobile pop-up menu
const button = document.querySelector('.nav-link');
const closeButton = document.querySelector('.close-button');
const popup = document.querySelector('.popup-menu');
const links = document.querySelectorAll('.popup-list');

// Toggle for mobile pop-up menu.
function toggle() {
  popup.classList.toggle('show-menu');
}

// Add event listeners to menu button.
button.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);

// Add event listeners to mobile menu links.
links.forEach((link) => {
  link.addEventListener('click', toggle);
});

// ///////////////////////////////////////////////////////

// Generating Featured Section dynamically.

function generateFeaturedSpeakers(image, speakerName, proffesions, speech) {
  return `
        <div class="featured-speakers-section">
          <div class="featured-speakers">
              <div class="speakers">
                  <div class="images">
                      <img src="${image}">
                  </div>
                  <div class="speaker-texts">
                      <p class="speaker-name">${speakerName}</p>
                      <p class="proffesions">${proffesions}</p>
                      <div class="line"></div>
                      <p class="speech">${speech}</p>
                  </div>
              </div>
          </div>
        </div>
  `;
}

// Function to populate the generated featurd speakers section

function generateSpeakersContent() {
  // An array containing featurd speakers content.
  const speakers = [
    {
      image: 'imgs/speaker-1.png',
      speakerName: 'Eugene Oduor',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Languages include, HTML, CSS JavaScript, bootstrap, SCSS, Ruby  on rails, Node.js, React, SQL.',
    },
    {
      image: 'imgs/speaker-1.png',
      speakerName: 'Eugene Ofafa',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Languages include HTML, CSS JavaScript, bootstrap, SCSS, Ruby  on rails, Node.js, React, SQL.',
    },
    {
      image: 'imgs/speaker-1.png',
      speakerName: 'Eugene Omwomo',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Languages include HTML, CSS JavaScript, bootstrap, SCSS, Ruby  on rails, Node.js, React, SQL.',
    },
    {
      image: 'imgs/speaker-1.png',
      speakerName: 'Eugene Oduor',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Languages include HTML, CSS JavaScript, Bootstrap, SCSS, Ruby  on rails, Node.js, React, SQL.',
    },
    {
      image: 'imgs/speaker-1.png',
      speakerName: 'Eugene Oduor',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Languages include HTML CSS JavaScript, Bootstrap, SCSS, Ruby  on rails, Node.js, React, SQL.',
    },
    {
      image: 'imgs/speaker-1.png',
      speakerName: 'Eugene Oduor',
      proffesions: 'Fullstack developer in MERN stack with 1 year experience',
      speech: 'Languages include HTML, CSS JavaScript, Bootstrap, SCSS, Ruby  on rails, Node.js, React, SQL.',
    },
  ];

  let speakerHTML = '';
  // Function to populate the
  speakers.forEach((speaker) => {
    speakerHTML += generateFeaturedSpeakers(
      speaker.image,
      speaker.speakerName,
      speaker.proffesions,
      speaker.speech,
    );
  });

  return speakerHTML;
}

const featuredSpeakersHTML = generateSpeakersContent();

document.getElementById('featured-speakers').innerHTML = featuredSpeakersHTML;
