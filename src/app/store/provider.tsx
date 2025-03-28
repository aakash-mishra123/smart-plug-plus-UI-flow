"use client"; // ✅ Required for client components

import { Provider } from "react-redux";
import store from "../store"; // Adjust path if needed
import QueryProvider from "../providers/QueryProvider";
export default function Providers({ children }: { children: React.ReactNode }) {
  return;
  <Provider store={store}>
    <QueryProvider>{children}</QueryProvider>
  </Provider>;
}
