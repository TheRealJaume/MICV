import type { Metadata } from "next";

type Translator = (key: string) => string;

type MetadataParams = {
  t: Translator;
  locale: string;
  path: string;
  titleKey: string;
  descriptionKey: string;
};

export function buildPageMetadata({
  t,
  locale,
  path,
  titleKey,
  descriptionKey
}: MetadataParams): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const metadataBase = siteUrl ? new URL(siteUrl) : undefined;
  const normalizedPath = path ? `/${path}` : "";
  const canonical = `/${locale}${normalizedPath}`;

  return {
    metadataBase,
    title: t(titleKey),
    description: t(descriptionKey),
    openGraph: {
      title: t(titleKey),
      description: t(descriptionKey),
      type: "website",
      locale,
      url: canonical
    },
    twitter: {
      card: "summary_large_image",
      title: t(titleKey),
      description: t(descriptionKey)
    },
    alternates: {
      canonical,
      languages: {
        es: `/es${normalizedPath}`,
        en: `/en${normalizedPath}`
      }
    }
  };
}
