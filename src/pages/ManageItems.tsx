import { useNavigate } from "react-router-dom";

export default function ManageItemsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#111418] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#283039] px-6 md:px-10 py-3">
        <div className="flex items-center gap-3 text-white">
          <div className="size-7">
            <svg
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-[-0.015em]" onClick={() => navigate("/dashboard")}>ShoppingSync</h2>
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium text-gray-400">
          <a href="#" className="text-white transition-colors hover:text-white">
            Shopping Lists
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Inventory
          </a>
          <a href="#" className="transition-colors hover:text-white">
            Recipes
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-gray-400 transition-colors hover:bg-[#283039] hover:text-white">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div
            className="size-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://lh3.googleusercontent.com/aida-public/AB6AXuBQZIJ-cJHPWKBbG74xNwTfcHVgniQHBD-iUUVzkIhpJvAQhz0cAxFVySSn3ceLyyOJdQpqyfi9Nc38trzVSrZe-OCxaTqWRx2GZVqGLdW8F57vGG4Ds0NTFw-Ix1XEMYO3T9RrZX3vUyHpjDCQby-GFs52MPoNd6WKFiaz0ljmFQuCN2Xxn4Ciii4kALp7uhGhg_AM2Sdb8BXvLEf5EUjBZFAJQnbu8_lh8V0nqph19HGKVT6rcZCmPVR-A78LKSFF1APbHBpc63A)",
            }}
          />
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-1 justify-center px-6 md:px-20 lg:px-40 py-8">
        <div className="flex w-full max-w-[960px] flex-col">
          {/* Header Row */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Manage Items
            </h1>
            <button className="flex h-10 items-center justify-center gap-2 rounded-md bg-[#137fec] px-4 text-sm font-bold text-white transition-colors hover:bg-[#137fec]/90">
              <span className="material-symbols-outlined">add</span>
              <span className="truncate">Add New Item</span>
            </button>
          </div>

          {/* Search & Filters */}
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <div className="relative min-w-[300px] flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#9dabb9]">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                type="search"
                placeholder="Search items..."
                className="form-input h-12 w-full rounded-md border-none bg-[#283039] pl-10 text-base text-white placeholder:text-[#9dabb9] focus:outline-none focus:ring-2 focus:ring-[#137fec]"
              />
            </div>
            <div className="flex gap-4">
              <button className="flex h-12 items-center gap-2 rounded-md bg-[#283039] px-4 text-sm font-medium text-white transition-colors hover:bg-[#3b4754]">
                <span>Category</span>
                <span className="material-symbols-outlined text-gray-400">arrow_drop_down</span>
              </button>
              <button className="flex h-12 items-center gap-2 rounded-md bg-[#283039] px-4 text-sm font-medium text-white transition-colors hover:bg-[#3b4754]">
                <span>Household</span>
                <span className="material-symbols-outlined text-gray-400">arrow_drop_down</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-md border border-[#3b4754] bg-[#1c2127]">
            <table className="w-full text-left">
              <thead className="bg-[#1c2127] text-white">
                <tr>
                  <th className="px-6 py-4 font-medium">Item Name</th>
                  <th className="px-6 py-4 font-medium">Quantity</th>
                  <th className="px-6 py-4 font-medium">Household</th>
                  <th className="px-6 py-4 text-center font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3b4754]">
                {[
                  { name: "Milk", qty: "1 gallon" },
                  { name: "Eggs", qty: "1 dozen" },
                  { name: "Bread", qty: "2 loaves" },
                  { name: "Apples", qty: "5" },
                  { name: "Chicken", qty: "2 lbs" },
                ].map((item) => (
                  <tr
                    key={item.name}
                    className="text-white transition-colors hover:bg-[#283039]"
                  >
                    <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4 text-[#9dabb9]">{item.qty}</td>
                    <td className="px-6 py-4 text-[#9dabb9]">Main House</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-4">
                        <button className="transition-colors hover:text-[#137fec]">
                          <span className="material-symbols-outlined">edit</span>
                        </button>
                        <button className="transition-colors hover:text-red-500">
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
