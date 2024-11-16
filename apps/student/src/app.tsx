import AntButton from "@repo/ui/button";
import AntSpin from "@repo/ui/spin";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col p-8 gap-8">
      <div className="flex items-center gap-4">
        <h3>Button:</h3> <AntButton>Button</AntButton>
      </div>
      <div className="flex items-center gap-4">
        <h3>Spin:</h3> <AntSpin />
      </div>
    </div>
  );
}
