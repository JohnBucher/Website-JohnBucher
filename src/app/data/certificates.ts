import { Certificate } from "../models/certificate-model";

export const certificates = [
    {
        name: 'AWS Certified Developer - Associate',
        issuedBy: 'Amazon Web Services Training and Certification',
        image: './assets/Skills/aws-certified-developer-associate.png',
        awardedOn: 'August 10, 2023',
        verificationUrl: 'https://www.credly.com/badges/f4c11496-2549-4f96-a185-2a27c74103ea/public_url'
    },
    {
        name: 'Certified SAFe® 5 Scrum Master',
        issuedBy: 'Scaled Agile Inc',
        image: './assets/Skills/cert_mark_SSM_small_150px.png',
        awardedOn: 'March 23, 2021',
        verificationUrl: 'https://www.credly.com/badges/978a82aa-950e-479f-b397-c0df77776eb2/public_url'
    }
] as Certificate[];