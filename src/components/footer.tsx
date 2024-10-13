import { FooterItems } from "@/data/info";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Button } from "./ui/button";
import { RightArrawIcon } from "./icons";

export const Footer = () => {
  return (
    <footer className="p-4 text-center text-sm text-gray-400">
      <div className="flex justify-center space-x-6">
        {FooterItems.map((item, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <Button variant={"ghost"}>
                <item.Icon />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-center items-center ">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">{item.name}</h4>
                  <p className="text-xs font-medium">{item.subHeading}</p>
                  <p className="text-xs">{item.details}</p>
                  <div className="items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      <a
                        href={item.link}
                        className="hover:text-white flex items-center justify-center gap-2"
                        target="_blank"
                      >
                        <span>Link to {item.linkName} </span>
                        <RightArrawIcon className="w-3 h-3" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </footer>
  );
};
