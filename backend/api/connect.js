import { MongoClient } from "mongodb"

const URI = "mongodb+srv://vignoligabriel52:fnrQuaFd8UPSgadg@cluster0.lg1cl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotifyAula")
