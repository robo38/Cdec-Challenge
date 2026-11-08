import Link from "next/link";

export function TextLink({ text, label, href }: TextLinkProps) {
  return (
    <p className="text-sm text-neutral-500">
      {text}{" "}
      <Link href={href} className="font-medium text-neutral-900 underline-offset-4 hover:underline">
        {label}
      </Link>
    </p>
  );
}
