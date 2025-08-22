import Guide from "./ui/Guide"

const Test = () => {
  return (
    <Guide
      bg="tomato"
      color="white"
      p={3}
      m={2}
      display="flex"
      justifyContent="center"
      borderRadius="8px"
      boxShadow="md"
      fontSize="16px"
      position="relative"
    >
      <h1>I am a fully styled-system-powered Box!</h1>
    </Guide>
  )
}

export default Test