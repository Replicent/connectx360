import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  MagicWandIcon,
  BarChartIcon,
  LayersIcon,
  GearIcon,
  ReaderIcon,
  PersonIcon,
  Component1Icon,
  Pencil2Icon,
  HandIcon,
} from "@radix-ui/react-icons";
import Button from "../atoms/Button";
import useFirebaseAuth from "@/hooks/auth";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Get Started",
    url: "/home",
    icon: MagicWandIcon,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChartIcon,
  },
  {
    title: "Pipeline",
    url: "/pipeline",
    icon: LayersIcon,
  },
  {
    title: "Payments",
    url: "/#",
    icon: ReaderIcon,
  },
  {
    title: "Clients",
    url: "/#",
    icon: PersonIcon,
  },
  {
    title: "Services",
    url: "/#",
    icon: Component1Icon,
  },
  {
    title: "Templates",
    url: "/#",
    icon: Pencil2Icon,
  },
  {
    title: "Settings",
    url: "/#",
    icon: GearIcon,
  },
  {
    title: "Help & Support",
    url: "/#",
    icon: HandIcon,
  },
];

const AppSidebar = () => {
  const { user, logOut } = useFirebaseAuth();
  const pathName = usePathname();
  const navButtonClass = (url: string) =>
    cn(
      "my-1 font-semibold py-[22px] hover:bg-indigo-600 hover:text-white",
      pathName === url ? "bg-indigo-600 text-white" : ""
    );
  return (
    <Sidebar>
      <SidebarHeader className="text-xl md:text-2xl font-bold">
        ConnectX360
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={navButtonClass(item.url)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Menubar className="flex h-max">
          <MenubarMenu>
            <MenubarTrigger className="flex items-center w-full hover:cursor-pointer">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Label className="mx-auto">{user?.phoneNumber?.slice(3)}</Label>
            </MenubarTrigger>
            <MenubarContent align="end" side="top">
              <MenubarItem>
                <Button onClick={logOut}>Log Out</Button>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
