import { NextApiRequest, NextApiResponse } from "next"

const getDogByID = (request: NextApiRequest, response: NextApiResponse) => {
  //   if (typeof request.query.id != "number") {
  //     response.status(500).json({ message: "Error: Server not found!!" })
  //   }
  if (request.method !== "GET") {
    response.status(500).json({ message: "sorry, we only accept GET request" })
  } else {
  }
  //   response.json({ hello: "world", method: request.method })
  response.json({
    id: request.query.id,
    message: "getDogByID",
    // type: typeof request.query.id,
  })
}

export default getDogByID
