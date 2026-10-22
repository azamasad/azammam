export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function byNewest<T extends { data: { date?: Date; title: string } }>(
  a: T,
  b: T,
): number {
  const aTime = a.data.date?.getTime() ?? Number.NEGATIVE_INFINITY;
  const bTime = b.data.date?.getTime() ?? Number.NEGATIVE_INFINITY;
  if (aTime !== bTime) return bTime - aTime;
  return a.data.title.localeCompare(b.data.title, 'en');
}
