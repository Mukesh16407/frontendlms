import {
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';


  
 
  
  export const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('');
   
  
    const addToPlaylistHandler = async couseId => {
     
    };
  
    const categories = [
      'Web development',
      'Artificial Intellegence',
      'Data Structure & Algorithm',
      'App Development',
      'Data Science',
      'Game Development',
    ];
  
   
  
   
  
    return (
      <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
        <Heading children="All Courses" m={'8'} />
  
        <Input
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="Search a course..."
          type={'text'}
          focusBorderColor="yellow.500"
        />
  
        <HStack
          overflowX={'auto'}
          paddingY="8"
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
        </HStack>
  
       
        
      </Container>
    );
  };
  

  