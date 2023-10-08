const app = Vue.createApp({
  data() {
      return {
          newLoanAmount: 0,
          newInterestRate: 0,
          newLoanTerm: 0,
          loans: [],
      };
  },
  methods: {
      addLoan() {
          if (this.newLoanAmount > 0 && this.newInterestRate > 0 && this.newLoanTerm > 0) {
              const loanAmount = parseFloat(this.newLoanAmount);
              const interestRate = parseFloat(this.newInterestRate);
              const loanTerm = parseInt(this.newLoanTerm);

              const monthlyInterestRate = interestRate / 100 / 12;
              const numberOfPayments = loanTerm * 12;
              const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

              this.loans.push({
                  loanAmount,
                  interestRate,
                  loanTerm,
                  monthlyPayment,
              });

              // Reset input fields
              this.newLoanAmount = 0;
              this.newInterestRate = 0;
              this.newLoanTerm = 0;
          }
      },
      deleteLoan(index) {
          this.loans.splice(index, 1);
      },
  },
});

app.mount('#app');
