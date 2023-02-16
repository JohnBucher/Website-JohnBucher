import { Project } from "../models/project-model";

export const projects = [
    {
      name: 'Johnbucher.me',
      id: '2',
      image: './assets/Projects/Projects-John_Website.PNG',
      tags: [
        { name: 'Angular (15)', icon: 'fas fa-desktop', color: '#c3002f' },
        { name: 'Typescript', icon: 'fas fa-code', color: '#2f74c0' },
        { name: 'SASS', icon: 'fas fa-paintbrush', color: '#bf4080' },
        { name: 'Bootstrap', icon: 'fas fa-paintbrush', color: '#702cf6' },
        { name: 'CI/CD (GitHub Actions)', icon: 'fas fa-gears', color: '#3fb950' },
        { name: 'Karma', icon: 'fas fa-flask-vial', color: '#369b8b' },
        { name: 'Jasmine', icon: 'fas fa-flask-vial', color: '#8a4182' }
      ],
      description:
        `A personal website that was made as a visual representation of my resume and as a tool to implement newly found
        concepts and design practices.`,
      links: [
        { icon: 'fab fa-github', url: 'https://github.com/JohnBucher/Website-JohnBucher', tooltip: 'GitHub Repository' },
        { icon: 'fas fa-external-link-alt', url: 'https://johnbucher.me/', tooltip: 'Link to Project' }
      ]
    },
    {
      name: 'E-Commerce Mock Storefront',
      id: '1',
      image: './assets/Projects/Projects-CompAid.PNG',
      tags: [
        { name: '.NET Framework', icon: 'fas fa-cubes', color: '#1487cb' },
        { name: 'ASP.NET', icon: 'fas fa-desktop', color: '#1487cb' },
        { name: 'Javascript', icon: 'fas fa-code', color: '#dbc60d' },
        { name: 'C#', icon: 'fas fa-code', color: '#1d9924' },
        { name: 'Bootstrap', icon: 'fas fa-paintbrush', color: '#702cf6' },
        { name: 'Relational Databases', icon: 'fas fa-database', color: '#4479a1' },
        { name: 'SQL Server', icon: 'fas fa-magnifying-glass', color: '#e62e27' },
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