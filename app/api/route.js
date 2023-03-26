
const handler = async (req, res) => {
  if (req.NextRequest.method === 'POST') {
    await fetch('http://localhost:3001/data', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: req.NextRequest.body
    })
    return res.NextApiResponse.status(201).json({ success: 'The method worked as expected' })
  }

  return res.NextApiResponse.status(400).json({ error: 'The method does not exist' })
}

export default handler
