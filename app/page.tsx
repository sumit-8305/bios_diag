"use client"
import { useRouter } from 'next/navigation'; // Updated import

export default function Home() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/download'); // Navigate to /download page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">BIOS Level Hardware Diagnostic Tool</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        This tool will help you run diagnostics at the BIOS level to detect hardware defects
        and issues with your PC. It performs thorough checks on various components including
        the CPU, memory, and storage.
      </p>
      <button
        onClick={handleRedirect}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Download Diagnostics Tool
      </button>
    </div>
  );
}
