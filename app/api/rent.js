import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      Unit_name,
      Status,
      Balance_Amount,
      Paid_date,
      TenantId,
      Balance_Status
    } = req.body;
    const rent = await prisma.rent.create({
      data: {
        Unit_name,
        Status,
        Balance_Amount,
        Paid_date,
        TenantId,
        Balance_Status
      }
    });
    res.json(rent);
  } else if (req.method === 'GET') {
    const rents = await prisma.rent.findMany();
    res.json(rents);
  } else if (req.method === 'PUT') {
    const { RentId, ...data } = req.body;
    const rent = await prisma.rent.update({
      where: { RentId },
      data
    });
    res.json(rent);
  } else if (req.method === 'DELETE') {
    const { RentId } = req.body;
    await prisma.rent.delete({ where: { RentId } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
