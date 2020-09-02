let defaultBlock = document.querySelector('.default-block');
let links = document.querySelector('#resource-links');

if(localStorage.getItem('GROWRegistration')=='registered') {
  defaultBlock.innerHTML = `<h1 id="my-story-heading" class="our-story-title">Welcome to GROW</h1>
    <p class="content-paragraph">Thank you for your interest in GROW! Use the menu on the left to explore the GROW Strong Curriculum, GROW training materials, and academic research from the GROW team.</p>
    <p class="content-paragraph">We recommend bookmarking this page for easy access to these resources in the future.</p>`;
  links.hidden = false;
} else {
  defaultBlock.innerHTML = `<h1 id="my-story-heading" class="our-story-title">Register for Access</h1>
  <p class="content-paragraph">Thank you for your interest in GROW! Please complete this form to access our online library of resources, including the GROW Strong curriculum, training materials, and related research.</p>
  <form id="my-form"
  action="https://formspree.io/xoqkzrko"
  method="POST"
  class="">
  <div class="registration-input">
    <input type="text" name="Name" placeholder="Name" required/>
    <input type="text" name="Country" placeholder="Country" required/>
    <input type="text" name="City" placeholder="City"/ required>
    <input type="email" name="Email" placeholder="Email Address" required/>
    <input type="text" name="Organization" placeholder="Organizational Affiliation"/>
    <input type="tel" name="Telephone" placeholder="Phone Number (optional)" />
  </div>
  <div class="registration-checkbox">
    <label>I am interested in:</label>
    <input type="checkbox" name="Interested in Leading a GROW Group" value="true"/>
    <label for="leading" class="registration">Leading a GROW group</label>
    </br>
    <input type="checkbox" name="Interested in Sharing Info in my Country" value="true" />
    <label for="sharing" class="registration">Sharing this information with others in my country</label>
    </br>
    <input type="checkbox" name="Interested in Collaborating in Research" value="true" />
    <label for="research" class="registration">Collaborating in research</label>
    </br>
  </div>
    <textarea rows="4" cols="50" name="Other (optional)" placeholder="Other (Please Specify)"></textarea>
    </br>
    <button class="registration-submit" id="my-form-button">Submit</button>
    <p id="my-form-status"></p>
  </form>`
}
