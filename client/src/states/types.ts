export interface ExpensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Monthly {
  id: string;
  month: string;
  revenue: number;
  expenses: number
  nonOperationalExpenses: number;
  operationalExpenses: number;
}

export interface Day {
  id: string;
  data: string;
  revenue: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totoExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Monthly>;
  dailyData: Array<Day>;
}