import Loader from "@/components/ui/Loader";

export default function Loading() {
  return (
    // Kita bungkus lagi agar background solid menutupi konten lama
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      <Loader />
    </div>
  );
}
