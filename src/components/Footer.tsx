export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Severant Logo"
            className="w-6 h-6 object-contain"
          />
          <span className="text-lg font-bold text-white">Severant Group</span>
        </div>
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Severant Group AI Technologies. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
