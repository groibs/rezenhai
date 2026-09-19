'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import { AppShell, Button, Card, SecondaryButton, SecondaryLink } from '@/components/ui';
import { mockPhotos } from '@/lib/demo-data';

type UploadedPhoto = { id: string; url: string };

export default function PublicPhotosPage() {
  const [show, setShow] = useState(true);
  const [sent, setSent] = useState(false);
  const [uploadedPhotos, setUploadedPhotos] = useState<UploadedPhoto[]>([]);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const photos = sent || show ? mockPhotos : [];

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newPhotos = Array.from(files).map((file) => ({
        id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2)}`,
        url: URL.createObjectURL(file),
      }));
      setUploadedPhotos((prev) => [...newPhotos, ...prev]);
      setSent(true);
    }
    event.target.value = '';
  }

  return (
    <AppShell>
      <section className="mx-auto max-w-7xl px-5 py-8 md:px-8">
        <SecondaryLink href="/e/churras-dos-amigos">Voltar ao convite</SecondaryLink>
        <div className="mt-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-prata-700">Galeria</p>
            <h1 className="mt-2 font-display text-6xl leading-none">Fotos da resenha</h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setSent(true)}>Enviar foto</Button>
            <SecondaryButton onClick={() => cameraInputRef.current?.click()}>Tirar foto</SecondaryButton>
            <SecondaryButton onClick={() => galleryInputRef.current?.click()}>Escolher da galeria</SecondaryButton>
            <SecondaryButton onClick={() => setShow(!show)}>
              {photos.length || uploadedPhotos.length ? 'Ver estado vazio' : 'Ver fotos mockadas'}
            </SecondaryButton>
          </div>
        </div>
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleFilesSelected}
        />
        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFilesSelected}
        />
        {photos.length || uploadedPhotos.length ? (
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {uploadedPhotos.map((photo) => (
              <Card key={photo.id} className="aspect-square overflow-hidden p-0">
                <img src={photo.url} alt="Foto enviada pela galera" className="h-full w-full object-cover" />
              </Card>
            ))}
            {photos.map((photo, index) => (
              <Card key={photo} className="aspect-square bg-holo">
                <p className="font-mono text-sm font-black">0{index + 1}</p>
                <h2 className="mt-20 text-2xl font-black">{photo}</h2>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="mt-8">
            <h2 className="text-2xl font-black">Ainda não tem foto por aqui.</h2>
            <p className="mt-3 text-prata-700">Quando a galera enviar, elas aparecem neste espaço.</p>
          </Card>
        )}
      </section>
    </AppShell>
  );
}
