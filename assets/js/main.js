document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const notificationButton = document.getElementById("notificationButton");
  const notificationPopover = document.getElementById("notificationPopover");
  const closeNotifications = document.getElementById("closeNotifications");
  if (notificationButton && notificationPopover) {
    notificationButton.addEventListener("click", () => notificationPopover.classList.toggle("d-none"));
    if (closeNotifications) closeNotifications.addEventListener("click", () => notificationPopover.classList.add("d-none"));
    document.addEventListener("click", (event) => {
      if (!notificationPopover.contains(event.target) && !notificationButton.contains(event.target)) {
        notificationPopover.classList.add("d-none");
      }
    });
  }

  const search = document.getElementById("blogSearch");
  const entries = [...document.querySelectorAll(".post-entry")];
  const filters = [...document.querySelectorAll(".filter-btn")];
  let currentFilter = "all";
  function updatePosts() {
    const query = (search?.value || "").toLowerCase().trim();
    entries.forEach(entry => {
      const matchesText = entry.textContent.toLowerCase().includes(query);
      const matchesFilter = currentFilter === "all" || entry.dataset.access === currentFilter;
      entry.classList.toggle("d-none", !(matchesText && matchesFilter));
    });
  }
  if (search) search.addEventListener("input", updatePosts);
  filters.forEach(button => button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    updatePosts();
  }));

  const loginForm = document.getElementById("loginForm");
  if (loginForm) loginForm.addEventListener("submit", event => {
    event.preventDefault();
    document.getElementById("loginMessage").textContent = "Este formulario es solo una demostración. La autenticación se implementará con el backend.";
  });

  const registerForm = document.getElementById("registerForm");
  if (registerForm) registerForm.addEventListener("submit", event => {
    event.preventDefault();
    const password = document.getElementById("regPassword").value;
    const confirm = document.getElementById("confirmPassword").value;
    const message = document.getElementById("registerMessage");
    if (password !== confirm) {
      message.textContent = "Las contraseñas no coinciden.";
      return;
    }
    message.textContent = "Formulario validado. El registro real se activará al conectar el backend.";
  });
});