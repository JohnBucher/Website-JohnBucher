import { SkillGroup } from '../models/skill-group-model';

export const skillList = [
    {
        icon: 'fab fa-angular',
        name: 'Front End Technologies',
        skills: ['Angular', 'React', 'AngularJS', 'ASP.NET', 'Bootstrap']
    },
    {
        icon: 'fab fa-node-js',
        name: 'Back End Technologies',
        skills: ['Spring Framework', 'Node.js']
    },
    {
        icon: 'fas fa-desktop',
        name: 'Web Development',
        skills: ['HTML', 'CSS', 'SCSS', 'Jasmine', 'Karma', 'Ruby on Rails']
    },
    {
        icon: 'fas fa-gears',
        name: 'DevSecOps',
        skills: ['Amazon Web Services (AWS)', 'ELK Stack (Elasticsearch, Logstash, Beats, Kibana)', 'GitHub Actions (CI/CD)']
    },
    {
        icon: 'fas fa-database',
        name: 'Databases',
        skills: ['Elasticsearch', 'SQL', 'SQL Server']
    },
    {
        icon: 'fas fa-code',
        name: 'Languages',
        skills: ['Typescript', 'Javascript', 'Java', 'C#', 'C', 'Ruby', 'PHP']
    },
    {
        icon: 'fas fa-tools',
        name: 'Development Tools',
        skills: ['Git', 'VS Code', 'Visual Studio', 'IntelliJ', 'Eclipse']
    },
    {
        icon: 'fas fa-briefcase',
        name: 'Industry Tools',
        skills: ['Scrum Master', 'Agile', 'Stakeholder Management', 'Continuous Self-Learning']
    }
] as SkillGroup[];
