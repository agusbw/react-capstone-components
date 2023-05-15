import Button from "./components/Button";
import Dialog from "./components/Dialog";
import React from "react";

function App() {
  const [isConfirmationBoxOpen, setIsConfirmationBoxOpen] =
    React.useState(false);

  const handleDelete = () => {
    console.log("Fungsi Delete Jalan");
    setIsConfirmationBoxOpen(false);
  };

  const handleCancelDelete = () => {
    console.log("Cancel Delete");
    setIsConfirmationBoxOpen(false);
  };
  return (
    <>
      <div className="m-20">
        <h1 className="mb-8 text-5xl font-bold">Components</h1>
        <p className="text-2xl font-bold">1. Button</p>
        <div className="flex gap-4">
          <div>
            <p className="my-2 text-xl font-bold">Variant</p>
            <div className="flex w-1/3 gap-2">
              <Button variant="green">Primary</Button>
              <Button variant="outline-green">Outline</Button>
              <Button variant="green" className={"rounded-full"}>
                Rounded
              </Button>
              <Button variant="gray">Primary</Button>
              <Button variant="lightgreen">Primary</Button>
            </div>
          </div>
          <div>
            <p className="my-2 text-xl font-bold">Sizing</p>
            <div className="flex w-1/3 gap-2">
              <Button variant="green" className={"btn-xs"}>
                Tiny
              </Button>
              <Button variant="green" className={"btn-sm"}>
                Small
              </Button>
              <Button variant="green" className={"rounded-full btn-md"}>
                Medium
              </Button>
              <Button variant="green" className="btn-lg">
                Large
              </Button>
              <Button
                variant="green"
                className="w-[300px] h-[37px] py-2 px-[10px]"
              >
                Custom
              </Button>
            </div>
          </div>
        </div>
        <p className="mt-10 text-2xl font-bold">2. Dialog</p>
        <div className="flex gap-3">
          <Button
            variant="green"
            onClick={() => setIsConfirmationBoxOpen(true)}
          >
            Coba Hapus
          </Button>
          <Dialog
            text="Yakin ingin menghapus data tanaman ini?"
            confirmText={"Hapus"}
            cancelText={"Kembali"}
            onConfirm={handleDelete}
            onCancel={handleCancelDelete}
            isOpen={isConfirmationBoxOpen}
          />
        </div>
      </div>
    </>
  );
}

export default App;
