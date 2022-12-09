exports.default = function() {
  const formType = document.getElementById("form-type");
  const budget = document.getElementById("budget");

  if (formType) {
    formType.addEventListener("change", (e) => {
      const isProjectProposal = e.target.value === "Project Proposal";

      if (isProjectProposal) {
        budget.style.display = "block";
        setTimeout(() => {
          budget.setAttribute("data-pg-ia-show", "");
          budget.removeAttribute("data-pg-ia-hide");
        }, 300);
      } else {
        budget.removeAttribute("data-pg-ia-show");
        budget.classList.add("fade-out");
        setTimeout(() => {
          budget.style.display = "none";
          budget.classList.remove("fade-out");
          budget.setAttribute("data-pg-ia-hide", "");
        }, 300);
      }
    });
  }
}