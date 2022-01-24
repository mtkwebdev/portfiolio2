import * as prismic from "@prismicio/client"
import { type } from "@testing-library/user-event/dist/type"

const connect = process.env.REACT_APP_PRISMIC_IO
export const mkportfolio = 'mohammadkawadri'
export const endpoint = prismic.getEndpoint(mkportfolio)

export const client = prismic.createClient(endpoint, {
    accessToken: connect,
    routes: [
        {
            type: 'projects',
            path: '/project1/:uid'
        }
    ]
})