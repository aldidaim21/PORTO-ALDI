document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuSheet = document.getElementById("menuSheet");
  const overlay = document.getElementById("overlay");
  const links = document.querySelectorAll(".mobile-link");

  // ===== NAVBAR BLUR ON SCROLL =====
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("bg-white/70", "backdrop-blur-md", "shadow-sm");

      // fallback jika backdrop-blur tidak support
      navbar.style.backgroundColor = "rgba(255,255,255,0.85)";
    } else {
      navbar.classList.remove("bg-white/70", "backdrop-blur-md", "shadow-sm");

      navbar.style.backgroundColor = "transparent";
    }
  });

  // ===== OPEN MOBILE MENU =====
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      menuSheet.classList.remove("translate-y-full");
    }, 10);
  });

  // ===== CLOSE MOBILE MENU =====
  function closeMenu() {
    menuSheet.classList.add("translate-y-full");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }

  overlay.addEventListener("click", closeMenu);
  links.forEach((link) => link.addEventListener("click", closeMenu));
});

// ================= TECH STACK ANIMATION =================
document.addEventListener("DOMContentLoaded", () => {
  const techItems = document.querySelectorAll(".tech-item");

  // initial state (hidden)
  techItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px) scale(0.95)";
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0) scale(1)";
          }, index * 120); // stagger effect
        }
      });
    },
    { threshold: 0.2 }
  );

  techItems.forEach((item) => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");
  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("projectContent");
  const overlay = document.getElementById("projectOverlay");
  const closeBtn = document.getElementById("closeProject");

  if (!projectCards.length) {
    console.error("Project cards not found");
    return;
  }

  // OPEN MODAL
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      modal.classList.remove("hidden");

      // trigger animation
      setTimeout(() => {
        modalContent.classList.remove("scale-90", "opacity-0");
        modalContent.classList.add("scale-100", "opacity-100");
      }, 50);
    });
  });

  // CLOSE MODAL
  function closeModal() {
    modalContent.classList.add("scale-90", "opacity-0");

    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  }

  overlay.addEventListener("click", closeModal);
  closeBtn.addEventListener("click", closeModal);
});
