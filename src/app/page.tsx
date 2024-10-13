"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateRepoName } from "@/utils/name.util";
import { User2, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";

const GithubIcon = () => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="currentColor"
      stroke="currentColor"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
};
export default function Component() {
  const [repoName, setRepoName] = useState<string>("");

  const generateAndSetName = () => {
    setRepoName(generateRepoName());
  };
  useEffect(() => {
    generateAndSetName();
  }, []);

  const handleGenerateName = () => {
    generateAndSetName();
  };

  return (
    <div className="flex flex-col h-screen w-screen text-white">
      <div className="flex-1 flex flex-col w-full">
        {/* Content */}
        <main className="flex-1 overflow-auto p-6 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-2">Name Generator</h1>
          <p className="text-gray-400 mb-8 font-semibold text-sm">
            Stand out with names as unique as your vision.
          </p>
          <div className="w-full max-w-2xl flex items-center gap-2">
            <Input
              className="w-full bg-gray-900 border-gray-700 rounded-md"
              placeholder="Describe your project"
              disabled
              value={repoName}
            />
            <Button
              className=" bg-[#10b981] hover:bg-[#0d9668]"
              size="icon"
              onClick={handleGenerateName}
            >
              <RefreshCcw className="h-6 w-6" />
            </Button>
          </div>
        </main>
      </div>
      <footer className="p-4 text-center text-sm text-gray-400">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-white">
            <GithubIcon />
          </a>
          <a href="#" className="hover:text-white">
            <User2 />
          </a>
        </div>
      </footer>
    </div>
  );
}
