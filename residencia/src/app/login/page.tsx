'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { CheckCircle2, ShieldCheck, TrendingUp, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Logo } from '@/components/ui/Logo';

const loginSchema = z.object({
  email: z.string().min(1, 'Informe o e-mail corporativo.').email('Formato de e-mail inválido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
});

type LoginForm = z.infer<typeof loginSchema>;

type EstadoEnvio = 'idle' | 'success' | 'error';

const DESTAQUES = [
  { icon: ShieldCheck, texto: 'Conformidade documental com status calculado automaticamente' },
  { icon: TrendingUp, texto: 'Indicadores de unidades, documentos e tarefas em tempo real' },
];

export default function LoginPage() {
  const router = useRouter();
  const [estadoEnvio, setEstadoEnvio] = useState<EstadoEnvio>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginForm): Promise<void> => {
    setEstadoEnvio('idle');
    // Simulação de autenticação — substituir pela chamada real à API.
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Mock de autenticação: qualquer conta do domínio da Adega Distribution é aceita.
    // Substituir por chamada real à API assim que o backend estiver disponível.
    const autenticado = data.email.toLowerCase().endsWith('@adegadistribution.com');
    if (!autenticado) {
      setEstadoEnvio('error');
      return;
    }

    setEstadoEnvio('success');
    setTimeout(() => router.push('/dashboard'), 700);
  };

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <section className="hidden flex-col justify-between bg-midnight px-12 py-12 text-white md:flex md:w-[45%]">
        <Logo />
        <div className="max-w-sm">
          <h1 className="text-3xl font-semibold leading-tight">
            Sua distribuidora, sem pontos cegos.
          </h1>
          <p className="mt-3 text-sm text-white/70">
            O BEVOX centraliza unidades, documentos e tarefas da Adega Distribution em um único
            painel de gestão B2B.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {DESTAQUES.map(({ icon: Icon, texto }) => (
              <li key={texto} className="flex items-start gap-3 text-sm text-white/85">
                <Icon size={18} className="mt-0.5 shrink-0 text-azure" />
                {texto}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} BEVOX — Adega Distribution</p>
      </section>

      <section className="flex flex-1 items-center justify-center bg-paper px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 md:hidden">
            <Logo className="text-midnight" />
          </div>

          <h2 className="text-xl font-semibold text-midnight">Acesse sua conta</h2>
          <p className="mt-1 text-sm text-muted">Entre com suas credenciais corporativas.</p>

          {estadoEnvio === 'success' && (
            <div
              role="status"
              className="mt-5 flex items-center gap-2 rounded-md border border-liquid/30 bg-liquid-light px-3.5 py-2.5 text-sm text-liquid"
            >
              <CheckCircle2 size={16} className="shrink-0" />
              Login validado. Redirecionando…
            </div>
          )}
          {estadoEnvio === 'error' && (
            <div
              role="alert"
              className="mt-5 flex items-center gap-2 rounded-md border border-danger/30 bg-danger-light px-3.5 py-2.5 text-sm text-danger"
            >
              <TriangleAlert size={16} className="shrink-0" />
              E-mail ou senha incorretos. Tente novamente.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-4" noValidate>
            <Input
              label="E-mail corporativo"
              type="email"
              autoComplete="email"
              placeholder="gestor@adegadistribution.com"
              error={errors.email?.message}
              {...register('email')}
            />
            <Input
              label="Senha"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              error={errors.password?.message}
              {...register('password')}
            />
            <Button type="submit" disabled={isSubmitting} className="mt-2 w-full">
              {isSubmitting ? 'Entrando…' : 'Entrar'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
