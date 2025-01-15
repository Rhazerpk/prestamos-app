export interface Payment {
    id: number;
    loanId: string;
    amount: number;
    paymentDate: Date;
    status: 'completado' | 'atrasado';
    lateFees: number;
    createdAt: Date;
  }