export interface Payment {
    id: string;
    loanId: string;
    amount: number;
    paymentDate: Date;
    status: 'completado' | 'atrasado';
    lateFees: number;
    createdAt: Date;
  }