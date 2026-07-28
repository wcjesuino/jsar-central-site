import Image from "next/image";

type LogoProps = {
  /** "light" = para fundos claros (símbolo/texto escuros). "dark" = para fundos escuros (símbolo/texto brancos). */
  variant?: "light" | "dark";
  /** Altura do símbolo em px. */
  size?: number;
  /** Esconde o texto "AR CENTRAL", deixando só o símbolo. */
  iconOnly?: boolean;
  className?: string;
};

export function Logo({
  variant = "light",
  size = 28,
  iconOnly = false,
  className = "",
}: LogoProps) {
  const isDark = variant === "dark";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src={isDark ? "/brand/mark_symbol_white.png" : "/brand/mark_symbol.png"}
        alt="JS AR Central"
        width={size * 2.2}
        height={size}
        style={{ height: size, width: "auto" }}
        priority
      />
      {!iconOnly && (
        <span
          className={`font-sans font-extrabold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
          style={{ fontSize: size * 0.6 }}
        >
          AR CENTRAL
        </span>
      )}
    </span>
  );
}
