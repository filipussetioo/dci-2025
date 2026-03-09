export const Footer = ({ isDark }: { isDark: boolean }) => (
  <footer
    className="py-4 px-6 text-center"
    style={{ backgroundColor: isDark ? "#0a101d" : "#f6f4eb", transition: "background-color 0.5s" }}
  >
    <p className="font-archivo text-[9px] tracking-wider" style={{ color: isDark ? "#4b5563" : "#9ca3af" }}>
      © 2025 PT DCI Indonesia Tbk
    </p>
  </footer>
);
