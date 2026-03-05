import { Card, CardContent } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
const transactions = [
  { id: 1, name: "Freelance Payment", category: "Generate", amount: "+₱15,000", date: "Mar 4 2026 9:00 AM", type: "income" },
  { id: 2, name: "Electricity Bill", category: "Overhead", amount: "-₱2,800", date: "Mar 3 2026 10:00 AM", type: "expense" },
  { id: 3, name: "Claude AI Pro", category: "Research", amount: "-₱1,100", date: "Mar 2 2026 11:00 AM", type: "expense" },
  { id: 4, name: "Church Donation", category: "Tithing", amount: "-₱1,500", date: "Mar 1 2026 12:00 PM", type: "expense" },
  { id: 5, name: "Grocery Shopping", category: "Overhead", amount: "-₱3,200", date: "Feb 28 2026 1:00 PM", type: "expense" },
  { id: 6, name: "Stock Dividends", category: "Generate", amount: "+₱4,200", date: "Feb 27 2026 2:00 PM", type: "income" },
  { id: 7, name: "New Sneakers", category: "Wants", amount: "-₱4,500", date: "Feb 26 2026 3:00 PM", type: "expense" },
  { id: 8, name: "Health Insurance", category: "Health", amount: "-₱1,800", date: "Feb 25 2026 4:00 PM", type: "expense" },
];
const categoryColor: Record<string, string> = {
  Generate: "bg-blue-50 text-blue-600 border-blue-200",
  Research: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Overhead: "bg-red-50 text-red-500 border-red-200",
  Wants: "bg-blue-50 text-blue-600 border-blue-200",
  Tithing: "bg-emerald-50 text-emerald-600 border-emerald-200",
  Health: "bg-blue-50 text-blue-600 border-blue-200",
};
const RecentTransactions = () => {
  return (
    <Card className="bg-white">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Transaction</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id} className="group">
                <TableCell className="font-medium text-gray-900">{tx.name}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge variant="outline" className={categoryColor[tx.category]}>
                    {tx.category}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-500 text-sm">{tx.date}</TableCell>
                <TableCell
                  className={`text-right font-semibold ${
                    tx.type === "income" ? "text-emerald-600" : "text-gray-900"
                  }`}
                >
                  {tx.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
export default RecentTransactions;
