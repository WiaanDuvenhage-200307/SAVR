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
   <a href="https://youtu.be/dRmRu0dk7a0">View Demo</a>
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

### Adding Household Members Incomes

![image5](src/assets/Function1.jpg)
Using JavaScript and React's `UseState()` and `UseRef()` hooks, I was able to capture the user's name and income and display it the DOM. After doing that I calculated all their incomes together and display it underneath. The user will also be able to remove the user and the amount will be deducted.

### Adding Monthly Expenses

![image6](src/assets/Function2.jpg)
The household member would be able to add their name, their type of expense and lastly their expense amount and it will get added to the total at the bottom

### Adding Tax on Incomes

![image7](src/assets/Function3.jpg)
The household member can insert their income and based on the table above it will display how much tax they will pay based on their income.

### Calculating how much members will save
![image8](src/assets/Function4.jpg)
Household Members can manually type in how much % they want to save from their income each month. It will then display on the right hand side. This has been done using the array method called `.map()`.

<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->

## Concept Process

For my conceptual process, I aimed for a very dark theme approach for my designs, because I feel that no one likes to look at something with an immense amount of bright colors, and I think that dark theme trends are absolutely amazing. I have gotten all my inspiration from sites like Behance and Pinterest.

### Wireframes

![image9](src/assets/wireframe.png)

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

![image2](src/assets/Mockup1.jpg)
![image3](src/assets/Mockup3.jpg)
![image4](src/assets/Mockup4.jpg)
![image5](src/assets/Mockup5.jpg)
<br>

## The Tests

### Test Coverage
![image10](src/assets/CodeCoverage.jpg)

### Test Summary
![image11](src/assets/TestSummary.jpg)

<!-- VIDEO DEMONSTRATION -->

### Video Demonstration

<!-- TODO Change this -->

To see a run through of the application, click below:

[View Demonstration](https://youtu.be/dRmRu0dk7a0)

See the [open issues](https://github.com/WiaanDuvenhage-200307/SAVR/issues) for a list of proposed features (and known issues).

<!-- AUTHORS -->

## Authors

- **Wiaan Duvenhage** - [Github](https://github.com/WiaanDuvenhage-200307)

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
- [Jest](https://jestjs.io/)
- [Stack Overflow](https://stackoverflow.com/)
- [React Snapshot Testing Resource](https://www.youtube.com/watch?v=wfFw05TaBfM&t=217s)
- [Cooolors](https://coolors.co/)
- [Figma](https://www.figma.com/)
- [My Pinterest Board](https://za.pinterest.com/doubleudeedesigns/budget-app/)