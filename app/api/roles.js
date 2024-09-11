import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Role_type, Name, Phone_number, Salary, PropertyId } = req.body;
    const role = await prisma.roles.create({
      data: {
        Role_type,
        Name,
        Phone_number,
        Salary,
        PropertyId
      }
    });
    res.json(role);
  } else if (req.method === 'GET') {
    const roles = await prisma.roles.findMany();
    res.json(roles);
  } else if (req.method === 'PUT') {
    const { Roles_Id, ...data } = req.body;
    const role = await prisma.roles.update({
      where: { Roles_Id },
      data
    });
    res.json(role);
  } else if (req.method === 'DELETE') {
    const { Roles_Id } = req.body;
    await prisma.roles.delete({ where: { Roles_Id } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
