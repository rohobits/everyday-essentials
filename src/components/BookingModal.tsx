import { useEffect } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function BookingModal({ open, onClose }: Props) {
  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL as string | undefined;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl h-[80vh] bg-white rounded-xl2 shadow-soft overflow-hidden">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-3 top-3 rounded-lg px-3 py-1 bg-ink/90 text-white"
        >
          ✕
        </button>
        {bookingUrl ? (
          <iframe
            title="Square Booking"
            src={bookingUrl}
            className="w-full h-full border-0"
            loading="eager"
          />
        ) : (
          <div className="h-full flex items-center justify-center p-10 text-center">
            <div>
              <h3 className="h2 mb-2">Add your Square booking URL</h3>
              <p className="text-slate">
                Set <code>VITE_SQUARE_BOOKING_URL</code> in a <code>.env</code> file.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
