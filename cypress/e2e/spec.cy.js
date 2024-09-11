const loginTestUser = {
  email: "lehhha0110@gmail.com",
  password: "1234",
};

describe("로그인 테스트", () => {
  it("로그인 테스트", () => {
    cy.visit("http://localhost:5173/login");

    cy.get("input[type=email]").click().type(loginTestUser.email).blur();
    cy.get("input[type=password]").click().type(loginTestUser.password).blur();
    cy.get("button[type=submit]").click();
  });
});