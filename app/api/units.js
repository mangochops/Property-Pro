import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { Unit_type, Unit_number, Available_units, PropertyId } = req.body;
    const unit = await prisma.units.create({
      data: {
        Unit_type,
        Unit_number,
        Available_units,
        PropertyId
      }
    });
    res.json(unit);
  } else if (req.method === 'GET') {
    const units = await prisma.units.findMany();
    res.json(units);
  } else if (req.method === 'PUT') {
    const { UnitId, ...data } = req.body;
    const unit = await prisma.units.update({
      where: { UnitId },
      data
    });
    res.json(unit);
  } else if (req.method === 'DELETE') {
    const { UnitId } = req.body;
    await prisma.units.delete({ where: { UnitId } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
