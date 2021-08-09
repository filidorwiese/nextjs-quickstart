import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Flex, Box } from 'reflexbox';
import Nav from '../components/nav';
import { MaxWidth } from '../components/max-width';

const SomeBox = styled(Box)`
    border: 0px solid lime;
`;

const Button = styled.button`
    border: 0;
    padding: 5px;
`;

const Home = () => (
    <>
        <Head>
            <title>Home</title>
        </Head>

        <MaxWidth px={50} py={50}>
            <Nav />

            <Flex>
                <Box>
                    <h1>Hello World</h1>
                </Box>
            </Flex>

            <Flex flexWrap='wrap'>
                <Box width={[1, 1 / 2]}>
                    Content Left
                </Box>
                <Box width={[1, 1 / 2]}>
                    Content Right
                </Box>
            </Flex>
        </MaxWidth>
    </>
);

export default Home;
