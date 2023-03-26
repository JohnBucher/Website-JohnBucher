import { Project } from "../models/project-model";

export const projects = [
    {
      name: 'Johnbucher.me',
      id: '1',
      image: './assets/Projects/Projects-John_Website.PNG',
      tags: [
        { name: 'Angular (15)', icon: 'fab fa-angular', color: '#c3002f' },
        { name: 'Typescript', icon: 'fas fa-code', color: '#2f74c0' },
        { name: 'SASS', icon: 'fas fa-paintbrush', color: '#bf4080' },
        { name: 'Bootstrap', icon: 'fas fa-paintbrush', color: '#702cf6' },
        { name: 'CI/CD (GitHub Actions)', icon: 'fas fa-gears', color: '#3fb950' },
        { name: 'ESLint', icon: 'fa-solid fa-list', color: '#482fbd' },
        { name: 'Karma', icon: 'fas fa-flask-vial', color: '#369b8b' },
        { name: 'Jasmine', icon: 'fas fa-flask-vial', color: '#8a4182' }
      ],
      description:
        `A personal website that was made as a visual representation of my resume and as a tool to implement newly found
        concepts and design practices.`,
      links: [
        { icon: 'fab fa-github', url: 'https://github.com/JohnBucher/Website-JohnBucher', tooltip: 'GitHub Repository' },
        { icon: 'fas fa-external-link-alt', url: 'https://johnbucher.me/', tooltip: 'Link to Live Project' }
      ]
    },
    {
      name: 'TENZI',
      id: '2',
      image: './assets/Projects/Projects-TENZI.PNG',
      tags: [
        { name: 'React (18)', icon: 'fab fa-react', color: '#1487cb' },
        { name: 'Javascript', icon: 'fas fa-code', color: '#dbc60d' },
        { name: 'CI/CD (GitHub Actions)', icon: 'fas fa-gears', color: '#3fb950' },
        { name: 'ESLint', icon: 'fa-solid fa-list', color: '#482fbd' },
        { name: 'React Testing Library', icon: 'fas fa-flask-vial', color: '#15c213' },
        { name: 'Jest', icon: 'fas fa-flask-vial', color: '#15c213' }
      ],
      description:
        `Initially created alongside <a href="https://www.youtube.com/watch?v=bMknfKXIFA8">freeCodeCamp's React Tutorial</a>
        to gain experience creating and developing React applications.
        <br />After tutorial completion, project was then augmented with additional features such as:
        <br />Improving the dice look-and-feel, high-score saving and reporting, CI/CD Pipeline through GitHub Actions,
        Linting and Testing capabilities, and served on GitHub Pages`,
      links: [
        { icon: 'fab fa-github', url: 'https://github.com/JohnBucher/react-tenzi-game', tooltip: 'GitHub Repository' },
        { icon: 'fas fa-external-link-alt', url: 'https://johnbucher.github.io/react-tenzi-game/', tooltip: 'Link to Live Project' }
      ]
    },
    {
      name: 'E-Commerce Mock Storefront',
      id: '3',
      image: './assets/Projects/Projects-CompAid.PNG',
      tags: [
        { name: '.NET Framework', icon: 'fas fa-cubes', color: '#1487cb' },
        { name: 'ASP.NET', icon: 'fas fa-desktop', color: '#1487cb' },
        { name: 'Javascript', icon: 'fas fa-code', color: '#dbc60d' },
        { name: 'C#', icon: 'fas fa-code', color: '#1d9924' },
        { name: 'Bootstrap', icon: 'fas fa-paintbrush', color: '#702cf6' },
        { name: 'Relational Databases', icon: 'fas fa-database', color: '#4479a1' },
        { name: 'SQL Server', icon: 'fas fa-magnifying-glass', color: '#e62e27' }
      ],
      description:
        `A Mock E-Commerce Storefront made as a part of my 2017 Summer Internship at Computer Aid, Inc.
        <br />This project had purchasable items stored within a database, provided dedicated detail pages for each item, supported
        user-made accounts with an associated shopping cart, and allowed users to place mock orders.`,
      links: [
        { icon: 'fab fa-github', url: 'https://github.com/JohnBucher/Website-JohnBucher', tooltip: 'GitHub Repository' },
      ]
    }
  ] as Project[];