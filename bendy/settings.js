document.addEventListener("DOMContentLoaded", function() {
  const savedName = localStorage.getItem("siteName");
  const savedIcon = localStorage.getItem("siteIcon");

  if (savedName) {
    document.title = savedName;
  }

  if (savedIcon) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = savedIcon;
  }
});