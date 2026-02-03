Bun.serve({
    port: 3000,
    async fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") {
            return new Response(Bun.file("index.html"), {
                headers: { "Content-Type": "text/html" },
            });
        }
        else if (url.pathname === "/styles.css") {
            return new Response(Bun.file("styles.css"), {
                headers: { "Content-Type": "text/css" },
            });
        }
        else {
            return new Response("Not Found", { status: 404 });
        }
    }
})

console.log("Server is running on http://localhost:3000");