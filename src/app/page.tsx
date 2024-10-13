"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateRepoName } from "@/utils/name.util";
import { useCallback, useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RefreshIcon, CopyIcon } from "@/components/icons";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/footer";

export default function Component() {
  const [repoName, setRepoName] = useState<string>("");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [randomize, setRandomize] = useState<boolean>(false);
  const { toast } = useToast();

  const generateAndSetName = useCallback(() => {
    setRepoName(
      generateRepoName({
        includeNumbers,
        randomize,
      })
    );
  }, [includeNumbers, randomize]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(repoName)
      .then(() => {
        toast({
          title: "Copied to clipboard",
          description: repoName,
          variant: "default",
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
        toast({
          title: "Failed to copy",
          description: repoName,
          variant: "destructive",
        });
      });
  };

  useEffect(() => {
    generateAndSetName();
  }, [generateAndSetName]);

  const handleGenerateName = () => {
    generateAndSetName();
  };

  return (
    <>
      <div className="flex flex-col h-screen w-screen text-white">
        <div className="flex-1 flex flex-col ">
          <main className="flex-1 overflow-auto p-6 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-2">Name Generator</h1>
            <p className="text-gray-400 mb-8 font-semibold text-sm">
              Stand out with names as unique as your vision.
            </p>
            <div className="w-full max-w-2xl flex items-center gap-2">
              <div className="w-full flex bg-gray-900 border-gray-700 rounded-md">
                <Input
                  className="md:text-xl text-md"
                  placeholder="Describe your project"
                  disabled
                  value={repoName}
                />
                {repoName !== "" && (
                  <Button
                    size="icon"
                    variant={"ghost"}
                    onClick={copyToClipboard}
                  >
                    <CopyIcon className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <Button size="icon" onClick={handleGenerateName}>
                <RefreshIcon className="h-6 w-6" />
              </Button>
            </div>
            <div className="space-y-4 mt-8">
              <div className="items-top flex space-x-2">
                <Checkbox
                  id="include-numbers"
                  checked={includeNumbers}
                  onCheckedChange={(checked) => {
                    setIncludeNumbers(!!checked.valueOf());
                  }}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="include-numbers"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Include Numbers
                  </label>
                </div>
              </div>
              <div className="items-top flex space-x-2">
                <Checkbox
                  id="randomize"
                  checked={randomize}
                  onCheckedChange={(checked) => {
                    setRandomize(!!checked.valueOf());
                  }}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="randomize"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Randomize
                  </label>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
      <Toaster />
    </>
  );
}
