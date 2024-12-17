"use client";
import React, { useState } from "react";
import Book, {
  BookHeader,
  BookTitle,
  BookDescription,
} from "@/components/ui/book";
import nextConfig from "../next.config";
const BASE_PATH = nextConfig.basePath || "";
import { BookIcon } from "lucide-react";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SwipeableTabs from "@/components/ui/swipeable-tabs";
import Typing from "@/components/ui/type";
import Snippet from "@/components/ui/snippet";
import Image from "next/image"
import Snowfall from "react-snowfall";

export default function Home() {
  const [showBook, setshowBook] = useState<boolean>(true);
  const [fadeOutBook, setFadeOutBook] = useState<boolean>(false);
  const [fadeInContent, setFadeInContent] = useState<boolean>(false);

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

  return (
    <div className="flex justify-center items-center h-screen">
      <Snowfall />
      {showBook ? (
        <div
          onClick={handleShowBook}
          className={`cursor-pointer transition-opacity duration-500 ${fadeOutBook ? "opacity-0" : "opacity-100"
            }`}
        >
          <Book size="sm">
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
              <Typing>I Hate study {">"}:(</Typing>
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
                      <div className="flex flex-col gap-0.5 text-nowrap">
                        <p className="text-pretty text-gray-50 text-muted-foreground text-lg">
                          Name: Sigma, A777
                        </p>
                        <p className="text-pretty text-gray-100 text-muted-foreground text-base">
                          Age: 16
                        </p>
                        <p className="text-pretty text-gray-100 text-muted-foreground text-base">
                          Country: Japan
                        </p>
                        <p className="text-pretty text-gray-100 text-muted-foreground text-base">
                          Hobby: Programming, cycling, trip
                        </p>
                        <p className="text-pretty text-gray-100 text-muted-foreground text-base">
                          Skill: C/++/#, ReverseEngineering
                        </p>
                        <p className="text-pretty text-gray-100 text-muted-foreground text-base">
                          Project: Disassembler, OS dev
                        </p>
                        <p className="text-pretty text-gray-100 text-muted-foreground text-base">
                          Gdi trojan(some time i develop)
                        </p>
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
                    <div className="flex items-center flex-col mb-6">
                      <p className="text-base">Discord</p>
                      <Snippet text="https://discordapp.com/users/1221751741649780780" className="w-[200px]" />
                      <p className="text-base mt-2">Telegram</p>
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
            <p className="text-gray-400 text-base mt-4 mb-4">Made with x/ui ♡</p>
            <p className="text-gray-400 text-sm mb-4">thanks tom to contribute this site! {"<"}3</p>
          </div>
        </div>
      )}
    </div>
  );
}