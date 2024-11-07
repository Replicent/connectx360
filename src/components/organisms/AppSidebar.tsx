import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  BarChartIcon,
  EnvelopeClosedIcon,
  GearIcon,
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

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChartIcon,
  },
  {
    title: "Proposals",
    url: "/proposals",
    icon: EnvelopeClosedIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: GearIcon,
  },
];

const AppSidebar = () => {
  const { user, logOut } = useFirebaseAuth();

  return (
    <Sidebar>
      <SidebarHeader>ConnectX360</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
