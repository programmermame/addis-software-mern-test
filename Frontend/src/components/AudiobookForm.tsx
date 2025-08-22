import React, { useState } from "react";
import type { IAudiobook } from "../types/audiobook";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";
import { addAudiobookRequest, updateAudiobookRequest } from "../features/audiobook/audiobookSlice";

import { Input, Button, Box, FlexRow } from "./ui/UiComponents";


interface AudiobookFormProps {
  existingAudiobook?: IAudiobook | null;
  onClose?: () => void;
}

const AudiobookForm: React.FC<AudiobookFormProps> = ({
  existingAudiobook,
  onClose,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState(existingAudiobook?.title || "");
  const [narrator, setNarrator] = useState(existingAudiobook?.narrator || "");
  const [series, setSeries] = useState(existingAudiobook?.series || "");
  const [category, setCategory] = useState(existingAudiobook?.category || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const audiobookData: Partial<IAudiobook> = {
      title,
      narrator,
      series,
      category,
    };

    if (existingAudiobook?._id) {
      dispatch(
        updateAudiobookRequest({
          id: existingAudiobook._id,
          data: audiobookData,
        })
      );
    } else {
      dispatch(addAudiobookRequest(audiobookData));
    }

    if (!existingAudiobook) {
      setTitle("");
      setNarrator("");
      setSeries("");
      setCategory("");
    }

    onClose?.();
  };

  return (
    <Box as="form" onSubmit={handleSubmit} mb={3}>
      <Box mb={3}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Box>

      <Box mb={3}>
        <Input
          type="text"
          placeholder="Narrator"
          value={narrator}
          onChange={(e) => setNarrator(e.target.value)}
          required
        />
      </Box>

      <Box mb={3}>
        <Input
          type="text"
          placeholder="Series"
          value={series}
          onChange={(e) => setSeries(e.target.value)}
          required
        />
      </Box>

      <Box mb={3}>
        <Input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </Box>

      <FlexRow>
        <Button
          type="submit"
          bg={existingAudiobook ? "orange" : "blue"}
          color="white"
          px={3}
          py={2}
        >
          {existingAudiobook ? "Update" : "Add"}
        </Button>

        {onClose && (
          <Button
            type="button"
            bg="gray"
            color="white"
            px={3}
            py={2}
            onClick={onClose}
          >
            Cancel
          </Button>
        )}
      </FlexRow>
    </Box>
  );
};

export default AudiobookForm;
