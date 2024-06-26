"use client";

import { getRoom, isRoomConnected } from "@/redux/slices/roomSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Game from "./game";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CopyButton from "@/components/copy-button";

export default function Room() {
  const connectedToRoom = useSelector(isRoomConnected);
  const room = useSelector(getRoom);
  const router = useRouter();

  useEffect(() => {
    if (connectedToRoom === false) {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedToRoom]);

  return (
    <div className="flex flex-col md:min-h-screen h-auto items-center">
      <Game />
      <div className="flex gap-x-[2px] p-1 w-full justify-center">
        <Input
          value={room?.id}
          className="font-medium md:w-[40%] w-full rounded-[2px] focus:outline-none focus:shadow-none focus:border-none"
          readOnly
        />
        <Button className="bg-green-500 hover:bg-green-600 rounded-[2px] ">
          <CopyButton value={room?.id ?? ""}>
            <div>Copy</div>
          </CopyButton>
        </Button>
      </div>
    </div>
  );
}
