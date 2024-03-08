import { getCompany } from "./db/companies.js";
import { getJobs } from "./db/jobs.js";


export const resolvers = {
    Query: {
        jobs: () => getJobs()
    },

    Job: {
        // date: (job) => job.createdAt
        date: ({ createdAt }) => toIsoDate(createdAt),
        company: ({ companyId }) => getCompany(companyId)
    },

    // Company: {
    //     id: (company) => company.id,
    //     name: (company) => company.name,
    //     description: (company) => company.description
    // }
}

const toIsoDate = (date) => date.slice(0, 'yyyy-mm-dd'.length);


// export const resolvers = {
//     Query: {
//         jobs: async () => {
//             return [
//                 {
//                     id: 'test-id',
//                     title: 'Software Engineer',
//                     description: 'A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of computer software.'
//                 }
//             ]
//         }
//     }
// }