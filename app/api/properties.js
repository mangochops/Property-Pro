import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Property_name, Property_location, Property_units } = req.body;
    const property = await prisma.properties.create({
      data: {
        Property_name,
        Property_location,
        Property_units,
        UserId: req.user.id // Assuming you have user info in the session
      }
    });
    res.json(property);
  } else if (req.method === 'GET') {
    const properties = await prisma.properties.findMany();
    res.json(properties);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
