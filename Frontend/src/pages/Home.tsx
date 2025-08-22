import React, { useState } from "react";
import AudiobookForm from "../components/AudiobookForm";
import AudiobookList from "../components/AudiobookList";
import { Box, Button, Heading, Container, ModalOverlay, ModalContent } from "../components/ui/UiComponents";
import { MdCancel } from "react-icons/md";

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Container maxWidth="700px" p={4}>
      <Heading as="h1" fontSize={5} mb={4} textAlign="center" color={"white"}>
        AudioBook Management
      </Heading>

      <Box mb={4} textAlign="center">
        <Button
          onClick={() => setShowForm(true)}
          bg="blue"
          color="white"
          px={4}
          py={2}
          borderRadius="6px"
        >
          Add New Audiobook
        </Button>
      </Box>

      {showForm && (
        <ModalOverlay onClick={() => setShowForm(false)} >
          <ModalContent onClick={e => e.stopPropagation()}>
            <Box textAlign="right" mb={3}>
              <MdCancel onClick={() => setShowForm(false)} size={30} color="red" />
            </Box>

            <AudiobookForm onClose={() => setShowForm(false)} />
          </ModalContent>
        </ModalOverlay>
      )}

      <AudiobookList />
    </Container>
  );
};

export default Home;
