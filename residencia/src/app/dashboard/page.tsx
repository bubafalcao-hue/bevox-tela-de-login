import { Logo } from '@/components/ui/Logo';

/**
 * Placeholder — o Dashboard real (indicadores, unidades, documentos e tarefas)
 * é a próxima tela do escopo definido no Documento de Visão, seção 6.
 */
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="text-center">
        <Logo className="justify-center text-midnight" />
        <p className="mt-4 text-sm text-muted">Login validado. O Dashboard entra na próxima etapa.</p>
      </div>
    </div>
  );
}
