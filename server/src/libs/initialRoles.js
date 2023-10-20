import Role from '../models/roleModel'

const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount()
        if(count > 0) return

        await Promise.all([
            new Role({name: 'restaurant'}).save(),
            new Role({name: 'moderator'}).save(),
            new Role({name: 'administrator'}).save()
        ])
    } catch (error) {
        console.error(error)
    }
}

export default createRoles