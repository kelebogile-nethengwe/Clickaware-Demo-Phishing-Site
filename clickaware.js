document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("🛑 Demo Submission:");
  console.log("Email:", email);
  console.log("Password:", password);

  alert(
    "This is a demo site. Your information was not submitted. You'll now learn how phishing works."
  );

  // Redirect to the phishing education page
  window.location.href = "cyberawareness.html";
});
