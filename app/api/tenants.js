import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      Unit_name,
      Tenant_name,
      Unit_type,
      Phone_number,
      Rent_amount,
      Account_number,
      Due_date,
      Balance,
      UnitId
    } = req.body;
    const tenant = await prisma.tenants.create({
      data: {
        Unit_name,
        Tenant_name,
        Unit_type,
        Phone_number,
        Rent_amount,
        Account_number,
        Due_date,
        Balance,
        UnitId
      }
    });
    res.json(tenant);
  } else if (req.method === 'GET') {
    const tenants = await prisma.tenants.findMany();
    res.json(tenants);
  } else if (req.method === 'PUT') {
    const { Tenant_Id, ...data } = req.body;
    const tenant = await prisma.tenants.update({
      where: { Tenant_Id },
      data
    });
    res.json(tenant);
  } else if (req.method === 'DELETE') {
    const { Tenant_Id } = req.body;
    await prisma.tenants.delete({ where: { Tenant_Id } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
