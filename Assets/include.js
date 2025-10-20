document.addEventListener('DOMContentLoaded', async () => {
    const includes = document.querySelectorAll('[data-include]');

    for (const el of includes) {
        const file = el.getAttribute('data-include');
        try {
        const response = await fetch(file);
        if (!response.ok) throw new Error(`Failed to load ${file}`);
        const content = await response.text();
        el.innerHTML = content;
        } catch (err) {
        console.error(err);
        el.innerHTML = `<p style="color:red;">Error loading: ${file}</p>`;
        }
    }
});
