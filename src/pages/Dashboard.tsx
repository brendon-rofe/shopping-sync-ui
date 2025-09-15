import { useNavigate } from "react-router-dom";

type Props = {
  avatarUrl?: string;
  primaryColor?: string; // e.g. "#137fec"
  onClickHouseholds?: () => void;
  onClickItems?: () => void;
};

export default function ShoppingSyncDashboard({
  avatarUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAxTQ8ciugz1lZDte-nyuL1ftkWBEYARmhM4Iznryhj4QpeasjV22WjJsS9qcJLRYAXNTb62Se_6CbXIbRj8WzJLZc9TWBETg8XKL20vpSMg8i4kPx70XAObxhKikKAnvnG05K2wAKYBvc1nlgXGsP203bAlbXw5KuR48MgHGq-0b5oPPFuOgMxJ8NY1qMCGv5eCWxCTmlvv17HewI5ib16z6r_f9d-RH_Y21O4MnOuRf4zP0GIL3aRONufjhMyupH6JE1SSbPigUU",
  primaryColor = "#137fec",
  onClickHouseholds,
  onClickItems,
}: Props) {
  return (
    <div
      className="min-h-screen w-full bg-[#111418] text-white"
      style={{ ["--primary-color" as any]: primaryColor }}
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#283039] px-4 sm:px-6 lg:px-10 py-3">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-8 w-8 text-white">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <g clipPath="url(#clip0_6_535)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_535">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-[-0.015em]">ShoppingSync</h2>
        </div>

        {/* Center Nav (hidden on small) */}
        <nav className="hidden md:flex flex-1 justify-center gap-6 lg:gap-8">
          <a className="text-sm font-medium" href="#">Dashboard</a>
          <a className="text-sm font-medium text-slate-400 hover:text-white" href="#">
            Shopping Lists
          </a>
          <a className="text-sm font-medium text-slate-400 hover:text-white" href="#">
            Inventory
          </a>
          <a className="text-sm font-medium text-slate-400 hover:text-white" href="#">
            Recipes
          </a>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-400 hover:bg-[#283039] hover:text-white"
            aria-label="Notifications"
          >
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="size-10 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${avatarUrl})` }}
            aria-label="User avatar"
          />
        </div>
      </header>

      {/* Main */}
      <main className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Dashboard</h1>
          </div>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold tracking-[-0.015em]">Manage</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card: Households */}
              <Card
                title="Households"
                description="Manage your household members and settings."
                imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCtNSWzATog1v5yrZqcSKkI82ii_ZERy2qGVOcbOrFqxs6oPp91iWOEMTWhhzdN-W015sKZT_-NgT1xJJ4sqCt6-qnPDpvPFWrjOWhT1gR3nNyI3SrTUx-tYi9Tv63IIAZOHLkmWCRI69axaZxuRjvA8iemgEWgTUHEe6HM9mKhsUY1z-GSnLFQE8f_6vwM53UyeTCktKGUry-YJn6iKLuR8Ajz45WL9p_NQLm_BSEF1mDkNfqNeM27ujFu9G2e0XlW1WdkKTndUrg"
                ctaIcon="home"
                ctaLabel="Manage Households"
                onClick={onClickHouseholds}
              />

              {/* Card: Items */}
              <Card
                title="Items"
                description="Add, edit, and organize your grocery items."
                imgUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAgdg8fE-qoTAAJHePh3A6ABVjj82Xtk4Ic62D-pj4S5QptG7wVoGHxqNHGSfUTCbD-8kdjD1u9RflY5aWhXqEjQaZzq_08vWNZGLWgw_TvocHCikIT2ZVNyIsoqMcqNeyuSFMsoNiwOQwT-jcdqsP7iwhWR3CHDqIzHIUpGuK-7U0fK9kNtWXUbPaQCGumW-IdugTG-ElhnkVJQI1wqVDzKVPNBqbEWkA5ctQRMmH1RK7_9z3mrIm1CgCZFCUoEhkCX5nR_BzmECY"
                ctaIcon="inventory_2"
                ctaLabel="Manage Items"
                onClick={onClickItems}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// ------------------------
// Card Component
// ------------------------
function Card({
  title,
  description,
  imgUrl,
  ctaIcon,
  ctaLabel,
}: {
  title: string;
  description: string;
  imgUrl: string;
  ctaIcon: string; // material symbol name
  ctaLabel: string;
  onClick?: () => void;
}) {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-[#1a1e24] shadow-lg transition-shadow duration-300 hover:shadow-[0_0_0_2px_var(--primary-color)]/10">
      <div
        className="h-40 sm:h-48 bg-center bg-cover"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <h3 className="text-lg font-bold leading-tight">{title}</h3>
          <p className="mt-2 text-sm text-[#9dabb9]">{description}</p>
        </div>
        <button
          onClick={() => navigate("/items")}
          className="mt-6 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-[var(--primary-color)] text-white text-sm font-bold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)] focus:ring-offset-[#1a1e24]"
        >
          <span className="material-symbols-outlined">{ctaIcon}</span>
          <span>{ctaLabel}</span>
        </button>
      </div>
    </div>
  );
}
