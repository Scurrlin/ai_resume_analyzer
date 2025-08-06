import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const WipeApp = () => {
  const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FSItem[]>([]);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth?next=/wipe");
    }
  }, [isLoading]);

  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path);
    });
    await kv.flush();
    loadFiles();
  };

  if (isLoading) {
    return (
      <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
          <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
            <div className="text-center">Loading...</div>
          </section>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg">
          <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
            <div className="text-center text-red-500">Error: {error}</div>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-start sm:items-center justify-center pt-[25vh] sm:pt-0">
      <div className="gradient-border shadow-lg w-full max-w-md">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10 w-full">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>App Data Manager</h1>
            <h2>Authenticated as: {auth.user?.username}</h2>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="text-center">
              <h3 className="font-semibold mb-3">Existing Files:</h3>
              {files.length > 0 ? (
                <div className="max-h-48 overflow-y-auto border rounded-lg p-3">
                  {files.map((file) => (
                    <div key={file.id} className="py-1 text-sm">
                      {file.name}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No files found</p>
              )}
            </div>
            
            <button
              className={`primary-gradient rounded-full py-3 px-6 cursor-pointer w-full text-lg font-semibold text-white ${files.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleDelete}
              disabled={files.length === 0}
            >
              <p>Wipe App Data</p>
            </button>
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/')}
              className="text-black hover:cursor-pointer"
            >
              Back to Homepage
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WipeApp;