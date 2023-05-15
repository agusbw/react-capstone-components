import Button from "./Button";

export default function Dialog({
  text,
  confirmText,
  cancelText,
  isOpen,
  onConfirm,
  onCancel,
}) {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };
  return (
    <>
      <div
        className={`fixed h-48 w-[417px] px-4 py-5 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-100 rounded-lg shadow-md top-1/2 left-1/2 border-1 ${
          isOpen ? "opacity-100" : "opacity-0"
        } transition-all duration-200
        ${isOpen ? "visible" : "invisible"}
        ${isOpen ? "top-1/2" : "top-1/3"}
        `}
      >
        <h3 className="text-xl font-bold">Konfirmasi</h3>
        <p className="pt-3 text-[16px]">{text}</p>
        <div className="modal-action">
          <Button onClick={handleCancel} variant="gray">
            {cancelText ? cancelText : "Tidak"}
          </Button>
          <Button onClick={handleConfirm} variant="green">
            {confirmText ? confirmText : "Ya"}
          </Button>
        </div>
      </div>
    </>
  );
}
