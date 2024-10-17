export default function Download() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg max-w-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Download Hardware Diagnostics Tool</h1>
          <a
            href="https://github.com/Sattei/Hackonanz-Team-Blue/archive/refs/heads/main.zip"
            download
          >
            <button className="bg-green-500 hover:bg-green-700 mt-8 mb-16 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
              Download Now
            </button>
          </a>
          <p className="text-lg text-gray-700 mb-4">
            This tool performs thorough diagnostics at the BIOS level, checking hardware components 
            such as CPU, memory, and storage for potential defects and issues. It can be used as a 
            bootable diagnostic program for in-depth hardware analysis.
          </p>
  
          <div className="text-left mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Features:</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>CPU stress test and performance benchmarking</li>
              <li>Memory diagnostics to detect faulty modules</li>
              <li>Storage health check (SSD/HDD)</li>
              <li>Peripheral device and interface checks</li>
              <li>Bootable with Rufus for standalone operation</li>
            </ul>
          </div>
  
          <div className="text-left mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">How to Run:</h2>
            <p className="text-gray-600 mb-2">
              <strong>Hackonanz-Team-Blue</strong> BIOS-level hardware detection for Linux systems. To run our tool:
            </p>
            <ol className="list-decimal list-inside text-gray-600">
              <li>Extract the code to your desired folder.</li>
              <li>In the installed folder, make the executable file by running:
                <pre className="bg-gray-200 p-2 rounded-md mt-2 text-sm">chmod +x select_and_run.sh</pre>
              </li>
              <li>Open <code>select_and_run.sh</code> in your terminal via:
                <pre className="bg-gray-200 p-2 rounded-md mt-2 text-sm">sudo ./select_and_run.sh</pre>
              </li>
              <li>Follow the on-screen instructions, and watch our tool do the rest.</li>
            </ol>
            <p className="text-sm text-gray-500 mt-2">
              Note: Use the space bar to select your preferred choice. If prompted for a sudo password, enter it as it's required for displaying advanced information.
            </p>
          </div>
  
  
          <p className="text-sm text-gray-500 mt-4">
            File size: 2.1 MB | Version 1.0.0 | Last updated: Oct 17, 2024
          </p>
        </div>
      </div>
    );
  }
  