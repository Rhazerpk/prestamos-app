export interface Loan {
    id: number;
    clientId: number;
    amount: number;
    interestRate: number;
    term: number; // en meses
    startDate: Date;
    endDate: Date;
    status: 'activo' | 'completado' | 'cancelado';
    totalAmount: number;
    remainingAmount: number;
    lateFeesRate: number;
    paymentFrequency: 'semanal' | 'quincenal' | 'mensual';
    installmentAmount: number;
    createdAt: Date;
    updatedAt: Date;
    nextPaymentDate: Date;
    lastPaymentDate: Date;
  }
  