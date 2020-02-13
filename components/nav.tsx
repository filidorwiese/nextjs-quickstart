import React from 'react';
import Link from 'next/link';
import { Flex, Box } from 'reflexbox';

function Nav() {
    return (
        <Flex>
            <Box pr={10}>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </Box>
            <Box pr={10}>
                <Link href='/second-page'>
                    <a>Second Page</a>
                </Link>
            </Box>
        </Flex>
    );
}

export default Nav;
