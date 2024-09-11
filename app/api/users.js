import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { First_name, Last_name, Email, Phone_number, Password } = req.body;
    const user = await prisma.users.create({
      data: {
        First_name,
        Last_name,
        Email,
        Phone_number,
        Password
      }
    });
    res.json(user);
  } else if (req.method === 'GET') {
    const users = await prisma.users.findMany();
    res.json(users);
  } else if (req.method === 'PUT') {
    const { UserId, ...data } = req.body;
    const user = await prisma.users.update({
      where: { UserId },
      data
    });
    res.json(user);
  } else if (req.method === 'DELETE') {
    const { UserId } = req.body;
    await prisma.users.delete({ where: { UserId } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
