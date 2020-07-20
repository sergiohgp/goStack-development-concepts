import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export default function message(request: Request, response: Response) {
    const user = createUser({name: 'Sergio',
    email: 'sergiohgp@gmail.com',
    password: '1234',
    techs: [
        'node',
        {title: 'JS', experience: 100}
    ]
    })

    return (
        response.json({ message: 'Hello World' })
    )
}