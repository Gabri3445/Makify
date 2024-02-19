'use server'

import { minio } from "~/server/minio"


export async function upload(formData:FormData) {
    const file = formData.get('file') as File
    await minio.putObject('makify', file.name, file.name)
}