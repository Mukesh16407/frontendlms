
import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import introVideo from '../assets/videos/about.mp4';
import termsAndCondition from '../assets/docs/termsAndCondition';

const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar
        src="data:image/jpeg;base64,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"
        boxSize={['40', '48']}
      />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>

    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Mukesh Kumar" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`Hi, I am a full-stack developer and a teacher.
      Our mission is to provide quality content at reasonable price.`}
      />
    </VStack>
  </Stack>
);

const VideoPlayer = () => (
  <Box >
    <video
      autoPlay
      loop
      muted
      controls
      controlsList="nodownload nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      src={introVideo}
    ></video>
  </Box>
);

const TandC = ({ termsAndCondition }) => (
  <Box>
    <Heading
      size={'md'}
      children="Terms & Condition"
      textAlign={['center', 'left']}
      my="4"
    />

    <Box h="sm" p="4" overflowY={'scroll'}>
      <Text
        fontFamily={'heading'}
        letterSpacing={'widest'}
        textAlign={['center', 'left']}
      >
        {termsAndCondition}
      </Text>
      <Heading
        my="4"
        size={'xs'}
        children="Refund only applicable for cancellation within 7 days."
      />
    </Box>
  </Box>
);
export const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center">
        <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>

        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>

      <VideoPlayer />

      <TandC termsAndCondition={termsAndCondition} />

      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          children={'Payment is secured by Razorpay'}
        
        />
      </HStack>
    </Container>
  );
};


