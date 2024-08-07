import React from 'react';
import StackPerspective3 from "@/components/icons/stack-perspective-3";
import User3 from "@/components/icons/user-3";
import {Drawer, DrawerTrigger} from "@/components/ui/drawer";
import NotesDrawer from "@/components/drawers/notes-drawer";
import {MenubarItem} from './menubar-item';

function Menubar() {
    return (
        <div className={"fixed bottom-0 left-0 w-dvw h-20 flex justify-center py-3 z-30"}>
            <div className={"flex items-center rounded-full border border-accent/20 shadow h-14 px-2 gap-2 bg-background"}>
                <Drawer>
                    <DrawerTrigger asChild>
                        <MenubarItem icon={<StackPerspective3/>} label={"Notes"} href={"/"}/>
                    </DrawerTrigger>
                    <NotesDrawer />
                </Drawer>

                <MenubarItem icon={<User3 />} label={"You"} href={"/"} preview/>
            </div>
        </div>
    );
}

export default Menubar;