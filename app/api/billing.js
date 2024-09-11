import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      Bill_name,
      Bill_amount,
      Account_number,
      Balance,
      PropertyId,
      Due_date
    } = req.body;
    const billing = await prisma.billing.create({
      data: {
        Bill_name,
        Bill_amount,
        Account_number,
        Balance,
        PropertyId,
        Due_date
      }
    });
    res.json(billing);
  } else if (req.method === 'GET') {
    const billings = await prisma.billing.findMany();
    res.json(billings);
  } else if (req.method === 'PUT') {
    const { Bill_id, ...data } = req.body;
    const billing = await prisma.billing.update({
      where: { Bill_id },
      data
    });
    res.json(billing);
  } else if (req.method === 'DELETE') {
    const { Bill_id } = req.body;
    await prisma.billing.delete({ where: { Bill_id } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
