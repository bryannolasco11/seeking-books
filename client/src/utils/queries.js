import { gql } from '@apollo/client';

export const GET_ME = gqp`
    {
        me{
            _id
            username
            email
            bookcount
            savedbooks {
                id
                authors
                description
                title
                image
                link
            }

        }
    }
`