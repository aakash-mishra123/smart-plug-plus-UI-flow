import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../shared/Tabs";

type TabContentComponents = {
  id: number;
  value: string;
  children: ReactNode;
};

type TabHeadingComponent = {
  heading: string;
  title: string;
  onTabClick?: () => void;
};

type NavbarProps = {
  tabHeadings: TabHeadingComponent[];
  tabChildComponents: TabContentComponents[];
};

const Navbar = ({ tabHeadings, tabChildComponents }: NavbarProps) => (
  <Tabs
    defaultValue={tabHeadings[0].heading}
    className="!ring-opacity-0 !dark:ring-opacity-0 !ring-white !dark:ring-white"
  >
    <TabsList
      variant="line"
      className="pt-4 px-4 mr-2 font-roboto font-thin !ring-opacity-0 !ring-white !dark:ring-white !dark:ring-opacity-0 border-none text-black !dark:border-gray-100"
    >
      {tabHeadings.map((item: TabHeadingComponent, index: number) => {
        return (
          <TabsTrigger
            key={index}
            value={item.heading}
            onTabClick={item.onTabClick}
            className="text-black text-md w-1/2 pb-4"
          >
            {item.title}
          </TabsTrigger>
        );
      })}
    </TabsList>
    <div className="mt-0 mb-32">
      {tabChildComponents.map((item: TabContentComponents) => {
        return (
          <TabsContent key={item.id} value={item.value}>
            {item.children}
          </TabsContent>
        );
      })}
    </div>
  </Tabs>
);

export default Navbar;
