"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useState, useCallback, useMemo} from "react";
import nextConfig from "../next.config";
import SwipeableTabs from "@/components/ui/swipeable-tabs";
import Typing from "@/components/ui/type";
import Snippet from "@/components/ui/snippet";
import Image from "next/image"
import Snowfall from "react-snowfall";
import GlowText from "@/components/ui/glow-text";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import particle1 from "@/public/json/ts-particle1.json";
import particle2 from "@/public/json/ts-particle2.json";
import particle3 from "@/public/json/ts-particle3.json";
import particle4 from "@/public/json/ts-particle4.json";
import particle5 from "@/public/json/ts-particle5.json";
import { BookIcon, Check, ChevronsUpDown, X, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { loadSlim } from "@tsparticles/slim";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Book, { BookHeader, BookTitle, BookDescription } from "@/components/ui/book";

const particlememo = React.memo(Particles);

export default function Home() {
  const [showBook, setshowBook] = useState<boolean>(true);
  const [fadeOutBook, setFadeOutBook] = useState<boolean>(false);
  const [fadeInContent, setFadeInContent] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [init, setInit] = useState(false);

  const BASE_PATH = nextConfig.basePath || "";

  const handleShowBook = () => {
    setFadeOutBook(true);
    setTimeout(() => {
      setFadeInContent(true);
      setshowBook(false);
    }, 500);
  };

  const handleCloseBook = () => {
    setFadeInContent(false);
    setTimeout(() => {
      setFadeOutBook(false);
      setshowBook(true);
    }, 500);
  };
  type ParticleConfig = {
    Geometric: any;
    PolygonMask: any;
    NYANCAT: any;
    Parallax: any;
    Basic: any;
  };
  const particlesconf: ParticleConfig = useMemo(() => ({
    Geometric: particle1,
    PolygonMask: particle2,
    NYANCAT: particle3,
    Parallax: particle4,
    Basic: particle5,
  }), []);
  useEffect(() => {
    console.log("Initialized");
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const handleSelectparticles = useCallback((currentval: string) => {
    setValue(currentval === value ? "" : currentval);
    setOpen(false);
  }, [value]);


  return (
    <div>
      {value === "" || value === "Snowfall" ? <Snowfall /> : null}
      {value && value !== "Snowfall" && (
        <Particles options={particlesconf[value as keyof ParticleConfig]} className="fixed top-0 left-0 w-full h-full z-0" />
      )}

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="absolute top-4 left-4">
            <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] p-4 box-border relative">
              {value ? Object.keys(particlesconf).find((key) => key === value) : "Select effects..."}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>Nothing here...</CommandEmpty>
              <CommandGroup>
                {Object.entries(particlesconf).map(([key, config]) => (
                  <CommandItem key={key} onSelect={() => handleSelectparticles(key)}>
                    {key}
                    <Check className={`ml-auto ${value === key ? "opacity-100" : "opacity-0"}`} />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>


      <div className="flex justify-center items-center h-screen ">
        {showBook ? (
          <div
            onClick={handleShowBook}
            className={`cursor-pointer transition-opacity duration-500 ${fadeOutBook ? "opacity-0" : "opacity-100"
              }`}
          >
            <Book size="sm" radius="md">
              <BookHeader>
                <BookIcon size={20} />
              </BookHeader>
              <BookTitle>Book of about Σ</BookTitle>
              <BookDescription>Click to open</BookDescription>
            </Book>
          </div>
        ) : (
          <div
            className={`relative rounded-lg border overflow-hidden backdrop-blur-sm transition-opacity duration-500 ${fadeInContent ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="items-center">
              <Image
                src={`${BASE_PATH}/b.png`}
                alt="Background Image"
                width={650}
                height={300}
                style={{ objectFit: "cover" }}
                priority={true}
              />
            </div>
            <div className="flex justify-center items-center mb-2 ">
              <Avatar className="rounded-full border border-muted-foreground/50 w-16 h-16">
                <AvatarImage src={`${BASE_PATH}/lovelang.png`} fetchPriority="high" />
                <AvatarFallback>IC</AvatarFallback>
              </Avatar>
            </div>

            <div className="text-center">
              <div className="absolute top-2 right-2">
                <X
                  size={24}
                  onClick={handleCloseBook}
                  className="cursor-pointer"
                />
              </div>

              <h1 className="text-xl font-medium">Sigma</h1>

              <div className="flex justify-center"> {/*Status message*/}
                <Typing>I{"'"}m so busy{'.'}</Typing>
              </div>
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="flex gap-2 justify-center">
                  <Badge size="sm" variant="blue-subtle" className="my-auto">
                    Student
                  </Badge>
                  <Badge size="sm" variant="green" className="my-auto">
                    Developer
                  </Badge>
                  <Badge size="sm" variant="amber-subtle" className="my-auto">
                    Traveler
                  </Badge>
                </div>
              </div>
            </div>

            <SwipeableTabs
              tabs={[
                {
                  label: "About me",
                  content: (
                    <div className="p-4 px-2">
                      <div className="text-center">
                        <div className="flex flex-col gap-0.5 text-nowrap ">
                          <p className="text-pretty text-gray-50 text-muted-foreground text-lg">
                            Name: Sigma, A777
                          </p>
                          <div className="text-pretty text-muted-foreground text-base text-gray-100" >
                            <p>
                              Age: 16
                            </p>
                            <p>
                              Country: Japan
                            </p>
                            <p>
                              Hobby: Programming, cycling, trip
                            </p>
                            <p>
                              Skill: C/++/#, ReverseEngineering
                            </p>
                            <p>
                              Project: Disassembler, OS dev
                            </p>
                            <p>
                              Gdi trojan(some time i develop)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "My creations",
                  content: (
                    <div className="p-4 px-2">
                      <div className="text-center text-nowrap">
                        <p className="text-pretty text-muted-foreground text-gray-50 font-semibold text-lg mb-1">
                          My creations
                        </p>
                        <p className="text-pretty text-muted-foreground text-base mb-2">
                          Nothing...
                        </p>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "Contacts",
                  content: (
                    <div className="p-4 rounded font-bold">
                      <div className="flex items-center flex-col mb-6 text-base">
                        <p>
                          Discord
                        </p>
                        <Snippet text="https://discordapp.com/users/1221751741649780780" className="w-[200px]" />
                        <p className="mt-2">
                          Telegram
                        </p>
                        <Snippet text="https://t.me/Athree7" className="w-[200px]" />
                      </div>
                    </div>
                  ),
                },
              ]}
              onTabChange={(index, label) =>
                console.log(`Tab Changed: Index=${index}, Label=${label}`)
              }
            />
            <div className="flex flex-col relative border-t overflow-hidden items-center text-center ">
              <p className="text-gray-400 text-base mt-2 mb-2">Made with {" "}
                {
                  <Link href={"https://ui.3x.gl"}>
                    <GlowText className="text-2xl sm:text-3xl lg:text-base font-medium">
                      x/ui
                    </GlowText>
                  </Link>
                } ♡</p>
              <p className="text-gray-400 text-sm mb-2">thanks tom to contribute this site! {"<"}3</p>
              <Link href={"https://github.com/athree7/athree7.github.io"}>
                <SiGithub color='#ffffff' size={24} className="mb-2" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
