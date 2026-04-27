const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedTab = tab.dataset.tab;

    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    tab.classList.add("active");
    document.getElementById(selectedTab).classList.add("active");
  });
});
