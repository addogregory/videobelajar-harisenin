
document.addEventListener("DOMContentLoaded", () => {
  // 1. DATA KURSUS

  const courses = [
    {
      id: 1,
      title: "Belajar UI/UX Design untuk Pemula",
      category: "desain",
      description:
        "Pelajari dasar desain antarmuka dan pengalaman pengguna untuk membuat aplikasi yang menarik.",
      price: 99000,
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Graphic Design dengan Canva",
      category: "desain",
      description:
        "Buat desain poster, konten media sosial, dan presentasi dengan lebih kreatif.",
      price: 75000,
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "HTML dan CSS dari Nol",
      category: "pemrograman",
      description:
        "Bangun website pertamamu dengan memahami struktur HTML dan styling CSS.",
      price: 120000,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "JavaScript untuk Website Interaktif",
      category: "pemrograman",
      description:
        "Pelajari JavaScript untuk membuat website yang dinamis dan interaktif.",
      price: 149000,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Memulai Bisnis Digital",
      category: "bisnis",
      description:
        "Kenali peluang bisnis digital, susun strategi, dan mulai bangun usahamu.",
      price: 135000,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Digital Marketing untuk Pemula",
      category: "pemasaran",
      description:
        "Pelajari strategi pemasaran digital untuk menjangkau lebih banyak pelanggan.",
      price: 110000,
      image:
        "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Keuangan Bisnis",
      category: "bisnis",
      description:
        "Pelajari strategi pencatatan untuk mengatur keuangan Bisnis anda.",
      price: 90000,
      image:
        "https://image.slidesharecdn.com/financialmarketsandinstitution-121005035407-phpapp02/95/financial-markets-1-728.jpg?cb=1349409308",
    },
    {
      id: 8,
      title: "Web Design dengan Figma",
      category: "desain",
      description:
        "Pelajari cara membuat desain web yang responsif dan user friendly, dengan desain yang modern.",
      price: 100000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iqXIRBHDiWqWqx8f9YPFsBd0dW6YUCjoCtd1ws6PDw&s=10",
    },
    {
      id: 9,
      title: "Social Media Specialist",
      category: "pemasaran",
      description:
        "Pelajari strategi pemasaran digital yang lebih advanced untuk menguasai pasar profesional.",
      price: 120000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDNalw1y2q0yDMFdLVGgBAq1Z-ft2yGndTsYLlMV-Zg&s",
    },
  ];

  // ========================================
  // 2. FORMAT HARGA
  // ========================================

  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  }

  // ========================================
  // 3. MENU PROFIL
  // ========================================

  const profileButton = document.getElementById("profileButton");
  const profileDropdown = document.getElementById("profileDropdown");

  if (profileButton ) {
    function closeProfileMenu() {
      profileButton.setAttribute("aria-expanded", "false");
    }

    profileButton.addEventListener("click", (event) => {
      event.stopPropagation();
      profileButton.setAttribute("aria-expanded", String(!isOpen));
    })
  }

  // ========================================
  // 4. RENDER KARTU KURSUS
  // ========================================

  const courseGrid = document.getElementById("courseGrid");
  const courseEmpty = document.getElementById("courseEmpty");
  const categoryButtons = document.querySelectorAll(".category-button");

  function renderCourses(category = "semua") {
    if (!courseGrid) return;

    // Bersihkan kartu sebelumnya
    courseGrid.replaceChildren();

    // Filter kursus berdasarkan kategori
    const filteredCourses =
      category === "semua"
        ? courses
        : courses.filter((course) => course.category === category);

    // Tampilkan pesan jika tidak ada kursus
    if (courseEmpty) {
      courseEmpty.hidden = filteredCourses.length > 0;
    }

    filteredCourses.forEach((course) => {
      // Elemen kartu
      const card = document.createElement("article");
      card.className = "course-card";

      // Gambar kursus
      const image = document.createElement("img");
      image.className = "course-image";
      image.src = course.image;
      image.alt = course.title;
      image.loading = "lazy";

      // Konten kartu
      const content = document.createElement("div");
      content.className = "course-content";

      // Kategori
      const categoryLabel = document.createElement("span");
      categoryLabel.className = "course-category";
      categoryLabel.textContent = course.category;

      // Judul
      const title = document.createElement("h3");
      title.className = "course-title";
      title.textContent = course.title;

      // Deskripsi
      const description = document.createElement("p");
      description.className = "course-description";
      description.textContent = course.description;

      // Bagian harga dan tombol
      const footer = document.createElement("div");
      footer.className = "course-card-footer";

      const price = document.createElement("span");
      price.className = "course-price";
      price.textContent = formatPrice(course.price);

      const button = document.createElement("button");

      // Susun elemen kartu
      content.append(categoryLabel, title, description);
      footer.append(price, button);
      content.append(footer);
      card.append(image, content);

      courseGrid.append(card);
    });
  }

  // ========================================
  // 5. FILTER KATEGORI
  // ========================================

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.category;

      // Perbarui tampilan tombol aktif
      categoryButtons.forEach((item) => {
        const isActive = item === button;

        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });

      // Tampilkan kursus sesuai kategori
      renderCourses(selectedCategory);
    });

    // Inisialisasi status aksesibilitas tombol
    button.setAttribute(
      "aria-pressed",
      String(button.classList.contains("active"))
    );
  });

  // ========================================
  // 6. FILTER KATEGORI DARI FOOTER
  // ========================================

  const footerCategoryLinks = document.querySelectorAll(
    "[data-footer-category]"
  );

  footerCategoryLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const category = link.dataset.footerCategory;

      // Cari tombol kategori yang sesuai
      const matchingButton = [...categoryButtons].find(
        (button) => button.dataset.category === category
      );

      if (matchingButton) {
        matchingButton.click();

        // Arahkan pengguna ke bagian koleksi kursus
        document.getElementById("kursus")?.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // ========================================
  // 7. NEWSLETTER
  // ========================================

  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterEmail = document.getElementById("newsletterEmail");
  const newsletterMessage = document.getElementById("newsletterMessage");

  if (newsletterForm && newsletterEmail && newsletterMessage) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = newsletterEmail.value.trim();

      // Validasi dasar email
      if (!newsletterEmail.checkValidity() || !email) {
        newsletterEmail.reportValidity();
        return;
      }

      // Pesan konfirmasi untuk versi frontend
      newsletterMessage.textContent =
        `Terima kasih! ${email} siap menerima informasi terbaru dari Video Belajar.`;

      newsletterMessage.classList.add("success");

      // Kosongkan input setelah pengiriman
      newsletterForm.reset();
    });
  }

  // ========================================
  // 8. TAHUN COPYRIGHT OTOMATIS
  // ========================================

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // ========================================
  // 9. TAMPILKAN SEMUA KURSUS SAAT HALAMAN DIBUKA
  // ========================================

  renderCourses("semua");
});
