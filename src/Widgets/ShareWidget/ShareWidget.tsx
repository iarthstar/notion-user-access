import * as React from "react";
import {
  Box,
  Text,
  VStack,
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  PopoverFooter,
  HStack,
  Switch,
} from "@chakra-ui/react";
import { ExternalLinkIcon, InfoIcon, LinkIcon } from "@chakra-ui/icons";
import { Props } from "./ShareWidget.types";
import EntitySelection from "../../Components/EntitySelection";
import { Person } from "../../App.types";

const ShareWidget: React.FC<Props> = ({ people, sendData }) => {
  const [selected, setSelected] = React.useState<Person[]>([]);

  React.useEffect(() => {
    sendData(selected);
  }, [selected]);

  return (
    <Popover matchWidth>
      <PopoverTrigger>
        <Button rightIcon={<ExternalLinkIcon />}>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent w="xl">
        <PopoverHeader display="flex" alignItems="center">
          <Box pl="2" pr="4">
            <InfoIcon />
          </Box>
          <VStack alignItems="flex-start" flexGrow="1">
            <Text textAlign="left" fontWeight="medium" fontSize="sm">
              Share to web
            </Text>
            <Text textAlign="left" fontWeight="normal" fontSize="xs">
              Publish and share link with anyone
            </Text>
          </VStack>
          <Box>
            <Switch id="email-alerts" />
          </Box>
        </PopoverHeader>
        <PopoverBody p="4">
          <VStack>
            <EntitySelection
              people={people}
              selected={selected}
              setSelected={(data) => { setSelected(data); }}
            />
            {selected.map((o) => (
              <HStack w="100%">
                <Box pr="2">
                  <InfoIcon />
                </Box>
                <VStack alignItems="flex-start" flexGrow="1">
                  <Text textAlign="left" fontWeight="medium" fontSize="sm">
                    {o.name}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </PopoverBody>
        <PopoverFooter display="flex" alignItems="center">
          <Box pr="2">
            <InfoIcon />
          </Box>
          <VStack alignItems="flex-start" flexGrow="1">
            <Text align="left" fontWeight="normal" fontSize="sm">
              learn about sharing
            </Text>
          </VStack>
          <Box>
            <Button variant="ghost" leftIcon={<LinkIcon />}>
              Copy link
            </Button>
          </Box>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ShareWidget;
