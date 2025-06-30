import { prisma } from '@/lib/prisma';
import { BackButton } from "@/components/back-button";
import { SplitCard } from "@/components/dashboard/split/show-splits/client/split-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreateSplit } from '@/components/dashboard/split/create-split';
import { notFound } from 'next/navigation';

// Extrai o tipo de um item retornado por prisma.app.split.findMany()
type SplitItem = Awaited<ReturnType<typeof prisma.app.split.findMany>>[number];

const Splits: React.FC<{ params: Promise<{ splitterId: string }> }> = async ({ params }) => {
  const { splitterId } = await params;

  const splitter = await prisma.app.splitter.findUnique({
    where: { uuid: splitterId },
    include: { category: true, country: true },
  });

  if (!splitter) {
    return notFound();
  }

  // Tipagem explícita de `splits`
  const splits: SplitItem[] = await prisma.app.split.findMany({
    where: { splitterId: splitter.id },
    orderBy: { id: 'asc' },
    include: {
      _count: { select: { links: { where: { hidden: false } } } },
      links: {
        where: { hidden: false },
        orderBy: { ecpm: 'desc' },
        take: 1,
        select: { ecpm: true, prob: true, redirectSlug: true },
      },
    },
  });

  return (
    <div className="transition-opacity duration-500 opacity-100">
      {/* Botão de Voltar e Cabeçalho */}
      <div className="flex items-center mb-8">
        <div className="w-full">
          <div className="flex flex-row items-center space-x-4">
            <BackButton route='splitters' />
            <div className="flex flex-row space-x-3 items-center w-full">
              <div>
                <h2 className="font-bold relative top-2">{splitter.category.name}</h2>
                <span className="text-[10px] text-neutral-400 relative bottom-1">{splitter.country.name}</span>
              </div>
            </div>
            <div className="flex w-full justify-end items-center space-x-3">
              <CreateSplit splitterId={splitter.id} />
            </div>
          </div>

          <div className="flex flex-row w-full items-center rounded-lg">
            <div className="flex flex-col">
              <h1 className="text-[35px] font-black uppercase">Gerenciar Splits</h1>
              <p className="dark:text-neutral-400 text-[12px]">
                Configure seus splits da forma que melhor se adequar ao seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exibição dos Splits */}
      <ScrollArea className="h-[calc(100vh-300px)]">
        <div className="grid grid-cols-6 gap-3">
          {splits.map((split, index) => (
            <SplitCard
              key={split.id}
              index={index + 1}
              splitId={split.id}
              redirectSlug={split.links[0]?.redirectSlug ?? ''}
              splitInsights={split.links[0]}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Splits;
