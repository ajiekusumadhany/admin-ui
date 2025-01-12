// Skenario
// 1. User berhasil login dengan kredensial yang valid.
// 2. Setelah login, user diarahkan ke halaman dashboard (overview).
describe("User   mengakses halaman dashboard (overview)", () => {
  it("should allow user to log in and access the dashboard", () => {
    // Langkah 1: Buka halaman login
    cy.viewport(1280, 800);
    cy.visit("https://admin-ui-ajie.vercel.app/");

    // Langkah 2: Verifikasi URL mengandung '/login'
    cy.url().should("include", "/login");

    // Langkah 3: Input email dan password yang valid
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

    // Langkah 4: Klik tombol Login
    cy.get("button").contains("Login").click();

    // Langkah 5: Verifikasi URL dashboard atau overview
    cy.url().should("eq", "https://admin-ui-ajie.vercel.app/");

    // Langkah 6: Verifikasi elemen header
    cy.get("header").should("be.visible");
    cy.get("header").should("be.visible");

    // Langkah 7: Verifikasi elemen nav
    cy.get("nav").should("be.visible");

    // Langkah 8: Verifikasi elemen main
    cy.get("main").should("be.visible");


    cy.wait(2000); // Tunggu 2 detik

  });
});