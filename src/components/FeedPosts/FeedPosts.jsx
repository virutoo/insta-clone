import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}></Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost
            img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14bb33f0-869c-4ad7-97fd-7be2f3fe9b51/dbtoqty-42fc1996-638c-4586-b079-821a9e6ba255.jpg/v1/fill/w_848,h_943,q_70,strp/daredevil_profile_picture_by_lumoi_dbtoqty-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzOSIsInBhdGgiOiJcL2ZcLzE0YmIzM2YwLTg2OWMtNGFkNy05N2ZkLTdiZTJmM2ZlOWI1MVwvZGJ0b3F0eS00MmZjMTk5Ni02MzhjLTQ1ODYtYjA3OS04MjFhOWU2YmEyNTUuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1b0AQNfKZLZKesCWXK4hiuk_sY6axEgFDPiRnDiBy0c"
            username="daredevil"
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQCdHee1RgKLbaxKkEq0wegBpf5smDvOuHQ&s"
          />
          <FeedPost
            img="https://cdn.pixabay.com/photo/2023/06/29/02/54/hulk-8095537_1280.png"
            username="hulk"
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlqgsk10ZtHIwb_9LssCjhqxzIqWK3IdD-0A&s"
          />
          <FeedPost
            img="https://i.pinimg.com/originals/71/df/92/71df9295429fe131e89b24d5c992f512.jpg"
            username="spiderman"
            avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmAuaUGU5RiQD65Gkt4J4H1OQP7Ong3DsGA&s"
          />
          <FeedPost
            img="https://pics.craiyon.com/2023-07-16/340ce8c2faad4392a269cd8ee168d4e7.webp"
            username="deadpool"
            avatar="https://pbs.twimg.com/profile_images/677046728004993024/JCHb2LeP_400x400.jpg"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
