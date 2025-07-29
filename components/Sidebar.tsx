export default function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-gray-900 text-white p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">TOBI TECH</h1>
      <nav className="space-y-2">
        <a href="#" className="block hover:text-green-400">Home</a>
        <a href="#" className="block hover:text-green-400">Posts</a>
        <a href="#" className="block hover:text-green-400">Settings</a>
      </nav>
    </aside>
  );
}
