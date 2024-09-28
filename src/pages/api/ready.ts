// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
	version: string
	readiness: boolean
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ version: '1.0.0', readiness: true })
}
