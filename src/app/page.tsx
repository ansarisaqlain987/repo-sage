import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUp } from "lucide-react";

export default function Component() {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Content */}
        <main className="flex-1 overflow-auto p-6 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-2">What can I help you ship?</h1>
          <p className="text-gray-400 mb-8">
            Generate UI, ask questions, debug, execute code, and much more.
          </p>
          <div className="w-full max-w-2xl flex items-center gap-2">
            <Input
              className="w-full bg-gray-900 border-gray-700 rounded-md"
              placeholder="Ask v0 a question..."
            />
            <Button className=" bg-[#10b981] hover:bg-[#0d9668]" size="icon">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Button size="sm">Generate a multi-step onboarding flow</Button>
            <Button size="sm">How can I structure LLM output?</Button>
            <Button size="sm">Write code to implement a min heap</Button>
          </div>
        </main>

        {/* Footer */}
        {/* <footer className="p-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-white">
              FAQ
            </a>
            <a href="#" className="hover:text-white">
              Pricing
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              AI Policy
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              v0 Legacy
            </a>
            <a href="#" className="hover:text-white">
              Vercel
            </a>
          </div>
        </footer> */}
      </div>
    </div>
  );
}
