import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirige automáticamente después de 5 segundos
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, [router]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-500">404</h1>
        <p className="text-xl mt-4 text-gray-600">
          Lo siento, esta página no existe. Serás redirigido en 5 segundos...
        </p>
      </div>
    </main>
  );
};

export default Custom404;
