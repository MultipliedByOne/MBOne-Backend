import getConnection from './db/connection.js'


export async function getUser(evt){
    console.log("test")
    let connection = await getConnection()
}

export async function createUser(evt){
    let connection = await getConnection()
}

export async function updateUser(evt){
    let connection = await getConnection()
}