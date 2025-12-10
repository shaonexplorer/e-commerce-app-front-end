// app/loading.tsx
"use client";

import React from "react";

/**
 * Beautiful e-commerce loading page
 * - Elegant shimmer skeletons
 * - Responsive grid
 * - Accessible with aria and role
 * - Uses Tailwind CSS (shadcn-friendly)
 */

function Shimmer() {
  return (
    <div className="relative overflow-hidden rounded-md bg-muted/40">
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

function Skeleton({ className = "" }: { className?: string }) {
  return <Shimmer />;
}

export default function Loading() {
  return (
    <div
      className="min-h-screen bg-background text-foreground"
      role="status"
      aria-label="Page is loading"
    >
      {/* Top bar */}
      <header className="border-b bg-card/30 backdrop-blur supports-[backdrop-filter]:bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-primary/20">
              <Skeleton />
            </div>
            <div className="w-28 h-4 rounded bg-muted/40">
              <Skeleton />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden sm:block w-64 h-9 rounded bg-muted/40">
              <Skeleton />
            </div>
            <div className="size-9 rounded-md bg-muted/40">
              <Skeleton />
            </div>
            <div className="size-9 rounded-md bg-muted/40">
              <Skeleton />
            </div>
            <div className="size-9 rounded-md bg-muted/40">
              <Skeleton />
            </div>
          </div>
        </div>
      </header>

      {/* Hero banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="relative overflow-hidden rounded-xl border bg-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8">
            <div className="md:col-span-2 space-y-4">
              <div className="h-8 w-48 rounded bg-muted/40">
                <Skeleton />
              </div>
              <div className="h-4 w-72 rounded bg-muted/40">
                <Skeleton />
              </div>
              <div className="h-4 w-56 rounded bg-muted/40">
                <Skeleton />
              </div>
              <div className="h-10 w-40 rounded-md bg-primary/20">
                <Skeleton />
              </div>
            </div>
            <div className="h-40 md:h-full rounded-lg bg-muted/40">
              <Skeleton />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="rounded-xl border bg-card p-4 sm:p-5">
              <div className="h-5 w-24 rounded bg-muted/40 mb-4">
                <Skeleton />
              </div>
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="size-4 rounded bg-muted/40">
                      <Skeleton />
                    </div>
                    <div className="h-4 w-32 rounded bg-muted/40">
                      <Skeleton />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border bg-card p-4 sm:p-5">
              <div className="h-5 w-28 rounded bg-muted/40 mb-4">
                <Skeleton />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full rounded bg-muted/40">
                  <Skeleton />
                </div>
                <div className="h-2 w-5/6 rounded bg-muted/40">
                  <Skeleton />
                </div>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <section className="lg:col-span-3">
            <div className="flex items-center justify-between mb-4">
              <div className="h-6 w-32 rounded bg-muted/40">
                <Skeleton />
              </div>
              <div className="h-9 w-32 rounded bg-muted/40">
                <Skeleton />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <article
                  key={i}
                  className="group rounded-xl border bg-card overflow-hidden"
                >
                  <div className="aspect-square bg-muted/40">
                    <Skeleton />
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="h-4 w-3/4 rounded bg-muted/40">
                      <Skeleton />
                    </div>
                    <div className="h-4 w-1/2 rounded bg-muted/40">
                      <Skeleton />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="h-6 w-16 rounded bg-primary/20">
                        <Skeleton />
                      </div>
                      <div className="h-9 w-24 rounded-md bg-muted/40">
                        <Skeleton />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-9 w-9 rounded-md bg-muted/40">
                  <Skeleton />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-5 w-24 rounded bg-muted/40">
                <Skeleton />
              </div>
              <div className="h-4 w-32 rounded bg-muted/40">
                <Skeleton />
              </div>
              <div className="h-4 w-28 rounded bg-muted/40">
                <Skeleton />
              </div>
              <div className="h-4 w-20 rounded bg-muted/40">
                <Skeleton />
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
