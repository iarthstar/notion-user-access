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
  Input,
  InputGroup,
  InputRightAddon,
  ListItem,
  UnorderedList,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { ArrowForwardIcon, InfoIcon } from "@chakra-ui/icons";
import { Select } from "chakra-react-select";
import { Props } from "./EntitySelection.types";

const accessOptions = [
  { label: "Full access", value: "full-access" },
  { label: "Can edit", value: "can-edit" },
  { label: "Can view", value: "can-view" },
  { label: "No access", value: "no-access" },
];

const EntitySelection: React.FC<Props> = ({
  people,
  selected: finalSelected,
  setSelected: setFinalSelected,
}) => {
  const firstFieldRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] =
    React.useState<Array<{ name: string; id: string }>>(finalSelected);
  const [access, setAccess] = React.useState(accessOptions[0]);
  const [searchStr, setSearchStr] = React.useState("");

  const selectedIds = selected.map((o) => o.id);

  const listData = people.filter(({ id }) => !selectedIds.includes(id));

  const filteredListData = listData.filter(({ name }) =>
    name.toLowerCase().includes(searchStr.toLowerCase())
  );
  return (
    <Popover
      isOpen={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      initialFocusRef={firstFieldRef}
      matchWidth
    >
      <PopoverTrigger>
        <InputGroup size="sm">
          <Input placeholder="People, emails, groups" />
          <InputRightAddon children="Invite" />
        </InputGroup>
      </PopoverTrigger>
      <PopoverContent w="xl" mt="-10">
        <PopoverHeader bgColor="gray.100">
          <HStack>
            <HStack mr="2">
              {selected.map(({ name, id }, index) => (
                <Tag bgColor="gray.300">
                  <TagLabel>{name}</TagLabel>
                  <TagCloseButton
                    onClick={() => {
                      const newSelected = [...selected];
                      newSelected.splice(index, 1);
                      setSelected(newSelected);
                    }}
                  />
                </Tag>
              ))}
            </HStack>
            <Input
              variant="unstyled"
              flexGrow="1"
              value={searchStr}
              onChange={(e) => setSearchStr(e.target.value)}
              ref={firstFieldRef}
              placeholder="People, emails, groups"
            />
            <Select
              chakraStyles={{
                container: (provided, state) => ({ ...provided, w: "240px" }),
              }}
              size="sm"
              value={access}
              onChange={(o) => {
                setAccess(o ?? accessOptions[0]);
              }}
              options={accessOptions}
            />
            <Button
              size="sm"
              px="6"
              variant="outline"
              onClick={() => {
                setFinalSelected(selected);
                setOpen(false);
              }}
            >
              Invite
            </Button>
          </HStack>
        </PopoverHeader>
        <PopoverBody p="4">
          <VStack alignItems="flex-start">
            <Text fontSize="sm">Select a person</Text>
            <UnorderedList listStyleType="none">
              {filteredListData.map((o) => (
                <ListItem>
                  <Button
                    variant="ghost"
                    size="xs"
                    leftIcon={<ArrowForwardIcon />}
                    onClick={() => setSelected([...selected, o])}
                  >
                    {o.name}
                  </Button>
                </ListItem>
              ))}
            </UnorderedList>
          </VStack>
        </PopoverBody>
        <PopoverFooter display="flex" alignItems="center" bgColor="gray.100">
          <Box pr="2">
            <InfoIcon />
          </Box>
          <Text align="left" fontWeight="normal" fontSize="sm">
            learn about sharing
          </Text>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default EntitySelection;
