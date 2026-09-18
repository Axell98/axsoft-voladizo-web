export default function Loading() {
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-[#0d59b2] animate-spin" />
      <p className="text-sm font-semibold text-slate-500 tracking-wide">
        Cargando contenido...
      </p>
    </div>
  );
}
