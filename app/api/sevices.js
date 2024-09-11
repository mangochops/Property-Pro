import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      Service_name,
      Service_description,
      Service_amount,
      Status,
      Contact,
      PropertyId,
      Date_paid
    } = req.body;
    const service = await prisma.services.create({
      data: {
        Service_name,
        Service_description,
        Service_amount,
        Status,
        Contact,
        PropertyId,
        Date_paid
      }
    });
    res.json(service);
  } else if (req.method === 'GET') {
    const services = await prisma.services.findMany();
    res.json(services);
  } else if (req.method === 'PUT') {
    const { Service_Id, ...data } = req.body;
    const service = await prisma.services.update({
      where: { Service_Id },
      data
    });
    res.json(service);
  } else if (req.method === 'DELETE') {
    const { Service_Id } = req.body;
    await prisma.services.delete({ where: { Service_Id } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
