import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import {
  fetchAudiobooksRequest,
  deleteAudiobookRequest
} from "../features/audiobook/audiobookSlice";
import type { IAudiobook } from "../types/audiobook";
import AudiobookForm from "./AudiobookForm";

import {
  Container,
  FlexRow,
  Card,
  Input,
  Select,
  Box
} from "./ui/UiComponents";

import { MdDeleteSweep } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";



const AudiobookList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { audiobooks, loading, error } = useSelector(
    (state: RootState) => state.audiobook
  );

  const [editing, setEditing] = useState<IAudiobook | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    dispatch(fetchAudiobooksRequest());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this audiobook?")) {
      dispatch(deleteAudiobookRequest(id));
    }
  };

  const filteredAudiobooks = audiobooks.filter((a) =>
    (a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.narrator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.series.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterCategory ? a.category === filterCategory : true)
  );

  const categories = Array.from(new Set(audiobooks.map((a) => a.category)));

  return (
    <Container>
      <FlexRow mb={4} >
        <Input
          type="text"
          placeholder="Search by title, narrator or series"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          width="300px"
          bg="white"
        />
        <Select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          width="200px"
          bg="white"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </FlexRow>

      {loading && <Box mb={3}>Loading...</Box>}
      {error && <Box color="red" mb={3}>{error}</Box>}

      {filteredAudiobooks.map((a) => (
        <Card key={a._id} mb={3}>
          {editing?._id === a._id ? (
            <AudiobookForm existingAudiobook={editing} onClose={() => setEditing(null)} />
          ) : (
            <Container >
              <Box as="h3" fontSize="20px" fontWeight="bold" mb={2} color={"blue"}>
                {a.title}
              </Box>
              <Box mb={1}>
                <strong>Narrator:</strong> {a.narrator}
              </Box>
              <Box mb={1}>
                <strong>Series:</strong> {a.series}
              </Box>
              <Box mb={2}>
                <strong>Category:</strong> {a.category}
              </Box>

              <FlexRow>
                <RiEditCircleFill onClick={() => setEditing(a)} size={30} color="orange" />
                <MdDeleteSweep onClick={() => handleDelete(a._id!)} size={30} color="red" />
              </FlexRow>
            </Container>
          )}
        </Card>
      ))}
    </Container>
  );
};

export default AudiobookList;
