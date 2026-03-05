import { Wallet } from "lucide-react";

export const AppLogo = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 flex h-11 w-11 items-center justify-center rounded-xl shadow-lg">
      <Wallet className="h-6 w-6 text-white" />
    </div>
    <h1 className="text-xl font-bold tracking-tight text-gray-900">G.R.O.W.T.H</h1>
  </div>
);

export default AppLogo;