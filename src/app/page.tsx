"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { generateRepoName } from "@/utils/name.util";
import { useCallback, useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  GithubIcon,
  RefreshIcon,
  UserIcon,
  CopyIcon,
} from "@/components/icons";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
          {/* Content */}
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
        <footer className="p-4 text-center text-sm text-gray-400">
          <div className="flex justify-center space-x-6">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant={"ghost"}>
                  <GithubIcon />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-center items-center ">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">
                      @repo-sage-name-gen
                    </h4>
                    <p className="text-xs font-medium">
                      An application to generate repository names
                    </p>
                    <p className="text-xs">
                      created and maintained by @ansarisaqlain987
                    </p>
                    <div className="items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        <a
                          href="https://github.com/ansarisaqlain987/repo-sage-name-gen"
                          className="hover:text-white"
                          target="_blank"
                        >
                          Link to Github Repo
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant={"ghost"}>
                  <UserIcon />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-center items-center ">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@ansarisaqlain987</h4>
                    <p className="text-xs font-medium">Full Stack Developer</p>
                    <p className="text-xs">Javascript | Typescript</p>
                    <div className="items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        <a
                          href="https://www.ansarisaqlain.com/"
                          className="hover:text-white"
                          target="_blank"
                        >
                          Link to Portfolio
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </footer>
      </div>
      <Toaster />
    </>
  );
}
