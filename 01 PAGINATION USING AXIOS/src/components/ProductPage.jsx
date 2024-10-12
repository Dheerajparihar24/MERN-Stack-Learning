import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";

export const ProductPage = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const [limit] = useState(10);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
      )
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <Box>
        {posts.map((post, i) => {
          return (
            <Card key={i} align="center" width="60%" m="auto" my={5}>
              <CardHeader>
                <Heading size="md"> {post.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{post.body}</Text>
              </CardBody>
              <CardFooter>
                <Heading size="md">{post.id}</Heading>
              </CardFooter>
            </Card>
          );
        })}
      </Box>

      {/* Pagination Controls */}
      <Flex justifyContent="center" mt={4} align="center">
        <Button onClick={handlePreviousPage} isDisabled={page === 1} mr={2}>
          Previous
        </Button>
        <Text color="white"> {page}</Text>
        <Button onClick={handleNextPage} ml={2} isDisabled={page === 10}>
          Next
        </Button>
      </Flex>
    </>
  );
};
