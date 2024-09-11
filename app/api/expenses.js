import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {
      Expense_name,
      Expense_amount,
      Account_name,
      PropertyId,
      Paid_date
    } = req.body;
    const expense = await prisma.expenses.create({
      data: {
        Expense_name,
        Expense_amount,
        Account_name,
        PropertyId,
        Paid_date
      }
    });
    res.json(expense);
  } else if (req.method === 'GET') {
    const expenses = await prisma.expenses.findMany();
    res.json(expenses);
  } else if (req.method === 'PUT') {
    const { ExpenseId, ...data } = req.body;
    const expense = await prisma.expenses.update({
      where: { ExpenseId },
      data
    });
    res.json(expense);
  } else if (req.method === 'DELETE') {
    const { ExpenseId } = req.body;
    await prisma.expenses.delete({ where: { ExpenseId } });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
