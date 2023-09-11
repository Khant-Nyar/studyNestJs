export enum ReportsType {
  INCOME = 'income',
  EXPENSE = 'expanse',
}
export const data: Data = {
  reports: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 500,
      create_at: new Date(),
      update_at: new Date(),
      type: ReportsType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Freelance',
      amount: 5000,
      create_at: new Date(),
      update_at: new Date(),
      type: ReportsType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'rent',
      amount: 300,
      create_at: new Date(),
      update_at: new Date(),
      type: ReportsType.EXPENSE,
    },
  ],
};

interface Data {
  reports: {
    id: string;
    source: string;
    amount: number;
    create_at: Date;
    update_at: Date;
    type: ReportsType;
  }[];
}

// data.reports.push();
