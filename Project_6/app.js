class Bank {
  users = [
    {
      accountNo: 621324104001,
      userName: "Fareedh",
      balance: 150000,
      password: "1234",
    },
    {
      accountNo: 621324104002,
      userName: "Ahamed",
      balance: 13000,
      password: "1234",
    },
    {
      accountNo: 621324104003,
      userName: "Fashim",
      balance: 15000,
      password: "1234",
    },
    {
      accountNo: 621324104004,
      userName: "John",
      balance: 15000,
      password: "1234",
    },
  ];
  getBalance(accountNo, password) {
    try {
      const result = this.users.find((x) => x.accountNo === accountNo);

      if (!result) {
        throw `Invalid Account No ${accountNo}`;
      }

      const validPassword = result.password === password;

      if (!validPassword) {
        throw `Wrong Password`;
      }

      return `Account Holder: ${result.userName}, Balance: ${result.balance}`;
    } catch (error) {
      return error;
    }
  }
}

const formEl = document.getElementById("formData");
const displayMessage = document.getElementById("displayMessage");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const request = { accountNo: null, password: "" };

  formData.forEach((value, key) => {
    request[key] = value;
  });

  let indianBank = new Bank();
  const response = indianBank.getBalance(
    Number(request.accountNo),
    request.password
  );

  displayMessage.innerHTML = response;

  formEl.reset();
});
