export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function truncateText(
  text: string,
  length: number = 100
): string {
  if (text.length <= length) {
    return text;
  }

  return `${text.slice(0, length)}...`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export function cn(
  ...classes: Array<string | undefined | false | null>
): string {
  return classes.filter(Boolean).join(" ");
}
