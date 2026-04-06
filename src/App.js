const App = () => {
    return (
        <div className="min-h-screen">
            <header className="h-64 flex flex-col items-center justify-center bg-moss text-parchment shadow-lg">
                <h1 className="text-5xl font-bold font-serif">Yvgeni Laberinto</h1>
                <p className="mt-2 italic">IT Student & Developer</p>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
                <section className="p-8 rounded-2xl bg-white border border-gray-200">
                    <h2 className="text-3xl text-terracotta font-serif mb-4">About Me</h2>
                    <p className="text-oak">I am an IT student focused on building clean and functional web applications.</p>
                </section>

                <section className="p-8 rounded-2xl bg-white border border-gray-200">
                    <h2 className="text-3xl text-terracotta font-serif mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-1 rounded-full bg-harvest text-white">React JS</span>
                        <span className="px-4 py-1 rounded-full bg-harvest text-white">Tailwind CSS</span>
                        <span className="px-4 py-1 rounded-full bg-harvest text-white">JavaScript</span>
                    </div>
                </section>

                <section className="p-8 rounded-2xl bg-white border border-gray-200">
                    <h2 className="text-3xl text-terracotta font-serif mb-4">Education</h2>
                    <p className="font-bold">Bachelor of Science in Information Technology</p>
                    <p className="text-sm">Current Student</p>
                </section>

                <section className="p-8 rounded-2xl bg-white border border-gray-200">
                    <h2 className="text-3xl text-terracotta font-serif mb-4">Experience</h2>
                    <ul className="list-disc ml-5 space-y-2">
                        <li>Built portfolio websites using HTML, CSS, Tailwind</li>
                        <li>Worked with UI design</li>
                    </ul>
                </section>

                <section className="p-8 rounded-2xl bg-white border border-gray-200">
                    <h2 className="text-3xl text-terracotta font-serif mb-4">Contact</h2>
                    <div className="space-y-4">
                        <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
                        <textarea placeholder="Message" className="w-full p-2 border rounded"></textarea>
                        <button className="bg-terracotta text-white px-6 py-2 rounded">Send</button>
                    </div>
                </section>
            </main>

            <footer className="text-center py-10 text-gray-500 border-t">
                © 2026 Portfolio
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);