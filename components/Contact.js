const Contact = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) {
      alert('Please fill all fields');
      return;
    }
    alert('Message sent');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="p-6 bg-white/60 rounded-2xl border border-moss/20">
      <h2 className="text-3xl font-serif text-terracotta mb-4">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded border-moss/20 bg-parchment/30" />
        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-2 border rounded border-moss/20 bg-parchment/30 h-32" />
        <button className="bg-terracotta text-white px-6 py-2 rounded hover:opacity-90 transition shadow-md">
          Send Message
        </button>
      </form>
    </section>
  );
};