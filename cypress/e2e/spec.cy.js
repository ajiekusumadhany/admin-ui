describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://admin-ui-ajie.vercel.app/");
  });
});

describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.viewport(1280, 800);
    cy.visit("https://admin-ui-ajie.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav");

    cy.get("header");
  });

  // it("should not allow user to log in with invalid credentials", () => {
  //   cy.visit("http://localhost:5173/");

  //   cy.url().should("include", "/login");

  //   cy.get("input#email")
  //     .should("be.visible")
  //     .should("have.attr", "placeholder", "hello@example.com")
  //     .type("hello@example.com")
  //     .should("have.value", "hello@example.com");

  //   cy.get("input#password")
  //     .should("be.visible")
  //     .should("have.attr", "placeholder", "*************")
  //     .type("123")
  //     .should("have.value", "123");

  //   cy.get("button").contains("Login").click();

  //   cy.get("div").contains("Wrong Password");
  // });
});
