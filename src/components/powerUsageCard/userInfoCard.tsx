'use client';

import { Card, Tab, TabGroup, TabList, TabPanel, TabPanels, Text, Title } from '@tremor/react';
import { dummyUserData } from '@/utils/constants';
import { IoChevronBack } from "react-icons/io5";
import { BiPencil } from "react-icons/bi";

const UserInfoCard = () => {
    return (
      <Card className="max-w-md mx-auto bg-[#ebf0f5] rounded-xl p-6 text-black">
        <IoChevronBack onClick={() => { console.log('card input')}} className="w-10 h-10 p-2 rounded-3xl bg-white text-lg text-black font-bold mt-1 " />
        
        <div className="mb-4 mt-16">
          <Title className="text-3xl font-bold flex flex-row gap-2 items-end ">
            {dummyUserData.title} <BiPencil className="text-sm mb-2 text-pink-800"/>
          </Title>
          <Text className="text-sm text-gray-500">{dummyUserData.address}</Text>
        </div>
        <div className="space-y-2 text-sm">
          <Text>
            <strong className="text-gray-700">N° Cliente:</strong> {dummyUserData.clientNumber}
          </Text>
          <Text>
            <strong className="text-gray-700">POD:</strong> {dummyUserData.pod}
          </Text>
          <Text>
            <strong className="text-gray-700">Data attivazione:</strong> {dummyUserData.activationDate}
          </Text>
          <Text>
            <strong className="text-gray-700">Offerta:</strong> {dummyUserData.offer}
          </Text>
        </div>
        
        {/* Tabs Section */}
        <TabGroup className="mt-4">
          <TabList className="rounded-xl flex flex-row gap-4 bg-tranparent">
            <Tab className="rounded-xl bg-white">Consumi</Tab>
            <Tab className="rounded-xl bg-white">Bollette</Tab>
            <Tab  className="rounded-xl bg-white">Servizi</Tab>
          </TabList>
        </TabGroup>
      </Card>
    );
  }

  export default UserInfoCard;
  