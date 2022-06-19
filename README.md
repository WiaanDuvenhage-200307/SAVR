<!-- REPLACE ALL THE [WiaanDuvenhage-200307] TEXT WITH YOUR GITHUB PROFILE NAME & THE [SAVR] WITH THE NAME OF YOUR GITHUB PROJECT -->

<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/WiaanDuvenhage-200307/SAVR)
![GitHub watchers](https://img.shields.io/github/watchers/WiaanDuvenhage-200307/SAVR)
![GitHub language count](https://img.shields.io/github/languages/count/WiaanDuvenhage-200307/SAVR)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/WiaanDuvenhage-200307/SAVR)

<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">Wiaan Duvenhage</h5>
<h5 align="center" style="padding:0;margin:0;">200307</h5>
<h6 align="center">DV 202_V2 | Unit Testing</h6>
</br>
<p align="center">

  <a href="https://github.com/WiaanDuvenhage-200307/SAVR">
    <img src="src\assets\Logo.svg" alt="Logo" width="100px">
  </a>
  
  <h3 align="center">SAVR</h3>

  <p align="center">
    A React project built using the React framework and tested using Jest and React Testing Library (RTL) .<br>
    
   <br />
   <br />
   <a href="https://youtu.be/y_ktyHSNhaM">View Demo</a>
    ·
    <a href="https://github.com/WiaanDuvenhage-200307/SAVR/issues">Report Bug</a>
    ·
    <a href="https://github.com/WiaanDuvenhage-200307/SAVR/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Project Description](#project-description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [How to install](#how-to-install)
- [Features and Functionality](#features-and-functionality)
- [Concept Process](#concept-process)
  - [Ideation](#ideation)
  - [Wireframes](#wireframes)
- [Development Process](#development-process)
  - [Implementation Process](#implementation-process)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Future Implementation](#peer-reviews)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
  - [Video Demonstration](#video-demonstration)
- [Conclusion](#conclusion)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->

## About the Project

<!-- header image of project -->

![image1](src/assets/Mockup2.jpg)

### Project Description

Welcome to SAVR! This is a cool budgeting app I built that calculates the total expenses of household members, add taxes to incomes, calculate the total amount of expenses each month and it will calculate the percentage amount of savings household members want to put away for a rainy day.

### Built With

- [React](https://reactjs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io/)
- [JavaScript](https://www.javascript.com/)
- [SCSS](https://sass-lang.com/)

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

Here are a couple of ways to clone this repo:

1.  GitHub Desktop </br>
    Enter `https://github.com/WiaanDuvenhage-200307/SAVR.git` into the URL field and press the `Clone` button.

2.  Clone Repository </br>
    Run the following in the command-line to clone the project:

    ```sh
    git clone https://github.com/WiaanDuvenhage-200307/SAVR.git
    ```

        Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3.  Install Dependencies </br>
    Run the following in the command-line to install all the required dependencies:

    ```sh
    npm install
    ```

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->

## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->

### Dashboard Features & Functionality!

![image5](src/components/assets/Mockup1.jpg)
Using the API and chart.js, I populated a doughnut chart, which displays how many players play in each role. Next up using also the API and chart.js, I populated a polar chart which will display how many players originate from country x and lastly additional information will be given like how many pro players there are, how many teams are there currently and how many items are in the game.

### Compare Page Features & Functionality

![image6](src/components/assets/Mockup2.jpg)
Using the API & chart.js I populated a radar chart. You need to type in the champions name, whether it is uppercase or lowercase, and it will append their statistics to the radar chart and give contextualised details on the bottom of each chart.

### Timeline Page Features & Functionality

![image7](src/components/assets/Mockup3.jpg)
Again, using the API & chart.js I generated a timeline chart which will display the previous and current players, playing for the team and for how long they have been playing. When the user clicks on the dropdown they can select a team and then the team's players will be appended to the chart on the y-axis and the years of when they played will be on the x-axis.

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->

## Concept Process

For my conceptual process, I took a look at websites such as Behance, Pinterest and Siteinspire. I also watched a few Rick and Morty episodes and took a look at the colors and played around with them in Figma and looked at sites like cooolors.co to have a sense of a good color palette.

### Wireframes

![image8](src/assets/wireframe.png)

## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Implementation Process

- I used `npx create-react app` to create this React project. I implemented component-based development instead of classes. By doing this, I will be able to easily inject and eject components and sub-components into my project, making it refactorable and reusable instead of writing up classes I have to do everytime making it tedious and redundant.

-I implemented the jest library using `npm install --save-dev jest` to test my components

-Lastly I used SCSS (Sass) instead of css just because styling with it was just much simpler and much more readable 


#### Highlights

<!-- stipulated the highlight you experienced with the project -->

- A highlight of this project was definitely getting my tests to pass and getting my functionality to work. It was a lot of struggles and late nights, but by the help of my peers and A LOT of research, I got all my tests to pass.

#### Challenges

<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->

- I struggled getting my tests to pass because I didn't completely understand the syntax of the React Testing Library.
- I struggled the grasp the concept of snapshots
- Figuring out my frontend in relation to testing was a challenge to say the least, but I got it to work out nicely
- My snapshot is passing but I kept getting a failed error message stating `tree.props.onMouseEnter() is not a function`, I will look into it through research, but I couldn not get it to work

#### Above And Beyond

<!-- TODO Change this! -->

The aspects I learned outside of this class, is that I implemented SCSS into my project for a more readable css file structure.

### Future Implementation

<!-- TODO Change this! -->

<!-- stipulate functionality and improvements that can be implemented in the future. -->

- For my future implementation is to test with async functions
- Something I'm also looking to implement is way more snapshots in my test files

<!-- MOCKUPS -->

## Final Outcome

### Mockups

<!-- TODO Change this -->

![image2](src/components/assets/Mockup4.jpg)
![image3](src/components/assets/Mockup5.jpg)
![image4](src/components/assets/Mockup6.jpg)
<br>

<!-- VIDEO DEMONSTRATION -->

### Video Demonstration

<!-- TODO Change this -->

To see a run through of the application, click below:

[View Demonstration](https://youtu.be/y_ktyHSNhaM)

See the [open issues](https://github.com/WiaanDuvenhage-200307/SAVR/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->

## Authors

- **Wiaan Duvenhage** - [Wiaan Duvenhage](https://github.com/WiaanDuvenhage-200307)

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

## Contact

- **Wiaan Duvenhage** - [wiaanduvenhage.dev@gmail.com](mailto:wiaanduvenhage.dev@gmail.com) - [@wiaan.dev](https://www.instagram.com/wiaan.dev/)
- **Project Link** - https://github.com/WiaanDuvenhage-200307/SAVR

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->
<!-- TODO Change this -->

- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Stack Overflow](https://stackoverflow.com/)
- [React Snapshot Testing Resource](https://www.youtube.com/watch?v=wfFw05TaBfM&t=217s)
- [removebg](https://www.remove.bg/)
- [Font Awesome](https://fontawesome.com/)
- [Cooolors](https://coolors.co/)
- [Figma](https://www.figma.com/)