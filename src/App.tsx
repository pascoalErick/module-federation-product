import { Suspense } from "react";

const App = () => {
  //@ts-ignore
  const CoreMF = React.lazy(() => import("CoreMF/App"));

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <CoreMF />
    </Suspense>
  );
};

export default App;
