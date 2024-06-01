import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Textarea, FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";

const Index = () => {
  const [stake, setStake] = useState("");
  const [duration, setDuration] = useState("");
  const [payout, setPayout] = useState("");
  const [xmlScript, setXmlScript] = useState("");

  const generateXmlScript = () => {
    const script = `
<xml>
  <trade>
    <stake>${stake}</stake>
    <duration>${duration}</duration>
    <payout>${payout}</payout>
  </trade>
</xml>`;
    setXmlScript(script);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <IconButton aria-label="Robot Icon" icon={<FaRobot />} size="lg" />
        <Text fontSize="2xl">Deriv Trading Robot Generator</Text>
        <FormControl id="stake">
          <FormLabel>Stake</FormLabel>
          <Input value={stake} onChange={(e) => setStake(e.target.value)} placeholder="Enter stake amount" />
        </FormControl>
        <FormControl id="duration">
          <FormLabel>Duration</FormLabel>
          <Input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Enter duration" />
        </FormControl>
        <FormControl id="payout">
          <FormLabel>Payout</FormLabel>
          <Input value={payout} onChange={(e) => setPayout(e.target.value)} placeholder="Enter payout amount" />
        </FormControl>
        <Button colorScheme="teal" onClick={generateXmlScript}>
          Generate XML Script
        </Button>
        {xmlScript && (
          <FormControl id="xmlScript">
            <FormLabel>Generated XML Script</FormLabel>
            <Textarea value={xmlScript} readOnly height="200px" />
          </FormControl>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
