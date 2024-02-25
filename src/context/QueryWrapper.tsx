import { QueryClientProvider } from "react-query";
import { queryClient } from "./QueryConfigs";

const QueryWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>{children}</div>
    </QueryClientProvider>
  );
};

export { QueryWrapper };
