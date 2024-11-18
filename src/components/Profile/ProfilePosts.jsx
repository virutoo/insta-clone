import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <Grid
      templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <ProfilePost img="https://rukminim2.flixcart.com/image/850/1000/l2dmky80/poster/a/q/t/small-poster-batman-comic-sl1021-wall-poster-13x19-inches-matte-original-imagdqezg54numtv.jpeg?q=90&crop=false" />
          <ProfilePost img="https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510024_960_720.png" />
          <ProfilePost img="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2014/03/Nuevos-detalles-de-Batman-Arkham-Knight.jpg" />
          <ProfilePost img="https://image.api.playstation.com/vulcan/ap/rnd/202010/2822/1AecTg1xPBgt4dEFi5t2dvgx.png" />
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;
