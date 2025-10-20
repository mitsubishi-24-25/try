    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    if (window.innerWidth < 992) {
        closeExpanded();
    }
    });

    function handleResize() {
    if (window.innerWidth < 992) {
        sidebar.classList.add('collapsed');
    } else {
        sidebar.classList.remove('collapsed');
    }
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('DOMContentLoaded', handleResize);

    document.addEventListener('click', function (e) {
    const isSmallScreen = window.innerWidth <= 991.98;
    if (
        isSmallScreen &&
        !sidebar.contains(e.target) &&
        !toggleBtn.contains(e.target)
    ) {
        sidebar.classList.add('collapsed');
    }
    });

    searchInput.addEventListener("focus", function () {
    closeExpanded();
    });

    searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const notes = document.querySelectorAll("#noteContainer .card");

    notes.forEach(note => {
        const text = note.textContent.toLowerCase();
        note.parentElement.style.display = text.includes(query) ? "" : "none";
    });
    });

    searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        // Close the mobile keyboard
        searchInput.blur();

        showToast("This is an automatic search—you don't have to click Enter.");
    }
    });


    document.querySelectorAll('[data-note]').forEach(note => {
    note.addEventListener('click', e => {
        const isDisabled = note.hasAttribute('data-disabled');

        if (isDisabled) {
        e.preventDefault();
        showToast("The list of this certificate is currently unavailable.");
        return; // Do not open
    }

    // If not disabled, proceed with expand
    if (!note.classList.contains('expanded') && !e.target.classList.contains('btn-close-note')) {
        note.classList.add('expanded');
        note.querySelector('.note-expanded').classList.remove('d-none');

        // Delay to let content render
    setTimeout(() => {
        const query = searchInput.value.trim().toLowerCase();

        if (query === "") return; // 🔒 Skip if search bar is empty

        const highlightColumnClasses = ['col-4', 'col-8', 'col-12', 'Yes']; // ✅ Add as many as you want
        let nameDivs = [];

        // Get all matching divs from multiple columns
        highlightColumnClasses.forEach(className => {
        const divs = Array.from(note.querySelectorAll(`.note-expanded [class*="${className}`));
        nameDivs = nameDivs.concat(divs);
        });


        // Remove old highlights
        nameDivs.forEach(div => div.classList.remove('highlighted'));

        // Highlight matching names only
        let firstMatch = null;

        nameDivs.forEach(div => {
        const text = div.innerText.trim().toLowerCase();
        if (text.includes(query)) {
            div.classList.add('highlighted');
            if (!firstMatch) firstMatch = div;
        }
        });

        if (firstMatch) {
        firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

    }, 200);

    




        const backdrop = document.createElement('div');
        backdrop.className = 'backdrop';
        backdrop.onclick = () => {
        note.classList.remove('expanded');
        note.querySelector('.note-expanded').classList.add('d-none');
        backdrop.remove();
        };

        document.body.appendChild(backdrop);
    }
    });

    note.querySelector('.btn-close-note')?.addEventListener('click', e => {
    e.stopPropagation();
    note.classList.remove('expanded');
    note.querySelector('.note-expanded').classList.add('d-none');
    document.querySelector('.backdrop')?.remove();
    });
});

    function closeExpanded() {
    const expandedCards = document.querySelectorAll(".card.expanded");
    const backdrops = document.querySelectorAll(".backdrop");

    expandedCards.forEach(card => {
        const expandedNote = card.querySelector(".note-expanded");
        if (expandedNote) {
        expandedNote.querySelectorAll('.highlighted').forEach(el => el.classList.remove('highlighted'));
        expandedNote.classList.add("d-none");
        }
        card.classList.remove("expanded");
    });

    backdrops.forEach(backdrop => backdrop.remove());
    }


    function adjustLayoutPadding() {
        const navbar = document.querySelector('.navbar');
        const sidebar = document.getElementById('sidebar');
        const main = document.querySelector('.main');

        if (navbar) {
            const navbarHeight = navbar.offsetHeight + 'px';

            // Sidebar adjustment
            if (window.innerWidth < 992 && sidebar) {
            sidebar.style.paddingTop = navbarHeight;
            } else if (sidebar) {
            sidebar.style.paddingTop = '';
            }

            // Main content adjustment
            if (main) {
            main.style.paddingTop = navbarHeight;
            }
        }
}

// Run on load and when window resizes
window.addEventListener('load', adjustLayoutPadding);
window.addEventListener('resize', adjustLayoutPadding);


    window.addEventListener('resize', adjustSidebarPadding);
    window.addEventListener('DOMContentLoaded', adjustSidebarPadding);

    const navLinks = document.querySelectorAll('.none');
    navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        showToast("This page is currently unavailable. Thank you!");
        
        sidebar.classList.add('collapsed');
    });
    });