import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  theme,
} from "@chakra-ui/react";
import ShareWidget from "./Widgets/ShareWidget";

const peopleData1 = [
  { name: "Tom Cook", id: "1001" },
  { name: "John Doe", id: "1002" },
  { name: "Arth G", id: "1003" },
  { name: "Honey G", id: "1004" },
  { name: "Symbol S", id: "1005" },
  { name: "Trambak R", id: "1006" },
  { name: "Prashant C", id: "1007" },
  { name: "Sanketh K", id: "1008" },
];

const peopleData2 = [
  { name: "Tom Cook", id: "1001" },
  { name: "John Doe", id: "1002" },
  { name: "Prashant C", id: "1007" },
  { name: "Sanketh K", id: "1008" },
];

const peopleData3 = [
  { name: "Tom Cook", id: "1001" },
  { name: "John Doe", id: "1002" },
  { name: "Arth G", id: "1003" },
];

export const App = () => {
  const [data, setData] = React.useState<Record<string, any[]>>({});
  const sendData = (key: string) => (value: any[]) =>
    setData({ ...data, [key]: value });
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="left" p="8">
        <VStack>
            <ShareWidget sendData={sendData('one')} people={peopleData1} />
            <br />
            {data['one']?.map((o) => (
              <>&nbsp; {o.name}</>
            ))}
            <br />
            <br />
            <br />

            <ShareWidget sendData={sendData('two')} people={peopleData2} />
            <br />
            {data['two']?.map((o) => (
              <>&nbsp; {o.name}</>
            ))}
            <br />
            <br />
            <br />

            <ShareWidget sendData={sendData('three')} people={peopleData3} />
            <br />
            {data['three']?.map((o) => (
              <>&nbsp; {o.name}</>
            ))}
            <br />
            <br />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};